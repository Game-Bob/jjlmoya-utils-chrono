import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'comprobador-salud-bateria-cuarzo',
  title: 'Comprobador de Salud de Batería de Cuarzo',
  description: 'Calcule la vida teórica de la batería de un movimiento de cuarzo introduciendo la capacidad de la pila (mAh) y el consumo de energía del calibre (µA). Opcionalmente, fije la fecha de instalación para estimar la fecha de reemplazo.',
  ui: {
    title: 'Comprobador de Salud de Batería de Cuarzo',
    batteryLabel: 'Pila',
    selectBattery: 'Seleccionar pila',
    customBattery: 'Personalizada',
    capacityLabel: 'Capacidad',
    capacityUnit: 'mAh',
    consumptionLabel: 'Consumo',
    consumptionUnit: 'µA',
    installDateLabel: 'Instalada el',
    installDateHint: 'Opcional',
    monthLabel: 'Mes',
    yearLabel: 'Año',
    calculate: 'Calcular',
    resultLabel: 'Vida Estimada',
    theoreticalLife: 'Vida teórica',
    yearsLabel: 'años',
    monthsLabel: 'meses',
    daysLabel: 'días',
    changeDateLabel: 'Reemplazar antes del',
    noDateHint: 'Introduzca la fecha de instalación para ver la fecha de reemplazo',
    healthLabel: 'Estado',
    healthGood: 'Buena',
    healthModerate: 'Moderada',
    healthCritical: 'Crítica',
    step1: 'Elija una pila común o seleccione Personalizada para introducir la capacidad.',
    step2: 'Introduzca el consumo de energía del calibre en microamperios (µA).',
    step3: 'Opcionalmente añada la fecha de instalación y pulse Calcular.',
    tipTitle: 'Consejo',
    tipContent: 'Utilice siempre el valor de consumo de la ficha técnica oficial del calibre. La vida real puede ser un 10-20 % menor debido a variaciones de temperatura y carga.',
  },
  seo: [
    { type: 'title', text: 'Comprobador de Salud de Batería de Cuarzo: ¿Cuánto durará la pila de su reloj?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1,0-2,5 µA', label: 'Consumo típico de tres agujas' },
        { value: '18-55 mAh', label: 'Capacidad común de pila' },
        { value: '2,5-4,5 años', label: 'Vida habitual de la batería' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: '¿Se pregunta cuándo dejará de funcionar su reloj de cuarzo? El <strong>Comprobador de Salud de Batería de Cuarzo</strong> le ayuda a estimar la vida restante de cualquier pila de movimiento de cuarzo comparando la capacidad de la pila (medida en mAh) con el consumo medio de energía del movimiento (medido en microamperios, µA). Ya sea que tenga un ETA suizo, un Miyota japonés, un Seiko, un Ronda o un movimiento chino DG, esta herramienta calcula la vida útil teórica en años, meses y días, e incluso puede predecir la fecha exacta de reemplazo si introduce el mes y año de instalación.' },
    { type: 'title', text: 'Cómo se calcula la vida de la batería de cuarzo: las matemáticas detrás de la estimación', level: 3 },
    { type: 'paragraph', html: 'La vida de la batería sigue una fórmula eléctrica simple: <strong>Vida (horas) = (Capacidad de la pila en mAh x 1000) / Consumo de corriente en µA</strong>. Dividiendo ese resultado por 24 se obtienen días, y por 365,25 se obtienen años. Por ejemplo, una pila <strong>SR920SW (371) estándar de 40 mAh</strong> alimentando un movimiento que consume <strong>1,5 µA</strong> durará teóricamente unos <strong>3 años</strong>. Reduzca el consumo a 1,0 µA y la misma pila supera los 4,5 años. Auméntelo a 2,5 µA y la vida de la batería cae por debajo de 2 años. Cada fracción de microamperio importa a la hora de planificar los intervalos de servicio.' },
    { type: 'title', text: 'Tipos de pila de reloj de cuarzo más comunes y sus capacidades', level: 3 },
    {
      type: 'table',
      headers: ['Referencia de Pila', 'Código Común', 'Capacidad', 'Uso Típico'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Relojes de vestir finos'],
        ['SR626SW', '377', '27 mAh', 'Modelos de cuarzo medianos'],
        ['SR920SW', '371', '40 mAh', 'Cronógrafos y multifunción'],
        ['SR936SW', '394', '55 mAh', 'Híbridos analógico-digitales grandes'],
        ['CR2025', '...', '165 mAh', 'Módulos LED de alto consumo'],
      ],
    },
    { type: 'tip', title: 'Coincida con la especificación original', html: 'Seleccionar el tipo de pila incorrecto puede reducir la vida de la batería hasta en un <strong>40 %</strong>. Siempre coteje el número de referencia original de la pila antes de instalar un reemplazo. El código numérico indica las dimensiones; por ejemplo, <strong>SR936SW</strong> tiene 9,5 mm de diámetro y 3,6 mm de grosor.' },
    { type: 'title', text: 'Por qué debe usar siempre los valores de consumo oficiales del calibre', level: 3 },
    { type: 'paragraph', html: 'Los fabricantes de movimientos como <strong>ETA, Ronda, Miyota, Seiko e ISA</strong> publican fichas técnicas oficiales para cada calibre que producen. Estas fichas indican el <strong>consumo medio de corriente</strong> bajo temperatura controlada (generalmente 22 °C) y con una carga de par de agujas estándar. Usar un valor estimado de 1,0 µA cuando su movimiento realmente consume 2,5 µA puede sobreestimar la vida de la batería en más del 100 %. Descargue siempre el PDF oficial del sitio web del fabricante o consulte la referencia del calibre en bases de datos especializadas para obtener el valor real de consumo.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Las pilas con fugas pueden destruir el movimiento de su reloj',
      html: 'Una pila de óxido de plata agotada puede <strong>filtrar hidróxido de potasio</strong>, que corroe los muelles de contacto, las pistas del circuito impreso e incluso la bobina del motor paso a paso. Si la herramienta estima menos de <strong>6 meses de vida restante</strong>, programe un cambio de pila durante su próxima revisión rutinaria. Preste especial atención a los <strong>relojes de cuarzo vintage de los años 70 y 80</strong>: sus pilas originales son mucho más propensas a tener fugas después de décadas dentro de la caja.',
    },
    { type: 'title', text: 'Factores que reducen la vida real de la batería frente a la estimación teórica', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperaturas extremas</strong>: un reloj dejado en un salpicadero soleado puede ver un 30 % más de consumo de corriente',
        '<strong>Circuitos de detección de fin de vida</strong>: el indicador de tic de dos segundos consume energía extra una vez activado',
        '<strong>Uso del cronógrafo o alarma</strong>: picos momentáneos de corriente que se acumulan con el tiempo',
        '<strong>Rozamiento mecánico</strong>: trenes de engranajes envejecidos o sucios aumentan el par que necesita el motor paso a paso',
        '<strong>Campos magnéticos</strong>: la exposición aumenta los requisitos de par del motor, agotando la pila más rápido',
      ],
    },
    { type: 'paragraph', html: 'En la práctica, puede esperar una <strong>vida entre un 10 y un 20 % menor</strong> que el cálculo teórico. En los movimientos de cuarzo termocompensados de alta precisión el consumo varía menos, pero el cuarzo estándar es notablemente sensible a estos factores ambientales.' },
    { type: 'title', text: 'Cómo encontrar la pila de repuesto adecuada para su reloj de cuarzo', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Óxido de Plata)', definition: 'Las pilas marcadas con SR (ej. SR920SW) proporcionan una salida estable de 1,55 V durante toda su vida, manteniendo preciso el oscilador de cuarzo. Es el estándar para relojes de cuarzo de calidad.' },
        { term: 'LR (Alcalina)', definition: 'Las pilas marcadas con LR (ej. LR41) tienen un voltaje que disminuye gradualmente, lo que puede hacer que el reloj funcione lento o se pare prematuramente. No se recomienda como reemplazo de las pilas SR.' },
        { term: 'CR (Litio)', definition: 'Las pilas marcadas con CR (ej. CR2025) entregan 3,0 V y se usan en módulos de alto consumo con retroiluminación LED, LCD grandes o múltiples complicaciones.' },
        { term: 'Código Numérico', definition: 'Los cuatro dígitos codifican el tamaño físico: los dos primeros son el diámetro en milímetros y los dos últimos el grosor en décimas de milímetro. SR936SW = Diá. 9,5 mm x 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Cuarzo estándar vs solar vs cinético: cómo la tecnología cambia la ecuación', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cuarzo Estándar',
          description: 'Utiliza una pila primaria de óxido de plata o litio reemplazable. La vida de la batería depende puramente de la capacidad frente al consumo. Esta calculadora está diseñada para esto.',
          highlight: true,
          points: [
            'Pila primaria reemplazable',
            'Vida = capacidad / consumo',
            'Calendario de reemplazo predecible',
            'Cambios de pila económicos',
          ],
        },
        {
          title: 'Solar y Cinético',
          description: 'Los relojes solares usan células fotovoltaicas para recargar un acumulador de iones de litio. Los relojes cinéticos usan un microgenerador impulsado por rotor para cargar un condensador.',
          points: [
            'Almacenamiento de energía recargable',
            'La vida depende de los ciclos de carga',
            'Degradación del condensador con el tiempo',
            'No compatible con esta calculadora',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Las afirmaciones de los fabricantes de <strong>"10 años de duración de la batería"</strong> suelen basarse en movimientos de consumo muy bajo (alrededor de 0,5 a 0,8 µA) combinados con pilas de gran capacidad (CR2025 de 165 mAh o más). En un reloj de cuarzo analógico estándar con una pila pequeña de óxido de plata como la <strong>SR626SW (27 mAh)</strong> y un movimiento típico de 1,5 µA, la vida real se acerca más a los <strong>2,5-3 años</strong>. Verifique siempre con esta calculadora en lugar de confiar en las etiquetas de marketing.' },
    {
      type: 'tip',
      title: 'Reemplace de forma proactiva, no reactiva',
      html: 'Cuando vea que el segundero salta en <strong>intervalos de 2 o 4 segundos</strong>, el movimiento ha entrado en modo de ahorro de energía debido al bajo voltaje. La pila tiene aproximadamente <strong>2 a 4 semanas</strong> de vida restante. Reemplácela inmediatamente para evitar daños por fugas.',
    },
    {
      type: 'summary',
      title: 'Conclusiones clave para la salud de la batería de relojes de cuarzo',
      items: [
        'Use el valor oficial de consumo del calibre de la ficha técnica del fabricante: un valor estimado puede sobreestimar la vida en más del 100 %',
        'Coincida exactamente con el tipo de pila original: las químicas SR, LR y CR no son intercambiables',
        'Reemplace la pila cuando la herramienta muestre menos de 6 meses de vida restante para evitar fugas',
        'La vida real de la batería suele ser entre un 10 y un 20 % menor que la ideal teórica debido a la temperatura, la fricción y el uso',
        'Esta calculadora está diseñada para movimientos de cuarzo estándar con pilas primarias reemplazables, no para relojes solares o cinéticos',
      ],
    },
  ],
  faq: [
    {
      question: '¿Qué precisión tiene la estimación teórica de la vida de la batería?',
      answer: 'El cálculo es un ideal eléctrico basado en la capacidad dividida por el consumo. En condiciones reales puede esperar una vida entre un 10 y un 20 % menor debido a la variación de temperatura, los circuitos de detección de fin de vida, la resistencia mecánica de los lubricantes envejecidos y la carga extra de las funciones de cronógrafo o alarma. La estimación es un límite superior fiable, no una predicción exacta.',
    },
    {
      question: '¿Dónde encuentro el valor exacto de consumo de energía para mi calibre de cuarzo?',
      answer: 'Las fichas técnicas oficiales de ETA, Ronda, Miyota, Seiko, ISA y otros fabricantes de movimientos indican el consumo medio de corriente en microamperios (µA). Busque el número de referencia del calibre seguido de "ficha técnica" o "especificación técnica". Bases de datos especializadas como Ranfft, 17jewels y Watch-Wiki también publican cifras de consumo aportadas por la comunidad relojera.',
    },
    {
      question: '¿Qué significa "µA" y por qué es importante?',
      answer: 'µA significa microamperio, o una millonésima de amperio. Mide la corriente eléctrica que el movimiento consume de la pila. Un movimiento analógico típico de tres agujas consume entre 1,0 y 2,5 µA. Los cronógrafos y módulos multifunción pueden consumir de 3,0 a 6,0 µA. Cuanto mayor es la corriente, más corta es la vida de la batería para una capacidad de pila determinada.',
    },
    {
      question: '¿Puedo usar esta herramienta para relojes solares o cinéticos?',
      answer: 'No. Los relojes solares (Eco-Drive, Solar, Light-Powered) usan células fotovoltaicas para cargar una batería recargable. Los relojes cinéticos y Auto-Quartz usan un rotor y un microgenerador para cargar un condensador. Ninguna de estas tecnologías se basa en una pila desechable primaria, por lo que el modelo de capacidad frente a consumo no es aplicable. Use esta calculadora solo para movimientos de cuarzo estándar con pilas de óxido de plata, alcalinas o de litio reemplazables.',
    },
    {
      question: '¿Debo reemplazar la pila antes de que se agote por completo?',
      answer: 'Sí. Las pilas de óxido de plata y alcalinas pueden filtrar hidróxido de potasio cuando están completamente agotadas, dañando los muelles de contacto, las pistas del circuito impreso y la bobina del motor paso a paso. Se recomienda encarecidamente el reemplazo antes de la descarga completa. Si la herramienta muestra menos de 6 meses de vida estimada restante, programe un cambio de pila tan pronto como sea posible.',
    },
    {
      question: '¿Qué ocurre si uso una pila con mayor o menor capacidad que la original?',
      answer: 'Usar una pila de mayor capacidad (ej. SR936SW de 55 mAh en lugar de SR920SW de 40 mAh) prolongará la vida de la batería, pero puede no encajar físicamente: la pila debe coincidir exactamente con el diámetro y grosor originales para mantener la presión adecuada del muelle de contacto. Usar una pila de menor capacidad acorta la vida de la batería y puede causar contacto intermitente si la pila es demasiado pequeña. Reemplace siempre con el mismo número de referencia exacto o un equivalente documentado de la misma familia de tamaños.',
    },
    {
      question: '¿Cómo sé si la pila de mi reloj es de óxido de plata o alcalina?',
      answer: 'Las pilas de óxido de plata están marcadas con SR (ej. SR920SW) y proporcionan una salida estable de 1,55 V durante toda su vida, lo que mantiene preciso el oscilador de cuarzo. Las pilas alcalinas están marcadas con LR (ej. LR41) y tienen un voltaje que disminuye gradualmente, lo que puede hacer que el reloj funcione lento o se pare prematuramente. La mayoría de los relojes de calidad especifican óxido de plata. Si su reloj usaba originalmente SR, reemplace siempre con SR, no con LR.',
    },
    {
      question: '¿El segundero saltando cada dos segundos significa que la pila se está agotando?',
      answer: 'Sí. Cuando el movimiento de cuarzo detecta que el voltaje de la pila es demasiado bajo para accionar el motor paso a paso de forma fiable, entra en un modo de ahorro de energía en el que el segundero salta en intervalos de 2 o 4 segundos. Este es el indicador de fin de vida. Cuando vea este comportamiento, la pila tiene aproximadamente entre 2 y 4 semanas de vida restante y debe reemplazarse inmediatamente para evitar fugas.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Seleccione o personalice la pila',
      text: 'Elija una pila común de óxido de plata de la lista desplegable: SR621SW, SR626SW, SR920SW, SR936SW y otras están precargadas con sus capacidades oficiales. Si su pila no aparece en la lista, seleccione Personalizada e introduzca su capacidad exacta en mAh tal como aparece impresa en la etiqueta de la pila o indicada en la ficha técnica del fabricante.',
    },
    {
      name: 'Introduzca el consumo de energía del movimiento',
      text: 'Localice el consumo medio de corriente de su calibre en la documentación técnica oficial. Escriba el valor en microamperios (µA) en el campo de consumo. La mayoría de los movimientos de tres agujas usan de 1,0 a 2,5 µA. Los cronógrafos y módulos multifunción pueden llegar hasta 6,0 µA.',
    },
    {
      name: 'Añada el mes y año de instalación (opcional)',
      text: 'Si recuerda o tiene registrado cuándo se instaló la última pila, seleccione el mes e introduzca el año. La herramienta usará esta fecha para calcular la fecha estimada de reemplazo y mostrar la salud restante de la batería como porcentaje.',
    },
    {
      name: 'Lea la vida útil teórica',
      text: 'La tarjeta de resultados muestra la vida total estimada de la batería en años, meses y días restantes. Esta es la vida máxima en condiciones ideales, asumiendo que ningún factor externo reduce la capacidad de la pila.',
    },
    {
      name: 'Compruebe el estado de salud y la fecha de reemplazo',
      text: 'Cuando se proporciona una fecha de instalación, el indicador se llena proporcionalmente a la vida restante de la batería. Una etiqueta verde "Buena" significa que queda más del 50 % de vida. Amarilla "Moderada" significa entre el 20 y el 50 %. Roja "Crítica" significa menos del 20 %. La fecha exacta recomendada de reemplazo se muestra debajo del indicador.',
    },
    {
      name: 'Ajuste los valores y vuelva a calcular',
      text: 'Cambie cualquier valor (modelo de pila, consumo o fecha de instalación) y el resultado se actualiza automáticamente. Use esto para comparar diferentes tipos de pila o para planificar calendarios de reemplazo para múltiples relojes de su colección.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Qué precisión tiene la estimación teórica de la vida de la batería?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El cálculo es un ideal eléctrico basado en la capacidad dividida por el consumo. En condiciones reales puede esperar una vida entre un 10 y un 20 % menor debido a la variación de temperatura, los circuitos de detección de fin de vida, la resistencia mecánica de los lubricantes envejecidos y la carga extra de las funciones de cronógrafo o alarma. La estimación es un límite superior fiable, no una predicción exacta.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Dónde encuentro el valor exacto de consumo de energía para mi calibre de cuarzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Las fichas técnicas oficiales de ETA, Ronda, Miyota, Seiko, ISA y otros fabricantes de movimientos indican el consumo medio de corriente en microamperios (µA). Busque el número de referencia del calibre seguido de ficha técnica o especificación técnica. Bases de datos especializadas como Ranfft y 17jewels también publican cifras de consumo aportadas por la comunidad relojera.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué significa µA y por qué es importante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA significa microamperio, o una millonésima de amperio. Mide la corriente eléctrica que el movimiento consume de la pila. Un movimiento analógico típico de tres agujas consume entre 1,0 y 2,5 µA. Los cronógrafos y módulos multifunción pueden consumir de 3,0 a 6,0 µA. Cuanto mayor es la corriente, más corta es la vida de la batería para una capacidad de pila determinada.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo usar esta herramienta para relojes solares o cinéticos?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Los relojes solares usan células fotovoltaicas para cargar una batería recargable. Los relojes cinéticos usan un rotor y un microgenerador para cargar un condensador. Ninguna de estas tecnologías se basa en una pila desechable primaria, por lo que el modelo de capacidad frente a consumo no es aplicable. Use esta calculadora solo para movimientos de cuarzo estándar con pilas de óxido de plata, alcalinas o de litio reemplazables.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Debo reemplazar la pila antes de que se agote por completo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Las pilas de óxido de plata y alcalinas pueden filtrar hidróxido de potasio cuando están completamente agotadas, dañando los muelles de contacto, las pistas del circuito impreso y la bobina del motor paso a paso. Se recomienda encarecidamente el reemplazo antes de la descarga completa. Si la herramienta muestra menos de 6 meses de vida estimada restante, programe un cambio de pila tan pronto como sea posible.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cómo sé si la pila de mi reloj es de óxido de plata o alcalina?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Las pilas de óxido de plata están marcadas con SR (ej. SR920SW) y proporcionan una salida estable de 1,55 V durante toda su vida. Las pilas alcalinas están marcadas con LR (ej. LR41) y tienen un voltaje que disminuye gradualmente. La mayoría de los relojes de calidad especifican óxido de plata. Reemplace siempre SR con SR, no con LR.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿El segundero saltando cada dos segundos significa que la pila se está agotando?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Cuando el movimiento de cuarzo detecta un voltaje bajo de la pila, entra en modo de ahorro de energía donde el segundero salta en intervalos de 2 o 4 segundos. Este es el indicador de fin de vida. Cuando vea este comportamiento, la pila tiene aproximadamente entre 2 y 4 semanas de vida restante y debe reemplazarse inmediatamente para evitar fugas.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Comprobador de Salud de Batería de Cuarzo',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calculadora de Vida de Batería de Reloj',
      'description': 'Calcule la vida teórica de la batería de cualquier movimiento de reloj de cuarzo introduciendo la capacidad de la pila (mAh) y el consumo de energía del calibre (µA). Estima la fecha de reemplazo cuando se proporcionan el mes y año de instalación.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Cálculo de la duración de la batería de un reloj de cuarzo: capacidad frente a consumo explicado',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Aprenda a estimar la duración de la batería de un movimiento de reloj de cuarzo usando la capacidad de la pila en mAh y el consumo de energía del movimiento en µA. Comprenda la fórmula, el efecto de la temperatura y la carga, y cuándo programar un reemplazo.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cómo estimar la duración de la batería de un reloj de cuarzo',
      'description': 'Una guía paso a paso para usar el Comprobador de Salud de Batería de Cuarzo para determinar la vida restante de cualquier pila de reloj de cuarzo y planificar su fecha de reemplazo.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Seleccione o personalice la pila',
          'text': 'Elija una pila común de óxido de plata de la lista desplegable: SR621SW, SR626SW, SR920SW, SR936SW y otras están precargadas con sus capacidades oficiales. Si su pila no aparece en la lista, seleccione Personalizada e introduzca su capacidad exacta en mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Introduzca el consumo de energía del movimiento',
          'text': 'Localice el consumo medio de corriente de su calibre en la documentación técnica oficial. Escriba el valor en microamperios (µA) en el campo de consumo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Añada el mes y año de instalación',
          'text': 'Si sabe cuándo se instaló la pila, seleccione el mes e introduzca el año. La herramienta calcula la fecha estimada de reemplazo y muestra la salud restante de la batería como porcentaje.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lea la vida útil teórica',
          'text': 'La tarjeta de resultados muestra la vida total estimada de la batería en años, meses y días restantes. Esta es la vida máxima en condiciones ideales.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Compruebe el estado de salud y la fecha de reemplazo',
          'text': 'Cuando se proporciona una fecha de instalación, el indicador muestra la vida restante. Verde significa que queda más del 50 %. Amarillo significa entre el 20 y el 50 %. Rojo significa menos del 20 %. La fecha de reemplazo recomendada se muestra debajo.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Comprobador de Salud de Batería de Cuarzo',
      'description': 'Una herramienta en línea para estimar la duración de la batería de un reloj de cuarzo basada en la capacidad de la pila y el consumo de energía del movimiento.',
      'category': 'Calculadora de Batería de Reloj',
      'audience': { '@type': 'Audience', 'audienceType': 'Entusiastas de la relojería y técnicos de reparación' },
    },
  ],
};
