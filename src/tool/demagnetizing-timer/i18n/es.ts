import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'temporizador-desmagnetizacion',
  title: 'Temporizador de Desmagnetización de Relojes',
  description: 'Un temporizador de cuenta atrás preciso con señales sonoras para la desmagnetización casera de relojes. Obtén la duración exacta de pulsación para tu bobina desmagnetizadora.',
  ui: {
    title: 'Ajustes del Temporizador',
    durationLabel: 'Duración del Pulso',
    duration1s: '1 Segundo',
    duration2s: '2 Segundos',
    duration3s: '3 Segundos',
    customLabel: 'Personalizado',
    startButton: 'Iniciar',
    stopButton: 'Detener',
    resetButton: 'Reiniciar',
    pressPhase: '¡Presiona el botón del desmagnetizador ahora!',
    holdPhase: 'Mantén presionado...',
    releasePhase: '¡Suelta ahora!',
    completePhase: '¡Listo! Retira el reloj.',
    ready: 'Listo',
    seconds: 's',
    instructions: 'Cómo Desmagnetizar',
    step1: 'Coloca el reloj sobre la plataforma del desmagnetizador.',
    step2: 'Presiona Inicio y mantén el botón del desmagnetizador durante el tiempo configurado.',
    step3: 'Suelta el botón y aleja el reloj lentamente.',
    step4: 'Repite 2–3 veces si es necesario, girando el reloj cada vez.',
    tipTitle: 'Consejo',
    tipContent: 'Mantén el reloj al menos 1 metro de distancia del desmagnetizador encendido para evitar re-imantación.',
  },
  seo: [
    { type: 'title', text: 'Temporizador de Desmagnetización-ming Preciso para Desmagnetización Casera', level: 2 },
    { type: 'paragraph', html: 'Desmagnetizar un reloj requiere una sincronización exacta del botón. La mayoría de los desmagnetizadores caseros funcionan generando un campo magnético alterno decreciente, y el pulso ideal dura entre <strong>1 y 3 segundos</strong>. Si lo mantienes muy poco, el campo no neutralizará la magnetización; si lo mantienes demasiado, corres el riesgo de saturar el movimiento.' },
    { type: 'title', text: 'Por qué es importante el tiempo en la desmagnetización', level: 3 },
    { type: 'paragraph', html: 'Al presionar el botón del desmagnetizador, se crea un campo magnético alterno dentro de la bobina. El campo oscila a la frecuencia de red (50/60 Hz) y se desvanece al soltar el botón. El objetivo es exponer el reloj a este campo decreciente <strong>el tiempo justo</strong> para aleatorizar los dominios magnéticos del espiral y otros componentes de acero. Un pulso de 1 a 3 segundos es el punto óptimo para la mayoría de los movimientos.' },
    { type: 'title', text: 'Cómo funciona un desmagnetizador', level: 3 },
    { type: 'paragraph', html: 'Un desmagnetizador es esencialmente una bobina de alambre que produce un campo magnético alterno intenso al energizarse. Al colocar un reloj magnetizado en este campo, sus dominios magnéticos internos se invierten rápidamente. Cuando el campo se elimina de forma abrupta (al soltar el botón), los dominios se estabilizan en un patrón aleatorio, cancelando efectivamente la magnetización neta.' },
    { type: 'title', text: 'Señales de que tu reloj necesita desmagnetización', level: 3 },
    { type: 'paragraph', html: 'Los síntomas comunes de un reloj magnetizado incluyen: adelantarse varios minutos al día, falta de precisión según la posición, un tic-tac audiblemente más rápido y, en casos extremos, que el reloj se detenga por completo. Si tu reloj automático de repente empieza a adelantarse, la magnetización suele ser la causa y la desmagnetización es una solución sencilla.' },
  ],
  faq: [
    {
      question: '¿Cuánto tiempo debo presionar el botón del desmagnetizador?',
      answer: 'De 1 a 3 segundos es la duración recomendada. Empieza con 1 segundo y aumenta si es necesario. Pulsos demasiado largos pueden sobrecalentar la bobina y no mejoran los resultados.',
    },
    {
      question: '¿Se puede desmagnetizar un reloj más de una vez?',
      answer: 'Sí. Repite el proceso de 2 a 3 veces, girando el reloj 90 grados cada vez. Esto asegura que todos los ejes queden expuestos al campo alterno. No hay riesgo de sobredesmagnetización.',
    },
    {
      question: '¿La desmagnetización funciona en relojes de cuarzo?',
      answer: 'Los relojes de cuarzo rara vez se ven afectados por la magnetización porque contienen pocos componentes ferromagnéticos. Sin embargo, el motor paso a paso de algunos movimientos de cuarzo puede magnetizarse, causando un movimiento errático de las agujas. La desmagnetización es segura para relojes de cuarzo.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurar duración',
      text: 'Elige 1, 2 o 3 segundos según la severidad de la magnetización.',
    },
    {
      name: 'Colocar el reloj',
      text: 'Coloca el reloj plano sobre la plataforma del desmagnetizador, centrado sobre la bobina.',
    },
    {
      name: 'Presionar y mantener',
      text: 'Presiona el botón de Inicio simultáneamente con el botón del desmagnetizador y mantenlo durante la duración configurada.',
    },
    {
      name: 'Soltar y retirar',
      text: 'Suelta el botón y aleja el reloj al menos 1 metro antes de apagar el desmagnetizador.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuánto tiempo debo presionar el botón del desmagnetizador?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De 1 a 3 segundos es la duración recomendada. Empieza con 1 segundo y aumenta si es necesario. Pulsos demasiado largos pueden sobrecalentar la bobina y no mejoran los resultados.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Se puede desmagnetizar un reloj más de una vez?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Repite el proceso de 2 a 3 veces, girando el reloj 90 grados cada vez. Esto asegura que todos los ejes queden expuestos al campo alterno. No hay riesgo de sobredesmagnetización.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿La desmagnetización funciona en relojes de cuarzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Los relojes de cuarzo rara vez se ven afectados por la magnetización porque contienen pocos componentes ferromagnéticos. Sin embargo, el motor paso a paso de algunos movimientos de cuarzo puede magnetizarse, causando un movimiento errático de las agujas. La desmagnetización es segura para relojes de cuarzo.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Temporizador de Desmagnetización de Relojes',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo desmagnetizar un reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Configurar duración',
          'text': 'Elige 1, 2 o 3 segundos según la severidad de la magnetización.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Colocar el reloj',
          'text': 'Coloca el reloj plano sobre la plataforma del desmagnetizador, centrado sobre la bobina.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Presionar y mantener',
          'text': 'Presiona el botón de Inicio simultáneamente con el botón del desmagnetizador y mantenlo durante la duración configurada.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Soltar y retirar',
          'text': 'Suelta el botón y aleja el reloj al menos 1 metro antes de apagar el desmagnetizador.',
        },
      ],
    },
  ],
};
