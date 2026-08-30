import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'horloge-nauwkeurigheid-zoeker',
  title: 'Horloge Nauwkeurigheid & Gangafwijking Berekenen',
  description: 'Registreer en bereken de dagelijkse gangafwijking van uw mechanische of quartzhorloges om de precisie en consistentie te analyseren.',
  ui: {
    title: 'Horloge Nauwkeurigheid',
    selectWatch: 'Selecteer of voeg een horloge toe',
    watchPlaceholder: 'bijv. Seiko SKX007',
    addWatch: 'Horloge toevoegen',
    deleteWatch: 'Horloge verwijderen',
    addLog: 'Nieuwe meting registreren',
    offsetLabel: 'Afwijking (seconden)',
    offsetPlaceholder: '0',
    dateLabel: 'Tijdstip van meting',
    saveLog: 'Meting opslaan',
    avgRate: 'Gemiddelde dagelijkse afwijking',
    consistency: 'Precisie-status',
    totalLogs: 'Totaal aantal metingen',
    historyTitle: 'Meetgeschiedenis',
    noLogs: 'Nog geen metingen geregistreerd voor dit horloge. Voeg minimaal twee metingen toe om de nauwkeurigheid te berekenen.',
    tableDate: 'Datum & Tijd',
    tableOffset: 'Afwijking',
    tableRate: 'Dagelijkse afwijking',
    tableActions: 'Acties',
    deleteLog: 'Verwijderen',
    coscExcellent: 'COSC-chronometer (+4/-6 s/d)',
    excellent: 'Uitstekend (0 tot +5 s/d)',
    good: 'Goed (+/- 10 s/d)',
    needsService: 'Service vereist (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'seconden',
    referenceTime: 'Referentietijd',
    watchTime: 'Horlogetijd',
    useCurrentTime: 'Huidige tijd gebruiken',
    calculatedRate: 'Berekende afwijking',
    driftPredictorTitle: 'Afwijkingprognose & Gangrechner',
    driftPredictorDesc: 'Projecteer de gecumuleerde tijdsafwijking over dagen, maanden en jaren en vergelijk deze met standaarden.',
    dailyRateInput: 'Dagelijkse afwijking (seconden/dag)',
    dailyRatePlaceholder: 'bijv. +4.5 of -3',
    driftHeading: 'Prognoses',
    period: 'Periode',
    accumulatedDrift: 'Geprojecteerde afwijking',
    day: '1 Dag',
    week: '1 Week',
    month: '1 Maand',
    months3: '3 Maanden',
    months6: '6 Maanden',
    year: '1 Jaar',
    years5: '5 Jaar',
    watchStandardTitle: 'Certificeringsstandaarden',
    trackerHeading: 'Echtzeit-Gangmeting',
    driftCalculatorTab: 'Gangprognose',
    trackerTab: 'Gangprotocol',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'COSC Chronometer',
    stdMetas: 'METAS Master',
    stdStdMech: 'Standaard Mechanisch',
    stdQuartz: 'Standaard Quartz',
    stdHaq: 'Zeer Nauwkeurige Quartz',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standaard (+15 s/d)',
    presetQuartz: 'Quartz (+0.5 s/d)',
    statusPass: 'Voldoet',
    statusFail: 'Voldoet niet',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/jaar',
  },
  seo: [
    { type: 'title', text: 'De ultieme gids voor horlogenauwkeurigheid en mechanische regulatie', level: 2 },
    { type: 'paragraph', html: 'Mechanische horloges zijn wonderen van fijnmechanica, maar in tegenstelling tot quartzhorloges zijn ze onderhevig aan diverse fysische en omgevingsfactoren die hun gangafwijking beïnvloeden. Het systematisch controleren en registreren van de dagelijkse afwijking is essentieel om de staat van uw horloge te beoordelen en te bepalen wanneer een professionele onderhoudsbeurt nodig is.' },
    { type: 'title', text: 'Waarom mechanische horloges afwijken: Belangrijkste factoren', level: 2 },
    { type: 'paragraph', html: 'Verschillende componenten beïnvloeden de dagelijkse gangrate. De zwaartekracht trekt op verschillende manieren aan het balanswiel en de spiraalveer, afhankelijk van de ligging van het horloge (de zogenaamde rustpositie). Temperatuurveranderingen zorgen voor het uitzetten of krimpen van de veer, wat de trillingsfrequentie beïnvloedt. Ook de spanning van de hoofdveer (gangreserve) heeft invloed: een volledig opgewonden horloge loopt stabieler dan een horloge dat bijna stilvalt.' },
    { type: 'title', text: 'Gecumuleerde afwijking: Hoe seconden uren worden', level: 2 },
    { type: 'paragraph', html: 'Een dagelijkse afwijking van slechts +5 seconden klinkt verwaarloosbaar, maar tijd is cumulatief. In één week loopt dit op tot 35 seconden, in een maand tot 2,5 minuut en na een jaar loopt uw horloge al ruim 30 minuten voor of achter. Deze cumulatieve afwijking laat zien waarom regelmatige metingen voor verzamelaars belangrijk zijn.' },
    { type: 'title', text: 'Horlogenauwkeurigheid handmatig meten en berekenen', level: 2 },
    { type: 'paragraph', html: 'U kunt de gangafwijking van uw horloge eenvoudig zonder dure timegrapher meten. Synchroniseer uw horloge met een nauwkeurige atoomklok (bijv. UTC-tijd). Noteer na 24 tot 48 uur de afwijking in seconden. Deel dit verschil door het aantal dagen om de gemiddelde dagelijkse afwijking te berekenen.' },
    { type: 'title', text: 'Nachtelijke rustposities gebruiken voor zelfregulatie', level: 2 },
    { type: 'paragraph', html: 'Veel mechanische horloges kunnen eenvoudig worden gereguleerd door de manier waarop ze \'s nachts worden neergelegd. Als het horloge plat ligt (wijzerplaat omhoog), loopt het vaak iets sneller. Als het op de zijkant ligt (kroon omlaag), verliest het meestal tijd. Door de rustpositie bewust te kiezen, kunt u de dagelijkse afwijking compenseren zonder de kast te openen.' },
  ],
  faq: [
    {
      question: 'Wat is een normale dagelijkse afwijking voor een mechanisch horloge?',
      answer: 'Standaard mechanische horloges wijken meestal +/- 10 tot 20 seconden per dag af. Chronometers met een officieel COSC-certificaat zijn ingeregeld op -4 tot +6 seconden per dag. Hoogwaardige quartzhorloges kunnen een afwijking van minder dan +/- 0.5 seconden per dag behalen.',
    },
    {
      question: 'Waarom verandert de nauwkeurigheid van mijn horloge per rustpositie?',
      answer: 'De zwaartekracht trekt op verschillende manieren aan het balanswiel en de spiraalveer, afhankelijk van of het horloge plat ligt (wijzerplaat omhoog/omlaag) of rechtop staat (kroon omhoog/omlaag). Dit veroorzaakt lichte variaties in de amplitude en dus in de loopsnelheid.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Startwaarde vastleggen',
      text: 'Synchroniseer het horloge met een betrouwbare atoomklok en noteer de beginnende afwijking in seconden.',
    },
    {
      name: 'Dragen en Wachten',
      text: 'Draag het horloge normaal of bewaar het minimaal 12 tot 24 uur in een vaste positie.',
    },
    {
      name: 'Eindwaarde vastleggen',
      text: 'Voer de nieuwe afwijking ten opzichte van de referentietijd in. Het systeem berekent automatisch de dagelijkse afwijking.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horloge Nauwkeurigheid & Gangafwijking Berekenen',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wat is een normale dagelijkse afwijking voor een mechanisch horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standaard mechanische horloges wijken meestal +/- 10 tot 20 seconden per dag af. Chronometers met een officieel COSC-certificaat zijn ingeregeld op -4 tot +6 seconden per dag. Hoogwaardige quartzhorloges kunnen een afwijking van minder dan +/- 0.5 seconden per dag behalen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Waarom verandert de nauwkeurigheid van mijn horloge per rustpositie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De zwaartekracht trekt op verschillende manieren aan het balanswiel en de spiraalveer, afhankelijk van of het horloge plat ligt (wijzerplaat omhoog/omlaag) of rechtop staat (kroon omhoog/omlaag). Dit veroorzaakt lichte variaties in de amplitude en dus in de loopsnelheid.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Horlogenauwkeurigheid handmatig meten en berekenen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Startwaarde vastleggen',
          'text': 'Synchroniseer het horloge met een betrouwbare atoomklok en noteer de beginnende afwijking in seconden.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Dragen en Wachten',
          'text': 'Draag het horloge normaal of bewaar het minimaal 12 tot 24 uur in een vaste positie.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Eindwaarde vastleggen',
          'text': 'Voer de nieuwe afwijking ten opzichte van de referentietijd in. Het systeem berekent automatisch de dagelijkse afwijking.'
        }
      ]
    }
  ],
};
