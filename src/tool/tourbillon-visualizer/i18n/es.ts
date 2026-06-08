import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Qué es un tourbillon?',
    answer: 'Un tourbillon es una jaula giratoria que contiene el escape (volante, áncora y rueda de escape) de un reloj mecánico. Gira continuamente - generalmente una vez por minuto - para promediar los errores posicionales causados por la gravedad, mejorando la precisión.',
  },
  {
    question: '¿Cuál es la diferencia entre un tourbillon clásico y uno volante?',
    answer: 'Un tourbillon clásico está soportado por un puente superior e inferior, mientras que un tourbillon volante está en voladizo desde abajo sin soporte superior visible. Los tourbillons volantes ofrecen una vista sin obstrucciones del escape giratorio y se consideran más exigentes estéticamente de construir.',
  },
  {
    question: '¿Realmente mejora la precisión un tourbillon?',
    answer: 'En los relojes de pulsera modernos, el beneficio en precisión es mínimo ya que los errores posicionales ya están bien compensados. Sin embargo, en los relojes de bolsillo (para los que Breguet inventó el tourbillon en 1801), la rotación constante eliminaba las diferencias de ritmo entre posiciones verticales. Hoy, los tourbillons son principalmente una demostración de la alta artistry relojera.',
  },
];

const howTo = [
  {
    name: 'Cambiar tipo de tourbillon',
    text: 'Cambie entre tourbillon clásico y volante para ver la diferencia estructural. El tourbillon volante no tiene puente superior, revelando la jaula completa.',
  },
  {
    name: 'Ajustar frecuencia de batido',
    text: 'Pruebe diferentes frecuencias (18k, 28.8k, 36k VPH) para ver cómo cambian la velocidad del volante y la rotación de la rueda de escape.',
  },
  {
    name: 'Controlar velocidad',
    text: 'Use los controles de velocidad para ralentizar y observar la intrincada danza del escape, o acelere para ver el ciclo completo de rotación de la jaula.',
  },
];

const title = 'Tourbillon: Arte del Escape Rotatorio';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualizador',
  title,
  description: 'Experimente el fascinante arte del tourbillon - una jaula giratoria que alberga el escape. Observe el volante oscilar, el espiral respirar y la jaula girar en un elegante ballet mecánico.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Tipo',
    typeClassic: 'Clásico',
    typeFlying: 'Volante',
    speedLabel: 'Velocidad',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausado',
    beatRateLabel: 'Frecuencia',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Jaula',
    showLabelsLabel: 'Etiquetas',
    step1: 'Cambie entre tourbillon clásico y volante para comparar su arquitectura.',
    step2: 'Ajuste la frecuencia para ver cómo afecta el ritmo del escape.',
    step3: 'Use los controles de velocidad para observar la precisa danza mecánica a cualquier ritmo.',
    tipTitle: 'Consejo',
    tipContent: 'Breguet inventó el tourbillon en 1801. La palabra "tourbillon" significa "torbellino" en francés, describiendo la apariencia de la jaula giratoria en movimiento.',
    balanceLabel: 'Volante',
    escapeLabel: 'Escape',
    palletLabel: 'Áncora',
    cageLabel: 'Jaula',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Arte Animado del Escape', level: 2 },
    { type: 'paragraph', html: 'El <strong>tourbillon</strong> es una de las complicaciones más cautivadoras de la alta relojería. Este visualizador interactivo da vida al escape giratorio con una representación animada detallada del volante, espiral, áncora, rueda de escape y la icónica jaula giratoria. Explore la poesía mecánica de la obra maestra de Breguet.' },
    { type: 'title', text: 'Cómo funciona un tourbillon', level: 3 },
    { type: 'paragraph', html: 'Un tourbillon alberga el escape completo - <strong>volante, espiral, áncora y rueda de escape</strong> - dentro de una jaula giratoria. La jaula completa típicamente una rotación por minuto, cambiando continuamente la posición del escape respecto a la gravedad. Esto promedia los errores de tiempo posicionales, un concepto que fue revolucionario cuando Abraham-Louis Breguet lo patentó en 1801. El <strong>volante</strong> oscila a la frecuencia del reloj (típicamente 4 Hz / 28.800 vph), mientras que la <strong>rueda de escape</strong> avanza un diente por batido, creando el característico movimiento de tic.' },
    { type: 'title', text: 'Tourbillon Clásico vs Volante', level: 3 },
    {
      type: 'table', headers: ['Característica', 'Tourbillon Clásico', 'Tourbillon Volante'], rows: [
        ['Soporte superior', 'Puente visible', 'Ninguno (voladizo)'],
        ['Visibilidad', 'Parcial (puente visible)', 'Completa (sin obstrucciones)'],
        ['Dificultad', 'Alta', 'Extremadamente alta'],
        ['Inventado', '1801 (Breguet)', 'Años 1920 (Alfred Helwig)'],
        ['Común en', 'Marcas tradicionales', 'Independientes modernos'],
      ]
    },
    { type: 'title', text: 'Comparación de Frecuencias', level: 3 },
    {
      type: 'table', headers: ['Ritmo (vph)', 'Frecuencia', 'Rueda Escape RPM', 'Golpes/Segundo', 'Uso típico'], rows: [
        ['18.000', '2,5 Hz', '20 RPM', '5', 'Relojes de bolsillo vintage'],
        ['28.800', '4 Hz', '32 RPM', '8', 'Estándar moderno (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 RPM', '10', 'Alta frecuencia (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Arte Mecánico en Movimiento', icon: 'mdi:rotate-orbit', badge: 'RELOJERÍA', html: 'Este visualizador es una interpretación artística de un escape tourbillon. La rotación de la jaula, la oscilación del volante, la respiración del espiral, el balanceo del áncora y el avance de la rueda de escape están sincronizados según relaciones mecánicas reales. Use los controles para explorar esta obra maestra de la ingeniería micromecánica.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
