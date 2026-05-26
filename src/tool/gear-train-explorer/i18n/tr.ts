import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Saatteki dişli takımı nedir?',
    answer: 'Dişli takımı, ana yay kutusundan eşapmana güç aktaran bir dizi birbirine geçen dişlidir. Her dişli çifti, ana yay enerjisinin hızlı salınımını kontrollü, zamanlanmış darbelere dönüştüren belirli bir redüksiyon oranı sağlar.',
  },
  {
    question: 'Farklı hareketler neden farklı dişli oranlarına sahiptir?',
    answer: 'Dişli oranları, her tekerlek ve pinyondaki diş sayısına göre belirlenir. Farklı vuruş hızlarına (ör. 28.800 vph vs 36.000 vph) sahip hareketler, balans tekerleği frekansına uyum sağlarken doğru zaman tutmayı sürdürmek için farklı eşapman tekerleği hızlarına ve dişli konfigürasyonlarına sahiptir.',
  },
  {
    question: 'Tekerlek ve pinyon arasındaki fark nedir?',
    answer: 'Saatçilikte "tekerlek", bir sonraki bileşeni tahrik eden, çok sayıda dişe sahip daha büyük dişlidir. Bir "pinyon" ise tahrik edilen daha küçük dişlidir (genellikle 6-12 diş). Birlikte, bir tekerlek ve pinyon, dönüş hızını ve torku değiştiren bir dişli çifti oluşturur.',
  },
];

const howTo = [
  {
    name: 'Bir hareket seçin',
    text: 'Standart (28.800 vph), yüksek frekanslı (36.000 vph El Primero) veya vintage (18.000 vph) hareketler arasından seçim yapın. Her birinin benzersiz dişli oranları ve vuruş hızları vardır.',
  },
  {
    name: 'Dişli takımını gözlemleyin',
    text: 'Animasyonlu dişlilerin orantılı hızlarda döndüğünü izleyin. Ana yay kutusu yavaşça dönerken eşapman tekerleği hızla döner. Ayrıntılı bilgi için herhangi bir dişli veya veri kartının üzerine gelin.',
  },
  {
    name: 'Hızı ayarlayın',
    text: 'Animasyonu yavaşlatmak, hızlandırmak veya duraklatmak için hız kontrollerini kullanın. Bu, her dişlinin güç aktarım zincirine nasıl katkıda bulunduğunu görselleştirmeye yardımcı olur.',
  },
];

