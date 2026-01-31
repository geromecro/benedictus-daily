// Utilidades para Web Push Notifications

/**
 * Convierte una clave VAPID en formato base64 a Uint8Array
 * Necesario para registrar la subscription con el service worker
 */
export function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray.buffer as ArrayBuffer;
}

/**
 * Genera un ID único para el dispositivo
 * Se guarda en localStorage para identificar el dispositivo
 */
export function getDeviceId(): string {
  if (typeof window === 'undefined') return '';

  let deviceId = localStorage.getItem('benedictus_device_id');
  if (!deviceId) {
    deviceId = 'device_' + crypto.randomUUID();
    localStorage.setItem('benedictus_device_id', deviceId);
  }
  return deviceId;
}

/**
 * Verifica si el navegador soporta push notifications
 */
export function checkPushSupport(): {
  supported: boolean;
  reason?: string;
} {
  if (typeof window === 'undefined') {
    return { supported: false, reason: 'No disponible en servidor' };
  }

  if (!('serviceWorker' in navigator)) {
    return { supported: false, reason: 'Service Worker no soportado' };
  }

  if (!('PushManager' in window)) {
    return { supported: false, reason: 'Push API no soportada' };
  }

  if (!('Notification' in window)) {
    return { supported: false, reason: 'Notifications API no soportada' };
  }

  return { supported: true };
}

/**
 * Detecta si el usuario está en iOS y si la app está instalada
 */
export function getIOSStatus(): {
  isIOS: boolean;
  isStandalone: boolean;
  canReceivePush: boolean;
} {
  if (typeof window === 'undefined') {
    return { isIOS: false, isStandalone: false, canReceivePush: false };
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !('MSStream' in window);

  const isStandalone =
    ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true) ||
    window.matchMedia('(display-mode: standalone)').matches;

  // iOS puede recibir push solo si está en standalone mode (agregado al Home Screen)
  // y el navegador es Safari 16.4+
  const canReceivePush = !isIOS || (isIOS && isStandalone);

  return { isIOS, isStandalone, canReceivePush };
}

/**
 * Solicita permiso para notificaciones
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    throw new Error('Notificaciones no soportadas');
  }

  const permission = await Notification.requestPermission();
  return permission;
}

/**
 * Obtiene el estado actual del permiso de notificaciones
 */
export function getNotificationPermission(): NotificationPermission | 'unsupported' {
  if (!('Notification' in window)) {
    return 'unsupported';
  }
  return Notification.permission;
}

/**
 * Suscribe al usuario a push notifications
 * Retorna la PushSubscription para guardarla en el backend
 */
export async function subscribeToPush(): Promise<PushSubscriptionJSON | null> {
  const { supported, reason } = checkPushSupport();
  if (!supported) {
    console.error('Push no soportado:', reason);
    return null;
  }

  const { canReceivePush, isIOS, isStandalone } = getIOSStatus();
  if (!canReceivePush) {
    if (isIOS && !isStandalone) {
      throw new Error('iOS requiere agregar la app a la pantalla de inicio');
    }
    return null;
  }

  // Solicitar permiso si no lo tenemos
  const permission = await requestNotificationPermission();
  if (permission !== 'granted') {
    throw new Error('Permiso de notificaciones denegado');
  }

  // Obtener el service worker registration
  const registration = await navigator.serviceWorker.ready;

  // Verificar si ya tenemos una subscription
  let subscription = await registration.pushManager.getSubscription();

  // Si no hay subscription, crear una nueva
  if (!subscription) {
    const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!vapidPublicKey) {
      throw new Error('VAPID public key no configurada');
    }

    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
    });
  }

  return subscription.toJSON();
}

/**
 * Cancela la suscripción a push notifications
 */
export async function unsubscribeFromPush(): Promise<boolean> {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();

  if (subscription) {
    return await subscription.unsubscribe();
  }

  return true;
}

/**
 * Verifica si el usuario está actualmente suscrito
 */
export async function isSubscribed(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) return false;

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    return subscription !== null;
  } catch {
    return false;
  }
}

/**
 * Guarda la subscription en el backend (Supabase)
 */
export async function saveSubscriptionToBackend(
  subscription: PushSubscriptionJSON,
  laudesTime: string,
  completasTime: string,
  rosarioTime?: string,
  lectioTime?: string
): Promise<boolean> {
  try {
    const response = await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceId: getDeviceId(),
        subscription,
        laudesTime,
        completasTime,
        rosarioTime,
        lectioTime,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error guardando subscription');
    }

    return true;
  } catch (error) {
    console.error('Error guardando subscription:', error);
    return false;
  }
}

/**
 * Elimina la subscription del backend
 */
export async function removeSubscriptionFromBackend(): Promise<boolean> {
  try {
    const response = await fetch('/api/push/subscribe', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceId: getDeviceId(),
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error eliminando subscription:', error);
    return false;
  }
}

/**
 * Actualiza los horarios de notificación
 */
export async function updateNotificationTimes(
  laudesTime: string,
  completasTime: string,
  rosarioTime?: string,
  lectioTime?: string
): Promise<boolean> {
  try {
    const response = await fetch('/api/push/subscribe', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceId: getDeviceId(),
        laudesTime,
        completasTime,
        rosarioTime,
        lectioTime,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error actualizando horarios:', error);
    return false;
  }
}
