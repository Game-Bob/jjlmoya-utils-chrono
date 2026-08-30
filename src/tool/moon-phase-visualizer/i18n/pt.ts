import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'visualizador-de-fases-da-lua',
  title: 'Visualizador de Fases da Lua: Calendário Lunar e Ajuste de Relógio',
  description: 'Visualize a fase lunar atual, iluminação, idade da lua e as próximas luas cheia e nova. Perfeito para acertar o mostrador de fases da lua do seu relógio.',
  ui: {
    title: 'Visualizador de Fases da Lua',
    selectDate: 'Selecionar Data',
    today: 'Hoje',
    moonPhase: 'Fase da Lua',
    illumination: 'Iluminação',
    moonAge: 'Idade da Lua',
    daysUntilFull: 'Dias até a Lua Cheia',
    daysUntilNew: 'Dias até a Lua Nova',
    newMoon: 'Lua Nova',
    waxingCrescent: 'Lua Crescente',
    firstQuarter: 'Quarto Crescente',
    waxingGibbous: 'Gibosa Crescente',
    fullMoon: 'Lua Cheia',
    waningGibbous: 'Gibosa Minguante',
    lastQuarter: 'Quarto Minguante',
    waningCrescent: 'Lua Minguante',
    nextFullMoon: 'Próxima Lua Cheia',
    nextNewMoon: 'Próxima Lua Nova',
    tipTitle: 'Dica',
    tipContent: 'Para acertar um relógio com fases da lua, primeiro descubra a fase lunar de hoje usando esta ferramenta e depois avance a coroa até que o disco lunar corresponda. A maioria dos mecanismos mecânicos de fases da lua tem precisão de cerca de um dia a cada 2 anos.',
    days: 'Progresso do Ciclo',
    day: 'dia',
  },
  seo: [
    { type: 'title', text: 'Visualizador de Fases da Lua - Ferramenta Lunar e Guia de Ajuste de Relógio', level: 2 },
    { type: 'paragraph', html: 'O Visualizador de Fases da Lua mostra a <strong>fase lunar atual</strong> com uma representação realista da lua. Veja a <strong>porcentagem de iluminação, idade da lua, dias até a próxima lua cheia e a próxima lua nova</strong>. Projetado para entusiastas de relógios que precisam acertar o mostrador de fases da lua com precisão - também funciona como calendário lunar para qualquer data passada ou futura.' },
    { type: 'title', text: 'Glossário de Fases da Lua', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Lua Nova', definition: 'A lua está entre a Terra e o sol. O lado iluminado está voltado para longe de nós. 0% de iluminação. O início do ciclo lunar.' },
        { term: 'Lua Crescente', definition: '1-49% de iluminação. Um fino crescente aparece no lado direito (Hemisfério Norte). A lua está caminhando para o quarto crescente.' },
        { term: 'Quarto Crescente', definition: '50% de iluminação. Metade da superfície visível está iluminada. A lua completou um quarto do seu ciclo.' },
        { term: 'Gibosa Crescente', definition: '51-99% de iluminação. Mais da metade está iluminada. A lua está se aproximando da lua cheia.' },
        { term: 'Lua Cheia', definition: '100% de iluminação. Toda a superfície visível está iluminada. O auge do ciclo lunar.' },
        { term: 'Gibosa Minguante', definition: '99-51% de iluminação. A área iluminada começa a diminuir pelo lado direito.' },
        { term: 'Quarto Minguante', definition: '50% de iluminação. A metade esquerda está iluminada. Três quartos do ciclo completados.' },
        { term: 'Lua Minguante', definition: '49-1% de iluminação. Um fino crescente no lado esquerdo antes do ciclo reiniciar na lua nova.' },
      ]
    },
    { type: 'title', text: 'Como Acertar um Relógio com Fases da Lua', level: 3 },
    {
      type: 'list', items: [
        'Use esta ferramenta para descobrir a fase lunar exata de hoje. Anote o nome da fase e a aparência visual.',
        'No seu relógio, puxe a coroa até a posição de ajuste das fases da lua (geralmente posição 2 ou 3).',
        'Avance a coroa até que o disco lunar mostre a mesma fase da ferramenta. O indicador de lua cheia fica normalmente no centro-topo do disco.',
        'Evite acertar as fases da lua entre 21h e 3h, quando o mecanismo de troca de data está engatado e pode ser danificado.',
        'A maioria dos relógios mecânicos com fases da lua usa uma engrenagem de 59 dentes que aproxima dois ciclos lunares (59 dias). Isso significa que eles acumulam cerca de um dia de erro a cada 2 anos.',
        'Para alta precisão, alguns relógios (Patek Philippe, A. Lange & Söhne) usam engrenagens precisas dentro de um dia a cada 100+ anos.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Nunca Acerte Durante a Troca de Data', icon: 'mdi:alert', html: 'Não acerte a fase da lua (nem a data) entre aproximadamente <strong>21h e 3h</strong>. Nessa janela, o mecanismo de troca de data do relógio está fisicamente engatado com a roda de data. Forçar a coroa pode danificar os dentes da engrenagem. Se precisar acertar nesse período, primeiro avance os ponteiros para depois das 3h e então ajuste a fase da lua.' },
    { type: 'title', text: 'Fases da Lua Mecânica vs Alta Precisão', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Engrenagem', 'Acúmulo de Erro', 'Deriva de 1 Dia Após', 'Relógios Exemplo'], rows: [
        ['Padrão / Entrada', '59 dentes', '~1 dia a cada 2 anos', '~2,5 anos', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermediário', '135 dentes', '~1 dia a cada 10 anos', '~10 anos', 'Omega, Tudor, IWC, Breitling'],
        ['Alta Precisão', 'Trem de engrenagens', '~1 dia a cada 100+ anos', '100+ anos', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Lendo o Disco Lunar', html: 'Na maioria dos relógios com fases da lua, o disco mostra <strong>duas luas</strong> opostas uma à outra. Cada lua cheia se alinha com a abertura central no topo. Após um ciclo completo (29,5 dias), a segunda lua toma seu lugar. É por isso que uma engrenagem de 59 dentes funciona: ela completa uma rotação inteira em 59 dias - exatamente dois ciclos lunares.' },
    {
      type: 'summary', title: 'Referência Rápida', items: [
        'O ciclo lunar (sinódico) tem exatamente 29,53058867 dias. A ferramenta usa esse valor para máxima precisão.',
        'Oito fases se repetem num ciclo eterno: nova → crescente → quarto crescente → gibosa crescente → cheia → gibosa minguante → quarto minguante → minguante.',
        'Para acertar um relógio com fases da lua: descubra a fase de hoje aqui e depois reproduza no disco do seu relógio.',
        'Nunca force a coroa entre 21h e 3h. Avance os ponteiros para depois das 3h primeiro.',
        'Fases da lua padrão com 59 dentes acumulam cerca de um dia de erro a cada 2,5 anos. A correção exige avançar o disco em um clique.',
      ]
    },
  ],
  faq: [
    {
      question: 'Como acertar as fases da lua no meu relógio?',
      answer: 'Descubra a fase lunar de hoje usando esta ferramenta. Avance a coroa (geralmente posição 2) até que o disco lunar mostre a fase correspondente. Evite acertar entre 21h e 3h, quando o mecanismo de data está engatado.',
    },
    {
      question: 'Qual a precisão dos relógios mecânicos com fases da lua?',
      answer: 'A maioria usa uma engrenagem de 59 dentes, precisa a cerca de um dia a cada 2 anos. Relógios de alto padrão como Patek Philippe e A. Lange & Söhne alcançam precisão de um dia a cada 100+ anos.',
    },
    {
      question: 'Qual a diferença entre mês sinódico e sideral?',
      answer: 'O mês sideral (27,3 dias) é a órbita da lua em relação às estrelas. O mês sinódico (29,53 dias) é o tempo entre fases idênticas e é o que os relógios com fases da lua rastreiam.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione uma data',
      text: 'Use o seletor de data para escolher qualquer data, passada ou futura, e veja a fase da lua.',
    },
    {
      name: 'Leia os dados da fase',
      text: 'Os cartões mostram o nome da fase, porcentagem de iluminação, idade da lua e progresso do ciclo.',
    },
    {
      name: 'Descubra os próximos eventos',
      text: 'As datas da próxima lua cheia e lua nova são exibidas automaticamente.',
    },
    {
      name: 'Acerte seu relógio',
      text: 'Use a fase exibida para ajustar o mostrador de fases da lua do seu relógio com precisão.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como acertar as fases da lua no meu relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Descubra a fase lunar de hoje usando esta ferramenta. Avance a coroa até que o disco lunar mostre a fase correspondente. Evite acertar entre 21h e 3h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual a precisão dos relógios mecânicos com fases da lua?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria usa uma engrenagem de 59 dentes, precisa a cerca de um dia a cada 2 anos. Relógios de alto padrão alcançam precisão de um dia a cada 100+ anos.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual a diferença entre mês sinódico e sideral?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O mês sideral (27,3 dias) é a órbita da lua em relação às estrelas. O mês sinódico (29,53 dias) é o tempo entre fases idênticas e é o que os relógios com fases da lua rastreiam.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Visualizador de Fases da Lua',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como visualizar fases da lua',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecione uma data',
          'text': 'Use o seletor de data para escolher qualquer data e veja a fase da lua.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia os dados da fase',
          'text': 'Os cartões mostram o nome da fase, iluminação, idade da lua e progresso do ciclo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Acerte seu relógio',
          'text': 'Use a fase exibida para ajustar o mostrador de fases da lua do seu relógio.',
        },
      ],
    },
  ],
};
