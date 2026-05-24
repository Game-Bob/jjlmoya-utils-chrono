import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'calculadora-precisao-relogio',
  title: 'Calculadora de Precisão de Marcha e Desvio de Relógio',
  description: 'Registe e calcule o desvio diário dos seus relógios mecânicos ou de quartzo para analisar a sua precisão e consistência.',
  ui: {
    title: 'Precisão do Relógio',
    selectWatch: 'Selecionar ou adicionar um relógio',
    watchPlaceholder: 'ex. Seiko SKX007',
    addWatch: 'Adicionar relógio',
    deleteWatch: 'Eliminar relógio',
    addLog: 'Registar nova medição',
    offsetLabel: 'Desvio (segundos)',
    offsetPlaceholder: '0',
    dateLabel: 'Hora da medição',
    saveLog: 'Guardar registo',
    avgRate: 'Desvio médio diário',
    consistency: 'Estado de precisão',
    totalLogs: 'Medições totais',
    historyTitle: 'Histórico de medições',
    noLogs: 'Ainda não existem medições para este relógio. Adicione pelo menos duas medições para calcular a precisão.',
    tableDate: 'Data e hora',
    tableOffset: 'Desvio',
    tableRate: 'Desvio diário',
    tableActions: 'Ações',
    deleteLog: 'Eliminar',
    coscExcellent: 'Cronómetro COSC (+4/-6 s/d)',
    excellent: 'Excelente (0 a +5 s/d)',
    good: 'Bom (+/- 10 s/d)',
    needsService: 'Necessita assistência (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'segundos',
    referenceTime: 'Hora de referência',
    watchTime: 'Hora do relógio',
    useCurrentTime: 'Usar hora atual',
    calculatedRate: 'Desvio calculado',
    driftPredictorTitle: 'Calculadora e Projeção de Deriva',
    driftPredictorDesc: 'Projete o desvio acumulado ao longo do tempo e compare com os padrões da indústria.',
    dailyRateInput: 'Desvio diário (segundos/dia)',
    dailyRatePlaceholder: 'ex. +4.5 ou -3',
    driftHeading: 'Projeções',
    period: 'Período',
    accumulatedDrift: 'Deriva projetada',
    day: '1 Dia',
    week: '1 Semana',
    month: '1 Mês',
    months3: '3 Meses',
    months6: '6 Meses',
    year: '1 Ano',
    years5: '5 Anos',
    watchStandardTitle: 'Certificação de Padrões',
    trackerHeading: 'Seguimento em Tempo Real',
    driftCalculatorTab: 'Projeção de Deriva',
    trackerTab: 'Registo de Precisão',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'Cronómetro COSC',
    stdMetas: 'METAS Master',
    stdStdMech: 'Mecânico Padrão',
    stdQuartz: 'Quartzo Padrão',
    stdHaq: 'Quartzo de Alta Precisão',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Padrão (+15 s/d)',
    presetQuartz: 'Quartzo (+0.5 s/d)',
    statusPass: 'Aprovado',
    statusFail: 'Reprovado',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/ano',
  },
  seo: [
    { type: 'title', text: 'Guia Completo de Precisão de Relógios e Regulação de Marcha', level: 2 },
    { type: 'paragraph', html: 'Os relógios mecânicos são obras-primas da microengenharia mas estão sujeitos a forças físicas e ambientais que afetam o seu desvio diário. Monitorizar regularmente a taxa de marcha média é essencial para avaliar a saúde do movimento e determinar quando necessita de uma manutenção profissional.' },
    { type: 'title', text: 'Por que os Relógios Mecânicos Desviam: Fatores Principais', level: 2 },
    { type: 'paragraph', html: 'Vários fatores influenciam o desvio diário. A gravidade afeta o balanço de forma distinta segundo a posição de repouso do relógio. As variações térmicas expandem ou contraem a espiral, alterando as oscilações. Além disso, a tensão da mola principal afeta a amplitude: um relógio com carga máxima é mais estável do que um próximo ao fim da reserva de marcha.' },
    { type: 'title', text: 'A Deriva Acumulada: Pequenos Desvios Tornam-se Horas', level: 2 },
    { type: 'paragraph', html: 'Um desvio de apenas +5 segundos por dia parece insignificante, mas é cumulativo. Numa semana equivale a 35 segundos; num mês são 2.5 minutos e num ano ultrapassará os 30 minutos de desfase. Esta deriva evidencia a importância de testar regularmente a precisão de marcha.' },
    { type: 'title', text: 'Como Medir a Precisão de Marcha Manualmente', level: 2 },
    { type: 'paragraph', html: 'Pode avaliar o desvio do seu relógio sem um cronocomparador profissional. Sincronize o relógio com uma fonte de tempo atómica (como o sinal UTC). Após 24 ou 48 horas de uso, verifique e anote a nova diferença. Divida esse desvio pelos dias decorridos para calcular a marcha diária média.' },
    { type: 'title', text: 'Utilizar a Deriva Posicional para a Autorregulação', level: 2 },
    { type: 'paragraph', html: 'Muitos calibres mecânicos podem ser parcialmente regulados escolhendo como os posiciona durante o repouso noturno. Por exemplo, deixar o relógio plano com o mostrador para cima pode fazê-lo ganhar segundos, ao passo que apoiá-lo sobre a coroa pode levá-lo a perdê-los. Anotando estas tendências, poderá regular o seu relógio sem o abrir.' },
  ],
  faq: [
    {
      question: 'Qual é o desvio diário normal de um relógio mecânico?',
      answer: 'Os movimentos mecânicos normais desviam geralmente entre +/- 10 e 20 segundos por dia. Os cronómetros certificados COSC são regulados entre -4 e +6 segundos diários, enquanto os modelos de quartzo de gama alta podem registar precisões superiores a +/- 0.5 segundos por dia.',
    },
    {
      question: 'Por que a precisão do relógio varia dependendo da posição?',
      answer: 'A gravidade exerce força sobre o balanço e a espiral de modo diferente conforme o mostrador está virado para cima, para baixo ou se a coroa descansa de lado. Esta variação posicional causa ligeiras diferenças na amplitude e na marcha do relógio.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Registar Estado Inicial',
      text: 'Sincronize o relógio com uma referência de tempo atómica e anote o desvio inicial em segundos.',
    },
    {
      name: 'Usar e Monitorizar',
      text: 'Use o relógio normalmente ou guarde-o numa posição fixa durante pelo menos 12 a 24 horas.',
    },
    {
      name: 'Registar Estado Final',
      text: 'Anote de novo o desvio em relação à hora de referência. O sistema calculará o desvio médio diário.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Precisão de Marcha e Desvio de Relógio',
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
          'name': 'Qual é o desvio diário normal de um relógio mecânico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Os movimentos mecânicos normais desviam geralmente entre +/- 10 e 20 segundos por dia. Os cronómetros certificados COSC são regulados entre -4 e +6 segundos diários, enquanto os modelos de quartzo de gama alta podem registar precisões superiores a +/- 0.5 segundos por dia.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Por que a precisão do relógio varia dependendo da posição?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A gravidade exerce força sobre o balanço e a espiral de modo diferente conforme o mostrador está virado para cima, para baixo ou se a coroa descansa de lado. Esta variação posicional causa ligeiras diferenças na amplitude e na marcha do relógio.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como Medir a Precisão de Marcha Manualmente',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Registar Estado Inicial',
          'text': 'Sincronize o relógio com uma referência de tempo atómica e anote o desvio inicial em segundos.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Usar e Monitorizar',
          'text': 'Use o relógio normalmente ou guarde-o numa posição fixa durante pelo menos 12 a 24 horas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Registar Estado Final',
          'text': 'Anote de novo o desvio em relação à hora de referência. O sistema calculará o desvio médio diário.'
        }
      ]
    }
  ],
};
