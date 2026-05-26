import type { WithContext, Thing } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

function buildFAQ(faq: FAQItem[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.answer },
    })),
  } as unknown as WithContext<Thing>;
}

function buildApp(title: string): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': title, 'operatingSystem': 'All',
    'applicationCategory': 'UtilitiesApplication',
    'browserRequirements': 'Requires HTML5. Requires JavaScript.',
  } as unknown as WithContext<Thing>;
}

function buildHowTo(title: string, howTo: HowToStep[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org', '@type': 'HowTo', 'name': title,
    'step': howTo.map((h) => ({ '@type': 'HowToStep', 'name': h.name, 'text': h.text })),
  } as unknown as WithContext<Thing>;
}

export function buildSchemas(title: string, faq: FAQItem[], howTo: HowToStep[]): WithContext<Thing>[] {
  return [buildFAQ(faq), buildApp(title), buildHowTo(title, howTo)];
}
