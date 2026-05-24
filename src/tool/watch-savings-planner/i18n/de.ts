import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'uhren-sparplaner',
  title: 'Sparzielplaner für Uhren',
  description: 'Lege Sparziele für deinen nächsten Uhrenkauf fest und verfolge sie. Visualisiere Fortschritte, berechne Zeitpläne und bleib motiviert.',
  ui: {
    title: 'Sparzieleinstellungen',
    addGoalTitle: 'Neues Sparziel',
    goalNameLabel: 'Uhr',
    goalNamePlaceholder: 'z.B. Rolex Submariner',
    targetPriceLabel: 'Zielpreis',
    currentSavingsLabel: 'Gespart',
    monthlyLabel: 'Pro Monat',
    addButton: 'Ziel hinzufügen',
    cancelButton: 'Abbrechen',
    goalsEmpty: 'Noch keine Sparziele',
    goalsEmptySub: 'Setz dein erstes Uhrenziel und leg los!',
    monthsToGoal: 'Zeit bis zum Ziel',
    yearsToGoal: 'Jahre bis zum Ziel',
    month: 'Mo',
    months: 'Mte',
    year: 'J',
    totalSaved: 'Gesamt gespart',
    totalGoals: 'Ziele',
    achieved: 'Erreicht',
    percentLabel: 'Gespart',
    deleteGoal: 'Löschen',
    editGoal: 'Bearbeiten',
    saveGoal: 'Speichern',
    currency: '$',
    summaryTitle: 'Zusammenfassung',
    goalAchieved: 'Erreicht!',
    goalProgress: 'Fortschritt',
    congratsTitle: 'Glückwunsch!',
    congratsDesc: 'Du hast dein Sparziel erreicht!',
    monthlyContribution: 'Monatlich',
    targetDate: 'Zieldatum',
    adjustMonthly: 'Monatsrate anpassen',
  },
  seo: [
    { type: 'title', text: 'Sparzielplaner für Uhren \u2014 Verfolge deinen nächsten Uhrenkauf', level: 2 },
    { type: 'paragraph', html: 'F\u00fcr eine Uhr zu sparen ist eine Reise. Ob es eine <strong>Vintage Speedmaster</strong>, eine <strong>Submariner</strong> oder eine <strong>Grand Seiko</strong> ist \u2014 ein klarer Sparplan verwandelt den Traum in einen Zeitplan. Dieses Tool hilft dir, deinen Fortschritt zu visualisieren, deine monatlichen Beitr\u00e4ge anzupassen und genau zu sehen, wann du mit deinem heiligen Gral aus dem Laden gehen wirst.' },
    { type: 'title', text: 'Warum ein Sparplan f\u00fcr Uhrensammler wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Uhren sammeln ist ein Geduldsspiel. Die Preise begehrter Modelle steigen stetig, und Impulsk\u00e4ufe f\u00fchren oft zu Reue. Ein strukturierter Sparansatz h\u00e4lt dich diszipliniert, verhindert finanzielle Belastung und l\u00e4sst den endg\u00fcltigen Kauf wie eine Belohnung wirken. Au\u00dferdem steigert die t\u00e4gliche Verfolgung deines Fortschritts die Vorfreude und macht das Auspacken noch s\u00fc\u00dfer.' },
    { type: 'title', text: 'Wie du realistische Sparziele f\u00fcr Uhren setzt', level: 3 },
    { type: 'paragraph', html: 'Beginne mit dem Gesamtpreis inklusive Steuern und Versand. Teile ihn dann durch den Betrag, den du bequem pro Monat zur\u00fccklegen kannst. Als Faustregel gilt: Widme nicht mehr als <strong>10\u201315 % deines verf\u00fcgbaren Einkommens</strong> dem Uhrensparen. Falls der Zeitraum zu lang erscheint, unterteile ihn in kleinere Meilensteine \u2014 oder erkunde g\u00fcnstigere Alternativen in derselben Stilrichtung.' },
    { type: 'title', text: 'Die Psychologie der Zielverfolgung', level: 3 },
    { type: 'paragraph', html: 'Visuelle Fortschrittsanzeigen l\u00f6sen Dopaminaussch\u00fcttung aus \u2014 denselben Nervenbotenstoff, der das Sammeln so befriedigend macht. Jedes Mal, wenn du einen neuen Beitrag erfasst und den Fortschrittsring sich f\u00fcllen siehst, verst\u00e4rkst du die Gewohnheit. Deshalb wirken regelm\u00e4\u00dfige kleine Sparbetr\u00e4ge oft besser als unregelm\u00e4\u00dfige Gro\u00dfeinzahlungen \u2014 das Ritual selbst wird Teil des Sammelerlebnisses.' },
  ],
  faq: [
    {
      question: 'Wie viel sollte ich pro Monat f\u00fcr eine Uhr sparen?',
      answer: 'Strebe 10\u201315 % deines verf\u00fcgbaren monatlichen Einkommens an. Der Schl\u00fcssel ist Best\u00e4ndigkeit \u2014 selbst 100 $ pro Monat ergeben 1.200 $ pro Jahr. Passe den Betrag an deinen Zeitplan an: k\u00fcrzere Ziele erfordern h\u00f6here monatliche Beitr\u00e4ge.',
    },
    {
      question: 'Sollte ich f\u00fcr eine Uhr auf einmal sparen oder f\u00fcr mehrere?',
      answer: 'Eine nach der anderen ist meist effektiver. Konzentration schafft Schwung. Sobald du dein erstes Ziel erreichst, \u00fcbertr\u00e4gst du die Disziplin auf das n\u00e4chste. Dieser Planer unterst\u00fctzt jedoch mehrere Ziele, damit du Zeitpl\u00e4ne vergleichen kannst.',
    },
    {
      question: 'Was ist, wenn der Uhrenpreis steigt, w\u00e4hrend ich spare?',
      answer: 'Gute Frage. \u00dcberpr\u00fcfe den aktuellen Marktpreis alle paar Monate und aktualisiere dein Ziel. Wenn die Preise schnell steigen, erw\u00e4ge, deinen monatlichen Betrag zu erh\u00f6hen oder den Zeitplan zu verk\u00fcrzen, um den aktuellen Preis zu sichern.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Ziel setzen',
      text: 'Gib den Namen der Uhr und den Gesamtpreis inklusive Steuern und Versand ein.',
    },
    {
      name: 'Sparen verfolgen',
      text: 'Erfasse, wie viel du bereits gespart hast und wie viel du monatlich zur Seite legen kannst.',
    },
    {
      name: 'Fortschritt \u00fcberwachen',
      text: 'Beobachte, wie sich der Fortschrittsring f\u00fcllt, w\u00e4hrend du deine Ersparnisse aktualisierst. Passe die monatlichen Betr\u00e4ge jederzeit an.',
    },
    {
      name: 'Feiern',
      text: 'Wenn der Ring 100 % erreicht, hast du dein Ziel geschafft. Zeit, diese Uhr zu kaufen!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie viel sollte ich pro Monat f\u00fcr eine Uhr sparen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Strebe 10\u201315 % deines verf\u00fcgbaren monatlichen Einkommens an. Der Schl\u00fcssel ist Best\u00e4ndigkeit \u2014 selbst 100 $ pro Monat ergeben 1.200 $ pro Jahr.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich f\u00fcr eine Uhr auf einmal sparen oder f\u00fcr mehrere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eine nach der anderen ist meist effektiver. Konzentration schafft Schwung. Sobald du dein erstes Ziel erreichst, \u00fcbertr\u00e4gst du diese Disziplin auf das n\u00e4chste.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist, wenn der Uhrenpreis steigt, w\u00e4hrend ich spare?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '\u00dcberpr\u00fcfe den aktuellen Marktpreis alle paar Monate und aktualisiere dein Ziel. Erw\u00e4ge, deinen monatlichen Betrag zu erh\u00f6hen, wenn die Preise schnell steigen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Sparzielplaner f\u00fcr Uhren',
      'operatingSystem': 'Alle',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man f\u00fcr einen Uhrenkauf spart',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Ziel setzen',
          'text': 'Gib den Namen der Uhr und den Gesamtpreis inklusive Steuern und Versand ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sparen verfolgen',
          'text': 'Erfasse, wie viel du bereits gespart hast und wie viel du monatlich zur Seite legen kannst.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Fortschritt \u00fcberwachen',
          'text': 'Beobachte, wie sich der Fortschrittsring f\u00fcllt, w\u00e4hrend du deine Ersparnisse aktualisierst.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Feiern',
          'text': 'Wenn der Ring 100 % erreicht, hast du dein Ziel geschafft. Zeit, diese Uhr zu kaufen!',
        },
      ],
    },
  ],
};
