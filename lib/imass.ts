"use client";

import { useCallback } from "react";

// Divinum Officium - versión web del Breviario
// Provee Laudes, Vísperas, Completas y todas las Horas del Oficio Divino
// Funciona en cualquier dispositivo (Android, iOS, desktop)
const DIVINUM_OFFICIUM_URL = "http://www.divinumofficium.com/cgi-bin/horas/officium.pl";

/**
 * Hook que devuelve una función para abrir el Oficio Divino.
 * Abre Divinum Officium en el navegador - funciona en todos los dispositivos.
 */
export function useOpenIMass() {
  const openIMass = useCallback(() => {
    if (typeof window === "undefined") return;
    window.open(DIVINUM_OFFICIUM_URL, "_blank");
  }, []);

  return openIMass;
}
