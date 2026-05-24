import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'kroon-referentie-gids',
  title: 'Referentiegids voor Horlogekronen',
  description: 'Interactieve gids voor kronestanden, windingrichtingen en instelfuncties van populaire uurwerken.',
  ui: {
    title: 'Kroneninstellingen',
    movementLabel: 'Uurwerk',
    selectMovement: 'Selecteer uurwerk',
    customMovement: 'Aangepast',
    positionLabel: 'Stand',
    unscrewFirst: 'Draai de kroon eerst los',
    windingLabel: 'Winding',
    hackLabel: 'Hack',
    dangerZoneLabel: 'Vermijd 21:00\u20133:00',
    directionCW: 'Rechtsom',
    directionCCW: 'Linksom',
    directionBoth: 'Tweerichtings',
    pullHint: 'Trek aan kroon',
    clickPosition: 'Klik op een stand',
    position0Title: 'Ruststand',
    position0Desc: 'Kroon is ingedrukt. Het horloge loopt normaal.',
    position0Detail: 'Geen winding- of instelfuncties zijn actief.',
    position1Title: 'Handmatig opwinden',
    position1Desc: 'Draai de kroon rechtsom om de veer op te winden. U voelt weerstand naarmate de veer strakker wordt.',
    position1Detail: 'Ongeveer 30\u201340 volledige omwentelingen vanuit stilstand. Automatische rotors winden ook bij tijdens het dragen.',
    position2Title: 'Datum snelinstelling',
    position2Desc: 'Draai de kroon rechtsom om de datum vooruit te zetten. De uurwijzer blijft synchroon met de lopende seconden.',
    position2Detail: 'VERMIJD het snelinstellen van de datum tussen 21:00 en 3:00 uur terwijl het datummechanisme is ingeschakeld.',
    position3Title: 'Tijd instellen',
    position3Desc: 'Draai de kroon in beide richtingen om de wijzers te verzetten. De secondewijzer stopt (hackt) voor nauwkeurige synchronisatie.',
    position3Detail: 'Trek naar stand 3, wacht tot de seconden 12 bereiken, trek vervolgens volledig uit. Roteer om de tijd in te stellen en duw terug.',
    screwDownHint: 'Vergeet niet de kroon terug te draaien voor waterdichtheid.',
    noQuickSet: 'Geen snelinstelling',
    noHack: 'Nee',
    hasHack: 'Ja',
    crownPositions: 'Kronestanden',
    noteTitle: 'Opmerking',
  },
  seo: [
    { type: 'title', text: 'Gids voor Kronestanden — Hoe Windt u Op, Stelt u Datum & Tijd Correct In', level: 2 },
    { type: 'paragraph', html: 'De kroon is de enige fysieke interface tussen u en uw horloge-uurwerk. Verkeerd gebruik — terugwinden, de datum om middernacht instellen of te hard trekken — kan het mechanisme beschadigen. Deze gids legt elke kronenstand uit voor <strong>ETA, Sellita, Miyota, Seiko en Unitas</strong>-kalibers, zodat u nooit meer hoeft te gissen.' },
    { type: 'title', text: 'Kronestanden in één oogopslag', level: 3 },
    { type: 'glossary', items: [
      { term: 'Stand 0 (Ruststand)', definition: 'Kroon ingedrukt of vastgeschroefd. Horloge loopt normaal. Geen functies actief. Keer hier altijd terug na het instellen.' },
      { term: 'Stand 1 (Opwinden)', definition: 'Eerste uittrekstand of losgedraaide toestand. Rechtsom draaien om de veer op te winden. De meeste automaten winden ook via de rotor.' },
      { term: 'Stand 2 (Datum snelinstelling)', definition: 'Tweede uittrekstand. Rechtsom draaien om de datum vooruit te zetten. Vermijd gebruik tussen 21:00\u20133:00 uur wanneer het datummechanisme actief is.' },
      { term: 'Stand 3 (Tijd instellen)', definition: 'Derde uittrekstand. Seconden stoppen met hacken voor nauwkeurige uitlijning. Vrij ronddraaien om de tijd in te stellen. Aanwezig op de meeste moderne automaten.' },
    ] },

    { type: 'title', text: 'Uurwerkvergelijking: Kronenfuncties', level: 3 },
    { type: 'table', headers: ['Uurwerk', 'Standen', 'Hack', 'Snelinst.', 'Windingrich.'], rows: [
      ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['Miyota 8215', '2 (0,1,3)', 'Nee', 'Geen', 'R'],
      ['Miyota 9015', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['Seiko 6R35', '3 (0,1,2,3)', 'Ja', 'Datum (R)', 'R'],
      ['Unitas 6497/6498', '1 (0,1,3)', 'Nee', 'Geen', 'R'],
    ] },

    { type: 'diagnostic', variant: 'warning', title: 'Veelgemaakte Kronenfouten', icon: 'mdi:alert', badge: 'NIET DOEN', html: 'Stel de datum nooit snel in tussen <strong>21:00 en 3:00 uur</strong> terwijl het datumwiel is ingeschakeld. Dit kan tanden beschadigen en een volledige onderhoudsbeurt vereisen. Als u de datum toch in dit tijdsvenster moet wijzigen, zet dan eerst de tijd vooruit na 3:00 uur, stel de datum in en draai dan terug naar de juiste tijd.' },

    { type: 'tip', title: 'Schroefkronen', html: 'Duikhorloges en sporthorloges hebben vaak schroefkronen voor waterdichtheid. <strong>Draai altijd eerst los voordat u trekt</strong>. Draai linksom tot de kroon uitklikt, trek dan naar de gewenste stand. Na het instellen induwen, dan rechtsom draaien met lichte druk tot deze vastzit. <strong>Niet te vast aandraaien.</strong>' },

    { type: 'comparative', columns: 2, items: [
      { title: 'Standaardkroon', icon: 'mdi:crown', description: 'Trekduwkroon zoals bij de meeste nette horloges en alledaagse automaten. 2\u20134 standen. Waterdichtheid doorgaans 30\u2013100 m.', points: ['Directe toegang, geen losdraaien', 'Beperkte waterdichtheid', 'Gebruikelijk bij ETA, Miyota, Seiko'] },
      { title: 'Schroefkroon', icon: 'mdi:lock', description: 'Geschroefde kroon die in de kastbuis wordt gedraaid. Standaard op duikhorloges en gereedschapshorloges. Waterdichtheid 200 m+.', points: ['Superieure waterdichtheid', 'Moet losgedraaid worden voor gebruik', 'Gebruikelijk bij Rolex, Omega, Seiko Prospex'], highlight: true },
    ] },

    { type: 'summary', title: 'Snelle Referentie', items: [
      'Wind altijd rechtsom — terugwinden activeert de slipkoppeling maar windt niet op.',
      'Als uw horloge een schroefkroon heeft, draai deze dan los voordat u naar een stand trekt.',
      'Vermijd datum snelinstelling tussen 21:00 en 3:00 uur. Zet de tijd eerst vooruit na 3:00 uur indien nodig.',
      'Handopwindbare uurwerken (bv. Unitas 6498) hebben minder standen. Wind volledig op voordat u de tijd instelt.',
      'Niet-hackende uurwerken (bv. Miyota 8215) vereisen een andere techniek: draai voorbij de gewenste minuut en dan langzaam terug.',
    ] },
  ],
  faq: [
    {
      question: 'Hoeveel kronestanden heeft mijn horloge?',
      answer: 'De meeste automatische uurwerken hebben 3 functionele standen naast de ruststand: stand 1 voor handmatig opwinden, stand 2 voor datum snelinstelling en stand 3 voor tijd instellen met hacking. Handopwindbare uurwerken zoals de Unitas 6498 hebben slechts 1 functionele stand (opwinden, met tijd instellen na verder uittrekken). Schroefkronen voegen een extra stap toe: losdraaien voor het trekken.',
    },
    {
      question: 'Kan ik mijn horloge beschadigen door terug te winden?',
      answer: 'Nee, maar het doet niets. Moderne uurwerken gebruiken een slipkoppeling die ontkoppelt bij terugdraaien, dus terugwinden veroorzaakt geen schade maar windt de veer ook niet op. Wind altijd rechtsom voor handmatig opwinden. De enige uitzondering zijn sommige vintage zakhorloges en vroege automatische uurwerken.',
    },
    {
      question: 'Wat is de gevarenzone voor datumwijziging en hoe vermijd ik die?',
      answer: 'De gevarenzone is doorgaans van 21:00 tot 3:00 uur, wanneer het datummechanisme fysiek in contact is met het datumwiel. Snelinstellen in dit venster kan tandwieltanden beschadigen. Om de datum veilig in te stellen: zet de tijd vooruit na 3:00 uur, stel de datum in op de vorige dag en draai de tijd dan vooruit naar de juiste datum en tijd.',
    },
    {
      question: 'Waarom stopt mijn secondewijzer niet wanneer ik de kroon uittrek?',
      answer: 'Sommige uurwerken hebben geen hackmechanisme. Veelvoorkomende niet-hackende kalibers zijn de Miyota 8215, Unitas 6497/6498 en veel vintage uurwerken. Om de tijd nauwkeurig in te stellen op een niet-hackend uurwerk: draai de kroon 5\u201310 minuten voorbij uw doelminuut en draai dan langzaam terug tot de minuutwijzer exact op de gewenste markering staat.',
    },
    {
      question: 'Hoe weet ik hoeveel omwentelingen nodig zijn om mijn horloge volledig op te winden?',
      answer: 'De meeste automatische uurwerken hebben 30\u201340 volledige kroonomwentelingen nodig vanuit stilstand. Handopwindbare uurwerken variëren: de Unitas 6498 heeft ongeveer 30\u201335 omwentelingen nodig, terwijl de Seiko 6R35 met zijn 70-uursreserve 50\u201360 omwentelingen nodig heeft. Stop wanneer u duidelijke weerstand voelt — doorzetten kan de veer beschadigen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Vind uw uurwerkkaliber',
      text: 'Kijk op de achterkant van de kast (vaak gegraveerd) of op het uurwerk zelf door een transparante achterkant. Veelvoorkomende nummers: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Selecteer het in de gids',
      text: 'Kies uw uurwerk uit het keuzemenu. De kroonweergave en het paneel worden bijgewerkt met uw exacte standen, windingrichting en functies.',
    },
    {
      name: 'Doorloop elke stand',
      text: 'Klik op de stand-chips (0\u20133) of gebruik de trek-knop. Lees de beschrijving en let op de waarschuwing voor de gevarenzone bij datum instellen.',
    },
    {
      name: 'Pas toe op uw horloge',
      text: 'Houd de gids open naast u en oefen op uw eigen horloge. Wind in de juiste richting, vermijd de gevarenzone en draai de kroon daarna weer vast.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoeveel kronestanden heeft mijn horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste automatische uurwerken hebben 3 functionele standen naast de ruststand: stand 1 voor handmatig opwinden, stand 2 voor datum snelinstelling en stand 3 voor tijd instellen met hacking.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kan ik mijn horloge beschadigen door terug te winden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nee. Moderne uurwerken gebruiken een slipkoppeling die ontkoppelt bij terugdraaien, dus terugwinden veroorzaakt geen schade maar windt de veer ook niet op.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat is de gevarenzone voor datumwijziging?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De gevarenzone is doorgaans van 21:00 tot 3:00 uur. Om de datum veilig in te stellen: zet de tijd vooruit na 3:00 uur, stel de datum in op de vorige dag en draai dan vooruit.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Waarom stopt mijn secondewijzer niet wanneer ik de kroon uittrek?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sommige uurwerken hebben geen hackmechanisme. Veelvoorkomende niet-hackende kalibers zijn de Miyota 8215 en Unitas 6497/6498. Tijd instellen: draai voorbij de gewenste tijd, dan langzaam terug.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hoeveel omwentelingen om mijn horloge volledig op te winden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De meeste automatische uurwerken hebben 30-40 volledige kroonomwentelingen nodig. Handopwindbare uurwerken variëren. Stop wanneer u duidelijke weerstand voelt.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Referentiegids voor Horlogekronen',
      'operatingSystem': 'Alle',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Vereist HTML5. Vereist JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'De Referentiegids voor Horlogekronen gebruiken',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Vind uw uurwerkkaliber',
          'text': 'Kijk op de achterkant van de kast (vaak gegraveerd) of op het uurwerk zelf door een transparante achterkant. Veelvoorkomende nummers: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Selecteer het in de gids',
          'text': 'Kies uw uurwerk uit het keuzemenu. De kroonweergave en het paneel worden bijgewerkt met uw exacte standen, windingrichting en functies.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Doorloop elke stand',
          'text': 'Klik op de stand-chips (0\u20133) of gebruik de trek-knop. Lees de beschrijving en let op de waarschuwing voor de gevarenzone bij datum instellen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pas toe op uw horloge',
          'text': 'Houd de gids open naast u en oefen op uw eigen horloge. Wind in de juiste richting, vermijd de gevarenzone en draai de kroon daarna weer vast.',
        },
      ],
    },
  ],
};
