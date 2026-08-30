import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'calculadora-presenca-pulso',
  title: 'Calculadora de Presença no Pulso e Tamanho do Relógio',
  description: 'Calcule a relação caixa-pulso, a cobertura plana do pulso e determine o tamanho ideal de relógio com base em critérios estéticos.',
  ui: {
    title: 'Configurações de Medida do Pulso',
    wristCircumferenceLabel: 'Circunferência do Pulso',
    caseDiameterLabel: 'Diâmetro da Caixa',
    lugToLugLabel: 'Distância entre Lug-a-Lug',
    wristWidthLabel: 'Largura Plana do Pulso',
    autoEstimateWidthLabel: 'Estimar automaticamente a largura plana (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Análise de Ajuste no Pulso',
    caseWristRatioLabel: 'Relação Caixa-Pulso',
    wristCoverageLabel: 'Cobertura do Pulso',
    verdictLabel: 'Veredito',
    verdictOversized: 'Caixa Superdimensionada',
    verdictBold: 'Porte Moderno / Marcado',
    verdictGolden: 'Porte Clássico / Dourado',
    verdictVintage: 'Vintage / Subdimensionado',
    coverageSafe: 'Ajuste Seguro',
    coverageBold: 'Ajuste Marcado',
    coverageOverhang: 'Aviso de Saliência de Lug',
    sweetSpotTitle: 'Estilo de Ajuste',
    sweetSpotDesc: 'O sweet spot representa o aspeto visual mais equilibrado.',
    minClassicLabel: 'Ajuste Vintage / Clássico',
    sweetSpotLabel: 'Sweet Spot Estético',
    maxBoldLabel: 'Ajuste Moderno / Marcado',
    maxLugToLugLabel: 'Lug-a-Lug Máximo Recomendado',
    idealSizesTitle: 'Guia de Tamanhos Ideais',
    visualizerTitle: 'Simulador ao Vivo',
    wristWidthHelp: 'Estimativa baseada na forma do pulso.',
    estimatedLabel: 'estimado',
    customLabel: 'Pulso',
  },
  seo: [
    { type: 'title', text: 'Como escolher o tamanho de relógio perfeito: o guia de proporções', level: 2 },
    { type: 'paragraph', html: 'Encontrar o tamanho certo de relógio é uma mistura de matemática, geometria e estilo pessoal. Em relojoaria, a forma como um cronógrafo assenta no pulso chama-se <strong>presença no pulso</strong>. Um relógio deve parecer equilibrado-nem dominar o braço com uma saliência de lug antiestética, nem desaparecer como um ponto minúsculo. Para alcançar esse equilíbrio, os colecionadores analisam três métricas principais: diâmetro da caixa, distância lug-a-lug e forma do pulso.' },
    { type: 'title', text: 'Entender a relação caixa-pulso', level: 3 },
    { type: 'paragraph', html: 'Um método tradicional para avaliar as proporções de um relógio é a relação caixa-pulso. Divide-se a circunferência do pulso em milímetros pelo diâmetro da caixa. Relações entre <strong>4,5 e 5,0</strong> representam o sweet spot clássico. De <strong>4,0 a 4,5</strong> o relógio fica com um aspeto moderno e desportivo. Acima de 5,0 prevalece a estética vintage; abaixo de 4,0 a caixa parece superdimensionada.' },
    { type: 'title', text: 'Por que a distância lug-a-lug importa mais do que o diâmetro', level: 3 },
    { type: 'paragraph', html: 'Embora o diâmetro da caixa receba toda a atenção, a <strong>distância lug-a-lug</strong> (o comprimento vertical de ponta a ponta dos lugs) é o verdadeiro teste de ajuste. A regra de ouro é que a distância lug-a-lug nunca deve exceder a largura plana do pulso. Se os lugs ultrapassarem as bordas do pulso, o relógio escorrega, cria-se uma folga entre a bracelete e a pele e o resultado visual fica comprometido.' },
    { type: 'title', text: 'Pulsos planos vs. redondos: tamanhos para cada anatomia', level: 3 },
    { type: 'paragraph', html: 'A circunferência do pulso conta apenas parte da história. Pulsos com a mesma circunferência podem ter secções transversais diferentes: plana ou redonda. Os pulsos planos têm uma superfície superior mais larga, podendo suportar distâncias lug-a-lug maiores sem saliência. Os pulsos redondos são mais cilíndricos, com uma superfície superior mais estreita, e necessitam de distâncias lug-a-lug mais curtas para evitar a saliência.' },
  ],
  faq: [
    {
      question: 'Qual é a relação caixa-pulso ideal?',
      answer: 'A relação ideal situa-se entre 4,0 e 5,0. Uma relação de 4,5 representa o sweet spot clássico da relojoaria. Entre 4,0 e 4,5 obtém-se uma presença no pulso moderna e marcada; acima de 5,0 o relógio adequa-se melhor ao estilo vintage; abaixo de 4,0 a caixa tende a parecer superdimensionada.',
    },
    {
      question: 'Por que a distância lug-a-lug é mais importante do que o diâmetro da caixa?',
      answer: 'O diâmetro mede apenas a largura da esfera, mas a distância lug-a-lug define o comprimento total do relógio sobre o pulso. Se exceder a largura plana do pulso, os lugs ficam em saliência, a bracelete cai na vertical e o relógio parece instável e desproporcionalmente grande.',
    },
    {
      question: 'Como os pulsos planos ou redondos influenciam o ajuste do relógio?',
      answer: 'Dois pulsos com a mesma circunferência (por ex., 17 cm) podem usar relógios de forma muito diferente. Um pulso plano tem uma superfície superior mais larga e pode acomodar distâncias lug-a-lug maiores sem saliência. Um pulso redondo é mais estreito no topo e precisa de distâncias lug-a-lug mais curtas para um ajuste estável.',
    },
    {
      question: 'Como a espessura e a largura da luneta alteram o tamanho visual de um relógio?',
      answer: 'Relógios com luneta muito fina (como os dress watches) têm uma superfície de esfera maior e parecem mais grandes no pulso do que o seu diâmetro indica. Os relógios de mergulho com luneta giratória espessa têm uma esfera mais pequena e parecem mais compactos. Da mesma forma, relógios com mais de 13 mm de espessura parecem mais volumosos e visualmente mais pesados.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Meça o seu pulso',
      text: 'Envolva uma fita métrica flexível em torno do osso do pulso para obter a circunferência em cm ou polegadas.',
    },
    {
      name: 'Introduza as dimensões do relógio',
      text: 'Digite o diâmetro da caixa e a distância lug-a-lug do relógio que pretende avaliar.',
    },
    {
      name: 'Analise o ajuste e o simulador',
      text: 'Verifique a relação caixa-pulso, o aviso de saliência dos lugs e observe o diagrama de simulação em tempo real.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Qual é a relação caixa-pulso ideal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A relação ideal situa-se entre 4,0 e 5,0. Uma relação de 4,5 representa o sweet spot clássico da relojoaria. Entre 4,0 e 4,5 obtém-se uma presença no pulso moderna e marcada; acima de 5,0 o relógio adequa-se melhor ao estilo vintage; abaixo de 4,0 a caixa tende a parecer superdimensionada.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Por que a distância lug-a-lug é mais importante do que o diâmetro da caixa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O diâmetro mede apenas a largura da esfera, mas a distância lug-a-lug define o comprimento total do relógio sobre o pulso. Se exceder a largura plana do pulso, os lugs ficam em saliência, a bracelete cai na vertical e o relógio parece instável e desproporcionalmente grande.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Presença no Pulso e Tamanho do Relógio',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como determinar o tamanho de relógio perfeito',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Meça o seu pulso',
          'text': 'Envolva uma fita métrica flexível em torno do osso do pulso para obter a circunferência em cm ou polegadas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Introduza as dimensões do relógio',
          'text': 'Digite o diâmetro da caixa e a distância lug-a-lug do relógio que pretende avaliar.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analise o ajuste e o simulador',
          'text': 'Verifique a relação caixa-pulso, o aviso de saliência dos lugs e observe o diagrama de simulação em tempo real.'
        }
      ]
    }
  ]
};
