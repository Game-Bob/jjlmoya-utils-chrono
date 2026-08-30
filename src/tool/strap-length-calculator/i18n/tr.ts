import type { ToolLocaleContent } from "../../../types";
import type { StrapLengthCalculatorUI } from "../entry";
import { bibliography } from "../bibliography";

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: "kayis-uzunlugu-hesaplayici",
  title: "Saat Kayışı Uzunluğu Hesaplayıcı",
  description: "Bileğiniz için ideal kayış boyutunu hesaplayın. Bilek boyutu ve saat boyutlarına göre iki parçalı ve NATO kayışları için öneriler alın.",
  ui: {
    title: "Kayış Uzunluğu Hesaplayıcı",
    wristLabel: "Bilek çevresi",
    wristPlaceholder: "örn. 170",
    lugLabel: "Kulaktan kulağa mesafe",
    lugPlaceholder: "örn. 45",
    fitLabel: "Tercih edilen uyum",
    fitTight: "Sıkı",
    fitRegular: "Normal",
    fitLoose: "Bol",
    unitLabel: "Birim",
    standardLabel: "Standart beden",
    bespokeLabel: "Özel beden",
    natoLabel: "NATO kayışı uzunluğu",
    longSide: "Uzun taraf",
    shortSide: "Kısa taraf",
    totalLength: "Toplam uzunluk",
    millimeters: "mm",
    inches: "inç",
    sizeXS: "Extra Small (XS) - Bilekler < 6.0 in",
    sizeS: "Small (S) - Bilekler 6.0 ila 6.5 in",
    sizeM: "Medium (M) - Bilekler 6.5 ila 7.0 in",
    sizeL: "Large (L) - Bilekler 7.0 ila 7.5 in",
    sizeXL: "Extra Large (XL) - Bilekler 7.5 ila 8.0 in",
    sizeXXL: "Double Extra Large (XXL) - Bilekler > 8.0 in",
  },
  seo: [
    { type: "title", text: "Saat Kayışı Boyutu Rehberi ve Uzunluk Hesaplayıcı", level: 2 },
    { type: "paragraph", html: "Mükemmel saat kayışını seçmek hem konfor hem de estetik denge için çok önemlidir. Çok uzun bir kayış, sarkan çirkin bir uç bırakırken, çok kısa bir kayış güvenli bir şekilde kapanmayabilir. Bu rehber, bilek boyutuna, saat tasarımına ve istenen uyuma göre standart bedenleri, özel ölçüleri ve NATO kayışı uzunluklarını belirlemenize yardımcı olur." },
    { type: "stats", items: [{ value: "120/80mm", label: "Standart beden" }, { value: "160-190mm", label: "Çoğu bileğe uyar" }, { value: "7 delik", label: "Tipik ayar seçenekleri" }], columns: 3 },
    { type: "title", text: "İki parçalı kayışları anlamak: Uzun vs. kısa taraf", level: 3 },
    { type: "paragraph", html: "İki parçalı bir saat kayışı, <strong>120/80 mm</strong> gibi iki sayıyla tanımlanır. İlk sayı (örn. 120 mm) <strong>uzun taraf</strong> (uç tarafı) olup saat 6 konumuna takılır. İkinci sayı (örn. 80 mm) <strong>kısa taraf</strong> (toka tarafı) olup saat 12 konumuna takılır. Tokanın kendisi bu ölçümlere dahil değildir." },
    { type: "title", text: "Bilek çevresine göre standart beden tablosu", level: 3 },
    { type: "table", headers: ["Bilek boyutu", "Deri/kauçuk kayış", "NATO kayışı", "Önerilen uyum"], rows: [["150-164 mm (5.9\"-6.5\")", "110/70 mm", "260 mm", "Sıkı/küçük uyum"], ["165-178 mm (6.5\"-7.0\")", "120/80 mm", "270 mm", "Standart orta uyum"], ["179-190 mm (7.0\"-7.5\")", "130/80 mm", "280 mm", "Standart büyük uyum"], ["191-203 mm (7.5\"-8.0\")", "135/85 mm", "290 mm", "Ekstra büyük uyum"], ["204 mm+ (8.0\"+)", "140/85 mm", "300 mm", "Çift ekstra büyük uyum"]] },
    { type: "title", text: "Özel kayış boyutları açıklaması", level: 3 },
    { type: "paragraph", html: "Özel yapım kayışlar sipariş ederken mükemmel uyumu hedefleyebilirsiniz. Standart delik pozisyonlarıyla yetinmek yerine, özel bir kayış, tokanın bileğinizin alt kısmının tam ortasına oturması için her bir tarafın kesin uzunluğunu hesaplar. Formül, toplam bilek çevresini kullanır, saatin kulaktan kulağa mesafesini çıkarır ve kalan uzunluğu bilek geometrisine göre böler." },
    { type: "comparative", items: [{ title: "Özel kayışlar", description: "Bileğinize ve saat kasası ölçülerinize göre özel olarak hazırlanır. Tokanın mükemmel şekilde ortalanmasını garanti eder ve fazla ucu ortadan kaldırır.", points: ["Mükemmel toka merkezleme", "Özel delik pozisyonları", "Fazla kayış ucu yok", "Premium görünüm ve his"] }, { title: "Standart kayışlar", description: "Çoklu ayar delikleri kullanarak geniş bir bilek yelpazesine uyacak şekilde seri üretilmiş boyutlar. Hızlı ve ekonomik.", points: ["Daha düşük maliyet", "Anında bulunabilirlik", "Birden çok saate uyar", "Standart boyutlar"] }], columns: 2 },
    { type: "title", text: "Anahtar saat kayışı terminolojisi", level: 3 },
    { type: "glossary", items: [{ term: "Kulaktan kulağa mesafe (Lug-to-Lug)", definition: "Üst kulağın ucundan alt kulağın ucuna kadar olan toplam dikey mesafe. Bu, kasa çapı değil, bileğinizde duran sert saat başlığının toplam uzunluğudur." }, { term: "Kısa taraf (Toka)", definition: "Saat kasasının saat 12 konumuna takılan kayış bölümü. Tokayı içerir ancak uzunluk ölçümlerinde hariç tutulur." }, { term: "Uzun taraf (Uç)", definition: "Saat kasasının saat 6 konumuna takılan kayış bölümü. Sıkılığı ayarlamak için ayar deliklerine sahiptir." }, { term: "NATO kayışı", definition: "Saat kasasının altından geçen tek parça naylon kayış. Oldukça ayarlanabilir ve dayanıklıdır." }] },
    { type: "tip", title: "Bileğinizi doğru ölçme", html: "Doğru bir ölçüm için, esnek bir mezura kullanarak saatinizi normalde taktığınız yerin etrafını (çok sıkmadan) sarın. Mezuranız yoksa bir ip veya kağıt şeridi kullanın, üst üste bindiği yeri işaretleyin ve düz uzunluğu bir cetvelle ölçün." },
    { type: "title", text: "Kulaktan kulağa mesafe neden kayış boyutu için kritiktir?", level: 3 },
    { type: "paragraph", html: "Birçok koleksiyoner, saat kasasının kayışın sert bir uzantısı olarak işlev gördüğünü unutur. 50 mm gibi uzun kulaktan kulağa mesafeye sahip bir saat, 40 mm'lik bir elbise saatine göre bilekte daha fazla yer kaplar. Sonuç olarak, daha büyük saat, aynı toplam ilmek boyutunu elde etmek için daha kısa kayışlar gerektirir. Kulaktan kulağa mesafeyi hesaba katmamak, kötü oturan kayışların bir numaralı nedenidir." },
    { type: "diagnostic", variant: "warning", title: "Toka kayması ve kasa taşmasını önleme", html: "Kayışınızın kısa tarafı bileğiniz için çok uzun veya çok kısaysa, toka yana kayar. Bu, saat kasasının merkezden kaymasına neden olarak rahatsızlığa ve kasa veya tokada çizik riskinin artmasına yol açar. Tokanın her zaman bileğinizin düz alt kısmında ortalanmasına özen gösterin." },
    { type: "proscons", title: "NATO kayışı vs. iki parçalı kayış", items: [{ pro: "NATO kayışları oldukça ayarlanabilir ve bir pim kırılırsa saatin kaybolmasını önler.", con: "NATO kayışları saat kasasının altına kalınlık ekler." }, { pro: "İki parçalı kayışlar, daha ince bir profil için kasayı cilde temas ettirir.", con: "İki parçalı kayışlar hassas boyutlandırma gerektirir ve daha az ayar sunar." }] },
  ],
  faq: [
    { question: "Saat kayışı uzunluğu nasıl ölçülür?", answer: "Kayış uzunluğu genellikle 120/80 mm gibi iki sayıyla ifade edilir. İlk sayı uzun tarafın (ucun) uzunluğu, ikincisi ise kısa tarafın (toka) uzunluğudur." },
    { question: "Saat tokası bilekte nerede durmalı?", answer: "İdeal olarak, toka bileğin alt kısmında ortalanmalıdır. Kaymışsa, saat kasası merkezden kayar. Uzun ve kısa taraf oranını ayarlamak mükemmel merkezlemeye yardımcı olur." },
    { question: "Kulaktan kulağa mesafe ihtiyacım olan kayış uzunluğunu nasıl etkiler?", answer: "Saat kasası, toplam kayış halkasının sert bir parçasıdır. Uzun kulaktan kulağa mesafeye (örn. 50 mm) sahip daha büyük bir saat, aynı bilekte daha küçük bir saate (örn. 40 mm) kıyasla daha az kayış uzunluğu gerektirir." },
    { question: "Kayışın uzun ucu hangi tarafta olur?", answer: "Geleneksel olarak, kayışın uzun tarafı (ayar deliklerini içeren) saat kasasının saat 6 konumuna, size doğru bakacak şekilde takılır. Kısa taraf (tokayla birlikte) saat 12 konumuna takılır." },
    { question: "Saat kayışı ne kadar sıkı olmalı?", answer: "Kayış sıkı ama rahat olmalıdır. Zorlamadan kayışın altına bir parmak sokabilmelisiniz. Çok sıkı bir kayış kan dolaşımını kısıtlayabilirken, çok gevşek bir kayış kasanın dönmesine neden olur." },
    { question: "Herhangi bir saatte NATO kayışı kullanabilir miyim?", answer: "Evet, saatin kasa ile pim arasında yeterli boşluğa sahip standart pimleri olduğu sürece. NATO kayışları kasanın altından geçer, bu nedenle çok dar boşluklar kavisli pimler veya daha ince kayış malzemeleri gerektirebilir." },
  ],
  bibliography,
  howTo: [
    { name: "Bileğinizi ölçün", text: "Bilek çevrenizi milimetre veya inç cinsinden bulmak için esnek bir mezura kullanın." },
    { name: "Kulaktan kulağa mesafeyi ölçün", text: "Saat kasasının yüksekliğini üst kulağın ucundan alt kulağın ucuna kadar ölçün." },
    { name: "Tercih ettiğiniz uyumu seçin", text: "Sıkı, normal veya bol bir uyumu tercih edip etmediğinizi seçin." },
    { name: "Önerileri hesaplayın", text: "Standart bedeni, uzun/kısa taraf için özel boyutları ve ideal NATO uzunluğunu inceleyin." },
  ],
  schemas: [
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Saat kayışı uzunluğu nasıl ölçülür?", "acceptedAnswer": { "@type": "Answer", "text": "Kayış uzunluğu genellikle 120/80 mm gibi iki sayıyla ifade edilir. İlk sayı uzun tarafın (ucun) uzunluğu, ikincisi ise kısa tarafın (toka) uzunluğudur." } },
      { "@type": "Question", "name": "Saat tokası bilekte nerede durmalı?", "acceptedAnswer": { "@type": "Answer", "text": "İdeal olarak, toka bileğin alt kısmında ortalanmalıdır. Kaymışsa, saat kasası merkezden kayar. Uzun ve kısa taraf oranını ayarlamak mükemmel merkezlemeye yardımcı olur." } },
      { "@type": "Question", "name": "Kulaktan kulağa mesafe ihtiyacım olan kayış uzunluğunu nasıl etkiler?", "acceptedAnswer": { "@type": "Answer", "text": "Saat kasası, toplam kayış halkasının sert bir parçasıdır. Uzun kulaktan kulağa mesafeye (örn. 50 mm) sahip daha büyük bir saat, aynı bilekte daha küçük bir saate (örn. 40 mm) kıyasla daha az kayış uzunluğu gerektirir." } },
      { "@type": "Question", "name": "Kayışın uzun ucu hangi tarafta olur?", "acceptedAnswer": { "@type": "Answer", "text": "Geleneksel olarak, kayışın uzun tarafı (ayar deliklerini içeren) saat kasasının saat 6 konumuna, size doğru bakacak şekilde takılır. Kısa taraf (tokayla birlikte) saat 12 konumuna takılır." } },
      { "@type": "Question", "name": "Saat kayışı ne kadar sıkı olmalı?", "acceptedAnswer": { "@type": "Answer", "text": "Kayış sıkı ama rahat olmalıdır. Zorlamadan kayışın altına bir parmak sokabilmelisiniz. Çok sıkı bir kayış kan dolaşımını kısıtlayabilirken, çok gevşek bir kayış kasanın dönmesine neden olur." } },
      { "@type": "Question", "name": "Herhangi bir saatte NATO kayışı kullanabilir miyim?", "acceptedAnswer": { "@type": "Answer", "text": "Evet, saatin kasa ile pim arasında yeterli boşluğa sahip standart pimleri olduğu sürece. NATO kayışları kasanın altından geçer, bu nedenle çok dar boşluklar kavisli pimler veya daha ince kayış malzemeleri gerektirebilir." } }
    ] } as any,
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Saat Kayışı Uzunluğu Hesaplayıcı", "operatingSystem": "All", "applicationCategory": "LifestyleApplication", "browserRequirements": "Requires HTML5. Requires JavaScript." } as any,
    { "@context": "https://schema.org", "@type": "HowTo", "name": "Saat Kayışı Uzunluğu Hesaplayıcı", "step": [
      { "@type": "HowToStep", "name": "Bileğinizi ölçün", "text": "Bilek çevrenizi milimetre veya inç cinsinden bulmak için esnek bir mezura kullanın." },
      { "@type": "HowToStep", "name": "Kulaktan kulağa mesafeyi ölçün", "text": "Saat kasasının yüksekliğini üst kulağın ucundan alt kulağın ucuna kadar ölçün." },
      { "@type": "HowToStep", "name": "Tercih ettiğiniz uyumu seçin", "text": "Sıkı, normal veya bol bir uyumu tercih edip etmediğinizi seçin." },
      { "@type": "HowToStep", "name": "Önerileri hesaplayın", "text": "Standart bedeni, uzun/kısa taraf için özel boyutları ve ideal NATO uzunluğunu inceleyin." }
    ] } as any
  ]
};
