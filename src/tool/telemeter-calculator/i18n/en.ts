import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'What is a telemeter bezel used for on a watch?',
    answer: 'It is used to calculate the distance between the watch wearer and an event that is both visible and audible. Historically, it was used in military operations to measure the distance to enemy artillery, and is now popular for measuring the distance of lightning and storms.',
  },
  {
    question: 'How do you calculate lightning distance with a watch telemeter?',
    answer: 'Start the chronograph when you see a lightning flash. Stop it when you hear the thunder. Read the number on the telemeter bezel pointed to by the seconds hand to find the distance (usually in kilometers or miles).',
  },
  {
    question: 'What is the difference between a tachymeter and a telemeter bezel?',
    answer: 'A tachymeter scale measures speed based on elapsed time over a known distance (like 1 kilometer). A telemeter scale measures distance based on elapsed time and the known speed of sound in air.',
  },
  {
    question: 'How accurate is a watch telemeter scale?',
    answer: 'Most watch telemeters are calibrated for standard atmospheric conditions at 20°C (68°F). Since temperature alters the speed of sound, measurements will have minor errors on cold or hot days. This digital calculator solves this by compensating for local ambient temperature.',
  },
  {
    question: 'Can you use a telemeter in water?',
    answer: 'No, standard watch telemeter scales are calibrated specifically for the speed of sound in air. Sound travels more than four times faster in water, so the printed bezel scale would be highly inaccurate underwater.',
  },
];

const howTo = [
  {
    name: 'Configure Units and Environment',
    text: 'Select your preferred units (metric or imperial) and set the current ambient air temperature of your location.',
  },
  {
    name: 'Trigger the Chrono on Flash',
    text: 'Click the "Trigger Flash" action button or the 2 o\'clock chronograph pusher when you see the lightning flash.',
  },
  {
    name: 'Trigger the Chrono on Sound',
    text: 'Click "Trigger Sound" or the 2 o\'clock pusher again the moment you hear the thunder clap.',
  },
  {
    name: 'Read Your Distance',
    text: 'Read the calculated distance on the results display or directly from the second hand positioning on the watch bezel.',
  },
];

const title = 'Telemeter Bezel Calculator: How to Use a Watch Telemeter';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemeter-calculator',
  title,
  description: 'Learn how to use a telemeter watch bezel. Calculate distance from lightning to thunder or sound and flash events with automatic air temperature compensation.',
  ui: {
    title: 'Telemeter Bezel Calculator',
    triggerFlash: 'Trigger Flash',
    triggerSound: 'Trigger Sound',
    stop: 'Stop',
    reset: 'Reset',
    settings: 'Settings',
    unitSystem: 'Unit System',
    metric: 'Metric (km)',
    imperial: 'Imperial (miles)',
    temperature: 'Air Temperature',
    speedOfSound: 'Speed of Sound',
    distanceResult: 'Measured Distance',
    elapsedTime: 'Elapsed Time',
    historyTitle: 'Measurement History',
    noHistory: 'No measurements yet. Start a calculation above!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Click the 2 o\'clock pusher or "Trigger Flash" when you see the visual event (e.g. lightning).',
    step2: 'Click it again or click "Trigger Sound" when you hear the acoustic event (e.g. thunder).',
    step3: 'Read the distance where the sweep hand stops on the telemeter bezel.',
    tipTitle: 'Pro Tip',
    tipContent: 'Warm air conducts sound faster than cold air. Adjusting the ambient temperature ensures the distance matches the physical acoustics of your environment.',
  },
  seo: [
    { type: 'title', text: 'What is a Telemeter Watch Bezel?', level: 2 },
    { type: 'paragraph', html: 'A telemeter is a scale printed on a chronograph watch dial or bezel. It allows the wearer to calculate the approximate distance to a remote event that can be both seen and heard (such as lightning, fireworks, or an explosion). By measuring the elapsed time between the visual cue (flash) and the auditory cue (sound), the telemeter scale reads the distance directly.' },
    { type: 'title', text: 'How to Use a Watch Telemeter Scale', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Step 1: Start the Chronograph', definition: 'Start your watch\'s stopwatch the moment you see the visual trigger, such as a lightning flash or muzzle flare.' },
        { term: 'Step 2: Stop the Chronograph', definition: 'Stop the stopwatch the instant you hear the accompanying sound, such as the thunderclap or explosion boom.' },
        { term: 'Step 3: Read the Scale', definition: 'Look at where the chronograph second hand is pointing on the outer telemeter scale. That number is your distance in kilometers or miles.' },
      ]
    },
    { type: 'title', text: 'The Physics of the Lightning-to-Thunder Calculation', level: 3 },
    { type: 'paragraph', html: 'Since light travels at approximately 300,000 km/s, you see the flash instantly. Sound, however, is much slower, traveling through the atmosphere at about 343 meters per second (at 20°C / 68°F). A standard telemeter watch scale is calibrated with 1 kilometer at 2.91 seconds, and 1 mile at 4.69 seconds. This calculator refines this math by adjusting the speed of sound based on local air temperature, which traditional watch dials cannot do.' },
    { type: 'title', text: 'Telemeter vs Tachymeter: What is the Difference?', level: 3 },
    { type: 'paragraph', html: 'While both scales are found on chronograph watches, they serve opposite purposes. A <strong>tachymeter</strong> measures speed over a fixed distance (e.g., how fast you are going over 1 mile). A <strong>telemeter</strong> measures distance over a variable time (e.g., how far away the lightning strike is based on sound travel time). Telemeters are marked with smaller, evenly distributed numbers (typically from 1 to 20), whereas tachymeters start at 60 and go up to 400 or 500.' },
    { type: 'title', text: 'Distance vs Seconds Reference Table', level: 3 },
    {
      type: 'table', headers: ['Elapsed Time', 'Distance (Kilometers)', 'Distance (Miles)', 'Acoustic Speed of Sound'], rows: [
        ['1.0 s', '0.34 km', '0.21 mi', '343.3 m/s (at 20°C)'],
        ['2.9 s', '1.00 km', '0.62 mi', '343.3 m/s (at 20°C)'],
        ['4.7 s', '1.61 km', '1.00 mi', '343.3 m/s (at 20°C)'],
        ['5.8 s', '2.00 km', '1.24 mi', '343.3 m/s (at 20°C)'],
        ['10.0 s', '3.43 km', '2.13 mi', '343.3 m/s (at 20°C)'],
        ['15.0 s', '5.15 km', '3.20 mi', '343.3 m/s (at 20°C)'],
        ['29.1 s', '10.00 km', '6.21 mi', '343.3 m/s (at 20°C)'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Why Temperature Matters', icon: 'mdi:information', badge: 'ACCURACY', html: 'Sound travels faster in warm air because the molecules are vibrating with more kinetic energy. At freezing temperatures (0°C / 32°F), sound travels at 331.3 m/s, whereas on a hot summer day (35°C / 95°F) it speeds up to 352.3 m/s. Adjusting the temperature slider in our tool corrects this discrepancy for accurate measurements.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
