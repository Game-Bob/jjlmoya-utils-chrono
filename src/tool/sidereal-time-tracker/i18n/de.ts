import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Was ist der Unterschied zwischen Sonnenzeit und siderischer Zeit?',
    answer: 'Die Sonnenzeit basiert auf der Position der Sonne relativ zum lokalen Meridian (dauert 24 Stunden), während die siderische Zeit auf der Erdrotation relativ zu fernen Hintergrundsternen basiert (dauert 23 Stunden, 56 Minuten, 4,09 Sekunden).',
  },
  {
    question: 'Warum ist ein siderischer Tag kürzer als ein Sonnentag?',
    answer: 'Während die Erde sich um ihre Achse dreht, wandert sie auch auf ihrer Umlaufbahn um die Sonne. Um der Sonne wieder zugewandt zu sein, muss sich die Erde etwas mehr als 360 Grad drehen, was im Vergleich zu einer rein sternenbezogenen Rotation etwa 3 Minuten und 56 Sekunden mehr braucht.',
  },
  {
    question: 'Wie beeinflusst die Länge die lokale siderische Zeit?',
    answer: 'Die lokale siderische Zeit wird berechnet, indem die Länge des Beobachters (umgerechnet in Stunden: 15 Grad pro Stunde) zur Greenwich Mean Sidereal Time (GMST) addiert wird. Jeder Grad nach Osten fügt 4 Minuten zur lokalen siderischen Uhr hinzu.',
  },
];

const howTo = [
  {
    name: 'Referenzlänge einstellen',
    text: 'Passen Sie den Schieberegler auf Ihre lokale Länge an. Dadurch wird die 24-Stunden-Skala auf Ihren lokalen Meridian ausgerichtet.',
  },
  {
    name: 'Sonnen- und Sternzeiger beobachten',
    text: 'Betrachten Sie das Zifferblatt: Normale Sonnenzeiger zeigen die UTC-Zeit auf der inneren 12-Stunden-Skala an, während der goldene Zeiger und die Sterne die siderische Zeit auf der äußeren 24-Stunden-Skala anzeigen.',
  },
  {
    name: 'Geschwindigkeit erhöhen',
    text: 'Klicken Sie auf 200× oder 5000× Geschwindigkeitsmultiplikator, um die Drehung des Sternhimmels zu beobachten und die Drift in Echtzeit wachsen zu sehen.',
  },
];

