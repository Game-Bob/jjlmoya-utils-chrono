import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'konwerter-czestotliwosci-uderzen',
  title: 'Konwerter Cz\u0119stotliwo\u015bci Uderze\u0144 \u2014 VPH na Hz i s/d',
  description: 'Przelicz drgania na godzin\u0119 (VPH) na Herz, tikni\u0119cia na sekund\u0119 i oblicz dzienny wp\u0142yw pojedynczego utraconego tikni\u0119cia. Dzia\u0142a z kalibrami ETA, Sellita, Miyota, Seiko, Rolex, Omega i Zenith.',
  ui: {
    title: 'Konwerter Cz\u0119stotliwo\u015bci Uderze\u0144',
    vphLabel: 'Mechanizm',
    selectMovement: 'Wybierz mechanizm',
    customMovement: 'Niestandardowy',
    customVph: 'Drgania na godzin\u0119',
    resultsTitle: 'Obliczenia',
    frequency: 'Cz\u0119stotliwo\u015b\u0107',
    ticksPerSec: 'Tikni\u0119cia na sekund\u0119',
    lostTickImpact: 'Je\u015bli straci 1 tikni\u0119cie na godzin\u0119',
    lostTickExplainer: 'Jedno pomini\u0119te tikni\u0119cie na godzin\u0119 oznacza oko\u0142o 3 sekund straty na dzie\u0144 przy 28.800 VPH. Ni\u017csze cz\u0119stotliwo\u015bci uderze\u0144 zwi\u0119kszaj\u0105 wp\u0142yw.',
    step1: 'Wybierz sw\u00f3j mechanizm lub wprowad\u017a niestandardowe VPH.',
    step2: 'Odczytaj cz\u0119stotliwo\u015b\u0107 w Hz, tikni\u0119cia na sekund\u0119 i wp\u0142yw utraconego tikni\u0119cia.',
    tipTitle: 'Wskaz\u00f3wka',
    tipContent: 'Wy\u017csze cz\u0119stotliwo\u015bci uderze\u0144 (36.000 VPH) zapewniaj\u0105 p\u0142ynniejszy ruch wskaz\u00f3wki sekundowej i lepsz\u0105 precyzj\u0119, ale tak\u017ce wi\u0119ksze zu\u017cycie wychwytu.',
  },
  seo: [
    { type: 'title', text: 'Konwerter Cz\u0119stotliwo\u015bci Uderze\u0144 \u2014 VPH na Hz i sekundy na dzie\u0144', level: 2 },
    { type: 'paragraph', html: 'Ka\u017cdy zegarek mechaniczny bije z okre\u015blon\u0105 cz\u0119stotliwo\u015bci\u0105 \u2014 liczb\u0105 drga\u0144, jakie jego ko\u0142o balansowe wykonuje na godzin\u0119. Ta liczba decyduje o tym, jak p\u0142ynnie porusza si\u0119 wskaz\u00f3wka sekundowa i jak precyzyjny mo\u017ce by\u0107 zegarek. Ten konwerter przelicza <strong>VPH na Hz i tikni\u0119cia na sekund\u0119</strong> oraz pokazuje rzeczywisty wp\u0142yw pojedynczego utraconego tikni\u0119cia.' },
    { type: 'title', text: 'Co to jest cz\u0119stotliwo\u015b\u0107 uderze\u0144?', level: 3 },
    { type: 'paragraph', html: 'Cz\u0119stotliwo\u015b\u0107 uderze\u0144, mierzona w drganiach na godzin\u0119 (vph), to cz\u0119stotliwo\u015b\u0107, z jak\u0105 oscyluje ko\u0142o balansowe zegarka. Typowa warto\u015b\u0107 to 28.800 VPH \u2014 czyli 4 Hz, albo 8 tikni\u0119\u0107 na sekund\u0119. Wy\u017csze cz\u0119stotliwo\u015bci, jak 36.000 VPH (5 Hz), zapewniaj\u0105 p\u0142ynniejszy ruch i mog\u0105 teoretycznie poprawi\u0107 dok\u0142adno\u015b\u0107 poprzez zmniejszenie wp\u0142ywu b\u0142\u0119d\u00f3w pozycyjnych.' },
    { type: 'title', text: 'Dlaczego utracone tikni\u0119cie ma znaczenie', level: 3 },
    { type: 'paragraph', html: 'Je\u015bli wychwyt zegarka nie dostarczy jednego tikni\u0119cia z powodu tarcia, magnetyzmu lub zu\u017cycia, to utracone tikni\u0119cie przek\u0142ada si\u0119 bezpo\u015brednio na stracony czas. Przy 28.800 VPH pojedyncze pomini\u0119te tikni\u0119cie na godzin\u0119 sumuje si\u0119 do oko\u0142a <strong>3 sekund na dzie\u0144</strong>. Przy 18.000 VPH ten sam b\u0142\u0105d kosztuje prawie 5 sekund na dzie\u0144. To narz\u0119dzie pomaga zrozumie\u0107 matematyk\u0119 stoj\u0105c\u0105 za regulacj\u0105.' },
    { type: 'title', text: 'Typowe cz\u0119stotliwo\u015bci uderze\u0144', level: 3 },
    { type: 'paragraph', html: 'Vintage\u2019owe zegarki kieszonkowe i wczesne automaty cz\u0119sto dzia\u0142aj\u0105 z cz\u0119stotliwo\u015bci\u0105 18.000 VPH (2,5 Hz). Wiele kalibr\u00f3w Seiko i Miyota u\u017cywa 21.600 VPH (3 Hz). Nowoczesnym standardem jest 28.800 VPH (4 Hz), stosowany przez ETA, Sellita, Rolex i innych. Wysokocz\u0119stotliwo\u015bciowe mechanizmy, takie jak Zenith El Primero, dzia\u0142aj\u0105 z cz\u0119stotliwo\u015bci\u0105 36.000 VPH (5 Hz) dla wi\u0119kszej precyzji.' },
  ],
  faq: [
    {
      question: 'Jak przeliczy\u0107 VPH na Hz?',
      answer: 'Podziel VPH przez 7.200. Zegarek bij\u0105cy z cz\u0119stotliwo\u015bci\u0105 28.800 VPH dzia\u0142a z cz\u0119stotliwo\u015bci\u0105 4 Hz (28.800 \u00f7 7.200 = 4). Dzielenie przez 7.200 uwzgl\u0119dnia fakt, \u017ce jedna pe\u0142na oscylacja zawiera dwa drgania, a w godzinie jest 3.600 sekund.',
    },
    {
      question: 'Co wy\u017csza cz\u0119stotliwo\u015b\u0107 uderze\u0144 oznacza dla dok\u0142adno\u015bci?',
      answer: 'Wy\u017csze cz\u0119stotliwo\u015bci uderze\u0144 zazwyczaj pozwalaj\u0105 na wi\u0119ksz\u0105 precyzj\u0119 teoretyczn\u0105, poniewa\u017c ko\u0142o balansowe jest mniej podatne na zak\u0142\u00f3cenia pozycyjne. Generuj\u0105 one jednak wi\u0119cej tarcia i zu\u017cycia na kamieniach paletowych i kole wychwytowym, co wymaga lepszego smarowania i cz\u0119stszej konserwacji.',
    },
    {
      question: 'Jak utracone tikni\u0119cie wp\u0142ywa na codzienn\u0105 dok\u0142adno\u015b\u0107?',
      answer: 'Jedno pomini\u0119te tikni\u0119cie na godzin\u0119 przek\u0142ada si\u0119 na 24 utracone tikni\u0119cia na dzie\u0144. Stracony czas zale\u017cy od cz\u0119stotliwo\u015bci uderze\u0144: podziel 86.400 przez swoje VPH. Przy 28.800 VPH to 3 sekundy na dzie\u0144. Przy 18.000 VPH to 4,8 sekundy na dzie\u0144.',
    },
    {
      question: 'Czy zegarek mo\u017ce odzyska\u0107 utracone tikni\u0119cie?',
      answer: 'Nie. Gdy tikni\u0119cie zostanie pomini\u0119te, czas jest bezpowrotnie stracony. Zegarek nie "nadrabia" tego. Dlatego stan wychwytu \u2014 czyste kamienie paletowe, w\u0142a\u015bciwe smarowanie i prawid\u0142owy beat error \u2014 bezpo\u015brednio wp\u0142ywa na dzienny ch\u00f3d.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wybierz sw\u00f3j kaliber',
      text: 'Wybierz sw\u00f3j mechanizm z rozwijanej listy. Ka\u017cde ustawienie wst\u0119pne zawiera prawid\u0142ow\u0105 warto\u015b\u0107 VPH dla danego kalibru.',
    },
    {
      name: 'Odczytaj wyniki',
      text: 'Karta pokazuje cz\u0119stotliwo\u015b\u0107 w Hz, tikni\u0119cia na sekund\u0119 i dzienny wp\u0142yw pojedynczego utraconego tikni\u0119cia.',
    },
    {
      name: 'Wypr\u00f3buj niestandardowe VPH',
      text: 'Wybierz "Niestandardowy", aby wprowadzi\u0107 dowoln\u0105 warto\u015b\u0107 VPH dla vintage\u2019owych lub nietypowych mechanizm\u00f3w.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Jak przeliczy\u0107 VPH na Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Podziel VPH przez 7.200. Zegarek bij\u0105cy z cz\u0119stotliwo\u015bci\u0105 28.800 VPH dzia\u0142a z cz\u0119stotliwo\u015bci\u0105 4 Hz. Dzielenie przez 7.200 uwzgl\u0119dnia, \u017ce jedna oscylacja zawiera dwa drgania i 3.600 sekund na godzin\u0119.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Co wy\u017csza cz\u0119stotliwo\u015b\u0107 uderze\u0144 oznacza dla dok\u0142adno\u015bci?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wy\u017csze cz\u0119stotliwo\u015bci uderze\u0144 pozwalaj\u0105 na wi\u0119ksz\u0105 precyzj\u0119 teoretyczn\u0105, poniewa\u017c ko\u0142o balansowe jest mniej podatne na zak\u0142\u00f3cenia pozycyjne. Generuj\u0105 one jednak wi\u0119cej tarcia i zu\u017cycia.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Jak utracone tikni\u0119cie wp\u0142ywa na codzienn\u0105 dok\u0142adno\u015b\u0107?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Jedno pomini\u0119te tikni\u0119cie na godzin\u0119 przek\u0142ada si\u0119 na 24 utracone tikni\u0119cia na dzie\u0144. Podziel 86.400 przez swoje VPH, aby znale\u017a\u0107 utracone sekundy na dzie\u0144.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Czy zegarek mo\u017ce odzyska\u0107 utracone tikni\u0119cie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nie. Gdy tikni\u0119cie zostanie pomini\u0119te, czas jest bezpowrotnie stracony. Zegarek nie nadrabia.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Konwerter Cz\u0119stotliwo\u015bci Uderze\u0144',
      'operatingSystem': 'Wszystkie',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Wymaga HTML5. Wymaga JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Jak przeliczy\u0107 VPH na Hz i obliczy\u0107 wp\u0142yw utraconego tikni\u0119cia',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wybierz sw\u00f3j kaliber',
          'text': 'Wybierz sw\u00f3j mechanizm z rozwijanej listy. Ka\u017cde ustawienie wst\u0119pne zawiera prawid\u0142ow\u0105 warto\u015b\u0107 VPH dla danego kalibru.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Odczytaj wyniki',
          'text': 'Karta pokazuje cz\u0119stotliwo\u015b\u0107 w Hz, tikni\u0119cia na sekund\u0119 i dzienny wp\u0142yw pojedynczego utraconego tikni\u0119cia.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wypr\u00f3buj niestandardowe VPH',
          'text': 'Wybierz Niestandardowy, aby wprowadzi\u0107 dowoln\u0105 warto\u015b\u0107 VPH dla vintage\u2019owych lub nietypowych mechanizm\u00f3w.',
        },
      ],
    },
  ],
};
