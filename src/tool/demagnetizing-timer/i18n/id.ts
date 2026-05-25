import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'timer-demagnetisasi',
  title: 'Timer & Panduan Demagnetisasi Jam Tangan',
  description: 'Penghitung waktu mundur presisi dengan isyarat audio untuk demagnetisasi jam tangan DIY. Dapatkan durasi tekan yang tepat untuk kumparan demagnetisasi Anda.',
  ui: {
    title: 'Pengaturan Timer',
    durationLabel: 'Durasi Pulsa',
    duration1s: '1 Detik',
    duration2s: '2 Detik',
    duration3s: '3 Detik',
    customLabel: 'Kustom',
    startButton: 'Mulai',
    stopButton: 'Berhenti',
    resetButton: 'Reset',
    pressPhase: 'Tekan tombol demagnetizer sekarang!',
    holdPhase: 'Tahan tombol...',
    releasePhase: 'Lepaskan sekarang!',
    completePhase: 'Selesai! Jauhkan jam tangan.',
    ready: 'Siap',
    seconds: 'd',
    instructions: 'Cara Mendemagnetisasi',
    step1: 'Tempatkan jam tangan di atas platform demagnetizer.',
    step2: 'Tekan Mulai dan tahan tombol demagnetizer selama durasi yang ditentukan.',
    step3: 'Lepaskan tombol dan perlahan jauhkan jam tangan.',
    step4: 'Ulangi 2–3 kali jika perlu, putar jam tangan setiap kali.',
    tipTitle: 'Tips',
    tipContent: 'Jaga jarak jam tangan minimal 1 meter dari demagnetizer saat menyala untuk menghindari magnetisasi ulang.',
  },
  seo: [
    { type: 'title', text: 'Timer Demagnetisasi Jam Tangan-ktu Pulsa Presisi untuk Demagnetisasi DIY', level: 2 },
    { type: 'paragraph', html: 'Mendemagnetisasi jam tangan memerlukan waktu tekan tombol yang tepat. Sebagian besar demagnetizer DIY bekerja dengan menghasilkan medan magnet bolak-balik yang meluruh, dan pulsa ideal berlangsung antara <strong>1 dan 3 detik</strong>. Terlalu pendek dan medan tidak akan menetralkan magnetisasi; terlalu lama dan Anda berisiko menjenuhkan pergerakan.' },
    { type: 'title', text: 'Mengapa Waktu Penting untuk Demagnetisasi Jam Tangan', level: 3 },
    { type: 'paragraph', html: 'Saat Anda menekan tombol pada demagnetizer, medan magnet bolak-balik tercipta di dalam kumparan. Medan berosilasi pada frekuensi listrik (50/60 Hz) dan meluruh saat Anda melepaskan. Tujuannya adalah untuk menjadarkan jam tangan pada medan yang meluruh ini <strong>cukup lama</strong> untuk mengacak domain magnetik pada hairspring dan komponen baja lainnya. Pulsa 1 hingga 3 detik adalah titik optimal untuk sebagian besar pergerakan.' },
    { type: 'title', text: 'Bagaimana Demagnetizer Bekerja', level: 3 },
    { type: 'paragraph', html: 'Demagnetizer pada dasarnya adalah kumparan kawat yang menghasilkan medan magnet bolak-balik kuat saat dialiri listrik. Menempatkan jam tangan yang termagnetisasi dalam medan ini menyebabkan domain magnetik internalnya berbalik dengan cepat. Saat medan dihilangkan secara tiba-tiba (dengan melepaskan tombol), domain-domain tersebut menetap dalam pola acak, secara efektif membatalkan magnetisasi bersih.' },
    { type: 'title', text: 'Tanda Jam Tangan Anda Perlu Demagnetisasi', level: 3 },
    { type: 'paragraph', html: 'Gejala umum jam tangan yang termagnetisasi meliputi: maju beberapa menit per hari, ketidakakuratan waktu antar posisi, suara detak yang lebih cepat, dan dalam kasus ekstrem, jam tangan berhenti total. Jika jam tangan otomatis Anda tiba-tiba berlari cepat, magnetisasi sering kali menjadi penyebabnya dan demagnetisasi adalah perbaikan sederhana.' },
  ],
  faq: [
    {
      question: 'Berapa lama saya harus menekan tombol demagnetizer?',
      answer: '1 hingga 3 detik adalah durasi pulsa yang direkomendasikan. Mulai dengan 1 detik dan tingkatkan jika perlu. Pulsa yang terlalu lama dapat menyebabkan kumparan overheat dan tidak meningkatkan hasil.',
    },
    {
      question: 'Bisakah jam tangan didemagnetisasi lebih dari sekali?',
      answer: 'Ya. Ulangi proses 2 hingga 3 kali, putar jam tangan 90 derajat setiap kali. Ini memastikan semua sumbu terpapar medan bolak-balik. Tidak ada risiko demagnetisasi berlebihan.',
    },
    {
      question: 'Apakah demagnetisasi berfungsi pada jam tangan kuarsa?',
      answer: 'Jam tangan kuarsa jarang terpengaruh oleh magnetisasi karena mengandung sedikit komponen feromagnetik. Namun, motor stepper pada beberapa pergerakan kuarsa dapat termagnetisasi, menyebabkan pergerakan jarum yang tidak menentu. Demagnetisasi aman untuk jam tangan kuarsa.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Atur Durasi',
      text: 'Pilih 1, 2, atau 3 detik tergantung pada tingkat keparahan magnetisasi.',
    },
    {
      name: 'Posisikan Jam Tangan',
      text: 'Tempatkan jam tangan rata di platform demagnetizer, terpusat di atas kumparan.',
    },
    {
      name: 'Tekan dan Tahan',
      text: 'Tekan tombol Mulai bersamaan dengan tombol demagnetizer dan tahan selama durasi yang ditentukan.',
    },
    {
      name: 'Lepaskan dan Jauhkan',
      text: 'Lepaskan tombol dan perlahan jauhkan jam tangan setidaknya 1 meter sebelum mematikan demagnetizer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa lama saya harus menekan tombol demagnetizer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 hingga 3 detik adalah durasi pulsa yang direkomendasikan. Mulai dengan 1 detik dan tingkatkan jika perlu. Pulsa yang terlalu lama dapat menyebabkan kumparan overheat dan tidak meningkatkan hasil.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah jam tangan didemagnetisasi lebih dari sekali?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya. Ulangi proses 2 hingga 3 kali, putar jam tangan 90 derajat setiap kali. Ini memastikan semua sumbu terpapar medan bolak-balik. Tidak ada risiko demagnetisasi berlebihan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apakah demagnetisasi berfungsi pada jam tangan kuarsa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jam tangan kuarsa jarang terpengaruh oleh magnetisasi karena mengandung sedikit komponen feromagnetik. Namun, motor stepper pada beberapa pergerakan kuarsa dapat termagnetisasi, menyebabkan pergerakan jarum yang tidak menentu. Demagnetisasi aman untuk jam tangan kuarsa.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Timer & Panduan Demagnetisasi Jam Tangan',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara mendemagnetisasi jam tangan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Atur Durasi',
          'text': 'Pilih 1, 2, atau 3 detik tergantung pada tingkat keparahan magnetisasi.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Posisikan Jam Tangan',
          'text': 'Tempatkan jam tangan rata di platform demagnetizer, terpusat di atas kumparan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tekan dan Tahan',
          'text': 'Tekan tombol Mulai bersamaan dengan tombol demagnetizer dan tahan selama durasi yang ditentukan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lepaskan dan Jauhkan',
          'text': 'Lepaskan tombol dan perlahan jauhkan jam tangan setidaknya 1 meter sebelum mematikan demagnetizer.',
        },
      ],
    },
  ],
};
