import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'convertisseur-frequence-balancement',
  title: 'Convertisseur de Fr\u00e9quence de Balancement \u2014 VPH en Hz et s/j',
  description: 'Convertissez les vibrations par heure (VPH) en Hertz, en ticks par seconde et calculez l\u2019impact quotidien d\u2019un seul tick perdu. Fonctionne avec les calibres ETA, Sellita, Miyota, Seiko, Rolex, Omega et Zenith.',
  ui: {
    title: 'Convertisseur de Fr\u00e9quence de Balancement',
    vphLabel: 'Mouvement',
    selectMovement: 'S\u00e9lectionner un mouvement',
    customMovement: 'Personnalis\u00e9',
    customVph: 'Vibrations par heure',
    resultsTitle: 'Calculs',
    frequency: 'Fr\u00e9quence',
    ticksPerSec: 'Ticks par seconde',
    lostTickImpact: 'S\u2019il perd 1 tick par heure',
    lostTickExplainer: 'Un tick manqu\u00e9 par heure signifie environ 3 secondes perdues par jour \u00e0 28 800 VPH. Les fr\u00e9quences plus basses amplifient l\u2019impact.',
    step1: 'S\u00e9lectionnez votre mouvement ou saisissez un VPH personnalis\u00e9.',
    step2: 'Lisez la fr\u00e9quence en Hz, les ticks par seconde et l\u2019impact d\u2019un tick perdu.',
    tipTitle: 'Astuce',
    tipContent: 'Les fr\u00e9quences plus \u00e9lev\u00e9es (36 000 VPH) donnent un balayage plus fluide de l\u2019aiguille et une meilleure pr\u00e9cision, mais aussi plus d\u2019usure sur l\u2019\u00e9chappement.',
  },
  seo: [
    { type: 'title', text: 'Convertisseur de Fr\u00e9quence de Balancement \u2014 VPH en Hz et secondes par jour', level: 2 },
    { type: 'paragraph', html: 'Chaque montre m\u00e9canique bat \u00e0 une fr\u00e9quence sp\u00e9cifique \u2014 le nombre de vibrations que son balancier effectue par heure. Ce nombre d\u00e9termine la fluidit\u00e9 du balayage de l\u2019aiguille des secondes et la pr\u00e9cision de la montre. Ce convertisseur traduit <strong>les VPH en Hz et en ticks par seconde</strong>, et montre l\u2019impact r\u00e9el d\u2019un seul tick perdu.' },
    { type: 'title', text: 'Qu\u2019est-ce qu\u2019une fr\u00e9quence de balancement?', level: 3 },
    { type: 'paragraph', html: 'La fr\u00e9quence de balancement, mesur\u00e9e en vibrations par heure (vph), est la fr\u00e9quence \u00e0 laquelle le balancier d\u2019une montre oscille. Une fr\u00e9quence courante est 28 800 VPH \u2014 soit 4 Hz, ou 8 ticks par seconde. Des fr\u00e9quences plus \u00e9lev\u00e9es comme 36 000 VPH (5 Hz) produisent un mouvement plus fluide et peuvent th\u00e9oriquement am\u00e9liorer la pr\u00e9cision en r\u00e9duisant l\u2019effet des erreurs de position.' },
    { type: 'title', text: 'Pourquoi un tick perdu est important', level: 3 },
    { type: 'paragraph', html: 'Si l\u2019\u00e9chappement d\u2019une montre ne d\u00e9livre pas un tick \u00e0 cause de frottements, de magn\u00e9tisme ou d\u2019usure, ce tick perdu se traduit directement en temps perdu. \u00c0 28 800 VPH, un seul tick manqu\u00e9 par heure s\u2019accumule pour environ <strong>3 secondes par jour</strong>. \u00c0 18 000 VPH, la m\u00eame erreur co\u00fbte pr\u00e8s de 5 secondes par jour. Cet outil vous aide \u00e0 comprendre les calculs derri\u00e8re le r\u00e9glage.' },
    { type: 'title', text: 'Fr\u00e9quences de balancement courantes', level: 3 },
    { type: 'paragraph', html: 'Les montres de poche vintage et les premi\u00e8res automatiques tournent souvent \u00e0 18 000 VPH (2,5 Hz). De nombreux calibres Seiko et Miyota utilisent 21 600 VPH (3 Hz). La norme moderne est 28 800 VPH (4 Hz), utilis\u00e9e par ETA, Sellita, Rolex, et d\u2019autres. Les mouvements \u00e0 haute fr\u00e9quence comme le Zenith El Primero tournent \u00e0 36 000 VPH (5 Hz) pour une plus grande pr\u00e9cision.' },
  ],
  faq: [
    {
      question: 'Comment convertir des VPH en Hz?',
      answer: 'Divisez les VPH par 7 200. Une montre battant \u00e0 28 800 VPH tourne \u00e0 4 Hz (28 800 \u00f7 7 200 = 4). La division par 7 200 tient compte du fait qu\u2019une oscillation compl\u00e8te contient deux vibrations et qu\u2019il y a 3 600 secondes dans une heure.',
    },
    {
      question: 'Que signifie une fr\u00e9quence plus \u00e9lev\u00e9e pour la pr\u00e9cision?',
      answer: 'Des fr\u00e9quences plus \u00e9lev\u00e9es permettent g\u00e9n\u00e9ralement une plus grande pr\u00e9cision th\u00e9orique car le balancier est moins affect\u00e9 par les perturbations de position. Cependant, elles g\u00e9n\u00e8rent aussi plus de frottement et d\u2019usure sur les pierres de palette et la roue d\u2019\u00e9chappement, n\u00e9cessitant une meilleure lubrification et un entretien plus fr\u00e9quent.',
    },
    {
      question: 'Comment un tick perdu affecte-t-il la pr\u00e9cision quotidienne?',
      answer: 'Un tick manqu\u00e9 par heure se traduit par 24 ticks perdus par jour. Le temps perdu d\u00e9pend de votre fr\u00e9quence de balancement : divisez 86 400 par vos VPH. \u00c0 28 800 VPH, cela donne 3 secondes par jour. \u00c0 18 000 VPH, cela donne 4,8 secondes par jour.',
    },
    {
      question: 'Une montre peut-elle rattraper un tick perdu?',
      answer: 'Non. Une fois qu\u2019un tick est manqu\u00e9, le temps est perdu d\u00e9finitivement. La montre ne "rattrape" pas. C\u2019est pourquoi la sant\u00e9 de l\u2019\u00e9chappement \u2014 pierres propres, lubrification appropri\u00e9e et erreur de battement correcte \u2014 impacte directement la marche quotidienne.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'S\u00e9lectionnez votre calibre',
      text: 'Choisissez votre mouvement dans le menu d\u00e9roulant. Chaque pr\u00e9r\u00e9glage inclut le VPH correct pour ce calibre.',
    },
    {
      name: 'Lisez les r\u00e9sultats',
      text: 'La carte affiche la fr\u00e9quence en Hz, les ticks par seconde et l\u2019impact quotidien d\u2019un seul tick perdu.',
    },
    {
      name: 'Essayez un VPH personnalis\u00e9',
      text: 'S\u00e9lectionnez "Personnalis\u00e9" pour saisir n\u2019importe quelle valeur VPH pour les mouvements vintage ou inhabituels.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Comment convertir des VPH en Hz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Divisez les VPH par 7 200. Une montre battant \u00e0 28 800 VPH tourne \u00e0 4 Hz. La division par 7 200 tient compte d\u2019une oscillation contenant deux vibrations et de 3 600 secondes par heure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que signifie une fr\u00e9quence plus \u00e9lev\u00e9e pour la pr\u00e9cision?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Des fr\u00e9quences plus \u00e9lev\u00e9es permettent une plus grande pr\u00e9cision th\u00e9orique car le balancier est moins affect\u00e9 par les perturbations de position. Cependant, elles g\u00e9n\u00e8rent aussi plus de frottement et d\u2019usure.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment un tick perdu affecte-t-il la pr\u00e9cision quotidienne?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Un tick manqu\u00e9 par heure se traduit par 24 ticks perdus par jour. Divisez 86 400 par vos VPH pour trouver les secondes perdues par jour.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Une montre peut-elle rattraper un tick perdu?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Une fois qu\u2019un tick est manqu\u00e9, le temps est perdu d\u00e9finitivement. La montre ne rattrape pas.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertisseur de Fr\u00e9quence de Balancement',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'N\u00e9cessite HTML5. N\u00e9cessite JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment convertir des VPH en Hz et calculer l\u2019impact d\u2019un tick perdu',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'S\u00e9lectionnez votre calibre',
          'text': 'Choisissez votre mouvement dans le menu d\u00e9roulant. Chaque pr\u00e9r\u00e9glage inclut le VPH correct pour ce calibre.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez les r\u00e9sultats',
          'text': 'La carte affiche la fr\u00e9quence en Hz, les ticks par seconde et l\u2019impact quotidien d\u2019un seul tick perdu.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Essayez un VPH personnalis\u00e9',
          'text': 'S\u00e9lectionnez Personnalis\u00e9 pour saisir n\u2019importe quelle valeur VPH pour les mouvements vintage ou inhabituels.',
        },
      ],
    },
  ],
};
