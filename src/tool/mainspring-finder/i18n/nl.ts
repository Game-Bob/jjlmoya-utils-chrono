import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'veerzoeker',
  title: 'Opwindveerzoeker voor Uurwerken',
  description: 'Bereken opwindveerdimensies uit trommelmetingen voor vintage uurwerken.',
  ui: {
    title: 'Opwindveerzoeker',
    barrelLabel: 'Trommel ID',
    arborLabel: 'As buitendiameter',
    heightLabel: 'Trommelhoogte',
    turnsLabel: 'Omwentelingen',
    calculate: 'Berekenen',
    resultThickness: 'Dikte',
    resultHeight: 'Hoogte',
    resultLength: 'Lengte',
    resultStrength: 'Sterkte',
    strengthWeak: 'Licht',
    strengthMedium: 'Medium',
    strengthStrong: 'Sterk',
    commercial: 'Commercieel formaat',
    unitLabel: 'Eenheid',
    mm: 'mm',
    inch: 'in',
    step1: 'Meet de trommel binnendiameter, as buitendiameter en inwendige hoogte met een schuifmaat.',
    step2: 'Stel het verwachte aantal omwentelingen in (5-8 handopwind, 6-10 automatisch).',
    step3: 'Schakel tussen mm/inch voor uw gewenste eenhedenstelsel.',
    tipTitle: 'Tip',
    tipContent: 'Controleer berekende afmetingen altijd met fabrikantspecificaties. Raadpleeg leverancierscatalogi voordat u bestelt.',
  },
  seo: [
    { type: 'title', text: 'Opwindveerzoeker: Bereken Veerafmetingen voor Uurwerken', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Gemiddelde veerdikte' },
        { value: '5-10 turns', label: 'Standaard windingbereik' },
        { value: '150-450 mm', label: 'Gemiddelde veerlengte' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Het restaureren van een vintage uurwerk begint vaak met het identificeren van de juiste opwindveer. De <strong>Opwindveerzoeker</strong> helpt u de theoretische afmetingen van de veer te berekenen op basis van de trommelgeometrie. Door de binnendiameter van de trommel, de asdiameter, de trommelhoogte en het verwachte aantal omwentelingen in te voeren, berekent de tool de veerdikte, hoogte en lengte. Resultaten worden ook weergegeven als benaderende commerciële formaten in zowel metrische als imperiale eenheden, zodat u ze eenvoudig kunt vergelijken met leverancierscatalogi.' },
    { type: 'title', text: 'Hoe opwindveerdimensies worden berekend', level: 3 },
    { type: 'paragraph', html: 'De opwindveer bevindt zich in de ringvormige ruimte tussen de trommelwand en de as. De <strong>veerdikte</strong> wordt geschat als <strong>(trommel ID - as OD) / (2x omwentelingen + 1,5)</strong>, waarbij de extra 1,5 rekening houdt met de veerophanging en de ruimte die de veer tegen zichzelf inneemt. De <strong>veerlengte</strong> volgt <strong>L = pi x omwentelingen x (trommel ID + as OD) / 2</strong>, wat de totale lengte van de lintveer geeft wanneer deze plat ligt. De <strong>veerhoogte</strong> is gelijk aan de inwendige trommelhoogte minus een kleine speling (doorgaans 0,1 mm) om wrijving tegen het trommeldeksel te voorkomen.' },
    { type: 'title', text: 'Hoe een trommel opmeten voor veerselectie', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Binnendiameter trommel', definition: 'De binnendiameter van de trommel, gemeten met een schuifmaat. Dit is de grootste cirkel die de opwindveer kan innemen. Typisch bereik: 8-30 mm.' },
        { term: 'Asdiameter', definition: 'De diameter van de trommelas op het breedste punt waar de binnenste winding van de opwindveer haakt. Kleinere assen maken langere veren mogelijk in dezelfde trommel.' },
        { term: 'Trommelhoogte', definition: 'De inwendige hoogte van de trommel. De veerhoogte moet iets geringer zijn (0,05-0,15 mm) om vrije rotatie zonder wrijving op het deksel mogelijk te maken.' },
        { term: 'Aantal omwentelingen', definition: 'Het aantal volledige windingomwentelingen dat het uurwerk levert. Handopwindkalibers bieden doorgaans 5-8 omwentelingen, automaten 6-10 omwentelingen.' },
      ],
    },
    { type: 'title', text: 'Veersterkte en wat dit betekent voor uw uurwerk', level: 3 },
    { type: 'paragraph', html: 'De <strong>veerdikte</strong> is de primaire factor die het koppel bepaalt dat aan het raderwerk wordt geleverd. Een dikkere veer (meer dan 0,14 mm) levert hoog koppel, geschikt voor uurwerken met complicaties zoals chronografen of slagwerken. Middelzware veren (0,10-0,14 mm) zijn standaard voor de meeste tijd- en datumkalibers. Dunne veren (minder dan 0,10 mm) worden aangetroffen in kleine damesuurwerken of ultra-dunne kalibers. Gebruik altijd de originele fabrikantspecificatie indien beschikbaar; een te sterke veer kan de trommelas of raderwerkpivotpunten beschadigen.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Een verkeerde opwindveer kan uw uurwerk beschadigen',
      html: 'Het installeren van een veer die <strong>te dik</strong> is verhoogt wrijving en koppel boven ontwerplimieten, wat kan leiden tot slijtage van het trommelasgat, verbuiging van de centrale wielpivot of zelfs barsten van de trommel. Een veer die <strong>te dun</strong> is levert onvoldoende amplitude, waardoor het horloge te langzaam loopt of stopt voordat de volledige gangreserve is bereikt. Vergelijk de berekende afmetingen altijd met bekende leverancierscatalogi voordat u bestelt.',
    },
    { type: 'title', text: 'Commerciële maatsystemen voor opwindveren', level: 3 },
    { type: 'paragraph', html: 'Leveranciers van opwindveren catalogiseren veren op <strong>lengte x hoogte x dikte</strong> in millimeters. Gangbare metrische maten volgen het General Resources of GR-systeem. Op inches gebaseerde systemen worden nog gebruikt door sommige Amerikaanse en Britse leveranciers. De tool toont beide systemen zodat u catalogi kunt doorzoeken ongeacht de leverancier. Wanneer de exacte berekende maat niet beschikbaar is, kies dan het dichtstbijzijnde commerciële formaat dat exact overeenkomt met de hoogte en de dikte binnen 0,005 mm, en pas vervolgens de lengte aan door een veer uit dezelfde hoogte/dikte-familie te selecteren.' },
    { type: 'title', text: 'Overwegingen voor vintage kalibers', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Zwitserse kalibers (ETA, FHF, AS, Unitas)</strong> - goed gedocumenteerd in het GR-systeem. De meeste hebben bekende veerreferenties.',
        '<strong>Franse kalibers (LIP, France Ebauches)</strong> - gebruiken vaak niet-standaard trommelverhoudingen. Meet zorgvuldig.',
        '<strong>Amerikaanse kalibers (Waltham, Elgin, Illinois)</strong> - op inches gebaseerde systemen. Gebruik de imperiale uitvoer om te vergelijken.',
        '<strong>Japanse kalibers (Seiko, Citizen, Miyota)</strong> - metrisch systeem met goede catalogusdekking voor uurwerken van na 1960.',
        '<strong>Chinese kalibers (Sea-Gull, DG, Tongji)</strong> - kopiëren vaak Zwitserse ontwerpen. De Zwitserse GR-referentie is meestal van toepassing.',
      ],
    },
    {
      type: 'summary',
      title: 'Belangrijkste punten voor veerselectie',
      items: [
        'Meet trommel ID, as OD en trommelhoogte nauwkeurig met een precisieschuifmaat',
        'Gebruik de berekende afmetingen als uitgangspunt, niet als absolute specificatie',
        'Raadpleeg technische fiches van de fabrikant of bekende leverancierscatalogi',
        'Laat de veerhoogte exact overeenkomen met de trommelhoogte minus 0,05-0,15 mm speling',
        'Laat de dikte binnen 0,005 mm van de berekende waarde vallen voor optimale prestaties',
        'Controleer of de veerlengte voldoende is voor het verwachte aantal windingomwentelingen',
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe nauwkeurig zijn de berekende opwindveerdimensies?',
      answer: 'De berekeningen zijn gebaseerd op standaard horlogemakerformules die uitgaan van ideale trommelgeometrie. Werkelijke afmetingen kunnen tot 5-10 % afwijken door productietoleranties, veereindconfiguraties (brace, oog of T-eind) en de specifieke legering. Gebruik de berekende waarden altijd als een sterk referentiepunt, maar raadpleeg fabrikantgegevensbladen of commerciële leverancierscatalogi voordat u bestelt.',
    },
    {
      question: 'Wat als ik de exacte commerciële maat niet kan vinden?',
      answer: 'Als de exacte maat niet beschikbaar is, prioriteer dan eerst het exact matchen van de veerhoogte, daarna de dikte binnen 0,005 mm. De lengte kan worden aangepast door een andere veer uit dezelfde hoogte- en diktefamilie te kiezen. Een iets langere veer werkt als de trommel voldoende ruimte heeft, maar een kortere veer vermindert de gangreserve.',
    },
    {
      question: 'Hoe meet ik de trommelafmetingen zonder de opwindveer te verwijderen?',
      answer: 'Als de trommel nog de oude veer bevat, kunt u de buitendiameter van de trommel meten (trek vervolgens de wanddikte af, doorgaans 0,2-0,4 mm) en de totale hoogte (trek vervolgens de dekseldikte af). Voor de meest nauwkeurige resultaten verwijdert u de oude veer en reinigt u de trommel voordat u meet.',
    },
    {
      question: 'Wat is het verschil tussen een brace- en een oogopwindveereinde?',
      answer: 'Een brace-einde (ook wel T-einde genoemd) heeft een klein T-vormig lipje dat in de trommelwand haakt. De meeste moderne Zwitserse en Japanse kalibers gebruiken dit type. Een oog-einde heeft een klein gaatje dat over een pen op de as past. Deze tool berekent alleen de lintafmetingen; u moet het eindetype verifiëren met uw trommel voordat u bestelt.',
    },
    {
      question: 'Kan ik deze tool gebruiken voor chronograaf- of automatische uurwerken?',
      answer: 'Ja, maar houd er rekening mee dat automatische uurwerken vaak een hoger aantal omwentelingen hebben (8-10) en een iets dunnere veer nodig kunnen hebben om de extra windingsmodule te accommoderen. Chronograafuurwerken hebben doorgaans dikkere veren nodig om het chronograafmechanisme aan te drijven. Pas de omwentelingenwaarde dienovereenkomstig aan en controleer tegen fabrikantspecificaties.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Meet de binnendiameter van de trommel',
      text: 'Gebruik een precisieschuifmaat om de binnendiameter van de trommel te meten. Meet op twee punten 90 graden uit elkaar en bereken het gemiddelde. Noteer het resultaat in millimeters.',
    },
    {
      name: 'Meet de asdiameter',
      text: 'Meet de diameter van de trommelas op het breedste punt waar de binnenste winding van de opwindveer bevestigt. Dit is doorgaans nabij het midden van de as, niet aan het vierkante uiteinde.',
    },
    {
      name: 'Meet de inwendige trommelhoogte',
      text: 'Meet de diepte van de trommel van de bodem tot de bovenrand. Als het deksel verwijderbaar is, neem dan de dekseldikte mee in uw meting. De veerhoogte is ongeveer 0,1 mm minder.',
    },
    {
      name: 'Stel het aantal omwentelingen in',
      text: 'Bepaal hoeveel volledige omwentelingen de opwindveer maakt wanneer deze volledig is opgewonden. Voor handopwindkalibers is dit doorgaans 5-8 omwentelingen. Automaten kunnen 6-10 omwentelingen hebben. Raadpleeg de uurwerkspecificaties indien beschikbaar.',
    },
    {
      name: 'Lees de berekende afmetingen',
      text: 'De tool toont de aanbevolen veerdikte, hoogte en lengte. Ook wordt de veersterktecategorie geschat en worden commerciële equivalenten in zowel metrische als imperiale eenheden getoond.',
    },
    {
      name: 'Raadpleeg catalogi',
      text: 'Gebruik de getoonde commerciële maten om leverancierscatalogi te doorzoeken. Voer de metrische of imperiale afmetingen in bij Cousins UK, Jules Borel of uw voorkeursleverancier. Pas de zoekopdracht aan als de exacte maat niet beschikbaar is.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe nauwkeurig zijn de berekende opwindveerdimensies?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'De berekeningen zijn gebaseerd op standaard horlogemakerformules die uitgaan van ideale trommelgeometrie. Werkelijke afmetingen kunnen tot 5-10 % afwijken door productietoleranties, veereindconfiguraties en de specifieke legering. Raadpleeg altijd fabrikantgegevensbladen of commerciële catalogi voordat u bestelt.' },
        },
        {
          '@type': 'Question',
          'name': 'Wat als ik de exacte commerciële maat niet kan vinden?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Match eerst de veerhoogte exact, daarna de dikte binnen 0,005 mm. Pas de lengte aan vanuit dezelfde hoogte/dikte-familie.' },
        },
        {
          '@type': 'Question',
          'name': 'Hoe meet ik de trommel zonder de opwindveer te verwijderen?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Meet de buitendiameter van de trommel en trek de wanddikte af (0,2-0,4 mm). Verwijder voor het beste resultaat eerst de oude veer.' },
        },
        {
          '@type': 'Question',
          'name': 'Wat is het verschil tussen brace- en oogeinden?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-einde) haakt in de trommelwand. Oog-einde heeft een gaatje over een aspen. Moderne Zwitserse/Japanse kalibers gebruiken brace-einden.' },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik dit gebruiken voor chronograaf- of automatische uurwerken?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Automaten hebben vaak meer omwentelingen nodig (8-10) en dunnere veren. Chronografen hebben dikkere veren nodig. Pas omwentelingen aan en controleer.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Opwindveerzoeker',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Mainspring Calculator',
      'description': 'Bereken theoretische opwindveerdimensies uit trommelmetingen voor vintage uurwerken.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Berekening van opwindveerdimensies voor horloges',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Leer hoe u opwindveerdimensies berekent op basis van binnendiameter van de trommel, asgrootte en windingomwentelingen.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe vindt u de juiste opwindveer',
      'description': 'Stapsgewijze handleiding voor het meten van een horlogetrommel en het berekenen van de juiste opwindveerdimensies.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Meet trommel ID', 'text': 'Gebruik een precisieschuifmaat om de binnendiameter van de trommel te meten.' },
        { '@type': 'HowToStep', 'name': 'Meet as buitendiameter', 'text': 'Meet de trommelasdiameter op het breedste punt.' },
        { '@type': 'HowToStep', 'name': 'Meet trommelhoogte', 'text': 'Meet de inwendige diepte. Veerhoogte is ongeveer 0,1 mm minder.' },
        { '@type': 'HowToStep', 'name': 'Stel omwentelingen in', 'text': 'Stel 5-8 in voor handopwind, 6-10 voor automatische uurwerken.' },
        { '@type': 'HowToStep', 'name': 'Lees resultaten', 'text': 'Bekijk veerdikte, hoogte, lengte en commerciële equivalenten.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Opwindveerzoeker',
      'description': 'Een tool voor horlogemakers om opwindveerdimensies te berekenen uit trommelmetingen.',
      'category': 'Watchmaking Tool',
      'audience': { '@type': 'Audience', 'audienceType': 'Watchmakers and horology enthusiasts' },
    },
  ],
};
