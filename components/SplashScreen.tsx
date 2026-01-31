"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Auto-dismiss after 4.5 seconds
    const timer = setTimeout(() => {
      handleExit();
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleExit = () => {
    setIsExiting(true);
    // Wait for fade-out animation to complete
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      className={`splash-screen ${isExiting ? "splash-exit" : ""}`}
      onClick={handleExit}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleExit()}
      aria-label="Pantalla de bienvenida - toca para continuar"
    >
      {/* Fondo con textura sutil */}
      <div className="splash-background" />

      {/* Contenido central */}
      <div className="splash-content">
        {/* Cruz superior */}
        <div className="splash-cross splash-cross-top">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
            <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Texto principal con drop caps en rojo */}
        <div className="splash-text">
          <span className="splash-line splash-line-1">
            <span className="splash-word"><span className="splash-drop-cap">F</span>UIT</span>{" "}
            <span className="splash-word">VIR</span>{" "}
            <span className="splash-word"><span className="splash-drop-cap">V</span>ITAE</span>
          </span>
          <span className="splash-line splash-line-2">
            <span className="splash-word splash-word-accent"><span className="splash-drop-cap">V</span>ENERABILIS</span>
          </span>
          <span className="splash-line splash-line-3">
            <span className="splash-word"><span className="splash-drop-cap">G</span>RATIA</span>{" "}
            <span className="splash-word splash-word-benedictus"><span className="splash-drop-cap">B</span>ENEDICTUS</span>
          </span>
          <span className="splash-line splash-line-4">
            <span className="splash-word">ET</span>{" "}
            <span className="splash-word">NOMINE</span>
          </span>
        </div>

        {/* Traducción sutil */}
        <p className="splash-translation">
          Hubo un hombre de vida venerable, bendito por gracia y por nombre
        </p>

        {/* Cruz inferior */}
        <div className="splash-cross splash-cross-bottom">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
            <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Atribución */}
        <p className="splash-attribution">
          San Gregorio Magno, Diálogos II
        </p>
      </div>

      {/* Indicador de toque */}
      <p className="splash-tap-hint">
        Toca para continuar
      </p>
    </div>
  );
}
