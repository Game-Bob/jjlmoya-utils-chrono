import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Które szkło zegarka jest najbardziej odporne na zarysowania?", "answer": "Najbardziej odporny jest szafir, o twardości 9 w skali Mohsa. Szkło mineralne ma około 5, a hesalit 2-3, lecz można go polerować." },
  { "question": "Czy można naprawić porysowany hesalit?", "answer": "Tak. Hesalit można polerować środkami takimi jak Polywatch. Szkło mineralne i szafirowe zwykle trzeba wymienić." },
  { "question": "Czy szkło szafirowe jest niezniszczalne?", "answer": "Nie. Jest bardzo twarde, ale może pęknąć przy silnym uderzeniu. Hesalit lepiej pochłania wstrząsy, bo się odkształca." },
  { "question": "Które szkło jest najlepsze do zegarka nurkowego?", "answer": "Szafir jest standardem w zegarkach nurkowych ze względu na odporność na zarysowania i ciśnienie wody." }
];
const howTo = [
  { "name": "Wybierz rodzaj szkła", "text": "Kliknij szkło na liście po lewej, aby otworzyć jego kartę statystyk." },
  { "name": "Porównaj dwa szkła", "text": "Przeciągnij jedno szkło na drugie, aby porównać je obok siebie." },
  { "name": "Zamknij porównanie", "text": "Kliknij zamknięcie porównania, aby wrócić do widoku pojedynczego szkła." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'porownanie-szkielek-zegarkowych-hesalit-mineralne-szafir',
  title,
  description: 'Porównaj szkiełka zegarkowe hesalitowe, mineralne i szafirowe z interaktywnymi kartami statystyk. Zobacz twardość, przejrzystość, odporność na uderzenia i zarysowania.',
  ui: {
    title: 'Porównanie Szkiełek', subTitle: 'Interactive Crystal Stats', hardness: 'Twardość', clarity: 'Przejrzystość',
    impactResistance: 'Uderzenia', scratchResistance: 'Zarysowania', durability: 'Trwałość', priceRange: 'Cena',
    step1: 'Kliknij szkiełko po lewej.', step2: 'Przeciągnij jedno na drugie, aby porównać.',
    step3: 'Kliknij Zamknij.', tipTitle: 'Wskazówka',
    tipContent: 'Ogólna ocena to średnia wszystkich statystyk. Wyższa nie zawsze oznacza lepszą - hesalit ma najlepszą odporność na uderzenia.',
    dragHint: 'Przeciągnij', dragSub: 'aby porównać',
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
