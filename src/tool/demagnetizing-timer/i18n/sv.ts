import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'avmagnetisering-timer',
  title: 'Avmagnetiseringstimer för Klockor',
  description: 'En exakt nedräkningstimer med ljudsignaler för DIY-avmagnetisering av klockor. Få den exakta tryckningstiden för din avmagnetiseringsspole.',
  ui: {
    title: 'Timerinställningar',
    durationLabel: 'Pulslängd',
    duration1s: '1 Sekund',
    duration2s: '2 Sekunder',
    duration3s: '3 Sekunder',
    customLabel: 'Anpassad',
    startButton: 'Starta',
    stopButton: 'Stoppa',
    resetButton: 'Återställ',
    pressPhase: 'Tryck på avmagnetiseringsknappen nu!',
    holdPhase: 'Håll knappen intryckt...',
    releasePhase: 'Släpp nu!',
    completePhase: 'Klart! Flytta bort klockan.',
    ready: 'Redo',
    seconds: 's',
    instructions: 'Så här avmagnetiserar du',
    step1: 'Placera klockan på avmagnetiseringsplattformen.',
    step2: 'Tryck på Starta och håll avmagnetiseringsknappen intryckt under den inställda tiden.',
    step3: 'Släpp knappen och flytta långsamt bort klockan.',
    step4: 'Upprepa 2-3 gånger om det behövs, vrid klockan varje gång.',
    tipTitle: 'Tips',
    tipContent: 'Håll klockan minst 1 meter från den påslagna avmagnetiseraren för att undvika återmagnetisering.',
  },
  seo: [
    { type: 'title', text: 'Avmagnetiseringstimer för Klockor-akt Pulstid för DIY', level: 2 },
    { type: 'paragraph', html: 'Avmagnetisering av en klocka kräver exakt timing av knapptryckningen. De flesta DIY-avmagnetiserare fungerar genom att generera ett avtagande växlande magnetfält, och den ideala pulsen varar mellan <strong>1 och 3 sekunder</strong>. För kort och fältet neutraliserar inte magnetiseringen; för lång och du riskerar att mätta verket.' },
    { type: 'title', text: 'Varför timing är viktigt vid avmagnetisering av klockor', level: 3 },
    { type: 'paragraph', html: 'När du trycker på knappen på en avmagnetiserare skapas ett växlande magnetfält inuti spolen. Fältet oscillerar med nätfrekvensen (50/60 Hz) och avtar när du släpper. Målet är att utsätta klockan för detta avtagande fält <strong>precis tillräckligt länge</strong> för att randomisera de magnetiska domänerna i spiralfjädern och andra stålkomponenter. En puls på 1 till 3 sekunder är den optimala tiden för de flesta verk.' },
    { type: 'title', text: 'Hur en avmagnetiserare fungerar', level: 3 },
    { type: 'paragraph', html: 'En avmagnetiserare är i huvudsak en trådspole som producerar ett starkt växlande magnetfält när den strömsätts. Att placera en magnetiserad klocka i detta fält får dess interna magnetiska domäner att snabbt växla. När fältet avlägsnas abrupt (genom att släppa knappen), stabiliseras domänerna i ett slumpmässigt mönster, vilket effektivt tar bort nettömagnetiseringen.' },
    { type: 'title', text: 'Tecken på att din klocka behöver avmagnetiseras', level: 3 },
    { type: 'paragraph', html: 'Vanliga symtom på en magnetiserad klocka inkluderar: att den går flera minuter per dag för fort, inkonsekvent tidsvisning i olika positioner, ett hörbart snabbare tickande, och i extrema fall att klockan stannar helt. Om din automatiska klocka plötsligt börjar gå för fort är magnetisering ofta orsaken och avmagnetisering är en enkel lösning.' },
  ],
  faq: [
    {
      question: 'Hur länge ska jag trycka på avmagnetiseringsknappen?',
      answer: '1 till 3 sekunder är den rekommenderade pulslängden. Börja med 1 sekund och öka vid behov. För långa pulser kan överhetta spolen och förbättrar inte resultaten.',
    },
    {
      question: 'Kan jag avmagnetisera en klocka mer än en gång?',
      answer: 'Ja. Upprepa processen 2 till 3 gånger och vrid klockan 90 grader varje gång. Detta säkerställer att alla axlar exponeras för det växlande fältet. Det finns ingen risk för över-avmagnetisering.',
    },
    {
      question: 'Fungerar avmagnetisering på kvartsur?',
      answer: 'Kvartsur påverkas sällan av magnetisering eftersom de innehåller få ferromagnetiska komponenter. Stegmotorern i vissa kvartsverk kan dock bli magnetiserad, vilket orsakar ojämn visarrörelse. Avmagnetisering är säker för kvartsur.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ställ in tid',
      text: 'Välj 1, 2 eller 3 sekunder beroende på magnetiseringens allvarlighetsgrad.',
    },
    {
      name: 'Positionera klockan',
      text: 'Lägg klockan plant på avmagnetiseringsplattformen, centrerad över spolen.',
    },
    {
      name: 'Tryck och håll',
      text: 'Tryck på Start-knappen samtidigt som avmagnetiseringsknappen och håll intryckt under den inställda tiden.',
    },
    {
      name: 'Släpp och flytta bort',
      text: 'Släpp knappen och flytta långsamt bort klockan minst 1 meter innan du stänger av avmagnetiseraren.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur länge ska jag trycka på avmagnetiseringsknappen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 till 3 sekunder är den rekommenderade pulslängden. Börja med 1 sekund och öka vid behov. För långa pulser kan överhetta spolen och förbättrar inte resultaten.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag avmagnetisera en klocka mer än en gång?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Upprepa processen 2 till 3 gånger och vrid klockan 90 grader varje gång. Detta säkerställer att alla axlar exponeras för det växlande fältet. Det finns ingen risk för över-avmagnetisering.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Fungerar avmagnetisering på kvartsur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kvartsur påverkas sällan av magnetisering eftersom de innehåller få ferromagnetiska komponenter. Stegmotorern i vissa kvartsverk kan dock bli magnetiserad, vilket orsakar ojämn visarrörelse. Avmagnetisering är säker för kvartsur.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Avmagnetiseringstimer för Klockor',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så här avmagnetiserar du en klocka',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ställ in tid',
          'text': 'Välj 1, 2 eller 3 sekunder beroende på magnetiseringens allvarlighetsgrad.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Positionera klockan',
          'text': 'Lägg klockan plant på avmagnetiseringsplattformen, centrerad över spolen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Tryck och håll',
          'text': 'Tryck på Start-knappen samtidigt som avmagnetiseringsknappen och håll intryckt under den inställda tiden.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Släpp och flytta bort',
          'text': 'Släpp knappen och flytta långsamt bort klockan minst 1 meter innan du stänger av avmagnetiseraren.',
        },
      ],
    },
  ],
};
