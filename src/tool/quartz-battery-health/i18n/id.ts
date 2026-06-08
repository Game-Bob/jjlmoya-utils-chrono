import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'pemeriksa-kesehatan-baterai-kuarsa',
  title: 'Pemeriksa Kesehatan Baterai Kuarsa',
  description: 'Hitung masa pakai baterai teoretis dari mesin kuarsa dengan memasukkan kapasitas sel (mAh) dan konsumsi daya kaliber (ÂµA). Opsional, atur tanggal pemasangan untuk memperkirakan tanggal penggantian.',
  ui: {
    title: 'Pemeriksa Kesehatan Baterai Kuarsa',
    batteryLabel: 'Sel Baterai',
    selectBattery: 'Pilih baterai',
    customBattery: 'Kustom',
    capacityLabel: 'Kapasitas',
    capacityUnit: 'mAh',
    consumptionLabel: 'Konsumsi',
    consumptionUnit: 'ÂµA',
    installDateLabel: 'Dipasang pada',
    installDateHint: 'Opsional',
    monthLabel: 'Bulan',
    yearLabel: 'Tahun',
    calculate: 'Hitung',
    resultLabel: 'Perkiraan Masa Pakai',
    theoreticalLife: 'Masa pakai teoretis',
    yearsLabel: 'tahun',
    monthsLabel: 'bulan',
    daysLabel: 'hari',
    changeDateLabel: 'Ganti pada',
    noDateHint: 'Masukkan tanggal pemasangan untuk melihat tanggal penggantian',
    healthLabel: 'Status',
    healthGood: 'Baik',
    healthModerate: 'Sedang',
    healthCritical: 'Kritis',
    step1: 'Pilih baterai umum atau pilih Kustom untuk memasukkan kapasitas.',
    step2: 'Masukkan konsumsi daya kaliber dalam mikroampere (ÂµA).',
    step3: 'Opsional, tambahkan tanggal pemasangan, lalu tekan Hitung.',
    tipTitle: 'Tips',
    tipContent: 'Selalu gunakan nilai konsumsi dari lembar data kaliber resmi. Masa pakai nyata bisa 10-20% lebih pendek karena variasi suhu dan beban.',
  },
  seo: [
    { type: 'title', text: 'Pemeriksa Kesehatan Baterai Kuarsa - Berapa Lama Baterai Jam Tangan Anda akan Bertahan?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Arus tipikal jarum 3' },
        { value: '18-55 mAh', label: 'Kapasitas sel umum' },
        { value: '2.5-4.5 thn', label: 'Masa pakai baterai biasa' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Penasaran kapan jam kuarsa Anda akan berhenti? <strong>Pemeriksa Kesehatan Baterai Kuarsa</strong> membantu Anda memperkirakan sisa masa pakai baterai mesin kuarsa apa pun dengan membandingkan kapasitas sel (diukur dalam mAh) terhadap konsumsi daya rata-rata mesin (diukur dalam mikroampere, µA). Baik Anda memiliki Swiss ETA, Jepang Miyota, Seiko, Ronda, atau mesin DG China, alat ini menghitung masa pakai teoretis dalam tahun, bulan, dan hari - dan bahkan dapat memprediksi tanggal penggantian yang tepat jika Anda memasukkan bulan dan tahun pemasangan.' },
    { type: 'title', text: 'Bagaimana masa pakai baterai kuarsa dihitung - matematika di balik perkiraan', level: 3 },
    { type: 'paragraph', html: 'Masa pakai baterai mengikuti rumus listrik sederhana: <strong>Masa pakai (jam) = (Kapasitas sel dalam mAh × 1000) ÷ Konsumsi arus dalam µA</strong>. Membagi hasilnya dengan 24 memberikan hari, dan dengan 365,25 memberikan tahun. Sebagai contoh, <strong>sel SR920SW (371) standar dengan 40 mAh</strong> yang memberi daya pada mesin yang menarik <strong>1,5 µA</strong> secara teoretis akan bertahan sekitar <strong>3 tahun</strong>. Kurangi konsumsi menjadi 1,0 µA dan sel yang sama melampaui 4,5 tahun. Tingkatkan menjadi 2,5 µA dan masa pakai baterai turun menjadi di bawah 2 tahun. Setiap fraksi mikroampere penting saat Anda merencanakan interval servis.' },
    { type: 'title', text: 'Jenis baterai jam kuarsa paling umum dan kapasitasnya', level: 3 },
    {
      type: 'table',
      headers: ['Referensi Sel', 'Kode Umum', 'Kapasitas', 'Penggunaan Khas'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Jam dress tipis'],
        ['SR626SW', '377', '27 mAh', 'Model kuarsa ukuran sedang'],
        ['SR920SW', '371', '40 mAh', 'Kronograf & multifungsi'],
        ['SR936SW', '394', '55 mAh', 'Hibrida analog-digital besar'],
        ['CR2025', '-', '165 mAh', 'Modul LED daya tinggi'],
      ],
    },
    { type: 'tip', title: 'Sesuaikan dengan spesifikasi asli', html: 'Memilih tipe sel yang salah dapat mengurangi masa pakai baterai hingga <strong>40%</strong>. Selalu periksa silang nomor referensi baterai asli sebelum memasang pengganti. Kode numerik memberi tahu dimensinya - misalnya, <strong>SR936SW</strong> berdiameter 9,5 mm dan tebal 3,6 mm.' },
    { type: 'title', text: 'Mengapa Anda harus selalu menggunakan nilai konsumsi kaliber resmi', level: 3 },
    { type: 'paragraph', html: 'Produsen mesin seperti <strong>ETA, Ronda, Miyota, Seiko, dan ISA</strong> menerbitkan lembar data teknis resmi untuk setiap kaliber yang mereka produksi. Lembar data ini mencantumkan <strong>rata-rata konsumsi arus</strong> pada suhu terkendali (biasanya 22 °C) dan dengan beban torsi jarum standar. Menggunakan nilai tebakan 1,0 µA ketika mesin Anda sebenarnya menarik 2,5 µA dapat melebih-lebihkan masa pakai baterai lebih dari 100%. Selalu unduh PDF resmi dari situs web produsen atau periksa referensi kaliber di basis data khusus untuk mendapatkan angka konsumsi yang sebenarnya.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kebocoran baterai dapat merusak mesin jam Anda',
      html: 'Baterai perak-oksida yang habis dapat <strong>bocor kalium hidroksida</strong>, yang mengkorosi pegas kontak, jejak papan sirkuit, dan bahkan kumparan motor stepper. Jika alat memperkirakan <strong>kurang dari 6 bulan sisa masa pakai</strong>, jadwalkan penggantian baterai pada pemeriksaan rutin berikutnya. Berikan perhatian khusus pada <strong>jam kuarsa vintage dari tahun 1970-an dan 1980-an</strong> - baterai aslinya jauh lebih rentan bocor setelah puluhan tahun di dalam casing.' },
    { type: 'title', text: 'Faktor-faktor yang mengurangi masa pakai baterai di dunia nyata vs perkiraan teoretis', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Suhu ekstrem</strong> - jam yang ditinggalkan di dasbor yang terkena sinar matahari dapat melihat kenaikan arus 30%',
        '<strong>Sirkuit deteksi akhir masa pakai</strong> - indikator detak dua detik mengonsumsi daya ekstra setelah diaktifkan',
        '<strong>Penggunaan kronograf atau alarm</strong> - lonjakan arus sesaat yang bertambah seiring waktu',
        '<strong>Gesekan mekanis</strong> - roda gigi yang menua atau kotor meningkatkan torsi yang dibutuhkan motor stepper',
        '<strong>Medan magnet</strong> - paparan meningkatkan kebutuhan torsi motor, menguras sel lebih cepat',
      ],
    },
    { type: 'paragraph', html: 'Dalam praktiknya, Anda dapat mengharapkan <strong>10 hingga 20% masa pakai lebih pendek</strong> dari perhitungan teoretis. Untuk mesin kuarsa termokompensasi akurasi tinggi, konsumsinya bervariasi lebih sedikit, tetapi kuarsa standar sensitif terhadap faktor lingkungan ini.' },
    { type: 'title', text: 'Cara menemukan pengganti baterai yang tepat untuk jam kuarsa Anda', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Perak-Oksida)', definition: 'Sel yang dicap SR (mis. SR920SW) memberikan output 1,55 V yang stabil sepanjang masa pakainya, menjaga osilator kuarsa tetap akurat. Ini adalah standar untuk jam kuarsa berkualitas.' },
        { term: 'LR (Alkalin)', definition: 'Sel yang dicap LR (mis. LR41) memiliki tegangan yang menurun secara bertahap, yang dapat menyebabkan jam berjalan lambat atau berhenti sebelum waktunya. Tidak disarankan sebagai pengganti sel SR.' },
        { term: 'CR (Lithium)', definition: 'Sel yang dicap CR (mis. CR2025) menghasilkan 3,0 V dan digunakan dalam modul daya tinggi dengan lampu latar LED, LCD besar, atau banyak komplikasi.' },
        { term: 'Kode Numerik', definition: 'Empat digit mengkodekan ukuran fisik: dua digit pertama adalah diameter dalam milimeter dan dua digit terakhir adalah ketebalan dalam sepersepuluh milimeter. SR936SW = Ø9,5 mm × 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Kuarsa standar vs surya vs kinetik - bagaimana teknologi mengubah persamaan', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Kuarsa Standar',
          description: 'Menggunakan sel primer perak-oksida atau lithium yang dapat diganti. Masa pakai baterai bergantung murni pada kapasitas vs konsumsi. Inilah yang dirancang untuk kalkulator ini.',
          highlight: true,
          points: [
            'Sel primer yang dapat diganti',
            'Masa pakai = kapasitas ÷ konsumsi',
            'Jadwal penggantian yang dapat diprediksi',
            'Penggantian baterai terjangkau',
          ],
        },
        {
          title: 'Surya & Kinetik',
          description: 'Jam surya menggunakan sel fotovoltaik untuk mengisi ulang akumulator lithium-ion. Jam kinetik menggunakan generator mikro yang digerakkan rotor untuk mengisi kapasitor.',
          points: [
            'Penyimpanan energi isi ulang',
            'Masa pakai tergantung pada siklus pengisian',
            'Degradasi kapasitor seiring waktu',
            'Tidak kompatibel dengan kalkulator ini',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Klaim produsen tentang <strong>"masa pakai baterai 10 tahun"</strong> biasanya didasarkan pada mesin dengan konsumsi sangat rendah (sekitar 0,5 hingga 0,8 µA) yang dipasangkan dengan sel kapasitas besar (165 mAh CR2025 atau lebih besar). Pada jam kuarsa analog standar dengan sel perak-oksida kecil seperti <strong>SR626SW (27 mAh)</strong> dan mesin tipikal 1,5 µA, masa pakai nyata lebih mendekati <strong>2,5 - 3 tahun</strong>. Selalu verifikasi dengan kalkulator ini daripada mempercayai label pemasaran.' },
    {
      type: 'tip',
      title: 'Ganti secara proaktif, bukan reaktif',
      html: 'Saat Anda melihat jarum detik melompat dalam <strong>interval 2 detik atau 4 detik</strong>, mesin telah memasuki mode hemat daya karena tegangan rendah. Baterai memiliki sisa masa pakai sekitar <strong>2 hingga 4 minggu</strong>. Segera ganti untuk menghindari kerusakan akibat kebocoran.',
    },
    {
      type: 'summary',
      title: 'Hal Penting untuk Kesehatan Baterai Jam Kuarsa',
      items: [
        'Gunakan nilai konsumsi kaliber resmi dari lembar data produsen - nilai tebakan dapat melebih-lebihkan masa pakai lebih dari 100%',
        'Cocokkan tipe sel asli dengan tepat: kimia SR, LR, dan CR tidak dapat dipertukarkan',
        'Ganti baterai saat alat menunjukkan kurang dari 6 bulan sisa masa pakai untuk mencegah kebocoran',
        'Masa pakai baterai di dunia nyata biasanya 10-20% lebih pendek dari ideal teoretis karena suhu, gesekan, dan penggunaan',
        'Kalkulator ini dirancang untuk mesin kuarsa standar dengan sel primer yang dapat diganti - bukan untuk jam surya atau kinetik',
      ],
    },
  ],
  faq: [
    {
      question: 'Seberapa akurat perkiraan masa pakai baterai teoretis?',
      answer: 'Perhitungannya adalah ideal listrik berdasarkan kapasitas dibagi konsumsi. Dalam kondisi nyata, Anda dapat mengharapkan masa pakai 10 hingga 20% lebih pendek karena variasi suhu, sirkuit deteksi akhir masa pakai, hambatan mekanis dari pelumas yang menua, dan beban tambahan dari fungsi kronograf atau alarm. Perkiraan ini adalah batas atas yang andal, bukan prediksi yang tepat.',
    },
    {
      question: 'Di mana saya menemukan nilai konsumsi daya yang tepat untuk kaliber kuarsa saya?',
      answer: 'Lembar data teknis resmi dari ETA, Ronda, Miyota, Seiko, ISA, dan produsen mesin lainnya mencantumkan rata-rata konsumsi arus dalam mikroampere (µA). Cari nomor referensi kaliber yang diikuti dengan "datasheet" atau "spesifikasi teknis". Basis data khusus seperti Ranfft, 17jewels, dan Watch-Wiki juga mempublikasikan angka konsumsi yang dikontribusikan oleh komunitas jam.',
    },
    {
      question: 'Apa arti "µA" dan mengapa itu penting?',
      answer: 'µA adalah singkatan dari mikroampere, atau sepersejuta ampere. Ini mengukur arus listrik yang ditarik mesin dari baterai. Mesin analog kuarsa tiga jarum tipikal menarik antara 1,0 dan 2,5 µA. Kronograf dan modul multifungsi dapat menarik 3,0 hingga 6,0 µA. Semakin tinggi arus, semakin pendek masa pakai baterai untuk kapasitas sel tertentu.',
    },
    {
      question: 'Dapatkah saya menggunakan alat ini untuk jam bertenaga surya atau kinetik?',
      answer: 'Tidak. Jam surya (Eco-Drive, Solar, Light-Powered) menggunakan sel fotovoltaik untuk mengisi baterai isi ulang. Jam kinetik dan Auto-Quartz menggunakan rotor dan generator mikro untuk mengisi kapasitor. Kedua teknologi tidak bergantung pada sel primer sekali pakai, sehingga model kapasitas-vs-konsumsi tidak berlaku. Gunakan kalkulator ini hanya untuk mesin kuarsa standar dengan sel perak-oksida, alkalin, atau lithium yang dapat diganti.',
    },
    {
      question: 'Haruskah saya mengganti baterai sebelum benar-benar habis?',
      answer: 'Ya. Baterai perak-oksida dan alkalin dapat bocor kalium hidroksida ketika benar-benar habis, merusak pegas kontak, jejak PCB, dan kumparan motor stepper. Penggantian sebelum pengosongan total sangat disarankan. Jika alat menunjukkan kurang dari 6 bulan perkiraan sisa masa pakai, jadwalkan penggantian baterai sesegera mungkin.',
    },
    {
      question: 'Apa yang terjadi jika saya menggunakan baterai dengan kapasitas lebih tinggi atau lebih rendah dari aslinya?',
      answer: 'Menggunakan sel berkapasitas lebih tinggi (mis. SR936SW 55 mAh, bukan SR920SW 40 mAh) akan memperpanjang masa pakai baterai tetapi mungkin tidak pas secara fisik - sel harus sesuai dengan diameter dan ketebalan asli untuk mempertahankan tekanan pegas kontak yang tepat. Menggunakan sel berkapasitas lebih rendah memperpendek masa pakai baterai dan dapat menyebabkan kontak terputus-putus jika sel terlalu kecil. Selalu ganti dengan nomor referensi yang sama persis atau ekuivalen yang terdokumentasi dari keluarga ukuran yang sama.',
    },
    {
      question: 'Bagaimana cara mengetahui apakah baterai di jam tangan saya adalah perak-oksida atau alkalin?',
      answer: 'Sel perak-oksida dicap dengan SR (mis. SR920SW) dan memberikan output 1,55 V yang stabil sepanjang masa pakainya, yang menjaga osilator kuarsa tetap akurat. Sel alkalin dicap dengan LR (mis. LR41) dan memiliki tegangan yang menurun secara bertahap, yang dapat menyebabkan jam berjalan lambat atau berhenti sebelum waktunya. Sebagian besar merek jam berkualitas menentukan perak-oksida. Jika jam Anda awalnya menggunakan SR, selalu ganti dengan SR, bukan LR.',
    },
    {
      question: 'Apakah jarum detik yang melompat setiap dua detik berarti baterai habis?',
      answer: 'Ya. Ketika mesin kuarsa mendeteksi bahwa tegangan baterai terlalu rendah untuk menggerakkan motor stepper dengan andal, ia memasuki mode hemat daya di mana jarum detik melompat dalam interval 2 detik atau 4 detik. Ini adalah indikator akhir masa pakai. Saat Anda melihat perilaku ini, baterai memiliki sisa masa pakai sekitar 2 hingga 4 minggu dan harus segera diganti untuk menghindari kebocoran.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih atau sesuaikan sel baterai',
      text: 'Pilih sel perak-oksida umum dari daftar dropdown - SR621SW, SR626SW, SR920SW, SR936SW dan lainnya sudah dimuat dengan kapasitas resminya. Jika sel Anda tidak terdaftar, pilih Kustom dan ketik kapasitas persisnya dalam mAh seperti yang tercetak pada label baterai atau yang tercantum dalam lembar data produsen.',
    },
    {
      name: 'Masukkan konsumsi daya mesin',
      text: 'Temukan rata-rata konsumsi arus untuk kaliber Anda di dokumentasi teknis resmi. Ketik nilai dalam mikroampere (µA) ke bidang konsumsi. Sebagian besar mesin tiga jarum menggunakan 1,0 hingga 2,5 µA. Kronograf dan modul multifungsi bisa mencapai 6,0 µA.',
    },
    {
      name: 'Tambahkan bulan dan tahun pemasangan (opsional)',
      text: 'Jika Anda ingat atau telah mencatat kapan baterai terakhir dipasang, pilih bulan dan masukkan tahun. Alat akan menggunakan tanggal ini untuk menghitung perkiraan tanggal penggantian dan menunjukkan sisa kesehatan baterai sebagai persentase.',
    },
    {
      name: 'Baca masa pakai teoretis',
      text: 'Kartu hasil menunjukkan total perkiraan masa pakai baterai dalam tahun, bulan, dan hari tersisa. Ini adalah masa pakai maksimum dalam kondisi ideal dengan asumsi tidak ada faktor eksternal yang mengurangi kapasitas baterai.',
    },
    {
      name: 'Periksa status kesehatan dan tanggal penggantian',
      text: 'Ketika tanggal pemasangan diberikan, pengukur terisi secara proporsional dengan sisa masa pakai baterai. Lencana hijau "Baik" berarti lebih dari 50% masa pakai tersisa. Kuning "Sedang" berarti antara 20 dan 50%. Merah "Kritis" berarti kurang dari 20%. Tanggal penggantian yang direkomendasikan ditampilkan di bawah pengukur.',
    },
    {
      name: 'Sesuaikan input dan hitung ulang',
      text: 'Ubah input apa pun - model baterai, nilai konsumsi, atau tanggal pemasangan - dan hasilnya akan diperbarui secara otomatis. Gunakan ini untuk membandingkan berbagai jenis baterai atau merencanakan jadwal penggantian untuk beberapa jam dalam koleksi Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Seberapa akurat perkiraan masa pakai baterai teoretis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Perhitungannya adalah ideal listrik berdasarkan kapasitas dibagi konsumsi. Dalam kondisi nyata, Anda dapat mengharapkan masa pakai 10 hingga 20% lebih pendek karena variasi suhu, sirkuit deteksi akhir masa pakai, hambatan mekanis dari pelumas yang menua, dan beban tambahan dari fungsi kronograf atau alarm. Perkiraan ini adalah batas atas yang andal, bukan prediksi yang tepat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Di mana saya menemukan nilai konsumsi daya yang tepat untuk kaliber kuarsa saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lembar data teknis resmi dari ETA, Ronda, Miyota, Seiko, ISA, dan produsen mesin lainnya mencantumkan rata-rata konsumsi arus dalam mikroampere (µA). Cari nomor referensi kaliber yang diikuti dengan datasheet atau spesifikasi teknis. Basis data khusus seperti Ranfft dan 17jewels juga mempublikasikan angka konsumsi yang dikontribusikan oleh komunitas jam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa arti µA dan mengapa itu penting?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA adalah singkatan dari mikroampere, atau sepersejuta ampere. Ini mengukur arus listrik yang ditarik mesin dari baterai. Mesin analog kuarsa tiga jarum tipikal menarik antara 1,0 dan 2,5 µA. Kronograf dan modul multifungsi dapat menarik 3,0 hingga 6,0 µA. Semakin tinggi arus, semakin pendek masa pakai baterai untuk kapasitas sel tertentu.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dapatkah saya menggunakan alat ini untuk jam bertenaga surya atau kinetik?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tidak. Jam surya menggunakan sel fotovoltaik untuk mengisi baterai isi ulang. Jam kinetik menggunakan rotor dan generator mikro untuk mengisi kapasitor. Kedua teknologi tidak bergantung pada sel primer sekali pakai, sehingga model kapasitas-vs-konsumsi tidak berlaku. Gunakan kalkulator ini hanya untuk mesin kuarsa standar dengan sel perak-oksida, alkalin, atau lithium yang dapat diganti.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Haruskah saya mengganti baterai sebelum benar-benar habis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Baterai perak-oksida dan alkalin dapat bocor kalium hidroksida ketika benar-benar habis, merusak pegas kontak, jejak PCB, dan kumparan motor stepper. Penggantian sebelum pengosongan total sangat disarankan. Jika alat menunjukkan kurang dari 6 bulan perkiraan sisa masa pakai, jadwalkan penggantian baterai sesegera mungkin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana cara mengetahui apakah baterai di jam tangan saya adalah perak-oksida atau alkalin?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sel perak-oksida dicap dengan SR (mis. SR920SW) dan memberikan output 1,55 V yang stabil sepanjang masa pakainya. Sel alkalin dicap dengan LR (mis. LR41) dan memiliki tegangan yang menurun secara bertahap. Sebagian besar merek jam berkualitas menentukan perak-oksida. Selalu ganti SR dengan SR, bukan LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apakah jarum detik yang melompat setiap dua detik berarti baterai habis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Ketika mesin kuarsa mendeteksi tegangan baterai rendah, ia memasuki mode hemat daya di mana jarum detik melompat dalam interval 2 detik atau 4 detik. Ini adalah indikator akhir masa pakai. Saat Anda melihat perilaku ini, baterai memiliki sisa masa pakai sekitar 2 hingga 4 minggu dan harus segera diganti untuk menghindari kebocoran.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pemeriksa Kesehatan Baterai Kuarsa',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Kalkulator Masa Pakai Baterai Jam',
      'description': 'Hitung masa pakai baterai teoretis dari setiap mesin jam kuarsa dengan memasukkan kapasitas sel (mAh) dan konsumsi daya kaliber (µA). Memperkirakan tanggal penggantian ketika bulan dan tahun pemasangan diberikan.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Perhitungan masa pakai baterai jam kuarsa - kapasitas vs konsumsi dijelaskan',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Pelajari cara memperkirakan masa pakai baterai mesin jam kuarsa menggunakan kapasitas sel dalam mAh dan konsumsi daya mesin dalam µA. Pahami rumus, efek suhu dan beban, serta kapan harus menjadwalkan penggantian.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara memperkirakan masa pakai baterai jam kuarsa',
      'description': 'Panduan langkah demi langkah untuk menggunakan Pemeriksa Kesehatan Baterai Kuarsa guna menentukan sisa masa pakai baterai jam kuarsa apa pun dan merencanakan tanggal penggantiannya.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih atau sesuaikan sel baterai',
          'text': 'Pilih sel perak-oksida umum dari daftar dropdown - SR621SW, SR626SW, SR920SW, SR936SW dan lainnya sudah dimuat dengan kapasitas resminya. Jika sel Anda tidak terdaftar, pilih Kustom dan ketik kapasitas persisnya dalam mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Masukkan konsumsi daya mesin',
          'text': 'Temukan rata-rata konsumsi arus untuk kaliber Anda dari dokumentasi teknis resmi. Ketik nilai dalam mikroampere (µA) ke bidang konsumsi.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tambahkan bulan dan tahun pemasangan',
          'text': 'Jika Anda tahu kapan baterai dipasang, pilih bulan dan masukkan tahun. Alat menghitung perkiraan tanggal penggantian dan menunjukkan sisa kesehatan baterai sebagai persentase.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Baca masa pakai teoretis',
          'text': 'Kartu hasil menunjukkan total perkiraan masa pakai baterai dalam tahun, bulan, dan hari tersisa. Ini adalah masa pakai maksimum dalam kondisi ideal.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Periksa status kesehatan dan tanggal penggantian',
          'text': 'Ketika tanggal pemasangan diberikan, pengukur menunjukkan sisa masa pakai. Hijau berarti lebih dari 50% tersisa. Kuning berarti 20 hingga 50%. Merah berarti kurang dari 20%. Tanggal penggantian yang direkomendasikan ditampilkan di bawah.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Pemeriksa Kesehatan Baterai Kuarsa',
      'description': 'Alat online untuk memperkirakan masa pakai baterai jam kuarsa berdasarkan kapasitas sel dan konsumsi daya mesin.',
      'category': 'Kalkulator Baterai Jam',
      'audience': { '@type': 'Audience', 'audienceType': 'Penggemar jam dan teknisi perbaikan' },
    },
  ],
};
