import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'convertidor-resistencia-agua',
  title: 'Convertidor de Resistencia al Agua de Relojes: Metros, ATM, Bar y Pies',
  description: 'Convierta las clasificaciones de resistencia al agua de relojes entre metros, pies, ATM y bar. Descubra lo que realmente significa cada clasificación para el uso diario, la natación y el buceo.',
  ui: {
    title: 'Convertidor de Resistencia al Agua',
    depthLabel: 'Resistencia al Agua',
    enterDepth: 'Ingrese la clasificación de profundidad',
    unitMeters: 'Metros (m)',
    unitFeet: 'Pies (ft)',
    unitATM: 'Atmósferas (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Valores Equivalentes',
    ratingLabel: 'Clasificación',
    whatItMeans: 'Qué Significa',
    notWaterResistant: 'No Resistente al Agua',
    notWaterResistantDesc: 'Sin salpicaduras. Manténgalo alejado del agua por completo.',
    handWash: 'Resistente a Salpicaduras',
    handWashDesc: 'Lavado de manos, lluvia, salpicaduras ligeras. No nadar, no ducharse.',
    showerSwim: 'Ducha y Natación Superficial',
    showerSwimDesc: 'Ducharse, natación superficial en piscina. Sin buceo ni esnórquel.',
    snorkeling: 'Natación y Esnórquel',
    snorkelingDesc: 'Natación en piscina, esnórquel, deportes acuáticos. Excelente resistencia diaria.',
    scubaDiving: 'Buceo Recreativo',
    scubaDivingDesc: 'Buceo con tanque, actividades marinas de alto impacto. Conforme a ISO.',
    saturationDiving: 'Buceo Profundo / Saturación',
    saturationDivingDesc: 'Buceo de saturación profesional. Profundidades extremas. Contexto de válvula de escape de helio.',
    tipTitle: 'Consejo',
    tipContent: 'La resistencia al agua se degrada con el tiempo. Las juntas y sellos deben revisarse anualmente y reemplazarse cada 3\u20135 años.',
  },
  seo: [
    { type: 'title', text: 'Convertidor de Resistencia al Agua de Relojes-Metros, ATM, Bar y Pies descifrados', level: 2 },
    { type: 'paragraph', html: 'Una clasificación de resistencia al agua de 30 metros no significa que pueda bucear a 30 metros. Significa que el reloj soporta salpicaduras y lluvia ligera. Este convertidor traduce entre <strong>metros, pies, atmósferas (ATM) y bares</strong>, y le indica qué permite realmente cada clasificación.' },
    { type: 'title', text: 'La Verdad Sobre las Clasificaciones de Resistencia al Agua', level: 3 },
    { type: 'paragraph', html: 'La resistencia al agua de los relojes se prueba bajo presión estática en un laboratorio. Las condiciones reales-mover el brazo, bucear, cambios de temperatura-generan una presión dinámica mucho mayor. Un reloj de 30m / 3 ATM solo es resistente a salpicaduras. Para nadar, necesita al menos 100m / 10 ATM. Para buceo con tanque, 200m / 20 ATM es el punto de entrada estándar.' },
    { type: 'title', text: 'Por Qué la Resistencia al Agua se Degrada con el Tiempo', level: 3 },
    { type: 'paragraph', html: 'Las juntas de goma y los anillos O que sellan su reloj se secan, agrietan y comprimen con el tiempo. El calor, la luz UV y los productos químicos aceleran este proceso. Un reloj que alguna vez fue resistente al agua hasta 100m puede ser solo resistente a salpicaduras después de 5 años sin mantenimiento. Haga revisar sus sellos anualmente y reemplácelos cada 3 a 5 años.' },
    { type: 'title', text: 'ISO 6425-El Estándar de Relojes de Buceo', level: 3 },
    { type: 'paragraph', html: 'Para que un reloj se llame "reloj de buceo", debe cumplir con la norma ISO 6425: al menos 100m de resistencia al agua, un bisel unidireccional, marcas luminiscentes y una corona de rosca. Los relojes que cumplen este estándar se prueban al 25% por encima de su profundidad nominal. Un reloj con certificación ISO de 200m se prueba a 250m.' },
  ],
  faq: [
    {
      question: '¿Puedo nadar con un reloj resistente al agua de 30 metros?',
      answer: 'No. Una clasificación de 30m / 3 ATM significa solo resistencia a salpicaduras-lavado de manos, lluvia y sudor. Nadar genera presión dinámica que supera la presión de prueba estática. Para nadar, elija al menos 100m / 10 ATM.',
    },
    {
      question: '¿Cuál es la diferencia entre ATM, bar y metros?',
      answer: '1 ATM = 1 bar ≈ 10 metros de columna de agua estática. En la industria relojera son esencialmente equivalentes. Un reloj de 10 ATM es lo mismo que un reloj de 10 bar y está clasificado para aproximadamente 100 metros.',
    },
    {
      question: '¿Con qué frecuencia debo probar la resistencia al agua de mi reloj?',
      answer: 'Una vez al año, especialmente antes de la exposición al agua. Las juntas y sellos se desgastan. Cada 3-5 años, todos los sellos deben reemplazarse durante un servicio completo.',
    },
    {
      question: '¿Qué significa certificación ISO 6425?',
      answer: 'ISO 6425 es el estándar internacional para relojes de buceo. Requiere al menos 100m de resistencia, un bisel unidireccional, marcas luminiscentes y pruebas al 25% por encima de la profundidad nominal.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ingrese su clasificación',
      text: 'Escriba el número de resistencia al agua de su reloj y seleccione la unidad (metros, pies, ATM o bar).',
    },
    {
      name: 'Lea los equivalentes',
      text: 'La tarjeta muestra los valores convertidos en las cuatro unidades simultáneamente.',
    },
    {
      name: 'Revise la recomendación',
      text: 'La tarjeta resaltada muestra qué actividades son seguras con la clasificación de su reloj.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Puedo nadar con un reloj resistente al agua de 30 metros?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Una clasificación de 30m / 3 ATM significa solo resistencia a salpicaduras-lavado de manos, lluvia y sudor. Para nadar, elija al menos 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es la diferencia entre ATM, bar y metros?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 metros de columna de agua estática. En la industria relojera son esencialmente equivalentes.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Con qué frecuencia debo probar la resistencia al agua de mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Una vez al año, especialmente antes de la exposición al agua. Cada 3-5 años, todos los sellos deben reemplazarse durante un servicio completo.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué significa certificación ISO 6425?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 requiere al menos 100m de resistencia, un bisel unidireccional, marcas luminiscentes y pruebas al 25% por encima de la profundidad nominal.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertidor de Resistencia al Agua de Relojes',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo convertir clasificaciones de resistencia al agua de relojes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ingrese su clasificación',
          'text': 'Escriba el número de resistencia al agua de su reloj y seleccione la unidad.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lea los equivalentes',
          'text': 'La tarjeta muestra los valores convertidos en las cuatro unidades simultáneamente.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Revise la recomendación',
          'text': 'La tarjeta resaltada muestra qué actividades son seguras con la clasificación de su reloj.',
        },
      ],
    },
  ],
};
