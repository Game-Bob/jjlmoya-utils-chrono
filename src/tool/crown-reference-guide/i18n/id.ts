import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'panduan-referensi-mahkota',
  title: 'Panduan Referensi Mahkota Jam Tangan',
  description: 'Panduan interaktif posisi mahkota jam, arah penggulungan, dan fungsi pengaturan untuk mesin jam populer.',
  ui: {
    title: 'Pengaturan Mahkota',
    movementLabel: 'Mesin',
    selectMovement: 'Pilih mesin jam',
    customMovement: 'Kustom',
    positionLabel: 'Posisi',
    unscrewFirst: 'Buka sekrup mahkota terlebih dahulu',
    windingLabel: 'Gulungan',
    hackLabel: 'Henti',
    dangerZoneLabel: 'Hindari jam 9-3',
    directionCW: 'Searah jarum jam',
    directionCCW: 'Berlawanan jarum jam',
    directionBoth: 'Dua arah',
    pullHint: 'Tarik mahkota',
    clickPosition: 'Klik posisi',
    position0Title: 'Diam',
    position0Desc: 'Mahkota ditekan masuk. Jam berjalan normal.',
    position0Detail: 'Tidak ada fungsi penggulungan atau pengaturan yang aktif.',
    position1Title: 'Gulungan Manual',
    position1Desc: 'Putar mahkota searah jarum jam untuk menggulung pegas utama. Anda akan merasakan hambatan saat pegas mengencang.',
    position1Detail: 'Sekitar 30-40 putaran penuh dari posisi mati. Rotor otomatis juga menggulung saat dikenakan.',
    position2Title: 'Pengaturan Tanggal Cepat',
    position2Desc: 'Putar mahkota searah jarum jam untuk memajukan tanggal. Jarum jam tetap sinkron dengan detik yang berjalan.',
    position2Detail: 'HINDARI pengaturan tanggal cepat antara jam 9 malam dan 3 pagi saat mekanisme perubahan tanggal sedang aktif.',
    position3Title: 'Pengaturan Waktu',
    position3Desc: 'Putar mahkota ke salah satu arah untuk menggerakkan jarum. Jarum detik berhenti (henti) untuk sinkronisasi yang presisi.',
    position3Detail: 'Tarik ke posisi 3, tunggu detik mencapai 12, lalu tarik sepenuhnya. Putar untuk mengatur waktu dan tekan kembali.',
    screwDownHint: 'Ingatlah untuk mengencangkan sekrup mahkota kembali untuk ketahanan air.',
    noQuickSet: 'Tanpa pengaturan cepat',
    noHack: 'Tidak',
    hasHack: 'Ya',
    crownPositions: 'Posisi Mahkota',
    noteTitle: 'Catatan',
  },
  seo: [
    { type: 'title', text: 'Panduan Posisi Mahkota Jam-ra Menggulung, Mengatur Tanggal & Waktu dengan Benar', level: 2 },
    { type: 'paragraph', html: 'Mahkota adalah satu-satunya antarmuka fisik antara Anda dan mesin jam Anda. Menggunakannya dengan salah-nggulung ke belakang, mengatur tanggal di tengah malam, atau menarik terlalu keras-d-t merusak mekanisme. Panduan ini menguraikan setiap posisi mahkota untuk kaliber <strong>ETA, Sellita, Miyota, Seiko, dan Unitas</strong> sehingga Anda tidak perlu menebak-nebak.' },
    { type: 'title', text: 'Sekilas Posisi Mahkota', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Posisi 0 (Diam)', definition: 'Mahkota ditekan masuk atau dikencangkan. Jam berjalan normal. Tidak ada fungsi yang aktif. Selalu kembali ke sini setelah pengaturan.' },
        { term: 'Posisi 1 (Gulungan)', definition: 'Tarik pertama atau kondisi terbuka. Putar searah jarum jam untuk menggulung pegas utama. Sebagian besar jam otomatis juga menggulung melalui rotor.' },
        { term: 'Posisi 2 (Pengaturan Tanggal Cepat)', definition: 'Tarik kedua. Putar searah jarum jam untuk memajukan tanggal. Hindari penggunaan antara jam 9 malam-3 pagi saat mekanisme tanggal aktif.' },
        { term: 'Posisi 3 (Pengaturan Waktu)', definition: 'Tarik ketiga. Jarum detik berhenti untuk penyelarasan yang presisi. Putar bebas untuk mengatur waktu. Ada di sebagian besar jam otomatis modern.' },
      ]
    },

    { type: 'title', text: 'Perbandingan Mesin: Fitur Mahkota', level: 3 },
    {
      type: 'table', headers: ['Mesin', 'Posisi', 'Henti', 'Pengat. Cepat', 'Arah Gul.'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['Miyota 8215', '2 (0,1,3)', 'Tidak', 'Tidak ada', 'SJJ'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Ya', 'Tanggal (SJJ)', 'SJJ'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'Tidak', 'Tidak ada', 'SJJ'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Kesalahan Umum Mahkota', icon: 'mdi:alert', badge: 'JANGAN', html: 'Jangan pernah mengatur tanggal cepat antara <strong>jam 9 malam dan 3 pagi</strong> saat roda tanggal sedang aktif. Ini dapat merusak gigi dan memerlukan servis mesin secara menyeluruh. Jika Anda harus mengubah tanggal selama waktu ini, pertama majukan waktu melewati jam 3 pagi, atur tanggal, lalu sesuaikan kembali ke waktu yang benar.' },

    { type: 'tip', title: 'Mahkota Sekrup', html: 'Jam tangan selam dan jam olahraga sering memiliki mahkota sekrup untuk ketahanan air. <strong>Selalu buka sekrup sebelum menarik</strong>. Putar berlawanan arah jarum jam hingga mahkota muncul, lalu tarik ke posisi yang diinginkan. Setelah pengaturan, tekan masuk, lalu putar searah jarum jam sambil memberikan tekanan ringan hingga pas. <strong>Jangan terlalu kencang.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Mahkota Standar', icon: 'mdi:crown', description: 'Mahkota tarik-tekan yang ditemukan di sebagian besar jam tangan dress dan otomatis sehari-hari. 2-4 posisi. Ketahanan air biasanya 30-100 m.', points: ['Akses instan, tanpa membuka sekrup', 'Ketahanan air terbatas', 'Umum pada ETA, Miyota, Seiko'] },
        { title: 'Mahkota Sekrup', icon: 'mdi:lock', description: 'Mahkota berulir yang disekrup ke dalam tabung casing. Standar pada jam selam dan jam alat. Ketahanan air 200 m+.', points: ['Ketahanan air unggul', 'Harus dibuka sekrupnya sebelum digunakan', 'Umum pada Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Referensi Cepat', items: [
        'Selalu gulung searah jarum jam-taran mundur mengaktifkan kopling selip tetapi tidak menggulung.',
        'Jika jam Anda memiliki mahkota sekrup, buka sekrupnya sebelum menarik ke posisi apa pun.',
        'Hindari pengaturan tanggal cepat antara jam 9 malam dan 3 pagi. Majukan waktu melewati jam 3 pagi terlebih dahulu jika perlu.',
        'Mesin gulung manual (mis. Unitas 6498) memiliki lebih sedikit posisi. Gulung sepenuhnya sebelum mengatur waktu.',
        'Mesin tanpa henti (mis. Miyota 8215) memerlukan teknik berbeda: putar melewati menit target, lalu perlahan mundur.',
      ]
    },
  ],
  faq: [
    {
      question: 'Berapa banyak posisi mahkota yang dimiliki jam tangan saya?',
      answer: 'Sebagian besar mesin otomatis memiliki 3 posisi fungsional selain diam: posisi 1 untuk gulungan manual, posisi 2 untuk pengaturan tanggal cepat, dan posisi 3 untuk pengaturan waktu dengan henti. Mesin gulung manual seperti Unitas 6498 hanya memiliki 1 posisi fungsional (gulungan, dengan pengaturan waktu pada tarikan lebih lanjut). Mahkota sekrup menambahkan langkah ekstra: buka sekrup sebelum menarik.',
    },
    {
      question: 'Dapatkah saya merusak jam tangan dengan menggulung ke belakang?',
      answer: 'Tidak, tetapi tidak ada gunanya. Mesin modern menggunakan kopling selip yang terlepas saat diputar ke belakang, jadi putaran mundur tidak menyebabkan kerusakan tetapi juga tidak menggulung pegas utama. Selalu gulung searah jarum jam untuk gulungan manual. Satu-satunya pengecualian adalah beberapa jam saku vintage dan mesin otomatis awal.',
    },
    {
      question: 'Apa zona bahaya perubahan tanggal dan bagaimana cara menghindarinya?',
      answer: 'Zona bahaya biasanya antara jam 9 malam hingga 3 pagi, saat mekanisme perubahan tanggal secara fisik terhubung dengan roda tanggal. Pengaturan cepat selama waktu ini dapat merusak gigi. Untuk mengatur tanggal dengan aman: majukan waktu melewati jam 3 pagi, atur tanggal ke hari sebelumnya, lalu majukan waktu ke tanggal dan waktu yang benar.',
    },
    {
      question: 'Mengapa jarum detik saya tidak berhenti saat saya menarik mahkota?',
      answer: 'Beberapa mesin tidak memiliki mekanisme henti. Kaliber umum tanpa henti termasuk Miyota 8215, Unitas 6497/6498, dan banyak mesin vintage. Untuk mengatur waktu secara akurat pada mesin tanpa henti: putar mahkota 5-10 menit melewati menit target Anda, lalu putar perlahan mundur hingga jarum menit tepat pada tanda yang diinginkan.',
    },
    {
      question: 'Bagaimana cara mengetahui berapa kali putaran untuk menggulung penuh jam tangan saya?',
      answer: 'Sebagian besar mesin otomatis memerlukan 30-40 putaran penuh mahkota dari posisi mati. Mesin gulung manual bervariasi: Unitas 6498 membutuhkan sekitar 30-35 putaran, sedangkan Seiko 6R35 dengan cadangan daya 70 jam membutuhkan 50-60 putaran. Berhentilah saat Anda merasakan hambatan yang kuat-maksa melewatinya dapat merusak pegas utama.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Temukan kaliber mesin jam Anda',
      text: 'Lihat di bagian belakang casing (sering terukir) atau pada mesin itu sendiri melalui casing belakang transparan. Nomor umum: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Pilih di panduan',
      text: 'Pilih mesin jam Anda dari menu dropdown. Visual mahkota dan panel diperbarui untuk menunjukkan posisi, arah gulungan, dan fitur Anda secara tepat.',
    },
    {
      name: 'Tarik melalui setiap posisi',
      text: 'Klik chip posisi (0-3) atau gunakan tombol Tarik. Baca deskripsi dan perhatikan peringatan zona bahaya untuk pengaturan tanggal.',
    },
    {
      name: 'Terapkan ke jam tangan Anda',
      text: 'Dengan panduan terbuka di samping Anda, praktikkan pada jam tangan Anda yang sebenarnya. Gulung ke arah yang benar, hindari zona bahaya, dan kencangkan sekrup mahkota kembali setelah selesai.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Berapa banyak posisi mahkota yang dimiliki jam tangan saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sebagian besar mesin otomatis memiliki 3 posisi fungsional selain diam: posisi 1 untuk gulungan manual, posisi 2 untuk pengaturan tanggal cepat, dan posisi 3 untuk pengaturan waktu dengan henti.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dapatkah saya merusak jam tangan dengan menggulung ke belakang?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tidak. Mesin modern menggunakan kopling selip yang terlepas saat diputar ke belakang, jadi putaran mundur tidak menyebabkan kerusakan tetapi juga tidak menggulung pegas utama.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Apa zona bahaya perubahan tanggal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zona bahaya biasanya antara jam 9 malam hingga 3 pagi. Untuk mengatur tanggal dengan aman: majukan waktu melewati jam 3 pagi, atur tanggal ke hari sebelumnya, lalu majukan.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mengapa jarum detik saya tidak berhenti saat saya menarik mahkota?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Beberapa mesin tidak memiliki mekanisme henti. Kaliber umum tanpa henti termasuk Miyota 8215 dan Unitas 6497/6498. Untuk mengatur waktu: putar melewati target, lalu perlahan mundur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Berapa putaran untuk menggulung penuh jam tangan saya?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sebagian besar mesin otomatis memerlukan 30-40 putaran penuh mahkota. Mesin gulung manual bervariasi. Berhentilah saat Anda merasakan hambatan yang kuat.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Panduan Referensi Mahkota Jam',
      'operatingSystem': 'Semua',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Memerlukan HTML5. Memerlukan JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Cara Menggunakan Panduan Referensi Mahkota',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Temukan kaliber mesin jam Anda',
          'text': 'Lihat di bagian belakang casing (sering terukir) atau pada mesin itu sendiri melalui casing belakang transparan. Nomor umum: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pilih di panduan',
          'text': 'Pilih mesin jam Anda dari menu dropdown. Visual mahkota dan panel diperbarui untuk menunjukkan posisi, arah gulungan, dan fitur Anda secara tepat.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tarik melalui setiap posisi',
          'text': 'Klik chip posisi (0-3) atau gunakan tombol Tarik. Baca deskripsi dan perhatikan peringatan zona bahaya untuk pengaturan tanggal.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Terapkan ke jam tangan Anda',
          'text': 'Dengan panduan terbuka di samping Anda, praktikkan pada jam tangan Anda yang sebenarnya. Gulung ke arah yang benar, hindari zona bahaya, dan kencangkan sekrup mahkota kembali setelah selesai.',
        },
      ],
    },
  ],
};
