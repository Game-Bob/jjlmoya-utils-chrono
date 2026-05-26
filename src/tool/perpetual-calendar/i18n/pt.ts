import type { ToolLocaleContent } from '../../../types';
import type { PerpetualCalendarUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'O que é um calendário perpétuo em um relógio?',
    answer: 'Um calendário perpétuo é uma complicação relojoeira mecânica que exibe automaticamente a data, dia, mês e fase lunar corretos, levando em conta meses de diferentes durações e anos bissextos. É programado para ser preciso até o ano 2100 (o próximo ano secular não divisível por 400).',
  },
  {
    question: 'Como um calendário perpétuo sabe os anos bissextos?',
    answer: 'O programa mecânico usa uma engrenagem de 48 meses (4 anos) com um came especialmente projetado que contabiliza o dia 29 de fevereiro. O mecanismo sabe que anos divisíveis por 100 não são bissextos a menos que também sejam divisíveis por 400. A maioria dos calendários perpétuos são precisos até 2100, quando exigirão uma correção de um dia.',
  },
  {
    question: 'Qual a diferença entre um calendário perpétuo e um anual?',
    answer: 'Um calendário anual requer uma correção manual por ano (no final de fevereiro), enquanto um calendário perpétuo lida automaticamente com anos bissextos e continua correto por décadas. Calendários perpétuos são mecanicamente muito mais complexos.',
  },
];

const howTo = [
  {
    name: 'Avance a data',
    text: 'Use os botões D (dia), M (mês) e A (ano) para avançar o calendário. Observe o ponteiro da data se mover e a janela do mês mudar.',
  },
  {
    name: 'Observe as transições de ano bissexto',
    text: 'Avançe através de fevereiro de um ano bissexto (ex. 2024) para ver o salto do 29 para 1 de março. Tente com um ano não bissexto para ver o salto do 28 para 1 de março.',
  },
  {
    name: 'Use a reprodução automática',
    text: 'Pressione play para o calendário avançar automaticamente. Isso revela o ciclo completo das durações dos meses e a progressão da fase lunar.',
  },
];

const title = 'Simulador de Calendário Perpétuo: Complicação de Relógio Interativa';

export const content: ToolLocaleContent<PerpetualCalendarUI> = {
  slug: 'calendario-perpetuo-portugues',
  title,
  description: 'Explore o gênio mecânico de uma complicação de calendário perpétuo. Visualize data, dia, mês, ciclo de ano bissexto e fase lunar com um mostrador animado.',
  ui: {
    title: 'Simulador de Calendário Perpétuo',
    dateLabel: 'Data',
    dayLabel: 'Dia',
    monthLabel: 'Mês',
    yearLabel: 'Ano',
    leapYearLabel: 'Bissexto',
    moonPhaseLabel: 'Fase Lunar',
    weekdayLabel: 'Dia Semana',
    advanceDay: 'Avançar Dia',
    advanceMonth: 'Avançar Mês',
    advanceYear: 'Avançar Ano',
    autoPlay: 'Auto',
    resetBtn: 'Hoje',
    dayNames: 'Domingo,Segunda-feira,Terça-feira,Quarta-feira,Quinta-feira,Sexta-feira,Sábado',
    monthNames: 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro',
    tipTitle: 'Dica',
    tipContent: 'A maioria dos relógios de calendário perpétuo usa uma roda de programa de 48 meses com entalhes de comprimento variável. Fevereiro tem o entalhe mais curto (28 dias em anos comuns, 29 em bissextos), enquanto meses de 30 e 31 dias têm entalhes progressivamente mais longos.',
    step1: 'Avançe dia após dia além de fevereiro para ver como o mecanismo lida com transições de fim de mês.',
    step2: 'Observe o indicador de fase lunar progredir através de seu ciclo de 29,5 dias.',
    step3: 'Compare as transições de fevereiro entre anos bissextos e comuns para entender o ciclo de 4 anos.',
  },
  seo: [
    { type: 'title', text: 'Simulador de Calendário Perpétuo: Complicação Interativa', level: 2 },
    { type: 'paragraph', html: 'O <strong>calendário perpétuo</strong> é uma das complicações mais prestigiadas da alta relojoaria. Este simulador interativo visualiza como um calendário perpétuo mecânico rastreia data, dia, mês, ano bissexto e fase lunar — sem correção manual por décadas. Explore o programa de engrenagem de 48 meses, veja como funcionam as transições de fevereiro e entenda a lógica do calendário gregoriano incorporada nessas obras-primas da micromecânica.' },
    { type: 'title', text: 'Como funciona um calendário perpétuo', level: 3 },
    { type: 'paragraph', html: 'Um calendário perpétuo mecânico usa uma <strong>roda de programa</strong> com entalhes de diferentes profundidades representando meses de diferentes durações. Uma alavanca de sensoriamento cai em cada entalhe; um entalhe mais profundo sinaliza um mês curto (28-29 dias), acionando o mecanismo para avançar ao 1º do mês seguinte após o número correto de dias. Uma <strong>engrenagem de 48 meses</strong> lida com o ciclo de 4 anos bissextos, com um entalhe extra para 29 de fevereiro. O programa sabe que anos centenários (ex. 2100) pulam o ano bissexto a menos que sejam divisíveis por 400.' },
    { type: 'title', text: 'Comparação: Calendário Perpétuo vs Anual', level: 3 },
    {
      type: 'table', headers: ['Característica', 'Calendário Anual', 'Calendário Perpétuo'], rows: [
        ['Requer ajuste', 'Uma vez por ano (1 Mar)', 'Uma vez por século (2100)'],
        ['Gestão de bissextos', 'Manual', 'Automática (came 4 anos)'],
        ['Reconhecimento de meses', '30 vs 31 dias', 'Completo 28/29/30/31'],
        ['Complexidade', 'Moderada (~50 peças)', 'Muito alta (~200+ peças)'],
        ['Faixa de preço', '€3.000-15.000', '€20.000-500.000+'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Simulador de Calendário Interativo', icon: 'mdi:calendar-month', badge: 'RELOJOARIA', html: 'Esta ferramenta simula o mecanismo de calendário de um relógio de calendário perpétuo. O mostrador animado mostra o ponteiro da data, a janela do mês, o subdial do dia, a fase lunar e o indicador de ano bissexto. Use os controles para avançar por dias, meses ou anos e observe a lógica mecânica em ação.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
