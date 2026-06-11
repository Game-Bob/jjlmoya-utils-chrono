import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Quale vetro da orologio è più resistente ai graffi?', answer: 'Il vetro zaffiro è il più resistente con una durezza di 9 sulla scala di Mohs - solo il diamante è più duro. Il minerale (5) è moderato, mentre l\'hesalite (2-3) si graffia facilmente ma può essere lucidato.' },
  { question: 'Si può riparare un vetro hesalite graffiato?', answer: 'Sì, i graffi sull\'hesalite possono essere lucidati con Polywatch in pochi minuti. I vetri minerali e zaffiro non possono essere lucidati e devono essere sostituiti.' },
  { question: 'Quale vetro è migliore per un orologio subacqueo?', answer: 'Lo zaffiro è lo standard per gli orologi subacquei per la sua resistenza ai graffi e durata. L\'hesalite non è raccomandato per le immersioni.' },
];
const howTo = [
  { name: 'Seleziona un vetro', text: 'Clicca su un vetro a sinistra per vedere la sua scheda statistica a destra.' },
  { name: 'Confronta due vetri', text: 'Trascina un vetro dalla lista e rilascialo su un altro per confrontarli fianco a fianco.' },
  { name: 'Chiudi confronto', text: 'Clicca su "Close Comparison" per tornare alla vista singola.' },
];
const title = 'Confronto Vetri da Orologio: Hesalite vs Minerale vs Zaffiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'confronto-vetri-orologio-hesalite-minerale-zaffiro',
  title,
  description: 'Confronta i vetri da orologio hesalite, minerale e zaffiro con schede statistiche interattive. Vedi durezza, chiarezza, resistenza agli urti e ai graffi.',
  ui: {
    title: 'Confronto Vetri', subTitle: 'Interactive Crystal Stats', hardness: 'Durezza', clarity: 'Chiarezza',
    impactResistance: 'Urto', scratchResistance: 'Graffi', durability: 'Durata', priceRange: 'Prezzo',
    step1: 'Clicca su un vetro a sinistra.', step2: 'Trascinane uno su un altro per confrontare.',
    step3: 'Clicca su Chiudi.', tipTitle: 'Consiglio',
    tipContent: 'Il voto complessivo è una media di tutte le statistiche. Più alto non significa sempre migliore - l\'hesalite ha la migliore resistenza agli urti.',
    dragHint: 'Trascina', dragSub: 'per confrontare',
  },
  seo: [
    { type: 'title', text: 'Confronto Vetri da Orologio: Hesalite vs Minerale vs Zaffiro', level: 2 },
    { type: 'paragraph', html: 'Confronta <strong>hesalite, minerale e zaffiro</strong> con schede statistiche interattive. Durezza, chiarezza, resistenza agli urti e ai graffi a colpo d\'occhio.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
