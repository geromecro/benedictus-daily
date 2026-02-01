-- =============================================
-- Fix: Mover actualización de last_sent a Edge Function
-- =============================================
-- Problema: La función SQL actualizaba last_sent ANTES de confirmar
-- que la Edge Function envió exitosamente la notificación.
-- Si la Edge Function fallaba, el mensaje se perdía silenciosamente.
--
-- Solución: Ahora la Edge Function actualiza last_sent DESPUÉS de
-- confirmar el envío exitoso. La función SQL pasa el schedule_id
-- para que la Edge Function pueda actualizar el registro correcto.

-- Actualizar la función call_send_push_function para incluir schedule_id
CREATE OR REPLACE FUNCTION call_send_push_function(
  p_device_id TEXT,
  p_notification_type TEXT,
  p_schedule_id BIGINT DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  supabase_url TEXT;
  service_key TEXT;
BEGIN
  supabase_url := current_setting('app.supabase_url', true);
  service_key := current_setting('app.service_role_key', true);

  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_net') THEN
    PERFORM net.http_post(
      url := supabase_url || '/functions/v1/send-push',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_key
      ),
      body := jsonb_build_object(
        'device_id', p_device_id,
        'notification_type', p_notification_type,
        'schedule_id', p_schedule_id  -- Edge Function actualizará last_sent
      )
    );
  END IF;
END;
$$;

-- Función mejorada que NO actualiza last_sent (la Edge Function lo hace)
CREATE OR REPLACE FUNCTION send_due_notifications_v2()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_time_str TEXT;
  current_date_val DATE;
  r RECORD;
BEGIN
  current_time_str := to_char(now() AT TIME ZONE 'America/Argentina/Buenos_Aires', 'HH24:MI');
  current_date_val := (now() AT TIME ZONE 'America/Argentina/Buenos_Aires')::date;

  FOR r IN
    SELECT
      ns.id as schedule_id,
      ns.device_id,
      ns.notification_type
    FROM notification_schedule ns
    JOIN push_subscriptions ps ON ns.device_id = ps.device_id
    WHERE ps.is_active = true
      AND ns.scheduled_time::text = current_time_str
      AND (ns.last_sent IS NULL OR ns.last_sent < current_date_val)
  LOOP
    -- Llamar a la Edge Function con el schedule_id
    -- La Edge Function actualizará last_sent DESPUÉS de enviar exitosamente
    PERFORM call_send_push_function(r.device_id, r.notification_type, r.schedule_id);

    -- NO actualizamos last_sent aquí - la Edge Function lo hace
    RAISE NOTICE 'Push request sent for schedule % device % type %', r.schedule_id, r.device_id, r.notification_type;
  END LOOP;
END;
$$;

-- También actualizar la función v1 por consistencia
CREATE OR REPLACE FUNCTION send_due_notifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Redirigir a v2 para mantener compatibilidad
  PERFORM send_due_notifications_v2();
END;
$$;
