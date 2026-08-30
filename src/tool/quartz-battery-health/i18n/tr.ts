import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'kuvars-pil-saglik-kontrolu',
  title: 'Kuvars Pil Sağlığı Kontrolcüsü',
  description: 'Hücre kapasitesini (mAh) ve kalibre güç tüketimini (µA) girerek bir kuvars hareketin teorik pil ömrünü hesaplayın. Değiştirme tarihini tahmin etmek için isteğe bağlı olarak takılma tarihini ayarlayın.',
  ui: {
    title: 'Kuvars Pil Sağlığı Kontrolcüsü',
    batteryLabel: 'Pil Hücresi',
    selectBattery: 'Pil seçin',
    customBattery: 'Özel',
    capacityLabel: 'Kapasite',
    capacityUnit: 'mAh',
    consumptionLabel: 'Tüketim',
    consumptionUnit: 'µA',
    installDateLabel: 'Takılma Tarihi',
    installDateHint: 'İsteğe Bağlı',
    monthLabel: 'Ay',
    yearLabel: 'Yıl',
    calculate: 'Hesapla',
    resultLabel: 'Tahmini Ömür',
    theoreticalLife: 'Teorik ömür',
    yearsLabel: 'yıl',
    monthsLabel: 'ay',
    daysLabel: 'gün',
    changeDateLabel: 'Değiştirme Zamanı',
    noDateHint: 'Değiştirme tarihini görmek için takılma tarihini girin',
    healthLabel: 'Durum',
    healthGood: 'İyi',
    healthModerate: 'Orta',
    healthCritical: 'Kritik',
    step1: 'Yaygın bir pil seçin veya kapasite girmek için Özel\'i seçin.',
    step2: 'Hareketin güç tüketimini mikroamper (µA) cinsinden girin.',
    step3: 'İsteğe bağlı olarak takılma tarihini ekleyin, ardından Hesapla\'ya basın.',
    tipTitle: 'İpucu',
    tipContent: 'Her zaman resmi kalibre veri sayfasındaki tüketim değerini kullanın. Gerçek dünya ömrü, sıcaklık ve yük değişimleri nedeniyle %10-20 daha kısa olabilir.',
  },
  seo: [
    { type: 'title', text: 'Kuvars Pil Sağlığı Kontrolcüsü: Saatinizin Pili Ne Kadar Dayanacak?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Tipik 3 akrep çekişi' },
        { value: '18-55 mAh', label: 'Yaygın hücre kapasitesi' },
        { value: '2.5-4.5 yr', label: 'Normal pil ömrü' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Kuvars saatinizin ne zaman duracağını mı merak ediyorsunuz? <strong>Kuvars Pil Sağlığı Kontrolcüsü</strong>, hücre kapasitesini (mAh olarak) hareketin ortalama güç tüketimiyle (mikroamper, µA olarak) karşılaştırarak herhangi bir kuvars hareketin pil ömrünü tahmin etmenize yardımcı olur. İster bir Swiss ETA, ister bir Japon Miyota, Seiko, Ronda veya Çin DG hareketine sahip olun, bu araç teorik ömrü yıl, ay ve gün cinsinden hesaplar ve takılma ayı ile yılını girerseniz tam değiştirme tarihini bile tahmin eder.' },
    { type: 'title', text: 'Kuvars Pil Ömrü Nasıl Hesaplanır: Tahminin Arkasındaki Matematik', level: 3 },
    { type: 'paragraph', html: 'Pil ömrü basit bir elektrik formülüne dayanır: <strong>Ömür (saat) = (Hücre kapasitesi mAh x 1000) / Akım tüketimi µA</strong>. Bu sonucu 24\'e bölmek günü, 365.25\'e bölmek yılı verir. Örneğin, 40 mAh kapasiteli standart bir <strong>SR920SW (371) hücresi</strong>, 1.5 µA çeken bir hareketi teorik olarak yaklaşık <strong>3 yıl</strong> besler. Tüketimi 1.0 µA\'ya düşürün, aynı hücre 4.5 yılı aşar. 2.5 µA\'ya çıkarın, pil ömrü 2 yılın altına iner. Servis aralıklarınızı planlarken her mikroamperin kesri önemlidir.' },
    { type: 'title', text: 'En Yaygın Kuvars Saat Pil Türleri ve Kapasiteleri', level: 3 },
    {
      type: 'table',
      headers: ['Hücre Referansı', 'Yaygın Kod', 'Kapasite', 'Tipik Kullanım'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'İnce elbise saatleri'],
        ['SR626SW', '377', '27 mAh', 'Orta boy kuvars modeller'],
        ['SR920SW', '371', '40 mAh', 'Kronograflar ve çok fonksiyonlu'],
        ['SR936SW', '394', '55 mAh', 'Büyük analog dijital hibritler'],
        ['CR2025', '-', '165 mAh', 'Yüksek akımlı LED modüller'],
      ],
    },
    { type: 'tip', title: 'Orijinal Spesifikasyona Uyun', html: 'Yanlış hücre türünü seçmek pil ömrünü %40\'a kadar azaltabilir. Değiştirme yapmadan önce her zaman orijinal pil referans numarasını kontrol edin. Numaralı kod boyutları belirtir, örneğin <strong>SR936SW</strong> 9.5 mm çapında ve 3.6 mm kalınlığındadır.' },
    { type: 'title', text: 'Neden Her Zaman Resmi Kalibre Tüketim Değerlerini Kullanmalısınız', level: 3 },
    { type: 'paragraph', html: '<strong>ETA, Ronda, Miyota, Seiko ve ISA</strong> gibi hareket üreticileri, ürettikleri her kalibre için resmi teknik veri sayfaları yayınlar. Bu veri sayfaları, kontrollü sıcaklıkta (genellikle 22 °C) ve standart bir akrep tork yüküyle <strong>ortalama akım tüketimini</strong> listeler. Hareketiniz aslında 2.5 µA çekerken 1.0 µA gibi tahmini bir değer kullanmak pil ömrünü %100\'den fazla abartabilir. Gerçek tüketim değerini almak için her zaman üretici web sitesinden resmi PDF\'i indirin veya özel veritabanlarında kalibre referansını kontrol edin.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pil Sızıntısı Saatinize Zarar Verebilir',
      html: 'Tükenmiş bir gümüş oksit pil, <strong>potasyum hidroksit sızdırabilir</strong>; bu da kontak yaylarını, devre kartı izlerini ve hatta step motor bobinini aşındırır. Araç, kalan ömrün <strong>6 aydan az</strong> olduğunu tahmin ediyorsa, bir sonraki rutin kontrolünüzde pil değişimi planlayın. Özellikle <strong>1970\'ler ve 1980\'lerden kalma vintage kuvars saatlere</strong> dikkat edin, orijinal pilleri onlarca yıl kasa içinde kaldıktan sonra sızıntıya çok daha yatkındır.',
    },
    { type: 'title', text: 'Gerçek Dünya Pil Ömrünü Teorik Tahmine Göre Azaltan Faktörler', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Sıcaklık aşırılıkları</strong>: güneşli bir gösterge panelinde bırakılan saat %30 daha yüksek akım çekebilir',
        '<strong>Ömür sonu algılama devreleri</strong>: iki saniyelik tik göstergesi etkinleştirildiğinde ekstra güç tüketir',
        '<strong>Kronograf veya alarm kullanımı</strong>: zamanla biriken anlık akım sıçramaları',
        '<strong>Mekanik sürtünme</strong>: eskimiş veya kirli dişli takımları step motorun ihtiyaç duyduğu torku artırır',
        '<strong>Manyetik alanlar</strong>: maruziyet motor tork gereksinimlerini artırarak hücreyi daha hızlı tüketir',
      ],
    },
    { type: 'paragraph', html: 'Pratikte, teorik hesaplamadan <strong>%10 ila %20 daha kısa ömür</strong> bekleyebilirsiniz. Yüksek hassasiyetli termokompansasyonlu kuvars hareketlerde tüketim daha az değişir, ancak standart kuvars bu çevresel faktörlere belirgin şekilde duyarlıdır.' },
    { type: 'title', text: 'Kuvars Saatiniz İçin Doğru Pil Yedeğini Nasıl Bulursunuz', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Gümüş Oksit)', definition: 'SR damgalı hücreler (ör. SR920SW), ömürleri boyunca sabit 1.55 V çıkış sağlayarak kuvars osilatörün doğru kalmasını sağlar. Kaliteli kuvars saatler için standarttır.' },
        { term: 'LR (Alkalin)', definition: 'LR damgalı hücreler (ör. LR41) kademeli olarak düşen bir voltaja sahiptir, bu da saatin yavaş çalışmasına veya erken durmasına neden olabilir. SR hücrelerinin yerine önerilmez.' },
        { term: 'CR (Lityum)', definition: 'CR damgalı hücreler (ör. CR2025) 3.0 V verir ve LED arka aydınlatmalı, büyük LCD\'li veya çoklu komplikasyonlu yüksek akımlı modüllerde kullanılır.' },
        { term: 'Numara Kodu', definition: 'Dört rakam fiziksel boyutu kodlar: ilk iki rakam milimetre cinsinden çapı, son iki rakam milimetrenin onda biri cinsinden kalınlığı belirtir. SR936SW = Ø9.5 mm x 3.6 mm.' },
      ],
    },
    { type: 'title', text: 'Standart Kuvars ve Solar ve Kinetik: Teknoloji Denklemi Nasıl Değiştiriyor', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standart Kuvars',
          description: 'Değiştirilebilir bir gümüş oksit veya lityum birincil pil kullanır. Pil ömrü tamamen kapasite ve tüketime bağlıdır. Bu hesaplayıcı bunun için tasarlanmıştır.',
          highlight: true,
          points: [
            'Değiştirilebilir birincil pil',
            'Ömür = kapasite / tüketim',
            'Öngörülebilir değiştirme takvimi',
            'Uygun fiyatlı pil değişimleri',
          ],
        },
        {
          title: 'Solar ve Kinetik',
          description: 'Solar saatler, bir lityum iyon aküyü şarj etmek için fotovoltaik hücreler kullanır. Kinetik saatler, bir kapasitörü şarj etmek için rotor tahrikli bir mikro jeneratör kullanır.',
          points: [
            'Şarj edilebilir enerji depolama',
            'Ömür şarj döngülerine bağlıdır',
            'Zamanla kapasitör bozulması',
            'Bu hesaplayıcı ile uyumlu değil',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Üreticilerin <strong>"10 yıl pil ömrü"</strong> iddiaları genellikle çok düşük tüketimli hareketlere (yaklaşık 0.5 ila 0.8 µA) büyük kapasiteli hücreler (165 mAh CR2025 veya daha büyük) ile eşleştirilerek dayanır. Küçük bir gümüş oksit hücreye (SR626SW 27 mAh gibi) ve tipik 1.5 µA harekete sahip standart bir analog kuvars saatte gerçek ömür <strong>2.5 - 3 yıla</strong> daha yakındır. Pazarlama etiketlerine güvenmek yerine her zaman bu hesaplayıcı ile doğrulayın.' },
    {
      type: 'tip',
      title: 'Tepkisel Değil, Proaktif Değiştirin',
      html: 'Saniye ibresinin <strong>2 saniye veya 4 saniye aralıklarla</strong> zıpladığını gördüğünüzde, hareket düşük voltaj nedeniyle güç tasarrufu moduna girmiştir. Pilin yaklaşık <strong>2 ila 4 hafta</strong> kalan ömrü vardır. Sızıntı hasarını önlemek için hemen değiştirin.',
    },
    {
      type: 'summary',
      title: 'Kuvars Saat Pil Sağlığı İçin Temel Çıkarımlar',
      items: [
        'Üretici veri sayfasındaki resmi kalibre tüketim değerini kullanın, tahmini bir değer ömrü %100\'den fazla abartabilir',
        'Orijinal hücre türünü birebir eşleştirin: SR, LR ve CR kimyasalları birbirinin yerine kullanılamaz',
        'Araç kalan ömrü 6 aydan az gösterdiğinde sızıntıyı önlemek için pili değiştirin',
        'Gerçek dünya pil ömrü, sıcaklık, sürtünme ve kullanım nedeniyle teorik idealden tipik olarak %10-20 daha kısadır',
        'Bu hesaplayıcı, değiştirilebilir birincil pillere sahip standart kuvars hareketler için tasarlanmıştır, solar veya kinetik saatler için değil',
      ],
    },
  ],
  faq: [
    {
      question: 'Teorik pil ömrü tahmini ne kadar doğrudur?',
      answer: 'Hesaplama, kapasitenin tüketime bölünmesine dayanan elektriksel bir idealdir. Gerçek dünya koşullarında, sıcaklık değişimi, ömür sonu algılama devreleri, eski yağlayıcılardan kaynaklanan mekanik sürüklenme ve kronograf veya alarm işlevlerinin ek yükü nedeniyle %10 ila %20 daha kısa ömür bekleyebilirsiniz. Tahmin, kesin bir öngörü değil, güvenilir bir üst sınırdır.',
    },
    {
      question: 'Kuvars kalibrem için tam güç tüketim değerini nerede bulurum?',
      answer: 'ETA, Ronda, Miyota, Seiko, ISA ve diğer hareket üreticilerinin resmi teknik veri sayfaları, ortalama akım tüketimini mikroamper (µA) cinsinden listeler. Kalibre referans numarasının ardından "veri sayfası" veya "teknik özellikler" ifadesiyle arama yapın. Ranfft, 17jewels ve Watch-Wiki gibi özel veritabanları, saat topluluğu tarafından katkıda bulunan tüketim değerlerini de yayınlar.',
    },
    {
      question: 'µA ne anlama geliyor ve neden önemlidir?',
      answer: 'µA, mikroamper veya bir amperin milyonda biri anlamına gelir. Hareketin pilden çektiği elektrik akımını ölçer. Tipik bir analog kuvars üç akrep hareketi 1.0 ile 2.5 µA arasında çeker. Kronograflar ve çok fonksiyonlu modüller 3.0 ile 6.0 µA arasında çekebilir. Akım ne kadar yüksekse, belirli bir hücre kapasitesi için pil ömrü o kadar kısadır.',
    },
    {
      question: 'Bu aracı güneş enerjili veya kinetik saatler için kullanabilir miyim?',
      answer: 'Hayır. Güneş enerjili saatler (Eco-Drive, Solar, Işıkla Çalışan), şarj edilebilir bir pili şarj etmek için fotovoltaik hücreler kullanır. Kinetik ve Auto-Quartz saatler, bir kapasitörü şarj etmek için rotor ve mikro jeneratör kullanır. Her iki teknoloji de tek kullanımlık birincil pile dayanmaz, bu nedenle kapasite ve tüketim modeli uygulanmaz. Bu hesaplayıcıyı yalnızca değiştirilebilir gümüş oksit, alkalin veya lityum hücreli standart kuvars hareketler için kullanın.',
    },
    {
      question: 'Pili tamamen bitmeden değiştirmeli miyim?',
      answer: 'Evet. Gümüş oksit ve alkalin piller tamamen boşaldığında potasyum hidroksit sızdırarak kontak yaylarına, PCB izlerine ve step motor bobinine zarar verebilir. Tam deşarjdan önce değiştirme kesinlikle önerilir. Araç tahmini kalan ömrü 6 aydan az gösteriyorsa, mümkün olan en kısa sürede pil değişimi planlayın.',
    },
    {
      question: 'Orijinalden daha yüksek veya daha düşük kapasiteli bir pil kullanırsam ne olur?',
      answer: 'Daha yüksek kapasiteli bir hücre (ör. SR920SW 40 mAh yerine SR936SW 55 mAh) pil ömrünü uzatır ancak fiziksel olarak sığmayabilir. Hücre, uygun kontak yayı basıncını korumak için orijinal çap ve kalınlıkla tam olarak eşleşmelidir. Daha düşük kapasiteli hücre kullanmak pil ömrünü kısaltır ve hücre küçük boyutluysa aralıklı temasa neden olabilir. Her zaman aynı referans numarası veya aynı boyut ailesinden belgelenmiş bir eşdeğeri ile değiştirin.',
    },
    {
      question: 'Saatimdeki pilin gümüş oksit mi yoksa alkalin mi olduğunu nasıl anlarım?',
      answer: 'Gümüş oksit hücreler SR (ör. SR920SW) damgalıdır ve ömürleri boyunca sabit 1.55 V çıkış sağlayarak kuvars osilatörün doğru kalmasını sağlar. Alkalin hücreler LR (ör. LR41) damgalıdır ve kademeli olarak düşen bir voltaja sahiptir, bu da saatin yavaş çalışmasına veya erken durmasına neden olabilir. Çoğu kaliteli saat markası gümüş oksit belirtir. Saatiniz orijinal olarak SR kullandıysa, her zaman SR ile değiştirin, LR ile değil.',
    },
    {
      question: 'Saniye ibresinin iki saniyede bir zıplaması pilin bittiği anlamına mı gelir?',
      answer: 'Evet. Kuvars hareket, pil voltajının step motoru güvenilir bir şekilde sürmek için çok düşük olduğunu algıladığında, saniye ibresinin 2 saniye veya 4 saniye aralıklarla zıpladığı bir güç tasarrufu moduna girer. Bu, ömür sonu göstergesidir. Bu davranışı gördüğünüzde, pilin yaklaşık 2 ila 4 hafta kalan ömrü vardır ve sızıntıyı önlemek için hemen değiştirilmelidir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pil hücresini seçin veya özelleştirin',
      text: 'Açılır listeden yaygın bir gümüş oksit hücre seçin, SR621SW, SR626SW, SR920SW, SR936SW ve diğerleri resmi kapasiteleriyle önceden yüklenmiştir. Hücreniz listelenmemişse, Özel\'i seçin ve tam kapasitesini pil etiketinde yazılı veya üretici veri sayfasında listelendiği şekilde mAh olarak girin.',
    },
    {
      name: 'Hareket güç tüketimini girin',
      text: 'Kalibreniz için ortalama akım tüketimini resmi teknik dokümantasyonda bulun. Değeri tüketim alanına mikroamper (µA) cinsinden yazın. Çoğu üç akrep hareket 1.0 ila 2.5 µA kullanır. Kronograflar ve çok fonksiyonlu modüller 6.0 µA\'ya kadar çıkabilir.',
    },
    {
      name: 'Takılma ayını ve yılını ekleyin (isteğe bağlı)',
      text: 'Pilin en son ne zaman takıldığını hatırlıyor veya kaydetmişseniz, ayı seçin ve yılı girin. Araç, bu tarihi kullanarak tahmini değiştirme tarihini hesaplar ve kalan pil sağlığını yüzde olarak gösterir.',
    },
    {
      name: 'Teorik ömrü okuyun',
      text: 'Sonuç kartı, toplam tahmini pil ömrünü yıl, ay ve kalan gün cinsinden gösterir. Bu, hiçbir dış faktörün pil kapasitesini azaltmadığı ideal koşullar altındaki maksimum ömürdür.',
    },
    {
      name: 'Sağlık durumunu ve değiştirme tarihini kontrol edin',
      text: 'Takılma tarihi sağlandığında, gösterge kalan pil ömrüyle orantılı olarak dolar. Yeşil "İyi" rozeti %50\'den fazla ömür kaldığı anlamına gelir. Sarı "Orta" %20 ile %50 arası olduğunu gösterir. Kırmızı "Kritik" %20\'den az kaldığı anlamına gelir. Kesin önerilen değiştirme tarihi göstergenin altında gösterilir.',
    },
    {
      name: 'Girişleri ayarlayın ve yeniden hesaplayın',
      text: 'Pil modeli, tüketim değeri veya takılma tarihi gibi herhangi bir girişi değiştirin, sonuç otomatik olarak güncellenir. Farklı pil türlerini karşılaştırmak veya koleksiyonunuzdaki birden çok saat için değiştirme takvimleri planlamak için bunu kullanın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Teorik pil ömrü tahmini ne kadar doğrudur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hesaplama, kapasitenin tüketime bölünmesine dayanan elektriksel bir idealdir. Gerçek dünya koşullarında, sıcaklık değişimi, ömür sonu algılama devreleri, eski yağlayıcılardan kaynaklanan mekanik sürüklenme ve kronograf veya alarm işlevlerinin ek yükü nedeniyle %10 ila %20 daha kısa ömür bekleyebilirsiniz. Tahmin, kesin bir öngörü değil, güvenilir bir üst sınırdır.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kuvars kalibrem için tam güç tüketim değerini nerede bulurum?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ETA, Ronda, Miyota, Seiko, ISA ve diğer hareket üreticilerinin resmi teknik veri sayfaları, ortalama akım tüketimini mikroamper (µA) cinsinden listeler. Kalibre referans numarasının ardından veri sayfası veya teknik özellikler ifadesiyle arama yapın. Ranfft ve 17jewels gibi özel veritabanları da topluluk tarafından katkıda bulunan tüketim değerlerini yayınlar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'µA ne anlama geliyor ve neden önemlidir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA, mikroamper veya bir amperin milyonda biri anlamına gelir. Hareketin pilden çektiği elektrik akımını ölçer. Tipik bir analog kuvars üç akrep hareketi 1.0 ile 2.5 µA arasında çeker. Kronograflar ve çok fonksiyonlu modüller 3.0 ile 6.0 µA arasında çekebilir. Akım ne kadar yüksekse, belirli bir hücre kapasitesi için pil ömrü o kadar kısadır.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bu aracı güneş enerjili veya kinetik saatler için kullanabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hayır. Güneş enerjili saatler, şarj edilebilir bir pili şarj etmek için fotovoltaik hücreler kullanır. Kinetik saatler, bir kapasitörü şarj etmek için rotor ve mikro jeneratör kullanır. Her iki teknoloji de tek kullanımlık birincil pile dayanmaz. Bu hesaplayıcıyı yalnızca değiştirilebilir gümüş oksit, alkalin veya lityum hücreli standart kuvars hareketler için kullanın.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Pili tamamen bitmeden değiştirmeli miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. Gümüş oksit ve alkalin piller tamamen boşaldığında potasyum hidroksit sızdırarak kontak yaylarına, PCB izlerine ve step motor bobinine zarar verebilir. Tam deşarjdan önce değiştirme kesinlikle önerilir. Araç tahmini kalan ömrü 6 aydan az gösteriyorsa, mümkün olan en kısa sürede pil değişimi planlayın.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saatimdeki pilin gümüş oksit mi yoksa alkalin mi olduğunu nasıl anlarım?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gümüş oksit hücreler SR (ör. SR920SW) damgalıdır ve ömürleri boyunca sabit 1.55 V çıkış sağlar. Alkalin hücreler LR (ör. LR41) damgalıdır ve kademeli olarak düşen bir voltaja sahiptir. Çoğu kaliteli saat markası gümüş oksit belirtir. Her zaman SR\'yi SR ile değiştirin, LR ile değil.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saniye ibresinin iki saniyede bir zıplaması pilin bittiği anlamına mı gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. Kuvars hareket düşük pil voltajı algıladığında, saniye ibresinin 2 saniye veya 4 saniye aralıklarla zıpladığı güç tasarrufu moduna girer. Bu, ömür sonu göstergesidir. Bu davranışı gördüğünüzde, pilin yaklaşık 2 ila 4 hafta kalan ömrü vardır ve sızıntıyı önlemek için hemen değiştirilmelidir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kuvars Pil Sağlığı Kontrolcüsü',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Saat Pili Ömrü Hesaplayıcı',
      'description': 'Hücre kapasitesini (mAh) ve kalibre güç tüketimini (µA) girerek herhangi bir kuvars saat hareketinin teorik pil ömrünü hesaplayın. Takılma ayı ve yılı sağlandığında değiştirme tarihini tahmin eder.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Kuvars saat pil ömrü hesaplaması: kapasite ve tüketim açıklaması',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Hücre kapasitesini (mAh) ve hareket güç tüketimini (µA) kullanarak bir kuvars saat hareketinin pil ömrünü nasıl tahmin edeceğinizi öğrenin. Formülü, sıcaklık ve yükün etkisini ve ne zaman değiştirme yapılması gerektiğini anlayın.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Kuvars saat pil ömrü nasıl tahmin edilir',
      'description': 'Kuvars Pil Sağlığı Kontrolcüsünü kullanarak herhangi bir kuvars saat pilinin kalan ömrünü belirlemek ve değiştirme tarihini planlamak için adım adım kılavuz.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pil hücresini seçin veya özelleştirin',
          'text': 'Açılır listeden yaygın bir gümüş oksit hücre seçin, SR621SW, SR626SW, SR920SW, SR936SW ve diğerleri resmi kapasiteleriyle önceden yüklenmiştir. Hücreniz listelenmemişse, Özel\'i seçin ve tam kapasitesini mAh olarak girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hareket güç tüketimini girin',
          'text': 'Kalibreniz için ortalama akım tüketimini resmi teknik dokümantasyondan bulun. Değeri tüketim alanına mikroamper (µA) cinsinden yazın.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Takılma ayını ve yılını ekleyin',
          'text': 'Pilin ne zaman takıldığını biliyorsanız, ayı seçin ve yılı girin. Araç tahmini değiştirme tarihini hesaplar ve kalan pil sağlığını yüzde olarak gösterir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Teorik ömrü okuyun',
          'text': 'Sonuç kartı, toplam tahmini pil ömrünü yıl, ay ve kalan gün cinsinden gösterir. Bu, ideal koşullar altındaki maksimum ömürdür.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sağlık durumunu ve değiştirme tarihini kontrol edin',
          'text': 'Takılma tarihi sağlandığında, gösterge kalan ömrü gösterir. Yeşil %50\'den fazla kaldığı anlamına gelir. Sarı %20 ila %50 arası olduğunu gösterir. Kırmızı %20\'den az kaldığı anlamına gelir. Önerilen değiştirme tarihi aşağıda gösterilir.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Kuvars Pil Sağlığı Kontrolcüsü',
      'description': 'Hücre kapasitesi ve hareket güç tüketimine dayalı olarak kuvars saat pil ömrünü tahmin etmek için çevrimiçi bir araç.',
      'category': 'Saat Pili Hesaplayıcı',
      'audience': { '@type': 'Audience', 'audienceType': 'Saat meraklıları ve tamir teknisyenleri' },
    },
  ],
};
