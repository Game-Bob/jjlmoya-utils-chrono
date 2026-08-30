import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Güneş zamanı ile yıldız zamanı arasındaki fark nedir?',
    answer: 'Güneş zamanı, Güneş\'in yerel meridyene göre konumuna dayanır (24 saat sürer), oysa yıldız zamanı, Dünya\'nın uzak arka plan yıldızlarına göre dönüşüne dayanır (23 saat, 56 dakika, 4,09 saniye sürer).',
  },
  {
    question: 'Bir yıldız günü neden bir güneş gününden daha kısadır?',
    answer: 'Dünya kendi ekseni etrafında dönerken aynı zamanda Güneş etrafındaki yörüngesi boyunca da hareket eder. Güneş\'e tekrar dönmek için Dünya\'nın 360 dereceden biraz fazla dönmesi gerekir, bu da basit bir yıldız hizalamalı dönüşe kıyasla güne yaklaşık 3 dakika 56 saniye ekler.',
  },
  {
    question: 'Boylam yerel yıldız zamanını nasıl etkiler?',
    answer: 'Yerel Yıldız Zamanı, gözlemcinin boylamı (saate dönüştürülen: saatte 15 derece) Greenwich Mean Sidereal Time\'a (GMST) eklenerek hesaplanır. Her doğu derecesi, yerel yıldız saatinize 4 dakika ekler.',
  },
];

const howTo = [
  {
    name: 'Referans boylamınızı ayarlayın',
    text: 'Kaydırıcıyı yerel boylamınıza ayarlayın. Bu, 24 saatlik yıldız ölçeğini yerel meridyeninize hizalar.',
  },
  {
    name: 'Güneş ve yıldız kollarını gözlemleyin',
    text: 'Saat yüzüne bakın: standart güneş kolları iç 12 saatlik kadranda UTC saatini gösterirken, altın kol ve yıldızlar dış 24 saatlik ölçekte yıldız zamanını gösterir.',
  },
  {
    name: 'Göksel hızı artırın',
    text: '200× veya 5000× hız çarpanlarına tıklayarak yıldız arka planının dönüşünü ve sürüklenmenin gerçek zamanlı olarak birikmesini izleyin.',
  },
];

