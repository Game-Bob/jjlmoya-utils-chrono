import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'O que é um trem de engrenagens de um relógio?',
    answer: 'Um trem de engrenagens é uma série de rodas dentadas interligadas que transmitem energia da barrica do motor ao escape. Cada par de engrenagens fornece uma taxa de redução específica, desacelerando a liberação rápida da energia da mola em impulsos controlados e cronometrados.',
  },
  {
    question: 'Por que diferentes movimentos têm diferentes relações de engrenagem?',
    answer: 'As relações de engrenagem são determinadas pelo número de dentes em cada roda e pinhão. Movimentos com diferentes taxas de batimento (ex., 28.800 VPH vs 36.000 VPH) têm diferentes velocidades da roda de escape e configurações de engrenagens para manter a precisão cronométrica enquanto acomodam a frequência do volante.',
  },
  {
    question: 'Qual é a diferença entre uma roda e um pinhão?',
    answer: 'Em relojoaria, uma "roda" é a engrenagem maior com muitos dentes que aciona o próximo componente. Um "pinhão" é a engrenagem menor (geralmente 6-12 dentes) que é acionada. Juntos, uma roda e um pinhão formam um par de engrenagens que altera a velocidade de rotação e o torque.',
  },
];

const howTo = [
  {
    name: 'Selecione um movimento',
    text: 'Escolha entre movimentos padrão (28.800 VPH), alta frequência (36.000 VPH El Primero) ou vintage (18.000 VPH). Cada um tem relações de engrenagem e taxas de batimento únicas.',
  },
  {
    name: 'Observe o trem de engrenagens',
    text: 'Veja as engrenagens animadas girarem a velocidades proporcionais. A barrica gira lentamente enquanto a roda de escape gira rapidamente. Passe o mouse sobre qualquer engrenagem ou cartão de dados para obter informações detalhadas.',
  },
  {
    name: 'Ajuste a velocidade',
    text: 'Use os controles de velocidade para desacelerar, acelerar ou pausar a animação. Isso ajuda a visualizar como cada engrenagem contribui para a corrente de transmissão de potência.',
  },
];

const title = 'Explorador do Trem de Engrenagens: Diagrama Interativo de Relojoaria';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'explorador-trem-engrenagens',
  title,
  description: 'Explore o coração mecânico de um relógio com uma visualização animada do trem de engrenagens. Veja a barrica, a roda central, a terceira roda, a quarta roda, a roda de escape, a âncora e o volante em movimento.',
  ui: {
    title: 'Explorador do Trem de Engrenagens',
    barrelLabel: 'Barrica',
    centerWheelLabel: 'Roda Central',
    thirdWheelLabel: 'Terceira Roda',
    fourthWheelLabel: 'Quarta Roda',
    escapeWheelLabel: 'Roda de Escape',
    palletForkLabel: 'Âncora',
    balanceWheelLabel: 'Volante',
    rpmLabel: 'RPM',
    teethLabel: 'dentes',
    gearRatioLabel: 'Relação',
    powerFlowLabel: 'Fluxo de Potência',
    movementLabel: 'Movimento',
    speedLabel: 'Velocidade',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausado',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Selecione um calibre de movimento para ver suas relações de engrenagem e taxa de batimento únicas.',
    step2: 'Passe o mouse sobre qualquer engrenagem ou cartão de dados para destacar sua posição no fluxo de potência.',
    step3: 'Ajuste a velocidade da animação para estudar como cada roda transmite potência através do trem.',
    tipTitle: 'Dica',
    tipContent: 'O trem de engrenagens reduz a rápida liberação de energia da mola em uma oscilação controlada. Uma barrica típica gira uma vez a cada 7-8 horas, enquanto a roda de escape gira a 32 RPM (a 28.800 VPH) - uma redução de mais de 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Explorador Interativo do Trem de Engrenagens', level: 2 },
    { type: 'paragraph', html: 'O <strong>trem de engrenagens</strong> é a espinha dorsal mecânica de todo relógio mecânico. Esta ferramenta interativa visualiza como a potência flui da barrica através da roda central, terceira roda, quarta roda e roda de escape até a âncora e o volante. Veja cada engrenagem girar em sua velocidade proporcional e entenda como as relações de engrenagem determinam a medição do tempo.' },
    { type: 'title', text: 'Como funciona um trem de engrenagens', level: 3 },
    { type: 'paragraph', html: 'Um trem de engrenagens de relógio consiste em uma série de <strong>rodas</strong> (engrenagens grandes) e <strong>pinhões</strong> (engrenagens pequenas) que transmitem potência enquanto reduzem a velocidade. A <strong>barrica</strong> abriga a mola motriz e gira lentamente, acionando a <strong>roda central</strong> que gira uma vez por hora (para o ponteiro dos minutos). A <strong>terceira roda</strong> e a <strong>quarta roda</strong> (roda dos segundos) aumentam ainda mais a velocidade de rotação. Finalmente, a <strong>roda de escape</strong> libera a potência em impulsos controlados para a <strong>âncora</strong>, que alternadamente trava e destrava a roda de escape, enviando impulsos ao <strong>volante</strong>. O volante oscila em uma frequência precisa - tipicamente 4 Hz (28.800 vibrações por hora) - regulando a marcha do relógio.' },
    { type: 'title', text: 'Relações de Engrenagem e Transmissão de Potência', level: 3 },
    {
      type: 'table', headers: ['Componente', 'Dentes típicos', 'RPM (28.800 VPH)', 'Relação anterior'], rows: [
        ['Barrica', '72', '0,002 (1 rev / 8 h)', '-'],
        ['Roda Central', '60', '0,0167 (1 rev / h)', '~7,2:1'],
        ['Terceira Roda', '50', '0,125 (1 rev / 8 min)', '~5:1'],
        ['Quarta Roda', '60', '1 (1 rev / min)', '6:1'],
        ['Roda de Escape', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Comparação de Movimentos', level: 3 },
    {
      type: 'table', headers: ['Movimento', 'Taxa de Batimento', 'Frequência do Volante', 'RPM da Roda de Escape', 'Precisão típica'], rows: [
        ['Vintage (18.000 VPH)', '18.000 bph', '2,5 Hz', '20 RPM', '±15-30 s/d'],
        ['Padrão (28.800 VPH)', '28.800 bph', '4 Hz', '32 RPM', '±5-15 s/d'],
        ['Alta Frequência (36.000 VPH)', '36.000 bph', '5 Hz', '40 RPM', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Ferramenta de Aprendizagem Interativa', icon: 'mdi:cog-clockwise', badge: 'RELOJOARIA', html: 'Esta ferramenta usa relações de engrenagem aproximadas representativas de movimentos comuns de escape de âncora suíço. As relações reais variam de acordo com o calibre. Use as predefinições de movimento para comparar como diferentes taxas de batimento afetam a dinâmica do trem de engrenagens.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

