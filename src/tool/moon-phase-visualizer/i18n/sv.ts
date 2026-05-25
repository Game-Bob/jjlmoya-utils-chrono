import type { ToolLocaleContent } from '../../../types';
import type { MoonPhaseVisualizerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MoonPhaseVisualizerUI> = {
  slug: 'manfasvisualiserare',
  title: 'Månfasvisualiserare – kalender– & klockkomplikationsverktyg',
  description: 'Visualisera aktuell månfas, belysning, ålder samt kommande full- och nymånar. Perfekt för att ställa in din månfaskomplikation.',
  ui: {
    title: 'Månfasvisualiserare',
    selectDate: 'Välj datum',
    today: 'Idag',
    moonPhase: 'Månfas',
    illumination: 'Belysning',
    moonAge: 'Månens ålder',
    daysUntilFull: 'Dagar till fullmåne',
    daysUntilNew: 'Dagar till nymåne',
    newMoon: 'Nymåne',
    waxingCrescent: 'Tilltagande skära',
    firstQuarter: 'Första kvartilet',
    waxingGibbous: 'Tilltagande halvmåne',
    fullMoon: 'Fullmåne',
    waningGibbous: 'Avtagande halvmåne',
    lastQuarter: 'Sista kvartilet',
    waningCrescent: 'Avtagande skära',
    nextFullMoon: 'Nästa fullmåne',
    nextNewMoon: 'Nästa nymåne',
    tipTitle: 'Tips',
    tipContent: 'För att ställa in en månfasklocka, hitta först dagens månfas med det här verktyget, vrid sedan kronan tills månskivan matchar. De flesta mekaniska månfaser är korrekta inom en dags fel varannan år.',
    days: 'Cykelframsteg',
    day: 'dag',
  },
  seo: [
    { type: 'title', text: 'Månfasvisualiserare – månfasverktyg & klockinställningsguide', level: 2 },
    { type: 'paragraph', html: 'Månfasvisualiseraren visar <strong>den aktuella månfasen</strong> med en realistisk rendering av månen. Se <strong>belysningsprocent, månens ålder, dagar till nästa fullmåne och nästa nymåne</strong>. Utformad för klockentusiaster som behöver ställa in sin månfaskomplikation korrekt – fungerar även som en allmän månkalender för valfritt datum i dåtid eller framtid.' },
    { type: 'title', text: 'Ordlista – månfaser', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Nymåne', definition: 'Månen befinner sig mellan jorden och solen. Den belysta sidan är vänd bort från oss. 0 % belysning. Början av måncykeln.' },
        { term: 'Tilltagande skära', definition: '1–49 % belysning. En tunn skära syns på höger sida (norra halvklotet). Månen rör sig mot första kvartilet.' },
        { term: 'Första kvartilet', definition: '50 % belysning. Halva den synliga ytan är upplyst. Månen har genomfört en fjärdedel av sin cykel.' },
        { term: 'Tilltagande halvmåne', definition: '51–99 % belysning. Mer än halva ytan är upplyst. Månen bygger upp mot fullmåne.' },
        { term: 'Fullmåne', definition: '100 % belysning. Hela den synliga ytan är upplyst. Måncykelns höjdpunkt.' },
        { term: 'Avtagande halvmåne', definition: '99–51 % belysning. Den upplysta ytan börjar krympa från höger sida.' },
        { term: 'Sista kvartilet', definition: '50 % belysning. Vänstra halvan är upplyst. Tre fjärdedelar av cykeln avklarad.' },
        { term: 'Avtagande skära', definition: '49–1 % belysning. En tunn skära på vänster sida innan cykeln återställs till nymåne.' },
      ]
    },
    { type: 'title', text: 'Så ställer du in en månfasklocka', level: 3 },
    {
      type: 'list', items: [
        'Använd detta verktyg för att hitta dagens exakta månfas. Notera fasens namn och visuella utseende.',
        'Dra ut kronan på klockan till månfasinställningsläget (vanligtvis läge 2 eller 3).',
        'Vrid kronan tills månskivan visar samma fas som verktyget. Fullmåneindikatorn är vanligtvis i mitten upptill på skivan.',
        'Undvik att ställa in månfasen mellan kl. 21 och 03 då datumväxlingsmekanismen är i ingrepp och kan skadas.',
        'De flesta mekaniska månfasklockor använder ett 59-kuggs hjul som approximerar två måncykler (59 dagar). Det innebär att de får ungefär en dags fel varannan år.',
        'För hög precision använder vissa klockor (Patek Philippe, A. Lange & Söhne) hjul som är korrekta inom en dag per 100+ år.',
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Ställ aldrig in under datumväxling', icon: 'mdi:alert', html: 'Ställ inte in månfasen (eller datumet) mellan cirka <strong>kl. 21 och 03</strong>. Under detta fönster är klockans datumväxlingsmekanism fysiskt i ingrepp med datumhjulet. Att tvinga kronan kan skada kuggar. Måste du ställa in under denna period – förflytta först visarna förbi kl. 03, ställ sedan in månfasen.' },
    { type: 'title', text: 'Mekanisk vs högprecision månfas', level: 3 },
    {
      type: 'table', headers: ['Typ', 'Kugghjul', 'Felmarginal', 'En dags fel efter', 'Exempelklockor'], rows: [
        ['Standard / Insteg', '59 kuggar', '~1 dag varannan år', '~2,5 år', 'Seiko, Orient, Hamilton, Tissot'],
        ['Mellanklass', '135 kuggar', '~1 dag var 10:e år', '~10 år', 'Omega, Tudor, IWC, Breitling'],
        ['Högprecision', 'Kuggväxel', '~1 dag per 100+ år', '100+ år', 'Patek Philippe, A. Lange & Söhne'],
      ]
    },
    { type: 'tip', title: 'Att läsa månskivan', html: 'På de flesta månfasklockor visar månskivan <strong>två månar</strong> mittemot varandra. Varje fullmåne är i linje med öppningen i mitten upptill. Efter en full cykel (29,5 dagar) tar den andra månen dess plats. Det är därför ett 59-kuggs hjul fungerar: det gör ett helt varv på 59 dagar – exakt två måncykler.' },
    {
      type: 'summary', title: 'Snabbreferens', items: [
        'Måncykeln (synodisk) är exakt 29,53058867 dagar. Verktyget använder detta värde för maximal noggrannhet.',
        'Åtta faser upprepas i en evig cykel: nymåne → tilltagande skära → första kvartilet → tilltagande halvmåne → fullmåne → avtagande halvmåne → sista kvartilet → avtagande skära.',
        'Ställ in en månfasklocka: hitta dagens fas här, matcha den på klockans skiva.',
        'Tvinga aldrig kronan mellan kl. 21 och 03. Flytta först tiden förbi kl. 03.',
        'Standard 59-kuggs månfaser avviker med cirka en dag var 2,5:e år. Korrigering kräver att skivan flyttas ett klick.',
      ]
    },
  ],
  faq: [
    {
      question: 'Hur ställer jag in en månfas på min klocka?',
      answer: 'Hitta dagens månfas med detta verktyg. Vrid kronan (vanligtvis läge 2) tills månskivan visar matchande fas. Undvik att ställa in mellan kl. 21 och 03 när datummekanismen är i ingrepp.',
    },
    {
      question: 'Hur noggranna är mekaniska månfasklockor?',
      answer: 'De flesta använder ett 59-kuggs hjul som är korrekt inom ungefär en dag varannan år. Exklusiva klockor som Patek Philippe och A. Lange & Söhne uppnår en dags fel per 100+ år.',
    },
    {
      question: 'Vad är skillnaden mellan en synodisk och siderisk månad?',
      answer: 'Den sideriska månaden (27,3 dagar) är månens omloppsbana relativt stjärnorna. Den synodiska månaden (29,53 dagar) är tiden mellan identiska faser och är vad månfasklockor spårar.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Välj ett datum',
      text: 'Använd datumväljaren för att välja valfritt datum, dåtid eller framtid, och se månfasen.',
    },
    {
      name: 'Läs av fasdata',
      text: 'Korten visar fasnamn, belysningsprocent, månens ålder och cykelframsteg.',
    },
    {
      name: 'Hitta kommande händelser',
      text: 'Nästa fullmåne och nymåne visas automatiskt.',
    },
    {
      name: 'Ställ in din klocka',
      text: 'Använd den visade fasen för att ställa in din månfaskomplikation korrekt.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Hur ställer jag in en månfas på min klocka?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hitta dagens månfas med detta verktyg. Vrid kronan tills månskivan visar matchande fas. Undvik att ställa in mellan kl. 21 och 03.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Hur noggranna är mekaniska månfasklockor?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'De flesta använder ett 59-kuggs hjul som är korrekt inom ungefär en dag varannan år. Exklusiva klockor uppnår en dags fel per 100+ år.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Vad är skillnaden mellan en synodisk och siderisk månad?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Den sideriska månaden (27,3 dagar) är månens omloppsbana relativt stjärnorna. Den synodiska månaden (29,53 dagar) är tiden mellan identiska faser och är vad månfasklockor spårar.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Månfasvisualiserare',
      'operatingSystem': 'Alla',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Kräver HTML5. Kräver JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Så visualiserar du månfaser',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Välj ett datum',
          'text': 'Använd datumväljaren för att välja ett datum och se månfasen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Läs av fasdata',
          'text': 'Korten visar fasnamn, belysning, månens ålder och cykelframsteg.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ställ in din klocka',
          'text': 'Använd den visade fasen för att ställa in din månfaskomplikation.',
        },
      ],
    },
  ],
};
