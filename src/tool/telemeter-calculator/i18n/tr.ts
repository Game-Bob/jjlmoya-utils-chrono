import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Telemetre Hesaplayıcı: Telemetre Kadranı Nasıl Kullanılır';
const description = 'Telemetre kadranlı saatleri nasıl kullanacağınızı öğrenin. Hava sıcaklığına göre şimşek ile gök gürültüsü arasındaki mesafeyi hesaplayın.';
const faq = [
  { "question": "Saatteki telemetre ölçeği ne işe yarar?", "answer": "Şimşek ve gök gürültüsü gibi aynı anda görülen ve duyulan bir olayın uzaklığını hesaplamak için kullanılır." },
  { "question": "Telemetre ile yıldırım uzaklığı nasıl hesaplanır?", "answer": "Şimşeği gördüğünüzde kronografı başlatın, gök gürültüsünü duyduğunuzda durdurun ve saniye kolunun gösterdiği sayıyı okuyun." },
  { "question": "Takimetre ile telemetre arasındaki fark nedir?", "answer": "Takimetre bilinen bir mesafedeki hızı ölçer. Telemetre ise zamana ve ses hızına göre uzaklığı ölçer." },
  { "question": "Telemetre ölçeği ne kadar doğrudur?", "answer": "Genellikle 20°C'de yaklaşık 343 m/s ses hızına göre ayarlanır. Sıcaklık değişimleri küçük hatalara yol açar." },
  { "question": "Telemetre su altında kullanılabilir mi?", "answer": "Hayır. Ses suda havaya göre dört kattan daha hızlı ilerler." }
];
const howTo = [
  { "name": "Birimleri ve sıcaklığı ayarlayın", "text": "Metrik veya İngiliz birimlerini seçin ve ortam sıcaklığını girin." },
  { "name": "Şimşekte kronografı başlatın", "text": "Şimşeği gördüğünüzde Şimşeği Tetikle düğmesine veya saat iki konumundaki butona basın." },
  { "name": "Gök gürültüsünde durdurun", "text": "Gök gürültüsünü duyduğunuzda Sesi Tetikle düğmesine veya aynı butona tekrar basın." },
  { "name": "Uzaklığı okuyun", "text": "Hesaplanan uzaklığı sonuç ekranından veya telemetre bezeli üzerindeki koldan okuyun." }
];

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemetre-hesaplayici',
  title: 'Telemetre Hesaplayıcı: Telemetre Kadranı Nasıl Kullanılır',
  description: 'Telemetre kadranlı saatleri nasıl kullanacağınızı öğrenin. Hava sıcaklığına göre şimşek ile gök gürültüsü arasındaki mesafeyi hesaplayın.',
  ui: {
    title: 'Telemetre Hesaplayıcı',
    triggerFlash: 'Şimşek Tetikle',
    triggerSound: 'Ses Tetikle',
    stop: 'Durdur',
    reset: 'Sıfırla',
    settings: 'Ayarlar',
    unitSystem: 'Birim Sistemi',
    metric: 'Metrik (km)',
    imperial: 'İmparatorluk (mil)',
    temperature: 'Hava Sıcaklığı',
    speedOfSound: 'Ses Hızı',
    distanceResult: 'Ölçülen Mesafe',
    elapsedTime: 'Geçen Süre',
    historyTitle: 'Ölçüm Geçmişi',
    noHistory: 'Henüz ölçüm yok. Yukarıdan bir hesaplama başlatın!',
    sec: 'sn',
    km: 'km',
    m: 'm',
    mi: 'mil',
    ft: 'ft',
    step1: 'Şimşeği veya parlamayı görür görmez saat 2 yönündeki butona veya "Şimşek Tetikle"ye basın.',
    step2: 'Gök gürültüsünü veya sesi duyduğunuzda tekrar aynı butona veya "Ses Tetikle"ye basın.',
    step3: 'Saniye ibresinin telemetre kadranında durduğu yerdeki mesafeyi okuyun.',
    tipTitle: 'İpucu',
    tipContent: 'Sıcak hava sesi soğuk havaya göre daha hızlı iletir. Ortam sıcaklığını ayarlamak, hesaplanan mesafenin çevre fiziğinizle eşleşmesini sağlar.',
  },
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
