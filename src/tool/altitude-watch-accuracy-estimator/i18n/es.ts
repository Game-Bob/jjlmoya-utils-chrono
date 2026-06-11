import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Por qué los relojes mecánicos funcionan más rápido en altitud?',
    answer: 'Los relojes mecánicos funcionan más rápido en altitud principalmente por la reducción de la densidad del aire. El aire más fino crea menos arrastre aerodinámico en el volante, permitiéndole oscilar con una amplitud ligeramente mayor. Esta amplitud aumentada hace que el reloj se adelante - típicamente 2-6 segundos por día por cada 1.000 m de ganancia de elevación, dependiendo del diseño del movimiento.',
  },
  {
    question: '¿La altitud también afecta a los relojes de cuarzo?',
    answer: 'Los relojes de cuarzo se ven mínimamente afectados por la altitud ya que no tienen un volante mecánico oscilante. Sin embargo, los cambios extremos de altitud pueden afectar el rendimiento de la batería debido a variaciones de temperatura. El efecto es insignificante comparado con los relojes mecánicos.',
  },
  {
    question: '¿Pueden los cambios de altitud dañar mi reloj?',
    answer: 'Los cambios de altitud rara vez dañan los relojes mecánicos. Sin embargo, la descompresión rápida (como en un avión) puede causar problemas con la resistencia al agua en algunos relojes. Las variaciones normales de altitud durante viajes están dentro de la tolerancia de diseño de cualquier reloj.',
  },
];

const howTo = [
  {
    name: 'Seleccione una altitud',
    text: 'Arrastre el control deslizante de altitud hacia arriba o abajo para simular diferentes elevaciones, desde el nivel del mar hasta 8.000 m. Observe cómo la oscilación del volante y los datos atmosféricos cambian en tiempo real.',
  },
  {
    name: 'Lea la desviación',
    text: 'La pantalla de desviación de tasa muestra los segundos estimados ganados por día en la altitud seleccionada. El gráfico de desviación muestra la tendencia en todas las altitudes.',
  },
  {
    name: 'Considere los factores',
    text: 'Observe cómo la densidad del aire disminuye con la altitud mientras la desviación de tasa aumenta. Los datos de temperatura y presión proporcionan contexto para los cambios ambientales.',
  },
];

const title = 'Estimador de Precisión por Altitud: Cómo la Elevación Afecta tu Reloj Mecánico';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'estimador-altitud-precision',
  title,
  description: 'Explore cómo la altitud afecta la precisión de los relojes mecánicos. Ajuste la elevación desde el nivel del mar hasta la cima de una montaña y vea cambios en tiempo real en la oscilación del volante, desviación de tasa, densidad del aire, presión y temperatura.',
  ui: {
    title: 'Estimador de Precisión por Altitud',
    altitudeLabel: 'Altitud',
    altitudeUnit: 'm',
    seaLevel: 'Nivel del Mar',
    deviationLabel: 'Desviación de Tasa',
    deviationUnit: 's/d',
    pressureLabel: 'Presión',
    pressureUnit: 'hPa',
    densityLabel: 'Densidad del Aire',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatura',
    temperatureUnit: '°C',
    oscillationLabel: 'Volante',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Tasa',
    atmDataTitle: 'Condiciones Atmosféricas',
    howItWorks: 'Cómo Funciona',
    howItWorksDesc: 'La menor densidad del aire en altitud reduce la resistencia aerodinámica en el volante, aumentando la amplitud y haciendo que el reloj funcione más rápido. Esta herramienta estima la desviación de tasa basada en modelos atmosféricos estándar.',
    negligible: 'Insignificante',
    minor: 'Menor',
    noticeable: 'Notable',
    significant: 'Significativo',
    severe: 'Severo',
    step1: 'Arrastre el control deslizante para simular elevaciones desde el nivel del mar hasta 8.000 m.',
    step2: 'Vea la animación del volante y el indicador de desviación responder en tiempo real.',
    step3: 'Revise los datos atmosféricos para entender los factores ambientales.',
    tipTitle: 'Consejo',
    tipContent: 'El efecto varía según el movimiento: los movimientos de alta frecuencia (36.000 VPH) se ven menos afectados que los movimientos vintage de baja frecuencia (18.000 VPH).',
    deviationChart: 'Desviación vs Altitud',
    altitudeM: 'Altitud (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Moléculas de Aire',
    airDensity: 'Densidad del Aire',
  },
  seo: [
    { type: 'title', text: 'Estimador Interactivo de Precisión por Altitud para Relojes Mecánicos', level: 2 },
    { type: 'paragraph', html: 'El <strong>Estimador de Precisión por Altitud</strong> es una herramienta interactiva que visualiza cómo los cambios de elevación afectan la precisión de los relojes mecánicos. Simulando altitudes desde el nivel del mar hasta 8.000 m, puede ver la desviación de tasa estimada causada por cambios en densidad del aire, presión y temperatura.' },
    { type: 'title', text: 'Cómo la Altitud Afecta la Precisión del Reloj', level: 3 },
    { type: 'paragraph', html: 'A mayores altitudes, <strong>la densidad del aire disminuye</strong>, lo que reduce la resistencia aerodinámica en el volante. Esto permite que el volante oscile con mayor amplitud, haciendo que el reloj funcione ligeramente más rápido. El efecto está típicamente en el rango de <strong>+2 a +6 segundos por día</strong> por cada 1.000 m de ganancia de elevación.' },
    { type: 'title', text: 'Desviación de Tasa a Diferentes Altitudes', level: 3 },
    {
      type: 'table', headers: ['Altitud', 'Densidad Aire', 'Presión', 'Temperatura', 'Desv. Estimada'], rows: [
        ['Nivel del Mar (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Base'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Factores Ambientales', level: 3 },
    { type: 'paragraph', html: 'Más allá de la densidad del aire, otros factores ambientales en altitud pueden afectar el rendimiento del reloj: la <strong>temperatura</strong> afecta la viscosidad del lubricante y la elasticidad del muelle real, los <strong>cambios de presión</strong> pueden afectar el sellado de la caja. Sin embargo, el efecto de la densidad del aire sobre el volante es el factor dominante.' },
    { type: 'diagnostic', variant: 'info', title: 'Herramienta de Simulación Interactiva', icon: 'mdi:axis-arrow', badge: 'RELOJERÍA', html: 'Esta herramienta proporciona valores estimados basados en el modelo ISA y observaciones empíricas. Los resultados reales varían según el calibre del movimiento, condición y tolerancias de fabricación.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
