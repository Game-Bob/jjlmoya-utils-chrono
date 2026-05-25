import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'horloge-service-interval-tracker',
  title: 'Horloge Service Interval Tracker',
  description: 'Volg en beheer de service-intervallen van uw horlogecollectie. Zie in één oogopslag wanneer elk horloge aan onderhoud toe is.',
  ui: {
    title: 'Service tracker',
    addWatch: 'Horloge toevoegen',
    editWatch: 'Horloge bewerken',
    cancel: 'Annuleren',
    save: 'Opslaan',
    deleteWatch: 'Verwijderen',
    confirmDelete: 'Dit horloge uit uw collectie verwijderen?',
    emptyTitle: 'Uw collectie is leeg',
    emptyDesc: 'Volg de onderhoudsintervallen van uw horloges om dure reparaties te voorkomen.',
    emptyAction: 'Eerste horloge toevoegen',
    healthy: 'up-to-date',
    due: 'binnenkort',
    overdue: 'achterstallig',
    nameLabel: 'Horlogenaam',
    namePlaceholder: 'bijv. Rolex Submariner',
    movementLabel: 'Uurwerktype',
    movementAuto: 'Automatisch',
    movementManual: 'Handopwinder',
    movementQuartz: 'Quartz',
    movementKinetic: 'Kinetic',
    dateLabel: 'Laatste servicedatum',
    neverServiced: 'Nieuw of nooit onderhouden',
    lastServiceLabel: 'Laatste service',
    nextServiceLabel: 'Volgende service',
    serviced: 'Onderhouden op',
    newWatch: 'Nieuw',
    years: 'jr',
    collectionHealth: 'Gezondheid collectie',
  },
  seo: [
    { type: 'title', text: 'Horloge Service Tracker: Houd uw horloges in topconditie', level: 2 },
  ],
  faq: [
    {
      question: 'Hoe vaak moet een automatisch horloge worden onderhouden?',
      answer: 'De meeste merken raden onderhoud aan om de 3 tot 5 jaar. Vaak lopen horloges 5 tot 7 jaar goed voordat de olie indroogt.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Horloge invoeren', text: 'Vul de naam, het type uurwerk en de laatste onderhoudsdatum in.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe vaak moet een automatisch horloge worden onderhouden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste merken raden onderhoud aan om de 3 tot 5 jaar. Vaak lopen horloges 5 tot 7 jaar goed.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horloge Service Interval Tracker',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Horloge Service Interval Tracker',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Horloge invoeren',
          'text': 'Vul de naam, het type uurwerk en de laatste onderhoudsdatum in.'
        }
      ]
    }
  ]
};
