import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Horloge Service Interval Tracker';
const description = 'Volg en beheer de service-intervallen van uw horlogecollectie. Zie in één oogopslag wanneer elk horloge aan onderhoud toe is.';
const faq = [
  {
    "question": "Hoe vaak moet een automatisch horloge worden onderhouden?",
    "answer": "De meeste fabrikanten adviseren onderhoud om de 3 tot 5 jaar. In de praktijk werken veel horloges 5 tot 7 jaar probleemloos."
  },
  {
    "question": "Hebben quartzhorloges periodiek onderhoud nodig?",
    "answer": "Ja, vervang de batterij elke 2-3 jaar om lekkage te voorkomen. Een volledige controle van de pakkingen wordt elke 5-10 jaar aanbevolen."
  },
  {
    "question": "Wat gebeurt er als een horloge nooit onderhoud krijgt?",
    "answer": "Smeermiddelen drogen uit, waardoor wrijving en slijtage aan assen en robijnen toenemen. Dat kan dure defecten veroorzaken."
  },
  {
    "question": "Kan ik een handmatig horloge geforceerd opwinden?",
    "answer": "Moderne handmatige horloges hebben een duidelijke stop wanneer ze volledig zijn opgewonden. Forceer de kroon niet bij weerstand."
  },
  {
    "question": "Verandert het interval bij dagelijks of incidenteel gebruik?",
    "answer": "Ja, dagelijks gebruik veroorzaakt meer slijtage en vraagt om onderhoud om de 3 jaar; incidenteel gebruik kan ongeveer 5 jaar meegaan."
  }
];
const howTo = [
  {
    "name": "Horloge toevoegen",
    "text": "Vul de naam, het uurwerktype en de datum van het laatste onderhoud in."
  },
  {
    "name": "Paneel bekijken",
    "text": "Elk horloge toont een voortgangsbalk en kleurcode."
  },
  {
    "name": "Na onderhoud bijwerken",
    "text": "Werk de datum bij nadat je het horloge naar de horlogemaker hebt gebracht om de cyclus opnieuw te starten."
  }
];

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
