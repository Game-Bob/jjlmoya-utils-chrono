import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Welk horlogeglas is het krasbestendigst?', answer: 'Saffierglas is het krasbestendigst met een hardheid van 9 op de Mohs-schaal - alleen diamant is harder. Mineraalglas (5) is matig, terwijl hesaliet (2-3) snel krassen vertoont maar gepolijst kan worden.' },
  { question: 'Kan een bekrast hesalietglas worden gerepareerd?', answer: 'Ja, krassen in hesaliet kunnen met Polywatch in minuten worden weggepoetst. Mineraal- en saffierglazen kunnen niet worden gepolijst en moeten worden vervangen.' },
  { question: 'Welk glas is het beste voor een duikhorloge?', answer: 'Saffier is de standaard voor duikhorloges vanwege zijn krasbestendigheid en duurzaamheid. Hesaliet wordt niet aanbevolen voor duiken.' },
];
const howTo = [
  { name: 'Selecteer een kristal', text: 'Klik links op een kristal om zijn statistiekenkaart rechts te zien.' },
  { name: 'Vergelijk twee kristallen', text: 'Sleep een kristal uit de lijst en laat het op een ander vallen om ze naast elkaar te vergelijken.' },
  { name: 'Sluit vergelijking', text: 'Klik op "Close Comparison" om terug te keren naar de enkele weergave.' },
];
const title = 'Horlogeglas Vergelijking: Hesaliet vs Mineraal vs Saffier';

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
    { type: 'title', text: 'Horlogeglas Vergelijking: Hesaliet vs Mineraal vs Saffier', level: 2 },
    { type: 'paragraph', html: 'Vergelijk <strong>hesaliet, mineraal en saffier</strong> horlogeglazen met interactieve statistiekenkaarten.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
