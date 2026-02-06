import { NextRequest, NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Cliente con service role para operaciones del servidor (creado bajo demanda)
let supabaseAdmin: SupabaseClient | null = null;

function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseAdmin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error('Supabase credentials not configured');
    }

    supabaseAdmin = createClient(url, key);
  }
  return supabaseAdmin;
}

interface SubscribeRequest {
  deviceId: string;
  subscription: PushSubscriptionJSON;
  laudesTime: string;
  completasTime: string;
  rosarioTime?: string;
  lectioTime?: string;
}

interface UpdateTimesRequest {
  deviceId: string;
  laudesTime: string;
  completasTime: string;
  rosarioTime?: string;
  lectioTime?: string;
}

interface DeleteRequest {
  deviceId: string;
}

// Validar formato de hora HH:MM (00:00 - 23:59)
function isValidTimeFormat(time: string | undefined): boolean {
  if (!time) return true; // undefined/null es válido (significa no configurado)
  const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return regex.test(time);
}

// Validar todas las horas de una request
function validateTimes(times: { laudesTime?: string; completasTime?: string; rosarioTime?: string; lectioTime?: string }): string | null {
  const { laudesTime, completasTime, rosarioTime, lectioTime } = times;

  if (laudesTime && !isValidTimeFormat(laudesTime)) {
    return `Formato de hora inválido para Laudes: "${laudesTime}". Use formato HH:MM (ej: 07:00)`;
  }
  if (completasTime && !isValidTimeFormat(completasTime)) {
    return `Formato de hora inválido para Completas: "${completasTime}". Use formato HH:MM (ej: 21:30)`;
  }
  if (rosarioTime && !isValidTimeFormat(rosarioTime)) {
    return `Formato de hora inválido para Rosario: "${rosarioTime}". Use formato HH:MM (ej: 12:00)`;
  }
  if (lectioTime && !isValidTimeFormat(lectioTime)) {
    return `Formato de hora inválido para Lectio: "${lectioTime}". Use formato HH:MM (ej: 21:00)`;
  }

  return null; // Todas las horas son válidas
}

