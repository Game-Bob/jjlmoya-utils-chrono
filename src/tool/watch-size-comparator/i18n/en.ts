import type { ToolLocaleContent } from '../../../types';
import type { WatchSizeComparatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSizeComparatorUI> = {
  slug: 'watch-size-comparator',
  title: 'Watch Size Comparator: Visual Fit on Your Wrist',
  description: 'Compare watch case sizes visually. Enter diameter, lug-to-lug, and wrist size to see how a watch fits before you buy.',
  ui: {
    title: 'Watch Size Comparator',
    addWatch: 'Add Watch',
    watchName: 'Watch Name',
    watchNamePlaceholder: 'e.g. Rolex Submariner',
    caseDiameter: 'Case Diameter',
    lugToLug: 'Lug-to-Lug',
    thickness: 'Thickness',
    wristSize: 'Wrist Size',
    wristSizePlaceholder: 'e.g. 17',
    mm: 'mm',
    cm: 'cm',
    unitCm: 'CM',
    unitInches: 'IN',
    remove: 'Remove',
    yourWatches: 'Your Watches',
    fitLegend: 'Fit Legend',
    excellentFit: 'Excellent',
    goodFit: 'Good',
    borderlineFit: 'Borderline',
    largeFit: 'Too Large',
    wristCurve: 'wrist',
    nameRequired: 'Enter a watch name',
    watchTooLarge: 'Watch extends beyond wrist',
    l2lExceedsWrist: 'Lug-to-lug exceeds wrist width',
    excellentDesc: 'Proportional-lug-to-lug stays well within your wrist.',
    goodDesc: 'Good fit-overhangs slightly but still comfortable.',
    borderlineDesc: 'Borderline-lugs approach the edge of your wrist.',
    largeDesc: 'Too large-lugs likely overhang your wrist.',
    fitsWell: 'Fits well',
    slightlyLarge: 'Slightly large',
    tooLarge: 'Too large',
    source: 'Size guide',
    estimateNote: 'Enter dimensions and add a watch to see how it fits your wrist.',
  },
  seo: [
    { type: 'title', text: 'Watch Size Comparator: Visual Fit on Your Wrist', level: 2 },
    { type: 'paragraph', html: 'Wondering if a <strong>42mm watch</strong> will fit your <strong>17cm wrist</strong>? Or whether that 48mm lug-to-lug will overhang? The Watch Size Comparator gives you a visual answer. Enter your case diameter, lug-to-lug, thickness, and wrist size-the tool draws the watch to scale and colors the fit from <span style="color:#22c55e">green (excellent)</span> to <span style="color:#ef4444">red (too large)</span>. Works in both <strong>metric and imperial</strong> units.' },
    { type: 'title', text: 'Watch Size Glossary', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Case Diameter', definition: 'The width of the watch case measured across the dial, excluding the crown. Typical range: 34-46mm. The most commonly quoted size, but not the only fit factor.' },
        { term: 'Lug-to-Lug (L2L)', definition: 'The distance between the top and bottom lugs where the strap attaches. This determines whether the watch overhangs your wrist. A 40mm watch with 50mm L2L wears larger than a 42mm with 46mm L2L.' },
        { term: 'Flat Wrist Width', definition: 'The width of the top surface of your wrist, as opposed to its circumference. Roughly wrist circumference / π minus 2-4cm. This is the dimension your watch actually sits on.' },
        { term: 'Case-to-Wrist Ratio', definition: 'Case diameter divided by wrist width. A ratio of 0.6-0.75 (60-75%) is considered the classic proportional fit.' },
      ]
    },

    { type: 'title', text: 'What Size Watch Fits My Wrist?', level: 3 },
    {
      type: 'table', headers: ['Wrist Circumference', 'Flat Width (approx.)', 'Ideal Case Diameter', 'Max Lug-to-Lug', 'Best For'], rows: [
        ['14-15 cm (5.5-5.9 in)', '38-42 mm', '30-34 mm', '38-42 mm', 'Vintage & dress watches'],
        ['15-16 cm (5.9-6.3 in)', '40-44 mm', '34-36 mm', '40-44 mm', 'Small classic watches'],
        ['16-17 cm (6.3-6.7 in)', '42-46 mm', '36-39 mm', '42-46 mm', 'Everyday versatile size'],
        ['17-18 cm (6.7-7.1 in)', '44-48 mm', '38-42 mm', '44-48 mm', 'Sweet spot for most brands'],
        ['18-19 cm (7.1-7.5 in)', '46-50 mm', '40-44 mm', '46-50 mm', 'Dive watches & GMTs'],
        ['19-20 cm (7.5-7.9 in)', '48-52 mm', '42-46 mm', '48-52 mm', 'Tool & pilot watches'],
        ['20-21 cm (7.9-8.3 in)', '50-54 mm', '44-48 mm', '50-54 mm', 'Oversized & flieger watches'],
      ]
    },

    { type: 'title', text: 'How to Measure Your Wrist for a Watch', level: 3 },
    {
      type: 'list', items: [
        'Wrap a flexible tape measure around your wrist just behind the wrist bone (ulnar styloid). It should be snug but not tight.',
        'If you don\'t have a tape, use a string or a cable, mark the overlap, then measure it against a ruler.',
        'Write down the measurement in centimeters or inches. Average male wrists are 17-19cm (6.7-7.5in); average female wrists are 14-16cm (5.5-6.3in).',
        'To estimate your flat wrist width, subtract 2-4cm from the circumference or use the tool\'s auto-estimate feature.',
      ]
    },

    { type: 'diagnostic', variant: 'info', title: 'Lug to Lug Is the Real Fit Limit', icon: 'mdi:ruler', html: 'Most people focus on <strong>case diameter</strong>, but <strong>lug-to-lug</strong> is what determines if a watch fits your wrist. A watch with 48mm L2L on a 55mm flat wrist (17cm circumference) takes up 87% of the wrist width. Above 65% the lugs start to approach the edge of your wrist. <strong>Always check L2L first.</strong>' },

    { type: 'tip', title: 'CM or Inches? Use What You Know', html: 'The tool now supports both metric and imperial. Measure your wrist in whatever system you use daily. Watch case dimensions are <strong>always in millimeters</strong> (even in the US), so diameters and L2L stay in mm-only the wrist measurement toggles. This matches how the watch industry works.' },

    {
      type: 'summary', title: 'Quick Fit Checklist Before You Buy', items: [
        'Measure your wrist circumference and enter it in the tool.',
        'Look up the watch\'s lug-to-lug-not just the case diameter.',
        'The watch should take up 60-75% of your flat wrist width for a classic fit.',
        'If the lugs overhang your wrist edges, the watch will feel too large regardless of diameter.',
        'Use the tool to compare multiple watches side by side before making a purchase decision.',
      ]
    },
  ],
  faq: [
    {
      question: 'How do I measure my wrist for a watch?',
      answer: 'Use a flexible tape measure around the wrist bone. Alternatively, wrap a string, mark the overlap, and measure it with a ruler. Average is 17-19cm for men, 14-16cm for women.',
    },
    {
      question: 'What is lug-to-lug and why does it matter?',
      answer: 'Lug-to-lug is the distance between the top and bottom lugs. It determines whether the watch overhangs your wrist. A watch with 48mm lug-to-lug on a 17cm wrist (≈55mm flat width) is proportional at 87%. Above 65% starts to overhang.',
    },
    {
      question: 'What size watch fits a 17cm wrist?',
      answer: 'A 17cm wrist (≈55mm flat width) comfortably fits watches with 36-42mm diameter and 44-50mm lug-to-lug. The sweet spot is 38-40mm with 46-48mm L2L.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Enter your wrist size',
      text: 'Type your wrist circumference in centimeters. The tool updates the visual wrist silhouette.',
    },
    {
      name: 'Enter watch dimensions',
      text: 'Input case diameter, lug-to-lug, and thickness in millimeters.',
    },
    {
      name: 'Add and compare',
      text: 'Click "Add Watch" to save it. Add multiple watches and click between them to compare fit.',
    },
    {
      name: 'Read the color',
      text: 'Green = excellent, yellow = borderline, red = too large for your wrist.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I measure my wrist for a watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use a flexible tape measure around the wrist bone. Average is 17-19cm for men, 14-16cm for women.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is lug-to-lug and why does it matter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lug-to-lug is the distance between top and bottom lugs. It determines if the watch overhangs your wrist.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What size watch fits a 17cm wrist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A 17cm wrist fits 36-42mm diameter with 44-50mm lug-to-lug. Sweet spot is 38-40mm with 46-48mm L2L.',
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
      'name': 'How to compare watch sizes',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter your wrist size',
          'text': 'Type your wrist circumference in centimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter watch dimensions',
          'text': 'Input case diameter, lug-to-lug, and thickness.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Add and compare',
          'text': 'Click Add Watch to save it. Add multiple watches to compare.',
        },
      ],
    },
  ],
};
