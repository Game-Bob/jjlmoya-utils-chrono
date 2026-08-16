import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Was ist ein ewiger Kalender in einer Uhr?',
    answer: 'Ein ewiger Kalender ist eine mechanische Uhrenkomplikation, die automatisch das korrekte Datum, den Wochentag, den Monat und die Mondphase anzeigt und dabei unterschiedliche Monatslängen und Schaltjahre berücksichtigt. Er ist bis zum Jahr 2100 programmiert (dem nächsten Jahrhundertjahr, das nicht durch 400 teilbar ist).',
  },
  {
    question: 'Wie erkennt ein ewiger Kalender Schaltjahre?',
    answer: 'Das mechanische Programm verwendet ein 48-Monats-Getriebe (4 Jahre) mit einer speziell geformten Kurvenscheibe, die den Schalttag am 29. Februar berücksichtigt. Der Mechanismus weiß, dass durch 100 teilbare Jahre keine Schaltjahre sind, es sei denn, sie sind auch durch 400 teilbar. Die meisten ewigen Kalender sind bis 2100 genau und benötigen dann eine Eintageskorrektur.',
  },
  {
    question: 'Was ist der Unterschied zwischen einem ewigen und einem Jahreskalender?',
    answer: 'Ein Jahreskalender benötigt eine manuelle Korrektur pro Jahr (Ende Februar), während ein ewiger Kalender Schaltjahre automatisch behandelt und jahrzehntelang korrekt läuft. Ewige Kalender sind mechanisch deutlich komplexer.',
  },
];

const howTo = [
  {
    name: 'Datum vorwärts bewegen',
    text: 'Verwenden Sie die Tasten D (Tag), M (Monat) und Y (Jahr), um den Kalender vorwärzubewegen. Beobachten Sie, wie sich der Datumszeiger bewegt und sich das Monatsfenster ändert.',
  },
  {
    name: 'Schaltjahresübergänge beobachten',
    text: 'Bewegen Sie sich durch den Februar eines Schaltjahres (z.B. 2024), um den Sprung vom 29. auf den 1. März zu sehen. Versuchen Sie es mit einem Nicht-Schaltjahr, um den Sprung vom 28. auf den 1. März zu beobachten.',
  },
  {
    name: 'Automatischen Ablauf nutzen',
    text: 'Drücken Sie auf Play, um den Kalender automatisch vorlaufen zu lassen. So sehen Sie den gesamten Zyklus der Monatslängen und den Fortschritt der Mondphase.',
  },
];

