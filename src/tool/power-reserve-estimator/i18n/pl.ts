import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'szacowanie-rezerwy-chodu',
  title: 'Szacowanie rezerwy chodu zegarka',
  description: 'Oszacuj pozostałą rezerwę chodu swojego zegarka na podstawie obrotów koronki i godzin noszenia. Działa z popularnymi kalibrami ETA, Sellita, Miyota, Seiko i Rolex.',
  ui: {
    title: 'Szacowanie rezerwy chodu',
    movementLabel: 'Mechanizm',
    selectMovement: 'Wybierz mechanizm',
    customMovement: 'Własny',
    turnsLabel: 'Obroty koronki',
    hoursLabel: 'Czas noszenia',
    turnsInput: 'Obr.',
    hoursInput: 'Godz.',
    activityLabel: 'Aktywność',
    activityLow: 'Biurko',
    activityMedium: 'Spacer',
    activityHigh: 'Aktywnie',
    calculate: 'Oblicz',
    reserveRemaining: 'Pozostała rezerwa',
    hoursRemaining: 'Pozostało',
    chargePercent: 'Naładowanie',
    resultLabel: 'Szacowana rezerwa',
    stopTimeLabel: 'Działa do',
    powerReserveHours: 'Rezerwa (h)',
    fullWindTurns: 'Obr. do pełna',
    step1: 'Wybierz swój mechanizm z rozwijanej listy.',
    step2: 'Podaj liczbę obrotów koronki i godziny noszenia.',
    step3: 'Naciśnij Oblicz, aby sprawdzić rezerwę chodu.',
    tipTitle: 'Wskazówka',
    tipContent: 'Mechanizmy ręczne ładują się tylko podczas kręcenia koronką. Mechanizmy automatyczne ładują się również podczas noszenia.',
  },
  seo: [
    { type: 'title', text: 'Szacowanie rezerwy chodu zegarka - ile energii pozostało w Twoim mechanizmie?', level: 2 },
    { type: 'paragraph', html: 'Zastanawiasz się, ile energii zostało w Twoim zegarku mechanicznym? Niezależnie od tego, czy nakręciłeś koronkę dziś rano, czy nosisz go cały dzień, ten kalkulator poda przybliżony poziom naładowania i pozostały czas dla popularnych kalibrów takich jak <strong>ETA, Sellita, Miyota, Seiko i Rolex</strong>.' },
    { type: 'title', text: 'Jak działa rezerwa chodu w zegarku mechanicznym', level: 3 },
    { type: 'paragraph', html: 'Rezerwa chodu to ilość energii zgromadzonej w sprężynie napędowej. Kręcąc koronką, napinasz sprężynę, magazynując energię potencjalną. Automatyczny rotor również napina sprężynę, gdy nosisz zegarek. Energia uwalnia się w stałym tempie - zazwyczaj 2-3% na godzinę - aż do zatrzymania zegarka.' },
    { type: 'title', text: 'Nakręcanie koronką a ładowanie rotorem', level: 3 },
    { type: 'paragraph', html: 'Ręczne nakręcanie koronką to najefektywniejszy sposób ładowania zegarka - każdy pełny obrót dodaje przewidywalną ilość energii, zwykle około 2,5% całkowitej rezerwy. Noszenie zegarka ładuje wolniej i zależy od poziomu aktywności: pracownik biurowy może ładować 4-6% na godzinę, a osoba aktywna 8-10%. Ten kalkulator używa konserwatywnej średniej.' },
    { type: 'title', text: 'Dlaczego szacowanie rezerwy chodu jest ważne', level: 3 },
    { type: 'paragraph', html: 'Znajomość poziomu naładowania zegarka pomaga uniknąć niespodziewanego zatrzymania. Jeśli zegarek staje w nocy, może wymagać dłuższego nakręcania przed snem lub nie jest noszony wystarczająco długo. Użyj tego narzędzia, aby zrozumieć swoje nawyki ładowania i utrzymać automat w ruchu.' },
  ],
  faq: [
    {
      question: 'Ile ładuje jeden obrót koronki?',
      answer: 'To zależy od mechanizmu. Większość automatycznych kalibrów osiąga pełny naciąg po 30-40 obrotach, więc każdy obrót dodaje około 2,5-3,3% całkowitej rezerwy. Mechanizmy ręczne, takie jak Unitas 6498, również potrzebują około 35 obrotów do pełnego naciągu.',
    },
    {
      question: 'Czy noszenie zegarka ładuje go tak samo jak nakręcanie?',
      answer: 'Noszenie ładuje wolniej i bardziej zmiennie. Przy pracy biurowej możesz ładować 4-6% na godzinę przez rotor. Podczas aktywnego ruchu (spacer, sport) może to osiągnąć 8-10% na godzinę. Ręczne nakręcanie jest szybsze i bardziej przewidywalne.',
    },
    {
      question: 'Ile rezerwy traci zegarek na godzinę?',
      answer: 'Ubytek jest stały: podziel 100 przez rezerwę chodu w godzinach. Mechanizm 38-godzinny traci około 2,6% na godzinę, 42-godzinny 2,4%, a 70-godzinny około 1,4% na godzinę.',
    },
    {
      question: 'Czy można przegiąć i zepsuć zegarek nadmiernym nakręcaniem?',
      answer: 'Nowoczesne automatyczne mechanizmy mają sprzęgło poślizgowe, które zapobiega przegięciu. Po pełnym naciągnięciu sprężyny dodatkowe obroty po prostu się ślizgają. Mechanizmy ręczne również mają mechanizm blokady, choć wymuszenie go może uszkodzić sprężynę.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz mechanizm',
      text: 'Wybierz kaliber swojego zegarka z rozwijanej listy. Jeśli nie ma go na liście, wybierz "Własny" i podaj jego rezerwę chodu oraz liczbę obrotów do pełna.',
    },
    {
      name: 'Wprowadź dane',
      text: 'Podaj, ile obrotów koronki wykonałeś lub ile godzin nosiłeś zegarek dzisiaj. Możesz wypełnić oba pola, aby uzyskać łączny szacunek.',
    },
    {
      name: 'Oblicz',
      text: 'Naciśnij przycisk Oblicz. Wynik pokaże szacowany procent naładowania i pozostałe godziny rezerwy chodu.',
    },
    {
      name: 'Dostosuj nawyki',
      text: 'Wykorzystaj wyniki, aby zdecydować, czy potrzebujesz dłuższego nakręcania przed snem lub więcej czasu noszenia w ciągu dnia, aby utrzymać zegarek w ruchu.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ile ładuje jeden obrót koronki?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'To zależy od mechanizmu. Większość automatycznych kalibrów osiąga pełny naciąg po 30-40 obrotach, więc każdy obrót dodaje około 2,5-3,3% całkowitej rezerwy. Mechanizmy ręczne, takie jak Unitas 6498, również potrzebują około 35 obrotów do pełnego naciągu.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy noszenie zegarka ładuje go tak samo jak nakręcanie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Noszenie ładuje wolniej i bardziej zmiennie. Przy pracy biurowej możesz ładować 4-6% na godzinę przez rotor. Podczas aktywnego ruchu może to osiągnąć 8-10% na godzinę. Ręczne nakręcanie jest szybsze i bardziej przewidywalne.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ile rezerwy traci zegarek na godzinę?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ubytek jest stały: podziel 100 przez rezerwę chodu w godzinach. Mechanizm 38-godzinny traci około 2,6% na godzinę, 42-godzinny 2,4%, a 70-godzinny około 1,4% na godzinę.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy można przegiąć i zepsuć zegarek nadmiernym nakręcaniem?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nowoczesne automatyczne mechanizmy mają sprzęgło poślizgowe, które zapobiega przegięciu. Po pełnym naciągnięciu sprężyny dodatkowe obroty po prostu się ślizgają.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Szacowanie rezerwy chodu zegarka',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak oszacować rezerwę chodu zegarka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz mechanizm',
          'text': 'Wybierz kaliber swojego zegarka z rozwijanej listy. Jeśli nie ma go na liście, wybierz "Własny" i podaj jego rezerwę chodu oraz liczbę obrotów do pełna.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wprowadź dane',
          'text': 'Podaj, ile obrotów koronki wykonałeś lub ile godzin nosiłeś zegarek dzisiaj. Możesz wypełnić oba pola, aby uzyskać łączny szacunek.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Oblicz',
          'text': 'Naciśnij przycisk Oblicz. Wynik pokaże szacowany procent naładowania i pozostałe godziny rezerwy chodu.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Dostosuj nawyki',
          'text': 'Wykorzystaj wyniki, aby zdecydować, czy potrzebujesz dłuższego nakręcania przed snem lub więcej czasu noszenia w ciągu dnia, aby utrzymać zegarek w ruchu.',
        },
      ],
    },
  ],
};
