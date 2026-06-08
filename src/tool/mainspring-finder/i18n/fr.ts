import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'recherche-ressort-moteur',
  title: 'Calculateur de Ressort Moteur',
  description: 'Calculez les dimensions du ressort moteur d\'après les mesures du barillet pour les mouvements de montres vintage.',
  ui: {
    title: 'Calculateur de Ressort Moteur',
    barrelLabel: 'Diam. int. du barillet',
    arborLabel: 'Diam. ext. de l\'arbre',
    heightLabel: 'Hauteur du barillet',
    turnsLabel: 'Tours',
    calculate: 'Calculer',
    resultThickness: 'Épaisseur',
    resultHeight: 'Hauteur',
    resultLength: 'Longueur',
    resultStrength: 'Force',
    strengthWeak: 'Léger',
    strengthMedium: 'Moyen',
    strengthStrong: 'Fort',
    commercial: 'Taille commerciale',
    unitLabel: 'Unité',
    mm: 'mm',
    inch: 'in',
    step1: 'Mesurez le diamètre intérieur du barillet, le diamètre extérieur de l\'arbre et la hauteur intérieure avec un pied à coulisse.',
    step2: 'Définissez le nombre de tours de remontage attendu (5-8 manuel, 6-10 automatique).',
    step3: 'Basculez entre mm/in selon votre système d\'unités préféré.',
    tipTitle: 'Astuce',
    tipContent: 'Vérifiez toujours les dimensions calculées par rapport aux spécifications du fabricant. Recoupez avec les catalogues des fournisseurs avant de commander.',
  },
  seo: [
    { type: 'title', text: 'Calculateur de Ressort Moteur: Calculez les Dimensions du Ressort pour les Mouvements de Montre', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Épaisseur typique du ressort' },
        { value: '5-10 tours', label: 'Plage de remontage standard' },
        { value: '150-450 mm', label: 'Longueur courante du ressort' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'La restauration d\'un mouvement de montre vintage commence souvent par l\'identification du ressort moteur correct. Le <strong>Calculateur de Ressort Moteur</strong> vous aide à calculer les dimensions théoriques du ressort moteur à partir de la géométrie du barillet. En saisissant le diamètre intérieur du barillet, le diamètre de l\'arbre, la hauteur du barillet et le nombre de tours attendu, l\'outil calcule l\'épaisseur, la hauteur et la longueur du ressort. Les résultats sont également affichés sous forme de tailles commerciales approximatives en unités métriques et impériales, ce qui facilite le recoupement avec les catalogues des fournisseurs.' },
    { type: 'title', text: 'Comment les dimensions du ressort moteur sont calculées', level: 3 },
    { type: 'paragraph', html: 'Le ressort moteur occupe l\'espace annulaire entre la paroi du barillet et l\'arbre. L\'<strong>épaisseur du ressort</strong> est estimée par <strong>(diamètre intérieur du barillet - diamètre extérieur de l\'arbre) / (2 x tours + 1.5)</strong>, où le 1.5 supplémentaire tient compte de la fixation de l\'extrémité du ressort et de l\'espace qu\'il occupe contre lui-même. La <strong>longueur du ressort</strong> suit <strong>L = π x tours x (diamètre intérieur du barillet + diamètre extérieur de l\'arbre) / 2</strong>, ce qui donne la longueur totale du ruban à plat. La <strong>hauteur du ressort</strong> est égale à la hauteur intérieure du barillet moins un léger jeu (généralement 0.1 mm) pour éviter le frottement contre le couvercle du barillet.' },
    { type: 'title', text: 'Comment mesurer un barillet pour la sélection du ressort moteur', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Diamètre intérieur du barillet', definition: 'Le diamètre intérieur du tambour du barillet mesuré avec un pied à coulisse. C\'est le plus grand cercle que le ressort moteur peut occuper. Plage typique: 8-30 mm.' },
        { term: 'Diamètre de l\'arbre', definition: 'Le diamètre de l\'arbre du barillet à son point le plus large où la spire intérieure du ressort moteur s\'accroche. Les arbres plus petits permettent des ressorts plus longs pour le même barillet.' },
        { term: 'Hauteur du barillet', definition: 'La hauteur intérieure du tambour du barillet. La hauteur du ressort moteur doit être légèrement inférieure (0.05-0.15 mm) pour permettre une rotation libre sans frottement sur le couvercle.' },
        { term: 'Nombre de tours', definition: 'Le nombre de tours de remontage complets que le mouvement fournit. Les calibres à remontage manuel offrent généralement 5-8 tours, les automatiques 6-10 tours.' },
      ],
    },
    { type: 'title', text: 'Force du ressort et ce qu\'elle signifie pour votre mouvement', level: 3 },
    { type: 'paragraph', html: 'L\'<strong>épaisseur du ressort</strong> est le principal facteur déterminant le couple transmis au train d\'engrenages. Un ressort plus épais (plus de 0.14 mm) fournit un couple élevé adapté aux mouvements avec complications comme les chronographes ou les mécanismes de sonnerie. Les ressorts moyens (0.10-0.14 mm) sont standard pour la plupart des calibres simples heure/date. Les ressorts fins (moins de 0.10 mm) se trouvent dans les petits mouvements pour dames ou les calibres ultra-plats. Respectez toujours les spécifications du fabricant d\'origine lorsqu\'elles sont disponibles; un ressort trop fort peut endommager l\'arbre du barillet ou les pivots du train d\'engrenages.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Utiliser le mauvais ressort moteur peut endommager votre mouvement',
      html: 'Installer un ressort <strong>trop épais</strong> augmente la friction et le couple au-delà des limites de conception, pouvant user le trou de l\'arbre du barillet, plier le pivot de la roue de centre, ou même fissurer le barillet. Un ressort <strong>trop fin</strong> ne fournira pas assez d\'amplitude, ce qui fera retarder la montre ou s\'arrêter avant d\'atteindre sa pleine réserve de marche. Recoupez toujours les dimensions calculées avec les catalogues des fournisseurs connus avant de commander.',
    },
    { type: 'title', text: 'Systèmes de tailles commerciales des ressorts moteur', level: 3 },
    { type: 'paragraph', html: 'Les fournisseurs de ressorts moteur cataloguent les ressorts par <strong>longueur x hauteur x épaisseur</strong> en millimètres. Les tailles métriques courantes suivent le système General Resources ou GR. Les systèmes en inch sont encore utilisés par certains fournisseurs américains et britanniques. L\'outil affiche les deux systèmes afin que vous puissiez rechercher dans les catalogues quel que soit le fournisseur. Lorsque la taille calculée exacte n\'est pas disponible, choisissez la taille commerciale la plus proche qui correspond exactement à la hauteur et à l\'épaisseur à 0.005 mm près, puis ajustez la longueur en sélectionnant un ressort de la même famille hauteur/épaisseur.' },
    { type: 'title', text: 'Considérations sur les Calibres Vintage', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Calibres suisses (ETA, FHF, AS, Unitas)</strong> - bien documentés dans le système GR. La plupart ont des références de ressorts moteur connues.',
        '<strong>Calibres français (LIP, France Ebauches)</strong> - utilisent souvent des proportions de barillet non standard. Mesurez soigneusement.',
        '<strong>Calibres américains (Waltham, Elgin, Illinois)</strong> - systèmes en inch. Utilisez les résultats impériaux pour recouper.',
        '<strong>Calibres japonais (Seiko, Citizen, Miyota)</strong> - système métrique avec une bonne couverture catalogue pour les mouvements d\'après 1960.',
        '<strong>Calibres chinois (Sea-Gull, DG, Tongji)</strong> - copient souvent des designs suisses. La référence GR suisse s\'applique généralement.',
      ],
    },
    {
      type: 'summary',
      title: 'Points clés pour la sélection du ressort moteur',
      items: [
        'Mesurez le diamètre intérieur du barillet, le diamètre extérieur de l\'arbre et la hauteur du barillet avec précision à l\'aide d\'un pied à coulisse',
        'Utilisez les dimensions calculées comme point de départ, pas comme spécification absolue',
        'Recoupez avec les fiches techniques du fabricant ou les catalogues des fournisseurs connus',
        'Faites correspondre exactement la hauteur du ressort à la hauteur du barillet moins 0.05-0.15 mm de jeu',
        'Faites correspondre l\'épaisseur à 0.005 mm près de la valeur calculée pour des performances optimales',
        'Vérifiez que la longueur du ressort est adéquate pour le nombre de tours de remontage attendu',
      ],
    },
  ],
  faq: [
    {
      question: 'Quelle est la précision des dimensions calculées du ressort moteur?',
      answer: 'Les calculs sont basés sur des formules horlogères standard qui supposent une géométrie de barillet idéale. Les dimensions réelles peuvent varier jusqu\'à 5-10 % en raison des toltérances de fabrication, des configurations d\'extrémité du ressort (bridge, oeillet ou embout en T) et de l\'alliage spécifique utilisé. Utilisez toujours les valeurs calculées comme une référence solide, mais recoupez avec les fiches techniques du fabricant ou les catalogues des fournisseurs avant de commander.',
    },
    {
      question: 'Que faire si je ne trouve pas la taille commerciale exacte?',
      answer: 'Lorsque la taille exacte n\'est pas disponible, privilégiez d\'abord la correspondance exacte de la hauteur du ressort, puis de l\'épaisseur à 0.005 mm près. La longueur peut être ajustée en sélectionnant un autre ressort de la même famille hauteur et épaisseur. Un ressort légèrement plus long fonctionnera si le barillet a assez d\'espace, mais un ressort plus court réduira la réserve de marche.',
    },
    {
      question: 'Comment mesurer les dimensions du barillet sans retirer le ressort moteur?',
      answer: 'Si le barillet contient encore l\'ancien ressort, vous pouvez mesurer le diamètre extérieur du barillet depuis l\'extérieur (puis soustraire l\'épaisseur de la paroi, généralement 0.2-0.4 mm) et la hauteur totale (puis soustraire l\'épaisseur du couvercle). Pour des résultats les plus précis, retirez l\'ancien ressort et nettoyez le barillet avant de mesurer.',
    },
    {
      question: 'Quelle est la différence entre un embout bridge et un embout à oeillet de ressort moteur?',
      answer: 'Un embout bridge (galement appelé embout en T) possède une petite languette en T qui s\'accroche dans la paroi du barillet. La plupart des calibres suisses et japonais modernes utilisent ce type. Un embout à oeillet possède un petit trou qui se place sur un ergot de l\'arbre. Cet outil calcule uniquement les dimensions du ruban; vous devez vérifier que le type d\'embout correspond à votre barillet avant de commander.',
    },
    {
      question: 'Puis-je utiliser cet outil pour les mouvements chronographes ou automatiques?',
      answer: 'Oui, mais notez que les mouvements automatiques ont souvent un nombre de tours plus élevé (8-10) et peuvent nécessiter un ressort légèrement plus fin pour accommoder le module de remontage supplémentaire. Les mouvements chronographes nécessitent généralement des ressorts plus épais pour entraîner le mécanisme de chronographe. Ajustez la valeur Tours en conséquence et vérifiez par rapport aux spécifications du fabricant.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mesurez le diamètre intérieur du barillet',
      text: 'Utilisez un pied à coulisse de précision pour mesurer le diamètre intérieur du tambour du barillet. Mesurez à deux points à 90 degrés d\'écart et faites la moyenne des lectures. Notez le résultat en millimètres.',
    },
    {
      name: 'Mesurez le diamètre de l\'arbre',
      text: 'Mesurez le diamètre de l\'arbre du barillet au point le plus large où la spire intérieure du ressort moteur s\'attache. C\'est généralement près du centre de l\'arbre, pas à l\'extrémité carrée.',
    },
    {
      name: 'Mesurez la hauteur intérieure du barillet',
      text: 'Mesurez la profondeur du barillet du fond au bord supérieur. Si le couvercle est amovible, incluez l\'épaisseur du couvercle dans votre mesure. La hauteur du ressort sera d\'environ 0.1 mm de moins.',
    },
    {
      name: 'Définissez le nombre de tours',
      text: 'Déterminez combien de tours complets le ressort moteur effectue lorsqu\'il est complètement remonté. Pour les calibres à remontage manuel, c\'est généralement 5-8 tours. Les automatiques peuvent avoir 6-10 tours. Vérifiez les spécifications du mouvement si disponibles.',
    },
    {
      name: 'Lisez les dimensions calculées',
      text: 'L\'outil affiche l\'épaisseur, la hauteur et la longueur recommandées du ressort. Il estime également la catégorie de force du ressort et fournit des équivalents commerciaux en unités métriques et impériales.',
    },
    {
      name: 'Recoupez avec les catalogues',
      text: 'Utilisez les tailles commerciales affichées pour rechercher dans les catalogues des fournisseurs. Saisissez les dimensions métriques ou impériales dans Cousins UK, Jules Borel, ou votre fournisseur préféré. Ajustez la recherche si la taille exacte n\'est pas disponible.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quelle est la précision des dimensions calculées du ressort moteur?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Les calculs sont basés sur des formules horlogères standard qui supposent une géométrie de barillet idéale. Les dimensions réelles peuvent varier jusqu\'à 5-10 % en raison des toltérances de fabrication, des configurations d\'extrémité du ressort, et de l\'alliage spécifique utilisé. Recoupez toujours avec les fiches techniques du fabricant ou les catalogues commerciaux avant de commander.' },
        },
        {
          '@type': 'Question',
          'name': 'Que faire si je ne trouve pas la taille commerciale exacte?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Faites d\'abord correspondre exactement la hauteur du ressort, puis l\'épaisseur à 0.005 mm près. Ajustez la longueur à partir de la même famille hauteur/épaisseur.' },
        },
        {
          '@type': 'Question',
          'name': 'Comment mesurer le barillet sans retirer le ressort moteur?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Mesurez le diamètre extérieur du barillet et soustrayez l\'épaisseur de la paroi (0.2-0.4 mm). Pour de meilleurs résultats, retirez d\'abord l\'ancien ressort.' },
        },
        {
          '@type': 'Question',
          'name': 'Quelle est la différence entre les embouts bridge et à oeillet?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'L\'embout bridge (en T) s\'accroche dans la paroi du barillet. L\'embout à oeillet a un trou sur un ergot de l\'arbre. Les calibres suisses/japonais modernes utilisent des embouts bridge.' },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je utiliser ceci pour les mouvements chronographes ou automatiques?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Oui. Les automatiques nécessitent souvent plus de tours (8-10) et des ressorts plus fins. Les chronographes nécessitent des ressorts plus épais. Ajustez les Tours et vérifiez.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Calculateur de Ressort Moteur',
      'operatingSystem': 'Tous',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calculateur de Ressort Moteur pour Montres',
      'description': 'Calculez les dimensions théoriques du ressort moteur à partir des mesures du barillet pour les mouvements de montres vintage.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calcul des dimensions du ressort moteur de montre',
      'proficiencyLevel': 'Intermédiaire',
      'abstract': 'Apprenez à calculer les dimensions du ressort moteur à partir du diamètre intérieur du barillet, de la taille de l\'arbre et des tours de remontage.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Comment trouver le bon ressort moteur',
      'description': 'Guide étape par étape pour mesurer un barillet de montre et calculer les dimensions correctes du ressort moteur.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Mesurez le diam. int. du barillet', 'text': 'Utilisez un pied à coulisse de précision pour mesurer le diamètre intérieur du tambour du barillet.' },
        { '@type': 'HowToStep', 'name': 'Mesurez le diam. ext. de l\'arbre', 'text': 'Mesurez le diamètre de l\'arbre du barillet à son point le plus large.' },
        { '@type': 'HowToStep', 'name': 'Mesurez la hauteur du barillet', 'text': 'Mesurez la profondeur intérieure. La hauteur du ressort est d\'environ 0.1 mm de moins.' },
        { '@type': 'HowToStep', 'name': 'Définissez les tours', 'text': 'Définissez 5-8 pour le remontage manuel, 6-10 pour les mouvements automatiques.' },
        { '@type': 'HowToStep', 'name': 'Lisez les résultats', 'text': 'Consultez l\'épaisseur, la hauteur, la longueur du ressort et les équivalents commerciaux.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Calculateur de Ressort Moteur',
      'description': 'Un outil pour horlogers permettant de calculer les dimensions du ressort moteur à partir des mesures du barillet.',
      'category': 'Outil d\'Horlogerie',
      'audience': { '@type': 'Audience', 'audienceType': 'Horlogers et passionnés d\'horlogerie' },
    },
  ],
};
