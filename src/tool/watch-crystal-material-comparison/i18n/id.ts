import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: 'Kristal jam tangan mana yang paling tahan gores?', answer: 'Kristal safir adalah yang paling tahan gores dengan kekerasan 9 pada skala Mohs - hanya berlian yang lebih keras. Mineral (5) sedang, sementara hesalit (2-3) mudah tergores tetapi bisa dipoles.' },
  { question: 'Bisakah kristal hesalit yang tergores diperbaiki?', answer: 'Ya, goresan pada hesalit dapat dipoles dengan Polywatch dalam hitungan menit. Kristal mineral dan safir tidak bisa dipoles dan harus diganti.' },
  { question: 'Kristal mana yang terbaik untuk jam tangan selam?', answer: 'Safir adalah standar untuk jam tangan selam karena ketahanan gores dan daya tahannya. Hesalit tidak disarankan untuk menyelam.' },
];
const howTo = [
  { name: 'Pilih kristal', text: 'Klik kristal di kiri untuk melihat kartu statistiknya di kanan.' },
  { name: 'Bandingkan dua kristal', text: 'Seret kristal dari daftar dan jatuhkan ke kristal lain untuk membandingkannya.' },
  { name: 'Tutup perbandingan', text: 'Klik "Close Comparison" untuk kembali ke tampilan tunggal.' },
];
const title = 'Perbandingan Kristal Jam Tangan: Hesalite vs Mineral vs Safir';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'perbandingan-kristal-jam-tangan-hesalit-mineral-safir',
  title,
  description: 'Bandingkan kristal jam tangan hesalit, mineral, dan safir dengan kartu statistik interaktif. Lihat kekerasan, kejelasan, ketahanan benturan, dan gores.',
  ui: {
    title: 'Perbandingan Kristal', subTitle: 'Interactive Crystal Stats', hardness: 'Kekerasan', clarity: 'Kejelasan',
    impactResistance: 'Benturan', scratchResistance: 'Gores', durability: 'Daya Tahan', priceRange: 'Harga',
    step1: 'Klik kristal di kiri.', step2: 'Seret satu ke atas yang lain untuk membandingkan.',
    step3: 'Klik Tutup.', tipTitle: 'Tips',
    tipContent: 'Peringkat keseluruhan adalah rata-rata semua statistik. Lebih tinggi tidak selalu lebih baik - hesalit memiliki ketahanan benturan terbaik.',
    dragHint: 'Seret', dragSub: 'untuk membandingkan',
  },
  seo: [
    { type: 'title', text: 'Perbandingan Kristal Jam Tangan: Hesalit vs Mineral vs Safir', level: 2 },
    { type: 'paragraph', html: 'Bandingkan <strong>hesalit, mineral, dan safir</strong> dengan kartu statistik interaktif.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
