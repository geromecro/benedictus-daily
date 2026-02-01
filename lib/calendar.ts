// Calendario litúrgico de Benedictus 2026
// Del 1 de febrero (Septuagésima) al 5 de abril (Pascua)

export type TiempoLiturgico =
  | "septuagesima"
  | "cuaresma"
  | "pasion"
  | "semana_santa"
  | "pascua";

export interface DiaLiturgico {
  dia: number; // 1-64
  fecha: string; // "2026-02-01"
  diaSemana: string; // "D", "L", "M", etc.
  fiesta: string;
  tiempo: TiempoLiturgico;
  esFiesta: boolean; // Si es fiesta (se relaja ayuno)
  esAyuno: boolean; // Miércoles o viernes (excepto fiestas)
  linkIMass?: string;
}

// Fechas clave
export const FECHA_INICIO = "2026-02-01"; // Domingo de Septuagésima
export const FECHA_FIN = "2026-04-05"; // Domingo de Pascua
export const TOTAL_DIAS = 64;

// Miércoles de Ceniza - cuando empiezan los sacrificios
export const MIERCOLES_CENIZA = "2026-02-18";

// Calendario completo de los 64 días
export const CALENDARIO: DiaLiturgico[] = [
  // FEBRERO - Septuagésima y Cuaresma
  { dia: 1, fecha: "2026-02-01", diaSemana: "D", fiesta: "Dominica in Septuagesima", tiempo: "septuagesima", esFiesta: true, esAyuno: false },
  { dia: 2, fecha: "2026-02-02", diaSemana: "L", fiesta: "Purificación de la BVM", tiempo: "septuagesima", esFiesta: true, esAyuno: false },
  { dia: 3, fecha: "2026-02-03", diaSemana: "M", fiesta: "San Blas, Obispo y Mártir", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 4, fecha: "2026-02-04", diaSemana: "Mi", fiesta: "San Andrés Corsini, Obispo y Confesor", tiempo: "septuagesima", esFiesta: false, esAyuno: true },
  { dia: 5, fecha: "2026-02-05", diaSemana: "J", fiesta: "Santa Águeda, Virgen y Mártir", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 6, fecha: "2026-02-06", diaSemana: "V", fiesta: "San Tito, Obispo y Confesor", tiempo: "septuagesima", esFiesta: false, esAyuno: true },
  { dia: 7, fecha: "2026-02-07", diaSemana: "S", fiesta: "San Romualdo, Abad", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 8, fecha: "2026-02-08", diaSemana: "D", fiesta: "Dominica in Sexagesima", tiempo: "septuagesima", esFiesta: true, esAyuno: false },
  { dia: 9, fecha: "2026-02-09", diaSemana: "L", fiesta: "San Cirilo de Alejandría", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 10, fecha: "2026-02-10", diaSemana: "M", fiesta: "Santa Escolástica, Virgen", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 11, fecha: "2026-02-11", diaSemana: "Mi", fiesta: "Nuestra Señora de Lourdes", tiempo: "septuagesima", esFiesta: false, esAyuno: true },
  { dia: 12, fecha: "2026-02-12", diaSemana: "J", fiesta: "Santos Siete Fundadores Servitas", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 13, fecha: "2026-02-13", diaSemana: "V", fiesta: "San Gregorio II", tiempo: "septuagesima", esFiesta: false, esAyuno: true },
  { dia: 14, fecha: "2026-02-14", diaSemana: "S", fiesta: "San Valentín, Sacerdote y Mártir", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 15, fecha: "2026-02-15", diaSemana: "D", fiesta: "Dominica in Quinquagesima", tiempo: "septuagesima", esFiesta: true, esAyuno: false },
  { dia: 16, fecha: "2026-02-16", diaSemana: "L", fiesta: "Santa Juliana", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 17, fecha: "2026-02-17", diaSemana: "M", fiesta: "San Silvín", tiempo: "septuagesima", esFiesta: false, esAyuno: false },
  { dia: 18, fecha: "2026-02-18", diaSemana: "Mi", fiesta: "Miércoles de Ceniza", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 19, fecha: "2026-02-19", diaSemana: "J", fiesta: "San Gabino", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 20, fecha: "2026-02-20", diaSemana: "V", fiesta: "San Sereno", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 21, fecha: "2026-02-21", diaSemana: "S", fiesta: "San Severiano", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 22, fecha: "2026-02-22", diaSemana: "D", fiesta: "Dominica I in Quadragesima", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 23, fecha: "2026-02-23", diaSemana: "L", fiesta: "San Pedro Damián", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 24, fecha: "2026-02-24", diaSemana: "M", fiesta: "San Matías, Apóstol", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 25, fecha: "2026-02-25", diaSemana: "Mi", fiesta: "Miércoles de Témporas", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 26, fecha: "2026-02-26", diaSemana: "J", fiesta: "San Alejandro", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 27, fecha: "2026-02-27", diaSemana: "V", fiesta: "Viernes de Témporas", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 28, fecha: "2026-02-28", diaSemana: "S", fiesta: "Sábado de Témporas", tiempo: "cuaresma", esFiesta: false, esAyuno: false },

  // MARZO - Cuaresma continúa
  { dia: 29, fecha: "2026-03-01", diaSemana: "D", fiesta: "Dominica II in Quadragesima", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 30, fecha: "2026-03-02", diaSemana: "L", fiesta: "Santos Jovino y Basileo", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 31, fecha: "2026-03-03", diaSemana: "M", fiesta: "San Emeterio y Celedonio", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 32, fecha: "2026-03-04", diaSemana: "Mi", fiesta: "San Casimiro, Confesor", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 33, fecha: "2026-03-05", diaSemana: "J", fiesta: "San Adrián", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 34, fecha: "2026-03-06", diaSemana: "V", fiesta: "Santas Perpetua y Felicidad, Mártires", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 35, fecha: "2026-03-07", diaSemana: "S", fiesta: "Santo Tomás de Aquino, Confesor y Doctor", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 36, fecha: "2026-03-08", diaSemana: "D", fiesta: "Dominica III in Quadragesima", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 37, fecha: "2026-03-09", diaSemana: "L", fiesta: "Santa Francisca Romana", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 38, fecha: "2026-03-10", diaSemana: "M", fiesta: "Los Cuarenta Santos Mártires de Sebaste", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 39, fecha: "2026-03-11", diaSemana: "Mi", fiesta: "San Eulogio de Córdoba", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 40, fecha: "2026-03-12", diaSemana: "J", fiesta: "San Gregorio Papa, Confesor y Doctor", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 41, fecha: "2026-03-13", diaSemana: "V", fiesta: "Santos Rodrigo y Salomón", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 42, fecha: "2026-03-14", diaSemana: "S", fiesta: "Santa Matilde", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 43, fecha: "2026-03-15", diaSemana: "D", fiesta: "Dominica IV in Quadragesima - Lætare", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 44, fecha: "2026-03-16", diaSemana: "L", fiesta: "San Ciriaco", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 45, fecha: "2026-03-17", diaSemana: "M", fiesta: "San Patricio, Obispo y Confesor", tiempo: "cuaresma", esFiesta: false, esAyuno: false },
  { dia: 46, fecha: "2026-03-18", diaSemana: "Mi", fiesta: "San Cirilo de Jerusalén, Obispo y Doctor", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 47, fecha: "2026-03-19", diaSemana: "J", fiesta: "San José, Esposo de la BVM, Confesor", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 48, fecha: "2026-03-20", diaSemana: "V", fiesta: "San Martín Dumiense", tiempo: "cuaresma", esFiesta: false, esAyuno: true },
  { dia: 49, fecha: "2026-03-21", diaSemana: "S", fiesta: "San Benito de Nursia, Abad", tiempo: "cuaresma", esFiesta: true, esAyuno: false },
  { dia: 50, fecha: "2026-03-22", diaSemana: "D", fiesta: "Dominica de Passione", tiempo: "pasion", esFiesta: true, esAyuno: false },
  { dia: 51, fecha: "2026-03-23", diaSemana: "L", fiesta: "San José Oriol", tiempo: "pasion", esFiesta: false, esAyuno: false },
  { dia: 52, fecha: "2026-03-24", diaSemana: "M", fiesta: "San Gabriel Arcángel", tiempo: "pasion", esFiesta: false, esAyuno: false },
  { dia: 53, fecha: "2026-03-25", diaSemana: "Mi", fiesta: "La Anunciación de María Santísima", tiempo: "pasion", esFiesta: true, esAyuno: false },
  { dia: 54, fecha: "2026-03-26", diaSemana: "J", fiesta: "San Braulio de Zaragoza", tiempo: "pasion", esFiesta: false, esAyuno: false },
  { dia: 55, fecha: "2026-03-27", diaSemana: "V", fiesta: "Mater Dolorosa", tiempo: "pasion", esFiesta: false, esAyuno: true },
  { dia: 56, fecha: "2026-03-28", diaSemana: "S", fiesta: "San Juan Capistrano, Confesor", tiempo: "pasion", esFiesta: false, esAyuno: false },
  { dia: 57, fecha: "2026-03-29", diaSemana: "D", fiesta: "Domingo de Ramos", tiempo: "semana_santa", esFiesta: true, esAyuno: false },
  { dia: 58, fecha: "2026-03-30", diaSemana: "L", fiesta: "Lunes Santo", tiempo: "semana_santa", esFiesta: false, esAyuno: false },
  { dia: 59, fecha: "2026-03-31", diaSemana: "M", fiesta: "Martes Santo", tiempo: "semana_santa", esFiesta: false, esAyuno: false },

  // ABRIL - Semana Santa y Pascua
  { dia: 60, fecha: "2026-04-01", diaSemana: "Mi", fiesta: "Miércoles Santo", tiempo: "semana_santa", esFiesta: false, esAyuno: true },
  { dia: 61, fecha: "2026-04-02", diaSemana: "J", fiesta: "Jueves Santo", tiempo: "semana_santa", esFiesta: true, esAyuno: false },
  { dia: 62, fecha: "2026-04-03", diaSemana: "V", fiesta: "Viernes Santo", tiempo: "semana_santa", esFiesta: true, esAyuno: true },
  { dia: 63, fecha: "2026-04-04", diaSemana: "S", fiesta: "Sábado Santo", tiempo: "semana_santa", esFiesta: true, esAyuno: false },
  { dia: 64, fecha: "2026-04-05", diaSemana: "D", fiesta: "Domingo de Resurrección", tiempo: "pascua", esFiesta: true, esAyuno: false },
];

