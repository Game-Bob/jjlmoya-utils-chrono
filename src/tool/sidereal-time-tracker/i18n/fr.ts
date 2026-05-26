import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Quelle est la différence entre le temps solaire et le temps sidéral?',
    answer: 'Le temps solaire est basé sur la position du Soleil par rapport au méridien local (prend 24 heures), tandis que le temps sidéral est basé sur la rotation de la Terre par rapport aux étoiles lointaines (prend 23 heures, 56 minutes, 4,09 secondes).',
  },
  {
    question: 'Pourquoi un jour sidéral est-il plus court qu\'un jour solaire?',
    answer: 'Alors que la Terre tourne sur son axe, elle se déplace également sur son orbite autour du Soleil. Pour faire face au Soleil à nouveau, la Terre doit tourner légèrement plus de 360 degrés, ce qui ajoute environ 3 minutes et 56 secondes à la journée par rapport à une simple rotation alignée sur les étoiles.',
  },
  {
    question: 'Comment la longitude affecte-t-elle le temps sidéral local?',
    answer: 'Le temps sidéral local est calculé en ajoutant la longitude de l\'observateur (convertie en heures: 15 degrés par heure) au Temps Sidéral Moyen de Greenwich (GMST). Chaque degré vers l\'est ajoute 4 minutes à votre horloge sidérale locale.',
  },
];

const howTo = [
  {
    name: 'Réglez votre longitude de référence',
    text: 'Ajustez le curseur à votre longitude locale. Cela aligne l\'échelle sidérale de 24 heures sur votre méridien local.',
  },
  {
    name: 'Observez les aiguilles solaires et sidérales',
    text: 'Regardez le cadran: les aiguilles solaires standard indiquent l\'heure UTC sur le cadran intérieur de 12 heures, tandis que l\'aiguille dorée et les étoiles indiquent le temps sidéral sur l\'échelle extérieure de 24 heures.',
  },
  {
    name: 'Accélérez le rythme céleste',
    text: 'Cliquez sur les multiplicateurs de vitesse 200× ou 5000× pour regarder la sphère céleste tourner et voir la dérive s\'accumuler en temps réel.',
  },
];

const title = 'Traceur de Temps Sidéral Astronomique: Horloge de Temps Sidéral Local';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'traceur-temps-sideral',
  title,
  description: 'Suivez le Temps Sidéral Moyen de Greenwich (GMST) et le Temps Sidéral Local (LST) avec un cadran d\'astrolabe astronomique artistique et un simulateur de dérive stellaire en temps réel.',
  ui: {
    title: 'Traceur de Temps Sidéral',
    longitudeLabel: 'Longitude de l\'observateur',
    solarTimeLabel: 'Temps Universel Coordonné (UTC)',
    siderealTimeLabel: 'Temps Sidéral Local (LST)',
    differenceLabel: 'Dérive Stellaire-Solaire',
    utcLabel: 'Date/Heure UTC',
    speedLabel: 'Vitesse Céleste',
    speedNormal: '1× (Temps réel)',
    speedFast: '200× (Accéléré)',
    speedVeryFast: '5000× (Dérive)',
    audioToggleLabel: 'Tics de Cloche Cosmique',
    step1: 'Ajustez votre longitude locale pour voir le Temps Sidéral Local changer en temps réel.',
    step2: 'Activez le multiplicateur de vitesse pour observer la dérive de l\'aiguille solaire et de la sphère sidérale.',
    step3: 'Activez les Cloches Cosmiques pour entendre la différence entre un tic standard et un passage d\'heure astronomique.',
    tipTitle: 'Dérive Astronomique',
    tipContent: 'Parce que la Terre orbite autour du Soleil, les horloges solaires standard prennent du retard sur le temps sidéral de 3 minutes et 56 secondes par jour, dérivant exactement de 24 heures sur le cours d\'une année complète.',
    useLocationBtn: 'Utiliser la position actuelle',
    hemisphereLabel: 'Hémisphère Stellaire',
    hemisphereNorth: 'Nord (Grande Ourse)',
    hemisphereSouth: 'Sud (Croix)',
    longitudeFormatLabel: 'Format de longitude',
    longitudeFormatDecimal: 'Degrés décimaux',
    longitudeFormatDMS: 'Degrés/Minutes',
  },
  seo: [
    { type: 'title', text: 'Qu\'est-ce que le temps sidéral?', level: 2 },
    { type: 'paragraph', html: 'Le temps sidéral est un système de mesure du temps que les astronomes utilisent pour localiser les objets célestes. Un jour sidéral dure environ 23 heures, 56 minutes et 4,09 secondes. C\'est le temps que met la Terre pour effectuer une rotation complète sur son axe par rapport à l\'équinoxe vernal ou aux étoiles lointaines, plutôt qu\'au Soleil.' },
    { type: 'title', text: 'Jour solaire vs. Jour sidéral', level: 3 },
    { type: 'paragraph', html: 'Un jour solaire mesure le temps entre les transits consécutifs du Soleil à travers le méridien local. Parce que la Terre parcourt environ 1/365 de son orbite autour du Soleil chaque jour, elle doit tourner légèrement plus de 360 degrés pour se réaligner avec le Soleil. Un jour sidéral est une véritable rotation de 360 degrés par rapport aux étoiles, ce qui le rend 3 minutes et 56 secondes plus court.' },
    { type: 'title', text: 'Pourquoi astronomes et horlogers y prêtent attention', level: 3 },
    { type: 'paragraph', html: 'Pour les astronomes, une étoile est toujours à la même position dans le ciel au même Temps Sidéral. Pour suivre les étoiles, les montures de télescope doivent tourner exactement une fois par jour sidéral. Les grandes marques horlogères (comme Patek Philippe, Vacheron Constantin et IWC) créent des montres astronomiques ultra-compliquées dotées de trains d\'engrenages sidéraux pour suivre le LST directement au poignet.' },
    { type: 'title', text: 'Tableau de référence de la dérive stellaire vs. solaire', level: 3 },
    {
      type: 'table', headers: ['Jours écoulés', 'Temps sidéral d\'avance', 'Degrés de décalage', 'Dérive des constellations'], rows: [
        ['1 jour', '3m 56s', '0,986°', 'Léger décalage vers l\'ouest'],
        ['15 jours', '59m 0s', '14,79°', 'Décalage d\'un demi-signe zodiacal'],
        ['30 jours', '1h 58m', '29,58°', 'Décalage d\'une constellation zodiacale complète'],
        ['90 jours', '5h 54m', '88,74°', 'Décalage d\'une saison complète'],
        ['180 jours', '11h 48m', '177,48°', 'Constellations opposées visibles à minuit'],
        ['365 jours', '24h 0m', '360,00°', 'Cycle complet, réinitialisation de l\'alignement stellaire'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Calculé depuis l\'Époque J2000', icon: 'mdi:creation-outline', badge: 'CALCUL', html: 'Le Temps Sidéral Local est calculé en convertissant l\'heure UTC en Date Julienne (jours depuis -4712), en trouvant le Temps Sidéral Moyen de Greenwich et en appliquant votre longitude (15 degrés par heure). Notre outil utilise le modèle linéaire IAU J2000 de haute précision pour le suivi en temps réel.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
