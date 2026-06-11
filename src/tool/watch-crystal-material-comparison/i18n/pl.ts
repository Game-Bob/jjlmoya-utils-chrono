import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Które szkiełko zegarkowe jest najbardziej odporne na zarysowania?', answer: 'Szafirowe szkiełko jest najbardziej odporne z twardością 9 w skali Mohsa - tylko diament jest twardszy. Mineralne (5) jest średnie, podczas gdy hesalit (2-3) rysuje się łatwo, ale można go wypolerować.' },
  { question: 'Czy porysowane szkiełko hesalitowe można naprawić?', answer: 'Tak, rysy na hesalicie można wypolerować Polywatchem w kilka minut. Szkiełek mineralnych i szafirowych nie można polerować - trzeba je wymienić.' },
  { question: 'Które szkiełko jest najlepsze do zegarka nurkowego?', answer: 'Szafir jest standardem dla zegarków nurkowych ze względu na odporność na zarysowania i trwałość. Hesalit nie jest zalecany do nurkowania.' },
];
const howTo = [
  { name: 'Wybierz szkiełko', text: 'Kliknij szkiełko po lewej, aby zobaczyć jego kartę statystyk po prawej.' },
  { name: 'Porównaj dwa szkiełka', text: 'Przeciągnij szkiełko z listy i upuść na inne, aby porównać je obok siebie.' },
  { name: 'Zamknij porównanie', text: 'Kliknij "Close Comparison", aby wrócić do widoku pojedynczego.' },
];
const title = 'Porównanie Szkiełek Zegarkowych: Hesalit vs Mineralne vs Szafir';

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
  seo: [
    { type: 'title', text: 'Porównanie Szkiełek Zegarkowych: Hesalit vs Mineralne vs Szafir', level: 2 },
    { type: 'paragraph', html: 'Porównaj <strong>hesalit, mineralne i szafir</strong> z interaktywnymi kartami statystyk.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
