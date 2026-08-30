import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'comparador-de-tamano-de-reloj',
  title: 'Comparador de Tamaño de Reloj: ajuste visual en tu muñeca',
  description: 'Compara visualmente el tamaño de las cajas de los relojes. Introduce el diámetro, el ancho entre asas y el perímetro de muñeca para ver cómo te queda un reloj antes de comprarlo.',
  ui: {
    title: 'Comparador de Tamaño de Reloj',
    addWatch: 'Añadir Reloj',
    watchName: 'Nombre del Reloj',
    watchNamePlaceholder: 'p. ej. Rolex Submariner',
    caseDiameter: 'Diámetro de Caja',
    lugToLug: 'Ancho entre Asas',
    thickness: 'Grosor',
    wristSize: 'Tamaño de Muñeca',
    wristSizePlaceholder: 'p. ej. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Eliminar',
    yourWatches: 'Tus Relojes',
    fitLegend: 'Leyenda de Ajuste',
    excellentFit: 'Excelente',
    goodFit: 'Bueno',
    borderlineFit: 'Justo',
    largeFit: 'Demasiado Grande',
    wristCurve: 'muñeca',
    nameRequired: 'Introduce un nombre de reloj',
    watchTooLarge: 'El reloj sobresale de la muñeca',
    l2lExceedsWrist: 'El ancho entre asas supera la muñeca',
    excellentDesc: 'Proporcional: el ancho entre asas queda dentro de tu muñeca.',
    goodDesc: 'Buen ajuste: sobresale ligeramente pero sigue siendo cómodo.',
    borderlineDesc: 'Justo: las asas se acercan al borde de la muñeca.',
    largeDesc: 'Demasiado grande: las asas probablemente sobresalen.',
    fitsWell: 'Queda bien',
    slightlyLarge: 'Algo grande',
    tooLarge: 'Muy grande',
    source: 'Guía de tallas',
    estimateNote: 'Introduce las medidas y añade un reloj para ver cómo se ajusta a tu muñeca.',
  },
  seo: [
    { type: 'title', text: 'Comparador de Tamaño de Reloj: ajuste visual en tu muñeca', level: 2 },
    { type: 'paragraph', html: '¿No sabes si un <strong>reloj de 42 mm</strong> te quedará bien en una <strong>muñeca de 17 cm</strong>? ¿O si ese ancho entre asas de 48 mm sobresaldrá? El Comparador de Tamaño de Reloj te da la respuesta visual. Introduce el diámetro de caja, el ancho entre asas, el grosor y el perímetro de muñeca: la herramienta dibuja el reloj a escala y colorea el ajuste desde <span style="color:#22c55e">verde (excelente)</span> hasta <span style="color:#ef4444">rojo (demasiado grande)</span>. Funciona tanto en unidades <strong>métricas como imperiales</strong>.' },
    { type: 'title', text: 'Glosario de Tamaños de Reloj', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Diámetro de Caja', definition: 'La anchura de la caja del reloj medida a través de la esfera, excluyendo la corona. Rango típico: 34-46 mm. Es la medida más mencionada, pero no el único factor de ajuste.' },
        { term: 'Ancho entre Asas (L2L)', definition: 'La distancia entre las asas superior e inferior donde se engancha la correa. Determina si el reloj sobresale de tu muñeca. Un reloj de 40 mm con 50 mm L2L se ve más grande que uno de 42 mm con 46 mm L2L.' },
        { term: 'Anchura Plana de Muñeca', definition: 'La anchura de la superficie superior de tu muñeca, a diferencia de su perímetro. Aproximadamente: perímetro de muñeca / π menos 2-4 cm. Es la dimensión sobre la que realmente se asienta el reloj.' },
        { term: 'Relación Caja-Muñeca', definition: 'Diámetro de caja dividido por anchura de muñeca. Una relación de 0.6-0.75 (60-75 %) se considera el ajuste proporcional clásico.' },
      ]
    },

    { type: 'title', text: '¿Qué Tamaño de Reloj se Adapta a Mi Muñeca?', level: 3 },
    {
      type: 'table', headers: ['Perímetro de Muñeca', 'Anchura Plana (aprox.)', 'Diámetro Ideal de Caja', 'Ancho Asas Máximo', 'Ideal Para'], rows: [
        ['14-15 cm (5.5-5.9 in)', '38-42 mm', '30-34 mm', '38-42 mm', 'Relojes vintage y de vestir'],
        ['15-16 cm (5.9-6.3 in)', '40-44 mm', '34-36 mm', '40-44 mm', 'Relojes clásicos pequeños'],
        ['16-17 cm (6.3-6.7 in)', '42-46 mm', '36-39 mm', '42-46 mm', 'Talla versátil de uso diario'],
        ['17-18 cm (6.7-7.1 in)', '44-48 mm', '38-42 mm', '44-48 mm', 'Punto óptimo para la mayoría de marcas'],
        ['18-19 cm (7.1-7.5 in)', '46-50 mm', '40-44 mm', '46-50 mm', 'Relojes de buceo y GMT'],
        ['19-20 cm (7.5-7.9 in)', '48-52 mm', '42-46 mm', '48-52 mm', 'Relojes herramienta y piloto'],
        ['20-21 cm (7.9-8.3 in)', '50-54 mm', '44-48 mm', '50-54 mm', 'Relojes sobredimensionados y flieger'],
      ]
    },

    { type: 'title', text: 'Cómo Medir tu Muñeca para un Reloj', level: 3 },
    {
      type: 'list', items: [
        'Envuelve una cinta métrica flexible alrededor de tu muñeca justo detrás del hueso (estiloides cubital). Debe quedar ajustada, no apretada.',
        'Si no tienes cinta, usa un cordel o un cable, marca la superposición y luego mide con una regla.',
        'Anota la medida en centímetros o pulgadas. La media en muñecas masculinas es 17-19 cm (6.7-7.5 in); en femeninas, 14-16 cm (5.5-6.3 in).',
        'Para estimar la anchura plana de tu muñeca, resta 2-4 cm del perímetro o usa la estimación automática de la herramienta.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'El Ancho entre Asas es el Límite Real', icon: 'mdi:ruler', html: 'La mayoría se fija en el <strong>diámetro de caja</strong>, pero el <strong>ancho entre asas</strong> es lo que realmente determina si un reloj te queda bien. Un reloj con 48 mm L2L en una muñeca plana de 55 mm (17 cm de perímetro) ocupa el 87 % de la anchura. Por encima del 65 %, las asas empiezan a acercarse al borde de la muñeca. <strong>Revisa siempre el L2L primero.</strong>' },

    { type: 'tip', title: '¿cm o Pulgadas? Usa lo que Conozcas', html: 'La herramienta ahora admite unidades métricas e imperiales. Mide tu muñeca en el sistema que uses a diario. Las dimensiones de la caja del reloj siempre están <strong>en milímetros</strong> (incluso en EE. UU.), así que el diámetro y el L2L se quedan en mm; solo la medida de la muñeca cambia. Esto refleja cómo funciona la industria relojera.' },

    {
      type: 'summary', title: 'Lista Rápida Antes de Comprar', items: [
        'Mide el perímetro de tu muñeca e introdúcelo en la herramienta.',
        'Consulta el ancho entre asas del reloj, no solo el diámetro de caja.',
        'El reloj debería ocupar entre el 60 y el 75 % de la anchura plana de tu muñeca para un ajuste clásico.',
        'Si las asas sobresalen de los bordes de tu muñeca, el reloj se sentirá demasiado grande sin importar el diámetro.',
        'Usa la herramienta para comparar varios relojes lado a lado antes de decidir tu compra.',
      ]
    },
  ],
  faq: [
    {
      question: '¿Cómo mido mi muñeca para un reloj?',
      answer: 'Usa una cinta métrica flexible alrededor del hueso de la muñeca. Otra opción: enrolla un cordel, marca la superposición y mide con una regla. La media es 17-19 cm en hombres y 14-16 cm en mujeres.',
    },
    {
      question: '¿Qué es el ancho entre asas y por qué importa?',
      answer: 'Es la distancia entre las asas superior e inferior. Determina si el reloj sobresale de tu muñeca. Un reloj con 48 mm L2L en una muñeca de 17 cm (≈55 mm planos) resulta proporcionado al 87 %. Por encima del 65 % empieza a sobresalir.',
    },
    {
      question: '¿Qué tamaño de reloj le queda a una muñeca de 17 cm?',
      answer: 'Una muñeca de 17 cm (≈55 mm planos) admite cómodamente relojes de 36-42 mm de diámetro y 44-50 mm L2L. El punto óptimo es 38-40 mm con 46-48 mm L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Introduce el tamaño de muñeca',
      text: 'Escribe el perímetro de tu muñeca en centímetros. La herramienta actualiza la silueta visual de la muñeca.',
    },
    {
      name: 'Introduce las dimensiones del reloj',
      text: 'Indica el diámetro de caja, el ancho entre asas y el grosor en milímetros.',
    },
    {
      name: 'Añade y compara',
      text: 'Haz clic en "Añadir Reloj" para guardarlo. Añade varios relojes y alterna entre ellos para comparar el ajuste.',
    },
    {
      name: 'Interpreta el color',
      text: 'Verde = excelente, amarillo = justo, rojo = demasiado grande para tu muñeca.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cómo mido mi muñeca para un reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa una cinta métrica flexible alrededor del hueso de la muñeca. La media es 17-19 cm para hombres y 14-16 cm para mujeres.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué es el ancho entre asas y por qué importa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El ancho entre asas es la distancia entre las asas superior e inferior. Determina si el reloj sobresale de la muñeca.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué tamaño de reloj le queda a una muñeca de 17 cm?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Una muñeca de 17 cm admite relojes de 36-42 mm de diámetro con 44-50 mm L2L. El punto óptimo es 38-40 mm con 46-48 mm L2L.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to compare watch sizes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter your wrist size',
          'text': 'Type your wrist circumference in centimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter watch dimensions',
          'text': 'Input case diameter, lug-to-lug, and thickness.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Add and compare',
          'text': 'Click Add Watch to save it. Add multiple watches to compare.',
        },
      ],
    },
  ],
};
