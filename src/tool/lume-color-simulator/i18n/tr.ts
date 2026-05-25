import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'luminesans-renk-simulatoru',
  title: 'Lüminesans Renk Simülatörü–Saat Lume Görselleştirici',
  description: 'Farklı lüminesans renklerini gerçek zamanlı olarak görselleştirin. C1, C3, BGW9, LumiNova ve daha fazlasını ortam parlaklık seviyelerinde karşılaştırın.',
  ui: {
    title: 'Lüminesans Renk Simülatörü',
    lumeType: 'Lume Türü',
    brightness: 'Ortam Parlaklığı',
    dark: 'Karanlık',
    light: 'Aydınlık',
    color: 'Renk',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Tür',
    description: 'Açıklama',
    c1Name: 'C1',
    c1Desc: 'Yeşil (klasik)',
    c3Name: 'C3',
    c3Desc: 'Süper Yeşil',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Buz Mavisi',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Sıcak Beyaz',
    vintageName: 'Vintage',
    vintageDesc: 'Eski Radium',
    orangeName: 'Turuncu',
    orangeDesc: 'Dalış Turuncusu',
    blueName: 'Mavi',
    blueDesc: 'Koyu Mavi',
    greenName: 'Yeşil',
    greenDesc: 'Neon Yeşili',
    tipTitle: 'İpucu',
    tipContent: 'Lüminesans parlaklığı, pigment kalitesine ve ne kadar ışık emdiğine bağlıdır. BGW9 mavi-beyaz parlar ve en parlak olanıdır; vintage lüminesans ise sıcak ve loş bir ışığa sahiptir.',
  },
  seo: [
    { type: 'title', text: 'Saat Lume Renk Simülatörü-Gerçek Zamanlı Işıma Görselleştirici', level: 2 },
    { type: 'paragraph', html: 'Lüminesans, saat koleksiyonculuğundaki en kişisel seçimlerden biridir. <strong>C1 Super-LumiNova</strong>\'nın klasik yeşil ışımasını mı yoksa <strong>BGW9</strong>\'un buz mavisini mi tercih edersiniz? Bu simülatör, her lüminesans türünün gün ışığından zifiri karanlığa kadar farklı parlaklık seviyelerinde nasıl göründüğünü, her ton için <strong>HEX ve RGB değerleri</strong>yle birlikte gösterir.' },
    { type: 'title', text: 'Super-LumiNova Türleri Karşılaştırması', level: 3 },
    {
      type: 'table', headers: ['Tür', 'Gün Rengi', 'Işıma Rengi', 'Parlaklık', 'En Uygun'], rows: [
        ['C1', 'Açık yeşil', 'Yeşil', 'Orta', 'Elbise saatleri, orijinal estetik'],
        ['C3', 'Sarı-yeşil', 'Parlak yeşil', 'En yüksek', 'Dalış saatleri, alet saatleri'],
        ['BGW9', 'Kirli beyaz', 'Buz mavisi', 'Yüksek', 'Modern spor saatler, temiz görünüm'],
        ['LumiNova', 'Sıcak bej', 'Sıcak beyaz', 'Düşük-orta', 'Bütçe dostu lüminesans'],
        ['Vintage', 'Krem / ten rengi', 'Sıcak loş', 'Düşük', 'Klasik tarz saatler'],
        ['Turuncu', 'Turuncu', 'Turuncu', 'Orta', 'Dalış vurguları, retro dalış saatleri'],
        ['Mavi', 'Açık mavi', 'Mavi', 'Orta', 'Tasarım kadranlar, moda saatleri'],
        ['Yeşil', 'Parlak yeşil', 'Yeşil', 'Yüksek', 'Askeri tarz saatler'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9-Hangisini Seçmelisiniz?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Klasik Yeşil', icon: 'mdi:lightbulb-on', description: 'Orijinal Super-LumiNova formülasyonu. Orta parlaklıkta yeşil ışıma yapar. Her saat stiline uyan güvenli, klasik bir seçim.', points: ['Orta parlaklık, 4–6 saat görünürlük', 'Yeşil ışıma, sıcak ton', 'En uygun fiyatlı formülasyon', 'Giriş seviyesi saatlerde yaygın'], highlight: false },
        { title: 'C3 Süper Yeşil', icon: 'mdi:lightning-bolt', description: 'Mevcut en parlak yeşil lüminesans. Sualtında okunabilirliğin kritik olduğu profesyonel dalış saatlerinde kullanılır. Minimum şarjla maksimum ışıma.', points: ['En yüksek parlaklık, 8–12 saat görünürlük', 'Gün ışığında sarı-yeşil', 'Seiko, Citizen, Omega tarafından tercih edilir', 'Düşük ışıkta okunabilirlik için en iyisi'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Buz Mavisi', icon: 'mdi:snowflake', description: 'Yeşil yerine mavi-beyaz ışıma yapar. C3\'ten biraz daha az parlak olsa da temiz, modern estetiği nedeniyle tercih edilir. Lüks spor saatlerde popülerdir.', points: ['Yüksek parlaklık, 6–10 saat görünürlük', 'Mavi-beyaz ışıma, nötr ton', 'Gün ışığında temiz, modern görünüm', 'Tudor, Grand Seiko, Omega tarafından kullanılır'], highlight: true },
        { title: 'Vintage Radium Tarzı', icon: 'mdi:fire', description: '1960\'ların radyum lüminesansını taklit eden sıcak bej/krem tonu. Estetik özgünlük için kasıtlı olarak daha loştur. Işıma sıcak, hafif ve zamanla güzelleşir.', points: ['Düşük parlaklık, 2–4 saat görünürlük', 'Sıcak kremden loş kehribara', 'Radyoaktivite içermeyen eskitilmiş görünüm', 'Klasik yeniden basımlarda popüler'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Parlaklık Her Şey Değildir', icon: 'mdi:palette', html: 'En parlak lüminesans (C3) her zaman en iyi seçim değildir. <strong>BGW9</strong>, küçük bir parlaklık farkını birçok koleksiyoncunun tercih ettiği daha nötr ve modern bir görünümle takas eder. <strong>Vintage lüminesans</strong>, performans yerine döneme uygun estetiği önceliklendirir. Seçiminizi sizin için en önemli olana göre yapın: <strong>maksimum ışıma, modern estetik veya klasik özgünlük.</strong>' },
    { type: 'title', text: 'Lüminesans Nasıl Çalışır: Işımanın Arkasındaki Bilim', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Stronsiyum aluminat bazlı fotolüminesan bir pigmenttir. UV ve görünür ışığı emer ve ışıma olarak yeniden yayar. Radyoaktif değildir ve güvenlidir. İlk olarak 1993\'te Nemoto & Co. tarafından geliştirilmiştir.' },
        { term: 'Şarj Süresi', definition: 'Lüminesans pigmentini doyurmak için gereken ışık maruziyeti süresidir. Tam şarj, doğrudan güneş ışığı veya UV altında 10–30 dakika sürer. Daha uzun şarj = daha uzun ve daha parlak ışıma.' },
        { term: 'Işıma Süresi', definition: 'Şarjdan sonra lüminesansın görünür kaldığı süredir. Kaliteli Super-LumiNova 6–12 saat boyunca görünür şekilde ışıma yapar. En parlak dönem, şarjdan sonraki ilk 30 dakikadır.' },
        { term: 'Pigment Kalitesi', definition: 'Stronsiyum aluminat kristallerinin kalitesidir. Üstün pigmentler (C3, BGW9) daha parlak ve daha uzun süreli ışıma için daha büyük ve daha homojen kristaller kullanır. Alt seviye pigmentler (LumiNova) daha küçük kristaller kullanır ve daha loştur.' },
      ]
    },
    {
      type: 'summary', title: 'Lüminesans Seçimi Hızlı Kılavuz', items: [
        'Karanlıkta maksimum okunabilirlik için: C3 (en parlak yeşil) veya BGW9 (en parlak mavi-beyaz) tercih edin.',
        'Modern lüks görünüm için: BGW9, üst düzey saat markaları arasında şu anki favori.',
        'Vintage/klasik yapımlar için: Döneme uygun sıcak tonlar için Vintage veya Turuncu kullanın.',
        'C1 her işe yarar: iyi parlaklık, klasik yeşil, uygun fiyat.',
        'Lüminesansın gün ışığındaki rengi, ışıma renginden önemli ölçüde farklıdır-ikisini karşılaştırmak için simülatörü kullanın.',
      ]
    },
  ],
  faq: [
    {
      question: 'En parlak lüminesans hangisidir?',
      answer: 'C3 Super-LumiNova en parlak yeşil formülasyondur. BGW9 ise en parlak mavi-beyaz formülasyondur. İkisi de C1 veya standart LumiNova\'dan belirgin şekilde daha parlaktır.',
    },
    {
      question: 'BGW9 lüminesans nedir?',
      answer: 'BGW9, yeşil yerine mavi-beyaz ışıma yapan bir Super-LumiNova varyantıdır. C3\'ten biraz daha az parlak olmasına rağmen temiz, modern görünümü nedeniyle birçok kişi tarafından tercih edilir.',
    },
    {
      question: 'Vintage lüminesans ışıma yapar mı?',
      answer: 'Modern vintage tarzı lüminesans (bej/sıcak) ışıma yapar ancak eskitilmiş radyumu taklit etmek için kasıtlı olarak daha loştur. Buradaki ödün, maksimum parlaklık yerine estetik özgünlüktür.',
    },
    {
      question: 'Lüminesans ne kadar süre dayanır?',
      answer: 'Parlak ışık altında tam şarj sonrası, kaliteli Super-LumiNova 6–12 saat görünür şekilde ışıma yapar. En parlak dönem ilk 30 dakikadır.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Bir lüminesans türü seçin',
      text: 'C1, C3, BGW9, LumiNova, Vintage, Turuncu, Mavi veya Yeşil ön ayarlarından birini seçin.',
    },
    {
      name: 'Parlaklığı ayarlayın',
      text: 'Ortam parlaklık kontrolünü gündüz (sol)den geceye (sağ) kaydırarak lüminesansın nasıl davrandığını görün.',
    },
    {
      name: 'Özellikleri okuyun',
      text: 'Bilgi kartı, geçerli rengin tam HEX ve RGB değerlerini gösterir.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'En parlak lüminesans hangisidir?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova en parlak yeşildir. BGW9 en parlak mavi-beyazdır.' },
        },
        {
          '@type': 'Question',
          'name': 'BGW9 lüminesans nedir?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9, yeşil yerine mavi-beyaz ışıma yapan bir Super-LumiNova varyantıdır.' },
        },
        {
          '@type': 'Question',
          'name': 'Vintage lüminesans ışıma yapar mı?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Modern vintage tarzı lüminesans ışıma yapar ancak eskitilmiş radyumu taklit etmek için kasıtlı olarak daha loştur.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lüminesans Renk Simülatörü',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerekli. JavaScript gerekli.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Lüminesans renkleri nasıl simüle edilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Bir lüminesans türü seçin',
          'text': 'C1, C3, BGW9, LumiNova veya diğer ön ayarlardan birini seçin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Parlaklığı ayarlayın',
          'text': 'Parlaklığı gündüzden geceye kaydırarak lüminesans davranışını görün.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Özellikleri okuyun',
          'text': 'Bilgi kartı, geçerli rengin HEX ve RGB değerlerini gösterir.',
        },
      ],
    },
  ],
};
