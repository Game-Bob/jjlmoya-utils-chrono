import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'water-resistance-converter',
  title: 'Watch Water Resistance Converter — Meters, ATM, Bar & Feet',
  description: 'Convert watch water resistance ratings between meters, feet, ATM, and bar. See what each rating actually means for daily wear, swimming, and diving.',
  ui: {
    title: 'Water Resistance Converter',
    depthLabel: 'Water Resistance',
    enterDepth: 'Enter depth rating',
    unitMeters: 'Meters (m)',
    unitFeet: 'Feet (ft)',
    unitATM: 'Atmospheres (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Equivalent Ratings',
    ratingLabel: 'Rating',
    whatItMeans: 'What It Means',
    handWash: 'Splash Resistant',
    handWashDesc: 'Hand washing, rain, splashes. Not for swimming.',
    showerSwim: 'Shower & Light Swim',
    showerSwimDesc: 'Showering, light swimming. Not for diving.',
    snorkeling: 'Swimming & Snorkeling',
    snorkelingDesc: 'Pool swimming, snorkeling, water sports.',
    scubaDiving: 'Recreational Scuba',
    scubaDivingDesc: 'Scuba diving, snorkeling, water sports.',
    deepDiving: 'Deep Diving',
    deepDivingDesc: 'Deep recreational diving, saturation.',
    saturationDiving: 'Saturation Diving',
    saturationDivingDesc: 'Professional saturation diving. Extreme depths.',
    tipTitle: 'Tip',
    tipContent: 'Water resistance degrades over time. Gaskets and seals should be tested yearly and replaced every 3\u20135 years.',
  },
  seo: [
    { type: 'title', text: 'Watch Water Resistance Converter — Decoding Meters, ATM, Bar & Feet', level: 2 },
    { type: 'paragraph', html: 'A 30-meter water resistance rating does not mean you can dive to 30 meters. It means the watch can handle splashes and light rain. This converter translates between <strong>meters, feet, atmospheres (ATM), and bars</strong>, and tells you what each rating actually allows.' },
    { type: 'title', text: 'The Truth About Water Resistance Ratings', level: 3 },
    { type: 'paragraph', html: 'Watch water resistance is tested under static pressure in a lab. Real-world conditions — moving your arm, diving, temperature changes — create dynamic pressure that is much higher. A 30m / 3 ATM watch is only splash resistant. For swimming, you need at least 100m / 10 ATM. For scuba diving, 200m / 20 ATM is the standard entry point.' },
    { type: 'title', text: 'Why Water Resistance Degrades Over Time', level: 3 },
    { type: 'paragraph', html: 'The rubber gaskets and O-rings that seal your watch dry out, crack, and compress over time. Heat, UV light, and chemicals accelerate this process. A watch that was once water resistant to 100m may only be splash resistant after 5 years without service. Have your seals tested annually and replaced every 3 to 5 years.' },
    { type: 'title', text: 'ISO 6425 — The Diver Watch Standard', level: 3 },
    { type: 'paragraph', html: 'For a watch to be called a "diver\'s watch," it must meet ISO 6425 standards: at least 100m water resistance, a unidirectional bezel, luminous markings, and a screw-down crown. Watches that meet this standard are tested 25% above their rated depth. A 200m ISO-rated watch is tested at 250m.' },
  ],
  faq: [
    {
      question: 'Can I swim with a 30-meter water resistant watch?',
      answer: 'No. A 30m / 3 ATM rating means splash resistance only — hand washing, rain, and sweat. Swimming creates dynamic pressure that exceeds the static test pressure. For swimming, choose at least 100m / 10 ATM.',
    },
    {
      question: 'What is the difference between ATM, bar, and meters?',
      answer: '1 ATM = 1 bar ≈ 10 meters of static water column. They are essentially equivalent in the watch industry. A 10 ATM watch is the same as a 10 bar watch and is rated to approximately 100 meters.',
    },
    {
      question: 'How often should I test my watch water resistance?',
      answer: 'Once a year, especially before water exposure. Gaskets and seals wear out. Every 3-5 years, all seals should be replaced during a full service.',
    },
    {
      question: 'What does ISO 6425 certified mean?',
      answer: 'ISO 6425 is the international standard for diver watches. It requires at least 100m resistance, a unidirectional bezel, luminous markings, and testing 25% above the rated depth.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Enter your rating',
      text: 'Type your watch\'s water resistance number and select the unit (meters, feet, ATM, or bar).',
    },
    {
      name: 'Read the equivalents',
      text: 'The card shows the converted values in all four units simultaneously.',
    },
    {
      name: 'Check the recommendation',
      text: 'The highlighted card shows what activities are safe at your watch\'s rating.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Can I swim with a 30-meter water resistant watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. A 30m / 3 ATM rating means splash resistance only — hand washing, rain, and sweat. For swimming, choose at least 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between ATM, bar, and meters?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 meters of static water column. They are essentially equivalent in the watch industry.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How often should I test my watch water resistance?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Once a year, especially before water exposure. Every 3-5 years, all seals should be replaced during a full service.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What does ISO 6425 certified mean?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 requires at least 100m resistance, a unidirectional bezel, luminous markings, and testing 25% above the rated depth.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Water Resistance Converter',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to convert watch water resistance ratings',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Enter your rating',
          'text': 'Type your watch water resistance number and select the unit.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the equivalents',
          'text': 'The card shows the converted values in all four units simultaneously.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Check the recommendation',
          'text': 'The highlighted card shows what activities are safe at your watch rating.',
        },
      ],
    },
  ],
};
