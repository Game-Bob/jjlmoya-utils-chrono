import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Cuál es la diferencia entre el tiempo solar y el tiempo sidéreo?',
    answer: 'El tiempo solar se basa en la posición del Sol respecto al meridiano local (tarda 24 horas), mientras que el tiempo sidéreo se basa en la rotación de la Tierra respecto a estrellas de fondo lejanas (tarda 23 horas, 56 minutos, 4,09 segundos).',
  },
  {
    question: '¿Por qué un día sidéreo es más corto que un día solar?',
    answer: 'Mientras la Tierra gira sobre su eje, también viaja a lo largo de su órbita alrededor del Sol. Para volver a mirar al Sol, la Tierra tiene que rotar un poco más de 360 grados, lo que añade unos 3 minutos y 56 segundos al día en comparación con una rotación simplemente alineada a las estrellas.',
  },
  {
    question: '¿Cómo afecta la longitud al tiempo sidéreo local?',
    answer: 'El Tiempo Sidéreo Local se calcula añadiendo la longitud del observador (convertida a horas: 15 grados por hora) al Tiempo Sidéreo Medio de Greenwich (GMST). Cada grado hacia el este añade 4 minutos a su reloj sidéreo local.',
  },
];

const howTo = [
  {
    name: 'Ajuste su longitud de referencia',
    text: 'Deslice el control hasta su longitud local. Esto alinea la escala sidérea de 24 horas con su meridiano local.',
  },
  {
    name: 'Observe las manecillas solares y sidéreas',
    text: 'Mire la esfera: las manecillas solares estándar muestran la hora UTC en el dial interior de 12 horas, mientras que la manecilla dorada y las estrellas muestran la hora sidérea en la escala exterior de 24 horas.',
  },
  {
    name: 'Acelere la velocidad celeste',
    text: 'Haga clic en los multiplicadores de velocidad 200× o 5000× para ver la rotación del fondo estelar y la deriva acumularse en tiempo real.',
  },
];

const title = 'Rastreador Astronómico de Tiempo Sidéreo: Reloj de Tiempo Sidéreo Local';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'rastreador-tiempo-sideral',
  title,
  description: 'Siga el Tiempo Sidéreo Medio de Greenwich (GMST) y el Tiempo Sidéreo Local (LST) con una artística esfera de astrolabio astronómico y un simulador de deriva estelar en tiempo real.',
  ui: {
    title: 'Rastreador de Tiempo Sidéreo',
    longitudeLabel: 'Longitud del observador',
    solarTimeLabel: 'Tiempo Universal Coordinado (UTC)',
    siderealTimeLabel: 'Tiempo Sidéreo Local (LST)',
    differenceLabel: 'Deriva Estelar-Solar',
    utcLabel: 'Fecha/Hora UTC',
    speedLabel: 'Velocidad Celeste',
    speedNormal: '1× (Tiempo real)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Deriva)',
    audioToggleLabel: 'Tics de Campana Cósmica',
    step1: 'Ajuste su longitud local para ver el cambio del Tiempo Sidéreo Local en tiempo real.',
    step2: 'Cambie el multiplicador de velocidad para ver la deriva de la manecilla solar estándar y la esfera estelar sidérea.',
    step3: 'Active las Campanas Cósmicas para escuchar la diferencia entre un tic normal y un cruce de hora astronómico.',
    tipTitle: 'Deriva Astronómica',
    tipContent: 'Debido a que la Tierra orbita alrededor del Sol, los relojes solares estándar se retrasan respecto al tiempo sidéreo en 3 minutos y 56 segundos por día, acumulando exactamente 24 horas de deriva en el transcurso de un año completo.',
    useLocationBtn: 'Usar ubicación actual',
    hemisphereLabel: 'Hemisferio Estelar',
    hemisphereNorth: 'Norte (Osa Mayor)',
    hemisphereSouth: 'Sur (Cruz)',
    longitudeFormatLabel: 'Formato de longitud',
    longitudeFormatDecimal: 'Grados decimales',
    longitudeFormatDMS: 'Grados/Minutos',
  },
  seo: [
    { type: 'title', text: '¿Qué es el tiempo sidéreo?', level: 2 },
    { type: 'paragraph', html: 'El tiempo sidéreo es un sistema de medición del tiempo que los astrónomos usan para localizar objetos celestes. Un día sidéreo dura aproximadamente 23 horas, 56 minutos y 4,09 segundos. Es el tiempo que tarda la Tierra en completar una rotación sobre su eje relativa al equinoccio vernal o las estrellas lejanas, en lugar del Sol.' },
    { type: 'title', text: 'Día Solar vs. Día Sidéreo', level: 3 },
    { type: 'paragraph', html: 'Un día solar mide el tiempo entre tránsitos consecutivos del Sol por el meridiano local. Debido a que la Tierra recorre aproximadamente 1/365 de su órbita alrededor del Sol cada día, debe rotar ligeramente más de 360 grados para realinearse con el Sol. Un día sidéreo es una rotación verdadera de 360 grados relativa a las estrellas, lo que lo hace 3 minutos y 56 segundos más corto.' },
    { type: 'title', text: 'Por qué les importa a astrónomos y relojeros', level: 3 },
    { type: 'paragraph', html: 'Para los astrónomos, una estrella está siempre en la misma posición en el cielo a la misma Hora Sidérea. Para rastrear estrellas, las monturas de los telescopios deben rotar exactamente una vez por día sidéreo. Las marcas de alta relojería (como Patek Philippe, Vacheron Constantin e IWC) crean relojes astronómicos ultracomplicados con trenes de engranajes sidéreos para rastrear la LST directamente en la muñeca.' },
    { type: 'title', text: 'Tabla de referencia de deriva estelar vs. solar', level: 3 },
    {
      type: 'table', headers: ['Días transcurridos', 'Tiempo sidéreo adelantado', 'Grados de desplazamiento', 'Deriva de constelaciones'], rows: [
        ['1 día', '3m 56s', '0,986°', 'Ligero desplazamiento al oeste'],
        ['15 días', '59m 0s', '14,79°', 'Medio signo zodiacal'],
        ['30 días', '1h 58m', '29,58°', 'Una constelación zodiacal completa'],
        ['90 días', '5h 54m', '88,74°', 'Una estación completa'],
        ['180 días', '11h 48m', '177,48°', 'Constelaciones opuestas visibles a medianoche'],
        ['365 días', '24h 0m', '360,00°', 'Ciclo completo, reinicio de alineación estelar'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Calculado desde la Época J2000', icon: 'mdi:creation-outline', badge: 'CÁLCULO', html: 'El Tiempo Sidéreo Local se calcula convirtiendo la hora UTC a Fecha Juliana (días desde -4712), encontrando el Tiempo Sidéreo Medio de Greenwich y aplicando su longitud (15 grados por hora). Nuestra herramienta usa el modelo lineal IAU J2000 de alta precisión para el seguimiento en tiempo real.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
