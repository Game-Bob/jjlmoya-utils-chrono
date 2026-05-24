import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'uppskattning-av-kraftreserv',
  title: 'Uppskatta kraftreserven i din klocka',
  description: 'Uppskatta hur mycket kraftreserv din klocka har kvar baserat på kronvarv och bäntimmar. Fungerar med populära ETA-, Sellita-, Miyota-, Seiko- och Rolex-kalibrar.',
  ui: {
    title: 'Kraftreservuppskattning',
    movementLabel: 'Urverk',
    selectMovement: 'Välj urverk',
    customMovement: 'Anpassat',
    turnsLabel: 'Kronvarv',
    hoursLabel: 'Bäntid',
    turnsInput: 'Varv',
    hoursInput: 'Tim.',
    activityLabel: 'Aktivitet',
    activityLow: 'Skrivbord',
    activityMedium: 'Promenad',
    activityHigh: 'Aktiv',
    calculate: 'Beräkna',
    reserveRemaining: 'Återstående reserv',
    hoursRemaining: 'Kvarvarande',
    chargePercent: 'Uppladdning',
    resultLabel: 'Uppskattad reserv',
    stopTimeLabel: 'Går till',
    powerReserveHours: 'Reserv (h)',
    fullWindTurns: 'Varv till fullt',
    step1: 'Välj ditt urverk från rullgardinsmenyn.',
    step2: 'Ange kronvarv och bäntimmar.',
    step3: 'Tryck på Beräkna för att se din reserv.',
    tipTitle: 'Tips',
    tipContent: 'Manuella urverk laddas bara när du vrider på kronan. Automatiska urverk laddas även medan de bärs.',
  },
  seo: [
    { type: 'title', text: 'Uppskatta kraftreserven i din klocka \u2014 hur mycket kraft har ditt urverk kvar?', level: 2 },
    { type: 'paragraph', html: 'Undrar du hur mycket kraft som finns kvar i din mekaniska klocka? Oavsett om du vred på kronan i morse eller bar den hela dagen, ger denna uppskattning en ungefärlig laddningsnivå och återstående tid för populära kalibrar som <strong>ETA, Sellita, Miyota, Seiko och Rolex</strong>.' },
    { type: 'title', text: 'Så fungerar kraftreserv i en mekanisk klocka', level: 3 },
    { type: 'paragraph', html: 'Kraftreserven är mängden energi som lagrats i drivfjädern. När du vrider på kronan spänner du drivfjädern och lagrar potentiell energi. En automatisk rotor laddar också drivfjädern medan du bär klockan. Energin förbrukas sedan i en jämn takt \u2014 vanligtvis 2\u20133% per timme \u2014 tills klockan stannar.' },
    { type: 'title', text: 'Kronuppdragning vs. rotorladdning', level: 3 },
    { type: 'paragraph', html: 'Manuell uppdragning via kronan är det mest effektiva sättet att ladda en klocka \u2014 varje helt varv tillför en förutsägbar mängd energi, vanligtvis cirka 2,5% av den totala reserven. Att bära klockan laddar långsammare och beror på din aktivitetsnivå: en kontorsarbetare kan ladda 4\u20136% per timme, medan en aktiv person kan ladda 8\u201310%. Denna uppskattning använder ett konservativt medelvärde.' },
    { type: 'title', text: 'Varför kraftreservsuppskattning är viktig', level: 3 },
    { type: 'paragraph', html: 'Att känna till klockans laddningsnivå hjälper dig att undvika oväntade stopp. En klocka som stannar över natten kan behöva mer uppdragning innan läggdags, eller så får den inte tillräckligt med bäntid. Använd detta verktyg för att förstå dina laddningsvanor och hålla din automatklocka igång.' },
  ],
  faq: [
    {
      question: 'Hur mycket laddar ett kronvarv klockan?',
      answer: 'Det beror på urverket. De flesta automatiska kalibrar når full laddning på 30\u201340 varv, så varje varv tillför cirka 2,5\u20133,3% av den totala reserven. Handuppdragna urverk som Unitas 6498 behöver också cirka 35 varv för full laddning.',
    },
    {
      question: 'Laddar det lika mycket att bära klockan som att dra upp den?',
      answer: 'Att bära klockan laddar långsammare och mer varierat. Vid skrivbordsarbete kan du ladda 4\u20136% per timme genom rotorn. Vid aktiv rörelse (promenader, sport) kan det nå 8\u201310% per timme. Handuppdragning är snabbare och mer förutsägbar.',
    },
    {
      question: 'Hur mycket reserv förlorar en klocka per timme?',
      answer: 'Förbrukningen är konstant: dividera 100 med kraftreserven i timmar. Ett 38-timmars urverk förlorar cirka 2,6% per timme, ett 42-timmars 2,4% och ett 70-timmars cirka 1,4% per timme.',
    },
    {
      question: 'Kan jag dra över min klocka?',
      answer: 'Moderna automatiska urverk har en slirkoppling som förhindrar överdragning. När drivfjädern är fullt laddad glider ytterligare varv bara. Handuppdragna urverk har också en stoppmekanism, även om våld efter stoppet kan skada drivfjädern.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Välj ditt urverk',
      text: 'Välj din klockas kaliber från rullgardinsmenyn. Om den inte finns med, välj "Anpassat" och ange dess kraftreserv och varv till full laddning.',
    },
    {
      name: 'Ange dina värden',
      text: 'Skriv in hur många kronvarv du gjorde, eller hur många timmar du bar klockan idag. Du kan fylla i båda för en kombinerad uppskattning.',
    },
    {
      name: 'Beräkna',
      text: 'Tryck på Beräkna-knappen. Resultatet visar uppskattad laddningsprocent och återstående timmar av kraftreserven.',
    },
    {
      name: 'Justera dina vanor',
      text: 'Använd resultaten för att avgöra om du behöver mer uppdragning innan läggdags eller mer bäntid under dagen för att hålla klockan igång.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur mycket laddar ett kronvarv klockan?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Det beror på urverket. De flesta automatiska kalibrar når full laddning på 30\u201340 varv, så varje varv tillför cirka 2,5\u20133,3% av den totala reserven. Handuppdragna urverk som Unitas 6498 behöver också cirka 35 varv för full laddning.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Laddar det lika mycket att bära klockan som att dra upp den?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Att bära klockan laddar långsammare och mer varierat. Vid skrivbordsarbete kan du ladda 4\u20136% per timme genom rotorn. Vid aktiv rörelse kan det nå 8\u201310% per timme. Handuppdragning är snabbare och mer förutsägbar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur mycket reserv förlorar en klocka per timme?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Förbrukningen är konstant: dividera 100 med kraftreserven i timmar. Ett 38-timmars urverk förlorar cirka 2,6% per timme, ett 42-timmars 2,4% och ett 70-timmars cirka 1,4% per timme.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan jag dra över min klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Moderna automatiska urverk har en slirkoppling som förhindrar överdragning. När drivfjädern är fullt laddad glider ytterligare varv bara.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uppskatta kraftreserven i din klocka',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så här uppskattar du din klockas kraftreserv',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Välj ditt urverk',
          'text': 'Välj din klockas kaliber från rullgardinsmenyn. Om den inte finns med, välj "Anpassat" och ange dess kraftreserv och varv till full laddning.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ange dina värden',
          'text': 'Skriv in hur många kronvarv du gjorde, eller hur många timmar du bar klockan idag. Du kan fylla i båda för en kombinerad uppskattning.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Beräkna',
          'text': 'Tryck på Beräkna-knappen. Resultatet visar uppskattad laddningsprocent och återstående timmar av kraftreserven.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Justera dina vanor',
          'text': 'Använd resultaten för att avgöra om du behöver mer uppdragning innan läggdags eller mer bäntid under dagen för att hålla klockan igång.',
        },
      ],
    },
  ],
};
