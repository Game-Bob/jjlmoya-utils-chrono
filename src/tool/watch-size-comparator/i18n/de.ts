import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'uhrengroen-vergleich',
  title: 'Uhrengroessen Vergleich: Visuelle Passform fuer dein Handgelenk',
  description: 'Vergleiche Uhrengehäusegrößen visuell. Gib Durchmesser, Lug-to-Lug und Handgelenkumfang ein, um zu sehen, wie eine Uhr passt - bevor du kaufst.',
  ui: {
    title: 'Uhrengroessen Vergleich',
    addWatch: 'Uhr hinzufügen',
    watchName: 'Uhrenname',
    watchNamePlaceholder: 'z. B. Rolex Submariner',
    caseDiameter: 'Gehäusedurchmesser',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Höhe',
    wristSize: 'Handgelenkumfang',
    wristSizePlaceholder: 'z. B. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Entfernen',
    yourWatches: 'Deine Uhren',
    fitLegend: 'Passform-Legende',
    excellentFit: 'Hervorragend',
    goodFit: 'Gut',
    borderlineFit: 'Grenzwertig',
    largeFit: 'Zu groß',
    wristCurve: 'Handgelenk',
    nameRequired: 'Gib einen Uhrennamen ein',
    watchTooLarge: 'Uhr ragt über das Handgelenk hinaus',
    l2lExceedsWrist: 'Lug-to-Lug überschreitet die Handgelenkbreite',
    excellentDesc: 'Proportional - die Laschen bleiben gut innerhalb deines Handgelenks.',
    goodDesc: 'Gute Passform - übersteht leicht, bleibt aber bequem.',
    borderlineDesc: 'Grenzwertig - die Laschen nähern sich dem Rand deines Handgelenks.',
    largeDesc: 'Zu groß - die Laschen überstehen wahrscheinlich dein Handgelenk.',
    fitsWell: 'Passt gut',
    slightlyLarge: 'Etwas groß',
    tooLarge: 'Zu groß',
    source: 'Größenleitfaden',
    estimateNote: 'Gib Maße ein und füge eine Uhr hinzu, um zu sehen, wie sie an deinem Handgelenk wirkt.',
  },
  seo: [
    { type: 'title', text: 'Uhrengroessen Vergleich: Visuelle Passform fuer dein Handgelenk', level: 2 },
    { type: 'paragraph', html: 'Du möchtest wissen, ob eine <strong>42-mm-Uhr</strong> an dein <strong>17-cm-Handgelenk</strong> passt? Oder ob 48 mm Lug-to-Lug überstehen? Der Uhrengrößen-Vergleich liefert dir die Antwort visuell. Gib Gehäusedurchmesser, Lug-to-Lug, Höhe und Handgelenkumfang ein - das Tool zeichnet die Uhr maßstabsgetreu und färbt die Passform von <span style="color:#22c55e">grün (hervorragend)</span> bis <span style="color:#ef4444">rot (zu groß)</span>. Funktioniert in <strong>metrischen und imperialen</strong> Einheiten.' },
    { type: 'title', text: 'Glossar zur Uhrengröße', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Gehäusedurchmesser', definition: 'Die Breite des Uhrengehäuses, gemessen über das Zifferblatt, ohne Krone. Typischer Bereich: 34-46 mm. Das am häufigsten genannte Maß, aber nicht der einzige Passformfaktor.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'Der Abstand zwischen den oberen und unteren Laschen, an denen das Armband befestigt wird. Er bestimmt, ob die Uhr über das Handgelenk übersteht. Eine 40-mm-Uhr mit 50 mm L2L trägt sich größer als eine 42-mm-Uhr mit 46 mm L2L.' },
        { term: 'Flache Handgelenkbreite', definition: 'Die Breite der oberen Fläche deines Handgelenks, im Gegensatz zum Umfang. Ungefähr Handgelenkumfang / π minus 2-4 cm. Dies ist die Maßeinheit, auf der deine Uhr tatsächlich aufliegt.' },
        { term: 'Gehäuse-Handgelenk-Verhältnis', definition: 'Gehäusedurchmesser geteilt durch Handgelenkbreite. Ein Verhältnis von 0,6-0,75 (60-75 %) gilt als klassische proportionale Passform.' },
      ]
    },

    { type: 'title', text: 'Welche Uhrengröße passt an mein Handgelenk?', level: 3 },
    {
      type: 'table', headers: ['Handgelenkumfang', 'Flache Breite (ca.)', 'Idealer Gehäusedurchmesser', 'Max. Lug-to-Lug', 'Geeignet für'], rows: [
        ['14-15 cm (5,5-5,9 in)', '38-42 mm', '30-34 mm', '38-42 mm', 'Vintage- und Dress-Watches'],
        ['15-16 cm (5,9-6,3 in)', '40-44 mm', '34-36 mm', '40-44 mm', 'Klassische kleinere Uhren'],
        ['16-17 cm (6,3-6,7 in)', '42-46 mm', '36-39 mm', '42-46 mm', 'Alltagstaugliche Allrounder'],
        ['17-18 cm (6,7-7,1 in)', '44-48 mm', '38-42 mm', '44-48 mm', 'Ideale Größe für die meisten Marken'],
        ['18-19 cm (7,1-7,5 in)', '46-50 mm', '40-44 mm', '46-50 mm', 'Taucheruhren & GMTs'],
        ['19-20 cm (7,5-7,9 in)', '48-52 mm', '42-46 mm', '48-52 mm', 'Tool- und Pilotenuhren'],
        ['20-21 cm (7,9-8,3 in)', '50-54 mm', '44-48 mm', '50-54 mm', 'Übergroße & Fliegeruhren'],
      ]
    },

    { type: 'title', text: 'So misst du dein Handgelenk für eine Uhr', level: 3 },
    {
      type: 'list', items: [
        'Wickle ein flexibles Maßband um dein Handgelenk, direkt hinter dem Handgelenkknochen (Processus styloideus ulnae). Es sollte eng anliegen, aber nicht einschnüren.',
        'Wenn du kein Maßband hast, nimm eine Schnur oder ein Kabel, markiere die Überlappung und miss sie mit einem Lineal.',
        'Notiere das Maß in Zentimetern oder Zoll. Der durchschnittliche männliche Handgelenkumfang beträgt 17-19 cm (6,7-7,5 Zoll), der weibliche 14-16 cm (5,5-6,3 Zoll).',
        'Um deine flache Handgelenkbreite zu schätzen, ziehe 2-4 cm vom Umfang ab oder nutze die automatische Schätzung des Tools.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug to Lug ist die echte Passformgrenze', icon: 'mdi:ruler', html: 'Die meisten achten auf den <strong>Gehäusedurchmesser</strong>, aber das <strong>Lug-to-Lug</strong> entscheidet, ob eine Uhr an dein Handgelenk passt. Eine Uhr mit 48 mm L2L auf einem 55 mm flachen Handgelenk (17 cm Umfang) nimmt 87 % der Handgelenkbreite ein. Ab 65 % beginnen die Laschen, sich dem Rand deines Handgelenks zu nähern. <strong>Prüfe immer zuerst das L2L.</strong>' },

    { type: 'tip', title: 'CM oder Zoll? Nimm, was du kennst', html: 'Das Tool unterstützt jetzt sowohl metrische als auch imperiale Einheiten. Miss dein Handgelenk in dem System, das du täglich verwendest. Gehäusemaße von Uhren sind <strong>immer in Millimetern</strong> (selbst in den USA), daher bleiben Durchmesser und L2L in mm - nur die Handgelenkmessung wechselt. Das entspricht der Praxis der Uhrenindustrie.' },

    {
      type: 'summary', title: 'Kurze Passform Checkliste vor dem Kauf', items: [
        'Miss deinen Handgelenkumfang und gib ihn ins Tool ein.',
        'Schlag das Lug-to-Lug der Uhr nach - nicht nur den Gehäusedurchmesser.',
        'Die Uhr sollte 60-75 % deiner flachen Handgelenkbreite einnehmen für eine klassische Passform.',
        'Wenn die Laschen über deine Handgelenksränder überstehen, wird sich die Uhr unabhängig vom Durchmesser zu groß anfühlen.',
        'Nutze das Tool, um mehrere Uhren direkt miteinander zu vergleichen, bevor du eine Kaufentscheidung triffst.',
      ]
    },
  ],
  faq: [
    {
      question: 'Wie messe ich mein Handgelenk für eine Uhr?',
      answer: 'Verwende ein flexibles Maßband um den Handgelenkknochen. Alternativ wickelst du eine Schnur, markierst die Überlappung und misst sie mit einem Lineal. Der Durchschnitt liegt bei 17-19 cm für Männer, 14-16 cm für Frauen.',
    },
    {
      question: 'Was ist Lug-to-Lug und warum ist es wichtig?',
      answer: 'Lug-to-Lug ist der Abstand zwischen den oberen und unteren Laschen. Er bestimmt, ob die Uhr über dein Handgelenk übersteht. Eine Uhr mit 48 mm Lug-to-Lug an einem 17-cm-Handgelenk (≈55 mm flache Breite) ist mit 87 % proportional. Ab 65 % beginnt es überzustehen.',
    },
    {
      question: 'Welche Uhrengröße passt an ein 17-cm-Handgelenk?',
      answer: 'Ein 17-cm-Handgelenk (≈55 mm flache Breite) trägt bequem Uhren mit 36-42 mm Durchmesser und 44-50 mm Lug-to-Lug. Der Sweet Spot liegt bei 38-40 mm mit 46-48 mm L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Handgelenkmaß eingeben',
      text: 'Gib deinen Handgelenkumfang in Zentimetern ein. Das Tool aktualisiert die visuelle Handgelenk-Silhouette.',
    },
    {
      name: 'Uhrenmaße eingeben',
      text: 'Gib Gehäusedurchmesser, Lug-to-Lug und Höhe in Millimetern ein.',
    },
    {
      name: 'Hinzufügen und vergleichen',
      text: 'Klicke auf "Uhr hinzufügen", um sie zu speichern. Füge mehrere Uhren hinzu und klicke zwischen ihnen, um die Passform zu vergleichen.',
    },
    {
      name: 'Farbe lesen',
      text: 'Grün = hervorragend, gelb = grenzwertig, rot = zu groß für dein Handgelenk.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie messe ich mein Handgelenk für eine Uhr?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verwende ein flexibles Maßband um den Handgelenkknochen. Der Durchschnitt liegt bei 17-19 cm für Männer, 14-16 cm für Frauen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist Lug-to-Lug und warum ist es wichtig?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-Lug ist der Abstand zwischen oberen und unteren Laschen. Er bestimmt, ob die Uhr über dein Handgelenk übersteht.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Welche Uhrengröße passt an ein 17-cm-Handgelenk?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ein 17-cm-Handgelenk passt zu 36-42 mm Durchmesser mit 44-50 mm Lug-to-Lug. Der Sweet Spot liegt bei 38-40 mm mit 46-48 mm L2L.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Uhrengrößen-Vergleich',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Erfordert HTML5 und JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So vergleicht man Uhrengrößen',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Handgelenkmaß eingeben',
          'text': 'Gib deinen Handgelenkumfang in Zentimetern ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Uhrenmaße eingeben',
          'text': 'Gib Gehäusedurchmesser, Lug-to-Lug und Höhe ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hinzufügen und vergleichen',
          'text': 'Klicke auf "Uhr hinzufügen", um sie zu speichern. Füge mehrere Uhren hinzu, um sie zu vergleichen.',
        },
      ],
    },
  ],
};
