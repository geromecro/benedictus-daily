-- =============================================
-- Benedictus Daily - pg_cron Jobs
-- =============================================
-- IMPORTANTE: Primero habilitar pg_cron en Supabase
-- Dashboard → Database → Extensions → buscar "pg_cron" → Enable
--
-- Luego ejecutar este script en el SQL Editor

-- Función para enviar notificaciones programadas
-- Esta función se ejecuta cada minuto y envía las notificaciones pendientes
CREATE OR REPLACE FUNCTION send_due_notifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_time_str TEXT;
  current_date_val DATE;
  r RECORD;
BEGIN
  -- Obtener hora actual en formato HH:MM (usar timezone de Argentina)
  current_time_str := to_char(now() AT TIME ZONE 'America/Argentina/Buenos_Aires', 'HH24:MI');
  current_date_val := (now() AT TIME ZONE 'America/Argentina/Buenos_Aires')::date;

  -- Buscar notificaciones que deben enviarse ahora
  -- y que no se han enviado hoy
  FOR r IN
    SELECT
      ns.id as schedule_id,
      ns.device_id,
      ns.notification_type,
      ps.endpoint,
      ps.auth_key,
      ps.p256dh_key
    FROM notification_schedule ns
    JOIN push_subscriptions ps ON ns.device_id = ps.device_id
    WHERE ps.is_active = true
      AND ns.scheduled_time::text = current_time_str
      AND (ns.last_sent IS NULL OR ns.last_sent < current_date_val)
  LOOP
    -- Llamar a la Edge Function para enviar el push
    -- Nota: Esta llamada se hace via net.http_post desde pg_net extension
    -- o alternativamente desde un trigger que invoque la Edge Function

    -- Por ahora, solo actualizamos last_sent
    -- La Edge Function se invocará externamente (ver opción con pg_net abajo)
    UPDATE notification_schedule
    SET last_sent = current_date_val
    WHERE id = r.schedule_id;

    -- Log para debugging
    RAISE NOTICE 'Notification scheduled: % for device %', r.notification_type, r.device_id;
  END LOOP;
END;
$$;

-- =============================================
-- OPCIÓN A: Usar pg_cron con pg_net (recomendado)
-- =============================================
-- Si tienes pg_net habilitado, puedes llamar a la Edge Function directamente

-- Primero habilitar pg_net:
-- Dashboard → Database → Extensions → buscar "pg_net" → Enable

-- Función que llama a la Edge Function via HTTP
CREATE OR REPLACE FUNCTION call_send_push_function(
  p_device_id TEXT,
  p_notification_type TEXT
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  supabase_url TEXT;
  service_key TEXT;
BEGIN
  -- Obtener configuración (almacenar en vault o como secrets)
  -- Por seguridad, estos valores deberían estar en Supabase Vault
  supabase_url := current_setting('app.supabase_url', true);
  service_key := current_setting('app.service_role_key', true);

  -- Si pg_net está disponible, hacer la llamada HTTP
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_net') THEN
    PERFORM net.http_post(
      url := supabase_url || '/functions/v1/send-push',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_key
      ),
      body := jsonb_build_object(
        'device_id', p_device_id,
        'notification_type', p_notification_type
      )
    );
  END IF;
END;
$$;

-- Función mejorada que usa pg_net
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
    -- Llamar a la Edge Function
    PERFORM call_send_push_function(r.device_id, r.notification_type);

    -- Actualizar last_sent
    UPDATE notification_schedule
    SET last_sent = current_date_val
    WHERE id = r.schedule_id;
  END LOOP;
END;
$$;

-- =============================================
-- Programar el job con pg_cron
-- =============================================
-- Ejecutar cada minuto
-- Nota: pg_cron usa UTC, ajustar según necesidad

-- Primero, eliminar job existente si existe
SELECT cron.unschedule('benedictus-prayer-reminders')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'benedictus-prayer-reminders'
);

-- Crear el job
SELECT cron.schedule(
  'benedictus-prayer-reminders',  -- nombre del job
  '* * * * *',                     -- cada minuto
  $$SELECT send_due_notifications_v2()$$
);

-- =============================================
-- OPCIÓN B: Usar solo el job básico (sin pg_net)
-- =============================================
-- Si no tienes pg_net, puedes usar un servicio externo
-- que consulte las notificaciones pendientes cada minuto

-- Vista de notificaciones pendientes para consulta externa
CREATE OR REPLACE VIEW pending_notifications AS
SELECT
  ns.device_id,
  ns.notification_type,
  ns.scheduled_time,
  ps.endpoint,
  ps.auth_key,
  ps.p256dh_key
FROM notification_schedule ns
JOIN push_subscriptions ps ON ns.device_id = ps.device_id
WHERE ps.is_active = true
  AND ns.scheduled_time::text = to_char(now() AT TIME ZONE 'America/Argentina/Buenos_Aires', 'HH24:MI')
  AND (ns.last_sent IS NULL OR ns.last_sent < (now() AT TIME ZONE 'America/Argentina/Buenos_Aires')::date);

-- Permitir acceso a la vista desde el service role
GRANT SELECT ON pending_notifications TO service_role;

-- =============================================
-- Verificar configuración
-- =============================================

-- Ver jobs programados
-- SELECT * FROM cron.job;

-- Ver historial de ejecución
-- SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 10;

-- Test manual de la función
-- SELECT send_due_notifications();
