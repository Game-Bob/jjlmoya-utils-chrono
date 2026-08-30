import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'mondphasen-visualizer',
  title: 'Mondphasen Visualizer: Lunarer Kalender und Uhren Komplikationen Tool',
  description: 'Visualisiere die aktuelle Mondphase, Beleuchtung, Alter und bevorstehende Voll- und Neumonde. Perfekt zum Einstellen deiner Mondphasen-Komplikation.',
  ui: {
    title: 'Mondphasen Visualizer',
    selectDate: 'Datum auswählen',
    today: 'Heute',
    moonPhase: 'Mondphase',
    illumination: 'Beleuchtung',
    moonAge: 'Mondalter',
    daysUntilFull: 'Tage bis Vollmond',
    daysUntilNew: 'Tage bis Neumond',
    newMoon: 'Neumond',
    waxingCrescent: 'Zunehmende Sichel',
    firstQuarter: 'Erstes Viertel',
    waxingGibbous: 'Zunehmender Mond',
    fullMoon: 'Vollmond',
    waningGibbous: 'Abnehmender Mond',
    lastQuarter: 'Letztes Viertel',
    waningCrescent: 'Abnehmende Sichel',
    nextFullMoon: 'Nächster Vollmond',
    nextNewMoon: 'Nächster Neumond',
    tipTitle: 'Tipp',
    tipContent: 'Um eine Mondphasenuhr einzustellen, ermittle zunächst die heutige Mondphase mit diesem Tool und drehe dann an der Krone, bis die Mondscheibe übereinstimmt. Die meisten mechanischen Mondphasen sind auf etwa einen Tag Abweichung alle 2 Jahre genau.',
    days: 'Zyklusfortschritt',
    day: 'Tag',
  },
  seo: [
    { type: 'title', text: 'Mondphasen Visualizer: Mondphasen Tool und Uhren Einstellanleitung', level: 2 },
    { type: 'paragraph', html: 'Der Mondphasen-Visualizer zeigt die <strong>aktuelle Mondphase</strong> mit einer realistischen Darstellung des Mondes. Sieh dir <strong>Beleuchtungsprozentsatz, Mondalter, Tage bis zum nächsten Vollmond und nächsten Neumond</strong> an. Entwickelt für Uhrenliebhaber, die ihre Mondphasen-Komplikation präzise einstellen müssen - funktioniert auch als allgemeiner Lunarkalender für jedes beliebige Datum in der Vergangenheit oder Zukunft.' },
    { type: 'title', text: 'Mondphasen-Glossar', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Neumond', definition: 'Der Mond befindet sich zwischen Erde und Sonne. Die beleuchtete Seite ist von uns abgewandt. 0 % Beleuchtung. Der Beginn des Mondzyklus.' },
        { term: 'Zunehmende Sichel', definition: '1-49 % Beleuchtung. Eine dünne Sichel erscheint auf der rechten Seite (Nordhalbkugel). Der Mond bewegt sich auf das erste Viertel zu.' },
        { term: 'Erstes Viertel', definition: '50 % Beleuchtung. Die Hälfte der sichtbaren Oberfläche ist beleuchtet. Der Mond hat ein Viertel seines Zyklus absolviert.' },
        { term: 'Zunehmender Mond', definition: '51-99 % Beleuchtung. Mehr als die Hälfte ist beleuchtet. Der Mond nähert sich dem Vollmond.' },
        { term: 'Vollmond', definition: '100 % Beleuchtung. Die gesamte sichtbare Oberfläche ist beleuchtet. Der Höhepunkt des Mondzyklus.' },
        { term: 'Abnehmender Mond', definition: '99-51 % Beleuchtung. Der beleuchtete Bereich beginnt von der rechten Seite zu schrumpfen.' },
        { term: 'Letztes Viertel', definition: '50 % Beleuchtung. Die linke Hälfte ist beleuchtet. Drei Viertel des Zyklus sind abgeschlossen.' },
        { term: 'Abnehmende Sichel', definition: '49-1 % Beleuchtung. Eine dünne Sichel auf der linken Seite, bevor der Zyklus zum Neumond zurückkehrt.' },
      ]
    },
    { type: 'title', text: 'So stellst du eine Mondphasenuhr ein', level: 3 },
    {
      type: 'list', items: [
        'Nutze dieses Tool, um die genaue Mondphase von heute zu ermitteln. Notiere dir den Phasennamen und das visuelle Erscheinungsbild.',
        'Ziehe an deiner Uhr die Krone in die Mondphasen-Einstellposition (normalerweise Position 2 oder 3).',
        'Drehe die Krone, bis die Mondscheibe dieselbe Phase wie das Tool anzeigt. Die Vollmond-Markierung befindet sich in der Regel mittig oben auf der Scheibe.',
        'Vermeide es, die Mondphase zwischen 21 Uhr und 3 Uhr morgens einzustellen, da dann der Datumswechsel-Mechanismus aktiv ist und beschädigt werden kann.',
        'Die meisten mechanischen Mondphasenuhren verwenden ein 59-Zahnrad, das etwa zwei Mondzyklen (59 Tage) annähert. Das bedeutet, dass sie etwa einen Tag Abweichung alle 2 Jahre ansammeln.',
        'Für hohe Präzision verwenden einige Uhren (Patek Philippe, A. Lange & Söhne) Zahnräder, die auf einen Tag Abweichung alle 100+ Jahre genau sind.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Niemals während des Datumswechsels einstellen', icon: 'mdi:alert', html: 'Stelle die Mondphase (oder das Datum) nicht zwischen etwa <strong>21 Uhr und 3 Uhr morgens</strong> ein. In diesem Zeitfenster ist der Datumswechsel-Mechanismus der Uhr physisch mit dem Datumsrad verbunden. Gewaltsames Drehen an der Krone kann Zahnradzähne abreißen. Wenn du in diesem Zeitraum einstellen musst, drehe zuerst die Zeiger über 3 Uhr hinaus und stelle dann die Mondphase ein.' },
    { type: 'title', text: 'Mechanische vs. hochpräzise Mondphase', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Zahnrad', 'Fehlerakkumulation', '1 Tag Abweichung nach', 'Beispieluhren'], rows: [
        ['Standard / Einsteiger', '59 Zähne', '~1 Tag alle 2 Jahre', '~2,5 Jahre', 'Seiko, Orient, Hamilton, Tissot'],
        ['Mittelklasse', '135 Zähne', '~1 Tag alle 10 Jahre', '~10 Jahre', 'Omega, Tudor, IWC, Breitling'],
        ['Hohe Präzision', 'Getriebezug', '~1 Tag pro 100+ Jahre', '100+ Jahre', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Die Mondscheibe lesen', html: 'Bei den meisten Mondphasenuhren zeigt die Mondscheibe <strong>zwei Monde</strong> gegenüberliegend. Jeder Vollmond richtet sich an der mittig oberen Öffnung aus. Nach einem vollständigen Zyklus (29,5 Tage) nimmt der zweite Mond seinen Platz ein. Deshalb funktioniert ein 59-Zahnrad: Es absolviert eine vollständige Umdrehung in 59 Tagen - genau zwei Mondzyklen.' },
    {
      type: 'summary', title: 'Kurzübersicht', items: [
        'Der Mondzyklus (Synodischer Monat) beträgt exakt 29,53058867 Tage. Das Tool verwendet diesen Wert für maximale Genauigkeit.',
        'Acht Phasen wiederholen sich in einem ewigen Kreislauf: Neumond → zunehmende Sichel → erstes Viertel → zunehmender Mond → Vollmond → abnehmender Mond → letztes Viertel → abnehmende Sichel.',
        'Um eine Mondphasenuhr einzustellen: finde die heutige Phase hier heraus und gleiche sie dann auf der Scheibe deiner Uhr an.',
        'Zwinge die Krone niemals zwischen 21 Uhr und 3 Uhr. Stelle die Zeit zuerst über 3 Uhr hinaus.',
        'Standard-Mondphasen mit 59 Zähnen weichen etwa einen Tag alle 2,5 Jahre ab. Die Korrektur erfordert das Weiterdrehen der Scheibe um einen Klick.',
      ]
    },
  ],
  faq: [
    {
      question: 'Wie stelle ich eine Mondphase an meiner Uhr ein?',
      answer: 'Ermittle die heutige Mondphase mit diesem Tool. Drehe die Krone (normalerweise Position 2), bis die Mondscheibe die passende Phase anzeigt. Vermeide das Einstellen zwischen 21 Uhr und 3 Uhr morgens, wenn der Datumsmechanismus aktiv ist.',
    },
    {
      question: 'Wie genau sind mechanische Mondphasenuhren?',
      answer: 'Die meisten verwenden ein 59-Zahnrad, das auf etwa einen Tag alle 2 Jahre genau ist. High-End-Uhren wie Patek Philippe und A. Lange & Söhne erreichen eine Genauigkeit von einem Tag alle 100+ Jahre.',
    },
    {
      question: 'Was ist der Unterschied zwischen einem synodischen und einem siderischen Monat?',
      answer: 'Der siderische Monat (27,3 Tage) ist die Umlaufbahn des Mondes relativ zu den Sternen. Der synodische Monat (29,53 Tage) ist die Zeit zwischen identischen Phasen und wird von Mondphasenuhren nachverfolgt.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Datum auswählen',
      text: 'Nutze die Datumsauswahl, um ein beliebiges Datum in der Vergangenheit oder Zukunft zu wählen und die Mondphase zu sehen.',
    },
    {
      name: 'Phasendaten ablesen',
      text: 'Die Karten zeigen Phasenname, Beleuchtungsprozentsatz, Mondalter und Zyklusfortschritt.',
    },
    {
      name: 'Bevorstehende Ereignisse finden',
      text: 'Die Daten des nächsten Vollmonds und Neumonds werden automatisch angezeigt.',
    },
    {
      name: 'Uhr einstellen',
      text: 'Verwende die angezeigte Phase, um deine Mondphasen-Komplikation präzise einzustellen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie stelle ich eine Mondphase an meiner Uhr ein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ermittle die heutige Mondphase mit diesem Tool. Drehe die Krone, bis die Mondscheibe die passende Phase anzeigt. Vermeide das Einstellen zwischen 21 Uhr und 3 Uhr morgens.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie genau sind mechanische Mondphasenuhren?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten verwenden ein 59-Zahnrad, das auf etwa einen Tag alle 2 Jahre genau ist. High-End-Uhren erreichen eine Genauigkeit von einem Tag alle 100+ Jahre.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist der Unterschied zwischen einem synodischen und einem siderischen Monat?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der siderische Monat (27,3 Tage) ist die Umlaufbahn des Mondes relativ zu den Sternen. Der synodische Monat (29,53 Tage) ist die Zeit zwischen identischen Phasen und wird von Mondphasenuhren nachverfolgt.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Mondphasen Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5 und JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So visualisiert man Mondphasen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Datum auswählen',
          'text': 'Nutze die Datumsauswahl, um ein beliebiges Datum zu wählen und die Mondphase zu sehen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Phasendaten ablesen',
          'text': 'Die Karten zeigen Phasenname, Beleuchtung, Mondalter und Zyklusfortschritt.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Uhr einstellen',
          'text': 'Verwende die angezeigte Phase, um deine Mondphasen-Komplikation einzustellen.',
        },
      ],
    },
  ],
};
