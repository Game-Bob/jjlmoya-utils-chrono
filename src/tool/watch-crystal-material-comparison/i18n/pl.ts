import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

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
const description = 'Porównaj szkiełka zegarkowe hesalitowe, mineralne i szafirowe z interaktywnymi kartami statystyk. Zobacz twardość, przejrzystość, odporność na uderzenia i zarysowania.';
const title = 'Porównanie szkieł zegarkowych: hesalit vs mineralne vs szafirowe';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
