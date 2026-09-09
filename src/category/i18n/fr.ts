import type { CategoryLocaleContent } from "../../types";

const slug = "horlogerie";
const title = "Outils d'Horlogerie et Guides de Référence";
const description =
  "Outils d'horlogerie pour passionnés: vérifiez la précision, démagnétisez les mouvements, calculez le temps de port et consultez les positions de couronne des calibres courants.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Un établi pour comprendre le temps", level: 2 },
    {
      type: "paragraph",
      html: `L’horlogerie commence lorsque le cadran cesse d’être une image et devient un système à lire. Cette collection réunit des instruments pour observer la marche, comprendre le rythme d’un mouvement, lire le geste de la couronne et décider avec davantage de contexte. Elle ne remplace pas l’établi d’un horloger : elle transforme les questions concrètes du quotidien en petites explorations, avec des résultats lisibles et une interface qui laisse place à la curiosité.`,
    },
    { type: "title", text: "Une précision qui se regarde", level: 2 },
    {
      type: "paragraph",
      html: `Mesurez l’avance ou le retard d’une montre, convertissez une fréquence entre VPH et Hz et observez comment les conditions de port peuvent modifier le résultat. Les outils de précision sont conçus pour comparer, répéter et apprendre : chaque chiffre conserve son unité, chaque conversion son sens et chaque résultat construit une intuition mécanique. La précision cesse alors d’être une abstraction pour devenir une expérience visible.`,
    },
    { type: "title", text: "Des références pour le geste mécanique", level: 2 },
    {
      type: "paragraph",
      html: `La couronne, le ressort moteur, le verre, le lume et le train d’engrenages racontent chacun une histoire différente du même objet. Consultez les positions de couronne, suivez un train de rouages, comparez les matériaux et explorez des complications comme la phase de lune, le calendrier perpétuel ou le tourbillon. Tout fonctionne dans le navigateur et les données d’usage restent sur votre appareil : une bibliothèque pratique pour collectionner, réparer, régler et regarder les montres avec plus d’attention.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instruments", value: "25", icon: "mdi:tools" },
        { label: "Calibres", value: "8+", icon: "mdi:engine" },
        { label: "Langues", value: "15", icon: "mdi:translate" },
        { label: "Confidentialité", value: "Locale", icon: "mdi:shield-check" },
      ],
    },
  ],
};
