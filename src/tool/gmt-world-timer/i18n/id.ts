import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Bagaimana cara mengetahui apakah sebuah jam adalah true GMT atau caller GMT?',
    answer: '<strong>True GMT</strong> (disebut juga "flyer" GMT) memungkinkan Anda mengubah jarum jam lokal secara independen - ideal untuk pelancong yang sering berganti zona waktu. <strong>Caller GMT</strong> menyesuaikan jarum GMT secara terpisah sementara jarum jam utama tetap diam, yang lebih murah untuk diproduksi. Cara membedakannya: tarik mahkota ke posisi pengaturan waktu dan putar. Jika jarum jam melompat dalam kenaikan satu jam tanpa berhenti, itu adalah true GMT. Jika jarum GMT yang bergerak, itu adalah caller. Rolex menggunakan kaliber true GMT (3285) di GMT-Master II, sementara banyak microbrand terjangkau menggunakan mesin caller seperti Seiko NH34.',
  },
  {
    question: 'Apa perbedaan antara jam GMT dan World Timer?',
    answer: 'Sebuah <strong>jam GMT</strong> biasanya melacak dua zona waktu - waktu lokal Anda dan referensi (biasanya UTC) - menggunakan jarum 24 jam dan bezel 24 jam. Sebuah <strong>World Timer</strong> menampilkan semua 24 zona waktu sekaligus: memiliki cincin kota di sekeliling dial dan piringan 24 jam yang berputar. World Timer seperti Patek Philippe 5230P atau JLC Geophysic Universal Time memungkinkan Anda membaca waktu di kota mana pun secara instan. GMT lebih sederhana dan lebih terjangkau; World Timer secara mekanis lebih kompleks dan biasanya lebih mahal. Alat ini bekerja seperti World Timer digital, memungkinkan Anda menambahkan kota sebanyak yang Anda butuhkan.',
  },
  {
    question: 'Zona waktu apa yang ditunjukkan jam saya ketika bertuliskan "GMT"?',
    answer: 'Ketika sebuah jam bertuliskan "GMT" di dial-nya, <strong>jarum GMT</strong> (biasanya jarum keempat dengan ujung panah berwarna) menunjuk ke waktu dalam format 24 jam. Sebagian besar pemilik mengatur jarum ini ke UTC (Waktu Universal Terkoordinasi) karena semua zona waktu didefinisikan sebagai offset dari UTC. Bezel 24 jam yang dapat diputar kemudian dapat disejajarkan untuk membaca zona waktu lainnya. Misalnya, jika jarum GMT menunjuk ke 14 (jam 2 siang) dan marka bezel Anda menyelaraskannya ke UTC+2, Anda sedang membaca Waktu Eropa Timur. Alat ini membantu Anda memvisualisasikan hubungan tersebut.',
  },
];

const howTo = [
  {
    name: 'Tambahkan kota apa pun ke dasbor Anda',
    text: 'Ketik nama kota atau zona waktu di bilah pencarian. Klik hasilnya untuk menambahkannya secara instan. Setiap kota muncul sebagai kartu jam langsung dengan waktu lokal saat ini.',
  },
  {
    name: 'Hapus kota saat tidak diperlukan lagi',
    text: 'Arahkan kursor ke kartu jam dan klik tombol × untuk menghapusnya. Pilihan Anda disimpan secara otomatis di browser - tutup dan kembali lagi nanti, dasbor Anda persis seperti yang Anda tinggalkan.',
  },
  {
    name: 'Gunakan sebagai referensi GMT untuk koleksi jam tangan Anda',
    text: 'Atur kota asal Anda dan tambahkan zona waktu yang Anda lacak dengan jam GMT Anda. Gunakan label offset langsung untuk memeriksa apakah penyelarasan bezel Anda sudah benar untuk setiap zona yang dilacak.',
  },
];

const title = 'Jam Dunia: Dasbor Zona Waktu Langsung';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'jam-dunia-gmt',
  title,
  description: 'Lacak beberapa zona waktu secara langsung. Tambahkan kota mana pun dan lihat waktu saat ini diperbarui setiap detik. Sempurna untuk penggemar jam dengan jam GMT atau World Timer.',
  ui: {
    title: 'Jam Dunia',
    searchPlaceholder: 'Cari kota atau zona waktu...',
    addLabel: 'Tambah',
    removeLabel: 'Hapus',
    noResults: 'Kota tidak ditemukan',
    yourZones: 'Zona Waktu Anda',
  },
  seo: [
    { type: 'title', text: 'Jam Dunia - Dasbor Zona Waktu Langsung untuk Penggemar Jam', level: 2 },
    { type: 'paragraph', html: 'Baik Anda memiliki <strong>GMT-Master II</strong>, <strong>World Timer</strong>, atau sekadar perlu melacak beberapa zona waktu untuk kerja atau perjalanan, dasbor langsung ini menunjukkan waktu saat ini di setiap kota yang Anda pedulikan - semua dalam sekali lihat. Tambahkan New York, London, Tokyo, atau kota mana pun, dan waktu diperbarui setiap detik. Zona Anda disimpan di browser sehingga Anda tidak perlu mengonfigurasi ulang.' },
    { type: 'title', text: 'Mengapa Penggemar Jam Membutuhkan Jam Dunia', level: 3 },
    { type: 'paragraph', html: 'Jika Anda mengoleksi <strong>jam GMT</strong>, Anda tahu kesulitannya: Anda menyetel bezel untuk melacak zona waktu kedua, tetapi offset berubah karena Waktu Musim Panas, atau Anda memiliki beberapa GMT dan ingin membandingkan bagaimana masing-masing melacak kota yang berbeda. Alat ini memecahkan masalah itu. Tambahkan kota yang dilacak jam Anda, dan langsung lihat offset serta waktu saat ini. Tidak perlu menghitung manual - cukup lihat kartu dan tahu persis ke mana jarum GMT Anda harus menunjuk.' },
    { type: 'title', text: 'GMT vs World Timer - Mana yang Sesuai dengan Gaya Anda?', level: 3 },
    { type: 'paragraph', html: 'Sebuah <strong>jam GMT</strong> (seperti Rolex GMT-Master II "Pepsi" atau Tudor Black Bay Pro) menggunakan jarum 24 jam dan bezel berputar untuk melacak dua zona waktu. Sebuah <strong>World Timer</strong> (seperti Nomos Zürich Weltzeit atau Omega Seamaster Worldtimer) menampilkan semua 24 zona sekaligus menggunakan cincin kota dan piringan 24 jam. Dasbor ini meniru World Timer: Anda dapat melihat semua kota sekaligus. Gunakan untuk memutuskan komplikasi mana yang cocok dengan gaya hidup Anda sebelum membeli.' },
    { type: 'title', text: 'Penggunaan Praktis di Luar Koleksi Jam', level: 3 },
    {
      type: 'list', items: [
        'Pekerja jarak jauh menjadwalkan lintas zona waktu tanpa kebingungan',
        'Pelancong sering memantau rumah dan tujuan secara bersamaan',
        'Trader melacak pembukaan pasar di New York, London, Tokyo, dan Sydney',
        'Siapa pun yang ingin tahu "sekarang jam berapa di..." tanpa mencari di Google',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Jam Dunia Langsung', icon: 'mdi:clock-time-eight', badge: 'WAKTU', html: 'Waktu diperbarui langsung setiap detik menggunakan basis data zona waktu bawaan browser Anda. Transisi Waktu Musim Panas ditangani secara otomatis. Tidak ada data yang dikirim ke server mana pun.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
