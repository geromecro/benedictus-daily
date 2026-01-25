"use client";

import { useEffect, useState } from "react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=fssp.livemass.iMass";
const ANDROID_INTENT = `intent://#Intent;package=fssp.livemass.iMass;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;

/**
 * Hook que devuelve la URL apropiada para abrir iMass:
 * - En Android: Intent URL que abre la app directamente (o Play Store si no está instalada)
 * - En otros dispositivos: Link al Play Store
 */
export function useIMassUrl(): string {
  const [url, setUrl] = useState(PLAY_STORE_URL);

  useEffect(() => {
    // Detectar si es Android
    if (typeof navigator !== "undefined" && /android/i.test(navigator.userAgent)) {
      setUrl(ANDROID_INTENT);
    }
  }, []);

  return url;
}

/**
 * URL constante del Play Store (para uso en componentes server-side o fallback)
 */
export const IMASS_PLAY_STORE_URL = PLAY_STORE_URL;
