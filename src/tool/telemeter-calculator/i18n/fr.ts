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
    { type: 'title', text: 'Qu\'est-ce qu\'une lunette de télémètre de montre ?', level: 2 },
    { type: 'paragraph', html: 'Un télémètre est une échelle imprimée sur le cadran ou la lunette d\'une montre chronographe. Il permet à l\'utilisateur de calculer la distance approximative d\'un événement à la fois visible et audible (comme un éclair, un feu d\'artifice ou une explosion). En mesurant le temps écoulé entre le signal visuel et le signal sonore, le télémètre indique directement la distance.' },
  ],
  faq: [
    {
      question: 'Comment utiliser une montre avec télémètre ?',
      answer: 'Démarrez le chronographe lorsque vous voyez l\'événement (comme l\'éclair). Arrêtez-le dès que vous entendez le son (le tonnerre). L\'aiguille des secondes indiquera la distance sur la lunette.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurer les unités et l\'environnement',
      text: 'Sélectionnez le système métrique ou impérial et réglez la température de l\'air de votre position.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
