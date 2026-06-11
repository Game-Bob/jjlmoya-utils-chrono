import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Warum laufen mechanische Uhren in großer Höhe schneller?',
    answer: 'Mechanische Uhren laufen in großen Höhen hauptsächlich aufgrund der geringeren Luftdichte schneller. Dünnere Luft erzeugt weniger Luftwiderstand auf die Unruh, sodass sie mit etwas größerer Amplitude schwingen kann. Diese erhöhte Amplitude führt dazu, dass die Uhr vorgeht - typischerweise 2-6 Sekunden pro Tag pro 1.000 m Höhengewinn, abhängig vom Werkdesign.',
  },
  {
    question: 'Beeinflusst die Höhe auch Quarzuhren?',
    answer: 'Quarzuhren werden minimal durch Höhe beeinflusst, da sie keine oszillierende mechanische Unruh haben. Extreme Höhenänderungen können jedoch die Batterieleistung aufgrund von Temperaturschwankungen beeinträchtigen. Der Effekt ist im Vergleich zu mechanischen Uhren vernachlässigbar.',
  },
  {
    question: 'Können Höhenänderungen meine Uhr beschädigen?',
    answer: 'Höhenänderungen allein beschädigen mechanische Uhren selten. Schnelle Druckentlastung (wie in einem Flugzeug) kann jedoch bei einigen Uhren Probleme mit der Wasserdichtigkeit verursachen. Normale Höhenänderungen auf Reisen liegen innerhalb der Konstruktionstoleranz jeder Uhr.',
  },
];

const howTo = [
  {
    name: 'Wählen Sie eine Höhe',
    text: 'Ziehen Sie den Höhenregler nach oben oder unten, um verschiedene Höhenlagen vom Meeresspiegel bis 8.000 m zu simulieren. Beobachten Sie, wie sich Unruhoszillation und Atmosphärendaten in Echtzeit ändern.',
  },
  {
    name: 'Lesen Sie die Abweichung ab',
    text: 'Die Gangabweichungsanzeige zeigt die geschätzten Sekunden pro Tag in der gewählten Höhe. Das Abweichungsdiagramm zeigt den Trend über alle Höhen.',
  },
  {
    name: 'Berücksichtigen Sie die Faktoren',
    text: 'Beobachten Sie, wie die Luftdichte mit der Höhe abnimmt, während die Gangabweichung zunimmt. Temperatur- und Druckdaten liefern Kontext für die Umweltveränderungen.',
  },
];

