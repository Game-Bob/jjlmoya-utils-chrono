import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'ontmagnetisering-timer',
  title: 'Horloge Ontmagnetisering Timer & Gids',
  description: 'Een precieze afteltimer met geluidssignalen voor DIY-ontmagnetisering van horloges. Ontvang de exacte indrukduur voor uw ontmagnetiseringsspoel.',
  ui: {
    title: 'Timerinstellingen',
    durationLabel: 'Pulsduur',
    duration1s: '1 Seconde',
    duration2s: '2 Seconden',
    duration3s: '3 Seconden',
    customLabel: 'Aangepast',
    startButton: 'Start',
    stopButton: 'Stop',
    resetButton: 'Reset',
    pressPhase: 'Druk nu op de ontmagnetiseerknop!',
    holdPhase: 'Houd de knop ingedrukt...',
    releasePhase: 'Laat nu los!',
    completePhase: 'Klaar! Beweeg het horloge weg.',
    ready: 'Gereed',
    seconds: 's',
    instructions: 'Hoe te Ontmagnetiseren',
    step1: 'Plaats het horloge op het ontmagnetiseerplatform.',
    step2: 'Druk op Start en houd de ontmagnetiseerknop ingedrukt voor de ingestelde duur.',
    step3: 'Laat de knop los en beweeg het horloge langzaam weg.',
    step4: 'Herhaal 2–3 keer indien nodig, draai het horloge elke keer.',
    tipTitle: 'Tip',
    tipContent: 'Houd het horloge minstens 1 meter verwijderd van de ingeschakelde ontmagnetiseerder om her-magnetisatie te voorkomen.',
  },
  seo: [
    { type: 'title', text: 'Horloge Ontmagnetisering Timer-ecieze Puls Timing voor DIY', level: 2 },
    { type: 'paragraph', html: 'Het ontmagnetiseren van een horloge vereist exacte timing van de knopdruk. De meeste DIY-ontmagnetiseerders werken door een afnemend wisselend magnetisch veld te genereren, en de ideale puls duurt tussen <strong>1 en 3 seconden</strong>. Te kort en het veld neutraliseert de magnetisatie niet; te lang en u riskeert verzadiging van het uurwerk.' },
    { type: 'title', text: 'Waarom timing belangrijk is bij horloge-ontmagnetisering', level: 3 },
    { type: 'paragraph', html: 'Wanneer u op de knop van een ontmagnetiseerder drukt, ontstaat er een wisselend magnetisch veld in de spoel. Het veld oscilleert op de netfrequentie (50/60 Hz) en neemt af wanneer u loslaat. Het doel is om het horloge <strong>net lang genoeg</strong> aan dit afnemende veld bloot te stellen om de magnetische domeinen in de haarveer en andere stalen componenten te randomiseren. Een puls van 1 tot 3 seconden is de sweet spot voor de meeste uurwerken.' },
    { type: 'title', text: 'Hoe een ontmagnetiseerder werkt', level: 3 },
    { type: 'paragraph', html: 'Een ontmagnetiseerder is in wezen een draadspoel die een sterk wisselend magnetisch veld produceert wanneer deze wordt ingeschakeld. Het plaatsen van een gemagnetiseerd horloge in dit veld zorgt ervoor dat de interne magnetische domeinen snel omslaan. Wanneer het veld abrupt wordt verwijderd (door de knop los te laten), nestelen de domeinen zich in een willekeurig patroon, waardoor de netto magnetisatie effectief wordt opgeheven.' },
    { type: 'title', text: 'Tekenen dat uw horloge ontmagnetisering nodig heeft', level: 3 },
    { type: 'paragraph', html: 'Veelvoorkomende symptomen van een gemagnetiseerd horloge zijn: dagelijks enkele minuten voorlopen, inconsistente tijdsweergave in verschillende posities, een hoorbaar snellere tik, en in extreme gevallen het volledig stoppen van het horloge. Als uw automatische horloge plotseling snel begint te lopen, is magnetisatie vaak de boosdoener en is ontmagnetisering een eenvoudige oplossing.' },
  ],
  faq: [
    {
      question: 'Hoe lang moet ik de ontmagnetiseerknop indrukken?',
      answer: '1 tot 3 seconden is de aanbevolen pulsduur. Begin met 1 seconde en verhoog indien nodig. Te lange pulsen kunnen de spoel oververhitten en verbeteren de resultaten niet.',
    },
    {
      question: 'Kan ik een horloge meer dan eens ontmagnetiseren?',
      answer: 'Ja. Herhaal het proces 2 tot 3 keer en draai het horloge elke keer 90 graden. Dit zorgt ervoor dat alle assen aan het wisselveld worden blootgesteld. Er is geen risico op over-ontmagnetisering.',
    },
    {
      question: 'Werkt ontmagnetisering ook bij quartzhorloges?',
      answer: 'Quartzhorloges worden zelden beïnvloed door magnetisatie omdat ze weinig ferromagnetische componenten bevatten. De stappenmotor in sommige quartzwerken kan echter gemagnetiseerd raken, wat onregelmatige wijzerbeweging veroorzaakt. Ontmagnetisering is veilig voor quartzhorloges.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Stel duur in',
      text: 'Kies 1, 2 of 3 seconden afhankelijk van de ernst van de magnetisatie.',
    },
    {
      name: 'Plaats het horloge',
      text: 'Leg het horloge plat op het ontmagnetiseerplatform, gecentreerd boven de spoel.',
    },
    {
      name: 'Druk in en houd vast',
      text: 'Druk tegelijkertijd op de Start-knop en de ontmagnetiseerknop en houd vast voor de ingestelde duur.',
    },
    {
      name: 'Laat los en beweeg weg',
      text: 'Laat de knop los en beweeg het horloge langzaam minstens 1 meter weg voordat u de ontmagnetiseerder uitschakelt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe lang moet ik de ontmagnetiseerknop indrukken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 tot 3 seconden is de aanbevolen pulsduur. Begin met 1 seconde en verhoog indien nodig. Te lange pulsen kunnen de spoel oververhitten en verbeteren de resultaten niet.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik een horloge meer dan eens ontmagnetiseren?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Herhaal het proces 2 tot 3 keer en draai het horloge elke keer 90 graden. Dit zorgt ervoor dat alle assen aan het wisselveld worden blootgesteld. Er is geen risico op over-ontmagnetisering.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Werkt ontmagnetisering ook bij quartzhorloges?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Quartzhorloges worden zelden beïnvloed door magnetisatie omdat ze weinig ferromagnetische componenten bevatten. De stappenmotor in sommige quartzwerken kan echter gemagnetiseerd raken, wat onregelmatige wijzerbeweging veroorzaakt. Ontmagnetisering is veilig voor quartzhorloges.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horloge Ontmagnetisering Timer & Gids',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe ontmagnetiseert u een horloge',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Stel duur in',
          'text': 'Kies 1, 2 of 3 seconden afhankelijk van de ernst van de magnetisatie.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Plaats het horloge',
          'text': 'Leg het horloge plat op het ontmagnetiseerplatform, gecentreerd boven de spoel.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Druk in en houd vast',
          'text': 'Druk tegelijkertijd op de Start-knop en de ontmagnetiseerknop en houd vast voor de ingestelde duur.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Laat los en beweeg weg',
          'text': 'Laat de knop los en beweeg het horloge langzaam minstens 1 meter weg voordat u de ontmagnetiseerder uitschakelt.',
        },
      ],
    },
  ],
};
