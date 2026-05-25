import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'uhrenpraesenz-rechner',
  title: 'Uhren Handgelenkpräsenz & Größenrechner',
  description: 'Berechnen Sie das Gehäuse-zu-Handgelenk-Verhältnis, die flache Handgelenkbreite und ermitteln Sie die ideale Uhrengröße für Ihr Handgelenk basierend auf ästhetischen Richtlinien.',
  ui: {
    title: 'Handgelenkmaße',
    wristCircumferenceLabel: 'Handgelenkumfang',
    caseDiameterLabel: 'Gehäusedurchmesser',
    lugToLugLabel: 'Steg-zu-Steg',
    wristWidthLabel: 'Flache Handgelenkbreite',
    autoEstimateWidthLabel: 'Flache Handgelenkbreite automatisch schätzen (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Handgelenkpassform-Analyse',
    caseWristRatioLabel: 'Gehäuse-zu-Handgelenk-Verhältnis',
    wristCoverageLabel: 'Handgelenkabdeckung',
    verdictLabel: 'Ergebnis',
    verdictOversized: 'Zu großes Gehäuse',
    verdictBold: 'Mutige / Moderne Passform',
    verdictGolden: 'Goldene / Klassische Passform',
    verdictVintage: 'Vintage / Zu klein',
    coverageSafe: 'Sichere Passform',
    coverageBold: 'Mutige Passform',
    coverageOverhang: 'Überhang-Warnung',
    sweetSpotTitle: 'Trageweite',
    sweetSpotDesc: 'Der Sweet Spot steht für das ausgewogenste Erscheinungsbild.',
    minClassicLabel: 'Vintage / Klassische Passform',
    sweetSpotLabel: 'Ästhetischer Sweet Spot',
    maxBoldLabel: 'Modern / Mutige Passform',
    maxLugToLugLabel: 'Max. empfohlener Steg-zu-Steg',
    idealSizesTitle: 'Ideale Größenrichtlinien',
    visualizerTitle: 'Live-Passform-Simulator',
    wristWidthHelp: 'Schätzung basierend auf der Handgelenkform.',
    estimatedLabel: 'geschätzt',
    customLabel: 'Handgelenk',
  },
  seo: [
    { type: 'title', text: 'Die perfekte Uhrengröße finden: Der Proportions-Ratgeber', level: 2 },
    { type: 'paragraph', html: 'Die richtige Uhrengröße zu finden ist eine Kombination aus Mathematik, Geometrie und persönlichem Stil. In der Uhrmacherei bezeichnet man das Erscheinungsbild einer Uhr am Arm als <strong>Handgelenkpräsenz</strong>. Eine Uhr sollte ausgewogen wirken - weder mit unschönem Überhang dominieren noch wie ein winziger Punkt verschwinden. Um diese Balance zu erreichen, analysieren Sammler drei Hauptmerkmale: Gehäusedurchmesser, Steg-zu-Steg-Abstand und Handgelenkform.' },
    { type: 'title', text: 'Das Gehäuse-zu-Handgelenk-Verhältnis verstehen', level: 3 },
    { type: 'paragraph', html: 'Eine klassische Methode zur Beurteilung von Uhrenproportionen ist das Gehäuse-zu-Handgelenk-Verhältnis. Dazu teilt man den Handgelenkumfang in Millimetern durch den Gehäusedurchmesser. Verhältnisse zwischen <strong>4,5 und 5,0</strong> gelten als klassischer Sweet Spot. Verhältnisse von <strong>4,0 bis 4,5</strong> wirken mutig und modern. Über 5,0 entsteht ein Vintage-Dresswatches-Feeling, unter 4,0 wirkt die Uhr überdimensioniert.' },
    { type: 'title', text: 'Warum der Steg-zu-Steg-Abstand wichtiger ist als der Durchmesser', level: 3 },
    { type: 'paragraph', html: 'Obwohl der Gehäusedurchmesser im Vordergrund steht, ist der <strong>Steg-zu-Steg-Abstand</strong> (die senkrechte Länge von Stegspitze zu Stegspitze) der eigentliche Maßstab für eine gute Passform. Die goldene Regel lautet: Der Steg-zu-Steg-Abstand darf die flache Handgelenkbreite nicht überschreiten. Stehen die Stege über, gleitet die Uhr, es entsteht ein Spalt zwischen Band und Haut, und das optische Erscheinungsbild leidet.' },
    { type: 'title', text: 'Flache vs. runde Handgelenke: Größen je nach Anatomie', level: 3 },
    { type: 'paragraph', html: 'Der Handgelenkumfang erzählt nur einen Teil der Geschichte. Handgelenke mit gleichem Umfang können unterschiedliche Querschnittsformen haben: flach oder rund. Flache Handgelenke bieten eine breitere Auflagefläche und vertragen längere Steg-zu-Steg-Abstände. Runde Handgelenke sind oben schmaler und erfordern kürzere Steg-zu-Steg-Maße, um Überhang zu vermeiden.' },
  ],
  faq: [
    {
      question: 'Was ist das ideale Gehäuse-zu-Handgelenk-Verhältnis?',
      answer: 'Das ideale Verhältnis liegt zwischen 4,0 und 5,0. Ein Verhältnis von 4,5 gilt als klassischer uhrmacherischer Sweet Spot. Zwischen 4,0 und 4,5 entsteht eine moderne, auffällige Präsenz; über 5,0 eignet sich die Uhr eher für den Vintage-Dresswatches-Stil; unter 4,0 wirkt das Gehäuse überdimensioniert.',
    },
    {
      question: 'Warum ist der Steg-zu-Steg-Abstand wichtiger als der Gehäusedurchmesser?',
      answer: 'Der Gehäusedurchmesser misst nur die Breite des Zifferblatts. Der Steg-zu-Steg-Abstand bestimmt hingegen, wie weit die Uhr über das Handgelenk reicht. Überschreitet er die flache Handgelenkbreite, hängen die Stege über, das Band fällt senkrecht ab, und die Uhr wirkt instabil und unverhältnismäßig groß.',
    },
    {
      question: 'Wie beeinflussen flache und runde Handgelenke die Passform?',
      answer: 'Zwei Handgelenke mit gleichem Umfang (z. B. 17 cm) können Uhren sehr unterschiedlich tragen. Ein flaches Handgelenk hat eine breitere Auflagefläche und verträgt längere Steg-zu-Steg-Abstände ohne Überhang. Ein rundes Handgelenk ist oben schmaler und braucht kürzere Steg-zu-Steg-Maße für eine stabile Passform.',
    },
    {
      question: 'Wie verändern Dicke und Lünettengröße das optische Erscheinungsbild einer Uhr?',
      answer: 'Uhren mit sehr schmaler Lünette (wie Dresswatches) haben eine größere Zifferblattfläche und wirken am Handgelenk größer als ihr tatsächlicher Durchmesser vermuten lässt. Taucheruhren mit breiter Drehlünette haben ein kleineres Zifferblatt und tragen dadurch kompakter. Uhren mit mehr als 13 mm Höhe wirken zudem wuchtiger und optisch schwerer.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Handgelenk messen',
      text: 'Legen Sie ein flexibles Maßband um Ihren Handgelenkknochen, um den Umfang in cm oder Zoll zu ermitteln.',
    },
    {
      name: 'Uhrenmaße eingeben',
      text: 'Tragen Sie den Gehäusedurchmesser und den Steg-zu-Steg-Abstand der zu prüfenden Uhr ein.',
    },
    {
      name: 'Passform und Live-Simulator analysieren',
      text: 'Prüfen Sie das Gehäuse-zu-Handgelenk-Verhältnis, die Steg-Überhang-Warnung und sehen Sie das Echtzeit-Diagramm.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Was ist das ideale Gehäuse-zu-Handgelenk-Verhältnis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Das ideale Verhältnis liegt zwischen 4,0 und 5,0. Ein Verhältnis von 4,5 gilt als klassischer uhrmacherischer Sweet Spot. Zwischen 4,0 und 4,5 entsteht eine moderne, auffällige Präsenz; über 5,0 eignet sich die Uhr eher für den Vintage-Dresswatches-Stil; unter 4,0 wirkt das Gehäuse überdimensioniert.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Warum ist der Steg-zu-Steg-Abstand wichtiger als der Gehäusedurchmesser?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der Gehäusedurchmesser misst nur die Breite des Zifferblatts. Der Steg-zu-Steg-Abstand bestimmt hingegen, wie weit die Uhr über das Handgelenk reicht. Überschreitet er die flache Handgelenkbreite, hängen die Stege über, das Band fällt senkrecht ab, und die Uhr wirkt instabil und unverhältnismäßig groß.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhren-Handgelenkpräsenz & Größenrechner',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man die perfekte Uhrengröße bestimmt',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Handgelenk messen',
          'text': 'Legen Sie ein flexibles Maßband um Ihren Handgelenkknochen, um den Umfang in cm oder Zoll zu ermitteln.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Uhrenmaße eingeben',
          'text': 'Tragen Sie den Gehäusedurchmesser und den Steg-zu-Steg-Abstand der zu prüfenden Uhr ein.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Passform und Live-Simulator analysieren',
          'text': 'Prüfen Sie das Gehäuse-zu-Handgelenk-Verhältnis, die Steg-Überhang-Warnung und sehen Sie das Echtzeit-Diagramm.'
        }
      ]
    }
  ]
};
