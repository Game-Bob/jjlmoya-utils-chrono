import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

const faq = [
  { "question": "Quale vetro per orologio resiste meglio ai graffi?", "answer": "Il vetro zaffiro è il più resistente, con durezza Mohs 9. Il minerale arriva a circa 5, mentre l'esalite è a 2-3 ma può essere lucidata." },
  { "question": "Si può riparare un vetro in esalite graffiato?", "answer": "Sì. L'acrilico esalite si lucida con prodotti come Polywatch. I vetri minerali e zaffiro di solito vanno sostituiti." },
  { "question": "Il vetro zaffiro è infrangibile?", "answer": "No. È molto duro ma può incrinarsi con un forte urto. L'esalite assorbe meglio gli impatti perché si deforma." },
  { "question": "Quale vetro è migliore per un orologio subacqueo?", "answer": "Lo zaffiro è lo standard per la resistenza ai graffi e alla pressione sott'acqua." }
];
const howTo = [
  { "name": "Seleziona un tipo di vetro", "text": "Fai clic su un vetro nell'elenco a sinistra per aprire la scheda delle statistiche." },
  { "name": "Confronta due vetri", "text": "Trascina un vetro sull'altro per confrontarli fianco a fianco." },
  { "name": "Chiudi il confronto", "text": "Fai clic su chiudi confronto per tornare alla vista singola." }
];
const description = 'Confronta i vetri da orologio hesalite, minerale e zaffiro con schede statistiche interattive. Vedi durezza, chiarezza, resistenza agli urti e ai graffi.';
const title = 'Confronto dei vetri per orologi: esalite vs minerale vs zaffiro';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
