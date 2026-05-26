import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'O que é um tourbillon?',
    answer: 'Um tourbillon é uma gaiola giratória que contém o escapamento (volante, âncora e roda de escape) de um relógio mecânico. Ele gira continuamente — normalmente uma vez por minuto — para equalizar os erros posicionais causados pela gravidade, melhorando a precisão.',
  },
  {
    question: 'Qual a diferença entre um tourbillon clássico e um voador?',
    answer: 'Um tourbillon clássico é suportado por uma ponte superior e inferior, enquanto um tourbillon voador é em balanço por baixo sem suporte superior visível. Tourbillons voadores oferecem uma visão sem obstruções do escapamento giratório e são considerados esteticamente mais exigentes de construir.',
  },
  {
    question: 'Um tourbillon realmente melhora a precisão?',
    answer: 'Em relógios de pulso modernos, o benefício na precisão é mínimo, pois os erros posicionais já são bem compensados. No entanto, em relógios de bolso (para os quais Breguet inventou o tourbillon em 1801), a rotação constante eliminava as diferenças de ritmo entre posições verticais. Hoje, os tourbillons são principalmente uma demonstração de alta artistry relojoeira.',
  },
];

const howTo = [
  {
    name: 'Mudar tipo de tourbillon',
    text: 'Alterne entre tourbillon clássico e voador para ver a diferença estrutural. O tourbillon voador não tem ponte superior, revelando a gaiola completa.',
  },
  {
    name: 'Ajustar frequência',
    text: 'Experimente diferentes frequências (18k, 28.8k, 36k VPH) para ver como a velocidade do volante e a rotação da roda de escape mudam.',
  },
  {
    name: 'Controlar velocidade',
    text: 'Use os controles de velocidade para desacelerar e observar a intrincada dança do escapamento, ou acelere para ver o ciclo completo de rotação da gaiola.',
  },
];

const title = 'Tourbillon: Arte do Escapamento Rotatório';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualizador-lus',
  title,
  description: 'Experimente a arte fascinante do tourbillon — uma gaiola giratória que abriga o escapamento. Veja o volante oscilar, a mola espiral respirar e a gaiola girar num elegante balé mecânico.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Tipo',
    typeClassic: 'Clássico',
    typeFlying: 'Voador',
    speedLabel: 'Velocidade',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausado',
    beatRateLabel: 'Frequência',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Gaiola',
    showLabelsLabel: 'Rótulos',
    step1: 'Alterne entre tourbillon clássico e voador para comparar sua arquitetura.',
    step2: 'Ajuste a frequência para ver como afeta o ritmo do escapamento.',
    step3: 'Use os controles de velocidade para observar a precisa dança mecânica em qualquer ritmo.',
    tipTitle: 'Dica',
    tipContent: 'Breguet inventou o tourbillon em 1801. A palavra "tourbillon" significa "redemoinho" em francês, descrevendo a aparência da gaiola giratória em movimento.',
    balanceLabel: 'Volante',
    escapeLabel: 'Escape',
    palletLabel: 'Âncora',
    cageLabel: 'Gaiola',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Arte Animada do Escape', level: 2 },
    { type: 'paragraph', html: 'O <strong>tourbillon</strong> é uma das complicações mais cativantes da alta relojoaria. Este visualizador interativo dá vida ao escapamento giratório com uma representação animada detalhada do volante, mola espiral, âncora, roda de escape e a icónica gaiola giratória. Explore a poesia mecânica da obra-prima de Breguet.' },
    { type: 'title', text: 'Como funciona um tourbillon', level: 3 },
    { type: 'paragraph', html: 'Um tourbillon abriga todo o escapamento — <strong>volante, mola espiral, âncora e roda de escape</strong> — dentro de uma gaiola giratória. A gaiola completa tipicamente uma rotação por minuto, mudando continuamente a posição do escapamento em relação à gravidade. Isso equaliza os erros posicionais, um conceito revolucionário quando Abraham-Louis Breguet o patenteou em 1801. O <strong>volante</strong> oscila à frequência do relógio (tipicamente 4 Hz / 28.800 vph), enquanto a <strong>roda de escape</strong> avança um dente por batida, criando o característico movimento de tique.' },
    { type: 'title', text: 'Tourbillon Clássico vs Voador', level: 3 },
    {
      type: 'table', headers: ['Característica', 'Tourbillon Clássico', 'Tourbillon Voador'], rows: [
        ['Suporte superior', 'Ponte visível', 'Nenhum (em balanço)'],
        ['Visibilidade', 'Parcial (ponte visível)', 'Completa (sem obstrução)'],
        ['Dificuldade', 'Alta', 'Extremamente alta'],
        ['Inventado', '1801 (Breguet)', 'Anos 1920 (Alfred Helwig)'],
        ['Comum em', 'Marcas tradicionais', 'Independentes modernos'],
      ]
    },
    { type: 'title', text: 'Comparação de Frequências', level: 3 },
    {
      type: 'table', headers: ['Ritmo (vph)', 'Frequência', 'Roda Escape RPM', 'Batidas/s', 'Uso típico'], rows: [
        ['18.000', '2,5 Hz', '20 RPM', '5', 'Relógios de bolso vintage'],
        ['28.800', '4 Hz', '32 RPM', '8', 'Padrão moderno (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 RPM', '10', 'Alta frequência (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Arte Mecânica em Movimento', icon: 'mdi:rotate-orbit', badge: 'RELOJOARIA', html: 'Este visualizador é uma interpretação artística de um escapamento tourbillon. A rotação da gaiola, a oscilação do volante, a respiração da mola espiral, o balanço da âncora e o avanço da roda de escape estão sincronizados de acordo com relações mecânicas reais. Use os controlos para explorar esta obra-prima da engenharia micromecânica.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
