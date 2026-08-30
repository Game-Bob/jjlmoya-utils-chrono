import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: '¿Para qué sirve el bisel de telémetro en un reloj?',
    answer: 'Sirve para calcular la distancia entre el usuario del reloj y un suceso que es visible y audible. Históricamente, se usaba en operaciones militares para medir la distancia de la artillería enemiga, y hoy es popular para medir la distancia de tormentas y rayos.',
  },
  {
    question: '¿Cómo se calcula la distancia de un rayo con un reloj con telémetro?',
    answer: 'Inicia el cronógrafo al ver el destello de un rayo. Deténlo al escuchar el trueno. Lee el número en el bisel de telémetro señalado por la manecilla de los segundos para conocer la distancia (habitualmente en kilómetros o millas).',
  },
  {
    question: '¿Cuál es la diferencia entre un bisel taquimétrico y uno telemétrico?',
    answer: 'Un taquímetro mide la velocidad en base al tiempo transcurrido sobre una distancia conocida (como 1 kilómetro). Un telémetro mide la distancia en base al tiempo transcurrido y la velocidad conocida del sonido en el aire.',
  },
  {
    question: '¿Qué tan precisa es la escala de telémetro de un reloj?',
    answer: 'La mayoría de telémetros mecánicos están calibrados para condiciones estándar a 20 °C. Como la temperatura cambia la velocidad del sonido, la medición tendrá pequeños errores en días fríos o calurosos. Esta calculadora digital corrige esa desviación mediante la temperatura ambiente.',
  },
  {
    question: '¿Se puede usar el telémetro en el agua?',
    answer: 'No, las escalas de telémetro de los relojes están calibradas específicamente para la velocidad del sonido en el aire. El sonido viaja más de cuatro veces más rápido en el agua, por lo que la escala impresa sería sumamente inexacta bajo el agua.',
  },
];

const howTo = [
  {
    name: 'Configura las unidades y el entorno',
    text: 'Selecciona las unidades de tu preferencia (métrica o imperial) y ajusta la temperatura ambiente de tu ubicación.',
  },
  {
    name: 'Inicia en el destello',
    text: 'Pulsa el botón de disparo "Disparar Destello" o el pulsador de las 2 en punto en el momento en que veas el rayo.',
  },
  {
    name: 'Detén en el sonido',
    text: 'Pulsa el botón "Disparar Sonido" o el pulsador de las 2 en punto de nuevo en el instante en que escuches el trueno.',
  },
  {
    name: 'Lee la distancia',
    text: 'Lee la distancia calculada en el panel de resultados o directamente de la posición de la manecilla en el bisel del reloj.',
  },
];

const title = 'Calculadora de Telémetro: Cómo usar el telémetro de un reloj';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'calculadora-telemetrica',
  title,
  description: 'Aprende a usar el bisel de telémetro de un reloj. Calcula la distancia de un rayo al trueno o de cualquier destello y sonido con compensación de temperatura.',
  ui: {
    title: 'Calculadora de Telémetro',
    triggerFlash: 'Disparar Destello',
    triggerSound: 'Disparar Sonido',
    stop: 'Detener',
    reset: 'Restablecer',
    settings: 'Ajustes',
    unitSystem: 'Sistema de Unidades',
    metric: 'Métrico (km)',
    imperial: 'Imperial (millas)',
    temperature: 'Temperatura del Aire',
    speedOfSound: 'Velocidad del Sonido',
    distanceResult: 'Distancia Medida',
    elapsedTime: 'Tiempo Transcurrido',
    historyTitle: 'Historial de Mediciones',
    noHistory: '¡No hay mediciones aún. ¡Inicia un cálculo arriba!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Pulsa el botón de las 2 en punto o "Disparar Destello" cuando veas el suceso visual (ej. el rayo).',
    step2: 'Púlsalo de nuevo o haz clic en "Disparar Sonido" al escuchar el suceso acústico (ej. el trueno).',
    step3: 'Lee la distancia donde se detiene la manecilla en el bisel del telémetro.',
    tipTitle: 'Consejo Pro',
    tipContent: 'El aire caliente transmite el sonido más rápido que el aire frío. Ajustar la temperatura ambiente asegura que el cálculo coincida con la acústica real de tu entorno.',
  },
  seo: [
  {
    "type": "title",
    "text": "¿Qué es el bisel de telémetro en un reloj?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un telémetro es una escala impresa en la esfera o bisel de un reloj cronógrafo. Permite calcular la distancia a un evento remoto visible y audible."
  },
  {
    "type": "title",
    "text": "Cómo usar la escala de telémetro",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Paso 1: Iniciar el cronógrafo",
        "definition": "Inicia el cronómetro en el momento de ver el destello visual."
      },
      {
        "term": "Paso 2: Detener el cronógrafo",
        "definition": "Detén el cronómetro al escuchar el sonido del trueno."
      },
      {
        "term": "Paso 3: Leer la escala",
        "definition": "La aguja del segundero señalará la distancia en kilómetros o millas."
      }
    ]
  },
  {
    "type": "title",
    "text": "Física del cálculo de distancia",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La luz viaja a ~300.000 km/s (instantánea). El sonido viaja por el aire a unos 343 m/s a 20°C."
  },
  {
    "type": "title",
    "text": "Telémetro vs Taquímetro",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El <strong>taquímetro</strong> mide velocidad en distancia fija. El <strong>telémetro</strong> mide distancia en tiempo variable."
  },
  {
    "type": "title",
    "text": "Tabla de referencia tiempo vs distancia",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Tiempo transcurrido",
      "Distancia (km)",
      "Distancia (millas)",
      "Velocidad del sonido"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Importancia de la temperatura",
    "icon": "mdi:information",
    "badge": "PRECISIÓN",
    "html": "El sonido viaja más rápido en aire caliente. Ajustar la temperatura corrige la medición."
  }
],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
