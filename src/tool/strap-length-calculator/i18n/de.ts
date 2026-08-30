import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'armbandlaengen-rechner',
  title: 'Armbandlängenrechner für Uhren',
  description: 'Berechne die ideale Armbandlänge für dein Handgelenk. Erhalte Empfehlungen für zweiteilige und NATO-Armbänder basierend auf Handgelenk- und Uhrgrösse.',
  ui: {
    title: 'Armbandlängenrechner',
    wristLabel: 'Handgelenk-Umfang',
    wristPlaceholder: 'z.B. 170',
    lugLabel: 'Stegbreite der Uhr',
    lugPlaceholder: 'z.B. 45',
    fitLabel: 'Bevorzugte Passform',
    fitTight: 'Eng',
    fitRegular: 'Normal',
    fitLoose: 'Locker',
    unitLabel: 'Einheit',
    standardLabel: 'Standard-Konfektionsgrösse',
    bespokeLabel: 'Massgefertigte Größe',
    natoLabel: 'NATO-Armbandlänge',
    longSide: 'Lange Seite',
    shortSide: 'Kurze Seite',
    totalLength: 'Gesamtlänge',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Handgelenke < 6.0 in',
    sizeS: 'Small (S) - Handgelenke 6.0 bis 6.5 in',
    sizeM: 'Medium (M) - Handgelenke 6.5 bis 7.0 in',
    sizeL: 'Large (L) - Handgelenke 7.0 bis 7.5 in',
    sizeXL: 'Extra Large (XL) - Handgelenke 7.5 bis 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Handgelenke > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Uhren-Armbandlängen-Guide & Grössenrechner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das perfekte Uhrband zu wählen ist entscheidend für Tragekomfort und Ästhetik. Ein zu langes Band steht unschön ab, während ein zu kurzes nicht sicher schliesst. Dieser Leitfaden hilft dir, Standard-Konfektionsgrössen, massgefertigte Masse und NATO-Bandlängen basierend auf Handgelenkgrösse, Uhrendesign und gewünschter Passform zu bestimmen.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Standard-Konfektionsgrösse' },
        { value: '160-190mm', label: 'Passt die meisten Handgelenke' },
        { value: '7 Löcher', label: 'Typische Einstellmöglichkeiten' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Zweiteilige Armbänder verstehen: Lange vs. kurze Seite',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein zweiteiliges Armband wird durch zwei Zahlen definiert, wie <strong>120/80 mm</strong>. Die erste Zahl (z.B. 120mm) ist die <strong>lange Seite</strong> (die Seite mit den Löchern), die an der 6-Uhr-Position befestigt wird. Die zweite Zahl (z.B. 80mm) ist die <strong>kurze Seite</strong> (die Schliessenseite), die an der 12-Uhr-Position angebracht wird. Die Schliesse selbst ist in diesen Angaben nicht enthalten.',
    },
    {
      type: 'title',
      text: 'Standard-Konfektionsgrössentabelle nach Handgelenk-Umfang',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Handgelenkgrösse', 'Leder/Kautschuk Bandlänge', 'NATO-Bandlänge', 'Empfohlene Passform'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Enge/Kleine Passform'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Normale Mittelgrösse'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Normale Grosse Passform'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Extra Grosse Passform'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Doppelt Extra Grosse Passform'],
      ],
    },
    {
      type: 'title',
      text: 'Massgefertigte Armbandlängen erklärt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bei massgefertigten Armbändern kannst du die absolut perfekte Passform anstreben. Anstatt sich mit Standard-Lochpositionen zufriedenzugeben, berechnet ein massgeschneidertes Band die genaue Länge für jede Seite, sodass die Schliesse genau in der Mitte deiner Handgelenk-Unterseite ruht. Die Formel verwendet den gesamten Handgelenk-Umfang, zieht die Stegbreite der Uhr ab und teilt die verbleibende Länge entsprechend der Handgelenk-Geometrie auf.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Massgefertigte Armbänder',
          description: 'Speziell auf dein Handgelenk und deine Uhrenmasse zugeschnitten. Garantiert eine perfekt zentrierte Schliesse ohne überstehendes Bandende.',
          points: [
            'Perfekte Schliessen-Zentrierung',
            'Massgeschneiderte Lochpositionen',
            'Kein überstehendes Bandende',
            'Hochwertige Optik und Haptik',
          ],
        },
        {
          title: 'Standard Konfektionsbänder',
          description: 'Massenproduzierte Grössen, die mit mehreren Löchern für verschiedene Handgelenke passen. Schnell und günstig.',
          points: [
            'Günstigerer Preis',
            'Sofort verfügbar',
            'Passen an mehrere Uhren',
            'Standardisierte Abmessungen',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Wichtige Fachbegriffe zu Uhrbändern',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Stegbreite (Lug-to-Lug)',
          definition: 'Der gesamte vertikale Abstand von der Spitze des oberen bis zur Spitze des unteren Stegs. Dies ist nicht der Gehäusedurchmesser, sondern die gesamte Länge des starren Uhrgehäuses auf deinem Handgelenk.',
        },
        {
          term: 'Kurze Seite (Schliesse)',
          definition: 'Der Bandabschnitt, der an der 12-Uhr-Position des Uhrengehäuses befestigt wird. Er enthält die Schliesse, die jedoch in den Längenangaben nicht mitgemessen wird.',
        },
        {
          term: 'Lange Seite (Bandende)',
          definition: 'Der Bandabschnitt, der an der 6-Uhr-Position befestigt wird. Er enthält die Einstelllöcher zum Anpassen der Enge.',
        },
        {
          term: 'NATO-Armband',
          definition: 'Ein einteiliges Nylonband, das unter dem Uhrengehäuse durch die Federstege geführt wird. Es ist sehr verstellbar und langlebig.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Richtiges Messen deines Handgelenks',
      html: 'Für eine genaue Messung wickle ein flexibles Massband eng (aber nicht zu fest) um die Stelle, an der du normalerweise deine Uhr trägst. Falls du kein Massband hast, nimm eine Schnur oder einen Papierstreifen, markiere die Überlappung und miss die flache Länge mit einem Lineal.',
    },
    {
      type: 'title',
      text: 'Warum die Stegbreite für die Bandgrösse entscheidend ist',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Viele Sammler vergessen, dass das Uhrengehäuse eine starre Verlängerung des Bandes darstellt. Eine Uhr mit einer langen Stegbreite von 50mm nimmt mehr Platz am Handgelenk ein als eine 40mm Dresswatch. Folglich benötigt die grössere Uhr kürzere Bänder, um die gleiche Gesamtschleifengrösse zu erreichen. Die Stegbreite nicht zu berücksichtigen ist der häufigste Grund für schlecht sitzende Armbänder.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vermeidung von Schliessenversatz und Gehäuseüberhang',
      html: 'Wenn die kurze Seite deines Bandes zu lang oder zu kurz für dein Handgelenk ist, rutscht die Schliesse zur Seite. Dies führt dazu, dass das Uhrengehäuse aus der Mitte gezogen wird, was zu Unbehagen und erhöhtem Risiko von Kratzern am Gehäuse oder der Schliesse führt. Achte stets darauf, dass die Schliesse zentriert auf der flachen Unterseite deines Handgelenks sitzt.',
    },
    {
      type: 'proscons',
      title: 'NATO Armband vs. Zweiteiliges Armband',
      items: [
        {
          pro: 'NATO-Armbänder sind sehr verstellbar und verhindern den Verlust der Uhr bei einem Federstegbruch.',
          con: 'NATO-Armbänder erhöhen die Gesamtdicke unter dem Uhrengehäuse.',
        },
        {
          pro: 'Zweiteilige Armbänder lassen das Uhrengehäuse flach auf der Haut aufliegen für ein schlankeres Profil.',
          con: 'Zweiteilige Armbänder benötigen präzise Grössenangaben und bieten weniger Einstellmöglichkeiten.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Wie misst man die Länge eines Uhrarmbandes?',
      answer: 'Die Länge eines Uhrenarmbands wird meist in zwei Zahlen wie 120/80 mm angegeben. Die erste Zahl ist die Länge der langen Seite (Bandende), die zweite die der kurzen Seite (Schliesse).',
    },
    {
      question: 'Wo sollte die Schliesse am Handgelenk sitzen?',
      answer: 'Idealerweise sollte die Schliesse zentriert auf der Unterseite deines Handgelenks sitzen. Ist sie versetzt, wandert das Uhrengehäuse aus der Mitte. Das Verhältnis von langer zu kurzer Seite anzupassen hilft, eine perfekte Zentrierung zu erreichen.',
    },
    {
      question: 'Wie beeinflusst die Stegbreite der Uhr die benötigte Bandlänge?',
      answer: 'Das Uhrengehäuse ist ein starrer Teil der gesamten Bandschlaufe. Eine grössere Uhr mit längerer Stegbreite (z.B. 50mm) reduziert die benötigte Bandlänge im Vergleich zu einer kleineren Uhr (z.B. 40mm Stegbreite) am gleichen Handgelenk.',
    },
    {
      question: 'Auf welcher Seite kommt das lange Ende des Armbands hin?',
      answer: 'Traditionell wird die lange Seite des Armbands (mit den Einstelllöchern) an der 6-Uhr-Position des Gehäuses befestigt, zu dir hin zeigend. Die kurze Seite (mit der Schliesse) wird an der 12-Uhr-Position angebracht.',
    },
    {
      question: 'Wie eng sollte ein Uhrarmband sein?',
      answer: 'Ein Armband sollte angenehm eng, aber nicht einschnürend sein. Du solltest einen Finger unter das Band schieben können, ohne Gewalt anzuwenden. Ein zu enges Band kann die Durchblutung beeinträchtigen, während ein zu lockeres Band das Uhrengehäuse verrutschen lässt.',
    },
    {
      question: 'Kann ich ein NATO-Armband an jeder Uhr verwenden?',
      answer: 'Ja, solange die Uhr über Standard-Federstege mit ausreichend Platz zwischen Gehäuse und Steg verfügt. NATO-Armbänder werden unter dem Gehäuse durchgeführt, daher können sehr enge Gehäuse-Steg-Abstände gebogene Federstege oder dünnere Bandmaterialien erfordern.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Handgelenk messen',
      text: 'Verwende ein flexibles Massband, um deinen Handgelenk-Umfang in Millimetern oder Zoll zu ermitteln.',
    },
    {
      name: 'Stegbreite der Uhr messen',
      text: 'Miss die Höhe des Uhrengehäuses von der Spitze des oberen bis zur Spitze des unteren Stegs.',
    },
    {
      name: 'Passform wählen',
      text: 'Wähle, ob du eine enge, normale oder lockere Passform bevorzugst.',
    },
    {
      name: 'Empfehlungen berechnen',
      text: 'Sieh dir die Standard-Konfektionsgrösse, die massgefertigten Längen für lange und kurze Seite sowie die ideale NATO-Länge an.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie misst man die Länge eines Uhrarmbandes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Länge eines Uhrenarmbands wird meist in zwei Zahlen wie 120/80 mm angegeben. Die erste Zahl ist die Länge der langen Seite (Bandende), die zweite die der kurzen Seite (Schliesse).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wo sollte die Schliesse am Handgelenk sitzen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Idealerweise sollte die Schliesse zentriert auf der Unterseite deines Handgelenks sitzen. Ist sie versetzt, wandert das Uhrengehäuse aus der Mitte. Das Verhältnis von langer zu kurzer Seite anzupassen hilft, eine perfekte Zentrierung zu erreichen.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wie beeinflusst die Stegbreite der Uhr die benötigte Bandlänge?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Das Uhrengehäuse ist ein starrer Teil der gesamten Bandschlaufe. Eine grössere Uhr mit längerer Stegbreite (z.B. 50mm) reduziert die benötigte Bandlänge im Vergleich zu einer kleineren Uhr (z.B. 40mm Stegbreite) am gleichen Handgelenk.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Auf welcher Seite kommt das lange Ende des Armbands hin?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Traditionell wird die lange Seite des Armbands (mit den Einstelllöchern) an der 6-Uhr-Position des Gehäuses befestigt, zu dir hin zeigend. Die kurze Seite (mit der Schliesse) wird an der 12-Uhr-Position angebracht.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Wie eng sollte ein Uhrarmband sein?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ein Armband sollte angenehm eng, aber nicht einschnürend sein. Du solltest einen Finger unter das Band schieben können, ohne Gewalt anzuwenden. Ein zu enges Band kann die Durchblutung beeinträchtigen, während ein zu lockeres Band das Uhrengehäuse verrutschen lässt.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Kann ich ein NATO-Armband an jeder Uhr verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, solange die Uhr über Standard-Federstege mit ausreichend Platz zwischen Gehäuse und Steg verfügt. NATO-Armbänder werden unter dem Gehäuse durchgeführt, daher können sehr enge Gehäuse-Steg-Abstände gebogene Federstege oder dünnere Bandmaterialien erfordern.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Armbandlängen-Rechner für Uhren',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Armbandlängen-Rechner für Uhren',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Handgelenk messen',
          'text': 'Verwende ein flexibles Massband, um deinen Handgelenk-Umfang in Millimetern oder Zoll zu ermitteln.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Stegbreite der Uhr messen',
          'text': 'Miss die Höhe des Uhrengehäuses von der Spitze des oberen bis zur Spitze des unteren Stegs.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Passform wählen',
          'text': 'Wähle, ob du eine enge, normale oder lockere Passform bevorzugst.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Empfehlungen berechnen',
          'text': 'Sieh dir die Standard-Konfektionsgrösse, die massgefertigten Längen für lange und kurze Seite sowie die ideale NATO-Länge an.'
        }
      ]
    } as any
  ]
};
