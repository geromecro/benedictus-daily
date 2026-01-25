"use client";

import { getDiaActual, getDiaLiturgico, getTiempoLiturgicoLabel, getTiempoLiturgicoBadgeClass, TOTAL_DIAS } from "@/lib/calendar";
import ProgressBar from "./ProgressBar";

interface DayCounterProps {
  simulatedDay?: number; // Para desarrollo
}

export default function DayCounter({ simulatedDay }: DayCounterProps) {
  const diaActual = simulatedDay || getDiaActual();
  const diaLiturgico = getDiaLiturgico(diaActual);

  // Estado: antes, durante o después del programa
  const estado = diaActual === 0 ? "antes" : diaActual > 64 ? "despues" : "durante";

  if (estado === "antes") {
    return (
      <div className="card p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Benedictus 2026</h2>
        <p className="text-[var(--text-secondary)]">
          El itinerario comienza el <strong>1 de febrero</strong>
        </p>
        <p className="text-[var(--text-muted)] text-sm mt-2">
          Prepara tu corazón para este camino de 64 días
        </p>
      </div>
    );
  }

  if (estado === "despues") {
    return (
      <div className="card p-6 text-center">
        <div className="badge badge-pascua mb-4 inline-flex">Aleluya</div>
        <h2 className="text-xl font-semibold mb-2">El camino ha concluido</h2>
        <p className="text-[var(--text-secondary)]">
          Que los hábitos formados permanezcan en tu vida
        </p>
      </div>
    );
  }

  const porcentaje = Math.round((diaActual / TOTAL_DIAS) * 100);

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {diaLiturgico && (
              <span className={`badge ${getTiempoLiturgicoBadgeClass(diaLiturgico.tiempo)}`}>
                {getTiempoLiturgicoLabel(diaLiturgico.tiempo)}
              </span>
            )}
          </div>
          <h2 className="text-3xl font-bold text-[var(--primary)]">
            Día {diaActual}
            <span className="text-lg font-normal text-[var(--text-muted)]">
              {" "}de {TOTAL_DIAS}
            </span>
          </h2>
        </div>
        <div className="text-right">
          <p className="text-sm text-[var(--text-muted)]">
            {diaLiturgico?.diaSemana === "D" ? "Domingo" :
             diaLiturgico?.diaSemana === "L" ? "Lunes" :
             diaLiturgico?.diaSemana === "M" ? "Martes" :
             diaLiturgico?.diaSemana === "Mi" ? "Miércoles" :
             diaLiturgico?.diaSemana === "J" ? "Jueves" :
             diaLiturgico?.diaSemana === "V" ? "Viernes" : "Sábado"}
          </p>
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            {diaLiturgico?.fecha.split("-").reverse().join("/")}
          </p>
        </div>
      </div>

      {diaLiturgico && (
        <div className="mb-4">
          <p className="text-[var(--text-primary)] font-medium">
            {diaLiturgico.fiesta}
          </p>
          <div className="flex gap-2 mt-2">
            {diaLiturgico.esAyuno && (
              <span className="text-xs px-2 py-0.5 bg-[var(--purple-lent)] bg-opacity-10 text-[var(--purple-lent)] rounded-full">
                Día de ayuno
              </span>
            )}
            {diaLiturgico.esFiesta && (
              <span className="text-xs px-2 py-0.5 bg-[var(--accent-gold)] bg-opacity-20 text-[var(--accent-gold)] rounded-full">
                Fiesta
              </span>
            )}
          </div>
        </div>
      )}

      <ProgressBar value={porcentaje} label="Progreso del camino" />
    </div>
  );
}
