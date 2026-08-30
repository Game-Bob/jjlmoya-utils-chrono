import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'pencari-mainspring',
  title: 'Pencari Mainspring',
  description: 'Hitung dimensi mainspring dari ukuran barrel untuk mesin jam vintage.',
  ui: {
    title: 'Pencari Mainspring',
    barrelLabel: 'ID Barrel',
    arborLabel: 'OD Arbor',
    heightLabel: 'Tinggi Barrel',
    turnsLabel: 'Putaran',
    calculate: 'Hitung',
    resultThickness: 'Ketebalan',
    resultHeight: 'Tinggi',
    resultLength: 'Panjang',
    resultStrength: 'Kekuatan',
    strengthWeak: 'Ringan',
    strengthMedium: 'Sedang',
    strengthStrong: 'Kuat',
    commercial: 'Ukuran Komersial',
    unitLabel: 'Satuan',
    mm: 'mm',
    inch: 'in',
    step1: 'Ukur ID barrel, OD arbor, dan tinggi dalam dengan jangka sorong.',
    step2: 'Atur perkiraan jumlah putaran penggulungan (5-8 manual, 6-10 otomatis).',
    step3: 'Pilih mm/in untuk sistem satuan yang diinginkan.',
    tipTitle: 'Tips',
    tipContent: 'Selalu verifikasi dimensi yang dihitung dengan spesifikasi pabrikan. Bandingkan dengan katalog pemasok sebelum memesan.',
  },
  seo: [
    { type: 'title', text: 'Pencari Mainspring, Hitung Dimensi Pegas untuk Mesin Jam', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Ketebalan pegas tipikal' },
        { value: '5-10 putaran', label: 'Kisaran penggulungan standar' },
        { value: '150-450 mm', label: 'Panjang pegas umum' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Memulihkan mesin jam vintage sering dimulai dengan mengidentifikasi mainspring yang tepat. <strong>Pencari Mainspring</strong> membantu Anda menghitung dimensi teoretis mainspring berdasarkan geometri barrel. Dengan memasukkan diameter dalam barrel, diameter arbor, tinggi barrel, dan perkiraan jumlah putaran, alat ini menghitung ketebalan, tinggi, dan panjang pegas. Hasil juga ditampilkan sebagai perkiraan ukuran komersial dalam satuan metrik dan imperial, memudahkan Anda membandingkan dengan katalog pemasok.' },
    { type: 'title', text: 'Cara menghitung dimensi mainspring', level: 3 },
    { type: 'paragraph', html: 'Mainspring menempati ruang annular antara dinding barrel dan arbor. <strong>Ketebalan pegas</strong> diperkirakan sebagai <strong>(ID barrel - OD arbor) / (2 x putaran + 1.5)</strong>, di mana tambahan 1.5 memperhitungkan ujung pegas dan ruang yang ditempati pegas terhadap dirinya sendiri. <strong>Panjang pegas</strong> mengikuti <strong>L = pi x putaran x (ID barrel + OD arbor) / 2</strong>, yang memberikan panjang total pita jika dibentangkan datar. <strong>Tinggi pegas</strong> sama dengan tinggi dalam barrel dikurangi sedikit celah (biasanya 0.1 mm) untuk mencegah gesekan dengan tutup barrel.' },
    { type: 'title', text: 'Cara mengukur barrel untuk pemilihan mainspring', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Diameter Dalam Barrel', definition: 'Diameter bagian dalam drum barrel yang diukur dengan jangka sorong. Ini adalah lingkaran terbesar yang dapat ditempati mainspring. Kisaran tipikal: 8-30 mm.' },
        { term: 'Diameter Arbor', definition: 'Diameter arbor barrel pada titik terlebarnya di mana kumparan dalam mainspring terpasang. Arbor yang lebih kecil memungkinkan pegas yang lebih panjang untuk barrel yang sama.' },
        { term: 'Tinggi Barrel', definition: 'Tinggi bagian dalam drum barrel. Tinggi mainspring harus sedikit lebih kecil (0.05-0.15 mm) untuk memungkinkan rotasi bebas tanpa gesekan pada tutup.' },
        { term: 'Jumlah Putaran', definition: 'Jumlah putaran penggulungan penuh yang disediakan mesin jam. Kaliber manual biasanya menawarkan 5-8 putaran, otomatis 6-10 putaran.' },
      ],
    },
    { type: 'title', text: 'Kekuatan pegas dan artinya bagi mesin jam Anda', level: 3 },
    { type: 'paragraph', html: '<strong>Ketebalan pegas</strong> adalah faktor utama yang menentukan torsi yang disalurkan ke roda gigi. Pegas yang lebih tebal (lebih dari 0.14 mm) memberikan torsi tinggi yang cocok untuk mesin jam dengan komplikasi seperti kronograf atau mekanisme striking. Pegas sedang (0.10-0.14 mm) adalah standar untuk sebagian besar kaliber waktu saja dan tanggal. Pegas tipis (di bawah 0.10 mm) ditemukan pada jam tangan wanita kecil atau kaliber ultra-tipis. Selalu sesuaikan dengan spesifikasi pabrikan asli jika tersedia; pegas yang terlalu kuat dapat merusak arbor barrel atau poros roda gigi.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Menggunakan mainspring yang salah dapat merusak mesin jam Anda',
      html: 'Memasang pegas yang <strong>terlalu tebal</strong> meningkatkan gesekan dan torsi melebihi batas desain, berpotensi mengikis lubang arbor barrel, membengkokkan poros roda tengah, atau bahkan meretakkan barrel. Pegas yang <strong>terlalu tipis</strong> tidak akan memberikan amplitudo yang cukup, menyebabkan jam berjalan lambat atau berhenti sebelum mencapai cadangan daya penuh. Selalu bandingkan dimensi yang dihitung dengan katalog pemasok yang dikenal sebelum memesan.',
    },
    { type: 'title', text: 'Sistem ukuran mainspring komersial', level: 3 },
    { type: 'paragraph', html: 'Pemasok mainspring mengkatalogkan pegas berdasarkan <strong>panjang x tinggi x ketebalan</strong> dalam milimeter. Ukuran metrik umum mengikuti sistem General Resources atau GR. Sistem berbasis inci masih digunakan oleh beberapa pemasok Amerika dan Inggris. Alat ini menampilkan kedua sistem sehingga Anda dapat mencari katalog pemasok mana pun. Ketika ukuran persis yang dihitung tidak tersedia, pilih ukuran komersial terdekat yang cocok dengan tingginya tepat dan ketebalannya dalam 0.005 mm, lalu sesuaikan panjangnya dengan memilih pegas dari keluarga tinggi dan ketebalan yang sama.' },
    { type: 'title', text: 'Pertimbangan Kaliber Vintage', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Kaliber Swiss (ETA, FHF, AS, Unitas)</strong> - terdokumentasi dengan baik dalam sistem GR. Sebagian besar memiliki referensi mainspring yang diketahui.',
        '<strong>Kaliber Prancis (LIP, France Ebauches)</strong> - sering menggunakan proporsi barrel yang tidak standar. Ukur dengan hati-hati.',
        '<strong>Kaliber Amerika (Waltham, Elgin, Illinois)</strong> - sistem berbasis inci. Gunakan keluaran imperial untuk perbandingan.',
        '<strong>Kaliber Jepang (Seiko, Citizen, Miyota)</strong> - sistem metrik dengan cakupan katalog yang baik untuk mesin jam pasca-1960.',
        '<strong>Kaliber China (Sea-Gull, DG, Tongji)</strong> - sering meniru desain Swiss. Referensi GR Swiss biasanya berlaku.',
      ],
    },
    {
      type: 'summary',
      title: 'Poin penting untuk pemilihan mainspring',
      items: [
        'Ukur ID barrel, OD arbor, dan tinggi barrel secara akurat dengan jangka sorong presisi',
        'Gunakan dimensi yang dihitung sebagai titik awal, bukan sebagai spesifikasi mutlak',
        'Bandingkan dengan lembar teknis pabrikan atau katalog pemasok yang dikenal',
        'Cocokkan tinggi pegas persis dengan tinggi barrel dikurangi celah 0.05-0.15 mm',
        'Cocokkan ketebalan dalam 0.005 mm dari nilai yang dihitung untuk kinerja optimal',
        'Verifikasi panjang pegas mencukupi untuk jumlah putaran penggulungan yang diharapkan',
      ],
    },
  ],
  faq: [
    {
      question: 'Seberapa akurat dimensi mainspring yang dihitung?',
      answer: 'Perhitungan didasarkan pada formula pembuatan jam standar yang mengasumsikan geometri barrel ideal. Dimensi nyata dapat bervariasi hingga 5-10% karena toleransi manufaktur, konfigurasi ujung pegas (brace, eyelet, atau T-end), dan paduan spesifik yang digunakan. Selalu gunakan nilai yang dihitung sebagai referensi yang kuat, tetapi bandingkan dengan lembar data pabrikan atau katalog pemasok komersial sebelum memesan.',
    },
    {
      question: 'Bagaimana jika saya tidak dapat menemukan ukuran komersial yang tepat?',
      answer: 'Ketika ukuran yang tepat tidak tersedia, prioritaskan mencocokkan tinggi pegas secara tepat, lalu ketebalan dalam 0.005 mm. Panjang dapat disesuaikan dengan memilih pegas yang berbeda dari keluarga tinggi dan ketebalan yang sama. Pegas yang sedikit lebih panjang akan berfungsi jika barrel memiliki cukup ruang, tetapi pegas yang lebih pendek akan mengurangi cadangan daya.',
    },
    {
      question: 'Bagaimana cara mengukur dimensi barrel tanpa melepas mainspring?',
      answer: 'Jika barrel masih berisi pegas lama, Anda dapat mengukur diameter luar barrel dari luar (kemudian kurangi ketebalan dinding, biasanya 0.2-0.4 mm) dan tinggi keseluruhan (kemudian kurangi ketebalan tutup). Untuk hasil yang paling akurat, lepaskan pegas lama dan bersihkan barrel sebelum mengukur.',
    },
    {
      question: 'Apa perbedaan antara ujung mainspring brace dan eyelet?',
      answer: 'Ujung brace (disebut juga T-end) memiliki tab berbentuk T kecil yang mengait ke dinding barrel. Sebagian besar kaliber Swiss dan Jepang modern menggunakan tipe ini. Ujung eyelet memiliki lubang kecil yang pas di atas pasak pada arbor. Alat ini hanya menghitung dimensi pita; Anda harus memverifikasi jenis ujungnya sesuai dengan barrel Anda sebelum memesan.',
    },
    {
      question: 'Dapatkah saya menggunakan alat ini untuk mesin jam kronograf atau otomatis?',
      answer: 'Ya, tetapi perhatikan bahwa mesin jam otomatis sering memiliki jumlah putaran yang lebih tinggi (8-10) dan mungkin memerlukan pegas yang sedikit lebih tipis untuk mengakomodasi modul penggulungan tambahan. Mesin jam kronograf biasanya membutuhkan pegas yang lebih tebal untuk menggerakkan mekanisme kronograf. Sesuaikan nilai Putaran sesuai kebutuhan dan verifikasi dengan spesifikasi pabrikan.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ukur diameter dalam barrel',
      text: 'Gunakan jangka sorong presisi untuk mengukur diameter bagian dalam drum barrel. Ukur di dua titik yang terpisah 90 derajat dan rata-ratakan hasilnya. Catat hasil dalam milimeter.',
    },
    {
      name: 'Ukur diameter arbor',
      text: 'Ukur diameter arbor barrel pada titik terlebarnya di mana kumparan dalam mainspring terpasang. Ini biasanya di dekat pusat arbor, bukan di ujung persegi.',
    },
    {
      name: 'Ukur tinggi dalam barrel',
      text: 'Ukur kedalaman barrel dari bawah ke tepi atas. Jika tutup dapat dilepas, sertakan ketebalan tutup dalam pengukuran Anda. Tinggi pegas akan sekitar 0.1 mm lebih kecil.',
    },
    {
      name: 'Atur jumlah putaran',
      text: 'Tentukan berapa putaran penuh yang dibuat mainspring saat digulung penuh. Untuk kaliber manual, ini biasanya 5-8 putaran. Otomatis mungkin memiliki 6-10 putaran. Periksa spesifikasi mesin jam jika tersedia.',
    },
    {
      name: 'Baca dimensi yang dihitung',
      text: 'Alat ini menampilkan ketebalan, tinggi, dan panjang pegas yang direkomendasikan. Alat ini juga memperkirakan kategori kekuatan pegas dan memberikan padanan komersial dalam satuan metrik dan imperial.',
    },
    {
      name: 'Bandingkan dengan katalog',
      text: 'Gunakan ukuran komersial yang ditampilkan untuk mencari katalog pemasok. Masukkan dimensi metrik atau imperial ke Cousins UK, Jules Borel, atau pemasok pilihan Anda. Sesuaikan pencarian jika ukuran yang tepat tidak tersedia.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Seberapa akurat dimensi mainspring yang dihitung?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Perhitungan didasarkan pada formula pembuatan jam standar yang mengasumsikan geometri barrel ideal. Dimensi nyata dapat bervariasi hingga 5-10% karena toleransi manufaktur, konfigurasi ujung pegas, dan paduan spesifik yang digunakan. Selalu bandingkan dengan lembar data pabrikan atau katalog komersial sebelum memesan.' },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana jika saya tidak dapat menemukan ukuran komersial yang tepat?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Cocokkan tinggi pegas secara tepat terlebih dahulu, lalu ketebalan dalam 0.005 mm. Sesuaikan panjang dari keluarga tinggi dan ketebalan yang sama.' },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana cara mengukur barrel tanpa melepas mainspring?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ukur diameter luar barrel dan kurangi ketebalan dinding (0.2-0.4 mm). Untuk hasil terbaik, lepaskan pegas lama terlebih dahulu.' },
        },
        {
          '@type': 'Question',
          'name': 'Apa perbedaan antara ujung brace dan eyelet?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-end) mengait ke dinding barrel. Eyelet memiliki lubang di atas pasak arbor. Kaliber Swiss/Jepang modern menggunakan ujung brace.' },
        },
        {
          '@type': 'Question',
          'name': 'Dapatkah saya menggunakan ini untuk mesin jam kronograf atau otomatis?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ya. Otomatis sering membutuhkan lebih banyak putaran (8-10) dan pegas lebih tipis. Kronograf membutuhkan pegas lebih tebal. Sesuaikan Putaran dan verifikasi.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pencari Mainspring',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Kalkulator Mainspring Jam',
      'description': 'Hitung dimensi mainspring teoretis dari ukuran barrel untuk mesin jam vintage.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Perhitungan dimensi mainspring jam',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Pelajari cara menghitung dimensi mainspring dari diameter dalam barrel, ukuran arbor, dan putaran penggulungan.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara menemukan mainspring yang tepat',
      'description': 'Panduan langkah demi langkah untuk mengukur barrel jam dan menghitung dimensi mainspring yang benar.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Ukur ID barrel', 'text': 'Gunakan jangka sorong presisi untuk mengukur diameter dalam drum barrel.' },
        { '@type': 'HowToStep', 'name': 'Ukur OD arbor', 'text': 'Ukur diameter arbor barrel pada titik terlebarnya.' },
        { '@type': 'HowToStep', 'name': 'Ukur tinggi barrel', 'text': 'Ukur kedalaman dalam. Tinggi pegas sekitar 0.1 mm lebih kecil.' },
        { '@type': 'HowToStep', 'name': 'Atur putaran', 'text': 'Atur 5-8 untuk manual, 6-10 untuk mesin jam otomatis.' },
        { '@type': 'HowToStep', 'name': 'Baca hasil', 'text': 'Lihat ketebalan, tinggi, panjang pegas, dan padanan komersial.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Pencari Mainspring',
      'description': 'Alat untuk pembuat jam dalam menghitung dimensi mainspring dari ukuran barrel.',
      'category': 'Alat Pembuat Jam',
      'audience': { '@type': 'Audience', 'audienceType': 'Pembuat jam dan penggemar horologi' },
    },
  ],
};
