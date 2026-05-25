import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'ay-evresi-gorsellestirici',
  title: 'Ay Evresi Görselleştirici–Ay Takvimi & Saat Komplikasyon Aracı',
  description: 'Anlık ay evresini, aydınlanma yüzdesini, ay yaşını ve yaklaşan dolunay ile yeni ay tarihlerini görselleştirin. Saatinizin ay evresi komplikasyonunu ayarlamak için mükemmel bir araç.',
  ui: {
    title: 'Ay Evresi Görselleştirici',
    selectDate: 'Tarih Seçin',
    today: 'Bugün',
    moonPhase: 'Ay Evresi',
    illumination: 'Aydınlanma',
    moonAge: 'Ay Yaşı',
    daysUntilFull: 'Dolunaya Kalan Gün',
    daysUntilNew: 'Yeni Aya Kalan Gün',
    newMoon: 'Yeni Ay',
    waxingCrescent: 'Hilal (Büyüyen)',
    firstQuarter: 'İlk Dördün',
    waxingGibbous: 'Şişkin Ay (Büyüyen)',
    fullMoon: 'Dolunay',
    waningGibbous: 'Şişkin Ay (Küçülen)',
    lastQuarter: 'Son Dördün',
    waningCrescent: 'Hilal (Küçülen)',
    nextFullMoon: 'Sonraki Dolunay',
    nextNewMoon: 'Sonraki Yeni Ay',
    tipTitle: 'İpucu',
    tipContent: 'Bir ay evresi saatini ayarlamak için önce bu aracı kullanarak bugünün ay evresini bulun, ardından kurma kolunu ay diski eşleşene kadar ilerletin. Çoğu mekanik ay evresi, 2 yılda bir günlük sapma ile çalışır.',
    days: 'Döngü İlerlemesi',
    day: 'gün',
  },
  seo: [
    { type: 'title', text: 'Ay Evresi Görselleştirici-Ay Takvimi & Saat Ayar Kılavuzu', level: 2 },
    { type: 'paragraph', html: 'Ay Evresi Görselleştirici, ayın gerçekçi bir görüntüsüyle <strong>anlık ay evresini</strong> gösterir. <strong>Aydınlanma yüzdesi, ay yaşı, sonraki dolunaya ve yeni aya kalan günleri</strong> görüntüleyin. Saat tutkunları için ay evresi komplikasyonunu doğru şekilde ayarlamak amacıyla tasarlanmıştır-aynı zamanda geçmiş veya gelecek herhangi bir tarih için genel bir ay takvimi olarak da çalışır.' },
    { type: 'title', text: 'Ay Evresi Sözlüğü', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Yeni Ay', definition: 'Ay, Dünya ile Güneş arasındadır. Aydınlık yüzü bizden uzağa bakar. %0 aydınlanma. Ay döngüsünün başlangıcı.' },
        { term: 'Hilal (Büyüyen)', definition: '%1–49 aydınlanma. Sağ tarafta (Kuzey Yarımküre) ince bir hilal belirir. Ay ilk dördüne doğru ilerlemektedir.' },
        { term: 'İlk Dördün', definition: '%50 aydınlanma. Görünür yüzeyin yarısı aydınlıktır. Ay döngüsünün dörtte birini tamamlamıştır.' },
        { term: 'Şişkin Ay (Büyüyen)', definition: '%51–99 aydınlanma. Yarısından fazlası aydınlıktır. Ay dolunaya doğru ilerlemektedir.' },
        { term: 'Dolunay', definition: '%100 aydınlanma. Görünür yüzeyin tamamı aydınlıktır. Ay döngüsünün zirvesi.' },
        { term: 'Şişkin Ay (Küçülen)', definition: '%99–51 aydınlanma. Aydınlık alan sağ taraftan küçülmeye başlar.' },
        { term: 'Son Dördün', definition: '%50 aydınlanma. Sol yarısı aydındır. Döngünün dörtte üçü tamamlanmıştır.' },
        { term: 'Hilal (Küçülen)', definition: '%49–1 aydınlanma. Döngü yeni aya sıfırlanmadan önce solda ince bir hilal.' },
      ]
    },
    { type: 'title', text: 'Ay Evreli Saat Nasıl Ayarlanır?', level: 3 },
    {
      type: 'list', items: [
        'Bugünün tam ay evresini öğrenmek için bu aracı kullanın. Evre adını ve görsel görünümünü not edin.',
        'Saatinizde kurma kolunu ay evresi ayar pozisyonuna (genellikle 2. veya 3. konum) çekin.',
        'Ay diski araçtakiyle aynı evreyi gösterene kadar kurma kolunu ilerletin. Dolunay göstergesi genellikle diskin üst-orta kısmındadır.',
        'Ay evresini akşam 9 ile sabah 3 arasında ayarlamaktan kaçının; bu saatlerde tarih değiştirme mekanizması devrededir ve hasar görebilir.',
        'Çoğu mekanik ay evreli saat, iki ay döngüsünü (59 gün) yaklaşık olarak hesaplayan 59 dişli bir çark kullanır. Bu, yaklaşık 2 yılda bir günlük sapma anlamına gelir.',
        'Yüksek hassasiyet için bazı saatler (Patek Philippe, A. Lange & Söhne) 100+ yılda bir günlük sapmayla çalışan çarklar kullanır.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Tarih Değişimi Sırasında Asla Ayarlamayın', icon: 'mdi:alert', html: 'Ay evresini (veya tarihi) yaklaşık <strong>akşam 9 ile sabah 3 arasında</strong> ayarlamayın. Bu aralıkta saatin tarih değiştirme mekanizması fiziksel olarak tarih çarkına bağlıdır. Kurma kolunu zorlamak dişlilere zarar verebilir. Bu saatlerde ayarlama yapmanız gerekiyorsa, önce akrebi sabah 3\'ü geçecek şekilde ilerletin, ardından ay evresini ayarlayın.' },
    { type: 'title', text: 'Mekanik vs Yüksek Hassasiyetli Ay Evresi', level: 3 },
    {
      type: 'table', headers: ['Tür', 'Dişli Çark', 'Sapma Birikimi', 'Bir Günlük Sapma Sonrası', 'Örnek Saatler'], rows: [
        ['Standart / Giriş', '59 diş', '~2 yılda 1 gün', '~2.5 yıl', 'Seiko, Orient, Hamilton, Tissot'],
        ['Orta Seviye', '135 diş', '~10 yılda 1 gün', '~10 yıl', 'Omega, Tudor, IWC, Breitling'],
        ['Yüksek Hassasiyet', 'Çark sistemi', '~100+ yılda 1 gün', '100+ yıl', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Ay Diski Nasıl Okunur?', html: 'Çoğu ay evreli saatte ay diski üzerinde birbirinin <strong>tam karşısında iki ay</strong> bulunur. Her dolunay, üst-orta açıklıkla hizalanır. Bir tam döngüden (29.5 gün) sonra ikinci ay onun yerini alır. 59 dişli çark bu yüzden işe yarar: 59 günde tam bir tur atar-yani tam olarak iki ay döngüsü.' },
    {
      type: 'summary', title: 'Hızlı Başvuru', items: [
        'Ay (sinodik) döngüsü tam olarak 29.53058867 gündür. Araç maksimum doğruluk için bu değeri kullanır.',
        'Sekiz evre sonsuz bir döngü halinde tekrarlanır: yeni ay → hilal (büyüyen) → ilk dördün → şişkin ay (büyüyen) → dolunay → şişkin ay (küçülen) → son dördün → hilal (küçülen).',
        'Ay evreli saat ayarı: bugünün evresini burada bulun, ardından saatinizdeki diskte eşleştirin.',
        'Kurma kolunu asla akşam 9 ile sabah 3 arasında zorlamayın. Önce saati sabah 3\'ü geçecek şekilde ilerletin.',
        'Standart 59 dişli ay evreleri yaklaşık 2.5 yılda bir gün sapar. Düzeltme için diskin bir tık ilerletilmesi gerekir.',
      ]
    },
  ],
  faq: [
    {
      question: 'Saatimde ay evresi nasıl ayarlanır?',
      answer: 'Bu aracı kullanarak bugünün ay evresini bulun. Kurma kolunu (genellikle 2. konum) ay diski eşleşene kadar ilerletin. Akşam 9 ile sabah 3 arasında ayarlama yapmaktan kaçının.',
    },
    {
      question: 'Mekanik ay evreli saatler ne kadar hassastır?',
      answer: 'Çoğu, yaklaşık 2 yılda bir günlük sapmayla çalışan 59 dişli bir çark kullanır. Patek Philippe ve A. Lange & Söhne gibi üst düzey saatler 100+ yılda bir günlük hassasiyete ulaşır.',
    },
    {
      question: 'Sinodik ve sidereal ay arasındaki fark nedir?',
      answer: 'Sidereal ay (27.3 gün), ayın yıldızlara göre yörüngesidir. Sinodik ay (29.53 gün) ise aynı evreler arasındaki süredir ve ay evreli saatlerin takip ettiği döngüdür.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Bir tarih seçin',
      text: 'Tarih seçiciyi kullanarak geçmiş veya gelecek herhangi bir tarihi seçin ve ay evresini görün.',
    },
    {
      name: 'Evre verilerini okuyun',
      text: 'Kartlar evre adı, aydınlanma yüzdesi, ay yaşı ve döngü ilerlemesini gösterir.',
    },
    {
      name: 'Yaklaşan olayları bulun',
      text: 'Sonraki dolunay ve yeni ay tarihleri otomatik olarak görüntülenir.',
    },
    {
      name: 'Saatini ayarla',
      text: 'Görüntülenen evreyi kullanarak ay evreli saatinizi doğru şekilde ayarlayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Saatimde ay evresi nasıl ayarlanır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bugünün ay evresini bu araçla bulun. Ay diski eşleşene kadar kurma kolunu ilerletin. Akşam 9 ile sabah 3 arasında ayarlama yapmaktan kaçının.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mekanik ay evreli saatler ne kadar hassastır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Çoğu, yaklaşık 2 yılda bir günlük sapma gösteren 59 dişli çark kullanır. Üst düzey saatler 100+ yılda bir günlük hassasiyete ulaşır.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sinodik ve sidereal ay arasındaki fark nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sidereal ay (27.3 gün) ayın yıldızlara göre yörüngesidir. Sinodik ay (29.53 gün) aynı evreler arasındaki süredir ve ay evreli saatlerin takip ettiği döngüdür.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ay Evresi Görselleştirici',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerekli. JavaScript gerekli.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Ay evreleri nasıl görselleştirilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Bir tarih seçin',
          'text': 'Tarih seçiciyi kullanarak herhangi bir tarihi seçin ve ay evresini görün.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Evre verilerini okuyun',
          'text': 'Kartlar evre adı, aydınlanma, ay yaşı ve döngü ilerlemesini gösterir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Saatini ayarla',
          'text': 'Görüntülenen evreyi kullanarak ay evreli saatinizi ayarlayın.',
        },
      ],
    },
  ],
};
