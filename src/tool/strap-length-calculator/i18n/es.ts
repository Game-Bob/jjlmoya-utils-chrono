import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'calculadora-longitud-correa',
  title: 'Calculadora de Longitud de Correa de Reloj',
  description: 'Calcula la talla ideal de correa para tu muñeca. Obtén recomendaciones para correas de dos piezas y NATO según el tamaño de tu muñeca y las dimensiones del reloj.',
  ui: {
    title: 'Calculadora de Longitud de Correa',
    wristLabel: 'Perímetro de muñeca',
    wristPlaceholder: 'ej. 170',
    lugLabel: 'Distancia entre asas',
    lugPlaceholder: 'ej. 45',
    fitLabel: 'Ajuste preferido',
    fitTight: 'Apretado',
    fitRegular: 'Normal',
    fitLoose: 'Holgado',
    unitLabel: 'Unidad',
    standardLabel: 'Talla estándar de fábrica',
    bespokeLabel: 'Talla personalizada',
    natoLabel: 'Longitud de correa NATO',
    longSide: 'Lado largo',
    shortSide: 'Lado corto',
    totalLength: 'Longitud total',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Muñecas < 6.0 in',
    sizeS: 'Small (S) - Muñecas 6.0 a 6.5 in',
    sizeM: 'Medium (M) - Muñecas 6.5 a 7.0 in',
    sizeL: 'Large (L) - Muñecas 7.0 a 7.5 in',
    sizeXL: 'Extra Large (XL) - Muñecas 7.5 a 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Muñecas > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Guía de Tallas de Correa de Reloj y Calculadora de Longitud',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elegir la correa perfecta para tu reloj es esencial tanto para la comodidad como para el equilibrio estético. Una correa demasiado larga deja un sobrante antiestético, mientras que una demasiado corta podría no cerrar de forma segura. Esta guía explica cómo determinar las tallas estándar de fábrica, las medidas personalizadas y las longitudes de correas NATO según el tamaño de la muñeca, el diseño del reloj y el ajuste deseado.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Talla estándar de fábrica' },
        { value: '160-190mm', label: 'Adaptable a la mayoría de muñecas' },
        { value: '7 agujeros', label: 'Ajustes típicos de talla' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Entendiendo las correas de dos piezas: Lado largo vs. lado corto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una correa de reloj de dos piezas se define por dos números, como <strong>120/80 mm</strong>. El primer número (ej. 120 mm) es el <strong>lado largo</strong> (el lado de la punta o los agujeros), que se fija a la posición de las 6 horas. El segundo número (ej. 80 mm) es el <strong>lado corto</strong> (el lado del hebillaje), que se fija a la posición de las 12 horas. La hebilla en sí no está incluida en estas medidas.',
    },
    {
      type: 'title',
      text: 'Tabla de tallas estándar según el perímetro de muñeca',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tamaño de muñeca', 'Correa de cuero/caucho', 'Correa NATO', 'Ajuste recomendado'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Ajuste pequeño'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Ajuste mediano estándar'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Ajuste grande estándar'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Ajuste extra grande'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Ajuste doble extra grande'],
      ],
    },
    {
      type: 'title',
      text: 'Tallas personalizadas explicadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Al encargar correas hechas a medida, puedes conseguir el ajuste perfecto. En lugar de conformarte con las posiciones estándar de los agujeros, una correa personalizada calcula la longitud precisa de cada lado para que la hebilla repose exactamente en el centro de la parte inferior de tu muñeca. La fórmula usa el perímetro total de la muñeca, resta la distancia entre asas del reloj y divide la longitud restante según la geometría de la muñeca.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Correas personalizadas',
          description: 'Hechas a la medida de tu muñeca y las dimensiones de tu reloj. Garantizan que la hebilla quede perfectamente centrada y eliminan el sobrante.',
          points: [
            'Centrado perfecto de la hebilla',
            'Posiciones de agujeros a medida',
            'Sin sobrante de correa',
            'Aspecto y sensación premium',
          ],
        },
        {
          title: 'Correas estándar de fábrica',
          description: 'Tallas producidas en masa diseñadas para adaptarse a una amplia gama de muñecas mediante múltiples agujeros. Rápidas y económicas.',
          points: [
            'Menor coste',
            'Disponibilidad inmediata',
            'Compatibles con varios relojes',
            'Dimensiones estandarizadas',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Terminología clave sobre correas de reloj',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Distancia entre asas (Lug-to-Lug)',
          definition: 'La distancia vertical total desde la punta de la asa superior hasta la punta de la asa inferior. No es el diámetro de la caja, sino la longitud total de la cabeza del reloj apoyada en tu muñeca.',
        },
        {
          term: 'Lado corto (Hebilla)',
          definition: 'La sección de la correa fijada a la posición de las 12 horas de la caja. Incluye la hebilla pero se excluye en las medidas de longitud.',
        },
        {
          term: 'Lado largo (Punta)',
          definition: 'La sección de la correa fijada a la posición de las 6 horas. Tiene agujeros de ajuste para regular la tensión.',
        },
        {
          term: 'Correa NATO',
          definition: 'Una correa de nailon de una sola pieza que pasa por debajo de la caja del reloj a través de los pasadores. Es muy ajustable y duradera.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Cómo medir tu muñeca correctamente',
      html: 'Para obtener una medida precisa, envuelve una cinta métrica flexible (sin apretar) alrededor de la zona donde sueles llevar el reloj. Si no tienes cinta, usa un cordel o una tira de papel, marca dónde se superpone y mide la longitud con una regla.',
    },
    {
      type: 'title',
      text: 'Por qué la distancia entre asas es crítica para la talla de la correa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchos coleccionistas olvidan que la caja del reloj actúa como una extensión rígida de la correa. Un reloj con una distancia entre asas de 50 mm ocupa más espacio en la muñeca que uno de 40 mm. En consecuencia, el reloj más grande requiere correas más cortas para lograr el mismo tamaño de bucle. No tener en cuenta la distancia entre asas es la razón número uno de un mal ajuste de la correa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Evitando el desplazamiento de la hebilla y el vuelo de la caja',
      html: 'Si el lado corto de la correa es demasiado largo o demasiado corto para tu muñeca, la hebilla se deslizará hacia un lado. Esto hace que la caja del reloj se desplace del centro, causando molestias y aumentando el riesgo de rayaduras en la caja o el cierre. Procura que la hebilla quede siempre centrada en la parte inferior plana de tu muñeca.',
    },
    {
      type: 'proscons',
      title: 'Correa NATO vs. correa de dos piezas',
      items: [
        {
          pro: 'Las correas NATO son muy ajustables y evitan la pérdida del reloj si falla un pasador.',
          con: 'Las correas NATO añaden grosor bajo la caja del reloj.',
        },
        {
          pro: 'Las correas de dos piezas mantienen la caja pegada a la piel para un perfil más fino.',
          con: 'Las correas de dos piezas requieren una talla precisa y ofrecen menos ajustes.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿Cómo se mide la longitud de una correa de reloj?',
      answer: 'La longitud de una correa de reloj se expresa normalmente con dos números, como 120/80 mm. El primer número es la longitud del lado largo (punta) y el segundo es el lado corto (hebilla).',
    },
    {
      question: '¿Dónde debe situarse la hebilla en la muñeca?',
      answer: 'Idealmente, la hebilla debe quedar centrada en la parte inferior de la muñeca. Si está desplazada, la caja del reloj se moverá del centro. Ajustar la proporción entre el lado largo y el lado corto ayuda a conseguir un centrado perfecto.',
    },
    {
      question: '¿Cómo afecta la distancia entre asas a la longitud de correa que necesito?',
      answer: 'La caja del reloj es una parte rígida del bucle total de la correa. Un reloj grande con una distancia entre asas larga (ej. 50 mm) reduce la longitud de correa necesaria para rodear la muñeca en comparación con un reloj más pequeño (ej. 40 mm) en la misma muñeca.',
    },
    {
      question: '¿En qué lado va el extremo largo de la correa?',
      answer: 'Tradicionalmente, el lado largo de la correa (con los agujeros de ajuste) se fija a la posición de las 6 horas de la caja, hacia ti. El lado corto (con la hebilla) se fija a las 12 horas.',
    },
    {
      question: '¿Qué tan apretada debe estar una correa de reloj?',
      answer: 'La correa debe quedar firme pero cómoda. Debes poder deslizar un dedo por debajo sin forzar. Una correa demasiado apretada puede restringir la circulación, mientras que una demasiado suelta permitirá que la caja gire.',
    },
    {
      question: '¿Puedo usar una correa NATO en cualquier reloj?',
      answer: 'Sí, siempre que el reloj tenga pasadores estándar con suficiente espacio entre la caja y los pasadores. Las correas NATO pasan por debajo de la caja, por lo que los espacios muy ajustados pueden requerir pasadores curvados o materiales de correa más finos.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Medir tu muñeca',
      text: 'Usa una cinta métrica flexible para conocer el perímetro de tu muñeca en milímetros o pulgadas.',
    },
    {
      name: 'Medir la distancia entre asas',
      text: 'Mide la altura de la caja del reloj desde la punta de la asa superior hasta la punta de la asa inferior.',
    },
    {
      name: 'Seleccionar tu ajuste preferido',
      text: 'Elige entre un ajuste apretado, normal o holgado.',
    },
    {
      name: 'Calcular recomendaciones',
      text: 'Revisa la talla estándar de fábrica, las tallas personalizadas de lado largo y corto, y la longitud NATO ideal.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cómo se mide la longitud de una correa de reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La longitud de una correa de reloj se expresa normalmente con dos números, como 120/80 mm. El primer número es la longitud del lado largo (punta) y el segundo es el lado corto (hebilla).'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Dónde debe situarse la hebilla en la muñeca?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealmente, la hebilla debe quedar centrada en la parte inferior de la muñeca. Si está desplazada, la caja del reloj se moverá del centro. Ajustar la proporción entre el lado largo y el lado corto ayuda a conseguir un centrado perfecto.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cómo afecta la distancia entre asas a la longitud de correa que necesito?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La caja del reloj es una parte rígida del bucle total de la correa. Un reloj grande con una distancia entre asas larga (ej. 50 mm) reduce la longitud de correa necesaria para rodear la muñeca en comparación con un reloj más pequeño (ej. 40 mm) en la misma muñeca.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿En qué lado va el extremo largo de la correa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tradicionalmente, el lado largo de la correa (con los agujeros de ajuste) se fija a la posición de las 6 horas de la caja, hacia ti. El lado corto (con la hebilla) se fija a las 12 horas.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Qué tan apretada debe estar una correa de reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La correa debe quedar firme pero cómoda. Debes poder deslizar un dedo por debajo sin forzar. Una correa demasiado apretada puede restringir la circulación, mientras que una demasiado suelta permitirá que la caja gire.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Puedo usar una correa NATO en cualquier reloj?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí, siempre que el reloj tenga pasadores estándar con suficiente espacio entre la caja y los pasadores. Las correas NATO pasan por debajo de la caja, por lo que los espacios muy ajustados pueden requerir pasadores curvados o materiales de correa más finos.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculadora de Longitud de Correa de Reloj',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Calculadora de Longitud de Correa de Reloj',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Medir tu muñeca',
          'text': 'Usa una cinta métrica flexible para conocer el perímetro de tu muñeca en milímetros o pulgadas.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Medir la distancia entre asas',
          'text': 'Mide la altura de la caja del reloj desde la punta de la asa superior hasta la punta de la asa inferior.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Seleccionar tu ajuste preferido',
          'text': 'Elige entre un ajuste apretado, normal o holgado.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Calcular recomendaciones',
          'text': 'Revisa la talla estándar de fábrica, las tallas personalizadas de lado largo y corto, y la longitud NATO ideal.'
        }
      ]
    } as any
  ]
};
