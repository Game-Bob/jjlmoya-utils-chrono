import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beatraterechner',
  title: 'Uhren Schlagzahlrechner \u2014 VPH in Hz und s/d',
  description: 'Rechnen Sie Schwingungen pro Stunde (VPH) in Hertz, Ticks pro Sekunde um und berechnen Sie die t\u00e4gliche Abweichung durch einen verlorenen Tick. Funktioniert mit ETA-, Sellita-, Miyota-, Seiko-, Rolex-, Omega- und Zenith-Kalibern.',
  ui: {
    title: 'Schlagzahlrechner',
    vphLabel: 'Uhrwerk',
    selectMovement: 'Uhrwerk ausw\u00e4hlen',
    customMovement: 'Benutzerdefiniert',
    customVph: 'Schwingungen pro Stunde',
    resultsTitle: 'Berechnungen',
    frequency: 'Frequenz',
    ticksPerSec: 'Ticks pro Sekunde',
    lostTickImpact: 'Wenn 1 Tick pro Stunde verloren geht',
    lostTickExplainer: 'Ein verlorener Tick pro Stunde bedeutet etwa 3 Sekunden Verlust pro Tag bei 28.800 VPH. Niedrigere Schlagzahlen verst\u00e4rken die Auswirkungen.',
    step1: 'W\u00e4hlen Sie Ihr Uhrwerk oder geben Sie eine benutzerdefinierte VPH ein.',
    step2: 'Lesen Sie die Hz-Frequenz, Ticks pro Sekunde und die Auswirkung eines verlorenen Ticks ab.',
    tipTitle: 'Tipp',
    tipContent: 'H\u00f6here Schlagzahlen (36.000 VPH) sorgen f\u00fcr einen gleichm\u00e4\u00dfigeren Sekundenzeigerlauf und bessere Pr\u00e4zision, aber auch f\u00fcr h\u00f6heren Verschlei\u00df an der Hemmung.',
  },
  seo: [
    { type: 'title', text: 'Uhren Schlagzahlrechner \u2014 VPH in Hz und Sekunden pro Tag', level: 2 },
    { type: 'paragraph', html: 'Jede mechanische Uhr schl\u00e4gt mit einer bestimmten Frequenz \u2014 der Anzahl der Schwingungen ihrer Unruh pro Stunde. Diese Zahl bestimmt, wie gleichm\u00e4\u00dfig der Sekundenzeiger l\u00e4uft und wie genau die Uhr sein kann. Dieser Rechner \u00fcbersetzt <strong>VPH in Hz und Ticks pro Sekunde</strong> und zeigt die tats\u00e4chlichen Auswirkungen eines einzelnen verlorenen Ticks.' },
    { type: 'title', text: 'Was ist eine Schlagzahl?', level: 3 },
    { type: 'paragraph', html: 'Die Schlagzahl, gemessen in Schwingungen pro Stunde (vph), ist die Frequenz, mit der die Unruh einer Uhr schwingt. Eine g\u00e4ngige Rate ist 28.800 VPH \u2014 das entspricht 4 Hz oder 8 Ticks pro Sekunde. H\u00f6here Schlagzahlen wie 36.000 VPH (5 Hz) erzeugen eine gleichm\u00e4\u00dfigere Zeigerbewegung und k\u00f6nnen theoretisch die Genauigkeit verbessern, indem sie die Auswirkung von Lagefehlern verringern.' },
    { type: 'title', text: 'Warum ein verlorener Tick wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Wenn die Hemmung einer Uhr aufgrund von Reibung, Magnetismus oder Verschlei\u00df einen Tick nicht ausl\u00f6st, \u00fcbersetzt sich dieser verlorene Tick direkt in verlorene Zeit. Bei 28.800 VPH summiert sich ein verlorener Tick pro Stunde auf etwa <strong>3 Sekunden pro Tag</strong>. Bei 18.000 VPH kostet derselbe Fehler fast 5 Sekunden pro Tag. Dieses Tool hilft Ihnen, die Mathematik hinter der Reglage zu verstehen.' },
    { type: 'title', text: 'G\u00e4ngige Schlagzahlen', level: 3 },
    { type: 'paragraph', html: 'Vintage-Taschenuhren und fr\u00fche Automatikuhren laufen oft mit 18.000 VPH (2,5 Hz). Viele Seiko- und Miyota-Kaliber verwenden 21.600 VPH (3 Hz). Der moderne Standard ist 28.800 VPH (4 Hz), verwendet von ETA, Sellita, Rolex und anderen. Hochfrequente Werke wie der Zenith El Primero laufen mit 36.000 VPH (5 Hz) f\u00fcr h\u00f6here Pr\u00e4zision.' },
  ],
  faq: [
    {
      question: 'Wie rechnet man VPH in Hz um?',
      answer: 'Teilen Sie die VPH durch 7.200. Eine Uhr mit 28.800 VPH schl\u00e4gt mit 4 Hz (28.800 \u00f7 7.200 = 4). Die Division durch 7.200 ber\u00fccksichtigt, dass eine vollst\u00e4ndige Schwingung zwei Schwingungsvorg\u00e4nge umfasst und eine Stunde 3.600 Sekunden hat.',
    },
    {
      question: 'Was bedeutet eine h\u00f6here Schlagzahl f\u00fcr die Genauigkeit?',
      answer: 'H\u00f6here Schlagzahlen erm\u00f6glichen in der Regel eine gr\u00f6\u00dfere theoretische Pr\u00e4zision, da die Unruh weniger von Lagever\u00e4nderungen beeinflusst wird. Allerdings verursachen sie auch mehr Reibung und Verschlei\u00df an den Steinpaletten und dem Ankerrad, was bessere Schmierung und h\u00e4ufigere Wartung erfordert.',
    },
    {
      question: 'Wie wirkt sich ein verlorener Tick auf die t\u00e4gliche Genauigkeit aus?',
      answer: 'Ein verlorener Tick pro Stunde ergibt 24 verlorene Ticks pro Tag. Die verlorene Zeit h\u00e4ngt von Ihrer Schlagzahl ab: Teilen Sie 86.400 durch Ihre VPH. Bei 28.800 VPH sind das 3 Sekunden pro Tag. Bei 18.000 VPH sind es 4,8 Sekunden pro Tag.',
    },
    {
      question: 'Kann eine Uhr einen verlorenen Tick aufholen?',
      answer: 'Nein. Sobald ein Tick verloren ist, ist die Zeit dauerhaft verloren. Die Uhr holt nichts auf. Deshalb wirkt sich der Zustand der Hemmung \u2014 saubere Steinpaletten, richtige Schmierung und korrekter Beat Error \u2014 direkt auf die t\u00e4gliche Ganggenauigkeit aus.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kaliber ausw\u00e4hlen',
      text: 'W\u00e4hlen Sie Ihr Uhrwerk aus dem Men\u00fc. Jeder voreingestellte Eintrag enth\u00e4lt die korrekte VPH f\u00fcr dieses Kaliber.',
    },
    {
      name: 'Ergebnisse ablesen',
      text: 'Die Karte zeigt Hz-Frequenz, Ticks pro Sekunde und die t\u00e4gliche Auswirkung eines einzelnen verlorenen Ticks.',
    },
    {
      name: 'Benutzerdefinierte VPH eingeben',
      text: 'W\u00e4hlen Sie \u201eBenutzerdefiniert\u201c, um eine beliebige VPH f\u00fcr Vintage- oder ungew\u00f6hnliche Werke einzugeben.',
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
            'text': 'Teilen Sie die VPH durch 7.200. Eine Uhr mit 28.800 VPH schl\u00e4gt mit 4 Hz. Die Division durch 7.200 ber\u00fccksichtigt, dass eine Schwingung zwei Schwingungsvorg\u00e4nge umfasst und eine Stunde 3.600 Sekunden hat.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was bedeutet eine h\u00f6here Schlagzahl f\u00fcr die Genauigkeit?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'H\u00f6here Schlagzahlen erm\u00f6glichen eine gr\u00f6\u00dfere theoretische Pr\u00e4zision, da die Unruh weniger von Lagever\u00e4nderungen beeinflusst wird. Allerdings verursachen sie auch mehr Reibung und Verschlei\u00df.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie wirkt sich ein verlorener Tick auf die t\u00e4gliche Genauigkeit aus?',
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
          'name': 'Kaliber ausw\u00e4hlen',
          'text': 'W\u00e4hlen Sie Ihr Uhrwerk aus dem Men\u00fc. Jeder voreingestellte Eintrag enth\u00e4lt die korrekte VPH f\u00fcr dieses Kaliber.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ergebnisse ablesen',
          'text': 'Die Karte zeigt Hz-Frequenz, Ticks pro Sekunde und die t\u00e4gliche Auswirkung eines einzelnen verlorenen Ticks.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Benutzerdefinierte VPH eingeben',
          'text': 'W\u00e4hlen Sie Benutzerdefiniert, um eine beliebige VPH f\u00fcr Vintage- oder ungew\u00f6hnliche Werke einzugeben.',
        },
      ],
    },
  ],
};
