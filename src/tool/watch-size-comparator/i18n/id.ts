import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'perbandingan-ukuran-arloji',
  title: 'Watch Size Comparator Visualisasi Kesesuaian di Pergelangan Tangan',
  description: 'Bandingkan ukuran casing arloji secara visual. Masukkan diameter, lug-to-lug, dan ukuran pergelangan untuk melihat kesesuaian sebelum membeli.',
  ui: {
    title: 'Perbandingan Ukuran Arloji',
    addWatch: 'Tambah Arloji',
    watchName: 'Nama Arloji',
    watchNamePlaceholder: 'mis. Rolex Submariner',
    caseDiameter: 'Diameter Casing',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Ketebalan',
    wristSize: 'Ukuran Pergelangan',
    wristSizePlaceholder: 'mis. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Hapus',
    yourWatches: 'Arloji Anda',
    fitLegend: 'Legenda Kesesuaian',
    excellentFit: 'Sangat Baik',
    goodFit: 'Baik',
    borderlineFit: 'Pas-pasan',
    largeFit: 'Terlalu Besar',
    wristCurve: 'pergelangan',
    nameRequired: 'Masukkan nama arloji',
    watchTooLarge: 'Arloji melampaui pergelangan',
    l2lExceedsWrist: 'Lug-to-lug melebihi lebar pergelangan',
    excellentDesc: 'Proporsional-lug-to-lug masih dalam batas pergelangan.',
    goodDesc: 'Cocok-sedikit menggantung namun tetap nyaman.',
    borderlineDesc: 'Pas-pasan-lug mendekati tepi pergelangan.',
    largeDesc: 'Terlalu besar-lug kemungkinan menggantung.',
    fitsWell: 'Pas',
    slightlyLarge: 'Agak besar',
    tooLarge: 'Terlalu besar',
    source: 'Panduan ukuran',
    estimateNote: 'Masukkan dimensi dan tambahkan arloji untuk melihat kesesuaiannya di pergelangan Anda.',
  },
  seo: [
    { type: 'title', text: 'Watch Size Comparator-Visualisasi Kesesuaian di Pergelangan Tangan', level: 2 },
    { type: 'paragraph', html: 'Penasaran apakah <strong>arloji 42mm</strong> cocok di <strong>pergelangan 17cm</strong>? Atau apakah lug-to-log 48mm akan menggantung? Watch Size Comparator memberi Anda jawaban visual. Masukkan diameter casing, lug-to-lug, ketebalan, dan ukuran pergelangan-alat ini menggambar arloji sesuai skala dan mewarnai tingkat kesesuaian dari <span style="color:#22c55e">hijau (sangat baik)</span> hingga <span style="color:#ef4444">merah (terlalu besar)</span>. Berfungsi dalam satuan <strong>metrik maupun imperial</strong>.' },
    { type: 'title', text: 'Glosarium Ukuran Arloji', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Diameter Casing', definition: 'Lebar casing arloji yang diukur melintasi dial, tidak termasuk mahkota. Kisaran umum: 34-46mm. Ukuran yang paling sering disebut, tapi bukan satu-satunya faktor kesesuaian.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'Jarak antara lug atas dan bawah tempat tali dipasang. Ini menentukan apakah arloji menggantung di pergelangan. Arloji 40mm dengan L2L 50mm terkesan lebih besar daripada arloji 42mm dengan L2L 46mm.' },
        { term: 'Lebar Pergelangan Datar', definition: 'Lebar permukaan atas pergelangan, bukan kelilingnya. Kira-kira keliling pergelangan / π dikurangi 2-4cm. Ini dimensi yang sebenarnya ditempati arloji.' },
        { term: 'Rasio Casing terhadap Pergelangan', definition: 'Diameter casing dibagi lebar pergelangan. Rasio 0,6-0,75 (60-75%) dianggap sebagai kesesuaian proporsional klasik.' },
      ]
    },

    { type: 'title', text: 'Ukuran Arloji Apa yang Cocok untuk Pergelangan Saya?', level: 3 },
    {
      type: 'table', headers: ['Keliling Pergelangan', 'Lebar Datar (approx.)', 'Diameter Casing Ideal', 'Lug-to-Lug Maks.', 'Terbaik Untuk'], rows: [
        ['14-15 cm (5,5-5,9 inci)', '38-42 mm', '30-34 mm', '38-42 mm', 'Arloji vintage & dress'],
        ['15-16 cm (5,9-6,3 inci)', '40-44 mm', '34-36 mm', '40-44 mm', 'Arloji klasik kecil'],
        ['16-17 cm (6,3-6,7 inci)', '42-46 mm', '36-39 mm', '42-46 mm', 'Ukuran serbaguna sehari-hari'],
        ['17-18 cm (6,7-7,1 inci)', '44-48 mm', '38-42 mm', '44-48 mm', 'Titik manis sebagian besar merek'],
        ['18-19 cm (7,1-7,5 inci)', '46-50 mm', '40-44 mm', '46-50 mm', 'Arloji selam & GMT'],
        ['19-20 cm (7,5-7,9 inci)', '48-52 mm', '42-46 mm', '48-52 mm', 'Arloji pilot & tool'],
        ['20-21 cm (7,9-8,3 inci)', '50-54 mm', '44-48 mm', '50-54 mm', 'Arloji oversized & flieger'],
      ]
    },

    { type: 'title', text: 'Cara Mengukur Pergelangan untuk Arloji', level: 3 },
    {
      type: 'list', items: [
        'Lilitkan meteran kain di pergelangan tepat di belakang tulang pergelangan (ulnar styloid). Harus pas namun tidak ketat.',
        'Jika tidak punya meteran, gunakan tali atau kabel, tandai pertemuannya, lalu ukur dengan penggaris.',
        'Catat ukurannya dalam sentimeter atau inci. Rata-rata pergelangan pria 17-19cm (6,7-7,5 inci); rata-rata wanita 14-16cm (5,5-6,3 inci).',
        'Untuk memperkirakan lebar pergelangan datar, kurangi 2-4cm dari keliling atau gunakan fitur estimasi otomatis alat ini.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug to Lug adalah Batas Kesesuaian Sesungguhnya', icon: 'mdi:ruler', html: 'Kebanyakan orang fokus pada <strong>diameter casing</strong>, namun <strong>lug-to-lug</strong> yang menentukan apakah arloji cocok di pergelangan. Arloji dengan L2L 48mm di pergelangan datar 55mm (keliling 17cm) memakan 87% lebar pergelangan. Di atas 65%, lug mulai mendekati tepi pergelangan. <strong>Selalu periksa L2L terlebih dahulu.</strong>' },

    { type: 'tip', title: 'CM atau Inci? Pakai yang Anda Kenali', html: 'Alat ini sekarang mendukung satuan metrik dan imperial. Ukur pergelangan dalam sistem yang Anda pakai sehari-hari. Dimensi casing arloji <strong>selalu dalam milimeter</strong> (bahkan di AS), jadi diameter dan L2L tetap dalam mm-hanya ukuran pergelangan yang bisa diubah. Ini sesuai dengan standar industri arloji.' },

    {
      type: 'summary', title: 'Daftar Periksa Cepat Sebelum Membeli', items: [
        'Ukur keliling pergelangan dan masukkan ke alat ini.',
        'Cari tahu lug-to-lug arloji-bukan hanya diameter casing.',
        'Arloji sebaiknya memenuhi 60-75% lebar pergelangan datar untuk kesesuaian klasik.',
        'Jika lug menggantung di tepi pergelangan, arloji akan terasa terlalu besar, terlepas dari diameternya.',
        'Gunakan alat ini untuk membandingkan beberapa arloji berdampingan sebelum memutuskan pembelian.',
      ]
    },
  ],
  faq: [
    {
      question: 'Bagaimana cara mengukur pergelangan untuk arloji?',
      answer: 'Gunakan meteran kain di sekitar tulang pergelangan. Alternatifnya, lilitkan tali, tandai pertemuannya, lalu ukur dengan penggaris. Rata-rata 17-19cm untuk pria, 14-16cm untuk wanita.',
    },
    {
      question: 'Apa itu lug-to-lug dan mengapa penting?',
      answer: 'Lug-to-lug adalah jarak antara lug atas dan bawah. Ini menentukan apakah arloji menggantung di pergelangan. Arloji dengan lug-to-lug 48mm di pergelangan 17cm (≈55mm lebar datar) proporsional di 87%. Di atas 65% mulai menggantung.',
    },
    {
      question: 'Ukuran arloji apa yang cocok untuk pergelangan 17cm?',
      answer: 'Pergelangan 17cm (≈55mm lebar datar) cocok untuk arloji dengan diameter 36-42mm dan lug-to-lug 44-50mm. Titik manisnya adalah 38-40mm dengan L2L 46-48mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Masukkan ukuran pergelangan',
      text: 'Ketik keliling pergelangan dalam sentimeter. Alat akan memperbarui siluet pergelangan secara visual.',
    },
    {
      name: 'Masukkan dimensi arloji',
      text: 'Input diameter casing, lug-to-lug, dan ketebalan dalam milimeter.',
    },
    {
      name: 'Tambah dan bandingkan',
      text: 'Klik "Tambah Arloji" untuk menyimpannya. Tambahkan beberapa arloji dan klik di antaranya untuk membandingkan kesesuaian.',
    },
    {
      name: 'Baca warnanya',
      text: 'Hijau = sangat baik, kuning = pas-pasan, merah = terlalu besar untuk pergelangan Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bagaimana cara mengukur pergelangan untuk arloji?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gunakan meteran kain di sekitar tulang pergelangan. Rata-rata 17-19cm untuk pria, 14-16cm untuk wanita.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa itu lug-to-lug dan mengapa penting?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-lug adalah jarak antara lug atas dan bawah. Ini menentukan apakah arloji menggantung di pergelangan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ukuran arloji apa yang cocok untuk pergelangan 17cm?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pergelangan 17cm cocok untuk diameter 36-42mm dengan lug-to-lug 44-50mm. Titik manis 38-40mm dengan L2L 46-48mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara membandingkan ukuran arloji',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Masukkan ukuran pergelangan',
          'text': 'Ketik keliling pergelangan dalam sentimeter.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Masukkan dimensi arloji',
          'text': 'Input diameter casing, lug-to-lug, dan ketebalan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tambah dan bandingkan',
          'text': 'Klik Tambah Arloji untuk menyimpannya. Tambahkan beberapa arloji untuk membandingkan.',
        },
      ],
    },
  ],
};
