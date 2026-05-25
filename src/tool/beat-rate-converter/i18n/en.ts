import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'beat-rate-converter',
  title: 'Watch Beat Rate Converter: H to Hz & s/d Calculator',
  description: 'Convert vibrations per hour (VPH) to Hertz, ticks per second, and calculate the daily rate impact of a single lost tick. Works with ETA, Sellita, Miyota, Seiko, Rolex, Omega, and Zenith calibers.',
  ui: {
    title: 'Beat Rate Converter',
    vphLabel: 'Movement',
    selectMovement: 'Select movement',
    customMovement: 'Custom',
    customVph: 'Vibrations per hour',
    resultsTitle: 'Calculations',
    frequency: 'Frequency',
    ticksPerSec: 'Ticks per second',
    lostTickImpact: 'If it loses 1 tick per hour',
    lostTickExplainer: 'One missed tick per hour means ~3 seconds lost per day at 28,800 vph. Lower beat rates amplify the impact.',
    step1: 'Select your movement or enter a custom VPH.',
    step2: 'Read the Hz frequency, ticks per second, and the impact of a lost tick.',
    tipTitle: 'Tip',
    tipContent: 'Higher beat rates (36,000 vph) give smoother hand sweep and better precision, but also more wear on the escapement.',
  },
  seo: [
    { type: 'title', text: 'Watch Beat Rate Converter-H to Hz & Seconds per Day', level: 2 },
    { type: 'paragraph', html: 'Every mechanical watch beats at a specific rate-e number of vibrations its balance wheel makes per hour. That number determines how smooth the seconds hand sweeps and how precise the watch can be. This converter translates <strong>VPH to Hz and ticks per second</strong>, and shows you the real-world impact of a single lost tick.' },
    { type: 'title', text: 'What Is a Beat Rate?', level: 3 },
    { type: 'paragraph', html: 'The beat rate, measured in vibrations per hour (vph), is the frequency at which a watch\'s balance wheel oscillates. A common rate is 28,800 vph-at\'s 4 Hz, or 8 ticks per second. Higher beat rates like 36,000 vph (5 Hz) produce a smoother sweeping motion and can theoretically improve accuracy by reducing the effect of positional errors.' },
    { type: 'title', text: 'Why a Lost Tick Matters', level: 3 },
    { type: 'paragraph', html: 'If a watch\'s escapement fails to deliver one tick due to friction, magnetism, or wear, that lost tick translates directly into lost time. At 28,800 vph, a single missed tick per hour adds up to about <strong>3 seconds per day</strong>. At 18,000 vph, the same error costs nearly 5 seconds per day. This tool helps you understand the math behind regulation.' },
    { type: 'title', text: 'Common Beat Rates', level: 3 },
    { type: 'paragraph', html: 'Vintage pocket watches and early automatics often run at 18,000 vph (2.5 Hz). Many Seiko and Miyota calibers use 21,600 vph (3 Hz). The modern standard is 28,800 vph (4 Hz), used by ETA, Sellita, Rolex, and others. High-beat movements like the Zenith El Primero run at 36,000 vph (5 Hz) for greater precision.' },
  ],
  faq: [
    {
      question: 'How do you convert VPH to Hz?',
      answer: 'Divide the VPH by 7,200. A watch beating at 28,800 vph runs at 4 Hz (28,800 ÷ 7,200 = 4). The division by 7,200 accounts for the fact that one complete oscillation contains two vibrations, and there are 3,600 seconds in an hour.',
    },
    {
      question: 'What does a higher beat rate mean for accuracy?',
      answer: 'Higher beat rates generally allow for greater theoretical precision because the balance wheel is less affected by positional disturbances. However, they also create more friction and wear on the pallet stones and escape wheel, requiring better lubrication and more frequent servicing.',
    },
    {
      question: 'How does a lost tick affect daily accuracy?',
      answer: 'One missed tick per hour translates to 24 lost ticks per day. The time lost depends on your beat rate: divide 86,400 by your VPH. At 28,800 vph, that\'s 3 seconds per day. At 18,000 vph, it\'s 4.8 seconds per day.',
    },
    {
      question: 'Can a watch recover from a lost tick?',
      answer: 'No. Once a tick is missed, the time is permanently lost. The watch doesn\'t "catch up." This is why escapement health-ean pallet stones, proper lubrication, and correct beat error-d-ctly impacts daily rate.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select your caliber',
      text: 'Pick your movement from the dropdown. Each preset includes the correct VPH for that caliber.',
    },
    {
      name: 'Read the results',
      text: 'The card shows Hz frequency, ticks per second, and the daily impact of a single lost tick.',
    },
    {
      name: 'Try a custom VPH',
      text: 'Select "Custom" to enter any VPH value for vintage or unusual movements.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do you convert VPH to Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divide the VPH by 7,200. A watch beating at 28,800 vph runs at 4 Hz. The division by 7,200 accounts for one oscillation containing two vibrations and 3,600 seconds per hour.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What does a higher beat rate mean for accuracy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Higher beat rates allow for greater theoretical precision because the balance wheel is less affected by positional disturbances. However, they also create more friction and wear.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How does a lost tick affect daily accuracy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'One missed tick per hour translates to 24 lost ticks per day. Divide 86,400 by your VPH to find the seconds per day lost.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can a watch recover from a lost tick?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Once a tick is missed, the time is permanently lost. The watch does not catch up.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Beat Rate Converter',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to convert VPH to Hz and calculate lost tick impact',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select your caliber',
          'text': 'Pick your movement from the dropdown. Each preset includes the correct VPH for that caliber.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the results',
          'text': 'The card shows Hz frequency, ticks per second, and the daily impact of a single lost tick.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Try a custom VPH',
          'text': 'Select Custom to enter any VPH value for vintage or unusual movements.',
        },
      ],
    },
  ],
};
