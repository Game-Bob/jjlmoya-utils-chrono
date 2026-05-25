import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'bandlengte-calculator',
  title: 'Horlogeband Lengte Calculator',
  description: 'Bereken de ideale bandmaat voor jouw pols. Ontvang aanbevelingen voor tweedelige en NATO-bandjes op basis van polsmaat en horlogeafmetingen.',
  ui: {
    title: 'Bandlengte Calculator',
    wristLabel: 'Polsomtrek',
    wristPlaceholder: 'bijv. 170',
    lugLabel: 'Lug-to-lug afstand',
    lugPlaceholder: 'bijv. 45',
    fitLabel: 'Gewenste pasvorm',
    fitTight: 'Straks',
    fitRegular: 'Normaal',
    fitLoose: 'Los',
    unitLabel: 'Eenheid',
    standardLabel: 'Standaard confectiemaat',
    bespokeLabel: 'Maatwerk',
    natoLabel: 'NATO-bandlengte',
    longSide: 'Lange zijde',
    shortSide: 'Korte zijde',
    totalLength: 'Totale lengte',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Polsen < 6.0 in',
    sizeS: 'Small (S) - Polsen 6.0 tot 6.5 in',
    sizeM: 'Medium (M) - Polsen 6.5 tot 7.0 in',
    sizeL: 'Large (L) - Polsen 7.0 tot 7.5 in',
    sizeXL: 'Extra Large (XL) - Polsen 7.5 tot 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Polsen > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Horlogeband Maatgids & Lengte Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De perfecte horlogeband kiezen is essentieel voor zowel draagcomfort als esthetische balans. Een te lange band laat een lelijk eindje flapperen, terwijl een te korte band niet veilig sluit. Deze gids helpt je bij het bepalen van standaard confectiematen, maatwerk afmetingen en NATO-bandlengtes op basis van polsmaat, horlogeontwerp en gewenste pasvorm.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Standaard confectiemaat' },
        { value: '160-190mm', label: 'Past de meeste polsen' },
        { value: '7 gaten', label: 'Typische maatopties' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Tweedelige banden begrijpen: Lange vs. korte zijde',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een tweedelig horlogeband wordt gedefinieerd door twee getallen, zoals <strong>120/80 mm</strong>. Het eerste getal (bijv. 120 mm) is de <strong>lange zijde</strong> (de puntzijde), die aan de 6-uur-positie wordt bevestigd. Het tweede getal (bijv. 80 mm) is de <strong>korte zijde</strong> (de gespzijde), die aan de 12-uur-positie wordt bevestigd. De gesp zelf is niet in deze metingen inbegrepen.',
    },
    {
      type: 'title',
      text: 'Standaard confectiemaat tabel per polsomtrek',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Polsmaat', 'Leren/rubberen bandlengte', 'NATO-bandlengte', 'Aanbevolen pasvorm'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Straks/klein'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Standaard middel'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Standaard groot'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Extra groot'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Dubbel extra groot'],
      ],
    },
    {
      type: 'title',
      text: 'Maatwerk bandlengtes uitgelegd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij het bestellen van een op maat gemaakt band kun je streven naar de perfecte pasvorm. In plaats van je tevreden te stellen met standaard gaatjesposities, berekent een maatwerkband de exacte lengte voor elke zijde, zodat de gesp precies in het midden van de onderkant van je pols rust. De formule gebruikt je totale polsomtrek, trekt de lug-to-lug afstand van het horloge af en verdeelt de resterende lengte volgens de polsgeometrie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Maatwerk banden',
          description: 'Speciaal aangepast aan jouw pols en horlogeafmetingen. Garandeert een perfect gecentreerde gesp zonder overmatig banduiteinde.',
          points: [
            'Perfecte centrering van de gesp',
            'Gaatjes op maat',
            'Geen overmatig banduiteinde',
            'Premium uitstraling en gevoel',
          ],
        },
        {
          title: 'Standaard confectiebanden',
          description: 'Massa geproduceerde maten ontworpen voor een breed scala aan polsen met meerdere gaatjes. Snel en voordelig.',
          points: [
            'Lagere kosten',
            'Direct beschikbaar',
            'Past op meerdere horloges',
            'Gestandaardiseerde afmetingen',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Belangrijke horlogeband terminologie',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Lug-to-lug afstand (Lug-to-Lug)',
          definition: 'De totale verticale afstand van de punt van de bovenste lug tot de punt van de onderste lug. Dit is niet de kastdiameter, maar de totale lengte van het starre horlogehoofd op je pols.',
        },
        {
          term: 'Korte zijde (Gesp)',
          definition: 'Het banddeel dat aan de 12-uur-positie van de kast wordt bevestigd. Het bevat de gesp maar wordt uitgesloten in de lengtemetingen.',
        },
        {
          term: 'Lange zijde (Punt)',
          definition: 'Het banddeel dat aan de 6-uur-positie wordt bevestigd. Het heeft verstelgaten om de strakheid te regelen.',
        },
        {
          term: 'NATO-band',
          definition: 'Een uit één stuk nylon bestaand band dat onder de horlogekast door de veerstangen loopt. Het is zeer verstelbaar en duurzaam.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Je pols correct meten',
      html: 'Wikkel voor een nauwkeurige meting een flexibel meetlint (niet te strak) rond de plek waar je normaal je horloge draagt. Als je geen meetlint hebt, gebruik dan een touwtje of een strook papier, markeer de overlapping en meet de platte lengte met een liniaal.',
    },
    {
      type: 'title',
      text: 'Waarom de lug-to-lug afstand cruciaal is voor de bandmaat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel verzamelaars vergeten dat de horlogekast fungeert als een starre verlenging van de band. Een horloge met een lange lug-to-lug afstand van 50 mm neemt meer ruimte in op de pols dan een 40 mm dresswatch. Dientengevolge heeft het grotere horloge kortere banden nodig om dezelfde totale lusgrootte te bereiken. Het niet meenemen van de lug-to-lug afstand is de belangrijkste reden voor slecht passende banden.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vermijden van gespverschuiving en kastoverhang',
      html: 'Als de korte zijde van je band te lang of te kort is voor je pols, glijdt de gesp naar de zijkant. Hierdoor wordt de horlogekast uit het midden getrokken, wat ongemak veroorzaakt en het risico op krassen op de kast of sluiting vergroot. Zorg er altijd voor dat de gesp gecentreerd is op de platte onderkant van je pols.',
    },
    {
      type: 'proscons',
      title: 'NATO band vs. tweedelig band',
      items: [
        {
          pro: 'NATO-banden zijn zeer verstelbaar en voorkomen verlies van het horloge bij een gebroken veerstang.',
          con: 'NATO-banden voegen dikte toe onder de horlogekast.',
        },
        {
          pro: 'Tweedelige banden houden de kast plat tegen de huid voor een dunner profiel.',
          con: 'Tweedelige banden vereisen nauwkeurige maatvoering en bieden minder verstelmogelijkheden.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe meet je de lengte van een horlogeband?',
      answer: 'De lengte van een horlogeband wordt meestal uitgedrukt in twee getallen zoals 120/80 mm. Het eerste getal is de lengte van de lange zijde (punt), en het tweede is de korte zijde (gesp).',
    },
    {
      question: 'Waar moet de gesp op de pols zitten?',
      answer: 'Idealiter zit de gesp gecentreerd op de onderkant van je pols. Als hij verschoven is, zal de horlogekast uit het midden raken. Het aanpassen van de verhouding tussen lange en korte zijde helpt perfecte centrering te bereiken.',
    },
    {
      question: 'Hoe beïnvloedt de lug-to-lug afstand de benodigde bandlengte?',
      answer: 'De horlogekast is een star onderdeel van de totale bandlus. Een groter horloge met een lange lug-to-lug afstand (bijv. 50 mm) vermindert de benodigde bandlengte om de pols te omwikkelen in vergelijking met een kleiner horloge (bijv. 40 mm) op dezelfde pols.',
    },
    {
      question: 'Aan welke kant komt het lange uiteinde van de band?',
      answer: 'Traditioneel wordt de lange zijde van de band (met de verstelgaten) bevestigd aan de 6-uur-positie van de kast, naar jou toe wijzend. De korte zijde (met de gesp) wordt bevestigd aan de 12-uur-positie.',
    },
    {
      question: 'Hoe strak moet een horlogeband zitten?',
      answer: 'Een band moet strak maar comfortabel zitten. Je moet er één vinger onder kunnen schuiven zonder te forceren. Een te strakke band kan de bloedsomloop belemmeren, terwijl een te losse band de kast laat draaien.',
    },
    {
      question: 'Kan ik een NATO-band op elk horloge gebruiken?',
      answer: 'Ja, zolang het horloge standaard veerstangen heeft met voldoende ruimte tussen de kast en de stang. NATO-banden gaan onder de kast door, dus zeer krappe ruimtes kunnen gebogen veerstangen of dunnere bandmaterialen vereisen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Meet je pols',
      text: 'Gebruik een flexibel meetlint om je polsomtrek in millimeters of inches te bepalen.',
    },
    {
      name: 'Meet de lug-to-lug afstand',
      text: 'Meet de hoogte van de horlogekast van de punt van de bovenste lug tot de punt van de onderste lug.',
    },
    {
      name: 'Kies je gewenste pasvorm',
      text: 'Kies of je een strakke, normale of losse pasvorm verkiest.',
    },
    {
      name: 'Bereken aanbevelingen',
      text: 'Bekijk de standaard confectiemaat, de maatwerk lengtes voor lange/korte zijde en de ideale NATO-lengte.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe meet je de lengte van een horlogeband?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De lengte van een horlogeband wordt meestal uitgedrukt in twee getallen zoals 120/80 mm. Het eerste getal is de lengte van de lange zijde (punt), en het tweede is de korte zijde (gesp).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Waar moet de gesp op de pols zitten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealiter zit de gesp gecentreerd op de onderkant van je pols. Als hij verschoven is, zal de horlogekast uit het midden raken. Het aanpassen van de verhouding tussen lange en korte zijde helpt perfecte centrering te bereiken.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe beïnvloedt de lug-to-lug afstand de benodigde bandlengte?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De horlogekast is een star onderdeel van de totale bandlus. Een groter horloge met een lange lug-to-lug afstand (bijv. 50 mm) vermindert de benodigde bandlengte om de pols te omwikkelen in vergelijking met een kleiner horloge (bijv. 40 mm) op dezelfde pols.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Aan welke kant komt het lange uiteinde van de band?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Traditioneel wordt de lange zijde van de band (met de verstelgaten) bevestigd aan de 6-uur-positie van de kast, naar jou toe wijzend. De korte zijde (met de gesp) wordt bevestigd aan de 12-uur-positie.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Hoe strak moet een horlogeband zitten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Een band moet strak maar comfortabel zitten. Je moet er één vinger onder kunnen schuiven zonder te forceren. Een te strakke band kan de bloedsomloop belemmeren, terwijl een te losse band de kast laat draaien.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kan ik een NATO-band op elk horloge gebruiken?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, zolang het horloge standaard veerstangen heeft met voldoende ruimte tussen de kast en de stang. NATO-banden gaan onder de kast door, dus zeer krappe ruimtes kunnen gebogen veerstangen of dunnere bandmaterialen vereisen.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horlogeband Lengte Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Horlogeband Lengte Calculator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Meet je pols',
          'text': 'Gebruik een flexibel meetlint om je polsomtrek in millimeters of inches te bepalen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Meet de lug-to-lug afstand',
          'text': 'Meet de hoogte van de horlogekast van de punt van de bovenste lug tot de punt van de onderste lug.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Kies je gewenste pasvorm',
          'text': 'Kies of je een strakke, normale of losse pasvorm verkiest.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Bereken aanbevelingen',
          'text': 'Bekijk de standaard confectiemaat, de maatwerk lengtes voor lange/korte zijde en de ideale NATO-lengte.'
        }
      ]
    } as any
  ]
};
