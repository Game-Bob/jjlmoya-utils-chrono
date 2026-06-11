import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Hangi saat camı en çizilmez?', answer: 'Safir cam, Mohs ölçeğinde 9 sertliği ile en çizilmezdir - sadece elmas daha serttir. Mineral cam (5) orta düzeydedir, hesalit (2-3) kolay çizilir ancak cilalanabilir.' },
  { question: 'Çizilmiş bir hesalit cam tamir edilebilir mi?', answer: 'Evet, hesalitteki çizikler Polywatch ile dakikalar içinde cilalanabilir. Mineral ve safir camlar cilalanamaz ve değiştirilmelidir.' },
  { question: 'Dalış saati için hangi cam en iyisidir?', answer: 'Safir, çizilme direnci ve dayanıklılığı nedeniyle dalış saatleri için standarttır. Hesalit dalış için önerilmez.' },
];
const howTo = [
  { name: 'Bir kristal seçin', text: 'Soldaki bir kristale tıklayarak sağdaki istatistik kartını görün.' },
  { name: 'İki kristali karşılaştırın', text: 'Listeden bir kristali sürükleyip başka birinin üzerine bırakarak yan yana karşılaştırın.' },
  { name: 'Karşılaştırmayı kapatın', text: 'Tekli görünüme dönmek için "Close Comparison" düğmesine tıklayın.' },
];
const title = 'Saat Camı Karşılaştırması: Hesalit vs Mineral vs Safir';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'saat-cami-karsilastirmasi-hesalit-mineral-safir',
  title,
  description: 'Hesalit, mineral ve safir saat camlarını interaktif istatistik kartlarıyla karşılaştırın. Sertlik, berraklık, darbe ve çizilme direncini görün.',
  ui: {
    title: 'Cam Karşılaştırması', subTitle: 'Interactive Crystal Stats', hardness: 'Sertlik', clarity: 'Berraklık',
    impactResistance: 'Darbe', scratchResistance: 'Çizilme', durability: 'Dayanıklılık', priceRange: 'Fiyat',
    step1: 'Soldaki bir kristale tıklayın.', step2: 'Birini diğerinin üzerine sürükleyerek karşılaştırın.',
    step3: 'Kapat\'a tıklayın.', tipTitle: 'İpucu',
    tipContent: 'Genel puan tüm istatistiklerin ortalamasıdır. Daha yüksek her zaman daha iyi değildir - hesalit en iyi darbe direncine sahiptir.',
    dragHint: 'Sürükle', dragSub: 'karşılaştırmak için',
  },
  seo: [
    { type: 'title', text: 'Saat Camı Karşılaştırması: Hesalit vs Mineral vs Safir', level: 2 },
    { type: 'paragraph', html: '<strong>Hesalit, mineral ve safir</strong> saat camlarını interaktif istatistik kartlarıyla karşılaştırın.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
