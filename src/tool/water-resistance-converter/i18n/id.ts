import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'konverter-ketahanan-air',
  title: 'Konverter Ketahanan Air Jam Tangan: Meter, ATM, Bar dan Kaki',
  description: 'Konversikan peringkat ketahanan air jam tangan antara meter, kaki, ATM, dan bar. Lihat arti sebenarnya dari setiap peringkat untuk pemakaian sehari-hari, berenang, dan menyelam.',
  ui: {
    title: 'Konverter Ketahanan Air',
    depthLabel: 'Ketahanan Air',
    enterDepth: 'Masukkan peringkat kedalaman',
    unitMeters: 'Meter (m)',
    unitFeet: 'Kaki (ft)',
    unitATM: 'Atmosfer (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Nilai Setara',
    ratingLabel: 'Peringkat',
    whatItMeans: 'Artinya',
    notWaterResistant: 'Tidak Tahan Air',
    notWaterResistantDesc: 'Tidak boleh kena percikan. Jauhkan sepenuhnya dari air.',
    handWash: 'Tahan Percikan',
    handWashDesc: 'Cuci tangan, hujan, percikan ringan. Tidak boleh berenang atau mandi.',
    showerSwim: 'Mandi & Renang Permukaan',
    showerSwimDesc: 'Mandi, berenang di permukaan kolam. Tidak boleh menyelam atau snorkeling.',
    snorkeling: 'Berenang & Snorkeling',
    snorkelingDesc: 'Berenang di kolam, snorkeling, olahraga air. Ketahanan harian yang sangat baik.',
    scubaDiving: 'Selam Rekreasi',
    scubaDivingDesc: 'Menyelam scuba, aktivitas laut berdampak tinggi. Sesuai ISO.',
    saturationDiving: 'Selam Dalam / Saturasi',
    saturationDivingDesc: 'Penyelaman saturasi profesional. Kedalaman ekstrem. Konteks katup pelepas helium.',
    tipTitle: 'Tips',
    tipContent: 'Ketahanan air menurun seiring waktu. Gasket dan segel harus diuji setiap tahun dan diganti setiap 3-5 tahun.',
  },
  seo: [
    { type: 'title', text: 'Konverter Ketahanan Air Jam Tangan-Memahami Meter, ATM, Bar & Kaki', level: 2 },
    { type: 'paragraph', html: 'Peringkat ketahanan air 30 meter tidak berarti Anda dapat menyelam hingga 30 meter. Itu berarti jam tangan dapat menahan percikan air dan hujan ringan. Konverter ini menerjemahkan antara <strong>meter, kaki, atmosfer (ATM), dan bar</strong>, dan memberi tahu Anda apa yang sebenarnya diizinkan oleh setiap peringkat.' },
    { type: 'title', text: 'Kebenaran tentang Peringkat Ketahanan Air', level: 3 },
    { type: 'paragraph', html: 'Ketahanan air jam tangan diuji di bawah tekanan statis di laboratorium. Kondisi dunia nyata-menggerakkan lengan, menyelam, perubahan suhu-menciptakan tekanan dinamis yang jauh lebih tinggi. Jam tangan 30m / 3 ATM hanya tahan percikan. Untuk berenang, Anda membutuhkan setidaknya 100m / 10 ATM. Untuk menyelam scuba, 200m / 20 ATM adalah titik masuk standar.' },
    { type: 'title', text: 'Mengapa Ketahanan Air Menurun Seiring Waktu', level: 3 },
    { type: 'paragraph', html: 'Gasket karet dan O-ring yang menyegel jam tangan Anda mengering, retak, dan terkompresi seiring waktu. Panas, sinar UV, dan bahan kimia mempercepat proses ini. Jam tangan yang dulunya tahan air hingga 100m mungkin hanya tahan percikan setelah 5 tahun tanpa perawatan. Uji segel Anda setiap tahun dan ganti setiap 3 hingga 5 tahun.' },
    { type: 'title', text: 'ISO 6425-Standar Jam Tangan Selam', level: 3 },
    { type: 'paragraph', html: 'Agar jam tangan bisa disebut "jam tangan selam," jam tangan harus memenuhi standar ISO 6425: setidaknya 100m ketahanan air, bezel satu arah, tanda bercahaya, dan mahkota ulir. Jam tangan yang memenuhi standar ini diuji 25% di atas kedalaman teratanya. Jam tangan bersertifikasi ISO 200m diuji pada 250m.' },
  ],
  faq: [
    {
      question: 'Bisakah saya berenang dengan jam tangan tahan air 30 meter?',
      answer: 'Tidak. Peringkat 30m / 3 ATM berarti hanya tahan percikan-cuci tangan, hujan, dan keringat. Berenang menciptakan tekanan dinamis yang melebihi tekanan uji statis. Untuk berenang, pilih setidaknya 100m / 10 ATM.',
    },
    {
      question: 'Apa perbedaan antara ATM, bar, dan meter?',
      answer: '1 ATM = 1 bar ≈ 10 meter kolom air statis. Pada industri jam tangan, ketiganya pada dasarnya setara. Jam tangan 10 ATM sama dengan jam tangan 10 bar dan diperingkat hingga sekitar 100 meter.',
    },
    {
      question: 'Seberapa sering saya harus menguji ketahanan air jam tangan?',
      answer: 'Setahun sekali, terutama sebelum terkena air. Gasket dan segel aus. Setiap 3-5 tahun, semua segel harus diganti saat servis penuh.',
    },
    {
      question: 'Apa arti sertifikasi ISO 6425?',
      answer: 'ISO 6425 adalah standar internasional untuk jam tangan selam. Ini membutuhkan setidaknya 100m ketahanan, bezel satu arah, tanda bercahaya, dan pengujian 25% di atas kedalaman teratanya.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Masukkan peringkat Anda',
      text: 'Ketik angka ketahanan air jam tangan Anda dan pilih satuannya (meter, kaki, ATM, atau bar).',
    },
    {
      name: 'Baca nilai setara',
      text: 'Kartu menunjukkan nilai yang dikonversi dalam keempat satuan secara bersamaan.',
    },
    {
      name: 'Periksa rekomendasi',
      text: 'Kartu yang disorot menunjukkan aktivitas apa yang aman pada peringkat jam tangan Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bisakah saya berenang dengan jam tangan tahan air 30 meter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tidak. Peringkat 30m / 3 ATM berarti hanya tahan percikan-cuci tangan, hujan, dan keringat. Untuk berenang, pilih setidaknya 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa perbedaan antara ATM, bar, dan meter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 meter kolom air statis. Pada industri jam tangan, ketiganya pada dasarnya setara.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Seberapa sering saya harus menguji ketahanan air jam tangan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Setahun sekali, terutama sebelum terkena air. Setiap 3-5 tahun, semua segel harus diganti saat servis penuh.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa arti sertifikasi ISO 6425?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 membutuhkan setidaknya 100m ketahanan, bezel satu arah, tanda bercahaya, dan pengujian 25% di atas kedalaman teratanya.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Konverter Ketahanan Air Jam Tangan',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara mengonversi peringkat ketahanan air jam tangan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Masukkan peringkat Anda',
          'text': 'Ketik angka ketahanan air jam tangan Anda dan pilih satuannya.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca nilai setara',
          'text': 'Kartu menunjukkan nilai yang dikonversi dalam keempat satuan secara bersamaan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Periksa rekomendasi',
          'text': 'Kartu yang disorot menunjukkan aktivitas yang aman pada peringkat jam tangan Anda.',
        },
      ],
    },
  ],
};
