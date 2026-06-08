import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'sparplan-klocka',
  title: 'Sparkalkylator för Klockor',
  description: 'Sätt upp och följ sparmål för ditt nästa klockköp. Visualisera framsteg, beräkna tidslinjer och håll motivationen uppe.',
  ui: {
    title: 'Inställningar för Sparmål',
    addGoalTitle: 'Nytt Sparmål',
    goalNameLabel: 'Klocka',
    goalNamePlaceholder: 't.ex. Rolex Submariner',
    targetPriceLabel: 'Målpris',
    currentSavingsLabel: 'Sparat',
    monthlyLabel: 'Per Månad',
    addButton: 'Lägg till Mål',
    cancelButton: 'Avbryt',
    goalsEmpty: 'Inga sparmål ännu',
    goalsEmptySub: 'Sätt ditt första klockmål och börja spara!',
    monthsToGoal: 'Tid till mål',
    yearsToGoal: 'År till mål',
    month: 'mån',
    months: 'mån',
    year: 'år',
    totalSaved: 'Totalt Sparat',
    totalGoals: 'Mål',
    achieved: 'Uppnått',
    percentLabel: 'Sparat',
    deleteGoal: 'Ta bort',
    editGoal: 'Redigera',
    saveGoal: 'Spara',
    currency: 'SEK',
    summaryTitle: 'Sammanfattning',
    goalAchieved: 'Uppnått!',
    goalProgress: 'Framsteg',
    congratsTitle: 'Grattis!',
    congratsDesc: 'Du har nått ditt sparmål!',
    monthlyContribution: 'Månatlig',
    targetDate: 'Måldatum',
    adjustMonthly: 'Justera månadsbelopp',
  },
  seo: [
    { type: 'title', text: 'Sparkalkylator för Klockor - Följ Ditt Nästa Klockköp', level: 2 },
    { type: 'paragraph', html: 'Att spara till en klocka är en resa. Oavsett om det är en <strong>vintage Speedmaster</strong>, en <strong>Submariner</strong> eller en <strong>Grand Seiko</strong>, förvandlar en tydlig sparplan drömmen till en tidslinje. Det här verktyget hjälper dig att visualisera dina framsteg, justera dina månatliga bidrag och se exakt när du kommer att gå ut ur butiken med din graal.' },
    { type: 'title', text: 'Därför en sparplan är viktig för klockesamlare', level: 3 },
    { type: 'paragraph', html: 'Klockinsamling är ett tålamodsspel. Priserna på eftertraktade modeller stiger stadigt och impulsiva köp leder ofta till ånger. Ett strukturerat sparande håller dig disciplinerad, förhindrar ekonomisk påfrestning och gör det slutliga köpet välförtjänt. Dessutom bygger daglig uppföljning av dina framsteg upp förväntan och gör uppackningen ännu sötare.' },
    { type: 'title', text: 'Hur du sätter realistiska sparmål för klockor', level: 3 },
    { type: 'paragraph', html: 'Börja med totalpriset inklusive skatter och frakt. Dela sedan med hur mycket du bekvämt kan avsätta varje månad. En bra tumregel är att inte ägna mer än <strong>10-15 % av din disponibla inkomst</strong> till klocksparande. Om tidslinjen känns för lång, överväg att dela upp den i mindre milstolpar - eller utforska mer prisvärda alternativ i samma stilfamilj.' },
    { type: 'title', text: 'Psykologin bakom måluppföljning', level: 3 },
    { type: 'paragraph', html: 'Visuell framstegsuppföljning utlöser dopaminfrisättning, samma signalsubstans som gör samlande så givande. Varje gång du registrerar ett nytt bidrag och ser framstegsringen fyllas, förstärker du vanan. Därför fungerar små, regelbundna sparande ofta bättre än sporadiska stora insättningar - själva ritualen blir en del av samlarupplevelsen.' },
  ],
  faq: [
    {
      question: 'Hur mycket bör jag spara varje månad till en klocka?',
      answer: 'Sikta på 10-15 % av din disponibla månatliga inkomst. Nyckeln är konsekvens - även 100 $ i månaden blir 1 200 $ om året. Justera beloppet baserat på din tidslinje: kortare mål behöver större månatliga bidrag.',
    },
    {
      question: 'Ska jag spara till en klocka i taget eller till flera?',
      answer: 'En i taget är oftast mer effektivt. Fokus bygger fart. När du når ditt första mål följer självförtroendet och disciplinen med till nästa. Den här kalkylatorn stöder dock flera mål så att du kan jämföra tidslinjer.',
    },
    {
      question: 'Vad händer om klockpriset stiger medan jag sparar?',
      answer: 'Bra fråga. Kontrollera det aktuella marknadspriset med några månaders mellanrum och uppdatera ditt mål. Om priserna stiger snabbt, överväg att öka ditt månatliga belopp eller förkorta tidslinjen för att låsa in det aktuella priset.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Sätt ditt mål',
      text: 'Ange klockans namn och totalpris inklusive skatter och frakt.',
    },
    {
      name: 'Följ dina besparingar',
      text: 'Registrera hur mycket du redan sparat och hur mycket du kan avsätta varje månad.',
    },
    {
      name: 'Övervaka framsteg',
      text: 'Se framstegsringen fyllas när du uppdaterar dina besparingar. Justera månatliga belopp när som helst.',
    },
    {
      name: 'Fira',
      text: 'När ringen når 100 % har du nått ditt mål. Dags att köpa den klockan!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur mycket bör jag spara varje månad till en klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sikta på 10-15 % av din disponibla månatliga inkomst. Nyckeln är konsekvens - även 100 $ i månaden blir 1 200 $ om året.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ska jag spara till en klocka i taget eller till flera?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En i taget är oftast mer effektivt. Fokus bygger fart. När du når ditt första mål, ta med den disciplinen till nästa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad händer om klockpriset stiger medan jag sparar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kontrollera det aktuella marknadspriset med några månaders mellanrum och uppdatera ditt mål. Överväg att öka ditt månatliga belopp om priserna stiger snabbt.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Sparkalkylator för Klockor',
      'operatingSystem': 'Alla',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man sparar till ett klockköp',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Sätt ditt mål',
          'text': 'Ange klockans namn och totalpris inklusive skatter och frakt.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Följ dina besparingar',
          'text': 'Registrera hur mycket du redan sparat och hur mycket du kan avsätta varje månad.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Övervaka framsteg',
          'text': 'Se framstegsringen fyllas när du uppdaterar dina besparingar.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Fira',
          'text': 'När ringen når 100 % har du nått ditt mål. Dags att köpa den klockan!',
        },
      ],
    },
  ],
};
