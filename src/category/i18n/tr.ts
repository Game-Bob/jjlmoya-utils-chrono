import type { CategoryLocaleContent } from "../../types";

const slug = "horoloji";
const title = "Horoloji Araçları & Referans Kılavuzları";
const description =
  "Saat tutkunları için horoloji araçları: hassasiyeti kontrol edin, mekanizmaları demanyetize edin, kullanım süresini hesaplayın ve popüler kalibrelerin kurma kolu konumlarına bakın.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    {
      type: "title",
      text: "Zamanı anlamak için bir çalışma tezgâhı",
      level: 2,
    },
    {
      type: "paragraph",
      html: `Saatçilik, kadran bir görüntü olmaktan çıkıp okunabilen bir sisteme dönüştüğünde başlar. Bu koleksiyon; gidişi gözlemlemek, mekanizmanın ritmini yorumlamak, kurma kolunun hareketini anlamak ve daha fazla bağlamla karar vermek için araçları bir araya getirir. Bir saat ustasının tezgâhının yerini tutmaz; günlük soruları, meraka yer bırakan arayüz ve anlaşılır sonuçlarla küçük keşiflere dönüştürür.`,
    },
    { type: "title", text: "Görülebilen hassasiyet", level: 2 },
    {
      type: "paragraph",
      html: `Bir saatin ne kadar ileri ya da geri kaldığını kontrol edin, frekansı VPH ile Hz arasında dönüştürün ve bilekteki kullanım koşullarının sonucu nasıl değiştirebileceğini keşfedin. Hassasiyet araçları karşılaştırmak, tekrarlamak ve öğrenmek için tasarlandı: her sayı birimini, her dönüşüm anlamını korur ve her sonuç mekanik sezgi oluşturur. Böylece doğruluk soyut bir kavram olmaktan çıkar, görülebilen bir deneyime dönüşür.`,
    },
    { type: "title", text: "Mekanik hareket için referanslar", level: 2 },
    {
      type: "paragraph",
      html: `Kurma kolu, zemberek, cam, lume ve dişli treni aynı nesne hakkında farklı hikâyeler anlatır. Kurma kolu konumlarını inceleyin, dişli trenini takip edin, malzemeleri karşılaştırın ve ay evresi, sürekli takvim veya tourbillon gibi komplikasyonları keşfedin. Her şey tarayıcıda çalışır ve kullanım verileri cihazınızda kalır: saatleri toplamak, onarmak, ayarlamak ve daha dikkatli incelemek için pratik bir kütüphane.`,
    },
    { type: "title", text: "Bir malzeme olarak zaman", level: 2 },
    {
      type: "paragraph",
      html: `Bir saat yalnızca zamanı göstermez. Gerilim, sıcaklık, ritim ve kullanım geçmişini taşır. Bu yüzden bu sayfa bir gözlemevi gibi tasarlandı. Bir sayıdan başlayın, bir çarkı takip edin, bir oranı karşılaştırın ya da bir mekanizmanın hareketini izlemek için durun. Her araç görünmeyen bir işlemi gözün ve elin anlayabileceği bir sahneye dönüştürür.`,
    },
    { type: "title", text: "Geri dönülebilecek bir kütüphane", level: 2 },
    {
      type: "paragraph",
      html: `Koleksiyonda acele etmeden dolaşın ve soru değiştiğinde geri gelin. Rehberler satın alma hazırlığına yardım eder, hesaplayıcılar sezgiyi sınar ve görselleştirmeler genellikle kasanın içinde saklı kalanları ortaya çıkarır. Birlikte açık bir horoloji atlası oluştururlar: gerektiğinde kesin, nesne ilgi istediğinde duyarlı.`,
    },
    {
      type: "stats",
      items: [
        { label: "Enstrümanlar", value: "25", icon: "mdi:tools" },
        { label: "Kalibreler", value: "8+", icon: "mdi:engine" },
        { label: "Diller", value: "15", icon: "mdi:translate" },
        { label: "Veri Gizliliği", value: "Yerel", icon: "mdi:shield-check" },
      ],
    },
  ],
};
