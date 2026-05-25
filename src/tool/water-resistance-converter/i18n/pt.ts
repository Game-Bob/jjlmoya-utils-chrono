import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'conversor-resistencia-agua',
  title: 'Conversor de Resistencia a Agua de Relogios: Metros, ATM, Bar e Pes',
  description: 'Converta classificações de resistência à água de relógios entre metros, pés, ATM e bar. Veja o que cada classificação realmente significa para uso diário, natação e mergulho.',
  ui: {
    title: 'Conversor de Resistência à Água',
    depthLabel: 'Resistência à Água',
    enterDepth: 'Insira a classificação de profundidade',
    unitMeters: 'Metros (m)',
    unitFeet: 'Pés (ft)',
    unitATM: 'Atmosferas (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Valores Equivalentes',
    ratingLabel: 'Classificação',
    whatItMeans: 'O Que Significa',
    notWaterResistant: 'Não Resistente à Água',
    notWaterResistantDesc: 'Sem respingos. Mantenha completamente longe da água.',
    handWash: 'Resistente a Respingos',
    handWashDesc: 'Lavar as mãos, chuva, respingos leves. Não nade, não tome banho.',
    showerSwim: 'Chuveiro e Natação Superficial',
    showerSwimDesc: 'Tomar banho, natação superficial em piscina. Sem mergulho ou snorkeling.',
    snorkeling: 'Natação e Snorkeling',
    snorkelingDesc: 'Natação em piscina, snorkeling, esportes aquáticos. Excelente resistência diária.',
    scubaDiving: 'Mergulho Recreativo',
    scubaDivingDesc: 'Mergulho autônomo, atividades marinhas de alto impacto. Em conformidade com ISO.',
    saturationDiving: 'Mergulho Profundo / Saturação',
    saturationDivingDesc: 'Mergulho de saturação profissional. Profundidades extremas. Contexto de válvula de escape de hélio.',
    tipTitle: 'Dica',
    tipContent: 'A resistência à água degrada-se ao longo do tempo. Juntas e vedações devem ser testadas anualmente e substituídas a cada 3\u20135 anos.',
  },
  seo: [
    { type: 'title', text: 'Conversor de Resistência à Água de Relógios-Decifrando Metros, ATM, Bar & Pés', level: 2 },
    { type: 'paragraph', html: 'Uma classificação de resistência à água de 30 metros não significa que você pode mergulhar a 30 metros. Significa que o relógio suporta respingos e chuva leve. Este conversor traduz entre <strong>metros, pés, atmosferas (ATM) e bares</strong>, e informa o que cada classificação realmente permite.' },
    { type: 'title', text: 'A Verdade Sobre as Classificações de Resistência à Água', level: 3 },
    { type: 'paragraph', html: 'A resistência à água dos relógios é testada sob pressão estática em laboratório. As condições reais-mover o braço, mergulhar, mudanças de temperatura-criam pressão dinâmica muito mais elevada. Um relógio de 30m / 3 ATM é apenas resistente a respingos. Para nadar, precisa de pelo menos 100m / 10 ATM. Para mergulho autônomo, 200m / 20 ATM é o ponto de entrada padrão.' },
    { type: 'title', text: 'Porque a Resistência à Água se Degrada com o Tempo', level: 3 },
    { type: 'paragraph', html: 'As juntas de borracha e anéis O que vedam o seu relógio secam, racham e comprimem com o tempo. Calor, luz UV e produtos químicos aceleram este processo. Um relógio que antes era resistente à água até 100m pode tornar-se apenas resistente a respingos após 5 anos sem manutenção. Mande testar as vedações anualmente e substitua-as a cada 3 a 5 anos.' },
    { type: 'title', text: 'ISO 6425-O Padrão para Relógios de Mergulho', level: 3 },
    { type: 'paragraph', html: 'Para um relógio ser chamado de "relógio de mergulho," deve cumprir a norma ISO 6425: pelo menos 100m de resistência à água, um bisel unidirecional, marcações luminosas e coroa de rosca. Os relógios que cumprem esta norma são testados 25% acima da profundidade nominal. Um relógio com certificação ISO de 200m é testado a 250m.' },
  ],
  faq: [
    {
      question: 'Posso nadar com um relógio resistente à água de 30 metros?',
      answer: 'Não. Uma classificação de 30m / 3 ATM significa apenas resistência a respingos-lavar as mãos, chuva e suor. A natação cria pressão dinâmica que excede a pressão de teste estática. Para nadar, escolha pelo menos 100m / 10 ATM.',
    },
    {
      question: 'Qual é a diferença entre ATM, bar e metros?',
      answer: '1 ATM = 1 bar ≈ 10 metros de coluna de água estática. Na indústria relojoeira são essencialmente equivalentes. Um relógio de 10 ATM é o mesmo que um relógio de 10 bar e está classificado para aproximadamente 100 metros.',
    },
    {
      question: 'Com que frequência devo testar a resistência à água do meu relógio?',
      answer: 'Uma vez por ano, especialmente antes da exposição à água. As juntas e vedações desgastam-se. A cada 3-5 anos, todas as vedações devem ser substituídas durante uma revisão completa.',
    },
    {
      question: 'O que significa certificação ISO 6425?',
      answer: 'A ISO 6425 é a norma internacional para relógios de mergulho. Exige pelo menos 100m de resistência, um bisel unidirecional, marcações luminosas e testes 25% acima da profundidade nominal.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Insira a classificação',
      text: 'Digite o número de resistência à água do seu relógio e selecione a unidade (metros, pés, ATM ou bar).',
    },
    {
      name: 'Leia os equivalentes',
      text: 'O cartão mostra os valores convertidos nas quatro unidades simultaneamente.',
    },
    {
      name: 'Verifique a recomendação',
      text: 'O cartão destacado mostra quais atividades são seguras com a classificação do seu relógio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Posso nadar com um relógio resistente à água de 30 metros?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não. Uma classificação de 30m / 3 ATM significa apenas resistência a respingos-lavar as mãos, chuva e suor. Para nadar, escolha pelo menos 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual é a diferença entre ATM, bar e metros?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 metros de coluna de água estática. Na indústria relojoeira são essencialmente equivalentes.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Com que frequência devo testar a resistência à água do meu relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Uma vez por ano, especialmente antes da exposição à água. A cada 3-5 anos, todas as vedações devem ser substituídas durante uma revisão completa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que significa certificação ISO 6425?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A ISO 6425 exige pelo menos 100m de resistência, um bisel unidirecional, marcações luminosas e testes 25% acima da profundidade nominal.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Conversor de Resistência à Água de Relógios',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como converter classificações de resistência à água de relógios',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Insira a classificação',
          'text': 'Digite o número de resistência à água do seu relógio e selecione a unidade.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia os equivalentes',
          'text': 'O cartão mostra os valores convertidos nas quatro unidades simultaneamente.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Verifique a recomendação',
          'text': 'O cartão destacado mostra quais atividades são seguras com a classificação do seu relógio.',
        },
      ],
    },
  ],
};
