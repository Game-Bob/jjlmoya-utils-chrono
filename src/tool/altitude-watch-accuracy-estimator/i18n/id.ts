import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Mengapa jam tangan mekanik berjalan lebih cepat di dataran tinggi?',
    answer: 'Jam tangan mekanik berjalan lebih cepat di dataran tinggi terutama karena berkurangnya kepadatan udara. Udara yang lebih tipis menciptakan hambatan aerodinamis yang lebih kecil pada roda keseimbangan, memungkinkannya berosilasi dengan amplitudo yang sedikit lebih besar. Peningkatan amplitudo ini menyebabkan jam tangan maju - biasanya 2-6 detik per hari per 1.000 m kenaikan elevasi.',
  },
  {
    question: 'Apakah ketinggian juga memengaruhi jam tangan kuarsa?',
    answer: 'Jam tangan kuarsa minimal terpengaruh oleh ketinggian karena tidak memiliki roda keseimbangan mekanis yang berosilasi. Namun, perubahan ketinggian ekstrem dapat memengaruhi kinerja baterai. Efeknya dapat diabaikan dibandingkan dengan jam tangan mekanik.',
  },
  {
    question: 'Bisakah perubahan ketinggian merusak jam tangan saya?',
    answer: 'Perubahan ketinggian saja jarang merusak jam tangan mekanik. Namun, dekompresi cepat (seperti di pesawat) dapat menyebabkan masalah dengan ketahanan air. Variasi ketinggian normal selama perjalanan masih dalam toleransi desain.',
  },
];

const howTo = [
  {
    name: 'Pilih ketinggian',
    text: 'Seret penggeser ketinggian ke atas atau ke bawah untuk mensimulasikan elevasi berbeda, dari permukaan laut hingga 8.000 m. Amati bagaimana osilasi roda keseimbangan dan data atmosfer berubah secara real-time.',
  },
  {
    name: 'Baca deviasi',
    text: 'Tampilan deviasi laju menunjukkan perkiraan detik yang diperoleh per hari pada ketinggian yang dipilih. Grafik deviasi di bawah menunjukkan tren di semua ketinggian.',
  },
  {
    name: 'Pertimbangkan faktor-faktornya',
    text: 'Amati bagaimana kepadatan udara menurun dengan ketinggian sementara deviasi laju meningkat. Data suhu dan tekanan memberikan konteks untuk perubahan lingkungan.',
  },
];

const title = 'Estimator Akurasi Ketinggian: Bagaimana Elevasi Memengaruhi Jam Tangan Mekanik Anda';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'estimator-ketinggian',
  title,
  description: 'Jelajahi bagaimana ketinggian memengaruhi akurasi jam tangan mekanik. Sesuaikan elevasi dari permukaan laut hingga puncak gunung dan lihat perubahan real-time pada osilasi roda keseimbangan, deviasi laju, kepadatan udara, tekanan, dan suhu.',
  ui: {
    title: 'Estimator Akurasi Ketinggian',
    altitudeLabel: 'Ketinggian',
    altitudeUnit: 'm',
    seaLevel: 'Permukaan Laut',
    deviationLabel: 'Deviasi Laju',
    deviationUnit: 's/h',
    pressureLabel: 'Tekanan',
    pressureUnit: 'hPa',
    densityLabel: 'Kepadatan Udara',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Suhu',
    temperatureUnit: '°C',
    oscillationLabel: 'Roda Keseimbangan',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Laju',
    atmDataTitle: 'Kondisi Atmosfer',
    howItWorks: 'Cara Kerja',
    howItWorksDesc: 'Kepadatan udara yang lebih rendah di dataran tinggi mengurangi hambatan pada roda keseimbangan, meningkatkan amplitudo dan menyebabkan jam tangan berjalan lebih cepat. Alat ini memperkirakan deviasi laju berdasarkan model atmosfer standar.',
    negligible: 'Diabaikan',
    minor: 'Kecil',
    noticeable: 'Terlihat',
    significant: 'Signifikan',
    severe: 'Parah',
    step1: 'Seret penggeser untuk mensimulasikan elevasi dari permukaan laut hingga 8.000 m.',
    step2: 'Saksikan animasi roda keseimbangan dan indikator deviasi merespons secara real-time.',
    step3: 'Tinjau data atmosfer untuk memahami faktor lingkungan yang berperan.',
    tipTitle: 'Tips',
    tipContent: 'Efeknya bervariasi menurut gerakan: gerakan ketukan tinggi (36.000 vph) umumnya kurang terpengaruh dibandingkan gerakan ketukan rendah vintage (18.000 vph).',
    deviationChart: 'Deviasi vs Ketinggian',
    altitudeM: 'Ketinggian (m)',
    secondsPerDay: 's/h',
    particleLabel: 'Molekul Udara',
    airDensity: 'Kepadatan Udara',
  },
  seo: [
    { type: 'title', text: 'Estimator Akurasi Ketinggian Interaktif untuk Jam Tangan Mekanik', level: 2 },
    { type: 'paragraph', html: '<strong>Estimator Akurasi Ketinggian</strong> adalah alat interaktif yang memvisualisasikan bagaimana perubahan elevasi memengaruhi presisi jam tangan mekanik. Dengan mensimulasikan ketinggian dari permukaan laut hingga 8.000 m, Anda dapat melihat perkiraan deviasi laju yang disebabkan oleh perubahan kepadatan udara, tekanan, dan suhu.' },
    { type: 'title', text: 'Bagaimana Ketinggian Memengaruhi Akurasi Jam Tangan', level: 3 },
    { type: 'paragraph', html: 'Pada ketinggian yang lebih tinggi, <strong>kepadatan udara menurun</strong>, yang mengurangi hambatan aerodinamis pada roda keseimbangan. Ini memungkinkan roda keseimbangan berosilasi dengan amplitudo lebih besar, menyebabkan jam tangan berjalan sedikit lebih cepat. Efeknya biasanya dalam kisaran <strong>+2 hingga +6 detik per hari</strong> untuk setiap 1.000 m kenaikan elevasi.' },
    { type: 'title', text: 'Deviasi Laju pada Ketinggian Berbeda', level: 3 },
    {
      type: 'table', headers: ['Ketinggian', 'Kepadatan Udara', 'Tekanan', 'Suhu', 'Est. Deviasi'], rows: [
        ['Permukaan Laut (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Dasar'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/h'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/h'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/h'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/h'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/h'],
      ]
    },
    { type: 'title', text: 'Faktor Lingkungan', level: 3 },
    { type: 'paragraph', html: 'Selain kepadatan udara, faktor lingkungan lain di dataran tinggi dapat memengaruhi kinerja jam tangan: <strong>suhu</strong> memengaruhi viskositas pelumas, <strong>perubahan tekanan</strong> dapat memengaruhi penyegelan casing. Namun, efek kepadatan udara pada roda keseimbangan adalah faktor dominan dalam perubahan laju terkait ketinggian.' },
    { type: 'diagnostic', variant: 'info', title: 'Alat Simulasi Interaktif', icon: 'mdi:axis-arrow', badge: 'HOROLOGI', html: 'Alat ini memberikan nilai perkiraan berdasarkan model ISA dan observasi empiris. Hasil aktual bervariasi menurut kaliber gerakan, kondisi, dan toleransi manufaktur.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
