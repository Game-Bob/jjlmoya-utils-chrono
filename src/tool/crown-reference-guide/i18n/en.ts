import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'crown-reference-guide',
  title: 'Watch Crown Reference Guide',
  description: 'Interactive guide to watch crown positions, winding directions, and setting functions for popular movements.',
  ui: {
    title: 'Crown Settings',
    movementLabel: 'Movement',
    selectMovement: 'Select movement',
    customMovement: 'Custom',
    positionLabel: 'Position',
    unscrewFirst: 'Unscrew the crown first',
    windingLabel: 'Winding',
    hackLabel: 'Hack',
    dangerZoneLabel: 'Avoid 9pm\u20133am',
    directionCW: 'Clockwise',
    directionCCW: 'Counter-clockwise',
    directionBoth: 'Bidirectional',
    pullHint: 'Pull crown',
    clickPosition: 'Click a position',
    position0Title: 'Resting',
    position0Desc: 'Crown is pushed in. Watch runs normally.',
    position0Detail: 'No winding or setting functions are engaged.',
    position1Title: 'Manual Winding',
    position1Desc: 'Turn the crown clockwise to wind the mainspring. You will feel resistance as the spring tightens.',
    position1Detail: 'About 30\u201340 full rotations from a dead stop. Automatic rotors also wind while worn.',
    position2Title: 'Date Quick-Set',
    position2Desc: 'Turn the crown clockwise to advance the date. The hour hand stays in sync with the running seconds.',
    position2Detail: 'AVOID quick-setting the date between 9pm and 3am while the date change mechanism is engaged.',
    position3Title: 'Time Setting',
    position3Desc: 'Turn the crown in either direction to move the hands. The seconds hand stops (hacks) for precise syncing.',
    position3Detail: 'Pull to position 3, wait for seconds to reach 12, then pull fully. Rotate to set time and push back in.',
    screwDownHint: 'Remember to screw the crown back down for water resistance.',
    noQuickSet: 'No quick-set',
    noHack: 'No',
    hasHack: 'Yes',
    crownPositions: 'Crown Positions',
    noteTitle: 'Note',
  },
  seo: [
    { type: 'title', text: 'Watch Crown Positions Guide — How to Wind, Set Date & Time Correctly', level: 2 },
    { type: 'paragraph', html: 'The crown is the only physical interface between you and your watch movement. Using it wrong — winding backward, setting the date at midnight, or pulling too hard — can damage the mechanism. This guide breaks down every crown position for <strong>ETA, Sellita, Miyota, Seiko, and Unitas</strong> calibers so you never have to guess.' },
    { type: 'title', text: 'Crown Positions at a Glance', level: 3 },
    { type: 'glossary', items: [
      { term: 'Position 0 (Resting)', definition: 'Crown pushed in or screwed down. Watch runs normally. No functions engaged. Always return here after setting.' },
      { term: 'Position 1 (Winding)', definition: 'First pull or unscrewed state. Turn clockwise to wind the mainspring. Most automatics also wind via rotor.' },
      { term: 'Position 2 (Date Quick-Set)', definition: 'Second pull. Turn clockwise to advance the date. Avoid using between 9pm\u20133am when the date mechanism is engaged.' },
      { term: 'Position 3 (Time Setting)', definition: 'Third pull. Hacking seconds stop for precise alignment. Rotate freely to set time. Present on most modern automatics.' },
    ] },

    { type: 'title', text: 'Movement Comparison: Crown Features', level: 3 },
    { type: 'table', headers: ['Movement', 'Positions', 'Hack', 'Quick-Set', 'Wind Dir.'], rows: [
      ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['Miyota 8215', '2 (0,1,3)', 'No', 'None', 'CW'],
      ['Miyota 9015', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['Seiko 6R35', '3 (0,1,2,3)', 'Yes', 'Date (CW)', 'CW'],
      ['Unitas 6497/6498', '1 (0,1,3)', 'No', 'None', 'CW'],
    ] },

    { type: 'diagnostic', variant: 'warning', title: 'Common Crown Mistakes', icon: 'mdi:alert', badge: 'DO NOT', html: 'Never quick-set the date between <strong>9pm and 3am</strong> while the date wheel is engaged. This can strip teeth and require a full movement service. If you must change the date during this window, first advance the time past 3am, set the date, then adjust back to the correct time.' },

          { type: 'tip', title: 'Screw Down Crowns', html: 'Dive watches and sports watches often have screw-down crowns for water resistance. <strong>Always unscrew before pulling</strong>. Turn counter-clockwise until the crown pops out, then pull to your desired position. After setting, push in, then turn clockwise while applying light pressure until snug. <strong>Do not overtighten.</strong>' },

    { type: 'comparative', columns: 2, items: [
      { title: 'Standard Crown', icon: 'mdi:crown', description: 'Push-pull crown found on most dress watches and everyday automatics. 2\u20134 positions. Water resistance typically 30\u2013100m.', points: ['Instant access, no unscrewing', 'Limited water resistance', 'Common on ETA, Miyota, Seiko'] },
      { title: 'Screw Down Crown', icon: 'mdi:lock', description: 'Threaded crown that screws into the case tube. Standard on dive watches and tool watches. Water resistance 200m+.', points: ['Superior water resistance', 'Must unscrew before use', 'Common on Rolex, Omega, Seiko Prospex'], highlight: true },
    ] },

    { type: 'summary', title: 'Quick Reference', items: [
      'Always wind clockwise — reverse winding engages the slipping clutch but does not wind.',
      'If your watch has a screw-down crown, unscrew it before pulling to any position.',
      'Avoid date quick-set between 9pm and 3am. Advance the time past 3am first if needed.',
      'Hand-wound movements (e.g., Unitas 6498) have fewer positions. Wind fully before setting time.',
      'Non-hacking movements (e.g., Miyota 8215) require a different technique: rotate past the target minute, then slowly back.',
    ] },
  ],
  faq: [
    {
      question: 'How many crown positions does my watch have?',
      answer: 'Most automatic movements have 3 functional positions beyond resting: position 1 for manual winding, position 2 for date quick-set, and position 3 for time setting with hacking. Hand-wound movements like the Unitas 6498 have only 1 functional position (winding, with time setting on a further pull). Screw-down crowns add an extra step: unscrew before pulling.',
    },
    {
      question: 'Can I damage my watch by winding backward?',
      answer: 'No, but it does nothing. Modern movements use a slipping clutch that disengages when turned backward, so reverse winding causes no damage but also does not wind the mainspring. Always wind clockwise for manual winding. The only exception is some vintage pocket watches and early automatic movements.',
    },
    {
      question: 'What is the date change danger zone and how do I avoid it?',
      answer: 'The danger zone is typically 9pm to 3am, when the date change mechanism is physically engaged with the date wheel. Quick-setting during this window can strip gear teeth. To safely set the date: advance the time past 3am, set the date to the previous day, then advance the time forward to the correct date and time.',
    },
    {
      question: 'Why does my seconds hand not stop when I pull the crown?',
      answer: 'Some movements lack a hacking mechanism. Common non-hacking calibers include the Miyota 8215, Unitas 6497/6498, and many vintage movements. To set time accurately on a non-hack movement: rotate the crown past your target minute by 5\u201310 minutes, then slowly turn backward until the minute hand lands exactly on the desired mark.',
    },
    {
      question: 'How do I know how many turns to fully wind my watch?',
      answer: 'Most automatic movements require 30\u201340 full crown rotations from a dead stop. Hand-wound movements vary: the Unitas 6498 needs about 30\u201335 turns, while the Seiko 6R35 with its 70-hour reserve needs 50\u201360 turns. Stop when you feel firm resistance \u2014 forcing past it can damage the mainspring.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Find your movement caliber',
      text: 'Look on the case back (often engraved) or on the movement itself through a display case back. Common numbers: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Select it in the guide',
      text: 'Choose your movement from the dropdown. The crown visual and panel update to show your exact positions, winding direction, and features.',
    },
    {
      name: 'Pull through each position',
      text: 'Click the position chips (0\u20133) or use the Pull button. Read the description and note the danger zone warning for date setting.',
    },
    {
      name: 'Apply to your watch',
      text: 'With the guide open beside you, practice on your actual watch. Wind in the correct direction, avoid the danger zone, and screw the crown back down afterward.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How many crown positions does my watch have?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most automatic movements have 3 functional positions beyond resting: position 1 for manual winding, position 2 for date quick-set, and position 3 for time setting with hacking.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I damage my watch by winding backward?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Modern movements use a slipping clutch that disengages when turned backward, so reverse winding causes no damage but also does not wind the mainspring.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What is the date change danger zone?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The danger zone is typically 9pm to 3am. To safely set the date: advance the time past 3am, set the date to the previous day, then advance forward.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Why does my seconds hand not stop when I pull the crown?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Some movements lack a hacking mechanism. Common non-hacking calibers include the Miyota 8215 and Unitas 6497/6498. To set time: rotate past the target, then slowly back.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How many turns to fully wind my watch?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Most automatic movements require 30-40 full crown rotations. Hand-wound movements vary. Stop when you feel firm resistance.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Watch Crown Reference Guide',
      'operatingSystem': 'All',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to use the Crown Reference Guide',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Find your movement caliber',
          'text': 'Look on the case back (often engraved) or on the movement itself through a display case back. Common numbers: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Select it in the guide',
          'text': 'Choose your movement from the dropdown. The crown visual and panel update to show your exact positions, winding direction, and features.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Pull through each position',
          'text': 'Click the position chips (0\u20133) or use the Pull button. Read the description and note the danger zone warning for date setting.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Apply to your watch',
          'text': 'With the guide open beside you, practice on your actual watch. Wind in the correct direction, avoid the danger zone, and screw the crown back down afterward.',
        },
      ],
    },
  ],
};
