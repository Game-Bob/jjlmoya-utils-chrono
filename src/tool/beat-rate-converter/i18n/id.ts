import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'pengonversi-tingkat-denyut',
  title: 'Pengonversi Tingkat Denyut Arloji \u2014 VPH ke Hz & s/hari',
  description: 'Ubah getaran per jam (VPH) ke Hertz, ticks per detik, dan hitung dampak harian dari satu tick yang hilang. Bekerja dengan kaliber ETA, Sellita, Miyota, Seiko, Rolex, Omega, dan Zenith.',
  ui: {
    title: 'Pengonversi Tingkat Denyut',
    vphLabel: 'Gerakan',
    selectMovement: 'Pilih gerakan',
    customMovement: 'Kustom',
    customVph: 'Getaran per jam',
    resultsTitle: 'Perhitungan',
    frequency: 'Frekuensi',
    ticksPerSec: 'Ticks per detik',
    lostTickImpact: 'Jika kehilangan 1 tick per jam',
    lostTickExplainer: 'Satu tick yang terlewat per jam berarti ~3 detik hilang per hari pada 28.800 VPH. Tingkat denyut yang lebih rendah memperbesar dampak.',
    step1: 'Pilih gerakan arloji Anda atau masukkan VPH kustom.',
    step2: 'Baca frekuensi Hz, ticks per detik, dan dampak dari tick yang hilang.',
    tipTitle: 'Tips',
    tipContent: 'Tingkat denyut yang lebih tinggi (36.000 VPH) memberikan gerakan jarum yang lebih halus dan presisi yang lebih baik, tetapi juga lebih banyak keausan pada escapement.',
  },
  seo: [
    { type: 'title', text: 'Pengonversi Tingkat Denyut Arloji \u2014 VPH ke Hz & Detik per Hari', level: 2 },
    { type: 'paragraph', html: 'Setiap arloji mekanis berdetak pada tingkat tertentu \u2014 jumlah getaran yang dibuat roda keseimbangannya per jam. Angka tersebut menentukan seberapa halus gerakan jarum detik dan seberapa presisi arloji tersebut. Pengonversi ini menerjemahkan <strong>VPH ke Hz dan ticks per detik</strong>, dan menunjukkan dampak nyata dari satu tick yang hilang.' },
    { type: 'title', text: 'Apa Itu Tingkat Denyut?', level: 3 },
    { type: 'paragraph', html: 'Tingkat denyut, diukur dalam getaran per jam (vph), adalah frekuensi osilasi roda keseimbangan arloji. Tingkat yang umum adalah 28.800 VPH \u2014 itu 4 Hz, atau 8 ticks per detik. Tingkat denyut yang lebih tinggi seperti 36.000 VPH (5 Hz) menghasilkan gerakan yang lebih halus dan secara teoretis dapat meningkatkan akurasi dengan mengurangi efek kesalahan posisional.' },
    { type: 'title', text: 'Mengapa Tick yang Hilang Penting', level: 3 },
    { type: 'paragraph', html: 'Jika escapement arloji gagal memberikan satu tick karena gesekan, magnetisasi, atau keausan, tick yang hilang itu langsung berubah menjadi waktu yang hilang. Pada 28.800 VPH, satu tick yang terlewat per jam bertambah menjadi sekitar <strong>3 detik per hari</strong>. Pada 18.000 VPH, kesalahan yang sama memakan hampir 5 detik per hari. Alat ini membantu Anda memahami matematika di balik regulasi.' },
    { type: 'title', text: 'Tingkat Denyut Umum', level: 3 },
    { type: 'paragraph', html: 'Arloji saku vintage dan arloji otomatis awal sering berjalan pada 18.000 VPH (2,5 Hz). Banyak kaliber Seiko dan Miyota menggunakan 21.600 VPH (3 Hz). Standar modern adalah 28.800 VPH (4 Hz), digunakan oleh ETA, Sellita, Rolex, dan lainnya. Gerakan berdenyut tinggi seperti Zenith El Primero berjalan pada 36.000 VPH (5 Hz) untuk presisi yang lebih besar.' },
  ],
  faq: [
    {
      question: 'Bagaimana cara mengonversi VPH ke Hz?',
      answer: 'Bagilah VPH dengan 7.200. Arloji yang berdetak pada 28.800 VPH berjalan pada 4 Hz (28.800 \u00f7 7.200 = 4). Pembagian dengan 7.200 memperhitungkan bahwa satu osilasi lengkap mengandung dua getaran, dan ada 3.600 detik dalam satu jam.',
    },
    {
      question: 'Apa arti tingkat denyut yang lebih tinggi bagi akurasi?',
      answer: 'Tingkat denyut yang lebih tinggi umumnya memungkinkan presisi teoretis yang lebih besar karena roda keseimbangan kurang terpengaruh oleh gangguan posisional. Namun, mereka juga menciptakan lebih banyak gesekan dan keausan pada batu palet dan roda escapement, memerlukan pelumasan yang lebih baik dan servis yang lebih sering.',
    },
    {
      question: 'Bagaimana tick yang hilang memengaruhi akurasi harian?',
      answer: 'Satu tick yang terlewat per jam berarti 24 tick hilang per hari. Waktu yang hilang tergantung pada tingkat denyut Anda: bagi 86.400 dengan VPH Anda. Pada 28.800 VPH, itu 3 detik per hari. Pada 18.000 VPH, itu 4,8 detik per hari.',
    },
    {
      question: 'Bisakah arloji pulih dari tick yang hilang?',
      answer: 'Tidak. Setelah tick terlewatkan, waktu tersebut hilang secara permanen. Arloji tidak akan "mengejar ketertinggalan." Inilah mengapa kesehatan escapement \u2014 batu palet yang bersih, pelumasan yang tepat, dan kesalahan detak yang benar \u2014 secara langsung memengaruhi laju harian.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih kaliber Anda',
      text: 'Pilih gerakan arloji Anda dari menu dropdown. Setiap prasetel menyertakan VPH yang benar untuk kaliber tersebut.',
    },
    {
      name: 'Baca hasilnya',
      text: 'Kartu menunjukkan frekuensi Hz, ticks per detik, dan dampak harian dari satu tick yang hilang.',
    },
    {
      name: 'Coba VPH kustom',
      text: 'Pilih "Kustom" untuk memasukkan nilai VPH apa pun untuk gerakan vintage atau yang tidak biasa.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bagaimana cara mengonversi VPH ke Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bagilah VPH dengan 7.200. Arloji yang berdetak pada 28.800 VPH berjalan pada 4 Hz. Pembagian dengan 7.200 memperhitungkan satu osilasi mengandung dua getaran dan 3.600 detik per jam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa arti tingkat denyut yang lebih tinggi bagi akurasi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tingkat denyut yang lebih tinggi memungkinkan presisi teoretis yang lebih besar karena roda keseimbangan kurang terpengaruh oleh gangguan posisional. Namun, mereka juga menciptakan lebih banyak gesekan dan keausan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana tick yang hilang memengaruhi akurasi harian?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Satu tick yang terlewat per jam berarti 24 tick hilang per hari. Bagi 86.400 dengan VPH Anda untuk menemukan detik per hari yang hilang.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah arloji pulih dari tick yang hilang?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tidak. Setelah tick terlewatkan, waktu tersebut hilang secara permanen. Arloji tidak akan mengejar ketertinggalan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pengonversi Tingkat Denyut Arloji',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara mengonversi VPH ke Hz dan menghitung dampak tick yang hilang',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih kaliber Anda',
          'text': 'Pilih gerakan arloji Anda dari menu dropdown. Setiap prasetel menyertakan VPH yang benar untuk kaliber tersebut.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca hasilnya',
          'text': 'Kartu menunjukkan frekuensi Hz, ticks per detik, dan dampak harian dari satu tick yang hilang.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Coba VPH kustom',
          'text': 'Pilih Kustom untuk memasukkan nilai VPH apa pun untuk gerakan vintage atau yang tidak biasa.',
        },
      ],
    },
  ],
};
