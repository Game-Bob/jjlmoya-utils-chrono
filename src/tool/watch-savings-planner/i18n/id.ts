import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'perencana-tabungan-jam',
  title: 'Perencana Tabungan Pembelian Jam Tangan',
  description: 'Tetapkan dan pantau target tabungan untuk pembelian jam tangan berikutnya. Visualisasikan progres, hitung tenggat waktu, dan tetap termotivasi.',
  ui: {
    title: 'Pengaturan Target Tabungan',
    addGoalTitle: 'Target Tabungan Baru',
    goalNameLabel: 'Jam Tangan',
    goalNamePlaceholder: 'mis. Rolex Submariner',
    targetPriceLabel: 'Harga Target',
    currentSavingsLabel: 'Terkumpul',
    monthlyLabel: 'Per Bulan',
    addButton: 'Tambah Target',
    cancelButton: 'Batal',
    goalsEmpty: 'Belum ada target tabungan',
    goalsEmptySub: 'Tetapkan target jam tangan pertamamu dan mulailah menabung!',
    monthsToGoal: 'Waktu menuju target',
    yearsToGoal: 'Tahun menuju target',
    month: 'bln',
    months: 'bln',
    year: 'thn',
    totalSaved: 'Total Terkumpul',
    totalGoals: 'Target',
    achieved: 'Tercapai',
    percentLabel: 'Terkumpul',
    deleteGoal: 'Hapus',
    editGoal: 'Edit',
    saveGoal: 'Simpan',
    currency: 'IDR',
    summaryTitle: 'Ringkasan',
    goalAchieved: 'Tercapai!',
    goalProgress: 'Progres',
    congratsTitle: 'Selamat!',
    congratsDesc: 'Kamu berhasil mencapai target tabungan!',
    monthlyContribution: 'Bulanan',
    targetDate: 'Tanggal Target',
    adjustMonthly: 'Sesuaikan bulanan',
  },
  seo: [
    { type: 'title', text: 'Perencana Tabungan Pembelian Jam Tangan \u2014 Pantau Pembelian Jam Berikutnya', level: 2 },
    { type: 'paragraph', html: 'Menabung untuk jam tangan adalah sebuah perjalanan. Baik itu <strong>Speedmaster vintage</strong>, <strong>Submariner</strong>, atau <strong>Grand Seiko</strong>, rencana tabungan yang jelas mengubah mimpi menjadi tenggat waktu. Alat ini membantumu memvisualisasikan progres, menyesuaikan kontribusi bulanan, dan melihat kapan tepatnya kamu akan keluar dari butik dengan jam impianmu.' },
    { type: 'title', text: 'Mengapa Rencana Tabungan Penting bagi Kolektor Jam Tangan', level: 3 },
    { type: 'paragraph', html: 'Mengoleksi jam tangan adalah permainan kesabaran. Harga model-model yang diminati naik terus, dan pembelian impulsif sering berujung penyesalan. Pendekatan tabungan yang terstruktur membuatmu disiplin, mencegah tekanan finansial, dan membuat pembelian terakhir terasa layak. Ditambah lagi, melacak progresmu hari demi hari membangun antisipasi dan membuat momen membuka kotaknya semakin manis.' },
    { type: 'title', text: 'Cara Menetapkan Target Tabungan Jam Tangan yang Realistis', level: 3 },
    { type: 'paragraph', html: 'Mulailah dengan harga total termasuk pajak dan ongkos kirim. Kemudian bagi dengan jumlah yang bisa kamu sisihkan dengan nyaman setiap bulan. Aturan yang baik adalah mengalokasikan tidak lebih dari <strong>10\u201315% dari pendapatan bersih</strong> untuk tabungan jam tangan. Jika tenggat waktunya terasa terlalu lama, pertimbangkan untuk memecahnya menjadi pencapaian yang lebih kecil \u2014 atau jelajahi alternatif yang lebih terjangkau dalam keluarga gaya yang sama.' },
    { type: 'title', text: 'Psikologi Pelacakan Target', level: 3 },
    { type: 'paragraph', html: 'Pelacakan progres secara visual memicu pelepasan dopamin, zat kimia saraf yang sama yang membuat kegiatan mengoleksi begitu memuaskan. Setiap kali kamu mencatat kontribusi baru dan melihat cincin progres terisi, kamu memperkuat kebiasaan tersebut. Inilah sebabnya menabung kecil secara teratur sering kali lebih efektif daripada setoran besar yang sporadis \u2014 ritualnya sendiri menjadi bagian dari pengalaman mengoleksi.' },
  ],
  faq: [
    {
      question: 'Berapa banyak yang harus saya tabung setiap bulan untuk jam tangan?',
      answer: 'Targetkan 10\u201315% dari pendapatan bulanan bersihmu. Kuncinya adalah konsistensi \u2014 bahkan $100 per bulan akan terkumpul $1.200 per tahun. Sesuaikan jumlahnya berdasarkan tenggat waktumu: target yang lebih pendek membutuhkan kontribusi bulanan yang lebih besar.',
    },
    {
      question: 'Haruskah saya menabung untuk satu jam tangan sekaligus atau beberapa?',
      answer: 'Satu per satu biasanya lebih efektif. Fokus membangun momentum. Setelah mencapai target pertamamu, kepercayaan diri dan disiplin akan terbawa ke target berikutnya. Namun, perencana ini mendukung beberapa target sehingga kamu bisa membandingkan tenggat waktu.',
    },
    {
      question: 'Bagaimana jika harga jam tangan naik saat saya menabung?',
      answer: 'Pertanyaan bagus. Periksa harga pasar saat ini setiap beberapa bulan dan perbarui targetmu. Jika harga naik dengan cepat, pertimbangkan untuk menambah jumlah bulanan atau memperpendek tenggat waktu untuk mengunci harga saat ini.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Tetapkan Target',
      text: 'Masukkan nama jam tangan dan total harganya termasuk pajak dan ongkos kirim.',
    },
    {
      name: 'Lacak Tabungan',
      text: 'Catat berapa banyak yang sudah kamu kumpulkan dan berapa yang bisa kamu sisihkan setiap bulan.',
    },
    {
      name: 'Pantau Progres',
      text: 'Saksikan cincin progres terisi saat kamu memperbarui tabunganmu. Sesuaikan jumlah bulanan kapan saja.',
    },
    {
      name: 'Rayakan',
      text: 'Saat cincin mencapai 100%, targetmu tercapai. Saatnya membeli jam tangan itu!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa banyak yang harus saya tabung setiap bulan untuk jam tangan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Targetkan 10\u201315% dari pendapatan bulanan bersihmu. Kuncinya adalah konsistensi \u2014 bahkan $100 per bulan akan terkumpul $1.200 per tahun.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Haruskah saya menabung untuk satu jam tangan sekaligus atau beberapa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Satu per satu biasanya lebih efektif. Fokus membangun momentum. Setelah mencapai target pertamamu, bawa disiplin itu ke target berikutnya.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bagaimana jika harga jam tangan naik saat saya menabung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Periksa harga pasar saat ini setiap beberapa bulan dan perbarui targetmu. Pertimbangkan untuk menambah jumlah bulanan jika harga naik dengan cepat.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Perencana Tabungan Pembelian Jam Tangan',
      'operatingSystem': 'Semua',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara menabung untuk pembelian jam tangan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Tetapkan Target',
          'text': 'Masukkan nama jam tangan dan total harganya termasuk pajak dan ongkos kirim.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lacak Tabungan',
          'text': 'Catat berapa banyak yang sudah kamu kumpulkan dan berapa yang bisa kamu sisihkan setiap bulan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pantau Progres',
          'text': 'Saksikan cincin progres terisi saat kamu memperbarui tabunganmu.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Rayakan',
          'text': 'Saat cincin mencapai 100%, targetmu tercapai. Saatnya membeli jam tangan itu!',
        },
      ],
    },
  ],
};
