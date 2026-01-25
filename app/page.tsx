"use client";

import { useState, useEffect } from "react";
import { Flame, BookOpen, Hammer, Cross, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
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
import { useOpenIMass } from "@/lib/imass";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [progress, setProgress] = useState<DailyProgress | null>(null);
  const [simulatedDay, setSimulatedDay] = useState<number>(1);
  const openIMass = useOpenIMass();

  useEffect(() => {
    const data = getUserData();
    setUserData(data);
    setProgress(getDailyProgress());
  }, []);

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
          <div className="spinner mx-auto mb-4" />
          <p className="text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Cargando...
          </p>
        </div>
      </div>
    );
  }

  const activeOra = DEFAULT_ORA_COMMITMENTS.filter((c) =>
    userData.activeOraCommitments.includes(c.id)
  );
  const activeLabora = DEFAULT_LABORA_COMMITMENTS.filter((c) =>
    userData.activeLaboraCommitments.includes(c.id)
  );

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

  const enCuaresma = estaDentroDeCuaresma();
  const sacrificiosActivos = userData.sacrifices.length > 0;
  const hoyEsAyuno = esDiaDeAyuno();

  return (
    <main className="min-h-screen bg-[var(--background)] safe-area-top safe-area-bottom">
      <div className="max-w-lg mx-auto px-5 py-8">
        {/* Header elegante */}
        <header className="mb-8 text-center animate-fade-in">
          <h1 className="text-[var(--primary)] mb-1">Benedictus</h1>
          <p className="text-[var(--text-muted)] italic" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
            Tu camino de hoy
          </p>
        </header>

        {/* Contador de días */}
        <div className="mb-8">
          <DayCounter simulatedDay={simulatedDay} />
        </div>

        {/* Selector de día para desarrollo */}
        <div className="mb-6 p-4 bg-[var(--cream)] border border-[var(--border-light)] rounded-xl opacity-70">
          <label className="text-xs text-[var(--text-muted)] block mb-2 uppercase tracking-wider">
            Simular día (desarrollo):
          </label>
          <input
            type="range"
            min="1"
            max="64"
            value={simulatedDay}
            onChange={(e) => setSimulatedDay(parseInt(e.target.value))}
            className="w-full accent-[var(--gold)]"
          />
          <span className="text-xs text-[var(--text-muted)]">Día {simulatedDay}</span>
        </div>

        {/* Alerta de día de ayuno */}
        {hoyEsAyuno && (
          <div className="alert-fast mb-6 animate-fade-in">
            <div className="alert-fast-icon">
              <Cross size={16} />
            </div>
            <p className="alert-fast-text">
              Hoy es día de ayuno y abstinencia
            </p>
          </div>
        )}

        {/* Sección ORA */}
        <section className="mb-8 animate-fade-in stagger-1">
          <div className="section-header">
            <div className="section-icon ora">
              <Flame size={18} />
            </div>
            <div className="flex-1">
              <h2 className="section-title">Ora</h2>
              <p className="section-subtitle">Oración</p>
            </div>
            <span
              className="text-sm font-semibold text-[var(--gold)]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {oraCompleted}/{oraTotal}
            </span>
          </div>

          <ProgressBar value={oraPercentage} showPercentage={false} size="sm" />

          <div className="mt-4 space-y-3">
            {activeOra.map((commitment, index) => (
              <div key={commitment.id} className={`stagger-${index + 1}`}>
                <ChecklistItem
                  id={commitment.id}
                  label={commitment.label}
                  description={commitment.description}
                  checked={progress.ora.includes(commitment.id)}
                  onToggle={handleOraToggle}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Sección LECTIO */}
        <section className="mb-8 animate-fade-in stagger-2">
          <div className="section-header">
            <div className="section-icon lectio">
              <BookOpen size={18} />
            </div>
            <div className="flex-1">
              <h2 className="section-title">Lectio</h2>
              <p className="section-subtitle">Lectura espiritual</p>
            </div>
          </div>

          <ChecklistItem
            id="lectio"
            label="Lectura espiritual del día"
            description="Vida de San Benito o Regla"
            checked={progress.lectio}
            onToggle={handleLectioToggle}
          />

          <Link
            href="/lectura"
            className="mt-4 card p-4 flex items-center gap-3 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--cream)] flex items-center justify-center group-hover:bg-[var(--gold)] group-hover:bg-opacity-10 transition-colors">
              <Sparkles size={18} className="text-[var(--gold)]" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Ver lectura del día
              </p>
            </div>
            <ChevronRight size={18} className="text-[var(--text-muted)] group-hover:text-[var(--gold)] transition-colors" />
          </Link>
        </section>

        {/* Sección LABORA */}
        <section className="mb-8 animate-fade-in stagger-3">
          <div className="section-header">
            <div className="section-icon labora">
              <Hammer size={18} />
            </div>
            <div className="flex-1">
              <h2 className="section-title">Labora</h2>
              <p className="section-subtitle">Trabajo</p>
            </div>
            <span
              className="text-sm font-semibold text-[var(--green-ordinary)]"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {laboraCompleted}/{laboraTotal}
            </span>
          </div>

          <ProgressBar value={laboraPercentage} showPercentage={false} size="sm" />

          <div className="mt-4 space-y-3">
            {activeLabora.map((commitment, index) => (
              <div key={commitment.id} className={`stagger-${index + 1}`}>
                <ChecklistItem
                  id={commitment.id}
                  label={commitment.label}
                  description={commitment.description}
                  checked={progress.labora.includes(commitment.id)}
                  onToggle={handleLaboraToggle}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Sección Sacrificios (solo en Cuaresma) */}
        {enCuaresma && sacrificiosActivos && (
          <section className="mb-8 animate-fade-in stagger-4">
            <div className="section-header">
              <div className="section-icon sacrificio">
                <Cross size={18} />
              </div>
              <div className="flex-1">
                <h2 className="section-title">Sacrificios</h2>
                <p className="section-subtitle">Mortificación personal</p>
              </div>
            </div>

            <div className="space-y-3">
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
          <section className="mb-8 animate-fade-in">
            <div className="card p-5 text-center border-dashed">
              <Cross size={24} className="mx-auto mb-3 text-[var(--purple-lent)] opacity-50" />
              <p className="text-sm text-[var(--text-muted)] italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Los sacrificios personales comienzan el Miércoles de Ceniza
              </p>
            </div>
          </section>
        )}

        {/* Link al Breviario */}
        <section className="mb-8 animate-fade-in stagger-5">
          <button
            onClick={openIMass}
            className="card p-5 flex items-center gap-4 hover:shadow-lg transition-all w-full text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-muted)] flex items-center justify-center shadow-md">
              <BookOpen size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
                Oficio Divino
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Laudes, Vísperas, Completas
              </p>
            </div>
            <ChevronRight size={20} className="text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

        {/* Cita inspiracional */}
        <div className="divider-ornament">
          <span className="divider-ornament-center">☧</span>
        </div>

        <p className="verse text-center mb-8">
          &ldquo;Ora et Labora&rdquo;
        </p>
      </div>

      <Navigation />
    </main>
  );
}
