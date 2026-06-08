import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'drivfjaderssokare',
  title: 'Drivfjadersokare',
  description: 'Berakna drivfjäderdimensioner fran boettmatt for vintage urverk.',
  ui: {
    title: 'Drivfjadersokare',
    barrelLabel: 'Boett innerdiameter',
    arborLabel: 'Arbor ytterdiameter',
    heightLabel: 'Boetthojd',
    turnsLabel: 'Varv',
    calculate: 'Berakna',
    resultThickness: 'Tjocklek',
    resultHeight: 'Hojd',
    resultLength: 'Langd',
    resultStrength: 'Styrka',
    strengthWeak: 'Latt',
    strengthMedium: 'Medel',
    strengthStrong: 'Kraftig',
    commercial: 'Kommersiell storlek',
    unitLabel: 'Enhet',
    mm: 'mm',
    inch: 'tum',
    step1: 'Mat boettens innerdiameter, arborns ytterdiameter och invandig hojd med ett skjutmatt.',
    step2: 'Ange forvantat antal uppvridningsvarv (5-8 manuell, 6-10 automatisk).',
    step3: 'Vaxla mellan mm/tum for onskat enhetssystem.',
    tipTitle: 'Tips',
    tipContent: 'Kontrollera alltid beraknade dimensioner mot tillverkarens specifikationer. Jamfor med leverantorskataloger innan du bestaller.',
  },
  seo: [
    { type: 'title', text: 'Drivfjadersokare - Berakna Fjaderdimensioner for Urverk', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0,08-0,18 mm', label: 'Typisk fjädertjocklek' },
        { value: '5-10 varv', label: 'Standard uppvridningsomrade' },
        { value: '150-450 mm', label: 'Vanlig fjaderlangd' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Att restaurera ett vintage urverk borjar ofta med att identifiera ratt drivfjader. <strong>Drivfjadersokaren</strong> hjalper dig att berakna de teoretiska dimensionerna for drivfjadern baserat pa boettens geometri. Genom att ange boettens innerdiameter, arborns diameter, boetthojd och forvantat antal varv beraknar verktyget fjaderns tjocklek, hojd och langd. Resultaten visas aven som ungefarliga kommersiella storlekar i bade metriska och imperiala enheter, vilket gor det lattare att jamfora med leverantorskataloger.' },
    { type: 'title', text: 'Hur drivfjaderdimensioner beraknas', level: 3 },
    { type: 'paragraph', html: 'Drivfjadern upptar det ringformade utrymmet mellan boettvagen och arborn. <strong>Fjädertjockleken</strong> uppskattas som <strong>(boettens innerdiameter - arborns ytterdiameter) / (2 x varv + 1,5)</strong>, dar de extra 1,5 tar hansyn till fjaderfastet och utrymmet fjadern upptar mot sig sjalv. <strong>Fjaderlangden</strong> foljer <strong>L = pi x varv x (boettens innerdiameter + arborns ytterdiameter) / 2</strong>, vilket ger den totala langden pa bandet om det laggs plant. <strong>Fjaderhojden</strong> ar lika med boettens invandiga hojd minus ett litet spel (vanligtvis 0,1 mm) for att forhindra gnidning mot boettlocket.' },
    { type: 'title', text: 'Hur man mater en boett for drivfjaderval', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Boettens innerdiameter', definition: 'Boettrummets innerdiameter matt med skjutmatt. Detta ar den storsta cirkeln drivfjadern kan uppta. Typiskt omrade: 8-30 mm.' },
        { term: 'Arborns diameter', definition: 'Boettarborns diameter vid dess bredaste punkt dar drivfjaderns innersta spole fäster. Mindre arborer mojliggor langre fjadrar i samma boett.' },
        { term: 'Boetthojd', definition: 'Boettrummets invandiga hojd. Drivfjaderns hojd maste vara nagot mindre (0,05-0,15 mm) for att tillata fri rotation utan friktion mot locket.' },
        { term: 'Antal varv', definition: 'Antalet fulla uppvridningsvarv som urverket ger. Manuella kalibrar erbjuder vanligtvis 5-8 varv, automatiska 6-10 varv.' },
      ],
    },
    { type: 'title', text: 'Fjaderstyrka och vad den betyder for ditt urverk', level: 3 },
    { type: 'paragraph', html: '<strong>Fjädertjockleken</strong> ar den främsta faktorn som bestammer vridmomentet som levereras till drivverket. En tjockare fjäder (över 0,14 mm) ger hogt vridmoment lämpligt för urverk med komplikationer som kronografer eller slagverk. Medeltjocka fjädrar (0,10-0,14 mm) ar standard for de flesta tid-och-datum kalibrar. Tunna fjädrar (under 0,10 mm) finns i sma damurverk eller extremt tunna kalibrar. Anvand alltid originaltillverkarens specifikation nar sadan finns; en alltfor kraftig fjader kan skada boettarborn eller drivverkets tappar.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fel drivfjader kan skada ditt urverk',
      html: 'Att installera en fjader som ar <strong>for tjock</strong> okar friktion och vridmoment bortom konstruktionens granser, vilket kan slita boettarborns hal, boja centrumhjulets tapp eller till och med spracka boetten. En fjader som ar <strong>for tunn</strong> ger inte tillracklig amplitud, vilket gor att klockan gar langsamt eller stannar innan dess fulla gangreserv ar forbrukad. Jamfor alltid de beraknade dimensionerna med anda leverantorskataloger innan du bestaller.',
    },
    { type: 'title', text: 'Kommersiella system for drivfjäderstorlekar', level: 3 },
    { type: 'paragraph', html: 'Drivfjäderleverantörer katalogiserar fjädra efter <strong>langd x höjd x tjocklek</strong> i millimeter. Vanliga metriska storlekar foljer General Resources eller GR-systemet. Tum-baserade system anvands fortfarande av vissa amerikanska och brittiska leverantorer. Verktyget visar bada systemen sa att du kan soka i kataloger oavsett leverantor. Nar den exakt beraknade storleken inte finns tillganglig, valj den narmaste kommersiella storleken som matchar hojden exakt och tjockleken inom 0,005 mm, justera sedan langden genom att valja en fjader fran samma hojd/tjocklek-familj.' },
    { type: 'title', text: 'Vintagekaliberovervaganden', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Schweiziska kalibrar (ETA, FHF, AS, Unitas)</strong> - valdokumenterade i GR-systemet. De flesta har anda drivfjäderreferenser.',
        '<strong>Franska kalibrar (LIP, France Ebauches)</strong> - anvander ofta icke-standardiserade boettproportioner. Mat noggrant.',
        '<strong>Amerikanska kalibrar (Waltham, Elgin, Illinois)</strong> - tum-baserade system. Anvand imperiala utdata for jamforelse.',
        '<strong>Japanska kalibrar (Seiko, Citizen, Miyota)</strong> - metriskt system med bra katalogtackning for urverk efter 1960.',
        '<strong>Kinesiska kalibrar (Sea-Gull, DG, Tongji)</strong> - kopierar ofta schweiziska konstruktioner. Den schweiziska GR-referensen galler vanligtvis.',
      ],
    },
    {
      type: 'summary',
      title: 'Viktiga slutsatser for drivfjaderval',
      items: [
        'Mat boettens innerdiameter, arborns ytterdiameter och boetthojd noggrant med ett precisionsskjutmatt',
        'Anvand de beraknade dimensionerna som utgangspunkt, inte som absolut specifikation',
        'Jamfor med tillverkarens tekniska blad eller anda leverantorskataloger',
        'Matcha fjaderhojden exakt mot boetthojden minus 0,05-0,15 mm spel',
        'Matcha tjockleken inom 0,005 mm av det beraknade vardet for optimal prestanda',
        'Verifiera att fjaderlangden ar tillracklig for det forvantade antalet uppvridningsvarv',
      ],
    },
  ],
  faq: [
    {
      question: 'Hur noggranna ar de beraknade drivfjäderdimensionerna?',
      answer: 'Berakningarna baseras pa standardformler inom urmakeri som antar ideal boettgeometri. Verkliga dimensioner kan variera med upp till 5-10 % pa grund av tillverkningstoleranser, fjäderandkonfigurationer (bygel, ogla eller T-ande) och den specifika legeringen som anvands. Anvand alltid de beraknade vardena som en stark referenspunkt, men jamfor med tillverkarens datablad eller kommersiella leverantorskataloger innan du bestaller.',
    },
    {
      question: 'Vad gor jag om jag inte hittar exakt kommersiell storlek?',
      answer: 'Nar exakt storlek inte finns tillganglig, prioritera att matcha fjaderhojden exakt, sedan tjockleken inom 0,005 mm. Langden kan justeras genom att valja en annan fjader fran samma hojd- och tjockleksfamilj. En nagot langre fjader fungerar om boetten har tillrackligt med utrymme, men en kortare fjader minskar gangreserven.',
    },
    {
      question: 'Hur mater jag boettens dimensioner utan att ta bort drivfjadern?',
      answer: 'Om boetten fortfarande innehaller den gamla fjadern kan du mata boettens ytterdiameter utifran (subtrahera sedan vaggtjockleken, vanligtvis 0,2-0,4 mm) och den totala hojden (subtrahera sedan lockets tjocklek). For mest noggranna resultat, ta bort den gamla fjadern och rengor boetten innan matning.',
    },
    {
      question: 'Vad ar skillnaden mellan en bygelande och en ogleande pa en drivfjader?',
      answer: 'En bygelande (aven kallad T-ande) har en liten T-formad flik som hakas fast i boettvagen. De flesta moderna schweiziska och japanska kalibrar anvander denna typ. En ogleande har ett litet hal som passer over en pinne pa arborn. Detta verktyg beraknar endast bandets dimensioner; du maste verifiera att andtypen matchar din boett innan du bestaller.',
    },
    {
      question: 'Kan jag anvanda detta verktyg for kronograf- eller automatiska urverk?',
      answer: 'Ja, men notera att automatiska urverk ofta har ett hogre antal varv (8-10) och kan krava en nagot tunnare fjader for att rymma den extra uppvridningsmodulen. Kronografurverk behover vanligtvis tjockare fjadrar for att driva kronografmekanismen. Justera varvardet darefter och verifiera mot tillverkarens specifikationer.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mat boettens innerdiameter',
      text: 'Anvand ett precisionsskjutmatt for att mata boettrummets innerdiameter. Mat pa tva punkter 90 grader isar och berakna medelvardet. Anteckna resultatet i millimeter.',
    },
    {
      name: 'Mat arborns diameter',
      text: 'Mat boettarborns diameter vid dess bredaste punkt dar drivfjaderns innersta spole faster. Detta ar vanligtvis nara arborns centrum, inte vid den fyrkantiga anden.',
    },
    {
      name: 'Mat boettens invandiga hojd',
      text: 'Mat boettens djup fran botten till ovre kant. Om locket ar borttagbart, inkludera lockets tjocklek i din matning. Fjaderhojden blir ungefar 0,1 mm mindre.',
    },
    {
      name: 'Ange antal varv',
      text: 'Bestam hur manga fulla varv drivfjadern gor nar den ar helt uppvriden. For manuella kalibrar ar detta vanligtvis 5-8 varv. Automatiska kan ha 6-10 varv. Kontrollera urverksspecifikationerna om mojligt.',
    },
    {
      name: 'Las de beraknade dimensionerna',
      text: 'Verktyget visar rekommenderad fjädertjocklek, hojd och langd. Det uppskattar aven fjaderstyrkekategorin och ger kommersiella motsvarigheter i bade metriska och imperiala enheter.',
    },
    {
      name: 'Jamfor med kataloger',
      text: 'Anvand de visade kommersiella storlekarna for att soka i leverantorskataloger. Ange de metriska eller imperiala dimensionerna hos Cousins UK, Jules Borel eller din foredragen leverantor. Justera sokningen om exakt storlek inte finns tillganglig.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur noggranna ar de beraknade drivfjaderdimensionerna?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Berakningarna baseras pa standardformler inom urmakeri som antar ideal boettgeometri. Verkliga dimensioner kan variera med upp till 5-10 % pa grund av tillverkningstoleranser, fjaderandkonfigurationer och den specifika legeringen som anvands. Jamfor alltid med tillverkarens datablad eller kommersiella kataloger innan du bestaller.' },
        },
        {
          '@type': 'Question',
          'name': 'Vad gor jag om jag inte hittar exakt kommersiell storlek?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Matcha fjaderhojden exakt forst, sedan tjockleken inom 0,005 mm. Justera langden fran samma hojd-/tjockleksfamilj.' },
        },
        {
          '@type': 'Question',
          'name': 'Hur mater jag boetten utan att ta bort drivfjadern?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Mat boettens ytterdiameter och subtrahera vaggtjockleken (0,2-0,4 mm). For basta resultat, ta bort den gamla fjadern forst.' },
        },
        {
          '@type': 'Question',
          'name': 'Vad ar skillnaden mellan bygelande och ogleande?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Bygelande (T-ande) hakas fast i boettvagen. Ogleande har ett hal over en pinne pa arborn. Moderna schweiziska/japanska kalibrar anvander bygelande.' },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag anvanda detta for kronograf- eller automatiska urverk?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Automatiska behover ofta fler varv (8-10) och tunnare fjadrar. Kronografer behover tjockare fjadrar. Justera varv och verifiera.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Drivfjadersokare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Drivfjaderberaknare for urverk',
      'description': 'Berakna teoretiska drivfjaderdimensioner fran boettmatt for vintage urverk.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Berakning av drivfjaderdimensioner for urverk',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Lar dig hur du beraknar drivfjaderdimensioner fran boettens innerdiameter, arbormatt och uppvridningsvarv.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Sa har hittar du ratt drivfjader',
      'description': 'Steg-for-steg-guide for att mata en urverksboett och berakna korrekta drivfjaderdimensioner.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Mat boettens innerdiameter', 'text': 'Anvand ett precisionsskjutmatt for att mata boettrummets innerdiameter.' },
        { '@type': 'HowToStep', 'name': 'Mat arborns ytterdiameter', 'text': 'Mat boettarborns diameter vid dess bredaste punkt.' },
        { '@type': 'HowToStep', 'name': 'Mat boetthojden', 'text': 'Mat invandigt djup. Fjaderhojden ar ca 0,1 mm mindre.' },
        { '@type': 'HowToStep', 'name': 'Ange varv', 'text': 'Ange 5-8 for manuell vindning, 6-10 for automatiska urverk.' },
        { '@type': 'HowToStep', 'name': 'Las resultat', 'text': 'Se fjaderns tjocklek, hojd, langd och kommersiella motsvarigheter.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Drivfjadersokare',
      'description': 'Ett verktyg for urmakare att berakna drivfjaderdimensioner fran boettmatt.',
      'category': 'Urmakarverktyg',
      'audience': { '@type': 'Audience', 'audienceType': 'Urmakare och klockentusiaster' },
    },
  ],
};
