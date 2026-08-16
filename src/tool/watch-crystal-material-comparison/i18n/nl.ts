import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Welk horlogeglas is het meest krasbestendig?", "answer": "Saffier is het meest krasbestendig met een Mohs-hardheid van 9. Mineraalglas zit rond 5 en hesaliet rond 2-3, maar hesaliet kan worden gepolijst." },
  { "question": "Kun je een gekrast hesalietglas repareren?", "answer": "Ja. Hesalietacryl kan met producten zoals Polywatch worden gepolijst. Mineraal- en saffierglas moeten meestal worden vervangen." },
  { "question": "Is saffierglas onbreekbaar?", "answer": "Nee. Saffier is zeer hard maar kan bij een harde klap barsten. Hesaliet vangt schokken beter op doordat het vervormt." },
  { "question": "Welk glas is het beste voor een duikhorloge?", "answer": "Saffier is de standaard voor duikhorloges dankzij de weerstand tegen krassen en waterdruk." }
];
const howTo = [
  { "name": "Kies een glastype", "text": "Klik links op een glas om de statistiekkaart te openen." },
  { "name": "Vergelijk twee glazen", "text": "Sleep het ene glas op het andere om ze naast elkaar te vergelijken." },
  { "name": "Sluit de vergelijking", "text": "Klik op vergelijking sluiten om terug te keren naar de enkele weergave." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'horlogeglas-vergelijking-hesaliet-mineraal-saffier',
  title,
  description: 'Vergelijk hesaliet, mineraal en saffier horlogeglazen met interactieve statistiekenkaarten. Zie hardheid, helderheid, slagvastheid, krasbestendigheid en duurzaamheid.',
  ui: {
    title: 'Glas Vergelijking', subTitle: 'Interactive Crystal Stats', hardness: 'Hardheid', clarity: 'Helderheid',
    impactResistance: 'Slag', scratchResistance: 'Kras', durability: 'Duurzaamheid', priceRange: 'Prijs',
    step1: 'Klik links op een kristal.', step2: 'Sleep er een over een ander om te vergelijken.',
    step3: 'Klik op Sluiten.', tipTitle: 'Tip',
    tipContent: 'De algemene score is een gemiddelde van alle statistieken. Hoger is niet altijd beter - hesaliet heeft de beste slagvastheid.',
    dragHint: 'Sleep', dragSub: 'om te vergelijken',
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
