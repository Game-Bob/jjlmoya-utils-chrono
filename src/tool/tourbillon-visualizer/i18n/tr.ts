import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Tourbillon nedir?',
    answer: 'Tourbillon, mekanik bir saatin eşapmanını (balans çarkı, palet çatalı ve eşapman çarkı) içeren dönen bir kafestir. Yerçekiminin neden olduğu konumsal hataları ortalamak ve doğruluğu artırmak için sürekli olarak - tipik olarak dakikada bir kez - döner.',
  },
  {
    question: 'Klasik ve uçan tourbillon arasındaki fark nedir?',
    answer: 'Klasik bir tourbillon hem üst hem de alt köprü tarafından desteklenirken, uçan bir tourbillon görünür üst destek olmadan alttan konsol şeklindedir. Uçan tourbillonlar, dönen eşapmanın engelsiz bir görünümünü sunar ve yapımı estetik olarak daha zorlu kabul edilir.',
  },
  {
    question: 'Tourbillon gerçekten doğruluğu artırır mı?',
    answer: 'Modern kol saatlerinde, konumsal hatalar zaten iyi bir şekilde telafi edildiğinden doğruluk avantajı minimaldir. Ancak, Breguet\'in 1801\'de tourbillonu icat ettiği cep saatlerinde, sürekli dönüş dikey konumlar arasındaki hız farklarını ortadan kaldırdı. Günümüzde tourbillonlar esas olarak yüksek saatçilik sanatının bir göstergesidir.',
  },
];

const howTo = [
  {
    name: 'Tourbillon tipini değiştir',
    text: 'Yapısal farkı görmek için Klasik ve Uçan tourbillon arasında geçiş yapın. Uçan tourbillonun üst köprüsü yoktur, tam kafesi ortaya çıkarır.',
  },
  {
    name: 'Vuruş hızını ayarla',
    text: 'Balans çarkı hızının ve eşapman çarkı dönüşünün nasıl değiştiğini görmek için farklı vuruş hızlarını (18k, 28.8k, 36k VPH) deneyin.',
  },
  {
    name: 'Hızı kontrol et',
    text: 'Eşapmanın karmaşık dansını gözlemlemek için yavaşlatın veya tam kafes dönüş döngüsünü görmek için hızlandırın.',
  },
];

const title = 'Tourbillon: Dönen Eşapmanın Sanatı';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-goruntuleyici',
  title,
  description: 'Tourbillonun büyüleyici sanatını deneyimleyin - eşapmanı barındıran dönen bir kafes. Balans çarkının salınımını, yayın nefes alışını ve kafesin zarif bir mekanik balede dönüşünü izleyin.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Tip',
    typeClassic: 'Klasik',
    typeFlying: 'Uçan',
    speedLabel: 'Hız',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Duraklatıldı',
    beatRateLabel: 'Vuruş Hızı',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Kafes',
    showLabelsLabel: 'Etiketler',
    step1: 'Mimarilerini karşılaştırmak için Klasik ve Uçan tourbillon arasında geçiş yapın.',
    step2: 'Eşapman ritmini nasıl etkilediğini görmek için vuruş hızını ayarlayın.',
    step3: 'Herhangi bir hızda hassas mekanik dansı gözlemlemek için hız kontrollerini kullanın.',
    tipTitle: 'İpucu',
    tipContent: 'Breguet, tourbillonu 1801\'de icat etti. "Tourbillon" kelimesi Fransızcada "kasırga" anlamına gelir ve dönen kafesin hareket halindeki görünümünü tanımlar.',
    balanceLabel: 'Balans',
    escapeLabel: 'Eşapman',
    palletLabel: 'Palet',
    cageLabel: 'Kafes',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Animasyonlu Eşapman Sanatı', level: 2 },
    { type: 'paragraph', html: '<strong>Tourbillon</strong>, haute horlogerie\'nin en büyüleyici komplikasyonlarından biridir. Bu etkileşimli görselleştirici, balans çarkı, yay, palet çatalı, eşapman çarkı ve ikonik dönen kafesin ayrıntılı animasyonlu bir sunumuyla dönen eşapmanı hayata geçiriyor. Breguet\'in başyapıtının mekanik şiirini keşfedin.' },
    { type: 'title', text: 'Tourbillon nasıl çalışır', level: 3 },
    { type: 'paragraph', html: 'Bir tourbillon, tüm eşapmanı - <strong>balans çarkı, yay, palet çatalı ve eşapman çarkı</strong> - dönen bir kafesin içinde barındırır. Kafes tipik olarak dakikada bir dönüş yapar ve eşapmanın yerçekimine göre konumunu sürekli değiştirir. Bu, Abraham-Louis Breguet\'in 1801\'de patentlediğinde devrim niteliğinde olan bir kavram olan konumsal zamanlama hatalarını ortalar. <strong>Balans çarkı</strong> saatin vuruş hızında (tipik olarak 4 Hz / 28.800 vph) salınırken, <strong>eşapman çarkı</strong> her vuruşta bir diş ilerleyerek karakteristik tik hareketini yaratır.' },
    { type: 'title', text: 'Klasik vs Uçan Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Özellik', 'Klasik Tourbillon', 'Uçan Tourbillon'], rows: [
        ['Üst destek', 'Görünür köprü', 'Yok (konsol)'],
        ['Görünürlük', 'Kısmi (köprü görünür)', 'Tam (engelsiz)'],
        ['Zorluk', 'Yüksek', 'Son derece yüksek'],
        ['İcat', '1801 (Breguet)', '1920\'ler (Alfred Helwig)'],
        ['Yaygın', 'Geleneksel markalar', 'Modern bağımsızlar'],
      ]
    },
    { type: 'title', text: 'Vuruş Hızı Karşılaştırması', level: 3 },
    {
      type: 'table', headers: ['Hız (vph)', 'Frekans', 'Eşapman Çarkı dev/dk', 'Vuruş/s', 'Tipik Kullanım'], rows: [
        ['18.000', '2,5 Hz', '20 dev/dk', '5', 'Vintage cep saatleri'],
        ['28.800', '4 Hz', '32 dev/dk', '8', 'Modern standart (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 dev/dk', '10', 'Yüksek frekans (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Hareket Halinde Mekanik Sanat', icon: 'mdi:rotate-orbit', badge: 'SAATÇILIK', html: 'Bu görselleştirici, bir tourbillon eşapmanının sanatsal bir yorumudur. Kafes dönüşü, balans salınımı, yay nefesi, palet sallanışı ve eşapman çarkı adımı gerçek mekanik ilişkilere göre senkronize edilmiştir. Bu mikromekanik mühendislik başyapıtını keşfetmek için kontrolleri kullanın.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
