import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Registro Intervalli Manutenzione Orologi';
const description = 'Monitora e gestisci gli intervalli di manutenzione della tua collezione di orologi. Scopri a colpo d\'occhio quando è necessaria una revisione.';
const faq = [
  {
    "question": "Con quale frequenza va revisionato un orologio automatico?",
    "answer": "La maggior parte dei produttori consiglia una revisione ogni 3-5 anni. In pratica molti orologi funzionano senza problemi per 5-7 anni."
  },
  {
    "question": "Gli orologi al quarzo richiedono manutenzione periodica?",
    "answer": "Sì, la batteria va sostituita ogni 2-3 anni per evitare perdite. Una revisione completa delle guarnizioni è consigliata ogni 5-10 anni."
  },
  {
    "question": "Cosa succede se non si fa mai manutenzione all'orologio?",
    "answer": "I lubrificanti si seccano, aumentando attrito e usura di perni e rubini. Questo può causare guasti costosi."
  },
  {
    "question": "Posso forzare la carica di un orologio manuale?",
    "answer": "Gli orologi manuali moderni hanno un arresto netto a carica completa. Non forzare la corona quando senti resistenza."
  },
  {
    "question": "L'intervallo cambia in base all'uso quotidiano o occasionale?",
    "answer": "Sì, un orologio usato ogni giorno si usura di più e richiede una revisione ogni 3 anni; con uso occasionale può arrivare a 5 anni."
  }
];
const howTo = [
  {
    "name": "Aggiungi orologio",
    "text": "Inserisci nome, tipo di movimento e data dell'ultima revisione."
  },
  {
    "name": "Controlla il pannello",
    "text": "Ogni orologio mostra una barra di avanzamento e un codice colore."
  },
  {
    "name": "Aggiorna dopo la revisione",
    "text": "Dopo averlo portato dall'orologiaio, aggiorna la data per riavviare il ciclo."
  }
];

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
