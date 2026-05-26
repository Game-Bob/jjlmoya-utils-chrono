import type { WithContext, Thing } from 'schema-dts';
import type { FAQItem, HowToStep } from '../../types';

export function getSpeedOfSound(tempCelsius: number): number {
  return 331.3 + 0.6 * tempCelsius;
}

export function formatDistance(
  elapsedTime: number,
  tempCelsius: number,
  unitSystem: string
): { primary: string; secondary: string; timeText: string } {
  const speed = getSpeedOfSound(tempCelsius);
  const distM = speed * elapsedTime;
  const timeText = `${elapsedTime.toFixed(2)} ${elapsedTime === 1 ? 'second' : 'seconds'}`;

  if (unitSystem === 'metric') {
    const distKm = distM / 1000;
    return {
      primary: `${distKm.toFixed(2)} km`,
      secondary: `${distM.toFixed(0)} m`,
      timeText
    };
  } else {
    const distFt = distM * 3.28084;
    const distMi = distFt / 5280;
    return {
      primary: `${distMi.toFixed(2)} mi`,
      secondary: `${distFt.toFixed(0)} ft`,
      timeText
    };
  }
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
