import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'tracciamento-intervalli-servizio',
  title: 'Registro Intervalli Manutenzione Orologi',
  description: 'Monitora e gestisci gli intervalli di manutenzione della tua collezione di orologi. Scopri a colpo d\'occhio quando è necessaria una revisione.',
  ui: {
    title: 'Manutenzione Orologi',
    addWatch: 'Aggiungi orologio',
    editWatch: 'Modifica orologio',
    cancel: 'Annulla',
    save: 'Salva',
    deleteWatch: 'Rimuovi',
    confirmDelete: 'Rimuovere questo orologio dalla collezione?',
    emptyTitle: 'La tua collezione è vuota',
    emptyDesc: 'Tieni traccia degli intervalli di manutenzione per proteggere la durata dei tuoi orologi.',
    emptyAction: 'Aggiungi il primo orologio',
    healthy: 'in regola',
    due: 'in scadenza',
    overdue: 'scaduto',
    nameLabel: 'Nome orologio',
    namePlaceholder: 'es. Rolex Submariner',
    movementLabel: 'Tipo di movimento',
    movementAuto: 'Automatico',
    movementManual: 'Manuale',
    movementQuartz: 'Quarzo',
    movementKinetic: 'Cinetico',
    dateLabel: 'Data ultimo servizio',
    neverServiced: 'Nuovo o mai revisionato',
    lastServiceLabel: 'Ultimo servizio',
    nextServiceLabel: 'Prossimo servizio',
    serviced: 'Revisionato',
    newWatch: 'Nuovo',
    years: 'anni',
    collectionHealth: 'Stato della collezione',
  },
  seo: [
    { type: 'title', text: 'Registro Manutenzione Orologi: Pianifica la manutenzione', level: 2 },
  ],
  faq: [
    {
      question: 'Ogni quanto tempo va revisionato un orologio automatico?',
      answer: 'I produttori consigliano una revisione ogni 3-5 anni. In molti casi gli orologi funzionano correttamente anche per 5-7 anni senza interventi.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Aggiungi un orologio', text: 'Inserisci il nome, il movimento e la data dell\'ultimo servizio per calcolare la scadenza successiva.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ogni quanto tempo va revisionato un orologio automatico?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'I produttori consigliano una revisione ogni 3-5 anni.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Registro Intervalli Manutenzione Orologi',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Registro Intervalli Manutenzione Orologi',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Aggiungi un orologio',
          'text': 'Inserisci il nome, il movimento e la data dell\'ultimo servizio.'
        }
      ]
    }
  ]
};
