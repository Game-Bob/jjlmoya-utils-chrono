import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'tac-referans-rehberi',
  title: 'Saat Kurma Kolu Referans Kılavuzu',
  description: 'Popüler hareketler için kurma kolu konumları, kurma yönleri ve ayar işlevlerini gösteren interaktif kılavuz.',
  ui: {
    title: 'Kurma Kolu Ayarları',
    movementLabel: 'Hareket',
    selectMovement: 'Hareket seçin',
    customMovement: 'Özel',
    positionLabel: 'Konum',
    unscrewFirst: 'Önce kurma kolunu sökün',
    windingLabel: 'Kurma',
    hackLabel: 'Saniye Durdurma',
    dangerZoneLabel: '21.00\u201303.00 arasından kaçının',
    directionCW: 'Saat yönünde',
    directionCCW: 'Saat yönünün tersine',
    directionBoth: 'Çift yönlü',
    pullHint: 'Kurma kolunu çekin',
    clickPosition: 'Bir konuma tıklayın',
    position0Title: 'Dinlenme',
    position0Desc: 'Kurma kolu itilmiş durumda. Saat normal şekilde çalışır.',
    position0Detail: 'Hiçbir kurma veya ayar işlevi devrede değildir.',
    position1Title: 'Manuel Kurma',
    position1Desc: 'Kurma kolunu saat yönünde çevirerek ana yayı kurun. Yay gerildikçe direnç hissedersiniz.',
    position1Detail: 'Tam duruştan yaklaşık 30\u201340 tam tur. Otomatik rotorlar da takılıyken kurma yapar.',
    position2Title: 'Tarih Hızlı Ayarı',
    position2Desc: 'Kurma kolunu saat yönünde çevirerek tarihi ilerletin. Akrep saniyelerle senkronize kalır.',
    position2Detail: 'Tarih değiştirme mekanizması devredeyken 21.00 ile 03.00 arasında hızlı tarih ayarı YAPMAYIN.',
    position3Title: 'Saat Ayarı',
    position3Desc: 'Kurma kolunu her iki yönde çevirerek kolları hareket ettirin. Saniye kolu hassas senkronizasyon için durur (durdurma).',
    position3Detail: 'Konum 3\'e çekin, saniyeler 12\'yi gösterene kadar bekleyin, ardından tamamen çekin. Saati ayarlamak için döndürün ve geri itin.',
    screwDownHint: 'Su geçirmezlik için kurma kolunu geri vidalayın.',
    noQuickSet: 'Hızlı ayar yok',
    noHack: 'Yok',
    hasHack: 'Var',
    crownPositions: 'Kurma Kolu Konumları',
    noteTitle: 'Not',
  },
  seo: [
    { type: 'title', text: 'Saat Kurma Kolu Konumları Kılavuzu — Doğru Kurma, Tarih ve Saat Ayarı', level: 2 },
    { type: 'paragraph', html: 'Kurma kolu, sizinle saatinizin hareketi arasındaki tek fiziksel arayüzdür. Yanlış kullanım — geriye doğru kurma, gece yarısı tarih ayarı veya çok sert çekme — mekanizmaya zarar verebilir. Bu kılavuz, <strong>ETA, Sellita, Miyota, Seiko ve Unitas</strong> kalibreleri için her kurma kolu konumunu ayrıntılı olarak açıklar, böylece asla tahmin etmek zorunda kalmazsınız.' },
    { type: 'title', text: 'Kurma Kolu Konumlarına Genel Bakış', level: 3 },
    { type: 'glossary', items: [
      { term: 'Konum 0 (Dinlenme)', definition: 'Kurma kolu itilmiş veya vidalanmış durumda. Saat normal çalışır. Hiçbir işlev devrede değildir. Ayar yaptıktan sonra her zaman buraya dönün.' },
      { term: 'Konum 1 (Kurma)', definition: 'İlk çekme veya sökülmüş durum. Ana yayı kurmak için saat yönünde çevirin. Çoğu otomatik saat rotorla da kurulur.' },
      { term: 'Konum 2 (Tarih Hızlı Ayarı)', definition: 'İkinci çekme. Tarihi ilerletmek için saat yönünde çevirin. Tarih mekanizması devredeyken 21.00\u201303.00 arasında kullanmaktan kaçının.' },
      { term: 'Konum 3 (Saat Ayarı)', definition: 'Üçüncü çekme. Hassas hizalama için saniye kolu durur (durdurma). Saati ayarlamak için serbestçe döndürün. Çoğu modern otomatik saatte bulunur.' },
    ] },

    { type: 'title', text: 'Hareket Karşılaştırması: Kurma Kolu Özellikleri', level: 3 },
    { type: 'table', headers: ['Hareket', 'Konumlar', 'Durdurma', 'Hızlı Ayar', 'Kurma Yönü'], rows: [
      ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['Miyota 8215', '2 (0,1,3)', 'Yok', 'Yok', 'SY'],
      ['Miyota 9015', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['Seiko 6R35', '3 (0,1,2,3)', 'Var', 'Tarih (SY)', 'SY'],
      ['Unitas 6497/6498', '1 (0,1,3)', 'Yok', 'Yok', 'SY'],
    ] },

    { type: 'diagnostic', variant: 'warning', title: 'Yaygın Kurma Kolu Hataları', icon: 'mdi:alert', badge: 'YAPMAYIN', html: 'Tarih tekeri devredeyken <strong>21.00 ile 03.00 arasında</strong> asla hızlı tarih ayarı yapmayın. Bu, dişleri kırabilir ve tam hareket servisi gerektirebilir. Bu aralıkta tarih değiştirmeniz gerekiyorsa, önce saati 03.00\'ün ötesine ilerletin, tarihi ayarlayın, ardından doğru saate geri dönün.' },

    { type: 'tip', title: 'Vidalı Kurma Kolları', html: 'Dalış saatleri ve spor saatlerinde su geçirmezlik için genellikle vidalı kurma kolları bulunur. <strong>Çekmeden önce her zaman sökün</strong>. Kurma kolu dışarı fırlayana kadar saat yönünün tersine çevirin, ardından istediğiniz konuma çekin. Ayar yaptıktan sonra itin, ardından hafifçe bastırarak saat yönünde sıkın. <strong>Aşırı sıkmayın.</strong>' },

    { type: 'comparative', columns: 2, items: [
      { title: 'Standart Kurma Kolu', icon: 'mdi:crown', description: 'Çoğu elbise saati ve günlük otomatik saatte bulunan itmeli-çekmeli kurma kolu. 2\u20134 konum. Su geçirmezlik tipik olarak 30\u2013100m.', points: ['Anında erişim, sökme gerektirmez', 'Sınırlı su geçirmezlik', 'ETA, Miyota, Seiko\'da yaygın'] },
      { title: 'Vidalı Kurma Kolu', icon: 'mdi:lock', description: 'Kasa tüpüne vidalanan dişli kurma kolu. Dalış saatleri ve alet saatlerinde standarttır. Su geçirmezlik 200m+.', points: ['Üstün su geçirmezlik', 'Kullanmadan önce sökülmeli', 'Rolex, Omega, Seiko Prospex\'te yaygın'], highlight: true },
    ] },

    { type: 'summary', title: 'Hızlı Başvuru', items: [
      'Her zaman saat yönünde kurun — ters yönde kurma kaydırmalı kavramayı çalıştırır ancak kurma yapmaz.',
      'Vidalı kurma kolunuz varsa, herhangi bir konuma çekmeden önce sökün.',
      '21.00 ile 03.00 arasında hızlı tarih ayarı yapmaktan kaçının. Gerekirse önce saati 03.00\'ün ötesine ilerletin.',
      'Elle kurulan hareketlerin (ör. Unitas 6498) daha az konumu vardır. Saat ayarı yapmadan önce tamamen kurun.',
      'Durdurmasız hareketler (ör. Miyota 8215) farklı bir teknik gerektirir: hedef dakikayı geçip döndürün, ardından yavaşça geri getirin.',
    ] },
  ],
  faq: [
    {
      question: 'Saatimin kaç kurma kolu konumu var?',
      answer: 'Çoğu otomatik hareketin dinlenme dışında 3 işlevsel konumu vardır: manuel kurma için konum 1, tarih hızlı ayarı için konum 2 ve durdurmalı saat ayarı için konum 3. Unitas 6498 gibi elle kurulan hareketlerin yalnızca 1 işlevsel konumu vardır (kurma ve daha ileri çekmede saat ayarı). Vidalı kurma kolları ek bir adım ekler: çekmeden önce sökün.',
    },
    {
      question: 'Saatimi geriye doğru kurarak zarar verebilir miyim?',
      answer: 'Hayır, ancak hiçbir şey yapmaz. Modern hareketler, geriye döndürüldüğünde devreden çıkan bir kaydırmalı kavrama kullanır, bu nedenle ters yönde kurma hasara neden olmaz ancak ana yayı da kurmaz. Manuel kurma için her zaman saat yönünde kurun. Tek istisna, bazı eski cep saatleri ve erken dönem otomatik hareketlerdir.',
    },
    {
      question: 'Tarih değiştirme tehlike bölgesi nedir ve nasıl önlerim?',
      answer: 'Tehlike bölgesi tipik olarak 21.00 ile 03.00 arasıdır; bu sürede tarih değiştirme mekanizması fiziksel olarak tarih tekerleğine bağlıdır. Bu aralıkta hızlı ayar yapmak dişlilere zarar verebilir. Güvenli tarih ayarı için: saati 03.00\'ün ötesine ilerletin, tarihi bir önceki güne ayarlayın, ardından doğru tarih ve saate ilerletin.',
    },
    {
      question: 'Kurma kolunu çektiğimde saniye kolum neden durmuyor?',
      answer: 'Bazı hareketlerde saniye durdurma (hacking) mekanizması yoktur. Yaygın durdurmasız kalibreler arasında Miyota 8215, Unitas 6497/6498 ve birçok eski hareket bulunur. Durdurmasız bir harekette saati doğru ayarlamak için: hedef dakikanızı 5\u201310 dakika geçip döndürün, ardından akrep tam istediğiniz noktaya gelene kadar yavaşça geri çevirin.',
    },
    {
      question: 'Saatimi tamamen kurmak için kaç tur gerektiğini nasıl anlarım?',
      answer: 'Çoğu otomatik hareket, tam duruştan 30\u201340 tam kurma kolu dönüşü gerektirir. Elle kurulan hareketler değişir: Unitas 6498 yaklaşık 30\u201335 tur, 70 saat rezervli Seiko 6R35 ise 50\u201360 tur gerektirir. Sert bir direnç hissettiğinizde durun — zorlamak ana yaya zarar verebilir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Hareket kalibrenizi bulun',
      text: 'Kasa arkasına (genellikle kazınmıştır) veya sergi tipi kasa arkasından hareketin üzerine bakın. Yaygın numaralar: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Kılavuzdan seçin',
      text: 'Açılır menüden hareketinizi seçin. Kurma kolu görseli ve paneli, tam konumlarınızı, kurma yönünüzü ve özelliklerinizi gösterecek şekilde güncellenir.',
    },
    {
      name: 'Her konumdan geçin',
      text: 'Konum çiplerine (0\u20133) veya "Çek" düğmesine tıklayın. Açıklamayı okuyun ve tarih ayarı için tehlike bölgesi uyarısını not edin.',
    },
    {
      name: 'Saatine uygula',
      text: 'Kılavuz yanınızda açıkken gerçek saatiniz üzerinde pratik yapın. Doğru yönde kurun, tehlike bölgesinden kaçının ve ardından kurma kolunu geri vidalayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Saatimin kaç kurma kolu konumu var?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Çoğu otomatik hareketin dinlenme dışında 3 işlevsel konumu vardır: manuel kurma için konum 1, tarih hızlı ayarı için konum 2 ve durdurmalı saat ayarı için konum 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saatimi geriye doğru kurarak zarar verebilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hayır. Modern hareketler, geriye döndürüldüğünde devreden çıkan bir kaydırmalı kavrama kullanır, bu nedenle ters yönde kurma hasara neden olmaz ancak ana yayı da kurmaz.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Tarih değiştirme tehlike bölgesi nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tehlike bölgesi tipik olarak 21.00 ile 03.00 arasıdır. Güvenli tarih ayarı için: saati 03.00 üzerine ilerletin, tarihi önceki güne ayarlayın, ardından ilerletin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kurma kolunu çektiğimde saniye kolum neden durmuyor?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bazı hareketlerde saniye durdurma mekanizması yoktur. Yaygın durdurmasız kalibreler arasında Miyota 8215 ve Unitas 6497/6498 bulunur. Saat ayarı: hedefi geçip döndürün, ardından yavaşça geri getirin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Tamamen kurmak için kaç tur gerekir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Çoğu otomatik hareket 30-40 tam kurma kolu dönüşü gerektirir. Elle kurulan hareketler değişir. Sert bir direnç hissettiğinizde durun.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Kurma Kolu Referans Kılavuzu',
      'operatingSystem': 'All',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Referans Rehberi Nasıl Kullanılır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Hareket kalibrenizi bulun',
          'text': 'Kasa arkasına (genellikle kazınmıştır) veya sergi tipi kasa arkasından hareketin üzerine bakın. Yaygın numaralar: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kılavuzdan seçin',
          'text': 'Açılır menüden hareketinizi seçin. Kurma kolu görseli ve paneli, tam konumlarınızı, kurma yönünüzü ve özelliklerinizi gösterecek şekilde güncellenir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Her konumdan geçin',
          'text': 'Konum çiplerine (0\u20133) veya "Çek" düğmesine tıklayın. Açıklamayı okuyun ve tarih ayarı için tehlike bölgesi uyarısını not edin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Saatine uygula',
          'text': 'Kılavuz yanınızda açıkken gerçek saatiniz üzerinde pratik yapın. Doğru yönde kurun, tehlike bölgesinden kaçının ve ardından kurma kolunu geri vidalayın.',
        },
      ],
    },
  ],
};
