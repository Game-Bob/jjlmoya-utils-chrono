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
  {
    "type": "title",
    "text": "Wartungsintervall Tracker für mechanische Uhren",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Eine mechanische Uhr ist ein Mikromechanik-Wunderwerk. Die richtigen <strong>Wartungsintervalle</strong> schützen Ihre Investition vor teurem Verschleiß."
  },
  {
    "type": "title",
    "text": "Empfohlene Wartungsintervalle nach Werkstyp",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Automatik (3-5 Jahre)",
        "definition": "Rotorlager und Aufzugsräder bewegen sich ständig und benötigen frische Schmierstoffe."
      },
      {
        "term": "Handaufzug (4-5 Jahre)",
        "definition": "Weniger bewegliche Teile als Automatik, aber Kronenrad und Sperrrad verschleißen beim täglichen Aufziehen."
      },
      {
        "term": "Quarz (5-10 Jahre)",
        "definition": "Elektronische Bauteile verschleißen kaum, aber Dichtungen und Batteriewechsel sind regelmäßig nötig."
      },
      {
        "term": "Kinetisch / Solar (5-8 Jahre)",
        "definition": "Akkumulator oder Kondensator haben eine begrenzte Lebensdauer."
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Anzeichen für einen Wartungsbedarf",
    "icon": "mdi:information",
    "badge": "ACHTUNG",
    "html": "Wenn die Uhr mehr als 15-20 Sekunden pro Tag vor- oder nachgeht, sich die Krone beim Aufziehen rau anfühlt oder Sie Kondenswasser sehen, warten Sie nicht."
  },
  {
    "type": "title",
    "text": "Verfolgen Sie Ihre Sammlung",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Fügen Sie jede Uhr Ihrer Sammlung mit Werkstyp und letztem Servicedatum hinzu. Der Tracker berechnet die nächste empfohlene Wartung automatisch."
  }
],
  faq: [
  {
    "question": "Wie oft sollte eine automatische Uhr gewartet werden?",
    "answer": "Die meisten Hersteller empfehlen eine Wartung alle 3 bis 5 Jahre. In der Praxis laufen viele Uhren 5-7 Jahre einwandfrei. Bei Gangabweichungen oder verringerter Gangreserve sollten Sie sie früher warten lassen."
  },
  {
    "question": "Benötigen Quarzuhren eine regelmäßige Wartung?",
    "answer": "Ja, wenn auch seltener. Die Batterie sollte alle 2-3 Jahre gewechselt werden, um Auslaufen zu verhindern. Eine vollständige Wartung inklusive Dichtungswechsel wird alle 5-10 Jahre empfohlen."
  },
  {
    "question": "Was passiert, wenn ich meine Uhr nie warten lasse?",
    "answer": "Die Schmierstoffe trocknen aus, was zu erhöhter Reibung und Verschleiß an Zapfen, Lagersteinen und Hemmung führt. Das kann teure Folgeschäden wie gebrochene Unruhwellen verursachen."
  },
  {
    "question": "Kann ich eine Handaufzugsuhr überdrehen?",
    "answer": "Moderne Handaufzugsuhren besitzen eine Rutschkupplung oder einen spürbaren festen Anschlag bei Vollaufzug. Wenden Sie keine Gewalt an, wenn sich die Krone steif anfühlt."
  },
  {
    "question": "Ändert sich das Intervall bei täglichem vs. gelegentlichem Tragen?",
    "answer": "Ja. Eine täglich getragene Uhr hat mehr Verschleiß am Automatikaufzug und sollte eher nach 3 Jahren gewartet werden. Gelegentlich getragene Uhren können oft bis zu 5 Jahre laufen."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Uhr hinzufügen",
    "text": "Geben Sie Uhrennamen, Werkstyp und letztes Servicedatum ein. Der Tracker berechnet das nächste Wartungsdatum automatisch."
  },
  {
    "name": "Dashboard prüfen",
    "text": "Jede Uhr zeigt einen Fortschrittsbalken und einen Farbcode: grün (gesund), gelb (bald fällig) oder rot (überfällig)."
  },
  {
    "name": "Nach Wartung aktualisieren",
    "text": "Wenn eine Uhr gewartet wurde, entfernen Sie den alten Eintrag und fügen Sie ihn mit dem neuen Datum erneut hinzu."
  }
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
