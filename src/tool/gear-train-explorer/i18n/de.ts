import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Was ist ein Räderwerk in einer Uhr?',
    answer: 'Ein Räderwerk ist eine Reihe von ineinandergreifenden Zahnrädern, die die Kraft von der Federhauswalze zur Hemmung übertragen. Jedes Zahnradpaar sorgt für ein bestimmtes Untersetzungsverhältnis und verlangsamt die schnelle Freisetzung der Federenergie in kontrollierte, getaktete Impulse.',
  },
  {
    question: 'Warum haben verschiedene Uhrwerke unterschiedliche Übersetzungen?',
    answer: 'Die Übersetzungsverhältnisse werden durch die Anzahl der Zähne an jedem Rad und Trieb bestimmt. Uhrwerke mit unterschiedlichen Schlagzahlen (z. B. 28.800 VPH vs. 36.000 VPH) haben unterschiedliche Hemmungsradgeschwindigkeiten und Zahnradkonfigurationen, um eine genaue Zeitmessung bei gleichzeitiger Anpassung an die Unruhfrequenz zu gewährleisten.',
  },
  {
    question: 'Was ist der Unterschied zwischen einem Rad und einem Trieb?',
    answer: 'In der Uhrmacherei ist ein "Rad" das größere Zahnrad mit vielen Zähnen, das die nächste Komponente antreibt. Ein "Trieb" ist das kleinere Zahnrad (normalerweise 6-12 Zähne), das angetrieben wird. Zusammen bilden Rad und Trieb ein Zahnradpaar, das Drehzahl und Drehmoment verändert.',
  },
];

const howTo = [
  {
    name: 'Wählen Sie ein Uhrwerk',
    text: 'Wählen Sie zwischen Standard-Uhrwerken (28.800 VPH), Hochfrequenz-Uhrwerken (36.000 VPH El Primero) oder Vintage-Uhrwerken (18.000 VPH). Jedes hat einzigartige Übersetzungen und Schlagzahlen.',
  },
  {
    name: 'Beobachten Sie das Räderwerk',
    text: 'Sehen Sie den animierten Zahnrädern dabei zu, wie sie sich mit proportionalen Geschwindigkeiten drehen. Die Federhauswalze dreht sich langsam, während das Hemmungsrad schnell rotiert. Fahren Sie mit der Maus über ein Zahnrad oder eine Datenkarte, um detaillierte Informationen zu erhalten.',
  },
  {
    name: 'Passen Sie die Geschwindigkeit an',
    text: 'Nutzen Sie die Geschwindigkeitsregler, um die Animation zu verlangsamen, zu beschleunigen oder anzuhalten. So können Sie visualisieren, wie jedes Zahnrad zur Kraftübertragungskette beiträgt.',
  },
];