const title = 'Astronomischer Siderischer Zeitmesser: Lokale Sternzeituhr';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'astronomischer-siderischer-zeitmesser',
  title,
  description: 'Verfolgen Sie die Greenwich Mean Sidereal Time (GMST) und die lokale siderische Zeit (LST) mit einem künstlerischen astronomischen Astrolabium-Zifferblatt und einem Echtzeit-Sterndriftsimulator.',
  ui: {
    title: 'Astronomischer Siderischer Zeitmesser',
    longitudeLabel: 'Beobachterlänge',
    solarTimeLabel: 'Koordinierte Weltzeit (UTC)',
    siderealTimeLabel: 'Lokale Siderische Zeit (LST)',
    differenceLabel: 'Stern-Sonnen-Drift',
    utcLabel: 'UTC Datum/Uhrzeit',
    speedLabel: 'Geschwindigkeit',
    speedNormal: '1× (Echtzeit)',
    speedFast: '200× (Zeitraffer)',
    speedVeryFast: '5000× (Drift)',
    audioToggleLabel: 'Kosmische Klangtöne',
    step1: 'Passen Sie Ihre lokale Länge an, um die Verschiebung der lokalen siderischen Zeit in Echtzeit zu sehen.',
    step2: 'Schalten Sie den Geschwindigkeitsmultiplikator um, um die Drift des Sonnenzeigers und der Sternsphäre zu beobachten.',
    step3: 'Aktivieren Sie die kosmischen Klangtöne, um den Unterschied zwischen einem normalen Ticken und einer astronomischen Stunde zu hören.',
    tipTitle: 'Astronomische Drift',
    tipContent: 'Weil die Erde die Sonne umkreist, hinken normale Sonnenuhren der siderischen Zeit um 3 Minuten und 56 Sekunden pro Tag hinterher und driften über ein ganzes Jahr um genau 24 Stunden.',
    useLocationBtn: 'Aktuellen Standort verwenden',
    hemisphereLabel: 'Sternhalbkugel',
    hemisphereNorth: 'Nord (Großer Bär)',
    hemisphereSouth: 'Süd (Kreuz)',
    longitudeFormatLabel: 'Längenformat',
    longitudeFormatDecimal: 'Dezimalgrad',
    longitudeFormatDMS: 'Grad/Minuten',
  },
  seo: [
    { type: 'title', text: 'Was ist siderische Zeit?', level: 2 },
    { type: 'paragraph', html: 'Siderische Zeit ist ein Zeitmesssystem, das Astronomen verwenden, um Himmelsobjekte zu lokalisieren. Ein siderischer Tag dauert ungefähr 23 Stunden, 56 Minuten und 4,09 Sekunden. Es ist die Zeit, die die Erde für eine vollständige Drehung um ihre Achse relativ zur Tagundnachtgleiche oder zu den fernen Sternen benötigt, nicht zur Sonne.' },
    { type: 'title', text: 'Sonnentag vs. Siderischer Tag', level: 3 },
    { type: 'paragraph', html: 'Ein Sonnentag misst die Zeit zwischen aufeinanderfolgenden Durchgängen der Sonne durch den lokalen Meridian. Weil die Erde täglich etwa 1/365 ihrer Umlaufbahn um die Sonne zurücklegt, muss sie sich etwas mehr als 360 Grad drehen, um sich wieder an der Sonne auszurichten. Ein siderischer Tag ist eine echte 360-Grad-Drehung relativ zu den Sternen und ist daher 3 Minuten und 56 Sekunden kürzer.' },
    { type: 'title', text: 'Warum Astronomen und Uhrmacher sich dafür interessieren', level: 3 },
    { type: 'paragraph', html: 'Für Astronomen steht ein Stern zur gleichen siderischen Zeit immer an derselben Position am Himmel. Um Sterne zu verfolgen, müssen Teleskopmontierungen genau einmal pro siderischem Tag rotieren. Hochwertige Uhrenmarken (wie Patek Philippe, Vacheron Constantin und IWC) schaffen extrem komplizierte astronomische Uhren mit siderischen Räderwerken, die die LST direkt am Handgelenk anzeigen.' },
    { type: 'title', text: 'Stern und Sonnendrift Referenztabelle', level: 3 },
    {
      type: 'table', headers: ['Vergangene Tage', 'Siderische Zeit voraus', 'Grad der Rotationsverschiebung', 'Sternbild-Drift'], rows: [
        ['1 Tag', '3m 56s', '0,986°', 'Leichte Westverschiebung'],
        ['15 Tage', '59m 0s', '14,79°', 'Halbe Tierkreiszeichen-Verschiebung'],
        ['30 Tage', '1h 58m', '29,58°', 'Eine ganze Tierkreiszeichen-Verschiebung'],
        ['90 Tage', '5h 54m', '88,74°', 'Eine ganze Jahreszeit-Verschiebung'],
        ['180 Tage', '11h 48m', '177,48°', 'Gegenüberliegende Sternbilder um Mitternacht sichtbar'],
        ['365 Tage', '24h 0m', '360,00°', 'Kompletter Zyklus, Sternausrichtung zurückgesetzt'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Berechnet aus der J2000 Epoche', icon: 'mdi:creation-outline', badge: 'BERECHNUNG', html: 'Die lokale siderische Zeit wird berechnet, indem die UTC-Zeit in das julianische Datum (Tage seit -4712) umgewandelt wird, die Greenwich Mean Sidereal Time ermittelt wird und Ihre Länge (15 Grad pro Stunde) angewendet wird. Unser Tool verwendet das hochpräzise IAU J2000 lineare Modell für die Echtzeitverfolgung.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
