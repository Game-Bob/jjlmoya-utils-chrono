import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';
import { buildTelemeterSeo } from '../../localeSeo';

const title = 'Calculadora de Telémetro: Como usar o telémetro de um relógio';
const description = 'Saiba como usar a luneta de telémetro de um relógio. Calcule a distância do raio ao trovão com base na temperatura do ar.';
const faq = [
  { "question": "Para que serve uma escala telemétrica num relógio?", "answer": "Serve para calcular a distância até um acontecimento visível e audível, como um relâmpago e o trovão." },
  { "question": "Como calcular a distância de um relâmpago com um telémetro?", "answer": "Inicie o cronógrafo ao ver o relâmpago, pare-o ao ouvir o trovão e leia o número indicado pelo ponteiro dos segundos." },
  { "question": "Qual é a diferença entre taquímetro e telémetro?", "answer": "O taquímetro mede velocidade numa distância conhecida. O telémetro mede distância com base no tempo e na velocidade do som." },
  { "question": "Qual é a precisão de uma escala telemétrica?", "answer": "É calibrada para a velocidade do som a 20°C, cerca de 343 m/s. As alterações de temperatura causam pequenos erros." },
  { "question": "É possível usar um telémetro debaixo de água?", "answer": "Não. O som viaja mais de quatro vezes mais depressa na água do que no ar." }
];
const howTo = [
  { "name": "Configure unidades e temperatura", "text": "Escolha unidades métricas ou imperiais e defina a temperatura ambiente." },
  { "name": "Inicie o cronógrafo ao ver o relâmpago", "text": "Clique em Disparar relâmpago ou prima o botão das duas horas quando vir o relâmpago." },
  { "name": "Pare ao ouvir o trovão", "text": "Clique em Disparar som ou prima novamente o botão quando ouvir o trovão." },
  { "name": "Leia a distância", "text": "Leia a distância no ecrã de resultados ou diretamente na luneta telemétrica." }
];

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
  seo: buildTelemeterSeo({ title, description, faq, howTo }),
faq,
  bibliography,
howTo,
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
