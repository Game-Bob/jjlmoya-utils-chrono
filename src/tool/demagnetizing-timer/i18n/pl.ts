import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'timer-odmagnesowywania',
  title: 'Timer do Odmagnesowywania Zegarków',
  description: 'Precyzyjny minutnik z sygnałami dźwiękowymi do domowego odmagnesowywania zegarków. Uzyskaj dokładny czas przytrzymania przycisku dla swojej cewki odmagnesowującej.',
  ui: {
    title: 'Ustawienia Timera',
    durationLabel: 'Czas Impulsu',
    duration1s: '1 Sekunda',
    duration2s: '2 Sekundy',
    duration3s: '3 Sekundy',
    customLabel: 'Własny',
    startButton: 'Start',
    stopButton: 'Stop',
    resetButton: 'Resetuj',
    pressPhase: 'Naciśnij przycisk odmagnesowacza teraz!',
    holdPhase: 'Przytrzymaj przycisk...',
    releasePhase: 'Puść teraz!',
    completePhase: 'Gotowe! Odsuń zegarek.',
    ready: 'Gotowy',
    seconds: 's',
    instructions: 'Jak Odmagnesować',
    step1: 'Umieść zegarek na platformie odmagnesowacza.',
    step2: 'Naciśnij Start i przytrzymaj przycisk odmagnesowacza przez ustawiony czas.',
    step3: 'Puść przycisk i powoli odsuń zegarek.',
    step4: 'Powtórz 2-3 razy, jeśli potrzeba, obracając za każdym razem zegarek.',
    tipTitle: 'Wskazówka',
    tipContent: 'Trzymaj zegarek co najmniej 1 metr od włączonego odmagnesowacza, aby uniknąć ponownego namagnesowania.',
  },
  seo: [
    { type: 'title', text: 'Timer do Odmagnesowywania Zegarków-ecyzyjny Czas Impulsu dla DIY', level: 2 },
    { type: 'paragraph', html: 'Odmagnesowanie zegarka wymaga dokładnego czasu naciśnięcia przycisku. Większość domowych odmagnesowaczy działa poprzez generowanie zanikającego zmiennego pola magnetycznego, a idealny impuls trwa od <strong>1 do 3 sekund</strong>. Zbyt krótko-le nie zneutralizuje namagnesowania; zbyt długo-r-kujesz nasycenie mechanizmu.' },
    { type: 'title', text: 'Dlaczego czas ma znaczenie przy odmagnesowywaniu', level: 3 },
    { type: 'paragraph', html: 'Po naciśnięciu przycisku odmagnesowacza wewnątrz cewki tworzy się zmienne pole magnetyczne. Pole oscyluje z częstotliwością sieciową (50/60 Hz) i zanika po puszczeniu przycisku. Celem jest wystawienie zegarka na to zanikające pole <strong>wystarczająco długo</strong>, aby zrandomizować domeny magnetyczne w sprężynie włosowej i innych stalowych elementach. Impuls od 1 do 3 sekund to optymalny czas dla większości mechanizmów.' },
    { type: 'title', text: 'Jak działa odmagnesowacz', level: 3 },
    { type: 'paragraph', html: 'Odmagnesowacz to w zasadzie cewka z drutu, która po włączeniu wytwarza silne zmienne pole magnetyczne. Umieszczenie namagnesowanego zegarka w tym polu powoduje szybkie odwracanie się jego wewnętrznych domen magnetycznych. Kiedy pole zostaje gwałtownie usunięte (przez puszczenie przycisku), domeny stabilizują się w losowym wzorcu, skutecznie znosząc wypadkowe namagnesowanie.' },
    { type: 'title', text: 'Oznaki, że zegarek wymaga odmagnesowania', level: 3 },
    { type: 'paragraph', html: 'Typowe objawy namagnesowanego zegarka to: spieszenie się o kilka minut dziennie, nieregularna dokładność w zależności od pozycji, słyszalnie szybsze tykanie, a w skrajnych przypadkach całkowite zatrzymanie. Jeśli twój automatyczny zegarek nagle zaczyna spieszyć, często winne jest namagnesowanie, a odmagnesowanie jest prostym rozwiązaniem.' },
  ],
  faq: [
    {
      question: 'Jak długo należy naciskać przycisk odmagnesowacza?',
      answer: '1 do 3 sekund to zalecany czas impulsu. Zacznij od 1 sekundy i zwiększ w razie potrzeby. Zbyt długie impulsy mogą przegrzać cewkę i nie poprawiają wyników.',
    },
    {
      question: 'Czy można odmagnesować zegarek więcej niż raz?',
      answer: 'Tak. Powtórz proces 2 do 3 razy, obracając zegarek za każdym razem o 90 stopni. Zapewnia to ekspozycję wszystkich osi na zmienne pole. Nie ma ryzyka nadmiernego odmagnesowania.',
    },
    {
      question: 'Czy odmagnesowanie działa na zegarkach kwarcowych?',
      answer: 'Zegarki kwarcowe rzadko ulegają namagnesowaniu, ponieważ zawierają niewiele elementów ferromagnetycznych. Jednak silnik krokowy w niektórych mechanizmach kwarcowych może się namagnesować, powodując nieregularny ruch wskazówek. Odmagnesowanie jest bezpieczne dla zegarków kwarcowych.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ustaw czas',
      text: 'Wybierz 1, 2 lub 3 sekundy w zależności od stopnia namagnesowania.',
    },
    {
      name: 'Umieść zegarek',
      text: 'Połóż zegarek płasko na platformie odmagnesowacza, wyśrodkowany nad cewką.',
    },
    {
      name: 'Naciśnij i przytrzymaj',
      text: 'Naciśnij jednocześnie przycisk Start i przycisk odmagnesowacza i przytrzymaj przez ustawiony czas.',
    },
    {
      name: 'Puść i odsuń',
      text: 'Puść przycisk i powoli odsuń zegarek co najmniej 1 metr przed wyłączeniem odmagnesowacza.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak długo należy naciskać przycisk odmagnesowacza?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 do 3 sekund to zalecany czas impulsu. Zacznij od 1 sekundy i zwiększ w razie potrzeby. Zbyt długie impulsy mogą przegrzać cewkę i nie poprawiają wyników.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy można odmagnesować zegarek więcej niż raz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tak. Powtórz proces 2 do 3 razy, obracając zegarek za każdym razem o 90 stopni. Zapewnia to ekspozycję wszystkich osi na zmienne pole. Nie ma ryzyka nadmiernego odmagnesowania.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy odmagnesowanie działa na zegarkach kwarcowych?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Zegarki kwarcowe rzadko ulegają namagnesowaniu, ponieważ zawierają niewiele elementów ferromagnetycznych. Jednak silnik krokowy w niektórych mechanizmach kwarcowych może się namagnesować, powodując nieregularny ruch wskazówek. Odmagnesowanie jest bezpieczne dla zegarków kwarcowych.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Timer do Odmagnesowywania Zegarków',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak odmagnesować zegarek',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ustaw czas',
          'text': 'Wybierz 1, 2 lub 3 sekundy w zależności od stopnia namagnesowania.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Umieść zegarek',
          'text': 'Połóż zegarek płasko na platformie odmagnesowacza, wyśrodkowany nad cewką.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Naciśnij i przytrzymaj',
          'text': 'Naciśnij jednocześnie przycisk Start i przycisk odmagnesowacza i przytrzymaj przez ustawiony czas.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Puść i odsuń',
          'text': 'Puść przycisk i powoli odsuń zegarek co najmniej 1 metr przed wyłączeniem odmagnesowacza.',
        },
      ],
    },
  ],
};
