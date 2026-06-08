import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'kalkulator-kehadiran-pergelangan-tangan',
  title: 'Kalkulator Kehadiran Jam di Pergelangan Tangan',
  description: 'Hitung rasio case-to-wrist, lebar pergelangan tangan datar, dan tentukan ukuran jam ideal berdasarkan panduan estetika horologi.',
  ui: {
    title: 'Pengaturan Ukuran Pergelangan Tangan',
    wristCircumferenceLabel: 'Lingkar Pergelangan Tangan',
    caseDiameterLabel: 'Diameter Case',
    lugToLugLabel: 'Jarak Lug ke Lug',
    wristWidthLabel: 'Lebar Pergelangan Tangan Datar',
    autoEstimateWidthLabel: 'Estimasi otomatis lebar datar (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Analisis Kesesuaian di Pergelangan Tangan',
    caseWristRatioLabel: 'Rasio Case-to-Wrist',
    wristCoverageLabel: 'Cakupan Pergelangan Tangan',
    verdictLabel: 'Kesimpulan',
    verdictOversized: 'Case Terlalu Besar',
    verdictBold: 'Tampilan Modern / Berani',
    verdictGolden: 'Tampilan Klasik / Proporsional',
    verdictVintage: 'Vintage / Terlalu Kecil',
    coverageSafe: 'Kesesuaian Aman',
    coverageBold: 'Kesesuaian Berani',
    coverageOverhang: 'Peringatan Lug Melewati Batas',
    sweetSpotTitle: 'Gaya Kesesuaian',
    sweetSpotDesc: 'Sweet spot mewakili tampilan visual yang paling seimbang.',
    minClassicLabel: 'Tampilan Vintage / Klasik',
    sweetSpotLabel: 'Sweet Spot Estetika',
    maxBoldLabel: 'Tampilan Modern / Berani',
    maxLugToLugLabel: 'Jarak Lug ke Lug Maksimum yang Disarankan',
    idealSizesTitle: 'Panduan Ukuran Ideal',
    visualizerTitle: 'Simulator Langsung',
    wristWidthHelp: 'Perkiraan berdasarkan bentuk pergelangan tangan.',
    estimatedLabel: 'perkiraan',
    customLabel: 'Pergelangan',
  },
  seo: [
    { type: 'title', text: 'Cara Memilih Ukuran Jam yang Sempurna: Panduan Proporsional', level: 2 },
    { type: 'paragraph', html: 'Menemukan ukuran jam yang tepat adalah perpaduan antara matematika, geometri, dan selera pribadi. Dalam horologi, cara sebuah jam duduk di lengan disebut <strong>kehadiran di pergelangan tangan</strong>. Jam harus terlihat seimbang-tidak mendominasi lengan dengan overhang yang tidak sedap dipandang, maupun menghilang seperti titik kecil. Untuk mencapai keseimbangan ini, para kolektor menganalisis tiga metrik utama: diameter case, jarak lug ke lug, dan bentuk pergelangan tangan.' },
    { type: 'title', text: 'Memahami Rasio Case-to-Wrist', level: 3 },
    { type: 'paragraph', html: 'Metode tradisional untuk menilai proporsi jam adalah rasio case-to-wrist. Caranya adalah membagi lingkar pergelangan tangan dalam milimeter dengan diameter case. Rasio antara <strong>4,5 dan 5,0</strong> mewakili sweet spot klasik. Rasio <strong>4,0 hingga 4,5</strong> menghasilkan tampilan modern dan sportif. Di atas 5,0 memberikan estetika vintage, sementara di bawah 4,0 dianggap terlalu besar.' },
    { type: 'title', text: 'Mengapa Jarak Lug ke Lug Lebih Penting dari Diameter Case', level: 3 },
    { type: 'paragraph', html: 'Meski diameter case mendapat perhatian utama, <strong>jarak lug ke lug</strong> (panjang vertikal dari ujung lug atas ke bawah) adalah uji kesesuaian yang sesungguhnya. Aturan emas ukuran jam: jarak lug ke lug tidak boleh melebihi lebar datar pergelangan tangan. Jika lug melampaui tepi pergelangan, jam bergeser, ada celah antara tali dan kulit, serta tampilan visual menjadi buruk.' },
    { type: 'title', text: 'Pergelangan Datar vs. Bulat: Memilih Ukuran Sesuai Anatomi', level: 3 },
    { type: 'paragraph', html: 'Lingkar pergelangan tangan hanya menceritakan sebagian kisah. Pergelangan dengan lingkar yang sama dapat memiliki bentuk penampang yang berbeda: datar atau bulat. Pergelangan datar memiliki permukaan atas yang lebih lebar sehingga dapat menampung jarak lug ke lug yang lebih panjang tanpa overhang. Pergelangan bulat lebih silindris, memiliki permukaan atas yang lebih sempit, dan memerlukan jarak lug ke lug yang lebih pendek.' },
  ],
  faq: [
    {
      question: 'Berapa rasio case-to-wrist yang ideal?',
      answer: 'Rasio ideal berkisar antara 4,0 dan 5,0. Rasio 4,5 mewakili sweet spot horologi klasik. Rasio 4,0 hingga 4,5 memberikan tampilan modern dan berani; di atas 5,0 lebih cocok untuk jam bergaya vintage; di bawah 4,0 cenderung terlihat terlalu besar.',
    },
    {
      question: 'Mengapa jarak lug ke lug lebih penting dari diameter case?',
      answer: 'Diameter case hanya mengukur lebar wajah jam, sedangkan jarak lug ke lug menentukan panjang total jam di pergelangan tangan. Jika jarak lug ke lug melebihi lebar datar pergelangan, lug akan menggantung sehingga tali jam jatuh vertikal, membuat jam terlihat tidak stabil dan terlalu besar.',
    },
    {
      question: 'Bagaimana pergelangan datar vs. bulat memengaruhi kesesuaian jam?',
      answer: 'Dua pergelangan dengan lingkar yang sama (misalnya 17 cm) dapat memakai jam secara berbeda. Pergelangan datar memiliki permukaan atas yang lebih lebar sehingga mampu menampung jarak lug ke lug yang lebih panjang tanpa overhang. Pergelangan bulat lebih sempit di bagian atas sehingga memerlukan jarak lug ke lug yang lebih pendek.',
    },
    {
      question: 'Bagaimana ketebalan dan lebar bezel memengaruhi ukuran visual jam?',
      answer: 'Jam dengan bezel sangat tipis (seperti jam formal) memiliki permukaan dial yang lebih besar dan terlihat lebih besar dari diameter sebenarnya. Jam selam dengan bezel putar tebal memiliki dial yang lebih kecil sehingga terasa lebih kompak. Jam dengan ketebalan di atas 13 mm juga tampak lebih besar dan berat secara visual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ukur Pergelangan Tangan Anda',
      text: 'Lilitkan pita ukur fleksibel di sekitar tulang pergelangan tangan untuk mengetahui lingkar dalam cm atau inci.',
    },
    {
      name: 'Masukkan Dimensi Jam',
      text: 'Isikan diameter case dan jarak lug ke lug dari jam yang ingin Anda evaluasi.',
    },
    {
      name: 'Analisis Kesesuaian dan Simulator',
      text: 'Periksa rasio case-to-wrist, peringatan overhang lug, dan lihat diagram simulasi secara real-time.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa rasio case-to-wrist yang ideal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rasio ideal berkisar antara 4,0 dan 5,0. Rasio 4,5 mewakili sweet spot horologi klasik. Rasio 4,0 hingga 4,5 memberikan tampilan modern dan berani; di atas 5,0 lebih cocok untuk jam bergaya vintage; di bawah 4,0 cenderung terlihat terlalu besar.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Mengapa jarak lug ke lug lebih penting dari diameter case?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Diameter case hanya mengukur lebar wajah jam, sedangkan jarak lug ke lug menentukan panjang total jam di pergelangan tangan. Jika jarak lug ke lug melebihi lebar datar pergelangan, lug akan menggantung sehingga tali jam jatuh vertikal, membuat jam terlihat tidak stabil dan terlalu besar.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Kehadiran Jam di Pergelangan Tangan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menentukan Ukuran Jam yang Sempurna',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ukur Pergelangan Tangan Anda',
          'text': 'Lilitkan pita ukur fleksibel di sekitar tulang pergelangan tangan untuk mengetahui lingkar dalam cm atau inci.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Masukkan Dimensi Jam',
          'text': 'Isikan diameter case dan jarak lug ke lug dari jam yang ingin Anda evaluasi.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analisis Kesesuaian dan Simulator',
          'text': 'Periksa rasio case-to-wrist, peringatan overhang lug, dan lihat diagram simulasi secara real-time.'
        }
      ]
    }
  ]
};
