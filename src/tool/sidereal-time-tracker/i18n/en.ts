import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'What is the difference between solar time and sidereal time?',
    answer: 'Solar time is based on the Sun\'s position relative to the local meridian (takes 24 hours), whereas sidereal time is based on the Earth\'s rotation relative to distant background stars (takes 23 hours, 56 minutes, 4.09 seconds).',
  },
  {
    question: 'Why is a sidereal day shorter than a solar day?',
    answer: 'As the Earth rotates on its axis, it also travels along its orbit around the Sun. To face the Sun again, the Earth has to rotate slightly more than 360 degrees, which adds about 3 minutes and 56 seconds to the day compared to a simple star-aligned rotation.',
  },
  {
    question: 'How does longitude affect local sidereal time?',
    answer: 'Local Sidereal Time is calculated by adding the observer\'s longitude (converted to hours: 15 degrees per hour) to Greenwich Mean Sidereal Time (GMST). Every degree east adds 4 minutes to your local sidereal clock.',
  },
];

const howTo = [
  {
    name: 'Set your reference longitude',
    text: 'Adjust the slider to your local longitude. This aligns the 24-hour sidereal scale to your local meridian.',
  },
  {
    name: 'Observe the solar and sidereal hour hands',
    text: 'Look at the timepiece: standard solar hands show UTC time on the inner 12-hour dial, while the gold hand and stars show Sidereal time on the outer 24-hour scale.',
  },
  {
    name: 'Accelerate the celestial rate',
    text: 'Click 200x or 5000x speed multipliers to watch the stellar background sphere rotate and see the drift accumulate in real-time.',
  },
];

const title = 'Astronomical Sidereal Time Tracker: Local Sidereal Time Clock';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'sidereal-time-tracker',
  title,
  description: 'Track Greenwich Mean Sidereal Time (GMST) and Local Sidereal Time (LST) with an artistic astronomical astrolabe watch face and real-time stellar drift simulator.',
  ui: {
    title: 'Astronomical Sidereal Time Tracker',
    longitudeLabel: 'Observer Longitude',
    solarTimeLabel: 'Coordinated Universal Time (UTC)',
    siderealTimeLabel: 'Local Sidereal Time (LST)',
    differenceLabel: 'Stellar-Solar Drift',
    utcLabel: 'UTC Date/Time',
    speedLabel: 'Celestial Speed Rate',
    speedNormal: '1x (Real-time)',
    speedFast: '200x (Time-lapse)',
    speedVeryFast: '5000x (Drift)',
    audioToggleLabel: 'Cosmic Chime Ticks',
    step1: 'Adjust your local Longitude to see Local Sidereal Time shift in real-time.',
    step2: 'Toggle the speed multiplier to watch the standard solar hour hand and the sidereal star sphere drift.',
    step3: 'Enable Cosmic Chimes to hear the difference between a standard tick and an astronomical hour crossing.',
    tipTitle: 'Astronomical Drift',
    tipContent: 'Because the Earth orbits the Sun, standard solar clocks lag behind sidereal time by 3 minutes and 56 seconds per day, drifting exactly 24 hours over the course of a full year.',
    useLocationBtn: 'Use Current Location',
    hemisphereLabel: 'Stellar Hemisphere',
    hemisphereNorth: 'North (Ursa Major)',
    hemisphereSouth: 'South (Crux)',
    longitudeFormatLabel: 'Longitude Format',
    longitudeFormatDecimal: 'Decimal Degrees',
    longitudeFormatDMS: 'Degrees/Minutes',
  },
  seo: [
    { type: 'title', text: 'What is Sidereal Time?', level: 2 },
    { type: 'paragraph', html: 'Sidereal time is a timekeeping system astronomers use to locate celestial objects. A sidereal day is approximately 23 hours, 56 minutes, and 4.09 seconds. It is the time it takes the Earth to make one complete rotation on its axis relative to the vernal equinox or the distant stars, rather than the Sun.' },
    { type: 'title', text: 'Solar Day vs. Sidereal Day', level: 3 },
    { type: 'paragraph', html: 'A solar day measures the time between consecutive transits of the Sun across the local meridian. Because the Earth travels about 1/365th of its orbital path around the Sun each day, it must rotate slightly more than 360 degrees to realign with the Sun. A sidereal day is a true 360-degree rotation relative to the stars, making it 3 minutes and 56 seconds shorter.' },
    { type: 'title', text: 'Why Astronomers and Watchmakers Care', level: 3 },
    { type: 'paragraph', html: 'For astronomers, a star is always at the same position in the sky at the same Sidereal Time. To track stars, telescope mounts must rotate exactly once per sidereal day. High-end watchmaking brands (like Patek Philippe, Vacheron Constantin, and IWC) create ultra-complicated astronomical watches featuring sidereal gear trains to track LST directly on the wrist.' },
    { type: 'title', text: 'Stellar vs. Solar Drift Reference Table', level: 3 },
    {
      type: 'table', headers: ['Elapsed Days', 'Sidereal Time Ahead By', 'Degrees of Rotation Shift', 'Stellar Constellation Drift'], rows: [
        ['1 Day', '3m 56s', '0.986°', 'Slight shift west'],
        ['15 Days', '59m 0s', '14.79°', 'Half a zodiac sign shift'],
        ['30 Days', '1h 58m', '29.58°', 'One full zodiac constellation shift'],
        ['90 Days', '5h 54m', '88.74°', 'One full season constellation shift'],
        ['180 Days', '11h 48m', '177.48°', 'Opposite constellations visible at midnight'],
        ['365 Days', '24h 0m', '360.00°', 'Complete cycle, star alignment reset'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Calculated from J2000 Epoch', icon: 'mdi:creation-outline', badge: 'COMPUTATION', html: 'Local Sidereal Time is computed by converting UTC time to Julian Date (days since -4712), finding the Greenwich Mean Sidereal Time, and applying your longitude (15 degrees per hour). Our tool uses the high-precision IAU J2000 linear model for real-time tracking.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
