import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'kalkulator-takimeter',
  title: 'Kalkulator Takimeter: Kecepatan dari Waktu Tempuh',
  description: 'Hitung kecepatan dari waktu tempuh menggunakan rumus takimeter. Berfungsi dengan jam kronograf apa pun yang memiliki skala bezel takimeter.',
  ui: {
    title: 'Kalkulator Takimeter',
    timeLabel: 'Waktu Tempuh (detik)',
    timeHelp: 'Waktu yang diukur dalam 1 km atau 1 mil',
    speedResult: 'Kecepatan',
    bezelReading: 'Pembacaan Bezel',
    presetLabel: 'Skenario',
    selectPreset: 'Pilih skenario',
    customPreset: 'Kustom',
    seconds: 'd',
    kmh: 'km/jam',
    mph: 'mpj',
    exampleStep1: 'Mulai kronograf saat objek melewati titik awal.',
    exampleStep2: 'Hentikan setelah 1 km. Skala takimeter menunjukkan kecepatan.',
    tipTitle: 'Tips',
    tipContent: 'Pada 36 detik, bezel menunjukkan angka 100. Waktu lebih cepat (durasi lebih pendek) menunjukkan kecepatan lebih tinggi pada skala takimeter.',
  },
  seo: [
    { type: 'title', text: 'Kalkulator Takimeter: Konversi Waktu Tempuh ke Kecepatan', level: 2 },
    { type: 'paragraph', html: 'Takimeter adalah skala pada bezel atau dial jam yang mengonversi waktu tempuh menjadi kecepatan. Biasanya digunakan dengan kronograf: mulai timer saat objek melewati titik referensi, hentikan setelah 1 km (atau 1 mil), dan baca kecepatan dari skala. Kalkulator ini melakukan perhitungan untuk Anda.' },
    { type: 'title', text: 'Cara Kerja Takimeter', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Rumus', definition: 'Kecepatan = 3.600 / waktu tempuh dalam detik. Konstanta 3.600 mewakili detik per jam.' },
        { term: 'Skala', definition: 'Bezel takimeter ditandai dari 60 (pada posisi pukul 3) hingga 400 atau 500 (dekat pukul 12). Kecepatan lebih tinggi sejajar dengan waktu tempuh yang lebih pendek.' },
        { term: 'Jarak Dasar', definition: 'Takimeter standar dikalibrasi untuk 1 km atau 1 mil. Untuk jarak lain, bagi pembacaan sesuai kebutuhan.' },
      ]
    },
    { type: 'title', text: 'Pengukuran Takimeter Umum', level: 3 },
    {
      type: 'table', headers: ['Waktu Tempuh', 'Kecepatan', 'Skenario'], rows: [
        ['10 d', '360 km/jam', 'Kereta peluru / mobil balap'],
        ['12 d', '300 km/jam', 'Lepas landas jet pribadi'],
        ['20 d', '180 km/jam', 'Mobil sport di jalan raya'],
        ['30 d', '120 km/jam', 'Mobil di jalan tol'],
        ['36 d', '100 km/jam', 'Mobil di jalan raya (referensi standar)'],
        ['45 d', '80 km/jam', 'Mobil di jalan perkotaan'],
        ['60 d', '60 km/jam', 'Mengemudi di kota'],
        ['90 d', '40 km/jam', 'Bersepeda'],
        ['120 d', '30 km/jam', 'Joging'],
        ['240 d', '15 km/jam', 'Lari'],
        ['480 d', '7,5 km/jam', 'Berjalan'],
      ]
    },
    { type: 'title', text: 'Melampaui Skala Standar', level: 3 },
    { type: 'paragraph', html: 'Jika bezel takimeter Anda hanya mencapai 400 tetapi waktu tempuh Anda di bawah 9 detik, Anda tetap bisa menggunakannya. Gunakan jarak dasar yang lebih panjang. Misalnya, jika Anda menempuh 2 km dalam 18 detik, bagi pembacaan bezel dengan 2. Sebaliknya, untuk kecepatan lambat (di atas 60 detik), gunakan jarak dasar yang lebih pendek (mis. 0,5 km) dan kalikan dengan 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Kompatibilitas Takimeter', icon: 'mdi:information', badge: 'CATATAN', html: 'Tidak semua kronograf memiliki bezel takimeter. Beberapa jam menempatkan skala takimeter pada rehaut dial atau pada cincin bab terluar. Jam digital mungkin menyertakan fungsi takimeter dalam mode kronograf. Rumus ini selalu berfungsi terlepas dari skala fisiknya.' },
  ],
  faq: [
    {
      question: 'Bagaimana cara menggunakan bezel takimeter pada jam tangan saya?',
      answer: 'Mulai kronograf di titik referensi (misalnya, penanda jalan tol). Hentikan setelah tepat 1 km (atau 1 mil). Jarum detik menunjuk ke kecepatan pada skala bezel. Misalnya, jika butuh 36 detik untuk menempuh 1 km, jarum menunjuk ke 100, artinya 100 km/jam.',
    },
    {
      question: 'Bagaimana jika waktu tempuh saya lebih cepat dari yang bisa dibaca bezel?',
      answer: 'Beberapa takimeter hanya mencapai 400 atau 500. Jika Anda menempuh 1 km dalam waktu di bawah 9 detik, gunakan jarak dasar yang lebih panjang. Tempuh 2 km dan bagi pembacaan bezel dengan 2, atau tempuh 3 km dan bagi dengan 3.',
    },
    {
      question: 'Bagaimana jika waktu tempuh saya lebih lambat dari yang bisa dibaca bezel?',
      answer: 'Gunakan jarak dasar yang lebih pendek. Misalnya, jika butuh 90 detik untuk menempuh 1 km, tempuh 0,5 km saja. Baca bezel dan kalikan dengan 2. Skala takimeter standar mencakup waktu dari sekitar 7 hingga 60 detik.',
    },
    {
      question: 'Bisakah takimeter digunakan untuk hal selain kecepatan?',
      answer: 'Ya. Takimeter mengukur laju per jam apa pun. Misalnya, ukur berapa lama waktu yang dibutuhkan untuk menyelesaikan tugas dan skala menunjukkan berapa banyak yang dapat Anda lakukan per jam. Dalam manufaktur, tugas 30 detik berarti 120 unit per jam.',
    },
    {
      question: 'Apakah semua takimeter menggunakan skala yang sama?',
      answer: 'Kebanyakan menggunakan skala logaritmik standar berdasarkan rumus 3.600 / detik. Namun, beberapa jam vintage atau merek mungkin memiliki variasi. Skala fisik juga mungkin dibatasi oleh track menit dan tanda bezel jam.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih skenario atau masukkan waktu kustom',
      text: 'Pilih dari skenario seperti Mobil, Bersepeda, atau Lari, atau pilih Kustom untuk memasukkan waktu tempuh dalam detik.',
    },
    {
      name: 'Baca hasil kecepatan',
      text: 'Kalkulator menunjukkan kecepatan dalam km/jam dan pembacaan bezel takimeter yang setara.',
    },
    {
      name: 'Terapkan pada kronograf Anda',
      text: 'Gunakan waktu tempuh untuk menemukan kecepatan yang sesuai pada bezel takimeter jam tangan Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bagaimana cara menggunakan bezel takimeter pada jam tangan saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mulai kronograf di titik referensi. Hentikan setelah tepat 1 km. Jarum detik menunjuk ke kecepatan pada skala bezel. Contoh: 36 detik = 100 km/jam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana jika waktu tempuh saya lebih cepat dari yang bisa dibaca bezel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gunakan jarak dasar yang lebih panjang. Tempuh 2 km dan bagi pembacaan bezel dengan 2, atau tempuh 3 km dan bagi dengan 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana jika waktu tempuh saya lebih lambat dari yang bisa dibaca bezel?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gunakan jarak dasar yang lebih pendek. Tempuh 0,5 km saja. Baca bezel dan kalikan dengan 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah takimeter digunakan untuk hal selain kecepatan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Takimeter mengukur laju per jam. Ukur waktu untuk menyelesaikan tugas dan skala menunjukkan berapa banyak per jam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apakah semua takimeter menggunakan skala yang sama?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kebanyakan menggunakan skala logaritmik standar berdasarkan rumus 3.600 / detik. Beberapa jam vintage mungkin memiliki variasi.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Takimeter',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara menghitung kecepatan menggunakan takimeter',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih skenario atau waktu kustom',
          'text': 'Pilih dari skenario seperti Mobil, Bersepeda, atau Lari, atau pilih Kustom untuk memasukkan waktu tempuh dalam detik.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca hasil kecepatan',
          'text': 'Kalkulator menunjukkan kecepatan dalam km/jam dan pembacaan bezel takimeter yang setara.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Terapkan pada kronograf Anda',
          'text': 'Gunakan waktu tempuh untuk menemukan kecepatan yang sesuai pada bezel takimeter jam tangan Anda.',
        },
      ],
    },
  ],
};
