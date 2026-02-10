// Supabase Edge Function para enviar mensajes al grupo de Telegram
// Se invoca desde pg_cron para enviar recordatorios y lecturas

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Tipos
interface TelegramRequest {
  type: "laudes" | "completas" | "lectio" | "test" | "custom";
  custom_text?: string;
  dia_actual?: number; // Para lectio, el día del calendario (1-64)
}

interface TelegramResponse {
  ok: boolean;
  result?: unknown;
  description?: string;
}

interface DiaLiturgico {
  dia: number;
  fecha: string;
  diaSemana: string;
  fiesta: string;
  tiempo: string;
  esFiesta: boolean;
  esAyuno: boolean;
}

// Configuración
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const TELEGRAM_GROUP_CHAT_ID = Deno.env.get("TELEGRAM_GROUP_CHAT_ID")!;

// URL de la aplicación
const APP_URL = "https://benedictus-daily.vercel.app";

// Los Instrumentos de las Buenas Obras - Regla de San Benito, Cap. 4
// 64 instrumentos, uno por cada día del desafío
const INSTRUMENTOS: string[] = [
  "Primero, amar al Señor Dios con todo el corazón, con toda el alma y con todas las fuerzas", // 1
  "Después, al prójimo como a sí mismo", // 2
  "Luego, no matar", // 3
  "No cometer adulterio", // 4
  "No hurtar", // 5
  "No codiciar", // 6
  "No levantar falso testimonio", // 7
  "Honrar a todos los hombres", // 8
  "No hacer a otro lo que uno no quiere para sí", // 9
  "Negarse a sí mismo para seguir a Cristo", // 10
  "Castigar el cuerpo", // 11
  "No entregarse a los deleites", // 12
  "Amar el ayuno", // 13
  "Alegrar a los pobres, vestir al desnudo", // 14
  "Visitar al enfermo, sepultar al muerto", // 15
  "Socorrer al atribulado, consolar al afligido", // 16
  "Hacerse extraño al proceder del mundo", // 17
  "No anteponer nada al amor de Cristo", // 18
  "No ceder a la ira", // 19
  "No guardar rencor", // 20
  "No tener dolo en el corazón", // 21
  "No dar paz falsa", // 22
  "No abandonar la caridad", // 23
  "No jurar, no sea que acaso perjure", // 24
  "Decir la verdad con el corazón y con la boca", // 25
  "No devolver mal por mal", // 26
  "No hacer injurias, sino soportar pacientemente las que le hicieren", // 27
  "Amar a los enemigos. No maldecir a los que lo maldicen, sino más bien bendecirlos", // 28
  "Sufrir persecución por la justicia", // 29
  "No ser soberbio", // 30
  "No ser aficionado al vino, ni glotón", // 31
  "No ser dormilón, ni perezoso", // 32
  "No ser murmurador, ni detractor", // 33
  "Poner su esperanza en Dios", // 34
  "Cuando viere en sí algo bueno, atribúyalo a Dios, no a sí mismo", // 35
  "En cambio, sepa que el mal siempre lo ha hecho él, e impúteselo a sí mismo", // 36
  "Temer el día del juicio", // 37
  "Sentir terror del infierno", // 38
  "Tener la muerte presente ante los ojos cada día", // 39
  "Velar a toda hora sobre las acciones de su vida", // 40
  "Saber de cierto que, en todo lugar, Dios lo está mirando", // 41
  "Estrellar inmediatamente contra Cristo los malos pensamientos que vienen a su corazón, y manifestarlos al anciano espiritual", // 42
  "Guardar su boca de conversación mala o perversa", // 43
  "No amar hablar mucho", // 44
  "No hablar palabras vanas o que mueven a risa, no amar la risa excesiva o destemplada", // 45
  "Venerar a los ancianos", // 46
  "Amar a los más jóvenes", // 47
  "No ceder a los deseos de la carne", // 48
  "Desear la vida eterna con la mayor avidez espiritual", // 49
  "No odiar a nadie", // 50
  "No tener celos, no tener envidia", // 51
  "No amar la contienda", // 52
  "Obedecer en todo los preceptos del abad, aun cuando él -lo que no suceda- obre de otro modo, acordándose de aquel precepto del Señor: «Hagan lo que ellos dicen, pero no hagan lo que ellos hacen»", // 53
  "No querer ser llamado santo antes de serlo, sino serlo primero para que lo digan con verdad", // 54
  "Poner por obra diariamente los preceptos de Dios", // 55
  "Amar la castidad", // 56
  "Huir la vanagloria", // 57
  "Oír con gusto las lecturas santas", // 58
  "Darse frecuentemente a la oración", // 59
  "Orar por los enemigos en el amor de Cristo. Reconciliarse antes de la puesta del sol con quien se haya tenido alguna discordia", // 60
  "Odiar la propia voluntad", // 61
  "Confesar diariamente a Dios en la oración, con lágrimas y gemidos, las culpas pasadas", // 62
  "Enmendarse en adelante de esas mismas faltas", // 63
  "Y no desesperar nunca de la misericordia de Dios", // 64
];

