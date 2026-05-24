import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'waterbestendigheid-omzetter',
  title: 'Horloge Waterbestendigheid Omzetter — Meters, ATM, Bar & Voet',
  description: 'Converteer waterbestendigheidsclassificaties van horloges tussen meters, voet, ATM en bar. Ontdek wat elke classificatie werkelijk betekent voor dagelijks gebruik, zwemmen en duiken.',
  ui: {
    title: 'Waterbestendigheid Omzetter',
    depthLabel: 'Waterbestendigheid',
    enterDepth: 'Voer dieptewaarde in',
    unitMeters: 'Meters (m)',
    unitFeet: 'Voet (ft)',
    unitATM: 'Atmosferen (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Gelijkwaardige Waarden',
    ratingLabel: 'Classificatie',
    whatItMeans: 'Wat Het Betekent',
    notWaterResistant: 'Niet Waterbestendig',
    notWaterResistantDesc: 'Geen spatwater. Volledig uit de buurt van water houden.',
    handWash: 'Spaterwaterdicht',
    handWashDesc: 'Handen wassen, regen, lichte spatwater. Niet zwemmen, niet douchen.',
    showerSwim: 'Douche en Zwemmen aan Oppervlak',
    showerSwimDesc: 'Douchen, zwemmen aan het wateroppervlak. Niet duiken of snorkelen.',
    snorkeling: 'Zwemmen en Snorkelen',
    snorkelingDesc: 'Baantjes trekken, snorkelen, watersporten. Uitstekende dagelijkse bestendigheid.',
    scubaDiving: 'Recreatief Duiken',
    scubaDivingDesc: 'Scubaduiken, intensieve maritieme activiteiten. ISO conform.',
    saturationDiving: 'Diep / Verzadigingsduiken',
    saturationDivingDesc: 'Professioneel verzadigingsduiken. Extreme dieptes. Context van heliumontsnappingsventiel.',
    tipTitle: 'Tip',
    tipContent: 'Waterbestendigheid neemt in de loop van de tijd af. Pakkingen en afdichtingen moeten jaarlijks worden getest en elke 3\u20135 jaar worden vervangen.',
  },
  seo: [
    { type: 'title', text: 'Horloge Waterbestendigheid Omzetter — Meters, ATM, Bar & Voet ontcijferd', level: 2 },
    { type: 'paragraph', html: 'Een waterbestendigheidsclassificatie van 30 meter betekent niet dat u tot 30 meter kunt duiken. Het betekent dat het horloge spatwater en lichte regen aankan. Deze omzetter vertaalt tussen <strong>meters, voet, atmosferen (ATM) en bar</strong>, en vertelt u wat elke classificatie werkelijk toestaat.' },
    { type: 'title', text: 'De Waarheid over Waterbestendigheidsclassificaties', level: 3 },
    { type: 'paragraph', html: 'Horlogewaterbestendigheid wordt getest onder statische druk in een laboratorium. In de praktijk — armbewegingen, duiken, temperatuurveranderingen — ontstaat dynamische druk die veel hoger is. Een 30m / 3 ATM horloge is alleen spatwaterdicht. Voor zwemmen heeft u minstens 100m / 10 ATM nodig. Voor scubaduiken is 200m / 20 ATM het standaard beginpunt.' },
    { type: 'title', text: 'Waarom Waterbestendigheid na Verloop van Tijd Afneemt', level: 3 },
    { type: 'paragraph', html: 'De rubberen pakkingen en O-ringen die uw horloge afdichten, drogen uit, barsten en comprimeren na verloop van tijd. Hitte, UV-licht en chemicaliën versnellen dit proces. Een horloge dat ooit waterbestendig was tot 100m, kan na 5 jaar zonder onderhoud slechts spatwaterdicht zijn. Laat uw afdichtingen jaarlijks testen en elke 3 tot 5 jaar vervangen.' },
    { type: 'title', text: 'ISO 6425 — De Norm voor Duikerhorloges', level: 3 },
    { type: 'paragraph', html: 'Om een "duikershorloge" genoemd te worden, moet een horloge voldoen aan ISO 6425 normen: minstens 100m waterbestendigheid, een unidirectionele ring, lichtgevende markeringen en een schroefkroon. Horloges die aan deze norm voldoen, worden 25% boven hun nominale diepte getest. Een ISO gecertificeerd 200m horloge wordt getest op 250m.' },
  ],
  faq: [
    {
      question: 'Kan ik zwemmen met een 30 meter waterbestendig horloge?',
      answer: 'Nee. Een 30m / 3 ATM classificatie betekent alleen spatwaterdichtheid — handen wassen, regen en zweet. Zwemmen creëert dynamische druk die de statische testdruk overschrijdt. Kies voor zwemmen minstens 100m / 10 ATM.',
    },
    {
      question: 'Wat is het verschil tussen ATM, bar en meters?',
      answer: '1 ATM = 1 bar ≈ 10 meter statische waterkolom. In de horloge-industrie zijn ze in wezen gelijkwaardig. Een 10 ATM horloge is hetzelfde als een 10 bar horloge en is geschikt tot ongeveer 100 meter.',
    },
    {
      question: 'Hoe vaak moet ik de waterbestendigheid van mijn horloge testen?',
      answer: 'Eenmaal per jaar, vooral voor blootstelling aan water. Pakkingen en afdichtingen slijten. Elke 3-5 jaar moeten alle afdichtingen worden vervangen tijdens een volledige onderhoudsbeurt.',
    },
    {
      question: 'Wat betekent ISO 6425 gecertificeerd?',
      answer: 'ISO 6425 is de internationale norm voor duikerhorloges. Het vereist minstens 100m bestendigheid, een unidirectionele ring, lichtgevende markeringen en testen 25% boven de nominale diepte.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Voer uw classificatie in',
      text: 'Typ het waterbestendigheidsgetal van uw horloge en selecteer de eenheid (meters, voet, ATM of bar).',
    },
    {
      name: 'Lees de equivalenten',
      text: 'De kaart toont de geconverteerde waarden in alle vier de eenheden tegelijkertijd.',
    },
    {
      name: 'Controleer de aanbeveling',
      text: 'De gemarkeerde kaart toont welke activiteiten veilig zijn bij de classificatie van uw horloge.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kan ik zwemmen met een 30 meter waterbestendig horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nee. Een 30m / 3 ATM classificatie betekent alleen spatwaterdichtheid — handen wassen, regen en zweet. Kies voor zwemmen minstens 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat is het verschil tussen ATM, bar en meters?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 meter statische waterkolom. In de horloge-industrie zijn ze in wezen gelijkwaardig.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe vaak moet ik de waterbestendigheid van mijn horloge testen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eenmaal per jaar, vooral voor blootstelling aan water. Elke 3-5 jaar moeten alle afdichtingen worden vervangen tijdens een volledige onderhoudsbeurt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat betekent ISO 6425 gecertificeerd?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 vereist minstens 100m bestendigheid, een unidirectionele ring, lichtgevende markeringen en testen 25% boven de nominale diepte.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horloge Waterbestendigheid Omzetter',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe horloge waterbestendigheidsclassificaties om te zetten',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Voer uw classificatie in',
          'text': 'Typ het waterbestendigheidsgetal van uw horloge en selecteer de eenheid.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees de equivalenten',
          'text': 'De kaart toont de geconverteerde waarden in alle vier de eenheden tegelijkertijd.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controleer de aanbeveling',
          'text': 'De gemarkeerde kaart toont welke activiteiten veilig zijn bij de classificatie van uw horloge.',
        },
      ],
    },
  ],
};
