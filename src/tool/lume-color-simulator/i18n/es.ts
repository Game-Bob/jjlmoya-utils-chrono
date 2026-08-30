import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'simulador-de-color-de-lume',
  title: 'Simulador de Color de Lume: visualizador de luz de reloj',
  description: 'Visualiza distintos colores de lume en tiempo real. Compara C1, C3, BGW9, LumiNova y más en diferentes niveles de luz ambiental.',
  ui: {
    title: 'Simulador de Color de Lume',
    lumeType: 'Tipo de Lume',
    brightness: 'Brillo Ambiental',
    dark: 'Oscuro',
    light: 'Claro',
    color: 'Color',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Tipo',
    description: 'Descripción',
    c1Name: 'C1',
    c1Desc: 'Verde (clásico)',
    c3Name: 'C3',
    c3Desc: 'Super Verde',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Azul Hielo',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Blanco Cálido',
    vintageName: 'Vintage',
    vintageDesc: 'Radio Envejecido',
    orangeName: 'Naranja',
    orangeDesc: 'Naranja Buceo',
    blueName: 'Azul',
    blueDesc: 'Azul Profundo',
    greenName: 'Verde',
    greenDesc: 'Verde Neón',
    tipTitle: 'Consejo',
    tipContent: 'El brillo del lume depende de la calidad del pigmento y de la cantidad de luz que haya absorbido. El BGW9 brilla en azul-blancuzco y es el más brillante, mientras que el lume vintage tiene un brillo cálido y tenue.',
  },
  seo: [
    { type: 'title', text: 'Simulador de Color de Lume: visualizador de brillo en tiempo real', level: 2 },
    { type: 'paragraph', html: 'El lume es una de las decisiones más personales al coleccionar relojes. ¿Prefieres el clásico brillo verde del <strong>C1 Super-LumiNova</strong> o el azul hielo del <strong>BGW9</strong>? Este simulador te muestra cómo se ve cada tipo de lume en distintos niveles de luz, desde pleno día hasta la oscuridad total, con los valores exactos de <strong>HEX y RGB</strong> de cada tonalidad.' },
    { type: 'title', text: 'Comparativa de Tipos de Super-LumiNova', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Color de Día', 'Color de Brillo', 'Brillo', 'Ideal Para'], rows: [
        ['C1', 'Verde claro', 'Verde', 'Medio', 'Relojes de vestir, estética original'],
        ['C3', 'Amarillo-verde', 'Verde brillante', 'Máximo', 'Relojes de buceo, herramientas'],
        ['BGW9', 'Blanco roto', 'Azul hielo', 'Alto', 'Relojes deportivos modernos, look limpio'],
        ['LumiNova', 'Beige cálido', 'Blanco cálido', 'Bajo-medio', 'Lume económico'],
        ['Vintage', 'Crema / tostado', 'Cálido tenue', 'Bajo', 'Relojes de estilo heritage'],
        ['Naranja', 'Naranja', 'Naranja', 'Medio', 'Acentos de buceo, retro'],
        ['Azul', 'Azul claro', 'Azul', 'Medio', 'Esferas de diseño, relojes de moda'],
        ['Verde', 'Verde brillante', 'Verde', 'Alto', 'Relojes de estilo militar'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9: ¿cuál elegir?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Verde Clásico', icon: 'mdi:lightbulb-on', description: 'La formulación original de Super-LumiNova. Brilla en verde con brillo medio. Una elección clásica y segura que funciona con cualquier estilo de reloj.', points: ['Brillo medio, visibilidad 4-6 h', 'Brillo verde, tono cálido', 'La formulación más económica', 'Común en relojes de gama básica'], highlight: false },
        { title: 'C3 Super Verde', icon: 'mdi:lightning-bolt', description: 'El lume verde más brillante disponible. Se usa en relojes de buceo profesionales donde la legibilidad bajo el agua es crítica. Máximo brillo con mínima carga.', points: ['Máximo brillo, visibilidad 8-12 h', 'Amarillo-verde a la luz del día', 'Preferido por Seiko, Citizen, Omega', 'Ideal para leer en poca luz'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Azul Hielo', icon: 'mdi:snowflake', description: 'Brilla en azul-blancuzco en lugar de verde. Ligeramente menos brillante que el C3, pero preferido por su estética limpia y moderna. Popular en relojes deportivos de lujo.', points: ['Brillo alto, visibilidad 6-10 h', 'Brillo azul-blancuzco, tono neutro', 'Look limpio y moderno a la luz del día', 'Usado por Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Estilo Radio', icon: 'mdi:fire', description: 'Tono beige/crema cálido que imita el lume de radio de los años 60. Intencionadamente más tenue por autenticidad estética. El brillo es cálido, sutil y envejece con elegancia.', points: ['Brillo bajo, visibilidad 2-4 h', 'Crema cálido a ámbar tenue', 'Aspecto envejecido sin radiactividad', 'Popular en reediciones heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'El Brillo No Lo Es Todo', icon: 'mdi:palette', html: 'El lume más brillante (C3) no siempre es la mejor opción. El <strong>BGW9</strong> sacrifica un poco de brillo por un aspecto más neutro y moderno que muchos coleccionistas prefieren. El <strong>lume vintage</strong> prioriza la estética de época sobre el rendimiento. Elige según lo que más te importe: <strong>máximo brillo, estética moderna o autenticidad heritage.</strong>' },
    { type: 'title', text: 'Cómo Funciona el Lume: la ciencia tras el brillo', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Pigmento fotoluminiscente a base de aluminato de estroncio. Absorbe luz UV y visible y la reemite en forma de brillo. No radiactivo y seguro. Desarrollado originalmente por Nemoto & Co. en 1993.' },
        { term: 'Tiempo de Carga', definition: 'El tiempo de exposición a la luz necesario para saturar el pigmento de lume. Una carga completa tarda 10-30 minutos bajo luz solar directa o UV. A más carga, más brillo y duración.' },
        { term: 'Duración del Brillo', definition: 'Cuánto tiempo sigue siendo visible el lume después de cargarlo. Un Super-LumiNova de calidad brilla visiblemente durante 6-12 horas. El periodo más brillante es la primera media hora tras la carga.' },
        { term: 'Grado del Pigmento', definition: 'La calidad de los cristales de aluminato de estroncio. Los pigmentos de mayor calidad (C3, BGW9) usan cristales más grandes y uniformes para un brillo más intenso y prolongado. Los grados inferiores (LumiNova) usan cristales más pequeños y son más tenues.' },
      ]
    },
    {
      type: 'summary', title: 'Guía Rápida para Elegir Lume', items: [
        'Para máxima legibilidad en oscuridad: elige C3 (verde más brillante) o BGW9 (azul-blancuzco más brillante).',
        'Para un look de lujo moderno: BGW9 es el favorito actual entre las marcas de alta gama.',
        'Para montajes vintage/heritage: usa Vintage o Naranja para un tono cálido de época.',
        'C1 es el todoterreno: buen brillo, verde clásico y económico.',
        'El color del lume con luz de día difiere mucho del color de brillo: usa el simulador para comparar ambos.',
      ]
    },
  ],
  faq: [
    {
      question: '¿Qué lume es el más brillante?',
      answer: 'El C3 Super-LumiNova es la formulación verde más brillante. El BGW9 es el azul-blancuzco más brillante. Ambos son significativamente más brillantes que el C1 o el LumiNova estándar.',
    },
    {
      question: '¿Qué es el lume BGW9?',
      answer: 'El BGW9 es una variante de Super-LumiNova que brilla en azul-blancuzco en lugar de verde. Es ligeramente menos brillante que el C3, pero muchos lo prefieren por su apariencia limpia y moderna.',
    },
    {
      question: '¿El lume vintage brilla?',
      answer: 'El lume vintage moderno (beige/cálido) brilla, pero es intencionadamente más tenue para imitar el radio envejecido. El sacrificio es autenticidad estética frente al máximo brillo.',
    },
    {
      question: '¿Cuánto dura el lume?',
      answer: 'Tras una carga completa bajo luz brillante, el Super-LumiNova de calidad brilla visiblemente durante 6-12 horas. El periodo más brillante son los primeros 30 minutos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecciona un tipo de lume',
      text: 'Elige entre los preajustes C1, C3, BGW9, LumiNova, Vintage, Naranja, Azul o Verde.',
    },
    {
      name: 'Ajusta el brillo',
      text: 'Desliza el control de brillo ambiental de día (izquierda) a noche (derecha) para ver cómo se comporta el lume.',
    },
    {
      name: 'Lee las especificaciones',
      text: 'La tarjeta de información muestra los valores exactos HEX y RGB del color actual.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Qué lume es el más brillante?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El C3 Super-LumiNova es el verde más brillante. El BGW9 es el azul-blancuzco más brillante.' },
        },
        {
          '@type': 'Question',
          'name': '¿Qué es el lume BGW9?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El BGW9 es una variante de Super-LumiNova que brilla en azul-blancuzco en lugar de verde.' },
        },
        {
          '@type': 'Question',
          'name': '¿El lume vintage brilla?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El lume vintage moderno brilla pero es intencionadamente más tenue para imitar el radio envejecido.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to simulate lume colors',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecciona un tipo de lume',
          'text': 'Elige entre C1, C3, BGW9, LumiNova u otros preajustes.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajusta el brillo',
          'text': 'Desliza el brillo de día a noche para ver el comportamiento del lume.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lee las especificaciones',
          'text': 'La tarjeta de información muestra los valores HEX y RGB del color actual.',
        },
      ],
    },
  ],
};
