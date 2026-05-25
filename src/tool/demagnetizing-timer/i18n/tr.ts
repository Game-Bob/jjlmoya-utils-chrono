import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'demanyetizasyon-sureci',
  title: 'Saat Demanyetizasyon Zamanlayıcısı',
  description: 'DIY saat demanyetizasyonu için sesli uyarılı hassas geri sayım zamanlayıcısı. Demanyetizasyon bobininiz için gereken tam basma süresini alın.',
  ui: {
    title: 'Zamanlayıcı Ayarları',
    durationLabel: 'Darbe Süresi',
    duration1s: '1 Saniye',
    duration2s: '2 Saniye',
    duration3s: '3 Saniye',
    customLabel: 'Özel',
    startButton: 'Başlat',
    stopButton: 'Durdur',
    resetButton: 'Sıfırla',
    pressPhase: 'Demanyetizatör düğmesine şimdi basın!',
    holdPhase: 'Düğmeyi basılı tutun...',
    releasePhase: 'Şimdi bırakın!',
    completePhase: 'Tamam! Saati uzaklaştırın.',
    ready: 'Hazır',
    seconds: 'sn',
    instructions: 'Nasıl Demanyetize Edilir',
    step1: 'Saati demanyetizatör platformuna yerleştirin.',
    step2: 'Başlat\'a basın ve demanyetizatör düğmesini ayarlanan süre boyunca basılı tutun.',
    step3: 'Düğmeyi bırakın ve saati yavaşça uzaklaştırın.',
    step4: 'Gerekirse 2–3 kez tekrarlayın, her seferinde saati döndürün.',
    tipTitle: 'İpucu',
    tipContent: 'Yeniden mıknatıslanmayı önlemek için saati, güç açıkken demanyetizatörden en az 1 metre uzakta tutun.',
  },
  seo: [
    { type: 'title', text: 'Saat Demanyetizasyon Zamanlayıcısı-Y için Hassas Darbe Zamanlaması', level: 2 },
    { type: 'paragraph', html: 'Bir saati demanyetize etmek, hassas düğme basma zamanlaması gerektirir. Çoğu DIY demanyetizatör, azalan bir alternatif manyetik alan oluşturarak çalışır ve ideal darbe <strong>1 ila 3 saniye</strong> arasında sürer. Çok kısa basarsanız alan manyetizasyonu nötralize edemez; çok uzun basarsanız mekanizmayı doyurma riskiniz vardır.' },
    { type: 'title', text: 'Saat Demanyetizasyonunda Zamanlamanın Önemi', level: 3 },
    { type: 'paragraph', html: 'Demanyetizatördeki düğmeye bastığınızda, bobinin içinde alternatif bir manyetik alan oluşur. Alan şebeke frekansında (50/60 Hz) salınır ve bıraktığınızda söner. Amaç, saati bu sönen alana <strong>tam yeterli süre</strong> maruz bırakarak yay ve diğer çelik bileşenlerdeki manyetik alanları rastgele hale getirmektir. 1 ila 3 saniyelik bir darbe çoğu mekanizma için ideal noktadır.' },
    { type: 'title', text: 'Bir Demanyetizatör Nasıl Çalışır', level: 3 },
    { type: 'paragraph', html: 'Bir demanyetizatör, esasen enerji verildiğinde güçlü bir alternatif manyetik alan üreten bir tel bobindir. Mıknatıslanmış bir saati bu alana yerleştirmek, iç manyetik alanlarının hızla tersine dönmesine neden olur. Alan aniden kaldırıldığında (düğmeyi bırakarak), alanlar rastgele bir desende stabilize olur ve net mıknatıslanmayı etkili bir şekilde iptal eder.' },
    { type: 'title', text: 'Saatinizin Demanyetizasyona İhtiyacı Olduğunu Gösteren İşaretler', level: 3 },
    { type: 'paragraph', html: 'Mıknatıslanmış bir saatin yaygın belirtileri şunlardır: günde birkaç dakika ileri gitme, pozisyonlara göre tutarsız zaman işleyişi, duyulabilir şekilde daha hızlı tik sesi ve aşırı durumlarda saatin tamamen durması. Otomatik saatiniz aniden hızlanmaya başlarsa, genellikle mıknatıslanma suçludur ve demanyetizasyon basit bir çözümdür.' },
  ],
  faq: [
    {
      question: 'Demanyetizatör düğmesine ne kadar süre basmalıyım?',
      answer: '1 ila 3 saniye önerilen darbe süresidir. 1 saniye ile başlayın ve gerekirse artırın. Çok uzun darbeler bobini aşırı ısıtabilir ve sonuçları iyileştirmez.',
    },
    {
      question: 'Bir saati birden fazla kez demanyetize edebilir miyim?',
      answer: 'Evet. İşlemi 2 ila 3 kez tekrarlayın ve her seferinde saati 90 derece döndürün. Bu, tüm eksenlerin alternatif alana maruz kalmasını sağlar. Aşırı demanyetizasyon riski yoktur.',
    },
    {
      question: 'Demanyetizasyon kuvars saatlerde işe yarar mı?',
      answer: 'Kuvars saatler, az sayıda ferromanyetik bileşen içerdiklerinden nadiren mıknatıslanmadan etkilenir. Ancak, bazı kuvars mekanizmalarındaki step motor mıknatıslanarak ibrelerin düzensiz hareket etmesine neden olabilir. Demanyetizasyon kuvars saatler için güvenlidir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Süreyi Ayarla',
      text: 'Mıknatıslanmanın şiddetine bağlı olarak 1, 2 veya 3 saniye seçin.',
    },
    {
      name: 'Saati Konumlandır',
      text: 'Saati demanyetizatör platformuna düz bir şekilde, bobinin üzerine ortalanmış olarak yerleştirin.',
    },
    {
      name: 'Bas ve Tut',
      text: 'Başlat düğmesine ve demanyetizatör düğmesine aynı anda basın ve ayarlanan süre boyunca basılı tutun.',
    },
    {
      name: 'Bırak ve Uzaklaştır',
      text: 'Düğmeyi bırakın ve demanyetizatörü kapatmadan önce saati en az 1 metre yavaşça uzaklaştırın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Demanyetizatör düğmesine ne kadar süre basmalıyım?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ila 3 saniye önerilen darbe süresidir. 1 saniye ile başlayın ve gerekirse artırın. Çok uzun darbeler bobini aşırı ısıtabilir ve sonuçları iyileştirmez.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir saati birden fazla kez demanyetize edebilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. İşlemi 2 ila 3 kez tekrarlayın ve her seferinde saati 90 derece döndürün. Bu, tüm eksenlerin alternatif alana maruz kalmasını sağlar. Aşırı demanyetizasyon riski yoktur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Demanyetizasyon kuvars saatlerde işe yarar mı?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kuvars saatler, az sayıda ferromanyetik bileşen içerdiklerinden nadiren mıknatıslanmadan etkilenir. Ancak, bazı kuvars mekanizmalarındaki step motor mıknatıslanarak ibrelerin düzensiz hareket etmesine neden olabilir. Demanyetizasyon kuvars saatler için güvenlidir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Demanyetizasyon Zamanlayıcısı',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Bir saat nasıl demanyetize edilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Süreyi Ayarla',
          'text': 'Mıknatıslanmanın şiddetine bağlı olarak 1, 2 veya 3 saniye seçin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Saati Konumlandır',
          'text': 'Saati demanyetizatör platformuna düz bir şekilde, bobinin üzerine ortalanmış olarak yerleştirin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Bas ve Tut',
          'text': 'Başlat düğmesine ve demanyetizatör düğmesine aynı anda basın ve ayarlanan süre boyunca basılı tutun.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Bırak ve Uzaklaştır',
          'text': 'Düğmeyi bırakın ve demanyetizatörü kapatmadan önce saati en az 1 metre yavaşça uzaklaştırın.',
        },
      ],
    },
  ],
};
