import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Por que relógios mecânicos funcionam mais rápido em grandes altitudes?',
    answer: 'Relógios mecânicos funcionam mais rápido em grandes altitudes principalmente devido à redução da densidade do ar. O ar mais rarefeito cria menos arrasto aerodinâmico no volante, permitindo que ele oscile com amplitude ligeiramente maior. Essa amplitude aumentada faz o relógio adiantar - tipicamente 2-6 segundos por dia a cada 1.000 m de ganho de elevação.',
  },
  {
    question: 'A altitude também afeta relógios de quartzo?',
    answer: 'Relógios de quartzo são minimamente afetados pela altitude, pois não possuem volante mecânico oscilante. No entanto, mudanças extremas de altitude podem afetar o desempenho da bateria. O efeito é insignificante comparado aos relógios mecânicos.',
  },
  {
    question: 'Mudanças de altitude podem danificar meu relógio?',
    answer: 'Mudanças de altitude raramente danificam relógios mecânicos. No entanto, descompressão rápida (como em aeronaves) pode causar problemas de resistência à água. Variações normais de altitude durante viagens estão dentro das tolerâncias de projeto.',
  },
];

const howTo = [
  {
    name: 'Selecione uma altitude',
    text: 'Arraste o controle deslizante de altitude para cima ou para baixo para simular diferentes elevações, do nível do mar a 8.000 m. Observe como a oscilação do volante e os dados atmosféricos mudam em tempo real.',
  },
  {
    name: 'Leia o desvio',
    text: 'O display de desvio de taxa mostra os segundos estimados ganhos por dia na altitude selecionada. O gráfico abaixo mostra a tendência em todas as altitudes.',
  },
  {
    name: 'Considere os fatores',
    text: 'Observe como a densidade do ar diminui com a altitude enquanto o desvio de taxa aumenta. Dados de temperatura e pressão fornecem contexto para as mudanças ambientais.',
  },
];

const title = 'Estimador de Precisão por Altitude: Como a Elevação Afeta Seu Relógio Mecânico';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'estimador-altitude',
  title,
  description: 'Explore como a altitude afeta a precisão de relógios mecânicos. Ajuste a elevação do nível do mar ao pico da montanha e veja mudanças em tempo real na oscilação do volante, desvio de taxa, densidade do ar, pressão e temperatura.',
  ui: {
    title: 'Estimador de Precisão por Altitude',
    altitudeLabel: 'Altitude',
    altitudeUnit: 'm',
    seaLevel: 'Nível do Mar',
    deviationLabel: 'Desvio de Taxa',
    deviationUnit: 's/d',
    pressureLabel: 'Pressão',
    pressureUnit: 'hPa',
    densityLabel: 'Densidade do Ar',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatura',
    temperatureUnit: '°C',
    oscillationLabel: 'Volante',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Taxa',
    atmDataTitle: 'Condições Atmosféricas',
    howItWorks: 'Como Funciona',
    howItWorksDesc: 'A menor densidade do ar em grande altitude reduz o arrasto no volante, aumentando a amplitude e fazendo o relógio funcionar mais rápido. Esta ferramenta estima o desvio baseado em modelos atmosféricos padrão.',
    negligible: 'Insignificante',
    minor: 'Menor',
    noticeable: 'Perceptível',
    significant: 'Significativo',
    severe: 'Severo',
    step1: 'Arraste o controle deslizante para simular elevações do nível do mar a 8.000 m.',
    step2: 'Veja a animação do volante e o indicador de desvio em tempo real.',
    step3: 'Revise os dados atmosféricos para entender os fatores ambientais.',
    tipTitle: 'Dica',
    tipContent: 'O efeito varia conforme o movimento: movimentos de alta frequência (36.000 VPH) são menos afetados que movimentos vintage de baixa frequência (18.000 VPH).',
    deviationChart: 'Desvio vs Altitude',
    altitudeM: 'Altitude (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Moléculas de Ar',
    airDensity: 'Densidade do Ar',
  },
  seo: [
    { type: 'title', text: 'Estimador Interativo de Precisão por Altitude para Relógios Mecânicos', level: 2 },
    { type: 'paragraph', html: 'O <strong>Estimador de Precisão por Altitude</strong> é uma ferramenta interativa que visualiza como mudanças de elevação afetam a precisão de relógios mecânicos. Simulando altitudes do nível do mar a 8.000 m, você vê o desvio estimado causado por variações de densidade, pressão e temperatura.' },
    { type: 'title', text: 'Como a Altitude Afeta a Precisão', level: 3 },
    { type: 'paragraph', html: 'Em altitudes elevadas, <strong>a densidade do ar diminui</strong>, reduzindo o arrasto aerodinâmico no volante. Isso permite que o volante oscile com maior amplitude, fazendo o relógio funcionar ligeiramente mais rápido. O efeito é tipicamente de <strong>+2 a +6 segundos por dia</strong> a cada 1.000 m de elevação.' },
    { type: 'title', text: 'Desvio de Taxa em Diferentes Altitudes', level: 3 },
    {
      type: 'table', headers: ['Altitude', 'Densidade Ar', 'Pressão', 'Temperatura', 'Desv. Estimado'], rows: [
        ['Nível Mar (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Base'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Fatores Ambientais', level: 3 },
    { type: 'paragraph', html: 'Além da densidade do ar, outros fatores ambientais em grande altitude podem afetar o desempenho: a <strong>temperatura</strong> afeta a viscosidade do lubrificante, as <strong>mudanças de pressão</strong> podem afetar a vedação. O efeito da densidade do ar no volante continua sendo o fator dominante.' },
    { type: 'diagnostic', variant: 'info', title: 'Ferramenta de Simulação Interativa', icon: 'mdi:axis-arrow', badge: 'RELOJOARIA', html: 'Esta ferramenta fornece valores estimados baseados no modelo ISA e observações empíricas. Resultados reais variam conforme o calibre, condição e tolerâncias de fabricação.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
