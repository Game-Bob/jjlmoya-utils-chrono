import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'leuchtfarben-simulator',
  title: 'Leuchtfarben Simulator: Zifferblatt Leuchten visualisieren',
  description: 'Verschaffe dir einen visuellen Eindruck verschiedener Leuchtfarben in Echtzeit. Vergleiche C1, C3, BGW9, LumiNova und mehr bei unterschiedlicher Umgebungshelligkeit.',
  ui: {
    title: 'Leuchtfarben Simulator',
    lumeType: 'Leuchttyp',
    brightness: 'Umgebungshelligkeit',
    dark: 'Dunkel',
    light: 'Hell',
    color: 'Farbe',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Typ',
    description: 'Beschreibung',
    c1Name: 'C1',
    c1Desc: 'Grün (klassisch)',
    c3Name: 'C3',
    c3Desc: 'Super-Grün',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Eisblau',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Warmweiß',
    vintageName: 'Vintage',
    vintageDesc: 'Gealtertes Radium',
    orangeName: 'Orange',
    orangeDesc: 'Taucher-Orange',
    blueName: 'Blau',
    blueDesc: 'Tiefblau',
    greenName: 'Grün',
    greenDesc: 'Neon-Grün',
    tipTitle: 'Tipp',
    tipContent: 'Die Leuchtkraft hängt von der Pigmentqualität und der aufgenommenen Lichtmenge ab. BGW9 leuchtet blau-weiß und ist am hellsten, während Vintage-Leuchten einen warmen, gedimmten Schein abgeben.',
  },
  seo: [
    { type: 'title', text: 'Uhren-Leuchtfarben-Simulator - Echtzeit-Leuchtkraft-Visualisierung', level: 2 },
    { type: 'paragraph', html: 'Die Leuchtfarbe ist eine der persönlichsten Entscheidungen beim Uhrensammeln. Bevorzugst du das klassische grüne Leuchten von <strong>C1 Super-LumiNova</strong> oder das eisige Blau von <strong>BGW9</strong>? Dieser Simulator zeigt dir, wie jeder Leuchttyp bei verschiedenen Helligkeitsstufen aussieht - von vollem Tageslicht bis zur tiefsten Dunkelheit, mit exakten <strong>HEX- und RGB-Werten</strong> für jeden Farbton.' },
    { type: 'title', text: 'Super-LumiNova-Typen im Vergleich', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Tagesfarbe', 'Leuchtfarbe', 'Helligkeit', 'Geeignet für'], rows: [
        ['C1', 'Hellgrün', 'Grün', 'Mittel', 'Dress-Watches, Original-Optik'],
        ['C3', 'Gelbgrün', 'Hellgrün', 'Am hellsten', 'Taucheruhren, Tool-Watches'],
        ['BGW9', 'Gebeiztes Weiß', 'Eisblau', 'Hell', 'Moderne Sportuhren, klare Optik'],
        ['LumiNova', 'Warmbeige', 'Warmweiß', 'Niedrig-mittel', 'Preisgünstige Leuchtmittel'],
        ['Vintage', 'Creme / Beige', 'Warm gedimmt', 'Niedrig', 'Heritage-Uhren'],
        ['Orange', 'Orange', 'Orange', 'Mittel', 'Taucher-Akzente, Retro-Taucher'],
        ['Blau', 'Hellblau', 'Blau', 'Mittel', 'Designer-Zifferblätter, Modeuhren'],
        ['Grün', 'Hellgrün', 'Grün', 'Hell', 'Militärische Uhren'],
      ]
    },
    { type: 'title', text: 'C1 vs. C3 vs. BGW9 - Welchen solltest du wählen?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Klassisches Grün', icon: 'mdi:lightbulb-on', description: 'Die ursprüngliche Super-LumiNova-Formulierung. Leuchtet grün mit mittlerer Helligkeit. Eine sichere, klassische Wahl, die zu jedem Uhrenstil passt.', points: ['Mittlere Helligkeit, 4-6 h sichtbar', 'Grünes Leuchten, warmer Ton', 'Günstigste Formulierung', 'Häufig in Einsteigeruhren'], highlight: false },
        { title: 'C3 Super Gruen', icon: 'mdi:lightning-bolt', description: 'Das hellste grüne Leuchtmittel. Wird in professionellen Taucheruhren verwendet, bei denen die Ablesbarkeit unter Wasser entscheidend ist. Maximale Leuchtkraft bei minimaler Aufladung.', points: ['Höchste Helligkeit, 8-12 h sichtbar', 'Gelbgrün bei Tageslicht', 'Bevorzugt von Seiko, Citizen, Omega', 'Am besten für Lesbarkeit bei wenig Licht'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Eisblau', icon: 'mdi:snowflake', description: 'Leuchtet blau-weiß statt grün. Etwas weniger hell als C3, aber wegen seiner klaren, modernen Ästhetik geschätzt. Beliebt in luxuriösen Sportuhren.', points: ['Hohe Helligkeit, 6-10 h sichtbar', 'Blau-weißes Leuchten, neutraler Ton', 'Klare, moderne Optik bei Tageslicht', 'Verwendet von Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Radium Stil', icon: 'mdi:fire', description: 'Warmer Beige-/Cremeton, der an das Radium-Leuchten der 1960er Jahre erinnert. Absichtlich gedimmter für die authentische Optik. Das Leuchten ist warm, dezent und altert wunderschön.', points: ['Niedrige Helligkeit, 2-4 h sichtbar', 'Warmes Creme bis gedämpftes Bernstein', 'Gealtertes Aussehen ohne Radioaktivität', 'Beliebt in Heritage-Neuauflagen'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Helligkeit ist nicht alles', icon: 'mdi:palette', html: 'Das hellste Leuchtmittel (C3) ist nicht immer die beste Wahl. <strong>BGW9</strong> tauscht einen kleinen Helligkeitsunterschied gegen einen neutraleren, moderneren Look, den viele Sammler bevorzugen. <strong>Vintage-Leuchten</strong> stellen die epochengerechte Optik über die Leistung. Entscheide dich danach, was dir am wichtigsten ist: <strong>maximale Leuchtkraft, moderne Ästhetik oder Heritage-Authentizität.</strong>' },
    { type: 'title', text: 'Wie Leuchtfarbe funktioniert: Die Wissenschaft hinter dem Leuchten', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'Ein photolumineszierendes Pigment auf Strontiumaluminat-Basis. Es absorbiert UV- und sichtbares Licht und gibt es als Leuchten wieder. Nicht radioaktiv und unbedenklich. Ursprünglich 1993 von Nemoto & Co. entwickelt.' },
        { term: 'Aufladezeit', definition: 'Die Dauer der Lichteinwirkung, die nötig ist, um das Leuchtpigment zu sättigen. Eine vollständige Aufladung dauert 10-30 Minuten unter direktem Sonnenlicht oder UV. Längere Aufladung = längeres und helleres Leuchten.' },
        { term: 'Leuchtdauer', definition: 'Wie lange das Leuchten nach dem Aufladen sichtbar bleibt. Hochwertiges Super-LumiNova leuchtet 6-12 Stunden sichtbar. Die hellste Phase sind die ersten 30 Minuten nach dem Aufladen.' },
        { term: 'Pigmentqualität', definition: 'Die Qualität der Strontiumaluminat-Kristalle. Hochwertigere Pigmente (C3, BGW9) verwenden größere, gleichmäßigere Kristalle für ein helleres und längeres Leuchten. Niedrigere Qualitätsstufen (LumiNova) verwenden kleinere Kristalle und sind dunkler.' },
      ]
    },
    {
      type: 'summary', title: 'Kurzleitfaden zur Leuchtmittelauswahl', items: [
        'Für maximale Ablesbarkeit im Dunkeln: Wähle C3 (hellstes Grün) oder BGW9 (hellstes Blau-Weiß).',
        'Für einen modernen Luxus-Look: BGW9 ist der aktuelle Favorit unter den High-End-Uhrenmarken.',
        'Für Vintage-/Heritage-Bauten: Verwende Vintage oder Orange für epochengerechte Wärme.',
        'C1 ist der Allrounder: gute Helligkeit, klassisches Grün, erschwinglich.',
        'Die Leuchtfarbe bei Tageslicht unterscheidet sich deutlich von der Leuchtfarbe - nutze den Simulator, um beide zu vergleichen.',
      ]
    },
  ],
  faq: [
    {
      question: 'Welches Leuchtmittel ist am hellsten?',
      answer: 'C3 Super-LumiNova ist die hellste grüne Formulierung. BGW9 ist das hellste Blau-Weiß. Beide sind deutlich heller als C1 oder Standard-LumiNova.',
    },
    {
      question: 'Was ist BGW9-Leuchtfarbe?',
      answer: 'BGW9 ist eine Super-LumiNova-Variante, die blau-weiß statt grün leuchtet. Sie ist etwas weniger hell als C3, wird aber von vielen wegen ihres klaren, modernen Aussehens bevorzugt.',
    },
    {
      question: 'Leuchtet Vintage-Leuchtfarbe?',
      answer: 'Moderne Vintage-Leuchtfarbe (beige/warm) leuchtet, ist aber absichtlich dunkler, um gealtertes Radium zu imitieren. Der Kompromiss liegt in der ästhetischen Authentizität gegenüber maximaler Helligkeit.',
    },
    {
      question: 'Wie lange hält Leuchtfarbe?',
      answer: 'Nach vollständiger Aufladung unter hellem Licht leuchtet hochwertiges Super-LumiNova 6-12 Stunden sichtbar. Die hellste Phase sind die ersten 30 Minuten.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Leuchttyp auswählen',
      text: 'Wähle aus den Voreinstellungen C1, C3, BGW9, LumiNova, Vintage, Orange, Blau oder Grün.',
    },
    {
      name: 'Helligkeit anpassen',
      text: 'Bewege den Regler für die Umgebungshelligkeit von Tag (links) zu Nacht (rechts), um zu sehen, wie sich das Leuchten verhält.',
    },
    {
      name: 'Daten ablesen',
      text: 'Die Infokarte zeigt die genauen HEX- und RGB-Werte der aktuellen Farbe.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Welches Leuchtmittel ist am hellsten?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova ist das hellste Grün. BGW9 ist das hellste Blau-Weiß.' },
        },
        {
          '@type': 'Question',
          'name': 'Was ist BGW9-Leuchtfarbe?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 ist eine Super-LumiNova-Variante, die blau-weiß statt grün leuchtet.' },
        },
        {
          '@type': 'Question',
          'name': 'Leuchtet Vintage-Leuchtfarbe?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Moderne Vintage-Leuchtfarbe leuchtet, ist aber absichtlich dunkler, um gealtertes Radium zu imitieren.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Leuchtfarben-Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5 und JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So simuliert man Leuchtfarben',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Leuchttyp auswählen',
          'text': 'Wähle aus den Voreinstellungen C1, C3, BGW9, LumiNova oder anderen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Helligkeit anpassen',
          'text': 'Bewege den Regler von Tag zu Nacht, um das Leuchtverhalten zu sehen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Daten ablesen',
          'text': 'Die Infokarte zeigt HEX- und RGB-Werte der aktuellen Farbe.',
        },
      ],
    },
  ],
};
