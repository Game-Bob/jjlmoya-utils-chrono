import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'saat-hassasiyeti-hesaplama',
  title: 'Saat Hassasiyeti ve Günlük Sapma Hesaplama',
  description: 'Mekanik veya kuvars saatlerinizin hassasiyetini ve kararlılığını analiz etmek için günlük zaman sapmasını kaydedin ve hesaplayın.',
  ui: {
    title: 'Saat Hassasiyeti',
    selectWatch: 'Bir saat seçin veya ekleyin',
    watchPlaceholder: 'örn. Seiko SKX007',
    addWatch: 'Saat Ekle',
    deleteWatch: 'Saati Sil',
    addLog: 'Yeni Ölçüm Kaydet',
    offsetLabel: 'Sapma (saniye)',
    offsetPlaceholder: '0',
    dateLabel: 'Ölçüm Zamanı',
    saveLog: 'Kaydı Kaydet',
    avgRate: 'Ortalama Günlük Sapma',
    consistency: 'Hassasiyet Durumu',
    totalLogs: 'Toplam Kayıtlar',
    historyTitle: 'Ölçüm Geçmişi',
    noLogs: 'Bu saat için henüz kayıt bulunmamaktadır. Hassasiyeti hesaplamak için en az iki kayıt ekleyin.',
    tableDate: 'Tarih & Saat',
    tableOffset: 'Sapma',
    tableRate: 'Günlük Sapma',
    tableActions: 'İşlemler',
    deleteLog: 'Sil',
    coscExcellent: 'COSC Kronometre (+4/-6 sn/gün)',
    excellent: 'Mükemmel (0 ila +5 sn/gün)',
    good: 'İyi (+/- 10 sn/gün)',
    needsService: 'Bakım Gerekli (> +/- 20 sn/gün)',
    secondsPerDay: 'sn/gün',
    seconds: 'saniye',
    referenceTime: 'Referans Zaman',
    watchTime: 'Saat Zamanı',
    useCurrentTime: 'Şimdiki Zamanı Kullan',
    calculatedRate: 'Hesaplanan Sapma',
    driftPredictorTitle: 'Sapma Tahmini & Hesaplama',
    driftPredictorDesc: 'Zaman içindeki birikmiş sapmayı tahmin edin ve endüstri standartlarıyla karşılaştırın.',
    dailyRateInput: 'Günlük Sapma (saniye/gün)',
    dailyRatePlaceholder: 'örn. +4.5 veya -3',
    driftHeading: 'Tahminler',
    period: 'Dönem',
    accumulatedDrift: 'Tahmini Sapma',
    day: '1 Gün',
    week: '1 Hafta',
    month: '1 Ay',
    months3: '3 Ay',
    months6: '6 Ay',
    year: '1 Yıl',
    years5: '5 Yıl',
    watchStandardTitle: 'Sertifikasyon Standartları',
    trackerHeading: 'Gerçek Zamanlı Sapma Ölçümü',
    driftCalculatorTab: 'Sapma Tahmini',
    trackerTab: 'Hassasiyet Günlüğü',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'COSC Kronometre',
    stdMetas: 'METAS Master',
    stdStdMech: 'Standart Mekanik',
    stdQuartz: 'Standart Kuvars',
    stdHaq: 'Yüksek Hassasiyetli Kuvars',
    presetRolex: 'Rolex (+2 s/g)',
    presetCosc: 'COSC (+4 s/g)',
    presetStdMech: 'Standart (+15 s/g)',
    presetQuartz: 'Kuvars (+0.5 s/g)',
    statusPass: 'Geçti',
    statusFail: 'Kaldı',
    toleranceRolex: '±2 s/g',
    toleranceCosc: '-4 / +6 s/g',
    toleranceMetas: '0 / +5 s/g',
    toleranceStdMech: '±15 s/g',
    toleranceQuartz: '±0.5 s/g',
    toleranceHaq: '±10 s/yıl',
  },
  seo: [
    { type: 'title', text: 'Mekanik Saatlerde Hassasiyet ve Günlük Sapma Ayarı Rehberi', level: 2 },
    { type: 'paragraph', html: 'Mekanik saatler mikro-mühendisliğin harikalarıdır, ancak kuvars mekanizmalardan farklı olarak zaman tutma hassasiyetlerini etkileyen çeşitli fiziksel ve çevresel kuvvetlere maruz kalırlar. Günlük sapmayı takip etmek saatinizin sağlığını korumak ve profesyonel bir bakıma ne zaman ihtiyaç duyacağını belirlemek için temel adımdır.' },
    { type: 'title', text: 'Mekanik Saatler Neden Sapma Yapar: Temel Faktörler', level: 2 },
    { type: 'paragraph', html: 'Günlük çalışma hızını birçok faktör etkiler. Yerçekimi, saatin duruş pozisyonuna bağlı olarak balans çarkını ve balans yayını farklı şekillerde etkiler. Sıcaklık dalgalanmaları yayın genleşmesine veya büzülmesine yol açarak titreşim frekansını değiştirir. Ek olarak, ana yayın gerginliği (güç rezervi) genliği etkiler: Tam kurulmuş bir saat, güç rezervinin sonuna yaklaşmış bir saate kıyasla daha kararlı çalışır.' },
    { type: 'title', text: 'Birikmiş Sapma: Saniyelerin Saatlere Dönüşümü', level: 2 },
    { type: 'paragraph', html: 'Günde sadece +5 saniyelik bir sapma önemsiz görünebilir ancak zaman birikimlidir. Bir haftada bu sapma 35 saniyeye ulaşır, bir ayda 2.5 dakika olur ve bir yılda saatiniz 30 dakikadan fazla sapma yapar. Bu birikmiş sapma, saatlerini sırayla takan koleksiyonerler için düzenli ölçüm yapmanın önemini gösterir.' },
    { type: 'title', text: 'Saat Hassasiyeti Manuel Olarak Nasıl Ölçülür ve Hesaplanır', level: 2 },
    { type: 'paragraph', html: 'Pahalı bir zaman ayar cihazı (timegrapher) olmadan saatinizin sapmasını manuel olarak ölçebilirsiniz. Saatinizi hassas bir atom saati ile (örn. UTC saati) senkronize edin. 24 ila 48 saat sonra yeni sapmayı saniye cinsinden not edin. Ortalama günlük sapmayı bulmak için bu farkı gün sayısına bölün.' },
    { type: 'title', text: 'Gece Duruş Pozisyonlarını Doğal Ayar İçin Kullanma', level: 2 },
    { type: 'paragraph', html: 'Birçok mekanik saat, takılmadığı zamanlarda duruş şekline bağlı olarak hafifçe ayarlanabilir. Örneğin, saati düz bir zemine kadranı yukarı bakacak şekilde bırakmak genellikle saatin biraz hızlanmasına yol açar. Yan yatırıp kurma kolu aşağıda kalacak şekilde bırakmak ise saatin zaman kaybetmesine neden olur. Bu duruş şekillerini kullanarak saatinizin sapmasını kasa kapağını açmadan telafi edebilirsiniz.' },
  ],
  faq: [
    {
      question: 'Mekanik saatler için normal günlük sapma miktarı nedir?',
      answer: 'Standart mekanik saatler genellikle günde +/- 10 ila 20 saniye sapma gösterir. COSC sertifikalı kronometreler günde -4 ila +6 saniye aralığında çalışacak şekilde ayarlanmıştır. Yüksek kaliteli kuvars mekanizmalar günde +/- 0.5 saniyeden daha az sapma elde edebilir.',
    },
    {
      question: 'Saadimin hassasiyeti neden duruş pozisyonuna göre değişiyor?',
      answer: 'Yerçekimi kuvveti, saatin duruş şekline (kadran yukarıda/aşağıda veya kurma kolu yukarıda/aşağıda) bağlı olarak balans çarkını ve balans yayını farklı şekillerde çeker. Bu durum genlikte ve çalışma hızında küçük değişikliklere neden olur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Başlangıç Değerini Kaydedin',
      text: 'Saati güvenilir bir atom saati ile senkronize edin ve saniye cinsinden başlangıç sapmasını not edin.',
    },
    {
      name: 'Takın ve Bekleyin',
      text: 'Saati normal şekilde takın veya en az 12 ila 24 saat boyunca sabit bir pozisyonda saklayın.',
    },
    {
      name: 'Bitiş Değerini Kaydedin',
      text: 'Referans zamana göre yeni sapmayı girin. Sistem otomatik olarak günlük sapmayı hesaplayacaktır.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Hassasiyeti ve Günlük Sapma Hesaplama',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Mekanik saatler için normal günlük sapma miktarı nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standart mekanik saatler genellikle günde +/- 10 ila 20 saniye sapma gösterir. COSC sertifikalı kronometreler günde -4 ila +6 saniye aralığında çalışacak şekilde ayarlanmıştır. Yüksek kaliteli kuvars mekanizmalar günde +/- 0.5 saniyeden daha az sapma elde edebilir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Saadimin hassasiyeti neden duruş pozisyonuna göre değişiyor?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yerçekimi kuvveti, saatin duruş şekline (kadran yukarıda/aşağıda veya kurma kolu yukarıda/aşağıda) bağlı olarak balans çarkını ve balans yayını farklı şekillerde çeker. Bu durum genlikte ve çalışma hızında küçük değişikliklere neden olur.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat Hassasiyeti Manuel Olarak Nasıl Ölçülür ve Hesaplanır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Başlangıç Değerini Kaydedin',
          'text': 'Saati güvenilir bir atom saati ile senkronize edin ve saniye cinsinden başlangıç sapmasını not edin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Takın ve Bekleyin',
          'text': 'Saati normal şekilde takın veya en az 12 ila 24 saat boyunca sabit bir pozisyonda saklayın.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Bitiş Değerini Kaydedin',
          'text': 'Referans zamana göre yeni sapmayı girin. Sistem otomatik olarak günlük sapmayı hesaplayacaktır.'
        }
      ]
    }
  ],
};
