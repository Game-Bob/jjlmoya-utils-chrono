import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'calculadora-taquimetrica',
  title: 'Calculadora Taquimetrica: Velocidad desde tiempo transcurrido',
  description: 'Calcula la velocidad a partir del tiempo transcurrido usando la fórmula del taquímetro. Funciona con cualquier cronógrafo que tenga una escala taquimétrica en el bisel.',
  ui: {
    title: 'Calculadora Taquimetrica',
    timeLabel: 'Tiempo Transcurrido (segundos)',
    timeHelp: 'Tiempo medido en 1 km o 1 milla',
    speedResult: 'Velocidad',
    bezelReading: 'Lectura del Bisel',
    presetLabel: 'Escenario Predefinido',
    selectPreset: 'Selecciona un escenario',
    customPreset: 'Personalizado',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Pon en marcha el cronografo cuando el objeto pase por el punto de inicio.',
    exampleStep2: 'Detenlo despues de 1 km. La escala taquimetrica muestra la velocidad.',
    tipTitle: 'Consejo',
    tipContent: 'A los 36 segundos el bisel marca 100. Tiempos mas rapidos (menor duracion) indican velocidades mas altas en la escala taquimetrica.',
  },
  seo: [
    { type: 'title', text: 'Calculadora Taquimetrica: Convierte tiempo transcurrido en velocidad', level: 2 },
    { type: 'paragraph', html: 'Un taquimetro es una escala en el bisel o la esfera de un reloj que convierte el tiempo transcurrido en velocidad. Se usa normalmente con un cronografo: inicia el temporizador cuando el objeto pasa por un punto de referencia, detenlo despues de 1 km (o 1 milla) y lee la velocidad en la escala. Esta calculadora hace las cuentas por ti.' },
    { type: 'title', text: 'Como funciona un Taquimetro', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formula', definition: 'Velocidad = 3.600 ÷ tiempo transcurrido en segundos. La constante 3.600 representa los segundos por hora.' },
        { term: 'La Escala', definition: 'Los biseles taquimetricos estan marcados desde 60 (a las 3 en punto) hasta 400 o 500 (cerca de las 12 en punto). Las velocidades mas rapidas corresponden a tiempos transcurridos mas cortos.' },
        { term: 'Distancia Base', definition: 'Los taquimetros estandar estan calibrados para 1 km o 1 milla. Para otras distancias, divide la lectura en consecuencia.' },
      ]
    },
    { type: 'title', text: 'Mediciones Taquimetricas Comunes', level: 3 },
    {
      type: 'table', headers: ['Tiempo Transcurrido', 'Velocidad', 'Escenario'], rows: [
        ['10 s', '360 km/h', 'Tren bala / coche de carreras'],
        ['12 s', '300 km/h', 'Despegue de avion privado'],
        ['20 s', '180 km/h', 'Deportivo en autopista'],
        ['30 s', '120 km/h', 'Coche en autovia'],
        ['36 s', '100 km/h', 'Coche en carretera (referencia estandar)'],
        ['45 s', '80 km/h', 'Coche en via urbana'],
        ['60 s', '60 km/h', 'Conduccion urbana'],
        ['90 s', '40 km/h', 'Ciclismo'],
        ['120 s', '30 km/h', 'Trotar'],
        ['240 s', '15 km/h', 'Correr'],
        ['480 s', '7.5 km/h', 'Caminar'],
      ]
    },
    { type: 'title', text: 'Mas alla de la Escala Estandar', level: 3 },
    { type: 'paragraph', html: 'Si el bisel taquimetrico solo llega hasta 400 pero tu tiempo transcurrido es inferior a 9 segundos, aun puedes usarlo. Simplemente usa una distancia base mayor. Por ejemplo, si recorres 2 km en 18 segundos, divide la lectura del bisel entre 2. Por el contrario, para velocidades lentas (mas de 60 segundos), usa una distancia base mas corta (p. ej., 0.5 km) y multiplica por 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Compatibilidad del Taquimetro', icon: 'mdi:information', badge: 'NOTA', html: 'No todos los cronografos tienen un bisel taquimetrico. Algunos relojes colocan la escala taquimetrica en el rehaut de la esfera o en el anillo exterior. Los relojes digitales pueden incluir una funcion taquimetrica en el modo cronografo. La formula siempre funciona independientemente de la escala fisica.' },
  ],
  faq: [
    {
      question: '¿Como se usa un bisel taquimetrico en mi reloj?',
      answer: 'Pon en marcha el cronografo en un punto de referencia (p. ej., un hito de carretera). Detenlo despues de exactamente 1 km (o 1 milla). La manecilla de segundos apunta a la velocidad en la escala del bisel. Por ejemplo, si tardaste 36 segundos en recorrer 1 km, la manecilla apunta a 100, lo que significa 100 km/h.',
    },
    {
      question: '¿Que pasa si mi tiempo transcurrido es mas rapido de lo que el bisel puede leer?',
      answer: 'Algunos taquimetros solo llegan hasta 400 o 500. Si recorres 1 km en menos de 9 segundos, usa una distancia base mayor. Recorre 2 km y divide la lectura del bisel entre 2, o recorre 3 km y divide entre 3.',
    },
    {
      question: '¿Que pasa si mi tiempo transcurrido es mas lento de lo que el bisel puede leer?',
      answer: 'Usa una distancia base mas corta. Por ejemplo, si tardas 90 segundos en recorrer 1 km, recorre 0.5 km en su lugar. Lee el bisel y multiplica por 2. La escala taquimetrica estandar cubre tiempos de aproximadamente 7 a 60 segundos.',
    },
    {
      question: '¿Puedo usar un taquimetro para algo mas que la velocidad?',
      answer: 'Si. El taquimetro mide cualquier tasa por hora. Por ejemplo, mide cuanto tiempo se tarda en completar una tarea y la escala muestra cuantas puedes hacer por hora. En fabricacion, una tarea de 30 segundos significa 120 unidades por hora.',
    },
    {
      question: '¿Todos los taquimetros usan la misma escala?',
      answer: 'La mayoria usa la escala logaritmica estandar basada en la formula 3.600 ÷ segundos. Sin embargo, algunos relojes antiguos o marcas pueden tener variaciones. La escala fisica tambien puede estar limitada por el minutero y las marcas del bisel.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecciona un escenario o ingresa un tiempo personalizado',
      text: 'Elige entre opciones predefinidas como Coche, Ciclismo o Correr, o selecciona Personalizado para ingresar cualquier tiempo transcurrido en segundos.',
    },
    {
      name: 'Lee el resultado de velocidad',
      text: 'La calculadora muestra la velocidad en km/h y la lectura equivalente en el bisel taquimetrico.',
    },
    {
      name: 'Aplica a tu cronografo',
      text: 'Usa el tiempo transcurrido para encontrar la velocidad correspondiente en el bisel taquimetrico de tu reloj.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como se usa un bisel taquimetrico en mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pon en marcha el cronografo en un punto de referencia. Detenlo despues de exactamente 1 km. La manecilla de segundos apunta a la velocidad en la escala del bisel. Por ejemplo, 36 segundos = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que pasa si mi tiempo transcurrido es mas rapido de lo que el bisel puede leer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa una distancia base mayor. Recorre 2 km y divide la lectura del bisel entre 2, o recorre 3 km y divide entre 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que pasa si mi tiempo transcurrido es mas lento de lo que el bisel puede leer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usa una distancia base mas corta. Recorre 0.5 km en su lugar. Lee el bisel y multiplica por 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puedo usar un taquimetro para algo mas que la velocidad?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Si. El taquimetro mide cualquier tasa por hora. Mide cuanto tiempo se tarda en completar una tarea y la escala muestra cuantas puedes hacer por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Todos los taquimetros usan la misma escala?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoria usa la escala logaritmica estandar basada en la formula 3.600 ÷ segundos. Algunos relojes antiguos pueden tener variaciones.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora Taquimetrica',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como calcular la velocidad usando un taquimetro',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecciona un escenario o tiempo personalizado',
          'text': 'Elige entre opciones predefinidas como Coche, Ciclismo o Correr, o selecciona Personalizado para ingresar cualquier tiempo transcurrido en segundos.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lee el resultado de velocidad',
          'text': 'La calculadora muestra la velocidad en km/h y la lectura equivalente en el bisel taquimetrico.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aplica a tu cronografo',
          'text': 'Usa el tiempo transcurrido para encontrar la velocidad correspondiente en el bisel taquimetrico de tu reloj.',
        },
      ],
    },
  ],
};
