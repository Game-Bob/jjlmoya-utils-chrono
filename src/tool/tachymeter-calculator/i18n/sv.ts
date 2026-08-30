import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'takymeter-beraknare',
  title: 'Takymeter Berakning: Hastighet fran forfluten tid',
  description: 'Berakna hastighet fran forfluten tid med takymeterformeln. Fungerar med alla kronografklockor med takymeterskala.',
  ui: {
    title: 'Takymeter Beraknare',
    timeLabel: 'Forfluten tid (sekunder)',
    timeHelp: 'Tid uppmatt over 1 km eller 1 engelsk mil',
    speedResult: 'Hastighet',
    bezelReading: 'Ringavlasning',
    presetLabel: 'Scenario',
    selectPreset: 'Valj ett scenario',
    customPreset: 'Anpassad',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Starta kronografen nar objektet passerar startpunkten.',
    exampleStep2: 'Stoppa efter 1 km. Takymeterskalan visar hastigheten.',
    tipTitle: 'Tips',
    tipContent: 'Vid 36 sekunder visar ringen 100. Snabbare tider (kortare forfluten tid) innebar hogre hastigheter pa takymeterskalan.',
  },
  seo: [
    { type: 'title', text: 'Takymeter Beraknare: Omvandla forfluten tid till hastighet', level: 2 },
    { type: 'paragraph', html: 'En takymeter ar en skala pa en klockas ring eller urtavla som omvandlar forfluten tid till hastighet. Den anvands typiskt med en kronograf: starta timern nar objektet passerar en referenspunkt, stoppa efter 1 km (eller 1 engelsk mil) och las av hastigheten fran skalan. Den har beraknaren gor matematiken at dig.' },
    { type: 'title', text: 'Hur en takymeter fungerar', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formel', definition: 'Hastighet = 3.600 / forfluten tid i sekunder. Konstanten 3.600 representerar sekunder per timme.' },
        { term: 'Skalan', definition: 'Takymeterringar ar markerade fran 60 (vid 3-positonen) upp till 400 eller 500 (nara 12). Hogre hastigheter motsvarar kortare forfluten tid.' },
        { term: 'Basavstand', definition: 'Standardtakymetrar ar kalibrerade for 1 km eller 1 engelsk mil. For andra avstand, dela avlasningen i enlighet med detta.' },
      ]
    },
    { type: 'title', text: 'Vanliga takymetermatningar', level: 3 },
    {
      type: 'table', headers: ['Forfluten tid', 'Hastighet', 'Scenario'], rows: [
        ['10 s', '360 km/h', 'Kulproget / racerbil'],
        ['12 s', '300 km/h', 'Privatjet start'],
        ['20 s', '180 km/h', 'Sportbil pa motorvag'],
        ['30 s', '120 km/h', 'Bil pa motorvag'],
        ['36 s', '100 km/h', 'Bil pa landsvag (standardreferens)'],
        ['45 s', '80 km/h', 'Bil i stadstrafik'],
        ['60 s', '60 km/h', 'Stadskorning'],
        ['90 s', '40 km/h', 'Cykling'],
        ['120 s', '30 km/h', 'Joggning'],
        ['240 s', '15 km/h', 'Lopning'],
        ['480 s', '7,5 km/h', 'Promenad'],
      ]
    },
    { type: 'title', text: 'Bottom standard skalan', level: 3 },
    { type: 'paragraph', html: 'Om din takymeterring bara gar till 400 men din forfluten tid ar under 9 sekunder, kan du anda anvanda den. Anvand helt enkelt ett langre basavstand. Till exempel, om du fardas 2 km pa 18 sekunder, halvera ringavlasningen. Omvant, for langsamma hastigheter (over 60 sekunder), anvand ett kortare basavstand (t.ex. 0,5 km) och multiplicera med 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Takymeterkompatibilitet', icon: 'mdi:information', badge: 'NOTERA', html: 'Alla kronografer har inte en takymeterring. Vissa klockor placerar takymeterskalan pa urtavlans rehaut eller pa den yttre kapitelringen. Digitala klockor kan inkludera en takymeterfunktion i kronograflaget. Formeln fungerar alltid oavsett den fysiska skalan.' },
  ],
  faq: [
    {
      question: 'Hur anvander jag en takymeterring pa min klocka?',
      answer: 'Starta kronografen vid en referenspunkt (t.ex. en vagmarkering). Stoppa den efter exakt 1 km (eller 1 engelsk mil). Sekundvisaren pekar pa hastigheten pa ringen. Om det till exempel tog 36 sekunder att fardas 1 km, pekar visaren pa 100, vilket betyder 100 km/h.',
    },
    {
      question: 'Vad hander om min forfluten tid ar snabbare an ringen kan visa?',
      answer: 'Vissa takymetrar gar bara upp till 400 eller 500. Om du fardas 1 km pa under 9 sekunder, anvand ett langre basavstand. Fardas 2 km och dela ringavlasningen med 2, eller fardas 3 km och dela med 3.',
    },
    {
      question: 'Vad hander om min forfluten tid ar langsammare an ringen kan visa?',
      answer: 'Anvand ett kortare basavstand. Till exempel, om det tar 90 sekunder att fardas 1 km, fardas 0,5 km istallet. Las av ringen och multiplicera med 2. Standardtakymeterskalan tacker tider fran cirka 7 till 60 sekunder.',
    },
    {
      question: 'Kan jag anvanda en takymeter for andra saker an hastighet?',
      answer: 'Ja. Takymetern mater alla typer av hastigheter per timme. Till exempel, mat hur lang tid det tar att slutföra en uppgift och skalan visar hur många du kan gora per timme. Inom tillverkning innebar en 30-sekunders uppgift 120 enheter per timme.',
    },
    {
      question: 'Anvander alla takymetrar samma skala?',
      answer: 'De flesta anvander standard logaritmiska skalan baserad pa formeln 3.600 / sekunder. Vissa vintageklockor eller marken kan dock ha variationer. Den fysiska skalan kan ocksa begransas av klockans minutsmarkeringar och ringindelning.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Valj ett scenario eller ange en anpassad tid',
      text: 'Valj bland forinstallda scenario som Bil, Cykling eller Lopning, eller valj Anpassad for att ange en forfluten tid i sekunder.',
    },
    {
      name: 'Las hastighetsresultatet',
      text: 'Beraknaren visar hastigheten i km/h och motsvarande takymeterringavlasning.',
    },
    {
      name: 'Applicera pa din kronograf',
      text: 'Anvand den forflutna tiden for att hitta motsvarande hastighet pa din klockas takymeterring.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur anvander jag en takymeterring pa min klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Starta kronografen vid en referenspunkt. Stoppa efter exakt 1 km. Sekundvisaren pekar pa hastigheten pa ringen. Till exempel: 36 sekunder = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad hander om min forfluten tid ar snabbare an ringen kan visa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Anvand ett langre basavstand. Fardas 2 km och dela ringavlasningen med 2, eller fardas 3 km och dela med 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad hander om min forfluten tid ar langsammare an ringen kan visa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Anvand ett kortare basavstand. Fardas 0,5 km istallet. Las av ringen och multiplicera med 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag anvanda en takymeter for andra saker an hastighet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Takymetern mater hastigheter per timme. Mat hur lang tid det tar att slutföra en uppgift och skalan visar hur många per timme.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Anvander alla takymetrar samma skala?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta anvander standard logaritmiska skalan baserad pa formeln 3.600 / sekunder. Vissa vintageklockor kan ha variationer.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Takymeter Beraknare',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man beraknar hastighet med en takymeter',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Valj ett scenario eller anpassad tid',
          'text': 'Valj bland forinstallda scenario som Bil, Cykling eller Lopning, eller valj Anpassad for att ange en forfluten tid i sekunder.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Las hastighetsresultatet',
          'text': 'Beraknaren visar hastigheten i km/h och motsvarande takymeterringavlasning.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Applicera pa din kronograf',
          'text': 'Anvand den forflutna tiden for att hitta motsvarande hastighet pa din klockas takymeterring.',
        },
      ],
    },
  ],
};
