import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'spaarplan-horloge',
  title: 'Spaardoelplanner voor Horloges',
  description: 'Stel spaardoelen in en volg ze voor je volgende horlogeaankoop. Visualiseer voortgang, bereken tijdlijnen en blijf gemotiveerd.',
  ui: {
    title: 'Spaardoelinstellingen',
    addGoalTitle: 'Nieuw Spaardoel',
    goalNameLabel: 'Horloge',
    goalNamePlaceholder: 'bijv. Rolex Submariner',
    targetPriceLabel: 'Doelprijs',
    currentSavingsLabel: 'Gespaard',
    monthlyLabel: 'Per Maand',
    addButton: 'Doel Toevoegen',
    cancelButton: 'Annuleren',
    goalsEmpty: 'Nog geen spaardoelen',
    goalsEmptySub: 'Stel je eerste horlogedoel in en begin met sparen!',
    monthsToGoal: 'Tijd tot doel',
    yearsToGoal: 'Jaren tot doel',
    month: 'mnd',
    months: 'mnd',
    year: 'jr',
    totalSaved: 'Totaal Gespaard',
    totalGoals: 'Doelen',
    achieved: 'Bereikt',
    percentLabel: 'Gespaard',
    deleteGoal: 'Verwijderen',
    editGoal: 'Bewerken',
    saveGoal: 'Opslaan',
    currency: 'EUR',
    summaryTitle: 'Samenvatting',
    goalAchieved: 'Bereikt!',
    goalProgress: 'Voortgang',
    congratsTitle: 'Gefeliciteerd!',
    congratsDesc: 'Je hebt je spaardoel bereikt!',
    monthlyContribution: 'Maandelijks',
    targetDate: 'Doeldatum',
    adjustMonthly: 'Maandbedrag aanpassen',
  },
  seo: [
    { type: 'title', text: 'Spaardoelplanner voor Horloges \u2014 Volg je Volgende Horlogeaankoop', level: 2 },
    { type: 'paragraph', html: 'Sparen voor een horloge is een reis. Of het nu een <strong>vintage Speedmaster</strong>, een <strong>Submariner</strong> of een <strong>Grand Seiko</strong> is, een duidelijk spaarplan verandert de droom in een tijdlijn. Deze tool helpt je je voortgang te visualiseren, je maandelijkse bijdragen aan te passen en precies te zien wanneer je met je heilige graal de boetiek uitloopt.' },
    { type: 'title', text: 'Waarom een spaarplan belangrijk is voor horlogeverzamelaars', level: 3 },
    { type: 'paragraph', html: 'Horloges verzamelen is een geduldsspel. De prijzen van gewilde modellen stijgen gestaag en impulsaankopen leiden vaak tot spijt. Een gestructureerde spaaraanpak houdt je gedisciplineerd, voorkomt financi\u00eble stress en zorgt dat de uiteindelijke aankoop verdiend aanvoelt. Bovendien bouwt het dagelijks volgen van je voortgang anticipatie op en maakt het uitpakken nog zoeter.' },
    { type: 'title', text: 'Hoe je realistische spaardoelen voor horloges stelt', level: 3 },
    { type: 'paragraph', html: 'Begin met de totale prijs inclusief belastingen en verzending. Deel dat door wat je comfortabel per maand opzij kunt zetten. Een goede vuistregel is om niet meer dan <strong>10\u201315% van je besteedbare inkomen</strong> aan horlogesparen te besteden. Als de tijdlijn te lang voelt, overweeg dan om het op te splitsen in kleinere mijlpalen \u2014 of verken betaalbardere alternatieven in dezelfde stijlfamilie.' },
    { type: 'title', text: 'De psychologie van doelvolging', level: 3 },
    { type: 'paragraph', html: 'Visuele voortgangsregistratie veroorzaakt dopamine-afgifte, dezelfde neurotransmitter die verzamelen zo belonend maakt. Elke keer dat je een nieuwe bijdrage registreert en de voortgangsring ziet vullen, versterk je de gewoonte. Daarom werken kleine, regelmatige spaarbedragen vaak beter dan sporadische grote stortingen \u2014 het ritueel zelf wordt onderdeel van de verzamelervaring.' },
  ],
  faq: [
    {
      question: 'Hoeveel moet ik elke maand sparen voor een horloge?',
      answer: 'Streef naar 10\u201315% van je besteedbare maandelijkse inkomen. De sleutel is consistentie \u2014 zelfs $100 per maand wordt $1.200 per jaar. Pas het bedrag aan op basis van je tijdlijn: kortere doelen hebben hogere maandelijkse bijdragen nodig.',
    },
    {
      question: 'Moet ik voor \u00e9\u00e9n horloge tegelijk sparen of voor meerdere?',
      answer: '\u00c9\u00e9n tegelijk is meestal effectiever. Focus bouwt momentum op. Zodra je je eerste doel bereikt, gaan het vertrouwen en de discipline over naar de volgende. Dat gezegd hebbende, deze planner ondersteunt meerdere doelen zodat je tijdlijnen kunt vergelijken.',
    },
    {
      question: 'Wat als de horlogeprijs stijgt terwijl ik spaar?',
      answer: 'Goede vraag. Controleer de huidige marktprijs om de paar maanden en werk je doel bij. Als prijzen snel stijgen, overweeg dan om je maandbedrag te verhogen of de tijdlijn te verkorten om de huidige prijs vast te zetten.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Stel je doel in',
      text: 'Voer de horlogenaam en de totale prijs in, inclusief belastingen en verzending.',
    },
    {
      name: 'Volg je spaargeld',
      text: 'Leg vast hoeveel je al hebt gespaard en hoeveel je per maand opzij kunt zetten.',
    },
    {
      name: 'Bewaak de voortgang',
      text: 'Zie de voortgangsring vullen terwijl je je spaargeld bijwerkt. Pas maandbedragen op elk moment aan.',
    },
    {
      name: 'Vier het',
      text: 'Wanneer de ring 100% bereikt, heb je je doel bereikt. Tijd om dat horloge te kopen!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoeveel moet ik elke maand sparen voor een horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Streef naar 10\u201315% van je besteedbare maandelijkse inkomen. De sleutel is consistentie \u2014 zelfs $100 per maand wordt $1.200 per jaar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Moet ik voor \u00e9\u00e9n horloge tegelijk sparen of voor meerdere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '\u00c9\u00e9n tegelijk is meestal effectiever. Focus bouwt momentum op. Zodra je je eerste doel bereikt, neem die discipline mee naar de volgende.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat als de horlogeprijs stijgt terwijl ik spaar?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Controleer de huidige marktprijs om de paar maanden en werk je doel bij. Overweeg om je maandbedrag te verhogen als prijzen snel stijgen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Spaardoelplanner voor Horloges',
      'operatingSystem': 'Alle',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe spaar je voor een horlogeaankoop',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Stel je doel in',
          'text': 'Voer de horlogenaam en de totale prijs in, inclusief belastingen en verzending.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Volg je spaargeld',
          'text': 'Leg vast hoeveel je al hebt gespaard en hoeveel je per maand opzij kunt zetten.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Bewaak de voortgang',
          'text': 'Zie de voortgangsring vullen terwijl je je spaargeld bijwerkt.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Vier het',
          'text': 'Wanneer de ring 100% bereikt, heb je je doel bereikt. Tijd om dat horloge te kopen!',
        },
      ],
    },
  ],
};
