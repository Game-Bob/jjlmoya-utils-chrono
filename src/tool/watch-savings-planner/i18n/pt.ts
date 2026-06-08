import type { ToolLocaleContent } from '../../../types';
import type { WatchSavingsPlannerUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WatchSavingsPlannerUI> = {
  slug: 'planejador-poupanca-relogio',
  title: 'Planejador de Economia para Relógios',
  description: 'Defina e acompanhe metas de economia para a sua próxima compra de relógio. Visualize o progresso, calcule prazos e mantenha-se motivado.',
  ui: {
    title: 'Configurações da Meta de Economia',
    addGoalTitle: 'Nova Meta de Economia',
    goalNameLabel: 'Relógio',
    goalNamePlaceholder: 'ex. Rolex Submariner',
    targetPriceLabel: 'Preço Alvo',
    currentSavingsLabel: 'Economizado',
    monthlyLabel: 'Por Mês',
    addButton: 'Adicionar Meta',
    cancelButton: 'Cancelar',
    goalsEmpty: 'Ainda sem metas de economia',
    goalsEmptySub: 'Defina sua primeira meta de relógio e comece a economizar!',
    monthsToGoal: 'Tempo até a meta',
    yearsToGoal: 'Anos até a meta',
    month: 'mês',
    months: 'meses',
    year: 'ano',
    totalSaved: 'Total Economizado',
    totalGoals: 'Metas',
    achieved: 'Alcançado',
    percentLabel: 'Economizado',
    deleteGoal: 'Excluir',
    editGoal: 'Editar',
    saveGoal: 'Salvar',
    currency: 'EUR',
    summaryTitle: 'Resumo',
    goalAchieved: 'Alcançado!',
    goalProgress: 'Progresso',
    congratsTitle: 'Parabéns!',
    congratsDesc: 'Você alcançou sua meta de economia!',
    monthlyContribution: 'Mensal',
    targetDate: 'Data Alvo',
    adjustMonthly: 'Ajustar mensal',
  },
  seo: [
    { type: 'title', text: 'Planejador de Economia para Relógios - Acompanhe sua Próxima Compra', level: 2 },
    { type: 'paragraph', html: 'Economizar para um relógio é uma jornada. Seja um <strong>Speedmaster vintage</strong>, um <strong>Submariner</strong> ou um <strong>Grand Seiko</strong>, um plano de economia claro transforma o sonho em um cronograma. Esta ferramenta ajuda você a visualizar seu progresso, ajustar suas contribuições mensais e ver exatamente quando você sairá da boutique com o seu graal.' },
    { type: 'title', text: 'Por que um plano de economia importa para colecionadores de relógios', level: 3 },
    { type: 'paragraph', html: 'Colecionar relógios é um jogo de paciência. Os preços dos modelos mais procurados sobem constantemente, e as compras por impulso geralmente levam ao arrependimento. Uma abordagem de economia estruturada mantém você disciplinado, evita tensão financeira e faz com que a compra final pareça merecida. Além disso, acompanhar seu progresso dia após dia gera antecipação e torna a abertura da caixa ainda mais doce.' },
    { type: 'title', text: 'Como definir metas realistas de economia para relógios', level: 3 },
    { type: 'paragraph', html: 'Comece com o preço total, incluindo impostos e frete. Depois divida pelo valor que você pode reservar confortavelmente a cada mês. Uma boa regra é dedicar não mais que <strong>10-15% da renda disponível</strong> à economia para relógios. Se o prazo parecer muito longo, considere dividi-lo em marcos menores - ou explore alternativas mais acessíveis na mesma família de estilo.' },
    { type: 'title', text: 'A psicologia do acompanhamento de metas', level: 3 },
    { type: 'paragraph', html: 'O acompanhamento visual do progresso desencadeia a liberação de dopamina, o mesmo neurotransmissor que torna o colecionismo tão gratificante. Cada vez que você registra uma nova contribuição e vê o anel de progresso se encher, você reforça o hábito. É por isso que economias pequenas e regulares geralmente funcionam melhor do que depósitos grandes e esporádicos - o próprio ritual se torna parte da experiência de colecionar.' },
  ],
  faq: [
    {
      question: 'Quanto devo economizar por mês para um relógio?',
      answer: 'Aponte para 10-15% da sua renda mensal disponível. A chave é a consistência - mesmo $100 por mês somam $1.200 por ano. Ajuste o valor com base no seu prazo: metas mais curtas precisam de contribuições mensais maiores.',
    },
    {
      question: 'Devo economizar para um relógio de cada vez ou para vários?',
      answer: 'Um de cada vez geralmente é mais eficaz. Foco gera impulso. Depois de atingir sua primeira meta, a confiança e a disciplina se transferem para a próxima. Dito isso, este planejador oferece suporte a várias metas para que você possa comparar prazos.',
    },
    {
      question: 'E se o preço do relógio subir enquanto estou economizando?',
      answer: 'Boa pergunta. Verifique o preço de mercado atual a cada poucos meses e atualize sua meta. Se os preços estiverem subindo rápido, considere aumentar seu valor mensal ou encurtar o prazo para travar o preço atual.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Defina sua meta',
      text: 'Insira o nome do relógio e o preço total, incluindo impostos e frete.',
    },
    {
      name: 'Acompanhe suas economias',
      text: 'Registre quanto você já economizou e quanto pode reservar a cada mês.',
    },
    {
      name: 'Monitore o progresso',
      text: 'Veja o anel de progresso se encher enquanto você atualiza suas economias. Ajuste os valores mensais a qualquer momento.',
    },
    {
      name: 'Celebre',
      text: 'Quando o anel atingir 100%, você alcançou sua meta. Hora de comprar esse relógio!',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto devo economizar por mês para um relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Aponte para 10-15% da sua renda mensal disponível. A chave é a consistência - mesmo $100 por mês somam $1.200 por ano.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Devo economizar para um relógio de cada vez ou para vários?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Um de cada vez geralmente é mais eficaz. Foco gera impulso. Depois de atingir sua primeira meta, leve essa disciplina para a próxima.',
          },
        },
        {
          '@type': 'Question',
          'name': 'E se o preço do relógio subir enquanto estou economizando?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Verifique o preço de mercado atual a cada poucos meses e atualize sua meta. Considere aumentar seu valor mensal se os preços estiverem subindo rápido.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Planejador de Economia para Relógios',
      'operatingSystem': 'Todos',
      'applicationCategory': 'FinanceApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como economizar para a compra de um relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Defina sua meta',
          'text': 'Insira o nome do relógio e o preço total, incluindo impostos e frete.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Acompanhe suas economias',
          'text': 'Registre quanto você já economizou e quanto pode reservar a cada mês.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Monitore o progresso',
          'text': 'Veja o anel de progresso se encher enquanto você atualiza suas economias.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Celebre',
          'text': 'Quando o anel atingir 100%, você alcançou sua meta. Hora de comprar esse relógio!',
        },
      ],
    },
  ],
};
