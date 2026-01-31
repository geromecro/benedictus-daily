"use client";

import { useState, useEffect } from "react";
import { Bell, BellOff, Clock, AlertTriangle, Check, Smartphone } from "lucide-react";
import {
  checkPushSupport,
  getIOSStatus,
  getNotificationPermission,
  subscribeToPush,
  unsubscribeFromPush,
  saveSubscriptionToBackend,
  removeSubscriptionFromBackend,
  updateNotificationTimes,
  isSubscribed,
} from "@/lib/push-notifications";
import { getUserData, saveUserData } from "@/lib/storage";

interface NotificationSettingsProps {
  className?: string;
}

export default function NotificationSettings({ className = "" }: NotificationSettingsProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [laudesTime, setLaudesTime] = useState("07:00");
  const [completasTime, setCompletasTime] = useState("21:30");
  const [rosarioTime, setRosarioTime] = useState("12:00");
  const [lectioTime, setLectioTime] = useState("21:00");
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission | "unsupported">("default");
  const [pushSupport, setPushSupport] = useState<{ supported: boolean; reason?: string }>({ supported: false, reason: "" });
  const [iosStatus, setIosStatus] = useState({ isIOS: false, isStandalone: false, canReceivePush: true });

  // Cargar estado inicial
  useEffect(() => {
    const checkStatus = async () => {
      // Verificar soporte de push
      const support = checkPushSupport();
      setPushSupport(support);

      // Verificar estado de iOS
      const ios = getIOSStatus();
      setIosStatus(ios);

      // Verificar permiso actual
      const permission = getNotificationPermission();
      setPermissionStatus(permission);

      // Cargar datos guardados
      const userData = getUserData();
      setLaudesTime(userData.reminderTimes.laudes);
      setCompletasTime(userData.reminderTimes.completas);
      setRosarioTime(userData.reminderTimes.rosario || "12:00");
      setLectioTime(userData.reminderTimes.lectio || "21:00");

      // Verificar si está suscrito
      if (support.supported) {
        const subscribed = await isSubscribed();
        setIsEnabled(subscribed && permission === "granted");
      }
    };

    checkStatus();
  }, []);

  const handleToggle = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (!isEnabled) {
        // Activar notificaciones
        const subscription = await subscribeToPush();

        if (!subscription) {
          throw new Error("No se pudo obtener la subscription");
        }

        // Guardar en el backend
        const saved = await saveSubscriptionToBackend(
          subscription,
          laudesTime,
          completasTime,
          rosarioTime,
          lectioTime
        );

        if (!saved) {
          throw new Error("Error guardando la subscription en el servidor");
        }

        // Actualizar estado local
        const userData = getUserData();
        saveUserData({
          ...userData,
          reminderTimes: { laudes: laudesTime, completas: completasTime, rosario: rosarioTime, lectio: lectioTime },
        });

        setIsEnabled(true);
        setPermissionStatus("granted");
        setSuccess("Notificaciones activadas correctamente");
      } else {
        // Desactivar notificaciones
        await unsubscribeFromPush();
        await removeSubscriptionFromBackend();

        setIsEnabled(false);
        setSuccess("Notificaciones desactivadas");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setError(message);
      console.error("Error toggle notifications:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTimeChange = async (type: "laudes" | "completas" | "rosario" | "lectio", value: string) => {
    // Actualizar el estado local correspondiente
    switch (type) {
      case "laudes":
        setLaudesTime(value);
        break;
      case "completas":
        setCompletasTime(value);
        break;
      case "rosario":
        setRosarioTime(value);
        break;
      case "lectio":
        setLectioTime(value);
        break;
    }

    // Guardar en localStorage
    const userData = getUserData();
    const newTimes = {
      ...userData.reminderTimes,
      [type]: value,
    };
    saveUserData({ ...userData, reminderTimes: newTimes });

    // Si está habilitado, actualizar en el backend
    if (isEnabled) {
      const newLaudes = type === "laudes" ? value : laudesTime;
      const newCompletas = type === "completas" ? value : completasTime;
      const newRosario = type === "rosario" ? value : rosarioTime;
      const newLectio = type === "lectio" ? value : lectioTime;

      await updateNotificationTimes(newLaudes, newCompletas, newRosario, newLectio);
    }
  };

  const handleTestNotification = async () => {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.ready;
      registration.active?.postMessage({ type: "TEST_PUSH" });
    }
  };

  // Si no hay soporte para push, mostrar mensaje
  if (!pushSupport.supported) {
    return (
      <section className={`card p-6 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
          <BellOff className="w-5 h-5 text-[var(--text-muted)]" />
          <h2 className="font-semibold text-[var(--text-primary)]">
            Recordatorios de Oración
          </h2>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          Tu navegador no soporta notificaciones push.
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-2">
          Razón: {pushSupport.reason}
        </p>
      </section>
    );
  }

  return (
    <section className={`card p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-[var(--primary)]" />
        <h2 className="font-semibold text-[var(--text-primary)]">
          Recordatorios de Oración
        </h2>
      </div>

      {/* Banner iOS si aplica */}
      {iosStatus.isIOS && !iosStatus.isStandalone && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Smartphone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">
                iOS requiere instalación
              </p>
              <p className="text-xs text-amber-700 mt-1">
                Para recibir notificaciones en iOS, agrega esta app a tu pantalla
                de inicio: pulsa el botón compartir y selecciona "Agregar a
                pantalla de inicio".
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle principal */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-medium text-[var(--text-primary)]">
            Activar notificaciones
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Recibe recordatorios aunque la app esté cerrada
          </p>
        </div>
        <button
          onClick={handleToggle}
          disabled={isLoading || (iosStatus.isIOS && !iosStatus.isStandalone)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
            isEnabled
              ? "bg-[var(--success)]"
              : "bg-gray-300"
          } ${isLoading ? "opacity-50" : ""}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
              isEnabled ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>

      {/* Time pickers (solo si está habilitado o el permiso fue otorgado) */}
      {(isEnabled || permissionStatus === "granted") && (
        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-primary)]">
                Laudes (mañana)
              </span>
            </div>
            <input
              type="time"
              value={laudesTime}
              onChange={(e) => handleTimeChange("laudes", e.target.value)}
              className="px-2 py-1 border border-[var(--border)] rounded text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-primary)]">
                Completas (noche)
              </span>
            </div>
            <input
              type="time"
              value={completasTime}
              onChange={(e) => handleTimeChange("completas", e.target.value)}
              className="px-2 py-1 border border-[var(--border)] rounded text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-primary)]">
                Rosario
              </span>
            </div>
            <input
              type="time"
              value={rosarioTime}
              onChange={(e) => handleTimeChange("rosario", e.target.value)}
              className="px-2 py-1 border border-[var(--border)] rounded text-sm"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm text-[var(--text-primary)]">
                Lectio Divina
              </span>
            </div>
            <input
              type="time"
              value={lectioTime}
              onChange={(e) => handleTimeChange("lectio", e.target.value)}
              className="px-2 py-1 border border-[var(--border)] rounded text-sm"
            />
          </div>
        </div>
      )}

      {/* Estado actual */}
      {isEnabled && (
        <div className="flex items-center gap-2 p-3 bg-[var(--success-light)] border border-[var(--success)] rounded-lg mb-4">
          <Check className="w-4 h-4 text-[var(--success)]" />
          <p className="text-sm text-[var(--success)]">
            Notificaciones activadas
          </p>
        </div>
      )}

      {/* Mensajes de error o éxito */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {success && !error && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
          <Check className="w-4 h-4 text-green-500" />
          <p className="text-sm text-green-700">{success}</p>
        </div>
      )}

      {/* Botón de prueba (solo en desarrollo o si está habilitado) */}
      {isEnabled && (
        <button
          onClick={handleTestNotification}
          className="w-full btn btn-ghost text-sm"
        >
          Enviar notificación de prueba
        </button>
      )}

      {/* Información sobre permisos */}
      {permissionStatus === "denied" && (
        <p className="text-xs text-red-500 mt-2">
          Has bloqueado las notificaciones. Para habilitarlas, ve a la
          configuración de tu navegador.
        </p>
      )}
    </section>
  );
}
