import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'calculadora-estrechamiento-correa',
  title: 'Calculadora de estrechamiento y proporciones de correa de reloj',
  description: 'Calcula el estrechamiento ideal de la correa para tu reloj según el diámetro de la caja y el ancho entre asas. Encuentra el ancho de hebilla perfecto para un aspecto equilibrado.',
  ui: {
    title: 'Calculadora de estrechamiento de correa',
    caseLabel: 'Dimensiones del reloj',
    caseInput: 'Diámetro de la caja',
    lugLabel: 'Ancho entre asas',
    lugInput: 'Ancho entre asas',
    taperLabel: 'Estilo de estrechamiento',
    straight: 'Recto',
    classic: 'Clásico',
    aggressive: 'Pronunciado',
    customTaper: 'Personalizado',
    buckleWidth: 'Ancho de hebilla',
    resultsTitle: 'Proporciones',
    lugWidth: 'Ancho entre asas',
    buckleWidthResult: 'Ancho de hebilla',
    taperAmount: 'Estrechamiento',
    taperRatio: 'Proporción',
    proportionScore: 'Puntuación',
    proportionExcellent: 'Excelente',
    proportionGood: 'Buena',
    proportionFair: 'Aceptable',
    proportionUnbalanced: 'Desequilibrada',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Nota',
    noteContent: 'Un estrechamiento clásico de 4 mm (p. ej., de 20 a 16 mm) es ideal para relojes formales. Los relojes de buceo y herramientas suelen lucir mejor con un estrechamiento recto o de 2 mm para un aspecto robusto.',
    step1: 'Ingresa el diámetro de la caja y el ancho entre asas.',
    step2: 'Elige un estilo de estrechamiento o fija un ancho de hebilla personalizado.',
    step3: 'Lee las proporciones y la representación visual.',
  },
  seo: [
    { type: 'title', text: 'Calculadora de estrechamiento de correa - Proporciones, ancho de hebilla y guía visual', level: 2 },
    { type: 'paragraph', html: 'Una correa bien proporcionada realza o arruina un reloj. Demasiado estrechamiento en un buceador lo hace ver frágil. Sin estrechamiento en un reloj formal se ve tosco. Esta calculadora te ayuda a encontrar la <strong>proporción de estrechamiento</strong> ideal según el diámetro de tu caja y el ancho entre asas.' },
    { type: 'title', text: '¿Qué es el estrechamiento de correa?', level: 3 },
    { type: 'paragraph', html: 'El estrechamiento de correa es la reducción de ancho desde las asas hasta la hebilla. Un reloj formal clásico puede estrechar de 20 mm en las asas a 16 mm en la hebilla - un estrechamiento de 4 mm. Un reloj de buceo puede mantenerse en 20 mm recto para una apariencia más robusta.' },
    { type: 'title', text: 'La proporción áurea para las proporciones de la correa', level: 3 },
    { type: 'paragraph', html: 'Los entusiastas del reloj coinciden en que un ancho entre asas de entre el 45 % y el 55 % del diámetro de la caja es el más favorecedor. En cuanto al estrechamiento, un ancho de hebilla del 75 % al 85 % del ancho entre asas crea una silueta equilibrada y elegante. Proporciones fuera de este rango pueden hacer que el reloj se vea descompensado o demasiado frágil.' },
    { type: 'title', text: 'Estrechamiento según el estilo del reloj', level: 3 },
    { type: 'paragraph', html: 'Relojes formales: estrechamiento de 4 mm (20 a 16 mm). Relojes deportivos: estrechamiento de 2 a 3 mm. Relojes de buceo: estrechamiento de 0 a 2 mm. Relojes militares o de campo: estrechamiento recto para un look robusto. Relojes de piloto: estrechamiento mínimo para mantener la estética de instrumento.' },
  ],
  faq: [
    {
      question: '¿Cuál es el estrechamiento ideal para un reloj formal?',
      answer: 'Un estrechamiento de 4 mm es la opción clásica. Para un ancho entre asas de 20 mm, eso significa una hebilla de 16 mm. Esto crea una silueta elegante que complementa el aspecto refinado de un reloj formal.',
    },
    {
      question: '¿Un reloj de buceo debería tener correa estrechada?',
      answer: 'La mayoría de los relojes de buceo lucen mejor con un estrechamiento mínimo o nulo. Una correa recta de 20 mm de principio a fin da una sensación robusta y de herramienta que combina con la naturaleza utilitaria de los buceadores.',
    },
    {
      question: '¿Qué ocurre si el estrechamiento es demasiado pronunciado?',
      answer: 'Un estrechamiento pronunciado (6 mm o más) puede hacer que la caja del reloj se vea desproporcionadamente grande y descompensada. La correa también puede sentirse frágil en el extremo de la hebilla.',
    },
    {
      question: '¿Cómo se mide el ancho entre asas?',
      answer: 'Mide el ancho interior entre los agujeros de las barras de resorte en la caja del reloj. Ese es el ancho de correa que necesitas. Los tamaños más comunes son 18 mm, 20 mm y 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ingresa las dimensiones de la caja y las asas',
      text: 'Introduce el diámetro de la caja y el ancho entre asas en milímetros.',
    },
    {
      name: 'Elige un estilo de estrechamiento',
      text: 'Selecciona Recto, Clásico, Pronunciado o Personalizado. La representación visual se actualiza al instante.',
    },
    {
      name: 'Revisa las proporciones',
      text: 'Verifica la proporción y la puntuación para ver si tu elección de correa está equilibrada.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuál es el estrechamiento ideal para un reloj formal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un estrechamiento de 4 mm es la opción clásica. Para un ancho entre asas de 20 mm, eso significa una hebilla de 16 mm, creando una silueta elegante.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Un reloj de buceo debería tener correa estrechada?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoría de los relojes de buceo lucen mejor con estrechamiento mínimo o nulo. Una correa recta de 20 mm da una sensación robusta de herramienta.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué ocurre si el estrechamiento es demasiado pronunciado?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un estrechamiento pronunciado puede hacer que la caja se vea desproporcionadamente grande y la correa puede sentirse frágil en el extremo de la hebilla.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cómo se mide el ancho entre asas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mide el ancho interior entre los agujeros de las barras de resorte. Los tamaños comunes son 18 mm, 20 mm y 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de estrechamiento de correa de reloj',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo calcular el estrechamiento de correa de un reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ingresa las dimensiones de la caja y las asas',
          'text': 'Introduce el diámetro de la caja y el ancho entre asas en milímetros.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Elige un estilo de estrechamiento',
          'text': 'Selecciona Recto, Clásico, Pronunciado o Personalizado.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Revisa las proporciones',
          'text': 'Verifica la proporción y la puntuación.',
        },
      ],
    },
  ],
};
