import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'saat-bilek-varlik-hesaplayici',
  title: 'Saat Bilek Varlığı ve Boyut Hesaplayıcı',
  description: 'Kasa-bilek oranını, düz bilek genişliği kapsamını hesaplayın ve estetik yönergelere göre ideal saat boyutunu belirleyin.',
  ui: {
    title: 'Bilek Ölçüm Ayarları',
    wristCircumferenceLabel: 'Bilek Çevresi',
    caseDiameterLabel: 'Kasa Çapı',
    lugToLugLabel: 'Lug-lug Mesafesi',
    wristWidthLabel: 'Düz Bilek Genişliği',
    autoEstimateWidthLabel: 'Düz genişliği otomatik tahmin et (%30)',
    unitCm: 'CM',
    unitInches: 'İNÇ',
    unitMm: 'MM',
    fitAnalysisTitle: 'Bilek Uyum Analizi',
    caseWristRatioLabel: 'Kasa-Bilek Oranı',
    wristCoverageLabel: 'Bilek Kapsamı',
    verdictLabel: 'Sonuç',
    verdictOversized: 'Fazla Büyük Kasa',
    verdictBold: 'Cesur / Modern Uyum',
    verdictGolden: 'Altın / Klasik Uyum',
    verdictVintage: 'Vintage / Fazla Küçük',
    coverageSafe: 'Güvenli Uyum',
    coverageBold: 'Cesur Uyum',
    coverageOverhang: 'Lug Taşma Uyarısı',
    sweetSpotTitle: 'Uyum Stili',
    sweetSpotDesc: 'Sweet spot en dengeli görsel görünümü temsil eder.',
    minClassicLabel: 'Vintage / Klasik Uyum',
    sweetSpotLabel: 'Estetik Sweet Spot',
    maxBoldLabel: 'Modern / Cesur Uyum',
    maxLugToLugLabel: 'Önerilen Maksimum Lug-lug Mesafesi',
    idealSizesTitle: 'İdeal Boyut Kılavuzu',
    visualizerTitle: 'Canlı Uyum Simülatörü',
    wristWidthHelp: 'Bilek şekline göre tahmin edilmiştir.',
    estimatedLabel: 'tahmini',
    customLabel: 'Bilek',
  },
  seo: [
    { type: 'title', text: 'Mükemmel Saat Boyutunu Nasıl Seçersiniz: Oran Kılavuzu', level: 2 },
    { type: 'paragraph', html: 'Doğru saat boyutunu bulmak matematik, geometri ve kişisel stilin bir bileşimidir. Saatçilik dünyasında bir saatin kolunuza oturuş şekline <strong>bilek varlığı</strong> denir. Bir saat dengeli görünmeli; ne çirkin bir lug taşmasıyla kolu domine etmeli ne de küçücük bir nokta gibi kaybolmalıdır. Bu dengeyi sağlamak için koleksiyoncular üç temel ölçütü analiz eder: kasa çapı, lug-lug mesafesi ve bilek şekli.' },
    { type: 'title', text: 'Kasa-Bilek Oranını Anlamak', level: 3 },
    { type: 'paragraph', html: 'Saat oranlarını değerlendirmenin geleneksel yöntemi kasa-bilek oranıdır. Bilek çevresi milimetre cinsinden kasa çapına bölünür. <strong>4,5 ile 5,0</strong> arasındaki oranlar klasik sweet spot\'u temsil eder. <strong>4,0 ile 4,5</strong> arasında cesur ve sportif modern bir görünüm elde edilir. 5,0\'ın üzerinde vintage estetik, 4,0\'ın altında ise fazla büyük kasa söz konusudur.' },
    { type: 'title', text: 'Lug-lug Mesafesi Neden Kasa Çapından Daha Önemlidir', level: 3 },
    { type: 'paragraph', html: 'Kasa çapı tüm dikkati çekse de <strong>lug-lug mesafesi</strong> (üst lug ucundan alt lug ucuna kadar olan dikey uzunluk) gerçek uyum testidir. Altın kural: lug-lug mesafesi hiçbir zaman düz bilek genişliğini aşmamalıdır. Luglar bileğin kenarlarını geçerse saat kayar, kayış ile deri arasında boşluk oluşur ve görsel sonuç kötü olur.' },
    { type: 'title', text: 'Düz ve Yuvarlak Bilekler: Anatominize Göre Boyut Seçimi', level: 3 },
    { type: 'paragraph', html: 'Bilek çevresi yalnızca hikâyenin yarısını anlatır. Aynı çevreye sahip bilekler farklı kesit şekillerine sahip olabilir: düz veya yuvarlak. Düz bilekler daha geniş üst yüzeye sahip olduğundan taşma olmaksızın daha uzun lug-lug mesafeli saatleri taşıyabilir. Yuvarlak bilekler daha silindirik olup üst yüzeyleri dardır; taşmayı önlemek için daha kısa lug-lug mesafesi gerekir.' },
  ],
  faq: [
    {
      question: 'İdeal kasa-bilek oranı nedir?',
      answer: 'İdeal oran 4,0 ile 5,0 arasındadır. 4,5 değeri, geleneksel saatçiliğin klasik sweet spot\'ını temsil eder. 4,0 ile 4,5 arasında modern ve cesur bir bilek varlığı elde edilir; 5,0\'ın üzerinde vintage tarz daha uygundur; 4,0\'ın altında kasa fazla büyük görünme eğilimindedir.',
    },
    {
      question: 'Lug-lug mesafesi kasa çapından neden daha önemlidir?',
      answer: 'Kasa çapı yalnızca kadranın genişliğini ölçer; lug-lug mesafesi ise saatin bilek üzerindeki toplam uzunluğunu belirler. Düz bilek genişliğini aşarsa luglar taşar, kayış dikey olarak sarkar ve saat dengesiz ve orantısız biçimde büyük görünür.',
    },
    {
      question: 'Düz ve yuvarlak bilekler saat uyumunu nasıl etkiler?',
      answer: 'Aynı çevreye (örneğin 17 cm) sahip iki bilek saati çok farklı şekillerde taşıyabilir. Düz bir bilek, üst yüzeyi daha geniş olduğundan taşma olmaksızın daha uzun lug-lug mesafeli saatlere imkân tanır. Yuvarlak bir bilek üstte daha dardır ve stabil bir uyum için daha kısa lug-lug mesafesi gerektirir.',
    },
    {
      question: 'Kalınlık ve bezel genişliği saatin görsel boyutunu nasıl değiştirir?',
      answer: 'Çok ince bezelli saatler (şık saatler gibi) daha büyük kadran yüzeyine sahiptir ve gerçek çaplarından daha büyük görünür. Kalın döner bezelli dalgıç saatlerin kadranı daha küçüktür, bu nedenle daha kompakt görünür. Benzer şekilde, 13 mm\'nin üzerindeki kalınlığa sahip saatler daha iri ve görsel olarak daha ağır görünür.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Bileğinizi Ölçün',
      text: 'Çevrenizi cm veya inç cinsinden bulmak için esnek bir mezuru bilek kemiğinizin etrafına sarın.',
    },
    {
      name: 'Saat Ölçülerini Girin',
      text: 'Değerlendirmek istediğiniz saatin kasa çapını ve lug-lug mesafesini girin.',
    },
    {
      name: 'Uyumu ve Simülatörü Analiz Edin',
      text: 'Kasa-bilek oranını, lug taşma uyarısını kontrol edin ve gerçek zamanlı simülasyon diyagramını inceleyin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'İdeal kasa-bilek oranı nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'İdeal oran 4,0 ile 5,0 arasındadır. 4,5 değeri, geleneksel saatçiliğin klasik sweet spot\'ını temsil eder. 4,0 ile 4,5 arasında modern ve cesur bir bilek varlığı elde edilir; 5,0\'ın üzerinde vintage tarz daha uygundur; 4,0\'ın altında kasa fazla büyük görünme eğilimindedir.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Lug-lug mesafesi kasa çapından neden daha önemlidir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kasa çapı yalnızca kadranın genişliğini ölçer; lug-lug mesafesi ise saatin bilek üzerindeki toplam uzunluğunu belirler. Düz bilek genişliğini aşarsa luglar taşar, kayış dikey olarak sarkar ve saat dengesiz ve orantısız biçimde büyük görünür.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Bilek Varlığı ve Boyut Hesaplayıcı',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Mükemmel Saat Boyutu Nasıl Belirlenir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Bileğinizi Ölçün',
          'text': 'Çevrenizi cm veya inç cinsinden bulmak için esnek bir mezuru bilek kemiğinizin etrafına sarın.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Saat Ölçülerini Girin',
          'text': 'Değerlendirmek istediğiniz saatin kasa çapını ve lug-lug mesafesini girin.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Uyumu ve Simülatörü Analiz Edin',
          'text': 'Kasa-bilek oranını, lug taşma uyarısını kontrol edin ve gerçek zamanlı simülasyon diyagramını inceleyin.'
        }
      ]
    }
  ]
};
