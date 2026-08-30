import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Qu\'est-ce qu\'un calendrier perpétuel dans une montre?',
    answer: 'Un calendrier perpétuel est une complication horlogère mécanique qui affiche automatiquement la date, le jour, le mois et la phase de lune corrects, en tenant compte des mois de différentes longueurs et des années bissextiles. Il est programmé pour être précis jusqu\'en 2100 (la prochaine année séculaire non divisible par 400).',
  },
  {
    question: 'Comment un calendrier perpétuel connaît-il les années bissextiles?',
    answer: 'Le programme mécanique utilise un engrenage de 48 mois (4 ans) avec une came spécialement conçue qui tient compte du 29 février. Le mécanisme sait que les années divisibles par 100 ne sont pas bissextiles sauf si elles sont également divisibles par 400. La plupart des calendriers perpétuels sont précis jusqu\'en 2100, date à laquelle une correction d\'un jour sera nécessaire.',
  },
  {
    question: 'Quelle est la différence entre un calendrier perpétuel et un calendrier annuel?',
    answer: 'Un calendrier annuel nécessite une correction manuelle par an (fin février), tandis qu\'un calendrier perpétuel gère automatiquement les années bissextiles et continue correctement pendant des décennies. Les calendriers perpétuels sont mécaniquement bien plus complexes.',
  },
];

const howTo = [
  {
    name: 'Avancez la date',
    text: 'Utilisez les boutons J (jour), M (mois) et A (année) pour faire avancer le calendrier. Regardez l\'aiguille de date se déplacer et la fenêtre du mois changer.',
  },
  {
    name: 'Observez les transitions d\'année bissextile',
    text: 'Avancez à travers février d\'une année bissextile (ex. 2024) pour voir le saut du 29 au 1er mars. Essayez une année non bissextile pour voir le saut du 28 au 1er mars.',
  },
  {
    name: 'Utilisez la lecture automatique',
    text: 'Appuyez sur lecture pour faire avancer le calendrier automatiquement. Cela révèle le cycle complet des longueurs de mois et la progression de la phase lunaire.',
  },
];

const title = 'Simulateur de Calendrier Perpétuel: Complication Horlogère Interactive';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'calendrier-perpetuel',
  title,
  description: 'Explorez le génie mécanique d\'une complication de calendrier perpétuel. Visualisez la date, le jour, le mois, le cycle des années bissextiles et la phase lunaire avec un cadran animé.',
  ui: {
    title: 'Simulateur de Calendrier Perpétuel',
    dateLabel: 'Date',
    dayLabel: 'Jour',
    monthLabel: 'Mois',
    yearLabel: 'Année',
    leapYearLabel: 'Bissextile',
    moonPhaseLabel: 'Phase Lune',
    weekdayLabel: 'Semaine',
    advanceDay: 'Avancer Jour',
    advanceMonth: 'Avancer Mois',
    advanceYear: 'Avancer Année',
    autoPlay: 'Auto',
    resetBtn: 'Aujourd\'hui',
    dayNames: 'Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi',
    monthNames: 'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
    tipTitle: 'Astuce',
    tipContent: 'La plupart des montres à calendrier perpétuel utilisent une roue de programme de 48 mois avec des encoches de longueur variable. Février a l\'encoche la plus courte (28 jours en années communes, 29 en bissextiles), tandis que les mois de 30 et 31 jours ont des encoches progressivement plus longues.',
    step1: 'Avancez jour après jour passé février pour voir comment le mécanisme gère les transitions de fin de mois.',
    step2: 'Regardez l\'indicateur de phase lunaire progresser à travers son cycle de 29,5 jours.',
    step3: 'Comparez les transitions de février entre années bissextiles et communes pour comprendre le cycle de 4 ans.',
  },
  seo: [
    { type: 'title', text: 'Simulateur de Calendrier Perpétuel: Complication Interactif', level: 2 },
    { type: 'paragraph', html: 'Le <strong>calendrier perpétuel</strong> est l\'une des complications les plus prestigieuses de la haute horlogerie. Ce simulateur interactif visualise comment un calendrier perpétuel mécanique suit la date, le jour, le mois, l\'année bissextile et la phase lunaire - sans correction manuelle pendant des décennies. Explorez le programme d\'engrenage de 48 mois, voyez comment fonctionnent les transitions de février et comprenez la logique du calendrier grégorien intégrée dans ces chefs-d\'œuvre de micromécanique.' },
    { type: 'title', text: 'Comment fonctionne un calendrier perpétuel', level: 3 },
    { type: 'paragraph', html: 'Un calendrier perpétuel mécanique utilise une <strong>roue de programme</strong> avec des encoches de différentes profondeurs représentant les mois de différentes longueurs. Un levier de détection tombe dans chaque encoche; une encoche plus profonde signale un mois court (28-29 jours), déclenchant le mécanisme pour avancer au 1er du mois suivant après le nombre correct de jours. Un <strong>engrenage de 48 mois</strong> gère le cycle de 4 ans des années bissextiles, avec une encoche supplémentaire pour le 29 février. Le programme sait que les années séculaires (ex. 2100) sautent l\'année bissextile sauf si elles sont divisibles par 400.' },
        { type: 'title', text: 'Référence de logique calendaire', level: 3 },
    {"type":"table","headers":["Mois","Jours","Profondeur d'encoche","Action d'année bissextile"],"rows":[["Janvier","31","Profonde","Normal"],["Février","28 / 29","Plus superficielle","Jour supplémentaire tous les 4 ans"],["Mars","31","Profonde","Normal"],["Avril","30","Moyenne","Normal"],["Mai","31","Profonde","Normal"],["Juin","30","Moyenne","Normal"],["Juillet","31","Profonde","Normal"],["Août","31","Profonde","Normal"],["Septembre","30","Moyenne","Normal"],["Octobre","31","Profonde","Normal"],["Novembre","30","Moyenne","Normal"],["Décembre","31","Profonde","Normal"]]},
{ type: 'title', text: 'Comparaison: Calendrier Perpétuel vs Annuel', level: 3 },
    {
      type: 'table', headers: ['Caractéristique', 'Calendrier Annuel', 'Calendrier Perpétuel'], rows: [
        ['Nécessite ajustement', 'Une fois par an (1 Mars)', 'Une fois par siècle (2100)'],
        ['Gestion des bissextiles', 'Manuelle', 'Automatique (came 4 ans)'],
        ['Reconnaissance des mois', '30 vs 31 jours', 'Complet 28/29/30/31'],
        ['Complexité', 'Modérée (~50 pièces)', 'Très élevée (~200+ pièces)'],
        ['Fourchette de prix', '3 000-15 000 €', '20 000-500 000+ €'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Simulateur de Calendrier Interactif', icon: 'mdi:calendar-month', badge: 'HORLOGERIE', html: 'Cet outil simule le mécanisme calendaire d\'une montre à calendrier perpétuel. Le cadran animé montre l\'aiguille de date, la fenêtre de mois, le sous-cadran du jour, la phase lunaire et l\'indicateur d\'année bissextile. Utilisez les commandes pour avancer par jours, mois ou années et observez la logique mécanique en action.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
