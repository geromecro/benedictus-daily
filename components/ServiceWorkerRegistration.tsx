"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Registrar el custom service worker para push notifications
      // Este se registra además del SW generado por next-pwa
      navigator.serviceWorker
        .register("/custom-sw.js", { scope: "/" })
        .then((registration) => {
          console.log(
            "[App] Custom Service Worker registrado con scope:",
            registration.scope
          );

          // Verificar actualizaciones periódicamente
          registration.update();
        })
        .catch((error) => {
          console.error("[App] Error registrando Custom Service Worker:", error);
        });
    }
  }, []);

  // Este componente no renderiza nada
  return null;
}
