import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculadora-precision-marcha-reloj',
  title: 'Calculadora de Precisión de Marcha y Desviación del Reloj',
  description: 'Registra y calcula la desviación diaria de tus relojes mecánicos o de cuarzo para analizar su precisión y constancia.',
  ui: {
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Bibliografía y Recursos',
    title: 'Precisión del Reloj',
    selectWatch: 'Seleccionar o añadir un reloj',
    watchPlaceholder: 'ej. Seiko SKX007',
    addWatch: 'Añadir reloj',
    deleteWatch: 'Eliminar reloj',
    addLog: 'Registrar nueva medición',
    offsetLabel: 'Desviación (segundos)',
    offsetPlaceholder: '0',
    dateLabel: 'Hora de la medición',
    saveLog: 'Guardar registro',
    avgRate: 'Desviación media diaria',
    consistency: 'Estado de precisión',
    totalLogs: 'Registros totales',
    historyTitle: 'Historial de mediciones',
    noLogs: 'Aún no hay registros para este reloj. Añade al menos dos registros para calcular la precisión.',
    tableDate: 'Fecha y hora',
    tableOffset: 'Desviación',
    tableRate: 'Desviación diaria',
    tableActions: 'Acciones',
    deleteLog: 'Eliminar',
    coscExcellent: 'Cronómetro COSC (+4/-6 s/d)',
    excellent: 'Excelente (0 a +5 s/d)',
    good: 'Bueno (+/- 10 s/d)',
    needsService: 'Necesita servicio (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'segundos',
    referenceTime: 'Hora de referencia',
    watchTime: 'Hora del reloj',
    useCurrentTime: 'Usar hora actual',
    calculatedRate: 'Desviación calculada',
    driftPredictorTitle: 'Calculadora y Proyección de Deriva',
    driftPredictorDesc: 'Proyecta la desviación acumulada en el tiempo y compárala con los estándares.',
    dailyRateInput: 'Desviación diaria (segundos/día)',
    dailyRatePlaceholder: 'ej. +4.5 o -3',
    driftHeading: 'Proyecciones',
    period: 'Período',
    accumulatedDrift: 'Deriva proyectada',
    day: '1 Día',
    week: '1 Semana',
    month: '1 Mes',
    months3: '3 Meses',
    months6: '6 Meses',
    year: '1 Año',
    years5: '5 Años',
    watchStandardTitle: 'Certificación de Estándares',
    trackerHeading: 'Seguimiento en Vivo',
    driftCalculatorTab: 'Proyección de Deriva',
    trackerTab: 'Registro de Precisión',
    stdRolex: 'Superlativo Rolex',
    stdCosc: 'Cronómetro COSC',
    stdMetas: 'Master METAS',
    stdStdMech: 'Mecánico Estándar',
    stdQuartz: 'Cuarzo Estándar',
    stdHaq: 'Cuarzo de Alta Precisión',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Estándar (+15 s/d)',
    presetQuartz: 'Cuarzo (+0.5 s/d)',
    statusPass: 'Apto',
    statusFail: 'No apto',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/año',
  },
  seo: [
    { type: 'title', text: 'La Guía Definitiva sobre Precisión de Relojes y Regulación de Marcha', level: 2 },
    { type: 'paragraph', html: 'Los relojes mecánicos son maravillas de la microingeniería pero están sujetos a fuerzas físicas y ambientales que afectan su precisión de marcha. Monitorear y comprender la desviación diaria es fundamental para mantener su salud y determinar cuándo requieren un servicio técnico profesional.' },
    { type: 'title', text: 'Por qué Desvían los Relojes Mecánicos: Factores Clave', level: 2 },
    { type: 'paragraph', html: 'Múltiples factores influyen en la marcha diaria de un reloj. La gravedad afecta al volante según la posición física del reloj. Los cambios térmicos dilatan o contraen el espiral, alterando la frecuencia. Además, el nivel de carga del muelle real modifica la amplitud de oscilación, siendo el rendimiento más estable a carga completa.' },
    { type: 'title', text: 'Comprensión de la Deriva Acumulada: El Impacto del Tiempo', level: 2 },
    { type: 'paragraph', html: 'Una desviación de solo +5 segundos al día parece insignificante, pero el error es acumulativo. En una semana representa 35 segundos de adelanto; en un mes son 2.5 minutos y al cabo de un año sumará más de 30 minutos de desfase. Este comportamiento resalta la importancia de registrar la marcha regularmente.' },
    { type: 'title', text: 'Cómo Medir y Calcular la Precisión de Marcha Manualmente', level: 2 },
    { type: 'paragraph', html: 'Puedes medir la desviación de tu reloj sin necesidad de un cronocomparador profesional usando nuestro Registro de Precisión. Sincroniza tu reloj con una fuente horaria de referencia atómica. Transcurridas de 24 a 48 horas, comprueba y anota la nueva diferencia. Divide este desfase por el número de días transcurridos para obtener la tasa de marcha media.' },
    { type: 'title', text: 'Uso de la Variación Posicional para la Autorregulación', level: 2 },
    { type: 'paragraph', html: 'Muchos calibres mecánicos se pueden autorregular de forma natural según su posición de descanso nocturno. Por ejemplo, dejar el reloj plano con la esfera hacia arriba puede hacer que gane unos segundos, mientras que apoyarlo sobre la corona puede hacer que los pierda. Registrando las posiciones podrás contrarrestar su desviación natural sin abrir la caja.' },
  ],
  faq: [
    {
      question: '¿Qué es una desviación diaria normal para un reloj mecánico?',
      answer: 'Los calibres mecánicos estándar suelen desviar entre +/- 10 y 20 segundos diarios. Los cronómetros con certificación oficial COSC están regulados en un margen de -4 a +6 segundos diarios, mientras que los movimientos de cuarzo de alta gama pueden lograr precisiones inferiores a +/- 0.5 segundos por día.',
    },
    {
      question: '¿Por qué cambia la precisión según la posición del reloj?',
      answer: 'La gravedad de la Tierra ejerce fuerza sobre el volante y la espiral de forma distinta si la esfera está arriba, abajo o si la corona descansa hacia un lado. Esta variación posicional provoca ligeras diferencias en la amplitud de oscilación y la tasa de marcha.',
    },
  ],
  bibliography: [
    {
      name: 'Estándares Oficiales del Contrôle Officiel Suisse des Chronomètres (COSC)',
      url: 'https://www.cosc.swiss/en',
    },
    {
      name: 'Regulación y Precisión en Relojes Mecánicos',
      url: 'https://es.wikipedia.org/wiki/Reloj_mec%C3%A1nico',
    },
  ],
  howTo: [
    {
      name: 'Registrar Estado Inicial',
      text: 'Sincroniza el reloj con un reloj atómico de referencia y anota el desfase inicial en segundos.',
    },
    {
      name: 'Esperar y Registrar',
      text: 'Usa el reloj con normalidad o déjalo en reposo en una posición fija durante al menos 12 a 24 horas.',
    },
    {
      name: 'Registrar Estado Final',
      text: 'Anota de nuevo el desfase del reloj respecto a la referencia. El sistema calculará la desviación media diaria.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Precisión de Marcha y Desviación del Reloj',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Qué es una desviación diaria normal para un reloj mecánico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Los calibres mecánicos estándar suelen desviar entre +/- 10 y 20 segundos diarios. Los cronómetros con certificación oficial COSC están regulados en un margen de -4 a +6 segundos diarios, mientras que los movimientos de cuarzo de alta gama pueden lograr precisiones inferiores a +/- 0.5 segundos por día.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Por qué cambia la precisión según la posición del reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La gravedad de la Tierra ejerce fuerza sobre el volante y la espiral de forma distinta si la esfera está arriba, abajo o si la corona descansa hacia un lado. Esta variación posicional provoca ligeras diferencias en la amplitud de oscilación y la tasa de marcha.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo Medir y Calcular la Precisión de Marcha Manualmente',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Registrar Estado Inicial',
          'text': 'Sincroniza el reloj con un reloj atómico de referencia y anota el desfase inicial en segundos.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Esperar y Registrar',
          'text': 'Usa el reloj con normalidad o déjalo en reposo en una posición fija durante al menos 12 a 24 horas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Registrar Estado Final',
          'text': 'Anota de nuevo el desfase del reloj respecto a la referencia. El sistema calculará la desviación media diaria.'
        }
      ]
    }
  ],
};
