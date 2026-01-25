"use client";

import { useCallback } from "react";

// URL schemes probables para iMass (sin documentación oficial, probamos los más comunes)
// Intento 2: livemass:// (nombre de la plataforma principal)
const IOS_SCHEME = "livemass://";
const ANDROID_PACKAGE = "fssp.livemass.iMass";

/**
 * Hook que devuelve una función para abrir iMass.
 * Intenta abrir la app directamente sin ir a las tiendas.
 *
 * - En Android: Usa Intent URL para abrir la app por package name
 * - En iOS: Intenta abrir con el scheme imass://
 */
export function useOpenIMass() {
  const openIMass = useCallback(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return;

    const ua = navigator.userAgent;

    // Android: usar Intent URL
    if (/android/i.test(ua)) {
      // Intent sin fallback - solo intenta abrir la app
      window.location.href = `intent://#Intent;package=${ANDROID_PACKAGE};end`;
    }
    // iOS: intentar abrir con scheme
    else if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = IOS_SCHEME;
    }
    // Otros (desktop, etc): intentar iOS scheme como fallback
    else {
      window.location.href = IOS_SCHEME;
    }
  }, []);

  return openIMass;
}
