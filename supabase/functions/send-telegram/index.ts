// Supabase Edge Function para enviar mensajes al grupo de Telegram
// Se invoca desde pg_cron para enviar recordatorios y lecturas

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

// Configuración
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN")!;
const TELEGRAM_GROUP_CHAT_ID = Deno.env.get("TELEGRAM_GROUP_CHAT_ID")!;

// URL de la aplicación
const APP_URL = "https://benedictus-daily.vercel.app";

// Frases motivacionales católicas (30+)
const FRASES_MOTIVACIONALES = [
  "«Ora et labora» — San Benito",
  "«Nada te turbe, nada te espante, todo se pasa» — Santa Teresa de Ávila",
  "«Todo lo puedo en Cristo que me fortalece» — Filipenses 4:13",
  "«Ama y haz lo que quieras» — San Agustín",
  "«No temas, porque yo estoy contigo» — Isaías 41:10",
  "«Confía en el Señor y haz el bien» — Salmo 37:3",
  "«El que persevere hasta el fin, ese será salvo» — Mateo 24:13",
  "«Dios no nos ha dado un espíritu de cobardía» — 2 Timoteo 1:7",
  "«Cuando soy débil, entonces soy fuerte» — 2 Corintios 12:10",
  "«Quien ora, se salva» — San Alfonso María de Ligorio",
  "«Basta la gracia de Dios» — 2 Corintios 12:9",
  "«Busca la paz y corre tras ella» — Salmo 34:15",
  "«Escucha y tu alma vivirá» — Isaías 55:3",
  "«Orando siempre, sin desfallecer» — Lucas 18:1",
  "«Cuanto más humildes, más cercanos a Dios» — San Ignacio de Antioquía",
  "«La oración es la respiración del alma» — San Padre Pío",
  "«Nuestra patria está en los cielos» — Filipenses 3:20",
  "«Yo soy la vid, vosotros los sarmientos» — Juan 15:5",
  "«Pedid y se os dará» — Mateo 7:7",
  "«Venid a mí todos los que estáis fatigados» — Mateo 11:28",
  "«Yo estoy con vosotros todos los días» — Mateo 28:20",
  "«Haced todo para gloria de Dios» — 1 Corintios 10:31",
  "«La caridad lo disculpa todo» — 1 Corintios 13:7",
  "«Estad siempre alegres en el Señor» — Filipenses 4:4",
  "«Donde está tu tesoro, allí está tu corazón» — Mateo 6:21",
  "«Obras son amores y no buenas razones» — Santa Teresa de Ávila",
  "«El amor todo lo vence» — San Agustín",
  "«El silencio es la gran escuela de la oración» — San Juan de la Cruz",
  "«Para Dios nada hay imposible» — Lucas 1:37",
  "«Amaos los unos a los otros como yo os he amado» — Juan 13:34",
  "«Prefiere siempre lo arduo a lo fácil» — San Josemaría Escrivá",
  "«La humildad es la madre de todas las virtudes» — San Agustín",
];

// Intenciones de oración rotativas
const INTENCIONES = [
  "por la perseverancia de todos los participantes del desafío",
  "por nuestras familias y seres queridos",
  "por la Iglesia y el Santo Padre",
  "por los enfermos y los que sufren",
  "por las almas del purgatorio",
  "por nuestra conversión personal",
  "por la paz en el mundo",
  "por los sacerdotes y religiosos",
  "por los que han abandonado la fe",
  "por vocaciones sacerdotales y religiosas",
];

// Función para obtener una frase aleatoria del día (consistente por fecha)
function getFraseDelDia(): string {
  const hoy = new Date();
  const seed = hoy.getFullYear() * 10000 + (hoy.getMonth() + 1) * 100 + hoy.getDate();
  const index = seed % FRASES_MOTIVACIONALES.length;
  return FRASES_MOTIVACIONALES[index];
}

// Función para obtener la intención del día
function getIntencionDelDia(): string {
  const hoy = new Date();
  const diaDelAno = Math.floor((hoy.getTime() - new Date(hoy.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const index = diaDelAno % INTENCIONES.length;
  return INTENCIONES[index];
}

// Función para formatear fecha en español
function formatearFecha(): string {
  const hoy = new Date();
  const opciones: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return hoy.toLocaleDateString("es-AR", opciones);
}

// Generar mensaje de Laudes
function generarMensajeLaudes(): string {
  const fecha = formatearFecha();
  const frase = getFraseDelDia();
  const intencion = getIntencionDelDia();

  return `🌅 *LAUDES*
_${fecha}_

Buenos días, hermanos del desafío.

📿 *Frase del día:*
${frase}

🙏 *Intención:*
Oremos hoy ${intencion}.

👉 Rezar Laudes: ${APP_URL}/lectura

—
_Benedictus Daily - Ora et Labora_`;
}

// Generar mensaje de Completas
function generarMensajeCompletas(): string {
  const fecha = formatearFecha();
  const frase = getFraseDelDia();

  return `🌙 *COMPLETAS*
_${fecha}_

Buenas noches, hermanos del desafío.

Terminemos el día encomendándonos a Dios.

📖 *Reflexión nocturna:*
${frase}

🛏️ _«En paz me acuesto y en seguida me duermo, porque Tú solo, Señor, me haces vivir tranquilo»_
— Salmo 4

👉 Rezar Completas: ${APP_URL}/

—
_Benedictus Daily - Ora et Labora_`;
}

// Generar mensaje de Lectio Divina
function generarMensajeLectio(diaActual: number): string {
  const fecha = formatearFecha();

  return `📖 *LECTIO DIVINA - Día ${diaActual} de 64*
_${fecha}_

La lectura espiritual del día está disponible.

Dedica unos minutos a la meditación con los textos de la Vida de San Benito.

👉 Leer la lectura de hoy: ${APP_URL}/lectura

—
_Benedictus Daily - Ora et Labora_`;
}

// Generar mensaje de prueba
function generarMensajeTest(): string {
  return `✅ *Prueba de Notificación*

El bot de Benedictus Daily está funcionando correctamente.

🔔 Recibirás:
• Laudes (mañana)
• Completas (noche)
• Lectio Divina (extracto diario)

—
_Benedictus Daily - Ora et Labora_`;
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