const title = 'Räderwerk Erkunder: Interaktives Uhrmacherei Diagramm';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'getriebe-erkunder',
  title,
  description: 'Erkunden Sie das mechanische Herz einer Uhr mit einer animierten Räderwerk-Visualisierung. Sehen Sie Federhauswalze, Minutenrad, Kleinbodenrad, Sekundenrad, Hemmungsrad, Anker und Unruh in Bewegung.',
  ui: {
    title: 'Räderwerk Erkunder',
    barrelLabel: 'Federhaus',
    centerWheelLabel: 'Minutenrad',
    thirdWheelLabel: 'Kleinbodenrad',
    fourthWheelLabel: 'Sekundenrad',
    escapeWheelLabel: 'Hemmungsrad',
    palletForkLabel: 'Anker',
    balanceWheelLabel: 'Unruh',
    rpmLabel: 'U/min',
    teethLabel: 'Zähne',
    gearRatioLabel: 'Verhältnis',
    powerFlowLabel: 'Kraftfluss',
    movementLabel: 'Uhrwerk',
    speedLabel: 'Geschwindigkeit',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Pausiert',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Wählen Sie ein Uhrwerk aus, um seine spezifischen Übersetzungen und Schlagzahlen zu sehen.',
    step2: 'Fahren Sie über ein Zahnrad oder eine Datenkarte, um seine Position im Kraftfluss zu markieren.',
    step3: 'Passen Sie die Animationsgeschwindigkeit an, um zu studieren, wie jedes Rad Kraft durch das Getriebe überträgt.',
    tipTitle: 'Tipp',
    tipContent: 'Das Räderwerk reduziert die schnelle Energieabgabe der Feder in eine kontrollierte Schwingung. Eine typische Federhauswalze dreht sich alle 7-8 Stunden einmal, während das Hemmungsrad mit 32 U/min rotiert (bei 28.800 VPH) — eine Untersetzung von über 15.000:1.',
  },
  seo: [
    { type: 'title', text: 'Interaktiver Räderwerk-Erkunder', level: 2 },
    { type: 'paragraph', html: 'Das <strong>Räderwerk</strong> ist das mechanische Rückgrat jeder mechanischen Uhr. Dieses interaktive Tool visualisiert, wie die Kraft von der Federhauswalze über das Minutenrad, Kleinbodenrad, Sekundenrad und Hemmungsrad zum Anker und zur Unruh fließt. Sehen Sie jedes Zahnrad mit seiner proportionalen Geschwindigkeit rotieren und verstehen Sie, wie Übersetzungen die Zeitmessung bestimmen.' },
    { type: 'title', text: 'Wie ein Uhrwerk-Räderwerk funktioniert', level: 3 },
    { type: 'paragraph', html: 'Ein Uhrwerk-Räderwerk besteht aus einer Reihe von <strong>Rädern</strong> (große Zahnräder) und <strong>Trieben</strong> (kleine Zahnräder), die Kraft übertragen und gleichzeitig die Drehzahl reduzieren. Das <strong>Federhaus</strong> beherbergt die Hauptfeder und dreht sich langsam. Es treibt das <strong>Minutenrad</strong> an, das sich einmal pro Stunde dreht (für den Minutenzeiger). Das <strong>Kleinbodenrad</strong> und <strong>Sekundenrad</strong> erhöhen die Drehzahl weiter. Schließlich gibt das <strong>Hemmungsrad</strong> die Kraft in kontrollierten Impulsen an den <strong>Anker</strong> ab, der abwechselnd das Hemmungsrad arretiert und freigibt und Impulse an die <strong>Unruh</strong> sendet. Die Unruh schwingt mit einer präzisen Frequenz — typischerweise 4 Hz (28.800 Schwingungen pro Stunde) — und reguliert so den Gang der Uhr.' },
    { type: 'title', text: 'Übersetzungen und Kraftübertragung', level: 3 },
    {
      type: 'table', headers: ['Komponente', 'Typische Zähne', 'U/min (28.800 VPH)', 'Verhältnis zuvor'], rows: [
        ['Federhaus', '72', '0,002 (1 U / 8 h)', '-'],
        ['Minutenrad', '60', '0,0167 (1 U / h)', '~7,2:1'],
        ['Kleinbodenrad', '50', '0,125 (1 U / 8 min)', '~5:1'],
        ['Sekundenrad', '60', '1 (1 U / min)', '6:1'],
        ['Hemmungsrad', '15', '32', '~1,875:1'],
      ]
    },
    { type: 'title', text: 'Uhrwerksvergleiche', level: 3 },
    {
      type: 'table', headers: ['Uhrwerk', 'Schlagzahl', 'Unruhfrequenz', 'Hemmungsrad-U/min', 'Typische Genauigkeit'], rows: [
        ['Vintage (18.000 VPH)', '18.000 bph', '2,5 Hz', '20 U/min', '±15-30 s/d'],
        ['Standard (28.800 VPH)', '28.800 bph', '4 Hz', '32 U/min', '±5-15 s/d'],
        ['Hochfrequenz (36.000 VPH)', '36.000 bph', '5 Hz', '40 U/min', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktives Lernwerkzeug', icon: 'mdi:cog-clockwise', badge: 'UHRMACHEREI', html: 'Dieses Tool verwendet ungefähre Übersetzungsverhältnisse, die für typische Schweizer Ankerhemmungen repräsentativ sind. Tatsächliche Verhältnisse variieren je nach Kaliber. Nutzen Sie die Uhrwerksvoreinstellungen, um zu vergleichen, wie sich unterschiedliche Schlagzahlen auf die Räderwerkdynamik auswirken.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};

