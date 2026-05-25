import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'moon-phase-visualizer',
  title: 'Moon Phase Visualizer–nar Calendar & Watch Complication Tool',
  description: 'Visualize the current moon phase, illumination, age, and upcoming full and new moons. Perfect for setting your moon phase watch complication.',
  ui: {
    title: 'Moon Phase Visualizer',
    selectDate: 'Select Date',
    today: 'Today',
    moonPhase: 'Moon Phase',
    illumination: 'Illumination',
    moonAge: 'Moon Age',
    daysUntilFull: 'Days until Full Moon',
    daysUntilNew: 'Days until New Moon',
    newMoon: 'New Moon',
    waxingCrescent: 'Waxing Crescent',
    firstQuarter: 'First Quarter',
    waxingGibbous: 'Waxing Gibbous',
    fullMoon: 'Full Moon',
    waningGibbous: 'Waning Gibbous',
    lastQuarter: 'Last Quarter',
    waningCrescent: 'Waning Crescent',
    nextFullMoon: 'Next Full Moon',
    nextNewMoon: 'Next New Moon',
    tipTitle: 'Tip',
    tipContent: 'To set a moon phase watch, first find today\'s moon phase using this tool, then advance the crown until the moon disc matches. Most mechanical moon phases are accurate to within one day every 2 years.',
    days: 'Cycle Progress',
    day: 'day',
  },
  seo: [
    { type: 'title', text: 'Moon Phase Visualizer-nar Phase Tool & Watch Setting Guide', level: 2 },
    { type: 'paragraph', html: 'The Moon Phase Visualizer shows the <strong>current lunar phase</strong> with a realistic rendering of the moon. See <strong>illumination percentage, moon age, days until next full moon, and next new moon</strong>. Designed for watch enthusiasts who need to set their moon phase complication accurately-also works as a general lunar calendar for any date past or future.' },
    { type: 'title', text: 'Moon Phase Glossary', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'New Moon', definition: 'The moon is between Earth and the sun. The illuminated side faces away from us. 0% illumination. The start of the lunar cycle.' },
        { term: 'Waxing Crescent', definition: '1–49% illumination. A thin crescent appears on the right side (Northern Hemisphere). The moon is moving toward first quarter.' },
        { term: 'First Quarter', definition: '50% illumination. Half of the visible surface is lit. The moon has completed one quarter of its cycle.' },
        { term: 'Waxing Gibbous', definition: '51–99% illumination. More than half is lit. The moon is building toward full.' },
        { term: 'Full Moon', definition: '100% illumination. The entire visible surface is lit. The peak of the lunar cycle.' },
        { term: 'Waning Gibbous', definition: '99–51% illumination. The lit area begins to shrink from the right side.' },
        { term: 'Last Quarter', definition: '50% illumination. The left half is lit. Three quarters of the cycle complete.' },
        { term: 'Waning Crescent', definition: '49–1% illumination. A thin crescent on the left before the cycle resets to new moon.' },
      ]
    },
    { type: 'title', text: 'How to Set a Moon Phase Watch', level: 3 },
    {
      type: 'list', items: [
        'Use this tool to find today\'s exact moon phase. Note the phase name and visual appearance.',
        'On your watch, pull the crown to the moon phase setting position (usually position 2 or 3).',
        'Advance the crown until the moon disc shows the same phase as the tool. The full moon indicator is typically at the centre-top of the disc.',
        'Avoid setting the moon phase between 9 PM and 3 AM when the date-change mechanism is engaged and can be damaged.',
        'Most mechanical moon phase watches use a 59-tooth gear that approximates two lunar cycles (59 days). This means they gain about one day of error every 2 years.',
        'For high precision, some watches (Patek Philippe, A. Lange & Söhne) use gears that are accurate to within one day every 100+ years.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Never Set During Date Change', icon: 'mdi:alert', html: 'Do not set the moon phase (or date) between approximately <strong>9 PM and 3 AM</strong>. During this window the watch\'s date-change mechanism is physically engaged with the date wheel. Forcing the crown can strip gear teeth. If you must set during this period, first advance the hands past 3 AM, then set the moon phase.' },
    { type: 'title', text: 'Mechanical vs High-Accuracy Moon Phase', level: 3 },
    {
      type: 'table', headers: ['Type', 'Tooth Gear', 'Error Accumulation', 'One-Day Drift After', 'Example Watches'], rows: [
        ['Standard / Entry', '59 teeth', '~1 day every 2 years', '~2.5 years', 'Seiko, Orient, Hamilton, Tissot'],
        ['Intermediate', '135 teeth', '~1 day every 10 years', '~10 years', 'Omega, Tudor, IWC, Breitling'],
        ['High Accuracy', 'Gear train', '~1 day per 100+ years', '100+ years', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Reading the Moon Disc', html: 'On most moon phase watches, the moon disc shows <strong>two moons</strong> opposite each other. Each full moon aligns with the centre-top aperture. After one full cycle (29.5 days), the second moon takes its place. This is why a 59-tooth gear works: it completes one full rotation in 59 days-exactly two lunar cycles.' },
    {
      type: 'summary', title: 'Quick Reference', items: [
        'The lunar (synodic) cycle is exactly 29.53058867 days. The tool uses this value for maximum accuracy.',
        'Eight phases repeat in an eternal cycle: new → waxing crescent → first quarter → waxing gibbous → full → waning gibbous → last quarter → waning crescent.',
        'To set a moon phase watch: find today\'s phase here, then match it on your watch\'s disc.',
        'Never force the crown between 9 PM and 3 AM. Advance the time past 3 AM first.',
        'Standard 59-tooth moon phases drift by about one day every 2.5 years. Correction requires advancing the disc by one click.',
      ]
    },
  ],
  faq: [
    {
      question: 'How do I set a moon phase on my watch?',
      answer: 'Find today\'s moon phase using this tool. Advance the crown (usually position 2) until the moon disc shows the matching phase. Avoid setting between 9 PM and 3 AM when the date mechanism is engaged.',
    },
    {
      question: 'How accurate are mechanical moon phase watches?',
      answer: 'Most use a 59-tooth gear that is accurate to about one day every 2 years. High-end watches like Patek Philippe and A. Lange & Söhne achieve accuracy within one day every 100+ years.',
    },
    {
      question: 'What is the difference between a synodic and sidereal month?',
      answer: 'The sidereal month (27.3 days) is the moon\'s orbit relative to the stars. The synodic month (29.53 days) is the time between identical phases and is what moon phase watches track.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select a date',
      text: 'Use the date picker to choose any date, past or future, and see the moon phase.',
    },
    {
      name: 'Read the phase data',
      text: 'The cards show phase name, illumination percentage, moon age, and cycle progress.',
    },
    {
      name: 'Find upcoming events',
      text: 'The next full moon and new moon dates are displayed automatically.',
    },
    {
      name: 'Set your watch',
      text: 'Use the displayed phase to set your moon phase watch complication accurately.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I set a moon phase on my watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Find today\'s moon phase using this tool. Advance the crown until the moon disc shows the matching phase. Avoid setting between 9 PM and 3 AM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How accurate are mechanical moon phase watches?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most use a 59-tooth gear that is accurate to about one day every 2 years. High-end watches achieve accuracy within one day every 100+ years.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between a synodic and sidereal month?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The sidereal month (27.3 days) is the moon\'s orbit relative to the stars. The synodic month (29.53 days) is the time between identical phases and is what moon phase watches track.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Moon Phase Visualizer',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to visualize moon phases',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select a date',
          'text': 'Use the date picker to choose any date and see the moon phase.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the phase data',
          'text': 'The cards show phase name, illumination, moon age, and cycle progress.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Set your watch',
          'text': 'Use the displayed phase to set your moon phase watch complication.',
        },
      ],
    },
  ],
};
