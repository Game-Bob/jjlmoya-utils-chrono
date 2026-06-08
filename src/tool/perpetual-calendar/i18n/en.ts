import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'What is a perpetual calendar watch?',
    answer: 'A perpetual calendar is a mechanical watch complication that displays the correct date, day, month, and moon phase automatically, accounting for months of different lengths and leap years. It is programmed to be accurate until the year 2100 (the next century year not divisible by 400).',
  },
  {
    question: 'How does a perpetual calendar know leap years?',
    answer: 'The mechanical program uses a 48-month gear (4 years) with a specially designed cam that accounts for the February 29th leap day. The mechanism knows that years divisible by 100 are not leap years unless also divisible by 400. Most perpetual calendars are accurate until 2100, which will require a one-day correction.',
  },
  {
    question: 'What is the difference between a perpetual and an annual calendar?',
    answer: 'An annual calendar requires one manual correction per year (at the end of February), while a perpetual calendar automatically handles leap years and continues correctly for decades or centuries. Perpetual calendars are significantly more complex mechanically.',
  },
];

const howTo = [
  {
    name: 'Advance the date',
    text: 'Use the D (day), M (month), and Y (year) buttons to advance the calendar forward. Watch the date hand sweep and the month window change.',
  },
  {
    name: 'Observe leap year transitions',
    text: 'Advance through February of a leap year (e.g., 2024) to see the date jump from 29 to March 1. Try a non-leap year to see it skip from 28 to March 1.',
  },
  {
    name: 'Use auto-play',
    text: 'Press play to watch the calendar automatically advance. This reveals the full cycle of month lengths and the moon phase progression.',
  },
];

const title = 'Perpetual Calendar Simulator: Interactive Watch Complication';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'perpetual-calendar',
  title,
  description: 'Explore the mechanical genius of a perpetual calendar watch complication. Visualize date, day, month, leap year cycle, and moon phase with an animated dial.',
  ui: {
    title: 'Perpetual Calendar Simulator',
    dateLabel: 'Date',
    dayLabel: 'Day',
    monthLabel: 'Month',
    yearLabel: 'Year',
    leapYearLabel: 'Leap Year',
    moonPhaseLabel: 'Moon Phase',
    weekdayLabel: 'Weekday',
    advanceDay: 'Advance Day',
    advanceMonth: 'Advance Month',
    advanceYear: 'Advance Year',
    autoPlay: 'Auto Play',
    resetBtn: 'Today',
    dayNames: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
    monthNames: 'January,February,March,April,May,June,July,August,September,October,November,December',
    tipTitle: 'Tip',
    tipContent: 'Most perpetual calendar watches use a 48-month program wheel with notches of varying lengths. February has the shortest notch (28 days in common years, 29 in leap years), while 30-day and 31-day months have progressively longer notches.',
    step1: 'Advance day by day past February to see how the mechanism handles month-end transitions.',
    step2: 'Watch the moon phase indicator progress through its 29.5-day cycle.',
    step3: 'Compare leap year vs. common year February transitions to understand the 4-year cycle.',
  },
  seo: [
    { type: 'title', text: 'Perpetual Calendar Simulator: Interactive Watch Complication', level: 2 },
    { type: 'paragraph', html: 'The <strong>perpetual calendar</strong> is one of the most prestigious complications in haute horlogerie. This interactive simulator visualizes how a mechanical perpetual calendar tracks date, day, month, leap year, and moon phase - all without manual correction for decades. Explore the 48-month gear program, see how February transitions work, and understand the gregorian calendar logic built into these masterpieces of micro-mechanics.' },
    { type: 'title', text: 'How a Perpetual Calendar Works', level: 3 },
    { type: 'paragraph', html: 'A mechanical perpetual calendar uses a <strong>program wheel</strong> with notches of different depths representing months of different lengths. A sensing lever drops into each notch; a deeper notch signals a short month (28-29 days), triggering the mechanism to advance to the 1st of the next month after the correct number of days. A <strong>48-month gear</strong> handles the 4-year leap year cycle, with an extra notch for February 29th. The program knows that century years (e.g., 2100) skip leap year unless divisible by 400.' },
    { type: 'title', text: 'Calendar Logic Reference', level: 3 },
    {
      type: 'table', headers: ['Month', 'Days', 'Notch Depth', 'Leap Year Action'], rows: [
        ['January', '31', 'Deep', 'Normal'],
        ['February', '28 / 29', 'Shallowest', 'Extra day every 4 years'],
        ['March', '31', 'Deep', 'Normal'],
        ['April', '30', 'Medium', 'Normal'],
        ['May', '31', 'Deep', 'Normal'],
        ['June', '30', 'Medium', 'Normal'],
        ['July', '31', 'Deep', 'Normal'],
        ['August', '31', 'Deep', 'Normal'],
        ['September', '30', 'Medium', 'Normal'],
        ['October', '31', 'Deep', 'Normal'],
        ['November', '30', 'Medium', 'Normal'],
        ['December', '31', 'Deep', 'Normal'],
      ]
    },
    { type: 'title', text: 'Perpetual vs Annual Calendar', level: 3 },
    {
      type: 'table', headers: ['Feature', 'Annual Calendar', 'Perpetual Calendar'], rows: [
        ['Requires adjustment', 'Once per year (Mar 1)', 'Once per century (2100)'],
        ['Leap year handling', 'Manual', 'Automatic (4-year cam)'],
        ['Month recognition', '30 vs 31 days', 'Full 28/29/30/31'],
        ['Complexity', 'Moderate (~50 parts)', 'Very high (~200+ parts)'],
        ['Price range', '$3,000 - $15,000', '$20,000 - $500,000+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interactive Calendar Simulator', icon: 'mdi:calendar-month', badge: 'HOROLOGY', html: 'This tool simulates the calendar mechanism of a perpetual calendar watch. The animated dial shows the date hand, month window, day subdial, moon phase, and leap year indicator. Use the controls to advance through days, months, or years and observe the mechanical logic in action.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
