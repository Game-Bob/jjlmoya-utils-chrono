import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Bir saatin gerçek GMT mi yoksa caller GMT mi olduğunu nasıl anlarım?',
    answer: '<strong>Gerçek GMT</strong> ("flyer" GMT olarak da bilinir) yerel saat akrebinin bağımsız olarak ayarlanmasına olanak tanır - sık sık saat dilimi değiştiren gezginler için idealdir. <strong>Caller GMT</strong>, ana akrep sabit kalırken GMT kolunun ayrı olarak ayarlandığı, üretimi daha ucuz olan bir mekanizmadır. Ayırt etmek için: kurma kolunu saat ayar konumuna çekin ve çevirin. Akrep bir saatlik artışlarla durmadan atlıyorsa gerçek GMT\'dir. GMT kolu hareket ediyorsa caller\'dır. Rolex, GMT-Master II\'de gerçek GMT kalibresi (3285) kullanırken, birçok uygun fiyatlı mikromarka Seiko NH34 gibi caller mekanizmaları tercih eder.',
  },
  {
    question: 'GMT saat ile World Timer arasındaki fark nedir?',
    answer: 'Bir <strong>GMT saati</strong> genellikle iki saat dilimini takip eder - yerel saatiniz ve bir referans (genellikle UTC) - 24 saat kolu ve 24 saat bezeli kullanarak. Bir <strong>World Timer</strong> ise 24 saat dilimini aynı anda gösterir: kadranın etrafında bir şehir halkası ve dönen bir 24 saat diski bulunur. Patek Philippe 5230P veya JLC Geophysic Universal Time gibi World Timer\'lar, herhangi bir şehirdeki saati anında okumanızı sağlar. GMT\'ler daha basit ve daha uygun fiyatlıdır; World Timer\'lar mekanik olarak daha karmaşık ve genellikle daha pahalıdır. Bu araç, ihtiyacınız kadar şehir eklemenize izin veren dijital bir World Timer gibi çalışır.',
  },
  {
    question: 'Kadranında "GMT" yazan bir saat hangi saat dilimini gösterir?',
    answer: 'Bir saatin kadranında "GMT" yazdığında, <strong>GMT kolu</strong> (genellikle renkli bir ok ucuna sahip dördüncü kol) saati 24 saat formatında gösterir. Çoğu kullanıcı bu kolu UTC\'ye (Eşgüdümlü Evrensel Zaman) ayarlar çünkü tüm saat dilimleri UTC\'den fark olarak tanımlanır. Dönen 24 saat bezeli daha sonra herhangi bir başka saat dilimini okuyacak şekilde hizalanabilir. Örneğin, GMT kolu 14\'ü (öğleden sonra 2) gösteriyorsa ve bezel işaretleriniz UTC+2\'ye hizalanmışsa, Doğu Avrupa Saati\'ni okuyorsunuzdur. Bu araç, tam olarak bu ilişkiyi görselleştirmenize yardımcı olur.',
  },
];

const howTo = [
  {
    name: 'Panonuza istediğiniz şehri ekleyin',
    text: 'Arama çubuğuna bir şehir adı veya saat dilimi yazın. Bir sonuca tıklayarak anında ekleyin. Her şehir, geçerli yerel saati gösteren canlı bir saat kartı olarak görünür.',
  },
  {
    name: 'İhtiyacınız olmayan şehirleri kaldırın',
    text: 'Herhangi bir saat kartının üzerine gelin ve kaldırmak için × düğmesine tıklayın. Seçiminiz tarayıcınıza otomatik olarak kaydedilir - kapatın ve daha sonra geri gelin, panonuz tam olarak bıraktığınız gibi durur.',
  },
  {
    name: 'Saat koleksiyonunuz için GMT referansı olarak kullanın',
    text: 'Ana şehrinizi ayarlayın ve GMT saatlerinizle takip ettiğiniz saat dilimlerini ekleyin. Her bir bölge için bezel hizalamanızın doğru olup olmadığını kontrol etmek için canlı fark etiketlerini kullanın.',
  },
];

