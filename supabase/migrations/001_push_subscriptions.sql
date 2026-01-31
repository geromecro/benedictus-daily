-- =============================================
-- Benedictus Daily - Push Notifications Schema
-- =============================================
-- Ejecutar este script en el SQL Editor de Supabase
-- Dashboard → SQL Editor → New Query

-- Tabla principal de subscriptions
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL UNIQUE,
  endpoint TEXT NOT NULL,
  auth_key TEXT NOT NULL,
  p256dh_key TEXT NOT NULL,
  laudes_time TEXT DEFAULT '07:00',
  completas_time TEXT DEFAULT '21:30',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Índices para búsquedas eficientes
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_device_id ON push_subscriptions(device_id);
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_active ON push_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_laudes ON push_subscriptions(laudes_time) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_completas ON push_subscriptions(completas_time) WHERE is_active = true;

-- Tabla de schedules de notificación
CREATE TABLE IF NOT EXISTS notification_schedule (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_id TEXT NOT NULL REFERENCES push_subscriptions(device_id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL CHECK (notification_type IN ('laudes', 'completas')),
  scheduled_time TIME NOT NULL,
  last_sent DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(device_id, notification_type)
);

-- Índice para buscar notificaciones por hora
CREATE INDEX IF NOT EXISTS idx_notification_schedule_time ON notification_schedule(scheduled_time);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at
DROP TRIGGER IF EXISTS update_push_subscriptions_updated_at ON push_subscriptions;
CREATE TRIGGER update_push_subscriptions_updated_at
  BEFORE UPDATE ON push_subscriptions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Políticas RLS (Row Level Security)
-- Por ahora, permitimos acceso desde el service role key únicamente
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_schedule ENABLE ROW LEVEL SECURITY;

-- Política para que el service role pueda hacer todo
CREATE POLICY "Service role full access on push_subscriptions" ON push_subscriptions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role full access on notification_schedule" ON notification_schedule
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Comentarios para documentación
COMMENT ON TABLE push_subscriptions IS 'Almacena las subscriptions de Web Push para notificaciones';
COMMENT ON COLUMN push_subscriptions.device_id IS 'ID único del dispositivo generado en el cliente';
COMMENT ON COLUMN push_subscriptions.endpoint IS 'URL del push service (Google/Apple FCM)';
COMMENT ON COLUMN push_subscriptions.auth_key IS 'Clave de autenticación de la subscription';
COMMENT ON COLUMN push_subscriptions.p256dh_key IS 'Clave pública ECDH de la subscription';
COMMENT ON COLUMN push_subscriptions.laudes_time IS 'Hora de recordatorio de Laudes (HH:MM)';
COMMENT ON COLUMN push_subscriptions.completas_time IS 'Hora de recordatorio de Completas (HH:MM)';

COMMENT ON TABLE notification_schedule IS 'Schedule de notificaciones por dispositivo';
COMMENT ON COLUMN notification_schedule.notification_type IS 'Tipo: laudes o completas';
COMMENT ON COLUMN notification_schedule.last_sent IS 'Fecha de último envío para evitar duplicados';
