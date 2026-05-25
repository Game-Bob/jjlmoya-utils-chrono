import type { ToolLocaleContent } from '../../../types';
import type { LumeColorSimulatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<LumeColorSimulatorUI> = {
  slug: 'lume-color-simulator',
  title: 'Lume Color Simulator: Watch Lume Visualizer',
  description: 'Visualize different lume colors in real time. Compare C1, C3, BGW9, LumiNova, and more across ambient brightness levels.',
  ui: {
    title: 'Lume Color Simulator',
    lumeType: 'Lume Type',
    brightness: 'Ambient Brightness',
    dark: 'Dark',
    light: 'Light',
    color: 'Color',
    hex: 'HEX',
    rgb: 'RGB',
    type: 'Type',
    description: 'Description',
    c1Name: 'C1',
    c1Desc: 'Green (classic)',
    c3Name: 'C3',
    c3Desc: 'Super Green',
    bgw9Name: 'BGW9',
    bgw9Desc: 'Ice Blue',
    lumiNovaName: 'LumiNova',
    lumiNovaDesc: 'Warm White',
    vintageName: 'Vintage',
    vintageDesc: 'Aged Radium',
    orangeName: 'Orange',
    orangeDesc: 'Diver Orange',
    blueName: 'Blue',
    blueDesc: 'Deep Blue',
    greenName: 'Green',
    greenDesc: 'Neon Green',
    tipTitle: 'Tip',
    tipContent: 'Lume brightness depends on the pigment quality and how much light it absorbed. BGW9 glows blue-white and is the brightest, while vintage lume has a warm, dim glow.',
  },
  seo: [
    { type: 'title', text: 'Watch Lume Color Simulator-Real-Time Glow Visualizer', level: 2 },
    { type: 'paragraph', html: 'Lume is one of the most personal choices in watch collecting. Do you prefer the classic green glow of <strong>C1 Super-LumiNova</strong> or the icy blue of <strong>BGW9</strong>? This simulator shows you how each lume type appears across brightness levels from full daylight to pitch dark, with exact <strong>HEX and RGB values</strong> for each shade.' },
    { type: 'title', text: 'Super-LumiNova Types Compared', level: 3 },
    {
      type: 'table', headers: ['Type', 'Day Color', 'Glow Color', 'Brightness', 'Best For'], rows: [
        ['C1', 'Light green', 'Green', 'Medium', 'Dress watches, original aesthetic'],
        ['C3', 'Yellow-green', 'Bright green', 'Highest', 'Dive watches, tool watches'],
        ['BGW9', 'Off-white', 'Ice blue', 'High', 'Modern sport watches, clean look'],
        ['LumiNova', 'Warm beige', 'Warm white', 'Low-medium', 'Budget-friendly lume'],
        ['Vintage', 'Cream / tan', 'Warm dim', 'Low', 'Heritage-style watches'],
        ['Orange', 'Orange', 'Orange', 'Medium', 'Diver accents, retro divers'],
        ['Blue', 'Light blue', 'Blue', 'Medium', 'Designer dials, fashion watches'],
        ['Green', 'Bright green', 'Green', 'High', 'Military-style watches'],
      ]
    },
    { type: 'title', text: 'C1 vs C3 vs BGW9-Which Should You Choose?', level: 3 },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'C1 Classic Green', icon: 'mdi:lightbulb-on', description: 'The original Super-LumiNova formulation. Glows green with medium brightness. A safe, classic choice that works with any watch style.', points: ['Medium brightness, 4-6h visibility', 'Green glow, warm tone', 'Most affordable formulation', 'Common in entry-level watches'], highlight: false },
        { title: 'C3 Super Green', icon: 'mdi:lightning-bolt', description: 'The brightest green lume available. Used in professional dive watches where legibility underwater is critical. Maximum glow from minimum charge.', points: ['Highest brightness, 8-12h visibility', 'Yellow-green in daylight', 'Preferred by Seiko, Citizen, Omega', 'Best for low-light readability'], highlight: true },
      ]
    },
    {
      type: 'comparative', columns: 2, items: [
        { title: 'BGW9 Ice Blue', icon: 'mdi:snowflake', description: 'Glows blue-white instead of green. Slightly less bright than C3 but preferred for its clean, modern aesthetic. Popular in luxury sports watches.', points: ['High brightness, 6-10h visibility', 'Blue-white glow, neutral tone', 'Clean, modern look in daylight', 'Used by Tudor, Grand Seiko, Omega'], highlight: true },
        { title: 'Vintage Radium Style', icon: 'mdi:fire', description: 'Warm beige/cream tone that mimics 1960s radium lume. Intentionally dimmer for aesthetic authenticity. The glow is warm, subtle, and ages beautifully.', points: ['Low brightness, 2-4h visibility', 'Warm cream to dim amber', 'Aged appearance without radioactivity', 'Popular in heritage reissues'], highlight: false },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Brightness Is Not Everything', icon: 'mdi:palette', html: 'The brightest lume (C3) is not always the best choice. <strong>BGW9</strong> trades a small brightness difference for a more neutral, modern look that many collectors prefer. <strong>Vintage lume</strong> prioritises period-correct aesthetics over performance. Choose based on what matters most to you: <strong>maximum glow, modern aesthetics, or heritage authenticity.</strong>' },
    { type: 'title', text: 'How Lume Works: The Science Behind the Glow', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Super-LumiNova', definition: 'A strontium aluminate-based photoluminescent pigment. It absorbs UV and visible light and re-emits it as a glow. Non-radioactive and safe. Originally developed by Nemoto & Co. in 1993.' },
        { term: 'Charge Time', definition: 'The duration of light exposure needed to saturate the lume pigment. A full charge takes 10-30 minutes under direct sunlight or UV. Longer charge = longer and brighter glow.' },
        { term: 'Glow Duration', definition: 'How long the lume remains visible after charging. Quality Super-LumiNova glows visibly for 6-12 hours. The brightest period is the first 30 minutes after charging.' },
        { term: 'Pigment Grade', definition: 'The quality of the strontium aluminate crystals. Higher-grade pigments (C3, BGW9) use larger, more uniform crystals for brighter and longer glow. Lower grades (LumiNova) use smaller crystals and are dimmer.' },
      ]
    },
    {
      type: 'summary', title: 'Lume Selection Quick Guide', items: [
        'For maximum legibility in darkness: choose C3 (brightest green) or BGW9 (brightest blue-white).',
        'For a modern luxury look: BGW9 is the current favorite among high-end watch brands.',
        'For vintage/heritage builds: use Vintage or Orange for period-correct warmth.',
        'C1 is the all-rounder: good brightness, classic green, affordable.',
        'The lume color in daylight differs significantly from the glow color-use the simulator to compare both.',
      ]
    },
  ],
  faq: [
    {
      question: 'Which lume is brightest?',
      answer: 'C3 Super-LumiNova is the brightest green formulation. BGW9 is the brightest blue-white. Both are significantly brighter than C1 or standard LumiNova.',
    },
    {
      question: 'What is BGW9 lume?',
      answer: 'BGW9 is a Super-LumiNova variant that glows blue-white instead of green. It is slightly less bright than C3 but preferred by many for its clean, modern appearance.',
    },
    {
      question: 'Does vintage lume glow?',
      answer: 'Modern vintage-style lume (beige/warm) glows but is intentionally dimmer to mimic aged radium. The tradeoff is aesthetic authenticity over maximum brightness.',
    },
    {
      question: 'How long does lume last?',
      answer: 'After a full charge under bright light, quality Super-LumiNova glows visibly for 6-12 hours. The brightest period is the first 30 minutes.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select a lume type',
      text: 'Choose from C1, C3, BGW9, LumiNova, Vintage, Orange, Blue, or Green presets.',
    },
    {
      name: 'Adjust brightness',
      text: 'Slide the ambient brightness control from day (left) to night (right) to see how the lume behaves.',
    },
    {
      name: 'Read the specs',
      text: 'The info card shows the exact HEX and RGB values of the current color.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Which lume is brightest?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'C3 Super-LumiNova is the brightest green. BGW9 is the brightest blue-white.' },
        },
        {
          '@type': 'Question',
          'name': 'What is BGW9 lume?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'BGW9 is a Super-LumiNova variant that glows blue-white instead of green.' },
        },
        {
          '@type': 'Question',
          'name': 'Does vintage lume glow?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Modern vintage-style lume glows but is intentionally dimmer to mimic aged radium.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Lume Color Simulator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to simulate lume colors',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select a lume type',
          'text': 'Choose from C1, C3, BGW9, LumiNova, or other presets.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Adjust brightness',
          'text': 'Slide brightness from day to night to see the lume behavior.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the specs',
          'text': 'The info card shows HEX and RGB values of the current color.',
        },
      ],
    },
  ],
};
