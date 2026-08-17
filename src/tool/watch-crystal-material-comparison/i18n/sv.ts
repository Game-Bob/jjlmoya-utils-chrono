import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

const faq = [
  { "question": "Vilket klockglas är mest reptåligt?", "answer": "Safirglas är mest reptåligt med hårdhet 9 på Mohs skala. Mineralglas ligger runt 5 och hesalit runt 2-3, men hesalit kan poleras." },
  { "question": "Kan ett repat hesalitglas repareras?", "answer": "Ja. Hesalitakryl kan poleras med produkter som Polywatch. Mineral- och safirglas behöver vanligtvis bytas ut." },
  { "question": "Är safirglas oförstörbart?", "answer": "Nej. Safir är mycket hårt men kan spricka vid kraftiga stötar. Hesalit tar upp stötar bättre eftersom det deformeras." },
  { "question": "Vilket glas passar bäst för en dykarklocka?", "answer": "Safir är standard för dykarklockor eftersom det tål repor och tryck under vatten." }
];
const howTo = [
  { "name": "Välj en glastyp", "text": "Klicka på ett glas i listan till vänster för att öppna dess statistikkort." },
  { "name": "Jämför två glas", "text": "Dra ett glas över ett annat för att jämföra dem sida vid sida." },
  { "name": "Stäng jämförelsen", "text": "Klicka på stäng jämförelse för att återgå till enskild vy." }
];
const description = 'Jämför hesalit, mineral och safir urglas med interaktiva statistik-kort. Se hårdhet, klarhet, slagtålighet, reptålighet och hållbarhet.';
const title = 'Jämförelse av klockglas: hesalit vs mineral vs safir';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
