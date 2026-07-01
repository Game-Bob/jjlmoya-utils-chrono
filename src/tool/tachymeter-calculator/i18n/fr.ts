import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'calculateur-tachymetre',
  title: 'Calculateur Tachymetre: Vitesse depuis le temps ecoule',
  description: 'Calculez la vitesse à partir du temps écoulé en utilisant la formule du tachymètre. Fonctionne avec tout chronographe possédant une échelle tachymétrique sur la lunette.',
  ui: {
    title: 'Calculateur Tachymetre',
    timeLabel: 'Temps Ecoule (secondes)',
    timeHelp: 'Temps mesure sur 1 km ou 1 mile',
    speedResult: 'Vitesse',
    bezelReading: 'Lecture de la Lunette',
    presetLabel: 'Scenario Predefini',
    selectPreset: 'Selectionnez un scenario',
    customPreset: 'Personnalise',
    seconds: 's',
    kmh: 'km/h',
    mph: 'mph',
    exampleStep1: 'Lancez le chronographe lorsque l objet passe le point de depart.',
    exampleStep2: 'Arretez-le apres 1 km. L echelle tachymetrique indique la vitesse.',
    tipTitle: 'Astuce',
    tipContent: 'A 36 secondes, la lunette indique 100. Des temps plus rapides (duree plus courte) correspondent a des vitesses plus elevees sur l echelle tachymetrique.',
  },
  seo: [
    { type: 'title', text: 'Calculateur Tachymetre: Convertissez le temps ecoule en vitesse', level: 2 },
    { type: 'paragraph', html: 'Un tachymetre est une echelle sur la lunette ou le cadran d une montre qui convertit le temps ecoule en vitesse. Il est generalement utilise avec un chronographe: lancez le minuteur lorsque l objet passe un point de reference, arretez-le apres 1 km (ou 1 mile) et lisez la vitesse sur l echelle. Ce calculateur effectue le calcul pour vous.' },
    { type: 'title', text: 'Comment fonctionne un Tachymetre', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formule', definition: 'Vitesse = 3 600 ÷ temps ecoule en secondes. La constante 3 600 represente les secondes par heure.' },
        { term: 'L Echelle', definition: 'Les lunettes tachymetriques sont marquees de 60 (a 3 heures) jusqu a 400 ou 500 (pres de 12 heures). Les vitesses plus rapides correspondent a des temps ecoules plus courts.' },
        { term: 'Distance de Base', definition: 'Les tachymetres standard sont etalonnes pour 1 km ou 1 mile. Pour d autres distances, divisez la lecture en consequence.' },
      ]
    },
    { type: 'title', text: 'Mesures Tachymetriques Courantes', level: 3 },
    {
      type: 'table', headers: ['Temps Ecoule', 'Vitesse', 'Scenario'], rows: [
        ['10 s', '360 km/h', 'Train a grande vitesse / voiture de course'],
        ['12 s', '300 km/h', 'Decollage d un jet prive'],
        ['20 s', '180 km/h', 'Voiture de sport sur autoroute'],
        ['30 s', '120 km/h', 'Voiture sur voie rapide'],
        ['36 s', '100 km/h', 'Voiture sur route (reference standard)'],
        ['45 s', '80 km/h', 'Voiture en zone urbaine'],
        ['60 s', '60 km/h', 'Conduite en ville'],
        ['90 s', '40 km/h', 'Cyclisme'],
        ['120 s', '30 km/h', 'Jogging'],
        ['240 s', '15 km/h', 'Course a pied'],
        ['480 s', '7.5 km/h', 'Marche'],
      ]
    },
    { type: 'title', text: 'Au-dela de l Echelle Standard', level: 3 },
    { type: 'paragraph', html: 'Si votre lunette tachymetrique ne va que jusqu a 400 mais que votre temps ecoule est inferieur a 9 secondes, vous pouvez toujours l utiliser. Utilisez simplement une distance de base plus longue. Par exemple, si vous parcourez 2 km en 18 secondes, divisez la lecture de la lunette par 2. A l inverse, pour les vitesses lentes (plus de 60 secondes), utilisez une distance de base plus courte (p. ex., 0.5 km) et multipliez par 2.' },
    { type: 'diagnostic', variant: 'info', title: 'Compatibilite du Tachymetre', icon: 'mdi:information', badge: 'NOTE', html: 'Tous les chronographes n ont pas de lunette tachymetrique. Certaines montres placent l echelle tachymetrique sur le rehaut du cadran ou sur l anneau exterieur. Les montres numeriques peuvent inclure une fonction tachymetrique dans le mode chronographe. La formule fonctionne toujours independamment de l echelle physique.' },
  ],
  faq: [
    {
      question: 'Comment utiliser une lunette tachymetrique sur ma montre?',
      answer: 'Lancez le chronographe a un point de reference (p. ex., un bornier). Arretez-le apres exactement 1 km (ou 1 mile). L aiguille des secondes pointe vers la vitesse sur l echelle de la lunette. Par exemple, s il a fallu 36 secondes pour parcourir 1 km, l aiguille pointe vers 100, soit 100 km/h.',
    },
    {
      question: 'Que faire si mon temps ecoule est plus rapide que ce que la lunette peut lire?',
      answer: 'Certains tachymetres ne vont que jusqu a 400 ou 500. Si vous parcourez 1 km en moins de 9 secondes, utilisez une distance de base plus longue. Parcourez 2 km et divisez la lecture de la lunette par 2, ou parcourez 3 km et divisez par 3.',
    },
    {
      question: 'Que faire si mon temps ecoule est plus lent que ce que la lunette peut lire?',
      answer: 'Utilisez une distance de base plus courte. Par exemple, s il faut 90 secondes pour parcourir 1 km, parcourez 0.5 km a la place. Lisez la lunette et multipliez par 2. L echelle tachymetrique standard couvre des temps d environ 7 a 60 secondes.',
    },
    {
      question: 'Puis-je utiliser un tachymetre pour autre chose que la vitesse?',
      answer: 'Oui. Le tachymetre mesure tout taux horaire. Par exemple, mesurez le temps necessaire pour accomplir une tache et l echelle montre combien vous pouvez en faire par heure. Dans la fabrication, une tache de 30 secondes signifie 120 unites par heure.',
    },
    {
      question: 'Tous les tachymetres utilisent-ils la meme echelle?',
      answer: 'La plupart utilisent l echelle logarithmique standard basee sur la formule 3 600 ÷ secondes. Cependant, certaines montres anciennes ou marques peuvent avoir des variations. L echelle physique peut egalement etre limitee par le chemin des minutes et les marquages de la lunette.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selectionnez un scenario ou entrez un temps personnalise',
      text: 'Choisissez parmi les options predefinies comme Voiture, Cyclisme ou Course a pied, ou selectionnez Personnalise pour entrer n importe quel temps ecoule en secondes.',
    },
    {
      name: 'Lisez le resultat de vitesse',
      text: 'Le calculateur affiche la vitesse en km/h et la lecture equivalente sur la lunette tachymetrique.',
    },
    {
      name: 'Appliquez a votre chronographe',
      text: 'Utilisez le temps ecoule pour trouver la vitesse correspondante sur la lunette tachymetrique de votre montre.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment utiliser une lunette tachymetrique sur ma montre?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Lancez le chronographe a un point de reference. Arretez-le apres exactement 1 km. L aiguille des secondes pointe vers la vitesse sur l echelle de la lunette. Par exemple, 36 secondes = 100 km/h.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si mon temps ecoule est plus rapide que ce que la lunette peut lire?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Utilisez une distance de base plus longue. Parcourez 2 km et divisez la lecture de la lunette par 2, ou parcourez 3 km et divisez par 3.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si mon temps ecoule est plus lent que ce que la lunette peut lire?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Utilisez une distance de base plus courte. Parcourez 0.5 km a la place. Lisez la lunette et multipliez par 2.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser un tachymetre pour autre chose que la vitesse?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Le tachymetre mesure tout taux horaire. Mesurez le temps necessaire pour accomplir une tache et l echelle montre combien vous pouvez en faire par heure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Tous les tachymetres utilisent-ils la meme echelle?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'La plupart utilisent l echelle logarithmique standard basee sur la formule 3 600 ÷ secondes. Certaines montres anciennes peuvent avoir des variations.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur Tachymetre',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment calculer la vitesse avec un tachymetre',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selectionnez un scenario ou un temps personnalise',
          'text': 'Choisissez parmi les options predefinies comme Voiture, Cyclisme ou Course a pied, ou selectionnez Personnalise pour entrer n importe quel temps ecoule en secondes.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez le resultat de vitesse',
          'text': 'Le calculateur affiche la vitesse en km/h et la lecture equivalente sur la lunette tachymetrique.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Appliquez a votre chronographe',
          'text': 'Utilisez le temps ecoule pour trouver la vitesse correspondante sur la lunette tachymetrique de votre montre.',
        },
      ],
    },
  ],
};
