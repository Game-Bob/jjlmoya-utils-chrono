import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Comment savoir si une montre est une vraie GMT ou une caller GMT ?',
    answer: 'Une <strong>vraie GMT</strong> (aussi appelée " flyer " GMT) permet de faire sauter l\'aiguille des heures locale indépendamment - idéale pour les voyageurs qui changent souvent de fuseau horaire. Une <strong>caller GMT</strong> ajuste l\'aiguille GMT séparément tandis que l\'aiguille des heures principale reste fixe, ce qui est moins cher à produire. Pour les distinguer: tirez la couronne en position de réglage de l\'heure et tournez-la. Si l\'aiguille des heures saute par paliers d\'une heure sans s\'arrêter, c\'est une vraie GMT. Si l\'aiguille GMT bouge à la place, c\'est une caller. Rolex utilise un calibre vraie GMT (3285) dans la GMT-Master II, tandis que de nombreuses micro-marques abordables emploient des mouvements caller comme le Seiko NH34.',
  },
  {
    question: 'Quelle est la différence entre une montre GMT et une World Timer ?',
    answer: 'Une <strong>montre GMT</strong> suit généralement deux fuseaux horaires - l\'heure locale et une référence (généralement UTC) - à l\'aide d\'une aiguille 24 heures et d\'une lunette 24 heures. Une <strong>World Timer</strong> affiche les 24 fuseaux horaires d\'un coup: elle possède un anneau de villes autour du cadran et un disque 24 heures qui tourne. Les World Timers comme la Patek Philippe 5230P ou la JLC Geophysic Universal Time vous permettent de lire l\'heure de n\'importe quelle ville instantanément. Les GMT sont plus simples et plus abordables ; les World Timer sont mécaniquement plus complexes et généralement plus chères. Cet outil fonctionne comme une World Timer numérique, vous permettant d\'ajouter autant de villes que nécessaire.',
  },
  {
    question: 'Quel fuseau horaire ma montre affiche-t-elle quand elle indique " GMT " ?',
    answer: 'Quand une montre porte " GMT " sur le cadran, l\'<strong>aiguille GMT</strong> (généralement une quatrième aiguille avec une pointe de flèche colorée) indique l\'heure au format 24 heures. La plupart des propriétaires règlent cette aiguille sur UTC (temps universel coordonné) car tous les fuseaux horaires sont définis comme des décalages par rapport à UTC. La lunette rotative 24 heures peut ensuite être alignée pour lire n\'importe quel autre fuseau horaire. Par exemple, si l\'aiguille GMT pointe vers 14 (2 PM) et que les repères de votre lunette l\'alignent sur UTC+2, vous lisez l\'heure de l\'Europe de l\'Est. Cet outil vous aide à visualiser exactement cette relation.',
  },
];

const howTo = [
  {
    name: 'Ajoutez n\'importe quelle ville à votre tableau de bord',
    text: 'Tapez le nom d\'une ville ou d\'un fuseau horaire dans la barre de recherche. Cliquez sur un résultat pour l\'ajouter instantanément. Chaque ville apparaît comme une carte horaire en direct avec l\'heure locale actuelle.',
  },
  {
    name: 'Supprimez les villes dont vous n\'avez plus besoin',
    text: 'Survolez une carte horaire et cliquez sur le bouton × pour la supprimer. Votre sélection est automatiquement sauvegardée dans votre navigateur - fermez la page et revenez plus tard, votre tableau de bord est exactement comme vous l\'avez laissé.',
  },
  {
    name: 'Utilisez-le comme référence GMT pour votre collection de montres',
    text: 'Définissez votre ville de référence et ajoutez les fuseaux horaires que vous suivez avec vos montres GMT. Utilisez les étiquettes de décalage en direct pour vérifier si l\'alignement de votre lunette est correct pour chaque zone suivie.',
  },
];

const title = 'Horloge Mondiale: Tableau de Bord en Direct pour Fuseaux Horaires Multiples';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'horloge-mondiale-gmt',
  title,
  description: 'Suivez plusieurs fuseaux horaires en direct. Ajoutez n\'importe quelle ville et voyez son heure actuelle se mettre à jour chaque seconde. Parfait pour les passionnés de montres GMT ou World Timer.',
  ui: {
    title: 'Horloge Mondiale',
    searchPlaceholder: 'Rechercher une ville ou un fuseau horaire...',
    addLabel: 'Ajouter',
    removeLabel: 'Supprimer',
    noResults: 'Aucune ville trouvée',
    yourZones: 'Vos fuseaux horaires',
  },
  seo: [
    { type: 'title', text: 'Horloge Mondiale - Tableau de Bord des Fuseaux Horaires pour Passionnés de Montres', level: 2 },
    { type: 'paragraph', html: 'Que vous possédiez une <strong>GMT-Master II</strong>, une <strong>World Timer</strong>, ou que vous ayez simplement besoin de suivre plusieurs fuseaux horaires pour le travail ou les voyages, ce tableau de bord en direct vous montre l\'heure actuelle dans chaque ville qui compte pour vous - tout d\'un coup d\'œil. Ajoutez New York, Londres, Tokyo ou n\'importe quelle ville, et l\'heure se met à jour chaque seconde. Vos zones sont sauvegardées dans votre navigateur pour que vous n\'ayez jamais à les reconfigurer.' },
    { type: 'title', text: 'Pourquoi les passionnés de montres ont besoin d\'une horloge mondiale', level: 3 },
    { type: 'paragraph', html: 'Si vous collectionnez les <strong>montres GMT</strong>, vous connaissez le problème: vous réglez la lunette pour suivre un second fuseau, mais les décalages changent avec l\'heure d\'été, ou vous possédez simplement plusieurs GMT et voulez comparer comment chacune suit une ville différente. Cet outil résout tout ça. Ajoutez les villes que vos montres suivent et voyez instantanément leur décalage et l\'heure actuelle. Plus de calcul mental - regardez simplement la carte et sachez exactement où votre aiguille GMT devrait pointer.' },
    { type: 'title', text: 'GMT vs World Timer - Laquelle correspond à votre style ?', level: 3 },
    { type: 'paragraph', html: 'Une <strong>montre GMT</strong> (comme la Rolex GMT-Master II " Pepsi " ou la Tudor Black Bay Pro) utilise une aiguille 24 heures et une lunette rotative pour suivre deux fuseaux horaires. Une <strong>World Timer</strong> (comme la Nomos Zürich Weltzeit ou l\'Omega Seamaster Worldtimer) affiche les 24 zones à la fois grâce à un anneau de villes et un disque 24 heures. Ce tableau de bord imite une World Timer: vous pouvez voir toutes les villes en même temps. Utilisez-le pour décider quelle complication correspond à votre style de vie avant d\'acheter.' },
    { type: 'title', text: 'Utilisations pratiques au-delà de la collection de montres', level: 3 },
    {
      type: 'list', items: [
        'Travailleurs à distance planifiant des réunions entre fuseaux horaires sans confusion',
        'Voyageurs fréquents gardant un œil sur leur domicile et leur destination simultanément',
        'Traders suivant les ouvertures des marchés à New York, Londres, Tokyo et Sydney',
        'Quiconque veut savoir " quelle heure il est à... " sans avoir à chercher sur Google',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Horloge Mondiale en Direct', icon: 'mdi:clock-time-eight', badge: 'HEURE', html: 'Les heures se mettent à jour en direct chaque seconde grâce à la base de données de fuseaux horaires de votre navigateur. Les changements d\'heure d\'été sont gérés automatiquement. Aucune donnée n\'est envoyée à un serveur.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