const title = 'Dişli Takımı Kaşifi: Etkileşimli Saatçilik Diyagramı';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'disli-treni-kesfi',
  title,
  description: 'Animasyonlu bir dişli takımı görselleştirmesiyle bir saatin mekanik kalbini keşfedin. Ana yay kutusu, merkez tekerlek, üçüncü tekerlek, dördüncü tekerlek, eşapman tekerleği, palet çatalı ve balans tekerleğini hareket halinde görün.',
  ui: {
    title: 'Dişli Takımı Kaşifi',
    barrelLabel: 'Ana Yay Kutusu',
    centerWheelLabel: 'Merkez Tekerlek',
    thirdWheelLabel: 'Üçüncü Tekerlek',
    fourthWheelLabel: 'Dördüncü Tekerlek',
    escapeWheelLabel: 'Eşapman Tekerleği',
    palletForkLabel: 'Palet Çatalı',
    balanceWheelLabel: 'Balans Tekerleği',
    rpmLabel: 'dev/dk',
    teethLabel: 'diş',
    gearRatioLabel: 'Oran',
    powerFlowLabel: 'Güç Akışı',
    movementLabel: 'Hareket',
    speedLabel: 'Hız',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Duraklatıldı',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Benzersiz dişli oranlarını ve vuruş hızını görmek için bir hareket kalibresi seçin.',
    step2: 'Güç akışındaki konumunu vurgulamak için herhangi bir dişli veya veri kartının üzerine gelin.',
    step3: 'Her tekerleğin gücü takım boyunca nasıl ilettiğini incelemek için animasyon hızını ayarlayın.',
    tipTitle: 'İpucu',
    tipContent: 'Dişli takımı, ana yayın hızlı enerji salınımını kontrollü bir salınıma dönüştürür. Tipik bir ana yay kutusu her 7-8 saatte bir dönerken, eşapman tekerleği 32 dev/dk (28.800 vph\'de) döner — bu 15.000:1\'den fazla bir redüksiyondur.',
  },
  seo: [
    { type: 'title', text: 'Etkileşimli Dişli Takımı Kaşifi', level: 2 },
    { type: 'paragraph', html: '<strong>Dişli takımı</strong>, her mekanik saatin mekanik omurgasıdır. Bu etkileşimli araç, gücün ana yay kutusundan merkez tekerlek, üçüncü tekerlek, dördüncü tekerlek ve eşapman tekerleği aracılığıyla palet çatalına ve balans tekerleğine nasıl aktığını görselleştirir. Her dişlinin orantılı hızında döndüğünü görün ve dişli oranlarının zaman ölçümünü nasıl belirlediğini anlayın.' },
    { type: 'title', text: 'Bir Saat Dişli Takımı Nasıl Çalışır', level: 3 },
    { type: 'paragraph', html: 'Bir saat dişli takımı, hızı azaltırken güç ileten bir dizi <strong>tekerlek</strong> (büyük dişliler) ve <strong>pinyondan</strong> (küçük dişliler) oluşur. <strong>Ana yay kutusu</strong>, ana yayı barındırır ve yavaşça dönerek saatte bir kez dönen (yelkovan için) <strong>merkez tekerleği</strong> tahrik eder. <strong>Üçüncü tekerlek</strong> ve <strong>dördüncü tekerlek</strong> (saniye tekerleği) dönüş hızını daha da artırır. Son olarak, <strong>eşapman tekerleği</strong>, kontrollü tiklere gücü <strong>palet çatalına</strong> bırakır; palet çatalı dönüşümlü olarak eşapman tekerleğini kilitler ve açar, <strong>balans tekerleğine</strong> darbeler gönderir. Balans tekerleği, hassas bir frekansta — tipik olarak 4 Hz (saatte 28.800 titreşim) — salınarak saatin hızını düzenler.' },
    { type: 'title', text: 'Dişli Oranları ve Güç Aktarımı', level: 3 },
    {
      type: 'table', headers: ['Bileşen', 'Tipik Diş', 'dev/dk (28.800 vph)', 'Öncekinden Oran'], rows: [
        ['Ana Yay Kutusu', '72', '0,002 (1 dev / 8 s)', '-'],
        ['Merkez Tekerlek', '60', '0,0167 (1 dev / s)', '~7,2:1'],
        ['Üçüncü Tekerlek', '50', '0,125 (1 dev / 8 dk)', '~5:1'],
        ['Dördüncü Tekerlek', '60', '1 (1 dev / dk)', '6:1'],
        ['Eşapman Tekerleği', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Hareket Karşılaştırmaları', level: 3 },
    {
      type: 'table', headers: ['Hareket', 'Vuruş Hızı', 'Balans Frekansı', 'Eşapman Tekerleği dev/dk', 'Tipik Doğruluk'], rows: [
        ['Vintage (18.000 vph)', '18.000 bph', '2,5 Hz', '20 dev/dk', '±15-30 s/g'],
        ['Standart (28.800 vph)', '28.800 bph', '4 Hz', '32 dev/dk', '±5-15 s/g'],
        ['Yüksek Frekans (36.000 vph)', '36.000 bph', '5 Hz', '40 dev/dk', '±3-8 s/g'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Etkileşimli Öğrenme Aracı', icon: 'mdi:cog-clockwise', badge: 'SAATÇİLİK', html: 'Bu araç, yaygın İsviçre palet eşapman hareketlerini temsil eden yaklaşık dişli oranları kullanır. Gerçek oranlar kaliploye göre değişir. Farklı vuruş hızlarının dişli takımı dinamiğini nasıl etkilediğini karşılaştırmak için hareket ön ayarlarını kullanın.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
