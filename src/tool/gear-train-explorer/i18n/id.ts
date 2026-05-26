import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Apa itu roda gigi pada jam tangan?',
    answer: 'Roda gigi adalah serangkaian gear yang saling bertautan yang mentransmisikan daya dari barre l mainspring ke escapement. Setiap pasangan gear memberikan rasio reduksi tertentu, memperlambat pelepasan energi mainspring yang cepat menjadi impuls yang terkontrol dan teratur.',
  },
  {
    question: 'Mengapa gerakan yang berbeda memiliki rasio gear yang berbeda?',
    answer: 'Rasio gear ditentukan oleh jumlah gigi pada setiap roda dan pinion. Gerakan dengan tingkat detak yang berbeda (mis., 28.800 vph vs 36.000 vph) memiliki kecepatan roda escapement dan konfigurasi gear yang berbeda untuk mempertahankan ketepatan waktu sambil mengakomodasi frekuensi roda keseimbangan.',
  },
  {
    question: 'Apa perbedaan antara roda dan pinion?',
    answer: 'Dalam horologi, "roda" adalah gear yang lebih besar dengan banyak gigi yang menggerakkan komponen berikutnya. "Pinion" adalah gear yang lebih kecil (biasanya 6-12 gigi) yang digerakkan. Bersama-sama, roda dan pinion membentuk pasangan gear yang mengubah kecepatan rotasi dan torsi.',
  },
];

const howTo = [
  {
    name: 'Pilih gerakan',
    text: 'Pilih antara gerakan standar (28.800 vph), frekuensi tinggi (36.000 vph El Primero), atau vintage (18.000 vph). Masing-masing memiliki rasio gear dan tingkat detak yang unik.',
  },
  {
    name: 'Amati roda gigi',
    text: 'Saksikan gear animasi berputar pada kecepatan proporsional. Barre l berputar lambat sementara roda escapement berputar cepat. Arahkan kursor ke gear atau kartu data untuk informasi detail.',
  },
  {
    name: 'Sesuaikan kecepatan',
    text: 'Gunakan kontrol kecepatan untuk memperlambat, mempercepat, atau menjeda animasi. Ini membantu memvisualisasikan bagaimana setiap gear berkontribusi pada rantai transmisi daya.',
  },
];

const title = 'Penjelajah Roda Gigi: Diagram Horologi Interaktif';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'penjelajahrodagigi',
  title,
  description: 'Jelajahi jantung mekanis jam tangan dengan visualisasi roda gigi animasi. Lihat barre l mainspring, roda tengah, roda ketiga, roda keempat, roda escapement, garpu palet, dan roda keseimbangan bergerak.',
  ui: {
    title: 'Penjelajah Roda Gigi',
    barrelLabel: 'Barre l',
    centerWheelLabel: 'Roda Tengah',
    thirdWheelLabel: 'Roda Ketiga',
    fourthWheelLabel: 'Roda Keempat',
    escapeWheelLabel: 'Roda Escapement',
    palletForkLabel: 'Garpu Palet',
    balanceWheelLabel: 'Roda Keseimbangan',
    rpmLabel: 'rpm',
    teethLabel: 'gigi',
    gearRatioLabel: 'Rasio',
    powerFlowLabel: 'Aliran Daya',
    movementLabel: 'Gerakan',
    speedLabel: 'Kecepatan',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Dijeda',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Pilih kaliber gerakan untuk melihat rasio gear dan tingkat detak yang unik.',
    step2: 'Arahkan kursor ke gear atau kartu data untuk menyorot posisinya dalam aliran daya.',
    step3: 'Sesuaikan kecepatan animasi untuk mempelajari bagaimana setiap roda mentransmisikan daya melalui roda gigi.',
    tipTitle: 'Tip',
    tipContent: 'Roda gigi mengurangi pelepasan energi mainspring yang cepat menjadi osilasi terkontrol. Barre l tipikal berputar sekali setiap 7-8 jam, sementara roda escapement berputar pada 32 rpm (pada 28.800 vph) — reduksi lebih dari 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Penjelajah Roda Gigi Interaktif', level: 2 },
    { type: 'paragraph', html: '<strong>Roda gigi</strong> adalah tulang punggung mekanis setiap jam tangan mekanis. Alat interaktif ini memvisualisasikan bagaimana daya mengalir dari barre l mainspring melalui roda tengah, roda ketiga, roda keempat, dan roda escapement ke garpu palet dan roda keseimbangan. Lihat setiap gear berputar pada kecepatan proporsionalnya dan pahami bagaimana rasio gear menentukan ketepatan waktu.' },
    { type: 'title', text: 'Bagaimana Roda Gigi Jam Tangan Bekerja', level: 3 },
    { type: 'paragraph', html: 'Roda gigi jam tangan terdiri dari serangkaian <strong>roda</strong> (gear besar) dan <strong>pinion</strong> (gear kecil) yang mentransmisikan daya sambil mengurangi kecepatan. <strong>Barre l</strong> menampung mainspring dan berputar lambat, menggerakkan <strong>roda tengah</strong> yang berputar sekali per jam (untuk jarum menit). <strong>Roda ketiga</strong> dan <strong>roda keempat</strong> (roda detik) semakin meningkatkan kecepatan rotasi. Akhirnya, <strong>roda escapement</strong> melepaskan daya dalam detak terkontrol ke <strong>garpu palet</strong>, yang secara bergantian mengunci dan membuka kunci roda escapement, mengirimkan impuls ke <strong>roda keseimbangan</strong>. Roda keseimbangan berosilasi pada frekuensi presisi — biasanya 4 Hz (28.800 getaran per jam) — mengatur laju jam.' },
    { type: 'title', text: 'Rasio Gear dan Transmisi Daya', level: 3 },
    {
      type: 'table', headers: ['Komponen', 'Gigi Khas', 'rpm (28.800 vph)', 'Rasio dari Sebelumnya'], rows: [
        ['Barre l', '72', '0,002 (1 rev / 8 j)', '-'],
        ['Roda Tengah', '60', '0,0167 (1 rev / j)', '~7,2:1'],
        ['Roda Ketiga', '50', '0,125 (1 rev / 8 mnt)', '~5:1'],
        ['Roda Keempat', '60', '1 (1 rev / mnt)', '6:1'],
        ['Roda Escapement', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Perbandingan Gerakan', level: 3 },
    {
      type: 'table', headers: ['Gerakan', 'Tingkat Detak', 'Frekuensi Keseimbangan', 'RPM Roda Escapement', 'Akurasi Khas'], rows: [
        ['Vintage (18.000 vph)', '18.000 bph', '2,5 Hz', '20 rpm', '±15-30 s/h'],
        ['Standar (28.800 vph)', '28.800 bph', '4 Hz', '32 rpm', '±5-15 s/h'],
        ['Frekuensi Tinggi (36.000 vph)', '36.000 bph', '5 Hz', '40 rpm', '±3-8 s/h'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Alat Pembelajaran Interaktif', icon: 'mdi:cog-clockwise', badge: 'HOROLOGI', html: 'Alat ini menggunakan rasio gear perkiraan yang mewakili gerakan escapement palet Swiss umum. Rasio aktual bervariasi menurut kaliber. Gunakan prasetel gerakan untuk membandingkan bagaimana tingkat detak yang berbeda memengaruhi dinamika roda gigi.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
