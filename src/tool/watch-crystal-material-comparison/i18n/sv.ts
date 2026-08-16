import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Vilket klockglas är mest reptåligt?", "answer": "Safirglas är mest reptåligt med hårdhet 9 på Mohs skala. Mineralglas ligger runt 5 och hesalit runt 2-3, men hesalit kan poleras." },
  { "question": "Kan ett repat hesalitglas repareras?", "answer": "Ja. Hesalitakryl kan poleras med produkter som Polywatch. Mineral- och safirglas behöver vanligtvis bytas ut." },
  { "question": "Är safirglas oförstörbart?", "answer": "Nej. Safir är mycket hårt men kan spricka vid kraftiga stötar. Hesalit tar upp stötar bättre eftersom det deformeras." },
  { "question": "Vilket glas passar bäst för en dykarklocka?", "answer": "Safir är standard för dykarklockor eftersom det tål repor och tryck under vatten." }
];
const howTo = [
  { "name": "Välj en glastyp", "text": "Klicka på ett glas i listan till vänster för att öppna dess statistikkort." },
  { "name": "Jämför två glas", "text": "Dra ett glas över ett annat för att jämföra dem sida vid sida." },
  { "name": "Stäng jämförelsen", "text": "Klicka på stäng jämförelse för att återgå till enskild vy." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'urglasjamforelse-hesalit-mineral-safir',
  title,
  description: 'Jämför hesalit, mineral och safir urglas med interaktiva statistik-kort. Se hårdhet, klarhet, slagtålighet, reptålighet och hållbarhet.',
  ui: {
    title: 'Glasjämförelse', subTitle: 'Interactive Crystal Stats', hardness: 'Hårdhet', clarity: 'Klarhet',
    impactResistance: 'Slag', scratchResistance: 'Repor', durability: 'Hållbarhet', priceRange: 'Pris',
    step1: 'Klicka på ett glas till vänster.', step2: 'Dra ett över ett annat för att jämföra.',
    step3: 'Klicka på Stäng.', tipTitle: 'Tips',
    tipContent: 'Totalbetyget är ett genomsnitt av alla statistikvärden. Högre är inte alltid bättre - hesalit har bäst slagtålighet.',
    dragHint: 'Dra', dragSub: 'för att jämföra',
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
