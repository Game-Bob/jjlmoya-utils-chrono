import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'rastreador-intervalo-servico',
  title: 'Monitor de Manutenção de Relógios',
  description: 'Controle e gira os intervalos de manutenção da sua coleção de relógios. Saiba de relance quando cada peça deve ser revista.',
  ui: {
    title: 'Controlo de Manutenção',
    addWatch: 'Adicionar relógio',
    editWatch: 'Editar relógio',
    cancel: 'Cancelar',
    save: 'Guardar',
    deleteWatch: 'Remover',
    confirmDelete: 'Remover este relógio da sua coleção?',
    emptyTitle: 'A sua coleção está vazia',
    emptyDesc: 'Acompanhe as revisões dos seus relógios e evite danos dispendiosos nos movimentos.',
    emptyAction: 'Adicionar primeiro relógio',
    healthy: 'em dia',
    due: 'próximo',
    overdue: 'em atraso',
    nameLabel: 'Nome do relógio',
    namePlaceholder: 'ex. Rolex Submariner',
    movementLabel: 'Tipo de movimento',
    movementAuto: 'Automático',
    movementManual: 'Manual',
    movementQuartz: 'Quartzo',
    movementKinetic: 'Cinético',
    dateLabel: 'Data da última revisão',
    neverServiced: 'Novo ou nunca revisto',
    lastServiceLabel: 'Última revisão',
    nextServiceLabel: 'Próxima revisão',
    serviced: 'Revisto em',
    newWatch: 'Novo',
    years: 'anos',
    collectionHealth: 'Saúde da coleção',
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
          'name': 'Com que frequência devo fazer a manutenção de um relógio automático?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria das marcas sugere revisões a cada 3 ou 5 anos. Na prática, muitos relógios funcionam 5-7 anos.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Monitor de Manutenção de Relógios',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Monitor de Manutenção de Relógios',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Adicionar relógio',
          'text': 'Preencha o modelo do relógio, o tipo de movimento e a última data de manutenção.'
        }
      ]
    }
  ]
};
