import type { ToolLocaleContent } from '../../../types';
import type { StrapLengthCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapLengthCalculatorUI> = {
  slug: 'strap-length-calculator',
  title: 'Watch Strap Length Calculator',
  description: 'Calculate the ideal strap size for your wrist. Get recommendations for two-piece and NATO straps based on wrist size and watch dimensions.',
  ui: {
    title: 'Strap Length Calculator',
    wristLabel: 'Wrist circumference',
    wristPlaceholder: 'e.g. 170',
    lugLabel: 'Watch lug-to-lug',
    lugPlaceholder: 'e.g. 45',
    fitLabel: 'Preferred fit',
    fitTight: 'Tight',
    fitRegular: 'Regular',
    fitLoose: 'Loose',
    unitLabel: 'Unit',
    standardLabel: 'Standard retail size',
    bespokeLabel: 'Bespoke custom size',
    natoLabel: 'NATO strap length',
    longSide: 'Long side',
    shortSide: 'Short side',
    totalLength: 'Total length',
    millimeters: 'mm',
    inches: 'in',
    sizeXS: 'Extra Small (XS) - Wrists < 6.0 in',
    sizeS: 'Small (S) - Wrists 6.0 to 6.5 in',
    sizeM: 'Medium (M) - Wrists 6.5 to 7.0 in',
    sizeL: 'Large (L) - Wrists 7.0 to 7.5 in',
    sizeXL: 'Extra Large (XL) - Wrists 7.5 to 8.0 in',
    sizeXXL: 'Double Extra Large (XXL) - Wrists > 8.0 in',
  },
  seo: [
    {
      type: 'title',
      text: 'Watch Strap Length Guide & Sizing Calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Choosing the perfect watch strap is essential for both wearing comfort and aesthetic balance. A strap that is too long leaves an unsightly tail flapping around, while a strap that is too short might not buckle securely. This guide covers how to determine standard retail sizes, bespoke custom measurements, and NATO strap lengths based on wrist size, watch design, and your target fit.',
    },
    {
      type: 'stats',
      items: [
        { value: '120/80mm', label: 'Standard Retail Size' },
        { value: '160-190mm', label: 'Fits Most Wrists' },
        { value: '7 Holes', label: 'Typical Sizing Adjustments' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Understanding Two-Piece Strap Sizing (Long vs. Short Side)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A two-piece watch strap is defined by two numbers, such as <strong>120/80 mm</strong>. The first number (e.g., 120mm) is the <strong>long side</strong> (the tail or tip side), which attaches to the 6 o\'clock position. The second number (e.g., 80mm) is the <strong>short side</strong> (the buckle side), which attaches to the 12 o\'clock position. The buckle length itself is excluded from these measurements.',
    },
    {
      type: 'title',
      text: 'Standard Retail Sizing Chart by Wrist Circumference',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Wrist Size', 'Leather/Rubber Strap Length', 'NATO Strap Length', 'Recommended Fit Style'],
      rows: [
        ['150 - 164 mm (5.9" - 6.5")', '110 / 70 mm', '260 mm', 'Short/Small Fit'],
        ['165 - 178 mm (6.5" - 7.0")', '120 / 80 mm', '270 mm', 'Standard Medium Fit'],
        ['179 - 190 mm (7.0" - 7.5")', '130 / 80 mm', '280 mm', 'Standard Large Fit'],
        ['191 - 203 mm (7.5" - 8.0")', '135 / 85 mm', '290 mm', 'Extra Large Fit'],
        ['204 mm + (8.0"+)', '140 / 85 mm', '300 mm', 'Double Extra Large Fit'],
      ],
    },
    {
      type: 'title',
      text: 'Bespoke Custom Strap Sizing Explained',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When ordering custom-made straps, you can target the absolute perfect fit. Instead of settling for standard retail hole positions, a bespoke strap calculates the precise length for each side so that the buckle rests exactly in the middle of your underside wrist. The formula uses your total wrist circumference, subtracts the watch\'s lug-to-lug height, and splits the remaining length according to the wrist geometry.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Bespoke Custom Straps',
          description: 'Tailored specifically to your wrist and case dimensions. Guarantees the buckle is perfectly centered and eliminates excess tail.',
          points: [
            'Perfect buckle centering',
            'Tailored hole positions',
            'No excess strap tail',
            'Premium look and feel',
          ],
        },
        {
          title: 'Standard Retail Straps',
          description: 'Mass-produced sizes designed to fit a broad range of wrists using multiple sizing holes. Quick and economical.',
          points: [
            'Lower cost',
            'Immediate availability',
            'Fits multiple watches',
            'Standardized dimensions',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Key Watch Strap Terminology',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Lug-to-Lug Distance',
          definition: 'The total vertical distance from the tip of the top lug to the tip of the bottom lug. This is not the case diameter, but the overall length of the rigid watch head sitting on your wrist.',
        },
        {
          term: 'Short Side (Buckle)',
          definition: 'The strap section attached to the 12 o\'clock position of the watch case. It includes the buckle but excludes it in sizing measurements.',
        },
        {
          term: 'Long Side (Tail)',
          definition: 'The strap section attached to the 6 o\'clock position. It has sizing holes to adjust the tightness.',
        },
        {
          term: 'NATO Strap',
          definition: 'A single-piece nylon strap that wraps under the watch case through the spring bars. It is highly adjustable and durable.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Measuring Your Wrist Properly',
      html: 'To get an accurate wrist measurement, wrap a flexible sewing tape measure snugly (but not tightly) around the area where you normally wear your watch. If you don\'t have a tape measure, wrap a piece of string or paper around your wrist, mark where it overlaps, and measure the flat length with a ruler.',
    },
    {
      type: 'title',
      text: 'Why Lug-to-Lug Distance is Critical for Strap Sizing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many collectors forget that the watch case acts as a solid, rigid extension of the strap. A watch with a long 50mm lug-to-lug distance takes up more space on the wrist loop than a 40mm dress watch. Consequently, the larger watch requires shorter straps to achieve the same overall loop size. Failing to account for lug-to-lug distance is the #1 reason for poorly fitting straps.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avoiding Buckle Offset and Lug Overhang',
      html: 'If your strap\'s short side is too long or too short for your wrist, the buckle will slide to the side of your wrist. This causes the watch head to be pulled off-center, leading to discomfort and increased risk of scratching the case or clasp. Always aim for a buckle that sits centered on the flat underside of your wrist.',
    },
    {
      type: 'proscons',
      title: 'NATO Strap vs Two Piece Strap Fit',
      items: [
        {
          pro: 'NATO straps are highly adjustable and prevent watch loss if a spring bar fails.',
          con: 'NATO straps add vertical thickness under the watch head.',
        },
        {
          pro: 'Two-piece straps keep the watch head flush against the skin for a thinner profile.',
          con: 'Two-piece straps require precise sizing and offer fewer adjustments.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'How do you measure watch strap length?',
      answer: 'Watch strap length is typically expressed in two numbers like 120/80 mm. The first number is the length of the long side (tail), and the second is the short side (buckle).',
    },
    {
      question: 'Where should the watch buckle sit on the wrist?',
      answer: 'Ideally, the buckle or clasp should sit centered on the underside of your wrist. If it is offset, the watch head will slide off-center. Adjusting the ratio of the long-side to short-side strap lengths helps achieve perfect centering.',
    },
    {
      question: 'How does the watch\'s lug-to-lug height affect the strap length I need?',
      answer: 'A watch case is a rigid part of the overall strap loop. A larger watch with a longer lug-to-lug distance (e.g., 50mm) reduces the amount of strap length needed to wrap around your wrist compared to a smaller watch (e.g., 40mm lug-to-lug) on the same wrist.',
    },
    {
      question: 'Which side does the long end of a watch strap go on?',
      answer: 'Traditionally, the long side of the strap (containing the sizing holes) is attached to the 6 o\'clock position of the watch case, pointing towards you. The short side (with the buckle) is attached at 12 o\'clock.',
    },
    {
      question: 'How tight should a watch strap be?',
      answer: 'A watch strap should be snug but comfortable. You should be able to slide one finger under the strap without forcing it. A strap that is too tight can restrict blood flow, while a loose strap will allow the watch head to rotate and could cause wear on the spring bars.',
    },
    {
      question: 'Can I use a NATO strap on any watch?',
      answer: 'Yes, as long as the watch has standard spring bars with sufficient clearance between the watch case and the bar. NATO straps slip underneath the case, so very tight case-to-bar clearances might require curved spring bars or thinner strap materials.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Measure your wrist',
      text: 'Use a flexible tape measure to find your wrist circumference in millimeters or inches.',
    },
    {
      name: 'Measure watch lug-to-lug height',
      text: 'Measure the height of the watch case from the tip of the top lug to the tip of the bottom lug.',
    },
    {
      name: 'Select your preferred fit',
      text: 'Choose whether you prefer a tight, regular, or loose fit around your wrist.',
    },
    {
      name: 'Calculate recommendations',
      text: 'Review the standard retail sizing, the custom bespoke long/short side sizes, and the ideal NATO length.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do you measure watch strap length?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Watch strap length is typically expressed in two numbers like 120/80 mm. The first number is the length of the long side (tail), and the second is the short side (buckle).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where should the watch buckle sit on the wrist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ideally, the buckle or clasp should sit centered on the underside of your wrist. If it is offset, the watch head will slide off-center. Adjusting the ratio of the long-side to short-side strap lengths helps achieve perfect centering.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does the watch\'s lug-to-lug height affect the strap length I need?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A watch case is a rigid part of the overall strap loop. A larger watch with a longer lug-to-lug distance (e.g., 50mm) reduces the amount of strap length needed to wrap around your wrist compared to a smaller watch (e.g., 40mm lug-to-lug) on the same wrist.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Which side does the long end of a watch strap go on?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Traditionally, the long side of the strap (containing the sizing holes) is attached to the 6 o\'clock position of the watch case, pointing towards you. The short side (with the buckle) is attached at 12 o\'clock.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How tight should a watch strap be?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A watch strap should be snug but comfortable. You should be able to slide one finger under the strap without forcing it. A strap that is too tight can restrict blood flow, while a loose strap will allow the watch head to rotate and could cause wear on the spring bars.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I use a NATO strap on any watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, as long as the watch has standard spring bars with sufficient clearance between the watch case and the bar. NATO straps slip underneath the case, so very tight case-to-bar clearances might require curved spring bars or thinner strap materials.'
          }
        }
      ]
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Strap Length Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Watch Strap Length Calculator',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Measure your wrist',
          'text': 'Use a flexible tape measure to find your wrist circumference in millimeters or inches.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Measure watch lug-to-lug height',
          'text': 'Measure the height of the watch case from the tip of the top lug to the tip of the bottom lug.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Select your preferred fit',
          'text': 'Choose whether you prefer a tight, regular, or loose fit around your wrist.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Calculate recommendations',
          'text': 'Review the standard retail sizing, the custom bespoke long/short side sizes, and the ideal NATO length.'
        }
      ]
    } as any
  ]
};
