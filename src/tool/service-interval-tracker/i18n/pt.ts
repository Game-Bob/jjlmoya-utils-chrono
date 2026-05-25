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
    { type: 'title', text: 'Monitor de Revisão de Relógios: Evite desgaste prematuro', level: 2 },
  ],
  faq: [
    {
      question: 'Com que frequência devo fazer a manutenção de um relógio automático?',
      answer: 'A maioria das marcas sugere revisões a cada 3 ou 5 anos. Na prática, muitos relógios funcionam 5-7 anos sem que a precisão diminua bruscamente.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Adicionar relógio', text: 'Preencha o modelo do relógio, o tipo de movimento e a última data de manutenção.' }
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
