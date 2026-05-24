import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'convertidor-ritmo-pulsacion',
  title: 'Conversor de Ritmo de Pulsaci\u00f3n \u2014 VPH a Hz y s/d',
  description: 'Convierta vibraciones por hora (VPH) a Hertz, ticks por segundo y calcule el impacto diario de un solo tick perdido. Funciona con calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega y Zenith.',
  ui: {
    title: 'Conversor de Ritmo de Pulsaci\u00f3n',
    vphLabel: 'Movimiento',
    selectMovement: 'Seleccionar movimiento',
    customMovement: 'Personalizado',
    customVph: 'Vibraciones por hora',
    resultsTitle: 'C\u00e1lculos',
    frequency: 'Frecuencia',
    ticksPerSec: 'Ticks por segundo',
    lostTickImpact: 'Si pierde 1 tick por hora',
    lostTickExplainer: 'Un tick perdido por hora equivale a ~3 segundos perdidos al d\u00eda a 28.800 VPH. Las frecuencias m\u00e1s bajas amplifican el impacto.',
    step1: 'Seleccione su movimiento o introduzca un VPH personalizado.',
    step2: 'Lea la frecuencia en Hz, los ticks por segundo y el impacto de un tick perdido.',
    tipTitle: 'Consejo',
    tipContent: 'Las frecuencias m\u00e1s altas (36.000 VPH) proporcionan un barrido m\u00e1s suave de la aguja y mejor precisi\u00f3n, pero tambi\u00e9n mayor desgaste en el escape.',
  },
  seo: [
    { type: 'title', text: 'Conversor de Ritmo de Pulsaci\u00f3n \u2014 VPH a Hz y segundos por d\u00eda', level: 2 },
    { type: 'paragraph', html: 'Cada reloj mec\u00e1nico late a un ritmo espec\u00edfico \u2014 el n\u00famero de vibraciones que su volante realiza por hora. Ese n\u00famero determina la suavidad del barrido del segundero y la precisi\u00f3n del reloj. Este conversor traduce <strong>VPH a Hz y ticks por segundo</strong>, y muestra el impacto real de un solo tick perdido.' },
    { type: 'title', text: '\u00bfQu\u00e9 es el ritmo de pulsaci\u00f3n?', level: 3 },
    { type: 'paragraph', html: 'El ritmo de pulsaci\u00f3n, medido en vibraciones por hora (vph), es la frecuencia a la que oscila el volante de un reloj. Un ritmo com\u00fan es 28.800 VPH \u2014 eso son 4 Hz, u 8 ticks por segundo. Ritmos m\u00e1s altos como 36.000 VPH (5 Hz) producen un movimiento m\u00e1s suave y pueden mejorar te\u00f3ricamente la precisi\u00f3n al reducir el efecto de los errores posicionales.' },
    { type: 'title', text: 'Por qu\u00e9 importa un tick perdido', level: 3 },
    { type: 'paragraph', html: 'Si el escape de un reloj no entrega un tick debido a fricci\u00f3n, magnetismo o desgaste, ese tick perdido se traduce directamente en tiempo perdido. A 28.800 VPH, un solo tick perdido por hora suma aproximadamente <strong>3 segundos por d\u00eda</strong>. A 18.000 VPH, el mismo error cuesta casi 5 segundos por d\u00eda. Esta herramienta le ayuda a entender las matem\u00e1ticas detr\u00e1s de la regulaci\u00f3n.' },
    { type: 'title', text: 'Ritmos de pulsaci\u00f3n comunes', level: 3 },
    { type: 'paragraph', html: 'Los relojes de bolsillo vintage y los autom\u00e1ticos antiguos suelen funcionar a 18.000 VPH (2,5 Hz). Muchos calibres Seiko y Miyota usan 21.600 VPH (3 Hz). El est\u00e1ndar moderno es 28.800 VPH (4 Hz), usado por ETA, Sellita, Rolex y otros. Los movimientos de alta frecuencia como el Zenith El Primero funcionan a 36.000 VPH (5 Hz) para mayor precisi\u00f3n.' },
  ],
  faq: [
    {
      question: '\u00bfC\u00f3mo se convierte VPH a Hz?',
      answer: 'Divida el VPH entre 7.200. Un reloj que late a 28.800 VPH funciona a 4 Hz (28.800 \u00f7 7.200 = 4). La divisi\u00f3n entre 7.200 considera que una oscilaci\u00f3n completa contiene dos vibraciones y que hay 3.600 segundos en una hora.',
    },
    {
      question: '\u00bfQu\u00e9 significa un ritmo m\u00e1s alto para la precisi\u00f3n?',
      answer: 'Los ritmos m\u00e1s altos generalmente permiten una mayor precisi\u00f3n te\u00f3rica porque el volante se ve menos afectado por perturbaciones posicionales. Sin embargo, tambi\u00e9n generan m\u00e1s fricci\u00f3n y desgaste en las piedras de paleta y la rueda de escape, lo que requiere mejor lubricaci\u00f3n y un servicio m\u00e1s frecuente.',
    },
    {
      question: '\u00bfC\u00f3mo afecta un tick perdido a la precisi\u00f3n diaria?',
      answer: 'Un tick perdido por hora se traduce en 24 ticks perdidos al d\u00eda. El tiempo perdido depende de su ritmo: divida 86.400 entre su VPH. A 28.800 VPH son 3 segundos por d\u00eda. A 18.000 VPH son 4,8 segundos por d\u00eda.',
    },
    {
      question: '\u00bfPuede un reloj recuperarse de un tick perdido?',
      answer: 'No. Una vez que se pierde un tick, el tiempo se pierde permanentemente. El reloj no se "pone al d\u00eda". Por eso la salud del escape \u2014 piedras limpias, lubricaci\u00f3n adecuada y error de ritmo correcto \u2014 impacta directamente la tasa diaria.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleccione su calibre',
      text: 'Elija su movimiento en el men\u00fa desplegable. Cada preajuste incluye el VPH correcto para ese calibre.',
    },
    {
      name: 'Lea los resultados',
      text: 'La tarjeta muestra la frecuencia en Hz, los ticks por segundo y el impacto diario de un solo tick perdido.',
    },
    {
      name: 'Pruebe un VPH personalizado',
      text: 'Seleccione "Personalizado" para introducir cualquier VPH para movimientos vintage o inusuales.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '\u00bfC\u00f3mo se convierte VPH a Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divida el VPH entre 7.200. Un reloj que late a 28.800 VPH funciona a 4 Hz. La divisi\u00f3n entre 7.200 considera que una oscilaci\u00f3n contiene dos vibraciones y 3.600 segundos por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': '\u00bfQu\u00e9 significa un ritmo m\u00e1s alto para la precisi\u00f3n?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Los ritmos m\u00e1s altos permiten una mayor precisi\u00f3n te\u00f3rica porque el volante se ve menos afectado por perturbaciones posicionales. Sin embargo, tambi\u00e9n generan m\u00e1s fricci\u00f3n y desgaste.',
          },
        },
        {
          '@type': 'Question',
          'name': '\u00bfC\u00f3mo afecta un tick perdido a la precisi\u00f3n diaria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un tick perdido por hora se traduce en 24 ticks perdidos al d\u00eda. Divida 86.400 entre su VPH para hallar los segundos por d\u00eda perdidos.',
          },
        },
        {
          '@type': 'Question',
          'name': '\u00bfPuede un reloj recuperarse de un tick perdido?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Una vez que se pierde un tick, el tiempo se pierde permanentemente. El reloj no se pone al d\u00eda.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Conversor de Ritmo de Pulsaci\u00f3n',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'C\u00f3mo convertir VPH a Hz y calcular el impacto de un tick perdido',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleccione su calibre',
          'text': 'Elija su movimiento en el men\u00fa desplegable. Cada preajuste incluye el VPH correcto para ese calibre.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lea los resultados',
          'text': 'La tarjeta muestra la frecuencia en Hz, los ticks por segundo y el impacto diario de un solo tick perdido.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pruebe un VPH personalizado',
          'text': 'Seleccione Personalizado para introducir cualquier VPH para movimientos vintage o inusuales.',
        },
      ],
    },
  ],
};
