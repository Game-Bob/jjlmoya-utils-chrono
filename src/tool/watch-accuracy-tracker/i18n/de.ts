import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'uhrgenauigkeit-rechner',
  title: 'Ganggenauigkeit & Gangabweichung von Uhren Berechnen',
  description: 'Protokollieren und berechnen Sie die tägliche Gangabweichung Ihrer mechanischen Uhren oder Quarzuhren, um deren Präzision und Konstanz zu analysieren.',
  ui: {
    title: 'Uhrenpräzisionsrechner',
    selectWatch: 'Uhr auswählen oder hinzufügen',
    watchPlaceholder: 'z. B. Seiko SKX007',
    addWatch: 'Uhr hinzufügen',
    deleteWatch: 'Uhr löschen',
    addLog: 'Neue Messung protokollieren',
    offsetLabel: 'Abweichung (Sekunden)',
    offsetPlaceholder: '0',
    dateLabel: 'Messzeitpunkt',
    saveLog: 'Messung speichern',
    avgRate: 'Mittlere tägliche Gangabweichung',
    consistency: 'Präzisionsstatus',
    totalLogs: 'Messungen gesamt',
    historyTitle: 'Messverlauf',
    noLogs: 'Noch keine Messungen für diese Uhr vorhanden. Fügen Sie mindestens zwei Messungen hinzu, um die Genauigkeit zu berechnen.',
    tableDate: 'Datum & Uhrzeit',
    tableOffset: 'Abweichung',
    tableRate: 'Tägliche Gangabweichung',
    tableActions: 'Aktionen',
    deleteLog: 'Löschen',
    coscExcellent: 'COSC-Chronometer (+4/-6 s/d)',
    excellent: 'Ausgezeichnet (0 bis +5 s/d)',
    good: 'Gut (+/- 10 s/d)',
    needsService: 'Service empfohlen (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'Sekunden',
    referenceTime: 'Referenzzeit',
    watchTime: 'Uhrzeit',
    useCurrentTime: 'Aktuelle Zeit verwenden',
    calculatedRate: 'Berechnete Abweichung',
    driftPredictorTitle: 'Abweichungsprognose & Gangrechner',
    driftPredictorDesc: 'Projizieren Sie die kumulierte Gangabweichung über Tage, Monate und Jahre und vergleichen Sie diese mit Industriestandards.',
    dailyRateInput: 'Tägliche Abweichung (Sekunden/Tag)',
    dailyRatePlaceholder: 'z. B. +4.5 oder -3',
    driftHeading: 'Prognosen',
    period: 'Zeitraum',
    accumulatedDrift: 'Projizierte Abweichung',
    day: '1 Tag',
    week: '1 Woche',
    month: '1 Monat',
    months3: '3 Monate',
    months6: '6 Monate',
    year: '1 Jahr',
    years5: '5 Jahre',
    watchStandardTitle: 'Zertifizierungsstandards',
    trackerHeading: 'Echtzeit-Gangmessung',
    driftCalculatorTab: 'Gangprognose',
    trackerTab: 'Gangprotokoll',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'COSC Chronometer',
    stdMetas: 'METAS Master',
    stdStdMech: 'Standard Mechanisch',
    stdQuartz: 'Standard Quarz',
    stdHaq: 'Hochpräzises Quarzwerk',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standard (+15 s/d)',
    presetQuartz: 'Quarz (+0.5 s/d)',
    statusPass: 'Bestanden',
    statusFail: 'Nicht bestanden',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/Jahr',
  },
  seo: [
    { type: 'title', text: 'Der ultimative Leitfaden zur Ganggenauigkeit und Regulierung von mechanischen Uhren', level: 2 },
    { type: 'paragraph', html: 'Mechanische Uhren sind Meisterwerke der Mikromechanik. Im Gegensatz zu Quarzuhren unterliegen sie verschiedenen physikalischen und umweltbedingten Kräften, die ihre Ganggenauigkeit beeinflussen. Das regelmäßige Überwachen und Dokumentieren der täglichen Gangabweichung ist der beste Weg, um den Zustand Ihrer Uhr zu beurteilen und festzustellen, wann ein professioneller Service erforderlich ist.' },
    { type: 'title', text: 'Warum mechanische Uhren abweichen: Die wichtigsten Faktoren', level: 2 },
    { type: 'paragraph', html: 'Viele Faktoren beeinflussen die tägliche Gangrate. Die Schwerkraft wirkt sich je nach Lage der Uhr unterschiedlich auf die Unruh und die Spiralfeder aus (sogenannte Lagenfehler). Temperaturschwankungen dehnen die Spirale aus oder ziehen sie zusammen, was die Schwingungsfrequenz verändert. Zudem beeinflusst die Federspannung (Gangreserve) die Amplitude: Voll aufgezogene Uhren laufen meist stabiler als solche am Ende ihrer Gangreserve.' },
    { type: 'title', text: 'Kumulierte Gangabweichung: Wie sich Sekunden aufsummieren', level: 2 },
    { type: 'paragraph', html: 'Eine tägliche Abweichung von nur +5 Sekunden klingt minimal, summiert sich jedoch schnell auf. In einer Woche sind es 35 Sekunden, in einem Monat 2,5 Minuten und nach einem Jahr geht die Uhr bereits über 30 Minuten vor oder nach. Diese exponentielle Abweichung verdeutlicht, warum eine präzise Überwachung für Sammler, die ihre Uhren rotieren lassen, so wichtig ist.' },
    { type: 'title', text: 'Uhren-Ganggenauigkeit manuell messen und berechnen', level: 2 },
    { type: 'paragraph', html: 'Sie können die Ganggenauigkeit Ihrer Uhr auch ohne teure Zeitwaage manuell ermitteln. Synchronisieren Sie dazu Ihre Uhr mit einer präzisen Atomuhr (z. B. UTC-Zeit). Notieren Sie nach 24 bis 48 Stunden Tragezeit die Abweichung in Sekunden. Teilen Sie diese Differenz durch die Anzahl der Tage, um die durchschnittliche tägliche Gangabweichung zu berechnen.' },
    { type: 'title', text: 'Die nächtliche Ablage zur Gangregulierung nutzen', level: 2 },
    { type: 'paragraph', html: 'Mechanische Uhren lassen sich oft allein durch die Art ihrer nächtlichen Ablage leicht regulieren. Wird die Uhr flach auf den Boden gelegt (Zifferblatt oben), läuft sie meist etwas schneller. Wird sie hochkant abgelegt (Krone unten), verliert sie tendenziell an Zeit. Durch gezieltes Ablegen können Sie die tägliche Abweichung minimieren, ohne das Gehäuse zu öffnen.' },
  ],
  faq: [
    {
      question: 'Welche tägliche Gangabweichung ist bei mechanischen Uhren normal?',
      answer: 'Standardmäßige mechanische Uhren weichen in der Regel um +/- 10 bis 20 Sekunden pro Tag ab. Chronometer mit COSC-Zertifikat sind auf -4 bis +6 Sekunden pro Tag einreguliert. Hochwertige Quarzwerke erreichen Abweichungen von weniger als +/- 0.5 Sekunden pro Tag.',
    },
    {
      question: 'Warum ändert sich die Genauigkeit meiner Uhr je nach Lage?',
      answer: 'Die Schwerkraft zieht die Unruh und die Spiralfeder unterschiedlich stark an, je nachdem, ob die Uhr flach liegt (Zifferblatt oben/unten) oder seitlich steht (Krone oben/unten). Diese Lagenabweichungen führen zu leichten Veränderungen der Amplitude und damit der Ganggeschwindigkeit.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Startwert aufzeichnen',
      text: 'Synchronisieren Sie die Uhr mit einer zuverlässigen Atomuhr und notieren Sie die Abweichung in Sekunden.',
    },
    {
      name: 'Tragen und Warten',
      text: 'Tragen Sie die Uhr ganz normal oder lagern Sie sie mindestens 12 bis 24 Stunden lang in einer festen Position.',
    },
    {
      name: 'Endwert aufzeichnen',
      text: 'Tragen Sie die neue Abweichung zur Referenzzeit ein. Das System berechnet automatisch die tägliche Gangabweichung.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Ganggenauigkeit & Gangabweichung von Uhren Berechnen',
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
          'name': 'Welche tägliche Gangabweichung ist bei mechanischen Uhren normal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standardmäßige mechanische Uhren weichen in der Regel um +/- 10 bis 20 Sekunden pro Tag ab. Chronometer mit COSC-Zertifikat sind auf -4 bis +6 Sekunden pro Tag einreguliert. Hochwertige Quarzwerke erreichen Abweichungen von weniger als +/- 0.5 Sekunden pro Tag.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Warum ändert sich die Genauigkeit meiner Uhr je nach Lage?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Schwerkraft zieht die Unruh und die Spiralfeder unterschiedlich stark an, je nachdem, ob die Uhr flach liegt (Zifferblatt oben/unten) oder seitlich steht (Krone oben/unten). Diese Lagenabweichungen führen zu leichten Veränderungen der Amplitude und damit der Ganggeschwindigkeit.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Uhren-Ganggenauigkeit manuell messen und berechnen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Startwert aufzeichnen',
          'text': 'Synchronisieren Sie die Uhr mit einer zuverlässigen Atomuhr und notieren Sie die Abweichung in Sekunden.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Tragen und Warten',
          'text': 'Tragen Sie die Uhr ganz normal oder lagern Sie sie mindestens 12 bis 24 Stunden lang in einer festen Position.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Endwert aufzeichnen',
          'text': 'Tragen Sie die neue Abweichung zur Referenzzeit ein. Das System berechnet automatisch die tägliche Gangabweichung.'
        }
      ]
    }
  ],
};
