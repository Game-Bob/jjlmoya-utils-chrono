import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Hangi saat camı çizilmelere karşı daha dayanıklıdır?", "answer": "Mohs sertliği 9 olan safir cam en dayanıklıdır. Mineral cam yaklaşık 5, hesalit ise 2-3 sertliğindedir ve kolay çizilir ancak parlatılabilir." },
  { "question": "Çizilmiş hesalit cam onarılabilir mi?", "answer": "Evet. Hesalit akrilik Polywatch gibi ürünlerle parlatılabilir. Mineral ve safir camlar çizildiğinde genellikle değiştirilir." },
  { "question": "Safir cam kırılmaz mı?", "answer": "Hayır. Safir çok serttir ancak güçlü darbelerde çatlayabilir. Hesalit darbe sırasında şekil değiştirdiği için daha dayanıklıdır." },
  { "question": "Dalış saati için hangi cam daha iyidir?", "answer": "Safir, çizilmelere ve su altındaki basınca dayanıklı olduğu için dalış saatlerinde standarttır." }
];
const howTo = [
  { "name": "Bir cam türü seçin", "text": "İstatistik kartını açmak için soldaki listeden bir cama tıklayın." },
  { "name": "İki camı karşılaştırın", "text": "Yan yana karşılaştırmak için bir camı diğerinin üzerine sürükleyin." },
  { "name": "Karşılaştırmayı kapatın", "text": "Tekli görünüme dönmek için karşılaştırmayı kapat düğmesine tıklayın." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'saat-cami-karsilastirmasi-hesalit-mineral-safir',
  title,
  description: 'Hesalit, mineral ve safir saat camlarını interaktif istatistik kartlarıyla karşılaştırın. Sertlik, berraklık, darbe ve çizilme direncini görün.',
  ui: {
    title: 'Cam Karşılaştırması', subTitle: 'Interactive Crystal Stats', hardness: 'Sertlik', clarity: 'Berraklık',
    impactResistance: 'Darbe', scratchResistance: 'Çizilme', durability: 'Dayanıklılık', priceRange: 'Fiyat',
    step1: 'Soldaki bir kristale tıklayın.', step2: 'Birini diğerinin üzerine sürükleyerek karşılaştırın.',
    step3: 'Kapat\'a tıklayın.', tipTitle: 'İpucu',
    tipContent: 'Genel puan tüm istatistiklerin ortalamasıdır. Daha yüksek her zaman daha iyi değildir - hesalit en iyi darbe direncine sahiptir.',
    dragHint: 'Sürükle', dragSub: 'karşılaştırmak için',
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
