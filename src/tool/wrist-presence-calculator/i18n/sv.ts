import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'klockans-handledsnarvaro-kalkylator',
  title: 'Kalkylator för Klocknärvaro vid Handleden',
  description: 'Beräkna förhållandet boett-till-handled, täckning av platt handledyta och fastställ den idealiska klockstorleken baserat på estetiska riktlinjer.',
  ui: {
    title: 'Inställningar för Handledsbredd',
    wristCircumferenceLabel: 'Handledensomkrets',
    caseDiameterLabel: 'Boettdiameter',
    lugToLugLabel: 'Boj-till-boj-avstånd',
    wristWidthLabel: 'Platt Handledsbredd',
    autoEstimateWidthLabel: 'Uppskatta platt bredd automatiskt (30%)',
    unitCm: 'CM',
    unitInches: 'TUM',
    unitMm: 'MM',
    fitAnalysisTitle: 'Passformsanalys för Handled',
    caseWristRatioLabel: 'Boett-till-handled-förhållande',
    wristCoverageLabel: 'Handledstäckning',
    verdictLabel: 'Omdöme',
    verdictOversized: 'För Stor Boett',
    verdictBold: 'Djärv / Modern Passform',
    verdictGolden: 'Gyllene / Klassisk Passform',
    verdictVintage: 'Vintage / För Liten',
    coverageSafe: 'Säker Passform',
    coverageBold: 'Djärv Passform',
    coverageOverhang: 'Varning för Boj-överhäng',
    sweetSpotTitle: 'Passformsstil',
    sweetSpotDesc: 'Sweet spot representerar det mest balanserade visuella utseendet.',
    minClassicLabel: 'Vintage / Klassisk Passform',
    sweetSpotLabel: 'Estetisk Sweet Spot',
    maxBoldLabel: 'Modern / Djärv Passform',
    maxLugToLugLabel: 'Max Rekommenderat Boj-till-boj',
    idealSizesTitle: 'Riktlinjer för Idealiska Storlekar',
    visualizerTitle: 'Livesimulator',
    wristWidthHelp: 'Uppskattning baserad på handledensform.',
    estimatedLabel: 'uppskattad',
    customLabel: 'Handled',
  },
  seo: [
    { type: 'title', text: 'Hur man väljer rätt klockstorlek: proportionsguiden', level: 2 },
    { type: 'paragraph', html: 'Att hitta rätt klockstorlek är en kombination av matematik, geometri och personlig stil. Inom urmakarkonsten kallas sättet som ett tidmätararmband vilar på handleden för <strong>handledsnärvaro</strong>. En klocka ska se balanserad ut — varken dominera armen med ett fult boj-överhäng eller försvinna som en liten prick. För att uppnå denna balans analyserar samlare tre centrala mätvärden: boettdiameter, boj-till-boj-avstånd och handledsform.' },
    { type: 'title', text: 'Förstå boett-till-handled-förhållandet', level: 3 },
    { type: 'paragraph', html: 'En traditionell metod för att bedöma klockproportioner är boett-till-handled-förhållandet. Det beräknas genom att dela handledens omkrets i millimeter med boettdiametern. Förhållanden mellan <strong>4,5 och 5,0</strong> är det klassiska sweet spot-intervallet. Från <strong>4,0 till 4,5</strong> får klockan ett modernt och sportigt utseende. Över 5,0 dominerar en vintagekänsla, medan under 4,0 anses boetten vara för stor.' },
    { type: 'title', text: 'Varför boj-till-boj-avstånd är viktigare än boettdiameter', level: 3 },
    { type: 'paragraph', html: 'Trots att boettdiametern får all uppmärksamhet är det <strong>boj-till-boj-avståndet</strong> (det vertikala måttet från bojspets till bojspets) som är det verkliga passformsprovet. Gyllene regeln är att boj-till-boj-avståndet aldrig får överstiga den platta handledsbredden. Sträcker sig bojarna förbi handledskanten glider klockan, det uppstår ett glapp mellan remmen och huden och det visuella resultatet blir dåligt.' },
    { type: 'title', text: 'Platta vs. runda handleder: storlekar för din anatomiska form', level: 3 },
    { type: 'paragraph', html: 'Handledensomkrets berättar bara en del av historien. Handleder med samma omkrets kan ha olika tvärsnitt: platt eller runt. Platta handleder har en bredare överyta och klarar längre boj-till-boj-avstånd utan överhäng. Runda handleder är mer cylindriska med smalare övre yta och kräver kortare boj-till-boj-avstånd för att undvika överhäng.' },
  ],
  faq: [
    {
      question: 'Vilket är det idealiska boett-till-handled-förhållandet?',
      answer: 'Det idealiska förhållandet är mellan 4,0 och 5,0. Ett förhållande på 4,5 representerar det klassiska urmakarmässiga sweet spot. Mellan 4,0 och 4,5 skapas en modern och djärv handledsnärvaro; över 5,0 passar klockan bättre för en vintagestil; under 4,0 riskerar boetten att se för stor ut.',
    },
    {
      question: 'Varför är boj-till-boj-avståndet viktigare än boettdiametern?',
      answer: 'Boettdiametern mäter bara urtavlans bredd, men boj-till-boj-avståndet avgör klockans totala längd längs handleden. Om det överstiger den platta handledsbredden hänger bojarna ut, remmen faller vertikalt och klockan ser instabil och oproportionerligt stor ut.',
    },
    {
      question: 'Hur påverkar platta och runda handleder passformen?',
      answer: 'Två handleder med samma omkrets (t.ex. 17 cm) kan bära klockor på helt olika sätt. En platt handled har en bredare överyta och klarar längre boj-till-boj-avstånd utan överhäng. En rund handled är smalare på toppen och behöver kortare boj-till-boj-avstånd för en stabil passform.',
    },
    {
      question: 'Hur påverkar tjocklek och luntans bredd klockans visuella storlek?',
      answer: 'Klockor med mycket smal lunett (som klänningsklockor) har en större urtavleyta och ser större ut på handleden än deras faktiska diameter antyder. Dykarklockor med bred roterande lunett har en mindre urtavla och bärs mer kompakt. På samma sätt ser klockor tjockare än 13 mm mer massiva och visuellt tyngre ut.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mät din handled',
      text: 'Linda ett flexibelt måttband runt handledsbenet för att mäta din omkrets i cm eller tum.',
    },
    {
      name: 'Ange klockmått',
      text: 'Fyll i boettdiameter och boj-till-boj-avstånd för den klocka du vill utvärdera.',
    },
    {
      name: 'Analysera passformen och simulatorn',
      text: 'Kontrollera boett-till-handled-förhållandet, varningen för boj-överhäng och se realtidssimuleringsdiagrammet.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Vilket är det idealiska boett-till-handled-förhållandet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Det idealiska förhållandet är mellan 4,0 och 5,0. Ett förhållande på 4,5 representerar det klassiska urmakarmässiga sweet spot. Mellan 4,0 och 4,5 skapas en modern och djärv handledsnärvaro; över 5,0 passar klockan bättre för en vintagestil; under 4,0 riskerar boetten att se för stor ut.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Varför är boj-till-boj-avståndet viktigare än boettdiametern?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Boettdiametern mäter bara urtavlans bredd, men boj-till-boj-avståndet avgör klockans totala längd längs handleden. Om det överstiger den platta handledsbredden hänger bojarna ut, remmen faller vertikalt och klockan ser instabil och oproportionerligt stor ut.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kalkylator för Klocknärvaro vid Handleden',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man bestämmer den perfekta klockstorleken',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Mät din handled',
          'text': 'Linda ett flexibelt måttband runt handledsbenet för att mäta din omkrets i cm eller tum.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Ange klockmått',
          'text': 'Fyll i boettdiameter och boj-till-boj-avstånd för den klocka du vill utvärdera.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analysera passformen och simulatorn',
          'text': 'Kontrollera boett-till-handled-förhållandet, varningen för boj-överhäng och se realtidssimuleringsdiagrammet.'
        }
      ]
    }
  ]
};
