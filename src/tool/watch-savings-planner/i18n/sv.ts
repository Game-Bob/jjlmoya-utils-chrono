import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'sparplan-klocka',
  title: 'Sparkalkylator f\u00f6r Klockor',
  description: 'S\u00e4tt upp och f\u00f6lj sparm\u00e5l f\u00f6r ditt n\u00e4sta klockk\u00f6p. Visualisera framsteg, ber\u00e4kna tidslinjer och h\u00e5ll motivationen uppe.',
  ui: {
    title: 'Inst\u00e4llningar f\u00f6r Sparm\u00e5l',
    addGoalTitle: 'Nytt Sparm\u00e5l',
    goalNameLabel: 'Klocka',
    goalNamePlaceholder: 't.ex. Rolex Submariner',
    targetPriceLabel: 'M\u00e5lpris',
    currentSavingsLabel: 'Sparat',
    monthlyLabel: 'Per M\u00e5nad',
    addButton: 'L\u00e4gg till M\u00e5l',
    cancelButton: 'Avbryt',
    goalsEmpty: 'Inga sparm\u00e5l \u00e4nnu',
    goalsEmptySub: 'S\u00e4tt ditt f\u00f6rsta klockm\u00e5l och b\u00f6rja spara!',
    monthsToGoal: 'Tid till m\u00e5l',
    yearsToGoal: '\u00c5r till m\u00e5l',
    month: 'm\u00e5n',
    months: 'm\u00e5n',
    year: '\u00e5r',
    totalSaved: 'Totalt Sparat',
    totalGoals: 'M\u00e5l',
    achieved: 'Uppn\u00e5tt',
    percentLabel: 'Sparat',
    deleteGoal: 'Ta bort',
    editGoal: 'Redigera',
    saveGoal: 'Spara',
    currency: 'SEK',
    summaryTitle: 'Sammanfattning',
    goalAchieved: 'Uppn\u00e5tt!',
    goalProgress: 'Framsteg',
    congratsTitle: 'Grattis!',
    congratsDesc: 'Du har n\u00e5tt ditt sparm\u00e5l!',
    monthlyContribution: 'M\u00e5natlig',
    targetDate: 'M\u00e5ldatum',
    adjustMonthly: 'Justera m\u00e5nadsbelopp',
  },
  seo: [
    { type: 'title', text: 'Sparkalkylator f\u00f6r Klockor \u2014 F\u00f6lj Ditt N\u00e4sta Klockk\u00f6p', level: 2 },
    { type: 'paragraph', html: 'Att spara till en klocka \u00e4r en resa. Oavsett om det \u00e4r en <strong>vintage Speedmaster</strong>, en <strong>Submariner</strong> eller en <strong>Grand Seiko</strong>, f\u00f6rvandlar en tydlig sparplan dr\u00f6mmen till en tidslinje. Det h\u00e4r verktyget hj\u00e4lper dig att visualisera dina framsteg, justera dina m\u00e5natliga bidrag och se exakt n\u00e4r du kommer att g\u00e5 ut ur butiken med din graal.' },
    { type: 'title', text: 'D\u00e4rf\u00f6r en sparplan \u00e4r viktig f\u00f6r klockesamlare', level: 3 },
    { type: 'paragraph', html: 'Klockinsamling \u00e4r ett t\u00e5lamodsspel. Priserna p\u00e5 eftertraktade modeller stiger stadigt och impulsiva k\u00f6p leder ofta till \u00e5nger. Ett strukturerat sparande h\u00e5ller dig disciplinerad, f\u00f6rhindrar ekonomisk p\u00e5frestning och g\u00f6r det slutliga k\u00f6pet v\u00e4lf\u00f6rtj\u00e4nt. Dessutom bygger daglig uppf\u00f6ljning av dina framsteg upp f\u00f6rv\u00e4ntan och g\u00f6r uppackningen \u00e4nnu s\u00f6tare.' },
    { type: 'title', text: 'Hur du s\u00e4tter realistiska sparm\u00e5l f\u00f6r klockor', level: 3 },
    { type: 'paragraph', html: 'B\u00f6rja med totalpriset inklusive skatter och frakt. Dela sedan med hur mycket du bekv\u00e4mt kan avs\u00e4tta varje m\u00e5nad. En bra tumregel \u00e4r att inte \u00e4gna mer \u00e4n <strong>10\u201315 % av din disponibla inkomst</strong> till klocksparande. Om tidslinjen k\u00e4nns f\u00f6r l\u00e5ng, \u00f6verv\u00e4g att dela upp den i mindre milstolpar \u2014 eller utforska mer prisv\u00e4rda alternativ i samma stilfamilj.' },
    { type: 'title', text: 'Psykologin bakom m\u00e5luppf\u00f6ljning', level: 3 },
    { type: 'paragraph', html: 'Visuell framstegsuppf\u00f6ljning utl\u00f6ser dopaminfris\u00e4ttning, samma signalsubstans som g\u00f6r samlande s\u00e5 givande. Varje g\u00e5ng du registrerar ett nytt bidrag och ser framstegsringen fyllas, f\u00f6rst\u00e4rker du vanan. D\u00e4rf\u00f6r fungerar sm\u00e5, regelbundna sparande ofta b\u00e4ttre \u00e4n sporadiska stora ins\u00e4ttningar \u2014 sj\u00e4lva ritualen blir en del av samlarupplevelsen.' },
  ],
  faq: [
    {
      question: 'Hur mycket b\u00f6r jag spara varje m\u00e5nad till en klocka?',
      answer: 'Sikta p\u00e5 10\u201315 % av din disponibla m\u00e5natliga inkomst. Nyckeln \u00e4r konsekvens \u2014 \u00e4ven 100 $ i m\u00e5naden blir 1 200 $ om \u00e5ret. Justera beloppet baserat p\u00e5 din tidslinje: kortare m\u00e5l beh\u00f6ver st\u00f6rre m\u00e5natliga bidrag.',
    },
    {
      question: 'Ska jag spara till en klocka i taget eller till flera?',
      answer: 'En i taget \u00e4r oftast mer effektivt. Fokus bygger fart. N\u00e4r du n\u00e5r ditt f\u00f6rsta m\u00e5l f\u00f6ljer sj\u00e4lvf\u00f6rtroendet och disciplinen med till n\u00e4sta. Den h\u00e4r kalkylatorn st\u00f6der dock flera m\u00e5l s\u00e5 att du kan j\u00e4mf\u00f6ra tidslinjer.',
    },
    {
      question: 'Vad h\u00e4nder om klockpriset stiger medan jag sparar?',
      answer: 'Bra fr\u00e5ga. Kontrollera det aktuella marknadspriset med n\u00e5gra m\u00e5naders mellanrum och uppdatera ditt m\u00e5l. Om priserna stiger snabbt, \u00f6verv\u00e4g att \u00f6ka ditt m\u00e5natliga belopp eller f\u00f6rkorta tidslinjen f\u00f6r att l\u00e5sa in det aktuella priset.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'S\u00e4tt ditt m\u00e5l',
      text: 'Ange klockans namn och totalpris inklusive skatter och frakt.',
    },
    {
      name: 'F\u00f6lj dina besparingar',
      text: 'Registrera hur mycket du redan sparat och hur mycket du kan avs\u00e4tta varje m\u00e5nad.',
    },
    {
      name: '\u00d6vervaka framsteg',
      text: 'Se framstegsringen fyllas n\u00e4r du uppdaterar dina besparingar. Justera m\u00e5natliga belopp n\u00e4r som helst.',
    },
    {
      name: 'Fira',
      text: 'N\u00e4r ringen n\u00e5r 100 % har du n\u00e5tt ditt m\u00e5l. Dags att k\u00f6pa den klockan!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur mycket b\u00f6r jag spara varje m\u00e5nad till en klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sikta p\u00e5 10\u201315 % av din disponibla m\u00e5natliga inkomst. Nyckeln \u00e4r konsekvens \u2014 \u00e4ven 100 $ i m\u00e5naden blir 1 200 $ om \u00e5ret.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ska jag spara till en klocka i taget eller till flera?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En i taget \u00e4r oftast mer effektivt. Fokus bygger fart. N\u00e4r du n\u00e5r ditt f\u00f6rsta m\u00e5l, ta med den disciplinen till n\u00e4sta.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad h\u00e4nder om klockpriset stiger medan jag sparar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kontrollera det aktuella marknadspriset med n\u00e5gra m\u00e5naders mellanrum och uppdatera ditt m\u00e5l. \u00d6verv\u00e4g att \u00f6ka ditt m\u00e5natliga belopp om priserna stiger snabbt.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Sparkalkylator f\u00f6r Klockor',
      'operatingSystem': 'Alla',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Kr\u00e4ver HTML5. Kr\u00e4ver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man sparar till ett klockk\u00f6p',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'S\u00e4tt ditt m\u00e5l',
          'text': 'Ange klockans namn och totalpris inklusive skatter och frakt.',
        },
        {
          '@type': 'HowToStep',
          'name': 'F\u00f6lj dina besparingar',
          'text': 'Registrera hur mycket du redan sparat och hur mycket du kan avs\u00e4tta varje m\u00e5nad.',
        },
        {
          '@type': 'HowToStep',
          'name': '\u00d6vervaka framsteg',
          'text': 'Se framstegsringen fyllas n\u00e4r du uppdaterar dina besparingar.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Fira',
          'text': 'N\u00e4r ringen n\u00e5r 100 % har du n\u00e5tt ditt m\u00e5l. Dags att k\u00f6pa den klockan!',
        },
      ],
    },
  ],
};
