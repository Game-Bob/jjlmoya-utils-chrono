import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'service-interval-tracker',
  title: 'Watch Service Interval Tracker',
  description: 'Track and manage service intervals for your watch collection. Know when each watch is due for maintenance at a glance.',
  ui: {
    title: 'Service Tracker',
    addWatch: 'Add Watch',
    editWatch: 'Edit Watch',
    cancel: 'Cancel',
    save: 'Save',
    deleteWatch: 'Remove',
    confirmDelete: 'Remove this watch from your collection?',
    emptyTitle: 'Your collection is empty',
    emptyDesc: 'Track service intervals for your watches and never miss a maintenance again.',
    emptyAction: 'Add your first watch',
    healthy: 'healthy',
    due: 'due',
    overdue: 'overdue',
    nameLabel: 'Watch name',
    namePlaceholder: 'e.g. Rolex Submariner',
    movementLabel: 'Movement type',
    movementAuto: 'Automatic',
    movementManual: 'Manual',
    movementQuartz: 'Quartz',
    movementKinetic: 'Kinetic',
    dateLabel: 'Last service date',
    neverServiced: 'New or never serviced',
    lastServiceLabel: 'Last service',
    nextServiceLabel: 'Next service',
    serviced: 'Serviced',
    newWatch: 'New',
    years: 'yr',
    collectionHealth: 'Collection health',
  },
  seo: [
    { type: 'title', text: 'Watch Service Interval Tracker: Know When to Service Your Watches', level: 2 },
    { type: 'paragraph', html: 'A mechanical watch is a precision instrument with hundreds of moving parts. The lubricants dry out, gaskets degrade, and the rate drifts over time. Keeping track of when each watch was last serviced and when it is next due is the single most important habit for any collector. This tracker helps you stay on top of maintenance across your entire collection.' },
    { type: 'title', text: 'Why Service Intervals Matter', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Automatic (3-5 years)', definition: 'The mainspring barrel, reverser wheels, and rotor bearing experience constant wear. Old oil turns gummy and accelerates component wear.' },
        { term: 'Manual (3-5 years)', definition: 'Similar interval to automatics. The crown stem and keyless work endure repeated winding cycles.' },
        { term: 'Quartz (5-10 years)', definition: 'Fewer moving parts but the battery can leak, and gaskets still need replacing to maintain water resistance.' },
        { term: 'Kinetic (5 years)', definition: 'Combines automatic winding with quartz timekeeping. The capacitor or battery has a finite lifespan.' },
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Signs Your Watch Needs Service', icon: 'mdi:information', badge: 'WATCH FOR', html: 'If the watch is running more than 15-20 seconds per day fast or slow, the crown feels gritty when winding, the date does not click over crisply at midnight, or you see condensation under the crystal, do not wait for the interval. Service it immediately.' },
    { type: 'title', text: 'Track Your Collection', level: 3 },
    { type: 'paragraph', html: 'Add each watch in your collection with its movement type and last service date. The tracker calculates the next recommended service, shows a progress bar of the current service cycle, and color-codes each watch: <strong>green</strong> for healthy, <strong>amber</strong> for due within 6 months, and <strong>red</strong> for overdue. Your data stays in your browser using localStorage, so there is nothing to sign up for.' },
  ],
  faq: [
    {
      question: 'How often should I service my automatic watch?',
      answer: 'Most manufacturers recommend servicing an automatic movement every 3 to 5 years. In practice, many watches run well for 5-7 years before needing attention. If you notice significant rate drift, reduced power reserve, or a gritty winding feel, service it sooner.',
    },
    {
      question: 'Do quartz watches need regular service?',
      answer: 'Yes, though less frequently. The battery should be replaced every 2-3 years to prevent leakage damage. A full service including gasket replacement is recommended every 5-10 years to maintain water resistance and keep the movement clean.',
    },
    {
      question: 'What happens if I never service my watch?',
      answer: 'The lubricants will eventually dry out, causing increased friction and wear on pivots, jewel bearings, and the escapement. This can lead to expensive damage like broken balance staffs, worn pallet stones, or a seized mainspring. Regular service is cheaper than a full restoration.',
    },
    {
      question: 'Can I overwind a manual watch?',
      answer: 'Modern manual watches have a slipping mainspring that prevents overwinding. You will feel a firm stop when fully wound. Force is not needed. If the crown feels stiff or gritty, have the watch inspected rather than forcing it.',
    },
    {
      question: 'Does the service interval change if I wear the watch daily vs occasionally?',
      answer: 'Yes. A watch worn daily experiences more wear on the automatic winding system and should be serviced closer to the 3-year mark. Watches in regular rotation (worn 1-2 days a week) can often stretch to 5 years. Watches stored long-term should still be serviced before being worn again, as the lubricants degrade regardless of use.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Add a watch to your collection',
      text: 'Enter the watch name, movement type, last service date (if known), and the recommended service interval. The tracker computes the next service date automatically.',
    },
    {
      name: 'Check your dashboard',
      text: 'Each watch shows a progress bar of its service cycle and a color-coded status: green (healthy), amber (due soon), or red (overdue). The summary at the top gives you a quick overview of your collection health.',
    },
    {
      name: 'Update after service',
      text: 'When a watch is serviced, remove the old entry and add it again with the new service date. This keeps your tracking accurate and resets the progress bar.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How often should I service my automatic watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most manufacturers recommend servicing an automatic movement every 3 to 5 years. In practice, many watches run well for 5-7 years before needing attention.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Do quartz watches need regular service?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. The battery should be replaced every 2-3 years. A full service including gasket replacement is recommended every 5-10 years.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What happens if I never service my watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The lubricants will dry out, causing increased friction and wear. This can lead to expensive damage like broken balance staffs or a seized mainspring.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I overwind a manual watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modern manual watches have a slipping mainspring that prevents overwinding. You will feel a firm stop when fully wound.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does the service interval change with daily wear?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes. Daily wear means more wear on the winding system, so service closer to 3 years. Occasional wear can stretch to 5 years.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Service Interval Tracker',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to track watch service intervals',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Add a watch',
          'text': 'Enter the watch name, movement type, last service date, and service interval.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Check your dashboard',
          'text': 'Each watch shows a progress bar and color-coded status for quick health assessment.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Update after service',
          'text': 'When a watch is serviced, add a new entry with the updated service date.',
        },
      ],
    },
  ],
};
