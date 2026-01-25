"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getDiaActual, getDiaLiturgico, getTiempoLiturgicoLabel, getTiempoLiturgicoBadgeClass } from "@/lib/calendar";
import { useOpenIMass } from "@/lib/imass";

// Lecturas placeholder - serán reemplazadas con el contenido real
const LECTURAS_PLACEHOLDER: Record<number, { titulo: string; fuente: string; contenido: string }> = {
  1: {
    titulo: "La vocación de Benito",
    fuente: "Vida de San Benito, cap. 1",
    contenido: `Hubo un hombre de vida venerable, por gracia y por nombre Benito, que desde su más tierna infancia tuvo un corazón de anciano. Adelantándose por sus costumbres a su edad, no entregó su alma a ningún placer.

Cuando aún vivía en este mundo, pudiendo haber gozado de él libremente, despreció como marchita la flor del mundo que se abría ante él.

Nacido en la provincia de Nursia, de noble familia, fue enviado a Roma para el estudio de las letras liberales. Pero viendo que muchos se precipitaban por el despeñadero del vicio, retiró el pie que acababa de poner en el umbral del mundo, temiendo que si participaba algo de su sabiduría, también él se despeñase todo entero en tan gran precipicio.

Despreciando, pues, los estudios literarios, abandonó la casa y los bienes de su padre y, deseando agradar sólo a Dios, buscó el hábito de la vida monástica. Se retiró, pues, sabiamente ignorante y sabiamente inculto.`,
  },
  2: {
    titulo: "El primer milagro de Benito",
    fuente: "Vida de San Benito, cap. 2",
    contenido: `No conozco todos sus hechos, pero los pocos que voy a referir los supe por el relato de cuatro de sus discípulos: Constantino, varón reverendísimo, que le sucedió en el gobierno del monasterio; Valentiniano, que durante muchos años estuvo al frente del monasterio de Letrán; Simplicio, que después de él gobernó en tercer lugar la comunidad de los monjes; y Honorato, que actualmente todavía rige el monasterio donde él comenzó la vida monástica.

Benito, pues, abandonados los estudios literarios, decidió retirarse al desierto. Le siguió únicamente su nodriza, que le amaba entrañablemente. Cuando llegaron al lugar llamado Effide, detenidos por el cariño de muchos hombres de bien, que les ofrecían su hospitalidad, se quedaron junto a la iglesia de San Pedro.

Su nodriza pidió prestado a unas vecinas un cedazo para limpiar el trigo. Dejándolo inadvertidamente sobre la mesa, lo encontró roto en dos pedazos. Al verlo, se echó a llorar amargamente. Benito, joven piadoso y compasivo, al verla llorar, movido a compasión, recogió los dos fragmentos del cedazo y con lágrimas se puso a orar. Cuando se levantó de la oración, encontró junto a sí el cedazo tan entero, que no se hallaba en él rastro alguno de rotura.`,
  },
  // ... más lecturas se agregarán
};

// Lectura por defecto para días sin contenido
const LECTURA_DEFAULT = {
  titulo: "Lectura del día",
  fuente: "Regla de San Benito",
  contenido: `"Escucha, hijo, los preceptos del maestro e inclina el oído de tu corazón; recibe con gusto el consejo de un padre piadoso y ponlo por obra, a fin de que por el trabajo de la obediencia vuelvas a Aquel de quien te habías alejado por la desidia de la desobediencia."

Esta lectura será provista próximamente. Mientras tanto, te invitamos a rezar el Oficio Divino del día en la aplicación iMass.`,
};

export default function LecturaPage() {
  const [diaSimulado, setDiaSimulado] = useState<number>(1);
  const openIMass = useOpenIMass();

  useEffect(() => {
    const diaReal = getDiaActual();
    setDiaSimulado(diaReal > 0 && diaReal <= 64 ? diaReal : 1);
  }, []);

  const diaLiturgico = getDiaLiturgico(diaSimulado);
  const lectura = LECTURAS_PLACEHOLDER[diaSimulado] || LECTURA_DEFAULT;

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
                  Día {diaSimulado} — {diaLiturgico.fiesta}
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

        {/* Contenido de la lectura */}
        <article className="card p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-[var(--primary)]" />
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              {lectura.titulo}
            </h2>
          </div>

          <p className="text-sm text-[var(--text-muted)] mb-4 italic">
            {lectura.fuente}
          </p>

          <div className="prose prose-stone max-w-none">
            {lectura.contenido.split("\n\n").map((parrafo, index) => (
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

        {/* Selector de día para desarrollo */}
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <label className="text-xs text-yellow-700 block mb-1">
            Ver lectura del día (desarrollo):
          </label>
          <input
            type="range"
            min="1"
            max="64"
            value={diaSimulado}
            onChange={(e) => setDiaSimulado(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-xs text-yellow-700">Día {diaSimulado}</span>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
