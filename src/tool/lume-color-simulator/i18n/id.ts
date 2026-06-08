import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'simulator-warna-lume',
  title: 'Lume Color Simulator Visualisator Cahaya Arloji',
  description: 'Visualisasikan berbagai warna lume secara real-time. Bandingkan C1, C3, BGW9, LumiNova, dan lainnya di berbagai tingkat kecerahan lingkungan.',
  ui: {
    title: 'Simulator Warna Lume',
    lumeType: 'Jenis Lume',
    brightness: 'Kecerahan Lingkungan',
    dark: 'Gelap',
    light: 'Terang',
    color: 'Warna',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Jenis',
    description: 'Deskripsi',
    c1Name: 'C1',
    c1Desc: 'Hijau (klasik)',
    c3Name: 'C3',
    c3Desc: 'Super Hijau',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Biru Es',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Putih Hangat',
    vintageName: 'Vintage',
    vintageDesc: 'Radium Tua',
    orangeName: 'Orange',
    orangeDesc: 'Orange Penyelam',
    blueName: 'Biru',
    blueDesc: 'Biru Tua',
    greenName: 'Hijau',
    greenDesc: 'Hijau Neon',
    tipTitle: 'Tips',
    tipContent: 'Kecerahan lume tergantung pada kualitas pigmen dan seberapa banyak cahaya yang diserapnya. BGW9 bersinar biru-putih dan yang paling terang, sedangkan lume vintage memiliki cahaya hangat yang redup.',
  },
  seo: [
    { type: 'title', text: 'Simulator Warna Lume Arloji-Visualisator Cahaya Real-Time', level: 2 },
    { type: 'paragraph', html: 'Lume adalah salah satu pilihan paling personal dalam koleksi arloji. Apakah Anda lebih suka cahaya hijau klasik dari <strong>C1 Super-LumiNova</strong> atau biru es dari <strong>BGW9</strong>? Simulator ini menunjukkan bagaimana setiap jenis lume tampak di berbagai tingkat kecerahan-dari siang bolong hingga gelap gulita-lengkap dengan <strong>nilai HEX dan RGB</strong> yang akurat untuk setiap corak.' },
    { type: 'title', text: 'Perbandingan Jenis Super-LumiNova', level: 3 },
    {
      type: 'table', headers: ['Jenis', 'Warna Siang', 'Warna Cahaya', 'Kecerahan', 'Terbaik Untuk'], rows: [
        ['C1', 'Hijau muda', 'Hijau', 'Sedang', 'Arloji dress, estetika asli'],
        ['C3', 'Kuning-hijau', 'Hijau terang', 'Tertinggi', 'Arloji selam, arloji alat'],
        ['BGW9', 'Putih pudar', 'Biru es', 'Tinggi', 'Arloji olahraga modern, tampilan bersih'],
        ['LumiNova', 'Krem hangat', 'Putih hangat', 'Rendah-sedang', 'Lume ramah anggaran'],
        ['Vintage', 'Krem / cokelat', 'Hangat redup', 'Rendah', 'Arloji bergaya heritage'],
        ['Orange', 'Orange', 'Orange', 'Sedang', 'Aksen penyelam, selam retro'],
        ['Biru', 'Biru muda', 'Biru', 'Sedang', 'Dial desainer, arloji fashion'],
        ['Hijau', 'Hijau terang', 'Hijau', 'Tinggi', 'Arloji bergaya militer'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9-Mana yang Harus Dipilih?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Hijau Klasik', icon: 'mdi:lightbulb-on', description: 'Formulasi Super-LumiNova asli. Bersinar hijau dengan kecerahan sedang. Pilihan klasik yang aman dan cocok dengan gaya arloji apa pun.', points: ['Kecerahan sedang, visibilitas 4-6 jam', 'Cahaya hijau, nada hangat', 'Formulasi paling terjangkau', 'Umum di arloji kelas pemula'], highlight: false },
        { title: 'C3 Super Hijau', icon: 'mdi:lightning-bolt', description: 'Lume hijau paling terang yang tersedia. Digunakan di arloji selam profesional yang mengutamakan keterbacaan di bawah air. Cahaya maksimal dari pengisian minimal.', points: ['Kecerahan tertinggi, visibilitas 8-12 jam', 'Kuning-hijau di siang hari', 'Disukai Seiko, Citizen, Omega', 'Terbaik untuk keterbacaan minim cahaya'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Biru Es', icon: 'mdi:snowflake', description: 'Bersinar biru-putih, bukan hijau. Sedikit kurang terang dibanding C3 namun lebih disukai karena estetikanya yang bersih dan modern. Populer di arloji olahraga mewah.', points: ['Kecerahan tinggi, visibilitas 6-10 jam', 'Cahaya biru-putih, nada netral', 'Tampilan bersih dan modern di siang hari', 'Digunakan oleh Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Gaya Radium', icon: 'mdi:fire', description: 'Nada krem kecoklatan hangat yang meniru lume radium tahun 1960-an. Sengaja dibuat lebih redup demi keaslian estetika. Cahayanya hangat, halus, dan menua dengan indah.', points: ['Kecerahan rendah, visibilitas 2-4 jam', 'Krem hangat hingga amber redup', 'Tampilan tua tanpa radioaktivitas', 'Populer di reissue heritage'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Kecerahan Bukan Segalanya', icon: 'mdi:palette', html: 'Lume paling terang (C3) tidak selalu yang terbaik. <strong>BGW9</strong> mengorbankan sedikit perbedaan kecerahan demi tampilan yang lebih netral dan modern yang disukai banyak kolektor. <strong>Lume vintage</strong> mengutamakan estetika period-correct di atas performa. Pilih berdasarkan yang paling penting bagi Anda: <strong>cahaya maksimal, estetika modern, atau keaslian heritage.</strong>' },
    { type: 'title', text: 'Cara Kerja Lume: Ilmu di Balik Cahaya', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Pigmen fotoluminesen berbasis strontium aluminat. Menyerap sinar UV dan cahaya tampak lalu memancarkannya kembali sebagai cahaya. Tidak radioaktif dan aman. Dikembangkan oleh Nemoto & Co. pada tahun 1993.' },
        { term: 'Waktu Pengisian', definition: 'Durasi paparan cahaya yang diperlukan untuk menjenuhkan pigmen lume. Pengisian penuh membutuhkan 10-30 menit di bawah sinar matahari langsung atau UV. Semakin lama pengisian = semakin panjang dan terang cahayanya.' },
        { term: 'Durasi Cahaya', definition: 'Berapa lama lume tetap terlihat setelah diisi. Super-LumiNova berkualitas bersinar terlihat selama 6-12 jam. Periode paling terang adalah 30 menit pertama setelah pengisian.' },
        { term: 'Kelas Pigmen', definition: 'Kualitas kristal strontium aluminat. Pigmen kelas lebih tinggi (C3, BGW9) menggunakan kristal yang lebih besar dan seragam untuk cahaya yang lebih terang dan tahan lama. Kelas lebih rendah (LumiNova) menggunakan kristal lebih kecil dan lebih redup.' },
      ]
    },
    {
      type: 'summary', title: 'Panduan Cepat Pemilihan Lume', items: [
        'Untuk keterbacaan maksimal dalam gelap: pilih C3 (hijau paling terang) atau BGW9 (biru-putih paling terang).',
        'Untuk tampilan mewah modern: BGW9 adalah favorit terkini di antara merek arloji kelas atas.',
        'Untuk bangunan vintage/heritage: gunakan Vintage atau Orange untuk kehangatan period-correct.',
        'C1 adalah serba-bisa: kecerahan bagus, hijau klasik, terjangkau.',
        'Warna lume di siang hari sangat berbeda dari warna cahayanya-gunakan simulator untuk membandingkan keduanya.',
      ]
    },
  ],
  faq: [
    {
      question: 'Lume mana yang paling terang?',
      answer: 'C3 Super-LumiNova adalah formulasi hijau paling terang. BGW9 adalah biru-putih paling terang. Keduanya jauh lebih terang dibanding C1 atau LumiNova standar.',
    },
    {
      question: 'Apa itu lume BGW9?',
      answer: 'BGW9 adalah varian Super-LumiNova yang bersinar biru-putih, bukan hijau. Sedikit kurang terang dibanding C3 tetapi lebih disukai banyak orang karena tampilannya yang bersih dan modern.',
    },
    {
      question: 'Apakah lume vintage bersinar?',
      answer: 'Lume gaya vintage modern (krem/hangat) bersinar tetapi sengaja dibuat lebih redup untuk meniru radium tua. Konsekuensinya adalah keaslian estetika dibandingkan kecerahan maksimal.',
    },
    {
      question: 'Berapa lama lume bertahan?',
      answer: 'Setelah pengisian penuh di bawah cahaya terang, Super-LumiNova berkualitas bersinar terlihat selama 6-12 jam. Periode paling terang adalah 30 menit pertama.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih jenis lume',
      text: 'Pilih dari preset C1, C3, BGW9, LumiNova, Vintage, Orange, Biru, atau Hijau.',
    },
    {
      name: 'Sesuaikan kecerahan',
      text: 'Geser kontrol kecerahan lingkungan dari siang (kiri) ke malam (kanan) untuk melihat perilaku lume.',
    },
    {
      name: 'Baca spesifikasinya',
      text: 'Kartu informasi menampilkan nilai HEX dan RGB yang tepat dari warna saat ini.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Lume mana yang paling terang?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova adalah hijau paling terang. BGW9 adalah biru-putih paling terang.' },
        },
        {
          '@type': 'Question',
          'name': 'Apa itu lume BGW9?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 adalah varian Super-LumiNova yang bersinar biru-putih, bukan hijau.' },
        },
        {
          '@type': 'Question',
          'name': 'Apakah lume vintage bersinar?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Lume gaya vintage modern bersinar tetapi sengaja dibuat lebih redup untuk meniru radium tua.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara mensimulasikan warna lume',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih jenis lume',
          'text': 'Pilih dari C1, C3, BGW9, LumiNova, atau preset lainnya.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sesuaikan kecerahan',
          'text': 'Geser kecerahan dari siang ke malam untuk melihat perilaku lume.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca spesifikasinya',
          'text': 'Kartu informasi menampilkan nilai HEX dan RGB warna saat ini.',
        },
      ],
    },
  ],
};
