import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'vergelijk-horlogematen',
  title: 'Watch Size Comparator–visuele pasvorm op uw pols',
  description: 'Vergelijk horlogekasten visueel. Voer diameter, lug-to-lug en polsmaat in om te zien hoe een horloge past voordat u koopt.',
  ui: {
    title: 'Watch Size Comparator',
    addWatch: 'Horloge toevoegen',
    watchName: 'Horlogenaam',
    watchNamePlaceholder: 'bijv. Rolex Submariner',
    caseDiameter: 'Kastdiameter',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Dikte',
    wristSize: 'Polsmaat',
    wristSizePlaceholder: 'bijv. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Verwijderen',
    yourWatches: 'Uw horloges',
    fitLegend: 'Pasvorm legenda',
    excellentFit: 'Uitstekend',
    goodFit: 'Goed',
    borderlineFit: 'Op het randje',
    largeFit: 'Te groot',
    wristCurve: 'pols',
    nameRequired: 'Voer een horlogenaam in',
    watchTooLarge: 'Horloge steekt voorbij de pols',
    l2lExceedsWrist: 'Lug-to-lug overschrijdt polsbreedte',
    excellentDesc: 'Proportioneel—lug-to-lug blijft ruim binnen uw pols.',
    goodDesc: 'Goede pasvorm—steekt iets uit maar blijft comfortabel.',
    borderlineDesc: 'Op het randje—lugs naderen de rand van uw pols.',
    largeDesc: 'Te groot—lugs steken vermoedelijk over uw pols.',
    fitsWell: 'Past goed',
    slightlyLarge: 'Iets groot',
    tooLarge: 'Te groot',
    source: 'Maatgids',
    estimateNote: 'Voer afmetingen in en voeg een horloge toe om te zien hoe het op uw pols past.',
  },
  seo: [
    { type: 'title', text: 'Watch Size Comparator-visuele pasvorm op uw pols', level: 2 },
    { type: 'paragraph', html: 'Benieuwd of een <strong>42mm horloge</strong> op uw <strong>17cm pols</strong> past? Of of die 48mm lug-to-lug oversteekt? De Watch Size Comparator geeft u een visueel antwoord. Voer uw kastdiameter, lug-to-lug, dikte en polsmaat in—de tool tekent het horloge op schaal en kleurt de pasvorm van <span style="color:#22c55e">groen (uitstekend)</span> tot <span style="color:#ef4444">rood (te groot)</span>. Werkt in zowel <strong>metrische als imperiale</strong> eenheden.' },
    { type: 'title', text: 'Horlogemaat woordenlijst', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Kastdiameter', definition: 'De breedte van de horlogekast gemeten over de wijzerplaat, exclusief de kroon. Typisch bereik: 34–46mm. De meest genoemde maat, maar niet de enige pasvormfactor.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'De afstand tussen de bovenste en onderste lugs waar de band bevestigd wordt. Dit bepaalt of het horloge over uw pols steekt. Een 40mm horloge met 50mm L2L draagt groter dan een 42mm met 46mm L2L.' },
        { term: 'Platte polsbreedte', definition: 'De breedte van het bovenoppervlak van uw pols, in tegenstelling tot de omtrek. Ongeveer polsomtrek / π min 2–4cm. Dit is de maat waar uw horloge feitelijk op rust.' },
        { term: 'Kast-polssverhouding', definition: 'Kastdiameter gedeeld door polsbreedte. Een verhouding van 0,6–0,75 (60–75%) wordt beschouwd als de klassieke proportionele pasvorm.' },
      ]
    },

    { type: 'title', text: 'Welk horlogeformaat past op mijn pols?', level: 3 },
    {
      type: 'table', headers: ['Polsomtrek', 'Platte breedte (bij benadering)', 'Ideale kastdiameter', 'Max. lug-to-lug', 'Geschikt voor'], rows: [
        ['14–15 cm (5.5–5.9 in)', '38–42 mm', '30–34 mm', '38–42 mm', 'Vintage & dress horloges'],
        ['15–16 cm (5.9–6.3 in)', '40–44 mm', '34–36 mm', '40–44 mm', 'Kleine klassieke horloges'],
        ['16–17 cm (6.3–6.7 in)', '42–46 mm', '36–39 mm', '42–46 mm', 'Dagelijks veelzijdig formaat'],
        ['17–18 cm (6.7–7.1 in)', '44–48 mm', '38–42 mm', '44–48 mm', 'Gouden midden voor de meeste merken'],
        ['18–19 cm (7.1–7.5 in)', '46–50 mm', '40–44 mm', '46–50 mm', 'Duikhorloges & GMTs'],
        ['19–20 cm (7.5–7.9 in)', '48–52 mm', '42–46 mm', '48–52 mm', 'Gereedschap & pilotenhorloges'],
        ['20–21 cm (7.9–8.3 in)', '50–54 mm', '44–48 mm', '50–54 mm', 'Oversized & flieger horloges'],
      ]
    },

    { type: 'title', text: 'Hoe meet u uw pols voor een horloge', level: 3 },
    {
      type: 'list', items: [
        'Wik een flexibel meetlint om uw pols, net achter het polsbotje (ulnair styloïd). Het moet strak zitten maar niet knellen.',
        'Als u geen lint hebt, gebruik dan een touwtje of een kabel, markeer de overlapping en meet deze met een liniaal.',
        'Noteer de meting in centimeters of inches. Gemiddelde mannenpolsen zijn 17–19cm (6,7–7,5in); gemiddelde vrouwenpolsen zijn 14–16cm (5,5–6,3in).',
        'Om uw platte polsbreedte te schatten, trekt u 2–4cm van de omtrek af of gebruikt u de automatische schattingsfunctie van de tool.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug–to–lug is de echte pasvormbeperking', icon: 'mdi:ruler', html: 'De meeste mensen letten op de <strong>kastdiameter</strong>, maar <strong>lug-to-lug</strong> bepaalt of een horloge op uw pols past. Een horloge met 48mm L2L op een 55mm platte pols (17cm omtrek) neemt 87% van de polsbreedte in. Boven 65% beginnen de lugs de rand van uw pols te naderen. <strong>Controleer altijd eerst de L2L.</strong>' },

    { type: 'tip', title: 'CM of inches? Gebruik wat u kent', html: 'De tool ondersteunt nu zowel metrisch als imperiaal. Meet uw pols in het systeem dat u dagelijks gebruikt. Horlogekastafmetingen zijn <strong>altijd in millimeters</strong> (zelfs in de VS), dus diameters en L2L blijven in mm—alleen de polsmeting schakelt. Dit sluit aan bij hoe de horloge-industrie werkt.' },

    {
      type: 'summary', title: 'Snelle pasvormchecklist voor aankoop', items: [
        'Meet uw polsomtrek en voer deze in de tool in.',
        'Zoek de lug-to-lug van het horloge op—niet alleen de kastdiameter.',
        'Het horloge moet 60–75% van uw platte polsbreedte innemen voor een klassieke pasvorm.',
        'Als de lugs over de rand van uw pols steken, voelt het horloge te groot aan, ongeacht de diameter.',
        'Gebruik de tool om meerdere horloges naast elkaar te vergelijken voordat u een aankoopbeslissing neemt.',
      ]
    },
  ],
  faq: [
    {
      question: 'Hoe meet ik mijn pols voor een horloge?',
      answer: 'Gebruik een flexibel meetlint rond het polsbot. Of wikkel een touwtje, markeer de overlapping en meet het met een liniaal. Gemiddeld is 17–19cm voor mannen, 14–16cm voor vrouwen.',
    },
    {
      question: 'Wat is lug-to-lug en waarom is het belangrijk?',
      answer: 'Lug-to-lug is de afstand tussen de bovenste en onderste lugs. Het bepaalt of het horloge over uw pols steekt. Een horloge met 48mm lug-to-lug op een 17cm pols (≈55mm platte breedte) is proportioneel op 87%. Boven 65% begint het over te steken.',
    },
    {
      question: 'Welk horlogeformaat past op een 17cm pols?',
      answer: 'Een 17cm pols (≈55mm platte breedte) past comfortabel bij horloges met 36–42mm diameter en 44–50mm lug-to-lug. Het gouden midden is 38–40mm met 46–48mm L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Voer uw polsmaat in',
      text: 'Typ uw polsomtrek in centimeters. De tool werkt de visuele polssilhouet bij.',
    },
    {
      name: 'Voer horlogeafmetingen in',
      text: 'Voer kastdiameter, lug-to-lug en dikte in millimeters in.',
    },
    {
      name: 'Toevoegen en vergelijken',
      text: 'Klik op "Horloge toevoegen" om op te slaan. Voeg meerdere horloges toe en klik ertussen om pasvormen te vergelijken.',
    },
    {
      name: 'Lees de kleur',
      text: 'Groen = uitstekend, geel = op het randje, rood = te groot voor uw pols.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hoe meet ik mijn pols voor een horloge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gebruik een flexibel meetlint rond het polsbot. Gemiddeld is 17–19cm voor mannen, 14–16cm voor vrouwen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wat is lug-to-lug en waarom is het belangrijk?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-lug is de afstand tussen bovenste en onderste lugs. Het bepaalt of het horloge over uw pols steekt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Welk horlogeformaat past op een 17cm pols?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Een 17cm pols past bij 36–42mm diameter met 44–50mm lug-to-lug. Het gouden midden is 38–40mm met 46–48mm L2L.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Size Comparator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Hoe horlogeformaten vergelijken',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Voer uw polsmaat in',
          'text': 'Typ uw polsomtrek in centimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Voer horlogeafmetingen in',
          'text': 'Voer kastdiameter, lug-to-lug en dikte in.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Toevoegen en vergelijken',
          'text': 'Klik op Horloge toevoegen om op te slaan. Voeg meerdere horloges toe om te vergelijken.',
        },
      ],
    },
  ],
};

