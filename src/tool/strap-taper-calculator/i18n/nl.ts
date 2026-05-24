import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'taper-berekening',
  title: 'Band Taper en Proporties Calculator voor Horloges',
  description: 'Bereken de ideale bandtaper voor je horloge op basis van kastdiameter en lugbreedte. Vind de perfecte gespbreedte voor een gebalanceerde look.',
  ui: {
    title: 'Bandtaper Calculator',
    caseLabel: 'Horlogeafmetingen',
    caseInput: 'Kastdiameter',
    lugLabel: 'Lugbreedte',
    lugInput: 'Lugbreedte',
    taperLabel: 'Taperstijl',
    straight: 'Recht',
    classic: 'Klassiek',
    aggressive: 'Sterk',
    customTaper: 'Aangepast',
    buckleWidth: 'Gespbreedte',
    resultsTitle: 'Proporties',
    lugWidth: 'Lugbreedte',
    buckleWidthResult: 'Gespbreedte',
    taperAmount: 'Taper',
    taperRatio: 'Verhouding',
    proportionScore: 'Proportie',
    proportionExcellent: 'Uitstekend',
    proportionGood: 'Goed',
    proportionFair: 'Redelijk',
    proportionUnbalanced: 'Onevenwichtig',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: 'Opmerking',
    noteContent: 'Een klassieke taper van 4 mm (bijv. van 20 naar 16 mm) past bij dress watches. Duiker- en toolhorloges zien er vaak beter uit met een rechte of 2 mm taper voor een robuust gevoel.',
    step1: 'Voer je kastdiameter en lugbreedte in.',
    step2: 'Kies een taperstijl of stel een aangepaste gespbreedte in.',
    step3: 'Bekijk de proporties en de visuele weergave.',
  },
  seo: [
    { type: 'title', text: 'Bandtaper Calculator \u2014 Proporties, Gespbreedte en Visuele Gids', level: 2 },
    { type: 'paragraph', html: 'Een goed geproportioneerde band maakt of breekt een horloge. Te veel taper bij een duikerhorloge laat het er fragiel uitzien. Geen taper bij een dress watch laat het er lomp uitzien. Deze calculator helpt je de ideale <strong>bandtaperverhouding</strong> te vinden op basis van je kastdiameter en lugbreedte.' },
    { type: 'title', text: 'Wat is Bandtaper?', level: 3 },
    { type: 'paragraph', html: 'Bandtaper is de afname in breedte van het lugeinde naar het gespeinde van een horlogeband. Een klassiek dress watch kan taps toelopen van 20 mm bij de luggen naar 16 mm bij de gesp \u2014 een taper van 4 mm. Een duikerhorloge kan recht blijven op 20 mm voor een meer tool-achtige uitstraling.' },
    { type: 'title', text: 'De Gulden Snede voor Bandproporties', level: 3 },
    { type: 'paragraph', html: 'Horlogeliefhebbers zijn het erover eens dat een lugbreedte tussen 45% en 55% van de kastdiameter het beste oogt. Voor de taper zorgt een gespbreedte van 75% tot 85% van de lugbreedte voor een gebalanceerd, elegant silhouet. Verhoudingen buiten dit bereik kunnen het horloge topzwaar of fragiel doen lijken.' },
    { type: 'title', text: 'Taper per Horlogestijl', level: 3 },
    { type: 'paragraph', html: 'Dress watches: 4 mm taper (20 naar 16 mm). Sporthorloges: 2 tot 3 mm taper. Duikerhorloges: 0 tot 2 mm taper. Militaire of veldhorloges: rechte taper voor een robuuste look. Pilot-horloges: minimale taper passend bij de instrumentesthetiek.' },
  ],
  faq: [
    {
      question: 'Wat is de ideale bandtaper voor een dress watch?',
      answer: 'Een taper van 4 mm is de klassieke keuze. Bij een lugbreedte van 20 mm betekent dat een gesp van 16 mm. Dit creëert een elegant silhouet dat de verfijnde look van een dress watch aanvult.',
    },
    {
      question: 'Moet een duikerhorloge een getaperde band hebben?',
      answer: 'De meeste duikerhorloges zien er het beste uit met minimale of geen taper. Een rechte 20 mm band over de hele lengte geeft een robuust, tool-horlogegevoel dat past bij het utilitaire karakter van duikers.',
    },
    {
      question: 'Wat gebeurt er als de taper te sterk is?',
      answer: 'Een sterke taper (6 mm of meer) kan het horlogehoofd onevenredig groot en topzwaar doen lijken. De band kan ook dun aanvoelen bij het gespeinde.',
    },
    {
      question: 'Hoe meet ik de lugbreedte?',
      answer: 'Meet de binnenbreedte tussen de veerstangaten op de horlogekast. Dat is de benodigde bandbreedte. Veelvoorkomende maten zijn 18 mm, 20 mm en 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Voer kast- en lugmaten in',
      text: 'Voer je kastdiameter en lugbreedte in millimeters in.',
    },
    {
      name: 'Kies een taperstijl',
      text: 'Selecteer Recht, Klassiek, Sterk of Aangepast. De visuele weergave wordt direct bijgewerkt.',
    },
    {
      name: 'Controleer de proporties',
      text: 'Bekijk de verhouding en de proportiescore om te zien of je bandkeuze in balans is.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wat is de ideale bandtaper voor een dress watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Een taper van 4 mm is de klassieke keuze. Bij een lugbreedte van 20 mm betekent dat een gesp van 16 mm, wat een elegant silhouet geeft.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Moet een duikerhorloge een getaperde band hebben?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste duikerhorloges zien er het beste uit met minimale of geen taper. Een rechte 20 mm band geeft een robuust gevoel.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat gebeurt er als de taper te sterk is?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Een sterke taper kan het horlogehoofd onevenredig groot doen lijken en de band kan dun aanvoelen bij de gesp.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoe meet ik de lugbreedte?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Meet de binnenbreedte tussen de veerstangaten. Veelvoorkomende maten zijn 18 mm, 20 mm en 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Bandtaper Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe bereken je de bandtaper voor een horloge',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Voer kast- en lugmaten in',
          'text': 'Voer de kastdiameter en lugbreedte in millimeters in.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kies een taperstijl',
          'text': 'Selecteer Recht, Klassiek, Sterk of Aangepast.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controleer de proporties',
          'text': 'Bekijk de verhouding en de proportiescore.',
        },
      ],
    },
  ],
};
