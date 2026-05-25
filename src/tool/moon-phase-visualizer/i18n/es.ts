import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'visualizador-de-fase-lunar',
  title: 'Visualizador de Fase Lunar: calendario lunar y ajuste de relojes',
  description: 'Visualiza la fase lunar actual, la iluminación, la edad lunar y las próximas lunas llena y nueva. Perfecto para ajustar el complicación de fase lunar de tu reloj.',
  ui: {
    title: 'Visualizador de Fase Lunar',
    selectDate: 'Seleccionar Fecha',
    today: 'Hoy',
    moonPhase: 'Fase Lunar',
    illumination: 'Iluminación',
    moonAge: 'Edad Lunar',
    daysUntilFull: 'Días hasta Luna Llena',
    daysUntilNew: 'Días hasta Luna Nueva',
    newMoon: 'Luna Nueva',
    waxingCrescent: 'Creciente',
    firstQuarter: 'Cuarto Creciente',
    waxingGibbous: 'Gibosa Creciente',
    fullMoon: 'Luna Llena',
    waningGibbous: 'Gibosa Menguante',
    lastQuarter: 'Cuarto Menguante',
    waningCrescent: 'Menguante',
    nextFullMoon: 'Próxima Luna Llena',
    nextNewMoon: 'Próxima Luna Nueva',
    tipTitle: 'Consejo',
    tipContent: 'Para ajustar un reloj de fase lunar, primero averigua la fase de hoy con esta herramienta y luego avanza la corona hasta que el disco lunar coincida. La mayoría de los mecanismos de fase lunar mecánicos tienen una precisión de aproximadamente un día cada 2 años.',
    days: 'Progreso del Ciclo',
    day: 'día',
  },
  seo: [
    { type: 'title', text: 'Visualizador de Fase Lunar: calendario lunar y guía de ajuste', level: 2 },
    { type: 'paragraph', html: 'El Visualizador de Fase Lunar muestra la <strong>fase lunar actual</strong> con un renderizado realista de la luna. Consulta el <strong>porcentaje de iluminación, la edad lunar, los días hasta la próxima luna llena y la próxima luna nueva</strong>. Diseñado para entusiastas de la relojería que necesitan ajustar su complicación de fase lunar con precisión; también funciona como calendario lunar para cualquier fecha pasada o futura.' },
    { type: 'title', text: 'Glosario de Fases Lunares', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Luna Nueva', definition: 'La luna está entre la Tierra y el sol. El lado iluminado mira hacia el lado opuesto. Iluminación al 0 %. Comienza el ciclo lunar.' },
        { term: 'Creciente', definition: 'Iluminación del 1–49 %. Aparece un delgado creciente en el lado derecho (hemisferio norte). La luna avanza hacia el cuarto creciente.' },
        { term: 'Cuarto Creciente', definition: 'Iluminación al 50 %. La mitad de la superficie visible está iluminada. La luna ha completado un cuarto de su ciclo.' },
        { term: 'Gibosa Creciente', definition: 'Iluminación del 51–99 %. Más de la mitad está iluminada. La luna se acerca al plenilunio.' },
        { term: 'Luna Llena', definition: 'Iluminación al 100 %. Toda la superficie visible está iluminada. El punto culminante del ciclo lunar.' },
        { term: 'Gibosa Menguante', definition: 'Iluminación del 99–51 %. El área iluminada empieza a reducirse por el lado derecho.' },
        { term: 'Cuarto Menguante', definition: 'Iluminación al 50 %. La mitad izquierda está iluminada. Tres cuartos del ciclo completados.' },
        { term: 'Menguante', definition: 'Iluminación del 49–1 %. Un delgado creciente en el lado izquierdo antes de que el ciclo se reinicie con luna nueva.' },
      ]
    },
    { type: 'title', text: 'Cómo Ajustar un Reloj de Fase Lunar', level: 3 },
    {
      type: 'list', items: [
        'Usa esta herramienta para averiguar la fase lunar exacta de hoy. Anota el nombre y el aspecto visual de la fase.',
        'En tu reloj, saca la corona hasta la posición de ajuste de fase lunar (normalmente posición 2 o 3).',
        'Avanza la corona hasta que el disco lunar muestre la misma fase que la herramienta. El indicador de luna llena suele estar en el centro superior del disco.',
        'Evita ajustar la fase lunar entre las 9 PM y las 3 AM, cuando el mecanismo de cambio de fecha está engranado y podría dañarse.',
        'La mayoría de los relojes de fase lunar mecánicos usan un engranaje de 59 dientes que aproxima dos ciclos lunares (59 días). Esto significa que acumulan aproximadamente un día de error cada 2 años.',
        'Para alta precisión, algunos relojes (Patek Philippe, A. Lange & Söhne) usan engranajes con una precisión de un día cada más de 100 años.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Nunca Ajustes Durante el Cambio de Fecha', icon: 'mdi:alert', html: 'No ajustes la fase lunar (ni la fecha) entre aproximadamente las <strong>9 PM y las 3 AM</strong>. Durante esta ventana, el mecanismo de cambio de fecha del reloj está físicamente acoplado a la rueda de fecha. Forzar la corona puede romper los dientes del engranaje. Si es imprescindible ajustar en este periodo, adelanta primero las manecillas más allá de las 3 AM y luego ajusta la fase lunar.' },
    { type: 'title', text: 'Fase Lunar Mecánica vs. Alta Precisión', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Engranaje', 'Acumulación de Error', 'Deriva de 1 Día Tras', 'Ejemplos de Relojes'], rows: [
        ['Estándar / Básico', '59 dientes', '~1 día cada 2 años', '~2.5 años', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermedio', '135 dientes', '~1 día cada 10 años', '~10 años', 'Omega, Tudor, IWC, Breitling'],
        ['Alta Precisión', 'Tren de engranajes', '~1 día cada 100+ años', '100+ años', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Cómo Leer el Disco Lunar', html: 'En la mayoría de relojes de fase lunar, el disco muestra <strong>dos lunas</strong> opuestas entre sí. Cada luna llena se alinea con la abertura central superior. Tras un ciclo completo (29.5 días), la segunda luna ocupa su lugar. Por eso funciona un engranaje de 59 dientes: completa una rotación en 59 días, exactamente dos ciclos lunares.' },
    {
      type: 'summary', title: 'Referencia Rápida', items: [
        'El ciclo lunar (sinódico) dura exactamente 29.53058867 días. La herramienta usa este valor para máxima precisión.',
        'Ocho fases se repiten en un ciclo eterno: nueva → creciente → cuarto creciente → gibosa creciente → llena → gibosa menguante → cuarto menguante → menguante.',
        'Para ajustar un reloj de fase lunar: averigua la fase de hoy aquí y luego coincídela en el disco de tu reloj.',
        'Nunca forces la corona entre las 9 PM y las 3 AM. Adelanta primero la hora más allá de las 3 AM.',
        'Las fases lunares de 59 dientes estándar deriven aproximadamente un día cada 2.5 años. Corregirlo requiere avanzar el disco un clic.',
      ]
    },
  ],
  faq: [
    {
      question: '¿Cómo ajusto la fase lunar en mi reloj?',
      answer: 'Averigua la fase lunar de hoy con esta herramienta. Avanza la corona (normalmente posición 2) hasta que el disco lunar muestre la fase correspondiente. Evita ajustarlo entre las 9 PM y las 3 AM, cuando el mecanismo de fecha está engranado.',
    },
    {
      question: '¿Qué precisión tienen los relojes de fase lunar mecánicos?',
      answer: 'La mayoría usa un engranaje de 59 dientes con una precisión de aproximadamente un día cada 2 años. Los relojes de gama alta como Patek Philippe y A. Lange & Söhne alcanzan una precisión de un día cada más de 100 años.',
    },
    {
      question: '¿Cuál es la diferencia entre un mes sinódico y uno sideral?',
      answer: 'El mes sideral (27.3 días) es la órbita de la luna respecto a las estrellas. El mes sinódico (29.53 días) es el tiempo entre fases idénticas y es el que siguen los relojes de fase lunar.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecciona una fecha',
      text: 'Usa el selector de fecha para elegir cualquier día, pasado o futuro, y ver la fase lunar.',
    },
    {
      name: 'Lee los datos de la fase',
      text: 'Las tarjetas muestran el nombre de la fase, el porcentaje de iluminación, la edad lunar y el progreso del ciclo.',
    },
    {
      name: 'Encuentra eventos próximos',
      text: 'Las fechas de la próxima luna llena y luna nueva se muestran automáticamente.',
    },
    {
      name: 'Ajusta tu reloj',
      text: 'Usa la fase mostrada para ajustar con precisión la complicación de fase lunar de tu reloj.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cómo ajusto la fase lunar en mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Averigua la fase lunar de hoy con esta herramienta. Avanza la corona hasta que el disco lunar muestre la fase correspondiente. Evita ajustarlo entre las 9 PM y las 3 AM.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué precisión tienen los relojes de fase lunar mecánicos?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoría usa un engranaje de 59 dientes con una precisión de aproximadamente un día cada 2 años. Los relojes de gama alta alcanzan una precisión de un día cada más de 100 años.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es la diferencia entre un mes sinódico y uno sideral?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El mes sideral (27.3 días) es la órbita de la luna respecto a las estrellas. El mes sinódico (29.53 días) es el tiempo entre fases idénticas y es el que siguen los relojes de fase lunar.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to visualize moon phases',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select a date',
          'text': 'Use the date picker to choose any date and see the moon phase.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the phase data',
          'text': 'The cards show phase name, illumination, moon age, and cycle progress.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Set your watch',
          'text': 'Use the displayed phase to set your moon phase watch complication.',
        },
      ],
    },
  ],
};
