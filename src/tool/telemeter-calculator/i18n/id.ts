import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Kalkulator Telemetri: Cara Menggunakan Telemetri Jam Tangan';
const description = 'Pelajari cara menggunakan bezel telemetri jam tangan. Hitung jarak dari kilat ke guntur berdasarkan suhu udara.';
const faq = [
  { "question": "Untuk apa skala telemeter pada jam tangan?", "answer": "Skala ini menghitung jarak antara pemakai dan peristiwa yang terlihat sekaligus terdengar, seperti kilat dan guntur." },
  { "question": "Bagaimana menghitung jarak kilat dengan telemeter?", "answer": "Mulai kronograf saat melihat kilat, hentikan saat mendengar guntur, lalu baca angka pada skala yang ditunjuk jarum detik." },
  { "question": "Apa perbedaan takimeter dan telemeter?", "answer": "Takimeter mengukur kecepatan pada jarak tertentu. Telemeter mengukur jarak berdasarkan waktu dan kecepatan suara." },
  { "question": "Seberapa akurat skala telemeter?", "answer": "Skala biasanya dikalibrasi pada 20°C atau 343 m/s. Perubahan suhu dapat menimbulkan sedikit perbedaan." },
  { "question": "Bisakah telemeter digunakan di dalam air?", "answer": "Tidak. Suara bergerak lebih dari empat kali lebih cepat di dalam air daripada di udara." }
];
const howTo = [
  { "name": "Atur satuan dan suhu", "text": "Pilih satuan metrik atau imperial lalu masukkan suhu udara sekitar." },
  { "name": "Mulai kronograf saat kilat terlihat", "text": "Klik Picu Kilat atau tekan tombol kronograf pada posisi jam dua saat melihat kilat." },
  { "name": "Hentikan saat mendengar guntur", "text": "Klik Picu Suara atau tekan tombol yang sama tepat saat mendengar guntur." },
  { "name": "Baca jaraknya", "text": "Baca jarak pada tampilan hasil atau langsung dari posisi jarum pada bezel telemeter." }
];

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
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
