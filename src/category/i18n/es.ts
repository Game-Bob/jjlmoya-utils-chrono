import type { CategoryLocaleContent } from '../../types';

const slug = 'horologia';
const title = 'Herramientas de Horología y Calculadoras de Precisión';
const description = 'Monitorea y calcula la precisión, deriva y desviación diaria de tus relojes mecánicos o de cuarzo con utilidades de horología en línea.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Regulación de Relojes y Seguimiento de Precisión', level: 2 },
    { type: 'paragraph', html: 'Para mantener la longevidad y precisión de los relojes mecánicos, es fundamental realizar un seguimiento de su desviación diaria. Esta suite ofrece a coleccionistas y entusiastas de la relojería herramientas de análisis para medir la estabilidad de marcha sin costosos cronocomparadores.' },
    { type: 'title', text: 'Desviación Diaria y Deriva Acumulada', level: 2 },
    { type: 'paragraph', html: 'Utilizando una fuente de hora atómica como referencia, puedes registrar la diferencia en segundos para calcular la deriva real. Además, puedes proyectar cómo se acumulará una tasa de desviación diaria en segundos, minutos y horas a lo largo de semanas, meses o años.' },
    { type: 'stats', items: [
      { label: 'Precisión', value: 'Microsegundo', icon: 'mdi:clock-fast' },
      { label: 'Calculadoras', value: 'Proyectiva', icon: 'mdi:calculator-variant' },
      { label: 'Estándares', value: 'COSC/ISO', icon: 'mdi:certificate' },
      { label: 'Privacidad', value: 'Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
