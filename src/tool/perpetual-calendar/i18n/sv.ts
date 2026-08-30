import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Vad är en evighetskalender i en klocka?',
    answer: 'En evighetskalender är en mekanisk klockkomplikation som automatiskt visar rätt datum, dag, månad och månfas, med hänsyn till månader av olika längd och skottår. Den är programmerad att vara korrekt fram till år 2100 (nästa sekelår som inte är delbart med 400).',
  },
  {
    question: 'Hur vet en evighetskalender vilka år som är skottår?',
    answer: 'Det mekaniska programmet använder ett 48-månaders hjul (4 år) med en specialdesignad kam som tar hänsyn till 29 februari. Mekanismen vet att år som är delbara med 100 inte är skottår om de inte också är delbara med 400. De flesta evighetskalendrar är korrekta fram till 2100, då en endagskorrigering kommer att behövas.',
  },
  {
    question: 'Vad är skillnaden mellan en evighetskalender och en årskalender?',
    answer: 'En årskalender kräver en manuell korrigering per år (i slutet av februari), medan en evighetskalender automatiskt hanterar skottår och fortsätter korrekt i decennier. Evighetskalendrar är mekaniskt betydligt mer komplexa.',
  },
];

const howTo = [
  {
    name: 'För fram datumet',
    text: 'Använd knapparna D (dag), M (månad) och Å (år) för att föra fram kalendern. Se datumvisaren röra sig och månadsfönstret ändras.',
  },
  {
    name: 'Observera skottårsövergångar',
    text: 'Gå igenom februari ett skottår (t.ex. 2024) för att se hoppet från 29 till 1 mars. Prova ett icke-skottår för att se hoppet från 28 till 1 mars.',
  },
  {
    name: 'Använd automatisk uppspelning',
    text: 'Tryck på play för att kalendern automatiskt ska gå framåt. Detta visar hela cykeln av månadslängder och månfasens progression.',
  },
];

const title = 'Evighetskalender Simulator: Interaktiv Klockkomplikation';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'evighetskalender',
  title,
  description: 'Utforska det mekaniska geniet hos en evighetskalenderkomplikation. Visualisera datum, dag, månad, skottårscykel och månfas med en animerad urtavla.',
  ui: {
    title: 'Evighetskalender Simulator',
    dateLabel: 'Datum',
    dayLabel: 'Dag',
    monthLabel: 'Månad',
    yearLabel: 'År',
    leapYearLabel: 'Skottår',
    moonPhaseLabel: 'Månfas',
    weekdayLabel: 'Veckodag',
    advanceDay: 'Dag Framåt',
    advanceMonth: 'Månad Framåt',
    advanceYear: 'År Framåt',
    autoPlay: 'Auto',
    resetBtn: 'Idag',
    dayNames: 'Söndag,Måndag,Tisdag,Onsdag,Torsdag,Fredag,Lördag',
    monthNames: 'Januari,Februari,Mars,April,Maj,Juni,Juli,Augusti,September,Oktober,November,December',
    tipTitle: 'Tips',
    tipContent: 'De flesta evighetskalenderklockor använder ett 48-månaders programhjul med skåror av varierande längd. Februari har den kortaste skåran (28 dagar i normalår, 29 i skottår), medan 30- och 31-dagars månader har progressivt längre skåror.',
    step1: 'Gå dag för dag förbi februari för att se hur mekanismen hanterar månadsövergångar.',
    step2: 'Se månfasindikatorn fortskrida genom sin 29,5-dagars cykel.',
    step3: 'Jämför februariövergångar mellan skottår och normalår för att förstå 4-årscykeln.',
  },
  seo: [
    { type: 'title', text: 'Evighetskalender Simulator: Interaktiv Komplikation', level: 2 },
    { type: 'paragraph', html: '<strong>Evighetskalendern</strong> är en av de mest prestigefyllda komplikationerna inom haute horlogerie. Denna interaktiva simulator visualiserar hur en mekanisk evighetskalender håller reda på datum, dag, månad, skottår och månfas - utan manuell korrigering i decennier. Utforska 48-månaders växelprogrammet, se hur februariövergångar fungerar och förstå den gregorianska kalenderlogiken inbyggd i dessa mästerverk av mikromekanik.' },
    { type: 'title', text: 'Hur en evighetskalender fungerar', level: 3 },
    { type: 'paragraph', html: 'En mekanisk evighetskalender använder ett <strong>programhjul</strong> med skåror av olika djup som representerar månader av olika längd. En känselarm faller i varje skåra; en djupare skåra signalerar en kort månad (28-29 dagar) och utlöser mekanismen att hoppa till 1:a i nästa månad efter rätt antal dagar. Ett <strong>48-månaders hjul</strong> hanterar den 4-åriga skottårscykeln, med en extra skåra för 29 februari. Programmet vet att sekelår (t.ex. 2100) hoppar över skottåret om de inte är delbara med 400.' },
        { type: 'title', text: 'Referens för kalenderlogik', level: 3 },
    {"type":"table","headers":["Månad","Dagar","Skåpdjup","Skottårsåtgärd"],"rows":[["Januari","31","Djup","Normal"],["Februari","28 / 29","Grundast","Extra dag vart 4:e år"],["Mars","31","Djup","Normal"],["April","30","Medel","Normal"],["Maj","31","Djup","Normal"],["Juni","30","Medel","Normal"],["Juli","31","Djup","Normal"],["Augusti","31","Djup","Normal"],["September","30","Medel","Normal"],["Oktober","31","Djup","Normal"],["November","30","Medel","Normal"],["December","31","Djup","Normal"]]},
{ type: 'title', text: 'Jämförelse: Evighetskalender vs Årskalender', level: 3 },
    {
      type: 'table', headers: ['Egenskap', 'Årskalender', 'Evighetskalender'], rows: [
        ['Kräver justering', 'En gång per år (1 Mar)', 'En gång per sekel (2100)'],
        ['Skottårshantering', 'Manuell', 'Automatisk (4-årskam)'],
        ['Månadsigenkänning', '30 vs 31 dagar', 'Full 28/29/30/31'],
        ['Komplexitet', 'Måttlig (~50 delar)', 'Mycket hög (~200+ delar)'],
        ['Prisintervall', '3 000-15 000 €', '20 000-500 000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktiv Kalender Simulator', icon: 'mdi:calendar-month', badge: 'URMAKERI', html: 'Detta verktyg simulerar kalendermekanismen hos en evighetskalenderklocka. Den animerade urtavlan visar datumvisaren, månadsfönstret, dagsubdialen, månfasen och skottårsindikatorn. Använd kontrollerna för att bläddra genom dagar, månader eller år och observera den mekaniska logiken i aktion.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
