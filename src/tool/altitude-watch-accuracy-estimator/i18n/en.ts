import type { ToolLocaleContent } from '../../../types';
import type { AltitudeWatchAccuracyEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Why do mechanical watches run faster at high altitude?',
    answer: 'Mechanical watches run faster at high altitude primarily because of reduced air density. Thinner air creates less aerodynamic drag on the balance wheel, allowing it to oscillate with slightly greater amplitude. This increased amplitude causes the watch to gain time - typically 2-6 seconds per day per 1000m of elevation gain, depending on the movement design.',
  },
  {
    question: 'Does altitude affect quartz watches too?',
    answer: 'Quartz watches are minimally affected by altitude since they have no oscillating mechanical balance wheel. However, extreme altitude changes can affect battery performance due to temperature variations, and some quartz movements use mechanical components that could be influenced, but the effect is negligible compared to mechanical watches.',
  },
  {
    question: 'Can altitude changes damage my watch?',
    answer: 'Altitude changes alone rarely damage mechanical watches. However, rapid decompression (like in an aircraft) can cause issues with water resistance in some watches. For saturation divers\' watches with helium escape valves, extreme pressure changes require proper valve operation. Normal altitude variations during travel are well within any watch\'s design tolerance.',
  },
];

const howTo = [
  {
    name: 'Select an altitude',
    text: 'Drag the altitude slider up or down to simulate different elevations, from sea level to 8,000m. Watch how the balance wheel oscillation and atmospheric data change in real time.',
  },
  {
    name: 'Read the deviation',
    text: 'The rate deviation display shows estimated seconds gained per day at the selected altitude. The deviation chart below shows the trend across all altitudes.',
  },
  {
    name: 'Consider the factors',
    text: 'Observe how air density decreases with altitude while the rate deviation increases. Temperature and pressure data provide context for the environmental changes affecting your watch.',
  },
];

const title = 'Altitude Watch Accuracy Estimator: How Elevation Affects Your Mechanical Watch';

export const content: ToolLocaleContent<AltitudeWatchAccuracyEstimatorUI> = {
  slug: 'altitude-watch-accuracy-estimator',
  title,
  description: 'Explore how altitude affects mechanical watch accuracy. Adjust elevation from sea level to mountain peak and see real-time changes in balance wheel oscillation, rate deviation, air density, pressure, and temperature.',
  ui: {
    title: 'Altitude Watch Accuracy Estimator',
    altitudeLabel: 'Altitude',
    altitudeUnit: 'm',
    seaLevel: 'Sea Level',
    deviationLabel: 'Rate Deviation',
    deviationUnit: 's/d',
    pressureLabel: 'Pressure',
    pressureUnit: 'hPa',
    densityLabel: 'Air Density',
    densityUnit: 'kg/m³',
    temperatureLabel: 'Temperature',
    temperatureUnit: '°C',
    oscillationLabel: 'Balance Wheel',
    oscillationsPerSec: 'osc/s',
    rateLabel: 'Rate',
    atmDataTitle: 'Atmospheric Conditions',
    howItWorks: 'How It Works',
    howItWorksDesc: 'Lower air density at high altitude reduces drag on the balance wheel, increasing amplitude and causing the watch to run faster. This tool estimates the rate deviation based on standard atmospheric models.',
    negligible: 'Negligible',
    minor: 'Minor',
    noticeable: 'Noticeable',
    significant: 'Significant',
    severe: 'Severe',
    step1: 'Drag the altitude slider to simulate elevations from sea level to 8,000m.',
    step2: 'Watch the balance wheel animation and deviation gauge respond in real time.',
    step3: 'Review the atmospheric data to understand the environmental factors at play.',
    tipTitle: 'Tip',
    tipContent: 'The effect varies by movement: high-beat movements (36,000 vph) are generally less affected by altitude than vintage low-beat movements (18,000 vph).',
    deviationChart: 'Deviation vs Altitude',
    altitudeM: 'Altitude (m)',
    secondsPerDay: 's/d',
    particleLabel: 'Air Molecules',
    airDensity: 'Air Density',
  },
  seo: [
    { type: 'title', text: 'Interactive Altitude Watch Accuracy Estimator for Mechanical Watches', level: 2 },
    { type: 'paragraph', html: 'The <strong>Altitude Watch Accuracy Estimator</strong> is an interactive tool that visualizes how elevation changes affect mechanical watch precision. By simulating altitudes from sea level to 8,000 meters, you can see the estimated rate deviation caused by changing air density, pressure, and temperature.' },
    { type: 'title', text: 'How Altitude Affects Watch Accuracy', level: 3 },
    { type: 'paragraph', html: 'At higher altitudes, <strong>air density decreases</strong>, which reduces aerodynamic drag on the balance wheel. This allows the balance wheel to oscillate with greater amplitude, causing the watch to run slightly faster. The effect is typically in the range of <strong>+2 to +6 seconds per day</strong> for every 1,000 meters of elevation gain, though this varies by movement design, lubrication, and manufacturing tolerances.' },
    { type: 'title', text: 'Rate Deviation at Different Altitudes', level: 3 },
    {
      type: 'table', headers: ['Altitude', 'Air Density', 'Pressure', 'Temperature', 'Est. Deviation'], rows: [
        ['Sea Level (0m)', '1.225 kg/m³', '1013 hPa', '15°C', 'Baseline'],
        ['1,000m', '1.112 kg/m³', '898 hPa', '8.5°C', '+0.4 s/d'],
        ['2,000m', '1.007 kg/m³', '795 hPa', '2°C', '+0.9 s/d'],
        ['3,000m', '0.909 kg/m³', '701 hPa', '-4.5°C', '+1.5 s/d'],
        ['4,000m', '0.819 kg/m³', '616 hPa', '-11°C', '+2.1 s/d'],
        ['5,000m', '0.736 kg/m³', '540 hPa', '-17.5°C', '+2.8 s/d'],
      ]
    },
    { type: 'title', text: 'Environmental Factors', level: 3 },
    { type: 'paragraph', html: 'Beyond air density, other environmental factors at high altitude can affect watch performance: <strong>temperature</strong> affects lubricant viscosity and mainspring elasticity, <strong>pressure changes</strong> can affect case sealing, and <strong>humidity</strong> at different altitudes may affect internal components. However, air density\'s effect on balance wheel drag is the dominant factor in altitude-related rate changes.' },
    { type: 'diagnostic', variant: 'info', title: 'Interactive Simulation Tool', icon: 'mdi:axis-arrow', badge: 'HOROLOGY', html: 'This tool provides estimated values based on the International Standard Atmosphere (ISA) model and empirical observations of balance wheel behavior. Actual results vary by movement caliber, condition, and individual manufacturing tolerances.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
