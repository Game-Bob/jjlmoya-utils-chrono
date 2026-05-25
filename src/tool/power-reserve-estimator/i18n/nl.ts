import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'gangreserve-schatter',
  title: 'Gangreserve Schatter',
  description: 'Schat de resterende gangreserve van uw horloge op basis van kroondraaien en gedragen uren. Werkt met populaire ETA-, Sellita-, Miyota-, Seiko- en Rolex-kalibers.',
  ui: {
    title: 'Gangreserve Schatter',
    movementLabel: 'Uurwerk',
    selectMovement: 'Selecteer uurwerk',
    customMovement: 'Aangepast',
    turnsLabel: 'Kroondraaien',
    hoursLabel: 'Draagtijd',
    turnsInput: 'Draaien',
    hoursInput: 'Uren',
    activityLabel: 'Activiteit',
    activityLow: 'Bureau',
    activityMedium: 'Wandelen',
    activityHigh: 'Actief',
    calculate: 'Bereken',
    reserveRemaining: 'Resterende Reserve',
    hoursRemaining: 'Resterend',
    chargePercent: 'Lading',
    resultLabel: 'Geschatte Reserve',
    stopTimeLabel: 'Loopt tot',
    powerReserveHours: 'Reserve (u)',
    fullWindTurns: 'Draaien tot vol',
    step1: 'Selecteer uw uurwerk uit het keuzemenu.',
    step2: 'Voer het aantal kroondraaien en gedragen uren in.',
    step3: 'Druk op Bereken om uw reserve te zien.',
    tipTitle: 'Tip',
    tipContent: 'Handopwinduurwerken laden alleen wanneer u de kroon draait. Automatische uurwerken laden ook terwijl u ze draagt.',
  },
  seo: [
    { type: 'title', text: 'Gangreserve Schatter \u2014 Hoeveel reserve heeft uw uurwerk nog?', level: 2 },
    { type: 'paragraph', html: 'Benieuwd hoeveel energie uw mechanische horloge nog heeft? Of u nu vanochtend de kroon hebt opgewonden of het horloge de hele dag hebt gedragen, deze schatter vertelt u het geschatte laadniveau en de resterende uren voor populaire kalibers zoals <strong>ETA, Sellita, Miyota, Seiko en Rolex</strong>.' },
    { type: 'title', text: 'Hoe gangreserve werkt in een mechanisch horloge', level: 3 },
    { type: 'paragraph', html: 'De gangreserve is de hoeveelheid energie die is opgeslagen in de drijfveer. Wanneer u de kroon opwindt, spant u de drijfveer en slaat u potenti\u00eble energie op. Een automatische rotor spant de drijfveer ook terwijl u het horloge draagt. De energie ontlaadt vervolgens in een constant tempo \u2014 meestal 2\u20133% per uur \u2014 totdat het horloge stopt.' },
    { type: 'title', text: 'Kroonopwinden vs. Rotorladen', level: 3 },
    { type: 'paragraph', html: 'Handmatig opwinden via de kroon is de meest effici\u00ebnte manier om een horloge te laden \u2014 elke volledige draai voegt een voorspelbare hoeveelheid energie toe, doorgaans ongeveer 2,5% van de totale reserve. Het dragen van het horloge laadt langzamer en hangt af van uw activiteitenniveau: een kantoormedewerker kan 4\u20136% per uur laden, terwijl iemand die actief is 8\u201310% kan laden. Deze schatter gebruikt een conservatief gemiddelde.' },
    { type: 'title', text: 'Waarom gangreserve schatten belangrijk is', level: 3 },
    { type: 'paragraph', html: 'Het kennen van het laadniveau van uw horloge helpt onverwachte stilstanden te voorkomen. Een horloge dat \u2019s nachts stopt, heeft mogelijk meer winding nodig voor het slapengaan of krijgt niet genoeg draagtijd. Gebruik deze tool om uw oplaadgewoonten te begrijpen en uw automatische horloge draaiende te houden.' },
  ],
  faq: [
    {
      question: 'Hoeveel laadt \u00e9\u00e9n kroondraai het horloge?',
      answer: 'Dat hangt af van het uurwerk. De meeste automatische kalibers bereiken een volle winding in 30\u201340 draaien, dus elke draai voegt ongeveer 2,5\u20133,3% van de totale reserve toe. Handopwinduurwerken zoals de Unitas 6498 hebben ook ongeveer 35 draaien nodig voor een volle winding.',
    },
    {
      question: 'Laadt het dragen van het horloge evenveel als opwinden?',
      answer: 'Dragen laadt langzamer en wisselender. Op kantoor laadt u ongeveer 4\u20136% per uur via de rotor. Bij actieve beweging (wandelen, sport) kan het 8\u201310% per uur bereiken. Handmatig opwinden is sneller en voorspelbaarder.',
    },
    {
      question: 'Hoeveel reserve verliest een horloge per uur?',
      answer: 'Het verlies is constant: deel 100 door de gangreserve in uren. Een 38-uurs uurwerk verliest ongeveer 2,6% per uur, een 42-uurs verliest 2,4% en een 70-uurs verliest ongeveer 1,4% per uur.',
    },
    {
      question: 'Kan ik mijn horloge overwinden?',
      answer: 'Moderne automatische uurwerken hebben een slipkoppeling die overwinden voorkomt. Zodra de drijfveer volledig is gespannen, glijden extra draaien gewoon weg. Handopwinduurwerken hebben ook een stopmechanisme, maar door het forceren van de stop kan de drijfveer beschadigd raken.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer uw uurwerk',
      text: 'Kies het kaliber van uw horloge uit het keuzemenu. Staat het er niet bij, selecteer dan Aangepast en voer de gangreserve en het aantal draaien tot vol in.',
    },
    {
      name: 'Voer uw gegevens in',
      text: 'Typ hoeveel kroondraaien u hebt gegeven of hoeveel uur u het horloge vandaag hebt gedragen. U kunt beide invullen voor een gecombineerde schatting.',
    },
    {
      name: 'Bereken',
      text: 'Druk op de knop Bereken. Het resultaat toont het geschatte laadpercentage en de resterende uren gangreserve.',
    },
    {
      name: 'Pas uw gewoonten aan',
      text: 'Gebruik de resultaten om te bepalen of u voor het slapengaan meer moet opwinden of overdag meer draagtijd nodig hebt om het horloge lopende te houden.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoeveel laadt één kroondraai het horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dat hangt af van het uurwerk. De meeste automatische kalibers bereiken een volle winding in 30-40 draaien, dus elke draai voegt ongeveer 2,5-3,3% van de totale reserve toe. Handopwinduurwerken zoals de Unitas 6498 hebben ook ongeveer 35 draaien nodig voor een volle winding.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Laadt het dragen van het horloge evenveel als opwinden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Dragen laadt langzamer en wisselender. Op kantoor laadt u ongeveer 4-6% per uur via de rotor. Bij actieve beweging kan het 8-10% per uur bereiken. Handmatig opwinden is sneller en voorspelbaarder.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoeveel reserve verliest een horloge per uur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Het verlies is constant: deel 100 door de gangreserve in uren. Een 38-uurs uurwerk verliest ongeveer 2,6% per uur, een 42-uurs verliest 2,4% en een 70-uurs verliest ongeveer 1,4% per uur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik mijn horloge overwinden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Moderne automatische uurwerken hebben een slipkoppeling die overwinden voorkomt. Zodra de drijfveer volledig is gespannen, glijden extra draaien gewoon weg.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Gangreserve Schatter',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Zo schat u de gangreserve van uw horloge',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer uw uurwerk',
          'text': 'Kies het kaliber van uw horloge uit het keuzemenu. Staat het er niet bij, selecteer dan Aangepast en voer de gangreserve en het aantal draaien tot vol in.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Voer uw gegevens in',
          'text': 'Typ hoeveel kroondraaien u hebt gegeven of hoeveel uur u het horloge vandaag hebt gedragen. U kunt beide invullen voor een gecombineerde schatting.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Bereken',
          'text': 'Druk op de knop Bereken. Het resultaat toont het geschatte laadpercentage en de resterende uren gangreserve.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pas uw gewoonten aan',
          'text': 'Gebruik de resultaten om te bepalen of u voor het slapengaan meer moet opwinden of overdag meer draagtijd nodig hebt om het horloge lopende te houden.',
        },
      ],
    },
  ],
};
