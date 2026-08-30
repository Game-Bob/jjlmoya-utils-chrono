import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'kalkylator-avsmalning-armband',
  title: 'Miniräknare för armbandsavsmalning och proportioner',
  description: 'Beräkna den ideala armbandsavsmalningen för din klocka baserat på boettdiameter och klobredd. Hitta den perfekta spännetbredden för en balanserad look.',
  ui: {
    title: 'Miniräknare för armbandsavsmalning',
    caseLabel: 'Klockmått',
    caseInput: 'Boettdiameter',
    lugLabel: 'Klobredd',
    lugInput: 'Klobredd',
    taperLabel: 'Avsmalningsstil',
    straight: 'Rak',
    classic: 'Klassisk',
    aggressive: 'Kraftig',
    customTaper: 'Anpassad',
    buckleWidth: 'Spännetbredd',
    resultsTitle: 'Proportioner',
    lugWidth: 'Klobredd',
    buckleWidthResult: 'Spännetbredd',
    taperAmount: 'Avsmalning',
    taperRatio: 'Förhållande',
    proportionScore: 'Proportion',
    proportionExcellent: 'Utmärkt',
    proportionGood: 'Bra',
    proportionFair: 'Godkänd',
    proportionUnbalanced: 'Obalanserad',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Notera',
    noteContent: 'En klassisk avsmalning på 4 mm (t.ex. 20 till 16 mm) passar till dressklockor. Dykar- och verktygsklockor ser ofta bättre ut med en rak eller 2 mm avsmalning för en robust känsla.',
    step1: 'Ange boettdiameter och klobredd.',
    step2: 'Välj en avsmalningsstil eller ange en anpassad spännetbredd.',
    step3: 'Läs proportionerna och den visuella representationen.',
  },
  seo: [
    { type: 'title', text: 'Miniräknare för armbandsavsmalning - Proportioner, spännetbredd och visuell guide', level: 2 },
    { type: 'paragraph', html: 'Ett väl proportionerat armband kan göra eller bryta en klocka. För mycket avsmalning på en dykarklocka får den att se bräcklig ut. Ingen avsmalning på en dressklocka får den att se klumpig ut. Denna miniräknare hjälper dig att hitta det ideala <strong>avsmalningsförhållandet</strong> baserat på boettdiameter och klobredd.' },
    { type: 'title', text: 'Vad är armbandsavsmalning?', level: 3 },
    { type: 'paragraph', html: 'Armbandsavsmalning är minskningen i bredd från klosidan till spännet på ett klockarmband. En klassisk dressklocka kan avsmalna från 20 mm vid klorna till 16 mm vid spännet - en avsmalning på 4 mm. En dykarklocka kan hålla sig på 20 mm rakt igenom för ett mer verktygsliknande utseende.' },
    { type: 'title', text: 'Det gyllene snittet för armbandsproportioner', level: 3 },
    { type: 'paragraph', html: 'Klockentusiaster är i allmänhet överens om att en klobredd mellan 45 % och 55 % av boettdiametern ser bäst ut. För avsmalningen skapar en spännetbredd som är 75 % till 85 % av klobredden en balanserad, elegant silhuett. Förhållanden utanför detta intervall kan få klockan att se tung eller bräcklig ut.' },
    { type: 'title', text: 'Avsmalning efter klockstil', level: 3 },
    { type: 'paragraph', html: 'Dressklockor: 4 mm avsmalning (20 till 16 mm). Sportklockor: 2 till 3 mm avsmalning. Dykarklockor: 0 till 2 mm avsmalning. Militär- eller fältklockor: rak avsmalning för en robust look. Pilotklockor: minimal avsmalning för att matcha instrumentets estetik.' },
  ],
  faq: [
    {
      question: 'Vad är den ideala armbandsavsmalningen för en dressklocka?',
      answer: 'En avsmalning på 4 mm är det klassiska valet. För en klobredd på 20 mm innebär det ett 16 mm spänne. Detta skapar en elegant silhuett som kompletterar den raffinerade looken hos en dressklocka.',
    },
    {
      question: 'Ska en dykarklocka ha ett avsmalnande armband?',
      answer: 'De flesta dykarklockor ser bäst ut med minimal eller ingen avsmalning. Ett rakt 20 mm armband rakt igenom ger en robust verktygsklockakänsla som matchar dykarklockornas utilitaristiska natur.',
    },
    {
      question: 'Vad händer om avsmalningen är för kraftig?',
      answer: 'En kraftig avsmalning (6 mm eller mer) kan få klockhuvudet att se oproportionerligt stort och tungt ut. Armbandet kan också kännas sprött vid spännet.',
    },
    {
      question: 'Hur mäter jag klobredd?',
      answer: 'Mät innerbredden mellan fjäderstångshålen på boetten. Det är armbandsbredden du behöver. Vanliga storlekar är 18 mm, 20 mm och 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ange boett- och klomått',
      text: 'Ange boettdiameter och klobredd i millimeter.',
    },
    {
      name: 'Välj en avsmalningsstil',
      text: 'Välj Rak, Klassisk, Kraftig eller Anpassad. Den visuella bilden uppdateras direkt.',
    },
    {
      name: 'Granska proportionerna',
      text: 'Kontrollera förhållandet och proportionspoängen för att se om ditt armbandsval är balanserat.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Vad är den ideala armbandsavsmalningen för en dressklocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En avsmalning på 4 mm är det klassiska valet. För en klobredd på 20 mm innebär det ett 16 mm spänne, vilket ger en elegant silhuett.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ska en dykarklocka ha ett avsmalnande armband?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta dykarklockor ser bäst ut med minimal eller ingen avsmalning. Ett rakt 20 mm armband ger en robust känsla.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad händer om avsmalningen är för kraftig?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En kraftig avsmalning kan få klockhuvudet att se oproportionerligt stort ut och armbandet kan kännas sprött vid spännet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur mäter jag klobredd?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mät innerbredden mellan fjäderstångshålen. Vanliga storlekar är 18 mm, 20 mm och 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Miniräknare för armbandsavsmalning',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man beräknar armbandsavsmalning för en klocka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ange boett- och klomått',
          'text': 'Ange boettdiameter och klobredd i millimeter.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Välj en avsmalningsstil',
          'text': 'Välj Rak, Klassisk, Kraftig eller Anpassad.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Granska proportionerna',
          'text': 'Kontrollera förhållandet och proportionspoängen.',
        },
      ],
    },
  ],
};
