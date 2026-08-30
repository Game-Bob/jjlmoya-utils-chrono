import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'buscador-muelle-real',
  title: 'Buscador de Muelle Real',
  description: 'Calcule las dimensiones del muelle real a partir de las medidas del barrilete para movimientos de reloj antiguos con precisión, diámetro y árbol correctos.',
  ui: {
    title: 'Buscador de Muelle Real',
    barrelLabel: 'DI del Barrilete',
    arborLabel: 'DE del Arbol',
    heightLabel: 'Altura del Barrilete',
    turnsLabel: 'Vueltas',
    calculate: 'Calcular',
    resultThickness: 'Grosor',
    resultHeight: 'Altura',
    resultLength: 'Longitud',
    resultStrength: 'Resistencia',
    strengthWeak: 'Ligero',
    strengthMedium: 'Medio',
    strengthStrong: 'Fuerte',
    commercial: 'Tamano Comercial',
    unitLabel: 'Unidad',
    mm: 'mm',
    inch: 'in',
    step1: 'Mida el diametro interior del barrilete, el diametro exterior del arbol y la altura interna con un calibrador.',
    step2: 'Establezca el numero esperado de vueltas de cuerda (5-8 manual, 6-10 automatico).',
    step3: 'Cambie entre mm y pulgadas segun su sistema de unidades preferido.',
    tipTitle: 'Consejo',
    tipContent: 'Verifique siempre las dimensiones calculadas contra las especificaciones del fabricante. Compare con catalogos de proveedores antes de hacer su pedido.',
  },
  seo: [
    { type: 'title', text: 'Buscador de Muelle Real: Calcula Dimensiones de Muelles para Movimientos de Reloj', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Grosor tipico del muelle' },
        { value: '5-10 vueltas', label: 'Rango de cuerda estandar' },
        { value: '150-450 mm', label: 'Longitud comun del muelle' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'La restauracion de un movimiento de reloj antiguo a menudo comienza con la identificacion del muelle real correcto. El <strong>Buscador de Muelle Real</strong> le ayuda a calcular las dimensiones teoricas del muelle real basandose en la geometria del barrilete. Al introducir el diametro interior del barrilete, el diametro del arbol, la altura del barrilete y el numero esperado de vueltas, la herramienta calcula el grosor, la altura y la longitud del muelle. Los resultados tambien se muestran como tamanos comerciales aproximados tanto en unidades metricas como imperiales, lo que facilita la consulta de catalogos de proveedores.' },
    { type: 'title', text: 'Como se calculan las dimensiones del muelle real', level: 3 },
    { type: 'paragraph', html: 'El muelle real ocupa el espacio anular entre la pared del barrilete y el arbol. El <strong>grosor del muelle</strong> se estima como <strong>(DI del barrilete - DE del arbol) / (2x vueltas + 1.5)</strong>, donde el 1.5 adicional tiene en cuenta la fijacion del extremo del muelle y el espacio que el muelle ocupa contra si mismo. La <strong>longitud del muelle</strong> sigue <strong>L = pi x vueltas x (DI del barrilete + DE del arbol) / 2</strong>, que da la longitud total de la cinta si se extendiera plana. La <strong>altura del muelle</strong> es igual a la altura interna del barrilete menos un pequeno huelgo (tipicamente 0.1 mm) para evitar el rozamiento contra la tapa del barrilete.' },
    { type: 'title', text: 'Como medir un barrilete para seleccionar un muelle real', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Diametro Interior del Barrilete', definition: 'El diametro interior del tambor del barrilete medido con un calibrador. Es el circulo mas grande que puede ocupar el muelle real. Rango tipico: 8-30 mm.' },
        { term: 'Diametro del Arbol', definition: 'El diametro del arbol del barrilete en su punto mas ancho donde se engancha la espira interior del muelle real. Arboles mas pequenos permiten muelles mas largos para el mismo barrilete.' },
        { term: 'Altura del Barrilete', definition: 'La altura interna del tambor del barrilete. La altura del muelle real debe ser ligeramente menor (0.05-0.15 mm) para permitir la rotacion libre sin friccion en la tapa.' },
        { term: 'Numero de Vueltas', definition: 'El numero de vueltas de cuerda completas que proporciona el movimiento. Los calibres de cuerda manual ofrecen tipicamente 5-8 vueltas, los automaticos 6-10 vueltas.' },
      ],
    },
    { type: 'title', text: 'Resistencia del muelle y lo que significa para su movimiento', level: 3 },
    { type: 'paragraph', html: 'El <strong>grosor del muelle</strong> es el factor principal que determina el par transmitido al tren de engranajes. Un muelle mas grueso (mayor de 0.14 mm) proporciona un par elevado adecuado para movimientos con complicaciones como cronografos o mecanismos de soneria. Los muelles medianos (0.10-0.14 mm) son estandar para la mayoria de los calibres solo hora y fecha. Los muelles finos (por debajo de 0.10 mm) se encuentran en movimientos femeninos pequenos o calibres ultrafinos. Coincida siempre con la especificacion original del fabricante cuando este disponible; un muelle demasiado fuerte puede danar el arbol del barrilete o los pivotes del tren de engranajes.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usar el muelle real equivocado puede danar su movimiento',
      html: 'Instalar un muelle que es <strong>demasiado grueso</strong> aumenta la friccion y el par mas alla de los limites de diseno, lo que puede desgastar el agujero del arbol del barrilete, doblar el pivote de la rueda central o incluso agrietar el barrilete. Un muelle que es <strong>demasiado delgado</strong> no proporcionara suficiente amplitud, haciendo que el reloj funcione lento o se detenga antes de alcanzar su reserva de marcha completa. Siempre compare las dimensiones calculadas con catalogos de proveedores conocidos antes de hacer su pedido.',
    },
    { type: 'title', text: 'Sistemas comerciales de dimensionamiento de muelles reales', level: 3 },
    { type: 'paragraph', html: 'Los proveedores de muelles reales catalogan los muelles por <strong>longitud x altura x grosor</strong> en milimetros. Los tamanos metricos comunes siguen el sistema General Resources o GR. Los sistemas basados en pulgadas todavia son utilizados por algunos proveedores americanos y britanicos. La herramienta muestra ambos sistemas para que pueda buscar en catalogos independientemente del proveedor. Cuando el tamano calculado exacto no este disponible, elija el tamano comercial mas cercano que coincida exactamente con la altura y el grosor dentro de 0.005 mm, luego ajuste la longitud seleccionando un muelle de la misma familia de altura/grosor.' },
    { type: 'title', text: 'Consideraciones sobre calibres antiguos', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Calibres suizos (ETA, FHF, AS, Unitas)</strong>: bien documentados en el sistema GR. La mayoria tienen referencias de muelle real conocidas.',
        '<strong>Calibres franceses (LIP, France Ebauches)</strong>: suelen usar proporciones de barrilete no estandar. Mida con cuidado.',
        '<strong>Calibres americanos (Waltham, Elgin, Illinois)</strong>: sistemas basados en pulgadas. Use la salida imperial para comparar.',
        '<strong>Calibres japoneses (Seiko, Citizen, Miyota)</strong>: sistema metrico con buena cobertura en catalogos para movimientos posteriores a 1960.',
        '<strong>Calibres chinos (Sea-Gull, DG, Tongji)</strong>: a menudo clonan disenos suizos. La referencia suiza GR suele ser aplicable.',
      ],
    },
    {
      type: 'summary',
      title: 'Conclusiones clave para la seleccion del muelle real',
      items: [
        'Mida con precision el DI del barrilete, el DE del arbol y la altura del barrilete con un calibrador de precision',
        'Use las dimensiones calculadas como punto de partida, no como una especificacion absoluta',
        'Compare con las hojas tecnicas del fabricante o catalogos de proveedores conocidos',
        'Coincida la altura del muelle exactamente con la altura del barrilete menos 0.05-0.15 mm de huelgo',
        'Coincida el grosor dentro de 0.005 mm del valor calculado para un rendimiento optimo',
        'Verifique que la longitud del muelle sea adecuada para el numero esperado de vueltas de cuerda',
      ],
    },
  ],
  faq: [
    {
      question: '¿Que precision tienen las dimensiones calculadas del muelle real?',
      answer: 'Los calculos se basan en formulas estandar de relojeria que asumen una geometria ideal del barrilete. Las dimensiones reales pueden variar hasta un 5-10 % debido a las tolerancias de fabricacion, las configuraciones del extremo del muelle (anclaje, ojal o extremo en T) y la aleacion especifica utilizada. Utilice siempre los valores calculados como un punto de referencia solido, pero compare con las hojas de datos del fabricante o los catalogos de proveedores comerciales antes de hacer su pedido.',
    },
    {
      question: '¿Que sucede si no encuentro el tamano comercial exacto?',
      answer: 'Cuando el tamano exacto no esta disponible, priorice coincidir exactamente con la altura del muelle, luego el grosor dentro de 0.005 mm. La longitud se puede ajustar seleccionando un muelle diferente de la misma familia de altura y grosor. Un muelle ligeramente mas largo funcionara si el barrilete tiene suficiente espacio, pero un muelle mas corto reducira la reserva de marcha.',
    },
    {
      question: '¿Como mido las dimensiones del barrilete sin quitar el muelle real?',
      answer: 'Si el barrilete aun contiene el muelle viejo, puede medir el diametro exterior del barrilete desde fuera (luego reste el grosor de la pared, tipicamente 0.2-0.4 mm) y la altura total (luego reste el grosor de la tapa). Para obtener los resultados mas precisos, retire el muelle viejo y limpie el barrilete antes de medir.',
    },
    {
      question: '¿Cual es la diferencia entre un extremo de muelle de anclaje y uno de ojal?',
      answer: 'Un extremo de anclaje (tambien llamado extremo en T) tiene una pequena lengueta en forma de T que se engancha en la pared del barrilete. La mayoria de los calibres suizos y japoneses modernos usan este tipo. Un extremo de ojal tiene un pequeno agujero que se ajusta sobre una clavija en el arbol. Esta herramienta calcula solo las dimensiones de la cinta; debe verificar que el tipo de extremo coincida con su barrilete antes de hacer su pedido.',
    },
    {
      question: '¿Puedo usar esta herramienta para movimientos automaticos o cronografos?',
      answer: 'Si, pero tenga en cuenta que los movimientos automaticos a menudo tienen un numero mayor de vueltas (8-10) y pueden requerir un muelle ligeramente mas delgado para acomodar el modulo de cuerda adicional. Los movimientos de cronografo tipicamente necesitan muelles mas gruesos para accionar el mecanismo del cronografo. Ajuste el valor de Vueltas en consecuencia y verifique contra las especificaciones del fabricante.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mida el diametro interior del barrilete',
      text: 'Use un calibrador de precision para medir el diametro interior del tambor del barrilete. Mida en dos puntos separados 90 grados y promedie las lecturas. Registre el resultado en milimetros.',
    },
    {
      name: 'Mida el diametro del arbol',
      text: 'Mida el diametro del arbol del barrilete en el punto mas ancho donde se fija la espira interior del muelle real. Esto suele ser cerca del centro del arbol, no en el extremo cuadrado.',
    },
    {
      name: 'Mida la altura interna del barrilete',
      text: 'Mida la profundidad del barrilete desde el fondo hasta el borde superior. Si la tapa es desmontable, incluya el grosor de la tapa en su medicion. La altura del muelle sera aproximadamente 0.1 mm menor.',
    },
    {
      name: 'Establezca el numero de vueltas',
      text: 'Determine cuantas vueltas completas da el muelle real cuando esta completamente cargado. Para calibres de cuerda manual, esto suele ser 5-8 vueltas. Los automaticos pueden tener 6-10 vueltas. Consulte las especificaciones del movimiento si estan disponibles.',
    },
    {
      name: 'Lea las dimensiones calculadas',
      text: 'La herramienta muestra el grosor, la altura y la longitud recomendados del muelle. Tambien estima la categoria de resistencia del muelle y proporciona equivalentes comerciales tanto en unidades metricas como imperiales.',
    },
    {
      name: 'Compare con catalogos',
      text: 'Use los tamanos comerciales mostrados para buscar en catalogos de proveedores. Introduzca las dimensiones metricas o imperiales en Cousins UK, Jules Borel o su proveedor preferido. Ajuste la busqueda si el tamano exacto no esta disponible.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Que precision tienen las dimensiones calculadas del muelle real?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Los calculos se basan en formulas estandar de relojeria que asumen una geometria ideal del barrilete. Las dimensiones reales pueden variar hasta un 5-10 % debido a tolerancias de fabricacion, configuraciones del extremo del muelle y la aleacion utilizada. Siempre compare con las hojas de datos del fabricante o catalogos comerciales antes de hacer su pedido.' },
        },
        {
          '@type': 'Question',
          'name': 'Que sucede si no encuentro el tamano comercial exacto?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Coincida exactamente con la altura del muelle primero, luego el grosor dentro de 0.005 mm. Ajuste la longitud de la misma familia de altura/grosor.' },
        },
        {
          '@type': 'Question',
          'name': 'Como mido el barrilete sin quitar el muelle real?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Mida el diametro exterior del barrilete y reste el grosor de la pared (0.2-0.4 mm). Para obtener los mejores resultados, retire el muelle viejo primero.' },
        },
        {
          '@type': 'Question',
          'name': 'Cual es la diferencia entre los extremos de anclaje y ojal?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El anclaje (extremo en T) se engancha en la pared del barrilete. El ojal tiene un agujero sobre una clavija del arbol. Los calibres suizos/japoneses modernos usan extremos de anclaje.' },
        },
        {
          '@type': 'Question',
          'name': 'Puedo usarlo para movimientos automaticos o cronografos?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. Los automaticos a menudo necesitan mas vueltas (8-10) y muelles mas delgados. Los cronografos necesitan muelles mas gruesos. Ajuste las vueltas y verifique.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Buscador de Muelle Real',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calculadora de Muelle Real de Reloj',
      'description': 'Calcule las dimensiones teoricas del muelle real a partir de las medidas del barrilete para movimientos de reloj antiguos.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calculo de dimensiones del muelle real de reloj',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Aprenda a calcular las dimensiones del muelle real a partir del diametro interior del barrilete, el tamano del arbol y las vueltas de cuerda.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como encontrar el muelle real correcto',
      'description': 'Guia paso a paso para medir un barrilete de reloj y calcular las dimensiones correctas del muelle real.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Mida el DI del barrilete', 'text': 'Use un calibrador de precision para medir el diametro interior del tambor del barrilete.' },
        { '@type': 'HowToStep', 'name': 'Mida el DE del arbol', 'text': 'Mida el diametro del arbol del barrilete en su punto mas ancho.' },
        { '@type': 'HowToStep', 'name': 'Mida la altura del barrilete', 'text': 'Mida la profundidad interna. La altura del muelle es aproximadamente 0.1 mm menor.' },
        { '@type': 'HowToStep', 'name': 'Establezca las vueltas', 'text': 'Configure 5-8 para cuerda manual, 6-10 para movimientos automaticos.' },
        { '@type': 'HowToStep', 'name': 'Lea los resultados', 'text': 'Vea el grosor, la altura, la longitud del muelle y los equivalentes comerciales.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Buscador de Muelle Real',
      'description': 'Una herramienta para relojeros que calcula las dimensiones del muelle real a partir de las medidas del barrilete.',
      'category': 'Herramienta de Relojeria',
      'audience': { '@type': 'Audience', 'audienceType': 'Relojeros y entusiastas de la horologia' },
    },
  ],
};
