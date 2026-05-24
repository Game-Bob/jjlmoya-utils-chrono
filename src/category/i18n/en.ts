import type { CategoryLocaleContent } from '../../types';

const slug = 'horology';
const title = 'Horology Tools & Accuracy Calculators';
const description = 'Monitor and calculate the accuracy, precision, and daily deviation rate of mechanical or quartz timepieces using online horology utilities.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Timepiece Regulation and Precision Tracking', level: 2 },
    { type: 'paragraph', html: 'To maintain the longevity and accuracy of mechanical timepieces, tracking their daily rate deviation is essential. This suite provides watch collectors and horologists with professional-grade analysis tools to monitor watch rate stability without expensive timegrapher equipment.' },
    { type: 'title', text: 'Daily Rate Deviation & Cumulative Drift', level: 2 },
    { type: 'paragraph', html: 'Using an atomic time source as reference, you can record the difference in seconds between your watch and reference time to calculate real-world drift. Additionally, you can project how a specific daily deviation rate will compound into seconds, minutes, and hours over weeks, months, or years.' },
    { type: 'stats', items: [
      { label: 'Precision', value: 'Microsecond', icon: 'mdi:clock-fast' },
      { label: 'Calculators', value: 'Projective', icon: 'mdi:calculator-variant' },
      { label: 'Standards', value: 'COSC/ISO', icon: 'mdi:certificate' },
      { label: 'Data Privacy', value: 'Local Storage', icon: 'mdi:shield-check' },
    ] },
  ],
};
