import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'calculadora-presencia-muneca',
  title: 'Calculadora de Presencia en Muñeca y Talla de Reloj',
  description: 'Calcula el ratio caja-muñeca, la cobertura de la muñeca plana y determina el tamaño ideal de reloj para tu muñeca basándote en criterios estéticos.',
  ui: {
    title: 'Ajustes de Medidas',
    wristCircumferenceLabel: 'Perímetro de Muñeca',
    caseDiameterLabel: 'Diámetro de Caja',
    lugToLugLabel: 'Distancia entre Asas',
    wristWidthLabel: 'Anchura Plana de Muñeca',
    autoEstimateWidthLabel: 'Estimar automáticamente la anchura plana (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Análisis de Ajuste en Muñeca',
    caseWristRatioLabel: 'Ratio Caja-Muñeca',
    wristCoverageLabel: 'Cobertura de Muñeca',
    verdictLabel: 'Valoración',
    verdictOversized: 'Caja Sobredimensionada',
    verdictBold: 'Porte Moderno / Marcado',
    verdictGolden: 'Porte Clásico / Dorado',
    verdictVintage: 'Vintage / Demasiado Pequeño',
    coverageSafe: 'Ajuste Seguro',
    coverageBold: 'Ajuste Marcado',
    coverageOverhang: 'Aviso de Vuelo de Asas',
    sweetSpotTitle: 'Estilo de Ajuste',
    sweetSpotDesc: 'El punto óptimo representa el aspecto visual más equilibrado.',
    minClassicLabel: 'Ajuste Vintage / Clásico',
    sweetSpotLabel: 'Punto Óptimo Estético',
    maxBoldLabel: 'Ajuste Moderno / Marcado',
    maxLugToLugLabel: 'Distancia entre Asas Máxima Recomendada',
    idealSizesTitle: 'Guía de Tallas Ideales',
    visualizerTitle: 'Simulador en Vivo',
    wristWidthHelp: 'Estimación basada en la forma de la muñeca.',
    estimatedLabel: 'estimado',
    customLabel: 'Muñeca',
  },
  seo: [
    { type: 'title', text: 'Cómo elegir el tamaño de reloj perfecto: guía de proporciones', level: 2 },
    { type: 'paragraph', html: 'Encontrar el tamaño de reloj adecuado combina matemáticas, geometría y estilo personal. En relojería, la forma en que un reloj se asienta en la muñeca se denomina <strong>presencia en muñeca</strong>. Un reloj debe verse equilibrado: ni dominar el brazo con un vuelo de asas antiestético ni desaparecer como un punto diminuto. Para lograr ese equilibrio, los coleccionistas analizan tres métricas: diámetro de caja, distancia entre asas y forma de la muñeca.' },
    { type: 'title', text: 'Entender el ratio caja-muñeca', level: 3 },
    { type: 'paragraph', html: 'Un método clásico para valorar las proporciones de un reloj es el ratio caja-muñeca. Se calcula dividiendo el perímetro de la muñeca en milímetros entre el diámetro de la caja. Ratios entre <strong>4,5 y 5,0</strong> representan el punto óptimo clásico. De <strong>4,0 a 4,5</strong> el reloj luce moderno y deportivo. Por encima de 5,0 predomina el estilo vintage, y por debajo de 4,0 la caja queda sobredimensionada.' },
    { type: 'title', text: 'Por qué la distancia entre asas importa más que el diámetro', level: 3 },
    { type: 'paragraph', html: 'Aunque el diámetro de caja acapara toda la atención, la <strong>distancia entre asas</strong> (la longitud vertical de punta a punta) es la verdadera prueba de ajuste. La regla de oro es que esa distancia nunca debe superar la anchura plana de la muñeca. Si las asas sobresalen, el reloj se mueve, aparece un hueco entre la correa y la piel, y el resultado visual es pobre.' },
    { type: 'title', text: 'Muñecas planas vs. redondas: tallas según tu anatomía', level: 3 },
    { type: 'paragraph', html: 'El perímetro de muñeca solo cuenta parte de la historia. Muñecas con el mismo perímetro pueden tener secciones transversales muy distintas: plana o redonda. Las muñecas planas ofrecen una superficie superior más ancha y toleran distancias entre asas mayores sin vuelo. Las muñecas redondas son más cilíndricas, con una superficie superior más estrecha, y necesitan distancias entre asas más cortas para evitar el vuelo.' },
  ],
  faq: [
    {
      question: '¿Cuál es el ratio caja-muñeca ideal?',
      answer: 'El ratio ideal oscila entre 4,0 y 5,0. Un valor de 4,5 representa el punto óptimo relojero clásico. Entre 4,0 y 4,5 se obtiene una presencia moderna y marcada; por encima de 5,0 el reloj encaja mejor en un estilo vintage; por debajo de 4,0 la caja queda sobredimensionada.',
    },
    {
      question: '¿Por qué la distancia entre asas importa más que el diámetro de caja?',
      answer: 'El diámetro solo mide la anchura de la esfera. La distancia entre asas determina la longitud total del reloj sobre la muñeca. Si supera la anchura plana de la muñeca, las asas vuelan, la correa cae en vertical y el reloj parece inestable y desproporcionado.',
    },
    {
      question: '¿Cómo afectan las muñecas planas o redondas al ajuste del reloj?',
      answer: 'Dos muñecas con el mismo perímetro (por ejemplo, 17 cm) pueden llevar relojes de forma muy distinta. Una muñeca plana tiene una superficie superior más amplia y tolera distancias entre asas mayores sin vuelo. Una muñeca redonda es más estrecha en la parte superior y necesita distancias entre asas más cortas para un ajuste estable.',
    },
    {
      question: '¿Cómo influyen el grosor y el bisel en el tamaño visual de un reloj?',
      answer: 'Los relojes con bisel muy fino (como los de vestir) tienen una esfera de mayor superficie y parecen más grandes de lo que su diámetro indica. Los relojes de buceo con bisel giratorio ancho tienen una esfera más pequeña y lucen más compactos. Del mismo modo, los relojes de más de 13 mm de grosor parecen más robustos y con mayor peso visual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mide tu muñeca',
      text: 'Rodea el hueso de la muñeca con una cinta métrica flexible para obtener el perímetro en cm o pulgadas.',
    },
    {
      name: 'Introduce las medidas del reloj',
      text: 'Escribe el diámetro de caja y la distancia entre asas del reloj que quieras valorar.',
    },
    {
      name: 'Analiza el ajuste y el simulador',
      text: 'Revisa el ratio caja-muñeca, la alerta de vuelo de asas y observa el diagrama en tiempo real.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuál es el ratio caja-muñeca ideal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El ratio ideal oscila entre 4,0 y 5,0. Un valor de 4,5 representa el punto óptimo relojero clásico. Entre 4,0 y 4,5 se obtiene una presencia moderna y marcada; por encima de 5,0 el reloj encaja mejor en un estilo vintage; por debajo de 4,0 la caja queda sobredimensionada.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Por qué la distancia entre asas importa más que el diámetro de caja?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El diámetro solo mide la anchura de la esfera. La distancia entre asas determina la longitud total del reloj sobre la muñeca. Si supera la anchura plana de la muñeca, las asas vuelan, la correa cae en vertical y el reloj parece inestable y desproporcionado.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Presencia en Muñeca y Talla de Reloj',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo determinar el tamaño de reloj perfecto',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Mide tu muñeca',
          'text': 'Rodea el hueso de la muñeca con una cinta métrica flexible para obtener el perímetro en cm o pulgadas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Introduce las medidas del reloj',
          'text': 'Escribe el diámetro de caja y la distancia entre asas del reloj que quieras valorar.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analiza el ajuste y el simulador',
          'text': 'Revisa el ratio caja-muñeca, la alerta de vuelo de asas y observa el diagrama en tiempo real.'
        }
      ]
    }
  ]
};
