import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Quale vetro per orologio resiste meglio ai graffi?", "answer": "Il vetro zaffiro è il più resistente, con durezza Mohs 9. Il minerale arriva a circa 5, mentre l'esalite è a 2-3 ma può essere lucidata." },
  { "question": "Si può riparare un vetro in esalite graffiato?", "answer": "Sì. L'acrilico esalite si lucida con prodotti come Polywatch. I vetri minerali e zaffiro di solito vanno sostituiti." },
  { "question": "Il vetro zaffiro è infrangibile?", "answer": "No. È molto duro ma può incrinarsi con un forte urto. L'esalite assorbe meglio gli impatti perché si deforma." },
  { "question": "Quale vetro è migliore per un orologio subacqueo?", "answer": "Lo zaffiro è lo standard per la resistenza ai graffi e alla pressione sott'acqua." }
];
const howTo = [
  { "name": "Seleziona un tipo di vetro", "text": "Fai clic su un vetro nell'elenco a sinistra per aprire la scheda delle statistiche." },
  { "name": "Confronta due vetri", "text": "Trascina un vetro sull'altro per confrontarli fianco a fianco." },
  { "name": "Chiudi il confronto", "text": "Fai clic su chiudi confronto per tornare alla vista singola." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'confronto-vetri-orologio-hesalite-minerale-zaffiro',
  title,
  description: 'Confronta i vetri da orologio hesalite, minerale e zaffiro con schede statistiche interattive. Vedi durezza, chiarezza, resistenza agli urti e ai graffi.',
  ui: {
    title: 'Confronto Vetri', subTitle: 'Interactive Crystal Stats', hardness: 'Durezza', clarity: 'Chiarezza',
    impactResistance: 'Urto', scratchResistance: 'Graffi', durability: 'Durata', priceRange: 'Prezzo',
    step1: 'Clicca su un vetro a sinistra.', step2: 'Trascinane uno su un altro per confrontare.',
    step3: 'Clicca su Chiudi.', tipTitle: 'Consiglio',
    tipContent: 'Il voto complessivo è una media di tutte le statistiche. Più alto non significa sempre migliore - l\'hesalite ha la migliore resistenza agli urti.',
    dragHint: 'Trascina', dragSub: 'per confrontare',
  },
  seo: [
  {
    "type": "title",
    "text": "Hesalita vs Cristal Mineral vs Zafiro: Guía comparativa de cristales de reloj",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Elegir el <strong>cristal de reloj</strong> adecuado es una decisión clave al comprar o restaurar un reloj. Esta guía compara <strong>hesalita (acrílico), cristal mineral y zafiro</strong> en dureza, claridad, resistencia a impactos, resistencia a arañazos, durabilidad y precio."
  },
  {
    "type": "title",
    "text": "Cristal de Hesalita (Acrílico / Plexiglás)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La hesalita es el cristal tradicional usado desde los años 30. Es blando (2-3 Mohs) y se raya con facilidad, pero se pule rápidamente. Ofrece la mejor resistencia a impactos. Ejemplo icónico: Omega Speedmaster Professional."
  },
  {
    "type": "title",
    "text": "Cristal Mineral (Endurecido)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El cristal mineral está compuesto de dióxido de silicio tratado térmicamente. Con 5 en la escala Mohs es más duro que la hesalita. Muy común en relojes de gama media como Seiko, Citizen y Orient."
  },
  {
    "type": "title",
    "text": "Cristal de Zafiro (Corindón Sintético)",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El zafiro sintético se fabrica a partir de óxido de aluminio fundido. Con dureza 9 en la escala Mohs es prácticamente inrayable y ofrece la mayor claridad óptica. Es el estándar en relojería de lujo."
  },
  {
    "type": "title",
    "text": "Tabla comparativa de cristales",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Propiedad",
      "Hesalita",
      "Cristal Mineral",
      "Cristal de Zafiro"
    ],
    "rows": [
      [
        "Dureza Mohs",
        "2-3/10",
        "5/10",
        "9/10"
      ],
      [
        "Claridad",
        "4/10",
        "7/10",
        "10/10"
      ],
      [
        "Resistencia a impactos",
        "5/10 (La mejor)",
        "3/10",
        "2/10"
      ],
      [
        "Resistencia a arañazos",
        "1/10",
        "5/10",
        "10/10"
      ],
      [
        "Reparable",
        "Sí (pulido)",
        "No (reemplazo)",
        "No (reemplazo)"
      ],
      [
        "Abombamiento posible",
        "Sí, extremo",
        "Limitado",
        "Limitado"
      ],
      [
        "Rango de precio",
        "5 - 30 €",
        "10 - 50 €",
        "30 - 200+ €"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Guía rápida de elección",
    "icon": "mdi:diamond-stone",
    "badge": "REFERENCIA",
    "html": "Para un <strong>reloj de uso diario</strong> elige zafiro por su resistencia a arañazos. Para <strong>restauraciones vintage</strong> la hesalita ofrece estética auténtica. El <strong>cristal mineral</strong> es la opción económica equilibrada."
  }
],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
