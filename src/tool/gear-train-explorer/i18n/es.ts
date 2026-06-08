import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Qué es un tren de engranajes en un reloj?',
    answer: 'Un tren de engranajes es una serie de ruedas dentadas interconectadas que transmiten la energía desde el barril del muelle real hasta el escape. Cada par de engranajes proporciona una relación de reducción específica, ralentizando la liberación rápida de la energía del muelle en impulsos controlados y cronometrados.',
  },
  {
    question: '¿Por qué los diferentes movimientos tienen diferentes relaciones de engranaje?',
    answer: 'Las relaciones de engranaje están determinadas por el número de dientes en cada rueda y piñón. Los movimientos con diferentes frecuencias de oscilación (p. ej., 28.800 VPH vs 36.000 VPH) tienen diferentes velocidades de la rueda de escape y configuraciones de engranajes para mantener una precisión horaria precisa mientras se adaptan a la frecuencia del volante.',
  },
  {
    question: '¿Cuál es la diferencia entre una rueda y un piñón?',
    answer: 'En relojería, una "rueda" es el engranaje más grande con muchos dientes que impulsa el siguiente componente. Un "piñón" es el engranaje más pequeño (generalmente de 6-12 dientes) que es impulsado. Juntos, una rueda y un piñón forman un par de engranajes que cambia la velocidad de rotación y el par motor.',
  },
];

const howTo = [
  {
    name: 'Seleccione un movimiento',
    text: 'Elija entre movimientos estándar (28.800 VPH), de alta frecuencia (36.000 VPH El Primero) o vintage (18.000 VPH). Cada uno tiene relaciones de engranaje y frecuencias de oscilación únicas.',
  },
  {
    name: 'Observe el tren de engranajes',
    text: 'Vea cómo los engranajes animados giran a velocidades proporcionales. El barril gira lentamente mientras que la rueda de escape gira rápidamente. Pase el ratón sobre cualquier engranaje o tarjeta de datos para obtener información detallada.',
  },
  {
    name: 'Ajuste la velocidad',
    text: 'Use los controles de velocidad para ralentizar, acelerar o pausar la animación. Esto ayuda a visualizar cómo cada engranaje contribuye a la cadena de transmisión de potencia.',
  },
];

const title = 'Explorador de Tren de Engranajes: Diagrama Interactivo de Relojería';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'explorador-tren-engranajes',
  title,
  description: 'Explore el corazón mecánico de un reloj con una visualización animada del tren de engranajes. Vea el barril del muelle real, la rueda central, la tercera rueda, la cuarta rueda, la rueda de escape, la horquilla del áncora y el volante en movimiento.',
  ui: {
    title: 'Explorador de Tren de Engranajes',
    barrelLabel: 'Barril',
    centerWheelLabel: 'Rueda Central',
    thirdWheelLabel: 'Tercera Rueda',
    fourthWheelLabel: 'Cuarta Rueda',
    escapeWheelLabel: 'Rueda de Escape',
    palletForkLabel: 'Horquilla',
    balanceWheelLabel: 'Volante',
    rpmLabel: 'RPM',
    teethLabel: 'dientes',
    gearRatioLabel: 'Relación',
    powerFlowLabel: 'Flujo de Potencia',
    movementLabel: 'Movimiento',
    speedLabel: 'Velocidad',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausado',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Seleccione un calibre de movimiento para ver sus relaciones de engranaje y frecuencia únicas.',
    step2: 'Pase el ratón sobre cualquier engranaje o tarjeta de datos para resaltar su posición en el flujo de potencia.',
    step3: 'Ajuste la velocidad de la animación para estudiar cómo cada engranaje transmite la potencia a través del tren.',
    tipTitle: 'Consejo',
    tipContent: 'El tren de engranajes reduce la rápida liberación de energía del muelle real en una oscilación controlada. Un barril típico rota una vez cada 7-8 horas, mientras que la rueda de escape gira a 32 RPM (a 28.800 VPH) - una reducción de más de 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Explorador Interactivo de Tren de Engranajes', level: 2 },
    { type: 'paragraph', html: 'El <strong>tren de engranajes</strong> es la columna vertebral mecánica de todo reloj mecánico. Esta herramienta interactiva visualiza cómo fluye la potencia desde el barril del muelle real a través de la rueda central, la tercera rueda, la cuarta rueda y la rueda de escape hasta la horquilla y el volante. Vea cada engranaje rotar a su velocidad proporcional y entienda cómo las relaciones de engranaje determinan la medición del tiempo.' },
    { type: 'title', text: 'Cómo funciona un tren de engranajes', level: 3 },
    { type: 'paragraph', html: 'Un tren de engranajes de un reloj consiste en una serie de <strong>ruedas</strong> (engranajes grandes) y <strong>piñones</strong> (engranajes pequeños) que transmiten potencia mientras reducen la velocidad. El <strong>barril</strong> alberga el muelle real y gira lentamente, impulsando la <strong>rueda central</strong> que gira una vez por hora (para la manecilla de los minutos). La <strong>tercera rueda</strong> y la <strong>cuarta rueda</strong> (rueda de segundos) aumentan aún más la velocidad de rotación. Finalmente, la <strong>rueda de escape</strong> libera la potencia en impulsos controlados hacia la <strong>horquilla del áncora</strong>, que alternativamente bloquea y desbloquea la rueda de escape, enviando impulsos al <strong>volante</strong>. El volante oscila a una frecuencia precisa - típicamente 4 Hz (28.800 vibraciones por hora) - regulando la marcha del reloj.' },
    { type: 'title', text: 'Relaciones de Engranaje y Transmisión de Potencia', level: 3 },
    {
      type: 'table', headers: ['Componente', 'Dientes típicos', 'RPM (28.800 VPH)', 'Relación anterior'], rows: [
        ['Barril', '72', '0,002 (1 rev / 8 h)', '-'],
        ['Rueda Central', '60', '0,0167 (1 rev / h)', '~7,2:1'],
        ['Tercera Rueda', '50', '0,125 (1 rev / 8 min)', '~5:1'],
        ['Cuarta Rueda', '60', '1 (1 rev / min)', '6:1'],
        ['Rueda de Escape', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Comparación de Movimientos', level: 3 },
    {
      type: 'table', headers: ['Movimiento', 'Frecuencia', 'Volante', 'Rueda Escape RPM', 'Precisión típica'], rows: [
        ['Vintage (18.000 VPH)', '18.000 bph', '2,5 Hz', '20 RPM', '±15-30 s/d'],
        ['Estándar (28.800 VPH)', '28.800 bph', '4 Hz', '32 RPM', '±5-15 s/d'],
        ['Alta Frecuencia (36.000 VPH)', '36.000 bph', '5 Hz', '40 RPM', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Herramienta de Aprendizaje Interactiva', icon: 'mdi:cog-clockwise', badge: 'RELOJERÍA', html: 'Esta herramienta utiliza relaciones de engranaje aproximadas representativas de movimientos comunes de escape de áncora suizo. Las relaciones reales varían según el calibre. Use los ajustes preestablecidos de movimiento para comparar cómo las diferentes frecuencias afectan la dinámica del tren de engranajes.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

