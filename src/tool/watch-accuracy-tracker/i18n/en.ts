import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'watch-accuracy-tracker',
  title: 'Watch Accuracy Tracker & Logger',
  description: 'Log and calculate the daily rate deviation of your mechanical or quartz watches to analyze precision and consistency.',
  ui: {
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Bibliography & Resources',
    title: 'Watch Accuracy Tracker',
    selectWatch: 'Select or Add a Watch',
    watchPlaceholder: 'e.g. Seiko SKX007',
    addWatch: 'Add Watch',
    deleteWatch: 'Delete Watch',
    addLog: 'Log New Measurement',
    offsetLabel: 'Offset (seconds)',
    offsetPlaceholder: '0',
    dateLabel: 'Measurement Time',
    saveLog: 'Save Log',
    avgRate: 'Average Daily Rate',
    consistency: 'Precision Status',
    totalLogs: 'Total Logs',
    historyTitle: 'Measurement History',
    noLogs: 'No logs recorded for this watch yet. Add at least two logs to calculate accuracy.',
    tableDate: 'Date & Time',
    tableOffset: 'Offset',
    tableRate: 'Daily Rate',
    tableActions: 'Actions',
    deleteLog: 'Delete',
    coscExcellent: 'COSC Chronometer (+4/-6 s/d)',
    excellent: 'Excellent (0 to +5 s/d)',
    good: 'Good (+/- 10 s/d)',
    needsService: 'Needs Service (> +/- 20 s/d)',
    secondsPerDay: 's/d',
    seconds: 'seconds',
    referenceTime: 'Reference Time',
    watchTime: 'Watch Time',
    useCurrentTime: 'Use Current Time',
    calculatedRate: 'Calculated Rate',
    driftPredictorTitle: 'Drift Predictor & Projection',
    driftPredictorDesc: 'Project accumulated rate deviation over time and compare with standards.',
    dailyRateInput: 'Daily Rate Deviation (seconds/day)',
    dailyRatePlaceholder: 'e.g. +4.5 or -3',
    driftHeading: 'Projections',
    period: 'Period',
    accumulatedDrift: 'Projected Drift',
    day: '1 Day',
    week: '1 Week',
    month: '1 Month',
    months3: '3 Months',
    months6: '6 Months',
    year: '1 Year',
    years5: '5 Years',
    watchStandardTitle: 'Standards Certification',
    trackerHeading: 'Live Rate Tracker',
    driftCalculatorTab: 'Drift Predictor',
    trackerTab: 'Rate Logger',
    stdRolex: 'Rolex Superlative',
    stdCosc: 'COSC Chronometer',
    stdMetas: 'METAS Master',
    stdStdMech: 'Standard Mechanical',
    stdQuartz: 'Standard Quartz',
    stdHaq: 'High-Precision Quartz',
    presetRolex: 'Rolex (+2 s/d)',
    presetCosc: 'COSC (+4 s/d)',
    presetStdMech: 'Standard (+15 s/d)',
    presetQuartz: 'Quartz (+0.5 s/d)',
    statusPass: 'Pass',
    statusFail: 'Fail',
    toleranceRolex: '±2 s/d',
    toleranceCosc: '-4 / +6 s/d',
    toleranceMetas: '0 / +5 s/d',
    toleranceStdMech: '±15 s/d',
    toleranceQuartz: '±0.5 s/d',
    toleranceHaq: '±10 s/year',
  },
  seo: [
    { type: 'title', text: 'The Ultimate Guide to Watch Accuracy and Daily Rate Regulation', level: 2 },
    { type: 'paragraph', html: 'Mechanical watches are marvels of micro-engineering, but unlike quartz movements, they are subject to various environmental and physical forces that affect their timekeeping precision. Understanding and monitoring your watch\'s daily rate deviation is key to maintaining its health and deciding when it requires professional servicing.' },
    { type: 'title', text: 'Why Mechanical Watches Deviate: Key Factors', level: 2 },
    { type: 'paragraph', html: 'Several elements influence how fast or slow a watch runs on a daily basis. Gravity affects the balance wheel differently depending on the watch\'s position. Temperature changes can cause the hairspring to expand or contract, altering the rate of oscillation. Additionally, the mainspring\'s state of wind (power reserve) affects the amplitude, where a fully wound watch tends to be more stable than one near the end of its power reserve.' },
    { type: 'title', text: 'Understanding Cumulative Drift: How Small Deviations Compound', level: 2 },
    { type: 'paragraph', html: 'A daily deviation of just +5 seconds per day sounds negligible, but time is cumulative. Over a single week, that accumulates to 35 seconds. In a month, it grows to 2.5 minutes, and in a year, your watch will be over 30 minutes off. This compound drift highlights why precise tracking is essential for collectors who rotate timepieces and want their watches synchronized to atomic reference time.' },
    { type: 'title', text: 'How to Track and Calculate Watch Accuracy Manually', level: 2 },
    { type: 'paragraph', html: 'To measure your watch\'s rate deviation without a professional timegrapher, you can use the Rate Logger feature. First, synchronize your watch or note its offset relative to an atomic time reference (like UTC or NTP clocks). After 24 to 48 hours, record the offset again. Divide the change in offset by the elapsed days to find your watch\'s average daily rate deviation.' },
    { type: 'title', text: 'Using Positional Variance for Self-Regulation', level: 2 },
    { type: 'paragraph', html: 'Many mechanical watches can be slightly regulated by how they are placed when not worn. For example, leaving a watch dial up overnight might cause it to gain a few seconds, while resting it crown down might cause it to lose seconds. By tracking these positions and using our calculator, you can determine how to rest your watch overnight to naturally offset its daily deviation.' },
  ],
  faq: [
    {
      question: 'What is a normal daily rate deviation for a mechanical watch?',
      answer: 'Standard mechanical watches usually deviate by +/- 10 to 20 seconds per day. Certified COSC chronometers are regulated to perform within -4 to +6 seconds per day, while high-grade quartz movements can achieve less than +/- 0.5 seconds deviation per day.',
    },
    {
      question: 'Why does my watch accuracy change depending on position?',
      answer: 'Gravity pulls on the balance wheel and hairspring differently when the watch is face up, face down, crown up, or crown down. This positional variation causes slight differences in amplitude and rate.',
    },
  ],
  bibliography: [
    {
      name: 'Contrôle Officiel Suisse des Chronomètres (COSC) Standards',
      url: 'https://www.cosc.swiss/en',
    },
    {
      name: 'Understanding Mechanical Watch Regulation and Accuracy',
      url: 'https://en.wikipedia.org/wiki/Mechanical_watch',
    },
  ],
  howTo: [
    {
      name: 'Record Initial State',
      text: 'Synchronize your watch with a reliable atomic clock or write down the current offset in seconds.',
    },
    {
      name: 'Wait and Track',
      text: 'Wear your watch normally or keep it in a single position for at least 12 to 24 hours.',
    },
    {
      name: 'Record Second State',
      text: 'Log the watch offset again. The system will automatically calculate the rate deviation in seconds per day.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Accuracy Tracker & Logger',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is a normal daily rate deviation for a mechanical watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Standard mechanical watches usually deviate by +/- 10 to 20 seconds per day. Certified COSC chronometers are regulated to perform within -4 to +6 seconds per day, while high-grade quartz movements can achieve less than +/- 0.5 seconds deviation per day.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Why does my watch accuracy change depending on position?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Gravity pulls on the balance wheel and hairspring differently when the watch is face up, face down, crown up, or crown down. This positional variation causes slight differences in amplitude and rate.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Measure Watch Accuracy Manually',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Record Initial State',
          'text': 'Synchronize your watch with a reliable atomic clock or write down the current offset in seconds.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Wait and Track',
          'text': 'Wear your watch normally or keep it in a single position for at least 12 to 24 hours.'
        },
        {
          '@type': 'HowToStep',
          'name': 'Record Second State',
          'text': 'Log the watch offset again. The system will automatically calculate the rate deviation in seconds per day.'
        }
      ]
    }
  ],
};
