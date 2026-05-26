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
    { type: 'title', text: 'Was ist eine Telemeter-Lünette auf einer Uhr?', level: 2 },
    { type: 'paragraph', html: 'Ein Telemeter ist eine Skala, die auf das Zifferblatt oder die Lünette einer Chronographenuhr gedruckt ist. Sie ermöglicht es dem Träger, die ungefähre Entfernung zu einem entfernten Ereignis zu berechnen, das sowohl gesehen als auch gehört werden kann (z. B. ein Blitz, ein Feuerwerk oder eine Explosion).' },
  ],
  faq: [
    {
      question: 'Wie verwende ich eine Uhr mit Telemeter-Skala?',
      answer: 'Starten Sie den Chronographen, wenn Sie das Ereignis sehen (z. B. den Blitz). Stoppen Sie ihn, sobald Sie den Ton hören (den Donner). Der Sekundenzeiger zeigt auf die Entfernung auf der Lünette.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Einheiten und Umgebung konfigurieren',
      text: 'Wählen Sie Ihr bevorzugtes Einheitensystem und stellen Sie die aktuelle Lufttemperatur an Ihrem Standort ein.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