const title = 'Dünya Saati: Canlı Çoklu Saat Dilimi Panosu';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-dunya-saati',
  title,
  description: 'Birden fazla saat dilimini canlı olarak takip edin. Herhangi bir şehri ekleyin ve geçerli saatin her saniye güncellendiğini görün. GMT veya World Timer saati olan saat meraklıları için mükemmel.',
  ui: {
    title: 'Dünya Saati',
    searchPlaceholder: 'Şehir veya saat dilimi ara...',
    addLabel: 'Ekle',
    removeLabel: 'Kaldır',
    noResults: 'Şehir bulunamadı',
    yourZones: 'Saat Dilimleriniz',
  },
  seo: [
    { type: 'title', text: 'Dünya Saati - Saat Meraklıları için Canlı Saat Dilimi Panosu', level: 2 },
    { type: 'paragraph', html: 'İster bir <strong>GMT-Master II</strong>\'niz, ister bir <strong>World Timer</strong>\'ınız olsun, ya da sadece iş veya seyahat için birden fazla saat dilimini takip etmeniz gereksin, bu canlı pano önemsediğiniz her şehirdeki güncel saati bir bakışta gösterir. New York, Londra, Tokyo veya herhangi bir şehri ekleyin ve saat her saniye güncellensin. Bölgeleriniz tarayıcınıza kaydedilir, böylece asla yeniden yapılandırmanız gerekmez.' },
    { type: 'title', text: 'Saat Meraklıları Neden Bir Dünya Saatine İhtiyaç Duyar?', level: 3 },
    { type: 'paragraph', html: 'Eğer <strong>GMT saatleri</strong> koleksiyonu yapıyorsanız, zorluğu bilirsiniz: ikinci bir saat dilimini takip etmek için bezeli ayarlarsınız, ancak farklar Yaz Saati ile değişir veya birden fazla GMT\'niz vardır ve her birinin farklı bir şehri nasıl takip ettiğini karşılaştırmak istersiniz. Bu araç bunu çözer. Saatlerinizin takip ettiği şehirleri ekleyin ve anlık farklarını ve saatlerini görün. Artık zihinsel hesaplama yok - sadece karta bakın ve GMT kolunuzun tam olarak nereyi göstermesi gerektiğini bilin.' },
    { type: 'title', text: 'GMT vs World Timer - Hangisi Tarzınıza Uyuyor?', level: 3 },
    { type: 'paragraph', html: '<strong>GMT saati</strong> (Rolex GMT-Master II "Pepsi" veya Tudor Black Bay Pro gibi) iki saat dilimini takip etmek için 24 saat kolu ve dönen bir bezel kullanır. <strong>World Timer</strong> (Nomos Zürich Weltzeit veya Omega Seamaster Worldtimer gibi) bir şehir halkası ve 24 saat diski kullanarak 24 bölgenin tamamını aynı anda gösterir. Bu pano bir World Timer\'ı taklit eder: tüm şehirleri aynı anda görebilirsiniz. Satın almadan önce hangi komplikasyonun yaşam tarzınıza uyduğuna karar vermek için kullanın.' },
    { type: 'title', text: 'Saat Koleksiyonculuğunun Ötesinde Pratik Kullanımlar', level: 3 },
    {
      type: 'list', items: [
        'Saat dilimleri arasında toplantı planlayan uzaktan çalışanlar',
        'Evi ve varış noktasını aynı anda takip eden sık seyahat edenler',
        'New York, Londra, Tokyo ve Sidney\'deki piyasa açılışlarını takip eden yatırımcılar',
        'Google\'a sormadan "... şu anda saat kaç?" bilmek isteyen herkes',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Canlı Dünya Saati', icon: 'mdi:clock-time-eight', badge: 'SAAT', html: 'Saatler, tarayıcınızın yerleşik saat dilimi veritabanını kullanarak her saniye canlı olarak güncellenir. Yaz Saati geçişleri otomatik olarak işlenir. Hiçbir veri herhangi bir sunucuya gönderilmez.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
