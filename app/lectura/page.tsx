"use client";

import { ArrowLeft, BookOpen, ExternalLink, MessageSquare, Cross } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getDiaActual, getDiaLiturgico, getTiempoLiturgicoLabel, getTiempoLiturgicoBadgeClass } from "@/lib/calendar";
import { useOpenIMass } from "@/lib/imass";
import { getLectura } from "@/lib/lecturas";

export default function LecturaPage() {
  const openIMass = useOpenIMass();

  const diaActual = getDiaActual();
  const dia = diaActual > 0 && diaActual <= 64 ? diaActual : 1;
  const diaLiturgico = getDiaLiturgico(dia);
  const lectura = getLectura(dia);

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

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                Lectura del día
              </h1>
              {diaLiturgico && (
                <p className="text-[var(--text-muted)] mt-1">
                  Día {dia} — {diaLiturgico.fiesta}
                </p>
              )}
            </div>
            {diaLiturgico && (
              <span className={`badge ${getTiempoLiturgicoBadgeClass(diaLiturgico.tiempo)}`}>
                {getTiempoLiturgicoLabel(diaLiturgico.tiempo)}
              </span>
            )}
          </div>
        </header>

        {/* Comentario del día (si existe) */}
        {lectura.comentario && (
          <article className="card p-6 mb-6 bg-amber-50 border-amber-200">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-amber-700" />
              <h2 className="text-lg font-semibold text-amber-900">
                Comentario del día
              </h2>
            </div>
            <div className="prose prose-stone max-w-none">
              {lectura.comentario.split("\n\n").map((parrafo, index) => (
                <p
                  key={index}
                  className="text-amber-900 leading-relaxed mb-4 last:mb-0"
                >
                  {parrafo}
                </p>
              ))}
            </div>
          </article>
        )}

        {/* Lectura Litúrgica (si existe) */}
        {lectura.lecturaLiturgica && (
          <article className="card p-6 mb-6 bg-purple-50 border-purple-200">
            <div className="flex items-center gap-2 mb-4">
              <Cross className="w-5 h-5 text-purple-700" />
              <h2 className="text-lg font-semibold text-purple-900">
                Lectura Litúrgica
              </h2>
            </div>
            <p className="text-sm text-purple-700 mb-4 italic font-medium">
              {lectura.lecturaLiturgica.titulo}
            </p>
            <div className="prose prose-stone max-w-none">
              {lectura.lecturaLiturgica.contenido.split("\n\n").map((parrafo, index) => (
                <p
                  key={index}
                  className="text-purple-900 leading-relaxed mb-4 last:mb-0"
                >
                  {parrafo}
                </p>
              ))}
            </div>
          </article>
        )}

        {/* Lectura Espiritual */}
        <article className="card p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-[var(--primary)]" />
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Lectura Espiritual
            </h2>
          </div>

          <h3 className="text-md font-medium text-[var(--text-primary)] mb-2">
            {lectura.lecturaEspiritual.titulo}
          </h3>

          <p className="text-sm text-[var(--text-muted)] mb-4 italic">
            {lectura.lecturaEspiritual.fuente}
          </p>

          <div className="prose prose-stone max-w-none">
            {lectura.lecturaEspiritual.contenido.split("\n\n").map((parrafo, index) => (
              <p
                key={index}
                className="text-[var(--text-primary)] leading-relaxed mb-4 last:mb-0"
              >
                {parrafo}
              </p>
            ))}
          </div>
        </article>

        {/* Link a iMass para el Oficio */}
        <section className="mb-6">
          <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-3 uppercase tracking-wide">
            Oficio Divino
          </h3>

          <button
            onClick={openIMass}
            className="card p-4 flex items-center gap-3 hover:shadow-md transition-shadow w-full text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--primary)] bg-opacity-10 flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[var(--text-primary)]">
                Rezar el Oficio Divino
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Laudes, Vísperas, Completas en Divinum Officium
              </p>
            </div>
            <span className="text-[var(--text-muted)]">→</span>
          </button>
        </section>

      </div>

      <Navigation />
    </main>
  );
}
