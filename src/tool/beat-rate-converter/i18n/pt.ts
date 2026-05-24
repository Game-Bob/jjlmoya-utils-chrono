import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'conversor-taxa-batida',
  title: 'Conversor de Taxa de Batida \u2014 VPH para Hz e s/d',
  description: 'Converta vibra\u00e7\u00f5es por hora (VPH) para Hertz, ticks por segundo e calcule o impacto di\u00e1rio de um \u00fanico tick perdido. Funciona com calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega e Zenith.',
  ui: {
    title: 'Conversor de Taxa de Batida',
    vphLabel: 'Movimento',
    selectMovement: 'Selecionar movimento',
    customMovement: 'Personalizado',
    customVph: 'Vibra\u00e7\u00f5es por hora',
    resultsTitle: 'C\u00e1lculos',
    frequency: 'Frequ\u00eancia',
    ticksPerSec: 'Ticks por segundo',
    lostTickImpact: 'Se perder 1 tick por hora',
    lostTickExplainer: 'Um tick perdido por hora significa cerca de 3 segundos perdidos por dia a 28.800 VPH. Taxas de batida mais baixas amplificam o impacto.',
    step1: 'Selecione o seu movimento ou insira um VPH personalizado.',
    step2: 'Leia a frequ\u00eancia em Hz, ticks por segundo e o impacto de um tick perdido.',
    tipTitle: 'Dica',
    tipContent: 'Taxas de batida mais altas (36.000 VPH) proporcionam um movimento mais suave do ponteiro dos segundos e melhor precis\u00e3o, mas tamb\u00e9m mais desgaste no escape.',
  },
  seo: [
    { type: 'title', text: 'Conversor de Taxa de Batida \u2014 VPH para Hz e segundos por dia', level: 2 },
    { type: 'paragraph', html: 'Cada rel\u00f3gio mec\u00e2nico bate a uma taxa espec\u00edfica \u2014 o n\u00famero de vibra\u00e7\u00f5es que o seu volante faz por hora. Esse n\u00famero determina a suavidade do movimento do ponteiro dos segundos e a precis\u00e3o do rel\u00f3gio. Este conversor traduz <strong>VPH para Hz e ticks por segundo</strong> e mostra o impacto real de um \u00fanico tick perdido.' },
    { type: 'title', text: 'O Que \u00c9 Taxa de Batida?', level: 3 },
    { type: 'paragraph', html: 'A taxa de batida, medida em vibra\u00e7\u00f5es por hora (vph), \u00e9 a frequ\u00eancia com que o volante de um rel\u00f3gio oscila. Uma taxa comum \u00e9 28.800 VPH \u2014 isso equivale a 4 Hz, ou 8 ticks por segundo. Taxas mais altas como 36.000 VPH (5 Hz) produzem um movimento mais suave e podem teoricamente melhorar a precis\u00e3o ao reduzir o efeito de erros posicionais.' },
    { type: 'title', text: 'Por Que um Tick Perdido Importa', level: 3 },
    { type: 'paragraph', html: 'Se o escape de um rel\u00f3gio falhar ao fornecer um tick devido a atrito, magnetismo ou desgaste, esse tick perdido traduz-se diretamente em tempo perdido. A 28.800 VPH, um \u00fanico tick perdido por hora acumula-se para cerca de <strong>3 segundos por dia</strong>. A 18.000 VPH, o mesmo erro custa quase 5 segundos por dia. Esta ferramenta ajuda a compreender a matem\u00e1tica por tr\u00e1s da regula\u00e7\u00e3o.' },
    { type: 'title', text: 'Taxas de Batida Comuns', level: 3 },
    { type: 'paragraph', html: 'Rel\u00f3gios de bolso vintage e primeiros autom\u00e1ticos funcionam frequentemente a 18.000 VPH (2,5 Hz). Muitos calibres Seiko e Miyota usam 21.600 VPH (3 Hz). O padr\u00e3o moderno \u00e9 28.800 VPH (4 Hz), usado pela ETA, Sellita, Rolex e outros. Movimentos de alta batida como o Zenith El Primero funcionam a 36.000 VPH (5 Hz) para maior precis\u00e3o.' },
  ],
  faq: [
    {
      question: 'Como converter VPH para Hz?',
      answer: 'Divida o VPH por 7.200. Um rel\u00f3gio batendo a 28.800 VPH funciona a 4 Hz (28.800 \u00f7 7.200 = 4). A divis\u00e3o por 7.200 considera que uma oscila\u00e7\u00e3o completa cont\u00e9m duas vibra\u00e7\u00f5es e que h\u00e1 3.600 segundos numa hora.',
    },
    {
      question: 'O que uma taxa de batida mais alta significa para a precis\u00e3o?',
      answer: 'Taxas de batida mais altas geralmente permitem maior precis\u00e3o te\u00f3rica porque o volante \u00e9 menos afetado por perturba\u00e7\u00f5es posicionais. No entanto, tamb\u00e9m criam mais atrito e desgaste nas pedras de palheta e na roda de escape, exigindo melhor lubrifica\u00e7\u00e3o e manuten\u00e7\u00e3o mais frequente.',
    },
    {
      question: 'Como um tick perdido afeta a precis\u00e3o di\u00e1ria?',
      answer: 'Um tick perdido por hora traduz-se em 24 ticks perdidos por dia. O tempo perdido depende da sua taxa de batida: divida 86.400 pelo seu VPH. A 28.800 VPH s\u00e3o 3 segundos por dia. A 18.000 VPH s\u00e3o 4,8 segundos por dia.',
    },
    {
      question: 'Um rel\u00f3gio pode recuperar de um tick perdido?',
      answer: 'N\u00e3o. Uma vez perdido um tick, o tempo est\u00e1 permanentemente perdido. O rel\u00f3gio n\u00e3o "recupera". \u00c9 por isso que a sa\u00fade do escape \u2014 pedras limpas, lubrifica\u00e7\u00e3o adequada e erro de batida correto \u2014 impacta diretamente a taxa di\u00e1ria.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione o seu calibre',
      text: 'Escolha o seu movimento no menu suspenso. Cada predefini\u00e7\u00e3o inclui o VPH correto para esse calibre.',
    },
    {
      name: 'Leia os resultados',
      text: 'O cart\u00e3o mostra a frequ\u00eancia em Hz, ticks por segundo e o impacto di\u00e1rio de um \u00fanico tick perdido.',
    },
    {
      name: 'Experimente um VPH personalizado',
      text: 'Selecione "Personalizado" para inserir qualquer valor VPH para movimentos vintage ou incomuns.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Como converter VPH para Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divida o VPH por 7.200. Um rel\u00f3gio batendo a 28.800 VPH funciona a 4 Hz. A divis\u00e3o por 7.200 considera uma oscila\u00e7\u00e3o contendo duas vibra\u00e7\u00f5es e 3.600 segundos por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que uma taxa de batida mais alta significa para a precis\u00e3o?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Taxas de batida mais altas permitem maior precis\u00e3o te\u00f3rica porque o volante \u00e9 menos afetado por perturba\u00e7\u00f5es posicionais. No entanto, tamb\u00e9m criam mais atrito e desgaste.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Como um tick perdido afeta a precis\u00e3o di\u00e1ria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um tick perdido por hora traduz-se em 24 ticks perdidos por dia. Divida 86.400 pelo seu VPH para encontrar os segundos perdidos por dia.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Um rel\u00f3gio pode recuperar de um tick perdido?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'N\u00e3o. Uma vez perdido um tick, o tempo est\u00e1 permanentemente perdido. O rel\u00f3gio n\u00e3o recupera.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Conversor de Taxa de Batida',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como converter VPH para Hz e calcular o impacto de um tick perdido',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecione o seu calibre',
          'text': 'Escolha o seu movimento no menu suspenso. Cada predefini\u00e7\u00e3o inclui o VPH correto para esse calibre.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia os resultados',
          'text': 'O cart\u00e3o mostra a frequ\u00eancia em Hz, ticks por segundo e o impacto di\u00e1rio de um \u00fanico tick perdido.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Experimente um VPH personalizado',
          'text': 'Selecione Personalizado para inserir qualquer valor VPH para movimentos vintage ou incomuns.',
        },
      ],
    },
  ],
};
