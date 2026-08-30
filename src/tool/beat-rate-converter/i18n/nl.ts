import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'snelheid-ritme-omzetter',
  title: 'Snelheid van Ritme Omzetter: VPH naar Hz en s/d',
  description: 'Zet trillingen per uur (VPH) om naar Hertz, ticks per seconde en bereken de dagelijkse impact van een enkele gemiste tik. Werkt met ETA-, Sellita-, Miyota-, Seiko-, Rolex-, Omega- en Zenith-kalibers.',
  ui: {
    title: 'Snelheid van Ritme Omzetter',
    vphLabel: 'Uurwerk',
    selectMovement: 'Selecteer uurwerk',
    customMovement: 'Aangepast',
    customVph: 'Trillingen per uur',
    resultsTitle: 'Berekeningen',
    frequency: 'Frequentie',
    ticksPerSec: 'Ticks per seconde',
    lostTickImpact: 'Als het 1 tik per uur verliest',
    lostTickExplainer: 'Eén gemiste tik per uur betekent ongeveer 3 seconden verlies per dag bij 28.800 VPH. Lagere slagsnelheden versterken de impact.',
    step1: 'Selecteer uw uurwerk of voer een aangepaste VPH in.',
    step2: 'Lees de Hz-frequentie, ticks per seconde en de impact van een gemiste tik af.',
    tipTitle: 'Tip',
    tipContent: 'Hogere slagsnelheden (36.000 VPH) zorgen voor een vloeiendere secondewijzer en betere precisie, maar ook voor meer slijtage aan het echappement.',
  },
  seo: [
    { type: 'title', text: 'Snelheid van Ritme Omzetter - VPH naar Hz en seconden per dag', level: 2 },
    { type: 'paragraph', html: 'Elk mechanisch horloge tikt op een specifieke snelheid - het aantal trillingen dat het balanswiel per uur maakt. Dat getal bepaalt hoe vloeiend de secondewijzer beweegt en hoe nauwkeurig het horloge kan zijn. Deze omzetter vertaalt <strong>VPH naar Hz en ticks per seconde</strong> en toont de werkelijke impact van een enkele gemiste tik.' },
    { type: 'title', text: 'Wat is een slagsnelheid?', level: 3 },
    { type: 'paragraph', html: 'De slagsnelheid, gemeten in trillingen per uur (vph), is de frequentie waarmee het balanswiel van een horloge oscilleert. Een gangbare snelheid is 28.800 VPH - dat is 4 Hz, of 8 ticks per seconde. Hogere slagsnelheden zoals 36.000 VPH (5 Hz) zorgen voor een vloeiendere beweging en kunnen theoretisch de nauwkeurigheid verbeteren door het effect van positiefouten te verminderen.' },
    { type: 'title', text: 'Waarom een gemiste tik ertoe doet', level: 3 },
    { type: 'paragraph', html: 'Als het echappement van een horloge een tik mist door wrijving, magnetisme of slijtage, vertaalt die gemiste tik zich direct in verloren tijd. Bij 28.800 VPH loopt een enkele gemiste tik per uur op tot ongeveer <strong>3 seconden per dag</strong>. Bij 18.000 VPH kost dezelfde fout bijna 5 seconden per dag. Deze tool helpt u de wiskunde achter de regulatie te begrijpen.' },
    { type: 'title', text: 'Veelvoorkomende slagsnelheden', level: 3 },
    { type: 'paragraph', html: 'Vintage zakhorloges en vroege automaten lopen vaak op 18.000 VPH (2,5 Hz). Veel Seiko- en Miyota-kalibers gebruiken 21.600 VPH (3 Hz). De moderne standaard is 28.800 VPH (4 Hz), gebruikt door ETA, Sellita, Rolex en anderen. Hoogfrequente uurwerken zoals de Zenith El Primero lopen op 36.000 VPH (5 Hz) voor grotere precisie.' },
  ],
  faq: [
    {
      question: 'Hoe zet je VPH om naar Hz?',
      answer: 'Deel de VPH door 7.200. Een horloge dat op 28.800 VPH tikt, loopt op 4 Hz (28.800 ÷ 7.200 = 4). De deling door 7.200 houdt rekening met het feit dat één volledige oscillatie twee trillingen bevat en dat er 3.600 seconden in een uur zitten.',
    },
    {
      question: 'Wat betekent een hogere slagsnelheid voor de nauwkeurigheid?',
      answer: 'Hogere slagsnelheden zorgen over het algemeen voor een grotere theoretische precisie omdat het balanswiel minder wordt beïnvloed door positionele verstoringen. Ze veroorzaken echter ook meer wrijving en slijtage aan de palletstenen en het echappementwiel, wat beter smeren en vaker onderhoud vereist.',
    },
    {
      question: 'Hoe beïnvloedt een gemiste tik de dagelijkse nauwkeurigheid?',
      answer: 'Één gemiste tik per uur vertaalt zich naar 24 verloren ticks per dag. De verloren tijd hangt af van uw slagsnelheid: deel 86.400 door uw VPH. Bij 28.800 VPH is dat 3 seconden per dag. Bij 18.000 VPH is dat 4,8 seconden per dag.',
    },
    {
      question: 'Kan een horloge een gemiste tik herstellen?',
      answer: 'Nee. Zodra een tik is gemist, is de tijd permanent verloren. Het horloge "haalt" niet in. Daarom heeft de gezondheid van het echappement - schone palletstenen, goede smering en correcte beat error - directe invloed op de dagelijkse gang.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecteer uw kaliber',
      text: 'Kies uw uurwerk uit het keuzemenu. Elke voorinstelling bevat de juiste VPH voor dat kaliber.',
    },
    {
      name: 'Lees de resultaten',
      text: 'De kaart toont de Hz-frequentie, ticks per seconde en de dagelijkse impact van een enkele gemiste tik.',
    },
    {
      name: 'Probeer een aangepaste VPH',
      text: 'Selecteer "Aangepast" om elke VPH-waarde in te voeren voor vintage of ongebruikelijke uurwerken.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe zet je VPH om naar Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Deel de VPH door 7.200. Een horloge dat op 28.800 VPH tikt, loopt op 4 Hz. De deling door 7.200 houdt rekening met één oscillatie die twee trillingen bevat en 3.600 seconden per uur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat betekent een hogere slagsnelheid voor de nauwkeurigheid?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hogere slagsnelheden zorgen voor een grotere theoretische precisie omdat het balanswiel minder wordt beïnvloed door positionele verstoringen. Ze veroorzaken echter ook meer wrijving en slijtage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe beïnvloedt een gemiste tik de dagelijkse nauwkeurigheid?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Één gemiste tik per uur vertaalt zich naar 24 verloren ticks per dag. Deel 86.400 door uw VPH om de verloren seconden per dag te vinden.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan een horloge een gemiste tik herstellen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nee. Zodra een tik is gemist, is de tijd permanent verloren. Het horloge haalt niet in.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Snelheid van Ritme Omzetter',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe VPH naar Hz om te zetten en de impact van een gemiste tik te berekenen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecteer uw kaliber',
          'text': 'Kies uw uurwerk uit het keuzemenu. Elke voorinstelling bevat de juiste VPH voor dat kaliber.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lees de resultaten',
          'text': 'De kaart toont de Hz-frequentie, ticks per seconde en de dagelijkse impact van een enkele gemiste tik.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Probeer een aangepaste VPH',
          'text': 'Selecteer Aangepast om elke VPH-waarde in te voeren voor vintage of ongebruikelijke uurwerken.',
        },
      ],
    },
  ],
};
