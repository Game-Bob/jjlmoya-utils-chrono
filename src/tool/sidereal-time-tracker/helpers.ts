import type { WithContext, Thing } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

export function getJulianDate(date: Date): number {
  return (date.getTime() / 86400000) + 2440587.5;
}

export function getGMST(date: Date): number {
  const jd = getJulianDate(date);
  const d = jd - 2451545.0;
  let gmst = (18.697374558 + 24.06570982441908 * d) % 24;
  if (gmst < 0) {
    gmst += 24;
  }
  return gmst;
}

export function getLST(date: Date, longitude: number): number {
  const gmst = getGMST(date);
  const longitudeHours = longitude / 15;
  let lst = (gmst + longitudeHours) % 24;
  if (lst < 0) {
    lst += 24;
  }
  return lst;
}

export function formatHours(hours: number): string {
  const h = Math.floor(hours);
  const m = Math.floor((hours * 60) % 60);
  const s = Math.floor((hours * 3600) % 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function buildFAQ(faq: FAQItem[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faq.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer,
      },
    })),
  } as unknown as WithContext<Thing>;
}

function buildApp(title: string): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': title,
    'operatingSystem': 'All',
    'applicationCategory': 'UtilitiesApplication',
    'browserRequirements': 'Requires HTML5. Requires JavaScript.',
  } as unknown as WithContext<Thing>;
}

function buildHowTo(title: string, howTo: HowToStep[]): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': title,
    'step': howTo.map((h) => ({
      '@type': 'HowToStep',
      'name': h.name,
      'text': h.text,
    })),
  } as unknown as WithContext<Thing>;
}

export function buildSchemas(
  title: string,
  faq: FAQItem[],
  howTo: HowToStep[]
): WithContext<Thing>[] {
  return [buildFAQ(faq), buildApp(title), buildHowTo(title, howTo)];
}
