import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Which is the most scratch resistant watch crystal?',
    answer: 'Sapphire crystal is the most scratch resistant with a hardness of 9 on the Mohs scale - only diamond is harder. It is virtually impossible to scratch in everyday use. Mineral glass (5) is moderately scratch resistant, while hesalite/acrylic (2-3) scratches very easily but can be polished out in minutes with Polywatch.',
  },
  {
    question: 'Can a scratched hesalite crystal be repaired?',
    answer: 'Yes, hesalite (acrylic) is the only watch crystal that can be easily repaired. Minor scratches can be buffed out using a product like Polywatch in just a few minutes. This makes hesalite popular for vintage watches and the Omega Speedmaster. Mineral and sapphire crystals cannot be polished and must be replaced if scratched or shattered.',
  },
  {
    question: 'Is sapphire crystal shatter proof?',
    answer: 'No, sapphire crystal is not shatter proof. While it is extremely scratch resistant, it is more brittle than hesalite and can shatter on sharp impacts. Hesalite is actually the most impact-resistant crystal type - it will deform rather than shatter. Mineral glass sits in between, offering moderate impact resistance.',
  },
  {
    question: 'Which watch crystal is best for a dive watch?',
    answer: 'Sapphire is the standard for dive watches due to its scratch resistance and durability. Most professional dive watches use sapphire crystal because it can withstand the pressures of deep diving without scratching. Hesalite is not recommended for diving as it scratches easily and can deform under pressure, potentially compromising water resistance.',
  },
];

const howTo = [
  {
    name: 'Select a crystal type',
    text: 'Click any crystal from the list on the left - its stats card will appear on the right with ratings for hardness, clarity, impact resistance, scratch resistance, and durability.',
  },
  {
    name: 'Compare two crystals side by side',
    text: 'Drag one crystal from the list and drop it onto another to start a side-by-side comparison. Both stat cards will appear so you can compare their ratings directly.',
  },
  {
    name: 'Close the comparison view',
    text: 'Click the "Close comparison" button below the side-by-side view to return to a single crystal display. You can also click any crystal on the left to switch the main view.',
  },
];

const title = 'Watch Crystal Material Comparison: Hesalite vs Mineral Glass vs Sapphire';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'watch-crystal-material-comparison',
  title,
  description: 'Compare hesalite, mineral glass, and sapphire watch crystals side by side with interactive stat cards. See hardness, clarity, impact resistance, scratch resistance, and durability ratings to choose the best crystal for your watch.',
  ui: {
    title: 'Crystal Material Comparison',
    subTitle: 'Interactive Crystal Stats',
    hardness: 'Hardness',
    clarity: 'Clarity',
    impactResistance: 'Impact',
    scratchResistance: 'Scratch',
    durability: 'Durability',
    priceRange: 'Price',
    step1: 'Click a crystal on the left to view its stats card.',
    step2: 'Drag one crystal onto another to compare them side by side.',
    step3: 'Click close to return to single crystal view.',
    tipTitle: 'Tip',
    tipContent: 'Overall rating is an average of all five stats. Higher overall does not mean it is the best for every use case - hesalite has the highest impact resistance while sapphire is best for scratch resistance.',
    dragHint: 'Drag',
    dragSub: 'crystals to compare',
  },
  seo: [
    { type: 'title', text: 'Hesalite vs Mineral vs Sapphire: Watch Crystal Comparison Guide', level: 2 },
    { type: 'paragraph', html: 'Choosing the right <strong>watch crystal</strong> is one of the most important decisions when buying or restoring a watch. This guide compares <strong>hesalite (acrylic), mineral glass, and sapphire crystal</strong> across hardness, clarity, impact resistance, scratch resistance, durability, and price.' },
    { type: 'title', text: 'Hesalite Crystal (Acrylic / Plexiglass)', level: 3 },
    { type: 'paragraph', html: 'Hesalite is the original watch crystal material, used since the 1930s. It is soft (2-3 Mohs) and scratches easily, but these scratches can be quickly polished out. It offers the best impact resistance - it flexes rather than shatters. Hesalite can be formed into extreme domes, giving vintage watches their characteristic look. Famous example: Omega Speedmaster Professional - the watch worn on the Moon.' },
    { type: 'title', text: 'Mineral Glass (Tempered)', level: 3 },
    { type: 'paragraph', html: 'Mineral glass is made from silicon dioxide and then tempered (heat-treated) to increase its strength. At 5 on the Mohs scale, it is harder than hesalite but still susceptible to scratches. It offers moderate impact resistance but can shatter on hard impacts. Commonly found in mid-range watches from Seiko, Citizen, and Orient.' },
    { type: 'title', text: 'Sapphire Crystal (Synthetic Corundum)', level: 3 },
    { type: 'paragraph', html: 'Sapphire crystal is made from lab-grown corundum - the same mineral as natural sapphire. At 9 on the Mohs scale, it is virtually scratch-proof and offers the best optical clarity. However, it is more brittle and can shatter on sharp impacts. It is also the most expensive option and difficult to form into high domes. The standard for luxury watches.' },
    { type: 'title', text: 'Crystal Comparison Table', level: 3 },
    {
      type: 'table', headers: ['Property', 'Hesalite', 'Mineral Glass', 'Sapphire'], rows: [
        ['Mohs Hardness', '2-3/10', '5/10', '9/10'],
        ['Clarity', '4/10', '7/10', '10/10'],
        ['Impact Resistance', '5/10 (Best)', '3/10', '2/10'],
        ['Scratch Resistance', '1/10', '5/10', '10/10'],
        ['Repairable', 'Yes (polish)', 'No (replace)', 'No (replace)'],
        ['Dome Possible', 'Yes, extreme', 'Limited', 'Limited'],
        ['Price Range', '$5 - $30', '$10 - $50', '$30 - $200+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Crystal Selection Guide', icon: 'mdi:diamond-stone', badge: 'REFERENCE', html: 'For a <strong>tool watch or daily beater</strong>, choose sapphire for scratch resistance. For a <strong>vintage restoration or budget build</strong>, hesalite offers authentic looks and repairability. <strong>Mineral glass</strong> is the budget-friendly middle ground found in most entry-level automatics.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
