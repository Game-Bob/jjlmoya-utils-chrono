import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'calculateur-telemetre',
  title: 'Calculateur de Télémètre: Comment utiliser un télémètre de montre',
  description: 'Apprenez à utiliser une lunette de télémètre. Calculez la distance de l\'éclair au tonnerre en fonction de la température de l\'air.',
  ui: {
    title: 'Calculateur de Télémètre',
    triggerFlash: 'Déclencher l\'Éclair',
    triggerSound: 'Déclencher le Son',
    stop: 'Arrêter',
    reset: 'Réinitialiser',
    settings: 'Paramètres',
    unitSystem: 'Système d\'Unités',
    metric: 'Métrique (km)',
    imperial: 'Impérial (milles)',
    temperature: 'Température de l\'Air',
    speedOfSound: 'Vitesse du Son',
    distanceResult: 'Distance Mesurée',
    elapsedTime: 'Temps Écoulé',
    historyTitle: 'Historique des Mesures',
    noHistory: 'Aucune mesure pour l\'instant. Commencez un calcul ci-dessus !',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Cliquez sur le poussoir de 2h ou "Déclencher l\'Éclair" dès que vous voyez l\'éclair.',
    step2: 'Cliquez de nouveau ou sur "Déclencher le Son" quand vous entendez le tonnerre.',
    step3: 'Lisez la distance où l\'aiguille des secondes s\'arrête sur la lunette du télémètre.',
    tipTitle: 'Conseil de Pro',
    tipContent: 'L\'air chaud conduit le son plus rapidement que l\'air froid. L\'ajustement de la température garantit des calculs de distance conformes aux lois de la physique.',
  },
  seo: [
  {
    "type": "title",
    "text": "Qu'est-ce qu'une lunette télémétrique?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un télémètre est une échelle imprimée sur le cadran d'un chronographe pour calculer la distance d'un événement distant."
  },
  {
    "type": "title",
    "text": "Utiliser une échelle télémétrique",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Étape 1: Démarrer",
        "definition": "Lancez le chronographe dès l'éclair visuel."
      },
      {
        "term": "Étape 2: Arrêter",
        "definition": "Stoppez le chronographe dès le son audible."
      },
      {
        "term": "Étape 3: Lire",
        "definition": "L'aiguille indique directement la distance en kilomètres ou miles."
      }
    ]
  },
  {
    "type": "title",
    "text": "Physique du calcul de distance",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La lumière est quasi instantanée (300 000 km/s), tandis que le son voyage à ~343 m/s à 20°C."
  },
  {
    "type": "title",
    "text": "Télémètre vs Tachymètre",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Le <strong>tachymètre</strong> mesure la vitesse, le <strong>télémètre</strong> mesure la distance."
  },
  {
    "type": "title",
    "text": "Tableau de référence temps / distance",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Temps écoulé",
      "Distance (km)",
      "Distance (miles)",
      "Vitesse du son"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Impact de la température",
    "icon": "mdi:information",
    "badge": "PRÉCISION",
    "html": "Le son se déplace plus vite dans l'air chaud."
  }
],
  faq: [
  {
    "question": "À quoi sert une échelle télémétrique sur une montre?",
    "answer": "Elle permet de calculer la distance séparant l'utilisateur d'un événement à la fois visible et audible, comme un éclair et le tonnerre."
  },
  {
    "question": "Comment calculer la distance d'un éclair avec un télémètre?",
    "answer": "Déclenchez le chronographe en voyant l'éclair. Stoppez-le en entendant le tonnerre. Lisez la distance indiquée sur la lunette."
  },
  {
    "question": "Quelle est la différence entre tachymètre et télémètre?",
    "answer": "Un tachymètre mesure une vitesse sur une distance connue. Un télémètre mesure une distance d'après le temps écoulé et la vitesse du son."
  },
  {
    "question": "Quelle est la précision d'une échelle télémétrique?",
    "answer": "Elle est étalonnée pour la vitesse du son standard (343 m/s à 20°C)."
  },
  {
    "question": "Peut-on utiliser un télémètre sous l'eau?",
    "answer": "Non, le son se déplaçant plus de quatre fois plus vite dans l'eau que dans l'air."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Configurer unités et température",
    "text": "Choisissez le système d'unités et réglez la température ambiante."
  },
  {
    "name": "Déclencher au flash",
    "text": "Cliquez au moment d'apercevoir l'éclair."
  },
  {
    "name": "Déclencher au son",
    "text": "Cliquez au moment d'entendre le tonnerre."
  },
  {
    "name": "Lire la distance",
    "text": "Lisez le résultat affiché sur la lunette."
  }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