const title = 'Ewiger Kalender Simulator: Interaktive Uhrenkomplikation';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'ewigerkalender',
  title,
  description: 'Entdecken Sie das mechanische Genie einer ewigen Kalender-Uhrenkomplikation. Visualisieren Sie Datum, Wochentag, Monat, Schaltjahrzyklus und Mondphase mit einem animierten Zifferblatt.',
  ui: {
    title: 'Ewiger Kalender Simulator',
    dateLabel: 'Datum',
    dayLabel: 'Tag',
    monthLabel: 'Monat',
    yearLabel: 'Jahr',
    leapYearLabel: 'Schaltjahr',
    moonPhaseLabel: 'Mondphase',
    weekdayLabel: 'Wochentag',
    advanceDay: 'Tag vor',
    advanceMonth: 'Monat vor',
    advanceYear: 'Jahr vor',
    autoPlay: 'Auto',
    resetBtn: 'Heute',
    dayNames: 'Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag',
    monthNames: 'Januar,Februar,März,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember',
    tipTitle: 'Tipp',
    tipContent: 'Die meisten ewigen Kalenderuhren verwenden ein 48-Monats-Programmräderwerk mit Kerben unterschiedlicher Länge. Der Februar hat die kürzeste Kerbe (28 Tage in Normaljahren, 29 in Schaltjahren), während 30- und 31-Tage-Monate progressiv längere Kerben haben.',
    step1: 'Bewegen Sie sich Tag für Tag durch den Februar, um zu sehen, wie der Mechanismus Monatsübergänge bewältigt.',
    step2: 'Verfolgen Sie den Fortschritt der Mondphasenanziege durch ihren 29,5-Tage-Zyklus.',
    step3: 'Vergleichen Sie die Februar-Übergänge von Schaltjahren und Normaljahren, um den 4-Jahres-Zyklus zu verstehen.',
  },
  seo: [
    { type: 'title', text: 'Ewiger Kalender Simulator: Interaktive Uhrenkomplikation', level: 2 },
    { type: 'paragraph', html: 'Der <strong>ewige Kalender</strong> ist eine der prestigeträchtigsten Komplikationen der Haute Horlogerie. Dieser interaktive Simulator visualisiert, wie ein mechanischer ewiger Kalender Datum, Wochentag, Monat, Schaltjahr und Mondphase verfolgt - jahrzehntelang ohne manuelle Korrektur. Erkunden Sie das 48-Monats-Getriebeprogramm, sehen Sie wie Februar-Übergänge funktionieren und verstehen Sie die in diesen Meisterwerken der Mikromechanik integrierte gregorianische Kalenderlogik.' },
    { type: 'title', text: 'Wie ein ewiger Kalender funktioniert', level: 3 },
    { type: 'paragraph', html: 'Ein mechanischer ewiger Kalender verwendet ein <strong>Programmräderwerk</strong> mit Kerben unterschiedlicher Tiefe, die die verschiedenen Monatslängen repräsentieren. Ein Abtasthebel fällt in jede Kerbe; eine tiefere Kerbe signalisiert einen kurzen Monat (28-29 Tage) und löst den Mechanismus aus, nach der korrekten Anzahl von Tagen auf den 1. des nächsten Monats vorzuspringen. Ein <strong>48-Monats-Getriebe</strong> bewältigt den 4-Jahres-Schaltjahrzyklus mit einer zusätzlichen Kerbe für den 29. Februar. Das Programm weiß, dass Jahrhundertjahre (z.B. 2100) das Schaltjahr auslassen, es sei denn, sie sind durch 400 teilbar.' },
    { type: 'title', text: 'Kalenderlogik-Referenz', level: 3 },
    {
      type: 'table', headers: ['Monat', 'Tage', 'Kerbentiefe', 'Schaltjahr-Aktion'], rows: [
        ['Januar', '31', 'Tief', 'Normal'],
        ['Februar', '28 / 29', 'Flachste', 'Zusatz-Tag alle 4 Jahre'],
        ['März', '31', 'Tief', 'Normal'],
        ['April', '30', 'Mittel', 'Normal'],
        ['Mai', '31', 'Tief', 'Normal'],
        ['Juni', '30', 'Mittel', 'Normal'],
        ['Juli', '31', 'Tief', 'Normal'],
        ['August', '31', 'Tief', 'Normal'],
        ['September', '30', 'Mittel', 'Normal'],
        ['Oktober', '31', 'Tief', 'Normal'],
        ['November', '30', 'Mittel', 'Normal'],
        ['Dezember', '31', 'Tief', 'Normal'],
      ]
    },
    { type: 'title', text: 'Vergleich: Ewiger vs. Jahreskalender', level: 3 },
    {
      type: 'table', headers: ['Merkmal', 'Jahreskalender', 'Ewiger Kalender'], rows: [
        ['Erfordert Korrektur', 'Einmal pro Jahr (1. März)', 'Einmal pro Jahrhundert (2100)'],
        ['Schaltjahrhandhabung', 'Manuell', 'Automatisch (4-Jahres-Nocken)'],
        ['Monatserkennung', '30 vs 31 Tage', 'Vollständig 28/29/30/31'],
        ['Komplexität', 'Mäßig (~50 Teile)', 'Sehr hoch (~200+ Teile)'],
        ['Preisspanne', '3.000-15.000 €', '20.000-500.000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Interaktiver Kalender Simulator', icon: 'mdi:calendar-month', badge: 'UHRMACHEREI', html: 'Dieses Tool simuliert den Kalendermechanismus einer ewigen Kalenderuhr. Das animierte Zifferblatt zeigt den Datumszeiger, das Monatsfenster, den Wochentag-Subdial, die Mondphase und den Schaltjahresindikator. Nutzen Sie die Steuerung, um durch Tage, Monate oder Jahre zu blättern und die mechanische Logik in Aktion zu beobachten.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
