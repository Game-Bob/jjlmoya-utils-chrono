import type { ToolLocaleContent } from "../../../types";
import type { StrapLengthCalculatorUI } from "../entry";
import { bibliography } from "../bibliography";

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: "kalkulator-panjang-tali",
  title: "Kalkulator Panjang Tali Arloji",
  description: "Hitung ukuran tali yang ideal untuk pergelangan tangan Anda. Dapatkan rekomendasi untuk tali dua bagian dan NATO berdasarkan ukuran pergelangan tangan dan dimensi arloji.",
  ui: {
    title: "Kalkulator Panjang Tali",
    wristLabel: "Lingkar pergelangan tangan",
    wristPlaceholder: "mis. 170",
    lugLabel: "Jarak lug-to-lug",
    lugPlaceholder: "mis. 45",
    fitLabel: "Kesesuaian yang diinginkan",
    fitTight: "Kencang",
    fitRegular: "Normal",
    fitLoose: "Longgar",
    unitLabel: "Satuan",
    standardLabel: "Ukuran standar",
    bespokeLabel: "Ukuran khusus",
    natoLabel: "Panjang tali NATO",
    longSide: "Sisi panjang",
    shortSide: "Sisi pendek",
    totalLength: "Panjang total",
    millimeters: "mm",
    inches: "in",
    sizeXS: "Extra Small (XS) - Pergelangan < 6.0 in",
    sizeS: "Small (S) - Pergelangan 6.0 hingga 6.5 in",
    sizeM: "Medium (M) - Pergelangan 6.5 hingga 7.0 in",
    sizeL: "Large (L) - Pergelangan 7.0 hingga 7.5 in",
    sizeXL: "Extra Large (XL) - Pergelangan 7.5 hingga 8.0 in",
    sizeXXL: "Double Extra Large (XXL) - Pergelangan > 8.0 in",
  },
  seo: [
    { type: "title", text: "Panduan Ukuran Tali Arloji & Kalkulator Panjang", level: 2 },
    { type: "paragraph", html: "Memilih tali arloji yang sempurna sangat penting untuk kenyamanan dan keseimbangan estetika. Tali yang terlalu panjang meninggalkan ujung yang tidak rapi, sedangkan tali yang terlalu pendek mungkin tidak dapat dikencangkan dengan aman. Panduan ini membantu Anda menentukan ukuran standar, ukuran khusus, dan panjang tali NATO berdasarkan ukuran pergelangan tangan, desain arloji, dan kesesuaian yang diinginkan." },
    { type: "stats", items: [{ value: "120/80mm", label: "Ukuran standar" }, { value: "160-190mm", label: "Cocok untuk sebagian besar pergelangan" }, { value: "7 lubang", label: "Opsi penyesuaian tipikal" }], columns: 3 },
    { type: "title", text: "Memahami tali dua bagian: Sisi panjang vs. sisi pendek", level: 3 },
    { type: "paragraph", html: "Tali arloji dua bagian didefinisikan oleh dua angka, seperti <strong>120/80 mm</strong>. Angka pertama (mis. 120 mm) adalah <strong>sisi panjang</strong> (sisi ujung), yang dipasang di posisi jam 6. Angka kedua (mis. 80 mm) adalah <strong>sisi pendek</strong> (sisi gesper), yang dipasang di posisi jam 12. Gesper itu sendiri tidak termasuk dalam pengukuran ini." },
    { type: "title", text: "Tabel ukuran standar berdasarkan lingkar pergelangan tangan", level: 3 },
    { type: "table", headers: ["Ukuran pergelangan", "Tali kulit/karet", "Tali NATO", "Kesesuaian yang disarankan"], rows: [["150-164 mm (5.9\"-6.5\")", "110/70 mm", "260 mm", "Kencang/kecil"], ["165-178 mm (6.5\"-7.0\")", "120/80 mm", "270 mm", "Sedang standar"], ["179-190 mm (7.0\"-7.5\")", "130/80 mm", "280 mm", "Besar standar"], ["191-203 mm (7.5\"-8.0\")", "135/85 mm", "290 mm", "Ekstra besar"], ["204 mm+ (8.0\"+)", "140/85 mm", "300 mm", "Ganda ekstra besar"]] },
    { type: "title", text: "Penjelasan ukuran khusus", level: 3 },
    { type: "paragraph", html: "Saat memesan tali khusus, Anda dapat menargetkan kesesuaian yang sempurna. Alih-alih puas dengan posisi lubang standar, tali khusus menghitung panjang yang tepat untuk setiap sisi sehingga gesper berada tepat di tengah bagian bawah pergelangan tangan Anda. Rumusnya menggunakan lingkar pergelangan tangan total, mengurangi jarak lug-to-lug arloji, dan membagi sisa panjang sesuai geometri pergelangan tangan." },
    { type: "comparative", items: [{ title: "Tali khusus", description: "Dibuat khusus untuk pergelangan tangan dan dimensi casing Anda. Menjamin gesper terpusat sempurna dan menghilangkan ujung tali berlebih.", points: ["Pemusatan gesper sempurna", "Posisi lubang khusus", "Tanpa ujung tali berlebih", "Tampilan dan nuansa premium"] }, { title: "Tali standar", description: "Ukuran produksi massal yang dirancang untuk berbagai pergelangan tangan menggunakan beberapa lubang penyesuaian. Cepat dan ekonomis.", points: ["Biaya lebih rendah", "Ketersediaan langsung", "Cocok untuk banyak arloji", "Dimensi standar"] }], columns: 2 },
    { type: "title", text: "Terminologi penting tali arloji", level: 3 },
    { type: "glossary", items: [{ term: "Jarak Lug-to-Lug", definition: "Jarak vertikal total dari ujung lug atas ke ujung lug bawah. Ini bukan diameter casing, tetapi panjang total kepala arloji yang kaku di pergelangan tangan Anda." }, { term: "Sisi pendek (Gesper)", definition: "Bagian tali yang dipasang di posisi jam 12 casing. Termasuk gesper tetapi dikecualikan dalam pengukuran panjang." }, { term: "Sisi panjang (Ujung)", definition: "Bagian tali yang dipasang di posisi jam 6. Memiliki lubang penyesuaian untuk mengatur kekencangan." }, { term: "Tali NATO", definition: "Tali nilon satu bagian yang melilit di bawah casing arloji melalui pegas batang. Sangat dapat disesuaikan dan tahan lama." }] },
    { type: "tip", title: "Mengukur pergelangan tangan dengan benar", html: "Untuk pengukuran yang akurat, lilitkan pita ukur fleksibel (tidak terlalu kencang) di sekitar area tempat Anda biasanya memakai arloji. Jika tidak memiliki pita ukur, gunakan tali atau selembar kertas, tandai tumpang tindihnya, dan ukur panjangnya dengan penggaris." },
    { type: "title", text: "Mengapa jarak lug-to-lug penting untuk ukuran tali", level: 3 },
    { type: "paragraph", html: "Banyak kolektor lupa bahwa casing arloji bertindak sebagai perpanjangan kaku dari tali. Arloji dengan jarak lug-to-lug panjang 50 mm memakan lebih banyak ruang di pergelangan tangan daripada arloji dress 40 mm. Akibatnya, arloji yang lebih besar memerlukan tali yang lebih pendek untuk mencapai ukuran lingkaran total yang sama. Tidak memperhitungkan jarak lug-to-lug adalah alasan nomor satu untuk tali yang tidak pas." },
    { type: "diagnostic", variant: "warning", title: "Menghindari pergeseran gesper dan overhang casing", html: "Jika sisi pendek tali terlalu panjang atau terlalu pendek untuk pergelangan tangan Anda, gesper akan bergeser ke samping. Ini menyebabkan casing arloji bergeser dari tengah, menyebabkan ketidaknyamanan dan meningkatkan risiko goresan pada casing atau pengunci. Selalu usahakan agar gesper berada di tengah bagian bawah pergelangan tangan yang datar." },
    { type: "proscons", title: "Tali NATO vs. tali dua bagian", items: [{ pro: "Tali NATO sangat dapat disesuaikan dan mencegah hilangnya arloji jika pegas batang patah.", con: "Tali NATO menambah ketebalan di bawah casing arloji." }, { pro: "Tali dua bagian menjaga casing tetap rata di kulit untuk profil yang lebih tipis.", con: "Tali dua bagian memerlukan ukuran yang presisi dan menawarkan lebih sedikit penyesuaian." }] },
  ],
  faq: [
    { question: "Bagaimana cara mengukur panjang tali arloji?", answer: "Panjang tali arloji biasanya dinyatakan dalam dua angka seperti 120/80 mm. Angka pertama adalah panjang sisi panjang (ujung), dan angka kedua adalah sisi pendek (gesper)." },
    { question: "Di mana posisi gesper yang benar di pergelangan tangan?", answer: "Idealnya, gesper harus berada di tengah bagian bawah pergelangan tangan. Jika bergeser, casing arloji akan keluar dari tengah. Menyesuaikan rasio sisi panjang dan pendek membantu mencapai pemusatan sempurna." },
    { question: "Bagaimana jarak lug-to-lug memengaruhi panjang tali yang saya butuhkan?", answer: "Casing arloji adalah bagian kaku dari lingkaran tali total. Arloji yang lebih besar dengan jarak lug-to-lug panjang (mis. 50 mm) mengurangi panjang tali yang diperlukan untuk melingkari pergelangan dibandingkan arloji yang lebih kecil (mis. 40 mm) di pergelangan yang sama." },
    { question: "Di sisi mana ujung panjang tali arloji berada?", answer: "Secara tradisional, sisi panjang tali (berisi lubang penyesuaian) dipasang di posisi jam 6 casing, mengarah ke Anda. Sisi pendek (dengan gesper) dipasang di posisi jam 12." },
    { question: "Seberapa kencang tali arloji harus dipasang?", answer: "Tali harus kencang tetapi nyaman. Anda harus bisa memasukkan satu jari ke bawah tali tanpa memaksanya. Tali yang terlalu kencang dapat membatasi sirkulasi darah, sedangkan tali yang terlalu longgar akan membuat casing berputar." },
    { question: "Bisakah saya menggunakan tali NATO di arloji apa pun?", answer: "Ya, selama arloji memiliki pegas batang standar dengan ruang yang cukup antara casing dan batang. Tali NATO melilit di bawah casing, jadi ruang yang sangat sempit mungkin memerlukan pegas batang melengkung atau bahan tali yang lebih tipis." },
  ],
  bibliography,
  howTo: [
    { name: "Ukur pergelangan tangan", text: "Gunakan pita ukur fleksibel untuk menemukan lingkar pergelangan tangan dalam milimeter atau inci." },
    { name: "Ukur jarak lug-to-lug", text: "Ukur tinggi casing arloji dari ujung lug atas ke ujung lug bawah." },
    { name: "Pilih kesesuaian yang diinginkan", text: "Pilih apakah Anda menginginkan kesesuaian yang kencang, normal, atau longgar." },
    { name: "Hitung rekomendasi", text: "Tinjau ukuran standar, ukuran khusus sisi panjang/pendek, dan panjang NATO yang ideal." },
  ],
  schemas: [
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Bagaimana cara mengukur panjang tali arloji?", "acceptedAnswer": { "@type": "Answer", "text": "Panjang tali arloji biasanya dinyatakan dalam dua angka seperti 120/80 mm. Angka pertama adalah panjang sisi panjang (ujung), dan angka kedua adalah sisi pendek (gesper)." } },
      { "@type": "Question", "name": "Di mana posisi gesper yang benar di pergelangan tangan?", "acceptedAnswer": { "@type": "Answer", "text": "Idealnya, gesper harus berada di tengah bagian bawah pergelangan tangan. Jika bergeser, casing arloji akan keluar dari tengah. Menyesuaikan rasio sisi panjang dan pendek membantu mencapai pemusatan sempurna." } },
      { "@type": "Question", "name": "Bagaimana jarak lug-to-lug memengaruhi panjang tali yang saya butuhkan?", "acceptedAnswer": { "@type": "Answer", "text": "Casing arloji adalah bagian kaku dari lingkaran tali total. Arloji yang lebih besar dengan jarak lug-to-lug panjang (mis. 50 mm) mengurangi panjang tali yang diperlukan untuk melingkari pergelangan dibandingkan arloji yang lebih kecil (mis. 40 mm) di pergelangan yang sama." } },
      { "@type": "Question", "name": "Di sisi mana ujung panjang tali arloji berada?", "acceptedAnswer": { "@type": "Answer", "text": "Secara tradisional, sisi panjang tali (berisi lubang penyesuaian) dipasang di posisi jam 6 casing, mengarah ke Anda. Sisi pendek (dengan gesper) dipasang di posisi jam 12." } },
      { "@type": "Question", "name": "Seberapa kencang tali arloji harus dipasang?", "acceptedAnswer": { "@type": "Answer", "text": "Tali harus kencang tetapi nyaman. Anda harus bisa memasukkan satu jari ke bawah tali tanpa memaksanya. Tali yang terlalu kencang dapat membatasi sirkulasi darah, sedangkan tali yang terlalu longgar akan membuat casing berputar." } },
      { "@type": "Question", "name": "Bisakah saya menggunakan tali NATO di arloji apa pun?", "acceptedAnswer": { "@type": "Answer", "text": "Ya, selama arloji memiliki pegas batang standar dengan ruang yang cukup antara casing dan batang. Tali NATO melilit di bawah casing, jadi ruang yang sangat sempit mungkin memerlukan pegas batang melengkung atau bahan tali yang lebih tipis." } }
    ] } as any,
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Kalkulator Panjang Tali Arloji", "operatingSystem": "All", "applicationCategory": "LifestyleApplication", "browserRequirements": "Requires HTML5. Requires JavaScript." } as any,
    { "@context": "https://schema.org", "@type": "HowTo", "name": "Kalkulator Panjang Tali Arloji", "step": [
      { "@type": "HowToStep", "name": "Ukur pergelangan tangan", "text": "Gunakan pita ukur fleksibel untuk menemukan lingkar pergelangan tangan dalam milimeter atau inci." },
      { "@type": "HowToStep", "name": "Ukur jarak lug-to-lug", "text": "Ukur tinggi casing arloji dari ujung lug atas ke ujung lug bawah." },
      { "@type": "HowToStep", "name": "Pilih kesesuaian yang diinginkan", "text": "Pilih apakah Anda menginginkan kesesuaian yang kencang, normal, atau longgar." },
      { "@type": "HowToStep", "name": "Hitung rekomendasi", "text": "Tinjau ukuran standar, ukuran khusus sisi panjang/pendek, dan panjang NATO yang ideal." }
    ] } as any
  ]
};
