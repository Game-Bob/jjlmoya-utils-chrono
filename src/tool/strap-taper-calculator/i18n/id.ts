import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'kalkulator-taper-strap',
  title: 'Kalkulator Taper dan Proporsi Strap Jam Tangan',
  description: 'Hitung taper strap ideal untuk jam tangan Anda berdasarkan diameter case dan lebar lug. Temukan lebar buckle yang sempurna untuk tampilan yang seimbang.',
  ui: {
    title: 'Kalkulator Taper Strap',
    caseLabel: 'Ukuran Jam',
    caseInput: 'Diameter case',
    lugLabel: 'Lebar lug',
    lugInput: 'Lebar lug',
    taperLabel: 'Gaya Taper',
    straight: 'Lurus',
    classic: 'Klasik',
    aggressive: 'Agresif',
    customTaper: 'Kustom',
    buckleWidth: 'Lebar buckle',
    resultsTitle: 'Proporsi',
    lugWidth: 'Lebar lug',
    buckleWidthResult: 'Lebar buckle',
    taperAmount: 'Taper',
    taperRatio: 'Rasio',
    proportionScore: 'Proporsi',
    proportionExcellent: 'Sangat Baik',
    proportionGood: 'Baik',
    proportionFair: 'Cukup',
    proportionUnbalanced: 'Tidak Seimbang',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Catatan',
    noteContent: 'Taper klasik 4 mm (mis., dari 20 ke 16 mm) cocok untuk jam tangan dress. Jam tangan selam dan tool sering terlihat lebih baik dengan taper lurus atau 2 mm untuk kesan kokoh.',
    step1: 'Masukkan diameter case dan lebar lug.',
    step2: 'Pilih gaya taper atau atur lebar buckle kustom.',
    step3: 'Baca proporsi dan representasi visualnya.',
  },
  seo: [
    { type: 'title', text: 'Kalkulator Taper Strap - Proporsi, Lebar Buckle, dan Panduan Visual', level: 2 },
    { type: 'paragraph', html: 'Strap yang proporsional bisa membuat atau merusak tampilan jam tangan. Terlalu banyak taper pada jam selam membuatnya terlihat rapuh. Tanpa taper pada jam dress membuatnya terlihat kaku. Kalkulator ini membantu Anda menemukan <strong>rasio taper strap</strong> ideal berdasarkan diameter case dan lebar lug.' },
    { type: 'title', text: 'Apa Itu Taper Strap?', level: 3 },
    { type: 'paragraph', html: 'Taper strap adalah pengurangan lebar dari ujung lug ke ujung buckle. Jam dress klasik mungkin mengecil dari 20 mm di lug ke 16 mm di buckle - taper 4 mm. Jam selam mungkin tetap di 20 mm lurus untuk tampilan yang lebih kokoh.' },
    { type: 'title', text: 'Rasio Emas untuk Proporsi Strap', level: 3 },
    { type: 'paragraph', html: 'Penggemar jam tangan umumnya setuju bahwa lebar lug antara 45% dan 55% dari diameter case adalah yang terbaik. Untuk taper, lebar buckle yang 75% hingga 85% dari lebar lug menciptakan siluet yang seimbang dan elegan. Rasio di luar kisaran ini dapat membuat jam terlihat berat di atas atau terlalu rapuh.' },
    { type: 'title', text: 'Taper Berdasarkan Gaya Jam', level: 3 },
    { type: 'paragraph', html: 'Jam dress: taper 4 mm (20 ke 16 mm). Jam olahraga: taper 2 hingga 3 mm. Jam selam: taper 0 hingga 2 mm. Jam militer atau lapangan: taper lurus untuk tampilan kokoh. Jam pilot: taper minimal untuk mencocokkan estetika instrumen.' },
  ],
  faq: [
    {
      question: 'Apa taper strap yang ideal untuk jam dress?',
      answer: 'Taper 4 mm adalah pilihan klasik. Untuk lebar lug 20 mm, itu berarti buckle 16 mm. Ini menciptakan siluet elegan yang melengkapi tampilan jam dress yang rapi.',
    },
    {
      question: 'Haruskah jam selam memiliki strap yang dikecilkan?',
      answer: 'Sebagian besar jam selam terlihat terbaik dengan taper minimal atau tanpa taper. Strap lurus 20 mm dari ujung ke ujung memberikan kesan kokoh dan alat yang sesuai dengan sifat utilitarian jam selam.',
    },
    {
      question: 'Apa yang terjadi jika taper terlalu agresif?',
      answer: 'Taper yang agresif (6 mm atau lebih) dapat membuat kepala jam terlihat besar tidak proporsional dan berat di atas. Strap juga bisa terasa tipis di ujung buckle.',
    },
    {
      question: 'Bagaimana cara mengukur lebar lug?',
      answer: 'Ukur lebar bagian dalam antara lubang pegas pada case jam. Itu adalah lebar strap yang Anda butuhkan. Ukuran umum adalah 18 mm, 20 mm, dan 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Masukkan dimensi case dan lug',
      text: 'Masukkan diameter case dan lebar lug dalam milimeter.',
    },
    {
      name: 'Pilih gaya taper',
      text: 'Pilih Lurus, Klasik, Agresif, atau Kustom. Visual diperbarui secara instan.',
    },
    {
      name: 'Tinjau proporsi',
      text: 'Periksa rasio dan skor proporsi untuk melihat apakah pilihan strap Anda seimbang.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Apa taper strap yang ideal untuk jam dress?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Taper 4 mm adalah pilihan klasik. Untuk lebar lug 20 mm, itu berarti buckle 16 mm, menciptakan siluet elegan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Haruskah jam selam memiliki strap yang dikecilkan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sebagian besar jam selam terlihat terbaik dengan taper minimal atau tanpa taper. Strap lurus 20 mm memberikan kesan kokoh.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa yang terjadi jika taper terlalu agresif?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Taper yang agresif dapat membuat kepala jam terlihat besar tidak proporsional dan strap terasa tipis di ujung buckle.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana cara mengukur lebar lug?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ukur lebar bagian dalam antara lubang pegas pada case jam. Ukuran umum adalah 18 mm, 20 mm, dan 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkulator Taper Strap Jam Tangan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara menghitung taper strap jam tangan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Masukkan dimensi case dan lug',
          'text': 'Masukkan diameter case dan lebar lug dalam milimeter.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pilih gaya taper',
          'text': 'Pilih Lurus, Klasik, Agresif, atau Kustom.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tinjau proporsi',
          'text': 'Periksa rasio dan skor proporsi.',
        },
      ],
    },
  ],
};
