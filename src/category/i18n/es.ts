import type { CategoryLocaleContent } from "../../types";

const slug = "horologia";
const title = "Herramientas de Relojería y Guías de Referencia";
const description =
  "Herramientas de relojería para entusiastas: comprueba la precisión, desmagnetiza movimientos, calcula el tiempo de uso y consulta posiciones de corona de calibres populares.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    {
      type: "title",
      text: "Una mesa de trabajo para entender el tiempo",
      level: 2,
    },
    {
      type: "paragraph",
      html: `La relojería empieza cuando dejas de mirar la esfera como una imagen y empiezas a leerla como un sistema. Esta colección reúne instrumentos para observar la marcha, interpretar el ritmo de un movimiento, entender el gesto de la corona y tomar decisiones con más contexto. No pretende sustituir un banco de relojero: convierte preguntas concretas de la vida diaria en pequeñas escenas de exploración, con resultados claros y una interfaz que deja espacio para la curiosidad.`,
    },
    { type: "title", text: "Precisión que se puede mirar", level: 2 },
    {
      type: "paragraph",
      html: `Comprueba cuánto se adelanta o se atrasa un reloj, calcula qué significa una frecuencia expresada en VPH o Hz y estima cómo cambian sus condiciones cuando lo llevas en la muñeca. Las herramientas de precisión están pensadas para comparar, repetir y aprender: cada cifra se presenta junto a su unidad, cada conversión conserva su significado y cada resultado ayuda a construir una intuición mecánica. Así, la exactitud deja de ser una abstracción y se convierte en una experiencia visible.`,
    },
    { type: "title", text: "Referencias para el gesto mecánico", level: 2 },
    {
      type: "paragraph",
      html: `La corona, el muelle real, el cristal, el lume y el tren de engranajes cuentan historias distintas del mismo objeto. Aquí puedes consultar posiciones de corona, explorar una transmisión de ruedas, comparar materiales y visualizar complicaciones como la fase lunar, el calendario perpetuo o el tourbillon. Todo funciona en el navegador y los datos de uso permanecen en tu dispositivo: una biblioteca práctica para coleccionar, reparar, ajustar y mirar los relojes con más atención.`,
    },
    { type: "title", text: "El tiempo como materia", level: 2 },
    {
      type: "paragraph",
      html: `Un reloj no solo muestra una hora: conserva una tensión, una temperatura, un ritmo y una historia de uso. Por eso esta página está pensada como un observatorio. Puedes entrar por una cifra, seguir una rueda, comparar una proporción o quedarte mirando un movimiento. Cada herramienta convierte una operación invisible en una escena que se entiende con los ojos y con las manos.`,
    },
    { type: "title", text: "Una biblioteca para volver", level: 2 },
    {
      type: "paragraph",
      html: `Explora la colección sin prisa y vuelve cuando cambie la pregunta. Las guías sirven para preparar una compra, las calculadoras ayudan a comprobar una intuición y los visualizadores hacen visible lo que normalmente permanece oculto dentro de la caja. El resultado es un atlas abierto de relojería: preciso cuando hace falta, sensible cuando el objeto pide ser contemplado.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumentos", value: "25", icon: "mdi:tools" },
        { label: "Calibres", value: "8+", icon: "mdi:engine" },
        { label: "Idiomas", value: "15", icon: "mdi:translate" },
        { label: "Privacidad", value: "En local", icon: "mdi:shield-check" },
      ],
    },
  ],
};
