import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Wat is het verschil tussen zonnetijd en siderische tijd?',
    answer: 'Zonnetijd is gebaseerd op de positie van de zon ten opzichte van de lokale meridiaan (duurt 24 uur), terwijl siderische tijd is gebaseerd op de rotatie van de aarde ten opzichte van verre achtergrondsterren (duurt 23 uur, 56 minuten, 4,09 seconden).',
  },
  {
    question: 'Waarom is een siderische dag korter dan een zonnedag?',
    answer: 'Terwijl de aarde om haar as draait, reist ze ook langs haar baan om de zon. Om weer naar de zon te wijzen, moet de aarde iets meer dan 360 graden draaien, wat ongeveer 3 minuten en 56 seconden toevoegt aan de dag vergeleken met een eenvoudige ster-uitgelijnde rotatie.',
  },
  {
    question: 'Hoe beïnvloedt de lengtegraad de lokale siderische tijd?',
    answer: 'Lokale Siderische Tijd wordt berekend door de lengtegraad van de waarnemer (omgezet in uren: 15 graden per uur) op te tellen bij de Greenwich Mean Sidereal Time (GMST). Elke graad oost voegt 4 minuten toe aan je lokale siderische klok.',
  },
];

const howTo = [
  {
    name: 'Stel je referentielengtegraad in',
    text: 'Pas de schuifregelaar aan naar je lokale lengtegraad. Dit lijnt de 24-uurs siderische schaal uit met je lokale meridiaan.',
  },
  {
    name: ' Observeer de zon- en siderische wijzers',
    text: 'Kijk naar de wijzerplaat: standaard zonnewijzers tonen UTC-tijd op de binnenste 12-uursschaal, terwijl de gouden wijzer en sterren de siderische tijd tonen op de buitenste 24-uursschaal.',
  },
  {
    name: 'Versnel de hemelse snelheid',
    text: 'Klik op de 200× of 5000× snelheidsvermenigvuldigers om de rotatie van de sterrenhemel te zien en de drift in real-time te zien accumuleren.',
  },
];

const title = 'Astronomische Siderische Tijd Tracker: Lokale Siderische Tijd Klok';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'siderische-tijd-tracker',
  title,
  description: 'Volg Greenwich Mean Sidereal Time (GMST) en Lokale Siderische Tijd (LST) met een artistiek astronomisch astrolabium wijzerplaat en een real-time stellaire drift simulator.',
  ui: {
    title: 'Siderische Tijd Tracker',
    longitudeLabel: 'Lengtegraad waarnemer',
    solarTimeLabel: 'Gecoördineerde Universele Tijd (UTC)',
    siderealTimeLabel: 'Lokale Siderische Tijd (LST)',
    differenceLabel: 'Stellaire-Zonne Drift',
    utcLabel: 'UTC Datum/Tijd',
    speedLabel: 'Hemelse Snelheid',
    speedNormal: '1× (Real-time)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Drift)',
    audioToggleLabel: 'Kosmische Klok Tikken',
    step1: 'Pas je lokale lengtegraad aan om de Lokale Siderische Tijd in real-time te zien verschuiven.',
    step2: 'Schakel de snelheidsvermenigvuldiger om de drift van de standaard zonnewijzer en de siderische sterrenbol te zien.',
    step3: 'Schakel Kosmische Klokken in om het verschil te horen tussen een standaard tik en een astronomisch uur.',
    tipTitle: 'Astronomische Drift',
    tipContent: 'Omdat de aarde om de zon draait, lopen standaard zonnewijzers 3 minuten en 56 seconden per dag achter op de siderische tijd, precies 24 uur driftend over een volledig jaar.',
    useLocationBtn: 'Gebruik huidige locatie',
    hemisphereLabel: 'Stellaire Halfrond',
    hemisphereNorth: 'Noord (Grote Beer)',
    hemisphereSouth: 'Zuid (Zuiderkruis)',
    longitudeFormatLabel: 'Lengtegraad formaat',
    longitudeFormatDecimal: 'Decimale graden',
    longitudeFormatDMS: 'Graden/Minuten',
  },
  seo: [
    { type: 'title', text: 'Wat is siderische tijd?', level: 2 },
    { type: 'paragraph', html: 'Siderische tijd is een tijdmeetsysteem dat astronomen gebruiken om hemelobjecten te lokaliseren. Een siderische dag duurt ongeveer 23 uur, 56 minuten en 4,09 seconden. Het is de tijd die de aarde nodig heeft voor één volledige rotatie om haar as ten opzichte van de lentenachtevening of de verre sterren, in plaats van de zon.' },
    { type: 'title', text: 'Zonnedag vs. Siderische Dag', level: 3 },
    { type: 'paragraph', html: 'Een zonnedag meet de tijd tussen opeenvolgende doorgangen van de zon door de lokale meridiaan. Omdat de aarde elke dag ongeveer 1/365 van haar baan om de zon aflegt, moet ze iets meer dan 360 graden draaien om weer met de zon uit te lijnen. Een siderische dag is een echte 360-graden rotatie ten opzichte van de sterren, waardoor deze 3 minuten en 56 seconden korter is.' },
    { type: 'title', text: 'Waarom astronomen en horlogemakers het belangrijk vinden', level: 3 },
    { type: 'paragraph', html: 'Voor astronomen staat een ster altijd op dezelfde positie aan de hemel op dezelfde siderische tijd. Om sterren te volgen, moeten telescoopmontages precies één keer per siderische dag roteren. High-end horlogemerken (zoals Patek Philippe, Vacheron Constantin en IWC) maken ultra-complexe astronomische horloges met siderische tandwieltreinen om de LST direct om de pols te volgen.' },
    { type: 'title', text: 'Stellaire vs. Zonnedrift Referentietabel', level: 3 },
    {
      type: 'table', headers: ['Verstreken dagen', 'Siderische tijd vooruit', 'Graden rotatieverschuiving', 'Sterrenbeeld drift'], rows: [
        ['1 dag', '3m 56s', '0,986°', 'Lichte verschuiving west'],
        ['15 dagen', '59m 0s', '14,79°', 'Half sterrenbeeld verschuiving'],
        ['30 dagen', '1h 58m', '29,58°', 'Eén volledig sterrenbeeld verschuiving'],
        ['90 dagen', '5h 54m', '88,74°', 'Eén volledig seizoen verschuiving'],
        ['180 dagen', '11h 48m', '177,48°', 'Tegenovergestelde sterrenbeelden zichtbaar om middernacht'],
        ['365 dagen', '24h 0m', '360,00°', 'Volledige cyclus, steruitlijning gereset'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Berekend vanaf J2000 Epoche', icon: 'mdi:creation-outline', badge: 'BEREKENING', html: 'Lokale Siderische Tijd wordt berekend door UTC-tijd om te zetten naar Juliaanse Datum (dagen sinds -4712), het vinden van de Greenwich Mean Sidereal Time en het toepassen van je lengtegraad (15 graden per uur). Onze tool gebruikt het hoge-precisie IAU J2000 lineaire model voor real-time tracking.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
