import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeterschritt-rechner',
  title: 'Telemeter Rechner: Verwendung eines Telemeters auf einer Uhr',
  description: 'Erfahren Sie, wie Sie eine Telemeter-Lünette verwenden. Berechnen Sie die Entfernung vom Blitz zum Donner basierend auf der Lufttemperatur.',
  ui: {
    title: 'Telemeter Rechner',
    triggerFlash: 'Blitz Auslösen',
    triggerSound: 'Ton Auslösen',
    stop: 'Stoppen',
    reset: 'Zurücksetzen',
    settings: 'Einstellungen',
    unitSystem: 'Einheitensystem',
    metric: 'Metrisch (km)',
    imperial: 'Imperial (Meilen)',
    temperature: 'Lufttemperatur',
    speedOfSound: 'Schallgeschwindigkeit',
    distanceResult: 'Gemessene Entfernung',
    elapsedTime: 'Verstrichene Zeit',
    historyTitle: 'Messungsverlauf',
    noHistory: 'Noch keine Messungen. Starten Sie oben eine Berechnung!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Klicken Sie auf den Drücker bei 2 Uhr oder auf "Blitz Auslösen", sobald Sie den Blitz sehen.',
    step2: 'Klicken Sie erneut oder auf "Ton Auslösen", wenn Sie den Donner hören.',
    step3: 'Lesen Sie die Entfernung an der Stelle ab, an der der Sekundenzeiger auf der Telemeter-Lünette stoppt.',
    tipTitle: 'Profi-Tipp',
    tipContent: 'Warme Luft leitet Schall schneller als kalte Luft. Die Anpassung der Temperatur stellt sicher, dass die Entfernungsberechnung der Physik Ihrer Umgebung entspricht.',
  },
  seo: [
  {
    "type": "title",
    "text": "Was ist eine Telemeter Lünette auf einer Uhr",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Ein Telemeter ist eine Skala auf dem Zifferblatt oder der Lünette einer Uhr. Sie ermöglicht die Berechnung der Entfernung zu einem sichtbaren und hörbaren Ereignis."
  },
  {
    "type": "title",
    "text": "Verwendung einer Telemeter Skala",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Schritt 1: Chronograph starten",
        "definition": "Starten Sie die Stoppuhr im Moment des visuellen Signals (Blitz)."
      },
      {
        "term": "Schritt 2: Chronograph stoppen",
        "definition": "Stoppen Sie die Stoppuhr im Moment des akustischen Signals (Donner)."
      },
      {
        "term": "Schritt 3: Skala ablesen",
        "definition": "Der Sekundenzeiger zeigt auf die Entfernung in Kilometern oder Meilen."
      }
    ]
  },
  {
    "type": "title",
    "text": "Physik der Entfernungsberechnung",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Licht reist mit ca. 300.000 km/s (sofort sichtbar). Schall bewegt sich mit etwa 343 m/s bei 20°C durch die Luft."
  },
  {
    "type": "title",
    "text": "Telemeter vs Tachymeter Vergleich",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Ein <strong>Tachymeter</strong> misst Geschwindigkeit über eine feste Strecke. Ein <strong>Telemeter</strong> misst Entfernung über die verstrichene Zeit."
  },
  {
    "type": "title",
    "text": "Referenztabelle Zeit vs Distanz",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Verstrichene Zeit",
      "Entfernung (km)",
      "Entfernung (Meilen)",
      "Schallgeschwindigkeit"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Einfluss der Temperatur",
    "icon": "mdi:information",
    "badge": "PRÄZISION",
    "html": "Schall reist in warmer Luft schneller als in kalter Luft. Die Einstellung der Temperatur korrigiert diesen Wert."
  },
  {
    "type": "paragraph",
    "html": "Für eine bessere Schätzung starten und stoppen Sie den Chronographen möglichst genau und lesen Sie die Skala erst nach dem hörbaren Ereignis ab. Wind, Gelände, Temperatur und Reaktionszeit beeinflussen das Ergebnis. Die Anzeige ist eine praktische Näherung und kein Ersatz für eine präzise Vermessung.",
  },
],
  faq: [
  {
    "question": "Wofür wird eine Telemeter Skala auf einer Uhr verwendet?",
    "answer": "Sie dient zur Berechnung der Entfernung zwischen dem Uhrenträger und einem sichtbaren und hörbaren Ereignis wie Blitz und Donner."
  },
  {
    "question": "Wie berechnet man die Entfernung eines Blitzes mit einem Telemeter?",
    "answer": "Starten Sie den Chronographen, wenn Sie den Blitz sehen. Stoppen Sie ihn, wenn Sie den Donner hören. Lesen Sie die Zahl auf der Skala ab."
  },
  {
    "question": "Was ist der Unterschied zwischen Tachymeter und Telemeter?",
    "answer": "Ein Tachymeter misst die Geschwindigkeit über eine bekannte Distanz. Ein Telemeter misst die Entfernung basierend auf der verstrerichenen Zeit und der Schallgeschwindigkeit."
  },
  {
    "question": "Wie genau ist eine Telemeter Skala?",
    "answer": "Sie ist für Standardschallgeschwindigkeit (343 m/s bei 20°C) kalibriert. Temperaturänderungen bewirken geringfügige Abweichungen."
  },
  {
    "question": "Kann man ein Telemeter unter Wasser verwenden?",
    "answer": "Nein, da Schall im Wasser mehr als viermal schneller reist als in der Luft."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Einheiten und Umgebung konfigurieren",
    "text": "Wählen Sie das bevorzugte Einheitensystem und stellen Sie die Temperatur ein."
  },
  {
    "name": "Chronograph bei Blitz auslösen",
    "text": "Klicken Sie auf Blitz auslösen oder den Drücker bei 2 Uhr, sobald der Blitz zu sehen ist."
  },
  {
    "name": "Chronograph bei Donner auslösen",
    "text": "Klicken Sie auf Ton auslösen, wenn der Donner zu hören ist."
  },
  {
    "name": "Entfernung ablesen",
    "text": "Lesen Sie die berechnete Distanz direkt auf der Lünetten-Skala ab."
  }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
