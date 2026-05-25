import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'tachymeter-calculator',
  title: 'Tachymeter Calculator: Speed from Elapsed Time',
  description: 'Calculate speed from elapsed time using the tachymeter formula. Works with any chronograph watch with a tachymeter bezel scale.',
  ui: {
    title: 'Tachymeter Calculator',
    timeLabel: 'Elapsed Time (seconds)',
    timeHelp: 'Time measured over 1 km or 1 mile',
    speedResult: 'Speed',
    bezelReading: 'Bezel Reading',
    presetLabel: 'Preset Scenario',
    selectPreset: 'Select a scenario',
    customPreset: 'Custom',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Start the chronograph when the object passes the starting point.',
    exampleStep2: 'Stop it after 1 km. The tachymeter scale shows the speed.',
    tipTitle: 'Tip',
    tipContent: 'At 36 seconds the bezel reads 100. Faster times (shorter elapsed) point to higher speeds on the tachymeter scale.',
  },
  seo: [
    { type: 'title', text: 'Tachymeter Calculator-Convert Elapsed Time to Speed', level: 2 },
    { type: 'paragraph', html: 'A tachymeter is a scale on a watch bezel or dial that converts elapsed time into speed. It is typically used with a chronograph: start the timer when the object passes a reference point, stop it after 1 km (or 1 mile), and read the speed from the scale. This calculator does the math for you.' },
    { type: 'title', text: 'How a Tachymeter Works', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formula', definition: 'Speed = 3,600 ÷ elapsed time in seconds. The constant 3,600 represents seconds per hour.' },
        { term: 'The Scale', definition: 'Tachymeter bezels are marked from 60 (at the 3 o\'clock position) up to 400 or 500 (near 12 o\'clock). Faster speeds align with shorter elapsed times.' },
        { term: 'Base Distance', definition: 'Standard tachymeters are calibrated for 1 km or 1 mile. For other distances, divide the reading accordingly.' },
      ]
    },
    { type: 'title', text: 'Common Tachymeter Measurements', level: 3 },
    {
      type: 'table', headers: ['Elapsed Time', 'Speed', 'Scenario'], rows: [
        ['10 s', '360 km/h', 'Bullet train / race car'],
        ['12 s', '300 km/h', 'Private jet takeoff'],
        ['20 s', '180 km/h', 'Sports car on highway'],
        ['30 s', '120 km/h', 'Car on motorway'],
        ['36 s', '100 km/h', 'Car on highway (standard reference)'],
        ['45 s', '80 km/h', 'Car on urban road'],
        ['60 s', '60 km/h', 'City driving'],
        ['90 s', '40 km/h', 'Cycling'],
        ['120 s', '30 km/h', 'Jogging'],
        ['240 s', '15 km/h', 'Running'],
        ['480 s', '7.5 km/h', 'Walking'],
      ]
    },
    { type: 'title', text: 'Beyond the Standard Scale', level: 3 },
    { type: 'paragraph', html: 'If your tachymeter bezel only goes up to 400 but your elapsed time is under 9 seconds, you can still use it. Simply use a longer base distance. For example, if you travel 2 km in 18 seconds, halve the bezel reading. Conversely, for slow speeds (over 60 seconds), use a shorter base distance (e.g., 0.5 km) and multiply by 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Tachymeter Compatibility', icon: 'mdi:information', badge: 'NOTE', html: 'Not all chronographs have a tachymeter bezel. Some watches place the tachymeter scale on the dial rehaut or on the outer chapter ring. Digital watches may include a tachymeter function in the chronograph mode. The formula always works regardless of the physical scale.' },
  ],
  faq: [
    {
      question: 'How do I use a tachymeter bezel on my watch?',
      answer: 'Start the chronograph at a reference point (e.g., a highway marker). Stop it after exactly 1 km (or 1 mile). The seconds hand points to the speed on the bezel scale. For example, if it took 36 seconds to travel 1 km, the hand points to 100, meaning 100 km/h.',
    },
    {
      question: 'What if my elapsed time is faster than the bezel can read?',
      answer: 'Some tachymeters only go up to 400 or 500. If you complete 1 km in under 9 seconds, use a longer base distance. Travel 2 km and divide the bezel reading by 2, or travel 3 km and divide by 3.',
    },
    {
      question: 'What if my elapsed time is slower than the bezel can read?',
      answer: 'Use a shorter base distance. For example, if it takes 90 seconds to travel 1 km, travel 0.5 km instead. Read the bezel and multiply by 2. The standard tachymeter scale covers times from about 7 to 60 seconds.',
    },
    {
      question: 'Can I use a tachymeter for things other than speed?',
      answer: 'Yes. The tachymeter measures any rate per hour. For example, measure how long it takes to complete a task and the scale shows how many you can do per hour. In manufacturing, a 30-second task means 120 units per hour.',
    },
    {
      question: 'Do all tachymeters use the same scale?',
      answer: 'Most use the standard logarithmic scale based on the formula 3,600 ÷ seconds. However, some vintage watches or brands may have variations. The physical scale may also be limited by the watch\'s minute track and bezel markings.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select a scenario or enter a custom time',
      text: 'Choose from presets like Car, Cycling, or Running, or select Custom to enter any elapsed time in seconds.',
    },
    {
      name: 'Read the speed result',
      text: 'The calculator shows the speed in km/h and the equivalent tachymeter bezel reading.',
    },
    {
      name: 'Apply to your chronograph',
      text: 'Use the elapsed time to find the matching speed on your watch\'s tachymeter bezel.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I use a tachymeter bezel on my watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Start the chronograph at a reference point. Stop it after exactly 1 km. The seconds hand points to the speed on the bezel scale. For example, 36 seconds = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What if my elapsed time is faster than the bezel can read?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use a longer base distance. Travel 2 km and divide the bezel reading by 2, or travel 3 km and divide by 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What if my elapsed time is slower than the bezel can read?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use a shorter base distance. Travel 0.5 km instead. Read the bezel and multiply by 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use a tachymeter for things other than speed?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. The tachymeter measures any rate per hour. Measure how long it takes to complete a task and the scale shows how many you can do per hour.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do all tachymeters use the same scale?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most use the standard logarithmic scale based on the formula 3,600 ÷ seconds. Some vintage watches may have variations.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Tachymeter Calculator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to calculate speed using a tachymeter',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select a scenario or custom time',
          'text': 'Choose from presets like Car, Cycling, or Running, or select Custom to enter any elapsed time in seconds.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the speed result',
          'text': 'The calculator shows the speed in km/h and the equivalent tachymeter bezel reading.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Apply to your chronograph',
          'text': 'Use the elapsed time to find the matching speed on your watch\'s tachymeter bezel.',
        },
      ],
    },
  ],
};
