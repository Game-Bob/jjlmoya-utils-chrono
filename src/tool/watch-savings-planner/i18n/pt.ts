import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planejador-poupanca-relogio',
  title: 'Planejador de Economia para Rel\u00f3gios',
  description: 'Defina e acompanhe metas de economia para a sua pr\u00f3xima compra de rel\u00f3gio. Visualize o progresso, calcule prazos e mantenha-se motivado.',
  ui: {
    title: 'Configura\u00e7\u00f5es da Meta de Economia',
    addGoalTitle: 'Nova Meta de Economia',
    goalNameLabel: 'Rel\u00f3gio',
    goalNamePlaceholder: 'ex. Rolex Submariner',
    targetPriceLabel: 'Pre\u00e7o Alvo',
    currentSavingsLabel: 'Economizado',
    monthlyLabel: 'Por M\u00eas',
    addButton: 'Adicionar Meta',
    cancelButton: 'Cancelar',
    goalsEmpty: 'Ainda sem metas de economia',
    goalsEmptySub: 'Defina sua primeira meta de rel\u00f3gio e comece a economizar!',
    monthsToGoal: 'Tempo at\u00e9 a meta',
    yearsToGoal: 'Anos at\u00e9 a meta',
    month: 'm\u00eas',
    months: 'meses',
    year: 'ano',
    totalSaved: 'Total Economizado',
    totalGoals: 'Metas',
    achieved: 'Alcan\u00e7ado',
    percentLabel: 'Economizado',
    deleteGoal: 'Excluir',
    editGoal: 'Editar',
    saveGoal: 'Salvar',
    currency: 'EUR',
    summaryTitle: 'Resumo',
    goalAchieved: 'Alcan\u00e7ado!',
    goalProgress: 'Progresso',
    congratsTitle: 'Parab\u00e9ns!',
    congratsDesc: 'Voc\u00ea alcan\u00e7ou sua meta de economia!',
    monthlyContribution: 'Mensal',
    targetDate: 'Data Alvo',
    adjustMonthly: 'Ajustar mensal',
  },
  seo: [
    { type: 'title', text: 'Planejador de Economia para Rel\u00f3gios \u2014 Acompanhe sua Pr\u00f3xima Compra', level: 2 },
    { type: 'paragraph', html: 'Economizar para um rel\u00f3gio \u00e9 uma jornada. Seja um <strong>Speedmaster vintage</strong>, um <strong>Submariner</strong> ou um <strong>Grand Seiko</strong>, um plano de economia claro transforma o sonho em um cronograma. Esta ferramenta ajuda voc\u00ea a visualizar seu progresso, ajustar suas contribui\u00e7\u00f5es mensais e ver exatamente quando voc\u00ea sair\u00e1 da boutique com o seu graal.' },
    { type: 'title', text: 'Por que um plano de economia importa para colecionadores de rel\u00f3gios', level: 3 },
    { type: 'paragraph', html: 'Colecionar rel\u00f3gios \u00e9 um jogo de paci\u00eancia. Os pre\u00e7os dos modelos mais procurados sobem constantemente, e as compras por impulso geralmente levam ao arrependimento. Uma abordagem de economia estruturada mant\u00e9m voc\u00ea disciplinado, evita tens\u00e3o financeira e faz com que a compra final pare\u00e7a merecida. Al\u00e9m disso, acompanhar seu progresso dia ap\u00f3s dia gera antecipa\u00e7\u00e3o e torna a abertura da caixa ainda mais doce.' },
    { type: 'title', text: 'Como definir metas realistas de economia para rel\u00f3gios', level: 3 },
    { type: 'paragraph', html: 'Comece com o pre\u00e7o total, incluindo impostos e frete. Depois divida pelo valor que voc\u00ea pode reservar confortavelmente a cada m\u00eas. Uma boa regra \u00e9 dedicar n\u00e3o mais que <strong>10\u201315% da renda dispon\u00edvel</strong> \u00e0 economia para rel\u00f3gios. Se o prazo parecer muito longo, considere dividi-lo em marcos menores \u2014 ou explore alternativas mais acess\u00edveis na mesma fam\u00edlia de estilo.' },
    { type: 'title', text: 'A psicologia do acompanhamento de metas', level: 3 },
    { type: 'paragraph', html: 'O acompanhamento visual do progresso desencadeia a libera\u00e7\u00e3o de dopamina, o mesmo neurotransmissor que torna o colecionismo t\u00e3o gratificante. Cada vez que voc\u00ea registra uma nova contribui\u00e7\u00e3o e v\u00ea o anel de progresso se encher, voc\u00ea refor\u00e7a o h\u00e1bito. \u00c9 por isso que economias pequenas e regulares geralmente funcionam melhor do que dep\u00f3sitos grandes e espor\u00e1dicos \u2014 o pr\u00f3prio ritual se torna parte da experi\u00eancia de colecionar.' },
  ],
  faq: [
    {
      question: 'Quanto devo economizar por m\u00eas para um rel\u00f3gio?',
      answer: 'Aponte para 10\u201315% da sua renda mensal dispon\u00edvel. A chave \u00e9 a consist\u00eancia \u2014 mesmo $100 por m\u00eas somam $1.200 por ano. Ajuste o valor com base no seu prazo: metas mais curtas precisam de contribui\u00e7\u00f5es mensais maiores.',
    },
    {
      question: 'Devo economizar para um rel\u00f3gio de cada vez ou para v\u00e1rios?',
      answer: 'Um de cada vez geralmente \u00e9 mais eficaz. Foco gera impulso. Depois de atingir sua primeira meta, a confian\u00e7a e a disciplina se transferem para a pr\u00f3xima. Dito isso, este planejador oferece suporte a v\u00e1rias metas para que voc\u00ea possa comparar prazos.',
    },
    {
      question: 'E se o pre\u00e7o do rel\u00f3gio subir enquanto estou economizando?',
      answer: 'Boa pergunta. Verifique o pre\u00e7o de mercado atual a cada poucos meses e atualize sua meta. Se os pre\u00e7os estiverem subindo r\u00e1pido, considere aumentar seu valor mensal ou encurtar o prazo para travar o pre\u00e7o atual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Defina sua meta',
      text: 'Insira o nome do rel\u00f3gio e o pre\u00e7o total, incluindo impostos e frete.',
    },
    {
      name: 'Acompanhe suas economias',
      text: 'Registre quanto voc\u00ea j\u00e1 economizou e quanto pode reservar a cada m\u00eas.',
    },
    {
      name: 'Monitore o progresso',
      text: 'Veja o anel de progresso se encher enquanto voc\u00ea atualiza suas economias. Ajuste os valores mensais a qualquer momento.',
    },
    {
      name: 'Celebre',
      text: 'Quando o anel atingir 100%, voc\u00ea alcan\u00e7ou sua meta. Hora de comprar esse rel\u00f3gio!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto devo economizar por m\u00eas para um rel\u00f3gio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Aponte para 10\u201315% da sua renda mensal dispon\u00edvel. A chave \u00e9 a consist\u00eancia \u2014 mesmo $100 por m\u00eas somam $1.200 por ano.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Devo economizar para um rel\u00f3gio de cada vez ou para v\u00e1rios?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um de cada vez geralmente \u00e9 mais eficaz. Foco gera impulso. Depois de atingir sua primeira meta, leve essa disciplina para a pr\u00f3xima.',
          },
        },
        {
          '@type': 'Question',
          'name': 'E se o pre\u00e7o do rel\u00f3gio subir enquanto estou economizando?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verifique o pre\u00e7o de mercado atual a cada poucos meses e atualize sua meta. Considere aumentar seu valor mensal se os pre\u00e7os estiverem subindo r\u00e1pido.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planejador de Economia para Rel\u00f3gios',
      'operatingSystem': 'Todos',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como economizar para a compra de um rel\u00f3gio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Defina sua meta',
          'text': 'Insira o nome do rel\u00f3gio e o pre\u00e7o total, incluindo impostos e frete.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Acompanhe suas economias',
          'text': 'Registre quanto voc\u00ea j\u00e1 economizou e quanto pode reservar a cada m\u00eas.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitore o progresso',
          'text': 'Veja o anel de progresso se encher enquanto voc\u00ea atualiza suas economias.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Celebre',
          'text': 'Quando o anel atingir 100%, voc\u00ea alcan\u00e7ou sua meta. Hora de comprar esse rel\u00f3gio!',
        },
      ],
    },
  ],
};
