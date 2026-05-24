import type { CategoryLocaleContent } from '../../types';

const slug = 'horologi';
const title = 'Horologiverktyg & Referensguider';
const description = 'Professionella horologiverktyg för klockentusiaster — spåra noggrannhet, avmagnetisera urverk, beräkna handledsnärvaro och utforska kronpositioner för populära kalibrar.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Viktiga verktyg för klockentusiaster', level: 2 },
    { type: 'paragraph', html: 'Oavsett om du reglerar ett mekaniskt urverk, avmagnetiserar en nyligen magnetiserad klocka, håller koll på hur ofta du bär en tidtagare eller lär dig kronpositionerna för din favoritkaliber, ger denna svit dig professionella horologiverktyg direkt till hands — ingen dyr utrustning krävs.' },
    { type: 'title', text: 'Noggrannhet, Avmagnetisering & Kronreferenser', level: 2 },
    { type: 'paragraph', html: 'Från att spåra daglig avvikelse mot atomtid till att säkert avmagnetisera ett urverk med exakt tajming, från att veta exakt när du senast bar en klocka till att förstå varje kronposition på en ETA- eller Miyota-kaliber — dessa verktyg täcker de vardagliga behoven hos varje samlare och entusiast.' },
    { type: 'stats', items: [
      { label: 'Verktyg', value: '4', icon: 'mdi:tools' },
      { label: 'Kalibrar', value: '8+', icon: 'mdi:engine' },
      { label: 'Språk', value: '15', icon: 'mdi:translate' },
      { label: 'Dataintegritet', value: 'Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
