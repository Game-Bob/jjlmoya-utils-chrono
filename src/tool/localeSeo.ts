import type { SEOSection } from '@jjlmoya/utils-shared';

type FAQ = { question: string; answer: string };
type Step = { name: string; text: string };

type Source = {
  title: string;
  description: string;
  faq: FAQ[];
  howTo: Step[];
};

const faq = (source: Source, index: number) => source.faq[index % source.faq.length];
const step = (source: Source, index: number) => source.howTo[index % source.howTo.length];

const telemeterTable = (title: string): SEOSection => ({
  type: 'table',
  headers: [title, 'km', 'mi', 'm/s'],
  rows: [
    ['1.0 s', '0.34', '0.21', '343'],
    ['2.9 s', '1.00', '0.62', '343'],
    ['4.7 s', '1.61', '1.00', '343'],
    ['5.8 s', '2.00', '1.24', '343'],
    ['10.0 s', '3.43', '2.13', '343'],
    ['15.0 s', '5.15', '3.20', '343'],
  ],
});

const watchTable = (title: string): SEOSection => ({
  type: 'table',
  headers: [title, 'Hesalite', 'Mineral', 'Sapphire'],
  rows: [
    ['Mohs hardness', '2-3', '5', '9'],
    ['Clarity', '4', '7', '10'],
    ['Impact resistance', '5', '3', '2'],
    ['Scratch resistance', '1', '5', '10'],
  ],
});

const infoDiagnostic = (title: string, html: string): SEOSection => ({
  type: 'diagnostic',
  variant: 'info',
  title,
  icon: 'mdi:information',
  badge: 'INFO',
  html,
});

export function buildServiceSeo(source: Source): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    { type: 'title', text: faq(source, 0).question, level: 3 },
    {
      type: 'glossary',
      items: [0, 1, 2, 3].map((index) => ({
        term: faq(source, index).question,
        definition: faq(source, index).answer,
      })),
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: faq(source, 2).question,
      icon: 'mdi:information',
      badge: 'INFO',
      html: faq(source, 2).answer,
    },
    { type: 'title', text: faq(source, 1).question, level: 3 },
    { type: 'paragraph', html: faq(source, 1).answer },
    { type: 'title', text: faq(source, 3).question, level: 3 },
    { type: 'paragraph', html: faq(source, 3).answer },
    { type: 'title', text: step(source, 0).name, level: 3 },
    { type: 'paragraph', html: step(source, 0).text },
    { type: 'title', text: step(source, 1).name, level: 3 },
    { type: 'paragraph', html: step(source, 1).text },
  ];
}

export function buildTelemeterSeo(source: Source): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    { type: 'title', text: faq(source, 0).question, level: 3 },
    {
      type: 'glossary',
      items: source.howTo.slice(0, 3).map(({ name, text }) => ({ term: name, definition: text })),
    },
    { type: 'title', text: faq(source, 1).question, level: 3 },
    { type: 'paragraph', html: faq(source, 1).answer },
    { type: 'title', text: faq(source, 2).question, level: 3 },
    { type: 'paragraph', html: faq(source, 2).answer },
    { type: 'title', text: faq(source, 3).question, level: 3 },
    telemeterTable(source.title),
    infoDiagnostic(faq(source, 4).question, faq(source, 4).answer),
    { type: 'title', text: faq(source, 0).question, level: 3 },
    { type: 'paragraph', html: faq(source, 0).answer },
    { type: 'title', text: faq(source, 3).question, level: 3 },
    { type: 'paragraph', html: faq(source, 3).answer },
    { type: 'title', text: faq(source, 4).question, level: 3 },
    { type: 'paragraph', html: faq(source, 4).answer },
    { type: 'title', text: step(source, 3).name, level: 3 },
    { type: 'paragraph', html: step(source, 3).text },
    { type: 'title', text: step(source, 4).name, level: 3 },
    { type: 'paragraph', html: step(source, 4).text },
  ];
}

export function buildWatchCrystalSeo(source: Source): SEOSection[] {
  return [
    { type: 'title', text: source.title, level: 2 },
    { type: 'paragraph', html: source.description },
    { type: 'title', text: faq(source, 0).question, level: 3 },
    { type: 'paragraph', html: faq(source, 0).answer },
    { type: 'title', text: faq(source, 1).question, level: 3 },
    { type: 'paragraph', html: faq(source, 1).answer },
    { type: 'title', text: faq(source, 2).question, level: 3 },
    { type: 'paragraph', html: faq(source, 2).answer },
    { type: 'title', text: faq(source, 3).question, level: 3 },
    watchTable(source.title),
    infoDiagnostic(step(source, 0).name, step(source, 0).text),
    { type: 'title', text: step(source, 1).name, level: 3 },
    { type: 'paragraph', html: step(source, 1).text },
    { type: 'title', text: step(source, 2).name, level: 3 },
    { type: 'paragraph', html: step(source, 2).text },
  ];
}
