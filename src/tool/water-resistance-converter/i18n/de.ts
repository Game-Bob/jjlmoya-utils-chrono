import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'wasserdichtigkeit-umrechner',
  title: 'Uhren Wasserdichtigkeit Umrechner: Meter, ATM, Bar und Feet',
  description: 'Rechnen Sie Wasserdichtigkeitsangaben von Uhren zwischen Metern, Feet, ATM und Bar um. Erfahren Sie, was jede Angabe für den Alltag, beim Schwimmen und Tauchen bedeutet.',
  ui: {
    title: 'Wasserdichtigkeit Umrechner',
    depthLabel: 'Wasserdichtigkeit',
    enterDepth: 'Dichtigkeitswert eingeben',
    unitMeters: 'Meter (m)',
    unitFeet: 'Feet (ft)',
    unitATM: 'Atmosphären (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Entsprechende Werte',
    ratingLabel: 'Bewertung',
    whatItMeans: 'Bedeutung',
    notWaterResistant: 'Nicht Wassergeschützt',
    notWaterResistantDesc: 'Keine Spritzer. Ganz vom Wasser fernhalten.',
    handWash: 'Spritzwassergeschützt',
    handWashDesc: 'Händewaschen, Regen, leichte Spritzer. Nicht schwimmen oder duschen.',
    showerSwim: 'Duschen & Oberflächenschwimmen',
    showerSwimDesc: 'Duschen, flaches Schwimmen an der Oberfläche. Kein Tauchen oder Schnorcheln.',
    snorkeling: 'Schwimmen & Schnorcheln',
    snorkelingDesc: 'Beckenschwimmen, Schnorcheln, Wassersport. Ausgezeichnete Alltagsdichtigkeit.',
    scubaDiving: 'Sporttauchen',
    scubaDivingDesc: 'Gerätetauchen, anspruchsvolle Meeresaktivitäten. ISO konform.',
    saturationDiving: 'Tiefen / Sättigungstauchen',
    saturationDivingDesc: 'Professionelles Sättigungstauchen. Extreme Tiefen. Heliumauslassventil Kontext.',
    tipTitle: 'Tipp',
    tipContent: 'Wasserdichtigkeit lässt mit der Zeit nach. Dichtungen sollten jährlich geprüft und alle 3-5 Jahre ersetzt werden.',
  },
  seo: [
    { type: 'title', text: 'Uhren Wasserdichtigkeit Umrechner-Meter, ATM, Bar & Feet verstehen', level: 2 },
    { type: 'paragraph', html: 'Eine Wasserdichtigkeitsangabe von 30 Metern bedeutet nicht, dass Sie 30 Meter tief tauchen können. Sie bedeutet, dass die Uhr Spritzer und leichten Regen aushält. Dieser Umrechner übersetzt zwischen <strong>Metern, Feet, Atmosphären (ATM) und Bar</strong> und zeigt Ihnen, was jede Angabe tatsächlich erlaubt.' },
    { type: 'title', text: 'Die Wahrheit über Wasserdichtigkeitsangaben', level: 3 },
    { type: 'paragraph', html: 'Die Wasserdichtigkeit von Uhren wird unter statischem Druck im Labor geprüft. Im echten Alltag erzeugen Armbewegungen, Tauchen und Temperaturwechsel einen weit höheren dynamischen Druck. Eine 30m / 3 ATM Uhr ist nur spritzwassergeschützt. Zum Schwimmen brauchen Sie mindestens 100m / 10 ATM. Für Sporttauchen sind 200m / 20 ATM der Standardeinstieg.' },
    { type: 'title', text: 'Warum Wasserdichtigkeit mit der Zeit nachlässt', level: 3 },
    { type: 'paragraph', html: 'Die Gummidichtungen und O-Ringe, die Ihre Uhr abdichten, trocknen aus, werden rissig und verlieren mit der Zeit an Elastizität. Hitze, UV-Licht und Chemikalien beschleunigen diesen Prozess. Eine Uhr, die einst bis 100m wasserdicht war, kann nach 5 Jahren ohne Wartung nur noch spritzwassergeschützt sein. Lassen Sie Ihre Dichtungen jährlich prüfen und alle 3 bis 5 Jahre ersetzen.' },
    { type: 'title', text: 'ISO 6425-Der Standard für Taucheruhren', level: 3 },
    { type: 'paragraph', html: 'Damit eine Uhr als "Taucheruhr" bezeichnet werden darf, muss sie die ISO 6425 Norm erfüllen: mindestens 100m Wasserdichtigkeit, eine einseitig drehbare Lünette, leuchtende Markierungen und eine verschraubte Krone. Uhren, die diesen Standard erfüllen, werden 25% über der angegebenen Tiefe geprüft. Eine ISO geprüfte 200m Uhr wird bei 250m getestet.' },
  ],
  faq: [
    {
      question: 'Kann ich mit einer 30 Meter wasserdichten Uhr schwimmen?',
      answer: 'Nein. Eine 30m / 3 ATM Angabe bedeutet nur Spritzwasserschutz-Händewaschen, Regen und Schweiß. Beim Schwimmen entsteht dynamischer Druck, der den statischen Prüfdruck übersteigt. Fürs Schwimmen wählen Sie mindestens 100m / 10 ATM.',
    },
    {
      question: 'Was ist der Unterschied zwischen ATM, Bar und Metern?',
      answer: '1 ATM = 1 bar ≈ 10 Meter statische Wassersäule. In der Uhrenindustrie sind sie im Wesentlichen gleichwertig. Eine 10 ATM Uhr ist dasselbe wie eine 10 Bar Uhr und für etwa 100 Meter ausgelegt.',
    },
    {
      question: 'Wie oft sollte ich die Wasserdichtigkeit meiner Uhr prüfen lassen?',
      answer: 'Einmal im Jahr, besonders vor dem Kontakt mit Wasser. Dichtungen verschleißen. Alle 3-5 Jahre sollten alle Dichtungen bei einer Generalüberholung ausgetauscht werden.',
    },
    {
      question: 'Was bedeutet die ISO 6425 Zertifizierung?',
      answer: 'ISO 6425 ist der internationale Standard für Taucheruhren. Er verlangt mindestens 100m Dichtigkeit, eine einseitig drehbare Lünette, leuchtende Markierungen und eine Prüfung 25% über der angegebenen Tiefe.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Wert eingeben',
      text: 'Geben Sie den Wasserdichtigkeitswert Ihrer Uhr ein und wählen Sie die Einheit (Meter, Feet, ATM oder Bar).',
    },
    {
      name: 'Entsprechungen ablesen',
      text: 'Die Karte zeigt die umgerechneten Werte in allen vier Einheiten gleichzeitig an.',
    },
    {
      name: 'Empfehlung prüfen',
      text: 'Die hervorgehobene Karte zeigt, welche Aktivitäten bei Ihrer Dichtigkeitsstufe sicher sind.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Kann ich mit einer 30 Meter wasserdichten Uhr schwimmen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nein. Eine 30m / 3 ATM Angabe bedeutet nur Spritzwasserschutz-Händewaschen, Regen und Schweiß. Fürs Schwimmen wählen Sie mindestens 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist der Unterschied zwischen ATM, Bar und Metern?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 Meter statische Wassersäule. In der Uhrenindustrie sind sie im Wesentlichen gleichwertig.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie oft sollte ich die Wasserdichtigkeit meiner Uhr prüfen lassen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Einmal im Jahr, besonders vor dem Kontakt mit Wasser. Alle 3-5 Jahre sollten alle Dichtungen bei einer Generalüberholung ausgetauscht werden.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was bedeutet die ISO 6425 Zertifizierung?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 verlangt mindestens 100m Dichtigkeit, eine einseitig drehbare Lünette, leuchtende Markierungen und eine Prüfung 25% über der angegebenen Tiefe.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhren Wasserdichtigkeit Umrechner',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man Wasserdichtigkeitsangaben von Uhren umrechnet',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Wert eingeben',
          'text': 'Geben Sie den Wasserdichtigkeitswert Ihrer Uhr ein und wählen Sie die Einheit.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Entsprechungen ablesen',
          'text': 'Die Karte zeigt die umgerechneten Werte in allen vier Einheiten gleichzeitig.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Empfehlung prüfen',
          'text': 'Die hervorgehobene Karte zeigt, welche Aktivitäten bei Ihrer Dichtigkeitsstufe sicher sind.',
        },
      ],
    },
  ],
};
