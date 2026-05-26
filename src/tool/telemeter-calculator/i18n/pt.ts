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
    { type: 'title', text: 'O que é a luneta de telémetro de um relógio?', level: 2 },
    { type: 'paragraph', html: 'Um telémetro é uma escala impressa no mostrador ou na luneta de um cronógrafo. Permite calcular a distância aproximada para um evento que pode ser visto e ouvido (como relâmpagos, fogos de artifício ou uma explosão).' },
  ],
  faq: [
    {
      question: 'Como utilizar a escala de telémetro de um relógio?',
      answer: 'Inicie o cronógrafo ao ver o evento (como o relâmpago). Pare-o assim que ouvir o som (o trovão). O ponteiro dos segundos indicará a distância na escala da luneta.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Configurar unidades e ambiente',
      text: 'Selecione as unidades de preferência e defina a temperatura atual do ar na sua localização.',
    },
  ],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
