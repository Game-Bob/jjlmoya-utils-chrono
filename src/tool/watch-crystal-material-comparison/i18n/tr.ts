import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

const faq = [
  { "question": "Hangi saat camı çizilmelere karşı daha dayanıklıdır?", "answer": "Mohs sertliği 9 olan safir cam en dayanıklıdır. Mineral cam yaklaşık 5, hesalit ise 2-3 sertliğindedir ve kolay çizilir ancak parlatılabilir." },
  { "question": "Çizilmiş hesalit cam onarılabilir mi?", "answer": "Evet. Hesalit akrilik Polywatch gibi ürünlerle parlatılabilir. Mineral ve safir camlar çizildiğinde genellikle değiştirilir." },
  { "question": "Safir cam kırılmaz mı?", "answer": "Hayır. Safir çok serttir ancak güçlü darbelerde çatlayabilir. Hesalit darbe sırasında şekil değiştirdiği için daha dayanıklıdır." },
  { "question": "Dalış saati için hangi cam daha iyidir?", "answer": "Safir, çizilmelere ve su altındaki basınca dayanıklı olduğu için dalış saatlerinde standarttır." }
];
const howTo = [
  { "name": "Bir cam türü seçin", "text": "İstatistik kartını açmak için soldaki listeden bir cama tıklayın." },
  { "name": "İki camı karşılaştırın", "text": "Yan yana karşılaştırmak için bir camı diğerinin üzerine sürükleyin." },
  { "name": "Karşılaştırmayı kapatın", "text": "Tekli görünüme dönmek için karşılaştırmayı kapat düğmesine tıklayın." }
];
const description = 'Hesalit, mineral ve safir saat camlarını interaktif istatistik kartlarıyla karşılaştırın. Sertlik, berraklık, darbe ve çizilme direncini görün.';
const title = 'Saat camı karşılaştırması: hesalit vs mineral vs safir';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
