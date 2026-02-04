"use client";

import { useState } from "react";
import { getDiaActual, getDiaLiturgico, getTiempoLiturgicoLabel, getTiempoLiturgicoBadgeClass, TOTAL_DIAS } from "@/lib/calendar";

export default function DayCounter() {
  const diaActual = getDiaActual();

  // Estado para navegación manual entre días
  const [diaSeleccionado, setDiaSeleccionado] = useState(() => diaActual);

  // Funciones de navegación
  const irAnterior = () => setDiaSeleccionado(d => Math.max(1, d - 1));
  const irSiguiente = () => setDiaSeleccionado(d => Math.min(TOTAL_DIAS, d + 1));

  // Usar diaSeleccionado para mostrar info (pero diaActual para determinar estado)
  const diaLiturgico = getDiaLiturgico(diaSeleccionado);

  // Estado: antes, durante o después del programa (basado en día real)
  const estado = diaActual === 0 ? "antes" : diaActual > 64 ? "despues" : "durante";

  // Cálculos para el anillo circular
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const porcentaje = estado === "durante" ? (diaActual / TOTAL_DIAS) * 100 : 0;
  const strokeDashoffset = circumference - (porcentaje / 100) * circumference;

  if (estado === "antes") {
    return (
      <div className="card-liturgical p-8 text-center animate-fade-in">
        <div className="mb-4">
          <span className="text-gold text-sm uppercase tracking-[0.2em]">Preparación</span>
        </div>
        <h2 className="text-2xl mb-3">Benedictus 2026</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          El itinerario comienza el <strong className="text-[var(--primary)]">1 de febrero</strong>
        </p>
        <div className="divider-ornament mt-6">
          <span className="divider-ornament-center">✝</span>
        </div>
        <p className="text-[var(--text-muted)] text-sm italic mt-2">
          Prepara tu corazón para este camino de 64 días
        </p>
      </div>
    );
  }

  if (estado === "despues") {
    return (
      <div className="card-liturgical p-8 text-center animate-fade-in">
        <span className="badge badge-pascua mb-4 inline-flex">Aleluya</span>
        <h2 className="text-2xl mb-3">El camino ha concluido</h2>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          Que los hábitos formados permanezcan en tu vida
        </p>
        <div className="divider-ornament mt-6">
          <span className="divider-ornament-center">☧</span>
        </div>
      </div>
    );
  }

  const nombreDia = diaLiturgico?.diaSemana === "D" ? "Domingo" :
    diaLiturgico?.diaSemana === "L" ? "Lunes" :
    diaLiturgico?.diaSemana === "M" ? "Martes" :
    diaLiturgico?.diaSemana === "Mi" ? "Miércoles" :
    diaLiturgico?.diaSemana === "J" ? "Jueves" :
    diaLiturgico?.diaSemana === "V" ? "Viernes" : "Sábado";

  return (
    <div className="card-liturgical p-6 animate-fade-in">
      <div className="flex items-center gap-6">
        {/* Anillo circular de progreso */}
        <div className="day-ring flex-shrink-0">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gold-light)" />
                <stop offset="50%" stopColor="var(--gold)" />
                <stop offset="100%" stopColor="var(--gold-muted)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Círculo de fondo con marcas */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              className="day-ring-bg"
            />

            {/* Marcas de 64 días */}
            {Array.from({ length: 64 }).map((_, i) => {
              const angle = (i / 64) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const innerR = 54;
              const outerR = i % 7 === 0 ? 51 : 52;
              const x1 = 70 + innerR * Math.cos(rad);
              const y1 = 70 + innerR * Math.sin(rad);
              const x2 = 70 + outerR * Math.cos(rad);
              const y2 = 70 + outerR * Math.sin(rad);

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i < diaActual ? "var(--gold-muted)" : "var(--border)"}
                  strokeWidth={i % 7 === 0 ? 2 : 1}
                  opacity={i % 7 === 0 ? 1 : 0.5}
                />
              );
            })}

            {/* Círculo de progreso */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              className="day-ring-progress"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              filter="url(#glow)"
            />
          </svg>

          {/* Centro con número y flechas de navegación */}
          <div className="day-ring-center">
            <div className="flex items-center gap-1">
              <button
                onClick={irAnterior}
                disabled={diaSeleccionado <= 1}
                className="text-[var(--gold)] hover:text-[var(--gold-light)] disabled:opacity-30 disabled:cursor-not-allowed text-xl font-bold px-1 transition-opacity"
                aria-label="Día anterior"
              >
                ‹
              </button>
              <span className="day-number">{diaSeleccionado}</span>
              <button
                onClick={irSiguiente}
                disabled={diaSeleccionado >= TOTAL_DIAS}
                className="text-[var(--gold)] hover:text-[var(--gold-light)] disabled:opacity-30 disabled:cursor-not-allowed text-xl font-bold px-1 transition-opacity"
                aria-label="Día siguiente"
              >
                ›
              </button>
            </div>
            <span className="day-label">de {TOTAL_DIAS}</span>
          </div>
        </div>

        {/* Información del día */}
        <div className="flex-1 min-w-0">
          {/* Badge del tiempo litúrgico */}
          {diaLiturgico && (
            <span className={`badge ${getTiempoLiturgicoBadgeClass(diaLiturgico.tiempo)} mb-3 inline-flex`}>
              {getTiempoLiturgicoLabel(diaLiturgico.tiempo)}
            </span>
          )}

          {/* Fecha */}
          <div className="mb-2">
            <p className="text-sm text-[var(--text-muted)]">
              {nombreDia}
            </p>
            <p className="text-lg font-medium text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              {diaLiturgico?.fecha.split("-").reverse().join("/")}
            </p>
          </div>

          {/* Fiesta del día */}
          {diaLiturgico && (
            <div>
              <p className="text-[var(--text-primary)] font-medium leading-snug" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {diaLiturgico.fiesta}
              </p>

              {/* Tags de ayuno/fiesta */}
              <div className="flex flex-wrap gap-2 mt-2">
                {diaLiturgico.esAyuno && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--purple-lent)] bg-opacity-10 text-[var(--purple-lent)] border border-[var(--purple-lent)] border-opacity-20">
                    Día de ayuno
                  </span>
                )}
                {diaLiturgico.esFiesta && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--gold)] bg-opacity-10 text-[var(--gold)] border border-[var(--gold)] border-opacity-30">
                    Fiesta
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Barra de progreso lineal abajo */}
      <div className="mt-5 pt-4 border-t border-[var(--border-light)]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
            Progreso del camino
          </span>
          <span className="text-sm font-semibold text-gold" style={{ fontFamily: 'var(--font-cormorant)' }}>
            {Math.round(porcentaje)}%
          </span>
        </div>
        <div className="progress-bar h-1.5">
          <div
            className="progress-bar-fill"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
      </div>
    </div>
  );
}
