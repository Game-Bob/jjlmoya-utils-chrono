import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Qual é a diferença entre tempo solar e tempo sideral?',
    answer: 'O tempo solar é baseado na posição do Sol em relação ao meridiano local (leva 24 horas), enquanto o tempo sideral é baseado na rotação da Terra em relação a estrelas distantes de fundo (leva 23 horas, 56 minutos, 4,09 segundos).',
  },
  {
    question: 'Por que um dia sideral é mais curto que um dia solar?',
    answer: 'Enquanto a Terra gira em seu eixo, ela também percorre sua órbita ao redor do Sol. Para voltar a enfrentar o Sol, a Terra precisa girar um pouco mais de 360 graus, o que adiciona cerca de 3 minutos e 56 segundos ao dia em comparação com uma simples rotação alinhada às estrelas.',
  },
  {
    question: 'Como a longitude afeta o tempo sideral local?',
    answer: 'O Tempo Sideral Local é calculado adicionando a longitude do observador (convertida em horas: 15 graus por hora) ao Tempo Sideral Médio de Greenwich (GMST). Cada grau para leste adiciona 4 minutos ao seu relógio sideral local.',
  },
];

const howTo = [
  {
    name: 'Defina sua longitude de referência',
    text: 'Ajuste o controle deslizante para sua longitude local. Isso alinha a escala sideral de 24 horas ao seu meridiano local.',
  },
  {
    name: 'Observe os ponteiros solares e siderais',
    text: 'Olhe para o mostrador: os ponteiros solares padrão mostram a hora UTC no dial interno de 12 horas, enquanto o ponteiro dourado e as estrelas mostram o tempo sideral na escala externa de 24 horas.',
  },
  {
    name: 'Acelere a velocidade celeste',
    text: 'Clique nos multiplicadores de velocidade 200× ou 5000× para ver a rotação da esfera estelar e a deriva se acumular em tempo real.',
  },
];

const title = 'Rastreador Astronômico de Tempo Sideral: Relógio de Tempo Sideral Local';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'rastreador-tempo-sideral',
  title,
  description: 'Acompanhe o Tempo Sideral Médio de Greenwich (GMST) e o Tempo Sideral Local (LST) com um artístico mostrador de astrolábio astronômico e um simulador de deriva estelar em tempo real.',
  ui: {
    title: 'Rastreador de Tempo Sideral',
    longitudeLabel: 'Longitude do observador',
    solarTimeLabel: 'Tempo Universal Coordenado (UTC)',
    siderealTimeLabel: 'Tempo Sideral Local (LST)',
    differenceLabel: 'Deriva Estelar-Solar',
    utcLabel: 'Data/Hora UTC',
    speedLabel: 'Velocidade Celeste',
    speedNormal: '1× (Tempo real)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Deriva)',
    audioToggleLabel: 'Tiques de Sino Cósmico',
    step1: 'Ajuste sua longitude local para ver o Tempo Sideral Local mudar em tempo real.',
    step2: 'Altere o multiplicador de velocidade para observar a deriva do ponteiro solar padrão e da esfera sideral.',
    step3: 'Ative os Sinos Cósmicos para ouvir a diferença entre um tique padrão e uma passagem de hora astronômica.',
    tipTitle: 'Deriva Astronômica',
    tipContent: 'Como a Terra orbita o Sol, os relógios solares padrão ficam atrás do tempo sideral em 3 minutos e 56 segundos por dia, derivando exatamente 24 horas ao longo de um ano completo.',
    useLocationBtn: 'Usar localização atual',
    hemisphereLabel: 'Hemisferio Estelar',
    hemisphereNorth: 'Norte (Ursa Maior)',
    hemisphereSouth: 'Sul (Cruzeiro)',
    longitudeFormatLabel: 'Formato de longitude',
    longitudeFormatDecimal: 'Graus decimais',
    longitudeFormatDMS: 'Graus/Minutos',
  },
  seo: [
    { type: 'title', text: 'O que é tempo sideral?', level: 2 },
    { type: 'paragraph', html: 'O tempo sideral é um sistema de medição do tempo que os astrônomos usam para localizar objetos celestes. Um dia sideral dura aproximadamente 23 horas, 56 minutos e 4,09 segundos. É o tempo que a Terra leva para completar uma rotação em seu eixo em relação ao equinócio vernal ou às estrelas distantes, em vez do Sol.' },
    { type: 'title', text: 'Dia Solar vs. Dia Sideral', level: 3 },
    { type: 'paragraph', html: 'Um dia solar mede o tempo entre trânsitos consecutivos do Sol pelo meridiano local. Como a Terra percorre cerca de 1/365 de sua órbita ao redor do Sol a cada dia, ela precisa girar ligeiramente mais de 360 graus para se realinhar com o Sol. Um dia sideral é uma rotação verdadeira de 360 graus em relação às estrelas, sendo 3 minutos e 56 segundos mais curto.' },
    { type: 'title', text: 'Por que astrônomos e relojoeiros se importam', level: 3 },
    { type: 'paragraph', html: 'Para astrônomos, uma estrela está sempre na mesma posição no céu no mesmo Tempo Sideral. Para rastrear estrelas, as montagens de telescópio devem girar exatamente uma vez por dia sideral. Marcas de alta relojoaria (como Patek Philippe, Vacheron Constantin e IWC) criam relógios astronômicos ultracomplexos com trens de engrenagens siderais para rastrear o LST diretamente no pulso.' },
    { type: 'title', text: 'Tabela de referência de deriva estelar vs. solar', level: 3 },
    {
      type: 'table', headers: ['Dias decorridos', 'Tempo sideral adiantado', 'Graus de deslocamento', 'Deriva de constelações'], rows: [
        ['1 dia', '3m 56s', '0,986°', 'Leve deslocamento para oeste'],
        ['15 dias', '59m 0s', '14,79°', 'Meio signo zodiacal'],
        ['30 dias', '1h 58m', '29,58°', 'Uma constelação zodiacal completa'],
        ['90 dias', '5h 54m', '88,74°', 'Uma estação completa'],
        ['180 dias', '11h 48m', '177,48°', 'Constelações opostas visíveis à meia-noite'],
        ['365 dias', '24h 0m', '360,00°', 'Ciclo completo, reinício do alinhamento estelar'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Calculado a partir da Época J2000', icon: 'mdi:creation-outline', badge: 'CÁLCULO', html: 'O Tempo Sideral Local é calculado convertendo a hora UTC em Data Juliana (dias desde -4712), encontrando o Tempo Sideral Médio de Greenwich e aplicando sua longitude (15 graus por hora). Nossa ferramenta usa o modelo linear IAU J2000 de alta precisão para rastreamento em tempo real.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
