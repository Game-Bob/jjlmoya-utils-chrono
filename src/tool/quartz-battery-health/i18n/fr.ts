import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'controleur-sante-pile-quartz',
  title: 'Controleur de Sante de Pile Quartz',
  description: 'Calculez la durée de vie théorique d\'une pile de mouvement quartz en entrant la capacité de la cellule (mAh) et la consommation du calibre (µA). Ajoutez optionnellement la date d\'installation pour estimer la date de remplacement.',
  ui: {
    title: 'Controleur de Sante de Pile Quartz',
    batteryLabel: 'Pile',
    selectBattery: 'Selectionner une pile',
    customBattery: 'Personnalisee',
    capacityLabel: 'Capacite',
    capacityUnit: 'mAh',
    consumptionLabel: 'Consommation',
    consumptionUnit: 'µA',
    installDateLabel: 'Installee le',
    installDateHint: 'Optionnel',
    monthLabel: 'Mois',
    yearLabel: 'Annee',
    calculate: 'Calculer',
    resultLabel: 'Duree estimee',
    theoreticalLife: 'Duree theorique',
    yearsLabel: 'ans',
    monthsLabel: 'mois',
    daysLabel: 'jours',
    changeDateLabel: 'Remplacer avant le',
    noDateHint: 'Entrez la date d\'installation pour voir la date de remplacement',
    healthLabel: 'Etat',
    healthGood: 'Bon',
    healthModerate: 'Modere',
    healthCritical: 'Critique',
    step1: 'Choisissez une pile courante ou selectionnez Personnalisee pour entrer la capacite.',
    step2: 'Entrez la consommation du calibre en microamperes (µA).',
    step3: 'Ajoutez optionnellement la date d\'installation, puis appuyez sur Calculer.',
    tipTitle: 'Conseil',
    tipContent: 'Utilisez toujours la valeur de consommation de la fiche technique officielle du calibre. La duree de vie reelle peut etre 10 a 20 % plus courte en raison des variations de temperature et de charge.',
  },
  seo: [
    { type: 'title', text: 'Controleur de Sante de Pile Quartz: Combien de temps votre pile de montre va-t-elle durer?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1,0-2,5 µA', label: 'Tirage typique 3 aiguilles' },
        { value: '18-55 mAh', label: 'Capacite courante' },
        { value: '2,5-4,5 ans', label: 'Duree de vie usuelle' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Vous vous demandez quand votre montre quartz s\'arretera de tictaquer? Le <strong>Controleur de Sante de Pile Quartz</strong> vous aide a estimer la duree de vie restante de toute pile de mouvement quartz en comparant la capacite de la cellule (mesuree en mAh) a la consommation moyenne du mouvement (mesuree en microamperes, µA). Que vous possediez un mouvement suisse ETA, un Miyota japonais, un Seiko, un Ronda ou un mouvement chinois DG, cet outil calcule la duree de vie theorique en annees, mois et jours - et peut meme predire la date de remplacement exacte si vous entrez le mois et l\'annee d\'installation.' },
    { type: 'title', text: 'Comment la duree de vie d\'une pile quartz est calculee: les maths derriere l\'estimation', level: 3 },
    { type: 'paragraph', html: 'La duree de vie de la pile suit une formule electrique simple: <strong>Duree (heures) = (Capacite de la cellule en mAh x 1000) / Consommation de courant en µA</strong>. En divisant ce resultat par 24, vous obtenez les jours, et par 365,25, les annees. Par exemple, une <strong>pile SR920SW (371) de 40 mAh</strong> alimentant un mouvement qui consomme <strong>1,5 µA</strong> durera theoriquement environ <strong>3 ans</strong>. Reduisez la consommation a 1,0 µA et la meme pile depasse 4,5 ans. Augmentez-la a 2,5 µA et la duree de vie de la pile tombe a moins de 2 ans. Chaque fraction de microampere compte lorsque vous planifiez vos intervalles d\'entretien.' },
    { type: 'title', text: 'Types de piles de montre quartz les plus courants et leurs capacites', level: 3 },
    {
      type: 'table',
      headers: ['Reference', 'Code courant', 'Capacite', 'Utilisation typique'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Montres fines habille'],
        ['SR626SW', '377', '27 mAh', 'Modeles quartz moyens'],
        ['SR920SW', '371', '40 mAh', 'Chronographes et multifonctions'],
        ['SR936SW', '394', '55 mAh', 'Grands hybrides analogiques-numeriques'],
        ['CR2025', '-', '165 mAh', 'Modules LED haute consommation'],
      ],
    },
    { type: 'tip', title: 'Respectez la specification d\'origine', html: 'Choisir le mauvais type de pile peut reduire la duree de vie de la batterie jusqu\'a <strong>40 %</strong>. Recoupez toujours le numero de reference de la pile d\'origine avant d\'installer un remplacement. Le code numerique indique les dimensions - par exemple, <strong>SR936SW</strong> fait 9,5 mm de diametre et 3,6 mm d\'epaisseur.' },
    { type: 'title', text: 'Pourquoi vous devriez toujours utiliser les valeurs de consommation officielles du calibre', level: 3 },
    { type: 'paragraph', html: 'Les fabricants de mouvements comme <strong>ETA, Ronda, Miyota, Seiko et ISA</strong> publient des fiches techniques officielles pour chaque calibre qu\'ils produisent. Ces fiches listent la <strong>consommation de courant moyenne</strong> sous temperature controlee (generalement 22 °C) et avec une charge de couple d\'aiguilles standard. Utiliser une valeur estimee de 1,0 µA alors que votre mouvement consomme reellement 2,5 µA peut surestimer la duree de vie de la pile de plus de 100 %. Telechargez toujours le PDF officiel du site du fabricant ou verifiez la reference du calibre sur des bases de donnees specialisees pour obtenir la consommation reelle.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Une fuite de pile peut detruire le mouvement de votre montre',
      html: 'Une pile a l\'oxyde d\'argent epuisee peut <strong>fuir de l\'hydroxyde de potassium</strong>, qui corrode les ressorts de contact, les pistes du circuit imprime et meme la bobine du moteur pas a pas. Si l\'outil estime moins de <strong>6 mois de vie restante</strong>, planifiez un changement de pile lors de votre prochain controle de routine. Portez une attention particuliere aux <strong>montres quartz vintage des annees 1970 et 1980</strong> - leurs piles d\'origine sont bien plus sujettes aux fuites apres des decennies dans le boitier.',
    },
    { type: 'title', text: 'Facteurs qui reduisent la duree de vie reelle de la pile par rapport a l\'estimation theorique', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperature extremes</strong> - une montre laissee sur un tableau de bord ensoleille peut voir une consommation de courant 30 % plus elevee',
        '<strong>Circuits de detection de fin de vie</strong> - l\'indicateur de tic a deux secondes consomme de l\'energie supplementaire une fois active',
        '<strong>Usage du chronographe ou de l\'alarme</strong> - des pics de courant momentanes qui s\'accumulent avec le temps',
        '<strong>Frottement mecanique</strong> - les trains d\'engrenages ages ou sales augmentent le couple dont le moteur pas a pas a besoin',
        '<strong>Champs magnetiques</strong> - l\'exposition augmente les besoins de couple du moteur, dechargeant la pile plus vite',
      ],
    },
    { type: 'paragraph', html: 'En pratique, vous pouvez vous attendre a une <strong>duree de vie 10 a 20 % plus courte</strong> que le calcul theorique. Pour les mouvements quartz thermocompenses de haute precision, la consommation varie moins, mais le quartz standard est notablement sensible a ces facteurs environnementaux.' },
    { type: 'title', text: 'Comment trouver la bonne pile de remplacement pour votre montre quartz', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Oxyde d\'argent)', definition: 'Les piles marquees SR (ex. SR920SW) fournissent une tension stable de 1,55 V tout au long de leur vie, maintenant la precision de l\'oscillateur quartz. C\'est la norme pour les montres quartz de qualite.' },
        { term: 'LR (Alcaline)', definition: 'Les piles marquees LR (ex. LR41) ont une tension qui diminue progressivement, ce qui peut faire ralentir ou arreter prematurement la montre. Deconseillees en remplacement des piles SR.' },
        { term: 'CR (Lithium)', definition: 'Les piles marquees CR (ex. CR2025) delivrent 3,0 V et sont utilisees dans les modules a forte consommation avec retroeclairage LED, grands afficheurs LCD ou complications multiples.' },
        { term: 'Code numerique', definition: 'Les quatre chiffres codent la taille physique: les deux premiers sont le diametre en millimetres et les deux derniers sont l\'epaisseur en dixiemes de millimetre. SR936SW = Ø9,5 mm x 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Quartz standard vs solaire vs kinetic: comment la technologie change l\'equation', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Quartz Standard',
          description: 'Utilise une pile primaire remplacable a l\'oxyde d\'argent ou au lithium. La duree de vie depend uniquement de la capacite par rapport a la consommation. C\'est ce pour quoi ce calculateur est concu.',
          highlight: true,
          points: [
            'Pile primaire remplacable',
            'Duree = capacite / consommation',
            'Calendrier de remplacement previsible',
            'Changements de pile abordables',
          ],
        },
        {
          title: 'Solaire et Kinetic',
          description: 'Les montres solaires utilisent des cellules photovoltaiques pour recharger un accumulateur lithium-ion. Les montres Kinetic utilisent un micro-generateur entraine par rotor pour charger un condensateur.',
          points: [
            'Stockage d\'energie rechargeable',
            'Duree de vie depend des cycles de charge',
            'Degradation du condensateur avec le temps',
            'Non compatible avec ce calculateur',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Les affirmations des fabricants de <strong>"duree de pile de 10 ans"</strong> sont generalement basees sur des mouvements a tres faible consommation (environ 0,5 a 0,8 µA) associes a des piles de grande capacite (165 mAh CR2025 ou plus). Dans une montre quartz analogique standard avec une petite pile a l\'oxyde d\'argent comme la <strong>SR626SW (27 mAh)</strong> et un mouvement typique de 1,5 µA, la duree de vie reelle est plus proche de <strong>2,5 a 3 ans</strong>. Verifiez toujours avec ce calculateur plutot que de vous fier aux etiquettes marketing.' },
    {
      type: 'tip',
      title: 'Remplacez de maniere proactive, pas reactive',
      html: 'Lorsque vous voyez l\'aiguille des secondes sauter par <strong>intervalles de 2 ou 4 secondes</strong>, le mouvement est entre en mode d\'economie d\'energie en raison d\'une faible tension. La pile a environ <strong>2 a 4 semaines</strong> de vie restante. Remplacez-la immediatement pour eviter les degats de fuite.',
    },
    {
      type: 'summary',
      title: 'Points cles pour la sante de la pile des montres quartz',
      items: [
        'Utilisez la valeur de consommation officielle du calibre provenant de la fiche technique du fabricant - une valeur estimee peut surestimer la duree de vie de plus de 100 %',
        'Respectez exactement le type de pile d\'origine: les chimies SR, LR et CR ne sont pas interchangeables',
        'Remplacez la pile lorsque l\'outil indique moins de 6 mois de vie restante pour eviter les fuites',
        'La duree de vie reelle est typiquement 10 a 20 % plus courte que l\'ideal theorique en raison de la temperature, du frottement et de l\'utilisation',
        'Ce calculateur est concu pour les mouvements quartz standard avec piles primaires remplacables - pas pour les montres solaires ou kinetic',
      ],
    },
  ],
  faq: [
    {
      question: 'Quelle est la precision de l\'estimation theorique de la duree de vie de la pile?',
      answer: 'Le calcul est un ideal electrique base sur la capacite divisee par la consommation. Dans des conditions reelles, vous pouvez vous attendre a une duree de vie 10 a 20 % plus courte en raison des variations de temperature, des circuits de detection de fin de vie, de la trainee mecanique des lubrifiants vieillis et de la charge supplementaire des fonctions de chronographe ou d\'alarme. L\'estimation est une limite superieure fiable, pas une prediction exacte.',
    },
    {
      question: 'Ou trouver la valeur exacte de consommation electrique de mon calibre quartz?',
      answer: 'Les fiches techniques officielles d\'ETA, Ronda, Miyota, Seiko, ISA et d\'autres fabricants de mouvements listent la consommation de courant moyenne en microamperes (µA). Recherchez le numero de reference du calibre suivi de "fiche technique" ou "specification technique". Des bases de donnees specialisees comme Ranfft, 17jewels et Watch-Wiki publient egalement des chiffres de consommation contribues par la communaute horlogere.',
    },
    {
      question: 'Que signifie "µA" et pourquoi est-ce important?',
      answer: 'µA signifie microampere, soit un millionieme d\'ampere. Cela mesure le courant electrique que le mouvement tire de la pile. Un mouvement quartz analogique typique a trois aiguilles consomme entre 1,0 et 2,5 µA. Les chronographes et modules multifonctions peuvent consommer 3,0 a 6,0 µA. Plus le courant est eleve, plus la duree de vie de la pile est courte pour une capacite de cellule donnee.',
    },
    {
      question: 'Puis-je utiliser cet outil pour les montres solaires ou kinetic?',
      answer: 'Non. Les montres solaires (Eco-Drive, Solar, Light-Powered) utilisent des cellules photovoltaiques pour charger une batterie rechargeable. Les montres Kinetic et Auto-Quartz utilisent un rotor et un micro-generateur pour charger un condensateur. Aucune de ces technologies ne repose sur une pile primaire jetable, donc le modele capacite-vs-consommation ne s\'applique pas. Utilisez ce calculateur uniquement pour les mouvements quartz standard avec piles remplacables a l\'oxyde d\'argent, alcalines ou au lithium.',
    },
    {
      question: 'Dois-je remplacer la pile avant qu\'elle ne meure completement?',
      answer: 'Oui. Les piles a l\'oxyde d\'argent et alcalines peuvent fuir de l\'hydroxyde de potassium lorsqu\'elles sont completement dechargees, endommageant les ressorts de contact, les pistes du circuit imprime et la bobine du moteur pas a pas. Le remplacement avant la decharge complete est fortement recommande. Si l\'outil montre moins de 6 mois de vie estimee restante, planifiez un changement de pile des que possible.',
    },
    {
      question: 'Que se passe-t-il si j\'utilise une pile de capacite superieure ou inferieure a l\'originale?',
      answer: 'Utiliser une pile de capacite superieure (ex. SR936SW 55 mAh au lieu de SR920SW 40 mAh) prolongera la duree de vie mais pourrait ne pas s\'adapter physiquement - la pile doit correspondre exactement au diametre et a l\'epaisseur d\'origine pour maintenir une pression de contact adequate. Utiliser une pile de capacite inferieure raccourcit la duree de vie et peut provoquer un contact intermittent si la pile est sous-dimensionnee. Remplacez toujours par le meme numero de reference ou un equivalent documente de la meme famille de taille.',
    },
    {
      question: 'Comment savoir si la pile de ma montre est a l\'oxyde d\'argent ou alcaline?',
      answer: 'Les piles a l\'oxyde d\'argent sont marquees SR (ex. SR920SW) et fournissent une tension stable de 1,55 V tout au long de leur vie, ce qui maintient la precision de l\'oscillateur quartz. Les piles alcalines sont marquees LR (ex. LR41) et ont une tension qui diminue progressivement, ce qui peut faire ralentir ou arreter prematurement la montre. La plupart des marques de montres de qualite specifient l\'oxyde d\'argent. Si votre montre utilisait originalement SR, remplacez toujours par SR, pas LR.',
    },
    {
      question: 'Est-ce que l\'aiguille des secondes qui saute toutes les deux secondes signifie que la pile est en fin de vie?',
      answer: 'Oui. Lorsque le mouvement quartz detecte que la tension de la pile est trop faible pour entrainer fiablement le moteur pas a pas, il entre dans un mode d\'economie d\'energie ou l\'aiguille des secondes saute par intervalles de 2 ou 4 secondes. C\'est l\'indicateur de fin de vie. Lorsque vous voyez ce comportement, la pile a environ 2 a 4 semaines de vie restante et doit etre remplacee immediatement pour eviter les fuites.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selectionnez ou personnalisez la pile',
      text: 'Choisissez une pile courante a l\'oxyde d\'argent dans la liste deroulante - SR621SW, SR626SW, SR920SW, SR936SW et d\'autres sont prechargees avec leurs capacites officielles. Si votre pile n\'est pas listee, selectionnez Personnalisee et saisissez sa capacite exacte en mAh telle qu\'imprimee sur l\'etiquette de la pile ou listee dans la fiche technique du fabricant.',
    },
    {
      name: 'Entrez la consommation electrique du mouvement',
      text: 'Localisez la consommation de courant moyenne de votre calibre dans la documentation technique officielle. Saisissez la valeur en microamperes (µA) dans le champ de consommation. La plupart des mouvements a trois aiguilles utilisent 1,0 a 2,5 µA. Les chronographes et modules multifonctions peuvent aller jusqu\'a 6,0 µA.',
    },
    {
      name: 'Ajoutez le mois et l\'annee d\'installation (optionnel)',
      text: 'Si vous vous souvenez ou avez note quand la pile a ete installee pour la derniere fois, selectionnez le mois et entrez l\'annee. L\'outil utilisera cette date pour calculer la date de remplacement estimee et afficher la sante restante de la pile en pourcentage.',
    },
    {
      name: 'Lisez la duree de vie theorique',
      text: 'La carte de resultat montre la duree de vie totale estimee de la pile en annees, mois et jours restants. C\'est la duree de vie maximale dans des conditions ideales, en supposant qu\'aucun facteur externe ne reduise la capacite de la pile.',
    },
    {
      name: 'Verifiez l\'etat de sante et la date de remplacement',
      text: 'Lorsqu\'une date d\'installation est fournie, la jauge se remplit proportionnellement a la duree de vie restante de la pile. Un badge vert "Bon" signifie que plus de 50 % de la vie reste. Jaune "Modere" signifie entre 20 et 50 %. Rouge "Critique" signifie moins de 20 %. La date de remplacement recommandee exacte est affichee sous la jauge.',
    },
    {
      name: 'Ajustez les entrees et recalculez',
      text: 'Modifiez n\'importe quelle entree - modele de pile, valeur de consommation ou date d\'installation - et le resultat se met a jour automatiquement. Utilisez ceci pour comparer differents types de piles ou planifier des calendriers de remplacement pour plusieurs montres de votre collection.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quelle est la precision de l\'estimation theorique de la duree de vie de la pile?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Le calcul est un ideal electrique base sur la capacite divisee par la consommation. Dans des conditions reelles, vous pouvez vous attendre a une duree de vie 10 a 20 % plus courte en raison des variations de temperature, des circuits de detection de fin de vie, de la trainee mecanique des lubrifiants vieillis et de la charge supplementaire des fonctions de chronographe ou d\'alarme. L\'estimation est une limite superieure fiable, pas une prediction exacte.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ou trouver la valeur exacte de consommation electrique de mon calibre quartz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les fiches techniques officielles d\'ETA, Ronda, Miyota, Seiko, ISA et d\'autres fabricants de mouvements listent la consommation de courant moyenne en microamperes (µA). Recherchez le numero de reference du calibre suivi de fiche technique ou specification technique. Des bases de donnees specialisees comme Ranfft et 17jewels publient egalement des chiffres de consommation contribues par la communaute.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Que signifie µA et pourquoi est-ce important?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA signifie microampere, soit un millionieme d\'ampere. Cela mesure le courant electrique que le mouvement tire de la pile. Un mouvement quartz analogique typique a trois aiguilles consomme entre 1,0 et 2,5 µA. Les chronographes et modules multifonctions peuvent consommer 3,0 a 6,0 µA. Plus le courant est eleve, plus la duree de vie de la pile est courte pour une capacite de cellule donnee.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser cet outil pour les montres solaires ou kinetic?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Non. Les montres solaires utilisent des cellules photovoltaiques pour charger une batterie rechargeable. Les montres Kinetic utilisent un rotor et un micro-generateur pour charger un condensateur. Aucune de ces technologies ne repose sur une pile primaire jetable, donc le modele capacite-vs-consommation ne s\'applique pas. Utilisez ce calculateur uniquement pour les mouvements quartz standard avec piles remplacables a l\'oxyde d\'argent, alcalines ou au lithium.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dois-je remplacer la pile avant qu\'elle ne meure completement?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Les piles a l\'oxyde d\'argent et alcalines peuvent fuir de l\'hydroxyde de potassium lorsqu\'elles sont completement dechargees, endommageant les ressorts de contact, les pistes du circuit imprime et la bobine du moteur pas a pas. Le remplacement avant la decharge complete est fortement recommande. Si l\'outil montre moins de 6 mois de vie estimee restante, planifiez un changement de pile des que possible.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Comment savoir si la pile de ma montre est a l\'oxyde d\'argent ou alcaline?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Les piles a l\'oxyde d\'argent sont marquees SR (ex. SR920SW) et fournissent une tension stable de 1,55 V tout au long de leur vie. Les piles alcalines sont marquees LR (ex. LR41) et ont une tension qui diminue progressivement. La plupart des marques de montres de qualite specifient l\'oxyde d\'argent. Remplacez toujours SR par SR, pas LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Est-ce que l\'aiguille des secondes qui saute toutes les deux secondes signifie que la pile est en fin de vie?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Oui. Lorsque le mouvement quartz detecte une faible tension de pile, il entre dans un mode d\'economie d\'energie ou l\'aiguille des secondes saute par intervalles de 2 ou 4 secondes. C\'est l\'indicateur de fin de vie. Lorsque vous voyez ce comportement, la pile a environ 2 a 4 semaines de vie restante et doit etre remplacee immediatement pour eviter les fuites.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Controleur de Sante de Pile Quartz',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calculateur de Duree de Vie de Pile de Montre',
      'description': 'Calculez la duree de vie theorique de toute pile de mouvement quartz en entrant la capacite de la cellule (mAh) et la consommation du calibre (µA). Estime la date de remplacement lorsque le mois et l\'annee d\'installation sont fournis.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calcul de la duree de vie d\'une pile de montre quartz: capacite vs consommation expliquee',
      'proficiencyLevel': 'Beginner',
      'abstract': 'Apprenez a estimer la duree de vie de la pile d\'un mouvement quartz en utilisant la capacite de la cellule en mAh et la consommation electrique du mouvement en µA. Comprenez la formule, l\'effet de la temperature et de la charge, et quand planifier un remplacement.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment estimer la duree de vie d\'une pile de montre quartz',
      'description': 'Un guide etape par etape pour utiliser le Controleur de Sante de Pile Quartz afin de determiner la duree de vie restante de toute pile de montre quartz et planifier sa date de remplacement.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selectionnez ou personnalisez la pile',
          'text': 'Choisissez une pile courante a l\'oxyde d\'argent dans la liste deroulante - SR621SW, SR626SW, SR920SW, SR936SW et d\'autres sont prechargees avec leurs capacites officielles. Si votre pile n\'est pas listee, selectionnez Personnalisee et saisissez sa capacite exacte en mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Entrez la consommation electrique du mouvement',
          'text': 'Localisez la consommation de courant moyenne de votre calibre dans la documentation technique officielle. Saisissez la valeur en microamperes (µA) dans le champ de consommation.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ajoutez le mois et l\'annee d\'installation',
          'text': 'Si vous savez quand la pile a ete installee, selectionnez le mois et entrez l\'annee. L\'outil calcule la date de remplacement estimee et affiche la sante restante de la pile en pourcentage.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Lisez la duree de vie theorique',
          'text': 'La carte de resultat montre la duree de vie totale estimee de la pile en annees, mois et jours restants. C\'est la duree de vie maximale dans des conditions ideales.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Verifiez l\'etat de sante et la date de remplacement',
          'text': 'Lorsqu\'une date d\'installation est fournie, la jauge montre la vie restante. Vert signifie plus de 50 % restants. Jaune signifie 20 a 50 %. Rouge signifie moins de 20 %. La date de remplacement recommandee est affichee en dessous.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Controleur de Sante de Pile Quartz',
      'description': 'Un outil en ligne pour estimer la duree de vie des piles de montres quartz base sur la capacite de la cellule et la consommation electrique du mouvement.',
      'category': 'Calculateur de Pile de Montre',
      'audience': { '@type': 'Audience', 'audienceType': 'Passionnes de montres et techniciens de reparation' },
    },
  ],
};
