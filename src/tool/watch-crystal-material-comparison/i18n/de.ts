import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    "question": "Welches Uhrenglas ist am kratzfestesten?",
    "answer": "Saphirglas ist mit einer Härte von 9 auf der Mohs Skala am kratzfestesten nur Diamant ist härter. Mineralglas (5) ist mäßig kratzfest, während Hesalit Acryl (2-3) leicht zerkratzt, sich aber in Minuten mit PolyWatch polieren lässt."
  },
  {
    "question": "Können Kratzer auf Hesalitglas repariert werden?",
    "answer": "Ja, Hesalit (Acryl) lässt sich mit Polierpaste wie PolyWatch in wenigen Minuten polieren. Mineral und Saphirgläser können nicht poliert werden und müssen bei Beschädigung ersetzt werden."
  },
  {
    "question": "Welches Uhrenglas ist am bruchsichersten?",
    "answer": "Hesalit ist das bruchsicherste Material, da es sich eher verformt als zersplittert. Mineralglas und Saphirglas sind bei harten Stößen spröder."
  },
  {
    "question": "Welches Uhrenglas ist am besten für Taucheruhren geeignet?",
    "answer": "Saphirglas ist aufgrund seiner Kratzfestigkeit und Beständigkeit unter Wasserdruck der Standard für Taucheruhren."
  }
];
const howTo = [
  {
    "name": "Uhrenglas auswählen",
    "text": "Klicken Sie links auf ein Glas, um seine Statistikkarte zu sehen."
  },
  {
    "name": "Zwei Gläser vergleichen",
    "text": "Ziehen Sie ein Glas auf ein anderes, um sie nebeneinander zu vergleichen."
  },
  {
    "name": "Vergleich schließen",
    "text": "Klicken Sie auf Vergleich schließen, um zur Einzelansicht zurückzukehren."
  }
];
const title = 'Uhrenglas Vergleich Hesalit vs Mineralglas vs Saphirglas';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'uhrenglas-vergleich-hesalit-mineral-saphir',
  title,
  description: 'Vergleichen Sie Hesalit-, Mineral- und Saphirgläser nebeneinander mit interaktiven Stat-Karten. Sehen Sie Härte, Klarheit, Stoßfestigkeit und Haltbarkeit.',
  ui: {
    title: 'Uhrenglas Vergleich', subTitle: 'Interaktive Glas-Statistiken', hardness: 'Härte', clarity: 'Klarheit',
    impactResistance: 'Stoßfestigkeit', scratchResistance: 'Kratzfestigkeit', durability: 'Haltbarkeit', priceRange: 'Preis',
    step1: 'Klicken Sie links auf ein Glas.', step2: 'Ziehen Sie ein Glas auf ein anderes zum Vergleichen.',
    step3: 'Klicken Sie auf Schließen.', tipTitle: 'Tipp',
    tipContent: 'Gesamtwertung ist ein Durchschnitt. Höher ist nicht immer besser - Hesalit hat die beste Stoßfestigkeit.',
    dragHint: 'Ziehen', dragSub: 'zum Vergleichen',
  },
  seo: [
  {
    "type": "title",
    "text": "Hesalit vs Mineralglas vs Saphirglas Uhrenglas Vergleichsratgeber",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Die Wahl des richtigen <strong>Uhrenglases</strong> ist eine der wichtigsten Entscheidungen beim Kauf oder der Restaurierung einer Uhr. Dieser Ratgeber vergleicht <strong>Hesalit (Acryl), Mineralglas und Saphirglas</strong> in Härte, Klarheit, Stoßfestigkeit, Kratzfestigkeit, Haltbarkeit und Preis."
  },
  {
    "type": "title",
    "text": "Hesalitglas (Acryl / Plexiglas)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Hesalit ist das ursprüngliche Uhrenglasmaterial seit den 1930er Jahren. Es ist weich (2-3 Mohs) und zerkratzt leicht, lässt sich jedoch schnell auspolieren. Es bietet die beste Stoßfestigkeit. Berühmtes Beispiel: Omega Speedmaster Professional die Monduhr."
  },
  {
    "type": "title",
    "text": "Mineralglas (Gehärtet)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Mineralglas besteht aus Siliziumdioxid und wird wärmebehandelt. Mit 5 auf der Mohs Skala ist es härter als Hesalit, aber anfällig für Kratzer. Häufig in Mittelklasseuhren von Seiko, Citizen und Orient."
  },
  {
    "type": "title",
    "text": "Saphirglas (Synthetischer Korund)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Saphirglas wird aus synthetischem Korund hergestellt. Mit 9 auf der Mohs Skala ist es praktisch kratzfest und bietet die beste optische Klarheit. Es ist der Standard für Luxusuhren."
  },
  {
    "type": "title",
    "text": "Uhrenglas Vergleichstabelle",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Eigenschaft",
      "Hesalit",
      "Mineralglas",
      "Saphirglas"
    ],
    "rows": [
      [
        "Mohs Härte",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "Klarheit",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "Stoßfestigkeit",
        "5/10 (Beste)",
        "3/10",
        "2/10"
      ],
      [
        "Kratzfestigkeit",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "Reparierbar",
        "Ja (polieren)",
        "Nein (ersetzen)",
        "Nein (ersetzen)"
      ],
      [
        "Wölbung möglich",
        "Ja, extrem",
        "Begrenzt",
        "Begrenzt"
      ],
      [
        "Preisspanne",
        "5 - 30 €",
        "10 - 50 €",
        "30 - 200+ €"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Uhrenglas Auswahlratgeber",
    "icon": "mdi:diamond-stone",
    "badge": "REFERENZ",
    "html": "Für eine <strong>Alltagsuhr oder Tool Watch</strong> wählen Sie Saphirglas wegen der Kratzfestigkeit. Für <strong>Vintage Restaurationen</strong> bietet Hesalit authentische Optik. <strong>Mineralglas</strong> ist die preiswerte Mitte."
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
