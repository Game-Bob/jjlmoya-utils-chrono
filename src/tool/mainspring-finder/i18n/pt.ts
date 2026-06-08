import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'localizador-de-mola-real',
  title: 'Localizador de Mola Real',
  description: 'Calcule dimensoes de mola real a partir de medidas do tambor para movimentos de relogio vintage.',
  ui: {
    title: 'Localizador de Mola Real',
    barrelLabel: 'Diâmetro Interno do Tambor',
    arborLabel: 'Diâmetro do Eixo',
    heightLabel: 'Altura do Tambor',
    turnsLabel: 'Voltas',
    calculate: 'Calcular',
    resultThickness: 'Espessura',
    resultHeight: 'Altura',
    resultLength: 'Comprimento',
    resultStrength: 'Torque',
    strengthWeak: 'Leve',
    strengthMedium: 'Medio',
    strengthStrong: 'Forte',
    commercial: 'Tamanho Comercial',
    unitLabel: 'Unidade',
    mm: 'mm',
    inch: 'pol',
    step1: 'Meça o diâmetro interno do tambor, o diâmetro do eixo e a altura interna com um calibrador.',
    step2: 'Defina o numero esperado de voltas de corda (5 a 8 manual, 6 a 10 automatico).',
    step3: 'Alterne entre mm e pol conforme sua preferencia.',
    tipTitle: 'Dica',
    tipContent: 'Sempre verifique as dimensoes calculadas com as especificacoes do fabricante. Consulte catalogos de fornecedores antes de encomendar.',
  },
  seo: [
    { type: 'title', text: 'Localizador de Mola Real - Calcule Dimensoes da Mola para Movimentos de Relogio', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0,08-0,18 mm', label: 'Espessura tipica da mola' },
        { value: '5-10 voltas', label: 'Faixa padrao de corda' },
        { value: '150-450 mm', label: 'Comprimento comum da mola' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'A restauracao de um movimento de relogio vintage comeca muitas vezes pela identificacao da mola real correta. O <strong>Localizador de Mola Real</strong> ajuda a calcular as dimensoes teoricas da mola com base na geometria do tambor. Ao inserir o diâmetro interno do tambor, o diâmetro do eixo, a altura do tambor e o numero esperado de voltas, a ferramenta calcula a espessura, a altura e o comprimento da mola. Os resultados tambem sao apresentados como tamanhos comerciais aproximados em unidades metricas e imperiais, facilitando a consulta em catalogos de fornecedores.' },
    { type: 'title', text: 'Como as dimensoes da mola real sao calculadas', level: 3 },
    { type: 'paragraph', html: 'A mola real ocupa o espaco anular entre a parede do tambor e o eixo. A <strong>espessura da mola</strong> e estimada como <strong>(diâmetro do tambor - diâmetro do eixo) / (2x voltas + 1,5)</strong>, onde o 1,5 adicional considera a fixacao da extremidade da mola e o espaco que a mola ocupa contra si mesma. O <strong>comprimento da mola</strong> segue <strong>L = pi x voltas x (diâmetro do tambor + diâmetro do eixo) / 2</strong>, que da o comprimento total da fita se esticada. A <strong>altura da mola</strong> e igual a altura interna do tambor menos uma pequena folga (tipicamente 0,1 mm) para evitar atrito contra a tampa do tambor.' },
    { type: 'title', text: 'Como medir um tambor para selecao da mola real', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Diâmetro Interno do Tambor', definition: 'O diâmetro interno do tambor medido com um calibrador. Este e o maior circulo que a mola real pode ocupar. Faixa tipica: 8-30 mm.' },
        { term: 'Diâmetro do Eixo', definition: 'O diâmetro do eixo do tambor no seu ponto mais largo, onde a espira interna da mola real se prende. Eixos menores permitem molas mais longas para o mesmo tambor.' },
        { term: 'Altura do Tambor', definition: 'A altura interna do tambor. A altura da mola real deve ser ligeiramente menor (0,05-0,15 mm) para permitir rotacao livre sem atrito na tampa.' },
        { term: 'Numero de Voltas', definition: 'O numero de voltas completas de corda que o movimento oferece. Calibres de corda manual tipicamente oferecem 5-8 voltas, automaticos 6-10 voltas.' },
      ],
    },
    { type: 'title', text: 'Torque da mola e o que significa para o seu movimento', level: 3 },
    { type: 'paragraph', html: 'A <strong>espessura da mola</strong> e o principal fator que determina o torque transmitido ao trem de engrenagens. Uma mola mais espessa (acima de 0,14 mm) fornece alto torque, adequado para movimentos com complicacoes como cronografos ou mecanismos de soneria. Molas medias (0,10-0,14 mm) sao padrao para a maioria dos calibres de hora simples e data. Molas finas (abaixo de 0,10 mm) sao encontradas em movimentos femininos pequenos ou calibres ultrafinos. Sempre siga a especificacao original do fabricante quando disponivel; uma mola excessivamente forte pode danificar o eixo do tambor ou os pivoos do trem de engrenagens.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usar a mola real errada pode danificar o seu movimento',
      html: 'Instalar uma mola <strong>muito espessa</strong> aumenta o atrito e o torque alem dos limites de projeto, podendo desgastar o furo do eixo do tambor, entortar o pivo da roda central ou ate rachar o tambor. Uma mola <strong>muito fina</strong> nao fornecera amplitude suficiente, fazendo com que o relogio atrase ou pare antes de atingir toda a reserva de marcha. Sempre verifique as dimensoes calculadas com catalogos de fornecedores conhecidos antes de encomendar.',
    },
    { type: 'title', text: 'Sistemas comerciais de dimensionamento de molas reais', level: 3 },
    { type: 'paragraph', html: 'Os fornecedores de molas reais catalogam as molas por <strong>comprimento x altura x espessura</strong> em milimetros. Os tamanhos metricos comuns seguem o sistema General Resources ou GR. Sistemas baseados em polegadas ainda sao usados por alguns fornecedores americanos e britanicos. A ferramenta exibe ambos os sistemas para que possa pesquisar catalogos independentemente do fornecedor. Quando o tamanho calculado exato nao estiver disponivel, escolha o tamanho comercial mais proximo que corresponda exatamente a altura e a espessura com tolerancia de 0,005 mm, depois ajuste o comprimento selecionando uma mola da mesma familia de altura e espessura.' },
    { type: 'title', text: 'Consideracoes para Calibres Vintage', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Calibres suicos (ETA, FHF, AS, Unitas)</strong> - bem documentados no sistema GR. A maioria tem referencias de mola real conhecidas.',
        '<strong>Calibres franceses (LIP, France Ebauches)</strong> - frequentemente usam proporcoes de tambor nao padrao. Meça com cuidado.',
        '<strong>Calibres americanos (Waltham, Elgin, Illinois)</strong> - sistemas baseados em polegadas. Use a saida imperial para consultar.',
        '<strong>Calibres japoneses (Seiko, Citizen, Miyota)</strong> - sistema metrico com boa cobertura em catalogos para movimentos pos-1960.',
        '<strong>Calibres chineses (Sea-Gull, DG, Tongji)</strong> - frequentemente clonam designs suicos. A referencia GR suica geralmente se aplica.',
      ],
    },
    {
      type: 'summary',
      title: 'Principais pontos para selecao da mola real',
      items: [
        'Meça o diâmetro interno do tambor, o diâmetro do eixo e a altura do tambor com precisao usando um calibrador',
        'Use as dimensoes calculadas como ponto de partida, nao como especificacao absoluta',
        'Consulte fichas tecnicas do fabricante ou catalogos de fornecedores conhecidos',
        'A altura da mola deve corresponder exatamente a altura do tambor menos 0,05-0,15 mm de folga',
        'A espessura deve estar dentro de 0,005 mm do valor calculado para desempenho ideal',
        'Verifique se o comprimento da mola e adequado para o numero esperado de voltas de corda',
      ],
    },
  ],
  faq: [
    {
      question: 'Quao precisas sao as dimensoes calculadas da mola real?',
      answer: 'Os calculos sao baseados em formulas padrao de relojoaria que assumem geometria ideal do tambor. As dimensoes reais podem variar em ate 5-10 % devido a tolerancias de fabricacao, configuracao das extremidades da mola (brace, ilhos ou T) e a liga especifica utilizada. Sempre use os valores calculados como um forte ponto de referencia, mas consulte fichas tecnicas do fabricante ou catalogos de fornecedores antes de encomendar.',
    },
    {
      question: 'E se nao encontrar o tamanho comercial exato?',
      answer: 'Quando o tamanho exato nao estiver disponivel, priorize corresponder exatamente a altura da mola, depois a espessura com tolerancia de 0,005 mm. O comprimento pode ser ajustado selecionando uma mola diferente da mesma familia de altura e espessura. Uma mola ligeiramente mais longa funcionara se o tambor tiver espaco suficiente, mas uma mola mais curta reduzira a reserva de marcha.',
    },
    {
      question: 'Como medir as dimensoes do tambor sem remover a mola real?',
      answer: 'Se o tambor ainda contiver a mola antiga, pode medir o diâmetro externo do tambor pelo lado de fora (depois subtraia a espessura da parede, tipicamente 0,2-0,4 mm) e a altura total (depois subtraia a espessura da tampa). Para resultados mais precisos, remova a mola antiga e limpe o tambor antes de medir.',
    },
    {
      question: 'Qual e a diferenca entre uma extremidade de mola brace e ilhos?',
      answer: 'Uma extremidade brace (tambem chamada de T) tem uma pequena aba em forma de T que se prende na parede do tambor. A maioria dos calibres suicos e japoneses modernos usa este tipo. Uma extremidade de ilhos tem um pequeno furo que se encaixa num pino do eixo. Esta ferramenta calcula apenas as dimensoes da fita; voce deve verificar se o tipo de extremidade corresponde ao seu tambor antes de encomendar.',
    },
    {
      question: 'Posso usar esta ferramenta para movimentos de cronografo ou automaticos?',
      answer: 'Sim, mas note que movimentos automaticos geralmente tem um numero maior de voltas (8-10) e podem exigir uma mola ligeiramente mais fina para acomodar o modulo de corda adicional. Movimentos de cronografo tipicamente precisam de molas mais espessas para acionar o mecanismo do cronografo. Ajuste o valor de Voltas conforme necessario e verifique com as especificacoes do fabricante.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Meça o diâmetro interno do tambor',
      text: 'Use um calibrador de precisao para medir o diâmetro interno do tambor. Meça em dois pontos a 90 graus de distancia e calcule a media dos valores. Anote o resultado em milimetros.',
    },
    {
      name: 'Meça o diâmetro do eixo',
      text: 'Meça o diâmetro do eixo do tambor no ponto mais largo onde a espira interna da mola real se prende. Este e tipicamente perto do centro do eixo, nao na extremidade quadrada.',
    },
    {
      name: 'Meça a altura interna do tambor',
      text: 'Meça a profundidade do tambor da base ate a borda superior. Se a tampa for removivel, inclua a espessura da tampa na sua medicao. A altura da mola sera aproximadamente 0,1 mm menor.',
    },
    {
      name: 'Defina o numero de voltas',
      text: 'Determine quantas voltas completas a mola real faz quando totalmente armada. Para calibres de corda manual, sao tipicamente 5-8 voltas. Automaticos podem ter 6-10 voltas. Verifique as especificacoes do movimento se disponivel.',
    },
    {
      name: 'Leia as dimensoes calculadas',
      text: 'A ferramenta exibe a espessura, altura e comprimento recomendados da mola. Tambem estima a categoria de torque da mola e fornece equivalentes comerciais em unidades metricas e imperiais.',
    },
    {
      name: 'Consulte catalogos de fornecedores',
      text: 'Use os tamanhos comerciais exibidos para pesquisar em catalogos de fornecedores. Insira as dimensoes metricas ou imperiais no Cousins UK, Jules Borel ou no seu fornecedor preferido. Ajuste a busca se o tamanho exato nao estiver disponivel.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How accurate are the calculated mainspring dimensions?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'The calculations are based on standard watchmaking formulas that assume ideal barrel geometry. Real-world dimensions can vary by up to 5-10 % due to manufacturing tolerances, spring-end configurations, and the specific alloy used. Always cross-reference with manufacturer datasheets or commercial catalogues before ordering.' },
        },
        {
          '@type': 'Question',
          'name': 'What if I cannot find the exact commercial size?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Match the spring height exactly first, then the thickness within 0.005 mm. Adjust length from the same height/thickness family.' },
        },
        {
          '@type': 'Question',
          'name': 'How do I measure the barrel without removing the mainspring?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Measure the outer barrel diameter and subtract wall thickness (0.2-0.4 mm). For best results, remove the old spring first.' },
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between brace and eyelet ends?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Brace (T-end) hooks into the barrel wall. Eyelet has a hole over an arbor peg. Modern Swiss/Japanese calibers use brace ends.' },
        },
        {
          '@type': 'Question',
          'name': 'Can I use this for chronograph or automatic movements?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Automatics often need more turns (8-10) and thinner springs. Chronographs need thicker springs. Adjust Turns and verify.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Mainspring Finder',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Watch Mainspring Calculator',
      'description': 'Calculate theoretical mainspring dimensions from barrel measurements for vintage watch movements.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Watch mainspring dimensions calculation',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Learn how to calculate mainspring dimensions from barrel inner diameter, arbor size, and winding turns.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to find the correct mainspring',
      'description': 'Step-by-step guide to measuring a watch barrel and calculating correct mainspring dimensions.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Measure barrel ID', 'text': 'Use a precision caliper to measure the inside diameter of the barrel drum.' },
        { '@type': 'HowToStep', 'name': 'Measure arbor OD', 'text': 'Measure the barrel arbor diameter at its widest point.' },
        { '@type': 'HowToStep', 'name': 'Measure barrel height', 'text': 'Measure internal depth. Spring height is ~0.1 mm less.' },
        { '@type': 'HowToStep', 'name': 'Set turns', 'text': 'Set 5-8 for manual wind, 6-10 for automatic movements.' },
        { '@type': 'HowToStep', 'name': 'Read results', 'text': 'View spring thickness, height, length, and commercial equivalents.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Mainspring Finder',
      'description': 'A tool for watchmakers to calculate mainspring dimensions from barrel measurements.',
      'category': 'Watchmaking Tool',
      'audience': { '@type': 'Audience', 'audienceType': 'Watchmakers and horology enthusiasts' },
    },
  ],
};
