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
        { error: 'Error guardando subscription', details: error.message },
        { status: 500 }
      );
    }

    // También actualizar/crear los schedules de notificación
    await updateNotificationSchedules(deviceId, laudesTime, completasTime, rosarioTime, lectioTime);

    return NextResponse.json({
      success: true,
      message: 'Subscription guardada correctamente',
      data,
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
        { error: 'Error actualizando horarios', details: error.message },
        { status: 500 }
      );
    }

    // Actualizar los schedules
    await updateNotificationSchedules(deviceId, laudesTime, completasTime, rosarioTime, lectioTime);

    return NextResponse.json({
      success: true,
      message: 'Horarios actualizados',
      data,
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
        { error: 'Error desactivando subscription', details: error.message },
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
) {
  const supabase = getSupabaseAdmin();

  // Eliminar schedules existentes
  await supabase
    .from('notification_schedule')
    .delete()
    .eq('device_id', deviceId);

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

  await supabase
    .from('notification_schedule')
    .insert(schedules);
}
