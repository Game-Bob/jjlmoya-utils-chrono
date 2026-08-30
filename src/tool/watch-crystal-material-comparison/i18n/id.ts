import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildWatchCrystalSeo } from '../../localeSeo';

const faq = [
  { "question": "Kristal jam tangan mana yang paling tahan gores?", "answer": "Kristal safir paling tahan gores dengan kekerasan Mohs 9. Kristal mineral sekitar 5, sedangkan hesalit 2-3 dan mudah tergores tetapi dapat dipoles." },
  { "question": "Apakah kristal hesalit yang tergores bisa diperbaiki?", "answer": "Bisa. Akrilik hesalit dapat dipoles dengan produk seperti Polywatch. Kristal mineral dan safir biasanya harus diganti jika tergores." },
  { "question": "Apakah kristal safir tidak bisa pecah?", "answer": "Tidak. Safir sangat keras tetapi dapat retak karena benturan kuat. Hesalit paling tahan benturan karena dapat berubah bentuk." },
  { "question": "Kristal apa yang terbaik untuk jam selam?", "answer": "Safir adalah standar jam selam karena tahan gores dan tekanan di bawah air." }
];
const howTo = [
  { "name": "Pilih jenis kristal", "text": "Klik kristal pada daftar di kiri untuk melihat kartu statistiknya." },
  { "name": "Bandingkan dua kristal", "text": "Seret satu kristal ke kristal lain untuk membandingkannya berdampingan." },
  { "name": "Tutup perbandingan", "text": "Klik tutup perbandingan untuk kembali ke tampilan satu kristal." }
];
const description = 'Bandingkan kristal jam tangan hesalit, mineral, dan safir dengan kartu statistik interaktif. Lihat kekerasan, kejelasan, ketahanan benturan, dan gores.';
const title = 'Perbandingan Kaca Jam: Hesalite vs Mineral vs Safir';

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
  seo: buildWatchCrystalSeo({ title, description, faq, howTo }),
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
