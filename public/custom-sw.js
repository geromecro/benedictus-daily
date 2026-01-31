// Benedictus Daily - Custom Service Worker para Push Notifications
// Este archivo maneja las notificaciones push incluso cuando la app está cerrada

// Escuchar eventos push (cuando llega una notificación)
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push recibido:', event);

  // Datos por defecto si no vienen en el payload
  let data = {
    title: 'Benedictus Daily',
    body: 'Es hora de orar',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    tag: 'benedictus-reminder',
    data: {
      url: '/',
      type: 'general'
    }
  };

  // Intentar parsear los datos del push
  if (event.data) {
    try {
      const payload = event.data.json();
      data = { ...data, ...payload };
    } catch (e) {
      // Si es texto plano, usarlo como body
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || '/icons/icon-192x192.png',
    badge: data.badge || '/icons/icon-72x72.png',
    tag: data.tag || 'benedictus-reminder',
    vibrate: [100, 50, 100], // Patrón de vibración suave
    data: data.data || { url: '/' },
    actions: [
      {
        action: 'open',
        title: 'Abrir'
      },
      {
        action: 'dismiss',
        title: 'Cerrar'
      }
    ],
    // Opciones para iOS
    requireInteraction: false,
    silent: false
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Manejar click en la notificación
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click:', event);

  event.notification.close();

  // Si el usuario hizo click en "dismiss", no hacer nada más
  if (event.action === 'dismiss') {
    return;
  }

  // Determinar la URL a abrir según el tipo de notificación
  let urlToOpen = '/';

  if (event.notification.data && event.notification.data.url) {
    urlToOpen = event.notification.data.url;
  } else if (event.notification.data && event.notification.data.type) {
    // Redirigir según el tipo de notificación
    switch (event.notification.data.type) {
      case 'laudes':
        urlToOpen = '/lectura'; // Ir a la lectura del día
        break;
      case 'completas':
        urlToOpen = '/'; // Ir al inicio para revisar el día
        break;
      default:
        urlToOpen = '/';
    }
  }

  // Intentar enfocar una ventana existente o abrir una nueva
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        // Buscar si ya hay una ventana abierta de la app
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(self.registration.scope) && 'focus' in client) {
            // Navegar a la URL y enfocar
            client.navigate(urlToOpen);
            return client.focus();
          }
        }
        // Si no hay ventana abierta, abrir una nueva
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// Manejar cierre de notificación (swipe away)
self.addEventListener('notificationclose', function(event) {
  console.log('[Service Worker] Notification closed:', event);
  // Aquí se podría trackear que el usuario descartó la notificación
});

// Mensaje desde la app principal (para testing o sincronización)
self.addEventListener('message', function(event) {
  console.log('[Service Worker] Message received:', event.data);

  if (event.data && event.data.type === 'TEST_PUSH') {
    // Mostrar notificación de prueba
    self.registration.showNotification('Notificación de prueba', {
      body: 'Las notificaciones están funcionando correctamente',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
      tag: 'test-notification'
    });
  }
});

console.log('[Service Worker] Custom SW cargado - Benedictus Daily');
