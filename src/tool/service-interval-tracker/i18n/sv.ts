import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Klockservice Intervalls Tracker';
const description = 'Registrera och hantera serviceintervaller för dina klockor. Se direkt när det är dags för underhåll eller täthetsservice.';
const faq = [
  {
    "question": "Hur ofta bör en automatisk klocka servas?",
    "answer": "De flesta tillverkare rekommenderar service vart tredje till femte år. I praktiken fungerar många klockor problemfritt i fem till sju år."
  },
  {
    "question": "Behöver kvartsur regelbundet underhåll?",
    "answer": "Ja, batteriet bör bytas vartannat eller vart tredje år för att undvika läckage. Ett komplett packningstest rekommenderas vart femte till tionde år."
  },
  {
    "question": "Vad händer om klockan aldrig får service?",
    "answer": "Smörjmedel torkar och ökar friktion samt slitage på tappar och rubiner. Det kan orsaka dyra fel."
  },
  {
    "question": "Kan jag tvinga upp ett manuellt urverk?",
    "answer": "Moderna manuella klockor har ett tydligt stopp när fjädern är fullt uppdragen. Tvinga inte kronan när du känner motstånd."
  },
  {
    "question": "Ändras intervallet vid daglig eller tillfällig användning?",
    "answer": "Ja, daglig användning ger mer slitage och kräver service vart tredje år, medan tillfällig användning kan klara fem år."
  }
];
const howTo = [
  {
    "name": "Lägg till klocka",
    "text": "Ange namn, urverkstyp och datum för senaste service."
  },
  {
    "name": "Visa panelen",
    "text": "Varje klocka visar en förloppsindikator och färgkod."
  },
  {
    "name": "Uppdatera efter service",
    "text": "Uppdatera datumet efter besöket hos urmakaren för att starta om cykeln."
  }
];

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
  seo: buildServiceSeo({ title, description, faq, howTo }),
  faq,
  bibliography,
  howTo,
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
