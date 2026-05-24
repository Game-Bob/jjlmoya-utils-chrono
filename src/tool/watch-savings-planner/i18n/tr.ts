import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'saat-tasarruf-plani',
  title: 'Saat Birikim Planlay\u0131c\u0131s\u0131',
  description: 'Bir sonraki saat al\u0131\u015fveri\u015finiz i\u00e7in birikim hedefleri belirleyin ve takip edin. \u0130lerlemeyi g\u00f6rselle\u015ftirin, zaman \u00e7izelgelerini hesaplay\u0131n ve motive kal\u0131n.',
  ui: {
    title: 'Birikim Hedefi Ayarlar\u0131',
    addGoalTitle: 'Yeni Birikim Hedefi',
    goalNameLabel: 'Saat',
    goalNamePlaceholder: '\u00f6rn. Rolex Submariner',
    targetPriceLabel: 'Hedef Fiyat',
    currentSavingsLabel: 'Biriktirilen',
    monthlyLabel: 'Ayl\u0131k',
    addButton: 'Hedef Ekle',
    cancelButton: '\u0130ptal',
    goalsEmpty: 'Hen\u00fcz birikim hedefi yok',
    goalsEmptySub: '\u0130lk saat hedefini belirle ve biriktirmeye ba\u015fla!',
    monthsToGoal: 'Hedefe kalan s\u00fcre',
    yearsToGoal: 'Hedefe kalan y\u0131l',
    month: 'ay',
    months: 'ay',
    year: 'yl',
    totalSaved: 'Toplam Biriktirilen',
    totalGoals: 'Hedef',
    achieved: 'Ula\u015f\u0131ld\u0131',
    percentLabel: 'Biriktirilen',
    deleteGoal: 'Sil',
    editGoal: 'D\u00fczenle',
    saveGoal: 'Kaydet',
    currency: 'TRY',
    summaryTitle: '\u00d6zet',
    goalAchieved: 'Ula\u015f\u0131ld\u0131!',
    goalProgress: '\u0130lerleme',
    congratsTitle: 'Tebrikler!',
    congratsDesc: 'Birikim hedefine ula\u015ft\u0131n!',
    monthlyContribution: 'Ayl\u0131k',
    targetDate: 'Hedef Tarih',
    adjustMonthly: 'Ayl\u0131\u011f\u0131 ayarla',
  },
  seo: [
    { type: 'title', text: 'Saat Birikim Planlay\u0131c\u0131s\u0131 \u2014 Bir Sonraki Saat Al\u0131\u015fveri\u015fini Takip Et', level: 2 },
    { type: 'paragraph', html: 'Bir saat i\u00e7in birikim yapmak bir yolculuktur. \u0130ster bir <strong>vintage Speedmaster</strong>, ister bir <strong>Submariner</strong> veya bir <strong>Grand Seiko</strong> olsun, net bir birikim plan\u0131 hayali bir zaman \u00e7izelgesine d\u00f6n\u00fc\u015ft\u00fcr\u00fcr. Bu ara\u00e7, ilerlemenizi g\u00f6rselle\u015ftirmenize, ayl\u0131k katk\u0131lar\u0131n\u0131z\u0131 ayarlaman\u0131za ve butikten hayalinizdeki saatle tam olarak ne zaman \u00e7\u0131kaca\u011f\u0131n\u0131z\u0131 g\u00f6rmenize yard\u0131mc\u0131 olur.' },
    { type: 'title', text: 'Saat Koleksiyonerleri \u0130\u00e7in Birikim Plan\u0131 Neden \u00d6nemlidir', level: 3 },
    { type: 'paragraph', html: 'Saat koleksiyonculu\u011fu sab\u0131r gerektiren bir i\u015ftir. G\u00f6zde modellerin fiyatlar\u0131 istikrarl\u0131 bir \u015fekilde y\u00fckselir ve ani al\u0131\u015fveri\u015fler genellikle pi\u015fmanl\u0131kla sonu\u00e7lan\u0131r. Yap\u0131land\u0131r\u0131lm\u0131\u015f bir birikim yakla\u015f\u0131m\u0131 sizi disiplinli tutar, maddi zorlanmay\u0131 \u00f6nler ve nihai sat\u0131n almay\u0131 hak edilmi\u015f hissettirir. \u00dcstelik, ilerlemenizi her g\u00fcn takip etmek heyecan\u0131 art\u0131r\u0131r ve kutuyu a\u00e7ma an\u0131n\u0131 daha da tatl\u0131 k\u0131lar.' },
    { type: 'title', text: 'Ger\u00e7ek\u00e7i Saat Birikim Hedefleri Nas\u0131l Belirlenir', level: 3 },
    { type: 'paragraph', html: 'Vergiler ve kargo dahil toplam fiyatla ba\u015flay\u0131n. Ard\u0131ndan her ay rahat\u00e7a ay\u0131rabilece\u011finiz miktara b\u00f6l\u00fcn. \u0130yi bir kural, <strong>harcanabilir gelirinizin %10\u201315\u2019inden</strong> fazlas\u0131n\u0131 saat birikimine ay\u0131rmamakt\u0131r. Zaman \u00e7izelgesi \u00e7ok uzun g\u00f6r\u00fcn\u00fcyorsa, daha k\u00fc\u00e7\u00fck a\u015famalara b\u00f6lmeyi veya ayn\u0131 stil ailesinde daha uygun fiyatl\u0131 alternatifleri ke\u015ffetmeyi d\u00fc\u015f\u00fcn\u00fcn.' },
    { type: 'title', text: 'Hedef Takibinin Psikolojisi', level: 3 },
    { type: 'paragraph', html: 'G\u00f6rsel ilerleme takibi, koleksiyonculu\u011fu bu kadar \u00f6d\u00fcllendirici yapan ayn\u0131 n\u00f6rotransmitter olan dopamin sal\u0131n\u0131m\u0131n\u0131 tetikler. Her yeni katk\u0131y\u0131 kaydetti\u011finizde ve ilerleme halkas\u0131n\u0131n doldu\u011funu g\u00f6rd\u00fc\u011f\u00fcn\u00fczde, al\u0131\u015fkanl\u0131\u011f\u0131 peki\u015ftirirsiniz. Bu nedenle, k\u00fc\u00e7\u00fck ve d\u00fczenli birikimler genellikle seyrek b\u00fcy\u00fck yat\u0131r\u0131mlardan daha iyi \u00e7al\u0131\u015f\u0131r \u2014 rit\u00fcelin kendisi koleksiyonculuk deneyiminin bir par\u00e7as\u0131 haline gelir.' },
  ],
  faq: [
    {
      question: 'Bir saat i\u00e7in her ay ne kadar biriktirmeliyim?',
      answer: 'Harcanabilir ayl\u0131k gelirinizin %10\u201315\u2019ini hedefleyin. Anahtar tutarl\u0131l\u0131kt\u0131r \u2014 ayda 100 $ bile y\u0131lda 1.200 $ eder. Zaman \u00e7izelgenize g\u00f6re miktar\u0131 ayarlay\u0131n: daha k\u0131sa hedefler daha y\u00fcksek ayl\u0131k katk\u0131lar gerektirir.',
    },
    {
      question: 'Bir seferde tek bir saat i\u00e7in mi yoksa birden fazla i\u00e7in mi biriktirmeliyim?',
      answer: 'Tek seferde bir tane genellikle daha etkilidir. Odaklanma ivme kazand\u0131r\u0131r. \u0130lk hedefinize ula\u015ft\u0131\u011f\u0131n\u0131zda, g\u00fcven ve disiplin bir sonrakine aktar\u0131l\u0131r. Bununla birlikte, bu planlay\u0131c\u0131 birden fazla hedefi destekleyerek zaman \u00e7izelgelerini kar\u015f\u0131la\u015ft\u0131rman\u0131za olanak tan\u0131r.',
    },
    {
      question: 'Biriktirirken saat fiyat\u0131 y\u00fckselirse ne olur?',
      answer: 'G\u00fczel soru. Birka\u00e7 ayda bir g\u00fcncel piyasa fiyat\u0131n\u0131 kontrol edin ve hedefinizi g\u00fcncelleyin. Fiyatlar h\u0131zla y\u00fckseliyorsa, ayl\u0131k miktar\u0131n\u0131z\u0131 art\u0131rmay\u0131 veya zaman \u00e7izelgesini k\u0131saltarak mevcut fiyat\u0131 sabitlemeyi d\u00fc\u015f\u00fcn\u00fcn.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Hedefini Belirle',
      text: 'Saatin ad\u0131n\u0131 ve vergiler ile kargo dahil toplam fiyat\u0131n\u0131 girin.',
    },
    {
      name: 'Birikimini Takip Et',
      text: 'Ne kadar biriktirdi\u011fini ve her ay ne kadar ay\u0131rabilece\u011fini kaydet.',
    },
    {
      name: '\u0130lerlemeyi \u0130zle',
      text: 'Birikimlerini g\u00fcncellerken ilerleme halkas\u0131n\u0131n doldu\u011funu izle. Ayl\u0131k miktarlar\u0131 istedi\u011fin zaman ayarla.',
    },
    {
      name: 'Kutla',
      text: 'Halka %100\u2019e ula\u015ft\u0131\u011f\u0131nda hedefine ula\u015fm\u0131\u015fs\u0131n demektir. O saati alma zaman\u0131!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bir saat i\u00e7in her ay ne kadar biriktirmeliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Harcanabilir ayl\u0131k gelirinizin %10\u201315\u2019ini hedefleyin. Anahtar tutarl\u0131l\u0131kt\u0131r \u2014 ayda 100 $ bile y\u0131lda 1.200 $ eder.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir seferde tek bir saat i\u00e7in mi yoksa birden fazla i\u00e7in mi biriktirmeliyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tek seferde bir tane genellikle daha etkilidir. Odaklanma ivme kazand\u0131r\u0131r. \u0130lk hedefinize ula\u015ft\u0131\u011f\u0131n\u0131zda, bu disiplini bir sonrakine ta\u015f\u0131y\u0131n.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Biriktirirken saat fiyat\u0131 y\u00fckselirse ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Birka\u00e7 ayda bir g\u00fcncel piyasa fiyat\u0131n\u0131 kontrol edin ve hedefinizi g\u00fcncelleyin. Fiyatlar h\u0131zla y\u00fckseliyorsa ayl\u0131k miktar\u0131n\u0131z\u0131 art\u0131rmay\u0131 d\u00fc\u015f\u00fcn\u00fcn.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Birikim Planlay\u0131c\u0131s\u0131',
      'operatingSystem': 'T\u00fcm\u00fc',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat al\u0131m\u0131 i\u00e7in nas\u0131l birikim yap\u0131l\u0131r',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Hedefini Belirle',
          'text': 'Saatin ad\u0131n\u0131 ve vergiler ile kargo dahil toplam fiyat\u0131n\u0131 girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Birikimini Takip Et',
          'text': 'Ne kadar biriktirdi\u011fini ve her ay ne kadar ay\u0131rabilece\u011fini kaydet.',
        },
        {
          '@type': 'HowToStep',
          'name': '\u0130lerlemeyi \u0130zle',
          'text': 'Birikimlerini g\u00fcncellerken ilerleme halkas\u0131n\u0131n doldu\u011funu izle.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kutla',
          'text': 'Halka %100\u2019e ula\u015ft\u0131\u011f\u0131nda hedefine ula\u015fm\u0131\u015fs\u0131n demektir. O saati alma zaman\u0131!',
        },
      ],
    },
  ],
};
