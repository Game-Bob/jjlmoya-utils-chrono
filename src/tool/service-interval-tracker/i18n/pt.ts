import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Monitor de Manutenção de Relógios';
const description = 'Controle e gira os intervalos de manutenção da sua coleção de relógios. Saiba de relance quando cada peça deve ser revista.';
const faq = [
  {
    "question": "Com que frequência deve ser feita a revisão de um relógio automático?",
    "answer": "A maioria dos fabricantes recomenda uma revisão a cada 3-5 anos. Na prática, muitos relógios funcionam sem problemas durante 5-7 anos."
  },
  {
    "question": "Os relógios de quartzo precisam de manutenção periódica?",
    "answer": "Sim, a pilha deve ser substituída a cada 2-3 anos para evitar fugas. Recomenda-se uma revisão completa das juntas a cada 5-10 anos."
  },
  {
    "question": "O que acontece se nunca fizer a manutenção do relógio?",
    "answer": "Os lubrificantes secam, aumentando o atrito e o desgaste dos pivôs e rubis. Isso pode causar avarias dispendiosas."
  },
  {
    "question": "Posso forçar a corda de um relógio manual?",
    "answer": "Os relógios manuais modernos têm um batente firme quando a corda está completa. Não force a coroa se sentir resistência."
  },
  {
    "question": "O intervalo muda consoante o uso diário ou ocasional?",
    "answer": "Sim, um relógio usado diariamente sofre mais desgaste e precisa de revisão a cada 3 anos; o uso ocasional pode permitir 5 anos."
  }
];
const howTo = [
  {
    "name": "Adicionar relógio",
    "text": "Introduza o nome, o tipo de movimento e a data da última revisão."
  },
  {
    "name": "Consultar o painel",
    "text": "Cada relógio apresenta uma barra de progresso e um código de cores."
  },
  {
    "name": "Atualizar após a revisão",
    "text": "Quando o levar ao relojoeiro, atualize a data para reiniciar o ciclo."
  }
];

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
  seo: buildServiceSeo({ title, description, faq, howTo }),
  faq,
  bibliography,
  howTo,
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
