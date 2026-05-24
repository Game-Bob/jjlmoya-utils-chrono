import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'strap-taper-calculator',
  title: 'Watch Strap Taper & Proportions Calculator',
  description: 'Calculate the ideal strap taper for your watch based on case diameter and lug width. Find the perfect buckle width for a balanced look.',
  ui: {
    title: 'Strap Taper Calculator',
    caseLabel: 'Watch Dimensions',
    caseInput: 'Case diameter',
    lugLabel: 'Lug width',
    lugInput: 'Lug width',
    taperLabel: 'Taper Style',
    straight: 'Straight',
    classic: 'Classic',
    aggressive: 'Aggressive',
    customTaper: 'Custom',
    buckleWidth: 'Buckle width',
    resultsTitle: 'Proportions',
    lugWidth: 'Lug width',
    buckleWidthResult: 'Buckle width',
    taperAmount: 'Taper',
    taperRatio: 'Ratio',
    proportionScore: 'Proportion',
    proportionExcellent: 'Excellent',
    proportionGood: 'Good',
    proportionFair: 'Fair',
    proportionUnbalanced: 'Unbalanced',
    mmUnit: 'mm',
    arrow: '\u2192',
    noteTitle: 'Note',
    noteContent: 'A classic taper of 4 mm (e.g., 20 to 16 mm) suits dress watches. Divers and tool watches often look better with a straight or 2 mm taper for a robust feel.',
    step1: 'Enter your case diameter and lug width.',
    step2: 'Choose a taper style or set a custom buckle width.',
    step3: 'Read the proportions and visual representation.',
  },
  seo: [
    { type: 'title', text: 'Watch Strap Taper Calculator — Proportions, Buckle Width & Visual Guide', level: 2 },
    { type: 'paragraph', html: 'A well proportioned strap makes or breaks a watch. Too much taper on a diver makes it look fragile. No taper on a dress watch makes it look clunky. This calculator helps you find the ideal <strong>strap taper ratio</strong> based on your case diameter and lug width.' },
    { type: 'title', text: 'What Is Strap Taper?', level: 3 },
    { type: 'paragraph', html: 'Strap taper is the reduction in width from the lug end to the buckle end of a watch strap. A classic dress watch might taper from 20 mm at the lugs to 16 mm at the buckle — a 4 mm taper. A dive watch might stay at 20 mm straight through for a more tool-like appearance.' },
    { type: 'title', text: 'The Golden Ratio for Strap Proportions', level: 3 },
    { type: 'paragraph', html: 'Watch enthusiasts generally agree that a lug width between 45% and 55% of the case diameter looks best. For the taper, a buckle width that is 75% to 85% of the lug width creates a balanced, elegant silhouette. Ratios outside this range can make the watch look top heavy or fragile.' },
    { type: 'title', text: 'Taper by Watch Style', level: 3 },
    { type: 'paragraph', html: 'Dress watches: 4 mm taper (20 to 16 mm). Sports watches: 2 to 3 mm taper. Dive watches: 0 to 2 mm taper. Military or field watches: straight taper for a rugged look. Pilot watches: minimal taper to match the instrument aesthetic.' },
  ],
  faq: [
    {
      question: 'What is the ideal strap taper for a dress watch?',
      answer: 'A 4 mm taper is the classic choice. For a 20 mm lug width, that means an 16 mm buckle. This creates an elegant silhouette that complements the refined look of a dress watch.',
    },
    {
      question: 'Should a dive watch have a tapered strap?',
      answer: 'Most dive watches look best with minimal or no taper. A straight 20 mm strap throughout gives a robust, tool watch feel that matches the utilitarian nature of divers.',
    },
    {
      question: 'What happens if the taper is too aggressive?',
      answer: 'An aggressive taper (6 mm or more) can make the watch head look disproportionately large and top heavy. The strap may also feel flimsy at the buckle end.',
    },
    {
      question: 'How do I measure lug width?',
      answer: 'Measure the inner width between the spring bar holes on the watch case. This is the strap width you need. Common sizes are 18 mm, 20 mm, and 22 mm.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Enter case and lug dimensions',
      text: 'Input your case diameter and lug width in millimeters.',
    },
    {
      name: 'Choose a taper style',
      text: 'Select Straight, Classic, Aggressive, or Custom. The visual updates instantly.',
    },
    {
      name: 'Review proportions',
      text: 'Check the ratio and proportion score to see if your strap choice is balanced.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the ideal strap taper for a dress watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A 4 mm taper is the classic choice. For a 20 mm lug width, that means a 16 mm buckle. This creates an elegant silhouette.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should a dive watch have a tapered strap?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most dive watches look best with minimal or no taper. A straight 20 mm strap gives a robust, tool watch feel.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What happens if the taper is too aggressive?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'An aggressive taper can make the watch head look disproportionately large and the strap may feel flimsy at the buckle end.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I measure lug width?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Measure the inner width between the spring bar holes on the watch case. Common sizes are 18 mm, 20 mm, and 22 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Strap Taper Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to calculate watch strap taper proportions',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter case and lug dimensions',
          'text': 'Input your case diameter and lug width in millimeters.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Choose a taper style',
          'text': 'Select Straight, Classic, Aggressive, or Custom.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Review proportions',
          'text': 'Check the ratio and proportion score.',
        },
      ],
    },
  ],
};
