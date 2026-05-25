import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'rejestr-serwisowania-zegarkow',
  title: 'Licznik Przeglądów i Serwisowania Zegarków',
  description: 'Monitoruj i zarządzaj terminami serwisowania swojej kolekcji zegarków. Sprawdź szybko, kiedy dany zegarek wymaga przeglądu.',
  ui: {
    title: 'Serwis Zegarków',
    addWatch: 'Dodaj zegarek',
    editWatch: 'Edytuj zegarek',
    cancel: 'Anuluj',
    save: 'Zapisz',
    deleteWatch: 'Usuń',
    confirmDelete: 'Usunąć ten zegarek z kolekcji?',
    emptyTitle: 'Twoja kolekcja jest pusta',
    emptyDesc: 'Zapisuj terminy przeglądów i konserwacji swoich zegarków, aby zapobiec awariom mechanizmu.',
    emptyAction: 'Dodaj swój pierwszy zegarek',
    healthy: 'aktualny',
    due: 'nadchodzi termin',
    overdue: 'wymaga serwisu',
    nameLabel: 'Nazwa zegarka',
    namePlaceholder: 'np. Rolex Submariner',
    movementLabel: 'Typ mechanizmu',
    movementAuto: 'Automatyczny',
    movementManual: 'Manualny',
    movementQuartz: 'Kwarcowy',
    movementKinetic: 'Kinetyczny',
    dateLabel: 'Data ostatniego serwisu',
    neverServiced: 'Nowy lub brak serwisu',
    lastServiceLabel: 'Ostatni serwis',
    nextServiceLabel: 'Kolejny serwis',
    serviced: 'Serwisowany',
    newWatch: 'Nowy',
    years: 'lat',
    collectionHealth: 'Stan kolekcji',
  },
  seo: [
    { type: 'title', text: 'Rejestr Serwisowania Zegarków: Dbaj o mechanizm', level: 2 },
  ],
  faq: [
    {
      question: 'Jak często należy serwisować zegarek automatyczny?',
      answer: 'Zaleca się serwisowanie mechanizmu co 3 do 5 lat. W praktyce spora część zegarków działa dobrze przez 5-7 lat, zanim oleje zaczną wysychać.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Dodaj zegarek', text: 'Wpisz nazwę zegarka, typ napędu oraz datę ostatniej konserwacji.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak często należy serwisować zegarek automatyczny?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zaleca się serwisowanie mechanizmu co 3 do 5 lat. W praktyce spora część zegarków działa dobrze przez 5-7 lat.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Licznik Przeglądów i Serwisowania Zegarków',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Licznik Przeglądów i Serwisowania Zegarków',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Dodaj zegarek',
          'text': 'Wpisz nazwę zegarka, typ napędu oraz datę ostatniej konserwacji.'
        }
      ]
    }
  ]
};
