import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "¿Qué cristal de reloj es el más resistente a los arañazos?",
    "answer": "El cristal de zafiro es el más resistente con una dureza de 9 en la escala de Mohs. El cristal mineral (5) es moderadamente resistente y la hesalita (2-3) se raya fácilmente pero se pule en minutos con Polywatch."
  },
  {
    "question": "¿Se puede reparar un cristal de hesalita rayado?",
    "answer": "Sí, la hesalita (acrílico) se pule fácilmente con productos como Polywatch. Los cristales minerales y de zafiro no se pueden pulir y deben reemplazarse si se rayan."
  },
  {
    "question": "¿El cristal de zafiro es irrompible?",
    "answer": "No, el zafiro no es irrompible. Es muy duro pero frágil ante impactos fuertes. La hesalita es el material más resistente a los impactos ya que se deforma en lugar de astillarse."
  },
  {
    "question": "¿Qué cristal es mejor para un reloj de buceo?",
    "answer": "El zafiro es el estándar en relojes de buceo por su resistencia a arañazos y presión submarina."
  }
];
const howTo = [
  {
    "name": "Seleccionar un tipo de cristal",
    "text": "Haz clic en cualquier cristal de la lista de la izquierda para ver su tarjeta de estadísticas."
  },
  {
    "name": "Comparar dos cristales",
    "text": "Arrastra un cristal sobre otro para compararlos cara a cara."
  },
  {
    "name": "Cerrar la comparación",
    "text": "Haz clic en cerrar comparación para volver a la vista individual."
  }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'perbandingan-kristal-jam-tangan-hesalit-mineral-safir',
  title,
  description: 'Bandingkan kristal jam tangan hesalit, mineral, dan safir dengan kartu statistik interaktif. Lihat kekerasan, kejelasan, ketahanan benturan, dan gores.',
  ui: {
    title: 'Perbandingan Kristal', subTitle: 'Interactive Crystal Stats', hardness: 'Kekerasan', clarity: 'Kejelasan',
    impactResistance: 'Benturan', scratchResistance: 'Gores', durability: 'Daya Tahan', priceRange: 'Harga',
    step1: 'Klik kristal di kiri.', step2: 'Seret satu ke atas yang lain untuk membandingkan.',
    step3: 'Klik Tutup.', tipTitle: 'Tips',
    tipContent: 'Peringkat keseluruhan adalah rata-rata semua statistik. Lebih tinggi tidak selalu lebih baik - hesalit memiliki ketahanan benturan terbaik.',
    dragHint: 'Seret', dragSub: 'untuk membandingkan',
  },
  seo: [
  {
    "type": "title",
    "text": "Hesalita vs Cristal Mineral vs Zafiro: Guía comparativa de cristales de reloj",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Elegir el <strong>cristal de reloj</strong> adecuado es una decisión clave al comprar o restaurar un reloj. Esta guía compara <strong>hesalita (acrílico), cristal mineral y zafiro</strong> en dureza, claridad, resistencia a impactos, resistencia a arañazos, durabilidad y precio."
  },
  {
    "type": "title",
    "text": "Cristal de Hesalita (Acrílico / Plexiglás)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La hesalita es el cristal tradicional usado desde los años 30. Es blando (2-3 Mohs) y se raya con facilidad, pero se pule rápidamente. Ofrece la mejor resistencia a impactos. Ejemplo icónico: Omega Speedmaster Professional."
  },
  {
    "type": "title",
    "text": "Cristal Mineral (Endurecido)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El cristal mineral está compuesto de dióxido de silicio tratado térmicamente. Con 5 en la escala Mohs es más duro que la hesalita. Muy común en relojes de gama media como Seiko, Citizen y Orient."
  },
  {
    "type": "title",
    "text": "Cristal de Zafiro (Corindón Sintético)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El zafiro sintético se fabrica a partir de óxido de aluminio fundido. Con dureza 9 en la escala Mohs es prácticamente inrayable y ofrece la mayor claridad óptica. Es el estándar en relojería de lujo."
  },
  {
    "type": "title",
    "text": "Tabla comparativa de cristales",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Propiedad",
      "Hesalita",
      "Cristal Mineral",
      "Cristal de Zafiro"
    ],
    "rows": [
      [
        "Dureza Mohs",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "Claridad",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "Resistencia a impactos",
        "5/10 (La mejor)",
        "3/10",
        "2/10"
      ],
      [
        "Resistencia a arañazos",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "Reparable",
        "Sí (pulido)",
        "No (reemplazo)",
        "No (reemplazo)"
      ],
      [
        "Abombamiento posible",
        "Sí, extremo",
        "Limitado",
        "Limitado"
      ],
      [
        "Rango de precio",
        "5 - 30 €",
        "10 - 50 €",
        "30 - 200+ €"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Guía rápida de elección",
    "icon": "mdi:diamond-stone",
    "badge": "REFERENCIA",
    "html": "Para un <strong>reloj de uso diario</strong> elige zafiro por su resistencia a arañazos. Para <strong>restauraciones vintage</strong> la hesalita ofrece estética auténtica. El <strong>cristal mineral</strong> es la opción económica equilibrada."
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
