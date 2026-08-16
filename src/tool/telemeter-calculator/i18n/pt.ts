import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'calculadora-telemetro',
  title: 'Calculadora de Telémetro: Como usar o telémetro de um relógio',
  description: 'Saiba como usar a luneta de telémetro de um relógio. Calcule a distância do raio ao trovão com base na temperatura do ar.',
  ui: {
    title: 'Calculadora de Telémetro',
    triggerFlash: 'Disparar Flash',
    triggerSound: 'Disparar Som',
    stop: 'Parar',
    reset: 'Reiniciar',
    settings: 'Definições',
    unitSystem: 'Sistema de Unidades',
    metric: 'Métrico (km)',
    imperial: 'Imperial (milhas)',
    temperature: 'Temperatura do Ar',
    speedOfSound: 'Velocidade do Som',
    distanceResult: 'Distância Medida',
    elapsedTime: 'Tempo Transcorrido',
    historyTitle: 'Histórico de Medições',
    noHistory: 'Nenhuma medição ainda. Inicie um cálculo acima!',
    sec: 's',
    km: 'km',
    m: 'm',
    mi: 'mi',
    ft: 'ft',
    step1: 'Clique no botão das 2 horas ou "Disparar Flash" assim que vir o relâmpago.',
    step2: 'Clique novamente ou em "Disparar Som" quando ouvir o trovão.',
    step3: 'Leia a distância onde o ponteiro dos segundos para na luneta do telémetro.',
    tipTitle: 'Conselho de Pro',
    tipContent: 'O ar quente conduz o som mais rápido do que o ar frio. O ajuste da temperatura ambiente garante que o cálculo da distância corresponda à física da sua área.',
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
faq: [
  { "question": "Para que serve uma escala telemétrica num relógio?", "answer": "Serve para calcular a distância até um acontecimento visível e audível, como um relâmpago e o trovão." },
  { "question": "Como calcular a distância de um relâmpago com um telémetro?", "answer": "Inicie o cronógrafo ao ver o relâmpago, pare-o ao ouvir o trovão e leia o número indicado pelo ponteiro dos segundos." },
  { "question": "Qual é a diferença entre taquímetro e telémetro?", "answer": "O taquímetro mede velocidade numa distância conhecida. O telémetro mede distância com base no tempo e na velocidade do som." },
  { "question": "Qual é a precisão de uma escala telemétrica?", "answer": "É calibrada para a velocidade do som a 20°C, cerca de 343 m/s. As alterações de temperatura causam pequenos erros." },
  { "question": "É possível usar um telémetro debaixo de água?", "answer": "Não. O som viaja mais de quatro vezes mais depressa na água do que no ar." }
],
  bibliography,
howTo: [
  { "name": "Configure unidades e temperatura", "text": "Escolha unidades métricas ou imperiais e defina a temperatura ambiente." },
  { "name": "Inicie o cronógrafo ao ver o relâmpago", "text": "Clique em Disparar relâmpago ou prima o botão das duas horas quando vir o relâmpago." },
  { "name": "Pare ao ouvir o trovão", "text": "Clique em Disparar som ou prima novamente o botão quando ouvir o trovão." },
  { "name": "Leia a distância", "text": "Leia a distância no ecrã de resultados ou diretamente na luneta telemétrica." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