// Timezone de Argentina para cálculos consistentes
const TIMEZONE_ARGENTINA = "America/Argentina/Buenos_Aires";

// Obtener fecha actual en Argentina como string YYYY-MM-DD
export function getFechaArgentina(): string {
  const now = new Date();
  return now.toLocaleDateString("en-CA", { timeZone: TIMEZONE_ARGENTINA }); // en-CA da formato YYYY-MM-DD
}

// Funciones auxiliares
export function getDiaActual(): number {
  const hoyStr = getFechaArgentina();

  // Comparar strings de fecha directamente para evitar problemas de timezone
  if (hoyStr < FECHA_INICIO) return 0; // Antes del programa
  if (hoyStr > FECHA_FIN) return 65; // Después del programa

  // Calcular diferencia de días usando las fechas como strings
  const hoyParts = hoyStr.split("-").map(Number);
  const inicioParts = FECHA_INICIO.split("-").map(Number);

  // Crear fechas a medianoche UTC para cálculo limpio
  const hoyUtc = Date.UTC(hoyParts[0], hoyParts[1] - 1, hoyParts[2]);
  const inicioUtc = Date.UTC(inicioParts[0], inicioParts[1] - 1, inicioParts[2]);

  const diffMs = hoyUtc - inicioUtc;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  return diffDays + 1; // Día 1-64
}

