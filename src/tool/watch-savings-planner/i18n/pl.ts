import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'plan-oszczedzania-na-zegarek',
  title: 'Planer Oszczedzania na Zegarek',
  description: 'Ustawiaj i śledź cele oszczędnościowe na zakup następnego zegarka. Wizualizuj postępy, obliczaj harmonogramy i pozostań zmotywowany.',
  ui: {
    title: 'Ustawienia Celu Oszczednosciowego',
    addGoalTitle: 'Nowy Cel Oszczednosciowy',
    goalNameLabel: 'Zegarek',
    goalNamePlaceholder: 'np. Rolex Submariner',
    targetPriceLabel: 'Cena Docelowa',
    currentSavingsLabel: 'Zaoszczedzone',
    monthlyLabel: 'Miesiecznie',
    addButton: 'Dodaj Cel',
    cancelButton: 'Anuluj',
    goalsEmpty: 'Brak celow oszczednosciowych',
    goalsEmptySub: 'Ustaw pierwszy cel na zegarek i zaczynaj oszczedzac!',
    monthsToGoal: 'Czas do celu',
    yearsToGoal: 'Lata do celu',
    month: 'mies.',
    months: 'mies.',
    year: 'rok',
    totalSaved: 'Lacznie Zaoszczedzone',
    totalGoals: 'Cele',
    achieved: 'Osiagniety',
    percentLabel: 'Zaoszczedzone',
    deleteGoal: 'Usun',
    editGoal: 'Edytuj',
    saveGoal: 'Zapisz',
    currency: 'PLN',
    summaryTitle: 'Podsumowanie',
    goalAchieved: 'Osiagniety!',
    goalProgress: 'Postep',
    congratsTitle: 'Gratulacje!',
    congratsDesc: 'Osiagnales swoj cel oszczednosciowy!',
    monthlyContribution: 'Miesiecznie',
    targetDate: 'Data Docelowa',
    adjustMonthly: 'Dostosuj miesieczna',
  },
  seo: [
    { type: 'title', text: 'Planer Oszczedzania na Zegarek - Sledz Naszepny Zakup Zegarka', level: 2 },
    { type: 'paragraph', html: 'Oszczedzanie na zegarek to podroz. Niezaleznie od tego, czy jest to <strong>vintage Speedmaster</strong>, <strong>Submariner</strong> czy <strong>Grand Seiko</strong>, jasny plan oszczednosciowy zmienia marzenie w harmonogram. To narzedzie pomoze Ci wizualizowac postepy, dostosowywac miesieczne wplaty i dokladnie sprawdzic, kiedy wyjdziesz z butiku ze swoim swietym graalem.' },
    { type: 'title', text: 'Dlaczego plan oszczedzania jest wazny dla kolekcjonerow zegarkow', level: 3 },
    { type: 'paragraph', html: 'Kolekcjonowanie zegarkow to gra cierpliwosci. Ceny poszukiwanych modeli stale rosna, a impulsywne zakupy czesto prowadza do zalowania. Ustrukturyzowane podejscie do oszczedzania utrzymuje dyscypline, zapobiega naprezeniu finansowemu i sprawia, ze koncowy zakup wydaje sie zasluzony. Co wiecej, sledzenie postepow dzien po dniu buduje oczekiwanie i sprawia, ze rozpakowanie jest jeszcze slodsze.' },
    { type: 'title', text: 'Jak wyznaczac realistyczne cele oszczednosciowe na zegarek', level: 3 },
    { type: 'paragraph', html: 'Zaczynaj od ceny calkowitej lacznie z podatkami i wysylka. Nastepnie podziel ja przez kwote, ktora mozesz wygodnie odlozyc kazdego miesiaca. Dobra zasada jest przeznaczanie nie wiecej niz <strong>10-15% dochodow rozporzadzalnych</strong> na oszczedzanie na zegarek. Jesli harmonogram wydaje sie zbyt dlugi, rozwaz podzielenie go na mniejsze kamienie milowe - lub poszukaj bardziej przystepnych alternatyw w tej samej rodzinie stylow.' },
    { type: 'title', text: 'Psychologia sledzenia celow', level: 3 },
    { type: 'paragraph', html: 'Wizualne sledzenie postepow wyzwala uwalnianie dopaminy, tego samego neuroprzekaznika, ktory sprawia, ze kolekcjonowanie jest tak satysfakcjonujace. Za kazdym razem, gdy rejestrujesz nowa wplate i widzisz wypelniajacy sie pierscien postepu, wzmacniasz nawyk. Dlatego male, regularne oszczednosci czesto dzialaja lepiej niz sporadyczne duze wplaty - sam rytual staje sie czescia doswiadczenia kolekcjonowania.' },
  ],
  faq: [
    {
      question: 'Ile powinienem oszczedzac kazdego miesiaca na zegarek?',
      answer: 'Celuj w 10-15% swoich miesiecznych dochodow rozporzadzalnych. Kluczem jest konsekwencja - nawet 100 $ miesiecznie daje 1.200 $ rocznie. Dostosuj kwote do swojego harmonogramu: krotsze cele wymagaja wiekszych miesiecznych wplat.',
    },
    {
      question: 'Czy powinienem oszczedzac na jeden zegarek naraz czy na kilka?',
      answer: 'Jeden na raz jest zazwyczaj bardziej skuteczny. Skupienie buduje ped. Po osiagnieciu pierwszego celu, pewnosc siebie i dyscyplina przenosza sie na nastepny. To powiedziawszy, ten planer obsluguje wiele celow, dzieki czemu mozesz porownywac harmonogramy.',
    },
    {
      question: 'Co jesli cena zegarka wzrosnie podczas oszczedzania?',
      answer: 'Dobre pytanie. Sprawdzaj biezaca cene rynkowa co kilka miesiecy i aktualizuj swoj cel. Jesli ceny szybno rowna, rozwaz zwiekszenie miesiecznej kwoty lub skrocenie harmonogramu, aby zablokowac biezaca cene.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ustaw cel',
      text: 'Wprowadz nazwe zegarka i jego calkowita cene, lacznie z podatkami i wysylka.',
    },
    {
      name: 'Sledz oszczednosci',
      text: 'Zanotuj, ile juz zaoszczedziles i ile mozesz odlozyc kazdego miesiaca.',
    },
    {
      name: 'Monitoruj postepy',
      text: 'Obserwuj, jak pierscien postepu wypelnia sie podczas aktualizowania oszczednosci. W kazdej chwili mozesz dostosowac kwoty miesieczne.',
    },
    {
      name: 'Swietuj',
      text: 'Gdy pierscien osiagnie 100%, osiagnales swoj cel. Czas kupic ten zegarek!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ile powinienem oszczedzac kazdego miesiaca na zegarek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Celuj w 10-15% swoich miesiecznych dochodow rozporzadzalnych. Kluczem jest konsekwencja - nawet 100 $ miesiecznie daje 1.200 $ rocznie.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy powinienem oszczedzac na jeden zegarek naraz czy na kilka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jeden na raz jest zazwyczaj bardziej skuteczny. Skupienie buduje ped. Po osiagnieciu pierwszego celu, przenies te dyscypline na nastepny.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co jesli cena zegarka wzrosnie podczas oszczedzania?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sprawdzaj biezaca cene rynkowa co kilka miesiecy i aktualizuj swoj cel. Rozwaz zwiekszenie miesiecznej kwoty, jesli ceny szybno rowna.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planer Oszczedzania na Zegarek',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak oszczedzac na zakup zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ustaw cel',
          'text': 'Wprowadz nazwe zegarka i jego calkowita cene, lacznie z podatkami i wysylka.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sledz oszczednosci',
          'text': 'Zanotuj, ile juz zaoszczedziles i ile mozesz odlozyc kazdego miesiaca.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitoruj postepy',
          'text': 'Obserwuj, jak pierscien postepu wypelnia sie podczas aktualizowania oszczednosci.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Swietuj',
          'text': 'Gdy pierscien osiagnie 100%, osiagnales swoj cel. Czas kupic ten zegarek!',
        },
      ],
    },
  ],
};
