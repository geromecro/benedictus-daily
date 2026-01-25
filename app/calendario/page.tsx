"use client";

import { useState } from "react";
import { ArrowLeft, Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import {
  CALENDARIO,
  getDiaActual,
  getTiempoLiturgicoLabel,
  getTiempoLiturgicoBadgeClass,
  TiempoLiturgico,
} from "@/lib/calendar";

export default function CalendarioPage() {
  const diaActual = getDiaActual();
  const [filtroTiempo, setFiltroTiempo] = useState<TiempoLiturgico | "todos">("todos");

  const diasFiltrados = filtroTiempo === "todos"
    ? CALENDARIO
    : CALENDARIO.filter(d => d.tiempo === filtroTiempo);

  // Agrupar por mes
  const diasPorMes = diasFiltrados.reduce((acc, dia) => {
    const mes = dia.fecha.substring(0, 7); // "2026-02"
    if (!acc[mes]) acc[mes] = [];
    acc[mes].push(dia);
    return acc;
  }, {} as Record<string, typeof CALENDARIO>);

  const nombreMes = (mes: string) => {
    const [year, month] = mes.split("-");
    const meses = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${meses[parseInt(month)]} ${year}`;
  };

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
            <CalendarIcon className="w-6 h-6 text-[var(--primary)]" />
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Calendario Litúrgico
            </h1>
          </div>
          <p className="text-[var(--text-muted)] mt-1">
            64 días de Septuagésima a Pascua
          </p>
        </header>

        {/* Filtros */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFiltroTiempo("todos")}
            className={`btn ${filtroTiempo === "todos" ? "btn-primary" : "btn-ghost"} text-sm whitespace-nowrap`}
          >
            Todos
          </button>
          {(["septuagesima", "cuaresma", "pasion", "semana_santa", "pascua"] as TiempoLiturgico[]).map(tiempo => (
            <button
              key={tiempo}
              onClick={() => setFiltroTiempo(tiempo)}
              className={`btn ${filtroTiempo === tiempo ? "btn-primary" : "btn-ghost"} text-sm whitespace-nowrap`}
            >
              {getTiempoLiturgicoLabel(tiempo)}
            </button>
          ))}
        </div>

        {/* Calendario por mes */}
        {Object.entries(diasPorMes).map(([mes, dias]) => (
          <section key={mes} className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3 sticky top-0 bg-[var(--background)] py-2">
              {nombreMes(mes)}
            </h2>

            <div className="space-y-2">
              {dias.map(dia => {
                const esHoy = dia.dia === diaActual;
                const esPasado = dia.dia < diaActual;

                return (
                  <div
                    key={dia.dia}
                    className={`card p-3 ${esHoy ? "ring-2 ring-[var(--primary)] bg-[var(--surface-elevated)]" : ""} ${
                      esPasado ? "opacity-60" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Número de día */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        esHoy
                          ? "bg-[var(--primary)] text-white"
                          : dia.esFiesta
                            ? "bg-[var(--accent-gold)] bg-opacity-20 text-[var(--accent-gold)]"
                            : "bg-[var(--border-light)] text-[var(--text-secondary)]"
                      }`}>
                        {dia.dia}
                      </div>

                      {/* Info del día */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-[var(--text-muted)]">
                            {dia.diaSemana === "D" ? "Dom" :
                             dia.diaSemana === "L" ? "Lun" :
                             dia.diaSemana === "M" ? "Mar" :
                             dia.diaSemana === "Mi" ? "Mié" :
                             dia.diaSemana === "J" ? "Jue" :
                             dia.diaSemana === "V" ? "Vie" : "Sáb"}{" "}
                            {dia.fecha.split("-")[2]}/{dia.fecha.split("-")[1]}
                          </span>
                          <span className={`badge text-[10px] ${getTiempoLiturgicoBadgeClass(dia.tiempo)}`}>
                            {getTiempoLiturgicoLabel(dia.tiempo)}
                          </span>
                        </div>

                        <p className={`font-medium ${esHoy ? "text-[var(--primary)]" : "text-[var(--text-primary)]"}`}>
                          {dia.fiesta}
                        </p>

                        <div className="flex gap-2 mt-1">
                          {dia.esAyuno && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-[var(--purple-lent)] bg-opacity-10 text-[var(--purple-lent)] rounded">
                              Ayuno
                            </span>
                          )}
                          {dia.esFiesta && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-[var(--accent-gold)] bg-opacity-20 text-[var(--accent-gold)] rounded">
                              Fiesta
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Link a iMass */}
                      <a
                        href="https://play.google.com/store/apps/details?id=fssp.livemass.iMass"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                        title="Ver en iMass"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <Navigation />
    </main>
  );
}
