import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'mainspring-finder',
  title: 'Mainspring Finder',
  description: 'Calculate mainspring dimensions from barrel measurements for vintage watch movements.',
  ui: {
    title: 'Mainspring Finder',
    barrelLabel: 'Barrel ID',
    arborLabel: 'Arbor OD',
    heightLabel: 'Barrel Height',
    turnsLabel: 'Turns',
    calculate: 'Calculate',
    resultThickness: 'Thickness',
    resultHeight: 'Height',
    resultLength: 'Length',
    resultStrength: 'Strength',
    strengthWeak: 'Light',
    strengthMedium: 'Medium',
    strengthStrong: 'Strong',
    commercial: 'Commercial Size',
    unitLabel: 'Unit',
    mm: 'mm',
    inch: 'in',
    step1: 'Measure barrel ID, arbor OD, and internal height with a caliper.',
    step2: 'Set the expected number of winding turns (5-8 manual, 6-10 auto).',
    step3: 'Toggle mm/in for your preferred unit system.',
    tipTitle: 'Tip',
    tipContent: 'Always verify calculated dimensions against manufacturer specs. Cross-reference with supplier catalogues before ordering.',
  },
  seo: [
    { type: 'title', text: 'Mainspring Finder - Calculate Spring Dimensions for Watch Movements', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Typical spring thickness' },
        { value: '5-10 turns', label: 'Standard winding range' },
        { value: '150-450 mm', label: 'Common spring length' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Restoring a vintage watch movement often starts with identifying the correct mainspring. The <strong>Mainspring Finder</strong> helps you calculate the theoretical dimensions of the mainspring based on the barrel geometry. By entering the barrel inner diameter, arbor diameter, barrel height, and expected number of turns, the tool computes the spring thickness, height, and length. Results are also shown as approximate commercial sizes in both metric and imperial units, making it easier to cross-reference supplier catalogues.' },
    { type: 'title', text: 'How mainspring dimensions are calculated', level: 3 },
    { type: 'paragraph', html: 'The mainspring occupies the annular space between the barrel wall and the arbor. The <strong>spring thickness</strong> is estimated as <strong>(barrel ID - arbor OD) / (2x turns + 1.5)</strong>, where the extra 1.5 accounts for the spring-end attachment and the space the spring occupies against itself. The <strong>spring length</strong> follows <strong>L = pi x turns x (barrel ID + arbor OD) / 2</strong>, which gives the total length of the ribbon if laid flat. The <strong>spring height</strong> equals the internal barrel height minus a small clearance (typically 0.1 mm) to prevent rubbing against the barrel lid.' },
    { type: 'title', text: 'How to measure a barrel for mainspring selection', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Barrel Inner Diameter', definition: 'The inside diameter of the barrel drum measured with a caliper. This is the largest circle the mainspring can occupy. Typical range: 8-30 mm.' },
        { term: 'Arbor Diameter', definition: 'The diameter of the barrel arbor at its widest point where the inner coil of the mainspring hooks. Smaller arbors allow longer springs for the same barrel.' },
        { term: 'Barrel Height', definition: 'The internal height of the barrel drum. The mainspring height must be slightly less (0.05-0.15 mm) to allow free rotation without friction on the lid.' },
        { term: 'Number of Turns', definition: 'The number of complete winding turns the movement provides. Manual wind calibers typically offer 5-8 turns, automatics 6-10 turns.' },
      ],
    },
    { type: 'title', text: 'Spring strength and what it means for your movement', level: 3 },
    { type: 'paragraph', html: 'The <strong>spring thickness</strong> is the primary factor determining the torque delivered to the gear train. A thicker spring (greater than 0.14 mm) provides high torque suitable for movements with complications like chronographs or striking mechanisms. Medium springs (0.10-0.14 mm) are standard for most time-only and date calibers. Thin springs (below 0.10 mm) are found in small ladies movements or ultra-thin calibers. Always match the original manufacturer specification when available; an overly strong spring can damage the barrel arbor or gear train pivots.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Using the wrong mainspring can damage your movement',
      html: 'Installing a spring that is <strong>too thick</strong> increases friction and torque beyond design limits, potentially wearing the barrel arbor hole, bending the centre wheel pivot, or even cracking the barrel. A spring that is <strong>too thin</strong> will not provide enough amplitude, causing the watch to run slow or stop before reaching its full power reserve. Always cross-reference the calculated dimensions with known supplier catalogues before ordering.',
    },
    { type: 'title', text: 'Commercial mainspring sizing systems', level: 3 },
    { type: 'paragraph', html: 'Mainspring suppliers catalogue springs by <strong>length x height x thickness</strong> in millimetres. Common metric sizes follow the General Resources or GR system. Inch-based systems are still used by some American and British suppliers. The tool displays both systems so you can search catalogues regardless of the supplier. When the exact calculated size is not available, choose the closest commercial size that matches the height exactly and the thickness within 0.005 mm, then adjust the length by selecting a spring from the same height/thickness family.' },
    { type: 'title', text: 'Vintage Caliber Considerations', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Swiss calibers (ETA, FHF, AS, Unitas)</strong> - well-documented in the GR system. Most have known mainspring references.',
        '<strong>French calibers (LIP, France Ebauches)</strong> - often use non-standard barrel proportions. Measure carefully.',
        '<strong>American calibers (Waltham, Elgin, Illinois)</strong> - inch-based systems. Use the imperial output to cross-reference.',
        '<strong>Japanese calibers (Seiko, Citizen, Miyota)</strong> - metric system with good catalogue coverage for post-1960 movements.',
        '<strong>Chinese calibers (Sea-Gull, DG, Tongji)</strong> - often clone Swiss designs. The Swiss GR reference usually applies.',
      ],
    },
    {
      type: 'summary',
      title: 'Key takeaways for mainspring selection',
      items: [
        'Measure barrel ID, arbor OD, and barrel height accurately with a precision caliper',
        'Use the calculated dimensions as a starting point, not as an absolute specification',
        'Cross-reference with manufacturer technical sheets or known supplier catalogues',
        'Match the spring height exactly to the barrel height minus 0.05-0.15 mm clearance',
        'Match the thickness within 0.005 mm of the calculated value for optimal performance',
        'Verify the spring length is adequate for the expected number of winding turns',
      ],
    },
  ],
  faq: [
    {
      question: 'How accurate are the calculated mainspring dimensions?',
      answer: 'The calculations are based on standard watchmaking formulas that assume ideal barrel geometry. Real-world dimensions can vary by up to 5-10 % due to manufacturing tolerances, spring-end configurations (brace, eyelet, or T-end), and the specific alloy used. Always use the calculated values as a strong reference point, but cross-reference with manufacturer datasheets or commercial supplier catalogues before ordering.',
    },
    {
      question: 'What if I cannot find the exact commercial size?',
      answer: 'When the exact size is unavailable, prioritise matching the spring height exactly, then the thickness within 0.005 mm. The length can be adjusted by selecting a different spring from the same height and thickness family. A slightly longer spring will work if the barrel has enough space, but a shorter spring will reduce the power reserve.',
    },
    {
      question: 'How do I measure the barrel dimensions without removing the mainspring?',
      answer: 'If the barrel still contains the old spring, you can measure the outer diameter of the barrel from the outside (then subtract the wall thickness, typically 0.2-0.4 mm) and the overall height (then subtract the lid thickness). For the most accurate results, remove the old spring and clean the barrel before measuring.',
    },
    {
      question: 'What is the difference between a brace and an eyelet mainspring end?',
      answer: 'A brace end (also called a T-end) has a small T-shaped tab that hooks into the barrel wall. Most modern Swiss and Japanese calibers use this type. An eyelet end has a small hole that fits over a peg on the arbor. This tool calculates the ribbon dimensions only; you must verify the end type matches your barrel before ordering.',
    },
    {
      question: 'Can I use this tool for chronograph or automatic movements?',
      answer: 'Yes, but note that automatic movements often have a higher number of turns (8-10) and may require a slightly thinner spring to accommodate the additional winding module. Chronograph movements typically need thicker springs to drive the chronograph mechanism. Adjust the Turns value accordingly and verify against manufacturer specifications.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Measure the barrel inner diameter',
      text: 'Use a precision caliper to measure the inside diameter of the barrel drum. Measure at two points 90 degrees apart and average the readings. Record the result in millimetres.',
    },
    {
      name: 'Measure the arbor diameter',
      text: 'Measure the diameter of the barrel arbor at the widest point where the mainspring inner coil attaches. This is typically near the centre of the arbor, not at the square end.',
    },
    {
      name: 'Measure the barrel internal height',
      text: 'Measure the depth of the barrel from the bottom to the top edge. If the lid is removable, include the lid thickness in your measurement. The spring height will be approximately 0.1 mm less.',
    },
    {
      name: 'Set the number of turns',
      text: 'Determine how many full turns the mainspring makes when fully wound. For manual wind calibers, this is typically 5-8 turns. Automatics may have 6-10 turns. Check the movement specifications if available.',
    },
    {
      name: 'Read the calculated dimensions',
      text: 'The tool displays the recommended spring thickness, height, and length. It also estimates the spring strength category and provides commercial equivalents in both metric and imperial units.',
    },
    {
      name: 'Cross-reference with catalogues',
      text: 'Use the commercial sizes shown to search supplier catalogues. Enter the metric or imperial dimensions into Cousins UK, Jules Borel, or your preferred supplier. Adjust the search if the exact size is not available.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How accurate are the calculated mainspring dimensions?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The calculations are based on standard watchmaking formulas that assume ideal barrel geometry. Real-world dimensions can vary by up to 5-10 % due to manufacturing tolerances, spring-end configurations, and the specific alloy used. Always cross-reference with manufacturer datasheets or commercial catalogues before ordering.' },
        },
        {
          '@type': 'Question',
          'name': 'What if I cannot find the exact commercial size?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Match the spring height exactly first, then the thickness within 0.005 mm. Adjust length from the same height/thickness family.' },
        },
        {
          '@type': 'Question',
          'name': 'How do I measure the barrel without removing the mainspring?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Measure the outer barrel diameter and subtract wall thickness (0.2-0.4 mm). For best results, remove the old spring first.' },
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between brace and eyelet ends?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-end) hooks into the barrel wall. Eyelet has a hole over an arbor peg. Modern Swiss/Japanese calibers use brace ends.' },
        },
        {
          '@type': 'Question',
          'name': 'Can I use this for chronograph or automatic movements?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Automatics often need more turns (8-10) and thinner springs. Chronographs need thicker springs. Adjust Turns and verify.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Mainspring Finder',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Mainspring Calculator',
      'description': 'Calculate theoretical mainspring dimensions from barrel measurements for vintage watch movements.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Watch mainspring dimensions calculation',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Learn how to calculate mainspring dimensions from barrel inner diameter, arbor size, and winding turns.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to find the correct mainspring',
      'description': 'Step-by-step guide to measuring a watch barrel and calculating correct mainspring dimensions.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Measure barrel ID', 'text': 'Use a precision caliper to measure the inside diameter of the barrel drum.' },
        { '@type': 'HowToStep', 'name': 'Measure arbor OD', 'text': 'Measure the barrel arbor diameter at its widest point.' },
        { '@type': 'HowToStep', 'name': 'Measure barrel height', 'text': 'Measure internal depth. Spring height is ~0.1 mm less.' },
        { '@type': 'HowToStep', 'name': 'Set turns', 'text': 'Set 5-8 for manual wind, 6-10 for automatic movements.' },
        { '@type': 'HowToStep', 'name': 'Read results', 'text': 'View spring thickness, height, length, and commercial equivalents.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Mainspring Finder',
      'description': 'A tool for watchmakers to calculate mainspring dimensions from barrel measurements.',
      'category': 'Watchmaking Tool',
      'audience': { '@type': 'Audience', 'audienceType': 'Watchmakers and horology enthusiasts' },
    },
  ],
};
