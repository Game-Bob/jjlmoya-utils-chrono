import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Mekanik saatler yüksek irtifada neden daha hızlı çalışır?',
    answer: 'Mekanik saatler yüksek irtifada, temel olarak azalan hava yoğunluğu nedeniyle daha hızlı çalışır. Daha ince hava, balans çarkı üzerinde daha az aerodinamik sürükleme oluşturur ve biraz daha büyük genlikte salınım yapmasını sağlar. Bu artan genlik, saatin ileri gitmesine neden olur - hareket tasarımına bağlı olarak her 1.000 m yükseklik kazancı için tipik olarak günde 2-6 saniye.',
  },
  {
    question: 'Yükseklik kuvars saatleri de etkiler mi?',
    answer: 'Kuvars saatler, salınım yapan mekanik bir balans çarkı olmadığı için yükseklikten minimum düzeyde etkilenir. Ancak aşırı yükseklik değişiklikleri, sıcaklık değişimleri nedeniyle pil performansını etkileyebilir. Etki, mekanik saatlere kıyasla ihmal edilebilir düzeydedir.',
  },
  {
    question: 'Yükseklik değişiklikleri saatime zarar verebilir mi?',
    answer: 'Yükseklik değişiklikleri tek başına mekanik saatlere nadiren zarar verir. Ancak hızlı dekompresyon (uçakta olduğu gibi) bazı saatlerde su geçirmezlik sorunlarına neden olabilir. Seyahat sırasındaki normal yükseklik değişimleri, herhangi bir saatin tasarım toleransı dahilindedir.',
  },
];

const howTo = [
  {
    name: 'Bir irtifa seçin',
    text: 'Deniz seviyesinden 8.000 m\'ye kadar farklı yükseklikleri simüle etmek için irtifa kaydırıcısını yukarı veya aşağı sürükleyin. Balans çarkı salınımının ve atmosferik verilerin gerçek zamanlı olarak nasıl değiştiğini izleyin.',
  },
  {
    name: 'Sapmayı okuyun',
    text: 'Hız sapması göstergesi, seçilen irtifada günde kazanılan tahmini saniyeleri gösterir. Alttaki sapma grafiği, tüm irtifalardaki eğilimi gösterir.',
  },
  {
    name: 'Faktörleri değerlendirin',
    text: 'Hız sapması artarken hava yoğunluğunun irtifayla nasıl azaldığını gözlemleyin. Sıcaklık ve basınç verileri, çevresel değişiklikler için bağlam sağlar.',
  },
];

