-- =============================================
-- Benedictus Daily - Telegram Cron Jobs
-- =============================================
-- Actualiza el cron job para incluir notificaciones de Telegram
--
-- IMPORTANTE: Este script asume que:
-- 1. pg_cron está habilitado
-- 2. pg_net está habilitado
-- 3. telegram_config tiene el group_chat_id configurado
-- 4. Los secrets TELEGRAM_BOT_TOKEN y TELEGRAM_GROUP_CHAT_ID están configurados

-- =============================================
-- Función principal que envía notificaciones a Telegram
-- =============================================
CREATE OR REPLACE FUNCTION send_telegram_notifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_time_str TEXT;
  current_date_val DATE;
  config RECORD;
  dia_actual INTEGER;
BEGIN
  -- Obtener hora actual en Argentina
  current_time_str := to_char(now() AT TIME ZONE 'America/Argentina/Buenos_Aires', 'HH24:MI');
  current_date_val := (now() AT TIME ZONE 'America/Argentina/Buenos_Aires')::date;

  -- Obtener configuración de Telegram
  SELECT * INTO config FROM telegram_config LIMIT 1;

  -- Si no hay configuración o chat_id es 0, salir
  IF config IS NULL OR config.group_chat_id = 0 THEN
    RAISE NOTICE 'Telegram no configurado (chat_id = 0)';
    RETURN;
  END IF;

  -- Calcular día actual del desafío (1-64)
  -- Inicio: 2026-02-01, Fin: 2026-04-05
  dia_actual := current_date_val - '2026-02-01'::date + 1;

  -- Si estamos fuera del período del desafío, no enviar
  IF dia_actual < 1 OR dia_actual > 64 THEN
    RAISE NOTICE 'Fuera del período del desafío (día %)', dia_actual;
    RETURN;
  END IF;

  -- Verificar LAUDES
  IF config.laudes_enabled
     AND current_time_str = config.laudes_time
     AND (config.laudes_last_sent IS NULL OR config.laudes_last_sent < current_date_val)
  THEN
    RAISE NOTICE 'Enviando Laudes a Telegram';
    PERFORM call_telegram_function('laudes');

    UPDATE telegram_config SET laudes_last_sent = current_date_val WHERE id = config.id;
  END IF;

  -- Verificar LECTIO (se envía antes de Completas)
  IF config.lectio_enabled
     AND current_time_str = config.lectio_time
     AND (config.lectio_last_sent IS NULL OR config.lectio_last_sent < current_date_val)
  THEN
    RAISE NOTICE 'Enviando Lectio a Telegram (día %)', dia_actual;
    PERFORM call_telegram_function('lectio', dia_actual);

    UPDATE telegram_config SET lectio_last_sent = current_date_val WHERE id = config.id;
  END IF;

  -- Verificar COMPLETAS
  IF config.completas_enabled
     AND current_time_str = config.completas_time
     AND (config.completas_last_sent IS NULL OR config.completas_last_sent < current_date_val)
  THEN
    RAISE NOTICE 'Enviando Completas a Telegram';
    PERFORM call_telegram_function('completas');

    UPDATE telegram_config SET completas_last_sent = current_date_val WHERE id = config.id;
  END IF;

END;
$$;

-- =============================================
-- Función combinada: Push + Telegram
-- =============================================
-- Actualiza send_due_notifications_v2 para incluir Telegram
CREATE OR REPLACE FUNCTION send_all_notifications()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Enviar notificaciones Push (existente)
  PERFORM send_due_notifications_v2();

  -- Enviar notificaciones Telegram (nuevo)
  PERFORM send_telegram_notifications();
END;
$$;

-- =============================================
-- Actualizar el cron job para usar la función combinada
-- =============================================

-- Eliminar job anterior si existe
SELECT cron.unschedule('benedictus-prayer-reminders')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'benedictus-prayer-reminders'
);

-- Crear nuevo job con función combinada
SELECT cron.schedule(
  'benedictus-prayer-reminders',  -- nombre del job
  '* * * * *',                     -- cada minuto
  $$SELECT send_all_notifications()$$
);

-- =============================================
-- Función para test manual de Telegram
-- =============================================
CREATE OR REPLACE FUNCTION test_telegram_notification(
  p_type TEXT DEFAULT 'test'
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  config RECORD;
BEGIN
  SELECT * INTO config FROM telegram_config LIMIT 1;

  IF config IS NULL OR config.group_chat_id = 0 THEN
    RETURN 'ERROR: Telegram no configurado. Actualiza telegram_config.group_chat_id';
  END IF;

  PERFORM call_telegram_function(p_type);

  RETURN 'Mensaje de tipo "' || p_type || '" enviado a Telegram';
END;
$$;

-- =============================================
-- Verificación
-- =============================================
-- Ejecutar después de configurar:
--
-- Ver configuración actual:
-- SELECT * FROM telegram_notification_status;
--
-- Test manual:
-- SELECT test_telegram_notification('test');
-- SELECT test_telegram_notification('laudes');
-- SELECT test_telegram_notification('completas');
--
-- Ver jobs programados:
-- SELECT * FROM cron.job;
--
-- Ver historial de ejecución:
-- SELECT * FROM cron.job_run_details ORDER BY start_time DESC LIMIT 10;
