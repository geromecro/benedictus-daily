"use client";

import { useState, useEffect } from "react";
import { Flame, BookOpen, Hammer, Cross } from "lucide-react";
import Navigation from "@/components/Navigation";
import DayCounter from "@/components/DayCounter";
import ChecklistItem from "@/components/ChecklistItem";
import ProgressBar from "@/components/ProgressBar";
import {
  getUserData,
  getDailyProgress,
  toggleOraCommitment,
  toggleLaboraCommitment,
  toggleLectio,
  toggleSacrifice,
  DEFAULT_ORA_COMMITMENTS,
  DEFAULT_LABORA_COMMITMENTS,
  DailyProgress,
  UserData,
} from "@/lib/storage";
import { estaDentroDeCuaresma, esDiaDeAyuno } from "@/lib/calendar";
import { useIMassUrl } from "@/lib/imass";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [progress, setProgress] = useState<DailyProgress | null>(null);
  const [simulatedDay, setSimulatedDay] = useState<number>(1); // Para desarrollo
  const imassUrl = useIMassUrl();

  // Cargar datos al montar
  useEffect(() => {
    const data = getUserData();
    setUserData(data);
    setProgress(getDailyProgress());
  }, []);

  // Handlers
  const handleOraToggle = (id: string) => {
    const newProgress = toggleOraCommitment(id);
    setProgress(newProgress);
  };

  const handleLaboraToggle = (id: string) => {
    const newProgress = toggleLaboraCommitment(id);
    setProgress(newProgress);
  };

  const handleLectioToggle = () => {
    const newProgress = toggleLectio();
    setProgress(newProgress);
  };

  const handleSacrificeToggle = (index: number) => {
    const newProgress = toggleSacrifice(index);
    setProgress(newProgress);
  };

  if (!userData || !progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <div className="animate-pulse">
            <Cross className="w-12 h-12 mx-auto text-[var(--primary)] mb-4" />
          </div>
          <p className="text-[var(--text-muted)]">Cargando...</p>
        </div>
      </div>
    );
  }

  // Filtrar compromisos activos
  const activeOra = DEFAULT_ORA_COMMITMENTS.filter((c) =>
    userData.activeOraCommitments.includes(c.id)
  );
  const activeLabora = DEFAULT_LABORA_COMMITMENTS.filter((c) =>
    userData.activeLaboraCommitments.includes(c.id)
  );

  // Calcular porcentajes
  const oraCompleted = progress.ora.filter((id) =>
    userData.activeOraCommitments.includes(id)
  ).length;
  const oraTotal = activeOra.length;
  const oraPercentage = oraTotal > 0 ? (oraCompleted / oraTotal) * 100 : 0;

  const laboraCompleted = progress.labora.filter((id) =>
    userData.activeLaboraCommitments.includes(id)
  ).length;
  const laboraTotal = activeLabora.length;
  const laboraPercentage = laboraTotal > 0 ? (laboraCompleted / laboraTotal) * 100 : 0;

  // Sacrificios (solo durante Cuaresma)
  const enCuaresma = estaDentroDeCuaresma();
  const sacrificiosActivos = userData.sacrifices.length > 0;

  // Día de ayuno
  const hoyEsAyuno = esDiaDeAyuno();

  return (
    <main className="min-h-screen bg-[var(--background)] safe-area-top safe-area-bottom">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-[var(--text-primary)]">
            Benedictus
          </h1>
          <p className="text-[var(--text-muted)]">Tu camino de hoy</p>
        </header>

        {/* Contador de días */}
        <div className="mb-6">
          <DayCounter simulatedDay={simulatedDay} />
        </div>

        {/* Selector de día para desarrollo - solo visible en desarrollo */}
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <label className="text-xs text-yellow-700 block mb-1">
            Simular día (desarrollo):
          </label>
          <input
            type="range"
            min="1"
            max="64"
            value={simulatedDay}
            onChange={(e) => setSimulatedDay(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-yellow-700">Día {simulatedDay}</span>
        </div>

        {/* Alerta de día de ayuno */}
        {hoyEsAyuno && (
          <div className="mb-4 p-4 bg-[var(--purple-lent)] bg-opacity-10 border border-[var(--purple-lent)] border-opacity-30 rounded-lg">
            <p className="text-[var(--purple-lent)] font-medium text-sm">
              Hoy es día de ayuno y abstinencia
            </p>
          </div>
        )}

        {/* Sección ORA */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)] bg-opacity-20 flex items-center justify-center">
              <Flame className="w-4 h-4 text-[var(--accent-gold)]" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-[var(--text-primary)]">
                Ora — Oración
              </h2>
            </div>
            <span className="text-sm font-medium text-[var(--primary)]">
              {oraCompleted}/{oraTotal}
            </span>
          </div>

          <ProgressBar value={oraPercentage} showPercentage={false} size="sm" />

          <div className="mt-3 space-y-2">
            {activeOra.map((commitment) => (
              <ChecklistItem
                key={commitment.id}
                id={commitment.id}
                label={commitment.label}
                description={commitment.description}
                checked={progress.ora.includes(commitment.id)}
                onToggle={handleOraToggle}
              />
            ))}
          </div>
        </section>

        {/* Sección LECTIO */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-[var(--primary)]" />
            </div>
            <h2 className="font-semibold text-[var(--text-primary)] flex-1">
              Lectio — Lectura
            </h2>
          </div>

          <ChecklistItem
            id="lectio"
            label="Lectura espiritual del día"
            description="Vida de San Benito o Regla"
            checked={progress.lectio}
            onToggle={handleLectioToggle}
          />

          <a
            href="/lectura"
            className="mt-2 block text-center py-2 text-sm text-[var(--primary)] hover:underline"
          >
            Ver lectura del día →
          </a>
        </section>

        {/* Sección LABORA */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[var(--secondary)] bg-opacity-30 flex items-center justify-center">
              <Hammer className="w-4 h-4 text-[var(--primary-dark)]" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-[var(--text-primary)]">
                Labora — Trabajo
              </h2>
            </div>
            <span className="text-sm font-medium text-[var(--primary)]">
              {laboraCompleted}/{laboraTotal}
            </span>
          </div>

          <ProgressBar value={laboraPercentage} showPercentage={false} size="sm" />

          <div className="mt-3 space-y-2">
            {activeLabora.map((commitment) => (
              <ChecklistItem
                key={commitment.id}
                id={commitment.id}
                label={commitment.label}
                description={commitment.description}
                checked={progress.labora.includes(commitment.id)}
                onToggle={handleLaboraToggle}
              />
            ))}
          </div>
        </section>

        {/* Sección Sacrificios (solo en Cuaresma) */}
        {enCuaresma && sacrificiosActivos && (
          <section className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[var(--purple-lent)] bg-opacity-10 flex items-center justify-center">
                <Cross className="w-4 h-4 text-[var(--purple-lent)]" />
              </div>
              <h2 className="font-semibold text-[var(--text-primary)] flex-1">
                Sacrificios personales
              </h2>
            </div>

            <div className="space-y-2">
              {userData.sacrifices.map((sacrificio, index) => (
                <ChecklistItem
                  key={index}
                  id={`sacrifice-${index}`}
                  label={sacrificio}
                  checked={progress.sacrifices[index] || false}
                  onToggle={() => handleSacrificeToggle(index)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Mensaje si no está en Cuaresma pero tiene sacrificios configurados */}
        {!enCuaresma && sacrificiosActivos && (
          <section className="mb-6">
            <div className="p-4 bg-[var(--surface)] border border-[var(--border-light)] rounded-lg text-center">
              <p className="text-sm text-[var(--text-muted)]">
                Los sacrificios personales comienzan el Miércoles de Ceniza
              </p>
            </div>
          </section>
        )}

        {/* Link a iMass */}
        <section className="mb-6">
          <a
            href={imassUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[var(--text-primary)]">
                Oficio Divino en iMass
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Rezar Laudes, Vísperas o Completas
              </p>
            </div>
            <span className="text-[var(--text-muted)]">→</span>
          </a>
        </section>
      </div>

      {/* Navegación inferior */}
      <Navigation />
    </main>
  );
}
