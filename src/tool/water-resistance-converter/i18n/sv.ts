import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'vattenbestandighet-omvandlare',
  title: 'Klocka Vattenbestandighet Omvandlare: Meter, ATM, Bar och Fot',
  description: 'Omvandla klockors vattenbeständighetsklasser mellan meter, fot, ATM och bar. Se vad varje klass faktiskt innebär för vardagligt bruk, simning och dykning.',
  ui: {
    title: 'Vattenbeständighet Omvandlare',
    depthLabel: 'Vattenbeständighet',
    enterDepth: 'Ange djupklass',
    unitMeters: 'Meter (m)',
    unitFeet: 'Fot (ft)',
    unitATM: 'Atmosfärer (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Motsvarande Värden',
    ratingLabel: 'Klass',
    whatItMeans: 'Vad Det Betyder',
    notWaterResistant: 'Inte Vattenbeständig',
    notWaterResistantDesc: 'Inga stänk. Håll borta från vatten helt och hållet.',
    handWash: 'Stänktålig',
    handWashDesc: 'Handtvätt, regn, lätta stänk. Ingen simning, ingen dusch.',
    showerSwim: 'Dusch och Ytsimning',
    showerSwimDesc: 'Duscha, ytsimning i bassäng. Ingen dykning eller snorkling.',
    snorkeling: 'Simning och Snorkling',
    snorkelingDesc: 'Bassängsimning, snorkling, vattensport. Utmärkt daglig beständighet.',
    scubaDiving: 'Rekreationsdykning',
    scubaDivingDesc: 'Sportdykning, högintensiva marina aktiviteter. ISO kompatibel.',
    saturationDiving: 'Djup / Mättnadsdykning',
    saturationDivingDesc: 'Professionell mättnadsdykning. Extrema djup. Heliumventil kontext.',
    tipTitle: 'Tips',
    tipContent: 'Vattenbeständighet försämras med tiden. Packningar och tätningar bör testas årligen och bytas ut var 3-5 år.',
  },
  seo: [
    { type: 'title', text: 'Klocka Vattenbeständighet Omvandlare-Avkoda Meter, ATM, Bar & Fot', level: 2 },
    { type: 'paragraph', html: 'En vattenbeständighetsklass på 30 meter betyder inte att du kan dyka till 30 meter. Det betyder att klockan klarar stänk och lätt regn. Denna omvandlare översätter mellan <strong>meter, fot, atmosfärer (ATM) och bar</strong> och talar om vad varje klass faktiskt tillåter.' },
    { type: 'title', text: 'Sanningen Om Vattenbeständighetsklasser', level: 3 },
    { type: 'paragraph', html: 'Klockors vattenbeständighet testas under statiskt tryck i ett laboratorium. Verkliga förhållanden-att röra armen, dyka, temperaturförändringar-skapar dynamiskt tryck som är mycket högre. En 30m / 3 ATM klocka är endast stänktålig. För simning behöver du minst 100m / 10 ATM. För sportdykning är 200m / 20 ATM standard ingångsnivån.' },
    { type: 'title', text: 'Varför Vattenbeständighet Försämras Över Tid', level: 3 },
    { type: 'paragraph', html: 'Gummipackningarna och O-ringarna som tätar din klocka torkar ut, spricker och komprimeras med tiden. Värme, UV-ljus och kemikalier accelererar denna process. En klocka som en gång var vattenbeständig till 100m kan efter 5 år utan service endast vara stänktålig. Låt dina tätningar testas årligen och bytas ut var 3 till 5 år.' },
    { type: 'title', text: 'ISO 6425-Standard för Dykarklockor', level: 3 },
    { type: 'paragraph', html: 'För att en klocka ska kallas "dykarklocka" måste den uppfylla ISO 6425 standarder: minst 100m vattenbeständighet, en enkelriktad ring, självlysande markeringar och en skruvkrona. Klockor som uppfyller denna standard testas 25% över sitt klassade djup. En ISO certifierad 200m klocka testas vid 250m.' },
  ],
  faq: [
    {
      question: 'Kan jag simma med en 30 meter vattenbeständig klocka?',
      answer: 'Nej. En 30m / 3 ATM klass innebär endast stänktålighet-handtvätt, regn och svett. Simning skapar dynamiskt tryck som överstiger det statiska testtrycket. För simning, välj minst 100m / 10 ATM.',
    },
    {
      question: 'Vad är skillnaden mellan ATM, bar och meter?',
      answer: '1 ATM = 1 bar ≈ 10 meter statisk vattenpelare. Inom klockindustrin är de i huvudsak likvärdiga. En 10 ATM klocka är samma som en 10 bar klocka och är klassad till cirka 100 meter.',
    },
    {
      question: 'Hur ofta bör jag testa min klockas vattenbeständighet?',
      answer: 'En gång om året, särskilt före vattenexponering. Packningar och tätningar slits ut. Var 3-5 år bör alla tätningar bytas ut vid en full service.',
    },
    {
      question: 'Vad innebär ISO 6425 certifiering?',
      answer: 'ISO 6425 är den internationella standarden för dykarklockor. Den kräver minst 100m beständighet, en enkelriktad ring, självlysande markeringar och testning 25% över det klassade djupet.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ange din klass',
      text: 'Skriv in din klockas vattenbeständighetsnummer och välj enhet (meter, fot, ATM eller bar).',
    },
    {
      name: 'Läs motsvarigheterna',
      text: 'Kortet visar de omvandlade värdena i alla fyra enheterna samtidigt.',
    },
    {
      name: 'Kontrollera rekommendationen',
      text: 'Det markerade kortet visar vilka aktiviteter som är säkra med din klockas klass.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kan jag simma med en 30 meter vattenbeständig klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nej. En 30m / 3 ATM klass innebär endast stänktålighet-handtvätt, regn och svett. För simning, välj minst 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad är skillnaden mellan ATM, bar och meter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 meter statisk vattenpelare. Inom klockindustrin är de i huvudsak likvärdiga.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur ofta bör jag testa min klockas vattenbeständighet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En gång om året, särskilt före vattenexponering. Var 3-5 år bör alla tätningar bytas ut vid en full service.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad innebär ISO 6425 certifiering?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 kräver minst 100m beständighet, en enkelriktad ring, självlysande markeringar och testning 25% över det klassade djupet.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Klocka Vattenbeständighet Omvandlare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hur man omvandlar klockors vattenbeständighetsklasser',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ange din klass',
          'text': 'Skriv in din klockas vattenbeständighetsnummer och välj enhet.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Läs motsvarigheterna',
          'text': 'Kortet visar de omvandlade värdena i alla fyra enheterna samtidigt.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kontrollera rekommendationen',
          'text': 'Det markerade kortet visar vilka aktiviteter som är säkra med din klockas klass.',
        },
      ],
    },
  ],
};
