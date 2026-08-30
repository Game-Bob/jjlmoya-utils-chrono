import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Pelacak Interval Servis Jam Tangan';
const description = 'Lacak dan kelola interval servis koleksi jam tangan Anda. Ketahui kapan waktu perawatan setiap jam tangan dengan mudah.';
const faq = [
  {
    "question": "Seberapa sering jam otomatis perlu diservis?",
    "answer": "Sebagian besar produsen menyarankan servis setiap 3 hingga 5 tahun. Dalam praktiknya, banyak jam tetap berfungsi baik selama 5 hingga 7 tahun."
  },
  {
    "question": "Apakah jam kuarsa memerlukan perawatan berkala?",
    "answer": "Ya, baterai sebaiknya diganti setiap 2-3 tahun untuk mencegah kebocoran. Pemeriksaan gasket lengkap disarankan setiap 5-10 tahun."
  },
  {
    "question": "Apa yang terjadi jika jam tidak pernah diservis?",
    "answer": "Pelumas mengering sehingga gesekan dan keausan pada poros serta permata meningkat. Akibatnya, kerusakan dapat menjadi mahal."
  },
  {
    "question": "Bolehkah saya memaksa pemutaran jam mekanis manual?",
    "answer": "Jam manual modern memiliki batas yang jelas saat pegas sudah penuh. Jangan memaksa mahkota ketika terasa menahan."
  },
  {
    "question": "Apakah interval berubah sesuai pemakaian harian atau sesekali?",
    "answer": "Ya, jam yang dipakai setiap hari lebih cepat aus dan perlu diperiksa setiap 3 tahun, sedangkan pemakaian sesekali dapat bertahan 5 tahun."
  }
];
const howTo = [
  {
    "name": "Tambah jam",
    "text": "Masukkan nama, jenis mesin, dan tanggal servis terakhir."
  },
  {
    "name": "Periksa panel",
    "text": "Setiap jam menampilkan bilah kemajuan dan kode warna."
  },
  {
    "name": "Perbarui setelah servis",
    "text": "Setelah jam diservis, perbarui tanggalnya untuk memulai kembali siklus."
  }
];

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'pelacak-interval-servis',
  title: 'Pelacak Interval Servis Jam Tangan',
  description: 'Lacak dan kelola interval servis koleksi jam tangan Anda. Ketahui kapan waktu perawatan setiap jam tangan dengan mudah.',
  ui: {
    title: 'Pelacak Servis',
    addWatch: 'Tambah Jam',
    editWatch: 'Edit Jam',
    cancel: 'Batal',
    save: 'Simpan',
    deleteWatch: 'Hapus',
    confirmDelete: 'Hapus jam tangan ini dari koleksi Anda?',
    emptyTitle: 'Koleksi Anda kosong',
    emptyDesc: 'Lacak interval servis jam tangan Anda agar tidak pernah melewatkan jadwal perawatan lagi.',
    emptyAction: 'Tambah jam tangan pertama',
    healthy: 'aman',
    due: 'mendekati',
    overdue: 'terlewat',
    nameLabel: 'Nama jam tangan',
    namePlaceholder: 'mis. Rolex Submariner',
    movementLabel: 'Jenis mesin',
    movementAuto: 'Otomatis',
    movementManual: 'Manual',
    movementQuartz: 'Kuarsa',
    movementKinetic: 'Kinetik',
    dateLabel: 'Tanggal servis terakhir',
    neverServiced: 'Baru atau belum pernah diservis',
    lastServiceLabel: 'Servis terakhir',
    nextServiceLabel: 'Servis berikutnya',
    serviced: 'Diservis',
    newWatch: 'Baru',
    years: 'thn',
    collectionHealth: 'Kesehatan koleksi',
  },
  seo: buildServiceSeo({ title, description, faq, howTo }),
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Seberapa sering jam tangan otomatis harus diservis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sebagian besar produsen merekomendasikan servis setiap 3 hingga 5 tahun sekali.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Pelacak Interval Servis Jam Tangan',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Pelacak Interval Servis Jam Tangan',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Tambah jam tangan',
          'text': 'Masukkan nama jam, jenis mesin, dan tanggal servis terakhir.'
        }
      ]
    }
  ]
};
