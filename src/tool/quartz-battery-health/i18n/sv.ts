import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'kvartsbatteri-halsokontroll',
  title: 'Hälsokontroll av Kvartsbatteri',
  description: 'Beräkna den teoretiska batteritiden för ett kvartsurverk genom att ange cellkapaciteten (mAh) och kaliberns strömförbrukning (µA). Ställ eventuellt in installationsdatumet för att uppskatta bytesdatumet.',
  ui: {
    title: 'Hälsokontroll av Kvartsbatteri',
    batteryLabel: 'Battericell',
    selectBattery: 'Välj batteri',
    customBattery: 'Anpassat',
    capacityLabel: 'Kapacitet',
    capacityUnit: 'mAh',
    consumptionLabel: 'Förbrukning',
    consumptionUnit: 'µA',
    installDateLabel: 'Installerat den',
    installDateHint: 'Valfritt',
    monthLabel: 'Månad',
    yearLabel: 'År',
    calculate: 'Beräkna',
    resultLabel: 'Beräknad livslängd',
    theoreticalLife: 'Teoretisk livslängd',
    yearsLabel: 'år',
    monthsLabel: 'månader',
    daysLabel: 'dagar',
    changeDateLabel: 'Bytesdatum',
    noDateHint: 'Ange installationsdatum för att se bytesdatum',
    healthLabel: 'Status',
    healthGood: 'Bra',
    healthModerate: 'Måttlig',
    healthCritical: 'Kritisk',
    step1: 'Välj ett vanligt batteri eller välj Anpassat för att ange kapacitet.',
    step2: 'Ange kaliberns strömförbrukning i mikroampere (µA).',
    step3: 'Lägg eventuellt till installationsdatumet och tryck sedan på Beräkna.',
    tipTitle: 'Tips',
    tipContent: 'Använd alltid förbrukningsvärdet från det officiella kaliberdatabladet. Verklig livslängd kan vara 10-20 % kortare på grund av temperatur- och belastningsvariationer.',
  },
  seo: [
    { type: 'title', text: 'Hälsokontroll av Kvartsbatteri: Hur länge räcker ditt klockbatteri?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Typisk dragning för tresvisare' },
        { value: '18-55 mAh', label: 'Vanlig cellkapacitet' },
        { value: '2.5-4.5 år', label: 'Vanlig batteritid' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Undrar du när ditt kvartsurverk slutar ticka? <strong>Hälsokontroll av Kvartsbatteri</strong> hjälper dig att uppskatta den återstående livslängden för batteriet i alla kvartsurverk genom att jämföra cellkapaciteten (mätt i mAh) med urverkets genomsnittliga strömförbrukning (mätt i mikroampere, µA). Oavsett om du har ett schweiziskt ETA, ett japanskt Miyota, ett Seiko, ett Ronda eller ett kinesiskt DG-urverk, beräknar detta verktyg den teoretiska livslängden i år, månader och dagar och kan till och med förutsäga exakt bytesdatum om du anger installationsmånad och år.' },
    { type: 'title', text: 'Hur batteritiden för kvartsurverk beräknas: matematiken bakom uppskattningen', level: 3 },
    { type: 'paragraph', html: 'Batteritiden följer en enkel elektrisk formel: <strong>Livslängd (timmar) = (Cellkapacitet i mAh × 1000) ÷ Strömförbrukning i µA</strong>. Dividera resultatet med 24 för att få dagar och med 365,25 för att få år. Till exempel räcker ett standard <strong>SR920SW (371)-batteri med 40 mAh</strong> som driver ett urverk som drar <strong>1,5 µA</strong> teoretiskt i cirka <strong>3 år</strong>. Minska förbrukningen till 1,0 µA och samma batteri sträcker sig över 4,5 år. Öka till 2,5 µA och batteritiden sjunker till under 2 år. Varje bråkdel av en mikroampere spelar roll när du planerar dina serviceintervall.' },
    { type: 'title', text: 'Vanligaste batterityperna för kvartsur och deras kapacitet', level: 3 },
    {
      type: 'table',
      headers: ['Cellreferens', 'Vanlig kod', 'Kapacitet', 'Typisk användning'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Tunna klänningsklockor'],
        ['SR626SW', '377', '27 mAh', 'Mellanstora kvartsmodeller'],
        ['SR920SW', '371', '40 mAh', 'Kronografer och flerfunktionsur'],
        ['SR936SW', '394', '55 mAh', 'Stora analog-digitala hybridur'],
        ['CR2025', '-', '165 mAh', 'LED-moduler med hög strömförbrukning'],
      ],
    },
    { type: 'tip', title: 'Använd rätt specifikation', html: 'Att välja fel celltyp kan minska batteritiden med upp till <strong>40 %</strong>. Kontrollera alltid originalets referensnummer innan du byter batteri. Den numeriska koden anger dimensionerna: till exempel är <strong>SR936SW</strong> 9,5 mm i diameter och 3,6 mm tjock.' },
    { type: 'title', text: 'Därför ska du alltid använda officiella kaliberförbrukningsvärden', level: 3 },
    { type: 'paragraph', html: 'Urverkstillverkare som <strong>ETA, Ronda, Miyota, Seiko och ISA</strong> publicerar officiella tekniska datablad för varje kaliber de tillverkar. Dessa datablad anger den <strong>genomsnittliga strömförbrukningen</strong> vid kontrollerad temperatur (vanligtvis 22 °C) och med en standardmomentbelastning från visarna. Att gissa ett värde på 1,0 µA när ditt urverk faktiskt drar 2,5 µA kan överskatta batteritiden med mer än 100 %. Ladda alltid ner det officiella PDF-dokumentet från tillverkarens webbplats eller kontrollera kaliberreferensen på specialiserade databaser för att få den verkliga förbrukningssiffran.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Batteriläckage kan förstöra ditt urverk',
      html: 'Ett urladdat silveroxidbatteri kan <strong>läcka kaliumhydroxid</strong>, vilket korroderar kontaktfjädrarna, kretskortsspåren och till och med stegmotorlindningen. Om verktyget uppskattar mindre än <strong>6 månaders återstående livslängd</strong>, boka ett batteribyte vid nästa rutinkontroll. Var särskilt uppmärksam på <strong>vintagekvartsur från 1970- och 1980-talen</strong> - deras originalbatterier är betydligt mer benägna att läcka efter årtionden inuti boetten.' },
    { type: 'title', text: 'Faktorer som förkortar den verkliga batteritiden jämfört med den teoretiska', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Extrema temperaturer</strong> - ett ur som lämnas på en solig instrumentbräda kan ha 30 % högre strömförbrukning',
        '<strong>Detektionskretsar för slut på livslängden</strong> - tvåsekunders-tickindikatorn förbrukar extra ström när den aktiverats',
        '<strong>Kronograf- eller alarmanvändning</strong> - momentana strömtoppar som ackumuleras över tid',
        '<strong>Mekanisk friktion</strong> - åldrade eller smutsiga hjulverk ökar vridmomentet som stegmotorn behöver',
        '<strong>Magnetfält</strong> - exponering ökar motorns vridmomentkrav, vilket dränerar cellen snabbare',
      ],
    },
    { type: 'paragraph', html: 'I praktiken kan du förvänta dig <strong>10 till 20 % kortare livslängd</strong> än den teoretiska beräkningen. För högprecisa termokompenserade kvartsurverk varierar förbrukningen mindre, men standardkvarts är märkbart känslig för dessa miljöfaktorer.' },
    { type: 'title', text: 'Så hittar du rätt batteriersättning för ditt kvartsur', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Silveroxid)', definition: 'Batterier märkta med SR (t.ex. SR920SW) ger en stabil spänning på 1,55 V under hela livslängden, vilket håller kvartsoscillatorn noggrann. Detta är standarden för kvalitetskvartsur.' },
        { term: 'LR (Alkaliskt)', definition: 'Batterier märkta med LR (t.ex. LR41) har en gradvis sjunkande spänning, vilket kan få klockan att gå långsamt eller stanna i förtid. Rekommenderas inte som ersättning för SR-celler.' },
        { term: 'CR (Litium)', definition: 'Batterier märkta med CR (t.ex. CR2025) levererar 3,0 V och används i moduler med hög strömförbrukning med LED-bakgrundsbelysning, stora LCD-skärmar eller flera komplikationer.' },
        { term: 'Numerisk kod', definition: 'De fyra siffrorna anger fysisk storlek: de två första siffrorna är diametern i millimeter och de två sista är tjockleken i tiondels millimeter. SR936SW = Ø9,5 mm × 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Standardkvarts jämfört med sol- och kinetiska ur: hur tekniken förändrar ekvationen', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standardkvarts',
          description: 'Använder ett utbytbart silveroxid- eller litiumbatteri. Batteritiden beror helt på kapacitet i förhållande till förbrukning. Detta är vad denna kalkylator är designad för.',
          highlight: true,
          points: [
            'Utbytbart primärbatteri',
            'Livslängd = kapacitet ÷ förbrukning',
            'Förutsägbar bytesplan',
            'Billiga batteribyten',
          ],
        },
        {
          title: 'Sol och kinetiska ur',
          description: 'Solklockor använder fotovoltaiska celler för att ladda en litiumjonackumulator. Kinetiska klockor använder en rotordriven mikrogenerator för att ladda en kondensator.',
          points: [
            'Uppladdningsbar energilagring',
            'Livslängden beror på laddningscykler',
            'Kondensatorförsämring över tid',
            'Kompatibelt inte med denna kalkylator',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Tillverkarnas påståenden om <strong>"10 års batteritid"</strong> baseras vanligtvis på urverk med mycket låg förbrukning (cirka 0,5 till 0,8 µA) i kombination med högkapacitetsceller (165 mAh CR2025 eller större). I ett vanligt analogt kvartsur med ett litet silveroxidbatteri som <strong>SR626SW (27 mAh)</strong> och ett typiskt 1,5 µA-urverk är den verkliga livslängden närmare <strong>2,5-3 år</strong>. Kontrollera alltid med denna kalkylator istället för att lita på marknadsföringsetiketter.' },
    {
      type: 'tip',
      title: 'Byt proaktivt, inte reaktivt',
      html: 'När du ser sekundvisaren hoppa i <strong>2- eller 4-sekundersintervaller</strong> har urverket gått in i strömsparläge på grund av låg spänning. Batteriet har cirka <strong>2 till 4 veckor</strong> kvar. Byt ut det omedelbart för att undvika läckageskador.',
    },
    {
      type: 'summary',
      title: 'Viktiga slutsatser för batterihälsa i kvartsurverk',
      items: [
        'Använd det officiella kaliberförbrukningsvärdet från tillverkarens datablad - ett gissat värde kan överskatta livslängden med över 100 %',
        'Matcha originalets celltyp exakt: SR, LR och CR-kemier är inte utbytbara',
        'Byt batteri när verktyget visar mindre än 6 månaders återstående livslängd för att förhindra läckage',
        'Verklig batteritid är typiskt 10-20 % kortare än den teoretiska idealet på grund av temperatur, friktion och användning',
        'Denna kalkylator är designad för standardkvartsur med utbytbara primärbatterier - inte för sol- eller kinetiska ur',
      ],
    },
  ],
  faq: [
    {
      question: 'Hur noggrann är den teoretiska uppskattningen av batteritid?',
      answer: 'Beräkningen är ett elektriskt ideal baserat på kapacitet dividerat med förbrukning. I verkliga förhållanden kan du förvänta dig 10 till 20 % kortare livslängd på grund av temperaturvariationer, detektionskretsar för slut på livslängden, mekaniskt motstånd från åldrade smörjmedel och extra belastning från kronograf- eller alarmfunktioner. Uppskattningen är en tillförlitlig övre gräns, inte en exakt förutsägelse.',
    },
    {
      question: 'Var hittar jag det exakta strömförbrukningsvärdet för min kvartskaliber?',
      answer: 'Officiella tekniska datablad från ETA, Ronda, Miyota, Seiko, ISA och andra urverkstillverkare listar den genomsnittliga strömförbrukningen i mikroampere (µA). Sök på kaliberns referensnummer följt av "datablad" eller "teknisk specifikation". Specialiserade databaser som Ranfft, 17jewels och Watch-Wiki publicerar också förbrukningssiffror bidragna av klockentusiaster.',
    },
    {
      question: 'Vad betyder "µA" och varför är det viktigt?',
      answer: 'µA står för mikroampere, eller en miljondels ampere. Det mäter den elektriska ström som urverket drar från batteriet. Ett typiskt analogt kvartsur med tresvisare drar mellan 1,0 och 2,5 µA. Kronografer och flerfunktionsmoduler kan dra 3,0 till 6,0 µA. Ju högre ström, desto kortare batteritid för en given cellkapacitet.',
    },
    {
      question: 'Kan jag använda detta verktyg för sol- eller kinetiska klockor?',
      answer: 'Nej. Solklockor (Eco-Drive, Solar, Light-Powered) använder fotovoltaiska celler för att ladda ett uppladdningsbart batteri. Kinetiska och Auto-Quartz-klockor använder en rotor och mikrogenerator för att ladda en kondensator. Ingen av teknikerna bygger på ett utbytbart primärbatteri, så modellen med kapacitet kontra förbrukning gäller inte. Använd denna kalkylator endast för standardkvartsur med utbytbara silveroxid-, alkaliska- eller litiumbatterier.',
    },
    {
      question: 'Bör jag byta batteriet innan det tar helt slut?',
      answer: 'Ja. Silveroxid- och alkaliska batterier kan läcka kaliumhydroxid när de är helt urladdade, vilket skadar kontaktfjädrar, kretskortsspår och stegmotorlindningen. Byte före fullständig urladdning rekommenderas starkt. Om verktyget visar mindre än 6 månaders uppskattad livslängd, boka ett batteribyte så snart som möjligt.',
    },
    {
      question: 'Vad händer om jag använder ett batteri med högre eller lägre kapacitet än original?',
      answer: 'Att använda en cell med högre kapacitet (t.ex. SR936SW 55 mAh istället för SR920SW 40 mAh) förlänger batteritiden men kanske inte passar fysiskt - cellen måste matcha originalets diameter och tjocklek exakt för att bibehålla korrekt kontaktfjäderns tryck. Att använda en cell med lägre kapacitet förkortar batteritiden och kan orsaka intermittent kontakt om cellen är underdimensionerad. Byt alltid till exakt samma referensnummer eller en dokumenterad motsvarighet från samma storleksfamilj.',
    },
    {
      question: 'Hur vet jag om batteriet i min klocka är silveroxid eller alkaliskt?',
      answer: 'Silveroxidbatterier är stämplade med SR (t.ex. SR920SW) och ger en stabil spänning på 1,55 V under hela livslängden, vilket håller kvartsoscillatorn noggrann. Alkaliska batterier är stämplade med LR (t.ex. LR41) och har en gradvis sjunkande spänning, vilket kan få klockan att gå långsamt eller stanna i förtid. De flesta kvalitetsklockmärken specificerar silveroxid. Om din klocka ursprungligen använde SR, byt alltid till SR, inte LR.',
    },
    {
      question: 'Betyder det att sekundvisaren hoppar varannan sekund att batteriet håller på att ta slut?',
      answer: 'Ja. När kvartsurverket upptäcker att batterispänningen är för låg för att på ett tillförlitligt sätt driva stegmotorn går det in i ett strömsparläge där sekundvisaren hoppar i 2- eller 4-sekundersintervaller. Detta är indikatorn för slut på livslängden. När du ser detta beteende har batteriet cirka 2 till 4 veckor kvar och bör bytas omedelbart för att undvika läckage.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Välj eller anpassa battericellen',
      text: 'Välj ett vanligt silveroxidbatteri från rullgardinsmenyn - SR621SW, SR626SW, SR920SW, SR936SW och andra är förladdade med sina officiella kapaciteter. Om din cell inte finns i listan, välj Anpassat och skriv in dess exakta kapacitet i mAh som anges på batterietiketten eller i tillverkarens datablad.',
    },
    {
      name: 'Ange urverkets strömförbrukning',
      text: 'Leta upp den genomsnittliga strömförbrukningen för din kaliber i den officiella tekniska dokumentationen. Skriv in värdet i mikroampere (µA) i förbrukningsfältet. De flesta tresvisarurverk använder 1,0 till 2,5 µA. Kronografer och flerfunktionsmoduler kan gå upp till 6,0 µA.',
    },
    {
      name: 'Lägg till installationsmånad och år (valfritt)',
      text: 'Om du kommer ihåg eller har antecknat när batteriet senast installerades, välj månad och ange år. Verktyget använder detta datum för att beräkna uppskattat bytesdatum och visa återstående batterihälsa i procent.',
    },
    {
      name: 'Läs den teoretiska livslängden',
      text: 'Resultatkortet visar den totala uppskattade batteritiden i år, månader och återstående dagar. Detta är den maximala livslängden under ideala förhållanden utan hänsyn till externa faktorer som kan minska batterikapaciteten.',
    },
    {
      name: 'Kontrollera hälsostatus och bytesdatum',
      text: 'När ett installationsdatum anges fylls mätaren proportionellt mot den återstående batteritiden. En grön "Bra"-märkning betyder mer än 50 % återstående livslängd. Gul "Måttlig" betyder mellan 20 och 50 %. Röd "Kritisk" betyder mindre än 20 %. Det exakta rekommenderade bytesdatumet visas under mätaren.',
    },
    {
      name: 'Justera indata och beräkna om',
      text: 'Ändra valfri indata - batterimodell, förbrukningsvärde eller installationsdatum - och resultatet uppdateras automatiskt. Använd detta för att jämföra olika batterityper eller för att planera bytesintervall för flera klockor i din samling.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur noggrann är den teoretiska uppskattningen av batteritid?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Beräkningen är ett elektriskt ideal baserat på kapacitet dividerat med förbrukning. I verkliga förhållanden kan du förvänta dig 10 till 20 % kortare livslängd på grund av temperaturvariationer, detektionskretsar för slut på livslängden, mekaniskt motstånd från åldrade smörjmedel och extra belastning från kronograf- eller alarmfunktioner. Uppskattningen är en tillförlitlig övre gräns, inte en exakt förutsägelse.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Var hittar jag det exakta strömförbrukningsvärdet för min kvartskaliber?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Officiella tekniska datablad från ETA, Ronda, Miyota, Seiko, ISA och andra urverkstillverkare listar den genomsnittliga strömförbrukningen i mikroampere (µA). Sök på kaliberns referensnummer följt av datablad eller teknisk specifikation. Specialiserade databaser som Ranfft och 17jewels publicerar också förbrukningssiffror bidragna av klockentusiaster.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad betyder µA och varför är det viktigt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA står för mikroampere, eller en miljondels ampere. Det mäter den elektriska ström som urverket drar från batteriet. Ett typiskt analogt kvartsur med tresvisare drar mellan 1,0 och 2,5 µA. Kronografer och flerfunktionsmoduler kan dra 3,0 till 6,0 µA. Ju högre ström, desto kortare batteritid för en given cellkapacitet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag använda detta verktyg för sol- eller kinetiska klockor?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nej. Solklockor använder fotovoltaiska celler för att ladda ett uppladdningsbart batteri. Kinetiska klockor använder en rotor och mikrogenerator för att ladda en kondensator. Ingen av teknikerna bygger på ett utbytbart primärbatteri, så modellen med kapacitet kontra förbrukning gäller inte. Använd denna kalkylator endast för standardkvartsur med utbytbara silveroxid-, alkaliska- eller litiumbatterier.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bör jag byta batteriet innan det tar helt slut?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Silveroxid- och alkaliska batterier kan läcka kaliumhydroxid när de är helt urladdade, vilket skadar kontaktfjädrar, kretskortsspår och stegmotorlindningen. Byte före fullständig urladdning rekommenderas starkt. Om verktyget visar mindre än 6 månaders uppskattad livslängd, boka ett batteribyte så snart som möjligt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur vet jag om batteriet i min klocka är silveroxid eller alkaliskt?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Silveroxidbatterier är stämplade med SR (t.ex. SR920SW) och ger en stabil spänning på 1,55 V under hela livslängden. Alkaliska batterier är stämplade med LR (t.ex. LR41) och har en gradvis sjunkande spänning. De flesta kvalitetsklockmärken specificerar silveroxid. Byt alltid SR mot SR, inte LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Betyder det att sekundvisaren hoppar varannan sekund att batteriet håller på att ta slut?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. När kvartsurverket upptäcker låg batterispänning går det in i strömsparläge där sekundvisaren hoppar i 2- eller 4-sekundersintervaller. Detta är indikatorn för slut på livslängden. När du ser detta beteende har batteriet cirka 2 till 4 veckor kvar och bör bytas omedelbart för att undvika läckage.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Hälsokontroll av Kvartsbatteri',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Kalkylator för batteritid i klocka',
      'description': 'Beräkna den teoretiska batteritiden för alla kvartsurverk genom att ange cellkapacitet (mAh) och kaliberns strömförbrukning (µA). Uppskattar bytesdatum när installationsmånad och år anges.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Beräkning av batteritid för kvartsur - kapacitet kontra förbrukning förklarad',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Lär dig hur du uppskattar batteritiden för ett kvartsurverk med hjälp av cellkapaciteten i mAh och urverkets strömförbrukning i µA. Förstå formeln, effekten av temperatur och belastning, och när du bör planera ett byte.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så här uppskattar du batteritiden för ett kvartsurverk',
      'description': 'En steg-för-steg-guide för att använda Hälsokontroll av Kvartsbatteri för att bestämma återstående livslängd för batteriet i alla kvartsurverk och planera bytesdatum.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Välj eller anpassa battericellen',
          'text': 'Välj ett vanligt silveroxidbatteri från rullgardinsmenyn - SR621SW, SR626SW, SR920SW, SR936SW och andra är förladdade med sina officiella kapaciteter. Om din cell inte finns i listan, välj Anpassat och skriv in dess exakta kapacitet i mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ange urverkets strömförbrukning',
          'text': 'Leta upp den genomsnittliga strömförbrukningen för din kaliber från den officiella tekniska dokumentationen. Skriv in värdet i mikroampere (µA) i förbrukningsfältet.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lägg till installationsmånad och år',
          'text': 'Om du vet när batteriet installerades, välj månad och ange år. Verktyget beräknar uppskattat bytesdatum och visar återstående batterihälsa i procent.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Läs den teoretiska livslängden',
          'text': 'Resultatkortet visar den totala uppskattade batteritiden i år, månader och återstående dagar. Detta är den maximala livslängden under ideala förhållanden.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kontrollera hälsostatus och bytesdatum',
          'text': 'När ett installationsdatum anges visar mätaren återstående livslängd. Grönt betyder mer än 50 % kvar. Gult betyder 20 till 50 %. Rött betyder mindre än 20 %. Rekommenderat bytesdatum visas nedanför.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Hälsokontroll av Kvartsbatteri',
      'description': 'Ett onlineverktyg för att uppskatta batteritiden för kvartsur baserat på cellkapacitet och urverkets strömförbrukning.',
      'category': 'Kalkylator för klockbatteri',
      'audience': { '@type': 'Audience', 'audienceType': 'Klockentusiaster och reparatörer' },
    },
  ],
};
