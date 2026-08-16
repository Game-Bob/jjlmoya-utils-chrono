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
  {
    "type": "title",
    "text": "¿Qué es el bisel de telémetro en un reloj?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un telémetro es una escala impresa en la esfera o bisel de un reloj cronógrafo. Permite calcular la distancia a un evento remoto visible y audible."
  },
  {
    "type": "title",
    "text": "Cómo usar la escala de telémetro",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Paso 1: Iniciar el cronógrafo",
        "definition": "Inicia el cronómetro en el momento de ver el destello visual."
      },
      {
        "term": "Paso 2: Detener el cronógrafo",
        "definition": "Detén el cronómetro al escuchar el sonido del trueno."
      },
      {
        "term": "Paso 3: Leer la escala",
        "definition": "La aguja del segundero señalará la distancia en kilómetros o millas."
      }
    ]
  },
  {
    "type": "title",
    "text": "Física del cálculo de distancia",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La luz viaja a ~300.000 km/s (instantánea). El sonido viaja por el aire a unos 343 m/s a 20°C."
  },
  {
    "type": "title",
    "text": "Telémetro vs Taquímetro",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El <strong>taquímetro</strong> mide velocidad en distancia fija. El <strong>telémetro</strong> mide distancia en tiempo variable."
  },
  {
    "type": "title",
    "text": "Tabla de referencia tiempo vs distancia",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Tiempo transcurrido",
      "Distancia (km)",
      "Distancia (millas)",
      "Velocidad del sonido"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Importancia de la temperatura",
    "icon": "mdi:information",
    "badge": "PRECISIÓN",
    "html": "El sonido viaja más rápido en aire caliente. Ajustar la temperatura corrige la medición."
  }
],
faq: [
  { "question": "Untuk apa skala telemeter pada jam tangan?", "answer": "Skala ini menghitung jarak antara pemakai dan peristiwa yang terlihat sekaligus terdengar, seperti kilat dan guntur." },
  { "question": "Bagaimana menghitung jarak kilat dengan telemeter?", "answer": "Mulai kronograf saat melihat kilat, hentikan saat mendengar guntur, lalu baca angka pada skala yang ditunjuk jarum detik." },
  { "question": "Apa perbedaan takimeter dan telemeter?", "answer": "Takimeter mengukur kecepatan pada jarak tertentu. Telemeter mengukur jarak berdasarkan waktu dan kecepatan suara." },
  { "question": "Seberapa akurat skala telemeter?", "answer": "Skala biasanya dikalibrasi pada 20°C atau 343 m/s. Perubahan suhu dapat menimbulkan sedikit perbedaan." },
  { "question": "Bisakah telemeter digunakan di dalam air?", "answer": "Tidak. Suara bergerak lebih dari empat kali lebih cepat di dalam air daripada di udara." }
],
  bibliography,
howTo: [
  { "name": "Atur satuan dan suhu", "text": "Pilih satuan metrik atau imperial lalu masukkan suhu udara sekitar." },
  { "name": "Mulai kronograf saat kilat terlihat", "text": "Klik Picu Kilat atau tekan tombol kronograf pada posisi jam dua saat melihat kilat." },
  { "name": "Hentikan saat mendengar guntur", "text": "Klik Picu Suara atau tekan tombol yang sama tepat saat mendengar guntur." },
  { "name": "Baca jaraknya", "text": "Baca jarak pada tampilan hasil atau langsung dari posisi jarum pada bezel telemeter." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