export function getDiaLiturgico(dia?: number): DiaLiturgico | null {
  const diaNum = dia || getDiaActual();
  if (diaNum < 1 || diaNum > 64) return null;
  return CALENDARIO[diaNum - 1];
}

export function getDiaLiturgicoPorFecha(fecha: string): DiaLiturgico | null {
  return CALENDARIO.find(d => d.fecha === fecha) || null;
}

export function getTiempoLiturgico(): TiempoLiturgico | null {
  const dia = getDiaLiturgico();
  return dia?.tiempo || null;
}

export function esDiaDeAyuno(fecha?: string): boolean {
  const dia = fecha ? getDiaLiturgicoPorFecha(fecha) : getDiaLiturgico();
  return dia?.esAyuno || false;
}

export function esFiesta(fecha?: string): boolean {
  const dia = fecha ? getDiaLiturgicoPorFecha(fecha) : getDiaLiturgico();
  return dia?.esFiesta || false;
}

export function estaDentroDeCuaresma(fecha?: string): boolean {
  const fechaCheck = fecha || getFechaArgentina();
  return fechaCheck >= MIERCOLES_CENIZA;
}

export function getTiempoLiturgicoLabel(tiempo: TiempoLiturgico): string {
  const labels: Record<TiempoLiturgico, string> = {
    septuagesima: "Septuagésima",
    cuaresma: "Cuaresma",
    pasion: "Tiempo de Pasión",
    semana_santa: "Semana Santa",
    pascua: "Pascua",
  };
  return labels[tiempo];
}

export function getTiempoLiturgicoBadgeClass(tiempo: TiempoLiturgico): string {
  const classes: Record<TiempoLiturgico, string> = {
    septuagesima: "badge-septuagesima",
    cuaresma: "badge-cuaresma",
    pasion: "badge-pasion",
    semana_santa: "badge-semana-santa",
    pascua: "badge-pascua",
  };
  return classes[tiempo];
}

// Para desarrollo: simular que estamos en una fecha del programa
export function getSimulatedDia(offsetDays: number = 0): number {
  // En desarrollo, podemos simular estar en el día X
  // Para producción, usar getDiaActual()
  return Math.min(64, Math.max(1, 1 + offsetDays));
}
