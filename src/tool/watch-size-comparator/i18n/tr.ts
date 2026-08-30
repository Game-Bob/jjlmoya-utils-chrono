import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'saat-boyut-karslastrc',
  title: 'Saat Boyut Karsilastirici: Bileginizde Gorsel Uyum',
  description: 'Saat kasa boyutlarını görsel olarak karşılaştırın. Çap, kulp-kulp ve bilek ölçünüzü girerek satın almadan önce saatin bileğinizde nasıl duracağını görün.',
  ui: {
    title: 'Saat Boyut Karşılaştırıcı',
    addWatch: 'Saat Ekle',
    watchName: 'Saat Adı',
    watchNamePlaceholder: 'Örn. Rolex Submariner',
    caseDiameter: 'Kasa Çapı',
    lugToLug: 'Kulp-Kulp (L2L)',
    thickness: 'Kalınlık',
    wristSize: 'Bilek Ölçüsü',
    wristSizePlaceholder: 'Örn. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Kaldır',
    yourWatches: 'Saatlerim',
    fitLegend: 'Uyum Göstergesi',
    excellentFit: 'Mükemmel',
    goodFit: 'İyi',
    borderlineFit: 'Sınırda',
    largeFit: 'Çok Büyük',
    wristCurve: 'bilek',
    nameRequired: 'Bir saat adı girin',
    watchTooLarge: 'Saat bileğin dışına taşıyor',
    l2lExceedsWrist: 'Kulp-kulp mesafesi bilek genişliğini aşıyor',
    excellentDesc: 'Orantılı-kulp-kulp mesafeniz bilek genişliğinizin rahatça içinde kalıyor.',
    goodDesc: 'İyi uyum-biraz taşma var ama yine de rahat.',
    borderlineDesc: 'Sınırda-kuplar bileğinizin kenarına yaklaşıyor.',
    largeDesc: 'Çok büyük-kuplar bileğinizden taşma eğiliminde.',
    fitsWell: 'İyi oturuyor',
    slightlyLarge: 'Biraz büyük',
    tooLarge: 'Çok büyük',
    source: 'Boyut rehberi',
    estimateNote: 'Ölçüleri girin ve bir saat ekleyerek bileğinizde nasıl duracağını görün.',
  },
  seo: [
    { type: 'title', text: 'Saat Boyut Karsilastirici: Bileginizde Gorsel Uyum', level: 2 },
    { type: 'paragraph', html: '<strong>42mm bir saatin</strong> <strong>17cm bileğinize</strong> uyup uymayacağını mı merak ediyorsunuz? Ya da 48mm kulp-kulp mesafesinin taşıp taşmayacağını? Saat Boyut Karşılaştırıcı size görsel bir cevap veriyor. Kasa çapı, kulp-kulp, kalınlık ve bilek ölçünüzü girin; araç saati gerçek ölçeğinde çizer ve uyumu <span style="color:#22c55e">yeşilden (mükemmel)</span> <span style="color:#ef4444">kırmızıya (çok büyük)</span> kadar renklendirir. Hem <strong>metrik hem de emperyal</strong> birimlerle çalışır.' },
    { type: 'title', text: 'Saat Boyutları Sözlüğü', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Kasa Çapı', definition: 'Saat kasasının kadran boyunca ölçülen, tepe (kurma kolu) hariç genişliğidir. Tipik aralık: 34-46mm. En çok belirtilen boyuttur, ancak tek uyum faktörü değildir.' },
        { term: 'Kulp-Kulp (L2L)', definition: 'Kayışın takıldığı üst ve alt kuplar arasındaki mesafedir. Saatin bileğinizden taşıp taşmayacağını belirler. 50mm L2L\'ye sahip 40mm bir saat, 46mm L2L\'li 42mm bir saatten daha büyük durur.' },
        { term: 'Düz Bilek Genişliği', definition: 'Bileğinizin çevresi değil, üst yüzeyinin genişliğidir. Yaklaşık olarak bilek çevresi / π eksi 2-4cm. Saatinizin aslında üzerinde durduğu ölçü budur.' },
        { term: 'Kasa-Bilek Oranı', definition: 'Kasa çapının bilek genişliğine bölümüdür. 0.6-0.75 (%60-75) arası bir oran klasik orantılı uyum olarak kabul edilir.' },
      ]
    },

    { type: 'title', text: 'Bileğime Hangi Boyutta Saat Uyar?', level: 3 },
    {
      type: 'table', headers: ['Bilek Çevresi', 'Düz Genişlik (yaklaşık)', 'İdeal Kasa Çapı', 'Maks. Kulp-Kulp', 'En Uygun'], rows: [
        ['14-15 cm (5.5-5.9 in)', '38-42 mm', '30-34 mm', '38-42 mm', 'Vintage & takım saatleri'],
        ['15-16 cm (5.9-6.3 in)', '40-44 mm', '34-36 mm', '40-44 mm', 'Küçük klasik saatler'],
        ['16-17 cm (6.3-6.7 in)', '42-46 mm', '36-39 mm', '42-46 mm', 'Günlük kullanım için ideal'],
        ['17-18 cm (6.7-7.1 in)', '44-48 mm', '38-42 mm', '44-48 mm', 'Çoğu marka için ideal'],
        ['18-19 cm (7.1-7.5 in)', '46-50 mm', '40-44 mm', '46-50 mm', 'Dalış saatleri & GMT\'ler'],
        ['19-20 cm (7.5-7.9 in)', '48-52 mm', '42-46 mm', '48-52 mm', 'Alet & pilot saatleri'],
        ['20-21 cm (7.9-8.3 in)', '50-54 mm', '44-48 mm', '50-54 mm', 'Büyük boy & flieger saatler'],
      ]
    },

    { type: 'title', text: 'Saat İçin Bilek Ölçümü Nasıl Yapılır?', level: 3 },
    {
      type: 'list', items: [
        'Esnek bir mezura alıp bilek kemiğinizin (ulnar styloid) hemen arkasından bileğinizi sarın. Sıkı olmalı ama canınızı acıtmamalı.',
        'Mezuramız yoksa bir ip veya kablo kullanın, üst üste gelen yeri işaretleyin ve cetvelle ölçün.',
        'Ölçümü santimetre veya inç cinsinden not edin. Ortalama erkek bilekleri 17-19cm, kadın bilekleri ise 14-16cm civarındadır.',
        'Düz bilek genişliğinizi tahmin etmek için çevreden 2-4cm çıkarın veya aracın otomatik tahmin özelliğini kullanın.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Asil Uyum Siniri Kulp Kulp Mesafesidir', icon: 'mdi:ruler', html: 'Çoğu kişi <strong>kasa çapına</strong> odaklanır, ancak bir saatin bileğinize uyup uymayacağını belirleyen asıl ölçü <strong>kulp-kulp mesafesidir</strong>. 55mm düz bilekte (17cm çevre) 48mm L2L\'ye sahip bir saat, bilek genişliğinin %87\'sini kaplar. %65\'in üzerinde kuplar bileğin kenarına yaklaşmaya başlar. <strong>Önce L2L\'yi kontrol edin.</strong>' },

    { type: 'tip', title: 'CM mi Inç mi? Size Hangisi Daha Yakınsa', html: 'Araç artık hem metrik hem de emperyal birimleri destekliyor. Bileğinizi günlük hayatta hangi sistemi kullanıyorsanız onunla ölçün. Saat kasa ölçüleri <strong>her zaman milimetre</strong> cinsindendir (ABD\'de bile), bu yüzden çaplar ve L2L mm olarak kalır-sadece bilek ölçüsü değişir. Bu, saat sektörünün çalışma şekliyle birebir örtüşür.' },

    {
      type: 'summary', title: 'Satın Almadan Önce Hızlı Uyum Kontrol Listesi', items: [
        'Bilek çevrenizi ölçüp araca girin.',
        'Saatin sadece kasa çapına değil, kulp-kulp mesafesine de bakın.',
        'Klasik bir uyum için saat, düz bilek genişliğinizin %60-75\'ini kaplamalı.',
        'Kuplar bileğinizin kenarından taşıyorsa, çapı ne olursa olsun saat size büyük gelecektir.',
        'Satın alma kararı vermeden önce birden fazla saati yan yana karşılaştırmak için aracı kullanın.',
      ]
    },
  ],
  faq: [
    {
      question: 'Saat için bilek ölçümü nasıl yapılır?',
      answer: 'Esnek bir mezura ile bilek kemiğinin etrafını sarın. Alternatif olarak bir ip dolayın, üst üste gelen yeri işaretleyip cetvelle ölçün. Erkeklerde ortalama 17-19cm, kadınlarda 14-16cm\'dir.',
    },
    {
      question: 'Kulp-kulp (L2L) nedir ve neden önemlidir?',
      answer: 'Kulp-kulp, üst ve alt kuplar arasındaki mesafedir. Saatin bileğinizden taşıp taşmayacağını belirler. 17cm bir bilekte (≈55mm düz genişlik) 48mm kulp-kulp mesafesi %87 oranla idealdir. %65\'in üzeri taşma başlangıcıdır.',
    },
    {
      question: '17cm bileğe hangi boyutta saat uyar?',
      answer: '17cm bilek (≈55mm düz genişlik) 36-42mm çap ve 44-50mm kulp-kulp mesafesine sahip saatleri rahatça taşır. En ideal aralık 38-40mm çap ve 46-48mm L2L\'dir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Bilek ölçünüzü girin',
      text: 'Bilek çevrenizi santimetre cinsinden yazın. Araç, bilek siluetini görsel olarak günceller.',
    },
    {
      name: 'Saat ölçülerini girin',
      text: 'Kasa çapı, kulp-kulp ve kalınlık değerlerini milimetre cinsinden girin.',
    },
    {
      name: 'Ekleyin ve karşılaştırın',
      text: '"Saat Ekle"ye tıklayarak kaydedin. Birden fazla saat ekleyip aralarında geçiş yaparak uyumu karşılaştırın.',
    },
    {
      name: 'Renge bakın',
      text: 'Yeşil = mükemmel, sarı = sınırda, kırmızı = bileğiniz için çok büyük.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Saat için bilek ölçümü nasıl yapılır?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bilek kemiğinin etrafını esnek bir mezura ile sarın. Erkeklerde ortalama 17-19cm, kadınlarda 14-16cm\'dir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kulp-kulp (L2L) nedir ve neden önemlidir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kulp-kulp, üst ve alt kuplar arasındaki mesafedir. Saatin bileğinizden taşıp taşmayacağını belirler.',
          },
        },
        {
          '@type': 'Question',
          'name': '17cm bileğe hangi boyutta saat uyar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '17cm bilek 36-42mm çap ve 44-50mm kulp-kulp mesafesine sahip saatleri rahatça taşır. En ideali 38-40mm çap ve 46-48mm L2L\'dir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Boyut Karşılaştırıcı',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerekli. JavaScript gerekli.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat boyutları nasıl karşılaştırılır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Bilek ölçünüzü girin',
          'text': 'Bilek çevrenizi santimetre cinsinden yazın.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Saat ölçülerini girin',
          'text': 'Kasa çapı, kulp-kulp ve kalınlık bilgilerini girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ekleyin ve karşılaştırın',
          'text': 'Saat Ekle\'ye tıklayarak kaydedin. Birden fazla saat ekleyerek karşılaştırın.',
        },
      ],
    },
  ],
};