const title = 'Höhengenauigkeitsschätzer: Wie Höhenlage Ihre Mechanische Uhr Beeinflusst';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'hoehengenauigkeitsschaetzer',
  title,
  description: 'Erkunden Sie, wie Höhenlage die Genauigkeit mechanischer Uhren beeinflusst. Passen Sie die Höhe vom Meeresspiegel bis zum Gipfel an und sehen Sie Echtzeitänderungen bei Unruhoszillation, Gangabweichung, Luftdichte, Druck und Temperatur.',
  ui: {
    title: 'Höhengenauigkeitsschätzer',
    altitudeLabel: 'Höhe',
    altitudeUnit: 'm',
    seaLevel: 'Meeresspiegel',
    deviationLabel: 'Gangabweichung',
    deviationUnit: 's/d',
    pressureLabel: 'Druck',
    pressureUnit: 'hPa',
    densityLabel: 'Luftdichte',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperatur',
    temperatureUnit: '°C',
    oscillationLabel: 'Unruh',
    oscillationsPerSec: 'U/s',
    rateLabel: 'Gang',
    atmDataTitle: 'Atmosphärische Bedingungen',
    howItWorks: 'Funktionsweise',
    howItWorksDesc: 'Geringere Luftdichte in großer Höhe reduziert den Luftwiderstand auf die Unruh, erhöht die Amplitude und lässt die Uhr schneller laufen. Dieses Tool schätzt die Gangabweichung basierend auf Standardatmosphärenmodellen.',
    negligible: 'Vernachlässigbar',
    minor: 'Gering',
    noticeable: 'Spürbar',
    significant: 'Deutlich',
    severe: 'Stark',
    step1: 'Ziehen Sie den Höhenregler, um Höhen vom Meeresspiegel bis 8.000 m zu simulieren.',
    step2: 'Beobachten Sie die Unruh-Animation und die Abweichungsanzeige in Echtzeit.',
    step3: 'Prüfen Sie die Atmosphärendaten, um die Umweltfaktoren zu verstehen.',
    tipTitle: 'Tipp',
    tipContent: 'Der Effekt variiert je nach Werk: Hochfrequenzwerke (36.000 VPH) sind weniger betroffen als Vintage-Niederfrequenzwerke (18.000 VPH).',
    deviationChart: 'Abweichung vs. Höhe',
    altitudeM: 'Höhe (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Luftmoleküle',
    airDensity: 'Luftdichte',
  },
  seo: [
    { type: 'title', text: 'Interaktiver Höhengenauigkeitsschätzer für Mechanische Uhren', level: 2 },
    { type: 'paragraph', html: 'Der <strong>Höhengenauigkeitsschätzer</strong> ist ein interaktives Tool, das visualisiert, wie Höhenänderungen die Präzision mechanischer Uhren beeinflussen. Durch Simulation von Höhen vom Meeresspiegel bis 8.000 m sehen Sie die geschätzte Gangabweichung durch sich ändernde Luftdichte, Druck und Temperatur.' },
    { type: 'title', text: 'Wie Höhe die Uhrengenauigkeit Beeinflusst', level: 3 },
    { type: 'paragraph', html: 'In größeren Höhen <strong>nimmt die Luftdichte ab</strong>, was den Luftwiderstand auf die Unruh reduziert. Dadurch kann die Unruh mit größerer Amplitude schwingen, was die Uhr etwas schneller laufen lässt. Der Effekt liegt typischerweise bei <strong>+2 bis +6 Sekunden pro Tag</strong> pro 1.000 m Höhengewinn.' },
    { type: 'title', text: 'Gangabweichung bei Verschiedenen Höhen', level: 3 },
    {
      type: 'table', headers: ['Höhe', 'Luftdichte', 'Druck', 'Temperatur', 'Gesch. Abweichung'], rows: [
        ['Meeresspiegel (0m)', '1,225 kg/m³', '1013 hPa', '15°C', 'Basis'],
        ['1.000m', '1,112 kg/m³', '898 hPa', '8,5°C', '+0,4 s/d'],
        ['2.000m', '1,007 kg/m³', '795 hPa', '2°C', '+0,9 s/d'],
        ['3.000m', '0,909 kg/m³', '701 hPa', '-4,5°C', '+1,5 s/d'],
        ['4.000m', '0,819 kg/m³', '616 hPa', '-11°C', '+2,1 s/d'],
        ['5.000m', '0,736 kg/m³', '540 hPa', '-17,5°C', '+2,8 s/d'],
      ]
    },
    { type: 'title', text: 'Umweltfaktoren', level: 3 },
    { type: 'paragraph', html: 'Neben der Luftdichte können andere Umweltfaktoren in großer Höhe die Uhrenleistung beeinflussen: <strong>Temperatur</strong> beeinflusst die Schmierfettviskosität und die Federelastizität, <strong>Druckänderungen</strong> können die Gehäusedichtung beeinträchtigen. Der Effekt der Luftdichte auf den Unruhwiderstand ist jedoch der dominierende Faktor.' },
    { type: 'diagnostic', variant: 'info', title: 'Interaktives Simulationstool', icon: 'mdi:axis-arrow', badge: 'UHRENKUNDE', html: 'Dieses Tool bietet Schätzwerte basierend auf dem ISA-Modell und empirischen Beobachtungen. Tatsächliche Ergebnisse variieren je nach Werkkaliber, Zustand und Fertigungstoleranzen.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
