import type { ToolLocaleContent } from '../../../types';
import type { GearTrainExplorerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'What is a watch gear train?',
    answer: 'A gear train is a series of interlocking gears that transmit power from the mainspring barrel to the escapement. Each gear pair provides a specific reduction ratio, slowing down the rapid release of mainspring energy into controlled, timed impulses.',
  },
  {
    question: 'Why do different movements have different gear ratios?',
    answer: 'Gear ratios are determined by the number of teeth on each wheel and pinion. Movements with different beat rates (e.g., 28,800 vph vs 36,000 vph) have different escape wheel speeds and gear configurations to maintain accurate timekeeping while accommodating the balance wheel frequency.',
  },
  {
    question: 'What is the difference between a wheel and a pinion?',
    answer: 'In horology, a "wheel" is the larger gear with many teeth that drives the next component. A "pinion" is the smaller gear (usually 6-12 teeth) that is driven. Together, a wheel and pinion form a gear pair that changes rotational speed and torque.',
  },
];

const howTo = [
  {
    name: 'Select a movement',
    text: 'Choose between standard (28,800 vph), high-frequency (36,000 vph El Primero), or vintage (18,000 vph) movements. Each has unique gear ratios and beat rates.',
  },
  {
    name: 'Observe the gear train',
    text: 'Watch the animated gears spin at proportional speeds. The barrel turns slowly while the escape wheel spins rapidly. Hover over any gear or data card for detailed information.',
  },
  {
    name: 'Adjust the speed',
    text: 'Use the speed controls to slow down, speed up, or pause the animation. This helps visualize how each gear contributes to the power transmission chain.',
  },
];

const title = 'Watch Gear Train Explorer: Interactive Horology Diagram';

export const content: ToolLocaleContent<GearTrainExplorerUI> = {
  slug: 'gear-train-explorer',
  title,
  description: 'Explore the mechanical heart of a watch with an animated gear train visualization. See the mainspring barrel, center wheel, third wheel, fourth wheel, escape wheel, pallet fork, and balance wheel in motion.',
  ui: {
    title: 'Watch Gear Train Explorer',
    barrelLabel: 'Barrel',
    centerWheelLabel: 'Center Wheel',
    thirdWheelLabel: 'Third Wheel',
    fourthWheelLabel: 'Fourth Wheel',
    escapeWheelLabel: 'Escape Wheel',
    palletForkLabel: 'Pallet Fork',
    balanceWheelLabel: 'Balance Wheel',
    rpmLabel: 'RPM',
    teethLabel: 'teeth',
    gearRatioLabel: 'Ratio',
    powerFlowLabel: 'Power Flow',
    movementLabel: 'Movement',
    speedLabel: 'Speed',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Paused',
    mov2824: 'ETA 2824-2',
    movElPrimero: 'El Primero',
    movVintage: 'Vintage 18k',
    step1: 'Select a movement caliber to see its unique gear ratios and beat rate.',
    step2: 'Hover over any gear or data card to highlight its position in the power flow.',
    step3: 'Adjust the animation speed to study how each gear transmits power through the train.',
    tipTitle: 'Tip',
    tipContent: 'The gear train reduces the mainspring\'s rapid energy release into a controlled oscillation. A typical barrel rotates once every 7-8 hours, while the escape wheel spins at 32 RPM (at 28,800 vph) - a reduction of over 15,000:1.',
  },
  seo: [
    { type: 'title', text: 'Interactive Watch Gear Train Explorer', level: 2 },
    { type: 'paragraph', html: 'The <strong>gear train</strong> is the mechanical backbone of every mechanical watch. This interactive tool visualizes how power flows from the mainspring barrel through the center wheel, third wheel, fourth wheel, and escape wheel to the pallet fork and balance wheel. See each gear rotate at its proportional speed and understand how gear ratios determine timekeeping.' },
    { type: 'title', text: 'How a Watch Gear Train Works', level: 3 },
    { type: 'paragraph', html: 'A watch gear train consists of a series of <strong>wheels</strong> (large gears) and <strong>pinions</strong> (small gears) that transmit power while reducing speed. The <strong>barrel</strong> houses the mainspring and rotates slowly, driving the <strong>center wheel</strong> which turns once per hour (for the minute hand). The <strong>third wheel</strong> and <strong>fourth wheel</strong> (seconds wheel) further step up the rotation speed. Finally, the <strong>escape wheel</strong> releases power in controlled ticks to the <strong>pallet fork</strong>, which alternately locks and unlocks the escape wheel, sending impulses to the <strong>balance wheel</strong>. The balance wheel oscillates at a precise frequency - typically 4 Hz (28,800 vibrations per hour) - regulating the watch\'s rate.' },
    { type: 'title', text: 'Gear Ratios and Power Transmission', level: 3 },
    {
      type: 'table', headers: ['Component', 'Typical Teeth', 'RPM (28,800 vph)', 'Ratio from Previous'], rows: [
        ['Barrel', '72', '0.002 (1 rev / 8 h)', '-'],
        ['Center Wheel', '60', '0.0167 (1 rev / h)', '~7.2:1'],
        ['Third Wheel', '50', '0.125 (1 rev / 8 min)', '~5:1'],
        ['Fourth Wheel', '60', '1 (1 rev / min)', '6:1'],
        ['Escape Wheel', '15', '32', '~1.875:1'],
      ]
    },
    { type: 'title', text: 'Movement Comparisons', level: 3 },
    {
      type: 'table', headers: ['Movement', 'Beat Rate', 'Balance Frequency', 'Escape Wheel RPM', 'Typical Accuracy'], rows: [
        ['Vintage (18,000 vph)', '18,000 bph', '2.5 Hz', '20 RPM', '±15-30 s/d'],
        ['Standard (28,800 vph)', '28,800 bph', '4 Hz', '32 RPM', '±5-15 s/d'],
        ['High-Frequency (36,000 vph)', '36,000 bph', '5 Hz', '40 RPM', '±3-8 s/d'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interactive Learning Tool', icon: 'mdi:cog-clockwise', badge: 'HOROLOGY', html: 'This tool uses approximate gear ratios representative of common Swiss lever escapement movements. Actual ratios vary by caliber. Use the movement presets to compare how different beat rates affect the gear train dynamics.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
