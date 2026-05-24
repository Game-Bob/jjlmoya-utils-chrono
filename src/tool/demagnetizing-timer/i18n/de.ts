import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'entmagnetisierungs-timer',
  title: 'Uhren Entmagnetisierungs Timer & Anleitung',
  description: 'Ein präziser Countdown-Timer mit akustischen Signalen zur DIY-Entmagnetisierung von Uhren. Ermitteln Sie die genaue Haltedauer für Ihre Entmagnetisierungsspule.',
  ui: {
    title: 'Timer Einstellungen',
    durationLabel: 'Pulsdauer',
    duration1s: '1 Sekunde',
    duration2s: '2 Sekunden',
    duration3s: '3 Sekunden',
    customLabel: 'Benutzerdefiniert',
    startButton: 'Start',
    stopButton: 'Stopp',
    resetButton: 'Zurücksetzen',
    pressPhase: 'Entmagnetisierer-Taste jetzt drücken!',
    holdPhase: 'Taste gedrückt halten...',
    releasePhase: 'Jetzt loslassen!',
    completePhase: 'Fertig! Uhr wegbewegen.',
    ready: 'Bereit',
    seconds: 's',
    instructions: 'So entmagnetisieren Sie',
    step1: 'Legen Sie die Uhr auf die Entmagnetisierer-Plattform.',
    step2: 'Drücken Sie Start und halten Sie die Entmagnetisierer-Taste für die eingestellte Dauer gedrückt.',
    step3: 'Lassen Sie die Taste los und bewegen Sie die Uhr langsam weg.',
    step4: 'Wiederholen Sie den Vorgang 2–3 Mal und drehen Sie die Uhr dabei jeweils.',
    tipTitle: 'Tipp',
    tipContent: 'Halten Sie die Uhr mindestens 1 Meter vom Entmagnetisierer entfernt, wenn er eingeschaltet ist, um eine erneute Magnetisierung zu vermeiden.',
  },
  seo: [
    { type: 'title', text: 'Uhren-Entmagnetisierungs-Timer — Präzises Timing für die DIY-Entmagnetisierung', level: 2 },
    { type: 'paragraph', html: 'Die Entmagnetisierung einer Uhr erfordert präzises Timing beim Tastendruck. Die meisten DIY-Entmagnetisierer erzeugen ein abklingendes magnetisches Wechselfeld, und der ideale Puls dauert zwischen <strong>1 und 3 Sekunden</strong>. Zu kurz und das Feld neutralisiert die Magnetisierung nicht; zu lang und Sie riskieren eine Sättigung des Werks.' },
    { type: 'title', text: 'Warum das Timing bei der Uhren-Entmagnetisierung entscheidend ist', level: 3 },
    { type: 'paragraph', html: 'Wenn Sie die Taste am Entmagnetisierer drücken, entsteht im Inneren der Spule ein magnetisches Wechselfeld. Das Feld oszilliert mit der Netzfrequenz (50/60 Hz) und klingt beim Loslassen ab. Ziel ist es, die Uhr <strong>gerade lange genug</strong> diesem abklingenden Feld auszusetzen, um die magnetischen Domänen in der Spirale und anderen Stahlkomponenten zu randomisieren. Ein Puls von 1 bis 3 Sekunden ist für die meisten Werke ideal.' },
    { type: 'title', text: 'Wie ein Entmagnetisierer funktioniert', level: 3 },
    { type: 'paragraph', html: 'Ein Entmagnetisierer ist im Wesentlichen eine Drahtspule, die bei Bestromung ein starkes magnetisches Wechselfeld erzeugt. Wird eine magnetisierte Uhr in dieses Feld gelegt, kippen ihre internen magnetischen Domänen schnell hin und her. Wird das Feld abrupt abgeschaltet (durch Loslassen der Taste), setzen sich die Domänen in einem zufälligen Muster fest und heben die Nettomagnetisierung effektiv auf.' },
    { type: 'title', text: 'Anzeichen, dass Ihre Uhr entmagnetisiert werden muss', level: 3 },
    { type: 'paragraph', html: 'Häufige Symptome einer magnetisierten Uhr sind: tägliches Vorlaufen um mehrere Minuten, inkonsistenter Gang in verschiedenen Positionen, ein hörbar schnelleres Tickgeräusch und in extremen Fällen ein völliger Stillstand. Wenn Ihre Automatikuhr plötzlich schnell läuft, ist oft eine Magnetisierung die Ursache – und die Entmagnetisierung eine einfache Lösung.' },
  ],
  faq: [
    {
      question: 'Wie lange soll ich die Entmagnetisierer-Taste drücken?',
      answer: '1 bis 3 Sekunden ist die empfohlene Pulsdauer. Beginnen Sie mit 1 Sekunde und steigern Sie bei Bedarf. Zu lange Pulse können die Spule überhitzen und bringen keine besseren Ergebnisse.',
    },
    {
      question: 'Kann ich eine Uhr mehr als einmal entmagnetisieren?',
      answer: 'Ja. Wiederholen Sie den Vorgang 2 bis 3 Mal und drehen Sie die Uhr jedes Mal um 90 Grad. So werden alle Achsen dem Wechselfeld ausgesetzt. Eine Über-Entmagnetisierung ist nicht möglich.',
    },
    {
      question: 'Wirkt die Entmagnetisierung auch bei Quarzuhren?',
      answer: 'Quarzuhren sind selten von Magnetisierung betroffen, da sie nur wenige ferromagnetische Teile enthalten. Allerdings kann sich der Schrittmotor in manchen Quarzwerken magnetisieren, was zu unruhigem Zeigerlauf führt. Die Entmagnetisierung ist auch für Quarzuhren sicher.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Dauer einstellen',
      text: 'Wählen Sie 1, 2 oder 3 Sekunden, je nach Stärke der Magnetisierung.',
    },
    {
      name: 'Uhr positionieren',
      text: 'Legen Sie die Uhr flach auf die Entmagnetisierer-Plattform, zentriert über der Spule.',
    },
    {
      name: 'Drücken und halten',
      text: 'Drücken Sie gleichzeitig die Start-Taste und die Entmagnetisierer-Taste und halten Sie sie für die eingestellte Dauer.',
    },
    {
      name: 'Loslassen und wegbewegen',
      text: 'Lassen Sie die Taste los und bewegen Sie die Uhr mindestens 1 Meter weg, bevor Sie den Entmagnetisierer ausschalten.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie lange soll ich die Entmagnetisierer-Taste drücken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 bis 3 Sekunden ist die empfohlene Pulsdauer. Beginnen Sie mit 1 Sekunde und steigern Sie bei Bedarf. Zu lange Pulse können die Spule überhitzen und bringen keine besseren Ergebnisse.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich eine Uhr mehr als einmal entmagnetisieren?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Wiederholen Sie den Vorgang 2 bis 3 Mal und drehen Sie die Uhr jedes Mal um 90 Grad. So werden alle Achsen dem Wechselfeld ausgesetzt. Eine Über-Entmagnetisierung ist nicht möglich.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wirkt die Entmagnetisierung auch bei Quarzuhren?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Quarzuhren sind selten von Magnetisierung betroffen, da sie nur wenige ferromagnetische Teile enthalten. Allerdings kann sich der Schrittmotor in manchen Quarzwerken magnetisieren, was zu unruhigem Zeigerlauf führt. Die Entmagnetisierung ist auch für Quarzuhren sicher.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhren-Entmagnetisierungs-Timer & Anleitung',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So entmagnetisieren Sie eine Uhr',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dauer einstellen',
          'text': 'Wählen Sie 1, 2 oder 3 Sekunden, je nach Stärke der Magnetisierung.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Uhr positionieren',
          'text': 'Legen Sie die Uhr flach auf die Entmagnetisierer-Plattform, zentriert über der Spule.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Drücken und halten',
          'text': 'Drücken Sie gleichzeitig die Start-Taste und die Entmagnetisierer-Taste und halten Sie sie für die eingestellte Dauer.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Loslassen und wegbewegen',
          'text': 'Lassen Sie die Taste los und bewegen Sie die Uhr mindestens 1 Meter weg, bevor Sie den Entmagnetisierer ausschalten.',
        },
      ],
    },
  ],
};
