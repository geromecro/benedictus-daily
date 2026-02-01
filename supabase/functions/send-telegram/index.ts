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
// 74 instrumentos, uno por día (los últimos 10 se repiten en días 65+)
const INSTRUMENTOS: string[] = [
  "Primero, amar al Señor Dios con todo el corazón, con toda el alma y con todas las fuerzas",
  "Después, al prójimo como a sí mismo",
  "Luego, no matar",
  "No cometer adulterio",
  "No hurtar",
  "No codiciar",
  "No levantar falso testimonio",
  "Honrar a todos los hombres",
  "No hacer a otro lo que uno no quiere para sí",
  "Negarse a sí mismo para seguir a Cristo",
  "Castigar el cuerpo",
  "No entregarse a los deleites",
  "Amar el ayuno",
  "Alegrar a los pobres",
  "Vestir al desnudo",
  "Visitar al enfermo",
  "Sepultar al muerto",
  "Socorrer al atribulado",
  "Consolar al afligido",
  "Hacerse extraño al proceder del mundo",
  "No anteponer nada al amor de Cristo",
  "No ceder a la ira",
  "No guardar rencor",
  "No tener dolo en el corazón",
  "No dar paz falsa",
  "No abandonar la caridad",
  "No jurar, no sea que acaso perjure",
  "Decir la verdad con el corazón y con la boca",
  "No devolver mal por mal",
  "No hacer injurias, sino soportar pacientemente las que le hicieren",
  "Amar a los enemigos",
  "No maldecir a los que lo maldicen, sino más bien bendecirlos",
  "Sufrir persecución por la justicia",
  "No ser soberbio",
  "Ni aficionado al vino",
  "Ni glotón",
  "Ni dormilón",
  "Ni perezoso",
  "Ni murmurador",
  "Ni detractor",
  "Poner su esperanza en Dios",
  "Cuando viere en sí algo bueno, atribúyalo a Dios, no a sí mismo",
  "En cambio, sepa que el mal siempre lo ha hecho él, e impúteselo a sí mismo",
  "Temer el día del juicio",
  "Sentir terror del infierno",
  "Desear la vida eterna con la mayor avidez espiritual",
  "Tener la muerte presente ante los ojos cada día",
  "Velar a toda hora sobre las acciones de su vida",
  "Saber de cierto que, en todo lugar, Dios lo está mirando",
  "Estrellar inmediatamente contra Cristo los malos pensamientos que vienen a su corazón",
  "Guardar su boca de conversación mala o perversa",
  "No amar hablar mucho",
  "No hablar palabras vanas o que mueven a risa",
  "No amar la risa excesiva o destemplada",
  "Oír con gusto las lecturas santas",
  "Darse frecuentemente a la oración",
  "Confesar diariamente a Dios en la oración, con lágrimas y gemidos, las culpas pasadas",
  "Enmendarse en adelante de esas mismas faltas",
  "No ceder a los deseos de la carne",
  "Odiar la propia voluntad",
  "Obedecer en todo los preceptos del abad",
  "No querer ser llamado santo antes de serlo, sino serlo primero para que lo digan con verdad",
  "Poner por obra diariamente los preceptos de Dios",
  "Amar la castidad",
  "No odiar a nadie",
  "No tener celos",
  "No tener envidia",
  "No amar la contienda",
  "Huir la vanagloria",
  "Venerar a los ancianos",
  "Amar a los más jóvenes",
  "Orar por los enemigos en el amor de Cristo",
  "Reconciliarse antes de la puesta del sol con quien se haya tenido alguna discordia",
  "Y no desesperar nunca de la misericordia de Dios",
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

// Calcular día actual del programa
function getDiaActual(): number {
  const FECHA_INICIO = "2026-02-01";
  const hoy = new Date();
  const inicio = new Date(FECHA_INICIO);

  if (hoy < inicio) return 0;

  const diffTime = hoy.getTime() - inicio.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return Math.min(64, diffDays + 1);
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

// Obtener instrumento del día (1-64 → índice 0-63, si >64 cicla)
function getInstrumentoDelDia(dia: number): string {
  const index = ((dia - 1) % INSTRUMENTOS.length);
  return INSTRUMENTOS[index];
}

// Generar mensaje de Laudes (06:00)
function generarMensajeLaudes(): string {
  const diaActual = getDiaActual();
  const diaLiturgico = getDiaLiturgico(diaActual);

  // Si estamos fuera del programa, usar día 1 como fallback
  const dia = diaLiturgico || CALENDARIO[0];
  const fechaLegible = formatearFechaLegible(dia.fecha);
  const instrumento = getInstrumentoDelDia(dia.dia);

  let mensaje = `🗓 Día ${dia.dia} - *${dia.fiesta}*

${fechaLegible}`;

  // Agregar aviso de ayuno solo si corresponde
  if (dia.esAyuno) {
    mensaje += `

🍽️ Hoy es día de ayuno y abstinencia`;
  }

  // Instrumento de las Buenas Obras del día
  mensaje += `

📜 *Instrumento del día:*
_"${instrumento}"_`;

  return mensaje;
}

// Generar mensaje de Completas (21:30)
function generarMensajeCompletas(): string {
  const diaActual = getDiaActual();
  const diaLiturgico = getDiaLiturgico(diaActual);
  const dia = diaLiturgico || CALENDARIO[0];
  const fechaLegible = formatearFechaLegible(dia.fecha);

  return `🌙 COMPLETAS
${fechaLegible}

Terminemos el día encomendándonos a Dios.

🛏️ «En paz me acuesto y en seguida me duermo, porque Tú solo, Señor, me haces vivir tranquilo»
— Salmo 4

👉 Rezar Completas: ${APP_URL}/`;
}

// Generar mensaje de Lectio (18:30)
function generarMensajeLectio(_diaActual: number): string {
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
    "Access-Control-Allow-Origin": "*",
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

    let message: string;

    switch (type) {
      case "laudes":
        message = generarMensajeLaudes();
        break;
      case "completas":
        message = generarMensajeCompletas();
        break;
      case "lectio":
        message = generarMensajeLectio(dia_actual || 1);
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
