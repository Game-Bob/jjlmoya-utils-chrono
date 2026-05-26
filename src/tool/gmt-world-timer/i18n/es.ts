import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Cómo saber si un reloj es un GMT auténtico o un caller GMT?',
    answer: 'Un <strong>GMT auténtico</strong> (también llamado "flyer" GMT) permite saltar la hora local de forma independiente — ideal para viajeros que cambian de huso horario con frecuencia. Un <strong>caller GMT</strong> ajusta la aguja GMT por separado mientras la hora principal permanece fija, lo que es más barato de fabricar. Para distinguirlos: saca la corona a la posición de ajuste de hora y gírala. Si la aguja de la hora salta en incrementos de una hora sin detenerse, es un GMT auténtico. Si se mueve la aguja GMT, es un caller. Rolex usa un calibre GMT auténtico (3285) en el GMT-Master II, mientras que muchas micro-marcas asequibles usan movimientos caller como el Seiko NH34.',
  },
  {
    question: '¿Cuál es la diferencia entre un reloj GMT y un World Timer?',
    answer: 'Un <strong>reloj GMT</strong> normalmente sigue dos husos horarios — la hora local y una referencia (generalmente UTC) — usando una aguja de 24 horas y un bisel de 24 horas. Un <strong>World Timer</strong> muestra los 24 husos horarios de una vez: tiene un anillo de ciudades alrededor de la esfera y un disco de 24 horas que gira. World Timers como el Patek Philippe 5230P o el JLC Geophysic Universal Time te permiten leer la hora de cualquier ciudad al instante. Los GMT son más simples y asequibles; los World Timer son mecánicamente más complejos y típicamente más caros. Esta herramienta funciona como un World Timer digital, permitiéndote añadir tantas ciudades como necesites.',
  },
  {
    question: '¿Qué huso horario muestra mi reloj cuando dice "GMT"?',
    answer: 'Cuando un reloj tiene "GMT" en la esfera, la <strong>aguja GMT</strong> (normalmente una cuarta aguja con punta de flecha de color) señala la hora en formato de 24 horas. La mayoría de los propietarios la ajustan a UTC (Tiempo Universal Coordinado) porque todos los husos horarios se definen como desviaciones de UTC. El bisel giratorio de 24 horas puede alinearse para leer cualquier otro huso horario. Por ejemplo, si la aguja GMT señala las 14 (2 PM) y las marcas del bisel la alinean con UTC+2, estás leyendo la Hora de Europa del Este. Esta herramienta te ayuda a visualizar exactamente esa relación.',
  },
];

const howTo = [
  {
    name: 'Añade cualquier ciudad a tu panel',
    text: 'Escribe el nombre de una ciudad o huso horario en la barra de búsqueda. Haz clic en un resultado para añadirlo al instante. Cada ciudad aparece como una tarjeta de reloj en vivo con la hora local actual.',
  },
  {
    name: 'Elimina ciudades cuando no las necesites',
    text: 'Pasa el ratón sobre cualquier tarjeta de reloj y haz clic en el botón × para eliminarla. Tu selección se guarda automáticamente en tu navegador — cierra y vuelve más tarde y tu panel estará exactamente como lo dejaste.',
  },
  {
    name: 'Úsalo como referencia GMT para tu colección de relojes',
    text: 'Establece tu ciudad de origen y añade los husos horarios que sigues con tus relojes GMT. Usa las etiquetas de desfase en vivo para comprobar si la alineación de tu bisel es correcta para cada zona.',
  },
];

const title = 'Reloj Mundial: Panel en Vivo con Múltiples Husos Horarios';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'reloj-mundial-gmt',
  title,
  description: 'Sigue múltiples husos horarios en vivo. Añade cualquier ciudad y ve su hora actual actualizándose cada segundo. Perfecto para entusiastas de los relojes con GMT o World Timer.',
  ui: {
    title: 'Reloj Mundial',
    searchPlaceholder: 'Buscar ciudad o huso horario...',
    addLabel: 'Añadir',
    removeLabel: 'Eliminar',
    noResults: 'No se encontraron ciudades',
    yourZones: 'Tus husos horarios',
  },
  seo: [
    { type: 'title', text: 'Reloj Mundial — Panel de Husos Horarios en Vivo para Entusiastas del Reloj', level: 2 },
    { type: 'paragraph', html: 'Ya sea que tengas un <strong>GMT-Master II</strong>, un <strong>World Timer</strong>, o simplemente necesites seguir múltiples husos horarios por trabajo o viajes, este panel en vivo te muestra la hora actual en cada ciudad que te importa — todo de un vistazo. Añade Nueva York, Londres, Tokio o cualquier ciudad, y la hora se actualiza cada segundo. Tus zonas se guardan en tu navegador para que nunca tengas que reconfigurarlas.' },
    { type: 'title', text: 'Por qué los entusiastas del reloj necesitan un reloj mundial', level: 3 },
    { type: 'paragraph', html: 'Si coleccionas <strong>relojes GMT</strong>, conoces la lucha: ajustas el bisel para seguir un segundo huso, pero los desfases cambian con el horario de verano, o simplemente tienes múltiples GMT y quieres comparar cómo cada uno sigue una ciudad diferente. Esta herramienta lo soluciona. Añade las ciudades que tus relojes siguen y ve al instante su desfase y hora actual. Nada de cálculos mentales — solo mira la tarjeta y sabrás exactamente hacia dónde debe apuntar tu aguja GMT.' },
    { type: 'title', text: 'GMT vs World Timer — ¿Cuál se adapta a tu estilo?', level: 3 },
    { type: 'paragraph', html: 'Un <strong>reloj GMT</strong> (como el Rolex GMT-Master II "Pepsi" o Tudor Black Bay Pro) usa una aguja de 24 horas y un bisel giratorio para seguir dos husos horarios. Un <strong>World Timer</strong> (como el Nomos Zürich Weltzeit u Omega Seamaster Worldtimer) muestra las 24 zonas a la vez mediante un anillo de ciudades y un disco de 24 horas. Este panel imita un World Timer: puedes ver todas las ciudades a la vez. Úsalo para decidir qué complicación se ajusta a tu estilo de vida antes de comprar.' },
    { type: 'title', text: 'Usos prácticos más allá del coleccionismo de relojes', level: 3 },
    {
      type: 'list', items: [
        'Trabajadores remotos coordinando reuniones entre husos horarios sin confusiones',
        'Viajeros frecuentes vigilando su hogar y destino simultáneamente',
        'Traders siguiendo las aperturas de bolsa en Nueva York, Londres, Tokio y Sídney',
        'Cualquiera que quiera saber "¿qué hora es ahora en…?" sin tener que buscar en Google',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Reloj Mundial en Vivo', icon: 'mdi:clock-time-eight', badge: 'HORA', html: 'Las horas se actualizan en vivo cada segundo usando la base de datos de husos horarios de tu navegador. Los cambios por horario de verano se manejan automáticamente. No se envía ningún dato a ningún servidor.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
