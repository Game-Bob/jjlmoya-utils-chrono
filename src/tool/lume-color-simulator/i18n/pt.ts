import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'simulador-de-cores-de-lume',
  title: 'Simulador de Cores de Lume — Visualizador de Luminescência',
  description: 'Visualize diferentes cores de lume em tempo real. Compare C1, C3, BGW9, LumiNova e mais em vários níveis de luminosidade ambiente.',
  ui: {
    title: 'Simulador de Cores de Lume',
    lumeType: 'Tipo de Lume',
    brightness: 'Luminosidade Ambiente',
    dark: 'Escuro',
    light: 'Claro',
    color: 'Cor',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Tipo',
    description: 'Descrição',
    c1Name: 'C1',
    c1Desc: 'Verde (clássico)',
    c3Name: 'C3',
    c3Desc: 'Super Verde',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Azul Gelo',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Branco Quente',
    vintageName: 'Vintage',
    vintageDesc: 'Rádio Envelhecido',
    orangeName: 'Laranja',
    orangeDesc: 'Laranja Mergulhador',
    blueName: 'Azul',
    blueDesc: 'Azul Profundo',
    greenName: 'Verde',
    greenDesc: 'Verde Neon',
    tipTitle: 'Dica',
    tipContent: 'O brilho do lume depende da qualidade do pigmento e da quantidade de luz que absorveu. O BGW9 brilha em azul-branco e é o mais brilhante, enquanto o lume vintage tem um brilho quente e suave.',
  },
  seo: [
    { type: 'title', text: 'Simulador de Cores de Lume de Relógio — Visualizador de Brilho em Tempo Real', level: 2 },
    { type: 'paragraph', html: 'O lume é uma das escolhas mais pessoais no colecionismo de relógios. Você prefere o brilho verde clássico do <strong>C1 Super-LumiNova</strong> ou o azul gelado do <strong>BGW9</strong>? Este simulador mostra como cada tipo de lume se comporta em diferentes níveis de luminosidade — da luz do dia ao escuro total — com os valores exatos de <strong>HEX e RGB</strong> para cada tonalidade.' },
    { type: 'title', text: 'Tipos de Super-LumiNova Comparados', level: 3 },
    {
      type: 'table', headers: ['Tipo', 'Cor à Luz do Dia', 'Cor do Brilho', 'Intensidade', 'Melhor Para'], rows: [
        ['C1', 'Verde claro', 'Verde', 'Média', 'Relógios sociais, estética original'],
        ['C3', 'Amarelo-esverdeado', 'Verde brilhante', 'Altíssima', 'Relógios de mergulho, ferramenta'],
        ['BGW9', 'Branco sujo', 'Azul gelo', 'Alta', 'Relógios esportivos modernos, visual limpo'],
        ['LumiNova', 'Bege quente', 'Branco quente', 'Baixa-média', 'Lume de custo acessível'],
        ['Vintage', 'Creme / marrom', 'Suave quente', 'Baixa', 'Relógios estilo heritage'],
        ['Laranja', 'Laranja', 'Laranja', 'Média', 'Detalhes de mergulhador, retro divers'],
        ['Azul', 'Azul claro', 'Azul', 'Média', 'Mostradores de design, relógios de moda'],
        ['Verde', 'Verde brilhante', 'Verde', 'Alta', 'Relógios estilo militar'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9 — Qual Escolher?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Verde Clássico', icon: 'mdi:lightbulb-on', description: 'A formulação original do Super-LumiNova. Brilha em verde com intensidade média. Uma escolha clássica e segura que funciona com qualquer estilo de relógio.', points: ['Brilho médio, visibilidade de 4-6h', 'Brilho verde, tom quente', 'Formulação mais acessível', 'Comum em relógios de entrada'], highlight: false },
        { title: 'C3 Super Verde', icon: 'mdi:lightning-bolt', description: 'O lume verde mais brilhante disponível. Usado em relógios de mergulho profissionais onde a legibilidade subaquática é essencial. Máximo brilho com mínima carga.', points: ['Altíssimo brilho, visibilidade de 8-12h', 'Amarelo-esverdeado à luz do dia', 'Preferido por Seiko, Citizen, Omega', 'Melhor para leitura em baixa luz'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Azul Gelo', icon: 'mdi:snowflake', description: 'Brilha em azul-branco em vez de verde. Ligeiramente menos brilhante que o C3, mas preferido por seu visual limpo e moderno. Popular em relógios esportivos de luxo.', points: ['Alto brilho, visibilidade de 6-10h', 'Brilho azul-branco, tom neutro', 'Visual limpo e moderno à luz do dia', 'Usado por Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Estilo Rádio', icon: 'mdi:fire', description: 'Tom bege/creme quente que imita o lume de rádio dos anos 1960. Intencionalmente mais fraco por autenticidade estética. O brilho é quente, sutil e envelhece lindamente.', points: ['Baixo brilho, visibilidade de 2-4h', 'Creme quente a âmbar suave', 'Aparência envelhecida sem radioatividade', 'Popular em reedições heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Brilho Não é Tudo', icon: 'mdi:palette', html: 'O lume mais brilhante (C3) nem sempre é a melhor escolha. O <strong>BGW9</strong> troca uma pequena diferença de brilho por um visual mais neutro e moderno que muitos colecionadores preferem. O <strong>lume vintage</strong> prioriza a estética de época sobre o desempenho. Escolha com base no que importa para você: <strong>máximo brilho, estética moderna ou autenticidade histórica.</strong>' },
    { type: 'title', text: 'Como o Lume Funciona: a Ciência por Trás do Brilho', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Um pigmento fotoluminescente à base de aluminato de estrôncio. Absorve luz UV e visível e a reemite como brilho. Não radioativo e seguro. Desenvolvido originalmente pela Nemoto & Co. em 1993.' },
        { term: 'Tempo de Carga', definition: 'O tempo de exposição à luz necessário para saturar o pigmento do lume. Uma carga completa leva de 10 a 30 minutos sob luz solar direta ou UV. Quanto mais carga, mais longo e brilhante o brilho.' },
        { term: 'Duração do Brilho', definition: 'Por quanto tempo o lume permanece visível após a carga. Um Super-LumiNova de qualidade brilha visivelmente por 6 a 12 horas. O período mais intenso são os primeiros 30 minutos após a carga.' },
        { term: 'Grau do Pigmento', definition: 'A qualidade dos cristais de aluminato de estrôncio. Pigmentos de grau superior (C3, BGW9) usam cristais maiores e mais uniformes para um brilho mais intenso e duradouro. Graus inferiores (LumiNova) usam cristais menores e são mais fracos.' },
      ]
    },
    {
      type: 'summary', title: 'Guia Rápido de Seleção de Lume', items: [
        'Para máxima legibilidade no escuro: escolha C3 (verde mais brilhante) ou BGW9 (azul-branco mais brilhante).',
        'Para um visual moderno e luxuoso: BGW9 é o favorito atual entre as marcas de relógios de alto padrão.',
        'Para construções vintage/heritage: use Vintage ou Laranja para um tom de época.',
        'C1 é o versátil: bom brilho, verde clássico, acessível.',
        'A cor do lume à luz do dia difere significativamente da cor do brilho — use o simulador para comparar ambas.',
      ]
    },
  ],
  faq: [
    {
      question: 'Qual lume é o mais brilhante?',
      answer: 'O C3 Super-LumiNova é a formulação verde mais brilhante. O BGW9 é o azul-branco mais brilhante. Ambos são significativamente mais brilhantes que o C1 ou o LumiNova padrão.',
    },
    {
      question: 'O que é lume BGW9?',
      answer: 'BGW9 é uma variante do Super-LumiNova que brilha em azul-branco em vez de verde. É ligeiramente menos brilhante que o C3, mas preferido por muitos pelo seu visual limpo e moderno.',
    },
    {
      question: 'O lume vintage brilha?',
      answer: 'O lume vintage moderno (bege/quente) brilha, mas é intencionalmente mais fraco para imitar o rádio envelhecido. O sacrifício é pela autenticidade estética em vez do brilho máximo.',
    },
    {
      question: 'Quanto tempo dura o lume?',
      answer: 'Após uma carga completa sob luz forte, o Super-LumiNova de qualidade brilha visivelmente por 6 a 12 horas. O período mais intenso são os primeiros 30 minutos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione um tipo de lume',
      text: 'Escolha entre os perfis C1, C3, BGW9, LumiNova, Vintage, Laranja, Azul ou Verde.',
    },
    {
      name: 'Ajuste a luminosidade',
      text: 'Arraste o controle de luminosidade ambiente do claro (esquerda) para o escuro (direita) e veja como o lume se comporta.',
    },
    {
      name: 'Leia as especificações',
      text: 'O cartão de informações mostra os valores exatos de HEX e RGB da cor atual.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual lume é o mais brilhante?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova é o verde mais brilhante. BGW9 é o azul-branco mais brilhante.' },
        },
        {
          '@type': 'Question',
          'name': 'O que é lume BGW9?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 é uma variante do Super-LumiNova que brilha em azul-branco em vez de verde.' },
        },
        {
          '@type': 'Question',
          'name': 'O lume vintage brilha?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'O lume vintage moderno brilha, mas é intencionalmente mais fraco para imitar o rádio envelhecido.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Simulador de Cores de Lume',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como simular cores de lume',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecione um tipo de lume',
          'text': 'Escolha entre C1, C3, BGW9, LumiNova ou outros perfis.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajuste a luminosidade',
          'text': 'Arraste a luminosidade do claro para o escuro para ver o comportamento do lume.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia as especificações',
          'text': 'O cartão de informações mostra os valores HEX e RGB da cor atual.',
        },
      ],
    },
  ],
};
