import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'omvandlare-slagfrekvens',
  title: 'Omvandlare för Slagfrekvens: VPH till Hz och s/d',
  description: 'Omvandla vibrationer per timme (VPH) till Hertz, tick per sekund och beräkna den dagliga effekten av en enda förlorad tick. Fungerar med ETA-, Sellita-, Miyota-, Seiko-, Rolex-, Omega- och Zenith-kalibrar.',
  ui: {
    title: 'Omvandlare för Slagfrekvens',
    vphLabel: 'Urverk',
    selectMovement: 'Välj urverk',
    customMovement: 'Anpassad',
    customVph: 'Vibrationer per timme',
    resultsTitle: 'Beräkningar',
    frequency: 'Frekvens',
    ticksPerSec: 'Tick per sekund',
    lostTickImpact: 'Om den förlorar 1 tick per timme',
    lostTickExplainer: 'En missad tick per timme innebär cirka 3 sekunders förlust per dag vid 28.800 VPH. Lägre slagfrekvenser förstorar effekten.',
    step1: 'Välj ditt urverk eller ange en anpassad VPH.',
    step2: 'Läs Hz-frekvensen, tick per sekund och effekten av en förlorad tick.',
    tipTitle: 'Tips',
    tipContent: 'Högre slagfrekvenser (36.000 VPH) ger en jämnare sekundvisare och bättre precision, men också mer slitage på gångverket.',
  },
  seo: [
    { type: 'title', text: 'Omvandlare för Slagfrekvens - VPH till Hz och sekunder per dag', level: 2 },
    { type: 'paragraph', html: 'Varje mekanisk klocka slår med en specifik frekvens - antalet vibrationer som dess balanshjul gör per timme. Den siffran avgör hur jämnt sekundvisaren rör sig och hur exakt klockan kan vara. Den här omvandlaren översätter <strong>VPH till Hz och tick per sekund</strong> och visar den verkliga effekten av en enda förlorad tick.' },
    { type: 'title', text: 'Vad är slagfrekvens?', level: 3 },
    { type: 'paragraph', html: 'Slagfrekvensen, mätt i vibrationer per timme (vph), är den frekvens med vilken en klockas balanshjul oscillerar. En vanlig frekvens är 28.800 VPH - det är 4 Hz, eller 8 tick per sekund. Högre slagfrekvenser som 36.000 VPH (5 Hz) ger en jämnare rörelse och kan teoretiskt förbättra noggrannheten genom att minska effekten av positionsfel.' },
    { type: 'title', text: 'Varför en förlorad tick spelar roll', level: 3 },
    { type: 'paragraph', html: 'Om en klockas gångverk inte levererar en tick på grund av friktion, magnetism eller slitage, omvandlas den förlorade ticken direkt till förlorad tid. Vid 28.800 VPH ackumuleras en enda missad tick per timme till cirka <strong>3 sekunder per dag</strong>. Vid 18.000 VPH kostar samma fel nästan 5 sekunder per dag. Det här verktyget hjälper dig att förstå matematiken bakom regleringen.' },
    { type: 'title', text: 'Vanliga slagfrekvenser', level: 3 },
    { type: 'paragraph', html: 'Vintage fickur och tidiga automater går ofta på 18.000 VPH (2,5 Hz). Många Seiko- och Miyota-kalibrar använder 21.600 VPH (3 Hz). Den moderna standarden är 28.800 VPH (4 Hz), som används av ETA, Sellita, Rolex och andra. Högfrekventa urverk som Zenith El Primero går på 36.000 VPH (5 Hz) för ökad precision.' },
  ],
  faq: [
    {
      question: 'Hur omvandlar man VPH till Hz?',
      answer: 'Dela VPH med 7.200. En klocka som slår med 28.800 VPH går på 4 Hz (28.800 ÷ 7.200 = 4). Divisionen med 7.200 tar hänsyn till att en fullständig oscillation innehåller två vibrationer och att det finns 3.600 sekunder på en timme.',
    },
    {
      question: 'Vad innebär en högre slagfrekvens för noggrannheten?',
      answer: 'Högre slagfrekvenser möjliggör i allmänhet större teoretisk precision eftersom balanshjulet påverkas mindre av positionsstörningar. Men de skapar också mer friktion och slitage på palettstenarna och gånghjulen, vilket kräver bättre smörjning och oftare service.',
    },
    {
      question: 'Hur påverkar en förlorad tick den dagliga noggrannheten?',
      answer: 'En missad tick per timme leder till 24 förlorade tick per dag. Den förlorade tiden beror på din slagfrekvens: dela 86.400 med din VPH. Vid 28.800 VPH är det 3 sekunder per dag. Vid 18.000 VPH är det 4,8 sekunder per dag.',
    },
    {
      question: 'Kan en klocka återhämta sig från en förlorad tick?',
      answer: 'Nej. När en tick väl är missad är tiden permanent förlorad. Klockan "kommer inte ikapp". Det är därför gångverkets hälsa - rena palettstenar, korrekt smörjning och rätt beat error - direkt påverkar den dagliga gången.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Välj ditt kaliber',
      text: 'Välj ditt urverk från rullgardinsmenyn. Varje förinställning innehåller rätt VPH för det kalibert.',
    },
    {
      name: 'Läs resultaten',
      text: 'Kortet visar Hz-frekvensen, tick per sekund och den dagliga effekten av en enda förlorad tick.',
    },
    {
      name: 'Prova en anpassad VPH',
      text: 'Välj "Anpassad" för att ange valfritt VPH-värde för vintage- eller ovanliga urverk.',
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
            'text': 'Dela VPH med 7.200. En klocka som slår med 28.800 VPH går på 4 Hz. Divisionen med 7.200 tar hänsyn till en oscillation som innehåller två vibrationer och 3.600 sekunder per timme.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad innebär en högre slagfrekvens för noggrannheten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Högre slagfrekvenser möjliggör större teoretisk precision eftersom balanshjulet påverkas mindre av positionsstörningar. Men de skapar också mer friktion och slitage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur påverkar en förlorad tick den dagliga noggrannheten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En missad tick per timme leder till 24 förlorade tick per dag. Dela 86.400 med din VPH för att hitta de förlorade sekunderna per dag.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan en klocka återhämta sig från en förlorad tick?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nej. När en tick väl är missad är tiden permanent förlorad. Klockan kommer inte ikapp.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Omvandlare för Slagfrekvens',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så här omvandlar du VPH till Hz och beräknar effekten av en förlorad tick',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Välj ditt kaliber',
          'text': 'Välj ditt urverk från rullgardinsmenyn. Varje förinställning innehåller rätt VPH för det kalibert.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Läs resultaten',
          'text': 'Kortet visar Hz-frekvensen, tick per sekund och den dagliga effekten av en enda förlorad tick.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Prova en anpassad VPH',
          'text': 'Välj Anpassad för att ange valfritt VPH-värde för vintage- eller ovanliga urverk.',
        },
      ],
    },
  ],
};
