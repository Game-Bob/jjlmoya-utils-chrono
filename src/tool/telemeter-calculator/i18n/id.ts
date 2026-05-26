import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'kalkulator-telemetri',
  title: 'Kalkulator Telemetri: Cara Menggunakan Telemetri Jam Tangan',
  description: 'Pelajari cara menggunakan bezel telemetri jam tangan. Hitung jarak dari kilat ke guntur berdasarkan suhu udara.',
  ui: {
    title: 'Kalkulator Telemetri',
    triggerFlash: 'Picu Kilat',
    triggerSound: 'Picu Suara',
    stop: 'Hentikan',
    reset: 'Atur Ulang',
    settings: 'Pengaturan',
    unitSystem: 'Sistem Satuan',
    metric: 'Metrik (km)',
    imperial: 'Imperial (mil)',
    temperature: 'Suhu Udara',
    speedOfSound: 'Kecepatan Suara',
    distanceResult: 'Jarak Terukur',
    elapsedTime: 'Waktu Berjalan',
    historyTitle: 'Riwayat Pengukuran',
    noHistory: 'Belum ada pengukuran. Mulai perhitungan di atas!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mil',
    ft: 'kaki',
    step1: 'Klik tombol di posisi jam 2 atau "Picu Kilat" saat Anda melihat kilatan.',
    step2: 'Klik lagi atau klik "Picu Suara" saat Anda mendengar guntur.',
    step3: 'Baca jarak di mana jarum detik berhenti pada bezel telemetri.',
    tipTitle: 'Tips Pro',
    tipContent: 'Udara hangat menghantarkan suara lebih cepat daripada udara dingin. Menyesuaikan suhu memastikan perhitungan jarak sesuai dengan kondisi lingkungan Anda.',
  },
  seo: [
    { type: 'title', text: 'Apa itu Bezel Telemetri pada Jam Tangan?', level: 2 },
    { type: 'paragraph', html: 'Telemetri adalah skala yang dicetak pada dial atau bezel jam tangan kronograf. Skala ini memungkinkan pengguna menghitung perkiraan jarak ke peristiwa jauh yang dapat dilihat dan didengar (seperti kilat, kembang api, atau ledakan).' },
  ],
  faq: [
    {
      question: 'Bagaimana cara menggunakan bezel telemetri?',
      answer: 'Mulai kronograf saat Anda melihat peristiwa (seperti kilatan). Hentikan saat Anda mendengar suara (guntur). Jarum detik akan menunjuk ke jarak pada skala.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Konfigurasikan Satuan dan Lingkungan',
      text: 'Pilih satuan satuan yang Anda inginkan dan atur suhu udara saat ini di lokasi Anda.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
