import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimador-reserva-de-marcha',
  title: 'Estimador de Reserva de Marcha',
  description: 'Calcule la reserva de marcha restante de su reloj según las vueltas de corona y las horas de uso. Compatible con calibres populares ETA, Sellita, Miyota, Seiko y Rolex.',
  ui: {
    title: 'Estimador de Reserva de Marcha',
    movementLabel: 'Calibre',
    selectMovement: 'Seleccionar calibre',
    customMovement: 'Personalizado',
    turnsLabel: 'Vueltas de Corona',
    hoursLabel: 'Horas de Uso',
    turnsInput: 'Vueltas',
    hoursInput: 'Horas',
    activityLabel: 'Actividad',
    activityLow: 'Oficina',
    activityMedium: 'Caminar',
    activityHigh: 'Activo',
    calculate: 'Calcular',
    reserveRemaining: 'Reserva Restante',
    hoursRemaining: 'Restante',
    chargePercent: 'Carga',
    resultLabel: 'Reserva Estimada',
    stopTimeLabel: 'Funciona hasta',
    powerReserveHours: 'Reserva (h)',
    fullWindTurns: 'Vueltas a plena carga',
    step1: 'Seleccione su calibre en el menú desplegable.',
    step2: 'Ingrese las vueltas de corona y las horas de uso.',
    step3: 'Presione Calcular para ver su reserva.',
    tipTitle: 'Consejo',
    tipContent: 'Los movimientos de cuerda manual solo se cargan al girar la corona. Los movimientos automáticos también se cargan mientras se usan.',
  },
  seo: [
    { type: 'title', text: 'Estimador de Reserva de Marcha - ¿Cuánta reserva le queda a su movimiento?', level: 2 },
    { type: 'paragraph', html: '¿Se pregunta cuánta energía le queda a su reloj mecánico? Ya sea que haya dado cuerda esta mañana o lo haya usado todo el día, este estimador le indica el nivel de carga aproximado y las horas restantes para calibres populares como <strong>ETA, Sellita, Miyota, Seiko y Rolex</strong>.' },
    { type: 'title', text: 'Cómo funciona la reserva de marcha en un reloj mecánico', level: 3 },
    { type: 'paragraph', html: 'La reserva de marcha es la cantidad de energía almacenada en el muelle real. Al dar cuerda a la corona, tensa el muelle y almacena energía potencial. Un rotor automático también tensa el muelle mientras usa el reloj. La energía se libera a un ritmo constante - normalmente 2-3 % por hora - hasta que el reloj se detiene.' },
    { type: 'title', text: 'Cuerda manual vs. Carga por rotor', level: 3 },
    { type: 'paragraph', html: 'La cuerda manual mediante la corona es la forma más eficiente de cargar un reloj: cada vuelta completa añade una cantidad predecible de energía, normalmente alrededor del 2,5 % de la reserva total. Usar el reloj carga más lentamente y depende de su nivel de actividad: un oficinista puede cargar un 4-6 % por hora, mientras que una persona activa puede cargar un 8-10 %. Este estimador usa un promedio conservador.' },
    { type: 'title', text: 'Por qué importa estimar la reserva de marcha', level: 3 },
    { type: 'paragraph', html: 'Conocer el nivel de carga de su reloj ayuda a evitar paradas inesperadas. Si el reloj se detiene durante la noche, quizás necesite más cuerda antes de acostarse o no reciba suficiente uso diurno. Use esta herramienta para entender sus hábitos de carga y mantener su automático en funcionamiento.' },
  ],
  faq: [
    {
      question: '¿Cuánto carga una vuelta de corona el reloj?',
      answer: 'Depende del calibre. La mayoría de los calibres automáticos alcanzan la carga completa en 30-40 vueltas, por lo que cada vuelta añade entre un 2,5 y un 3,3 % de la reserva total. Los movimientos de cuerda manual como el Unitas 6498 también necesitan unas 35 vueltas para una carga completa.',
    },
    {
      question: '¿Usar el reloj lo carga tanto como darle cuerda?',
      answer: 'Usarlo carga más lento y de forma variable. En un trabajo de oficina, puede cargar un 4-6 % por hora mediante el rotor. Con movimiento activo (caminar, deporte), puede alcanzar el 8-10 % por hora. La cuerda manual es más rápida y predecible.',
    },
    {
      question: '¿Cuánta reserva pierde un reloj por hora?',
      answer: 'El consumo es constante: divida 100 entre la reserva de marcha en horas. Un calibre de 38 horas pierde aproximadamente un 2,6 % por hora, uno de 42 horas pierde un 2,4 % y uno de 70 horas pierde alrededor de un 1,4 % por hora.',
    },
    {
      question: '¿Puedo darle demasiada cuerda a mi reloj?',
      answer: 'Los movimientos automáticos modernos tienen un embrague deslizante que evita la sobrecarga. Una vez que el muelle real está completamente tenso, las vueltas adicionales simplemente resbalan. Los movimientos de cuerda manual también tienen un tope, aunque forzarlo puede dañar el muelle real.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleccione su calibre',
      text: 'Elija el calibre de su reloj en el menú desplegable. Si no aparece, seleccione Personalizado e ingrese su reserva de marcha y vueltas a plena carga.',
    },
    {
      name: 'Ingrese sus datos',
      text: 'Escriba cuántas vueltas de corona le ha dado o cuántas horas lo ha usado hoy. Puede completar ambos campos para obtener una estimación combinada.',
    },
    {
      name: 'Calcular',
      text: 'Presione el botón Calcular. El resultado muestra el porcentaje de carga estimado y las horas restantes de reserva de marcha.',
    },
    {
      name: 'Ajuste sus hábitos',
      text: 'Use los resultados para decidir si necesita darle más cuerda antes de dormir o más horas de uso durante el día para mantener el reloj funcionando.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuánto carga una vuelta de corona el reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Depende del calibre. La mayoría de los calibres automáticos alcanzan la carga completa en 30-40 vueltas, por lo que cada vuelta añade entre un 2,5 y un 3,3 % de la reserva total. Los movimientos de cuerda manual como el Unitas 6498 también necesitan unas 35 vueltas para una carga completa.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Usar el reloj lo carga tanto como darle cuerda?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Usarlo carga más lento y de forma variable. En un trabajo de oficina, puede cargar un 4-6 % por hora mediante el rotor. Durante movimiento activo puede alcanzar el 8-10 % por hora. La cuerda manual es más rápida y predecible.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuánta reserva pierde un reloj por hora?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El consumo es constante: divida 100 entre la reserva de marcha en horas. Un calibre de 38 horas pierde aproximadamente un 2,6 % por hora, uno de 42 horas pierde un 2,4 % y uno de 70 horas pierde alrededor de un 1,4 % por hora.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo darle demasiada cuerda a mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Los movimientos automáticos modernos tienen un embrague deslizante que evita la sobrecarga. Una vez que el muelle real está completamente tenso, las vueltas adicionales simplemente resbalan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Estimador de Reserva de Marcha',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo estimar la reserva de marcha de su reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleccione su calibre',
          'text': 'Elija el calibre de su reloj en el menú desplegable. Si no aparece, seleccione Personalizado e ingrese su reserva de marcha y vueltas a plena carga.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ingrese sus datos',
          'text': 'Escriba cuántas vueltas de corona le ha dado o cuántas horas lo ha usado hoy. Puede completar ambos campos para obtener una estimación combinada.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcular',
          'text': 'Presione el botón Calcular. El resultado muestra el porcentaje de carga estimado y las horas restantes de reserva de marcha.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajuste sus hábitos',
          'text': 'Use los resultados para decidir si necesita darle más cuerda antes de dormir o más horas de uso durante el día para mantener el reloj funcionando.',
        },
      ],
    },
  ],
};
