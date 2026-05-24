import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'klocka-precision-kalkylator',
  title: 'Klocka Precision & Gångavvikelse Kalkylator',
  description: 'Logga och beräkna den dagliga tidsskillnaden för dina mekaniska klockor eller kvartsklockor för att analysera precision och stabilitet.',
  ui: {
    title: 'Klockprecision',
    selectWatch: 'Välj eller lägg till en klocka',
    watchPlaceholder: 't.ex. Seiko SKX007',
    addWatch: 'Lägg till klocka',
    deleteWatch: 'Ta bort klocka',
    addLog: 'Logga ny mätning',
    offsetLabel: 'Tidsavvikelse (sekunder)',
    offsetPlaceholder: '0',
    dateLabel: 'Mättidpunkt',
    saveLog: 'Spara mätning',
    avgRate: 'Genomsnittlig daglig avvikelse',
    consistency: 'Präzisionsstatus',
    totalLogs: 'Mätningar totalt',
    historyTitle: 'Mäthistorik',
    noLogs: 'Inga mätningar registrerade för denna klocka än. Lägg till minst två mätningar för att beräkna precisionen.',
    tableDate: 'Datum & Tid',
    tableOffset: 'Avvikelse',
    tableRate: 'Daglig avvikelse',
    tableActions: 'Åtgärder',
    deleteLog: 'Ta bort',
    coscExcellent: 'COSC-kronometer (+4/-6 s/d)',
    excellent: 'Utmärkt (0 till +5 s/d)',
    good: 'Bra (+/- 10 s/d)',
    needsService: 'Service rekommenderas (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'sekunder',
    referenceTime: 'Referenstid',
    watchTime: 'Klocktid',
    useCurrentTime: 'Använd aktuell tid',
    calculatedRate: 'Beräknad avvikelse',
    driftPredictorTitle: 'Avvikelseprognos & Kalkylator',
    driftPredictorDesc: 'Projicera den kumulerade tidsskillnaden över dagar, månader och år samt jämför med standarder.',
    dailyRateInput: 'Daglig avvikelse (sekunder/dag)',
    dailyRatePlaceholder: 't.ex. +4.5 eller -3',
    driftHeading: 'Prognoser',
    period: 'Tidsperiod',
    accumulatedDrift: 'Projicerad avvikelse',
    day: '1 Dag',
    week: '1 Vecka',
    month: '1 Månad',
    months3: '3 Månader',
    months6: '6 Månader',
    year: '1 År',
    years5: '5 År',
    watchStandardTitle: 'Certifieringsstandarder',
    trackerHeading: 'Tidsavvikelse i Realtid',
    driftCalculatorTab: 'Gångprognos',
    trackerTab: 'Gångprotokoll',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'COSC Chronometer',
    stdMetas: 'METAS Master',
    stdStdMech: 'Standard Mekanisk',
    stdQuartz: 'Standard Kvarts',
    stdHaq: 'Högprecisionskvarts',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standard (+15 s/d)',
    presetQuartz: 'Kvarts (+0.5 s/d)',
    statusPass: 'Godkänd',
    statusFail: 'Underkänd',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/år',
  },
  seo: [
    { type: 'title', text: 'Den ultimata guiden till klockprecision och mekanisk tidhållning', level: 2 },
    { type: 'paragraph', html: 'Mekaniska klockor är underverk av finmekanik, men till skillnad från kvartsur påverkas de av miljöfaktorer och fysiska krafter som påverkar tidhållningen. Att regelbundet mäta och analysera klockans dagliga tidsskillnad är avgörande för att bedöma dess skick och avgöra när en professionell service behövs.' },
    { type: 'title', text: 'Varför mekaniska klockor avviker: De viktigaste faktorerna', level: 2 },
    { type: 'paragraph', html: 'Många faktorer påverkar den dagliga gången. Gravitationen påverkar balanshjulet och balansspiralen olika beroende på hur klockan ligger (viloposition). Temperaturförändringar kan få spiralen att expandera eller dra ihop sig, vilket ändrar svängningsfrekvensen. Dessutom påverkar fjäderns spänning (gångreserven) amplituden: en fullt uppdragen klocka går stabilare än en klocka i slutet av sin gångreserv.' },
    { type: 'title', text: 'Kumulerad tidsavvikelse: Hur sekunder blir till timmar', level: 2 },
    { type: 'paragraph', html: 'En daglig avvikelse på bara +5 sekunder låter försumbar, men tid är kumulativ. På en vecka blir det 35 sekunder, på en månad 2,5 minuter och på ett år drar sig klockan över 30 minuter före eller efter. Denna kumulerade avvikelse visar varför det är viktigt att mäta precisionen regelbundet.' },
    { type: 'title', text: 'Hur du mäter och beräknar klockans precision manuellt', level: 2 },
    { type: 'paragraph', html: 'Du kan enkelt mäta din klockas avvikelse utan en dyr tidvåg. Synkronisera klockan med ett exakt atomur (t.ex. UTC-tid). Notera efter 24 till 48 timmar den nya tidsskillnaden i sekunder. Dela detta värde med antalet dagar för att få den genomsnittliga dagliga gångavvikelsen.' },
    { type: 'title', text: 'Använd klockans vilopositioner för naturlig reglering', level: 2 },
    { type: 'paragraph', html: 'Många mekaniska klockor kan regleras något beroende på hur de läggs när de inte bärs. Om klockan läggs plant (urtavlan uppåt) brukar den gå aningen fortare. Om den läggs på sidan (kronan nedåt) saktar den ofta ner. Genom att medvetet välja viloposition under natten kan du kompensera för avvikelsen utan att öppna boetten.' },
  ],
  faq: [
    {
      question: 'Vad är en normal daglig avvikelse för en mekanisk klocka?',
      answer: 'Standardmässiga mekaniska klockor avviker oftast +/- 10 till 20 sekunder per dag. Chronometer-certifierade klockor enligt COSC är reglerade till inom -4 till +6 sekunder per dag. Kvartsverk av hög kvalitet kan uppnå avvikelser på under +/- 0.5 sekunder per dag.',
    },
    {
      question: 'Varför varierar klockans precision beroende på viloposition?',
      answer: 'Gravitationskraften drar i balanshjulet och balansspiralen olika beroende på om klockan ligger plant (urtavla uppåt/nedåt) eller står på sidan (krona uppåt/nedåt). Detta orsakar små förändringar i amplituden och därmed gånghastigheten.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Registrera startvärde',
      text: 'Synkronisera klockan med ett tillförlitligt atomur och notera startavvikelsen i sekunder.',
    },
    {
      name: 'Bär klockan och vänta',
      text: 'Bär klockan normalt eller förvara den i en fast position i minst 12 till 24 timmar.',
    },
    {
      name: 'Registrera slutvärde',
      text: 'Mät återigen avvikelsen mot referenstiden. Systemet beräknar automatiskt den dagliga avvikelsen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Klocka Precision & Gångavvikelse Kalkylator',
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
          'name': 'Vad är en normal daglig avvikelse för en mekanisk klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standardmässiga mekaniska klockor avviker oftast +/- 10 till 20 sekunder per dag. Chronometer-certifierade klockor enligt COSC är reglerade till inom -4 till +6 sekunder per dag. Kvartsverk av hög kvalitet kan uppnå avvikelser på under +/- 0.5 sekunder per dag.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Varför varierar klockans precision beroende på viloposition?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gravitationskraften drar i balanshjulet och balansspiralen olika beroende på om klockan ligger plant (urtavla uppåt/nedåt) eller står på sidan (krona uppåt/nedåt). Detta orsakar små förändringar i amplituden och därmed gånghastigheten.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur du mäter och beräknar klockans precision manuellt',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Registrera startvärde',
          'text': 'Synkronisera klockan med ett tillförlitligt atomur och notera startavvikelsen i sekunder.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Bär klockan och vänta',
          'text': 'Bär klockan normalt eller förvara den i en fast position i minst 12 till 24 timmar.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Registrera slutvärde',
          'text': 'Mät återigen avvikelsen mot referenstiden. Systemet beräknar automatiskt den dagliga avvikelsen.'
        }
      ]
    }
  ],
};
