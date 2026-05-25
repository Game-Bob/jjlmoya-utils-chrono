import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

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
  seo: [
    { type: 'title', text: 'Pelacak Interval Servis Jam Tangan: Lindungi Investasi Anda', level: 2 },
    { type: 'paragraph', html: 'Jam tangan mekanis adalah instrumen presisi dengan ratusan komponen bergerak. Pelumas dapat mengering, gasket rusak, dan akurasi berkurang seiring waktu.' },
  ],
  faq: [
    {
      question: 'Seberapa sering jam tangan otomatis harus diservis?',
      answer: 'Sebagian besar produsen merekomendasikan servis setiap 3 hingga 5 tahun sekali. Jam tangan biasanya dapat bertahan 5-7 tahun sebelum kinerjanya menurun.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Tambah jam tangan', text: 'Masukkan nama jam, jenis mesin, dan tanggal servis terakhir. Alat akan menghitung jadwal servis berikutnya secara otomatis.' }
  ],
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
