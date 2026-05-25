import type { ToolLocaleContent } from '../../../types';
import type { DemagnetizingTimerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<DemagnetizingTimerUI> = {
  slug: 'demagnetizing-timer',
  title: 'Watch Demagnetizing Timer & Guide',
  description: 'A precise countdown timer with audio cues for DIY watch demagnetization. Get the exact press duration needed for your demagnetizing coil.',
  ui: {
    title: 'Timer Settings',
    durationLabel: 'Pulse Duration',
    duration1s: '1 Second',
    duration2s: '2 Seconds',
    duration3s: '3 Seconds',
    customLabel: 'Custom',
    startButton: 'Start',
    stopButton: 'Stop',
    resetButton: 'Reset',
    pressPhase: 'Press the demagnetizer button now!',
    holdPhase: 'Hold the button...',
    releasePhase: 'Release now!',
    completePhase: 'Done! Move the watch away.',
    ready: 'Ready',
    seconds: 's',
    instructions: 'How to Demagnetize',
    step1: 'Place the watch on the demagnetizer platform.',
    step2: 'Press Start and hold the demagnetizer button for the set duration.',
    step3: 'Release the button and slowly move the watch away.',
    step4: 'Repeat 2-3 times if needed, rotating the watch each time.',
    tipTitle: 'Tip',
    tipContent: 'Keep the watch at least 1 meter away from the demagnetizer when powered on to avoid re-magnetization.',
  },
  seo: [
    { type: 'title', text: 'Watch Demagnetizing Timer-ecise Pulse Timing for DIY Demagnetization', level: 2 },
    { type: 'paragraph', html: 'Demagnetizing a watch requires exact button-press timing. Most DIY demagnetizers work by generating a decaying alternating magnetic field, and the ideal pulse lasts between <strong>1 and 3 seconds</strong>. Hold it too short and the field won\'t neutralize the magnetization; hold it too long and you risk saturating the movement.' },
    { type: 'title', text: 'Why Timing Matters for Watch Demagnetization', level: 3 },
    { type: 'paragraph', html: 'When you press the button on a demagnetizer, an alternating magnetic field is created inside the coil. The field oscillates at mains frequency (50/60 Hz) and decays when you release. The goal is to subject the watch to this decaying field for <strong>just long enough</strong> to randomize the magnetic domains in the hairspring and other steel components. A 1-to-3-second pulse is the sweet spot for most movements.' },
    { type: 'title', text: 'How a Demagnetizer Works', level: 3 },
    { type: 'paragraph', html: 'A demagnetizer is essentially a coil of wire that produces a strong alternating magnetic field when energized. Placing a magnetized watch in this field causes its internal magnetic domains to flip rapidly. When the field is removed abruptly (by releasing the button), the domains settle in a randomized pattern, effectively canceling out the net magnetization.' },
    { type: 'title', text: 'Signs Your Watch Needs Demagnetizing', level: 3 },
    { type: 'paragraph', html: 'Common symptoms of a magnetized watch include: gaining several minutes per day, inconsistent timekeeping across positions, an audible ticking speed increase, and in extreme cases, the watch stopping entirely. If your automatic watch suddenly starts running fast, magnetization is often the culprit and demagnetization is a simple fix.' },
  ],
  faq: [
    {
      question: 'How long should I press the demagnetizer button?',
      answer: '1 to 3 seconds is the recommended pulse duration. Start with 1 second and increase if needed. Overly long pulses can cause the coil to overheat and may not improve results.',
    },
    {
      question: 'Can I demagnetize a watch more than once?',
      answer: 'Yes. Repeat the process 2 to 3 times, rotating the watch 90 degrees each time. This ensures all axes are exposed to the alternating field. There is no risk of over-demagnetizing.',
    },
    {
      question: 'Does demagnetization work on quartz watches?',
      answer: 'Quartz watches are rarely affected by magnetization since they contain few ferromagnetic components. However, the stepping motor in some quartz movements can become magnetized, causing erratic hand movement. Demagnetizing is safe for quartz watches.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Set Duration',
      text: 'Choose 1, 2, or 3 seconds depending on the severity of magnetization.',
    },
    {
      name: 'Position the Watch',
      text: 'Place the watch flat on the demagnetizer platform, centered over the coil.',
    },
    {
      name: 'Press and Hold',
      text: 'Press the Start button simultaneously with the demagnetizer button and hold for the set duration.',
    },
    {
      name: 'Release and Move Away',
      text: 'Release the button and slowly move the watch at least 1 meter away before turning off the demagnetizer.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How long should I press the demagnetizer button?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 to 3 seconds is the recommended pulse duration. Start with 1 second and increase if needed. Overly long pulses can cause the coil to overheat and may not improve results.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I demagnetize a watch more than once?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Repeat the process 2 to 3 times, rotating the watch 90 degrees each time. This ensures all axes are exposed to the alternating field. There is no risk of over-demagnetizing.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does demagnetization work on quartz watches?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Quartz watches are rarely affected by magnetization since they contain few ferromagnetic components. However, the stepping motor in some quartz movements can become magnetized, causing erratic hand movement. Demagnetizing is safe for quartz watches.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Demagnetizing Timer & Guide',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Demagnetize a Watch',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Set Duration',
          'text': 'Choose 1, 2, or 3 seconds depending on the severity of magnetization.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Position the Watch',
          'text': 'Place the watch flat on the demagnetizer platform, centered over the coil.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Press and Hold',
          'text': 'Press the Start button simultaneously with the demagnetizer button and hold for the set duration.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Release and Move Away',
          'text': 'Release the button and slowly move the watch at least 1 meter away before turning off the demagnetizer.',
        },
      ],
    },
  ],
};
