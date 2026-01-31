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
          src="/images/benedict-medal-bg.jpg"
          alt="Medalla de San Benito"
          className="splash-medal-image"
        />
      </div>

      {/* Main content container */}
      <div className="splash-sacred-content">
        {/* Upper ornamental line */}
        <div className="splash-sacred-ornament splash-sacred-ornament-top">
          <svg viewBox="0 0 200 20" fill="none">
            <path
              d="M0 10 Q50 0 100 10 Q150 20 200 10"
              stroke="url(#goldGradientLine)"
              strokeWidth="1"
              fill="none"
            />
            <defs>
              <linearGradient id="goldGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#C9A227" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="80%" stopColor="#C9A227" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

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
            <span className="splash-sacred-initial gold">B</span>
            <span className="splash-sacred-word gold">ENEDICTUS</span>
          </span>

          <span className="splash-sacred-line line-4">
            <span className="splash-sacred-word small">ET</span>
            <span className="splash-sacred-space"> </span>
            <span className="splash-sacred-initial">N</span>
            <span className="splash-sacred-word">OMINE</span>
          </span>
        </div>

        {/* Divider */}
        <div className="splash-sacred-divider">
          <span className="splash-sacred-chi-rho">☧</span>
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

        {/* Lower ornamental line */}
        <div className="splash-sacred-ornament splash-sacred-ornament-bottom">
          <svg viewBox="0 0 200 20" fill="none">
            <path
              d="M0 10 Q50 20 100 10 Q150 0 200 10"
              stroke="url(#goldGradientLine2)"
              strokeWidth="1"
              fill="none"
            />
            <defs>
              <linearGradient id="goldGradientLine2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="#C9A227" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="80%" stopColor="#C9A227" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Tap hint */}
      <p className="splash-sacred-hint">
        Toca para continuar
      </p>
    </div>
  );
}
