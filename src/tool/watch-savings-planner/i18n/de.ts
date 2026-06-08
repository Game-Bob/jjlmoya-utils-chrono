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
    currency: 'EUR',
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
    { type: 'title', text: 'Sparzielplaner für Uhren - Verfolge deinen nächsten Uhrenkauf', level: 2 },
    { type: 'paragraph', html: 'Für eine Uhr zu sparen ist eine Reise. Ob es eine <strong>Vintage Speedmaster</strong>, eine <strong>Submariner</strong> oder eine <strong>Grand Seiko</strong> ist - ein klarer Sparplan verwandelt den Traum in einen Zeitplan. Dieses Tool hilft dir, deinen Fortschritt zu visualisieren, deine monatlichen Beiträge anzupassen und genau zu sehen, wann du mit deinem heiligen Gral aus dem Laden gehen wirst.' },
    { type: 'title', text: 'Warum ein Sparplan für Uhrensammler wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Uhren sammeln ist ein Geduldsspiel. Die Preise begehrter Modelle steigen stetig, und Impulskäufe führen oft zu Reue. Ein strukturierter Sparansatz hält dich diszipliniert, verhindert finanzielle Belastung und lässt den endgültigen Kauf wie eine Belohnung wirken. Außerdem steigert die tägliche Verfolgung deines Fortschritts die Vorfreude und macht das Auspacken noch süßer.' },
    { type: 'title', text: 'Wie du realistische Sparziele für Uhren setzt', level: 3 },
    { type: 'paragraph', html: 'Beginne mit dem Gesamtpreis inklusive Steuern und Versand. Teile ihn dann durch den Betrag, den du bequem pro Monat zurücklegen kannst. Als Faustregel gilt: Widme nicht mehr als <strong>10-15 % deines verfügbaren Einkommens</strong> dem Uhrensparen. Falls der Zeitraum zu lang erscheint, unterteile ihn in kleinere Meilensteine - oder erkunde günstigere Alternativen in derselben Stilrichtung.' },
    { type: 'title', text: 'Die Psychologie der Zielverfolgung', level: 3 },
    { type: 'paragraph', html: 'Visuelle Fortschrittsanzeigen lösen Dopaminausschüttung aus - denselben Nervenbotenstoff, der das Sammeln so befriedigend macht. Jedes Mal, wenn du einen neuen Beitrag erfasst und den Fortschrittsring sich füllen siehst, verstärkst du die Gewohnheit. Deshalb wirken regelmäßige kleine Sparbeträge oft besser als unregelmäßige Großeinzahlungen - das Ritual selbst wird Teil des Sammelerlebnisses.' },
  ],
  faq: [
    {
      question: 'Wie viel sollte ich pro Monat für eine Uhr sparen?',
      answer: 'Strebe 10-15 % deines verfügbaren monatlichen Einkommens an. Der Schlüssel ist Beständigkeit - selbst 100 $ pro Monat ergeben 1.200 $ pro Jahr. Passe den Betrag an deinen Zeitplan an: kürzere Ziele erfordern höhere monatliche Beiträge.',
    },
    {
      question: 'Sollte ich für eine Uhr auf einmal sparen oder für mehrere?',
      answer: 'Eine nach der anderen ist meist effektiver. Konzentration schafft Schwung. Sobald du dein erstes Ziel erreichst, überträgst du die Disziplin auf das nächste. Dieser Planer unterstützt jedoch mehrere Ziele, damit du Zeitpläne vergleichen kannst.',
    },
    {
      question: 'Was ist, wenn der Uhrenpreis steigt, während ich spare?',
      answer: 'Gute Frage. Überprüfe den aktuellen Marktpreis alle paar Monate und aktualisiere dein Ziel. Wenn die Preise schnell steigen, erwäge, deinen monatlichen Betrag zu erhöhen oder den Zeitplan zu verkürzen, um den aktuellen Preis zu sichern.',
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
      name: 'Fortschritt überwachen',
      text: 'Beobachte, wie sich der Fortschrittsring füllt, während du deine Ersparnisse aktualisierst. Passe die monatlichen Beträge jederzeit an.',
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
          'name': 'Wie viel sollte ich pro Monat für eine Uhr sparen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Strebe 10-15 % deines verfügbaren monatlichen Einkommens an. Der Schlüssel ist Beständigkeit - selbst 100 $ pro Monat ergeben 1.200 $ pro Jahr.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich für eine Uhr auf einmal sparen oder für mehrere?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Eine nach der anderen ist meist effektiver. Konzentration schafft Schwung. Sobald du dein erstes Ziel erreichst, überträgst du diese Disziplin auf das nächste.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist, wenn der Uhrenpreis steigt, während ich spare?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Überprüfe den aktuellen Marktpreis alle paar Monate und aktualisiere dein Ziel. Erwäge, deinen monatlichen Betrag zu erhöhen, wenn die Preise schnell steigen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Sparzielplaner für Uhren',
      'operatingSystem': 'Alle',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Wie man für einen Uhrenkauf spart',
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
          'name': 'Fortschritt überwachen',
          'text': 'Beobachte, wie sich der Fortschrittsring füllt, während du deine Ersparnisse aktualisierst.',
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
