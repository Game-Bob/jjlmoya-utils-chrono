import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'ana-yay-bulucu',
  title: 'Ana Yay Bulucu',
  description: 'Vintage saat hareketleri için barrel ölçümlerinden ana yay boyutlarını hesaplayın.',
  ui: {
    title: 'Ana Yay Bulucu',
    barrelLabel: 'Barrel İç Çapı',
    arborLabel: 'Arbor Dış Çapı',
    heightLabel: 'Barrel Yüksekliği',
    turnsLabel: 'Tur',
    calculate: 'Hesapla',
    resultThickness: 'Kalınlık',
    resultHeight: 'Yükseklik',
    resultLength: 'Uzunluk',
    resultStrength: 'Güç',
    strengthWeak: 'Hafif',
    strengthMedium: 'Orta',
    strengthStrong: 'Güçlü',
    commercial: 'Ticari Boyut',
    unitLabel: 'Birim',
    mm: 'mm',
    inch: 'in',
    step1: 'Kumpas ile barrel iç çapını, arbor dış çapını ve iç yüksekliği ölçün.',
    step2: 'Beklenen kurma tur sayısını ayarlayın (5-8 mekanik, 6-10 otomatik).',
    step3: 'Tercih ettiğiniz birim sistemi için mm/in arasında geçiş yapın.',
    tipTitle: 'İpucu',
    tipContent: 'Hesaplanan boyutları her zaman üretici teknik verileriyle çapraz kontrol edin. Sipariş vermeden önce tedarikçi kataloglarını inceleyin.',
  },
  seo: [
    { type: 'title', text: 'Ana Yay Bulucu: Saat Hareketleri İçin Yay Boyutlarını Hesaplayın', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Tipik yay kalınlığı' },
        { value: '5-10 tur', label: 'Standart kurma aralığı' },
        { value: '150-450 mm', label: 'Yaygın yay uzunluğu' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Vintage bir saat hareketini restore etmek genellikle doğru ana yayı belirlemekle başlar. <strong>Ana Yay Bulucu</strong>, barrel geometrisine dayanarak ana yayın teorik boyutlarını hesaplamanıza yardımcı olur. Barrel iç çapını, arbor çapını, barrel yüksekliğini ve beklenen tur sayısını girerek, araç yay kalınlığını, yüksekliğini ve uzunluğunu hesaplar. Sonuçlar ayrıca hem metrik hem de emperyal birimlerde yaklaşık ticari boyutlar olarak gösterilir, böylece tedarikçi kataloglarını çapraz kontrol etmek kolaylaşır.' },
    { type: 'title', text: 'Ana Yay Boyutları Nasıl Hesaplanır', level: 3 },
    { type: 'paragraph', html: 'Ana yay, barrel duvarı ile arbor arasındaki halka şeklindeki boşluğu kaplar. <strong>Yay kalınlığı</strong>, <strong>(barrel iç çapı - arbor dış çapı) / (2 x tur + 1,5)</strong> olarak tahmin edilir; burada ekstra 1,5, yay ucu bağlantısı ve yayın kendine karşı kapladığı boşluk içindir. <strong>Yay uzunluğu</strong>, <strong>L = π x tur x (barrel iç çapı + arbor dış çapı) / 2</strong> formülünü takip eder; bu, düz yatırıldığında şeridin toplam uzunluğunu verir. <strong>Yay yüksekliği</strong>, barrel kapağına sürtünmeyi önlemek için küçük bir boşluk (tipik olarak 0,1 mm) çıkarılmış iç barrel yüksekliğine eşittir.' },
    { type: 'title', text: 'Ana Yay Seçimi İçin Barrel Nasıl Ölçülür', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Barrel İç Çapı', definition: 'Kumpas ile ölçülen barrel tamburunun iç çapı. Ana yayın kaplayabileceği en büyük dairedir. Tipik aralık: 8-30 mm.' },
        { term: 'Arbor Çapı', definition: 'Barrel arborunun, ana yayın iç spiralinin takıldığı en geniş noktasındaki çapı. Daha küçük arborlar, aynı barrel için daha uzun yaylara izin verir.' },
        { term: 'Barrel Yüksekliği', definition: 'Barrel tamburunun iç yüksekliği. Ana yay yüksekliği, kapakta sürtünme olmadan serbest dönüşe izin vermek için biraz daha az (0,05-0,15 mm) olmalıdır.' },
        { term: 'Tur Sayısı', definition: 'Hareketin sağladığı tam kurma turu sayısı. Mekanik kurmalı kalibreler tipik olarak 5-8 tur, otomatikler 6-10 tur sunar.' },
      ],
    },
    { type: 'title', text: 'Yay Gücü ve Hareketiniz İçin Anlamı', level: 3 },
    { type: 'paragraph', html: '<strong>Yay kalınlığı</strong>, dişli takımına iletilen torku belirleyen birincil faktördür. Daha kalın bir yay (0,14 mm\'den fazla), kronograf veya zil mekanizmaları gibi komplikasyonlara sahip hareketler için uygun yüksek tork sağlar. Orta yaylar (0,10-0,14 mm), çoğu yalnızca saat ve tarihli kalibreler için standarttır. İnce yaylar (0,10 mm\'nin altı), küçük bayan saatlerinde veya ultra ince kalibrelerde bulunur. Mümkün olduğunda orijinal üretici teknik verilerine uyun; aşırı güçlü bir yay, arbor milini veya dişli takımı millerini hasara uğratabilir.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yanlış Ana Yay Kullanmak Hareketinize Zarar Verebilir',
      html: 'Çok kalın bir yay takmak sürtünmeyi ve torku tasarım sınırlarının ötesine artırarak arbor yatağını aşındırabilir, orta tekerlek milini bükebilir ve hatta barrelı çatlatabilir. Çok ince bir yay yeterli genliği sağlayamaz ve saatin yavaş çalışmasına veya tam güç rezervine ulaşamadan durmasına neden olur. Hesaplanan boyutları her zaman bilinen tedarikçi kataloglarıyla çapraz kontrol edin.',
    },
    { type: 'title', text: 'Ticari Ana Yay Boyutlandırma Sistemleri', level: 3 },
    { type: 'paragraph', html: 'Ana yay tedarikçileri, yayları milimetre cinsinden <strong>uzunluk x yükseklik x kalınlık</strong> olarak kataloglar. Yaygın metrik boyutlar General Resources veya GR sistemini takip eder. İnç tabanlı sistemler bazı Amerikan ve İngiliz tedarikçiler tarafından hâlâ kullanılmaktadır. Araç, tedarikçiden bağımsız olarak kataloglarda arama yapabilmeniz için her iki sistemi de görüntüler. Tam hesaplanan boyut mevcut olmadığında, yüksekliği tam olarak ve kalınlığı 0,005 mm içinde eşleşen en yakın ticari boyutu seçin, ardından aynı yükseklik/kalınlık ailesinden bir yay seçerek uzunluğu ayarlayın.' },
    { type: 'title', text: 'Vintage Kalibre Hususları', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>İsviçre kalibreleri (ETA, FHF, AS, Unitas)</strong> - GR sisteminde iyi belgelenmiştir. Çoğunun bilinen ana yay referansları vardır.',
        '<strong>Fransız kalibreleri (LIP, France Ebauches)</strong> - genellikle standart dışı barrel oranları kullanır. Dikkatlice ölçün.',
        '<strong>Amerikan kalibreleri (Waltham, Elgin, Illinois)</strong> - inç tabanlı sistemler. Çapraz referans için emperyal çıktıyı kullanın.',
        '<strong>Japon kalibreleri (Seiko, Citizen, Miyota)</strong> - 1960 sonrası hareketler için iyi bir katolog kapsamına sahip metrik sistem.',
        '<strong>Çin kalibreleri (Sea-Gull, DG, Tongji)</strong> - genellikle İsviçre tasarımlarını kopyalar. İsviçre GR referansı genellikle geçerlidir.',
      ],
    },
    {
      type: 'summary',
      title: 'Ana Yay Seçimi İçin Önemli Çıkarımlar',
      items: [
        'Hassas bir kumpas ile barrel iç çapını, arbor dış çapını ve barrel yüksekliğini doğru ölçün',
        'Hesaplanan boyutları mutlak bir teknik değer olarak değil, başlangıç noktası olarak kullanın',
        'Üretici teknik sayfaları veya bilinen tedarikçi kataloglarıyla çapraz kontrol yapın',
        'Yay yüksekliğini barrel yüksekliği eksi 0,05-0,15 mm boşluk ile tam olarak eşleştirin',
        'Optimum performans için kalınlığı hesaplanan değerin 0,005 mm içinde eşleştirin',
        'Yay uzunluğunun beklenen kurma tur sayısı için yeterli olduğunu doğrulayın',
      ],
    },
  ],
  faq: [
    {
      question: 'Hesaplanan ana yay boyutları ne kadar doğrudur?',
      answer: 'Hesaplamalar, ideal barrel geometrisi varsayan standart saatçilik formüllerine dayanır. Gerçek boyutlar, üretim toleransları, yay ucu konfigürasyonları (brace, eyelet veya T-ucu) ve kullanılan alaşıma bağlı olarak %5-10 oranında değişebilir. Hesaplanan değerleri güçlü bir referans noktası olarak kullanın, ancak sipariş vermeden önce üretici teknik verileri veya ticari tedarikçi katologlarıyla çapraz kontrol yapın.',
    },
    {
      question: 'Tam ticari boyutu bulamazsam ne yapmalıyım?',
      answer: 'Tam boyut mevcut olmadığında, önce yay yüksekliğini, ardından kalınlığı 0,005 mm içinde eşleştirmeye öncelik verin. Uzunluk, aynı yükseklik ve kalınlık ailesinden farklı bir yay seçilerek ayarlanabilir. Barrel yeterli alana sahipse biraz daha uzun bir yay çalışır, ancak daha kısa bir yay güç rezervini azaltır.',
    },
    {
      question: 'Ana yayı çıkarmadan barrel boyutlarını nasıl ölçerim?',
      answer: 'Barrel hâlâ eski yayı içeriyorsa, barrel dış çapını dışarıdan (ardından duvar kalınlığını çıkarın, tipik olarak 0,2-0,4 mm) ve toplam yüksekliği (ardından kapak kalınlığını çıkarın) ölçebilirsiniz. En doğru sonuçlar için, ölçümden önce eski yayı çıkarın ve barrelı temizleyin.',
    },
    {
      question: 'Brace ve eyelet ana yay ucu arasındaki fark nedir?',
      answer: 'Brace ucu (T-ucu olarak da adlandırılır), barrel duvarına takılan küçük T şeklinde bir çıkıntıya sahiptir. Çoğu modern İsviçre ve Japon kalibresi bu türü kullanır. Eyelet ucu, arbordaki bir çiviye oturan küçük bir deliğe sahiptir. Bu araç yalnızca şerit boyutlarını hesaplar; sipariş vermeden önce uç tipinin barrelınızla eşleştiğini doğrulamalısınız.',
    },
    {
      question: 'Bu aracı kronograf veya otomatik hareketler için kullanabilir miyim?',
      answer: 'Evet, ancak otomatik hareketlerin genellikle daha yüksek tur sayısına (8-10) sahip olduğunu ve ek kurma modülünü barındırmak için biraz daha ince bir yay gerektirebileceğini unutmayın. Kronograf hareketleri tipik olarak kronograf mekanizmasını çalıştırmak için daha kalın yaylara ihtiyaç duyar. Tur sayısını buna göre ayarlayın ve üretici teknik verileriyle doğrulayın.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Barrel iç çapını ölçün',
      text: 'Hassas bir kumpas kullanarak barrel tamburunun iç çapını ölçün. Birbirine 90 derece açıyla iki noktada ölçüm yapın ve okumaların ortalamasını alın. Sonucu milimetre olarak kaydedin.',
    },
    {
      name: 'Arbor çapını ölçün',
      text: 'Ana yay iç spiralinin takıldığı en geniş noktada barrel arborunun çapını ölçün. Bu tipik olarak arborun ortasına yakındır, kare ucunda değil.',
    },
    {
      name: 'Barrel iç yüksekliğini ölçün',
      text: 'Barrelin tabanından üst kenarına kadar olan derinliği ölçün. Kapak çıkarılabiliyorsa, kapak kalınlığını da ölçümünüze ekleyin. Yay yüksekliği yaklaşık 0,1 mm daha az olacaktır.',
    },
    {
      name: 'Tur sayısını ayarlayın',
      text: 'Tam kurulduğunda ana yayın kaç tam tur yaptığını belirleyin. Mekanik kurmalı kalibreler için bu tipik olarak 5-8 turdur. Otomatikler 6-10 tura sahip olabilir. Mümkünse hareket teknik verilerini kontrol edin.',
    },
    {
      name: 'Hesaplanan boyutları okuyun',
      text: 'Araç, önerilen yay kalınlığını, yüksekliğini ve uzunluğunu görüntüler. Ayrıca yay gücü kategorisini tahmin eder ve hem metrik hem de emperyal birimlerde ticari karşılıkları sağlar.',
    },
    {
      name: 'Kataloglarla çapraz kontrol yapın',
      text: 'Gösterilen ticari boyutları kullanarak tedarikçi katologlarını arayın. Cousins UK, Jules Borel veya tercih ettiğiniz tedarikçiye metrik veya emperyal boyutları girin. Tam boyut mevcut değilse aramayı ayarlayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hesaplanan ana yay boyutları ne kadar doğrudur?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Hesaplamalar standart saatçilik formüllerine dayanır. Gerçek boyutlar %5-10 oranında değişebilir. Her zaman üretici teknik verileri veya ticari katologlarla çapraz kontrol yapın.' },
        },
        {
          '@type': 'Question',
          'name': 'Tam ticari boyutu bulamazsam ne yapmalıyım?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Önce yay yüksekliğini tam olarak, ardından kalınlığı 0,005 mm içinde eşleştirin. Uzunluğu aynı yükseklik/kalınlık ailesinden ayarlayın.' },
        },
        {
          '@type': 'Question',
          'name': 'Ana yayı çıkarmadan barrel nasıl ölçülür?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Dış barrel çapını ölçün ve duvar kalınlığını (0,2-0,4 mm) çıkarın. En iyi sonuçlar için önce eski yayı çıkarın.' },
        },
        {
          '@type': 'Question',
          'name': 'Brace ve eyelet uçları arasındaki fark nedir?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-ucu) barrel duvarına takılır. Eyelet, arbor çivisi üzerinde bir deliğe sahiptir. Modern İsviçre/Japon kalibreleri brace ucu kullanır.' },
        },
        {
          '@type': 'Question',
          'name': 'Kronograf veya otomatik hareketler için kullanabilir miyim?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Evet. Otomatikler genellikle daha fazla tur (8-10) ve daha ince yaylar gerektirir. Kronograflar daha kalın yaylara ihtiyaç duyar. Tur sayısını ayarlayın ve doğrulayın.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ana Yay Bulucu',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Saat Ana Yayı Hesaplayıcı',
      'description': 'Vintage saat hareketleri için barrel ölçümlerinden teorik ana yay boyutlarını hesaplayın.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Saat ana yayı boyutları hesaplama',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Barrel iç çapı, arbor boyutu ve kurma turlarından ana yay boyutlarının nasıl hesaplanacağını öğrenin.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Doğru ana yay nasıl bulunur',
      'description': 'Saat barrelını ölçme ve doğru ana yay boyutlarını hesaplama adım adım kılavuz.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Barrel iç çapını ölçün', 'text': 'Hassas bir kumpas kullanarak barrel tamburunun iç çapını ölçün.' },
        { '@type': 'HowToStep', 'name': 'Arbor dış çapını ölçün', 'text': 'Barrel arborunun en geniş noktasındaki çapını ölçün.' },
        { '@type': 'HowToStep', 'name': 'Barrel yüksekliğini ölçün', 'text': 'İç derinliği ölçün. Yay yüksekliği yaklaşık 0,1 mm daha azdır.' },
        { '@type': 'HowToStep', 'name': 'Tur sayısını ayarlayın', 'text': 'Mekanik kurmalı için 5-8, otomatik hareketler için 6-10 ayarlayın.' },
        { '@type': 'HowToStep', 'name': 'Sonuçları okuyun', 'text': 'Yay kalınlığını, yüksekliğini, uzunluğunu ve ticari karşılıklarını görüntüleyin.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Ana Yay Bulucu',
      'description': 'Saatçilerin barrel ölçümlerinden ana yay boyutlarını hesaplamaları için bir araç.',
      'category': 'Saatçilik Aracı',
      'audience': { '@type': 'Audience', 'audienceType': 'Saatçiler ve saatseverler' },
    },
  ],
};
