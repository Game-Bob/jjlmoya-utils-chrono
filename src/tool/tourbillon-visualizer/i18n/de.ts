import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Was ist ein Tourbillon?',
    answer: 'Ein Tourbillon ist ein rotierender Käfig, der die Hemmung (Unruh, Anker und Hemmungsrad) einer mechanischen Uhr enthält. Er dreht sich kontinuierlich - typischerweise einmal pro Minute - um positionsbedingte Fehler durch die Schwerkraft auszugleichen und die Genauigkeit zu verbessern.',
  },
  {
    question: 'Was ist der Unterschied zwischen einem klassischen und einem fliegenden Tourbillon?',
    answer: 'Ein klassisches Tourbillon wird sowohl von einer oberen als auch einer unteren Brücke gestützt, während ein fliegendes Tourbillon von unten freitragend ist und keine sichtbare obere Abstützung hat. Fliegende Tourbillons bieten eine unverdeckte Sicht auf die rotierende Hemmung und gelten als ästhetisch anspruchsvoller in der Konstruktion.',
  },
  {
    question: 'Verbessert ein Tourbillon tatsächlich die Genauigkeit?',
    answer: 'Bei modernen Armbanduhren ist der Genauigkeitsvorteil minimal, da Positionsfehler bereits gut ausgeglichen werden. Bei Taschenuhren (für die Breguet das Tourbillon 1801 erfand) eliminierte die ständige Rotation jedoch die Gangunterschiede zwischen vertikalen Positionen. Heute sind Tourbillons vor allem eine Demonstration hoher uhrmacherischer Kunstfertigkeit.',
  },
];

const howTo = [
  {
    name: 'Tourbillon-Typ ändern',
    text: 'Wechseln Sie zwischen klassischem und fliegendem Tourbillon, um den strukturellen Unterschied zu sehen. Das fliegende Tourbillon hat keine obere Brücke und gibt den vollen Käfig frei.',
  },
  {
    name: 'Schlagzahl anpassen',
    text: 'Probieren Sie verschiedene Schlagzahlen (18k, 28.8k, 36k VPH) aus, um zu sehen, wie sich die Geschwindigkeit von Unruh und Hemmungsrad verändert.',
  },
  {
    name: 'Geschwindigkeit steuern',
    text: 'Verlangsamen Sie die Geschwindigkeit, um das komplexe Zusammenspiel der Hemmung zu beobachten, oder beschleunigen Sie sie, um den vollen Käfigrotationszyklus zu sehen.',
  },
];

const title = 'Tourbillon: Kunst der rotierenden Hemmung';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-betrachter',
  title,
  description: 'Erleben Sie die faszinierende Kunst des Tourbillons - ein rotierender Käfig, der die Hemmung beherbergt. Beobachten Sie die oszillierende Unruh, die atmende Spirale und den sich drehenden Käfig in einem eleganten mechanischen Ballett.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Typ',
    typeClassic: 'Klassisch',
    typeFlying: 'Fliegend',
    speedLabel: 'Geschwindigkeit',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausiert',
    beatRateLabel: 'Schlagzahl',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Käfig',
    showLabelsLabel: 'Beschriftung',
    step1: 'Wechseln Sie zwischen klassischem und fliegendem Tourbillon, um die Architektur zu vergleichen.',
    step2: 'Passen Sie die Schlagzahl an, um zu sehen, wie sie den Hemmungsrhythmus beeinflusst.',
    step3: 'Nutzen Sie die Geschwindigkeitsregler, um den präzisen mechanischen Tanz in jedem Tempo zu beobachten.',
    tipTitle: 'Tipp',
    tipContent: 'Breguet erfand das Tourbillon 1801. Das Wort "Tourbillon" bedeutet "Wirbelwind" auf Französisch und beschreibt die Erscheinung des rotierenden Käfigs in Bewegung.',
    balanceLabel: 'Unruh',
    escapeLabel: 'Hemmung',
    palletLabel: 'Anker',
    cageLabel: 'Käfig',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Animierte Hemmungskunst', level: 2 },
    { type: 'paragraph', html: 'Das <strong>Tourbillon</strong> ist eine der faszinierendsten Komplikationen der Haute Horlogerie. Dieser interaktive Visualizer erweckt die rotierende Hemmung zum Leben mit einer detaillierten animierten Darstellung von Unruh, Spirale, Anker, Hemmungsrad und dem ikonischen rotierenden Käfig. Entdecken Sie die mechanische Poesie von Breguets Meisterwerk.' },
    { type: 'title', text: 'Wie ein Tourbillon funktioniert', level: 3 },
    { type: 'paragraph', html: 'Ein Tourbillon beherbergt die gesamte Hemmung - <strong>Unruh, Spirale, Anker und Hemmungsrad</strong> - in einem rotierenden Käfig. Der Käfig vollendet typischerweise eine Umdrehung pro Minute und verändert kontinuierlich die Position der Hemmung relativ zur Schwerkraft. Dies mittelt positionsbedingte Gangfehler aus, ein Konzept, das revolutionär war, als Abraham-Louis Breguet es 1801 patentierte. Die <strong>Unruh</strong> oszilliert mit der Schlagzahl der Uhr (typischerweise 4 Hz / 28.800 vph), während das <strong>Hemmungsrad</strong> pro Schlag einen Zahn weiterrückt und die charakteristische Tickbewegung erzeugt.' },
    { type: 'title', text: 'Klassisches vs. Fliegendes Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Merkmal', 'Klassisches Tourbillon', 'Fliegendes Tourbillon'], rows: [
        ['Obere Abstützung', 'Sichtbare Brücke', 'Keine (freitragend)'],
        ['Sichtbarkeit', 'Teilweise (Brücke im Blick)', 'Vollständig (ungehindert)'],
        ['Schwierigkeit', 'Hoch', 'Extrem hoch'],
        ['Erfunden', '1801 (Breguet)', '1920er (Alfred Helwig)'],
        ['Verbreitet in', 'Traditionellen Marken', 'Modernen Independenten'],
      ]
    },
    { type: 'title', text: 'Schlagzahlvergleich', level: 3 },
    {
      type: 'table', headers: ['Rate (vph)', 'Frequenz', 'Hemmungsrad RPM', 'Schläge/Sekunde', 'Typische Verwendung'], rows: [
        ['18.000', '2,5 Hz', '20 RPM', '5', 'Vintage-Taschenuhren'],
        ['28.800', '4 Hz', '32 RPM', '8', 'Moderner Standard (ETA, Rolex)'],
        ['36.000', '5 Hz', '40 RPM', '10', 'Hochfrequenz (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Mechanische Kunst in Bewegung', icon: 'mdi:rotate-orbit', badge: 'UHRMACHEREI', html: 'Dieser Visualizer ist eine künstlerische Interpretation einer Tourbillon-Hemmung. Die Käfigrotation, die Unruhoszillation, die Spiralenatmung, die Ankerbewegung und der Hemmungsradschritt sind nach realen mechanischen Beziehungen synchronisiert. Nutzen Sie die Steuerung, um dieses Meisterwerk mikromechanischer Ingenieurskunst zu erkunden.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
