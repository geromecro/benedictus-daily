"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Settings, Check, Trash2, Download, Upload, FileText } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import {
  getUserData,
  saveUserData,
  resetAllData,
  exportData,
  importData,
  DEFAULT_ORA_COMMITMENTS,
  DEFAULT_LABORA_COMMITMENTS,
  SUGGESTED_SACRIFICES,
  UserData,
} from "@/lib/storage";
import NotificationSettings from "@/components/NotificationSettings";

export default function ConfiguracionPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [customSacrifice, setCustomSacrifice] = useState("");

  useEffect(() => {
    setUserData(getUserData());
  }, []);

  const handleToggleOra = (id: string) => {
    if (!userData) return;

    const newActive = userData.activeOraCommitments.includes(id)
      ? userData.activeOraCommitments.filter(c => c !== id)
      : [...userData.activeOraCommitments, id];

    const updated = { ...userData, activeOraCommitments: newActive };
    saveUserData(updated);
    setUserData(updated);
  };

  const handleToggleLabora = (id: string) => {
    if (!userData) return;

    const newActive = userData.activeLaboraCommitments.includes(id)
      ? userData.activeLaboraCommitments.filter(c => c !== id)
      : [...userData.activeLaboraCommitments, id];

    const updated = { ...userData, activeLaboraCommitments: newActive };
    saveUserData(updated);
    setUserData(updated);
  };

  const handleAddSacrifice = (sacrifice: string) => {
    if (!userData || userData.sacrifices.length >= 3) return;

    const updated = { ...userData, sacrifices: [...userData.sacrifices, sacrifice] };
    saveUserData(updated);
    setUserData(updated);
  };

  const handleRemoveSacrifice = (index: number) => {
    if (!userData) return;

    const newSacrifices = userData.sacrifices.filter((_, i) => i !== index);
    const updated = { ...userData, sacrifices: newSacrifices };
    saveUserData(updated);
    setUserData(updated);
  };

  const handleAddCustomSacrifice = () => {
    if (!customSacrifice.trim() || !userData || userData.sacrifices.length >= 3) return;
    handleAddSacrifice(customSacrifice.trim());
    setCustomSacrifice("");
  };

  const handleReset = () => {
    resetAllData();
    setUserData(getUserData());
    setShowResetConfirm(false);
  };

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `benedictus-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (importData(content)) {
        setUserData(getUserData());
        alert("Datos restaurados correctamente");
      } else {
        alert("Error al importar los datos");
      }
    };
    reader.readAsText(file);
  };

  if (!userData) {
    return (
      <main className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <p className="text-[var(--text-muted)]">Cargando...</p>
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
            <Settings className="w-6 h-6 text-[var(--primary)]" />
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Configuración
            </h1>
          </div>
        </header>

        {/* Recordatorios de Oración (Push Notifications) */}
        <NotificationSettings className="mb-6" />

        {/* Compromisos ORA */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">
            Compromisos de Oración (ORA)
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Selecciona los compromisos que deseas seguir:
          </p>

          <div className="space-y-2">
            {DEFAULT_ORA_COMMITMENTS.map(commitment => (
              <button
                key={commitment.id}
                onClick={() => handleToggleOra(commitment.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  userData.activeOraCommitments.includes(commitment.id)
                    ? "bg-[var(--success-light)] border-[var(--success)]"
                    : "bg-[var(--surface)] border-[var(--border-light)] hover:border-[var(--secondary)]"
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center ${
                  userData.activeOraCommitments.includes(commitment.id)
                    ? "bg-[var(--success)]"
                    : "border-2 border-[var(--border)]"
                }`}>
                  {userData.activeOraCommitments.includes(commitment.id) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-[var(--text-primary)]">
                    {commitment.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {commitment.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Compromisos LABORA */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">
            Compromisos de Trabajo (LABORA)
          </h2>

          <div className="space-y-2">
            {DEFAULT_LABORA_COMMITMENTS.map(commitment => (
              <button
                key={commitment.id}
                onClick={() => handleToggleLabora(commitment.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  userData.activeLaboraCommitments.includes(commitment.id)
                    ? "bg-[var(--success-light)] border-[var(--success)]"
                    : "bg-[var(--surface)] border-[var(--border-light)] hover:border-[var(--secondary)]"
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center ${
                  userData.activeLaboraCommitments.includes(commitment.id)
                    ? "bg-[var(--success)]"
                    : "border-2 border-[var(--border)]"
                }`}>
                  {userData.activeLaboraCommitments.includes(commitment.id) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <div className="text-left flex-1">
                  <p className="font-medium text-[var(--text-primary)]">
                    {commitment.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {commitment.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* REALITAS - Compromisos personales */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-2">
            Realitas
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Elige 3 compromisos para habitar la realidad (desde el Miércoles de Ceniza):
          </p>

          {/* Compromisos elegidos */}
          {userData.sacrifices.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-[var(--text-secondary)] mb-2 uppercase tracking-wide">
                Tus compromisos ({userData.sacrifices.length}/3):
              </p>
              <div className="space-y-2">
                {userData.sacrifices.map((sacrifice, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-[var(--ultramarine)] bg-opacity-10 rounded-lg"
                  >
                    <span className="text-[var(--text-primary)]">{sacrifice}</span>
                    <button
                      onClick={() => handleRemoveSacrifice(index)}
                      className="p-1 text-[var(--text-muted)] hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agregar sacrificio */}
          {userData.sacrifices.length < 3 && (
            <>
              <p className="text-xs text-[var(--text-secondary)] mb-2 uppercase tracking-wide">
                Sugerencias:
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {SUGGESTED_SACRIFICES.filter(s => !userData.sacrifices.includes(s.label)).slice(0, 6).map(sacrifice => (
                  <button
                    key={sacrifice.id}
                    onClick={() => handleAddSacrifice(sacrifice.label)}
                    className="p-2 text-sm text-left bg-[var(--surface)] border border-[var(--border-light)] rounded-lg hover:border-[var(--ultramarine)] transition-colors"
                  >
                    {sacrifice.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={customSacrifice}
                  onChange={(e) => setCustomSacrifice(e.target.value)}
                  placeholder="Escribir uno propio..."
                  className="flex-1 px-3 py-2 border border-[var(--border)] rounded-lg text-sm focus:outline-none focus:border-[var(--primary)]"
                />
                <button
                  onClick={handleAddCustomSacrifice}
                  disabled={!customSacrifice.trim()}
                  className="btn btn-primary text-sm disabled:opacity-50"
                >
                  Agregar
                </button>
              </div>
            </>
          )}
        </section>

        {/* Backup y Reset */}
        <section className="card p-6 mb-6">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">
            Datos
          </h2>

          <div className="space-y-3">
            <button
              onClick={handleExport}
              className="w-full btn btn-secondary justify-start"
            >
              <Download className="w-4 h-4" />
              Exportar datos (backup)
            </button>

            <label className="w-full btn btn-secondary justify-start cursor-pointer">
              <Upload className="w-4 h-4" />
              Importar datos
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-full btn btn-ghost text-red-500 border-red-200 justify-start hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
              Borrar todos los datos
            </button>
          </div>
        </section>

        {/* Modal de confirmación de reset */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="card p-6 max-w-sm w-full">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                ¿Borrar todos los datos?
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                Esta acción no se puede deshacer. Se eliminarán todos tus progresos y configuraciones.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 btn btn-secondary"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 btn bg-red-500 text-white hover:bg-red-600"
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Guía del Itinerario */}
        <section className="card p-6 mb-6">
          <a
            href="https://docs.google.com/document/d/1ThA-xnXO47V3r-8dm8DM3Wvl2YwbJf0CjZa7OVUj6l8/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--gold)] bg-opacity-10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[var(--text-primary)]">
                Guía del Itinerario
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Indicaciones, explicaciones y más
              </p>
            </div>
            <span className="text-[var(--text-muted)]">→</span>
          </a>
        </section>

        {/* Info de la app */}
        <section className="text-center text-sm text-[var(--text-muted)] mb-6">
          <p>Benedictus Daily v1.0</p>
          <p className="mt-1">
            "Ora et Labora"
          </p>
        </section>
      </div>

      <Navigation />
    </main>
  );
}
