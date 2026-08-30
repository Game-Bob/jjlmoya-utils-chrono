import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimador-reserva-de-carga',
  title: 'Estimador de Reserva de Carga',
  description: 'Estime a reserva de carga restante do seu relógio com base nas voltas da coroa e horas de uso. Funciona com calibres populares ETA, Sellita, Miyota, Seiko e Rolex.',
  ui: {
    title: 'Estimador de Reserva de Carga',
    movementLabel: 'Calibre',
    selectMovement: 'Selecionar calibre',
    customMovement: 'Personalizado',
    turnsLabel: 'Voltas da Coroa',
    hoursLabel: 'Tempo de Uso',
    turnsInput: 'Voltas',
    hoursInput: 'Horas',
    activityLabel: 'Atividade',
    activityLow: 'Escritório',
    activityMedium: 'Caminhar',
    activityHigh: 'Ativo',
    calculate: 'Calcular',
    reserveRemaining: 'Reserva Restante',
    hoursRemaining: 'Restante',
    chargePercent: 'Carga',
    resultLabel: 'Reserva Estimada',
    stopTimeLabel: 'Funciona até',
    powerReserveHours: 'Reserva (h)',
    fullWindTurns: 'Voltas p/ carga total',
    step1: 'Selecione o calibre do seu relógio no menu suspenso.',
    step2: 'Insira as voltas da coroa e as horas de uso.',
    step3: 'Pressione Calcular para ver sua reserva.',
    tipTitle: 'Dica',
    tipContent: 'Movimentos de corda manual só carregam quando você gira a coroa. Movimentos automáticos também carregam enquanto usados.',
  },
  seo: [
    { type: 'title', text: 'Estimador de Reserva de Carga - Quanta reserva seu movimento ainda tem?', level: 2 },
    { type: 'paragraph', html: 'Quer saber quanta energia ainda resta no seu relógio mecânico? Quer você tenha dado corda nesta manhã ou usado o relógio o dia inteiro, este estimador informa o nível aproximado de carga e as horas restantes para calibres populares como <strong>ETA, Sellita, Miyota, Seiko e Rolex</strong>.' },
    { type: 'title', text: 'Como a reserva de carga funciona em um relógio mecânico', level: 3 },
    { type: 'paragraph', html: 'A reserva de carga é a quantidade de energia armazenada na mola real. Ao girar a coroa, você tensiona a mola real, armazenando energia potencial. Um rotor automático também tensiona a mola enquanto você usa o relógio. A energia é drenada a uma taxa constante - geralmente 2-3% por hora - até o relógio parar.' },
    { type: 'title', text: 'Corda manual vs. Carga por rotor', level: 3 },
    { type: 'paragraph', html: 'A corda manual pela coroa é a forma mais eficiente de carregar um relógio - cada volta completa adiciona uma quantidade previsível de energia, normalmente cerca de 2,5% da reserva total. Usar o relógio carrega mais lentamente e depende do seu nível de atividade: um trabalhador de escritório pode carregar 4-6% por hora, enquanto uma pessoa ativa pode carregar 8-10%. Este estimador usa uma média conservadora.' },
    { type: 'title', text: 'Por que estimar a reserva de carga é importante', level: 3 },
    { type: 'paragraph', html: 'Conhecer o nível de carga do seu relógio ajuda a evitar paradas inesperadas. Um relógio que para durante a noite pode precisar de mais corda antes de dormir, ou não estar recebendo uso suficiente. Use esta ferramenta para entender seus hábitos de carga e manter seu automático funcionando.' },
  ],
  faq: [
    {
      question: 'Quanto uma volta da coroa carrega o relógio?',
      answer: 'Depende do calibre. A maioria dos calibres automáticos atinge a carga total em 30-40 voltas, então cada volta adiciona cerca de 2,5-3,3% da reserva total. Movimentos de corda manual como o Unitas 6498 também precisam de cerca de 35 voltas para uma carga completa.',
    },
    {
      question: 'Usar o relógio carrega tanto quanto dar corda?',
      answer: 'Usar carrega mais lentamente e de forma variável. No escritório, você pode carregar 4-6% por hora pelo rotor. Durante movimento ativo (caminhar, esportes), pode chegar a 8-10% por hora. Dar corda manualmente é mais rápido e previsível.',
    },
    {
      question: 'Quanta reserva um relógio perde por hora?',
      answer: 'O consumo é constante: divida 100 pela reserva de carga em horas. Um calibre de 38 horas perde cerca de 2,6% por hora, um de 42 horas perde 2,4% e um de 70 horas perde cerca de 1,4% por hora.',
    },
    {
      question: 'Posso dar corda demais no meu relógio?',
      answer: 'Movimentos automáticos modernos possuem uma embreagem deslizante que evita o excesso de carga. Assim que a mola real está completamente tensionada, as voltas adicionais simplesmente patinam. Movimentos de corda manual também têm um mecanismo de parada, mas forçar além do limite pode danificar a mola real.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione seu calibre',
      text: 'Escolha o calibre do seu relógio no menu suspenso. Se não estiver listado, selecione Personalizado e insira a reserva de carga e as voltas para carga total.',
    },
    {
      name: 'Insira seus dados',
      text: 'Digite quantas voltas da coroa você deu ou quantas horas usou o relógio hoje. Você pode preencher ambos para uma estimativa combinada.',
    },
    {
      name: 'Calcular',
      text: 'Pressione o botão Calcular. O resultado mostra a porcentagem de carga estimada e as horas restantes de reserva de carga.',
    },
    {
      name: 'Ajuste seus hábitos',
      text: 'Use os resultados para decidir se precisa de mais corda antes de dormir ou de mais tempo de uso durante o dia para manter o relógio funcionando.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto uma volta da coroa carrega o relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Depende do calibre. A maioria dos calibres automáticos atinge a carga total em 30-40 voltas, então cada volta adiciona cerca de 2,5-3,3% da reserva total. Movimentos de corda manual como o Unitas 6498 também precisam de cerca de 35 voltas para uma carga completa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Usar o relógio carrega tanto quanto dar corda?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usar carrega mais lentamente e de forma variável. No escritório, você pode carregar 4-6% por hora pelo rotor. Durante movimento ativo pode chegar a 8-10% por hora. Dar corda manualmente é mais rápido e previsível.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quanta reserva um relógio perde por hora?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O consumo é constante: divida 100 pela reserva de carga em horas. Um calibre de 38 horas perde cerca de 2,6% por hora, um de 42 horas perde 2,4% e um de 70 horas perde cerca de 1,4% por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso dar corda demais no meu relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Movimentos automáticos modernos possuem uma embreagem deslizante que evita o excesso de carga. Assim que a mola real está completamente tensionada, as voltas adicionais simplesmente patinam.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Estimador de Reserva de Carga',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como estimar a reserva de carga do seu relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecione seu calibre',
          'text': 'Escolha o calibre do seu relógio no menu suspenso. Se não estiver listado, selecione Personalizado e insira a reserva de carga e as voltas para carga total.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Insira seus dados',
          'text': 'Digite quantas voltas da coroa você deu ou quantas horas usou o relógio hoje. Você pode preencher ambos para uma estimativa combinada.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcular',
          'text': 'Pressione o botão Calcular. O resultado mostra a porcentagem de carga estimada e as horas restantes de reserva de carga.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajuste seus hábitos',
          'text': 'Use os resultados para decidir se precisa de mais corda antes de dormir ou de mais tempo de uso durante o dia para manter o relógio funcionando.',
        },
      ],
    },
  ],
};
