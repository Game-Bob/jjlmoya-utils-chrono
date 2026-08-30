import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'visualisator-fase-bulan',
  title: 'Moon Phase Visualizer Kalender Lunar & Alat Komplikasi Arloji',
  description: 'Visualisasikan fase bulan saat ini, iluminasi, usia bulan, serta bulan purnama dan bulan baru mendatang. Sempurna untuk menyetel komplikasi fase bulan arloji Anda.',
  ui: {
    title: 'Visualisator Fase Bulan',
    selectDate: 'Pilih Tanggal',
    today: 'Hari Ini',
    moonPhase: 'Fase Bulan',
    illumination: 'Iluminasi',
    moonAge: 'Usia Bulan',
    daysUntilFull: 'Hari Menuju Bulan Purnama',
    daysUntilNew: 'Hari Menuju Bulan Baru',
    newMoon: 'Bulan Baru',
    waxingCrescent: 'Sabit Muda',
    firstQuarter: 'Kuartal Pertama',
    waxingGibbous: 'Cembung Muda',
    fullMoon: 'Bulan Purnama',
    waningGibbous: 'Cembung Tua',
    lastQuarter: 'Kuartal Terakhir',
    waningCrescent: 'Sabit Tua',
    nextFullMoon: 'Bulan Purnama Berikutnya',
    nextNewMoon: 'Bulan Baru Berikutnya',
    tipTitle: 'Tips',
    tipContent: 'Untuk menyetel arloji fase bulan, cari tahu fase bulan hari ini menggunakan alat ini, lalu putar mahkota hingga piringan bulan sesuai. Sebagian besar fase bulan mekanis akurat dalam satu hari setiap 2 tahun.',
    days: 'Kemajuan Siklus',
    day: 'hari',
  },
  seo: [
    { type: 'title', text: 'Moon Phase Visualizer-Alat Fase Bulan & Panduan Setting Arloji', level: 2 },
    { type: 'paragraph', html: 'Moon Phase Visualizer menampilkan <strong>fase bulan terkini</strong> dengan rendering realistis. Lihat <strong>persentase iluminasi, usia bulan, hari menuju bulan purnama berikutnya, dan bulan baru berikutnya</strong>. Dirancang bagi penggemar arloji yang perlu menyetel komplikasi fase bulan secara akurat-juga berfungsi sebagai kalender lunar umum untuk tanggal kapan pun, masa lalu maupun masa depan.' },
    { type: 'title', text: 'Glosarium Fase Bulan', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Bulan Baru', definition: 'Bulan berada di antara Bumi dan matahari. Sisi yang diterangi menghadap menjauh dari kita. Iluminasi 0%. Awal siklus lunar.' },
        { term: 'Sabit Muda', definition: 'Iluminasi 1-49%. Sabit tipis muncul di sisi kanan (Belahan Bumi Utara). Bulan bergerak menuju kuartal pertama.' },
        { term: 'Kuartal Pertama', definition: 'Iluminasi 50%. Setengah permukaan yang terlihat tersinari. Bulan telah menyelesaikan seperempat siklusnya.' },
        { term: 'Cembung Muda', definition: 'Iluminasi 51-99%. Lebih dari setengahnya tersinari. Bulan sedang menuju purnama.' },
        { term: 'Bulan Purnama', definition: 'Iluminasi 100%. Seluruh permukaan yang terlihat tersinari. Puncak siklus lunar.' },
        { term: 'Cembung Tua', definition: 'Iluminasi 99-51%. Area yang tersinari mulai menyusut dari sisi kanan.' },
        { term: 'Kuartal Terakhir', definition: 'Iluminasi 50%. Setengah kiri tersinari. Tiga perempat siklus selesai.' },
        { term: 'Sabit Tua', definition: 'Iluminasi 49-1%. Sabit tipis di sisi kiri sebelum siklus kembali ke bulan baru.' },
      ]
    },
    { type: 'title', text: 'Cara Menyetel Arloji Fase Bulan', level: 3 },
    {
      type: 'list', items: [
        'Gunakan alat ini untuk mencari tahu fase bulan hari ini. Catat nama fase dan tampilan visualnya.',
        'Pada arloji Anda, tarik mahkota ke posisi setelan fase bulan (biasanya posisi 2 atau 3).',
        'Putar mahkota hingga piringan bulan menunjukkan fase yang sama dengan alat ini. Indikator bulan purnama biasanya di tengah atas piringan.',
        'Hindari menyetel fase bulan antara jam 9 malam dan 3 pagi saat mekanisme penggantian tanggal sedang aktif dan dapat rusak.',
        'Sebagian besar arloji fase bulan mekanis menggunakan roda gigi 59-gigi yang mendekati dua siklus lunar (59 hari). Artinya, mereka meleset sekitar satu hari setiap 2 tahun.',
        'Untuk presisi tinggi, beberapa arloji (Patek Philippe, A. Lange & Söhne) menggunakan roda gigi yang akurat dalam satu hari setiap 100+ tahun.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Jangan Pernah Setel Saat Penggantian Tanggal', icon: 'mdi:alert', html: 'Jangan menyetel fase bulan (atau tanggal) antara sekitar <strong>jam 9 malam dan 3 pagi</strong>. Selama periode ini, mekanisme penggantian tanggal arloji sedang terhubung secara fisik dengan roda tanggal. Memaksa mahkota dapat merusak gigi roda. Jika harus menyetel selama periode ini, putar jarum jam melewati jam 3 pagi terlebih dahulu, lalu setel fase bulan.' },
    { type: 'title', text: 'Fase Bulan Mekanis vs. Akurasi Tinggi', level: 3 },
    {
      type: 'table', headers: ['Jenis', 'Roda Gigi', 'Akumulasi Galat', 'Penyimpangan Satu Hari Setelah', 'Contoh Arloji'], rows: [
        ['Standar / Pemula', '59 gigi', '~1 hari setiap 2 tahun', '~2,5 tahun', 'Seiko, Orient, Hamilton, Tissot'],
        ['Menengah', '135 gigi', '~1 hari setiap 10 tahun', '~10 tahun', 'Omega, Tudor, IWC, Breitling'],
        ['Akurasi Tinggi', 'Rangkaian gigi', '~1 hari per 100+ tahun', '100+ tahun', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Membaca Piringan Bulan', html: 'Pada sebagian besar arloji fase bulan, piringan bulan menampilkan <strong>dua bulan</strong> yang saling berseberangan. Setiap bulan purnama sejajar dengan bukaan tengah atas. Setelah satu siklus penuh (29,5 hari), bulan kedua mengambil tempatnya. Inilah sebabnya roda gigi 59-gigi berfungsi: ia menyelesaikan satu putaran penuh dalam 59 hari-tepatnya dua siklus lunar.' },
    {
      type: 'summary', title: 'Referensi Cepat', items: [
        'Siklus lunar (sinodik) tepat 29,53058867 hari. Alat ini menggunakan nilai tersebut untuk akurasi maksimal.',
        'Delapan fase berulang dalam siklus abadi: baru → sabit muda → kuartal pertama → cembung muda → purnama → cembung tua → kuartal terakhir → sabit tua.',
        'Untuk menyetel arloji fase bulan: cari fase hari ini di sini, lalu cocokkan di piringan arloji Anda.',
        'Jangan pernah memaksa mahkota antara jam 9 malam dan 3 pagi. Putar waktu melewati jam 3 pagi terlebih dahulu.',
        'Fase bulan standar 59-gigi meleset sekitar satu hari setiap 2,5 tahun. Koreksi memerlukan pemajuan piringan satu klik.',
      ]
    },
  ],
  faq: [
    {
      question: 'Bagaimana cara menyetel fase bulan di arloji saya?',
      answer: 'Cari tahu fase bulan hari ini menggunakan alat ini. Putar mahkota (biasanya posisi 2) hingga piringan bulan menunjukkan fase yang sesuai. Hindari menyetel antara jam 9 malam dan 3 pagi saat mekanisme tanggal aktif.',
    },
    {
      question: 'Seberapa akurat arloji fase bulan mekanis?',
      answer: 'Sebagian besar menggunakan roda gigi 59-gigi yang akurat sekitar satu hari setiap 2 tahun. Arloji kelas atas seperti Patek Philippe dan A. Lange & Söhne mencapai akurasi dalam satu hari setiap 100+ tahun.',
    },
    {
      question: 'Apa perbedaan antara bulan sinodik dan sideris?',
      answer: 'Bulan sideris (27,3 hari) adalah orbit bulan relatif terhadap bintang. Bulan sinodik (29,53 hari) adalah waktu antara fase yang identik dan inilah yang dilacak oleh arloji fase bulan.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih tanggal',
      text: 'Gunakan pemilih tanggal untuk memilih tanggal apa pun, masa lalu atau masa depan, dan lihat fase bulannya.',
    },
    {
      name: 'Baca data fase',
      text: 'Kartu menampilkan nama fase, persentase iluminasi, usia bulan, dan kemajuan siklus.',
    },
    {
      name: 'Temukan acara mendatang',
      text: 'Tanggal bulan purnama dan bulan baru berikutnya ditampilkan secara otomatis.',
    },
    {
      name: 'Setel arloji Anda',
      text: 'Gunakan fase yang ditampilkan untuk menyetel komplikasi fase bulan arloji Anda secara akurat.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bagaimana cara menyetel fase bulan di arloji saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cari tahu fase bulan hari ini menggunakan alat ini. Putar mahkota hingga piringan bulan menunjukkan fase yang sesuai. Hindari menyetel antara jam 9 malam dan 3 pagi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Seberapa akurat arloji fase bulan mekanis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sebagian besar menggunakan roda gigi 59-gigi yang akurat sekitar satu hari setiap 2 tahun. Arloji kelas atas mencapai akurasi dalam satu hari setiap 100+ tahun.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa perbedaan antara bulan sinodik dan sideris?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Bulan sideris (27,3 hari) adalah orbit bulan relatif terhadap bintang. Bulan sinodik (29,53 hari) adalah waktu antara fase yang identik dan inilah yang dilacak oleh arloji fase bulan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara memvisualisasikan fase bulan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih tanggal',
          'text': 'Gunakan pemilih tanggal untuk memilih tanggal dan lihat fase bulannya.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca data fase',
          'text': 'Kartu menampilkan nama fase, iluminasi, usia bulan, dan kemajuan siklus.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Setel arloji Anda',
          'text': 'Gunakan fase yang ditampilkan untuk menyetel komplikasi fase bulan arloji Anda.',
        },
      ],
    },
  ],
};
