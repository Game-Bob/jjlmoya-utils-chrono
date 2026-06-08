import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'quartz-battery-health',
  title: 'Quartz Battery Health Checker',
  description: 'Calculate the theoretical battery life of a quartz movement by entering the cell capacity (mAh) and the caliber power consumption (µA). Optionally set the installation date to estimate the replacement date.',
  ui: {
    title: 'Quartz Battery Health Checker',
    batteryLabel: 'Battery Cell',
    selectBattery: 'Select battery',
    customBattery: 'Custom',
    capacityLabel: 'Capacity',
    capacityUnit: 'mAh',
    consumptionLabel: 'Consumption',
    consumptionUnit: 'µA',
    installDateLabel: 'Installed on',
    installDateHint: 'Optional',
    monthLabel: 'Month',
    yearLabel: 'Year',
    calculate: 'Calculate',
    resultLabel: 'Estimated Life',
    theoreticalLife: 'Theoretical life',
    yearsLabel: 'years',
    monthsLabel: 'months',
    daysLabel: 'days',
    changeDateLabel: 'Replace by',
    noDateHint: 'Enter install date to see replacement date',
    healthLabel: 'Status',
    healthGood: 'Good',
    healthModerate: 'Moderate',
    healthCritical: 'Critical',
    step1: 'Choose a common battery or select Custom to enter capacity.',
    step2: 'Enter the caliber power consumption in microamperes (µA).',
    step3: 'Optionally add the installation date, then press Calculate.',
    tipTitle: 'Tip',
    tipContent: 'Always use the consumption value from the official caliber datasheet. Real-world life can be 10-20 % shorter due to temperature and load variations.',
  },
  seo: [
    { type: 'title', text: 'Quartz Battery Health Checker - How long will your watch battery last?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Typical 3-hand draw' },
        { value: '18-55 mAh', label: 'Common cell capacity' },
        { value: '2.5-4.5 yr', label: 'Usual battery life' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Wondering when your quartz watch will stop ticking? The <strong>Quartz Battery Health Checker</strong> helps you estimate the remaining life of any quartz movement battery by comparing the cell capacity (measured in mAh) against the movement average power consumption (measured in microamperes, µA). Whether you own a Swiss ETA, a Japanese Miyota, a Seiko, a Ronda, or a Chinese DG movement, this tool calculates the theoretical lifespan in years, months, and days  -  and can even predict the exact replacement date if you enter the installation month and year.' },
    { type: 'title', text: 'How quartz battery life is calculated  -  the math behind the estimate', level: 3 },
    { type: 'paragraph', html: 'Battery life follows a simple electrical formula: <strong>Life (hours) = (Cell capacity in mAh × 1000) ÷ Current consumption in µA</strong>. Dividing that result by 24 gives you days, and by 365.25 gives you years. For example, a standard <strong>SR920SW (371) cell with 40 mAh</strong> powering a movement that draws <strong>1.5 µA</strong> will theoretically last around <strong>3 years</strong>. Reduce the consumption to 1.0 µA and the same cell stretches past 4.5 years. Increase it to 2.5 µA and the battery life drops to under 2 years. Every fraction of a microampere matters when you are planning your service intervals.' },
    { type: 'title', text: 'Most common quartz watch battery types and their capacities', level: 3 },
    {
      type: 'table',
      headers: ['Cell Reference', 'Common Code', 'Capacity', 'Typical Use'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Thin dress watches'],
        ['SR626SW', '377', '27 mAh', 'Mid-size quartz models'],
        ['SR920SW', '371', '40 mAh', 'Chronographs & multifunction'],
        ['SR936SW', '394', '55 mAh', 'Large analog-digital hybrids'],
        ['CR2025', ' - ', '165 mAh', 'High-drain LED modules'],
      ],
    },
    { type: 'tip', title: 'Match the original specification', html: 'Selecting the wrong cell type can reduce battery life by up to <strong>40 %</strong>. Always cross-reference the original battery reference number before installing a replacement. The numerical code tells you the dimensions  -  for example, <strong>SR936SW</strong> is 9.5 mm in diameter and 3.6 mm thick.' },
    { type: 'title', text: 'Why you should always use official caliber consumption values', level: 3 },
    { type: 'paragraph', html: 'Movement manufacturers like <strong>ETA, Ronda, Miyota, Seiko, and ISA</strong> publish official technical datasheets for every caliber they produce. These datasheets list the <strong>average current consumption</strong> under controlled temperature (usually 22 °C) and with a standard hand torque load. Using a guessed value of 1.0 µA when your movement actually draws 2.5 µA can overestimate battery life by more than 100 %. Always download the official PDF from the manufacturer website or check the caliber reference on specialised databases to obtain the real consumption figure.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Battery leakage can destroy your watch movement',
      html: 'An exhausted silver-oxide battery can <strong>leak potassium hydroxide</strong>, which corrodes the contact springs, the circuit board traces, and even the stepper motor coil. If the tool estimates less than <strong>6 months of remaining life</strong>, schedule a battery change during your next routine check. Pay special attention to <strong>vintage quartz watches from the 1970s and 1980s</strong>  -  their original batteries are far more prone to leakage after decades inside the case.',
    },
    { type: 'title', text: 'Factors that reduce real-world battery life vs the theoretical estimate', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperature extremes</strong>  -  a watch left on a sunny dashboard can see 30 % higher current draw',
        '<strong>End-of-life detection circuits</strong>  -  the two-second tick indicator consumes extra power once activated',
        '<strong>Chronograph or alarm usage</strong>  -  momentary current spikes that add up over time',
        '<strong>Mechanical friction</strong>  -  aged or dirty gear trains increase the torque the stepper motor needs',
        '<strong>Magnetic fields</strong>  -  exposure increases motor torque requirements, draining the cell faster',
      ],
    },
    { type: 'paragraph', html: 'In practice you can expect <strong>10 to 20 % shorter life</strong> than the theoretical calculation. For high-accuracy thermocompensated quartz movements the consumption varies less, but standard quartz is notably sensitive to these environmental factors.' },
    { type: 'title', text: 'How to find the right battery replacement for your quartz watch', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Silver-Oxide)', definition: 'Cells stamped with SR (e.g. SR920SW) provide a stable 1.55 V output throughout their life, keeping the quartz oscillator accurate. This is the standard for quality quartz watches.' },
        { term: 'LR (Alkaline)', definition: 'Cells stamped with LR (e.g. LR41) have a gradually declining voltage, which can cause the watch to run slow or stop prematurely. Not recommended as a replacement for SR cells.' },
        { term: 'CR (Lithium)', definition: 'Cells stamped with CR (e.g. CR2025) deliver 3.0 V and are used in high-drain modules with LED backlights, large LCDs, or multiple complications.' },
        { term: 'Numerical Code', definition: 'The four digits encode physical size: the first two digits are the diameter in millimetres and the last two are the thickness in tenths of a millimetre. SR936SW = Ø9.5 mm × 3.6 mm.' },
      ],
    },
    { type: 'title', text: 'Standard quartz vs solar vs kinetic  -  how the technology changes the equation', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standard Quartz',
          description: 'Uses a replaceable silver-oxide or lithium primary cell. Battery life depends purely on capacity vs consumption. This is what this calculator is designed for.',
          highlight: true,
          points: [
            'Replaceable primary cell',
            'Life = capacity ÷ consumption',
            'Predictable replacement schedule',
            'Affordable battery changes',
          ],
        },
        {
          title: 'Solar & Kinetic',
          description: 'Solar watches use photovoltaic cells to recharge a lithium-ion accumulator. Kinetic watches use a rotor-driven micro-generator to charge a capacitor.',
          points: [
            'Rechargeable energy storage',
            'Life depends on charge cycles',
            'Capacitor degradation over time',
            'Not compatible with this calculator',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Manufacturer claims of <strong>"10-year battery life"</strong> are usually based on very low consumption movements (around 0.5 to 0.8 µA) paired with large-capacity cells (165 mAh CR2025 or larger). In a standard analog quartz watch with a small silver-oxide cell like the <strong>SR626SW (27 mAh)</strong> and a typical 1.5 µA movement, the real life is closer to <strong>2.5  -  3 years</strong>. Always verify with this calculator rather than trusting marketing labels.' },
    {
      type: 'tip',
      title: 'Replace proactively, not reactively',
      html: 'When you see the second hand jumping in <strong>2-second or 4-second intervals</strong>, the movement has entered power-saving mode due to low voltage. The battery has approximately <strong>2 to 4 weeks</strong> of remaining life. Replace it immediately to avoid leakage damage.',
    },
    {
      type: 'summary',
      title: 'Key takeaways for quartz watch battery health',
      items: [
        'Use the official caliber consumption value from the manufacturer datasheet  -  a guessed value can overestimate life by over 100 %',
        'Match the original cell type exactly: SR, LR, and CR chemistries are not interchangeable',
        'Replace the battery when the tool shows less than 6 months of remaining life to prevent leakage',
        'Real-world battery life is typically 10-20 % shorter than the theoretical ideal due to temperature, friction, and usage',
        'This calculator is designed for standard quartz movements with replaceable primary cells  -  not for solar or kinetic watches',
      ],
    },
  ],
  faq: [
    {
      question: 'How accurate is the theoretical battery life estimate?',
      answer: 'The calculation is an electrical ideal based on capacity divided by consumption. In real-world conditions you can expect 10 to 20 % shorter life due to temperature variation, end-of-life detection circuits, mechanical drag from aged lubricants, and the extra load of chronograph or alarm functions. The estimate is a reliable upper bound, not a exact prediction.',
    },
    {
      question: 'Where do I find the exact power consumption value for my quartz caliber?',
      answer: 'Official technical datasheets from ETA, Ronda, Miyota, Seiko, ISA, and other movement manufacturers list the average current consumption in microamperes (µA). Search for the caliber reference number followed by "datasheet" or "technical specification". Specialized databases like Ranfft, 17jewels, and Watch-Wiki also publish consumption figures contributed by the watch community.',
    },
    {
      question: 'What does "µA" mean and why is it important?',
      answer: 'µA stands for microampere, or one-millionth of an ampere. It measures the electrical current the movement draws from the battery. A typical analog quartz three-hand movement draws between 1.0 and 2.5 µA. Chronographs and multifunction modules can draw 3.0 to 6.0 µA. The higher the current, the shorter the battery life for a given cell capacity.',
    },
    {
      question: 'Can I use this tool for solar-powered or kinetic watches?',
      answer: 'No. Solar watches (Eco-Drive, Solar, Light-Powered) use photovoltaic cells to charge a rechargeable battery. Kinetic and Auto-Quartz watches use a rotor and micro-generator to charge a capacitor. Neither technology relies on a primary disposable cell, so the capacity-vs-consumption model does not apply. Use this calculator only for standard quartz movements with replaceable silver-oxide, alkaline, or lithium cells.',
    },
    {
      question: 'Should I replace the battery before it dies completely?',
      answer: 'Yes. Silver-oxide and alkaline batteries can leak potassium hydroxide when fully depleted, damaging the contact springs, PCB traces, and the stepper motor coil. Replacement before complete discharge is strongly recommended. If the tool shows less than 6 months of estimated life remaining, schedule a battery change as soon as practical.',
    },
    {
      question: 'What happens if I use a battery with higher or lower capacity than the original?',
      answer: 'Using a higher-capacity cell (e.g. SR936SW 55 mAh instead of SR920SW 40 mAh) will extend battery life but may not fit physically  -  the cell must match the original diameter and thickness exactly to maintain proper contact spring pressure. Using a lower-capacity cell shortens battery life and may cause intermittent contact if the cell is undersized. Always replace with the exact same reference number or a documented equivalent from the same size family.',
    },
    {
      question: 'How do I know if the battery in my watch is silver-oxide or alkaline?',
      answer: 'Silver-oxide cells are stamped with SR (e.g. SR920SW) and provide a stable 1.55 V output throughout their life, which keeps the quartz oscillator accurate. Alkaline cells are stamped with LR (e.g. LR41) and have a gradually declining voltage, which can cause the watch to run slow or stop prematurely. Most quality watch brands specify silver-oxide. If your watch originally used SR, always replace with SR, not LR.',
    },
    {
      question: 'Does the second hand jumping every two seconds mean the battery is dying?',
      answer: 'Yes. When the quartz movement detects that the battery voltage is too low to reliably drive the stepper motor, it enters a power-saving mode where the second hand jumps in 2-second or 4-second intervals. This is the end-of-life indicator. When you see this behaviour, the battery has approximately 2 to 4 weeks of remaining life and should be replaced immediately to avoid leakage.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Select or customise the battery cell',
      text: 'Choose a common silver-oxide cell from the dropdown list  -  SR621SW, SR626SW, SR920SW, SR936SW and others are preloaded with their official capacities. If your cell is not listed, select Custom and type its exact capacity in mAh as printed on the battery label or listed in the manufacturer datasheet.',
    },
    {
      name: 'Enter the movement power consumption',
      text: 'Locate the average current consumption for your caliber in the official technical documentation. Type the value in microamperes (µA) into the consumption field. Most three-hand movements use 1.0 to 2.5 µA. Chronographs and multifunction modules can go up to 6.0 µA.',
    },
    {
      name: 'Add the installation month and year (optional)',
      text: 'If you remember or have recorded when the battery was last installed, select the month and enter the year. The tool will use this date to calculate the estimated replacement date and show the remaining battery health as a percentage.',
    },
    {
      name: 'Read the theoretical lifespan',
      text: 'The result card shows the total estimated battery life in years, months, and remaining days. This is the maximum life under ideal conditions assuming no external factors reduce the battery capacity.',
    },
    {
      name: 'Check the health status and replacement date',
      text: 'When an installation date is provided, the gauge fills proportionally to the remaining battery life. A green "Good" badge means more than 50 % life remains. Yellow "Moderate" means between 20 and 50 %. Red "Critical" means less than 20 %. The exact recommended replacement date is shown below the gauge.',
    },
    {
      name: 'Adjust inputs and recalculate',
      text: 'Change any input  -  battery model, consumption value, or installation date  -  and the result updates automatically. Use this to compare different battery types or to plan replacement schedules for multiple watches in your collection.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How accurate is the theoretical battery life estimate?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The calculation is an electrical ideal based on capacity divided by consumption. In real-world conditions you can expect 10 to 20 % shorter life due to temperature variation, end-of-life detection circuits, mechanical drag from aged lubricants, and the extra load of chronograph or alarm functions. The estimate is a reliable upper bound, not an exact prediction.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Where do I find the exact power consumption value for my quartz caliber?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Official technical datasheets from ETA, Ronda, Miyota, Seiko, ISA, and other movement manufacturers list the average current consumption in microamperes (µA). Search for the caliber reference number followed by datasheet or technical specification. Specialised databases like Ranfft and 17jewels also publish community-contributed consumption figures.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What does µA mean and why is it important?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA stands for microampere, or one-millionth of an ampere. It measures the electrical current the movement draws from the battery. A typical analog quartz three-hand movement draws between 1.0 and 2.5 µA. Chronographs and multifunction modules can draw 3.0 to 6.0 µA. The higher the current, the shorter the battery life for a given cell capacity.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I use this tool for solar-powered or kinetic watches?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Solar watches use photovoltaic cells to charge a rechargeable battery. Kinetic watches use a rotor and micro-generator to charge a capacitor. Neither technology relies on a primary disposable cell, so the capacity-vs-consumption model does not apply. Use this calculator only for standard quartz movements with replaceable silver-oxide, alkaline, or lithium cells.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Should I replace the battery before it dies completely?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Silver-oxide and alkaline batteries can leak potassium hydroxide when fully depleted, damaging the contact springs, PCB traces, and the stepper motor coil. Replacement before complete discharge is strongly recommended. If the tool shows less than 6 months of estimated life remaining, schedule a battery change as soon as practical.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How do I know if the battery in my watch is silver-oxide or alkaline?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Silver-oxide cells are stamped with SR (e.g. SR920SW) and provide a stable 1.55 V output throughout their life. Alkaline cells are stamped with LR (e.g. LR41) and have a gradually declining voltage. Most quality watch brands specify silver-oxide. Always replace SR with SR, not LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does the second hand jumping every two seconds mean the battery is dying?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. When the quartz movement detects low battery voltage, it enters power-saving mode where the second hand jumps in 2-second or 4-second intervals. This is the end-of-life indicator. When you see this behaviour, the battery has approximately 2 to 4 weeks of remaining life and should be replaced immediately to avoid leakage.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Quartz Battery Health Checker',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Battery Life Calculator',
      'description': 'Calculate the theoretical battery life of any quartz watch movement by entering cell capacity (mAh) and caliber power consumption (µA). Estimates replacement date when installation month and year are provided.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Quartz watch battery life calculation  -  capacity vs consumption explained',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Learn how to estimate the battery life of a quartz watch movement using the cell capacity in mAh and the movement power consumption in µA. Understand the formula, the effect of temperature and load, and when to schedule a replacement.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to estimate quartz watch battery life',
      'description': 'A step-by-step guide to using the Quartz Battery Health Checker to determine the remaining life of any quartz watch battery and plan its replacement date.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Select or customise the battery cell',
          'text': 'Choose a common silver-oxide cell from the dropdown list  -  SR621SW, SR626SW, SR920SW, SR936SW and others are preloaded with their official capacities. If your cell is not listed, select Custom and type its exact capacity in mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Enter the movement power consumption',
          'text': 'Locate the average current consumption for your caliber from the official technical documentation. Type the value in microamperes (µA) into the consumption field.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Add the installation month and year',
          'text': 'If you know when the battery was installed, select the month and enter the year. The tool calculates the estimated replacement date and shows the remaining battery health as a percentage.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Read the theoretical lifespan',
          'text': 'The result card shows the total estimated battery life in years, months, and remaining days. This is the maximum life under ideal conditions.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Check health status and replacement date',
          'text': 'When an installation date is provided, the gauge shows remaining life. Green means more than 50 % remains. Yellow means 20 to 50 %. Red means less than 20 %. The recommended replacement date is shown below.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Quartz Battery Health Checker',
      'description': 'An online tool for estimating quartz watch battery life based on cell capacity and movement power consumption.',
      'category': 'Watch Battery Calculator',
      'audience': { '@type': 'Audience', 'audienceType': 'Watch enthusiasts and repair technicians' },
    },
  ],
};
