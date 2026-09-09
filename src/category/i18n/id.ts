import type { CategoryLocaleContent } from "../../types";

const slug = "horologi";
const title = "Alat Horologi & Panduan Referensi";
const description =
  "Alat horologi untuk penggemar jam tangan: periksa akurasi, demagnetisasi mesin, hitung waktu pemakaian, dan lihat posisi crown pada kaliber populer.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Meja kerja untuk memahami waktu", level: 2 },
    {
      type: "paragraph",
      html: `Horologi dimulai ketika dial bukan lagi sekadar gambar, melainkan sistem yang dapat dibaca. Koleksi ini menyatukan instrumen untuk mengamati laju, memahami ritme mesin, membaca gerakan crown, dan mengambil keputusan dengan konteks yang lebih baik. Koleksi ini bukan pengganti meja kerja pembuat jam; ia mengubah pertanyaan sehari-hari menjadi eksplorasi kecil, dengan hasil yang jelas dan antarmuka yang memberi ruang bagi rasa ingin tahu.`,
    },
    { type: "title", text: "Presisi yang dapat dilihat", level: 2 },
    {
      type: "paragraph",
      html: `Periksa seberapa cepat atau lambat sebuah jam, konversikan frekuensi antara VPH dan Hz, lalu lihat bagaimana kondisi pemakaian dapat mengubah hasilnya. Alat presisi ini dibuat untuk membandingkan, mengulang, dan belajar: setiap angka mempertahankan satuannya, setiap konversi mempertahankan maknanya, dan setiap hasil membangun intuisi mekanis. Akurasi tidak lagi menjadi abstraksi, melainkan pengalaman yang dapat diamati.`,
    },
    { type: "title", text: "Referensi untuk gerakan mekanis", level: 2 },
    {
      type: "paragraph",
      html: `Crown, mainspring, kristal, lume, dan rangkaian roda gigi masing-masing menceritakan kisah berbeda tentang objek yang sama. Jelajahi posisi crown, ikuti rangkaian roda gigi, bandingkan material, dan lihat komplikasi seperti fase bulan, kalender perpetual, serta tourbillon. Semuanya berjalan di browser dan data penggunaan tetap berada di perangkat Anda: perpustakaan praktis untuk mengoleksi, memperbaiki, menyetel, dan mengamati jam dengan lebih saksama.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumen", value: "25", icon: "mdi:tools" },
        { label: "Caliber", value: "8+", icon: "mdi:engine" },
        { label: "Bahasa", value: "15", icon: "mdi:translate" },
        { label: "Privasi Data", value: "Lokal", icon: "mdi:shield-check" },
      ],
    },
  ],
};
