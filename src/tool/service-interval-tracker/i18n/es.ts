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
  {
    "type": "title",
    "text": "Rastreador de intervalos de mantenimiento para relojes",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un reloj mecánico requiere un <strong>mantenimiento periódico</strong> para preservar sus finos componentes y evitar averías."
  },
  {
    "type": "title",
    "text": "Intervalos recomendados según el tipo de movimiento",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Automático (3-5 años)",
        "definition": "El rotor y el tren de carga automática sufren desgaste constante."
      },
      {
        "term": "Cuerda manual (4-5 años)",
        "definition": "Carece de rotor pero las ruedas de corona se desgastan con el remontaje diario."
      },
      {
        "term": "Cuarzo (5-10 años)",
        "definition": "Mínimo desgaste mecánico pero exige cambio de batería y juntas."
      },
      {
        "term": "Cinético / Solar (5-8 años)",
        "definition": "El acumulador tiene una vida útil limitada."
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Señales de que tu reloj necesita revisión",
    "icon": "mdi:information",
    "badge": "AVISO",
    "html": "Si tu reloj adelanta o atrasa más de 15-20 segundos al día, o notas humedad en la esfera, llévalo al servicio técnico."
  },
  {
    "type": "title",
    "text": "Rastrea tu colección",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Añade cada reloj de tu colección con su tipo de movimiento y fecha de última revisión. El rastreador calcula la próxima fecha."
  },
  {
    "type": "title",
    "text": "Mantenimiento de relojes de cuarzo y mecánicos",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Los relojes de cuarzo necesitan cambio de batería y revisión de juntas, mientras que los mecánicos requieren limpieza, lubricación y ajuste. Guarda cada servicio con su fecha y síntomas para detectar cambios antes de que se conviertan en una avería."
  },
  {
    "type": "paragraph",
    "html": "Consulta el panel después de cada revisión y actualiza el registro. La fecha calculada es una orientación: el uso, la precisión y la recomendación del fabricante deben guiar la decisión final."
  }
],
  faq: [
  {
    "question": "¿Con qué frecuencia se debe revisar un reloj automático?",
    "answer": "La mayoría de los fabricantes recomiendan una revisión cada 3 a 5 años. En la práctica muchos funcionan de 5 a 7 años sin problemas."
  },
  {
    "question": "¿Los relojes de cuarzo necesitan mantenimiento periódico?",
    "answer": "Sí, la batería debe cambiarse cada 2-3 años para evitar fugas de ácido. Una revisión completa de juntas se recomienda cada 5-10 años."
  },
  {
    "question": "¿Qué ocurre si nunca le hago mantenimiento a mi reloj?",
    "answer": "Los lubricantes se secan, aumentando la fricción y el desgaste de pivotes y rubíes. Esto causa averías costosas."
  },
  {
    "question": "¿Puedo forzar la cuerda de un reloj manual?",
    "answer": "Los relojes manuales modernos tienen un tope firme al llegar al tope de cuerda. No fuerces la corona cuando sientas resistencia."
  },
  {
    "question": "¿Cambia el intervalo según el uso diario o puntual?",
    "answer": "Sí, un reloj de uso diario sufre más desgaste y requiere revisión cada 3 años, mientras que uno de uso ocasional aguantará 5 años."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Añadir reloj",
    "text": "Introduce el nombre, tipo de movimiento y fecha del último servicio."
  },
  {
    "name": "Consultar el panel",
    "text": "Cada reloj muestra una barra de progreso y código de colores."
  },
  {
    "name": "Actualizar tras el servicio",
    "text": "Cuando lo lleves al relojero, actualiza la fecha para reiniciar el ciclo."
  }
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
