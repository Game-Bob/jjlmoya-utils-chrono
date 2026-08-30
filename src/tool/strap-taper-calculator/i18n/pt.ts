import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'calculadora-afunilamento-pulseira',
  title: 'Calculadora de afinamento e propores de pulseira de relgio',
  description: 'Calcule o afinamento ideal da pulseira para o seu relgio com base no dimetro da caixa e na largura entre asas. Encontre a largura de fivela perfeita para um visual equilibrado.',
  ui: {
    title: 'Calculadora de afinamento de pulseira',
    caseLabel: 'Dimenses do relgio',
    caseInput: 'Dimetro da caixa',
    lugLabel: 'Largura entre asas',
    lugInput: 'Largura entre asas',
    taperLabel: 'Estilo de afinamento',
    straight: 'Reto',
    classic: 'Clssico',
    aggressive: 'Acentuado',
    customTaper: 'Personalizado',
    buckleWidth: 'Largura da fivela',
    resultsTitle: 'Propores',
    lugWidth: 'Largura entre asas',
    buckleWidthResult: 'Largura da fivela',
    taperAmount: 'Afinamento',
    taperRatio: 'Proporo',
    proportionScore: 'Propores',
    proportionExcellent: 'Excelente',
    proportionGood: 'Boa',
    proportionFair: 'Razoável',
    proportionUnbalanced: 'Desequilibrada',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Nota',
    noteContent: 'Um afinamento clssico de 4 mm (ex., de 20 para 16 mm) adequa-se a relgios sociais. Relgios de mergulho e ferramenta muitas vezes ficam melhores com afinamento reto ou de 2 mm para uma aparência robusta.',
    step1: 'Insira o dimetro da caixa e a largura entre asas.',
    step2: 'Escolha um estilo de afinamento ou defina uma largura de fivela personalizada.',
    step3: 'Confira as propores e a representao visual.',
  },
  seo: [
    { type: 'title', text: 'Calculadora de afinamento de pulseira - Propores, largura da fivela e guia visual', level: 2 },
    { type: 'paragraph', html: 'Uma pulseira bem proporcionada pode fazer ou destruir um relgio. Afinamento excessivo num mergulhador faz parecer frgil. Sem afinamento num relgio social faz parecer pesado. Esta calculadora ajuda-o a encontrar a <strong>proporo de afinamento</strong> ideal com base no dimetro da caixa e na largura entre asas.' },
    { type: 'title', text: 'O que o afinamento de pulseira?', level: 3 },
    { type: 'paragraph', html: 'O afinamento de pulseira a reduo da largura da extremidade das asas at a extremidade da fivela. Um relgio social clssico pode afinar de 20 mm nas asas para 16 mm na fivela - um afinamento de 4 mm. Um relgio de mergulho pode manter-se reto nos 20 mm para uma aparência mais robusta.' },
    { type: 'title', text: 'A proporo urea para propores de pulseira', level: 3 },
    { type: 'paragraph', html: 'Os entusiastas de relgios geralmente concordam que uma largura entre asas entre 45% e 55% do dimetro da caixa a mais harmoniosa. Para o afinamento, uma largura de fivela entre 75% e 85% da largura entre asas cria uma silhueta equilibrada e elegante. Propores fora deste intervalo podem fazer o relgio parecer descompensado ou demasiado frgil.' },
    { type: 'title', text: 'Afinamento por estilo de relgio', level: 3 },
    { type: 'paragraph', html: 'Relgios sociais: afinamento de 4 mm (20 para 16 mm). Relgios desportivos: afinamento de 2 a 3 mm. Relgios de mergulho: afinamento de 0 a 2 mm. Relgios militares ou de campo: afinamento reto para um visual robusto. Relgios de piloto: afinamento mnimo para corresponder esttica de instrumento.' },
  ],
  faq: [
    {
      question: 'Qual o afinamento ideal para um relgio social?',
      answer: 'Um afinamento de 4 mm a escolha clssica. Para uma largura entre asas de 20 mm, isso significa uma fivela de 16 mm. Isto cria uma silhueta elegante que complementa o visual refinado de um relgio social.',
    },
    {
      question: 'Um relgio de mergulho deve ter uma pulseira afinada?',
      answer: 'A maioria dos relgios de mergulho fica melhor com afinamento mnimo ou nenhum. Uma pulseira reta de 20 mm em todo o comprimento d uma sensao robusta de ferramenta que combina com a natureza utilitria dos mergulhadores.',
    },
    {
      question: 'O que acontece se o afinamento for demasiado acentuado?',
      answer: 'Um afinamento acentuado (6 mm ou mais) pode fazer com que a caixa do relgio pareaa desproporcionalmente grande e descompensada. A pulseira pode tambm parecer frgil junto fivela.',
    },
    {
      question: 'Como medir a largura entre asas?',
      answer: 'Mea a largura interna entre os furos das barras de mola na caixa do relgio. Essa a largura de pulseira de que necessita. Os tamanhos comuns so 18 mm, 20 mm e 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Insira as dimenses da caixa e das asas',
      text: 'Introduza o dimetro da caixa e a largura entre asas em milmetros.',
    },
    {
      name: 'Escolha um estilo de afinamento',
      text: 'Selecione Reto, Clssico, Acentuado ou Personalizado. O visual atualiza-se instantaneamente.',
    },
    {
      name: 'Revise as propores',
      text: 'Verifique a proporo e a pontuao de propores para ver se a sua escolha de pulseira est equilibrada.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual o afinamento ideal para um relgio social?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um afinamento de 4 mm a escolha clssica. Para uma largura entre asas de 20 mm, isso significa uma fivela de 16 mm, criando uma silhueta elegante.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Um relgio de mergulho deve ter uma pulseira afinada?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria dos relgios de mergulho fica melhor com afinamento mnimo ou nenhum. Uma pulseira reta de 20 mm d uma sensao robusta.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que acontece se o afinamento for demasiado acentuado?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um afinamento acentuado pode fazer a caixa parecer desproporcional e a pulseira pode parecer frgil junto fivela.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Como medir a largura entre asas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mea a largura interna entre os furos das barras de mola. Os tamanhos comuns so 18 mm, 20 mm e 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de afinamento de pulseira de relgio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como calcular o afinamento da pulseira de um relgio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Insira as dimenses da caixa e das asas',
          'text': 'Introduza o dimetro da caixa e a largura entre asas em milmetros.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Escolha um estilo de afinamento',
          'text': 'Selecione Reto, Clssico, Acentuado ou Personalizado.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Revise as propores',
          'text': 'Verifique a proporo e a pontuao de propores.',
        },
      ],
    },
  ],
};
