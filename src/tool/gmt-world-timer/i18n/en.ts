import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'How do I know if a watch is a true GMT or a caller GMT?',
    answer: 'A <strong>true GMT</strong> (also called "flyer" GMT) lets you jump the local hour hand independently - ideal for travelers who change time zones frequently. A <strong>caller GMT</strong> adjusts the GMT hand independently while the main hour hand stays fixed, which is cheaper to manufacture. To tell them apart: pull the crown to the time-setting position and rotate. If the hour hand jumps in one-hour increments without stopping, it\'s a true GMT. If the GMT hand moves instead, it\'s a caller. Rolex uses a true GMT calibre (3285) in the GMT-Master II, while many affordable microbrands use caller movements like the Seiko NH34.',
  },
  {
    question: 'What\'s the difference between a GMT watch and a World Timer?',
    answer: 'A <strong>GMT watch</strong> usually tracks two time zones - your local time and a reference (usually UTC) - using a 24-hour hand and a 24-hour bezel. A <strong>World Timer</strong> shows all 24 time zones at once: it has a city ring around the dial and a 24-hour disc that rotates. World Timers like the Patek Philippe 5230P or JLC Geophysic Universal Time let you read the time in any city instantly. GMTs are simpler and more affordable; World Timers are mechanically more complex and typically more expensive. This tool works more like a digital World Timer, letting you add as many cities as you need.',
  },
  {
    question: 'What time zone does my watch show when it says "GMT"?',
    answer: 'When a watch has "GMT" on the dial, the <strong>GMT hand</strong> (usually a fourth hand with a colored arrow tip) typically points to the time in a 24-hour format. Most owners set this hand to UTC (Coordinated Universal Time) because all time zones are defined as offsets from UTC. The rotating 24-hour bezel can then be aligned to read any other time zone. For example, if the GMT hand points to 14 (2 PM) and your bezel markers align it to UTC+2, you\'re reading Eastern European Time. This tool helps you visualise exactly that relationship.',
  },
];

const howTo = [
  {
    name: 'Add any city to your dashboard',
    text: 'Type a city name or time zone in the search bar. Click on a result to add it instantly. Each city appears as a live clock card with the current local time.',
  },
  {
    name: 'Remove cities when you don\'t need them',
    text: 'Hover any clock card and click the × button to remove it. Your selection is saved automatically in your browser - close and come back later and your dashboard is exactly as you left it.',
  },
  {
    name: 'Use it as a GMT reference for your watch collection',
    text: 'Set your home city and add the time zones you track with your GMT watches. Use the live offset labels to check if your bezel alignment is correct for each tracked zone.',
  },
];

const title = 'World Clock: Live Multiple Time Zone Dashboard';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-world-timer',
  title,
  description: 'Track multiple time zones live. Add any city and see its current time update every second. Perfect for watch enthusiasts with GMT or World Timer watches.',
  ui: {
    title: 'World Clock',
    searchPlaceholder: 'Search city or time zone...',
    addLabel: 'Add',
    removeLabel: 'Remove',
    noResults: 'No cities found',
    yourZones: 'Your Time Zones',
  },
  seo: [
    { type: 'title', text: 'World Clock - Live Time Zone Dashboard for Watch Enthusiasts', level: 2 },
    { type: 'paragraph', html: 'Whether you own a <strong>GMT-Master II</strong>, a <strong>World Timer</strong>, or simply need to track multiple time zones for work or travel, this live dashboard shows you the current time in every city you care about - all at a glance. Add New York, London, Tokyo, or any city, and the time updates every second. Your zones are saved in your browser so you never have to reconfigure.' },
    { type: 'title', text: 'Why Watch Enthusiasts Need a World Clock', level: 3 },
    { type: 'paragraph', html: 'If you collect <strong>GMT watches</strong>, you know the struggle: you set the bezel to track a second time zone, but offsets change with Daylight Saving Time, or you simply own multiple GMTs and want to compare how each one tracks a different city. This tool solves that. Add the cities your watches track, and instantly see their current offset and time. No more mental math - just look at the card and know exactly what your GMT hand should be pointing to.' },
    { type: 'title', text: 'GMT vs World Timer - Which One Matches Your Style?', level: 3 },
    { type: 'paragraph', html: 'A <strong>GMT watch</strong> (like the Rolex GMT-Master II "Pepsi" or Tudor Black Bay Pro) uses a 24-hour hand and a rotating bezel to track two time zones. A <strong>World Timer</strong> (like the Nomos Zürich Weltzeit or Omega Seamaster Worldtimer) shows all 24 zones at once using a city ring and a 24-hour disc. This dashboard mimics a World Timer: you can see every city at once. Use it to decide which complication fits your lifestyle before you buy.' },
    { type: 'title', text: 'Practical Uses Beyond Watch Collecting', level: 3 },
    {
      type: 'list', items: [
        'Remote workers scheduling across time zones without confusion',
        'Frequent travelers keeping an eye on home and destination simultaneously',
        'Traders tracking market openings in New York, London, Tokyo, and Sydney',
        'Anyone who wants to know "what time is it right now in..." without Googling',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Live World Clock', icon: 'mdi:clock-time-eight', badge: 'TIME', html: 'Times update live every second using your browser\'s built-in time zone database. Daylight Saving Time transitions are handled automatically. No data is sent to any server.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
