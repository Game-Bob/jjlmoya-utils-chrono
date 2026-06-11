import type { ToolLocaleContent } from '../../../types';
import type { WatchCrystalMaterialComparisonUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  { question: '¿Qué cristal de reloj es más resistente a los arañazos?', answer: 'El cristal de zafiro es el más resistente con una dureza de 9 en la escala de Mohs - solo el diamante es más duro. El mineral (5) es moderado, mientras que el hesalita (2-3) se raya fácilmente pero se puede pulir.' },
  { question: '¿Se puede reparar un cristal de hesalita rayado?', answer: 'Sí, los arañazos del hesalita se pueden pulir con Polywatch en minutos. Los cristales minerales y de zafiro no se pueden pulir y deben reemplazarse.' },
  { question: '¿Qué cristal es mejor para un reloj de buceo?', answer: 'El zafiro es el estándar para relojes de buceo por su resistencia a arañazos y durabilidad. El hesalita no se recomienda para bucear.' },
];
const howTo = [
  { name: 'Seleccionar un cristal', text: 'Haga clic en un cristal a la izquierda para ver su ficha de estadísticas a la derecha.' },
  { name: 'Comparar dos cristales', text: 'Arrastre un cristal de la lista y suéltelo sobre otro para compararlos lado a lado.' },
  { name: 'Cerrar comparación', text: 'Haga clic en "Close Comparison" para volver a la vista individual.' },
];
const title = 'Comparativa de Cristales de Reloj: Hesalita vs Mineral vs Zafiro';

export const content: ToolLocaleContent<WatchCrystalMaterialComparisonUI> = {
  slug: 'comparativa-cristales-reloj-hesalita-mineral-zafiro',
  title,
  description: 'Compare cristales de reloj de hesalita, mineral y zafiro con tarjetas de estadísticas interactivas. Vea dureza, claridad, resistencia al impacto, resistencia a arañazos y durabilidad.',
  ui: {
    title: 'Comparativa de Cristales', subTitle: 'Interactive Crystal Stats', hardness: 'Dureza', clarity: 'Claridad',
    impactResistance: 'Impacto', scratchResistance: 'Arañazos', durability: 'Durabilidad', priceRange: 'Precio',
    step1: 'Haga clic en un cristal a la izquierda.', step2: 'Arrastre uno sobre otro para comparar.',
    step3: 'Haga clic en Cerrar.', tipTitle: 'Consejo',
    tipContent: 'La valoración general es un promedio de todas las estadísticas. Más alto no siempre es mejor - el hesalita tiene la mejor resistencia al impacto.',
    dragHint: 'Arrastrar', dragSub: 'para comparar',
  },
  seo: [
    { type: 'title', text: 'Comparativa de Cristales de Reloj: Hesalita vs Mineral vs Zafiro', level: 2 },
    { type: 'paragraph', html: 'Compare <strong>hesalita, mineral y zafiro</strong> con tarjetas de estadísticas interactivas. Vea dureza, claridad, resistencia al impacto, arañazos y durabilidad.' },
  ],
  faq, bibliography, howTo, schemas: buildSchemas(title, faq, howTo),
};
