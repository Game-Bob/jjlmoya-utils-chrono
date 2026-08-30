import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'guia-corona-referencia',
  title: 'Guía de Referencia de Corona de Reloj',
  description: 'Guía interactiva de posiciones de la corona, direcciones de cuerda y funciones de ajuste para movimientos populares.',
  ui: {
    title: 'Ajustes de Corona',
    movementLabel: 'Movimiento',
    selectMovement: 'Seleccionar movimiento',
    customMovement: 'Personalizado',
    positionLabel: 'Posición',
    unscrewFirst: 'Desenrosque la corona primero',
    windingLabel: 'Cuerda',
    hackLabel: 'Paro de segundero',
    dangerZoneLabel: 'Evitar 9-3 h',
    directionCW: 'Horario',
    directionCCW: 'Antihorario',
    directionBoth: 'Bidireccional',
    pullHint: 'Tirar de la corona',
    clickPosition: 'Haga clic en una posición',
    position0Title: 'Reposo',
    position0Desc: 'La corona está presionada. El reloj funciona con normalidad.',
    position0Detail: 'No hay funciones de cuerda o ajuste activadas.',
    position1Title: 'Cuerda Manual',
    position1Desc: 'Gire la corona en sentido horario para dar cuerda al muelle real. Notará resistencia a medida que el muelle se tensa.',
    position1Detail: 'Aproximadamente 30-40 giros completos desde cero. Los rotores automáticos también dan cuerda mientras se usa.',
    position2Title: 'Ajuste Rápido de Fecha',
    position2Desc: 'Gire la corona en sentido horario para avanzar la fecha. La manecilla de la hora se mantiene sincronizada con los segundos.',
    position2Detail: 'EVITE ajustar la fecha rápidamente entre las 9 p. m. y las 3 a. m. mientras el mecanismo de cambio de fecha está activo.',
    position3Title: 'Ajuste de Hora',
    position3Desc: 'Gire la corona en cualquier dirección para mover las manecillas. El segundero se detiene (paro de segundero) para sincronización precisa.',
    position3Detail: 'Tire a la posición 3, espere a que los segundos lleguen a 12, luego tire completamente. Gire para ajustar la hora y vuelva a presionar.',
    screwDownHint: 'Recuerde enroscar la corona hacia abajo para mantener la resistencia al agua.',
    noQuickSet: 'Sin ajuste rápido',
    noHack: 'No',
    hasHack: 'Sí',
    crownPositions: 'Posiciones de la Corona',
    noteTitle: 'Nota',
  },
  seo: [
    { type: 'title', text: 'Guía de Posiciones de la Corona-Cómo Dar Cuerda, Ajustar Fecha y Hora Correctamente', level: 2 },
    { type: 'paragraph', html: 'La corona es la única interfaz física entre usted y el movimiento de su reloj. Usarla mal -dar cuerda hacia atrás, ajustar la fecha a medianoche o tirar demasiado fuerte- puede dañar el mecanismo. Esta guía desglosa cada posición de la corona para los calibres <strong>ETA, Sellita, Miyota, Seiko y Unitas</strong> para que nunca tenga que adivinar.' },
    { type: 'title', text: 'Posiciones de la Corona de un Vistazo', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Posición 0 (Reposo)', definition: 'Corona presionada o enroscada. El reloj funciona con normalidad. Ninguna función activada. Vuelva siempre aquí después de ajustar.' },
        { term: 'Posición 1 (Cuerda)', definition: 'Primera extracción o estado desenroscado. Gire en sentido horario para dar cuerda al muelle real. La mayoría de los automáticos también dan cuerda mediante el rotor.' },
        { term: 'Posición 2 (Ajuste Rápido de Fecha)', definition: 'Segunda extracción. Gire en sentido horario para avanzar la fecha. Evite usar entre las 9 p. m.-3 a. m. cuando el mecanismo de fecha está activo.' },
        { term: 'Posición 3 (Ajuste de Hora)', definition: 'Tercera extracción. El segundero se detiene para alineación precisa. Gire libremente para ajustar la hora. Presente en la mayoría de los automáticos modernos.' },
      ]
    },

    { type: 'title', text: 'Comparación de Movimientos: Funciones de Corona', level: 3 },
    {
      type: 'table', headers: ['Movimiento', 'Posiciones', 'Paro Seg.', 'Ajuste Ráp.', 'Dir. Cuerda'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['Miyota 8215', '2 (0,1,3)', 'No', 'Ninguno', 'H'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Sí', 'Fecha (H)', 'H'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'No', 'Ninguno', 'H'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Errores Comunes con la Corona', icon: 'mdi:alert', badge: 'NO HACER', html: 'Nunca ajuste la fecha rápidamente entre las <strong>9 p. m. y las 3 a. m.</strong> mientras la rueda de fecha está enganchada. Esto puede romper dientes y requerir un servicio completo del movimiento. Si debe cambiar la fecha durante esta ventana, primero adelante la hora más allá de las 3 a. m., ajuste la fecha y luego regrese a la hora correcta.' },

    { type: 'tip', title: 'Coronas Enroscables', html: 'Los relojes de buceo y deportivos suelen tener coronas enroscables para resistencia al agua. <strong>Siempre desenrosque antes de tirar</strong>. Gire en sentido antihorario hasta que la corona salte, luego tire a la posición deseada. Después de ajustar, presione hacia adentro, luego gire en sentido horario aplicando presión ligera hasta que ajuste. <strong>No apriete demasiado.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Corona Estándar', icon: 'mdi:crown', description: 'Corona de presión y tracción presente en la mayoría de los relojes de vestir y automáticos de uso diario. 2-4 posiciones. Resistencia al agua típicamente de 30-100 m.', points: ['Acceso inmediato, sin desenroscar', 'Resistencia al agua limitada', 'Común en ETA, Miyota, Seiko'] },
        { title: 'Corona Enroscable', icon: 'mdi:lock', description: 'Corona roscada que se enrosca en el tubo de la caja. Estándar en relojes de buceo y herramientas. Resistencia al agua de 200 m+.', points: ['Resistencia al agua superior', 'Debe desenroscarse antes de usar', 'Común en Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Referencia Rápida', items: [
        'Siempre dé cuerda en sentido horario-la cuerda inversa activa el embrague deslizante pero no da cuerda.',
        'Si su reloj tiene corona enroscable, desenrósquela antes de tirar a cualquier posición.',
        'Evite el ajuste rápido de fecha entre las 9 p. m. y las 3 a. m. Adelante la hora más allá de las 3 a. m. primero si es necesario.',
        'Los movimientos de cuerda manual (p. ej., Unitas 6498) tienen menos posiciones. Dé cuerda completamente antes de ajustar la hora.',
        'Los movimientos sin paro de segundero (p. ej., Miyota 8215) requieren una técnica diferente: gire más allá del minuto objetivo, luego lentamente hacia atrás.',
      ]
    },
  ],
  faq: [
    {
      question: '¿Cuántas posiciones de corona tiene mi reloj?',
      answer: 'La mayoría de los movimientos automáticos tienen 3 posiciones funcionales además del reposo: posición 1 para cuerda manual, posición 2 para ajuste rápido de fecha y posición 3 para ajuste de hora con paro de segundero. Los movimientos de cuerda manual como el Unitas 6498 tienen solo 1 posición funcional (cuerda, con ajuste de hora en una extracción adicional). Las coronas enroscables añaden un paso extra: desenroscar antes de tirar.',
    },
    {
      question: '¿Puedo dañar mi reloj dando cuerda hacia atrás?',
      answer: 'No, pero no hace nada. Los movimientos modernos usan un embrague deslizante que se desengrana al girar hacia atrás, por lo que la cuerda inversa no causa daño pero tampoco da cuerda al muelle real. Siempre dé cuerda en sentido horario para la cuerda manual. La única excepción son algunos relojes de bolsillo antiguos y movimientos automáticos tempranos.',
    },
    {
      question: '¿Qué es la zona de peligro del cambio de fecha y cómo la evito?',
      answer: 'La zona de peligro suele ser de 9 p. m. a 3 a. m., cuando el mecanismo de cambio de fecha está físicamente enganchado con la rueda de fecha. Ajustar rápidamente durante esta ventana puede romper los dientes del engranaje. Para ajustar la fecha de forma segura: adelante la hora más allá de las 3 a. m., ajuste la fecha al día anterior, luego avance la hora hasta la fecha y hora correctas.',
    },
    {
      question: '¿Por qué mi segundero no se detiene cuando tiro de la corona?',
      answer: 'Algunos movimientos carecen de mecanismo de paro de segundero. Los calibres comunes sin paro incluyen el Miyota 8215, Unitas 6497/6498 y muchos movimientos antiguos. Para ajustar la hora con precisión en un movimiento sin paro: gire la corona 5-10 minutos más allá de su minuto objetivo, luego gire lentamente hacia atrás hasta que la manecilla de los minutos caiga exactamente en la marca deseada.',
    },
    {
      question: '¿Cómo sé cuántas vueltas necesita mi reloj para dar cuerda completa?',
      answer: 'La mayoría de los movimientos automáticos requieren 30-40 giros completos de corona desde cero. Los movimientos de cuerda manual varían: el Unitas 6498 necesita aproximadamente 30-35 vueltas, mientras que el Seiko 6R35 con su reserva de 70 horas necesita 50-60 vueltas. Deténgase cuando sienta una resistencia firme - forzarla puede dañar el muelle real.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Encuentre su calibre de movimiento',
      text: 'Mire en el fondo de la caja (a menudo grabado) o en el movimiento mismo a través de un fondo de cristal. Números comunes: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Selecciónelo en la guía',
      text: 'Elija su movimiento en el menú desplegable. El gráfico de la corona y el panel se actualizan para mostrar sus posiciones exactas, dirección de cuerda y funciones.',
    },
    {
      name: 'Recorra cada posición',
      text: 'Haga clic en los chips de posición (0-3) o use el botón Tirar. Lea la descripción y observe la advertencia de zona de peligro para el ajuste de fecha.',
    },
    {
      name: 'Aplíquelo a su reloj',
      text: 'Con la guía abierta a su lado, practique en su reloj real. Dé cuerda en la dirección correcta, evite la zona de peligro y enrosque la corona al terminar.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuántas posiciones de corona tiene mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoría de los movimientos automáticos tienen 3 posiciones funcionales además del reposo: posición 1 para cuerda manual, posición 2 para ajuste rápido de fecha y posición 3 para ajuste de hora con paro de segundero.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo dañar mi reloj dando cuerda hacia atrás?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Los movimientos modernos usan un embrague deslizante que se desengrana al girar hacia atrás, por lo que la cuerda inversa no causa daño pero tampoco da cuerda al muelle real.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué es la zona de peligro del cambio de fecha?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La zona de peligro suele ser de 9 p. m. a 3 a. m. Para ajustar la fecha de forma segura: adelante la hora más allá de las 3 a. m., ajuste la fecha al día anterior, luego avance.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Por qué mi segundero no se detiene cuando tiro de la corona?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Algunos movimientos carecen de mecanismo de paro de segundero. Los calibres comunes sin paro incluyen el Miyota 8215 y Unitas 6497/6498. Para ajustar la hora: gire más allá del objetivo, luego lentamente hacia atrás.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuántas vueltas para dar cuerda completa a mi reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La mayoría de los movimientos automáticos requieren 30-40 giros completos de corona. Los movimientos de cuerda manual varían. Deténgase cuando sienta resistencia firme.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Guía de Referencia de Corona',
      'operatingSystem': 'Todos',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Requiere HTML5. Requiere JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo usar la Guía de Referencia de la Corona',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Encuentre su calibre de movimiento',
          'text': 'Mire en el fondo de la caja (a menudo grabado) o en el movimiento mismo a través de un fondo de cristal. Números comunes: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Selecciónelo en la guía',
          'text': 'Elija su movimiento en el menú desplegable. El gráfico de la corona y el panel se actualizan para mostrar sus posiciones exactas, dirección de cuerda y funciones.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Recorra cada posición',
          'text': 'Haga clic en los chips de posición (0-3) o use el botón Tirar. Lea la descripción y observe la advertencia de zona de peligro para el ajuste de fecha.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aplíquelo a su reloj',
          'text': 'Con la guía abierta a su lado, practique en su reloj real. Dé cuerda en la dirección correcta, evite la zona de peligro y enrosque la corona al terminar.',
        },
      ],
    },
  ],
};
