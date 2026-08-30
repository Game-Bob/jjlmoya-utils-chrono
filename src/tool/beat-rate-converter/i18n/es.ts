import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'convertidor-ritmo-pulsacion',
  title: 'Conversor de Ritmo de Pulsación: VPH a Hz y s/d',
  description: 'Convierta vibraciones por hora (VPH) a Hertz, ticks por segundo y calcule el impacto diario de un solo tick perdido. Funciona con calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega y Zenith.',
  ui: {
    title: 'Conversor de Ritmo de Pulsación',
    vphLabel: 'Movimiento',
    selectMovement: 'Seleccionar movimiento',
    customMovement: 'Personalizado',
    customVph: 'Vibraciones por hora',
    resultsTitle: 'Cálculos',
    frequency: 'Frecuencia',
    ticksPerSec: 'Ticks por segundo',
    lostTickImpact: 'Si pierde 1 tick por hora',
    lostTickExplainer: 'Un tick perdido por hora equivale a ~3 segundos perdidos al día a 28.800 VPH. Las frecuencias más bajas amplifican el impacto.',
    step1: 'Seleccione su movimiento o introduzca un VPH personalizado.',
    step2: 'Lea la frecuencia en Hz, los ticks por segundo y el impacto de un tick perdido.',
    tipTitle: 'Consejo',
    tipContent: 'Las frecuencias más altas (36.000 VPH) proporcionan un barrido más suave de la aguja y mejor precisión, pero también mayor desgaste en el escape.',
  },
  seo: [
    { type: 'title', text: 'Conversor de Ritmo de Pulsación - VPH a Hz y segundos por día', level: 2 },
    { type: 'paragraph', html: 'Cada reloj mecánico late a un ritmo específico - el número de vibraciones que su volante realiza por hora. Ese número determina la suavidad del barrido del segundero y la precisión del reloj. Este conversor traduce <strong>VPH a Hz y ticks por segundo</strong>, y muestra el impacto real de un solo tick perdido.' },
    { type: 'title', text: '¿Qué es el ritmo de pulsación?', level: 3 },
    { type: 'paragraph', html: 'El ritmo de pulsación, medido en vibraciones por hora (vph), es la frecuencia a la que oscila el volante de un reloj. Un ritmo común es 28.800 VPH - eso son 4 Hz, u 8 ticks por segundo. Ritmos más altos como 36.000 VPH (5 Hz) producen un movimiento más suave y pueden mejorar teóricamente la precisión al reducir el efecto de los errores posicionales.' },
    { type: 'title', text: 'Por qué importa un tick perdido', level: 3 },
    { type: 'paragraph', html: 'Si el escape de un reloj no entrega un tick debido a fricción, magnetismo o desgaste, ese tick perdido se traduce directamente en tiempo perdido. A 28.800 VPH, un solo tick perdido por hora suma aproximadamente <strong>3 segundos por día</strong>. A 18.000 VPH, el mismo error cuesta casi 5 segundos por día. Esta herramienta le ayuda a entender las matemáticas detrás de la regulación.' },
    { type: 'title', text: 'Ritmos de pulsación comunes', level: 3 },
    { type: 'paragraph', html: 'Los relojes de bolsillo vintage y los automáticos antiguos suelen funcionar a 18.000 VPH (2,5 Hz). Muchos calibres Seiko y Miyota usan 21.600 VPH (3 Hz). El estándar moderno es 28.800 VPH (4 Hz), usado por ETA, Sellita, Rolex y otros. Los movimientos de alta frecuencia como el Zenith El Primero funcionan a 36.000 VPH (5 Hz) para mayor precisión.' },
  ],
  faq: [
    {
      question: '¿Cómo se convierte VPH a Hz?',
      answer: 'Divida el VPH entre 7.200. Un reloj que late a 28.800 VPH funciona a 4 Hz (28.800 ÷ 7.200 = 4). La división entre 7.200 considera que una oscilación completa contiene dos vibraciones y que hay 3.600 segundos en una hora.',
    },
    {
      question: '¿Qué significa un ritmo más alto para la precisión?',
      answer: 'Los ritmos más altos generalmente permiten una mayor precisión teórica porque el volante se ve menos afectado por perturbaciones posicionales. Sin embargo, también generan más fricción y desgaste en las piedras de paleta y la rueda de escape, lo que requiere mejor lubricación y un servicio más frecuente.',
    },
    {
      question: '¿Cómo afecta un tick perdido a la precisión diaria?',
      answer: 'Un tick perdido por hora se traduce en 24 ticks perdidos al día. El tiempo perdido depende de su ritmo: divida 86.400 entre su VPH. A 28.800 VPH son 3 segundos por día. A 18.000 VPH son 4,8 segundos por día.',
    },
    {
      question: '¿Puede un reloj recuperarse de un tick perdido?',
      answer: 'No. Una vez que se pierde un tick, el tiempo se pierde permanentemente. El reloj no se "pone al día". Por eso la salud del escape - piedras limpias, lubricación adecuada y error de ritmo correcto - impacta directamente la tasa diaria.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleccione su calibre',
      text: 'Elija su movimiento en el menú desplegable. Cada preajuste incluye el VPH correcto para ese calibre.',
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
          'name': '¿Cómo se convierte VPH a Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divida el VPH entre 7.200. Un reloj que late a 28.800 VPH funciona a 4 Hz. La división entre 7.200 considera que una oscilación contiene dos vibraciones y 3.600 segundos por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué significa un ritmo más alto para la precisión?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Los ritmos más altos permiten una mayor precisión teórica porque el volante se ve menos afectado por perturbaciones posicionales. Sin embargo, también generan más fricción y desgaste.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cómo afecta un tick perdido a la precisión diaria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un tick perdido por hora se traduce en 24 ticks perdidos al día. Divida 86.400 entre su VPH para hallar los segundos por día perdidos.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puede un reloj recuperarse de un tick perdido?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Una vez que se pierde un tick, el tiempo se pierde permanentemente. El reloj no se pone al día.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Conversor de Ritmo de Pulsación',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo convertir VPH a Hz y calcular el impacto de un tick perdido',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleccione su calibre',
          'text': 'Elija su movimiento en el menú desplegable. Cada preajuste incluye el VPH correcto para ese calibre.',
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
