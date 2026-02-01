-- =============================================
-- Benedictus Daily - Telegram Configuration
-- =============================================
-- Configuración para el bot de Telegram del grupo del desafío
--
-- ANTES DE EJECUTAR:
-- 1. Crear grupo en Telegram
-- 2. Agregar el bot @Benedictus_bot como administrador
-- 3. Obtener el CHAT_ID del grupo (ver instrucciones abajo)
-- 4. Configurar secrets en Supabase Dashboard:
--    - TELEGRAM_BOT_TOKEN
--    - TELEGRAM_GROUP_CHAT_ID

-- Tabla de configuración de Telegram
CREATE TABLE IF NOT EXISTS telegram_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_chat_id BIGINT NOT NULL,
  group_name TEXT DEFAULT 'Benedictus Daily',
  group_invite_link TEXT,

  -- Tipos de notificaciones habilitadas
  laudes_enabled BOOLEAN DEFAULT true,
  completas_enabled BOOLEAN DEFAULT true,
  lectio_enabled BOOLEAN DEFAULT true,

  -- Horarios (hora Argentina, formato HH:MM)
  laudes_time TEXT DEFAULT '07:00',
  completas_time TEXT DEFAULT '21:30',
  lectio_time TEXT DEFAULT '21:00',

  -- Control de envíos
  laudes_last_sent DATE,
  completas_last_sent DATE,
  lectio_last_sent DATE,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_telegram_config_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER telegram_config_updated_at
  BEFORE UPDATE ON telegram_config
  FOR EACH ROW
  EXECUTE FUNCTION update_telegram_config_updated_at();

-- Insertar configuración por defecto (placeholder - actualizar con ID real)
-- El CHAT_ID se obtiene agregando @RawDataBot al grupo o usando getUpdates
INSERT INTO telegram_config (group_chat_id, group_name)
VALUES (0, 'Benedictus Daily - Desafío Cuaresma 2026')
ON CONFLICT DO NOTHING;

-- =============================================
-- Función para llamar a la Edge Function de Telegram
-- =============================================
CREATE OR REPLACE FUNCTION call_telegram_function(
  p_notification_type TEXT,
  p_dia_actual INTEGER DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  supabase_url TEXT;
  service_key TEXT;
  request_body JSONB;
BEGIN
  -- Obtener configuración
  supabase_url := current_setting('app.supabase_url', true);
  service_key := current_setting('app.service_role_key', true);

  -- Construir body del request
  IF p_dia_actual IS NOT NULL THEN
    request_body := jsonb_build_object(
      'type', p_notification_type,
      'dia_actual', p_dia_actual
    );
  ELSE
    request_body := jsonb_build_object(
      'type', p_notification_type
    );
  END IF;

  -- Si pg_net está disponible, hacer la llamada HTTP
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_net') THEN
    PERFORM net.http_post(
      url := supabase_url || '/functions/v1/send-telegram',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_key
      ),
      body := request_body
    );
  END IF;
END;
$$;

-- =============================================
-- CÓMO OBTENER EL CHAT_ID DEL GRUPO
-- =============================================
--
-- Opción 1: Usar @RawDataBot
-- 1. Crear el grupo de Telegram
-- 2. Agregar @RawDataBot al grupo
-- 3. El bot mostrará un mensaje con el chat_id (número negativo)
-- 4. Copiar el número (ej: -1001234567890)
-- 5. Remover @RawDataBot del grupo
--
-- Opción 2: Usar getUpdates
-- 1. Agregar el bot al grupo
-- 2. Enviar cualquier mensaje en el grupo
-- 3. Visitar: https://api.telegram.org/bot{TOKEN}/getUpdates
-- 4. Buscar "chat":{"id":-1001234567890,...}
-- 5. El número negativo es el CHAT_ID
--
-- Una vez tengas el CHAT_ID, actualiza la tabla:
-- UPDATE telegram_config SET group_chat_id = -1001234567890;
--
-- Y configura el secret en Supabase Dashboard:
-- Dashboard → Settings → Edge Functions → Secrets
-- TELEGRAM_GROUP_CHAT_ID = -1001234567890

-- =============================================
-- Índices y permisos
-- =============================================

-- Permitir acceso desde service role
GRANT ALL ON telegram_config TO service_role;

-- Vista para verificar estado de notificaciones Telegram
CREATE OR REPLACE VIEW telegram_notification_status AS
SELECT
  group_name,
  group_chat_id,
  laudes_enabled,
  laudes_time,
  laudes_last_sent,
  completas_enabled,
  completas_time,
  completas_last_sent,
  lectio_enabled,
  lectio_time,
  lectio_last_sent,
  updated_at
FROM telegram_config
LIMIT 1;

GRANT SELECT ON telegram_notification_status TO authenticated;
GRANT SELECT ON telegram_notification_status TO service_role;
