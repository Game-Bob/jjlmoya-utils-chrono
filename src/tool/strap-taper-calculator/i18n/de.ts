import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'armbandproportionen-rechner',
  title: 'Armbandverjüngung und Proportionen Rechner',
  description: 'Berechne die ideale Armbandverjüngung für deine Uhr anhand von Gehäusedurchmesser und Stegbreite. Finde die perfekte Schließenbreite für einen ausgewogenen Look.',
  ui: {
    title: 'Armbandverjüngung Rechner',
    caseLabel: 'Uhrenmaße',
    caseInput: 'Gehäusedurchmesser',
    lugLabel: 'Stegbreite',
    lugInput: 'Stegbreite',
    taperLabel: 'Verjüngungsstil',
    straight: 'Gerade',
    classic: 'Klassisch',
    aggressive: 'Stark',
    customTaper: 'Benutzerdefiniert',
    buckleWidth: 'Schließenbreite',
    resultsTitle: 'Proportionen',
    lugWidth: 'Stegbreite',
    buckleWidthResult: 'Schließenbreite',
    taperAmount: 'Verjüngung',
    taperRatio: 'Verhältnis',
    proportionScore: 'Proportion',
    proportionExcellent: 'Hervorragend',
    proportionGood: 'Gut',
    proportionFair: 'Akzeptabel',
    proportionUnbalanced: 'Unausgewogen',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: 'Hinweis',
    noteContent: 'Eine klassische Verjüngung von 4 mm (z. B. von 20 auf 16 mm) passt zu eleganteren Uhren. Taucher- und Werkzeughuhren wirken oft besser mit einer geraden oder 2 mm Verjüngung für einen robusten Look.',
    step1: 'Gib Gehäusedurchmesser und Stegbreite ein.',
    step2: 'Wähle einen Verjüngungsstil oder lege eine eigene Schließenbreite fest.',
    step3: 'Lies die Proportionen und die visuelle Darstellung ab.',
  },
  seo: [
    { type: 'title', text: 'Armbandverjüngung Rechner \u2014 Proportionen, Schließenbreite und Leitfaden', level: 2 },
    { type: 'paragraph', html: 'Ein gut proportioniertes Armband macht oder zerbricht den Eindruck einer Uhr. Zu viel Verjüngung bei einem Tauchermodell wirkt fragil. Keine Verjüngung bei einer eleganten Uhr wirkt klobig. Dieser Rechner hilft dir, das ideale <strong>Verjüngungsverhältnis</strong> anhand von Gehäusedurchmesser und Stegbreite zu finden.' },
    { type: 'title', text: 'Was ist Armbandverjüngung?', level: 3 },
    { type: 'paragraph', html: 'Armbandverjüngung bezeichnet die Verringerung der Breite vom Steg zum Schließenende eines Uhrarmbands. Eine klassische elegante Uhr könnte von 20 mm an den Stegen auf 16 mm an der Schließe verjüngen \u2014 eine Verjüngung um 4 mm. Eine Taucheruhr könnte durchgehend bei 20 mm bleiben, um einen robusteren Werkzeughuhrencharakter zu erzielen.' },
    { type: 'title', text: 'Der goldene Schnitt für Armbandproportionen', level: 3 },
    { type: 'paragraph', html: 'Uhrenliebhaber sind sich weitgehend einig, dass eine Stegbreite zwischen 45 % und 55 % des Gehäusedurchmessers am besten aussieht. Bei der Verjüngung sorgt eine Schließenbreite von 75 % bis 85 % der Stegbreite für eine ausgewogene, elegante Silhouette. Verhältnisse außerhalb dieses Bereichs können die Uhr kopflastig oder zu filigran wirken lassen.' },
    { type: 'title', text: 'Verjüngung nach Uhrenstil', level: 3 },
    { type: 'paragraph', html: 'Eleganzuhren: 4 mm Verjüngung (20 auf 16 mm). Sportuhren: 2 bis 3 mm Verjüngung. Taucheruhren: 0 bis 2 mm Verjüngung. Militär- oder Felduhren: gerade Verjüngung für einen robusten Look. Pilotenuhren: minimale Verjüngung passend zur Instrumentenästhetik.' },
  ],
  faq: [
    {
      question: 'Was ist die ideale Armbandverjüngung für eine elegante Uhr?',
      answer: 'Eine Verjüngung von 4 mm ist die klassische Wahl. Bei einer Stegbreite von 20 mm bedeutet das eine 16 mm Schließe. So entsteht eine elegante Silhouette, die den edlen Look einer Anzugsuhr unterstreicht.',
    },
    {
      question: 'Sollte eine Taucheruhr ein verjüngtes Armband haben?',
      answer: 'Die meisten Taucheruhren sehen mit minimaler oder gar keiner Verjüngung am besten aus. Ein durchgehend gerades 20 mm Armband verleiht einen robusten Werkzeughuhrencharakter, der zum nüchternen Design von Taucheruhren passt.',
    },
    {
      question: 'Was passiert, wenn die Verjüngung zu stark ist?',
      answer: 'Eine starke Verjüngung (6 mm oder mehr) kann den Uhrenkopf unverhältnismäßig groß und kopflastig wirken lassen. Das Armband kann sich am Schließenende zudem zu dünn anfühlen.',
    },
    {
      question: 'Wie messe ich die Stegbreite?',
      answer: 'Miss den inneren Abstand zwischen den Federsteglöchern am Uhrengehäuse. Das ist die benötigte Armbandbreite. Übliche Größen sind 18 mm, 20 mm und 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Gehäuse- und Stegmaße eingeben',
      text: 'Gib Gehäusedurchmesser und Stegbreite in Millimetern ein.',
    },
    {
      name: 'Verjüngungsstil wählen',
      text: 'Wähle Gerade, Klassisch, Stark oder Benutzerdefiniert. Die Darstellung aktualisiert sich sofort.',
    },
    {
      name: 'Proportionen prüfen',
      text: 'Überprüfe das Verhältnis und die Prozentzahl, um zu sehen, ob deine Armbandwahl ausgewogen ist.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Was ist die ideale Armbandverjüngung für eine elegante Uhr?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eine Verjüngung von 4 mm ist die klassische Wahl. Bei einer Stegbreite von 20 mm bedeutet das eine 16 mm Schließe, was eine elegante Silhouette ergibt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte eine Taucheruhr ein verjüngtes Armband haben?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten Taucheruhren sehen mit minimaler oder keiner Verjüngung am besten aus. Ein gerades 20 mm Armband vermittelt einen robusten Werkzeughuhrencharakter.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was passiert, wenn die Verjüngung zu stark ist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eine starke Verjüngung kann den Uhrenkopf unverhältnismäßig groß wirken lassen, und das Armband kann am Schließenende zu dünn sein.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie messe ich die Stegbreite?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Miss den inneren Abstand zwischen den Federsteglöchern am Uhrengehäuse. Übliche Größen sind 18 mm, 20 mm und 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Armbandverjüngung Rechner',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So berechnest du die Armbandverjüngung einer Uhr',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Gehäuse- und Stegmaße eingeben',
          'text': 'Gib Gehäusedurchmesser und Stegbreite in Millimetern ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Verjüngungsstil wählen',
          'text': 'Wähle Gerade, Klassisch, Stark oder Benutzerdefiniert.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Proportionen prüfen',
          'text': 'Überprüfe das Verhältnis und die Prozentzahl.',
        },
      ],
    },
  ],
};
