import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

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
const description = 'Vergelijk hesaliet, mineraal en saffier horlogeglazen met interactieve statistiekenkaarten. Zie hardheid, helderheid, slagvastheid, krasbestendigheid en duurzaamheid.';
const title = 'Vergelijking van horlogeglazen: hesalite vs mineraal vs saffier';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
