import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'tachymeter-rechner',
  title: 'Tachymeter Rechner: Geschwindigkeit aus verstrichener Zeit',
  description: 'Berechnen Sie die Geschwindigkeit aus der verstrichenen Zeit mit der Tachymeter-Formel. Funktioniert mit jeder Chronographenuhr mit Tachymeterskala.',
  ui: {
    title: 'Tachymeter Rechner',
    timeLabel: 'Verstrichene Zeit (Sekunden)',
    timeHelp: 'Gemessene Zeit über 1 km',
    speedResult: 'Geschwindigkeit',
    bezelReading: 'Lünettenanzeige',
    presetLabel: 'Szenario',
    selectPreset: 'Szenario auswählen',
    customPreset: 'Benutzerdefiniert',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Starten Sie den Chronographen, wenn das Objekt den Startpunkt passiert.',
    exampleStep2: 'Stoppen Sie ihn nach 1 km. Die Tachymeterskala zeigt die Geschwindigkeit.',
    tipTitle: 'Hinweis',
    tipContent: 'Bei 36 Sekunden zeigt die Lünette 100. Schnellere Zeiten (kürzere Dauer) zeigen höhere Geschwindigkeiten auf der Tachymeterskala an.',
  },
  seo: [
    { type: 'title', text: 'Tachymeter Rechner: Geschwindigkeit aus verstrichener Zeit', level: 2 },
    { type: 'paragraph', html: 'Ein Tachymeter ist eine Skala auf der Lünette oder dem Zifferblatt einer Uhr, die die verstrichene Zeit in Geschwindigkeit umrechnet. Sie wird typischerweise mit einem Chronographen verwendet: Starten Sie den Timer, wenn das Objekt einen Referenzpunkt passiert, stoppen Sie ihn nach 1 km und lesen Sie die Geschwindigkeit von der Skala ab. Dieser Rechner erledigt die Mathematik für Sie.' },
    { type: 'title', text: 'Wie ein Tachymeter funktioniert', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formel', definition: 'Geschwindigkeit = 3.600 / verstrichene Zeit in Sekunden. Die Konstante 3.600 steht für die Sekunden pro Stunde.' },
        { term: 'Die Skala', definition: 'Tachymeterlünetten sind von 60 (auf der 3-Uhr-Position) bis zu 400 oder 500 (nahe 12 Uhr) markiert. Höhere Geschwindigkeiten entsprechen kürzeren Zeiten.' },
        { term: 'Basisentfernung', definition: 'Standard-Tachymeter sind auf 1 km oder 1 Meile kalibriert. Für andere Entfernungen teilen Sie den Wert entsprechend.' },
      ]
    },
    { type: 'title', text: 'Übliche Tachymetermessungen', level: 3 },
    {
      type: 'table', headers: ['Verstrichene Zeit', 'Geschwindigkeit', 'Szenario'], rows: [
        ['10 s', '360 km/h', 'Hochgeschwindigkeitszug / Rennwagen'],
        ['12 s', '300 km/h', 'Privatjet Start'],
        ['20 s', '180 km/h', 'Sportwagen auf Autobahn'],
        ['30 s', '120 km/h', 'Auto auf Autobahn'],
        ['36 s', '100 km/h', 'Auto auf Landstraße (Standardreferenz)'],
        ['45 s', '80 km/h', 'Auto innerorts'],
        ['60 s', '60 km/h', 'Stadtverkehr'],
        ['90 s', '40 km/h', 'Radfahren'],
        ['120 s', '30 km/h', 'Joggen'],
        ['240 s', '15 km/h', 'Laufen'],
        ['480 s', '7.5 km/h', 'Gehen'],
      ]
    },
    { type: 'title', text: 'Über die Standardskala hinaus', level: 3 },
    { type: 'paragraph', html: 'Wenn Ihre Tachymeterlünette nur bis 400 reicht, Ihre gemessene Zeit aber unter 9 Sekunden liegt, können Sie sie dennoch nutzen. Verwenden Sie einfach eine größere Basisentfernung. Wenn Sie zum Beispiel 2 km in 18 Sekunden zurücklegen, halbieren Sie den Lünettenwert. Umgekehrt: Für langsame Geschwindigkeiten (über 60 Sekunden) verwenden Sie eine kürzere Basisentfernung und multiplizieren Sie entsprechend.' },
    { type: 'diagnostic', variant: 'info', title: 'Tachymeter Kompatibilität', icon: 'mdi:information', badge: 'HINWEIS', html: 'Nicht alle Chronographen haben eine Tachymeterlünette. Bei einigen Uhren befindet sich die Skala auf dem inneren Ring oder dem äußeren Kapitelring. Digitale Uhren können eine Tachymeterfunktion im Chronographenmodus bieten. Die Formel funktioniert immer, unabhängig von der physischen Skala.' },
  ],
  faq: [
    {
      question: 'Wie benutze ich eine Tachymeterlünette an meiner Uhr?',
      answer: 'Starten Sie den Chronographen an einem Referenzpunkt (z.B. einem Kilometerstein). Stoppen Sie ihn nach genau 1 km. Der Sekundenzeiger zeigt auf die Geschwindigkeit auf der Lünette. Bei 36 Sekunden zeigt er zum Beispiel auf 100 km/h.',
    },
    {
      question: 'Was ist, wenn meine gemessene Zeit kürzer ist als die Skala anzeigen kann?',
      answer: 'Einige Tachymeter gehen nur bis 400 oder 500. Wenn Sie 1 km in unter 9 Sekunden zurücklegen, verwenden Sie eine größere Basisentfernung. Legen Sie 2 km zurück und teilen Sie den Wert durch 2.',
    },
    {
      question: 'Was ist, wenn meine gemessene Zeit länger ist als die Skala anzeigen kann?',
      answer: 'Verwenden Sie eine kürzere Basisentfernung. Bei 90 Sekunden für 1 km messen Sie stattdessen 0,5 km. Lesen Sie den Wert ab und multiplizieren Sie mit 2.',
    },
    {
      question: 'Kann ich einen Tachymeter auch für andere Dinge als Geschwindigkeit verwenden?',
      answer: 'Ja. Der Tachymeter misst jede Rate pro Stunde. Messen Sie die Zeit für eine Aufgabe und die Skala zeigt, wie viele Sie pro Stunde erledigen können. Ein 30-Sekunden-Vorgang bedeutet 120 Einheiten pro Stunde.',
    },
    {
      question: 'Verwenden alle Tachymeter die gleiche Skala?',
      answer: 'Die meisten verwenden die logarithmische Standard-Skala auf Basis der Formel 3.600 / Sekunden. Einige Vintage-Uhren oder Marken können jedoch abweichen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Szenario auswählen oder eigene Zeit eingeben',
      text: 'Wählen Sie aus Voreinstellungen wie Auto, Radfahren oder Laufen, oder wählen Sie Benutzerdefiniert für eine beliebige Zeit in Sekunden.',
    },
    {
      name: 'Geschwindigkeit ablesen',
      text: 'Der Rechner zeigt die Geschwindigkeit in km/h und den entsprechenden Tachymeterwert.',
    },
    {
      name: 'Auf Ihre Uhr anwenden',
      text: 'Nutzen Sie die verstrichene Zeit, um die passende Geschwindigkeit auf Ihrer Tachymeterlünette zu finden.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie benutze ich eine Tachymeterlünette an meiner Uhr?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Starten Sie den Chronographen an einem Referenzpunkt. Stoppen Sie ihn nach genau 1 km. Der Sekundenzeiger zeigt auf die Geschwindigkeit auf der Lünette.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist, wenn meine gemessene Zeit kürzer ist als die Skala anzeigen kann?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verwenden Sie eine größere Basisentfernung. Legen Sie 2 km zurück und teilen Sie den Wert durch 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist, wenn meine gemessene Zeit länger ist als die Skala anzeigen kann?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verwenden Sie eine kürzere Basisentfernung. Messen Sie 0,5 km und multiplizieren Sie mit 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich einen Tachymeter auch für andere Dinge nutzen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Der Tachymeter misst jede Rate pro Stunde. Messen Sie die Zeit für eine Aufgabe, die Skala zeigt die Anzahl pro Stunde.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Verwenden alle Tachymeter die gleiche Skala?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten verwenden die Standard-Formel 3.600 / Sekunden. Einige Vintage-Uhren können abweichen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tachymeter Rechner',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie berechne ich Geschwindigkeit mit einem Tachymeter',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Szenario auswählen oder eigene Zeit eingeben',
          'text': 'Wählen Sie aus Voreinstellungen wie Auto, Radfahren oder Laufen, oder wählen Sie Benutzerdefiniert für eine beliebige Zeit in Sekunden.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Geschwindigkeit ablesen',
          'text': 'Der Rechner zeigt die Geschwindigkeit in km/h und den entsprechenden Tachymeterwert.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Auf Ihre Uhr anwenden',
          'text': 'Nutzen Sie die verstrichene Zeit, um die passende Geschwindigkeit auf Ihrer Tachymeterlünette zu finden.',
        },
      ],
    },
  ],
};
