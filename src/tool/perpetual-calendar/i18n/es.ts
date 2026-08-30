import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Qué es un calendario perpetuo en un reloj?',
    answer: 'Un calendario perpetuo es una complicación de reloj mecánica que muestra automáticamente la fecha, el día, el mes y la fase lunar correctos, teniendo en cuenta los meses de diferente duración y los años bisiestos. Está programado para ser preciso hasta el año 2100 (el próximo año secular no divisible por 400).',
  },
  {
    question: '¿Cómo sabe un calendario perpetuo los años bisiestos?',
    answer: 'El programa mecánico utiliza un engranaje de 48 meses (4 años) con una leva diseñada especialmente que contabiliza el día bisiesto del 29 de febrero. El mecanismo sabe que los años divisibles por 100 no son bisiestos a menos que también sean divisibles por 400. La mayoría de los calendarios perpetuos son precisos hasta 2100, cuando requerirán una corrección de un día.',
  },
  {
    question: '¿Cuál es la diferencia entre un calendario perpetuo y un calendario anual?',
    answer: 'Un calendario anual requiere una corrección manual al año (al final de febrero), mientras que un calendario perpetuo maneja automáticamente los años bisiestos y funciona correctamente durante décadas. Los calendarios perpetuos son significativamente más complejos mecánicamente.',
  },
];

const howTo = [
  {
    name: 'Avance la fecha',
    text: 'Use los botones D (día), M (mes) y Y (año) para avanzar el calendario. Observe cómo se mueve la aguja de fecha y cambia la ventana del mes.',
  },
  {
    name: 'Observe las transiciones de año bisiesto',
    text: 'Avance a través de febrero de un año bisiesto (ej. 2024) para ver el salto del 29 al 1 de marzo. Pruebe con un año no bisiesto para ver el salto del 28 al 1 de marzo.',
  },
  {
    name: 'Use la reproducción automática',
    text: 'Presione play para que el calendario avance automáticamente. Esto revela el ciclo completo de duraciones de meses y la progresión de la fase lunar.',
  },
];

const title = 'Simulador de Calendario Perpetuo: Complicación de Reloj Interactiva';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'calendario-perpetuo',
  title,
  description: 'Explore el genio mecánico de una complicación de calendario perpetuo. Visualice fecha, día, mes, ciclo de año bisiesto y fase lunar con una esfera animada.',
  ui: {
    title: 'Simulador de Calendario Perpetuo',
    dateLabel: 'Fecha',
    dayLabel: 'Día',
    monthLabel: 'Mes',
    yearLabel: 'Año',
    leapYearLabel: 'Bisiesto',
    moonPhaseLabel: 'Fase Lunar',
    weekdayLabel: 'Día Semana',
    advanceDay: 'Avanzar Día',
    advanceMonth: 'Avanzar Mes',
    advanceYear: 'Avanzar Año',
    autoPlay: 'Auto',
    resetBtn: 'Hoy',
    dayNames: 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado',
    monthNames: 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre',
    tipTitle: 'Consejo',
    tipContent: 'La mayoría de los relojes de calendario perpetuo usan una rueda de programa de 48 meses con muescas de longitud variable. Febrero tiene la muesca más corta (28 días en años comunes, 29 en bisiestos), mientras que los meses de 30 y 31 días tienen muescas progresivamente más largas.',
    step1: 'Avance día a día pasado febrero para ver cómo el mecanismo maneja las transiciones de fin de mes.',
    step2: 'Observe el indicador de fase lunar progresar a través de su ciclo de 29.5 días.',
    step3: 'Compare las transiciones de febrero en años bisiestos vs. comunes para entender el ciclo de 4 años.',
  },
  seo: [
    { type: 'title', text: 'Simulador de Calendario Perpetuo: Complicación Interactiva', level: 2 },
    { type: 'paragraph', html: 'El <strong>calendario perpetuo</strong> es una de las complicaciones más prestigiosas de la alta relojería. Este simulador interactivo visualiza cómo un calendario perpetuo mecánico rastrea fecha, día, mes, año bisiesto y fase lunar - todo sin corrección manual durante décadas. Explore el programa de engranaje de 48 meses, vea cómo funcionan las transiciones de febrero y entienda la lógica del calendario gregoriano incorporada en estas obras maestras de la micromecánica.' },
    { type: 'title', text: 'Cómo funciona un calendario perpetuo', level: 3 },
    { type: 'paragraph', html: 'Un calendario perpetuo mecánico utiliza una <strong>rueda de programa</strong> con muescas de diferentes profundidades que representan los meses de distintas duraciones. Un brazo sensor cae en cada muesca; una muesca más profunda señala un mes corto (28-29 días), activando el mecanismo para avanzar al 1 del mes siguiente después del número correcto de días. Un <strong>engranaje de 48 meses</strong> maneja el ciclo de 4 años bisiestos, con una muesca extra para el 29 de febrero. El programa sabe que los años centenarios (ej. 2100) omiten el año bisiesto a menos que sean divisibles por 400.' },
        { type: 'title', text: 'Referencia de lógica de calendario', level: 3 },
    {"type":"table","headers":["Mes","Días","Profundidad de muesca","Acción de año bisiesto"],"rows":[["Enero","31","Profunda","Normal"],["Febrero","28 / 29","Más superficial","Día extra cada 4 años"],["Marzo","31","Profunda","Normal"],["Abril","30","Media","Normal"],["Mayo","31","Profunda","Normal"],["Junio","30","Media","Normal"],["Julio","31","Profunda","Normal"],["Agosto","31","Profunda","Normal"],["Septiembre","30","Media","Normal"],["Octubre","31","Profunda","Normal"],["Noviembre","30","Media","Normal"],["Diciembre","31","Profunda","Normal"]]},
{ type: 'title', text: 'Comparación: Calendario Perpetuo vs Anual', level: 3 },
    {
      type: 'table', headers: ['Característica', 'Calendario Anual', 'Calendario Perpetuo'], rows: [
        ['Requiere ajuste', 'Una vez al año (1 Mar)', 'Una vez por siglo (2100)'],
        ['Manejo de bisiestos', 'Manual', 'Automático (leva 4 años)'],
        ['Reconocimiento de mes', '30 vs 31 días', 'Completo 28/29/30/31'],
        ['Complejidad', 'Moderada (~50 piezas)', 'Muy alta (~200+ piezas)'],
        ['Rango de precio', '3.000-15.000 €', '20.000-500.000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Simulador de Calendario Interactivo', icon: 'mdi:calendar-month', badge: 'RELOJERÍA', html: 'Esta herramienta simula el mecanismo de calendario de un reloj de calendario perpetuo. La esfera animada muestra la aguja de fecha, la ventana de mes, el subdial de día, la fase lunar y el indicador de año bisiesto. Use los controles para avanzar por días, meses o años y observe la lógica mecánica en acción.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
