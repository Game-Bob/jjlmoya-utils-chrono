import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Apa itu tourbillon?',
    answer: 'Tourbillon adalah sangkar berputar yang berisi escapement (roda keseimbangan, garpu palet, dan roda escapement) dari jam tangan mekanis. Ia berputar terus menerus — biasanya sekali per menit — untuk merata-ratakan kesalahan posisi yang disebabkan oleh gravitasi, meningkatkan akurasi.',
  },
  {
    question: 'Apa perbedaan antara tourbillon klasik dan terbang?',
    answer: 'Tourbillon klasik didukung oleh jembatan atas dan bawah, sementara tourbillon terbang adalah kantilever dari bawah tanpa dukungan atas yang terlihat. Tourbillon terbang menawarkan pandangan tanpa halangan dari escapement yang berputar dan dianggap lebih menuntut secara estetis untuk dibangun.',
  },
  {
    question: 'Apakah tourbillon benar-benar meningkatkan akurasi?',
    answer: 'Dalam jam tangan modern, manfaat akurasinya minimal karena kesalahan posisi sudah dikompensasi dengan baik. Namun, dalam jam saku (yang untuknya Breguet menemukan tourbillon pada 1801), rotasi konstan menghilangkan perbedaan laju antara posisi vertikal. Saat ini, tourbillon terutama merupakan demonstrasi dari artistry horologi tinggi.',
  },
];

const howTo = [
  {
    name: 'Ubah tipe tourbillon',
    text: 'Beralih antara tourbillon Klasik dan Terbang untuk melihat perbedaan struktural. Tourbillon terbang tidak memiliki jembatan atas, mengungkapkan sangkar penuh.',
  },
  {
    name: 'Sesuaikan kecepatan detak',
    text: 'Coba kecepatan detak yang berbeda (18k, 28.8k, 36k VPH) untuk melihat bagaimana kecepatan roda keseimbangan dan rotasi roda escapement berubah.',
  },
  {
    name: 'Kontrol kecepatan',
    text: 'Gunakan kontrol kecepatan untuk memperlambat dan mengamati tarian rumit escapement, atau percepat untuk melihat siklus rotasi sangkar penuh.',
  },
];

const title = 'Tourbillon: Seni Escapement Berputar';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualisator',
  title,
  description: 'Alami seni tourbillon yang memukau — sebuah sangkar berputar yang menampung escapement. Saksikan roda keseimbangan berosilasi, pegas bernapas, dan sangkar berputar dalam balet mekanis yang elegan.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Tipe',
    typeClassic: 'Klasik',
    typeFlying: 'Terbang',
    speedLabel: 'Kecepatan',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Dijeda',
    beatRateLabel: 'Kecepatan Detak',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Sangkar',
    showLabelsLabel: 'Label',
    step1: 'Beralih antara tourbillon Klasik dan Terbang untuk membandingkan arsitektur mereka.',
    step2: 'Sesuaikan kecepatan detak untuk melihat bagaimana ia mempengaruhi ritme escapement.',
    step3: 'Gunakan kontrol kecepatan untuk mengamati tarian mekanis yang presisi pada kecepatan apa pun.',
    tipTitle: 'Tip',
    tipContent: 'Breguet menemukan tourbillon pada 1801. Kata "tourbillon" berarti "angin puyuh" dalam bahasa Prancis, menggambarkan penampilan sangkar berputar saat bergerak.',
    balanceLabel: 'Keseimbangan',
    escapeLabel: 'Escapement',
    palletLabel: 'Palet',
    cageLabel: 'Sangkar',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Seni Escapement Animasi', level: 2 },
    { type: 'paragraph', html: '<strong>Tourbillon</strong> adalah salah satu komplikasi paling memikat dalam haute horlogerie. Visualisator interaktif ini menghidupkan escapement berputar dengan rendering animasi detail dari roda keseimbangan, pegas, garpu palet, roda escapement, dan sangkar berputar yang ikonik. Jelajahi puisi mekanis dari mahakarya Breguet.' },
    { type: 'title', text: 'Bagaimana tourbillon bekerja', level: 3 },
    { type: 'paragraph', html: 'Sebuah tourbillon menampung seluruh escapement — <strong>roda keseimbangan, pegas, garpu palet, dan roda escapement</strong> — di dalam sangkar berputar. Sangkar biasanya menyelesaikan satu rotasi per menit, terus-menerus mengubah posisi escapement relatif terhadap gravitasi. Ini merata-ratakan kesalahan waktu posisional, sebuah konsep yang revolusioner ketika Abraham-Louis Breguet mempatenkannya pada 1801. <strong>Roda keseimbangan</strong> berosilasi pada kecepatan detak jam (biasanya 4 Hz / 28.800 vph), sementara <strong>roda escapement</strong> maju satu gigi per detak, menciptakan gerakan tik yang khas.' },
    { type: 'title', text: 'Tourbillon Klasik vs Terbang', level: 3 },
    {
      type: 'table', headers: ['Fitur', 'Tourbillon Klasik', 'Tourbillon Terbang'], rows: [
        ['Dukungan atas', 'Jembatan terlihat', 'Tidak ada (kantilever)'],
        ['Visibilitas', 'Sebagian (jembatan terlihat)', 'Penuh (tanpa halangan)'],
        ['Kesulitan', 'Tinggi', 'Sangat tinggi'],
        ['Diciptakan', '1801 (Breguet)', '1920-an (Alfred Helwig)'],
        ['Umum di', 'Merek tradisional', 'Independen modern'],
      ]
    },
    { type: 'title', text: 'Perbandingan Kecepatan Detak', level: 3 },
    {
      type: 'table', headers: ['Kecepatan (vph)', 'Frekuensi', 'Roda Escapement rpm', 'Detak/dtk', 'Penggunaan Khas'], rows: [
        ['18.000', '2,5 Hz', '20 rpm', '5', 'Jam saku vintage'],
        ['28.800', '4 Hz', '32 rpm', '8', 'Standar modern (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 rpm', '10', 'Frekuensi tinggi (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Seni Mekanis dalam Gerakan', icon: 'mdi:rotate-orbit', badge: 'HOROLOGI', html: 'Visualisator ini adalah interpretasi artistik dari escapement tourbillon. Rotasi sangkar, osilasi keseimbangan, napas pegas, goyangan palet, dan langkah roda escapement disinkronkan sesuai dengan hubungan mekanis nyata. Gunakan kontrol untuk menjelajahi mahakarya teknik mikromekanis ini.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
