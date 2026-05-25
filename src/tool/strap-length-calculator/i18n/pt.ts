import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'calculadora-comprimento-pulseira',
  title: 'Calculadora de Comprimento de Pulseira de Relógio',
  description: 'Calcula o tamanho ideal de pulseira para o teu pulso. Obtém recomendações para pulseiras de duas peças e NATO com base no tamanho do pulso e nas dimensões do relógio.',
  ui: {
    title: 'Calculadora de Comprimento de Pulseira',
    wristLabel: 'Perímetro do pulso',
    wristPlaceholder: 'ex. 170',
    lugLabel: 'Distância entre patilhas',
    lugPlaceholder: 'ex. 45',
    fitLabel: 'Ajuste preferido',
    fitTight: 'Apertado',
    fitRegular: 'Normal',
    fitLoose: 'Folgado',
    unitLabel: 'Unidade',
    standardLabel: 'Tamanho padrão',
    bespokeLabel: 'Tamanho personalizado',
    natoLabel: 'Comprimento de pulseira NATO',
    longSide: 'Lado longo',
    shortSide: 'Lado curto',
    totalLength: 'Comprimento total',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Pulsos < 6.0 in',
    sizeS: 'Small (S) - Pulsos 6.0 a 6.5 in',
    sizeM: 'Medium (M) - Pulsos 6.5 a 7.0 in',
    sizeL: 'Large (L) - Pulsos 7.0 a 7.5 in',
    sizeXL: 'Extra Large (XL) - Pulsos 7.5 a 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Pulsos > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Guia de Tamanhos de Pulseira de Relógio e Calculadora de Comprimento',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Escolher a pulseira perfeita para o teu relógio é essencial tanto para o conforto como para o equilíbrio estético. Uma pulseira demasiado comprida deixa uma ponta feia a bater, enquanto uma demasiado curta pode não fechar corretamente. Este guia explica como determinar os tamanhos padrão, as medidas personalizadas e os comprimentos de pulseiras NATO com base no pulso, no design do relógio e no ajuste pretendido.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Tamanho padrão' },
        { value: '160-190mm', label: 'Serve na maioria dos pulsos' },
        { value: '7 furos', label: 'Ajustes típicos de tamanho' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Compreender as pulseiras de duas peças: Lado longo vs. lado curto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma pulseira de duas peças é definida por dois números, como <strong>120/80 mm</strong>. O primeiro número (ex. 120 mm) é o <strong>lado comprido</strong> (o lado da ponta), que se fixa na posição das 6 horas. O segundo número (ex. 80 mm) é o <strong>lado curto</strong> (o lado da fivela), que se fixa na posição das 12 horas. A fivela em si não está incluída nestas medidas.',
    },
    {
      type: 'title',
      text: 'Tabela de tamanhos padrão por perímetro do pulso',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tamanho do pulso', 'Pulseira de couro/borracha', 'Pulseira NATO', 'Ajuste recomendado'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Ajuste pequeno'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Ajuste médio padrão'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Ajuste grande padrão'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Ajuste extra grande'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Ajuste duplo extra grande'],
      ],
    },
    {
      type: 'title',
      text: 'Tamanhos personalizados explicados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao encomendar pulseiras feitas à medida, podes obter o ajuste perfeito. Em vez de te contentares com as posições padrão dos furos, uma pulseira personalizada calcula o comprimento preciso de cada lado para que a fivela assente exatamente no centro da parte inferior do teu pulso. A fórmula usa o perímetro total do pulso, subtrai a distância entre patilhas do relógio e divide o comprimento restante de acordo com a geometria do pulso.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pulseiras personalizadas',
          description: 'Feitas à medida do teu pulso e das dimensões da caixa. Garantem que a fivela fica perfeitamente centrada e eliminam o excesso de ponta.',
          points: [
            'Centralização perfeita da fivela',
            'Posições de furos personalizadas',
            'Sem excesso de pulseira',
            'Aspeto e toque premium',
          ],
        },
        {
          title: 'Pulseiras padrão',
          description: 'Tamanhos produzidos em massa para se adaptarem a uma vasta gama de pulsos usando múltiplos furos de ajuste. Rápidas e económicas.',
          points: [
            'Custo mais baixo',
            'Disponibilidade imediata',
            'Servem em vários relógios',
            'Dimensões padronizadas',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Terminologia chave de pulseiras de relógio',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Distância entre patilhas (Lug-to-Lug)',
          definition: 'A distância vertical total da ponta da patilha superior à ponta da patilha inferior. Não é o diâmetro da caixa, mas o comprimento total da cabeça do relógio apoiada no teu pulso.',
        },
        {
          term: 'Lado curto (Fivela)',
          definition: 'A secção da pulseira fixada na posição das 12 horas da caixa. Inclui a fivela mas é excluída das medidas de comprimento.',
        },
        {
          term: 'Lado comprido (Ponta)',
          definition: 'A secção da pulseira fixada na posição das 6 horas. Tem furos de ajuste para regular a tensão.',
        },
        {
          term: 'Pulseira NATO',
          definition: 'Uma pulseira de nylon de peça única que passa por baixo da caixa do relógio através das barras. É altamente ajustável e durável.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Medir o teu pulso corretamente',
      html: 'Para uma medição precisa, enrola uma fita métrica flexível (sem apertar) à volta da zona onde usas normalmente o relógio. Se não tiveres fita, usa um fio ou uma tira de papel, marca a sobreposição e mede o comprimento com uma régua.',
    },
    {
      type: 'title',
      text: 'Porque é que a distância entre patilhas é crítica para o tamanho da pulseira',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos colecionadores esquecem-se que a caixa do relógio atua como uma extensão rígida da pulseira. Um relógio com uma distância entre patilhas longa de 50 mm ocupa mais espaço no pulso do que um relógio de 40 mm. Consequentemente, o relógio maior requer pulseiras mais curtas para alcançar o mesmo tamanho de laço. Não considerar a distância entre patilhas é a razão número um para pulseiras mal ajustadas.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Evitar o deslocamento da fivela e o balanço da caixa',
      html: 'Se o lado curto da pulseira for demasiado comprido ou demasiado curto para o teu pulso, a fivela desliza para o lado. Isto faz com que a caixa do relógio se desaloje do centro, causando desconforto e aumentando o risco de riscos na caixa ou no fecho. Procura sempre que a fivela fique centrada na parte inferior plana do teu pulso.',
    },
    {
      type: 'proscons',
      title: 'Pulseira NATO vs. pulseira de duas peças',
      items: [
        {
          pro: 'As pulseiras NATO são altamente ajustáveis e evitam a perda do relógio se uma barra partir.',
          con: 'As pulseiras NATO acrescentam espessura por baixo da caixa do relógio.',
        },
        {
          pro: 'As pulseiras de duas peças mantêm a caixa rente à pele para um perfil mais fino.',
          con: 'As pulseiras de duas peças requerem um dimensionamento preciso e oferecem menos ajustes.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Como se mede o comprimento de uma pulseira de relógio?',
      answer: 'O comprimento da pulseira é geralmente expresso em dois números como 120/80 mm. O primeiro número é o comprimento do lado comprido (ponta), e o segundo é o lado curto (fivela).',
    },
    {
      question: 'Onde deve ficar a fivela no pulso?',
      answer: 'Idealmente, a fivela deve estar centrada na parte inferior do pulso. Se estiver deslocada, a caixa do relógio sairá do centro. Ajustar a proporção entre o lado comprido e o lado curto ajuda a obter um centrado perfeito.',
    },
    {
      question: 'Como é que a distância entre patilhas afeta o comprimento de pulseira que preciso?',
      answer: 'A caixa do relógio é uma parte rígida do laço total da pulseira. Um relógio grande com uma distância entre patilhas longa (ex. 50 mm) reduz o comprimento de pulseira necessário para envolver o pulso em comparação com um relógio mais pequeno (ex. 40 mm) no mesmo pulso.',
    },
    {
      question: 'De que lado vai a ponta comprida da pulseira?',
      answer: 'Tradicionalmente, o lado comprido da pulseira (com os furos de ajuste) é fixado na posição das 6 horas da caixa, apontando para ti. O lado curto (com a fivela) é fixado na posição das 12 horas.',
    },
    {
      question: 'Quão apertada deve estar uma pulseira de relógio?',
      answer: 'A pulseira deve estar ajustada mas confortável. Deves conseguir deslizar um dedo por baixo sem forçar. Uma pulseira demasiado apertada pode restringir a circulação, enquanto uma demasiado solta fará a caixa rodar.',
    },
    {
      question: 'Posso usar uma pulseira NATO em qualquer relógio?',
      answer: 'Sim, desde que o relógio tenha barras padrão com espaço suficiente entre a caixa e a barra. As pulseiras NATO passam por baixo da caixa, por isso espaços muito apertados podem exigir barras curvas ou materiais de pulseira mais finos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Medir o teu pulso',
      text: 'Usa uma fita métrica flexível para descobrir o perímetro do teu pulso em milímetros ou polegadas.',
    },
    {
      name: 'Medir a distância entre patilhas',
      text: 'Mede a altura da caixa do relógio da ponta da patilha superior à ponta da patilha inferior.',
    },
    {
      name: 'Selecionar o teu ajuste preferido',
      text: 'Escolhe entre um ajuste apertado, normal ou folgado.',
    },
    {
      name: 'Calcular recomendações',
      text: 'Consulta o tamanho padrão, os tamanhos personalizados lado comprido/curto e o comprimento NATO ideal.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como se mede o comprimento de uma pulseira de relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O comprimento da pulseira é geralmente expresso em dois números como 120/80 mm. O primeiro número é o comprimento do lado comprido (ponta), e o segundo é o lado curto (fivela).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Onde deve ficar a fivela no pulso?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealmente, a fivela deve estar centrada na parte inferior do pulso. Se estiver deslocada, a caixa do relógio sairá do centro. Ajustar a proporção entre o lado comprido e o lado curto ajuda a obter um centrado perfeito.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Como é que a distância entre patilhas afeta o comprimento de pulseira que preciso?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A caixa do relógio é uma parte rígida do laço total da pulseira. Um relógio grande com uma distância entre patilhas longa (ex. 50 mm) reduz o comprimento de pulseira necessário para envolver o pulso em comparação com um relógio mais pequeno (ex. 40 mm) no mesmo pulso.'
          }
        },
        {
          '@type': 'Question',
          'name': 'De que lado vai a ponta comprida da pulseira?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tradicionalmente, o lado comprido da pulseira (com os furos de ajuste) é fixado na posição das 6 horas da caixa, apontando para ti. O lado curto (com a fivela) é fixado na posição das 12 horas.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Quão apertada deve estar uma pulseira de relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A pulseira deve estar ajustada mas confortável. Deves conseguir deslizar um dedo por baixo sem forçar. Uma pulseira demasiado apertada pode restringir a circulação, enquanto uma demasiado solta fará a caixa rodar.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Posso usar uma pulseira NATO em qualquer relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim, desde que o relógio tenha barras padrão com espaço suficiente entre a caixa e a barra. As pulseiras NATO passam por baixo da caixa, por isso espaços muito apertados podem exigir barras curvas ou materiais de pulseira mais finos.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Comprimento de Pulseira de Relógio',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Calculadora de Comprimento de Pulseira de Relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Medir o teu pulso',
          'text': 'Usa uma fita métrica flexível para descobrir o perímetro do teu pulso em milímetros ou polegadas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Medir a distância entre patilhas',
          'text': 'Mede a altura da caixa do relógio da ponta da patilha superior à ponta da patilha inferior.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Selecionar o teu ajuste preferido',
          'text': 'Escolhe entre um ajuste apertado, normal ou folgado.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcular recomendações',
          'text': 'Consulta o tamanho padrão, os tamanhos personalizados lado comprido/curto e o comprimento NATO ideal.'
        }
      ]
    } as any
  ]
};
