import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { "question": "Qual vidro de relógio é mais resistente a riscos?", "answer": "O safira é o mais resistente, com dureza 9 na escala de Mohs. O mineral fica perto de 5 e a hesalita entre 2 e 3, mas pode ser polida." },
  { "question": "É possível reparar hesalita riscada?", "answer": "Sim. O acrílico hesalita pode ser polido com produtos como Polywatch. Vidros minerais e de safira normalmente precisam de ser substituídos." },
  { "question": "O vidro de safira é inquebrável?", "answer": "Não. É muito duro, mas pode rachar com um impacto forte. A hesalita absorve melhor os impactos porque se deforma." },
  { "question": "Qual vidro é melhor para um relógio de mergulho?", "answer": "A safira é o padrão em relógios de mergulho pela resistência a riscos e à pressão subaquática." }
];
const howTo = [
  { "name": "Selecionar um tipo de vidro", "text": "Clique num vidro da lista à esquerda para abrir o respetivo cartão de estatísticas." },
  { "name": "Comparar dois vidros", "text": "Arraste um vidro sobre o outro para os comparar lado a lado." },
  { "name": "Fechar a comparação", "text": "Clique em fechar comparação para voltar à vista individual." }
];
const title = 'Comparativa de cristales de reloj: Hesalita vs Cristal mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'comparacao-cristais-relogio-hesalite-mineral-safira',
  title,
  description: 'Compare cristais de relógio hesalite, mineral e safira com cartas de estatísticas interativas. Veja dureza, clareza, resistência ao impacto e a arranhões.',
  ui: {
    title: 'Comparação de Cristais', subTitle: 'Interactive Crystal Stats', hardness: 'Dureza', clarity: 'Clareza',
    impactResistance: 'Impacto', scratchResistance: 'Arranhão', durability: 'Durabilidade', priceRange: 'Preço',
    step1: 'Clique num cristal à esquerda.', step2: 'Arraste um sobre outro para comparar.',
    step3: 'Clique em Fechar.', tipTitle: 'Dica',
    tipContent: 'A classificação geral é uma média de todas as estatísticas. Mais alto nem sempre é melhor - o hesalite tem a melhor resistência ao impacto.',
    dragHint: 'Arrastar', dragSub: 'para comparar',
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
