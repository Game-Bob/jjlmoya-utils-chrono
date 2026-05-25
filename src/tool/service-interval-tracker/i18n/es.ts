import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'rastreador-intervalo-servicio',
  title: 'Rastreador de Intervalos de Servicio de Relojes',
  description: 'Realiza un seguimiento y gestiona los intervalos de servicio para tu colección de relojes. Conoce a simple vista cuándo debe realizarse el mantenimiento.',
  ui: {
    title: 'Rastreador de Servicio',
    addWatch: 'Añadir reloj',
    editWatch: 'Editar reloj',
    cancel: 'Cancelar',
    save: 'Guardar',
    deleteWatch: 'Eliminar',
    confirmDelete: '¿Eliminar este reloj de tu colección?',
    emptyTitle: 'Tu colección está vacía',
    emptyDesc: 'Haz un seguimiento de los intervalos de servicio de tus relojes y nunca te saltes un mantenimiento.',
    emptyAction: 'Añadir tu primer reloj',
    healthy: 'al día',
    due: 'próximo',
    overdue: 'vencido',
    nameLabel: 'Nombre del reloj',
    namePlaceholder: 'ej. Rolex Submariner',
    movementLabel: 'Tipo de movimiento',
    movementAuto: 'Automático',
    movementManual: 'Manual',
    movementQuartz: 'Cuarzo',
    movementKinetic: 'Kinético',
    dateLabel: 'Fecha del último servicio',
    neverServiced: 'Nuevo o nunca mantenido',
    lastServiceLabel: 'Último servicio',
    nextServiceLabel: 'Siguiente servicio',
    serviced: 'Servicio realizado',
    newWatch: 'Nuevo',
    years: 'a',
    collectionHealth: 'Salud de la colección',
  },
  seo: [
    { type: 'title', text: 'Rastreador de Intervalos de Servicio de Relojes: Mantén tu colección al día', level: 2 },
    { type: 'paragraph', html: 'Un reloj mecánico es un instrumento de precisión con cientos de piezas móviles. Los lubricantes se secan, las juntas se desgastan y la precisión disminuye con el tiempo. Controlar las fechas de mantenimiento es fundamental para los coleccionistas.' },
    { type: 'title', text: 'Por qué importan los intervalos de servicio', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Automático (3-5 años)', definition: 'El barrilete, las ruedas inversoras y el cojinete del rotor experimentan un desgaste constante. El aceite viejo se vuelve gomoso.' },
        { term: 'Manual (3-5 años)', definition: 'Intervalo similar al automático. La tija y el sistema de remontuar soportan ciclos repetidos de carga.' },
        { term: 'Cuarzo (5-10 años)', definition: 'Menos piezas móviles pero la pila puede sulfatarse y las juntas necesitan reemplazo para mantener la hermeticidad.' },
        { term: 'Kinético (5 años)', definition: 'Combina carga automática con precisión de cuarzo. El acumulador o condensador tiene una vida útil limitada.' },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Señales de que tu reloj necesita revisión', icon: 'mdi:information', badge: 'ATENCIÓN', html: 'Si el reloj varía más de 15-20 segundos al día, la corona se siente arenosa al darle cuerda o notas condensación bajo el cristal, llévalo al servicio técnico de inmediato.' },
  ],
  faq: [
    {
      question: '¿Con qué frecuencia se debe revisar un reloj automático?',
      answer: 'La mayoría de fabricantes recomiendan revisiones cada 3 a 5 años. En la práctica, muchos funcionan bien de 5 a 7 años. Si notas desvíos de hora o menor reserva de marcha, no esperes más.',
    },
    {
      question: '¿Los relojes de cuarzo necesitan mantenimiento?',
      answer: 'Sí, aunque menos a menudo. Reemplaza la pila cada 2 o 3 años para evitar fugas. Se aconseja una revisión completa con cambio de juntas cada 5-10 años.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Añadir un reloj', text: 'Introduce el nombre, tipo de movimiento y última revisión. El rastreador calculará la fecha del próximo servicio.' },
    { name: 'Consultar el panel', text: 'Cada reloj muestra una barra de progreso y un color de estado: verde (al día), ámbar (próximo) o rojo (vencido).' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Con qué frecuencia se debe revisar un reloj automático?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoría de fabricantes recomiendan revisiones cada 3 a 5 años. En la práctica, muchos funcionan bien de 5 a 7 años.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Los relojes de cuarzo necesitan mantenimiento?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí, aunque menos a menudo. Reemplaza la pila cada 2 o 3 años para evitar fugas. Se aconseja una revisión completa con cambio de juntas cada 5-10 años.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Rastreador de Intervalos de Servicio de Relojes',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Rastreador de Intervalos de Servicio de Relojes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Añadir un reloj',
          'text': 'Introduce el nombre, tipo de movimiento y última revisión.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Consultar el panel',
          'text': 'Cada reloj muestra una barra de progreso y un color de estado.'
        }
      ]
    }
  ]
};
