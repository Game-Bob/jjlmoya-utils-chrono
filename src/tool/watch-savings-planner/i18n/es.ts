import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planificador-ahorro-reloj',
  title: 'Planificador de Ahorro para Relojes',
  description: 'Establece y controla metas de ahorro para tu próxima compra de reloj. Visualiza el progreso, calcula plazos y mantente motivado.',
  ui: {
    title: 'Configuración de la Meta de Ahorro',
    addGoalTitle: 'Nueva Meta de Ahorro',
    goalNameLabel: 'Reloj',
    goalNamePlaceholder: 'p.ej. Rolex Submariner',
    targetPriceLabel: 'Precio Objetivo',
    currentSavingsLabel: 'Ahorrado',
    monthlyLabel: 'Por Mes',
    addButton: 'Añadir Meta',
    cancelButton: 'Cancelar',
    goalsEmpty: 'Aún no hay metas de ahorro',
    goalsEmptySub: '¡Establece tu primer objetivo de reloj y empieza a ahorrar!',
    monthsToGoal: 'Tiempo hasta la meta',
    yearsToGoal: 'Años hasta la meta',
    month: 'mes',
    months: 'meses',
    year: 'año',
    totalSaved: 'Total Ahorrado',
    totalGoals: 'Metas',
    achieved: 'Logrado',
    percentLabel: 'Ahorrado',
    deleteGoal: 'Eliminar',
    editGoal: 'Editar',
    saveGoal: 'Guardar',
    currency: 'EUR',
    summaryTitle: 'Resumen',
    goalAchieved: '¡Logrado!',
    goalProgress: 'Progreso',
    congratsTitle: '¡Felicidades!',
    congratsDesc: '¡Alcanzaste tu meta de ahorro!',
    monthlyContribution: 'Mensual',
    targetDate: 'Fecha Objetivo',
    adjustMonthly: 'Ajustar mensualidad',
  },
  seo: [
    { type: 'title', text: 'Planificador de Ahorro para Relojes - Sigue tu Próxima Compra', level: 2 },
    { type: 'paragraph', html: 'Ahorrar para un reloj es un viaje. Ya sea un <strong>Speedmaster vintage</strong>, un <strong>Submariner</strong> o un <strong>Grand Seiko</strong>, un plan de ahorro claro convierte el sueño en un cronograma. Esta herramienta te ayuda a visualizar tu progreso, ajustar tus contribuciones mensuales y ver exactamente cuándo saldrás de la boutique con tu santo grial.' },
    { type: 'title', text: 'Por qué un plan de ahorro importa para coleccionistas de relojes', level: 3 },
    { type: 'paragraph', html: 'Coleccionar relojes es un juego de paciencia. Los precios de los modelos más buscados suben constantemente, y las compras impulsivas suelen traer arrepentimiento. Un enfoque de ahorro estructurado te mantiene disciplinado, evita tensiones financieras y hace que la compra final se sienta merecida. Además, seguir tu progreso día a día genera anticipación y hace que abrir la caja sea aún más dulce.' },
    { type: 'title', text: 'Cómo establecer metas realistas de ahorro para relojes', level: 3 },
    { type: 'paragraph', html: 'Empieza con el precio total, incluidos impuestos y envío. Luego divídelo entre lo que puedes apartar cómodamente cada mes. Una buena regla general es dedicar no más del <strong>10-15 % de tus ingresos disponibles</strong> al ahorro para relojes. Si el plazo parece demasiado largo, considera dividirlo en hitos más pequeños - o explora alternativas más asequibles en la misma familia de estilo.' },
    { type: 'title', text: 'La psicología del seguimiento de metas', level: 3 },
    { type: 'paragraph', html: 'El seguimiento visual del progreso desencadena liberación de dopamina, el mismo neurotransmisor que hace que coleccionar sea tan gratificante. Cada vez que registras una nueva contribución y ves cómo se llena el anillo de progreso, refuerzas el hábito. Por eso, los ahorros pequeños y regulares suelen funcionar mejor que los depósitos grandes y esporádicos - el ritual mismo se convierte en parte de la experiencia de coleccionar.' },
  ],
  faq: [
    {
      question: '¿Cuánto debería ahorrar cada mes para un reloj?',
      answer: 'Apunta al 10-15 % de tus ingresos mensuales disponibles. La clave es la constancia - incluso 100 $ al mes suman 1.200 $ al año. Ajusta la cantidad según tu plazo: metas más cortas necesitan contribuciones mensuales mayores.',
    },
    {
      question: '¿Debería ahorrar para un reloj a la vez o para varios?',
      answer: 'Uno a la vez suele ser más efectivo. La concentración genera impulso. Una vez que alcanzas tu primera meta, la confianza y la disciplina se trasladan a la siguiente. Dicho esto, este planificador admite múltiples metas para que puedas comparar plazos.',
    },
    {
      question: '¿Qué pasa si el precio del reloj sube mientras ahorro?',
      answer: 'Buena pregunta. Revisa el precio de mercado actual cada pocos meses y actualiza tu objetivo. Si los precios suben rápido, considera aumentar tu cantidad mensual o acortar el plazo para fijar el precio actual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Establece tu meta',
      text: 'Ingresa el nombre del reloj y su precio total, incluidos impuestos y envío.',
    },
    {
      name: 'Controla tus ahorros',
      text: 'Registra cuánto has ahorrado ya y cuánto puedes apartar cada mes.',
    },
    {
      name: 'Monitorea el progreso',
      text: 'Observa cómo se llena el anillo de progreso mientras actualizas tus ahorros. Ajusta los montos mensuales en cualquier momento.',
    },
    {
      name: 'Celebra',
      text: '¡Cuando el anillo llegue al 100 %, habrás alcanzado tu meta. ¡Es hora de comprar ese reloj!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuánto debería ahorrar cada mes para un reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apunta al 10-15 % de tus ingresos mensuales disponibles. La clave es la constancia - incluso 100 $ al mes suman 1.200 $ al año.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Debería ahorrar para un reloj a la vez o para varios?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uno a la vez suele ser más efectivo. La concentración genera impulso. Una vez que alcanzas tu primera meta, lleva esa disciplina a la siguiente.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué pasa si el precio del reloj sube mientras ahorro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Revisa el precio de mercado actual cada pocos meses y actualiza tu objetivo. Considera aumentar tu cantidad mensual si los precios suben rápido.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planificador de Ahorro para Relojes',
      'operatingSystem': 'Todos',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo ahorrar para la compra de un reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Establece tu meta',
          'text': 'Ingresa el nombre del reloj y su precio total, incluidos impuestos y envío.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controla tus ahorros',
          'text': 'Registra cuánto has ahorrado ya y cuánto puedes apartar cada mes.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitorea el progreso',
          'text': 'Observa cómo se llena el anillo de progreso mientras actualizas tus ahorros.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Celebra',
          'text': '¡Cuando el anillo llegue al 100 %, habrás alcanzado tu meta. ¡Es hora de comprar ese reloj!',
        },
      ],
    },
  ],
};
