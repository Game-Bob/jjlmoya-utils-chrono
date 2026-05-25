import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'temporizador-desmagnetizacao',
  title: 'Temporizador de Desmagnetização de Relógios',
  description: 'Um temporizador de contagem regressiva preciso com sinais sonoros para desmagnetização caseira de relógios. Obtenha a duração de pressão exata para sua bobina desmagnetizadora.',
  ui: {
    title: 'Configurações do Temporizador',
    durationLabel: 'Duração do Pulso',
    duration1s: '1 Segundo',
    duration2s: '2 Segundos',
    duration3s: '3 Segundos',
    customLabel: 'Personalizado',
    startButton: 'Iniciar',
    stopButton: 'Parar',
    resetButton: 'Redefinir',
    pressPhase: 'Aperte o botão do desmagnetizador agora!',
    holdPhase: 'Segure o botão...',
    releasePhase: 'Solte agora!',
    completePhase: 'Pronto! Afaste o relógio.',
    ready: 'Pronto',
    seconds: 's',
    instructions: 'Como Desmagnetizar',
    step1: 'Coloque o relógio na plataforma do desmagnetizador.',
    step2: 'Pressione Iniciar e segure o botão do desmagnetizador pela duração definida.',
    step3: 'Solte o botão e afaste lentamente o relógio.',
    step4: 'Repita 2–3 vezes se necessário, girando o relógio a cada vez.',
    tipTitle: 'Dica',
    tipContent: 'Mantenha o relógio a pelo menos 1 metro de distância do desmagnetizador ligado para evitar remagnetização.',
  },
  seo: [
    { type: 'title', text: 'Temporizador de Desmagnetização-mpo Preciso para Desmagnetização Caseira', level: 2 },
    { type: 'paragraph', html: 'Desmagnetizar um relógio exige um tempo exato de pressionamento do botão. A maioria dos desmagnetizadores caseiros funciona gerando um campo magnético alternado decrescente, e o pulso ideal dura entre <strong>1 e 3 segundos</strong>. Segurar por pouco tempo e o campo não neutraliza a magnetização; segurar por muito tempo e você corre o risco de saturar o movimento.' },
    { type: 'title', text: 'Por que o tempo é importante na desmagnetização', level: 3 },
    { type: 'paragraph', html: 'Ao pressionar o botão do desmagnetizador, um campo magnético alternado é criado dentro da bobina. O campo oscila na frequência da rede (50/60 Hz) e decai quando você solta. O objetivo é expor o relógio a este campo decrescente <strong>pelo tempo certo</strong> para randomizar os domínios magnéticos da mola espiral e outros componentes de aço. Um pulso de 1 a 3 segundos é o ponto ideal para a maioria dos movimentos.' },
    { type: 'title', text: 'Como funciona um desmagnetizador', level: 3 },
    { type: 'paragraph', html: 'Um desmagnetizador é essencialmente uma bobina de fio que produz um forte campo magnético alternado quando energizada. Colocar um relógio magnetizado neste campo faz com que seus domínios magnéticos internos invertam rapidamente. Quando o campo é removido abruptamente (ao soltar o botão), os domínios se estabilizam em um padrão aleatório, cancelando efetivamente a magnetização líquida.' },
    { type: 'title', text: 'Sinais de que seu relógio precisa de desmagnetização', level: 3 },
    { type: 'paragraph', html: 'Sintomas comuns de um relógio magnetizado incluem: adiantar vários minutos por dia, cronometragem inconsistente entre posições, um tique-taque audivelmente mais rápido e, em casos extremos, o relógio parar completamente. Se seu relógio automático de repente começar a adiantar, a magnetização geralmente é a causa e a desmagnetização é uma solução simples.' },
  ],
  faq: [
    {
      question: 'Quanto tempo devo pressionar o botão do desmagnetizador?',
      answer: '1 a 3 segundos é a duração de pulso recomendada. Comece com 1 segundo e aumente se necessário. Pulsos muito longos podem superaquecer a bobina e não melhoram os resultados.',
    },
    {
      question: 'Posso desmagnetizar um relógio mais de uma vez?',
      answer: 'Sim. Repita o processo 2 a 3 vezes, girando o relógio 90 graus a cada vez. Isso garante que todos os eixos sejam expostos ao campo alternado. Não há risco de desmagnetização excessiva.',
    },
    {
      question: 'A desmagnetização funciona em relógios de quartzo?',
      answer: 'Relógios de quartzo raramente são afetados pela magnetização, pois contêm poucos componentes ferromagnéticos. No entanto, o motor de passo em alguns movimentos de quartzo pode magnetizar-se, causando movimento errático dos ponteiros. A desmagnetização é segura para relógios de quartzo.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Definir duração',
      text: 'Escolha 1, 2 ou 3 segundos dependendo da gravidade da magnetização.',
    },
    {
      name: 'Posicionar o relógio',
      text: 'Coloque o relógio plano na plataforma do desmagnetizador, centralizado sobre a bobina.',
    },
    {
      name: 'Pressionar e segurar',
      text: 'Pressione o botão Iniciar simultaneamente com o botão do desmagnetizador e segure pela duração definida.',
    },
    {
      name: 'Soltar e afastar',
      text: 'Solte o botão e afaste lentamente o relógio pelo menos 1 metro antes de desligar o desmagnetizador.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto tempo devo pressionar o botão do desmagnetizador?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 a 3 segundos é a duração de pulso recomendada. Comece com 1 segundo e aumente se necessário. Pulsos muito longos podem superaquecer a bobina e não melhoram os resultados.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso desmagnetizar um relógio mais de uma vez?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. Repita o processo 2 a 3 vezes, girando o relógio 90 graus a cada vez. Isso garante que todos os eixos sejam expostos ao campo alternado. Não há risco de desmagnetização excessiva.',
          },
        },
        {
          '@type': 'Question',
          'name': 'A desmagnetização funciona em relógios de quartzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Relógios de quartzo raramente são afetados pela magnetização, pois contêm poucos componentes ferromagnéticos. No entanto, o motor de passo em alguns movimentos de quartzo pode magnetizar-se, causando movimento errático dos ponteiros. A desmagnetização é segura para relógios de quartzo.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Temporizador de Desmagnetização de Relógios',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como desmagnetizar um relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Definir duração',
          'text': 'Escolha 1, 2 ou 3 segundos dependendo da gravidade da magnetização.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Posicionar o relógio',
          'text': 'Coloque o relógio plano na plataforma do desmagnetizador, centralizado sobre a bobina.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pressionar e segurar',
          'text': 'Pressione o botão Iniciar simultaneamente com o botão do desmagnetizador e segure pela duração definida.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Soltar e afastar',
          'text': 'Solte o botão e afaste lentamente o relógio pelo menos 1 metro antes de desligar o desmagnetizador.',
        },
      ],
    },
  ],
};
