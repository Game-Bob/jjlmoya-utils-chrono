import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'conversor-taxa-batida',
  title: 'Conversor de Taxa de Batida: VPH para Hz e s/d',
  description: 'Converta vibrações por hora (VPH) para Hertz, ticks por segundo e calcule o impacto diário de um único tick perdido. Funciona com calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega e Zenith.',
  ui: {
    title: 'Conversor de Taxa de Batida',
    vphLabel: 'Movimento',
    selectMovement: 'Selecionar movimento',
    customMovement: 'Personalizado',
    customVph: 'Vibrações por hora',
    resultsTitle: 'Cálculos',
    frequency: 'Frequência',
    ticksPerSec: 'Ticks por segundo',
    lostTickImpact: 'Se perder 1 tick por hora',
    lostTickExplainer: 'Um tick perdido por hora significa cerca de 3 segundos perdidos por dia a 28.800 VPH. Taxas de batida mais baixas amplificam o impacto.',
    step1: 'Selecione o seu movimento ou insira um VPH personalizado.',
    step2: 'Leia a frequência em Hz, ticks por segundo e o impacto de um tick perdido.',
    tipTitle: 'Dica',
    tipContent: 'Taxas de batida mais altas (36.000 VPH) proporcionam um movimento mais suave do ponteiro dos segundos e melhor precisão, mas também mais desgaste no escape.',
  },
  seo: [
    { type: 'title', text: 'Conversor de Taxa de Batida - VPH para Hz e segundos por dia', level: 2 },
    { type: 'paragraph', html: 'Cada relógio mecânico bate a uma taxa específica - o número de vibrações que o seu volante faz por hora. Esse número determina a suavidade do movimento do ponteiro dos segundos e a precisão do relógio. Este conversor traduz <strong>VPH para Hz e ticks por segundo</strong> e mostra o impacto real de um único tick perdido.' },
    { type: 'title', text: 'O Que É Taxa de Batida?', level: 3 },
    { type: 'paragraph', html: 'A taxa de batida, medida em vibrações por hora (vph), é a frequência com que o volante de um relógio oscila. Uma taxa comum é 28.800 VPH - isso equivale a 4 Hz, ou 8 ticks por segundo. Taxas mais altas como 36.000 VPH (5 Hz) produzem um movimento mais suave e podem teoricamente melhorar a precisão ao reduzir o efeito de erros posicionais.' },
    { type: 'title', text: 'Por Que um Tick Perdido Importa', level: 3 },
    { type: 'paragraph', html: 'Se o escape de um relógio falhar ao fornecer um tick devido a atrito, magnetismo ou desgaste, esse tick perdido traduz-se diretamente em tempo perdido. A 28.800 VPH, um único tick perdido por hora acumula-se para cerca de <strong>3 segundos por dia</strong>. A 18.000 VPH, o mesmo erro custa quase 5 segundos por dia. Esta ferramenta ajuda a compreender a matemática por trás da regulação.' },
    { type: 'title', text: 'Taxas de Batida Comuns', level: 3 },
    { type: 'paragraph', html: 'Relógios de bolso vintage e primeiros automáticos funcionam frequentemente a 18.000 VPH (2,5 Hz). Muitos calibres Seiko e Miyota usam 21.600 VPH (3 Hz). O padrão moderno é 28.800 VPH (4 Hz), usado pela ETA, Sellita, Rolex e outros. Movimentos de alta batida como o Zenith El Primero funcionam a 36.000 VPH (5 Hz) para maior precisão.' },
  ],
  faq: [
    {
      question: 'Como converter VPH para Hz?',
      answer: 'Divida o VPH por 7.200. Um relógio batendo a 28.800 VPH funciona a 4 Hz (28.800 ÷ 7.200 = 4). A divisão por 7.200 considera que uma oscilação completa contém duas vibrações e que há 3.600 segundos numa hora.',
    },
    {
      question: 'O que uma taxa de batida mais alta significa para a precisão?',
      answer: 'Taxas de batida mais altas geralmente permitem maior precisão teórica porque o volante é menos afetado por perturbações posicionais. No entanto, também criam mais atrito e desgaste nas pedras de palheta e na roda de escape, exigindo melhor lubrificação e manutenção mais frequente.',
    },
    {
      question: 'Como um tick perdido afeta a precisão diária?',
      answer: 'Um tick perdido por hora traduz-se em 24 ticks perdidos por dia. O tempo perdido depende da sua taxa de batida: divida 86.400 pelo seu VPH. A 28.800 VPH são 3 segundos por dia. A 18.000 VPH são 4,8 segundos por dia.',
    },
    {
      question: 'Um relógio pode recuperar de um tick perdido?',
      answer: 'Não. Uma vez perdido um tick, o tempo está permanentemente perdido. O relógio não "recupera". É por isso que a saúde do escape - pedras limpas, lubrificação adequada e erro de batida correto - impacta diretamente a taxa diária.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecione o seu calibre',
      text: 'Escolha o seu movimento no menu suspenso. Cada predefinição inclui o VPH correto para esse calibre.',
    },
    {
      name: 'Leia os resultados',
      text: 'O cartão mostra a frequência em Hz, ticks por segundo e o impacto diário de um único tick perdido.',
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
            'text': 'Divida o VPH por 7.200. Um relógio batendo a 28.800 VPH funciona a 4 Hz. A divisão por 7.200 considera uma oscilação contendo duas vibrações e 3.600 segundos por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que uma taxa de batida mais alta significa para a precisão?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Taxas de batida mais altas permitem maior precisão teórica porque o volante é menos afetado por perturbações posicionais. No entanto, também criam mais atrito e desgaste.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Como um tick perdido afeta a precisão diária?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um tick perdido por hora traduz-se em 24 ticks perdidos por dia. Divida 86.400 pelo seu VPH para encontrar os segundos perdidos por dia.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Um relógio pode recuperar de um tick perdido?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não. Uma vez perdido um tick, o tempo está permanentemente perdido. O relógio não recupera.',
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
          'text': 'Escolha o seu movimento no menu suspenso. Cada predefinição inclui o VPH correto para esse calibre.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leia os resultados',
          'text': 'O cartão mostra a frequência em Hz, ticks por segundo e o impacto diário de um único tick perdido.',
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
