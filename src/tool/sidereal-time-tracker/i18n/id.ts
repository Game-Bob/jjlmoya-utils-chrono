import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Apa perbedaan antara waktu matahari dan waktu sideris?',
    answer: 'Waktu matahari didasarkan pada posisi Matahari relatif terhadap meridian lokal (memakan waktu 24 jam), sedangkan waktu sideris didasarkan pada rotasi Bumi relatif terhadap bintang latar belakang yang jauh (memakan waktu 23 jam, 56 menit, 4,09 detik).',
  },
  {
    question: 'Mengapa hari sideris lebih pendek dari hari matahari?',
    answer: 'Saat Bumi berputar pada porosnya, Bumi juga bergerak di sepanjang orbitnya mengelilingi Matahari. Untuk menghadap Matahari lagi, Bumi harus berputar sedikit lebih dari 360 derajat, yang menambah sekitar 3 menit 56 detik pada hari dibandingkan dengan rotasi yang sejajar dengan bintang.',
  },
  {
    question: 'Bagaimana bujur mempengaruhi waktu sideris lokal?',
    answer: 'Waktu Sideris Lokal dihitung dengan menambahkan bujur pengamat (dikonversi ke jam: 15 derajat per jam) ke Greenwich Mean Sidereal Time (GMST). Setiap derajat ke timur menambahkan 4 menit ke jam sideris lokal Anda.',
  },
];

const howTo = [
  {
    name: 'Atur bujur referensi Anda',
    text: 'Sesuaikan penggeser ke bujur lokal Anda. Ini menyelaraskan skala sideris 24 jam ke meridian lokal Anda.',
  },
  {
    name: 'Amati jarum matahari dan sideris',
    text: 'Lihatlah muka jam: jarum matahari standar menunjukkan waktu UTC pada pelat jam 12 jam bagian dalam, sedangkan jarum emas dan bintang menunjukkan waktu sideris pada skala 24 jam bagian luar.',
  },
  {
    name: 'Percepat kecepatan langit',
    text: 'Klik pengali kecepatan 200× atau 5000× untuk melihat rotasi bola bintang latar dan drift terakumulasi secara real-time.',
  },
];

const title = 'Pelacak Waktu Sideris Astronomis: Jam Waktu Sideris Lokal';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'pelacak-waktu-sideris',
  title,
  description: 'Lacak Greenwich Mean Sidereal Time (GMST) dan Waktu Sideris Lokal (LST) dengan muka jam astrolab astronomis artistik dan simulator drift bintang real-time.',
  ui: {
    title: 'Pelacak Waktu Sideris',
    longitudeLabel: 'Bujur Pengamat',
    solarTimeLabel: 'Waktu Universal Terkoordinasi (UTC)',
    siderealTimeLabel: 'Waktu Sideris Lokal (LST)',
    differenceLabel: 'Drift Bintang-Matahari',
    utcLabel: 'Tanggal/Waktu UTC',
    speedLabel: 'Kecepatan Langit',
    speedNormal: '1× (Real-time)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Drift)',
    audioToggleLabel: 'Detak Lonceng Kosmik',
    step1: 'Sesuaikan bujur lokal Anda untuk melihat perubahan Waktu Sideris Lokal secara real-time.',
    step2: 'Alihkan pengali kecepatan untuk menyaksikan drift jarum jam matahari standar dan bola bintang sideris.',
    step3: 'Aktifkan Lonceng Kosmik untuk mendengar perbedaan antara detak standar dan jam astronomis.',
    tipTitle: 'Drift Astronomis',
    tipContent: 'Karena Bumi mengorbit Matahari, jam matahari standar tertinggal dari waktu sideris sebesar 3 menit 56 detik per hari, melayang tepat 24 jam selama satu tahun penuh.',
    useLocationBtn: 'Gunakan Lokasi Saat Ini',
    hemisphereLabel: 'Belahan Bintang',
    hemisphereNorth: 'Utara (Ursa Major)',
    hemisphereSouth: 'Selatan (Salib)',
    longitudeFormatLabel: 'Format Bujur',
    longitudeFormatDecimal: 'Derajat Desimal',
    longitudeFormatDMS: 'Derajat/Menit',
  },
  seo: [
    { type: 'title', text: 'Apa itu waktu sideris?', level: 2 },
    { type: 'paragraph', html: 'Waktu sideris adalah sistem pengukuran waktu yang digunakan astronom untuk menemukan objek langit. Satu hari sideris kira-kira 23 jam, 56 menit, dan 4,09 detik. Ini adalah waktu yang dibutuhkan Bumi untuk melakukan satu putaran penuh pada porosnya relatif terhadap titik balik musim semi atau bintang-bintang jauh, bukan Matahari.' },
    { type: 'title', text: 'Hari Matahari vs. Hari Sideris', level: 3 },
    { type: 'paragraph', html: 'Hari matahari mengukur waktu antara transit berurutan Matahari melintasi meridian lokal. Karena Bumi menempuh sekitar 1/365 dari orbitnya mengelilingi Matahari setiap hari, Bumi harus berputar sedikit lebih dari 360 derajat untuk menyelaraskan kembali dengan Matahari. Hari sideris adalah rotasi 360 derajat sejati relatif terhadap bintang-bintang, membuatnya 3 menit 56 detik lebih pendek.' },
    { type: 'title', text: 'Mengapa Astronom dan Pembuat Jam Peduli', level: 3 },
    { type: 'paragraph', html: 'Bagi para astronom, sebuah bintang selalu berada di posisi yang sama di langit pada Waktu Sideris yang sama. Untuk melacak bintang, dudukan teleskop harus berputar tepat satu kali per hari sideris. Merek jam tangan kelas atas (seperti Patek Philippe, Vacheron Constantin, dan IWC) menciptakan jam tangan astronomis ultra-rumit dengan roda gigi sideris untuk melacak LST langsung di pergelangan tangan.' },
    { type: 'title', text: 'Tabel Referensi Drift Bintang vs. Matahari', level: 3 },
    {
      type: 'table', headers: ['Hari Berlalu', 'Waktu Sideris Lebih Cepat', 'Derajat Pergeseran Rotasi', 'Drift Rasi Bintang'], rows: [
        ['1 Hari', '3m 56d', '0,986°', 'Sedikit bergeser ke barat'],
        ['15 Hari', '59m 0d', '14,79°', 'Setengah geseran zodiak'],
        ['30 Hari', '1j 58m', '29,58°', 'Satu geseran konstelasi zodiak penuh'],
        ['90 Hari', '5j 54m', '88,74°', 'Satu geseran musim penuh'],
        ['180 Hari', '11j 48m', '177,48°', 'Rasi bintang berlawanan terlihat di tengah malam'],
        ['365 Hari', '24j 0m', '360,00°', 'Siklus lengkap, penyelarasan bintang kembali'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Dihitung dari J2000 Epoch', icon: 'mdi:creation-outline', badge: 'KOMPUTASI', html: 'Waktu Sideris Lokal dihitung dengan mengonversi waktu UTC ke Tanggal Julian (hari sejak -4712), menemukan Greenwich Mean Sidereal Time, dan menerapkan bujur Anda (15 derajat per jam). Alat kami menggunakan model linier IAU J2000 presisi tinggi untuk pelacakan real-time.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
