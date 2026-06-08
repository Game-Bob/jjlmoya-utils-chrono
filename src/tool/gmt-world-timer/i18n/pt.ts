import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Como saber se um relógio é um GMT verdadeiro ou um caller GMT?',
    answer: 'Um <strong>GMT verdadeiro</strong> (também chamado de "flyer" GMT) permite que você salte o ponteiro das horas local de forma independente - ideal para viajantes que mudam de fuso horário com frequência. Um <strong>caller GMT</strong> ajusta o ponteiro GMT separadamente enquanto o ponteiro das horas principal permanece fixo, o que é mais barato de fabricar. Para diferenciá-los: puxe a coroa para a posição de acerto das horas e gire. Se o ponteiro das horas saltar em incrementos de uma hora sem parar, é um GMT verdadeiro. Se o ponteiro GMT se mover, é um caller. A Rolex usa um calibre GMT verdadeiro (3285) no GMT-Master II, enquanto muitas micro-marcas acessíveis usam movimentos caller como o Seiko NH34.',
  },
  {
    question: 'Qual é a diferença entre um relógio GMT e um World Timer?',
    answer: 'Um <strong>relógio GMT</strong> geralmente acompanha dois fusos horários - a hora local e uma referência (normalmente UTC) - usando um ponteiro de 24 horas e um bisel de 24 horas. Um <strong>World Timer</strong> mostra todos os 24 fusos horários de uma vez: tem um anel de cidades à volta do mostrador e um disco de 24 horas que roda. World Timers como o Patek Philippe 5230P ou o JLC Geophysic Universal Time permitem-lhe ler as horas em qualquer cidade instantaneamente. Os GMTs são mais simples e acessíveis; os World Timers são mecanicamente mais complexos e tipicamente mais caros. Esta ferramenta funciona como um World Timer digital, permitindo-lhe adicionar quantas cidades precisar.',
  },
  {
    question: 'Qual fuso horário o meu relógio mostra quando diz "GMT"?',
    answer: 'Quando um relógio tem "GMT" no mostrador, o <strong>ponteiro GMT</strong> (geralmente um quarto ponteiro com uma ponta de seta colorida) aponta para a hora no formato de 24 horas. A maioria dos utilizadores ajusta este ponteiro para UTC (Tempo Universal Coordenado) porque todos os fusos horários são definidos como desvios do UTC. O bisel giratório de 24 horas pode então ser alinhado para ler qualquer outro fuso horário. Por exemplo, se o ponteiro GMT apontar para 14 (2 da tarde) e as marcas do bisel o alinharem com UTC+2, está a ler a Hora da Europa Oriental. Esta ferramenta ajuda-o a visualizar exatamente essa relação.',
  },
];

const howTo = [
  {
    name: 'Adicione qualquer cidade ao seu painel',
    text: 'Digite o nome de uma cidade ou fuso horário na barra de pesquisa. Clique num resultado para o adicionar instantaneamente. Cada cidade aparece como um cartão de relógio ao vivo com a hora local atual.',
  },
  {
    name: 'Remova cidades quando não precisar delas',
    text: 'Passe o rato sobre qualquer cartão de relógio e clique no botão × para o remover. A sua seleção é guardada automaticamente no seu navegador - feche e volte mais tarde e o seu painel estará exatamente como o deixou.',
  },
  {
    name: 'Use-o como referência GMT para a sua coleção de relógios',
    text: 'Defina a sua cidade de origem e adicione os fusos horários que acompanha com os seus relógios GMT. Use as etiquetas de desvio ao vivo para verificar se o alinhamento do seu bisel está correto para cada zona monitorizada.',
  },
];

const title = 'Relógio Mundial: Painel ao Vivo com Múltiplos Fusos Horários';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'relogio-mundial-gmt',
  title,
  description: 'Acompanhe vários fusos horários ao vivo. Adicione qualquer cidade e veja a hora atual a ser atualizada a cada segundo. Perfeito para entusiastas de relógios com GMT ou World Timer.',
  ui: {
    title: 'Relógio Mundial',
    searchPlaceholder: 'Pesquisar cidade ou fuso horário...',
    addLabel: 'Adicionar',
    removeLabel: 'Remover',
    noResults: 'Nenhuma cidade encontrada',
    yourZones: 'Os seus fusos horários',
  },
  seo: [
    { type: 'title', text: 'Relógio Mundial - Painel de Fusos Horários ao Vivo para Entusiastas de Relógios', level: 2 },
    { type: 'paragraph', html: 'Quer possua um <strong>GMT-Master II</strong>, um <strong>World Timer</strong>, ou simplesmente precise de acompanhar vários fusos horários para trabalho ou viagens, este painel ao vivo mostra-lhe a hora atual em cada cidade que lhe interessa - tudo num relance. Adicione Nova Iorque, Londres, Tóquio ou qualquer cidade, e a hora é atualizada a cada segundo. As suas zonas são guardadas no seu navegador para que nunca tenha de reconfigurar.' },
    { type: 'title', text: 'Porque é que os entusiastas de relógios precisam de um relógio mundial', level: 3 },
    { type: 'paragraph', html: 'Se coleciona <strong>relógios GMT</strong>, conhece a dificuldade: ajusta o bisel para acompanhar um segundo fuso horário, mas os desvios mudam com a hora de verão, ou simplesmente tem vários GMTs e quer comparar como cada um segue uma cidade diferente. Esta ferramenta resolve isso. Adicione as cidades que os seus relógios acompanham e veja instantaneamente o seu desvio e hora atual. Sem cálculos mentais - basta olhar para o cartão e saber exatamente para onde o seu ponteiro GMT deve apontar.' },
    { type: 'title', text: 'GMT vs World Timer - qual se adequa ao seu estilo?', level: 3 },
    { type: 'paragraph', html: 'Um <strong>relógio GMT</strong> (como o Rolex GMT-Master II "Pepsi" ou Tudor Black Bay Pro) usa um ponteiro de 24 horas e um bisel giratório para acompanhar dois fusos horários. Um <strong>World Timer</strong> (como o Nomos Zürich Weltzeit ou Omega Seamaster Worldtimer) mostra todos os 24 fusos ao mesmo tempo usando um anel de cidades e um disco de 24 horas. Este painel imita um World Timer: pode ver todas as cidades ao mesmo tempo. Use-o para decidir qual complicação se adequa ao seu estilo de vida antes de comprar.' },
    { type: 'title', text: 'Usos práticos para além da coleção de relógios', level: 3 },
    {
      type: 'list', items: [
        'Trabalhadores remotos a agendar reuniões entre fusos horários sem confusão',
        'Viajantes frequentes a manter um olho em casa e no destino simultaneamente',
        'Traders a acompanhar as aberturas dos mercados em Nova Iorque, Londres, Tóquio e Sydney',
        'Qualquer pessoa que queira saber "que horas são em..." sem precisar de pesquisar no Google',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Relógio Mundial ao Vivo', icon: 'mdi:clock-time-eight', badge: 'HORA', html: 'As horas são atualizadas ao vivo a cada segundo usando a base de dados de fusos horários incorporada do seu navegador. As transições de hora de verão são tratadas automaticamente. Nenhum dado é enviado para qualquer servidor.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
