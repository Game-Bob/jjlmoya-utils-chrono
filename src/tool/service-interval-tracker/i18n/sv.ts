import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'klockservice-intervalls-tracker',
  title: 'Klockservice Intervalls Tracker',
  description: 'Registrera och hantera serviceintervaller för dina klockor. Se direkt när det är dags för underhåll eller täthetsservice.',
  ui: {
    title: 'Service tracker',
    addWatch: 'Lägg till klocka',
    editWatch: 'Redigera klocka',
    cancel: 'Avbryt',
    save: 'Spara',
    deleteWatch: 'Ta bort',
    confirmDelete: 'Ta bort klockan från samlingen?',
    emptyTitle: 'Din samling är tom',
    emptyDesc: 'Håll reda på när dina klockor behöver service för att hålla dem i perfekt skick.',
    emptyAction: 'Lägg till din första klocka',
    healthy: 'ok',
    due: 'snart dags',
    overdue: 'försenad',
    nameLabel: 'Klockans namn',
    namePlaceholder: 't.ex. Rolex Submariner',
    movementLabel: 'Urverkstyp',
    movementAuto: 'Automatisk',
    movementManual: 'Manuell',
    movementQuartz: 'Quartz',
    movementKinetic: 'Kinetic',
    dateLabel: 'Senaste servicedatum',
    neverServiced: 'Ny eller aldrig servad',
    lastServiceLabel: 'Senaste service',
    nextServiceLabel: 'Nästa service',
    serviced: 'Servad den',
    newWatch: 'Ny',
    years: 'år',
    collectionHealth: 'Samlingens status',
  },
  seo: [
    { type: 'title', text: 'Service Tracker för Armbandsur: Håll koll på oljor och packningar', level: 2 },
  ],
  faq: [
    {
      question: 'Hur ofta ska en automatisk klocka servas?',
      answer: 'De flesta tillverkare rekommenderar service vart 3:e till 5:e år. I verkligheten går många klockor fint i 5-7 år innan tidhållningen påverkas.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Registrera klocka', text: 'Ange klockans modell, urverk samt senaste servicedatum.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur ofta ska en automatisk klocka servas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta tillverkare rekommenderar service vart 3:e till 5:e år.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Klockservice Intervalls Tracker',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Klockservice Intervalls Tracker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Registrera klocka',
          'text': 'Ange klockans modell, urverk samt senaste servicedatum.'
        }
      ]
    }
  ]
};