// Calendario litúrgico completo (64 días)
const CALENDARIO: DiaLiturgico[] = [
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

// Obtener día litúrgico por número de día
function getDiaLiturgico(dia: number): DiaLiturgico | null {
  if (dia < 1 || dia > 64) return null;
  return CALENDARIO[dia - 1];
}

// Calcular día actual del programa (con timezone de Argentina)
function getDiaActual(): number {
  const FECHA_INICIO = "2026-02-01";
  const FECHA_FIN = "2026-04-05";

  // Obtener fecha actual en Argentina
  const now = new Date();
  const hoyStr = now.toLocaleDateString("en-CA", { timeZone: "America/Argentina/Buenos_Aires" });

  if (hoyStr < FECHA_INICIO) return 0; // Antes del programa
  if (hoyStr > FECHA_FIN) return 65; // Después del programa

  // Calcular diferencia de días
  const hoyParts = hoyStr.split("-").map(Number);
  const inicioParts = FECHA_INICIO.split("-").map(Number);

  const hoyUtc = Date.UTC(hoyParts[0], hoyParts[1] - 1, hoyParts[2]);
  const inicioUtc = Date.UTC(inicioParts[0], inicioParts[1] - 1, inicioParts[2]);

  const diffMs = hoyUtc - inicioUtc;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  return diffDays + 1; // Día 1-64
}

// Función para formatear fecha en español
function formatearFechaLegible(fechaStr: string): string {
  const [year, month, day] = fechaStr.split("-").map(Number);
  const fecha = new Date(year, month - 1, day);
  const opciones: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // Capitalizar primera letra
  const formatted = fecha.toLocaleDateString("es-AR", opciones);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

// Comentarios diarios (del PDF Mensajes Diarios)
const COMENTARIOS: { [dia: number]: string } = {
  1: `Hoy damos inicio a este itinerario de 64 días que culminará en la Pascua, guiados por la Liturgia y nuestro patrono, San Benito. Siguiendo su regla buscaremos hacer de nuestras vidas una "escuela de servicio divino", cuyo objetivo es reordenar la existencia cotidiana —oración, trabajo, tiempo, relaciones humanas y uso de la tecnología— a la luz de Dios.`,
  2: `Hoy es día de Fiesta, acompañemos la festividad en lo posible con la Santa Misa y/o Vísperas, prestando atención a las lecturas. Que esta celebración llene de alegría nuestra jornada. Acompañemos con el rezo del Oficio Divino para que la liturgia vaya empapando toda la jornada.`,
  3: `Un pequeño comentario sobre la frase que recibimos al iniciar cada día en el mensaje de Laudes: las mismas son extraídas del capítulo IV de la Regla, "Los instrumentos de las buenas obras". Consiste en un listado de consejos de San Benito para alcanzar la Santidad. El capítulo contiene 74 instrumentos, por ello es que cada día iremos compartiendo uno para poder ir teniéndolo especialmente presente en esa jornada.`,
  4: `Como indica el mensaje miércoles y viernes es día de ayuno y abstinencia siguiendo la tradición de la Iglesia. Se considera ayuno a hacer una sola comida formal al día, bien sea al mediodía o por la noche. Y dos colaciones. El mate y otras infusiones no rompen el ayuno.`,
  10: `Hoy recordamos a Santa Escolástica, hermana de San Benito, con quien compartió la vocación monástica y la santidad.`,
  13: `Estamos a pocos días de iniciar la Cuaresma, e intensificar este camino que iniciamos en Septuagésima. Vayamos rezando y consultando a nuestro director espiritual o confesor, para seleccionar 3 sacrificios para ofrecer durante los 40 días de la Cuaresma. En la app, en la sección de ajustes, en el apartado de "Realitas" podrán seleccionarlas.`,
  18: `A partir de hoy comienza una segunda etapa de este itinerario, en la cual vamos a buscar aumentar la intensidad de nuestras oraciones y penitencias, en una preparación más próxima para la Pascua. Recordemos seleccionar los 3 sacrificios que ofreceremos a Dios durante estos 40 días. Respecto al pilar de "Lectio", a partir de hoy iremos leyendo y meditando la obra magna de San Benito, "La Regla".`,
  19: `El día de hoy leeremos completo el capítulo IV, de "Los instrumentos de las buenas obras". Lo leamos con atención, y dado que son 74, pongamos empeño diariamente en meditar en el que recibimos al iniciar cada día.`,
};

// Obtener comentario del día
function getComentarioDelDia(dia: number): string | null {
  return COMENTARIOS[dia] || null;
}

// Obtener instrumento del día (1-64 → índice 0-63, si >64 cicla)
function getInstrumentoDelDia(dia: number): string {
  const index = ((dia - 1) % INSTRUMENTOS.length);
  return INSTRUMENTOS[index];
}

// Generar mensaje de Laudes (06:00)
function generarMensajeLaudes(): string | null {
  const diaActual = getDiaActual();

  // Si el programa no ha comenzado, no enviar mensaje
  if (diaActual === 0) {
    console.log("Programa no iniciado, saltando mensaje de Laudes");
    return null;
  }

  // Si el programa terminó, no enviar mensaje
  if (diaActual > 64) {
    console.log("Programa finalizado, saltando mensaje de Laudes");
    return null;
  }

  const diaLiturgico = getDiaLiturgico(diaActual);
  if (!diaLiturgico) return null;

  const fechaLegible = formatearFechaLegible(diaLiturgico.fecha);
  const instrumento = getInstrumentoDelDia(diaLiturgico.dia);
  const comentario = getComentarioDelDia(diaLiturgico.dia);

  let mensaje = `🗓 Día ${diaLiturgico.dia} - ${diaLiturgico.fiesta}
${fechaLegible}`;

  // Agregar aviso de ayuno solo si corresponde
  if (diaLiturgico.esAyuno) {
    mensaje += `

🍽 Día de ayuno y abstinencia de carne`;
  }

  // Agregar comentario del día si existe
  if (comentario) {
    mensaje += `

📝 ${comentario}`;
  }

  mensaje += `

🌅 LAUDES

👉 Rezar Laudes: ${APP_URL}/

📖 Instrumento de las buenas obras del día:
"${instrumento}"`;

  return mensaje;
}

// Generar mensaje de Completas (21:30)
function generarMensajeCompletas(): string | null {
  const diaActual = getDiaActual();

  // Si el programa no ha comenzado o terminó, no enviar mensaje
  if (diaActual === 0 || diaActual > 64) {
    console.log(`Programa fuera de rango (día ${diaActual}), saltando mensaje de Completas`);
    return null;
  }

  const diaLiturgico = getDiaLiturgico(diaActual);
  if (!diaLiturgico) return null;

  const fechaLegible = formatearFechaLegible(diaLiturgico.fecha);

  return `🌙 COMPLETAS
${fechaLegible}

Terminemos el día encomendándonos a Dios.

🛏️ «En paz me acuesto y en seguida me duermo, porque Tú solo, Señor, me haces vivir tranquilo»
— Salmo 4

👉 Rezar Completas: ${APP_URL}/`;
}

// Generar mensaje de Lectio (18:30)
function generarMensajeLectio(): string | null {
  const diaActual = getDiaActual();

  // Si el programa no ha comenzado o terminó, no enviar mensaje
  if (diaActual === 0 || diaActual > 64) {
    console.log(`Programa fuera de rango (día ${diaActual}), saltando mensaje de Lectio`);
    return null;
  }

  return `📖 Lectura del día

👉 ${APP_URL}/lectura`;
}

// Generar mensaje de prueba
function generarMensajeTest(): string {
  return `✅ *Prueba de Notificación*

El bot de Benedictus Daily está funcionando correctamente.`;
}

// Función para enviar mensaje a Telegram con formato Markdown
async function sendTelegramMessage(text: string): Promise<TelegramResponse> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_GROUP_CHAT_ID,
      text: text,
      parse_mode: "Markdown",
      disable_web_page_preview: false,
    }),
  });

  return await response.json();
}

