import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'pelacak-akurasi-jam-tangan',
  title: 'Pelacak & Pencatat Akurasi Jam Tangan',
  description: 'Catat dan hitung deviasi harian jam tangan mekanis atau kuarsa Anda untuk menganalisis presisi dan konsistensinya.',
  ui: {
    title: 'Pelacak Akurasi Jam Tangan',
    selectWatch: 'Pilih atau Tambah Jam Tangan',
    watchPlaceholder: 'mis. Seiko SKX007',
    addWatch: 'Tambah Jam Tangan',
    deleteWatch: 'Hapus Jam Tangan',
    addLog: 'Catat Pengukuran Baru',
    offsetLabel: 'Penyimpangan (detik)',
    offsetPlaceholder: '0',
    dateLabel: 'Waktu Pengukuran',
    saveLog: 'Simpan Catatan',
    avgRate: 'Rata-rata Akurasi Harian',
    consistency: 'Status Presisi',
    totalLogs: 'Total Catatan',
    historyTitle: 'Riwayat Pengukuran',
    noLogs: 'Belum ada catatan untuk jam tangan ini. Tambahkan minimal dua catatan untuk menghitung akurasi.',
    tableDate: 'Tanggal & Waktu',
    tableOffset: 'Penyimpangan',
    tableRate: 'Akurasi Harian',
    tableActions: 'Aksi',
    deleteLog: 'Hapus',
    coscExcellent: 'Kronometer COSC (+4/-6 s/d)',
    excellent: 'Sangat Baik (0 hingga +5 s/d)',
    good: 'Baik (+/- 10 s/d)',
    needsService: 'Perlu Servis (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'detik',
    referenceTime: 'Waktu Referensi',
    watchTime: 'Waktu Jam Tangan',
    useCurrentTime: 'Gunakan Waktu Sekarang',
    calculatedRate: 'Deviasi Terhitung',
    driftPredictorTitle: 'Prediktor & Proyeksi Deviasi',
    driftPredictorDesc: 'Proyeksikan akumulasi deviasi waktu dari waktu ke waktu dan bandingkan dengan standar.',
    dailyRateInput: 'Deviasi Harian (detik/hari)',
    dailyRatePlaceholder: 'mis. +4.5 atau -3',
    driftHeading: 'Proyeksi',
    period: 'Periode',
    accumulatedDrift: 'Proyeksi Akumulasi',
    day: '1 Hari',
    week: '1 Minggu',
    month: '1 Bulan',
    months3: '3 Bulan',
    months6: '6 Bulan',
    year: '1 Tahun',
    years5: '5 Tahun',
    watchStandardTitle: 'Sertifikasi Standar',
    trackerHeading: 'Pelacak Akurasi Langsung',
    driftCalculatorTab: 'Prediktor Deviasi',
    trackerTab: 'Pencatat Akurasi',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'Kronometer COSC',
    stdMetas: 'METAS Master',
    stdStdMech: 'Mekanis Standar',
    stdQuartz: 'Kuarsa Standar',
    stdHaq: 'Kuarsa Presisi Tinggi',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standar (+15 s/d)',
    presetQuartz: 'Kuarsa (+0.5 s/d)',
    statusPass: 'Lolos',
    statusFail: 'Gagal',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/tahun',
  },
  seo: [
    { type: 'title', text: 'Panduan Lengkap Akurasi Jam Tangan dan Pengaturan Deviasi Harian', level: 2 },
    { type: 'paragraph', html: 'Jam tangan mekanis adalah mahakarya mikro-engineering, tetapi tidak seperti mesin kuarsa, jam tangan mekanis rentan terhadap berbagai pengaruh lingkungan dan gaya fisik yang memengaruhi akurasi ketepatan waktunya. Memantau dan memahami deviasi harian jam tangan Anda adalah kunci untuk menjaga kinerjanya dan menentukan kapan jam tangan tersebut membutuhkan servis profesional.' },
    { type: 'title', text: 'Mengapa Jam Tangan Mekanis Mengalami Deviasi: Faktor Kunci', level: 2 },
    { type: 'paragraph', html: 'Beberapa elemen memengaruhi seberapa cepat atau lambat jam tangan berjalan setiap harinya. Gravitasi memengaruhi balance wheel secara differently tergantung pada posisi jam tangan. Perubahan suhu dapat menyebabkan hairspring memuai atau menyusut, sehingga mengubah laju osilasi. Selain itu, tingkat kekencangan mainspring (power reserve) juga memengaruhi amplitudo, di mana jam tangan yang terisi penuh dayanya cenderung lebih stabil dibandingkan dengan yang hampir habis dayanya.' },
    { type: 'title', text: 'Memahami Akumulasi Deviasi: Bagaimana Deviasi Kecil Menumpuk', level: 2 },
    { type: 'paragraph', html: 'Deviasi harian sebesar +5 detik saja terdengar sepele, tetapi waktu bersifat kumulatif. Dalam satu minggu, deviasi tersebut akan menumpuk menjadi 35 detik. Dalam sebulan, deviasinya menjadi 2,5 menit, dan dalam setahun, jam tangan Anda akan berselisih lebih dari 30 menit. Akumulasi deviasi ini menunjukkan mengapa pelacakan yang tepat sangat penting bagi kolektor yang sering berganti jam tangan dan ingin jam tangan mereka selalu sinkron dengan waktu referensi atom.' },
    { type: 'title', text: 'Cara Melacak dan Menghitung Akurasi Jam Tangan secara Manual', level: 2 },
    { type: 'paragraph', html: 'Untuk mengukur deviasi jam tangan Anda tanpa alat timegrapher profesional, Anda dapat menggunakan fitur Pencatat Akurasi. Pertama, sinkronkan jam tangan Anda atau catat deviasinya relatif terhadap referensi waktu atom (seperti jam UTC atau NTP). Setelah 24 hingga 48 hari, catat kembali penyimpangannya. Bagi selisih penyimpangan dengan jumlah hari yang telah berlalu untuk mengetahui rata-rata deviasi harian jam tangan Anda.' },
    { type: 'title', text: 'Menggunakan Variasi Posisi untuk Regulasi Mandiri', level: 2 },
    { type: 'paragraph', html: 'Banyak jam tangan mekanis dapat sedikit diregulasi berdasarkan bagaimana jam tangan diletakkan saat tidak dipakai. Misalnya, meletakkan jam tangan menghadap ke atas semalaman mungkin membuatnya bertambah beberapa detik, sementara meletakkannya dengan posisi crown di bawah mungkin membuatnya berkurang beberapa detik. Dengan melacak posisi-posisi ini dan menggunakan kalkulator kami, Anda dapat menentukan cara meletakkan jam tangan Anda semalaman untuk mengompensasi deviasi hariannya secara alami.' },
  ],
  faq: [
    {
      question: 'Berapa deviasi harian yang normal untuk jam tangan mekanis?',
      answer: 'Jam tangan mekanis standar biasanya menyimpang sekitar +/- 10 hingga 20 detik per hari. Kronometer bersertifikat COSC diregulasi untuk berkinerja dalam rentang -4 hingga +6 detik per hari, sedangkan mesin kuarsa berkualitas tinggi dapat mencapai deviasi kurang dari +/- 0,5 detik per hari.',
    },
    {
      question: 'Mengapa akurasi jam tangan saya berubah tergantung posisi?',
      answer: 'Gravitasi menarik balance wheel dan hairspring secara berbeda saat jam tangan menghadap ke atas, menghadap ke bawah, crown di atas, atau crown di bawah. Variasi posisi ini menyebabkan sedikit perbedaan pada amplitudo dan akurasi harian.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Catat Kondisi Awal',
      text: 'Sinkronkan jam tangan Anda dengan jam atom tepercaya atau catat penyimpangan saat ini dalam hitungan detik.'
    },
    {
      name: 'Tunggu dan Pantau',
      text: 'Gunakan jam tangan Anda seperti biasa atau letakkan dalam satu posisi selama minimal 12 hingga 24 jam.'
    },
    {
      name: 'Catat Kondisi Kedua',
      text: 'Catat kembali penyimpangan jam tangan Anda. Sistem akan menghitung deviasi harian secara otomatis dalam detik per hari.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pelacak & Pencatat Akurasi Jam Tangan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa deviasi harian yang normal untuk jam tangan mekanis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jam tangan mekanis standar biasanya menyimpang sekitar +/- 10 hingga 20 detik per hari. Kronometer bersertifikat COSC diregulasi untuk berkinerja dalam rentang -4 hingga +6 detik per hari, sedangkan mesin kuarsa berkualitas tinggi dapat mencapai deviasi kurang dari +/- 0,5 detik per hari.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Mengapa akurasi jam tangan saya berubah tergantung posisi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gravitasi menarik balance wheel dan hairspring secara berbeda saat jam tangan menghadap ke atas, menghadap ke bawah, crown di atas, atau crown di bawah. Variasi posisi ini menyebabkan sedikit perbedaan pada amplitudo dan akurasi harian.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Mengukur Akurasi Jam Tangan Secara Manual',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Catat Kondisi Awal',
          'text': 'Sinkronkan jam tangan Anda dengan jam atom tepercaya atau catat penyimpangan saat ini dalam hitungan detik.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Tunggu dan Pantau',
          'text': 'Gunakan jam tangan Anda seperti biasa atau letakkan dalam satu posisi selama minimal 12 hingga 24 jam.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Catat Kondisi Kedua',
          'text': 'Catat kembali penyimpangan jam tangan Anda. Sistem akan menghitung deviasi harian secara otomatis dalam detik per hari.'
        }
      ]
    }
  ]
};