const title = 'İrtifa Doğruluk Tahmincisi: Yüksekliğin Mekanik Saatinizi Nasıl Etkilediği';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'irtifa-dogruluk',
  title,
  description: 'Yüksekliğin mekanik saat doğruluğunu nasıl etkilediğini keşfedin. Deniz seviyesinden dağ zirvesine kadar yüksekliği ayarlayın ve balans çarkı salınımı, hız sapması, hava yoğunluğu, basınç ve sıcaklıktaki gerçek zamanlı değişiklikleri görün.',
  ui: {
    title: 'İrtifa Doğruluk Tahmincisi',
    altitudeLabel: 'İrtifa',
    altitudeUnit: 'm',
    seaLevel: 'Deniz Seviyesi',
    deviationLabel: 'Hız Sapması',
    deviationUnit: 's/g',
    pressureLabel: 'Basınç',
    pressureUnit: 'hPa',
    densityLabel: 'Hava Yoğunluğu',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Sıcaklık',
    temperatureUnit: '°C',
    oscillationLabel: 'Balans Çarkı',
    oscillationsPerSec: 'sal/s',
    rateLabel: 'Hız',
    atmDataTitle: 'Atmosferik Koşullar',
    howItWorks: 'Nasıl Çalışır',
    howItWorksDesc: 'Yüksek irtifada daha düşük hava yoğunluğu, balans çarkındaki sürtünmeyi azaltır, genliği artırır ve saatin daha hızlı çalışmasına neden olur. Bu araç, standart atmosfer modellerine dayalı olarak hız sapmasını tahmin eder.',
    negligible: 'İhmal Edilebilir',
    minor: 'Küçük',
    noticeable: 'Fark Edilir',
    significant: 'Önemli',
    severe: 'Şiddetli',
    step1: 'Deniz seviyesinden 8.000 m\'ye kadar yükseklikleri simüle etmek için kaydırıcıyı sürükleyin.',
    step2: 'Balans çarkı animasyonunun ve sapma göstergesinin gerçek zamanlı tepki verdiğini izleyin.',
    step3: 'Çevresel faktörleri anlamak için atmosferik verileri inceleyin.',
    tipTitle: 'İpucu',
    tipContent: 'Etki, harekete göre değişir: yüksek vuruşlu hareketler (36.000 vph), düşük vuruşlu vintage hareketlerden (18.000 vph) genellikle daha az etkilenir.',
    deviationChart: 'Sapma vs İrtifa',
    altitudeM: 'İrtifa (m)',
    secondsPerDay: 's/g',
    particleLabel: 'Hava Molekülleri',
    airDensity: 'Hava Yoğunluğu',
  },
  seo: [
    { type: 'title', text: 'Mekanik Saatler için İnteraktif İrtifa Doğruluk Tahmincisi', level: 2 },
    { type: 'paragraph', html: '<strong>İrtifa Doğruluk Tahmincisi</strong>, yükseklik değişikliklerinin mekanik saat hassasiyetini nasıl etkilediğini görselleştiren interaktif bir araçtır. Deniz seviyesinden 8.000 m\'ye kadar irtifaları simüle ederek, değişen hava yoğunluğu, basınç ve sıcaklıktan kaynaklanan tahmini hız sapmasını görebilirsiniz.' },
    { type: 'title', text: 'Yüksekliğin Saat Doğruluğunu Nasıl Etkilediği', level: 3 },
    { type: 'paragraph', html: 'Daha yüksek irtifalarda, <strong>hava yoğunluğu azalır</strong>, bu da balans çarkı üzerindeki aerodinamik sürtünmeyi azaltır. Bu, balans çarkının daha büyük genlikte salınım yapmasını sağlayarak saatin biraz daha hızlı çalışmasına neden olur. Etki, her 1.000 m yükseklik kazancı için tipik olarak <strong>+2 ila +6 saniye/gün</strong> aralığındadır.' },
    { type: 'title', text: 'Farklı İrtifalarda Hız Sapması', level: 3 },
    {
      type: 'table', headers: ['İrtifa', 'Hava Yoğunluğu', 'Basınç', 'Sıcaklık', 'Tah. Sapma'], rows: [
        ['Deniz Seviyesi (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Temel'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/g'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/g'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/g'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/g'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/g'],
      ]
    },
    { type: 'title', text: 'Çevresel Faktörler', level: 3 },
    { type: 'paragraph', html: 'Hava yoğunluğunun yanı sıra, yüksek irtifadaki diğer çevresel faktörler de saat performansını etkileyebilir: <strong>sıcaklık</strong> yağ viskozitesini ve ana yay esnekliğini etkiler, <strong>basınç değişiklikleri</strong> kasa sızdırmazlığını etkileyebilir. Ancak, hava yoğunluğunun balans çarkı sürtünmesi üzerindeki etkisi, irtifayla ilgili hız değişikliklerinde baskın faktördür.' },
    { type: 'diagnostic', variant: 'info', title: 'İnteraktif Simülasyon Aracı', icon: 'mdi:axis-arrow', badge: 'SAATÇİLİK', html: 'Bu araç, ISA modeline ve ampirik gözlemlere dayalı tahmini değerler sağlar. Gerçek sonuçlar, hareket kalibresine, duruma ve üretim toleranslarına göre değişir.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
