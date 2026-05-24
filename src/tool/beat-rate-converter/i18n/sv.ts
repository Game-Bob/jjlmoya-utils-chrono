import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'omvandlare-slagfrekvens',
  title: 'Omvandlare f\u00f6r Slagfrekvens \u2014 VPH till Hz och s/d',
  description: 'Omvandla vibrationer per timme (VPH) till Hertz, tick per sekund och ber\u00e4kna den dagliga effekten av en enda f\u00f6rlorad tick. Fungerar med ETA-, Sellita-, Miyota-, Seiko-, Rolex-, Omega- och Zenith-kalibrar.',
  ui: {
    title: 'Omvandlare f\u00f6r Slagfrekvens',
    vphLabel: 'Urverk',
    selectMovement: 'V\u00e4lj urverk',
    customMovement: 'Anpassad',
    customVph: 'Vibrationer per timme',
    resultsTitle: 'Ber\u00e4kningar',
    frequency: 'Frekvens',
    ticksPerSec: 'Tick per sekund',
    lostTickImpact: 'Om den f\u00f6rlorar 1 tick per timme',
    lostTickExplainer: 'En missad tick per timme inneb\u00e4r cirka 3 sekunders f\u00f6rlust per dag vid 28.800 VPH. L\u00e4gre slagfrekvenser f\u00f6rstorar effekten.',
    step1: 'V\u00e4lj ditt urverk eller ange en anpassad VPH.',
    step2: 'L\u00e4s Hz-frekvensen, tick per sekund och effekten av en f\u00f6rlorad tick.',
    tipTitle: 'Tips',
    tipContent: 'H\u00f6gre slagfrekvenser (36.000 VPH) ger en j\u00e4mnare sekundvisare och b\u00e4ttre precision, men ocks\u00e5 mer slitage p\u00e5 g\u00e5ngverket.',
  },
  seo: [
    { type: 'title', text: 'Omvandlare f\u00f6r Slagfrekvens \u2014 VPH till Hz och sekunder per dag', level: 2 },
    { type: 'paragraph', html: 'Varje mekanisk klocka sl\u00e5r med en specifik frekvens \u2014 antalet vibrationer som dess balanshjul g\u00f6r per timme. Den siffran avg\u00f6r hur j\u00e4mnt sekundvisaren r\u00f6r sig och hur exakt klockan kan vara. Den h\u00e4r omvandlaren \u00f6vers\u00e4tter <strong>VPH till Hz och tick per sekund</strong> och visar den verkliga effekten av en enda f\u00f6rlorad tick.' },
    { type: 'title', text: 'Vad \u00e4r slagfrekvens?', level: 3 },
    { type: 'paragraph', html: 'Slagfrekvensen, m\u00e4tt i vibrationer per timme (vph), \u00e4r den frekvens med vilken en klockas balanshjul oscillerar. En vanlig frekvens \u00e4r 28.800 VPH \u2014 det \u00e4r 4 Hz, eller 8 tick per sekund. H\u00f6gre slagfrekvenser som 36.000 VPH (5 Hz) ger en j\u00e4mnare r\u00f6relse och kan teoretiskt f\u00f6rb\u00e4ttra noggrannheten genom att minska effekten av positionsfel.' },
    { type: 'title', text: 'Varf\u00f6r en f\u00f6rlorad tick spelar roll', level: 3 },
    { type: 'paragraph', html: 'Om en klockas g\u00e5ngverk inte levererar en tick p\u00e5 grund av friktion, magnetism eller slitage, omvandlas den f\u00f6rlorade ticken direkt till f\u00f6rlorad tid. Vid 28.800 VPH ackumuleras en enda missad tick per timme till cirka <strong>3 sekunder per dag</strong>. Vid 18.000 VPH kostar samma fel n\u00e4stan 5 sekunder per dag. Det h\u00e4r verktyget hj\u00e4lper dig att f\u00f6rst\u00e5 matematiken bakom regleringen.' },
    { type: 'title', text: 'Vanliga slagfrekvenser', level: 3 },
    { type: 'paragraph', html: 'Vintage fickur och tidiga automater g\u00e5r ofta p\u00e5 18.000 VPH (2,5 Hz). M\u00e5nga Seiko- och Miyota-kalibrar anv\u00e4nder 21.600 VPH (3 Hz). Den moderna standarden \u00e4r 28.800 VPH (4 Hz), som anv\u00e4nds av ETA, Sellita, Rolex och andra. H\u00f6gfrekventa urverk som Zenith El Primero g\u00e5r p\u00e5 36.000 VPH (5 Hz) f\u00f6r \u00f6kad precision.' },
  ],
  faq: [
    {
      question: 'Hur omvandlar man VPH till Hz?',
      answer: 'Dela VPH med 7.200. En klocka som sl\u00e5r med 28.800 VPH g\u00e5r p\u00e5 4 Hz (28.800 \u00f7 7.200 = 4). Divisionen med 7.200 tar h\u00e4nsyn till att en fullst\u00e4ndig oscillation inneh\u00e5ller tv\u00e5 vibrationer och att det finns 3.600 sekunder p\u00e5 en timme.',
    },
    {
      question: 'Vad inneb\u00e4r en h\u00f6gre slagfrekvens f\u00f6r noggrannheten?',
      answer: 'H\u00f6gre slagfrekvenser m\u00f6jligg\u00f6r i allm\u00e4nhet st\u00f6rre teoretisk precision eftersom balanshjulet p\u00e5verkas mindre av positionsst\u00f6rningar. Men de skapar ocks\u00e5 mer friktion och slitage p\u00e5 palettstenarna och g\u00e5nghjulen, vilket kr\u00e4ver b\u00e4ttre sm\u00f6rjning och oftare service.',
    },
    {
      question: 'Hur p\u00e5verkar en f\u00f6rlorad tick den dagliga noggrannheten?',
      answer: 'En missad tick per timme leder till 24 f\u00f6rlorade tick per dag. Den f\u00f6rlorade tiden beror p\u00e5 din slagfrekvens: dela 86.400 med din VPH. Vid 28.800 VPH \u00e4r det 3 sekunder per dag. Vid 18.000 VPH \u00e4r det 4,8 sekunder per dag.',
    },
    {
      question: 'Kan en klocka \u00e5terh\u00e4mta sig fr\u00e5n en f\u00f6rlorad tick?',
      answer: 'Nej. N\u00e4r en tick v\u00e4l \u00e4r missad \u00e4r tiden permanent f\u00f6rlorad. Klockan "kommer inte ikapp". Det \u00e4r d\u00e4rf\u00f6r g\u00e5ngverkets h\u00e4lsa \u2014 rena palettstenar, korrekt sm\u00f6rjning och r\u00e4tt beat error \u2014 direkt p\u00e5verkar den dagliga g\u00e5ngen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'V\u00e4lj ditt kaliber',
      text: 'V\u00e4lj ditt urverk fr\u00e5n rullgardinsmenyn. Varje f\u00f6rinst\u00e4llning inneh\u00e5ller r\u00e4tt VPH f\u00f6r det kalibert.',
    },
    {
      name: 'L\u00e4s resultaten',
      text: 'Kortet visar Hz-frekvensen, tick per sekund och den dagliga effekten av en enda f\u00f6rlorad tick.',
    },
    {
      name: 'Prova en anpassad VPH',
      text: 'V\u00e4lj "Anpassad" f\u00f6r att ange valfritt VPH-v\u00e4rde f\u00f6r vintage- eller ovanliga urverk.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur omvandlar man VPH till Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dela VPH med 7.200. En klocka som sl\u00e5r med 28.800 VPH g\u00e5r p\u00e5 4 Hz. Divisionen med 7.200 tar h\u00e4nsyn till en oscillation som inneh\u00e5ller tv\u00e5 vibrationer och 3.600 sekunder per timme.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad inneb\u00e4r en h\u00f6gre slagfrekvens f\u00f6r noggrannheten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'H\u00f6gre slagfrekvenser m\u00f6jligg\u00f6r st\u00f6rre teoretisk precision eftersom balanshjulet p\u00e5verkas mindre av positionsst\u00f6rningar. Men de skapar ocks\u00e5 mer friktion och slitage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur p\u00e5verkar en f\u00f6rlorad tick den dagliga noggrannheten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En missad tick per timme leder till 24 f\u00f6rlorade tick per dag. Dela 86.400 med din VPH f\u00f6r att hitta de f\u00f6rlorade sekunderna per dag.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan en klocka \u00e5terh\u00e4mta sig fr\u00e5n en f\u00f6rlorad tick?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nej. N\u00e4r en tick v\u00e4l \u00e4r missad \u00e4r tiden permanent f\u00f6rlorad. Klockan kommer inte ikapp.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Omvandlare f\u00f6r Slagfrekvens',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kr\u00e4ver HTML5. Kr\u00e4ver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'S\u00e5 h\u00e4r omvandlar du VPH till Hz och ber\u00e4knar effekten av en f\u00f6rlorad tick',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'V\u00e4lj ditt kaliber',
          'text': 'V\u00e4lj ditt urverk fr\u00e5n rullgardinsmenyn. Varje f\u00f6rinst\u00e4llning inneh\u00e5ller r\u00e4tt VPH f\u00f6r det kalibert.',
        },
        {
          '@type': 'HowToStep',
          'name': 'L\u00e4s resultaten',
          'text': 'Kortet visar Hz-frekvensen, tick per sekund och den dagliga effekten av en enda f\u00f6rlorad tick.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Prova en anpassad VPH',
          'text': 'V\u00e4lj Anpassad f\u00f6r att ange valfritt VPH-v\u00e4rde f\u00f6r vintage- eller ovanliga urverk.',
        },
      ],
    },
  ],
};
