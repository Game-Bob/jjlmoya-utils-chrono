import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'calculadora-taquimetrica-ptbr',
  title: 'Calculadora Taquimetrica: Velocidade a partir do tempo decorrido',
  description: 'Calcule a velocidade a partir do tempo decorrido usando a fórmula do taquímetro. Funciona com qualquer cronógrafo que tenha uma escala taquimétrica no bisel.',
  ui: {
    title: 'Calculadora Taquimetrica',
    timeLabel: 'Tempo Decorrido (segundos)',
    timeHelp: 'Tempo medido em 1 km ou 1 milha',
    speedResult: 'Velocidade',
    bezelReading: 'Leitura do Bisel',
    presetLabel: 'Cenario Predefinido',
    selectPreset: 'Selecione um cenario',
    customPreset: 'Personalizado',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Inicie o cronografo quando o objeto passar pelo ponto de partida.',
    exampleStep2: 'Pare-o apos 1 km. A escala taquimetrica mostra a velocidade.',
    tipTitle: 'Dica',
    tipContent: 'Aos 36 segundos o bisel marca 100. Tempos mais rapidos (menor duracao) indicam velocidades mais altas na escala taquimetrica.',
  },
  seo: [
    { type: 'title', text: 'Calculadora Taquimetrica: Converta tempo decorrido em velocidade', level: 2 },
    { type: 'paragraph', html: 'Um taquimetro e uma escala no bisel ou mostrador de um relogio que converte tempo decorrido em velocidade. E tipicamente usado com um cronografo: inicie o temporizador quando o objeto passar por um ponto de referencia, pare-o apos 1 km (ou 1 milha) e leia a velocidade na escala. Esta calculadora faz a matematica para voce.' },
    { type: 'title', text: 'Como funciona um Taquimetro', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formula', definition: 'Velocidade = 3.600 ÷ tempo decorrido em segundos. A constante 3.600 representa os segundos por hora.' },
        { term: 'A Escala', definition: 'Biseis taquimetricos sao marcados de 60 (as 3 horas) ate 400 ou 500 (perto das 12 horas). Velocidades mais rapidas correspondem a tempos decorridos mais curtos.' },
        { term: 'Distancia Base', definition: 'Taquimetros padrao sao calibrados para 1 km ou 1 milha. Para outras distancias, divida a leitura conforme necessario.' },
      ]
    },
    { type: 'title', text: 'Medicoes Taquimetricas Comuns', level: 3 },
    {
      type: 'table', headers: ['Tempo Decorrido', 'Velocidade', 'Cenario'], rows: [
        ['10 s', '360 km/h', 'Trem bala / carro de corrida'],
        ['12 s', '300 km/h', 'Decolagem de jato particular'],
        ['20 s', '180 km/h', 'Carro esportivo na rodovia'],
        ['30 s', '120 km/h', 'Carro em autoestrada'],
        ['36 s', '100 km/h', 'Carro na estrada (referencia padrao)'],
        ['45 s', '80 km/h', 'Carro em via urbana'],
        ['60 s', '60 km/h', 'Direcao na cidade'],
        ['90 s', '40 km/h', 'Ciclismo'],
        ['120 s', '30 km/h', 'Corrida leve'],
        ['240 s', '15 km/h', 'Corrida'],
        ['480 s', '7.5 km/h', 'Caminhada'],
      ]
    },
    { type: 'title', text: 'Alem da Escala Padrao', level: 3 },
    { type: 'paragraph', html: 'Se o seu bisel taquimetrico so vai ate 400 mas seu tempo decorrido e inferior a 9 segundos, voce ainda pode usa-lo. Basta usar uma distancia base maior. Por exemplo, se voce percorrer 2 km em 18 segundos, divida a leitura do bisel por 2. Por outro lado, para velocidades lentas (acima de 60 segundos), use uma distancia base mais curta (ex., 0.5 km) e multiplique por 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Compatibilidade do Taquimetro', icon: 'mdi:information', badge: 'NOTA', html: 'Nem todos os cronografos possuem um bisel taquimetrico. Alguns relogios colocam a escala taquimetrica no rehaut do mostrador ou no anel externo. Relogios digitais podem incluir uma funcao taquimetrica no modo cronografo. A formula sempre funciona independentemente da escala fisica.' },
  ],
  faq: [
    {
      question: 'Como usar um bisel taquimetrico no meu relogio?',
      answer: 'Inicie o cronografo em um ponto de referencia (ex., um marco de estrada). Pare-o apos exatamente 1 km (ou 1 milha). O ponteiro dos segundos aponta para a velocidade na escala do bisel. Por exemplo, se levou 36 segundos para percorrer 1 km, o ponteiro aponta para 100, significando 100 km/h.',
    },
    {
      question: 'E se meu tempo decorrido for mais rapido do que o bisel pode ler?',
      answer: 'Alguns taquimetros so vao ate 400 ou 500. Se voce percorrer 1 km em menos de 9 segundos, use uma distancia base maior. Percorra 2 km e divida a leitura do bisel por 2, ou percorra 3 km e divida por 3.',
    },
    {
      question: 'E se meu tempo decorrido for mais lento do que o bisel pode ler?',
      answer: 'Use uma distancia base mais curta. Por exemplo, se levar 90 segundos para percorrer 1 km, percorra 0.5 km em vez disso. Leia o bisel e multiplique por 2. A escala taquimetrica padrao cobre tempos de cerca de 7 a 60 segundos.',
    },
    {
      question: 'Posso usar um taquimetro para outras coisas alem da velocidade?',
      answer: 'Sim. O taquimetro mede qualquer taxa por hora. Por exemplo, mede quanto tempo leva para completar uma tarefa e a escala mostra quantas voce pode fazer por hora. Na fabricacao, uma tarefa de 30 segundos significa 120 unidades por hora.',
    },
    {
      question: 'Todos os taquimetros usam a mesma escala?',
      answer: 'A maioria usa a escala logaritmica padrao baseada na formula 3.600 ÷ segundos. No entanto, alguns relogios antigos ou marcas podem ter variacoes. A escala fisica tambem pode ser limitada pela trilha dos minutos e pelas marcacoes do bisel.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione um cenario ou insira um tempo personalizado',
      text: 'Escolha entre opcoes predefinidas como Carro, Ciclismo ou Corrida, ou selecione Personalizado para inserir qualquer tempo decorrido em segundos.',
    },
    {
      name: 'Leia o resultado da velocidade',
      text: 'A calculadora mostra a velocidade em km/h e a leitura equivalente no bisel taquimetrico.',
    },
    {
      name: 'Aplique ao seu cronografo',
      text: 'Use o tempo decorrido para encontrar a velocidade correspondente no bisel taquimetrico do seu relogio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como usar um bisel taquimetrico no meu relogio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Inicie o cronografo em um ponto de referencia. Pare-o apos exatamente 1 km. O ponteiro dos segundos aponta para a velocidade na escala do bisel. Por exemplo, 36 segundos = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'E se meu tempo decorrido for mais rapido do que o bisel pode ler?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use uma distancia base maior. Percorra 2 km e divida a leitura do bisel por 2, ou percorra 3 km e divida por 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'E se meu tempo decorrido for mais lento do que o bisel pode ler?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use uma distancia base mais curta. Percorra 0.5 km em vez disso. Leia o bisel e multiplique por 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usar um taquimetro para outras coisas alem da velocidade?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. O taquimetro mede qualquer taxa por hora. Meça quanto tempo leva para completar uma tarefa e a escala mostra quantas voce pode fazer por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Todos os taquimetros usam a mesma escala?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria usa a escala logaritmica padrao baseada na formula 3.600 ÷ segundos. Alguns relogios antigos podem ter variacoes.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora Taquimetrica',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como calcular a velocidade usando um taquimetro',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecione um cenario ou tempo personalizado',
          'text': 'Escolha entre opcoes predefinidas como Carro, Ciclismo ou Corrida, ou selecione Personalizado para inserir qualquer tempo decorrido em segundos.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia o resultado da velocidade',
          'text': 'A calculadora mostra a velocidade em km/h e a leitura equivalente no bisel taquimetrico.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aplique ao seu cronografo',
          'text': 'Use o tempo decorrido para encontrar a velocidade correspondente no bisel taquimetrico do seu relogio.',
        },
      ],
    },
  ],
};
