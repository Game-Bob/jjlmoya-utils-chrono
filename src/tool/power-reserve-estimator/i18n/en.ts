import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'power-reserve-estimator',
  title: 'Watch Power Reserve Estimator',
  description: 'Estimate how much power reserve your watch has left based on crown turns and hours worn. Works with popular ETA, Sellita, Miyota, Seiko, and Rolex calibers.',
  ui: {
    title: 'Power Reserve Estimator',
    movementLabel: 'Movement',
    selectMovement: 'Select movement',
    customMovement: 'Custom',
    turnsLabel: 'Crown Turns',
    hoursLabel: 'Wear Time',
    turnsInput: 'Turns',
    hoursInput: 'Hours',
    activityLabel: 'Activity',
    activityLow: 'Desk',
    activityMedium: 'Walk',
    activityHigh: 'Active',
    calculate: 'Calculate',
    reserveRemaining: 'Reserve Remaining',
    hoursRemaining: 'Remaining',
    chargePercent: 'Charge',
    resultLabel: 'Estimated Reserve',
    stopTimeLabel: 'Runs until',
    powerReserveHours: 'Reserve (h)',
    fullWindTurns: 'Turns to full',
    step1: 'Select your movement from the dropdown.',
    step2: 'Enter crown turns and hours worn.',
    step3: 'Press Calculate to see your reserve.',
    tipTitle: 'Tip',
    tipContent: 'Manual-wind movements only charge when you turn the crown. Automatic movements also charge while worn.',
  },
  seo: [
    { type: 'title', text: 'Watch Power Reserve Estimator-How Much Reserve Does Your Movement Have Left?', level: 2 },
    { type: 'paragraph', html: 'Wondering how much power is left in your mechanical watch? Whether you wound the crown this morning or wore it all day, this estimator tells you the approximate charge level and remaining hours for popular calibers like <strong>ETA, Sellita, Miyota, Seiko, and Rolex</strong>.' },
    { type: 'title', text: 'How Power Reserve Works in a Mechanical Watch', level: 3 },
    { type: 'paragraph', html: 'The power reserve is the amount of energy stored in the mainspring. When you wind the crown, you tighten the mainspring, storing potential energy. An automatic rotor also winds the mainspring while you wear the watch. The energy then drains at a steady rate-typically 2-3% per hour-until the watch stops.' },
    { type: 'title', text: 'Crown Winding vs. Rotor Charging', level: 3 },
    { type: 'paragraph', html: 'Manual winding via the crown is the most efficient way to charge a watch-each full rotation adds a predictable amount of energy, typically around 2.5% of the total reserve. Wearing the watch charges more slowly and depends on your activity level: an office worker might charge 4-6% per hour, while someone active might charge 8-10%. This estimator uses a conservative average.' },
    { type: 'title', text: 'Why Power Reserve Estimation Matters', level: 3 },
    { type: 'paragraph', html: 'Knowing your watch\'s charge level helps avoid unexpected stops. A watch that runs down overnight may need more winding before bed, or may not be getting enough wear time. Use this tool to understand your charging habits and keep your automatic running.' },
  ],
  faq: [
    {
      question: 'How much does one crown turn charge the watch?',
      answer: 'It depends on the movement. Most automatic calibers reach full wind in 30-40 turns, so each turn adds about 2.5-3.3% of the total reserve. Hand-wound movements like the Unitas 6498 also need about 35 turns for a full wind.',
    },
    {
      question: 'Does wearing the watch charge it as much as winding?',
      answer: 'Wearing charges more slowly and variably. At a desk job, you might charge 4-6% per hour through the rotor. During active movement (walking, sports), it can reach 8-10% per hour. Winding by hand is faster and more predictable.',
    },
    {
      question: 'How much reserve does a watch lose per hour?',
      answer: 'The drain is constant: divide 100 by the power reserve in hours. A 38-hour movement loses about 2.6% per hour, a 42-hour loses 2.4%, and a 70-hour loses about 1.4% per hour.',
    },
    {
      question: 'Can I overwind my watch?',
      answer: 'Modern automatic movements have a slipping clutch that prevents overwinding. Once the mainspring is fully wound, additional turns simply slip. Hand-wound movements also have a stop mechanism, though forcing past the stop can damage the mainspring.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select your movement',
      text: 'Choose your watch caliber from the dropdown. If not listed, select Custom and enter its power reserve and turns-to-full.',
    },
    {
      name: 'Enter your input',
      text: 'Type how many crown turns you gave it, or how many hours you wore it today. You can fill both for a combined estimate.',
    },
    {
      name: 'Calculate',
      text: 'Press the Calculate button. The result shows the estimated charge percentage and remaining hours of power reserve.',
    },
    {
      name: 'Adjust your habits',
      text: 'Use the results to decide if you need more winding before bed or more wear time during the day to keep the watch running.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How much does one crown turn charge the watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It depends on the movement. Most automatic calibers reach full wind in 30-40 turns, so each turn adds about 2.5-3.3% of the total reserve. Hand-wound movements like the Unitas 6498 also need about 35 turns for a full wind.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does wearing the watch charge it as much as winding?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Wearing charges more slowly and variably. At a desk job, you might charge 4-6% per hour through the rotor. During active movement it can reach 8-10% per hour. Winding by hand is faster and more predictable.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How much reserve does a watch lose per hour?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The drain is constant: divide 100 by the power reserve in hours. A 38-hour movement loses about 2.6% per hour, a 42-hour loses 2.4%, and a 70-hour loses about 1.4% per hour.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I overwind my watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modern automatic movements have a slipping clutch that prevents overwinding. Once the mainspring is fully wound, additional turns simply slip.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Power Reserve Estimator',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to estimate your watch power reserve',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select your movement',
          'text': 'Choose your watch caliber from the dropdown. If not listed, select Custom and enter its power reserve and turns-to-full.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter your input',
          'text': 'Type how many crown turns you gave it, or how many hours you wore it today. You can fill both for a combined estimate.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Calculate',
          'text': 'Press the Calculate button. The result shows the estimated charge percentage and remaining hours of power reserve.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Adjust your habits',
          'text': 'Use the results to decide if you need more winding before bed or more wear time during the day to keep the watch running.',
        },
      ],
    },
  ],
};
