import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente para uso en el frontend (usa la anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para las tablas de notificaciones push
export interface PushSubscription {
  id: string;
  device_id: string;
  endpoint: string;
  auth_key: string;
  p256dh_key: string;
  laudes_time: string;
  completas_time: string;
  is_active: boolean;
  created_at: string;
}

export interface NotificationSchedule {
  id: string;
  device_id: string;
  notification_type: 'laudes' | 'completas';
  scheduled_time: string;
  last_sent: string | null;
}
