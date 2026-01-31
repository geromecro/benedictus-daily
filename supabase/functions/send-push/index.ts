// Supabase Edge Function para enviar notificaciones push
// Se invoca desde pg_cron o manualmente para enviar recordatorios

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Tipos
interface PushSubscription {
  device_id: string;
  endpoint: string;
  auth_key: string;
  p256dh_key: string;
  is_active: boolean;
}

interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: {
    url?: string;
    type?: string;
  };
}

interface RequestBody {
  device_id?: string;
  notification_type?: "laudes" | "completas" | "test";
  custom_payload?: NotificationPayload;
}

// Configuración VAPID
const VAPID_SUBJECT = Deno.env.get("VAPID_SUBJECT") || "mailto:admin@benedictus.app";
const VAPID_PUBLIC_KEY = Deno.env.get("VAPID_PUBLIC_KEY")!;
const VAPID_PRIVATE_KEY = Deno.env.get("VAPID_PRIVATE_KEY")!;

// Mensajes predefinidos
const NOTIFICATION_MESSAGES: Record<string, NotificationPayload> = {
  laudes: {
    title: "Buenos días",
    body: "Laudes te espera. Comienza el día con oración.",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    tag: "laudes-reminder",
    data: {
      url: "/lectura",
      type: "laudes",
    },
  },
  completas: {
    title: "Buenas noches",
    body: "Termina el día con Completas.",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    tag: "completas-reminder",
    data: {
      url: "/",
      type: "completas",
    },
  },
  test: {
    title: "Notificación de prueba",
    body: "Las notificaciones de Benedictus están funcionando.",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/icon-72x72.png",
    tag: "test-notification",
    data: {
      url: "/configuracion",
      type: "test",
    },
  },
};

// Función para enviar una notificación push usando Web Push Protocol
async function sendWebPush(
  subscription: PushSubscription,
  payload: NotificationPayload
): Promise<boolean> {
  try {
    // Importar la librería web-push para Deno
    const webPush = await import("https://esm.sh/web-push@3.6.6");

    webPush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

    const pushSubscription = {
      endpoint: subscription.endpoint,
      keys: {
        auth: subscription.auth_key,
        p256dh: subscription.p256dh_key,
      },
    };

    await webPush.sendNotification(
      pushSubscription,
      JSON.stringify(payload)
    );

    console.log(`Push enviado a ${subscription.device_id}`);
    return true;
  } catch (error) {
    console.error(`Error enviando push a ${subscription.device_id}:`, error);

    // Si el endpoint ya no es válido (410 Gone), marcar como inactivo
    if (error.statusCode === 410 || error.statusCode === 404) {
      console.log(`Subscription inválida, marcando como inactiva: ${subscription.device_id}`);
      // Nota: La actualización de la BD se hace desde el caller
    }

    return false;
  }
}

serve(async (req: Request) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: RequestBody = await req.json();
    const { device_id, notification_type, custom_payload } = body;

    let subscriptions: PushSubscription[] = [];
    let payload: NotificationPayload;

    // Determinar el payload de la notificación
    if (custom_payload) {
      payload = custom_payload;
    } else if (notification_type && NOTIFICATION_MESSAGES[notification_type]) {
      payload = NOTIFICATION_MESSAGES[notification_type];
    } else {
      return new Response(
        JSON.stringify({ error: "notification_type o custom_payload requerido" }),
        { status: 400, headers }
      );
    }

    // Obtener subscriptions
    if (device_id) {
      // Enviar a un dispositivo específico
      const { data, error } = await supabase
        .from("push_subscriptions")
        .select("*")
        .eq("device_id", device_id)
        .eq("is_active", true)
        .single();

      if (error || !data) {
        return new Response(
          JSON.stringify({ error: "Subscription no encontrada" }),
          { status: 404, headers }
        );
      }

      subscriptions = [data];
    } else {
      // Enviar a todos los dispositivos activos
      const { data, error } = await supabase
        .from("push_subscriptions")
        .select("*")
        .eq("is_active", true);

      if (error) {
        return new Response(
          JSON.stringify({ error: "Error obteniendo subscriptions" }),
          { status: 500, headers }
        );
      }

      subscriptions = data || [];
    }

    // Enviar notificaciones
    const results = await Promise.all(
      subscriptions.map(async (sub) => {
        const success = await sendWebPush(sub, payload);

        // Si falló por subscription inválida, marcar como inactiva
        if (!success) {
          await supabase
            .from("push_subscriptions")
            .update({ is_active: false })
            .eq("device_id", sub.device_id);
        }

        return { device_id: sub.device_id, success };
      })
    );

    const successCount = results.filter((r) => r.success).length;
    const failedCount = results.filter((r) => !r.success).length;

    return new Response(
      JSON.stringify({
        success: true,
        sent: successCount,
        failed: failedCount,
        results,
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error en send-push:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers }
    );
  }
});
