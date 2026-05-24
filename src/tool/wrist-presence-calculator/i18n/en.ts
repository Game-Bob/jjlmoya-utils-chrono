import type { ToolLocaleContent } from '../../../types';
import type { WristPresenceCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WristPresenceCalculatorUI> = {
  slug: 'wrist-presence-calculator',
  title: 'Watch Wrist Presence & Sizing Calculator',
  description: 'Calculate the case-to-wrist ratio, flat wrist width coverage, and determine the ideal watch size for your wrist based on aesthetic guidelines.',
  ui: {
    title: 'Wrist Sizing Settings',
    wristCircumferenceLabel: 'Wrist Circumference',
    caseDiameterLabel: 'Case Diameter',
    lugToLugLabel: 'Lug-to-Lug',
    wristWidthLabel: 'Flat Wrist Width',
    autoEstimateWidthLabel: 'Auto-estimate flat wrist width (30%)',
    unitCm: 'CM',
    unitInches: 'IN',
    unitMm: 'MM',
    fitAnalysisTitle: 'Wrist Fit Assessment',
    caseWristRatioLabel: 'Case-to-Wrist Ratio',
    wristCoverageLabel: 'Wrist Coverage',
    verdictLabel: 'Verdict',
    verdictOversized: 'Oversized Fit',
    verdictBold: 'Bold / Modern Fit',
    verdictGolden: 'Golden / Classic Fit',
    verdictVintage: 'Vintage / Undersized',
    coverageSafe: 'Safe Fit',
    coverageBold: 'Bold Fit',
    coverageOverhang: 'Overhang Warning',
    sweetSpotTitle: 'Fit Style',
    sweetSpotDesc: 'The sweet spot represents the most balanced visual appearance.',
    minClassicLabel: 'Vintage / Classic Fit',
    sweetSpotLabel: 'Aesthetic Sweet Spot',
    maxBoldLabel: 'Modern / Bold Fit',
    maxLugToLugLabel: 'Max Recommended Lug-to-Lug',
    idealSizesTitle: 'Ideal Sizing Guidelines',
    visualizerTitle: 'Live Fit Simulator',
    wristWidthHelp: 'Estimated based on wrist shape.',
    estimatedLabel: 'estimated',
    customLabel: 'Wrist',
  },
  seo: [
    { type: 'title', text: 'How to Choose the Perfect Watch Size: The Proportional Fit Guide', level: 2 },
    { type: 'paragraph', html: 'Finding the right watch size is a blend of mathematics, geometry, and personal style. In horology, how a timepiece sits on your arm is called <strong>wrist presence</strong>. A watch should look balanced—neither dominating your arm with unsightly overhang nor disappearing like a tiny speck. To achieve this balance, watch collectors analyze three main metrics: case diameter, lug-to-lug distance, and wrist shape.' },
    { type: 'title', text: 'Understanding the Case-to-Wrist Sizing Ratio', level: 3 },
    { type: 'paragraph', html: 'A traditional method to gauge watch proportions is the case-to-wrist ratio. By converting your wrist circumference to millimeters and dividing it by the watch\'s case diameter, you get a ratio. Ratios between <strong>4.5 and 5.0</strong> represent the classic sweet spot. Ratios from <strong>4.0 to 4.5</strong> create a bold, sporty modern look. Ratios above 5.0 offer a vintage dress watch aesthetic, while ratios below 4.0 are considered oversized.' },
    { type: 'title', text: 'Why Lug-to-Lug and Flat Wrist Width Define the Real Fit', level: 3 },
    { type: 'paragraph', html: 'While case diameter gets all the attention, <strong>lug-to-lug distance</strong> (the vertical length from top lug tips to bottom lug tips) is the true test of fit. The golden rule of watch sizing is that the lug-to-lug distance should never exceed the flat width of your wrist. If the lugs extend past your wrist edges, it creates a lug overhang. This results in the watch sliding around, a gap between the strap and your skin, and a poor visual appearance.' },
    { type: 'title', text: 'Flat vs. Round Wrists: Sizing for Your Specific Anatomy', level: 3 },
    { type: 'paragraph', html: 'Wrist circumference only tells part of the story. Wrists with identical circumferences can have different cross-sectional shapes: flat or round. Flat wrists have a wider top surface, meaning they can wear watches with longer lug-to-lug spans safely. Round wrists are more cylindrical, meaning they have a narrower flat top surface and require shorter lug-to-lug distances to avoid overhang.' },
  ],
  faq: [
    {
      question: 'What is the ideal watch case-to-wrist ratio?',
      answer: 'The ideal case-to-wrist ratio is between 4.0 and 5.0. Divided by wrist circumference, a ratio of 4.5 represents the traditional horology sweet spot. A ratio of 4.0 to 4.5 offers a modern, bold wrist presence, while ratios above 5.0 suit vintage dress watches, and ratios below 4.0 tend to look oversized.',
    },
    {
      question: 'Why does watch lug-to-lug distance matter more than case diameter?',
      answer: 'Case diameter only measures the width of the watch face, but lug-to-lug defines the total length of the watch across your wrist. If the lug-to-lug length exceeds your flat wrist width, the lugs will overhang, causing the strap to drape vertically. This makes the watch look unstable and disproportionately large.',
    },
    {
      question: 'How do flat vs. round wrists affect watch sizing and fit?',
      answer: 'Two wrists with the same circumference (e.g., 17 cm) can wear watches differently. A flat wrist has a wider top surface, allowing it to accommodate longer lug-to-lug watches without overhang. A round wrist is narrower on top, requiring shorter lug-to-lug lengths for a stable fit.',
    },
    {
      question: 'How do thickness and bezel width change a watch\'s visual size?',
      answer: 'Watches with very thin bezels (like dress watches) have a larger dial surface area and look larger on the wrist than their actual diameter. Dive watches with thick rotating bezels have a smaller dial, making them wear smaller. Similarly, watches thicker than 13mm appear chunkier and have greater visual weight.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Measure Your Wrist',
      text: 'Wrap a flexible measuring tape around your wrist bone to find your circumference in cm or inches.',
    },
    {
      name: 'Enter Watch Dimensions',
      text: 'Input the case diameter and the lug-to-lug distance of the watch you are evaluating.',
    },
    {
      name: 'Analyze Fit and Visual Simulator',
      text: 'Check the Case-to-Wrist ratio, check the lug overhang alert, and view the real-time simulation diagram.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is the ideal watch case-to-wrist ratio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The ideal case-to-wrist ratio is between 4.0 and 5.0. Divided by wrist circumference, a ratio of 4.5 represents the traditional horology sweet spot. A ratio of 4.0 to 4.5 offers a modern, bold wrist presence, while ratios above 5.0 suit vintage dress watches, and ratios below 4.0 tend to look oversized.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why does watch lug-to-lug distance matter more than case diameter?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Case diameter only measures the width of the watch face, but lug-to-lug defines the total length of the watch across your wrist. If the lug-to-lug length exceeds your flat wrist width, the lugs will overhang, causing the strap to drape vertically. This makes the watch look unstable and disproportionately large.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do flat vs. round wrists affect watch sizing and fit?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Two wrists with the same circumference (e.g., 17 cm) can wear watches differently. A flat wrist has a wider top surface, allowing it to accommodate longer lug-to-lug watches without overhang. A round wrist is narrower on top, requiring shorter lug-to-lug lengths for a stable fit.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do thickness and bezel width change a watch\'s visual size?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Watches with very thin bezels (like dress watches) have a larger dial surface area and look larger on the wrist than their actual diameter. Dive watches with thick rotating bezels have a smaller dial, making them wear smaller. Similarly, watches thicker than 13mm appear chunkier and have greater visual weight.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Wrist Presence & Sizing Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Determine Perfect Watch Size',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Measure Your Wrist',
          'text': 'Wrap a flexible measuring tape around your wrist bone to find your circumference in cm or inches.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter Watch Dimensions',
          'text': 'Input the case diameter and the lug-to-lug distance of the watch you are evaluating.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analyze Fit and Visual Simulator',
          'text': 'Check the Case-to-Wrist ratio, check the lug overhang alert, and view the real-time simulation diagram.'
        }
      ]
    }
  ]
};
