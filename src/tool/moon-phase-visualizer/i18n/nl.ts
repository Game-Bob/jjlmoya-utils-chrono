import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'maanfase-visualisator',
  title: 'Moon Phase Visualizer: maankalender en horlogecomplicatie tool',
  description: 'Visualiseer de huidige maanfase, verlichting, ouderdom en aankomende volle en nieuwe manen. Perfect voor het instellen van uw maanfase horlogecomplicatie.',
  ui: {
    title: 'Moon Phase Visualizer',
    selectDate: 'Selecteer datum',
    today: 'Vandaag',
    moonPhase: 'Maanfase',
    illumination: 'Verlichting',
    moonAge: 'Maanouderdom',
    daysUntilFull: 'Dagen tot volle maan',
    daysUntilNew: 'Dagen tot nieuwe maan',
    newMoon: 'Nieuwe maan',
    waxingCrescent: 'Jonge maansikkel',
    firstQuarter: 'Eerste kwartier',
    waxingGibbous: 'Wasende maan',
    fullMoon: 'Volle maan',
    waningGibbous: 'Afnemende maan',
    lastQuarter: 'Laatste kwartier',
    waningCrescent: 'Oude maansikkel',
    nextFullMoon: 'Volgende volle maan',
    nextNewMoon: 'Volgende nieuwe maan',
    tipTitle: 'Tip',
    tipContent: 'Om een maanfasehorloge in te stellen, zoek eerst de huidige maanfase met deze tool en draai dan aan de kroon totdat de maanschijf overeenkomt. De meeste mechanische maanfasen zijn nauwkeurig tot op één dag per 2 jaar.',
    days: 'Cyclusvoortgang',
    day: 'dag',
  },
  seo: [
    { type: 'title', text: 'Moon Phase Visualizer: maanfase tool en horloge instelgids', level: 2 },
    { type: 'paragraph', html: 'De Moon Phase Visualizer toont de <strong>huidige maanfase</strong> met een realistische weergave van de maan. Zie <strong>verlichtingspercentage, maanouderdom, dagen tot volgende volle maan en volgende nieuwe maan</strong>. Ontworpen voor horlogeliefhebbers die hun maanfasecomplicatie nauwkeurig moeten instellen—werkt ook als algemene maankalender voor elke datum in het verleden of de toekomst.' },
    { type: 'title', text: 'Maanfase woordenlijst', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Nieuwe maan', definition: 'De maan staat tussen de aarde en de zon. De verlichte zijde is van ons afgekeerd. 0% verlichting. Het begin van de maancyclus.' },
        { term: 'Jonge maansikkel', definition: '1-49% verlichting. Een dunne sikkel verschijnt aan de rechterkant (noordelijk halfrond). De maan beweegt naar het eerste kwartier.' },
        { term: 'Eerste kwartier', definition: '50% verlichting. De helft van het zichtbare oppervlak is verlicht. De maan heeft een kwart van haar cyclus voltooid.' },
        { term: 'Wasende maan', definition: '51-99% verlichting. Meer dan de helft is verlicht. De maan bouwt naar volle maan.' },
        { term: 'Volle maan', definition: '100% verlichting. Het hele zichtbare oppervlak is verlicht. Het hoogtepunt van de maancyclus.' },
        { term: 'Afnemende maan', definition: '99-51% verlichting. Het verlichte gebied begint te krimpen vanaf de rechterkant.' },
        { term: 'Laatste kwartier', definition: '50% verlichting. De linkerhelft is verlicht. Driekwart van de cyclus voltooid.' },
        { term: 'Oude maansikkel', definition: '49-1% verlichting. Een dunne sikkel aan de linkerkant voordat de cyclus terugkeert naar nieuwe maan.' },
      ]
    },
    { type: 'title', text: 'Hoe stelt u een maanfasehorloge in', level: 3 },
    {
      type: 'list', items: [
        'Gebruik deze tool om de exacte maanfase van vandaag te vinden. Noteer de fasenaam en het visuele uiterlijk.',
        'Trek op uw horloge de kroon naar de maanfase instelpositie (meestal stand 2 of 3).',
        'Draai aan de kroon totdat de maanschijf dezelfde fase toont als de tool. De volle maanindicator bevindt zich doorgaans middenboven op de schijf.',
        'Vermijd het instellen van de maanfase tussen 21:00 en 03:00 uur, wanneer het datumwisselmechanisme is ingeschakeld en beschadigd kan raken.',
        'De meeste mechanische maanfasehorloges gebruiken een 59-tands versnelling die twee maancycli (59 dagen) benadert. Dit betekent dat ze ongeveer één dag afwijking krijgen per 2 jaar.',
        'Voor hoge precisie gebruiken sommige horloges (Patek Philippe, A. Lange & Söhne) versnellingen die nauwkeurig zijn tot op één dag per 100+ jaar.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Nooit instellen tijdens datumwissel', icon: 'mdi:alert', html: 'Stel de maanfase (of datum) niet in tussen ongeveer <strong>21:00 en 03:00 uur</strong>. Gedurende dit venster is het datumwisselmechanisme fysiek in contact met het datumwiel. Forceren van de kroon kan tandwieltanden beschadigen. Als u toch moet instellen gedurende deze periode, draai dan eerst de wijzers voorbij 03:00 uur en stel dan de maanfase in.' },
    { type: 'title', text: 'Mechanisch vs hoge precisie maanfase', level: 3 },
    {
      type: 'table', headers: ['Type', 'Tandwiel', 'Afwijkingsopbouw', 'Eéndagsafwijking na', 'Voorbeeldhorloges'], rows: [
        ['Standaard / Instap', '59 tanden', '~1 dag per 2 jaar', '~2,5 jaar', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermediate', '135 tanden', '~1 dag per 10 jaar', '~10 jaar', 'Omega, Tudor, IWC, Breitling'],
        ['Hoge precisie', 'Tandwieltrein', '~1 dag per 100+ jaar', '100+ jaar', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'De maanschijf lezen', html: 'Bij de meeste maanfasehorloges toont de maanschijf <strong>twee manen</strong> tegenover elkaar. Elke volle maan staat gelijk met de middenboven opening. Na één volledige cyclus (29,5 dagen) neemt de tweede maan zijn plaats in. Dit is waarom een 59-tands versnelling werkt: deze voltooit één volledige rotatie in 59 dagen—precies twee maancycli.' },
    {
      type: 'summary', title: 'Snelle referentie', items: [
        'De maancyclus (synodisch) is exact 29,53058867 dagen. De tool gebruikt deze waarde voor maximale nauwkeurigheid.',
        'Acht fasen herhalen zich in een eeuwige cyclus: nieuwe maan → jonge maansikkel → eerste kwartier → wasende maan → volle maan → afnemende maan → laatste kwartier → oude maansikkel.',
        'Een maanfasehorloge instellen: vind de fase van vandaag hier, pas deze dan aan op de schijf van uw horloge.',
        'Forceer nooit de kroon tussen 21:00 en 03:00 uur. Draai eerst de tijd voorbij 03:00 uur.',
        'Standaard 59-tands maanfasen wijken ongeveer één dag af per 2,5 jaar. Correctie vereist het een klik verderzetten van de schijf.',
      ]
    },
  ],
  faq: [
    {
      question: 'Hoe stel ik een maanfase in op mijn horloge?',
      answer: 'Vind de maanfase van vandaag met deze tool. Draai aan de kroon (meestal stand 2) totdat de maanschijf de overeenkomende fase toont. Vermijd instellen tussen 21:00 en 03:00 uur wanneer het datummechanisme is ingeschakeld.',
    },
    {
      question: 'Hoe nauwkeurig zijn mechanische maanfasehorloges?',
      answer: 'De meeste gebruiken een 59-tands versnelling die nauwkeurig is tot ongeveer één dag per 2 jaar. High-end horloges zoals Patek Philippe en A. Lange & Söhne bereiken een nauwkeurigheid van één dag per 100+ jaar.',
    },
    {
      question: 'Wat is het verschil tussen een synodische en siderische maand?',
      answer: 'De siderische maand (27,3 dagen) is de baan van de maan ten opzichte van de sterren. De synodische maand (29,53 dagen) is de tijd tussen identieke fasen en is wat maanfasehorloges bijhouden.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer een datum',
      text: 'Gebruik de datumkiezer om een datum in het verleden of de toekomst te kiezen en zie de maanfase.',
    },
    {
      name: 'Lees de fasedata',
      text: 'De kaarten tonen de fasenaam, verlichtingspercentage, maanouderdom en cyclusvoortgang.',
    },
    {
      name: 'Vind aankomende gebeurtenissen',
      text: 'De data van de volgende volle maan en nieuwe maan worden automatisch weergegeven.',
    },
    {
      name: 'Stel uw horloge in',
      text: 'Gebruik de weergegeven fase om uw maanfase horlogecomplicatie nauwkeurig in te stellen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe stel ik een maanfase in op mijn horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Vind de maanfase van vandaag met deze tool. Draai aan de kroon totdat de maanschijf de overeenkomende fase toont. Vermijd instellen tussen 21:00 en 03:00 uur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe nauwkeurig zijn mechanische maanfasehorloges?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste gebruiken een 59-tands versnelling die nauwkeurig is tot ongeveer één dag per 2 jaar. High-end horloges bereiken een nauwkeurigheid van één dag per 100+ jaar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat is het verschil tussen een synodische en siderische maand?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De siderische maand (27,3 dagen) is de baan van de maan ten opzichte van de sterren. De synodische maand (29,53 dagen) is de tijd tussen identieke fasen en is wat maanfasehorloges bijhouden.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe maanfasen visualiseren',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer een datum',
          'text': 'Gebruik de datumkiezer om een datum te kiezen en de maanfase te zien.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees de fasedata',
          'text': 'De kaarten tonen de fasenaam, verlichting, maanouderdom en cyclusvoortgang.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Stel uw horloge in',
          'text': 'Gebruik de weergegeven fase om uw maanfase horlogecomplicatie in te stellen.',
        },
      ],
    },
  ],
};

