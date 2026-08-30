import type { ToolLocaleContent } from "../../../types";
import type { StrapLengthCalculatorUI } from "../entry";
import { bibliography } from "../bibliography";

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: "bandlangds-raknare",
  title: "Bandlängdsräknare för Klockor",
  description: "Beräkna den idealiska bandstorleken för ditt handled. Få rekommendationer för tvådelade och NATO-band baserat på handledsstorlek och klockmått.",
  ui: {
    title: "Bandlängdsräknare",
    wristLabel: "Handledsomfång",
    wristPlaceholder: "t.ex. 170",
    lugLabel: "Lug-till-lug avstånd",
    lugPlaceholder: "t.ex. 45",
    fitLabel: "Önskad passform",
    fitTight: "Åtsittande",
    fitRegular: "Normal",
    fitLoose: "Lös",
    unitLabel: "Enhet",
    standardLabel: "Standard konfektionsstorlek",
    bespokeLabel: "Måttbeställd storlek",
    natoLabel: "NATO-bandlängd",
    longSide: "Lång sida",
    shortSide: "Kort sida",
    totalLength: "Total längd",
    millimeters: "mm",
    inches: "in",
    sizeXS: "Extra Small (XS) - Handleder < 6.0 in",
    sizeS: "Small (S) - Handleder 6.0 till 6.5 in",
    sizeM: "Medium (M) - Handleder 6.5 till 7.0 in",
    sizeL: "Large (L) - Handleder 7.0 till 7.5 in",
    sizeXL: "Extra Large (XL) - Handleder 7.5 till 8.0 in",
    sizeXXL: "Double Extra Large (XXL) - Handleder > 8.0 in",
  },
  seo: [
    { type: "title", text: "Guide till Klockbandsstorlekar & Längdräknare", level: 2 },
    { type: "paragraph", html: "Att välja det perfekta klockbandet är avgörande för både komfort och estetisk balans. Ett för långt band lämnar en oattraktiv svans som fladdrar, medan ett för kort band kanske inte spänns ordentligt. Den här guiden hjälper dig att bestämma standard konfektionsstorlekar, måttbeställda mått och NATO-bandlängder baserat på handledsstorlek, klockdesign och önskad passform." },
    { type: "stats", items: [{ value: "120/80mm", label: "Standard konfektionsstorlek" }, { value: "160-190mm", label: "Passar de flesta handleder" }, { value: "7 hål", label: "Typiska justeringsmöjligheter" }], columns: 3 },
    { type: "title", text: "Förstå tvådelade band: Lång vs. kort sida", level: 3 },
    { type: "paragraph", html: "Ett tvådelat klockband definieras av två siffror, som <strong>120/80 mm</strong>. Den första siffran (t.ex. 120 mm) är den <strong>långa sidan</strong> (spetsidan), som fästs vid 6-timmarspositionen. Den andra siffran (t.ex. 80 mm) är den <strong>korta sidan</strong> (spännsidan), som fästs vid 12-timmarspositionen. Spännet i sig ingår inte i dessa mått." },
    { type: "title", text: "Tabell över standard konfektionsstorlekar efter handledsomfång", level: 3 },
    { type: "table", headers: ["Handledsstorlek", "Läder/gummibandslängd", "NATO-bandlängd", "Rekommenderad passform"], rows: [["150 - 164 mm (5.9\" - 6.5\")", "110 / 70 mm", "260 mm", "Åtsittande/liten passform"], ["165 - 178 mm (6.5\" - 7.0\")", "120 / 80 mm", "270 mm", "Standard mellanpassform"], ["179 - 190 mm (7.0\" - 7.5\")", "130 / 80 mm", "280 mm", "Standard stor passform"], ["191 - 203 mm (7.5\" - 8.0\")", "135 / 85 mm", "290 mm", "Extra stor passform"], ["204 mm + (8.0\"+)", "140 / 85 mm", "300 mm", "Dubbel extra stor passform"]] },
    { type: "title", text: "Måttbeställda bandstorlekar förklarade", level: 3 },
    { type: "paragraph", html: "När du beställer måttbeställda band kan du sikta på den perfekta passformen. Istället för att nöja dig med standard hålpositioner beräknar ett måttbeställt band den exakta längden för varje sida så att spännet vilar precis i mitten av undersidan av ditt handled. Formeln använder ditt totala handledsomfång, subtraherar klockans lug-till-lug avstånd och delar den återstående längden enligt handledsgeometrin." },
    { type: "comparative", items: [{ title: "Måttbeställda band", description: "Skräddarsydda efter ditt handled och dina boettmått. Garanterar ett perfekt centrerat spänne och eliminerar överflödig bandsvans.", points: ["Perfekt centrering av spännet", "Hålpositioner på mått", "Ingen överflödig bandsvans", "Premium utseende och känsla"] }, { title: "Standard konfektionsband", description: "Massproducerade storlekar utformade för att passa en bred variation av handleder med flera justeringshål. Snabba och ekonomiska.", points: ["Lägre kostnad", "Omedelbar tillgänglighet", "Passar flera klockor", "Standardiserade mått"] }], columns: 2 },
    { type: "title", text: "Viktig terminologi för klockband", level: 3 },
    { type: "glossary", items: [{ term: "Lug-till-lug avstånd", definition: "Det totala vertikala avståndet från toppen av den övre luggen till toppen av den nedre luggen. Detta är inte boettdiametern, utan den totala längden av det stela klockhuvudet som vilar på handleden." }, { term: "Kort sida (Spänne)", definition: "Bandsektionen som fästs vid 12-timmarspositionen på boetten. Den inkluderar spännet men exkluderas i längdmåtten." }, { term: "Lång sida (Spets)", definition: "Bandsektionen som fästs vid 6-timmarspositionen. Den har justeringshål för att reglera åtdragningen." }, { term: "NATO-band", definition: "Ett nylonband i ett stycke som löper under klockboetten genom fjäderstängerna. Det är mycket justerbart och hållbart." }] },
    { type: "tip", title: "Mäta handleden korrekt", html: "För en korrekt mätning, linda ett flexibelt måttband (inte för hårt) runt området där du normalt bär din klocka. Om du inte har ett måttband, använd ett snöre eller en pappersremsa, markera överlappningen och mät den platta längden med en linjal." },
    { type: "title", text: "Varför lug-till-lug avstånd är avgörande för bandstorleken", level: 3 },
    { type: "paragraph", html: "Många samlare glömmer att klockboetten fungerar som en stel förlängning av bandet. En klocka med ett långt lug-till-lug avstånd på 50 mm tar upp mer plats på handleden än en 40 mm dresswatch. Följaktligen kräver den större klockan kortare band för att uppnå samma totala öglestorlek. Att inte ta hänsyn till lug-till-lug avståndet är den främsta anledningen till dåligt passande band." },
    { type: "diagnostic", variant: "warning", title: "Undvik spänneförskjutning och boettöverhäng", html: "Om den korta sidan av bandet är för lång eller för kort för handleden, glider spännet åt sidan. Detta gör att klockboetten dras ur centrum, vilket leder till obehag och ökad risk för repor på boetten eller låset. Sträva alltid efter att spännet sitter centrerat på den platta undersidan av handleden." },
    { type: "proscons", title: "NATO band vs. tvådelat band", items: [{ pro: "NATO-band är mycket justerbara och förhindrar att klockan tappas bort om en fjäderstång går sönder.", con: "NATO-band tillför tjocklek under klockboetten." }, { pro: "Tvådelade band håller boetten platt mot huden för en smalare profil.", con: "Tvådelade band kräver exakt dimensionering och erbjuder färre justeringar." }] },
  ],
  faq: [
    { question: "Hur mäter man längden på ett klockband?", answer: "Längden på ett klockband uttrycks vanligtvis med två siffror som 120/80 mm. Den första siffran är längden på den långa sidan (spetsen), och den andra är den korta sidan (spännet)." },
    { question: "Var ska spännet sitta på handleden?", answer: "Helst ska spännet vara centrerat på undersidan av handleden. Om det är förskjutet kommer klockboetten att flyttas ur centrum. Att justera förhållandet mellan lång och kort sida hjälper till att uppnå perfekt centrering." },
    { question: "Hur påverkar lug-till-lug avståndet den bandlängd jag behöver?", answer: "Klockboetten är en stel del av den totala bandöglan. En större klocka med långt lug-till-lug avstånd (t.ex. 50 mm) minskar bandlängden som behövs för att linda handleden jämfört med en mindre klocka (t.ex. 40 mm) på samma handled." },
    { question: "På vilken sida sitter den långa änden av bandet?", answer: "Traditionellt fästs den långa sidan av bandet (med justeringshålen) vid 6-timmarspositionen på boetten, pekande mot dig. Den korta sidan (med spännet) fästs vid 12-timmarspositionen." },
    { question: "Hur hårt ska ett klockband sitta?", answer: "Ett band ska sitta åtsittande men bekvämt. Du ska kunna föra ett finger under bandet utan att tvinga det. Ett för hårt band kan begränsa blodcirkulationen, medan ett för löst band låter boetten rotera." },
    { question: "Kan jag använda ett NATO-band på vilken klocka som helst?", answer: "Ja, så länge klockan har standard fjäderstänger med tillräckligt utrymme mellan boetten och stången. NATO-band löper under boetten, så mycket trånga utrymmen kan kräva böjda fjäderstänger eller tunnare bandmaterial." },
  ],
  bibliography,
  howTo: [
    { name: "Mät handleden", text: "Använd ett flexibelt måttband för att ta reda på handledsomfånget i millimeter eller tum." },
    { name: "Mät lug-till-lug avståndet", text: "Mät höjden på klockboetten från toppen av den övre luggen till toppen av den nedre luggen." },
    { name: "Välj önskad passform", text: "Välj om du föredrar en åtsittande, normal eller lös passform." },
    { name: "Beräkna rekommendationer", text: "Se standard konfektionsstorleken, måttbeställda mått för lång/kort sida samt den idealiska NATO-längden." },
  ],
  schemas: [
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Hur mäter man längden på ett klockband?", "acceptedAnswer": { "@type": "Answer", "text": "Längden på ett klockband uttrycks vanligtvis med två siffror som 120/80 mm. Den första siffran är längden på den långa sidan (spetsen), och den andra är den korta sidan (spännet)." } },
      { "@type": "Question", "name": "Var ska spännet sitta på handleden?", "acceptedAnswer": { "@type": "Answer", "text": "Helst ska spännet vara centrerat på undersidan av handleden. Om det är förskjutet kommer klockboetten att flyttas ur centrum. Att justera förhållandet mellan lång och kort sida hjälper till att uppnå perfekt centrering." } },
      { "@type": "Question", "name": "Hur påverkar lug-till-lug avståndet den bandlängd jag behöver?", "acceptedAnswer": { "@type": "Answer", "text": "Klockboetten är en stel del av den totala bandöglan. En större klocka med långt lug-till-lug avstånd (t.ex. 50 mm) minskar bandlängden som behövs för att linda handleden jämfört med en mindre klocka (t.ex. 40 mm) på samma handled." } },
      { "@type": "Question", "name": "På vilken sida sitter den långa änden av bandet?", "acceptedAnswer": { "@type": "Answer", "text": "Traditionellt fästs den långa sidan av bandet (med justeringshålen) vid 6-timmarspositionen på boetten, pekande mot dig. Den korta sidan (med spännet) fästs vid 12-timmarspositionen." } },
      { "@type": "Question", "name": "Hur hårt ska ett klockband sitta?", "acceptedAnswer": { "@type": "Answer", "text": "Ett band ska sitta åtsittande men bekvämt. Du ska kunna föra ett finger under bandet utan att tvinga det. Ett för hårt band kan begränsa blodcirkulationen, medan ett för löst band låter boetten rotera." } },
      { "@type": "Question", "name": "Kan jag använda ett NATO-band på vilken klocka som helst?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, så länge klockan har standard fjäderstänger med tillräckligt utrymme mellan boetten och stången. NATO-band löper under boetten, så mycket trånga utrymmen kan kräva böjda fjäderstänger eller tunnare bandmaterial." } }
    ] } as any,
    { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Bandlängdsräknare för Klockor", "operatingSystem": "All", "applicationCategory": "LifestyleApplication", "browserRequirements": "Requires HTML5. Requires JavaScript." } as any,
    { "@context": "https://schema.org", "@type": "HowTo", "name": "Bandlängdsräknare för Klockor", "step": [
      { "@type": "HowToStep", "name": "Mät handleden", "text": "Använd ett flexibelt måttband för att ta reda på handledsomfånget i millimeter eller tum." },
      { "@type": "HowToStep", "name": "Mät lug-till-lug avståndet", "text": "Mät höjden på klockboetten från toppen av den övre luggen till toppen av den nedre luggen." },
      { "@type": "HowToStep", "name": "Välj önskad passform", "text": "Välj om du föredrar en åtsittande, normal eller lös passform." },
      { "@type": "HowToStep", "name": "Beräkna rekommendationer", "text": "Se standard konfektionsstorleken, måttbeställda mått för lång/kort sida samt den idealiska NATO-längden." }
    ] } as any
  ]
};
