import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

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
  seo: [
    { type: 'title', text: 'Saat Kadranındaki Telemetre Nedir?', level: 2 },
    { type: 'paragraph', html: 'Telemetre, kronograf saatlerin kadranında veya bezinde yer alan bir ölçektir. Kullanıcının hem görülebilen hem de duyulabilen uzak bir olaya (şimşek, havai fişek veya patlama gibi) olan mesafesini hesaplamasını sağlar.' },
  ],
  faq: [
    {
      question: 'Telemetre kadranı nasıl kullanılır?',
      answer: 'Olayı gördüğünüz anda (örneğin şimşek) kronografı başlatın. Sesi duyduğunuz anda durdurun. Saniye kolu, ölçekteki mesafeyi gösterecektir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Birimleri ve Ortamı Yapılandırın',
      text: 'Tercih ettiğiniz birimleri seçin ve bulunduğunuz yerdeki ortam hava sıcaklığını ayarlayın.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
