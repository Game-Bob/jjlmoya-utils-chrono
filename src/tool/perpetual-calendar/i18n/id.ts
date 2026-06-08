import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Apa itu kalender abadi pada jam tangan?',
    answer: 'Kalender abadi adalah komplikasi jam tangan mekanis yang secara otomatis menampilkan tanggal, hari, bulan, dan fase bulan yang benar, dengan memperhitungkan bulan dengan panjang berbeda dan tahun kabisat. Ia diprogram untuk akurat hingga tahun 2100 (tahun abad berikutnya yang tidak habis dibagi 400).',
  },
  {
    question: 'Bagaimana kalender abadi mengetahui tahun kabisat?',
    answer: 'Program mekanis menggunakan roda gigi 48 bulan (4 tahun) dengan kam yang dirancang khusus yang memperhitungkan 29 Februari. Mekanismenya tahu bahwa tahun yang habis dibagi 100 bukanlah tahun kabisat kecuali juga habis dibagi 400. Kebanyakan kalender abadi akurat hingga 2100, saat koreksi satu hari akan diperlukan.',
  },
  {
    question: 'Apa perbedaan antara kalender abadi dan kalender tahunan?',
    answer: 'Kalender tahunan memerlukan koreksi manual setahun sekali (akhir Februari), sedangkan kalender abadi secara otomatis menangani tahun kabisat dan terus berjalan benar selama puluhan tahun. Kalender abadi secara mekanis jauh lebih kompleks.',
  },
];

const howTo = [
  {
    name: 'Majuukan tanggal',
    text: 'Gunakan tombol T (tanggal), B (bulan), dan T (tahun) untuk memajukan kalender. Amati jarum tanggal bergerak dan jendela bulan berubah.',
  },
  {
    name: 'Amati transisi tahun kabisat',
    text: 'Maju melalui Februari tahun kabisat (mis. 2024) untuk melihat lompatan dari 29 ke 1 Maret. Coba tahun non-kabisat untuk melihat lompatan dari 28 ke 1 Maret.',
  },
  {
    name: 'Gunakan putar otomatis',
    text: 'Tekan play untuk memajukan kalender secara otomatis. Ini mengungkapkan siklus lengkap panjang bulan dan progresi fase bulan.',
  },
];

const title = 'Simulator Kalender Abadi: Komplikasi Jam Tangan Interaktif';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'kalender-abadi',
  title,
  description: 'Jelajahi kejeniusan mekanis komplikasi kalender abadi. Visualisasikan tanggal, hari, bulan, siklus tahun kabisat, dan fase bulan dengan dial animasi.',
  ui: {
    title: 'Simulator Kalender Abadi',
    dateLabel: 'Tanggal',
    dayLabel: 'Hari',
    monthLabel: 'Bulan',
    yearLabel: 'Tahun',
    leapYearLabel: 'Kabisat',
    moonPhaseLabel: 'Fase Bulan',
    weekdayLabel: 'Hari',
    advanceDay: 'Maju Hari',
    advanceMonth: 'Maju Bulan',
    advanceYear: 'Maju Tahun',
    autoPlay: 'Otomatis',
    resetBtn: 'Hari Ini',
    dayNames: 'Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu',
    monthNames: 'Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember',
    tipTitle: 'Tip',
    tipContent: 'Kebanyakan jam tangan kalender abadi menggunakan roda program 48 bulan dengan lekukan panjang variabel. Februari memiliki lekukan terpendek (28 hari di tahun biasa, 29 di tahun kabisat), sementara bulan 30 dan 31 hari memiliki lekukan yang semakin panjang.',
    step1: 'Maju hari demi hari melewati Februari untuk melihat bagaimana mekanisme menangani transisi akhir bulan.',
    step2: 'Amati indikator fase bulan berkembang melalui siklus 29,5 harinya.',
    step3: 'Bandingkan transisi Februari antara tahun kabisat dan biasa untuk memahami siklus 4 tahun.',
  },
  seo: [
    { type: 'title', text: 'Simulator Kalender Abadi: Komplikasi Interaktif', level: 2 },
    { type: 'paragraph', html: '<strong>Kalender abadi</strong> adalah salah satu komplikasi paling prestisius dalam haute horlogerie. Simulator interaktif ini memvisualisasikan bagaimana kalender abadi mekanis melacak tanggal, hari, bulan, tahun kabisat, dan fase bulan - tanpa koreksi manual selama puluhan tahun. Jelajahi program roda gigi 48 bulan, lihat bagaimana transisi Februari bekerja, dan pahami logika kalender Gregorian yang tertanam dalam mahakarya mikromekanik ini.' },
    { type: 'title', text: 'Cara kerja kalender abadi', level: 3 },
    { type: 'paragraph', html: 'Kalender abadi mekanis menggunakan <strong>roda program</strong> dengan lekukan kedalaman berbeda yang mewakili bulan dengan panjang berbeda. Lengan sensor jatuh ke setiap lekukan; lekukan yang lebih dalam menandakan bulan pendek (28-29 hari), memicu mekanisme untuk melompat ke tanggal 1 bulan berikutnya setelah jumlah hari yang benar. <strong>Roda gigi 48 bulan</strong> menangani siklus 4 tahun kabisat, dengan lekukan tambahan untuk 29 Februari. Program tahu bahwa tahun abad (mis. 2100) melewatkan tahun kabisat kecuali habis dibagi 400.' },
    { type: 'title', text: 'Perbandingan: Kalender Abadi vs Tahunan', level: 3 },
    {
      type: 'table', headers: ['Fitur', 'Kalender Tahunan', 'Kalender Abadi'], rows: [
        ['Perlu penyesuaian', 'Setahun sekali (1 Mar)', 'Seabad sekali (2100)'],
        ['Penanganan kabisat', 'Manual', 'Otomatis (kam 4 tahun)'],
        ['Pengenalan bulan', '30 vs 31 hari', 'Penuh 28/29/30/31'],
        ['Kompleksitas', 'Sedang (~50 bagian)', 'Sangat tinggi (~200+ bagian)'],
        ['Kisaran harga', '€3.000-15.000', '€20.000-500.000+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Simulator Kalender Interaktif', icon: 'mdi:calendar-month', badge: 'HOROLOGI', html: 'Alat ini mensimulasikan mekanisme kalender dari jam tangan kalender abadi. Dial animasi menunjukkan jarum tanggal, jendela bulan, subdial hari, fase bulan, dan indikator tahun kabisat. Gunakan kontrol untuk maju melalui hari, bulan, atau tahun dan amati logika mekanis dalam aksi.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
