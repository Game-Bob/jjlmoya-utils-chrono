import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'tachymeter-berekenaar',
  title: 'Tachymeter Berekening: Snelheid uit verstreken tijd',
  description: 'Bereken snelheid uit verstreken tijd met de tachymeterformule. Werkt met elk chronograafhorloge met een tachymeterring.',
  ui: {
    title: 'Tachymeter Berekening',
    timeLabel: 'Verstreken tijd (seconden)',
    timeHelp: 'Tijd gemeten over 1 km of 1 mijl',
    speedResult: 'Snelheid',
    bezelReading: 'Ringaflezing',
    presetLabel: 'Scenario',
    selectPreset: 'Selecteer een scenario',
    customPreset: 'Aangepast',
    seconds: 's',
    kmh: 'km/u',
    mph: 'mijl/u',
    exampleStep1: 'Start de chronograaf wanneer het object het startpunt passeert.',
    exampleStep2: 'Stop na 1 km. De tachymeterschaal toont de snelheid.',
    tipTitle: 'Tip',
    tipContent: 'Bij 36 seconden leest de ring 100. Snellere tijden (kortere duur) wijzen op hogere snelheden op de tachymeterschaal.',
  },
  seo: [
    { type: 'title', text: 'Tachymeter Berekening: Verstreken tijd omzetten naar snelheid', level: 2 },
    { type: 'paragraph', html: 'Een tachymeter is een schaal op de ring of wijzerplaat van een horloge die verstreken tijd omzet in snelheid. Het wordt meestal gebruikt met een chronograaf: start de timer wanneer het object een referentiepunt passeert, stop na 1 km (of 1 mijl) en lees de snelheid af van de schaal. Deze calculator doet het rekenwerk voor u.' },
    { type: 'title', text: 'Hoe een tachymeter werkt', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formule', definition: 'Snelheid = 3.600 / verstreken tijd in seconden. De constante 3.600 staat voor seconden per uur.' },
        { term: 'De schaal', definition: 'Tachymeterringen zijn gemarkeerd van 60 (op de 3 uur positie) tot 400 of 500 (bij 12 uur). Hogere snelheden komen overeen met kortere verstreken tijden.' },
        { term: 'Basisafstand', definition: 'Standaard tachymeters zijn gekalibreerd voor 1 km of 1 mijl. Voor andere afstanden deelt u de aflezing dienovereenkomstig.' },
      ]
    },
    { type: 'title', text: 'Veelvoorkomende tachymetermetingen', level: 3 },
    {
      type: 'table', headers: ['Verstreken tijd', 'Snelheid', 'Scenario'], rows: [
        ['10 s', '360 km/u', 'Kogeltrein / raceauto'],
        ['12 s', '300 km/u', 'Privéjet start'],
        ['20 s', '180 km/u', 'Sportwagen op snelweg'],
        ['30 s', '120 km/u', 'Auto op autosnelweg'],
        ['36 s', '100 km/u', 'Auto op snelweg (standaardreferentie)'],
        ['45 s', '80 km/u', 'Auto op stadsweg'],
        ['60 s', '60 km/u', 'Stadsverkeer'],
        ['90 s', '40 km/u', 'Fietsen'],
        ['120 s', '30 km/u', 'Joggen'],
        ['240 s', '15 km/u', 'Hardlopen'],
        ['480 s', '7,5 km/u', 'Wandelen'],
      ]
    },
    { type: 'title', text: 'Voorbij de standaardschaal', level: 3 },
    { type: 'paragraph', html: 'Als uw tachymeterring slechts tot 400 gaat maar uw verstreken tijd onder de 9 seconden is, kunt u deze nog steeds gebruiken. Gebruik een langere basisafstand. Als u bijvoorbeeld 2 km aflegt in 18 seconden, halveer dan de ringaflezing. Omgekeerd, voor lage snelheden (boven 60 seconden), gebruikt u een kortere basisafstand (bijv. 0,5 km) en vermenigvuldigt u met 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Tachymetercompatibiliteit', icon: 'mdi:information', badge: 'OPMERKING', html: 'Niet alle chronografen hebben een tachymeterring. Sommige horloges plaatsen de tachymeterschaal op de rehaut van de wijzerplaat of op de buitenste hoofdstukring. Digitale horloges kunnen een tachymeterfunctie in de chronograafmodus hebben. De formule werkt altijd, ongeacht de fysieke schaal.' },
  ],
  faq: [
    {
      question: 'Hoe gebruik ik een tachymeterring op mijn horloge?',
      answer: 'Start de chronograaf bij een referentiepunt (bijv. een snelwegmarkering). Stop hem na precies 1 km (of 1 mijl). De secondewijzer wijst naar de snelheid op de ring. Als het bijvoorbeeld 36 seconden duurde om 1 km af te leggen, wijst de wijzer naar 100, oftewel 100 km/u.',
    },
    {
      question: 'Wat als mijn verstreken tijd sneller is dan de ring kan aangeven?',
      answer: 'Sommige tachymeters gaan slechts tot 400 of 500. Als u 1 km aflegt in minder dan 9 seconden, gebruik dan een langere basisafstand. Leg 2 km af en deel de ringaflezing door 2, of leg 3 km af en deel door 3.',
    },
    {
      question: 'Wat als mijn verstreken tijd langzamer is dan de ring kan aangeven?',
      answer: 'Gebruik een kortere basisafstand. Als het bijvoorbeeld 90 seconden duurt om 1 km af te leggen, leg dan 0,5 km af. Lees de ring af en vermenigvuldig met 2. De standaard tachymeterschaal dekt tijden van ongeveer 7 tot 60 seconden.',
    },
    {
      question: 'Kan ik een tachymeter voor andere dingen dan snelheid gebruiken?',
      answer: 'Ja. De tachymeter meet elk tarief per uur. Meet bijvoorbeeld hoe lang het duurt om een taak te voltooien en de schaal toont hoeveel u er per uur kunt doen. In de productie betekent een taak van 30 seconden 120 eenheden per uur.',
    },
    {
      question: 'Gebruiken alle tachymeters dezelfde schaal?',
      answer: 'De meeste gebruiken de standaard logaritmische schaal op basis van de formule 3.600 / seconden. Sommige vintage horloges of merken kunnen echter afwijkingen hebben. De fysieke schaal kan ook worden beperkt door de minutenverdeling en ringmarkeringen van het horloge.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer een scenario of voer een aangepaste tijd in',
      text: 'Kies uit scenario\'s zoals Auto, Fietsen of Hardlopen, of selecteer Aangepast om een verstreken tijd in seconden in te voeren.',
    },
    {
      name: 'Lees het snelheidsresultaat',
      text: 'De calculator toont de snelheid in km/u en de bijbehorende tachymeterringaflezing.',
    },
    {
      name: 'Pas toe op uw chronograaf',
      text: 'Gebruik de verstreken tijd om de bijbehorende snelheid op de tachymeterring van uw horloge te vinden.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe gebruik ik een tachymeterring op mijn horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Start de chronograaf bij een referentiepunt. Stop na precies 1 km. De secondewijzer wijst naar de snelheid op de ring. Bijvoorbeeld: 36 seconden = 100 km/u.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat als mijn verstreken tijd sneller is dan de ring kan aangeven?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gebruik een langere basisafstand. Leg 2 km af en deel de ringaflezing door 2, of leg 3 km af en deel door 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat als mijn verstreken tijd langzamer is dan de ring kan aangeven?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gebruik een kortere basisafstand. Leg 0,5 km af. Lees de ring af en vermenigvuldig met 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik een tachymeter voor andere dingen dan snelheid gebruiken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. De tachymeter meet elk tarief per uur. Meet hoe lang het duurt om een taak te voltooien en de schaal toont hoeveel per uur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Gebruiken alle tachymeters dezelfde schaal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste gebruiken de standaard logaritmische schaal op basis van de formule 3.600 / seconden. Sommige vintage horloges kunnen afwijkingen hebben.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tachymeter Berekening',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe bereken ik snelheid met een tachymeter',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer een scenario of aangepaste tijd',
          'text': 'Kies uit scenario\'s zoals Auto, Fietsen of Hardlopen, of selecteer Aangepast om een verstreken tijd in seconden in te voeren.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees het snelheidsresultaat',
          'text': 'De calculator toont de snelheid in km/u en de bijbehorende tachymeterringaflezing.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pas toe op uw chronograaf',
          'text': 'Gebruik de verstreken tijd om de bijbehorende snelheid op de tachymeterring van uw horloge te vinden.',
        },
      ],
    },
  ],
};
