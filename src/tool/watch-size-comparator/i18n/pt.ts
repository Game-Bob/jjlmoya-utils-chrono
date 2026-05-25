import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'comparador-de-tamanho-de-relogio',
  title: 'Comparador de Tamanho de Relógio — Visualize o Ajuste no Pulso',
  description: 'Compare tamanhos de caixa de relógio visualmente. Informe diâmetro, distância entre asas e tamanho do pulso para ver como um relógio fica antes de comprar.',
  ui: {
    title: 'Comparador de Tamanho de Relógio',
    addWatch: 'Adicionar Relógio',
    watchName: 'Nome do Relógio',
    watchNamePlaceholder: 'Ex.: Rolex Submariner',
    caseDiameter: 'Diâmetro da Caixa',
    lugToLug: 'Distância entre Asas',
    thickness: 'Espessura',
    wristSize: 'Tamanho do Pulso',
    wristSizePlaceholder: 'Ex.: 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Remover',
    yourWatches: 'Seus Relógios',
    fitLegend: 'Legenda de Ajuste',
    excellentFit: 'Excelente',
    goodFit: 'Bom',
    borderlineFit: 'No Limite',
    largeFit: 'Grande Demais',
    wristCurve: 'pulso',
    nameRequired: 'Insira um nome para o relógio',
    watchTooLarge: 'Relógio ultrapassa os limites do pulso',
    l2lExceedsWrist: 'Distância entre asas excede a largura do pulso',
    excellentDesc: 'Proporcional — asas ficam bem dentro do seu pulso.',
    goodDesc: 'Bom ajuste — ultrapassa um pouco, mas ainda confortável.',
    borderlineDesc: 'No limite — asas se aproximam da borda do pulso.',
    largeDesc: 'Grande demais — asas provavelmente ultrapassam o pulso.',
    fitsWell: 'Ajusta bem',
    slightlyLarge: 'Um pouco grande',
    tooLarge: 'Grande demais',
    source: 'Guia de tamanhos',
    estimateNote: 'Informe as dimensões e adicione um relógio para ver como ele se ajusta ao seu pulso.',
  },
  seo: [
    { type: 'title', text: 'Comparador de Tamanho de Relógio — Visualize o Ajuste no Pulso', level: 2 },
    { type: 'paragraph', html: 'Já se perguntou se um <strong>relógio de 42mm</strong> vai caber no seu <strong>pulso de 17cm</strong>? Ou se aquela distância entre asas de 48mm vai ultrapassar? O Comparador de Tamanho de Relógio te dá a resposta visual. Informe o diâmetro da caixa, distância entre asas, espessura e tamanho do pulso — a ferramenta desenha o relógio em escala e colore o ajuste de <span style="color:#22c55e">verde (excelente)</span> a <span style="color:#ef4444">vermelho (grande demais)</span>. Funciona em unidades <strong>métricas e imperiais</strong>.' },
    { type: 'title', text: 'Glossário de Tamanhos de Relógio', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Diâmetro da Caixa', definition: 'A largura da caixa do relógio medida no mostrador, excluindo a coroa. Variação típica: 34-46mm. É a medida mais citada, mas não é o único fator de ajuste.' },
        { term: 'Distância entre Asas (L2L)', definition: 'A distância entre as asas superior e inferior onde a pulseira é fixada. É o que determina se o relógio ultrapassa o pulso. Um relógio de 40mm com L2L de 50mm veste maior que um de 42mm com L2L de 46mm.' },
        { term: 'Largura Plana do Pulso', definition: 'A largura da superfície superior do pulso, em oposição à circunferência. Aproximadamente circunferência do pulso / π menos 2-4cm. É a dimensão na qual o relógio realmente se apoia.' },
        { term: 'Proporção Caixa-Pulso', definition: 'Diâmetro da caixa dividido pela largura do pulso. Uma proporção de 0,6-0,75 (60-75%) é considerada o ajuste proporcional clássico.' },
      ]
    },

    { type: 'title', text: 'Qual Tamanho de Relógio Serve no Meu Pulso?', level: 3 },
    {
      type: 'table', headers: ['Circunferência do Pulso', 'Largura Plana (aprox.)', 'Diâmetro Ideal da Caixa', 'L2L Máximo', 'Melhor Para'], rows: [
        ['14-15 cm (5,5-5,9 pol)', '38-42 mm', '30-34 mm', '38-42 mm', 'Relógios vintage e sociais'],
        ['15-16 cm (5,9-6,3 pol)', '40-44 mm', '34-36 mm', '40-44 mm', 'Relógios clássicos pequenos'],
        ['16-17 cm (6,3-6,7 pol)', '42-46 mm', '36-39 mm', '42-46 mm', 'Tamanho versátil do dia a dia'],
        ['17-18 cm (6,7-7,1 pol)', '44-48 mm', '38-42 mm', '44-48 mm', 'Ponto ideal para a maioria das marcas'],
        ['18-19 cm (7,1-7,5 pol)', '46-50 mm', '40-44 mm', '46-50 mm', 'Relógios de mergulho e GMT'],
        ['19-20 cm (7,5-7,9 pol)', '48-52 mm', '42-46 mm', '48-52 mm', 'Relógios ferramenta e de piloto'],
        ['20-21 cm (7,9-8,3 pol)', '50-54 mm', '44-48 mm', '50-54 mm', 'Relógios oversized e flieger'],
      ]
    },

    { type: 'title', text: 'Como Medir o Pulso para um Relógio', level: 3 },
    {
      type: 'list', items: [
        'Enrole uma fita métrica flexível ao redor do pulso, logo atrás do osso (processo estiloide ulnar). Deve ficar justa, mas não apertada.',
        'Se não tiver uma fita, use um barbante ou um cabo, marque a sobreposição e meça com uma régua.',
        'Anote a medida em centímetros ou polegadas. A média masculina é 17-19cm (6,7-7,5 pol); a feminina é 14-16cm (5,5-6,3 pol).',
        'Para estimar a largura plana do pulso, subtraia 2-4cm da circunferência ou use o recurso de estimativa automática da ferramenta.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'A Distância entre Asas é o Verdadeiro Limitador', icon: 'mdi:ruler', html: 'A maioria das pessoas foca no <strong>diâmetro da caixa</strong>, mas a <strong>distância entre asas</strong> é o que realmente determina se um relógio cabe no pulso. Um relógio com L2L de 48mm em um pulso de 55mm de largura plana (17cm de circunferência) ocupa 87% da largura do pulso. Acima de 65% as asas começam a se aproximar da borda. <strong>Sempre verifique o L2L primeiro.</strong>' },

    { type: 'tip', title: 'CM ou Polegadas? Use o Que Você Conhece', html: 'A ferramenta agora suporta unidades métricas e imperiais. Meça seu pulso no sistema que você usa no dia a dia. As dimensões da caixa do relógio são <strong>sempre em milímetros</strong> (mesmo nos EUA), então diâmetros e L2L ficam em mm — apenas a medida do pulso alterna. Isso reflete como a indústria relojoeira funciona.' },

    {
      type: 'summary', title: 'Checklist Rápido Antes de Comprar', items: [
        'Meça a circunferência do seu pulso e insira na ferramenta.',
        'Consulte a distância entre asas do relógio — não apenas o diâmetro da caixa.',
        'O relógio deve ocupar 60-75% da largura plana do pulso para um ajuste clássico.',
        'Se as asas ultrapassarem as bordas do pulso, o relógio parecerá grande demais, independentemente do diâmetro.',
        'Use a ferramenta para comparar vários relógios lado a lado antes de decidir a compra.',
      ]
    },
  ],
  faq: [
    {
      question: 'Como medir o pulso para um relógio?',
      answer: 'Use uma fita métrica flexível ao redor do osso do pulso. Ou enrole um barbante, marque a sobreposição e meça com uma régua. A média é 17-19cm para homens e 14-16cm para mulheres.',
    },
    {
      question: 'O que é distância entre asas e por que é importante?',
      answer: 'Distância entre asas é a medida entre as asas superior e inferior. Ela determina se o relógio ultrapassa o pulso. Um relógio com 48mm de L2L num pulso de 17cm (≈55mm de largura plana) fica proporcional a 87%. Acima de 65% começa a ultrapassar.',
    },
    {
      question: 'Qual tamanho de relógio serve num pulso de 17cm?',
      answer: 'Um pulso de 17cm (≈55mm de largura plana) aceita confortavelmente relógios com 36-42mm de diâmetro e 44-50mm de L2L. O ponto ideal é 38-40mm com 46-48mm de L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Informe o tamanho do pulso',
      text: 'Digite a circunferência do pulso em centímetros. A ferramenta atualiza a silhueta visual do pulso.',
    },
    {
      name: 'Informe as dimensões do relógio',
      text: 'Insira o diâmetro da caixa, distância entre asas e espessura em milímetros.',
    },
    {
      name: 'Adicione e compare',
      text: 'Clique em "Adicionar Relógio" para salvá-lo. Adicione vários relógios e alterne entre eles para comparar o ajuste.',
    },
    {
      name: 'Leia a cor',
      text: 'Verde = excelente, amarelo = no limite, vermelho = grande demais para seu pulso.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como medir o pulso para um relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use uma fita métrica flexível ao redor do osso do pulso. A média é 17-19cm para homens e 14-16cm para mulheres.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que é distância entre asas e por que é importante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Distância entre asas é a medida entre as asas superior e inferior. Ela determina se o relógio ultrapassa o pulso.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual tamanho de relógio serve num pulso de 17cm?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um pulso de 17cm aceita 36-42mm de diâmetro com 44-50mm de L2L. O ponto ideal é 38-40mm com 46-48mm de L2L.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Comparador de Tamanho de Relógio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como comparar tamanhos de relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Informe o tamanho do pulso',
          'text': 'Digite a circunferência do pulso em centímetros.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Informe as dimensões do relógio',
          'text': 'Insira diâmetro da caixa, distância entre asas e espessura.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Adicione e compare',
          'text': 'Clique em Adicionar Relógio para salvá-lo. Adicione vários relógios para comparar.',
        },
      ],
    },
  ],
};
