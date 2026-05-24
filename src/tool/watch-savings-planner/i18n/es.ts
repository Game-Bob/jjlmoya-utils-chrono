import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planificador-ahorro-reloj',
  title: 'Planificador de Ahorro para Relojes',
  description: 'Establece y controla metas de ahorro para tu pr\u00f3xima compra de reloj. Visualiza el progreso, calcula plazos y mantente motivado.',
  ui: {
    title: 'Configuraci\u00f3n de la Meta de Ahorro',
    addGoalTitle: 'Nueva Meta de Ahorro',
    goalNameLabel: 'Reloj',
    goalNamePlaceholder: 'p.ej. Rolex Submariner',
    targetPriceLabel: 'Precio Objetivo',
    currentSavingsLabel: 'Ahorrado',
    monthlyLabel: 'Por Mes',
    addButton: 'A\u00f1adir Meta',
    cancelButton: 'Cancelar',
    goalsEmpty: 'A\u00fan no hay metas de ahorro',
    goalsEmptySub: '\u00a1Establece tu primer objetivo de reloj y empieza a ahorrar!',
    monthsToGoal: 'Tiempo hasta la meta',
    yearsToGoal: 'A\u00f1os hasta la meta',
    month: 'mes',
    months: 'meses',
    year: 'a\u00f1o',
    totalSaved: 'Total Ahorrado',
    totalGoals: 'Metas',
    achieved: 'Logrado',
    percentLabel: 'Ahorrado',
    deleteGoal: 'Eliminar',
    editGoal: 'Editar',
    saveGoal: 'Guardar',
    currency: '$',
    summaryTitle: 'Resumen',
    goalAchieved: '\u00a1Logrado!',
    goalProgress: 'Progreso',
    congratsTitle: '\u00a1Felicidades!',
    congratsDesc: '\u00a1Alcanzaste tu meta de ahorro!',
    monthlyContribution: 'Mensual',
    targetDate: 'Fecha Objetivo',
    adjustMonthly: 'Ajustar mensualidad',
  },
  seo: [
    { type: 'title', text: 'Planificador de Ahorro para Relojes \u2014 Sigue tu Pr\u00f3xima Compra', level: 2 },
    { type: 'paragraph', html: 'Ahorrar para un reloj es un viaje. Ya sea un <strong>Speedmaster vintage</strong>, un <strong>Submariner</strong> o un <strong>Grand Seiko</strong>, un plan de ahorro claro convierte el sue\u00f1o en un cronograma. Esta herramienta te ayuda a visualizar tu progreso, ajustar tus contribuciones mensuales y ver exactamente cu\u00e1ndo saldr\u00e1s de la boutique con tu santo grial.' },
    { type: 'title', text: 'Por qu\u00e9 un plan de ahorro importa para coleccionistas de relojes', level: 3 },
    { type: 'paragraph', html: 'Coleccionar relojes es un juego de paciencia. Los precios de los modelos m\u00e1s buscados suben constantemente, y las compras impulsivas suelen traer arrepentimiento. Un enfoque de ahorro estructurado te mantiene disciplinado, evita tensiones financieras y hace que la compra final se sienta merecida. Adem\u00e1s, seguir tu progreso d\u00eda a d\u00eda genera anticipaci\u00f3n y hace que abrir la caja sea a\u00fan m\u00e1s dulce.' },
    { type: 'title', text: 'C\u00f3mo establecer metas realistas de ahorro para relojes', level: 3 },
    { type: 'paragraph', html: 'Empieza con el precio total, incluidos impuestos y env\u00edo. Luego div\u00eddelo entre lo que puedes apartar c\u00f3modamente cada mes. Una buena regla general es dedicar no m\u00e1s del <strong>10\u201315 % de tus ingresos disponibles</strong> al ahorro para relojes. Si el plazo parece demasiado largo, considera dividirlo en hitos m\u00e1s peque\u00f1os \u2014 o explora alternativas m\u00e1s asequibles en la misma familia de estilo.' },
    { type: 'title', text: 'La psicolog\u00eda del seguimiento de metas', level: 3 },
    { type: 'paragraph', html: 'El seguimiento visual del progreso desencadena liberaci\u00f3n de dopamina, el mismo neurotransmisor que hace que coleccionar sea tan gratificante. Cada vez que registras una nueva contribuci\u00f3n y ves c\u00f3mo se llena el anillo de progreso, refuerzas el h\u00e1bito. Por eso, los ahorros peque\u00f1os y regulares suelen funcionar mejor que los dep\u00f3sitos grandes y espor\u00e1dicos \u2014 el ritual mismo se convierte en parte de la experiencia de coleccionar.' },
  ],
  faq: [
    {
      question: '\u00bfCu\u00e1nto deber\u00eda ahorrar cada mes para un reloj?',
      answer: 'Apunta al 10\u201315 % de tus ingresos mensuales disponibles. La clave es la constancia \u2014 incluso 100 $ al mes suman 1.200 $ al a\u00f1o. Ajusta la cantidad seg\u00fan tu plazo: metas m\u00e1s cortas necesitan contribuciones mensuales mayores.',
    },
    {
      question: '\u00bfDeber\u00eda ahorrar para un reloj a la vez o para varios?',
      answer: 'Uno a la vez suele ser m\u00e1s efectivo. La concentraci\u00f3n genera impulso. Una vez que alcanzas tu primera meta, la confianza y la disciplina se trasladan a la siguiente. Dicho esto, este planificador admite m\u00faltiples metas para que puedas comparar plazos.',
    },
    {
      question: '\u00bfQu\u00e9 pasa si el precio del reloj sube mientras ahorro?',
      answer: 'Buena pregunta. Revisa el precio de mercado actual cada pocos meses y actualiza tu objetivo. Si los precios suben r\u00e1pido, considera aumentar tu cantidad mensual o acortar el plazo para fijar el precio actual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Establece tu meta',
      text: 'Ingresa el nombre del reloj y su precio total, incluidos impuestos y env\u00edo.',
    },
    {
      name: 'Controla tus ahorros',
      text: 'Registra cu\u00e1nto has ahorrado ya y cu\u00e1nto puedes apartar cada mes.',
    },
    {
      name: 'Monitorea el progreso',
      text: 'Observa c\u00f3mo se llena el anillo de progreso mientras actualizas tus ahorros. Ajusta los montos mensuales en cualquier momento.',
    },
    {
      name: 'Celebra',
      text: '\u00a1Cuando el anillo llegue al 100 %, habr\u00e1s alcanzado tu meta. Es hora de comprar ese reloj!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '\u00bfCu\u00e1nto deber\u00eda ahorrar cada mes para un reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Apunta al 10\u201315 % de tus ingresos mensuales disponibles. La clave es la constancia \u2014 incluso 100 $ al mes suman 1.200 $ al a\u00f1o.',
          },
        },
        {
          '@type': 'Question',
          'name': '\u00bfDeber\u00eda ahorrar para un reloj a la vez o para varios?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uno a la vez suele ser m\u00e1s efectivo. La concentraci\u00f3n genera impulso. Una vez que alcanzas tu primera meta, lleva esa disciplina a la siguiente.',
          },
        },
        {
          '@type': 'Question',
          'name': '\u00bfQu\u00e9 pasa si el precio del reloj sube mientras ahorro?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Revisa el precio de mercado actual cada pocos meses y actualiza tu objetivo. Considera aumentar tu cantidad mensual si los precios suben r\u00e1pido.',
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
      'name': 'C\u00f3mo ahorrar para la compra de un reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Establece tu meta',
          'text': 'Ingresa el nombre del reloj y su precio total, incluidos impuestos y env\u00edo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controla tus ahorros',
          'text': 'Registra cu\u00e1nto has ahorrado ya y cu\u00e1nto puedes apartar cada mes.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitorea el progreso',
          'text': 'Observa c\u00f3mo se llena el anillo de progreso mientras actualizas tus ahorros.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Celebra',
          'text': '\u00a1Cuando el anillo llegue al 100 %, habr\u00e1s alcanzado tu meta. Es hora de comprar ese reloj!',
        },
      ],
    },
  ],
};
