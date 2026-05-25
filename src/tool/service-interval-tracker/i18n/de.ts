import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'serviceintervall-tracker',
  title: 'Uhren Serviceintervall Tracker',
  description: 'Verfolgen und verwalten Sie die Serviceintervalle Ihrer Uhrensammlung. Erkennen Sie auf einen Blick, wann jede Uhr zur Wartung ansteht.',
  ui: {
    title: 'Service Tracker',
    addWatch: 'Uhr hinzufügen',
    editWatch: 'Uhr bearbeiten',
    cancel: 'Abbrechen',
    save: 'Speichern',
    deleteWatch: 'Entfernen',
    confirmDelete: 'Diese Uhr aus Ihrer Sammlung entfernen?',
    emptyTitle: 'Ihre Sammlung ist leer',
    emptyDesc: 'Verfolgen Sie die Serviceintervalle Ihrer Uhren und verpassen Sie nie wieder eine Wartung.',
    emptyAction: 'Erste Uhr hinzufügen',
    healthy: 'in Ordnung',
    due: 'anstehend',
    overdue: 'überfällig',
    nameLabel: 'Uhrenname',
    namePlaceholder: 'z. B. Rolex Submariner',
    movementLabel: 'Uhrwerkstyp',
    movementAuto: 'Automatik',
    movementManual: 'Handaufzug',
    movementQuartz: 'Quarz',
    movementKinetic: 'Kinetisch',
    dateLabel: 'Letztes Servicedatum',
    neverServiced: 'Neu oder nie gewartet',
    lastServiceLabel: 'Letzter Service',
    nextServiceLabel: 'Nächster Service',
    serviced: 'Gewartet am',
    newWatch: 'Neu',
    years: 'J.',
    collectionHealth: 'Gesundheit der Sammlung',
  },
  seo: [
    { type: 'title', text: 'Uhren-Serviceintervall-Tracker: Wissen, wann ein Service ansteht', level: 2 },
    { type: 'paragraph', html: 'Eine mechanische Uhr ist ein Präzisionsinstrument mit Hunderten von beweglichen Teilen. Schmiermittel trocknen aus, Dichtungen verschleißen und die Ganggenauigkeit lässt mit der Zeit nach. Für Sammler ist es wichtig, die Wartungsdaten im Blick zu behalten.' },
    { type: 'title', text: 'Warum Serviceintervalle wichtig sind', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Automatik (3-5 Jahre)', definition: 'Federhaus, Klinkenräder und Rotorlager sind ständiger Reibung ausgesetzt. Altes Öl verharzt und beschleunigt den Verschleiß.' },
        { term: 'Handaufzug (3-5 Jahre)', definition: 'Ähnliches Intervall wie bei Automatikuhren. Aufzugswelle und Kupplungsmechanismus werden durch tägliches Aufziehen beansprucht.' },
        { term: 'Quarz (5-10 Jahre)', definition: 'Weniger bewegliche Teile, aber die Batterie kann auslaufen und Dichtungen müssen erneuert werden, um die Wasserdichtigkeit zu erhalten.' },
        { term: 'Kinetisch (5 Jahre)', definition: 'Kombiniert automatischen Aufzug mit Quarz-Zeitmessung. Der Akku oder Kondensator hat eine begrenzte Lebensdauer.' },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Anzeichen für einen notwendigen Service', icon: 'mdi:information', badge: 'WICHTIG', html: 'Wenn die Uhr mehr als 15-20 Sekunden pro Tag vor- oder nachgeht, sich die Krone schwergängig anfühlt oder Kondenswasser unter dem Glas sichtbar ist, warten Sie nicht das Intervall ab. Lassen Sie die Uhr sofort warten.' },
  ],
  faq: [
    {
      question: 'Wie oft sollte eine Automatikuhr gewartet werden?',
      answer: 'Die meisten Hersteller empfehlen ein Serviceintervall von 3 bis 5 Jahren. In der Praxis laufen viele Uhren 5-7 Jahre einwandfrei. Bei starker Gangabweichung oder verringerter Gangreserve sollte der Service früher erfolgen.',
    },
    {
      question: 'Benötigen Quarzuhren eine regelmäßige Wartung?',
      answer: 'Ja, wenn auch seltener. Die Batterie sollte alle 2-3 Jahre gewechselt werden, um Auslaufen zu verhindern. Ein kompletter Service inklusive Dichtungswechsel wird alle 5-10 Jahre empfohlen.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Uhr hinzufügen', text: 'Geben Sie Name, Werkstyp und das letzte Servicedatum ein. Der Tracker berechnet den nächsten Service automatisch.' },
    { name: 'Dashboard prüfen', text: 'Jede Uhr zeigt einen Fortschrittsbalken und einen farbcodierten Status: grün (in Ordnung), gelb (anstehend), rot (überfällig).' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie oft sollte eine Automatikuhr gewartet werden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten Hersteller empfehlen ein Serviceintervall von 3 bis 5 Jahren. In der Praxis laufen viele Uhren 5-7 Jahre einwandfrei.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Benötigen Quarzuhren eine regelmäßige Wartung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, wenn auch seltener. Die Batterie sollte alle 2-3 Jahre gewechselt werden. Ein kompletter Service inklusive Dichtungswechsel wird alle 5-10 Jahre empfohlen.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhren-Serviceintervall-Tracker',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Uhren-Serviceintervall-Tracker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Uhr hinzufügen',
          'text': 'Geben Sie Name, Werkstyp und das letzte Servicedatum ein.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Dashboard prüfen',
          'text': 'Jede Uhr zeigt einen Fortschrittsbalken und einen farbcodierten Status.'
        }
      ]
    }
  ]
};