// POST: Crear o actualizar subscription
export async function POST(request: NextRequest) {
  try {
    const body: SubscribeRequest = await request.json();
    const { deviceId, subscription, laudesTime, completasTime, rosarioTime, lectioTime } = body;

    if (!deviceId || !subscription || !subscription.endpoint) {
      return NextResponse.json(
        { error: 'Datos incompletos' },
        { status: 400 }
      );
    }

    // Validar formato de horas
    const timeError = validateTimes({ laudesTime, completasTime, rosarioTime, lectioTime });
    if (timeError) {
      return NextResponse.json(
        { error: timeError },
        { status: 400 }
      );
    }

    // Extraer las claves de la subscription
    const authKey = subscription.keys?.auth || '';
    const p256dhKey = subscription.keys?.p256dh || '';

    // Upsert: insertar o actualizar si el device_id ya existe
    const { data, error } = await getSupabaseAdmin()
      .from('push_subscriptions')
      .upsert(
        {
          device_id: deviceId,
          endpoint: subscription.endpoint,
          auth_key: authKey,
          p256dh_key: p256dhKey,
          laudes_time: laudesTime || '07:00',
          completas_time: completasTime || '21:30',
          rosario_time: rosarioTime || '12:00',
          lectio_time: lectioTime || '21:00',
          is_active: true,
        },
        {
          onConflict: 'device_id',
        }
      )
      .select()
      .single();

    if (error) {
      console.error('Error guardando subscription:', error);
      return NextResponse.json(
        { error: 'Error guardando subscription' },
        { status: 500 }
      );
    }

    // También actualizar/crear los schedules de notificación
    const scheduleResult = await updateNotificationSchedules(deviceId, laudesTime, completasTime, rosarioTime, lectioTime);

    if (!scheduleResult.success) {
      console.error('Advertencia: Subscription guardada pero schedules fallaron:', scheduleResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Subscription guardada correctamente',
      data,
      schedulesCreated: scheduleResult.success,
    });
  } catch (error) {
    console.error('Error en POST /api/push/subscribe:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// PUT: Actualizar horarios de notificación
export async function PUT(request: NextRequest) {
  try {
    const body: UpdateTimesRequest = await request.json();
    const { deviceId, laudesTime, completasTime, rosarioTime, lectioTime } = body;

    if (!deviceId) {
      return NextResponse.json(
        { error: 'deviceId requerido' },
        { status: 400 }
      );
    }

    // Validar formato de horas
    const timeError = validateTimes({ laudesTime, completasTime, rosarioTime, lectioTime });
    if (timeError) {
      return NextResponse.json(
        { error: timeError },
        { status: 400 }
      );
    }

    const { data, error } = await getSupabaseAdmin()
      .from('push_subscriptions')
      .update({
        laudes_time: laudesTime,
        completas_time: completasTime,
        rosario_time: rosarioTime,
        lectio_time: lectioTime,
      })
      .eq('device_id', deviceId)
      .select()
      .single();

    if (error) {
      console.error('Error actualizando horarios:', error);
      return NextResponse.json(
        { error: 'Error actualizando horarios' },
        { status: 500 }
      );
    }

    // Actualizar los schedules
    const scheduleResult = await updateNotificationSchedules(deviceId, laudesTime, completasTime, rosarioTime, lectioTime);

    if (!scheduleResult.success) {
      console.error('Advertencia: Horarios actualizados pero schedules fallaron:', scheduleResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Horarios actualizados',
      data,
      schedulesCreated: scheduleResult.success,
    });
  } catch (error) {
    console.error('Error en PUT /api/push/subscribe:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// DELETE: Desactivar subscription
export async function DELETE(request: NextRequest) {
  try {
    const body: DeleteRequest = await request.json();
    const { deviceId } = body;

    if (!deviceId) {
      return NextResponse.json(
        { error: 'deviceId requerido' },
        { status: 400 }
      );
    }

    // Marcar como inactivo en lugar de eliminar (para poder reactivar)
    const { error } = await getSupabaseAdmin()
      .from('push_subscriptions')
      .update({ is_active: false })
      .eq('device_id', deviceId);

    if (error) {
      console.error('Error desactivando subscription:', error);
      return NextResponse.json(
        { error: 'Error desactivando subscription' },
        { status: 500 }
      );
    }

    // También desactivar los schedules
    await getSupabaseAdmin()
      .from('notification_schedule')
      .delete()
      .eq('device_id', deviceId);

    return NextResponse.json({
      success: true,
      message: 'Subscription desactivada',
    });
  } catch (error) {
    console.error('Error en DELETE /api/push/subscribe:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Helper: Actualizar los schedules de notificación
async function updateNotificationSchedules(
  deviceId: string,
  laudesTime: string,
  completasTime: string,
  rosarioTime?: string,
  lectioTime?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabaseAdmin();

    // Eliminar schedules existentes
    const { error: deleteError } = await supabase
      .from('notification_schedule')
      .delete()
      .eq('device_id', deviceId);

    if (deleteError) {
      console.error('Error eliminando schedules existentes:', deleteError);
      // No es crítico, continuamos
    }

    // Crear nuevos schedules
    const schedules = [
      {
        device_id: deviceId,
        notification_type: 'laudes',
        scheduled_time: laudesTime,
      },
      {
        device_id: deviceId,
        notification_type: 'completas',
        scheduled_time: completasTime,
      },
    ];

    // Agregar rosario si tiene horario configurado
    if (rosarioTime) {
      schedules.push({
        device_id: deviceId,
        notification_type: 'rosario',
        scheduled_time: rosarioTime,
      });
    }

    // Agregar lectio si tiene horario configurado
    if (lectioTime) {
      schedules.push({
        device_id: deviceId,
        notification_type: 'lectio',
        scheduled_time: lectioTime,
      });
    }

    const { error: insertError } = await supabase
      .from('notification_schedule')
      .insert(schedules);

    if (insertError) {
      console.error('Error insertando schedules:', insertError);
      return { success: false, error: insertError.message };
    }

    console.log(`Schedules creados exitosamente para dispositivo ${deviceId}:`, schedules.map(s => s.notification_type));
    return { success: true };
  } catch (error) {
    console.error('Error inesperado en updateNotificationSchedules:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Error desconocido' };
  }
}
