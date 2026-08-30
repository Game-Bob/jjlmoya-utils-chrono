import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'horloge-polsmaat-calculator',
  title: 'Horloge Polsaanwezigheid & Maatcalculator',
  description: 'Bereken de case-to-pols verhouding, de platte polsbreedte en bepaal het ideale horlogeformaat voor uw pols op basis van esthetische richtlijnen.',
  ui: {
    title: 'Polsmaat Instellingen',
    wristCircumferenceLabel: 'Polsomtrek',
    caseDiameterLabel: 'Casediameter',
    lugToLugLabel: 'Lug-tot-lug Afstand',
    wristWidthLabel: 'Platte Polsbreedte',
    autoEstimateWidthLabel: 'Automatisch platte breedte schatten (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Polspasform Analyse',
    caseWristRatioLabel: 'Case-tot-Pols Verhouding',
    wristCoverageLabel: 'Polsdekking',
    verdictLabel: 'Oordeel',
    verdictOversized: 'Te Groot Formaat',
    verdictBold: 'Uitgesproken / Modern Pasvorm',
    verdictGolden: 'Gouden / Klassiek Pasvorm',
    verdictVintage: 'Vintage / Ondermaats',
    coverageSafe: 'Veilig Pasvorm',
    coverageBold: 'Uitgesproken Pasvorm',
    coverageOverhang: 'Lug Overhang Waarschuwing',
    sweetSpotTitle: 'Polvorm Stijl',
    sweetSpotDesc: 'Het zoete punt vertegenwoordigt het meest evenwichtige visuele uiterlijk.',
    minClassicLabel: 'Vintage / Klassiek Pasvorm',
    sweetSpotLabel: 'Esthetisch Zoet Punt',
    maxBoldLabel: 'Modern / Uitgesproken Pasvorm',
    maxLugToLugLabel: 'Max. Aanbevolen Lug-tot-lug',
    idealSizesTitle: 'Ideale Maatrichtlijnen',
    visualizerTitle: 'Live Pasvorm Simulator',
    wristWidthHelp: 'Schatting op basis van de polsvorm.',
    estimatedLabel: 'geschat',
    customLabel: 'Pols',
  },
  seo: [
    { type: 'title', text: 'Het perfecte horlogeformaat kiezen: de proportionele gids', level: 2 },
    { type: 'paragraph', html: 'Het juiste horlogeformaat vinden is een combinatie van wiskunde, meetkunde en persoonlijke stijl. In de horlogebouw noemt men de manier waarop een uurwerk op de pols rust de <strong>polsaanwezigheid</strong>. Een horloge moet er evenwichtig uitzien: het mag de arm niet domineren met lelijke lugoverhang, maar ook niet verdwijnen als een minuscuul stipje. Om die balans te bereiken, analyseren verzamelaars drie kernmetrieken: casediameter, lug-tot-lug-afstand en de polsvorm.' },
    { type: 'title', text: 'De case-tot-pols verhouding begrijpen', level: 3 },
    { type: 'paragraph', html: 'Een klassieke methode om horlogeproporties te beoordelen is de case-tot-pols verhouding. Deel de polsomtrek in millimeters door de casediameter om deze verhouding te berekenen. Verhoudingen tussen <strong>4,5 en 5,0</strong> vormen het klassieke zoete punt. Van <strong>4,0 tot 4,5</strong> oogt het horloge modern en sportief. Boven 5,0 overheerst de vintage sfeer; onder 4,0 wordt de case als te groot beschouwd.' },
    { type: 'title', text: 'Waarom lug-tot-lug afstand meer telt dan casediameter', level: 3 },
    { type: 'paragraph', html: 'Hoewel de casediameter alle aandacht krijgt, is de <strong>lug-tot-lug afstand</strong> (de verticale lengte van luguiteinde tot luguiteinde) de werkelijke maatstaf voor een goede pasvorm. De gouden regel luidt dat de lug-tot-lug afstand nooit de platte polsbreedte mag overschrijden. Steken de lugs over de polsrand, dan schuift het horloge, ontstaat er een spleet tussen de band en de huid en is het visuele resultaat teleurstellend.' },
    { type: 'title', text: 'Platte vs. ronde polsen: maatvoering per anatomie', level: 3 },
    { type: 'paragraph', html: 'De polsomtrek vertelt slechts een deel van het verhaal. Polsen met dezelfde omtrek kunnen een verschillende dwarsdoorsnede hebben: plat of rond. Platte polsen hebben een bredere bovenkant en dragen horloges met langere lug-tot-lug afstanden zonder overhang. Ronde polsen zijn cilindrischer, hebben een smallere bovenkant en vereisen kortere lug-tot-lug afstanden om overhang te vermijden.' },
  ],
  faq: [
    {
      question: 'Wat is de ideale case-tot-pols verhouding?',
      answer: 'De ideale verhouding ligt tussen 4,0 en 5,0. Een verhouding van 4,5 vertegenwoordigt het klassieke horlogebouwkundige zoete punt. Van 4,0 tot 4,5 krijgt u een moderne, uitgesproken polsaanwezigheid; boven 5,0 past het horloge beter bij een vintage stijl; onder 4,0 oogt het formaat te groot.',
    },
    {
      question: 'Waarom is de lug-tot-lug afstand belangrijker dan de casediameter?',
      answer: 'De casediameter meet slechts de breedte van het uurwerk, maar de lug-tot-lug afstand bepaalt de totale lengte van het horloge over uw pols. Als die afstand de platte polsbreedte overschrijdt, hangen de lugs over, valt de band verticaal neer en oogt het horloge instabiel en buitenproportioneel groot.',
    },
    {
      question: 'Hoe beïnvloeden platte en ronde polsen de horlogepasvorm?',
      answer: 'Twee polsen met dezelfde omtrek (bijv. 17 cm) kunnen een horloge heel anders dragen. Een platte pols heeft een bredere bovenkant en kan langere lug-tot-lug afstanden dragen zonder overhang. Een ronde pols is smaller bovenop en vereist kortere lug-tot-lug afstanden voor een stabiele pasvorm.',
    },
    {
      question: 'Hoe beïnvloeden dikte en bezeldikte het visuele formaat van een horloge?',
      answer: 'Horloges met een zeer smalle bezel (zoals dresshorloges) hebben een groter wijzerplaatoppervlak en zien er op de pols groter uit dan hun werkelijke diameter suggereert. Duikhorloges met een brede draaibare bezel hebben een kleinere wijzerplaat en ogen compacter. Horloges dikker dan 13 mm ogen bovendien logger en visueel zwaarder.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Uw pols opmeten',
      text: 'Sla een flexibele meetlint om uw polsbeen om uw omtrek in cm of inches te bepalen.',
    },
    {
      name: 'Horlogemaaten invoeren',
      text: 'Voer de casediameter en de lug-tot-lug afstand in van het horloge dat u wilt beoordelen.',
    },
    {
      name: 'Pasvorm en simulator analyseren',
      text: 'Controleer de case-tot-pols verhouding, de lug-overhangs waarschuwing en bekijk het realtime simulatiediagram.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wat is de ideale case-tot-pols verhouding?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De ideale verhouding ligt tussen 4,0 en 5,0. Een verhouding van 4,5 vertegenwoordigt het klassieke horlogebouwkundige zoete punt. Van 4,0 tot 4,5 krijgt u een moderne, uitgesproken polsaanwezigheid; boven 5,0 past het horloge beter bij een vintage stijl; onder 4,0 oogt het formaat te groot.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Waarom is de lug-tot-lug afstand belangrijker dan de casediameter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De casediameter meet slechts de breedte van het uurwerk, maar de lug-tot-lug afstand bepaalt de totale lengte van het horloge over uw pols. Als die afstand de platte polsbreedte overschrijdt, hangen de lugs over, valt de band verticaal neer en oogt het horloge instabiel en buitenproportioneel groot.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Horloge Polsaanwezigheid & Maatcalculator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Het ideale horlogeformaat bepalen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Uw pols opmeten',
          'text': 'Sla een flexibele meetlint om uw polsbeen om uw omtrek in cm of inches te bepalen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Horlogemaaten invoeren',
          'text': 'Voer de casediameter en de lug-tot-lug afstand in van het horloge dat u wilt beoordelen.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Pasvorm en simulator analyseren',
          'text': 'Controleer de case-tot-pols verhouding, de lug-overhangs waarschuwing en bekijk het realtime simulatiediagram.'
        }
      ]
    }
  ]
};
