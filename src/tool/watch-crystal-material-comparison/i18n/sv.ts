import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Vilket urglas är mest reptåligt?', answer: 'Safirglas är mest reptåligt med en hårdhet på 9 på Mohs-skalan - endast diamant är hårdare. Mineralglas (5) är måttligt, medan hesalit (2-3) repas lätt men kan poleras.' },
  { question: 'Kan ett repat hesalitglas repareras?', answer: 'Ja, repor i hesalit kan poleras bort med Polywatch på några minuter. Mineral- och safirglas kan inte poleras och måste bytas ut.' },
  { question: 'Vilket glas är bäst för en dykarklocka?', answer: 'Safir är standard för dykarklockor tack vare sin reptålighet och hållbarhet. Hesalit rekommenderas inte för dykning.' },
];
const howTo = [
  { name: 'Välj ett glas', text: 'Klicka på ett glas till vänster för att se dess statistik-kort till höger.' },
  { name: 'Jämför två glas', text: 'Dra ett glas från listan och släpp det på ett annat för att jämföra dem sida vid sida.' },
  { name: 'Stäng jämförelsen', text: 'Klicka på "Close Comparison" för att återgå till enkelvyn.' },
];
const title = 'Urglasjämförelse: Hesalit vs Mineral vs Safir';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'urglasjamforelse-hesalit-mineral-safir',
  title,
  description: 'Jämför hesalit, mineral och safir urglas med interaktiva statistik-kort. Se hårdhet, klarhet, slagtålighet, reptålighet och hållbarhet.',
  ui: {
    title: 'Glasjämförelse', subTitle: 'Interactive Crystal Stats', hardness: 'Hårdhet', clarity: 'Klarhet',
    impactResistance: 'Slag', scratchResistance: 'Repor', durability: 'Hållbarhet', priceRange: 'Pris',
    step1: 'Klicka på ett glas till vänster.', step2: 'Dra ett över ett annat för att jämföra.',
    step3: 'Klicka på Stäng.', tipTitle: 'Tips',
    tipContent: 'Totalbetyget är ett genomsnitt av alla statistikvärden. Högre är inte alltid bättre - hesalit har bäst slagtålighet.',
    dragHint: 'Dra', dragSub: 'för att jämföra',
  },
  seo: [
    { type: 'title', text: 'Urglasjämförelse: Hesalit vs Mineral vs Safir', level: 2 },
    { type: 'paragraph', html: 'Jämför <strong>hesalit, mineral och safir</strong> urglas med interaktiva statistik-kort.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
