import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'su-direnci-donusturucu',
  title: 'Saat Su Direnci Dönüştürücü–tre, ATM, Bar & Fit',
  description: 'Saat su direnci değerlerini metre, fit, ATM ve bar arasında dönüştürün. Günlük kullanım, yüzme ve dalışta her değerin aslında ne anlama geldiğini görün.',
  ui: {
    title: 'Su Direnci Dönüştürücü',
    depthLabel: 'Su Direnci',
    enterDepth: 'Derinlik değerini girin',
    unitMeters: 'Metre (m)',
    unitFeet: 'Fit (ft)',
    unitATM: 'Atmosfer (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Eşdeğer Değerler',
    ratingLabel: 'Değer',
    whatItMeans: 'Anlamı',
    notWaterResistant: 'Su Geçirmez Değil',
    notWaterResistantDesc: 'Su sıçraması bile olmamalı. Sudan tamamen uzak tutun.',
    handWash: 'Sıçramaya Dayanıklı',
    handWashDesc: 'El yıkama, yağmur, hafif sıçramalar. Yüzme veya duş yok.',
    showerSwim: 'Duş ve Yüzey Yüzmesi',
    showerSwimDesc: 'Duş alma, sığ havuzda yüzme. Dalış veya şnorkel yok.',
    snorkeling: 'Yüzme ve Şnorkel',
    snorkelingDesc: 'Havuzda yüzme, şnorkel, su sporları. Günlük kullanımda mükemmel direnç.',
    scubaDiving: 'Rekreasyonel Dalış',
    scubaDivingDesc: 'Tüplü dalış, yüksek etkili deniz aktiviteleri. ISO uyumlu.',
    saturationDiving: 'Derin / Satürasyon Dalışı',
    saturationDivingDesc: 'Profesyonel satürasyon dalışı. Aşırı derinlikler. Helyum kaçış vanası bağlamı.',
    tipTitle: 'İpucu',
    tipContent: 'Su direnci zamanla azalır. Contalar yıllık olarak test edilmeli ve her 3\u20135 yılda bir değiştirilmelidir.',
  },
  seo: [
    { type: 'title', text: 'Saat Su Direnci Dönüştürücü-tre, ATM, Bar & Fit değerlerini anlama', level: 2 },
    { type: 'paragraph', html: '30 metrelik su direnci değeri, 30 metreye dalabileceğiniz anlamına gelmez. Saatin su sıçramalarına ve hafif yağmura dayanabileceği anlamına gelir. Bu dönüştürücü <strong>metre, fit, atmosfer (ATM) ve bar</strong> arasında çeviri yapar ve her değerin aslında neye izin verdiğini söyler.' },
    { type: 'title', text: 'Su Direnci Değerleri Hakkında Gerçekler', level: 3 },
    { type: 'paragraph', html: 'Saat su direnci laboratuvar ortamında statik basınç altında test edilir. Gerçek dünya koşulları-l hareketi, dalış, sıcaklık değişimleri-ç-daha yüksek dinamik basınç oluşturur. 30m / 3 ATM bir saat yalnızca sıçramaya dayanıklıdır. Yüzmek için en az 100m / 10 ATM gerekir. Tüplü dalış için 200m / 20 ATM standart giriş seviyesidir.' },
    { type: 'title', text: 'Su Direnci Zamanla Neden Azalır', level: 3 },
    { type: 'paragraph', html: 'Saatinizi sızdırmaz hale getiren lastik contalar ve O-ringler zamanla kurur, çatlar ve sıkışır. Isı, UV ışığı ve kimyasallar bu süreci hızlandırır. Eskiden 100m su geçirmez olan bir saat, 5 yıl bakım yapılmadığında yalnızca sıçramaya dayanıklı hale gelebilir. Contalarınızı yıllık olarak test ettirin ve her 3 ila 5 yılda bir değiştirin.' },
    { type: 'title', text: 'ISO 6425-lgıç Saati Standardı', level: 3 },
    { type: 'paragraph', html: 'Bir saatin "dalgıç saati" olarak adlandırılması için ISO 6425 standartlarını karşılaması gerekir: en az 100m su direnci, tek yönlü döner bezel, fosforlu işaretler ve vidalı kurma kolu. Bu standardı karşılayan saatler, belirtilen derinliğin %25 üzerinde test edilir. 200m ISO sertifikalı bir saat 250mde test edilir.' },
  ],
  faq: [
    {
      question: '30 metre su geçirmez bir saatle yüzebilir miyim?',
      answer: 'Hayır. 30m / 3 ATM değeri yalnızca sıçrama direnci anlamına gelir- yıkama, yağmur ve ter. Yüzme, statik test basıncını aşan dinamik basınç oluşturur. Yüzmek için en az 100m / 10 ATM seçin.',
    },
    {
      question: 'ATM, bar ve metre arasındaki fark nedir?',
      answer: '1 ATM = 1 bar ≈ 10 metre statik su sütunudur. Saat endüstrisinde temelde eşdeğerdirler. 10 ATM saat, 10 bar saat ile aynıdır ve yaklaşık 100 metre için derecelendirilmiştir.',
    },
    {
      question: 'Saatimin su direncini ne sıklıkta test ettirmeliyim?',
      answer: 'Yılda bir kez, özellikle suyla temastan önce. Contalar aşınır. Her 3-5 yılda bir, tüm contalar tam bakım sırasında değiştirilmelidir.',
    },
    {
      question: 'ISO 6425 sertifikası ne anlama gelir?',
      answer: 'ISO 6425, dalgıç saatleri için uluslararası standarttır. En az 100m direnç, tek yönlü döner bezel, fosforlu işaretler ve belirtilen derinliğin %25 üzerinde test gerektirir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Değerinizi girin',
      text: 'Saatinizin su direnci numarasını yazın ve birimi seçin (metre, fit, ATM veya bar).',
    },
    {
      name: 'Eşdeğerleri okuyun',
      text: 'Kart, dört birimdeki dönüştürülmüş değerleri aynı anda gösterir.',
    },
    {
      name: 'Öneriyi kontrol edin',
      text: 'Vurgulanan kart, saatinizin değerinde hangi aktivitelerin güvenli olduğunu gösterir.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '30 metre su geçirmez bir saatle yüzebilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hayır. 30m / 3 ATM değeri yalnızca sıçrama direnci anlamına gelir- yıkama, yağmur ve ter. Yüzmek için en az 100m / 10 ATM seçin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ATM, bar ve metre arasındaki fark nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 metre statik su sütunudur. Saat endüstrisinde temelde eşdeğerdirler.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saatimin su direncini ne sıklıkta test ettirmeliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yılda bir kez, özellikle suyla temastan önce. Her 3-5 yılda bir, tüm contalar tam bakım sırasında değiştirilmelidir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ISO 6425 sertifikası ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425, en az 100m direnç, tek yönlü döner bezel, fosforlu işaretler ve belirtilen derinliğin %25 üzerinde test gerektirir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Su Direnci Dönüştürücü',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerekli. JavaScript gerekli.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat su direnci değerleri nasıl dönüştürülür',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Değerinizi girin',
          'text': 'Saatinizin su direnci numarasını yazın ve birimi seçin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Eşdeğerleri okuyun',
          'text': 'Kart, dört birimdeki dönüştürülmüş değerleri aynı anda gösterir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Öneriyi kontrol edin',
          'text': 'Vurgulanan kart, saatinizin değerinde hangi aktivitelerin güvenli olduğunu gösterir.',
        },
      ],
    },
  ],
};
