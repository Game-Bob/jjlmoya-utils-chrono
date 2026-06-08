import type { ToolLocaleContent } from '../../../types';
import type { TourbillonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'What is a tourbillon?',
    answer: 'A tourbillon is a rotating cage that contains the escapement (balance wheel, pallet fork, and escape wheel) of a mechanical watch. It rotates continuously - typically once per minute - to average out positional errors caused by gravity, improving accuracy.',
  },
  {
    question: 'What is the difference between a classic and a flying tourbillon?',
    answer: 'A classic tourbillon is supported by both a top and bottom bridge, while a flying tourbillon is cantilevered from below with no visible upper support. Flying tourbillons offer an unobstructed view of the rotating escapement and are considered more aesthetically demanding to construct.',
  },
  {
    question: 'Does a tourbillon actually improve accuracy?',
    answer: 'In modern wristwatches, the accuracy benefit is minimal since positional errors are already well-compensated. However, in pocket watches (where the tourbillon was invented in 1801 by Breguet), the constant rotation eliminated rate differences between vertical positions. Today, tourbillons are primarily a demonstration of high horological artistry.',
  },
];

const howTo = [
  {
    name: 'Change tourbillon type',
    text: 'Switch between Classic and Flying tourbillon to see the structural difference. The flying tourbillon has no upper bridge, revealing the full cage.',
  },
  {
    name: 'Adjust beat rate',
    text: 'Try different beat rates (18k, 28.8k, 36k VPH) to see how the balance wheel speed and escape wheel rotation change.',
  },
  {
    name: 'Control speed',
    text: 'Use speed controls to slow down and observe the intricate dance of the escapement, or speed up to see the full cage rotation cycle.',
  },
];

const title = 'Tourbillon: Art of the Rotating Escapement';

export const content: ToolLocaleContent<TourbillonUI> = {
  slug: 'tourbillon-visualizer',
  title,
  description: 'Experience the mesmerizing art of the tourbillon - a rotating cage housing the escapement. Watch the balance wheel oscillate, the hairspring breathe, and the cage rotate in an elegant mechanical ballet.',
  ui: {
    title: 'Tourbillon Visualizer',
    typeLabel: 'Type',
    typeClassic: 'Classic',
    typeFlying: 'Flying',
    speedLabel: 'Speed',
    speedNormal: '1x',
    speedSlow: '0.5x',
    speedPaused: 'Paused',
    beatRateLabel: 'Beat Rate',
    rate18k: '18k',
    rate28k: '28.8k',
    rate36k: '36k',
    cageRotationLabel: 'Cage',
    showLabelsLabel: 'Labels',
    step1: 'Switch between Classic and Flying tourbillon to compare their architecture.',
    step2: 'Adjust the beat rate to see how it affects the escapement rhythm.',
    step3: 'Use speed controls to observe the precise mechanical dance at any pace.',
    tipTitle: 'Tip',
    tipContent: 'Breguet invented the tourbillon in 1801. The word "tourbillon" means "whirlwind" in French, describing the rotating cage\'s appearance when in motion.',
    balanceLabel: 'Balance',
    escapeLabel: 'Escape',
    palletLabel: 'Pallet',
    cageLabel: 'Cage',
  },
  seo: [
    { type: 'title', text: 'Tourbillon Visualizer: Animated Watch Escapement Art', level: 2 },
    { type: 'paragraph', html: 'The <strong>tourbillon</strong> is one of the most captivating complications in haute horlogerie. This interactive visualizer brings the rotating escapement to life with a detailed animated rendering of the balance wheel, hairspring, pallet fork, escape wheel, and the iconic rotating cage. Explore the mechanical poetry of Breguet\'s masterpiece.' },
    { type: 'title', text: 'How a Tourbillon Works', level: 3 },
    { type: 'paragraph', html: 'A tourbillon houses the entire escapement - <strong>balance wheel, hairspring, pallet fork, and escape wheel</strong> - inside a rotating cage. The cage typically completes one rotation per minute, continuously changing the position of the escapement relative to gravity. This averages out positional timing errors, a concept that was revolutionary when Abraham-Louis Breguet patented it in 1801. The <strong>balance wheel</strong> oscillates at the watch\'s beat rate (typically 4 Hz / 28,800 vph), while the <strong>escape wheel</strong> advances one tooth per beat, creating the characteristic ticking motion.' },
    { type: 'title', text: 'Classic vs Flying Tourbillon', level: 3 },
    {
      type: 'table', headers: ['Feature', 'Classic Tourbillon', 'Flying Tourbillon'], rows: [
        ['Upper support', 'Visible bridge / cock', 'None (cantilevered)'],
        ['Visibility', 'Partial (bridge in view)', 'Full (unobstructed)'],
        ['Difficulty', 'High', 'Extremely high'],
        ['Invented', '1801 (Breguet)', '1920s (Alfred Helwig)'],
        ['Common in', 'Traditional brands', 'Modern independents'],
      ]
    },
    { type: 'title', text: 'Beat Rate Comparison', level: 3 },
    {
      type: 'table', headers: ['Rate (vph)', 'Frequency', 'Escape Wheel RPM', 'Beat / Second', 'Typical Use'], rows: [
        ['18,000', '2.5 Hz', '20 RPM', '5', 'Vintage pocket watches'],
        ['28,800', '4 Hz', '32 RPM', '8', 'Modern standard (ETA, Rolex)'],
        ['36,000', '5 Hz', '40 RPM', '10', 'High-frequency (Zenith)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Mechanical Art in Motion', icon: 'mdi:rotate-orbit', badge: 'HOROLOGY', html: 'This visualizer is an artistic interpretation of a tourbillon escapement. The cage rotation, balance oscillation, hairspring breathing, pallet fork rocking, and escape wheel stepping are synchronized according to real mechanical relationships. Use the controls to explore this masterpiece of micromechanical engineering.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
