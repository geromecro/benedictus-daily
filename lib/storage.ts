// Sistema de almacenamiento local para Benedictus Daily

const STORAGE_KEY = "benedictus_data";

// Tipos de datos
export interface ReminderTimes {
  laudes: string; // "07:00"
  completas: string; // "21:30"
  rosario: string; // "12:00"
  lectio: string; // "21:00"
}

export interface DailyProgress {
  ora: string[]; // IDs de compromisos ORA completados
  lectio: boolean;
  labora: string[]; // IDs de compromisos LABORA completados
  sacrifices: boolean[]; // Estado de los 3 sacrificios
}

export interface UserData {
  // Configuración inicial (se define una vez)
  isOnboarded: boolean;
  activeOraCommitments: string[];
  activeLaboraCommitments: string[];
  sacrifices: string[]; // 3 sacrificios elegidos
  reminderTimes: ReminderTimes;

  // Notificaciones push
  notificationsEnabled: boolean;

  // Progreso diario
  dailyProgress: {
    [date: string]: DailyProgress; // "2026-02-15"
  };

  // Estadísticas
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate: string | null;
}

// Valores por defecto
export const DEFAULT_ORA_COMMITMENTS = [
  { id: "laudes", label: "Laudes", description: "Oración de la mañana" },
  { id: "completas", label: "Completas", description: "Oración de la noche" },
  { id: "rosario", label: "Rosario", description: "Rosario diario" },
  { id: "oracion_personal", label: "Oración personal", description: "20-30 minutos de meditación o lectio divina" },
  { id: "misa_dominical", label: "Misa dominical", description: "Misa del domingo" },
  { id: "misa_semanal", label: "Misa entre semana", description: "1-2 misas adicionales" },
  { id: "accion_gracias", label: "Acción de gracias", description: "15 minutos después de comulgar" },
  { id: "via_crucis", label: "Vía Crucis", description: "Viernes de Cuaresma" },
  { id: "adoracion", label: "Adoración", description: "Visita al Santísimo" },
  { id: "visperas", label: "Vísperas", description: "En fiestas litúrgicas" },
];

export const DEFAULT_LABORA_COMMITMENTS = [
  { id: "puntualidad", label: "Puntualidad en comidas", description: "Llegar a tiempo a las comidas familiares" },
  { id: "bendicion", label: "Bendecir alimentos", description: "Oración antes de comer" },
  { id: "tareas_hogar", label: "Tareas del hogar", description: "Colaborar con generosidad" },
  { id: "presencia", label: "Presencia real", description: "Estar presente con los demás" },
];

export const SUGGESTED_SACRIFICES = [
  { id: "horario_acostar", label: "Ordenar horario de acostar", description: "Establecer una hora fija para dormir" },
  { id: "levantarse_temprano", label: "Levantarse temprano", description: "Madrugar con disciplina" },
  { id: "duchas_frias", label: "Duchas con agua fría", description: "Ofrecer la incomodidad" },
  { id: "ejercicio", label: "Ejercicio físico regular", description: "Cuidar el cuerpo como templo" },
  { id: "no_compras", label: "No compras innecesarias", description: "Evitar gastos superfluos" },
  { id: "sin_alcohol", label: "Renunciar al alcohol", description: "Abstinencia de bebidas alcohólicas" },
  { id: "sin_azucar", label: "Sin bebidas azucaradas", description: "Eliminar refrescos y jugos procesados" },
  { id: "sin_dulces", label: "Renunciar a dulces", description: "Abstinencia de postres y golosinas" },
  { id: "no_snacks", label: "No comer entre comidas", description: "Disciplina alimentaria" },
  { id: "sin_sal", label: "No agregar sal", description: "Pequeña mortificación diaria" },
];

// Datos iniciales por defecto
const DEFAULT_USER_DATA: UserData = {
  isOnboarded: false,
  activeOraCommitments: ["laudes", "completas", "rosario", "oracion_personal", "misa_dominical"],
  activeLaboraCommitments: ["puntualidad", "bendicion", "tareas_hogar", "presencia"],
  sacrifices: [],
  reminderTimes: {
    laudes: "07:00",
    completas: "21:30",
    rosario: "12:00",
    lectio: "21:00",
  },
  notificationsEnabled: false,
  dailyProgress: {},
  currentStreak: 0,
  longestStreak: 0,
  lastCompletedDate: null,
};

// Funciones de almacenamiento
export function getUserData(): UserData {
  if (typeof window === "undefined") {
    return DEFAULT_USER_DATA;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_USER_DATA, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error("Error reading from localStorage:", error);
  }

  return DEFAULT_USER_DATA;
}

