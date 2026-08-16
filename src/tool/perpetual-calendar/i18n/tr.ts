import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Saatte ebedi takvim nedir?',
    answer: 'Ebedi takvim, farklı uzunluktaki ayları ve artık yılları otomatik olarak hesaba katarak doğru tarih, gün, ay ve ay evresini gösteren mekanik bir saat komplikasyonudur. 2100 yılına (400\'e bölünemeyen bir sonraki yüzyıl yılı) kadar doğru olacak şekilde programlanmıştır.',
  },
  {
    question: 'Ebedi takvim artık yılları nasıl bilir?',
    answer: 'Mekanik program, 29 Şubat\'ı hesaba katan özel tasarlanmış bir kam ile 48 aylık (4 yıl) bir dişli kullanır. Mekanizma, 100\'e bölünebilen yılların, 400\'e de bölünmedikçe artık yıl olmadığını bilir. Çoğu ebedi takvim, bir günlük düzeltme gerektirecek olan 2100 yılına kadar doğrudur.',
  },
  {
    question: 'Ebedi takvim ile yıllık takvim arasındaki fark nedir?',
    answer: 'Yıllık takvim yılda bir kez manuel düzeltme gerektirir (Şubat sonunda), oysa ebedi takvim artık yılları otomatik olarak işler ve onlarca yıl boyunca doğru şekilde devam eder. Ebedi takvimler mekanik olarak önemli ölçüde daha karmaşıktır.',
  },
];

const howTo = [
  {
    name: 'Tarihi ilerletin',
    text: 'Takvimi ilerletmek için G (gün), A (ay) ve Y (yıl) düğmelerini kullanın. Tarih kolunun hareketini ve ay penceresinin değişimini izleyin.',
  },
  {
    name: 'Artık yıl geçişlerini gözlemleyin',
    text: '29\'dan 1 Mart\'a atlamayı görmek için bir artık yılın (ör. 2024) Şubat ayını geçin. 28\'den 1 Mart\'a atlamayı görmek için artık olmayan bir yılı deneyin.',
  },
  {
    name: 'Otomatik oynatmayı kullanın',
    text: 'Takvimin otomatik olarak ilerlemesi için play\'e basın. Bu, ay uzunluklarının tam döngüsünü ve ay evresi ilerlemesini ortaya çıkarır.',
  },
];

