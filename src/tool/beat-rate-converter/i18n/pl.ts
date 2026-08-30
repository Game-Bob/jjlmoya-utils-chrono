import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'konwerter-czestotliwosci-uderzen',
  title: 'Konwerter Częstotliwości Uderzeń: VPH na Hz i s/d',
  description: 'Przelicz drgania na godzinę (VPH) na Herz, tiknięcia na sekundę i oblicz dzienny wpływ pojedynczego utraconego tiknięcia. Działa z kalibrami ETA, Sellita, Miyota, Seiko, Rolex, Omega i Zenith.',
  ui: {
    title: 'Konwerter Częstotliwości Uderzeń',
    vphLabel: 'Mechanizm',
    selectMovement: 'Wybierz mechanizm',
    customMovement: 'Niestandardowy',
    customVph: 'Drgania na godzinę',
    resultsTitle: 'Obliczenia',
    frequency: 'Częstotliwość',
    ticksPerSec: 'Tiknięcia na sekundę',
    lostTickImpact: 'Jeśli straci 1 tiknięcie na godzinę',
    lostTickExplainer: 'Jedno pominięte tiknięcie na godzinę oznacza około 3 sekund straty na dzień przy 28.800 VPH. Niższe częstotliwości uderzeń zwiększają wpływ.',
    step1: 'Wybierz swój mechanizm lub wprowadź niestandardowe VPH.',
    step2: 'Odczytaj częstotliwość w Hz, tiknięcia na sekundę i wpływ utraconego tiknięcia.',
    tipTitle: 'Wskazówka',
    tipContent: 'Wyższe częstotliwości uderzeń (36.000 VPH) zapewniają płynniejszy ruch wskazówki sekundowej i lepszą precyzję, ale także większe zużycie wychwytu.',
  },
  seo: [
    { type: 'title', text: 'Konwerter Częstotliwości Uderzeń - VPH na Hz i sekundy na dzień', level: 2 },
    { type: 'paragraph', html: 'Każdy zegarek mechaniczny bije z określoną częstotliwością - liczbą drgań, jakie jego koło balansowe wykonuje na godzinę. Ta liczba decyduje o tym, jak płynnie porusza się wskazówka sekundowa i jak precyzyjny może być zegarek. Ten konwerter przelicza <strong>VPH na Hz i tiknięcia na sekundę</strong> oraz pokazuje rzeczywisty wpływ pojedynczego utraconego tiknięcia.' },
    { type: 'title', text: 'Co to jest częstotliwość uderzeń?', level: 3 },
    { type: 'paragraph', html: 'Częstotliwość uderzeń, mierzona w drganiach na godzinę (vph), to częstotliwość, z jaką oscyluje koło balansowe zegarka. Typowa wartość to 28.800 VPH - czyli 4 Hz, albo 8 tiknięć na sekundę. Wyższe częstotliwości, jak 36.000 VPH (5 Hz), zapewniają płynniejszy ruch i mogą teoretycznie poprawić dokładność poprzez zmniejszenie wpływu błędów pozycyjnych.' },
    { type: 'title', text: 'Dlaczego utracone tiknięcie ma znaczenie', level: 3 },
    { type: 'paragraph', html: 'Jeśli wychwyt zegarka nie dostarczy jednego tiknięcia z powodu tarcia, magnetyzmu lub zużycia, to utracone tiknięcie przekłada się bezpośrednio na stracony czas. Przy 28.800 VPH pojedyncze pominięte tiknięcie na godzinę sumuje się do okoła <strong>3 sekund na dzień</strong>. Przy 18.000 VPH ten sam błąd kosztuje prawie 5 sekund na dzień. To narzędzie pomaga zrozumieć matematykę stojącą za regulacją.' },
    { type: 'title', text: 'Typowe częstotliwości uderzeń', level: 3 },
    { type: 'paragraph', html: 'Vintage\'owe zegarki kieszonkowe i wczesne automaty często działają z częstotliwością 18.000 VPH (2,5 Hz). Wiele kalibrów Seiko i Miyota używa 21.600 VPH (3 Hz). Nowoczesnym standardem jest 28.800 VPH (4 Hz), stosowany przez ETA, Sellita, Rolex i innych. Wysokoczęstotliwościowe mechanizmy, takie jak Zenith El Primero, działają z częstotliwością 36.000 VPH (5 Hz) dla większej precyzji.' },
  ],
  faq: [
    {
      question: 'Jak przeliczyć VPH na Hz?',
      answer: 'Podziel VPH przez 7.200. Zegarek bijący z częstotliwością 28.800 VPH działa z częstotliwością 4 Hz (28.800 ÷ 7.200 = 4). Dzielenie przez 7.200 uwzględnia fakt, że jedna pełna oscylacja zawiera dwa drgania, a w godzinie jest 3.600 sekund.',
    },
    {
      question: 'Co wyższa częstotliwość uderzeń oznacza dla dokładności?',
      answer: 'Wyższe częstotliwości uderzeń zazwyczaj pozwalają na większą precyzję teoretyczną, ponieważ koło balansowe jest mniej podatne na zakłócenia pozycyjne. Generują one jednak więcej tarcia i zużycia na kamieniach paletowych i kole wychwytowym, co wymaga lepszego smarowania i częstszej konserwacji.',
    },
    {
      question: 'Jak utracone tiknięcie wpływa na codzienną dokładność?',
      answer: 'Jedno pominięte tiknięcie na godzinę przekłada się na 24 utracone tiknięcia na dzień. Stracony czas zależy od częstotliwości uderzeń: podziel 86.400 przez swoje VPH. Przy 28.800 VPH to 3 sekundy na dzień. Przy 18.000 VPH to 4,8 sekundy na dzień.',
    },
    {
      question: 'Czy zegarek może odzyskać utracone tiknięcie?',
      answer: 'Nie. Gdy tiknięcie zostanie pominięte, czas jest bezpowrotnie stracony. Zegarek nie "nadrabia" tego. Dlatego stan wychwytu - czyste kamienie paletowe, właściwe smarowanie i prawidłowy beat error - bezpośrednio wpływa na dzienny chód.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz swój kaliber',
      text: 'Wybierz swój mechanizm z rozwijanej listy. Każde ustawienie wstępne zawiera prawidłową wartość VPH dla danego kalibru.',
    },
    {
      name: 'Odczytaj wyniki',
      text: 'Karta pokazuje częstotliwość w Hz, tiknięcia na sekundę i dzienny wpływ pojedynczego utraconego tiknięcia.',
    },
    {
      name: 'Wypróbuj niestandardowe VPH',
      text: 'Wybierz "Niestandardowy", aby wprowadzić dowolną wartość VPH dla vintage\'owych lub nietypowych mechanizmów.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak przeliczyć VPH na Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Podziel VPH przez 7.200. Zegarek bijący z częstotliwością 28.800 VPH działa z częstotliwością 4 Hz. Dzielenie przez 7.200 uwzględnia, że jedna oscylacja zawiera dwa drgania i 3.600 sekund na godzinę.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co wyższa częstotliwość uderzeń oznacza dla dokładności?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wyższe częstotliwości uderzeń pozwalają na większą precyzję teoretyczną, ponieważ koło balansowe jest mniej podatne na zakłócenia pozycyjne. Generują one jednak więcej tarcia i zużycia.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak utracone tiknięcie wpływa na codzienną dokładność?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jedno pominięte tiknięcie na godzinę przekłada się na 24 utracone tiknięcia na dzień. Podziel 86.400 przez swoje VPH, aby znaleźć utracone sekundy na dzień.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy zegarek może odzyskać utracone tiknięcie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie. Gdy tiknięcie zostanie pominięte, czas jest bezpowrotnie stracony. Zegarek nie nadrabia.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Konwerter Częstotliwości Uderzeń',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak przeliczyć VPH na Hz i obliczyć wpływ utraconego tiknięcia',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz swój kaliber',
          'text': 'Wybierz swój mechanizm z rozwijanej listy. Każde ustawienie wstępne zawiera prawidłową wartość VPH dla danego kalibru.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Odczytaj wyniki',
          'text': 'Karta pokazuje częstotliwość w Hz, tiknięcia na sekundę i dzienny wpływ pojedynczego utraconego tiknięcia.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wypróbuj niestandardowe VPH',
          'text': 'Wybierz Niestandardowy, aby wprowadzić dowolną wartość VPH dla vintage\'owych lub nietypowych mechanizmów.',
        },
      ],
    },
  ],
};
