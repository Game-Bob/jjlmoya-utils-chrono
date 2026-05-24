import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'estimator-cadangan-daya',
  title: 'Estimator Cadangan Daya Arloji',
  description: 'Perkirakan sisa cadangan daya arloji Anda berdasarkan putaran mahkota dan jam pemakaian. Bekerja dengan kaliber populer ETA, Sellita, Miyota, Seiko, dan Rolex.',
  ui: {
    title: 'Estimator Cadangan Daya',
    movementLabel: 'Mesin',
    selectMovement: 'Pilih mesin',
    customMovement: 'Kustom',
    turnsLabel: 'Putaran Mahkota',
    hoursLabel: 'Waktu Pakai',
    turnsInput: 'Putaran',
    hoursInput: 'Jam',
    activityLabel: 'Aktivitas',
    activityLow: 'Meja',
    activityMedium: 'Jalan',
    activityHigh: 'Aktif',
    calculate: 'Hitung',
    reserveRemaining: 'Sisa Cadangan',
    hoursRemaining: 'Sisa',
    chargePercent: 'Pengisian',
    resultLabel: 'Perkiraan Cadangan',
    stopTimeLabel: 'Berjalan hingga',
    powerReserveHours: 'Cadangan (jam)',
    fullWindTurns: 'Putaran hingga penuh',
    step1: 'Pilih mesin arloji Anda dari menu tarik-turun.',
    step2: 'Masukkan putaran mahkota dan jam pemakaian.',
    step3: 'Tekan Hitung untuk melihat cadangan daya Anda.',
    tipTitle: 'Kiat',
    tipContent: 'Mesin manual hanya terisi saat Anda memutar mahkota. Mesin otomatis juga terisi saat Anda memakainya.',
  },
  seo: [
    { type: 'title', text: 'Estimator Cadangan Daya Arloji \u2014 Berapa Sisa Cadangan Mesin Anda?', level: 2 },
    { type: 'paragraph', html: 'Penasaran berapa banyak daya yang tersisa di arloji mekanik Anda? Baik Anda memutar mahkota pagi ini atau memakainya sepanjang hari, estimator ini memberi tahu perkiraan level pengisian dan jam tersisa untuk kaliber populer seperti <strong>ETA, Sellita, Miyota, Seiko, dan Rolex</strong>.' },
    { type: 'title', text: 'Bagaimana Cadangan Daya Bekerja pada Arloji Mekanik', level: 3 },
    { type: 'paragraph', html: 'Cadangan daya adalah jumlah energi yang tersimpan di pegas utama. Saat Anda memutar mahkota, Anda mengencangkan pegas utama, menyimpan energi potensial. Rotor otomatis juga mengencangkan pegas utama saat Anda memakai arloji. Energi kemudian terkuras pada tingkat yang stabil \u2014 biasanya 2\u20133% per jam \u2014 hingga arloji berhenti.' },
    { type: 'title', text: 'Putaran Mahkota vs. Pengisian Rotor', level: 3 },
    { type: 'paragraph', html: 'Pengisian manual melalui mahkota adalah cara paling efisien untuk mengisi arloji \u2014 setiap putaran penuh menambah jumlah energi yang dapat diprediksi, biasanya sekitar 2,5% dari total cadangan. Memakai arloji mengisi lebih lambat dan tergantung pada tingkat aktivitas Anda: pekerja kantoran mungkin mengisi 4\u20136% per jam, sementara orang yang aktif mungkin mengisi 8\u201310%. Estimator ini menggunakan rata-rata konservatif.' },
    { type: 'title', text: 'Mengapa Perkiraan Cadangan Daya Penting', level: 3 },
    { type: 'paragraph', html: 'Mengetahui level pengisian arloji Anda membantu menghindari berhenti yang tidak terduga. Arloji yang mati di malam hari mungkin perlu lebih banyak putaran sebelum tidur, atau mungkin tidak cukup dipakai. Gunakan alat ini untuk memahami kebiasaan pengisian Anda dan menjaga arloji otomatis tetap berjalan.' },
  ],
  faq: [
    {
      question: 'Berapa banyak satu putaran mahkota mengisi arloji?',
      answer: 'Tergantung pada mesinnya. Sebagian besar kaliber otomatis mencapai pengisian penuh dalam 30\u201340 putaran, jadi setiap putaran menambah sekitar 2,5\u20133,3% dari total cadangan. Mesin manual seperti Unitas 6498 juga membutuhkan sekitar 35 putaran untuk pengisian penuh.',
    },
    {
      question: 'Apakah memakai arloji mengisinya sama seperti memutar?',
      answer: 'Memakai mengisi lebih lambat dan bervariasi. Di pekerjaan meja, Anda mungkin mengisi 4\u20136% per jam melalui rotor. Saat bergerak aktif (jalan, olahraga), bisa mencapai 8\u201310% per jam. Memutar dengan tangan lebih cepat dan lebih dapat diprediksi.',
    },
    {
      question: 'Berapa banyak cadangan yang hilang per jam?',
      answer: 'Pengurasannya konstan: bagi 100 dengan cadangan daya dalam jam. Mesin 38 jam kehilangan sekitar 2,6% per jam, 42 jam kehilangan 2,4%, dan 70 jam kehilangan sekitar 1,4% per jam.',
    },
    {
      question: 'Bisakah saya mengisi arloji secara berlebihan?',
      answer: 'Mesin otomatis modern memiliki kopling selip yang mencegah pengisian berlebihan. Setelah pegas utama terisi penuh, putaran tambahan akan selip begitu saja. Mesin manual juga memiliki mekanisme penghenti, meskipun memaksa melewati batas dapat merusak pegas utama.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Pilih mesin Anda',
      text: 'Pilih kaliber arloji Anda dari menu tarik-turun. Jika tidak terdaftar, pilih Kustom dan masukkan cadangan daya serta putaran hingga penuhnya.',
    },
    {
      name: 'Masukkan data Anda',
      text: 'Ketik berapa putaran mahkota yang Anda berikan, atau berapa jam Anda memakainya hari ini. Anda bisa mengisi keduanya untuk perkiraan gabungan.',
    },
    {
      name: 'Hitung',
      text: 'Tekan tombol Hitung. Hasilnya menunjukkan perkiraan persentase pengisian dan sisa jam cadangan daya.',
    },
    {
      name: 'Sesuaikan kebiasaan Anda',
      text: 'Gunakan hasilnya untuk memutuskan apakah Anda perlu lebih banyak memutar sebelum tidur atau lebih banyak waktu pakai di siang hari agar arloji tetap berjalan.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa banyak satu putaran mahkota mengisi arloji?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tergantung pada mesinnya. Sebagian besar kaliber otomatis mencapai pengisian penuh dalam 30–40 putaran, jadi setiap putaran menambah sekitar 2,5–3,3% dari total cadangan. Mesin manual seperti Unitas 6498 juga membutuhkan sekitar 35 putaran untuk pengisian penuh.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apakah memakai arloji mengisinya sama seperti memutar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Memakai mengisi lebih lambat dan bervariasi. Di pekerjaan meja, Anda mungkin mengisi 4–6% per jam melalui rotor. Saat bergerak aktif, bisa mencapai 8–10% per jam. Memutar dengan tangan lebih cepat dan lebih dapat diprediksi.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Berapa banyak cadangan yang hilang per jam?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pengurasannya konstan: bagi 100 dengan cadangan daya dalam jam. Mesin 38 jam kehilangan sekitar 2,6% per jam, 42 jam kehilangan 2,4%, dan 70 jam kehilangan sekitar 1,4% per jam.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bisakah saya mengisi arloji secara berlebihan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mesin otomatis modern memiliki kopling selip yang mencegah pengisian berlebihan. Setelah pegas utama terisi penuh, putaran tambahan akan selip begitu saja.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Estimator Cadangan Daya Arloji',
      'operatingSystem': 'Semua',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara memperkirakan cadangan daya arloji Anda',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Pilih mesin Anda',
          'text': 'Pilih kaliber arloji Anda dari menu tarik-turun. Jika tidak terdaftar, pilih Kustom dan masukkan cadangan daya serta putaran hingga penuhnya.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Masukkan data Anda',
          'text': 'Ketik berapa putaran mahkota yang Anda berikan, atau berapa jam Anda memakainya hari ini. Anda bisa mengisi keduanya untuk perkiraan gabungan.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hitung',
          'text': 'Tekan tombol Hitung. Hasilnya menunjukkan perkiraan persentase pengisian dan sisa jam cadangan daya.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sesuaikan kebiasaan Anda',
          'text': 'Gunakan hasilnya untuk memutuskan apakah Anda perlu lebih banyak memutar sebelum tidur atau lebih banyak waktu pakai di siang hari agar arloji tetap berjalan.',
        },
      ],
    },
  ],
};
