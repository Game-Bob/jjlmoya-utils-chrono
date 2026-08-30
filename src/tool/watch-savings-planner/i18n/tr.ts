import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'saat-tasarruf-plani',
  title: 'Saat Birikim Planlayıcısı',
  description: 'Bir sonraki saat alışverişiniz için birikim hedefleri belirleyin ve takip edin. İlerlemeyi görselleştirin, zaman çizelgelerini hesaplayın ve motive kalın.',
  ui: {
    title: 'Birikim Hedefi Ayarları',
    addGoalTitle: 'Yeni Birikim Hedefi',
    goalNameLabel: 'Saat',
    goalNamePlaceholder: 'örn. Rolex Submariner',
    targetPriceLabel: 'Hedef Fiyat',
    currentSavingsLabel: 'Biriktirilen',
    monthlyLabel: 'Aylık',
    addButton: 'Hedef Ekle',
    cancelButton: 'İptal',
    goalsEmpty: 'Henüz birikim hedefi yok',
    goalsEmptySub: 'İlk saat hedefini belirle ve biriktirmeye başla!',
    monthsToGoal: 'Hedefe kalan süre',
    yearsToGoal: 'Hedefe kalan yıl',
    month: 'ay',
    months: 'ay',
    year: 'yl',
    totalSaved: 'Toplam Biriktirilen',
    totalGoals: 'Hedef',
    achieved: 'Ulaşıldı',
    percentLabel: 'Biriktirilen',
    deleteGoal: 'Sil',
    editGoal: 'Düzenle',
    saveGoal: 'Kaydet',
    currency: 'TRY',
    summaryTitle: 'Özet',
    goalAchieved: 'Ulaşıldı!',
    goalProgress: 'İlerleme',
    congratsTitle: 'Tebrikler!',
    congratsDesc: 'Birikim hedefine ulaştın!',
    monthlyContribution: 'Aylık',
    targetDate: 'Hedef Tarih',
    adjustMonthly: 'Aylığı ayarla',
  },
  seo: [
    { type: 'title', text: 'Saat Birikim Planlayıcısı - Bir Sonraki Saat Alışverişini Takip Et', level: 2 },
    { type: 'paragraph', html: 'Bir saat için birikim yapmak bir yolculuktur. İster bir <strong>vintage Speedmaster</strong>, ister bir <strong>Submariner</strong> veya bir <strong>Grand Seiko</strong> olsun, net bir birikim planı hayali bir zaman çizelgesine dönüştürür. Bu araç, ilerlemenizi görselleştirmenize, aylık katkılarınızı ayarlamanıza ve butikten hayalinizdeki saatle tam olarak ne zaman çıkacağınızı görmenize yardımcı olur.' },
    { type: 'title', text: 'Saat Koleksiyonerleri İçin Birikim Planı Neden Önemlidir', level: 3 },
    { type: 'paragraph', html: 'Saat koleksiyonculuğu sabır gerektiren bir iştir. Gözde modellerin fiyatları istikrarlı bir şekilde yükselir ve ani alışverişler genellikle pişmanlıkla sonuçlanır. Yapılandırılmış bir birikim yaklaşımı sizi disiplinli tutar, maddi zorlanmayı önler ve nihai satın almayı hak edilmiş hissettirir. Üstelik, ilerlemenizi her gün takip etmek heyecanı artırır ve kutuyu açma anını daha da tatlı kılar.' },
    { type: 'title', text: 'Gerçekçi Saat Birikim Hedefleri Nasıl Belirlenir', level: 3 },
    { type: 'paragraph', html: 'Vergiler ve kargo dahil toplam fiyatla başlayın. Ardından her ay rahatça ayırabileceğiniz miktara bölün. İyi bir kural, <strong>harcanabilir gelirinizin %10-15\'inden</strong> fazlasını saat birikimine ayırmamaktır. Zaman çizelgesi çok uzun görünüyorsa, daha küçük aşamalara bölmeyi veya aynı stil ailesinde daha uygun fiyatlı alternatifleri keşfetmeyi düşünün.' },
    { type: 'title', text: 'Hedef Takibinin Psikolojisi', level: 3 },
    { type: 'paragraph', html: 'Görsel ilerleme takibi, koleksiyonculuğu bu kadar ödüllendirici yapan aynı nörotransmitter olan dopamin salınımını tetikler. Her yeni katkıyı kaydettiğinizde ve ilerleme halkasının dolduğunu gördüğünüzde, alışkanlığı pekiştirirsiniz. Bu nedenle, küçük ve düzenli birikimler genellikle seyrek büyük yatırımlardan daha iyi çalışır - ritüelin kendisi koleksiyonculuk deneyiminin bir parçası haline gelir.' },
  ],
  faq: [
    {
      question: 'Bir saat için her ay ne kadar biriktirmeliyim?',
      answer: 'Harcanabilir aylık gelirinizin %10-15\'ini hedefleyin. Anahtar tutarlılıktır - ayda 100 $ bile yılda 1.200 $ eder. Zaman çizelgenize göre miktarı ayarlayın: daha kısa hedefler daha yüksek aylık katkılar gerektirir.',
    },
    {
      question: 'Bir seferde tek bir saat için mi yoksa birden fazla için mi biriktirmeliyim?',
      answer: 'Tek seferde bir tane genellikle daha etkilidir. Odaklanma ivme kazandırır. İlk hedefinize ulaştığınızda, güven ve disiplin bir sonrakine aktarılır. Bununla birlikte, bu planlayıcı birden fazla hedefi destekleyerek zaman çizelgelerini karşılaştırmanıza olanak tanır.',
    },
    {
      question: 'Biriktirirken saat fiyatı yükselirse ne olur?',
      answer: 'Güzel soru. Birkaç ayda bir güncel piyasa fiyatını kontrol edin ve hedefinizi güncelleyin. Fiyatlar hızla yükseliyorsa, aylık miktarınızı artırmayı veya zaman çizelgesini kısaltarak mevcut fiyatı sabitlemeyi düşünün.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Hedefini Belirle',
      text: 'Saatin adını ve vergiler ile kargo dahil toplam fiyatını girin.',
    },
    {
      name: 'Birikimini Takip Et',
      text: 'Ne kadar biriktirdiğini ve her ay ne kadar ayırabileceğini kaydet.',
    },
    {
      name: 'İlerlemeyi İzle',
      text: 'Birikimlerini güncellerken ilerleme halkasının dolduğunu izle. Aylık miktarları istediğin zaman ayarla.',
    },
    {
      name: 'Kutla',
      text: 'Halka %100\'e ulaştığında hedefine ulaşmışsın demektir. O saati alma zamanı!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bir saat için her ay ne kadar biriktirmeliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Harcanabilir aylık gelirinizin %10-15\'ini hedefleyin. Anahtar tutarlılıktır - ayda 100 $ bile yılda 1.200 $ eder.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir seferde tek bir saat için mi yoksa birden fazla için mi biriktirmeliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tek seferde bir tane genellikle daha etkilidir. Odaklanma ivme kazandırır. İlk hedefinize ulaştığınızda, bu disiplini bir sonrakine taşıyın.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Biriktirirken saat fiyatı yükselirse ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Birkaç ayda bir güncel piyasa fiyatını kontrol edin ve hedefinizi güncelleyin. Fiyatlar hızla yükseliyorsa aylık miktarınızı artırmayı düşünün.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Birikim Planlayıcısı',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat alımı için nasıl birikim yapılır',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Hedefini Belirle',
          'text': 'Saatin adını ve vergiler ile kargo dahil toplam fiyatını girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Birikimini Takip Et',
          'text': 'Ne kadar biriktirdiğini ve her ay ne kadar ayırabileceğini kaydet.',
        },
        {
          '@type': 'HowToStep',
          'name': 'İlerlemeyi İzle',
          'text': 'Birikimlerini güncellerken ilerleme halkasının dolduğunu izle.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kutla',
          'text': 'Halka %100\'e ulaştığında hedefine ulaşmışsın demektir. O saati alma zamanı!',
        },
      ],
    },
  ],
};