// Función alternativa sin Markdown (fallback)
async function sendTelegramMessagePlain(text: string): Promise<TelegramResponse> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  // Quitar formato Markdown
  const plainText = text
    .replace(/\*/g, "")
    .replace(/_/g, "");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_GROUP_CHAT_ID,
      text: plainText,
    }),
  });

  return await response.json();
}

serve(async (req: Request) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "https://benedictus-daily.vercel.app",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  try {
    // Validar configuración
    if (!TELEGRAM_BOT_TOKEN) {
      throw new Error("TELEGRAM_BOT_TOKEN no configurado");
    }
    if (!TELEGRAM_GROUP_CHAT_ID) {
      throw new Error("TELEGRAM_GROUP_CHAT_ID no configurado");
    }

    const body: TelegramRequest = await req.json();
    const { type, custom_text, dia_actual } = body;

    let message: string | null;

    switch (type) {
      case "laudes":
        message = generarMensajeLaudes();
        break;
      case "completas":
        message = generarMensajeCompletas();
        break;
      case "lectio":
        message = generarMensajeLectio();
        break;
      case "test":
        message = generarMensajeTest();
        break;
      case "custom":
        if (!custom_text) {
          throw new Error("custom_text requerido para tipo 'custom'");
        }
        message = custom_text;
        break;
      default:
        throw new Error(`Tipo de mensaje no válido: ${type}`);
    }

    // Si el mensaje es null (fuera del programa), retornar éxito sin enviar
    if (message === null) {
      return new Response(
        JSON.stringify({
          success: true,
          type,
          skipped: true,
          reason: "Programa fuera de rango - no se envió mensaje",
        }),
        { status: 200, headers }
      );
    }

    console.log(`Enviando mensaje tipo: ${type}`);

    // Intentar enviar con Markdown
    let result = await sendTelegramMessage(message);

    // Si falla el Markdown, intentar sin formato
    if (!result.ok) {
      console.log("Markdown falló, intentando sin formato:", result.description);
      result = await sendTelegramMessagePlain(message);
    }

    if (!result.ok) {
      throw new Error(`Error de Telegram: ${result.description}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        type,
        telegram_response: result,
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error en send-telegram:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers }
    );
  }
});
