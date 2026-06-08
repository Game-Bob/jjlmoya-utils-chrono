import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beatraterechner',
  title: 'Uhren Schlagzahlrechner: VPH in Hz und s/d',
  description: 'Rechnen Sie Schwingungen pro Stunde (VPH) in Hertz, Ticks pro Sekunde um und berechnen Sie die tägliche Abweichung durch einen verlorenen Tick. Funktioniert mit ETA-, Sellita-, Miyota-, Seiko-, Rolex-, Omega- und Zenith-Kalibern.',
  ui: {
    title: 'Schlagzahlrechner',
    vphLabel: 'Uhrwerk',
    selectMovement: 'Uhrwerk auswählen',
    customMovement: 'Benutzerdefiniert',
    customVph: 'Schwingungen pro Stunde',
    resultsTitle: 'Berechnungen',
    frequency: 'Frequenz',
    ticksPerSec: 'Ticks pro Sekunde',
    lostTickImpact: 'Wenn 1 Tick pro Stunde verloren geht',
    lostTickExplainer: 'Ein verlorener Tick pro Stunde bedeutet etwa 3 Sekunden Verlust pro Tag bei 28.800 VPH. Niedrigere Schlagzahlen verstärken die Auswirkungen.',
    step1: 'Wählen Sie Ihr Uhrwerk oder geben Sie eine benutzerdefinierte VPH ein.',
    step2: 'Lesen Sie die Hz-Frequenz, Ticks pro Sekunde und die Auswirkung eines verlorenen Ticks ab.',
    tipTitle: 'Tipp',
    tipContent: 'Höhere Schlagzahlen (36.000 VPH) sorgen für einen gleichmäßigeren Sekundenzeigerlauf und bessere Präzision, aber auch für höheren Verschleiß an der Hemmung.',
  },
  seo: [
    { type: 'title', text: 'Uhren Schlagzahlrechner - VPH in Hz und Sekunden pro Tag', level: 2 },
    { type: 'paragraph', html: 'Jede mechanische Uhr schlägt mit einer bestimmten Frequenz - der Anzahl der Schwingungen ihrer Unruh pro Stunde. Diese Zahl bestimmt, wie gleichmäßig der Sekundenzeiger läuft und wie genau die Uhr sein kann. Dieser Rechner übersetzt <strong>VPH in Hz und Ticks pro Sekunde</strong> und zeigt die tatsächlichen Auswirkungen eines einzelnen verlorenen Ticks.' },
    { type: 'title', text: 'Was ist eine Schlagzahl?', level: 3 },
    { type: 'paragraph', html: 'Die Schlagzahl, gemessen in Schwingungen pro Stunde (vph), ist die Frequenz, mit der die Unruh einer Uhr schwingt. Eine gängige Rate ist 28.800 VPH - das entspricht 4 Hz oder 8 Ticks pro Sekunde. Höhere Schlagzahlen wie 36.000 VPH (5 Hz) erzeugen eine gleichmäßigere Zeigerbewegung und können theoretisch die Genauigkeit verbessern, indem sie die Auswirkung von Lagefehlern verringern.' },
    { type: 'title', text: 'Warum ein verlorener Tick wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Wenn die Hemmung einer Uhr aufgrund von Reibung, Magnetismus oder Verschleiß einen Tick nicht auslöst, übersetzt sich dieser verlorene Tick direkt in verlorene Zeit. Bei 28.800 VPH summiert sich ein verlorener Tick pro Stunde auf etwa <strong>3 Sekunden pro Tag</strong>. Bei 18.000 VPH kostet derselbe Fehler fast 5 Sekunden pro Tag. Dieses Tool hilft Ihnen, die Mathematik hinter der Reglage zu verstehen.' },
    { type: 'title', text: 'Gängige Schlagzahlen', level: 3 },
    { type: 'paragraph', html: 'Vintage-Taschenuhren und frühe Automatikuhren laufen oft mit 18.000 VPH (2,5 Hz). Viele Seiko- und Miyota-Kaliber verwenden 21.600 VPH (3 Hz). Der moderne Standard ist 28.800 VPH (4 Hz), verwendet von ETA, Sellita, Rolex und anderen. Hochfrequente Werke wie der Zenith El Primero laufen mit 36.000 VPH (5 Hz) für höhere Präzision.' },
  ],
  faq: [
    {
      question: 'Wie rechnet man VPH in Hz um?',
      answer: 'Teilen Sie die VPH durch 7.200. Eine Uhr mit 28.800 VPH schlägt mit 4 Hz (28.800 ÷ 7.200 = 4). Die Division durch 7.200 berücksichtigt, dass eine vollständige Schwingung zwei Schwingungsvorgänge umfasst und eine Stunde 3.600 Sekunden hat.',
    },
    {
      question: 'Was bedeutet eine höhere Schlagzahl für die Genauigkeit?',
      answer: 'Höhere Schlagzahlen ermöglichen in der Regel eine größere theoretische Präzision, da die Unruh weniger von Lageveränderungen beeinflusst wird. Allerdings verursachen sie auch mehr Reibung und Verschleiß an den Steinpaletten und dem Ankerrad, was bessere Schmierung und häufigere Wartung erfordert.',
    },
    {
      question: 'Wie wirkt sich ein verlorener Tick auf die tägliche Genauigkeit aus?',
      answer: 'Ein verlorener Tick pro Stunde ergibt 24 verlorene Ticks pro Tag. Die verlorene Zeit hängt von Ihrer Schlagzahl ab: Teilen Sie 86.400 durch Ihre VPH. Bei 28.800 VPH sind das 3 Sekunden pro Tag. Bei 18.000 VPH sind es 4,8 Sekunden pro Tag.',
    },
    {
      question: 'Kann eine Uhr einen verlorenen Tick aufholen?',
      answer: 'Nein. Sobald ein Tick verloren ist, ist die Zeit dauerhaft verloren. Die Uhr holt nichts auf. Deshalb wirkt sich der Zustand der Hemmung - saubere Steinpaletten, richtige Schmierung und korrekter Beat Error - direkt auf die tägliche Ganggenauigkeit aus.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kaliber auswählen',
      text: 'Wählen Sie Ihr Uhrwerk aus dem Menü. Jeder voreingestellte Eintrag enthält die korrekte VPH für dieses Kaliber.',
    },
    {
      name: 'Ergebnisse ablesen',
      text: 'Die Karte zeigt Hz-Frequenz, Ticks pro Sekunde und die tägliche Auswirkung eines einzelnen verlorenen Ticks.',
    },
    {
      name: 'Benutzerdefinierte VPH eingeben',
      text: 'Wählen Sie "Benutzerdefiniert", um eine beliebige VPH für Vintage- oder ungewöhnliche Werke einzugeben.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie rechnet man VPH in Hz um?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Teilen Sie die VPH durch 7.200. Eine Uhr mit 28.800 VPH schlägt mit 4 Hz. Die Division durch 7.200 berücksichtigt, dass eine Schwingung zwei Schwingungsvorgänge umfasst und eine Stunde 3.600 Sekunden hat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was bedeutet eine höhere Schlagzahl für die Genauigkeit?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Höhere Schlagzahlen ermöglichen eine größere theoretische Präzision, da die Unruh weniger von Lageveränderungen beeinflusst wird. Allerdings verursachen sie auch mehr Reibung und Verschleiß.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie wirkt sich ein verlorener Tick auf die tägliche Genauigkeit aus?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ein verlorener Tick pro Stunde ergibt 24 verlorene Ticks pro Tag. Teilen Sie 86.400 durch Ihre VPH, um die verlorenen Sekunden pro Tag zu ermitteln.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann eine Uhr einen verlorenen Tick aufholen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nein. Sobald ein Tick verloren ist, ist die Zeit dauerhaft verloren. Die Uhr holt nichts auf.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhren Schlagzahlrechner',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So rechnen Sie VPH in Hz um und berechnen die Auswirkung verlorener Ticks',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Kaliber auswählen',
          'text': 'Wählen Sie Ihr Uhrwerk aus dem Menü. Jeder voreingestellte Eintrag enthält die korrekte VPH für dieses Kaliber.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ergebnisse ablesen',
          'text': 'Die Karte zeigt Hz-Frequenz, Ticks pro Sekunde und die tägliche Auswirkung eines einzelnen verlorenen Ticks.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Benutzerdefinierte VPH eingeben',
          'text': 'Wählen Sie Benutzerdefiniert, um eine beliebige VPH für Vintage- oder ungewöhnliche Werke einzugeben.',
        },
      ],
    },
  ],
};