export function saveUserData(data: Partial<UserData>): void {
  if (typeof window === "undefined") return;

  try {
    const current = getUserData();
    const updated = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

// Timezone de Argentina para consistencia con calendar.ts
const TIMEZONE_ARGENTINA = "America/Argentina/Buenos_Aires";

// Funciones específicas para progreso diario
export function getTodayKey(): string {
  const now = new Date();
  // Usar timezone de Argentina para consistencia con getDiaActual() de calendar.ts
  return now.toLocaleDateString("en-CA", { timeZone: TIMEZONE_ARGENTINA }); // "2026-02-15"
}

export function getDailyProgress(date?: string): DailyProgress {
  const key = date || getTodayKey();
  const data = getUserData();

  // Crear array de sacrificios con el tamaño correcto basado en la configuración del usuario
  const numSacrifices = data.sacrifices.length || 3;
  const defaultSacrifices = Array(numSacrifices).fill(false);

  const existingProgress = data.dailyProgress[key];

  if (existingProgress) {
    // Si ya existe progreso, asegurar que el array de sacrificios tenga el tamaño correcto
    // Si el usuario agregó más sacrificios después, expandir el array
    // Si redujo sacrificios, truncar el array
    const currentSacrifices = existingProgress.sacrifices || [];
    const adjustedSacrifices = Array(numSacrifices)
      .fill(false)
      .map((_, i) => currentSacrifices[i] ?? false);

    return {
      ...existingProgress,
      sacrifices: adjustedSacrifices,
    };
  }

  return {
    ora: [],
    lectio: false,
    labora: [],
    sacrifices: defaultSacrifices,
  };
}

export function saveDailyProgress(progress: DailyProgress, date?: string): void {
  const key = date || getTodayKey();
  const data = getUserData();

  data.dailyProgress[key] = progress;

  // Actualizar racha
  const { currentStreak, longestStreak } = calculateStreak(data);
  data.currentStreak = currentStreak;
  data.longestStreak = Math.max(longestStreak, data.longestStreak);
  data.lastCompletedDate = key;

  saveUserData(data);
}

export function toggleOraCommitment(commitmentId: string, date?: string): DailyProgress {
  const key = date || getTodayKey();
  const progress = getDailyProgress(key);

  if (progress.ora.includes(commitmentId)) {
    progress.ora = progress.ora.filter(id => id !== commitmentId);
  } else {
    progress.ora.push(commitmentId);
  }

  saveDailyProgress(progress, key);
  return progress;
}

export function toggleLaboraCommitment(commitmentId: string, date?: string): DailyProgress {
  const key = date || getTodayKey();
  const progress = getDailyProgress(key);

  if (progress.labora.includes(commitmentId)) {
    progress.labora = progress.labora.filter(id => id !== commitmentId);
  } else {
    progress.labora.push(commitmentId);
  }

  saveDailyProgress(progress, key);
  return progress;
}

export function toggleLectio(date?: string): DailyProgress {
  const key = date || getTodayKey();
  const progress = getDailyProgress(key);
  progress.lectio = !progress.lectio;
  saveDailyProgress(progress, key);
  return progress;
}

export function toggleSacrifice(index: number, date?: string): DailyProgress {
  const key = date || getTodayKey();
  const progress = getDailyProgress(key);
  progress.sacrifices[index] = !progress.sacrifices[index];
  saveDailyProgress(progress, key);
  return progress;
}

// Cálculo de racha
function calculateStreak(data: UserData): { currentStreak: number; longestStreak: number } {
  const dates = Object.keys(data.dailyProgress).sort().reverse();
  if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 };

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const today = getTodayKey();
  // Calcular "ayer" usando timezone de Argentina
  const todayParts = today.split("-").map(Number);
  const yesterdayDate = new Date(Date.UTC(todayParts[0], todayParts[1] - 1, todayParts[2] - 1));
  const yesterdayKey = yesterdayDate.toISOString().split("T")[0];

  // Verificar si el día más reciente es hoy o ayer
  const mostRecent = dates[0];
  if (mostRecent !== today && mostRecent !== yesterdayKey) {
    return { currentStreak: 0, longestStreak: data.longestStreak };
  }

  for (let i = 0; i < dates.length; i++) {
    const dateKey = dates[i];
    const progress = data.dailyProgress[dateKey];

    // Un día está "completo" si tiene al menos el 70% de compromisos activos
    const totalActive = data.activeOraCommitments.length + data.activeLaboraCommitments.length;
    const totalCompleted = progress.ora.length + progress.labora.length + (progress.lectio ? 1 : 0);
    const completionRate = totalCompleted / (totalActive + 1); // +1 por lectio

    if (completionRate >= 0.7) {
      tempStreak++;
      if (i === 0 || isConsecutiveDay(dates[i - 1], dateKey)) {
        currentStreak = tempStreak;
      }
    } else {
      longestStreak = Math.max(longestStreak, tempStreak);
      tempStreak = 0;
      if (i === 0) currentStreak = 0;
    }
  }

  longestStreak = Math.max(longestStreak, tempStreak);

  return { currentStreak, longestStreak };
}

function isConsecutiveDay(prev: string, current: string): boolean {
  const prevDate = new Date(prev);
  const currentDate = new Date(current);
  const diff = prevDate.getTime() - currentDate.getTime();
  return Math.abs(diff) === 24 * 60 * 60 * 1000;
}

// Exportar datos (backup)
export function exportData(): string {
  const data = getUserData();
  return JSON.stringify(data, null, 2);
}

// Importar datos (restore)
export function importData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString) as UserData;
    saveUserData(data);
    return true;
  } catch {
    return false;
  }
}

// Reset completo
export function resetAllData(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