const title = 'Astronomik Yıldız Zamanı Takipçisi: Yerel Yıldız Zamanı Saati';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'yildiz-zamani-takipcisi',
  title,
  description: 'Sanatsal bir astronomik usturlap saat yüzü ve gerçek zamanlı yıldız sürüklenme simülatörü ile Greenwich Mean Sidereal Time (GMST) ve Yerel Yıldız Zamanını (LST) takip edin.',
  ui: {
    title: 'Yıldız Zamanı Takipçisi',
    longitudeLabel: 'Gözlemci Boylamı',
    solarTimeLabel: 'Koordineli Evrensel Zaman (UTC)',
    siderealTimeLabel: 'Yerel Yıldız Zamanı (LST)',
    differenceLabel: 'Yıldız-Güneş Sürüklenmesi',
    utcLabel: 'UTC Tarih/Saat',
    speedLabel: 'Göksel Hız',
    speedNormal: '1× (Gerçek zamanlı)',
    speedFast: '200× (Hızlandırılmış)',
    speedVeryFast: '5000× (Sürüklenme)',
    audioToggleLabel: 'Kozmik Ses Tıklamaları',
    step1: 'Yerel Yıldız Zamanının gerçek zamanlı olarak değişimini görmek için yerel boylamınızı ayarlayın.',
    step2: 'Standart güneş kolunun ve yıldız küresinin sürüklenmesini izlemek için hız çarpanını değiştirin.',
    step3: 'Standart bir tık ile astronomik saat geçişi arasındaki farkı duymak için Kozmik Ses Tıklamalarını etkinleştirin.',
    tipTitle: 'Astronomik Sürüklenme',
    tipContent: 'Dünya Güneş\'in yörüngesinde döndüğü için, standart güneş saatleri yıldız zamanının günde 3 dakika 56 saniye gerisinde kalır ve tam bir yıl boyunca tam 24 saat sürüklenir.',
    useLocationBtn: 'Mevcut Konumu Kullan',
    hemisphereLabel: 'Yıldız Yarımküresi',
    hemisphereNorth: 'Kuzey (Büyük Ayı)',
    hemisphereSouth: 'Güney (Güney Haçı)',
    longitudeFormatLabel: 'Boylam Formatı',
    longitudeFormatDecimal: 'Ondalık Derece',
    longitudeFormatDMS: 'Derece/Dakika',
  },
  seo: [
    { type: 'title', text: 'Yıldız zamanı nedir?', level: 2 },
    { type: 'paragraph', html: 'Yıldız zamanı, gök bilimcilerin gök cisimlerini bulmak için kullandıkları bir zaman ölçüm sistemidir. Bir yıldız günü yaklaşık 23 saat, 56 dakika ve 4,09 saniyedir. Bu, Dünya\'nın Güneş\'e değil, ilkbahar ekinoksuna veya uzak yıldızlara göre kendi ekseni etrafında tam bir dönüş yapması için geçen süredir.' },
    { type: 'title', text: 'Güneş Günü ve Yıldız Günü', level: 3 },
    { type: 'paragraph', html: 'Bir güneş günü, Güneş\'in yerel meridyenden ardışık geçişleri arasındaki süreyi ölçer. Dünya her gün Güneş etrafındaki yörüngesinin yaklaşık 1/365\'ini kat ettiğinden, Güneş ile tekrar hizalanmak için 360 dereceden biraz fazla dönmesi gerekir. Bir yıldız günü, yıldızlara göre gerçek 360 derecelik bir dönüştür ve bu da onu 3 dakika 56 saniye daha kısa yapar.' },
    { type: 'title', text: 'Gök bilimciler ve saatçiler neden önemser?', level: 3 },
    { type: 'paragraph', html: 'Gök bilimciler için bir yıldız, aynı yıldız zamanında gökyüzünde her zaman aynı konumdadır. Yıldızları takip etmek için teleskop montajları yıldız gününde tam olarak bir kez dönmelidir. Üst düzey saat markaları (Patek Philippe, Vacheron Constantin ve IWC gibi), LST\'yi doğrudan bilekte takip etmek için yıldız dişli takımlarına sahip ultra karmaşık astronomik saatler yaratır.' },
    { type: 'title', text: 'Yıldız ve Güneş Sürüklenme Referans Tablosu', level: 3 },
    {
      type: 'table', headers: ['Geçen Günler', 'Yıldız Zamanı Önde', 'Dönüş Kayması (Derece)', 'Takımyıldız Sürüklenmesi'], rows: [
        ['1 Gün', '3d 56s', '0,986°', 'Hafif batı kayması'],
        ['15 Gün', '59d 0s', '14,79°', 'Yarım burç kayması'],
        ['30 Gün', '1s 58d', '29,58°', 'Bir tam burç kayması'],
        ['90 Gün', '5s 54d', '88,74°', 'Bir tam mevsim kayması'],
        ['180 Gün', '11s 48d', '177,48°', 'Gece yarısı görünen zıt takımyıldızlar'],
        ['365 Gün', '24s 0d', '360,00°', 'Tam döngü, yıldız hizalaması sıfırlandı'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'J2000 Döneminden Hesaplanmıştır', icon: 'mdi:creation-outline', badge: 'HESAPLAMA', html: 'Yerel Yıldız Zamanı, UTC zamanını Jülyen Tarihine (-4712\'den bu yana günler) dönüştürerek, Greenwich Mean Sidereal Time\'ı bularak ve boylamınızı (saatte 15 derece) uygulayarak hesaplanır. Aracımız, gerçek zamanlı takip için yüksek hassasiyetli IAU J2000 doğrusal modelini kullanır.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
