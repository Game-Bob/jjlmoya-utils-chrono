import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'gangreserve-rechner',
  title: 'Gangreserveschätzer für Uhren',
  description: 'Berechnen Sie die verbleibende Gangreserve Ihrer Uhr anhand von Kronenumdrehungen und Tragedauer. Kompatibel mit gängigen ETA-, Sellita-, Miyota-, Seiko- und Rolex-Kalibern.',
  ui: {
    title: 'Gangreserveschätzer',
    movementLabel: 'Werk',
    selectMovement: 'Werk auswählen',
    customMovement: 'Benutzerdefiniert',
    turnsLabel: 'Kronenumdrehungen',
    hoursLabel: 'Tragedauer',
    turnsInput: 'Umdrehungen',
    hoursInput: 'Stunden',
    activityLabel: 'Aktivität',
    activityLow: 'Büro',
    activityMedium: 'Gehen',
    activityHigh: 'Aktiv',
    calculate: 'Berechnen',
    reserveRemaining: 'Verbleibende Gangreserve',
    hoursRemaining: 'Verbleibend',
    chargePercent: 'Ladung',
    resultLabel: 'Geschätzte Reserve',
    stopTimeLabel: 'Läuft bis',
    powerReserveHours: 'Gangreserve (h)',
    fullWindTurns: 'Umdrehungen bis Vollaufzug',
    step1: 'Wählen Sie Ihr Werk aus dem Dropdown-Menü.',
    step2: 'Geben Sie Kronenumdrehungen und Tragedauer ein.',
    step3: 'Drücken Sie auf Berechnen, um Ihre Reserve zu sehen.',
    tipTitle: 'Tipp',
    tipContent: 'Handaufzugswerke werden nur durch Drehen der Krone geladen. Automatikwerke laden sich auch beim Tragen auf.',
  },
  seo: [
    { type: 'title', text: 'Gangreserveschätzer für Uhren - Wie viel Reserve hat Ihr Werk noch?', level: 2 },
    { type: 'paragraph', html: 'Sie möchten wissen, wie viel Energie Ihre mechanische Uhr noch hat? Ob Sie heute Morgen die Krone gedreht oder die Uhr den ganzen Tag getragen haben - dieser Rechner zeigt Ihnen den ungefähren Ladezustand und die verbleibenden Stunden für gängige Kaliber wie <strong>ETA, Sellita, Miyota, Seiko und Rolex</strong>.' },
    { type: 'title', text: 'Wie die Gangreserve bei einer mechanischen Uhr funktioniert', level: 3 },
    { type: 'paragraph', html: 'Die Gangreserve ist die in der Zugfeder gespeicherte Energiemenge. Beim Aufziehen der Krone spannen Sie die Zugfeder und speichern potenzielle Energie. Ein Automatikrotor spannt die Zugfeder ebenfalls, während Sie die Uhr tragen. Die Energie entlädt sich dann gleichmäßig - typischerweise 2-3 % pro Stunde - bis die Uhr stehen bleibt.' },
    { type: 'title', text: 'Kronenaufzug vs. Rotorladung', level: 3 },
    { type: 'paragraph', html: 'Der manuelle Aufzug über die Krone ist die effizienteste Methode, eine Uhr zu laden - jede volle Umdrehung gibt eine vorhersagbare Energiemenge ab, typischerweise etwa 2,5 % der Gesamtreserve. Das Tragen der Uhr lädt langsamer und hängt vom Aktivitätsniveau ab: Ein Büroangestellter lädt etwa 4-6 % pro Stunde, bei aktiver Bewegung sind es 8-10 %. Dieser Rechner verwendet einen konservativen Durchschnitt.' },
    { type: 'title', text: 'Warum die Gangreserve-Schätzung wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Wenn Sie den Ladezustand Ihrer Uhr kennen, vermeiden Sie unerwartete Stillstände. Eine Uhr, die über Nacht stehen bleibt, braucht möglicherweise mehr Aufzug vor dem Schlafengehen oder wird nicht genug getragen. Nutzen Sie dieses Tool, um Ihre Ladegewohnheiten zu verstehen und Ihre Automatik am Laufen zu halten.' },
  ],
  faq: [
    {
      question: 'Wie viel lädt eine Kronenumdrehung die Uhr?',
      answer: 'Das hängt vom Werk ab. Die meisten Automatikkaliber erreichen nach 30-40 Umdrehungen den Vollaufzug, sodass jede Umdrehung etwa 2,5-3,3 % der Gesamtreserve ausmacht. Handaufzugswerke wie das Unitas 6498 benötigen ebenfalls etwa 35 Umdrehungen für einen Vollaufzug.',
    },
    {
      question: 'Lädt das Tragen der Uhr genauso stark wie der Aufzug?',
      answer: 'Das Tragen lädt langsamer und variabler. Bei Büroarbeit laden Sie etwa 4-6 % pro Stunde über den Rotor. Bei aktiver Bewegung (Gehen, Sport) können es 8-10 % pro Stunde sein. Das Aufziehen von Hand ist schneller und zuverlässiger.',
    },
    {
      question: 'Wie viel Reserve verliert eine Uhr pro Stunde?',
      answer: 'Der Verlust ist konstant: Teilen Sie 100 durch die Gangreserve in Stunden. Ein 38-Stunden-Werk verliert etwa 2,6 % pro Stunde, ein 42-Stunden-Werk 2,4 % und ein 70-Stunden-Werk etwa 1,4 % pro Stunde.',
    },
    {
      question: 'Kann ich meine Uhr überdrehen?',
      answer: 'Moderne Automatikwerke haben eine Rutschkupplung, die ein Überdrehen verhindert. Sobald die Zugfeder vollständig gespannt ist, rutschen weitere Umdrehungen einfach durch. Handaufzugswerke verfügen ebenfalls über einen Anschlag, wobei ein gewaltsames Weiterdrehen die Zugfeder beschädigen kann.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Werk auswählen',
      text: 'Wählen Sie Ihr Uhrwerk aus dem Dropdown-Menü. Falls nicht aufgeführt, wählen Sie Benutzerdefiniert und geben Sie Gangreserve sowie Umdrehungen bis Vollaufzug ein.',
    },
    {
      name: 'Eingaben machen',
      text: 'Geben Sie ein, wie viele Kronenumdrehungen Sie gemacht oder wie viele Stunden Sie die Uhr heute getragen haben. Sie können beides ausfüllen, um eine kombinierte Schätzung zu erhalten.',
    },
    {
      name: 'Berechnen',
      text: 'Drücken Sie auf Berechnen. Das Ergebnis zeigt den geschätzten Ladestand in Prozent und die verbleibenden Stunden Gangreserve.',
    },
    {
      name: 'Gewohnheiten anpassen',
      text: 'Nutzen Sie die Ergebnisse, um zu entscheiden, ob Sie vor dem Schlafengehen mehr aufziehen oder die Uhr tagsüber länger tragen müssen, damit sie am Laufen bleibt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie viel lädt eine Kronenumdrehung die Uhr?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Das hängt vom Werk ab. Die meisten Automatikkaliber erreichen nach 30-40 Umdrehungen den Vollaufzug, sodass jede Umdrehung etwa 2,5-3,3 % der Gesamtreserve ausmacht. Handaufzugswerke wie das Unitas 6498 benötigen ebenfalls etwa 35 Umdrehungen für einen Vollaufzug.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Lädt das Tragen der Uhr genauso stark wie der Aufzug?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Das Tragen lädt langsamer und variabler. Bei Büroarbeit laden Sie etwa 4-6 % pro Stunde über den Rotor. Bei aktiver Bewegung kann es 8-10 % pro Stunde erreichen. Das Aufziehen von Hand ist schneller und zuverlässiger.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie viel Reserve verliert eine Uhr pro Stunde?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der Verlust ist konstant: Teilen Sie 100 durch die Gangreserve in Stunden. Ein 38-Stunden-Werk verliert etwa 2,6 % pro Stunde, ein 42-Stunden-Werk 2,4 % und ein 70-Stunden-Werk etwa 1,4 % pro Stunde.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich meine Uhr überdrehen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Moderne Automatikwerke haben eine Rutschkupplung, die ein Überdrehen verhindert. Sobald die Zugfeder vollständig gespannt ist, rutschen weitere Umdrehungen einfach durch.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Gangreserveschätzer für Uhren',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So schätzen Sie die Gangreserve Ihrer Uhr',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Werk auswählen',
          'text': 'Wählen Sie Ihr Uhrwerk aus dem Dropdown-Menü. Falls nicht aufgeführt, wählen Sie Benutzerdefiniert und geben Sie Gangreserve sowie Umdrehungen bis Vollaufzug ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Eingaben machen',
          'text': 'Geben Sie ein, wie viele Kronenumdrehungen Sie gemacht oder wie viele Stunden Sie die Uhr heute getragen haben. Sie können beides ausfüllen, um eine kombinierte Schätzung zu erhalten.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Berechnen',
          'text': 'Drücken Sie auf Berechnen. Das Ergebnis zeigt den geschätzten Ladestand in Prozent und die verbleibenden Stunden Gangreserve.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gewohnheiten anpassen',
          'text': 'Nutzen Sie die Ergebnisse, um zu entscheiden, ob Sie vor dem Schlafengehen mehr aufziehen oder die Uhr tagsüber länger tragen müssen, damit sie am Laufen bleibt.',
        },
      ],
    },
  ],
};
