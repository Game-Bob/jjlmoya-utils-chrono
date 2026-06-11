import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Welches Uhrenglas ist am kratzfestesten?', answer: 'Saphirglas ist mit einer Härte von 9 auf der Mohs-Skala am kratzfestesten - nur Diamant ist härter. Mineralglas (5) ist mittel, während Hesalit (2-3) leicht zerkratzt, aber poliert werden kann.' },
  { question: 'Kann ein zerkratztes Hesalitglas repariert werden?', answer: 'Ja, Kratzer in Hesalit können mit Polywatch in Minuten wegpoliert werden. Mineral- und Saphirgläser können nicht poliert werden und müssen bei Kratzern oder Bruch ersetzt werden.' },
  { question: 'Welches Glas ist am besten für Taucheruhren?', answer: 'Saphir ist der Standard für Taucheruhren aufgrund seiner Kratzfestigkeit und Haltbarkeit. Hesalit wird nicht zum Tauchen empfohlen.' },
];
const howTo = [
  { name: 'Kristall auswählen', text: 'Klicken Sie links auf einen Kristall, um seine Statistik-Karte rechts zu sehen.' },
  { name: 'Zwei Kristalle vergleichen', text: 'Ziehen Sie einen Kristall aus der Liste und legen Sie ihn auf einen anderen, um sie nebeneinander zu vergleichen.' },
  { name: 'Vergleich schließen', text: 'Klicken Sie auf "Close Comparison", um zur Einzelansicht zurückzukehren.' },
];
const title = 'Uhrenglas Vergleich: Hesalit vs Mineralglas vs Saphir';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'uhrenglas-vergleich-hesalit-mineral-saphir',
  title,
  description: 'Vergleichen Sie Hesalit, Mineralglas und Saphir Uhrengläser mit interaktiven Statistik-Karten. Sehen Sie Härte, Klarheit, Schlagfestigkeit, Kratzfestigkeit und Haltbarkeit.',
  ui: {
    title: 'Uhrenglas Vergleich', subTitle: 'Interactive Crystal Stats', hardness: 'Härte', clarity: 'Klarheit',
    impactResistance: 'Schlag', scratchResistance: 'Kratzer', durability: 'Haltbarkeit', priceRange: 'Preis',
    step1: 'Klicken Sie links auf einen Kristall.', step2: 'Ziehen Sie einen auf einen anderen zum Vergleichen.',
    step3: 'Klicken Sie auf Schließen.', tipTitle: 'Tipp',
    tipContent: 'Die Gesamtwertung ist ein Durchschnitt aller Werte. Höher ist nicht immer besser - Hesalit hat die beste Schlagfestigkeit.',
    dragHint: 'Ziehen', dragSub: 'zum Vergleichen',
  },
  seo: [
    { type: 'title', text: 'Uhrenglas Vergleich: Hesalit vs Mineralglas vs Saphir', level: 2 },
    { type: 'paragraph', html: 'Vergleichen Sie <strong>Hesalit, Mineralglas und Saphir</strong> Uhrengläser mit interaktiven Statistik-Karten. Sehen Sie Härte, Klarheit, Schlagfestigkeit, Kratzfestigkeit und Haltbarkeit auf einen Blick.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
