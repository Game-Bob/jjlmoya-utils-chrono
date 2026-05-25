import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimador-reserva-de-carga',
  title: 'Estimador de Reserva de Carga',
  description: 'Estime a reserva de carga restante do seu rel\u00f3gio com base nas voltas da coroa e horas de uso. Funciona com calibres populares ETA, Sellita, Miyota, Seiko e Rolex.',
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
    activityLow: 'Escrit\u00f3rio',
    activityMedium: 'Caminhar',
    activityHigh: 'Ativo',
    calculate: 'Calcular',
    reserveRemaining: 'Reserva Restante',
    hoursRemaining: 'Restante',
    chargePercent: 'Carga',
    resultLabel: 'Reserva Estimada',
    stopTimeLabel: 'Funciona at\u00e9',
    powerReserveHours: 'Reserva (h)',
    fullWindTurns: 'Voltas p/ carga total',
    step1: 'Selecione o calibre do seu rel\u00f3gio no menu suspenso.',
    step2: 'Insira as voltas da coroa e as horas de uso.',
    step3: 'Pressione Calcular para ver sua reserva.',
    tipTitle: 'Dica',
    tipContent: 'Movimentos de corda manual s\u00f3 carregam quando voc\u00ea gira a coroa. Movimentos autom\u00e1ticos tamb\u00e9m carregam enquanto usados.',
  },
  seo: [
    { type: 'title', text: 'Estimador de Reserva de Carga \u2014 Quanta reserva seu movimento ainda tem?', level: 2 },
    { type: 'paragraph', html: 'Quer saber quanta energia ainda resta no seu rel\u00f3gio mec\u00e2nico? Quer voc\u00ea tenha dado corda nesta manh\u00e3 ou usado o rel\u00f3gio o dia inteiro, este estimador informa o n\u00edvel aproximado de carga e as horas restantes para calibres populares como <strong>ETA, Sellita, Miyota, Seiko e Rolex</strong>.' },
    { type: 'title', text: 'Como a reserva de carga funciona em um rel\u00f3gio mec\u00e2nico', level: 3 },
    { type: 'paragraph', html: 'A reserva de carga \u00e9 a quantidade de energia armazenada na mola real. Ao girar a coroa, voc\u00ea tensiona a mola real, armazenando energia potencial. Um rotor autom\u00e1tico tamb\u00e9m tensiona a mola enquanto voc\u00ea usa o rel\u00f3gio. A energia \u00e9 drenada a uma taxa constante \u2014 geralmente 2\u20133% por hora \u2014 at\u00e9 o rel\u00f3gio parar.' },
    { type: 'title', text: 'Corda manual vs. Carga por rotor', level: 3 },
    { type: 'paragraph', html: 'A corda manual pela coroa \u00e9 a forma mais eficiente de carregar um rel\u00f3gio \u2014 cada volta completa adiciona uma quantidade previs\u00edvel de energia, normalmente cerca de 2,5% da reserva total. Usar o rel\u00f3gio carrega mais lentamente e depende do seu n\u00edvel de atividade: um trabalhador de escrit\u00f3rio pode carregar 4\u20136% por hora, enquanto uma pessoa ativa pode carregar 8\u201310%. Este estimador usa uma m\u00e9dia conservadora.' },
    { type: 'title', text: 'Por que estimar a reserva de carga \u00e9 importante', level: 3 },
    { type: 'paragraph', html: 'Conhecer o n\u00edvel de carga do seu rel\u00f3gio ajuda a evitar paradas inesperadas. Um rel\u00f3gio que para durante a noite pode precisar de mais corda antes de dormir, ou n\u00e3o estar recebendo uso suficiente. Use esta ferramenta para entender seus h\u00e1bitos de carga e manter seu autom\u00e1tico funcionando.' },
  ],
  faq: [
    {
      question: 'Quanto uma volta da coroa carrega o rel\u00f3gio?',
      answer: 'Depende do calibre. A maioria dos calibres autom\u00e1ticos atinge a carga total em 30\u201340 voltas, ent\u00e3o cada volta adiciona cerca de 2,5\u20133,3% da reserva total. Movimentos de corda manual como o Unitas 6498 tamb\u00e9m precisam de cerca de 35 voltas para uma carga completa.',
    },
    {
      question: 'Usar o rel\u00f3gio carrega tanto quanto dar corda?',
      answer: 'Usar carrega mais lentamente e de forma vari\u00e1vel. No escrit\u00f3rio, voc\u00ea pode carregar 4\u20136% por hora pelo rotor. Durante movimento ativo (caminhar, esportes), pode chegar a 8\u201310% por hora. Dar corda manualmente \u00e9 mais r\u00e1pido e previs\u00edvel.',
    },
    {
      question: 'Quanta reserva um rel\u00f3gio perde por hora?',
      answer: 'O consumo \u00e9 constante: divida 100 pela reserva de carga em horas. Um calibre de 38 horas perde cerca de 2,6% por hora, um de 42 horas perde 2,4% e um de 70 horas perde cerca de 1,4% por hora.',
    },
    {
      question: 'Posso dar corda demais no meu rel\u00f3gio?',
      answer: 'Movimentos autom\u00e1ticos modernos possuem uma embreagem deslizante que evita o excesso de carga. Assim que a mola real est\u00e1 completamente tensionada, as voltas adicionais simplesmente patinam. Movimentos de corda manual tamb\u00e9m t\u00eam um mecanismo de parada, mas for\u00e7ar al\u00e9m do limite pode danificar a mola real.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione seu calibre',
      text: 'Escolha o calibre do seu rel\u00f3gio no menu suspenso. Se n\u00e3o estiver listado, selecione Personalizado e insira a reserva de carga e as voltas para carga total.',
    },
    {
      name: 'Insira seus dados',
      text: 'Digite quantas voltas da coroa voc\u00ea deu ou quantas horas usou o rel\u00f3gio hoje. Voc\u00ea pode preencher ambos para uma estimativa combinada.',
    },
    {
      name: 'Calcular',
      text: 'Pressione o bot\u00e3o Calcular. O resultado mostra a porcentagem de carga estimada e as horas restantes de reserva de carga.',
    },
    {
      name: 'Ajuste seus h\u00e1bitos',
      text: 'Use os resultados para decidir se precisa de mais corda antes de dormir ou de mais tempo de uso durante o dia para manter o rel\u00f3gio funcionando.',
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