const title = 'Ebedi Takvim Simülatörü: Etkileşimli Saat Komplikasyonu';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'ebedi-takvim',
  title,
  description: 'Ebedi takvim saat komplikasyonunun mekanik dehasını keşfedin. Animasyonlu bir kadranla tarih, gün, ay, artık yıl döngüsü ve ay evresini görselleştirin.',
  ui: {
    title: 'Ebedi Takvim Simülatörü',
    dateLabel: 'Tarih',
    dayLabel: 'Gün',
    monthLabel: 'Ay',
    yearLabel: 'Yıl',
    leapYearLabel: 'Artık Yıl',
    moonPhaseLabel: 'Ay Evresi',
    weekdayLabel: 'Hafta Günü',
    advanceDay: 'Gün İlerlet',
    advanceMonth: 'Ay İlerlet',
    advanceYear: 'Yıl İlerlet',
    autoPlay: 'Otomatik',
    resetBtn: 'Bugün',
    dayNames: 'Pazar,Pazartesi,Salı,Çarşamba,Perşembe,Cuma,Cumartesi',
    monthNames: 'Ocak,Şubat,Mart,Nisan,Mayıs,Haziran,Temmuz,Ağustos,Eylül,Ekim,Kasım,Aralık',
    tipTitle: 'İpucu',
    tipContent: 'Çoğu ebedi takvim saati, değişken uzunlukta çentiklere sahip 48 aylık bir program çarkı kullanır. Şubat en kısa çentiğe sahiptir (normal yıllarda 28 gün, artık yıllarda 29), 30 ve 31 günlük aylar ise giderek daha uzun çentiklere sahiptir.',
    step1: 'Mekanizmanın ay sonu geçişlerini nasıl yönettiğini görmek için Şubat ayını gün gün geçin.',
    step2: 'Ay evresi göstergesinin 29,5 günlük döngüsü boyunca ilerlemesini izleyin.',
    step3: '4 yıllık döngüyü anlamak için artık yıl ve normal yıl Şubat geçişlerini karşılaştırın.',
  },
  seo: [
    { type: 'title', text: 'Ebedi Takvim Simülatörü: Etkileşimli Komplikasyon', level: 2 },
    { type: 'paragraph', html: '<strong>Ebedi takvim</strong>, haute horlogerie\'nin en prestijli komplikasyonlarından biridir. Bu etkileşimli simülatör, mekanik bir ebedi takvimin tarih, gün, ay, artık yıl ve ay evresini nasıl takip ettiğini görselleştirir - onlarca yıl boyunca manuel düzeltme gerektirmez. 48 aylık dişli programını keşfedin, Şubat geçişlerinin nasıl çalıştığını görün ve bu mikromekanik başyapıtlarına yerleştirilmiş Gregoryen takvim mantığını anlayın.' },
    { type: 'title', text: 'Ebedi takvim nasıl çalışır', level: 3 },
    { type: 'paragraph', html: 'Mekanik bir ebedi takvim, farklı uzunluktaki ayları temsil eden farklı derinliklerde çentiklere sahip bir <strong>program çarkı</strong> kullanır. Bir algılama kolu her çentiğe düşer; daha derin bir çentik kısa bir ayı (28-29 gün) işaret eder ve doğru gün sayısından sonra mekanizmayı bir sonraki ayın 1\'ine atlaması için tetikler. Bir <strong>48 aylık dişli</strong>, 29 Şubat için ek bir çentik ile 4 yıllık artık yıl döngüsünü yönetir. Program, yüzyıl yıllarının (ör. 2100) 400\'e bölünmedikçe artık yılı atladığını bilir.' },
        { type: 'title', text: 'Takvim Mantığı Referansı', level: 3 },
    {"type":"table","headers":["Ay","Gün Sayısı","Çentik Derinliği","Artık Yıl Eylemi"],"rows":[["Ocak","31","Derin","Normal"],["Şubat","28 / 29","En Sığ","Her 4 yılda bir ekstra gün"],["Mart","31","Derin","Normal"],["Nisan","30","Orta","Normal"],["Mayıs","31","Derin","Normal"],["Haziran","30","Orta","Normal"],["Temmuz","31","Derin","Normal"],["Ağustos","31","Derin","Normal"],["Eylül","30","Orta","Normal"],["Ekim","31","Derin","Normal"],["Kasım","30","Orta","Normal"],["Aralık","31","Derin","Normal"]]},
{ type: 'title', text: 'Karşılaştırma: Ebedi vs Yıllık Takvim', level: 3 },
    {
      type: 'table', headers: ['Özellik', 'Yıllık Takvim', 'Ebedi Takvim'], rows: [
        ['Düzeltme gerektirir', 'Yılda bir kez (1 Mart)', 'Yüzyılda bir kez (2100)'],
        ['Artık yıl yönetimi', 'Manuel', 'Otomatik (4 yıllık kam)'],
        ['Ay tanıma', '30 vs 31 gün', 'Tam 28/29/30/31'],
        ['Karmaşıklık', 'Orta (~50 parça)', 'Çok yüksek (~200+ parça)'],
        ['Fiyat aralığı', '€3.000-15.000', '€20.000-500.000+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Etkileşimli Takvim Simülatörü', icon: 'mdi:calendar-month', badge: 'SAATÇİLİK', html: 'Bu araç, ebedi takvimli bir saatin takvim mekanizmasını simüle eder. Animasyonlu kadran, tarih kolunu, ay penceresini, gün alt kadranını, ay evresini ve artık yıl göstergesini gösterir. Günler, aylar veya yıllar boyunca ilerlemek için kontrolleri kullanın ve mekanik mantığı izleyin.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
