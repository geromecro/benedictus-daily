"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Flame, TrendingUp, Calendar, Award } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { getStats, getUserData } from "@/lib/storage";
import { getDiaActual, TOTAL_DIAS } from "@/lib/calendar";

interface StatsData {
  currentStreak: number;
  longestStreak: number;
  totalDays: number;
  completedDays: number;
  oraPercentage: number;
  laboraPercentage: number;
  lectioPercentage: number;
}

export default function EstadisticasPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const statsData = getStats();
    setStats(statsData);
    setIsLoading(false);
  }, []);

  const diaActual = getDiaActual();
  const porcentajeCamino = diaActual > 0 ? Math.round((diaActual / TOTAL_DIAS) * 100) : 0;

  if (isLoading || !stats) {
    return (
      <main className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <p className="text-[var(--text-muted)]">Cargando estadísticas...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] safe-area-top safe-area-bottom">
      <div className="max-w-lg mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--primary)] mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </Link>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[var(--primary)]" />
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Tu progreso
            </h1>
          </div>
          <p className="text-[var(--text-muted)] mt-1">
            Estadísticas de tu camino Benedictus
          </p>
        </header>

        {/* Progreso general del camino */}
        <section className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[var(--primary)]" />
              <h2 className="font-semibold text-[var(--text-primary)]">
                Progreso del camino
              </h2>
            </div>
            <span className="text-2xl font-bold text-[var(--primary)]">
              {diaActual > 0 ? `${diaActual}/${TOTAL_DIAS}` : "0/64"}
            </span>
          </div>

          <ProgressBar value={porcentajeCamino} showPercentage size="lg" />

          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            {diaActual <= 0
              ? "El camino aún no ha comenzado"
              : diaActual >= 64
                ? "¡Has completado el camino!"
                : `Faltan ${64 - diaActual} días para Pascua`}
          </p>
        </section>

        {/* Rachas */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="card p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[var(--accent-gold)] bg-opacity-20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-[var(--accent-gold)]" />
            </div>
            <p className="text-3xl font-bold text-[var(--primary)]">
              {stats.currentStreak}
            </p>
            <p className="text-sm text-[var(--text-muted)]">Racha actual</p>
          </div>

          <div className="card p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[var(--success)] bg-opacity-20 flex items-center justify-center">
              <Award className="w-6 h-6 text-[var(--success)]" />
            </div>
            <p className="text-3xl font-bold text-[var(--success)]">
              {stats.longestStreak}
            </p>
            <p className="text-sm text-[var(--text-muted)]">Mejor racha</p>
          </div>
        </section>

        {/* Cumplimiento por pilar */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">
            Cumplimiento por pilar
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Ora — Oración
                </span>
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {stats.oraPercentage}%
                </span>
              </div>
              <ProgressBar value={stats.oraPercentage} showPercentage={false} size="sm" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Lectio — Lectura
                </span>
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {stats.lectioPercentage}%
                </span>
              </div>
              <ProgressBar value={stats.lectioPercentage} showPercentage={false} size="sm" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Labora — Trabajo
                </span>
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {stats.laboraPercentage}%
                </span>
              </div>
              <ProgressBar value={stats.laboraPercentage} showPercentage={false} size="sm" />
            </div>
          </div>
        </section>

        {/* Días registrados */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">
            Resumen
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-[var(--background)] rounded-lg">
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {stats.totalDays}
              </p>
              <p className="text-xs text-[var(--text-muted)]">Días con registro</p>
            </div>
            <div className="text-center p-3 bg-[var(--background)] rounded-lg">
              <p className="text-2xl font-bold text-[var(--text-primary)]">
                {stats.completedDays}
              </p>
              <p className="text-xs text-[var(--text-muted)]">Días activos</p>
            </div>
          </div>
        </section>

        {/* Mensaje motivacional */}
        <section className="card p-6 bg-[var(--primary)] bg-opacity-5 border-[var(--primary)] border-opacity-20">
          <p className="text-center text-[var(--text-primary)] italic">
            "Ut in omnibus glorificetur Deus"
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] mt-1">
            — Que en todo sea Dios glorificado
          </p>
        </section>
      </div>

      <Navigation />
    </main>
  );
}
