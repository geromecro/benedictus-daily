"use client";

import { useEffect, useState } from "react";

interface SplashScreenSacredProps {
  onComplete: () => void;
}

export default function SplashScreenSacred({ onComplete }: SplashScreenSacredProps) {
  const [phase, setPhase] = useState<"dark" | "reveal" | "text" | "exit">("dark");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase 1: Darkness (0.5s)
    const darkTimer = setTimeout(() => setPhase("reveal"), 500);

    // Phase 2: Cross and light reveal (1.5s)
    const revealTimer = setTimeout(() => setPhase("text"), 2000);

    // Auto-dismiss after 6 seconds total
    const exitTimer = setTimeout(() => handleExit(), 6000);

    return () => {
      clearTimeout(darkTimer);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    setPhase("exit");
    setTimeout(() => onComplete(), 800);
  };

  return (
    <div
      className={`splash-sacred ${phase} ${isExiting ? "exiting" : ""}`}
      onClick={handleExit}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleExit()}
      aria-label="Pantalla de bienvenida - toca para continuar"
    >
      {/* Layered background textures */}
      <div className="splash-sacred-bg" />
      <div className="splash-sacred-vignette" />
      <div className="splash-sacred-noise" />

      {/* St. Benedict Medal that emerges from darkness */}
      <div className="splash-sacred-medal">
        <img
          src="/images/benedict-medal.svg"
          alt="Medalla de San Benito"
          className="splash-medal-image"
        />
      </div>

      {/* Main content container */}
      <div className="splash-sacred-content">
        {/* Latin Text - Line 1 */}
        <div className="splash-sacred-verse">
          <span className="splash-sacred-line line-1">
            <span className="splash-sacred-initial">F</span>
            <span className="splash-sacred-word">UIT</span>
            <span className="splash-sacred-space"> </span>
            <span className="splash-sacred-initial">V</span>
            <span className="splash-sacred-word">IR</span>
            <span className="splash-sacred-space"> </span>
            <span className="splash-sacred-initial">V</span>
            <span className="splash-sacred-word">ITAE</span>
          </span>

          <span className="splash-sacred-line line-2">
            <span className="splash-sacred-initial accent">V</span>
            <span className="splash-sacred-word accent">ENERABILIS</span>
          </span>

          <span className="splash-sacred-line line-3">
            <span className="splash-sacred-initial">G</span>
            <span className="splash-sacred-word">RATIA</span>
            <span className="splash-sacred-space"> </span>
            <span className="splash-sacred-initial red">B</span>
            <span className="splash-sacred-word red">ENEDICTUS</span>
          </span>

          <span className="splash-sacred-line line-4">
            <span className="splash-sacred-word small">ET</span>
            <span className="splash-sacred-space"> </span>
            <span className="splash-sacred-initial">N</span>
            <span className="splash-sacred-word">OMINE</span>
          </span>
        </div>

        {/* Translation */}
        <p className="splash-sacred-translation">
          "Hubo un hombre de vida venerable,<br />
          bendito por gracia y por nombre"
        </p>

        {/* Attribution */}
        <p className="splash-sacred-attribution">
          — San Gregorio Magno, <em>Diálogos II</em>
        </p>
      </div>

      {/* Tap hint */}
      <p className="splash-sacred-hint">
        Toca para continuar
      </p>
    </div>
  );
}
