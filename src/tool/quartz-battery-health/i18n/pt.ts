import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'verificador-saude-bateria-quartzo',
  title: 'Verificador de Saude da Bateria de Quartzo',
  description: 'Calcule a vida teorica da bateria de um movimento de quartzo inserindo a capacidade da pilha (mAh) e o consumo do calibre (microamperes). Opcionalmente defina a data de instalacao para estimar a data de substituicao.',
  ui: {
    title: 'Verificador de Saude da Bateria de Quartzo',
    batteryLabel: 'Pilha',
    selectBattery: 'Selecionar pilha',
    customBattery: 'Personalizado',
    capacityLabel: 'Capacidade',
    capacityUnit: 'mAh',
    consumptionLabel: 'Consumo',
    consumptionUnit: String.fromCharCode(956) + 'A',
    installDateLabel: 'Instalada em',
    installDateHint: 'Opcional',
    monthLabel: 'Mes',
    yearLabel: 'Ano',
    calculate: 'Calcular',
    resultLabel: 'Vida Estimada',
    theoreticalLife: 'Vida teorica',
    yearsLabel: 'anos',
    monthsLabel: 'meses',
    daysLabel: 'dias',
    changeDateLabel: 'Substituir em',
    noDateHint: 'Insira a data de instalacao para ver a data de substituicao',
    healthLabel: 'Estado',
    healthGood: 'Bom',
    healthModerate: 'Moderado',
    healthCritical: 'Critico',
    step1: 'Escolha uma pilha comum ou selecione Personalizado para inserir a capacidade.',
    step2: 'Insira o consumo do calibre em microamperes (' + String.fromCharCode(956) + 'A).',
    step3: 'Opcionalmente adicione a data de instalacao e prima Calcular.',
    tipTitle: 'Dica',
    tipContent: 'Use sempre o valor de consumo da ficha tecnica oficial do calibre. A vida real pode ser 10-20 % mais curta devido a variacoes de temperatura e carga.',
  },
  seo: [
    { type: 'title', text: 'Verificador de Saude da Bateria de Quartzo - Quanto tempo dura a bateria do seu relogio?', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 ' + String.fromCharCode(956) + 'A', label: 'Consumo tipico 3 ponteiros' },
        { value: '18-55 mAh', label: 'Capacidade comum de pilha' },
        { value: '2.5-4.5 anos', label: 'Vida habitual da bateria' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Esta a pensar quando o seu relogio de quartzo vai parar? O <strong>Verificador de Saude da Bateria de Quartzo</strong> ajuda-o a estimar a vida restante de qualquer bateria de movimento de quartzo comparando a capacidade da pilha (medida em mAh) com o consumo medio do movimento (medido em microamperes, ' + String.fromCharCode(956) + 'A). Quer tenha um ETA suico, um Miyota japones, um Seiko, um Ronda ou um movimento chines DG, esta ferramenta calcula a vida teorica em anos, meses e dias - e pode ate prever a data exata de substituicao se inserir o mes e o ano de instalacao.' },
    { type: 'title', text: 'Como a vida da bateria de quartzo e calculada - a matematica por tras da estimativa', level: 3 },
    { type: 'paragraph', html: 'A vida da bateria segue uma formula eletrica simples: <strong>Vida (horas) = (Capacidade da pilha em mAh x 1000) / Consumo de corrente em ' + String.fromCharCode(956) + 'A</strong>. Dividindo esse resultado por 24 obtem-se dias, e por 365,25 obtem-se anos. Por exemplo, uma pilha <strong>SR920SW (371) standard com 40 mAh</strong> a alimentar um movimento que consome <strong>1,5 ' + String.fromCharCode(956) + 'A</strong> dura teoricamente cerca de <strong>3 anos</strong>. Reduza o consumo para 1,0 ' + String.fromCharCode(956) + 'A e a mesma pilha ultrapassa os 4,5 anos. Aumente para 2,5 ' + String.fromCharCode(956) + 'A e a vida da bateria cai para menos de 2 anos. Cada fraccao de microampere importa quando planeia os seus intervalos de servico.' },
    { type: 'title', text: 'Tipos de pilha de quartzo mais comuns e suas capacidades', level: 3 },
    {
      type: 'table',
      headers: ['Referencia da Pilha', 'Codigo Comum', 'Capacidade', 'Uso Tipico'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Relogios finos de pulso'],
        ['SR626SW', '377', '27 mAh', 'Modelos de quartzo medios'],
        ['SR920SW', '371', '40 mAh', 'Cronografos e multifuncoes'],
        ['SR936SW', '394', '55 mAh', 'Grandes hibridos analogico-digitais'],
        ['CR2025', '-', '165 mAh', 'Modulos LED de alto consumo'],
      ],
    },
    { type: 'tip', title: 'Corresponda a especificacao original', html: 'Selecionar o tipo de pilha errado pode reduzir a vida da bateria em ate <strong>40 %</strong>. Consulte sempre o numero de referencia original da pilha antes de instalar uma substituicao. O codigo numerico indica as dimensoes - por exemplo, <strong>SR936SW</strong> tem 9,5 mm de diametro e 3,6 mm de espessura.' },
    { type: 'title', text: 'Porque deve usar sempre os valores oficiais de consumo do calibre', level: 3 },
    { type: 'paragraph', html: 'Os fabricantes de movimentos como <strong>ETA, Ronda, Miyota, Seiko e ISA</strong> publicam fichas tecnicas oficiais para cada calibre que produzem. Estas fichas indicam o <strong>consumo medio de corrente</strong> em temperatura controlada (normalmente 22 graus) e com uma carga de binario padrao. Usar um valor adivinhado de 1,0 ' + String.fromCharCode(956) + 'A quando o seu movimento consome realmente 2,5 ' + String.fromCharCode(956) + 'A pode sobrestimar a vida da bateria em mais de 100 %. Descarregue sempre o PDF oficial do site do fabricante ou consulte a referencia do calibre em bases de dados especializadas para obter o valor real de consumo.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A fuga da bateria pode destruir o movimento do seu relogio',
      html: 'Uma bateria de oxido de prata esgotada pode <strong>libertar hidroxido de potassio</strong>, que corroe as molas de contacto, as pistas do circuito impresso e ate a bobina do motor de passo. Se a ferramenta estimar menos de <strong>6 meses de vida restante</strong>, agende uma mudanca de bateria durante a sua proxima revisao de rotina. Preste especial atencao aos <strong>relogios de quartzo vintage dos anos 1970 e 1980</strong> - as suas baterias originais sao muito mais propensas a fugas depois de decadas dentro da caixa.',
    },
    { type: 'title', text: 'Factores que reduzem a vida real da bateria em relacao a estimativa teorica', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperaturas extremas</strong> - um relogio deixado num painel de bordo ensolarado pode ter um consumo de corrente 30 % superior',
        '<strong>Circuitos de detecao de fim de vida</strong> - o indicador de tick de dois segundos consome energia extra quando ativado',
        '<strong>Uso do cronografo ou alarme</strong> - picos de corrente momentaneos que se acumulam ao longo do tempo',
        '<strong>Atrito mecanico</strong> - trem de engrenagens envelhecido ou sujo aumenta o binario necessario ao motor de passo',
        '<strong>Campos magneticos</strong> - a exposicao aumenta os requisitos de binario do motor, esgotando a pilha mais rapidamente',
      ],
    },
    { type: 'paragraph', html: 'Na pratica pode esperar <strong>10 a 20 % menos vida</strong> do que o calculo teorico. Para movimentos de quartzo termocompensados de alta precisao o consumo varia menos, mas o quartzo standard e notoriamente sensivel a estes factores ambientais.' },
    { type: 'title', text: 'Como encontrar a pilha de substituicao correta para o seu relogio de quartzo', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Oxido de Prata)', definition: 'As pilhas marcadas com SR (ex.: SR920SW) fornecem uma tensao estavel de 1,55 V durante toda a sua vida, mantendo o oscilador de quartzo preciso. E o padrao para relogios de quartzo de qualidade.' },
        { term: 'LR (Alcalina)', definition: 'As pilhas marcadas com LR (ex.: LR41) tem uma tensao gradualmente decrescente, o que pode fazer com que o relogio atrase ou pare prematuramente. Nao recomendado como substituto para pilhas SR.' },
        { term: 'CR (Litio)', definition: 'As pilhas marcadas com CR (ex.: CR2025) fornecem 3,0 V e sao usadas em modulos de alto consumo com retroiluminacao LED, LCD grandes ou multiplas complicacoes.' },
        { term: 'Codigo Numerico', definition: 'Os quatro digitos codificam o tamanho fisico: os dois primeiros digitos sao o diametro em milimetros e os dois ultimos sao a espessura em decimos de milimetro. SR936SW = 9,5 mm de diametro x 3,6 mm de espessura.' },
      ],
    },
    { type: 'title', text: 'Quartzo standard vs solar vs kinetic - como a tecnologia altera a equacao', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Quartzo Standard',
          description: 'Utiliza uma pilha primaria de oxido de prata ou litio substituivel. A vida da bateria depende puramente da capacidade versus consumo. E para isto que esta calculadora foi concebida.',
          highlight: true,
          points: [
            'Pilha primaria substituivel',
            'Vida = capacidade / consumo',
            'Calendario de substituicao previsivel',
            'Trocas de bateria acessiveis',
          ],
        },
        {
          title: 'Solar e Kinetic',
          description: 'Os relogios solares usam celulas fotovoltaicas para recarregar um acumulador de ioes de litio. Os relogios Kinetic usam um micro-gerador acionado por rotor para carregar um condensador.',
          points: [
            'Armazenamento de energia recarregavel',
            'Vida depende dos ciclos de carga',
            'Degradacao do condensador ao longo do tempo',
            'Nao compativel com esta calculadora',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'As reivindicacoes dos fabricantes de <strong>"10 anos de vida da bateria"</strong> baseiam-se geralmente em movimentos de consumo muito baixo (cerca de 0,5 a 0,8 ' + String.fromCharCode(956) + 'A) combinados com pilhas de grande capacidade (165 mAh CR2025 ou superior). Num relogio de quartzo analogico standard com uma pequena pilha de oxido de prata como a <strong>SR626SW (27 mAh)</strong> e um movimento tipico de 1,5 ' + String.fromCharCode(956) + 'A, a vida real e mais proxima de <strong>2,5 - 3 anos</strong>. Verifique sempre com esta calculadora em vez de confiar nos rotulos de marketing.' },
    {
      type: 'tip',
      title: 'Substitua proativamente, nao reativamente',
      html: 'Quando o ponteiro dos segundos comeca a saltar em intervalos de <strong>2 ou 4 segundos</strong>, o movimento entrou em modo de economia de energia devido a baixa tensao. A bateria tem aproximadamente <strong>2 a 4 semanas</strong> de vida restante. Substitua-a imediatamente para evitar danos por fuga.',
    },
    {
      type: 'summary',
      title: 'Principais conclusoes para a saude da bateria de relogios de quartzo',
      items: [
        'Use o valor de consumo oficial do calibre da ficha tecnica do fabricante - um valor adivinhado pode sobrestimar a vida em mais de 100 %',
        'Corresponda exatamente ao tipo de pilha original: as quimicas SR, LR e CR nao sao intercambiaveis',
        'Substitua a bateria quando a ferramenta mostrar menos de 6 meses de vida restante para evitar fugas',
        'A vida real da bateria e tipicamente 10-20 % mais curta do que o ideal teorico devido a temperatura, atrito e utilizacao',
        'Esta calculadora foi concebida para movimentos de quartzo standard com pilhas primarias substituiveis - nao para relogios solares ou kinetic',
      ],
    },
  ],
  faq: [
    {
      question: 'Quao precisa e a estimativa teorica da vida da bateria?',
      answer: 'O calculo e um ideal eletrico baseado na capacidade dividida pelo consumo. Em condicoes reais pode esperar 10 a 20 % menos vida devido a variacao de temperatura, circuitos de detecao de fim de vida, arrasto mecanico de lubrificantes envelhecidos e a carga extra das funcoes de cronografo ou alarme. A estimativa e um limite superior viavel, nao uma previsao exata.',
    },
    {
      question: 'Onde encontro o valor exato de consumo de energia para o meu calibre de quartzo?',
      answer: 'As fichas tecnicas oficiais da ETA, Ronda, Miyota, Seiko, ISA e outros fabricantes de movimentos indicam o consumo medio de corrente em microamperes (' + String.fromCharCode(956) + 'A). Pesquise pelo numero de referencia do calibre seguido de "ficha tecnica" ou "especificacao tecnica". Bases de dados especializadas como Ranfft, 17jewels e Watch-Wiki tambem publicam valores de consumo contribuidos pela comunidade relojoeira.',
    },
    {
      question: 'O que significa "' + String.fromCharCode(956) + 'A" e porque e importante?',
      answer: String.fromCharCode(956) + 'A significa microampere, ou um milionessimo de ampere. Mede a corrente eletrica que o movimento consome da bateria. Um movimento analogico de quartzo tipico de tres ponteiros consome entre 1,0 e 2,5 ' + String.fromCharCode(956) + 'A. Cronografos e modulos multifuncao podem consumir 3,0 a 6,0 ' + String.fromCharCode(956) + 'A. Quanto maior a corrente, mais curta a vida da bateria para uma dada capacidade de pilha.',
    },
    {
      question: 'Posso usar esta ferramenta para relogios solares ou kinetic?',
      answer: 'Nao. Os relogios solares (Eco-Drive, Solar, Light-Powered) usam celulas fotovoltaicas para carregar uma bateria recarregavel. Os relogios Kinetic e Auto-Quartz usam um rotor e micro-gerador para carregar um condensador. Nenhuma das tecnologias depende de uma pilha primaria descartavel, pelo que o modelo capacidade-vs-consumo nao se aplica. Use esta calculadora apenas para movimentos de quartzo standard com pilhas substituiveis de oxido de prata, alcalinas ou de litio.',
    },
    {
      question: 'Devo substituir a bateria antes de ela morrer completamente?',
      answer: 'Sim. As baterias de oxido de prata e alcalinas podem libertar hidroxido de potassio quando totalmente descarregadas, danificando as molas de contacto, as pistas do PCB e a bobina do motor de passo. A substituicao antes da descarga completa e fortemente recomendada. Se a ferramenta mostrar menos de 6 meses de vida estimada restante, agende uma mudanca de bateria assim que for pratico.',
    },
    {
      question: 'O que acontece se usar uma pilha com capacidade superior ou inferior a original?',
      answer: 'Usar uma pilha de maior capacidade (ex.: SR936SW 55 mAh em vez de SR920SW 40 mAh) prolongara a vida da bateria mas pode nao caber fisicamente - a pilha deve corresponder exatamente ao diametro e espessura originais para manter a pressao correta da mola de contacto. Usar uma pilha de menor capacidade encurta a vida da bateria e pode causar contacto intermitente se a pilha for subdimensionada. Substitua sempre pelo mesmo numero de referencia exato ou por um equivalente documentado da mesma familia de tamanhos.',
    },
    {
      question: 'Como sei se a bateria do meu relogio e de oxido de prata ou alcalina?',
      answer: 'As pilhas de oxido de prata sao marcadas com SR (ex.: SR920SW) e fornecem uma saida estavel de 1,55 V durante toda a sua vida, o que mantem o oscilador de quartzo preciso. As pilhas alcalinas sao marcadas com LR (ex.: LR41) e tem uma tensao gradualmente decrescente, o que pode fazer com que o relogio atrase ou pare prematuramente. A maioria das marcas de relogios de qualidade especifica oxido de prata. Se o seu relogio usava originalmente SR, substitua sempre por SR, nunca por LR.',
    },
    {
      question: 'O ponteiro dos segundos a saltar de dois em dois segundos significa que a bateria esta a morrer?',
      answer: 'Sim. Quando o movimento de quartzo deteta que a tensao da bateria e demasiado baixa para acionar o motor de passo de forma fiavel, entra num modo de economia de energia no qual o ponteiro dos segundos salta em intervalos de 2 ou 4 segundos. Este e o indicador de fim de vida. Quando vir este comportamento, a bateria tem aproximadamente 2 a 4 semanas de vida restante e deve ser substituida imediatamente para evitar fugas.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Selecionar ou personalizar a pilha',
      text: 'Escolha uma pilha de oxido de prata comum na lista pendente - SR621SW, SR626SW, SR920SW, SR936SW e outras estao predefinidas com as suas capacidades oficiais. Se a sua pilha nao estiver listada, selecione Personalizado e escreva a sua capacidade exata em mAh conforme impresso no rotulo da pilha ou listado na ficha tecnica do fabricante.',
    },
    {
      name: 'Inserir o consumo de energia do movimento',
      text: 'Localize o consumo medio de corrente para o seu calibre na documentacao tecnica oficial. Escreva o valor em microamperes (' + String.fromCharCode(956) + 'A) no campo de consumo. A maioria dos movimentos de tres ponteiros usa 1,0 a 2,5 ' + String.fromCharCode(956) + 'A. Cronografos e modulos multifuncao podem atingir 6,0 ' + String.fromCharCode(956) + 'A.',
    },
    {
      name: 'Adicionar o mes e ano de instalacao (opcional)',
      text: 'Se se lembra ou registou quando a bateria foi instalada pela ultima vez, selecione o mes e insira o ano. A ferramenta usara esta data para calcular a data de substituicao estimada e mostrar o estado de saude restante da bateria como percentagem.',
    },
    {
      name: 'Ler a vida teorica',
      text: 'O cartao de resultado mostra a vida total estimada da bateria em anos, meses e dias restantes. Esta e a vida maxima em condicoes ideais, assumindo que nenhum fator externo reduz a capacidade da bateria.',
    },
    {
      name: 'Verificar o estado de saude e a data de substituicao',
      text: 'Quando uma data de instalacao e fornecida, o indicador enche proporcionalmente a vida restante da bateria. Um cracha verde "Bom" significa mais de 50 % de vida restante. Amarelo "Moderado" significa entre 20 e 50 %. Vermelho "Critico" significa menos de 20 %. A data exata recomendada de substituicao e mostrada abaixo do indicador.',
    },
    {
      name: 'Ajustar entradas e recalcular',
      text: 'Altere qualquer entrada - modelo de bateria, valor de consumo ou data de instalacao - e o resultado atualiza-se automaticamente. Use isto para comparar diferentes tipos de bateria ou para planear calendarios de substituicao para varios relogios na sua colecao.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quao precisa e a estimativa teorica da vida da bateria?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O calculo e um ideal eletrico baseado na capacidade dividida pelo consumo. Em condicoes reais pode esperar 10 a 20 % menos vida devido a variacao de temperatura, circuitos de detecao de fim de vida, arrasto mecanico de lubrificantes envelhecidos e a carga extra das funcoes de cronografo ou alarme. A estimativa e um limite superior viavel, nao uma previsao exata.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Onde encontro o valor exato de consumo de energia para o meu calibre de quartzo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'As fichas tecnicas oficiais da ETA, Ronda, Miyota, Seiko, ISA e outros fabricantes de movimentos indicam o consumo medio de corrente em microamperes (' + String.fromCharCode(956) + 'A). Pesquise pelo numero de referencia do calibre seguido de ficha tecnica ou especificacao tecnica. Bases de dados especializadas como Ranfft e 17jewels tambem publicam valores de consumo contribuidos pela comunidade relojoeira.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que significa ' + String.fromCharCode(956) + 'A e porque e importante?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': String.fromCharCode(956) + 'A significa microampere, ou um milionessimo de ampere. Mede a corrente eletrica que o movimento consome da bateria. Um movimento analogico de quartzo tipico de tres ponteiros consome entre 1,0 e 2,5 ' + String.fromCharCode(956) + 'A. Cronografos e modulos multifuncao podem consumir 3,0 a 6,0 ' + String.fromCharCode(956) + 'A. Quanto maior a corrente, mais curta a vida da bateria para uma dada capacidade de pilha.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso usar esta ferramenta para relogios solares ou kinetic?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nao. Os relogios solares usam celulas fotovoltaicas para carregar uma bateria recarregavel. Os relogios Kinetic usam um rotor e micro-gerador para carregar um condensador. Nenhuma das tecnologias depende de uma pilha primaria descartavel, pelo que o modelo capacidade-vs-consumo nao se aplica. Use esta calculadora apenas para movimentos de quartzo standard com pilhas substituiveis de oxido de prata, alcalinas ou de litio.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Devo substituir a bateria antes de ela morrer completamente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. As baterias de oxido de prata e alcalinas podem libertar hidroxido de potassio quando totalmente descarregadas, danificando as molas de contacto, as pistas do PCB e a bobina do motor de passo. A substituicao antes da descarga completa e fortemente recomendada. Se a ferramenta mostrar menos de 6 meses de vida estimada restante, agende uma mudanca de bateria assim que for pratico.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Como sei se a bateria do meu relogio e de oxido de prata ou alcalina?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'As pilhas de oxido de prata sao marcadas com SR (ex.: SR920SW) e fornecem uma saida estavel de 1,55 V durante toda a sua vida. As pilhas alcalinas sao marcadas com LR (ex.: LR41) e tem uma tensao gradualmente decrescente. A maioria das marcas de relogios de qualidade especifica oxido de prata. Substitua sempre SR por SR, nunca por LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O ponteiro dos segundos a saltar de dois em dois segundos significa que a bateria esta a morrer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sim. Quando o movimento de quartzo deteta baixa tensao na bateria, entra em modo de economia de energia no qual o ponteiro dos segundos salta em intervalos de 2 ou 4 segundos. Este e o indicador de fim de vida. Quando vir este comportamento, a bateria tem aproximadamente 2 a 4 semanas de vida restante e deve ser substituida imediatamente para evitar fugas.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Verificador de Saude da Bateria de Quartzo',
      'operatingSystem': 'Todos',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calculadora de Vida da Bateria de Relogio',
      'description': 'Calcule a vida teorica da bateria de qualquer movimento de relogio de quartzo inserindo a capacidade da pilha (mAh) e o consumo do calibre (microamperes). Estima a data de substituicao quando o mes e ano de instalacao sao fornecidos.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calculo da vida da bateria de relogios de quartzo - capacidade vs consumo explicado',
      'proficiencyLevel': 'Iniciante',
      'abstract': 'Aprenda a estimar a vida da bateria de um movimento de relogio de quartzo usando a capacidade da pilha em mAh e o consumo de energia do movimento em microamperes. Compreenda a formula, o efeito da temperatura e carga, e quando agendar uma substituicao.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como estimar a vida da bateria de um relogio de quartzo',
      'description': 'Um guia passo a passo para usar o Verificador de Saude da Bateria de Quartzo para determinar a vida restante de qualquer bateria de relogio de quartzo e planear a sua substituicao.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Selecionar ou personalizar a pilha',
          'text': 'Escolha uma pilha de oxido de prata comum na lista pendente - SR621SW, SR626SW, SR920SW, SR936SW e outras estao predefinidas com as suas capacidades oficiais. Se a sua pilha nao estiver listada, selecione Personalizado e escreva a sua capacidade exata em mAh.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Inserir o consumo de energia do movimento',
          'text': 'Localize o consumo medio de corrente para o seu calibre na documentacao tecnica oficial. Escreva o valor em microamperes (' + String.fromCharCode(956) + 'A) no campo de consumo.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Adicionar o mes e ano de instalacao',
          'text': 'Se sabe quando a bateria foi instalada, selecione o mes e insira o ano. A ferramenta calcula a data de substituicao estimada e mostra o estado de saude restante da bateria como percentagem.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Ler a vida teorica',
          'text': 'O cartao de resultado mostra a vida total estimada da bateria em anos, meses e dias restantes. Esta e a vida maxima em condicoes ideais.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Verificar o estado de saude e a data de substituicao',
          'text': 'Quando uma data de instalacao e fornecida, o indicador mostra a vida restante. Verde significa mais de 50 % restante. Amarelo significa 20 a 50 %. Vermelho significa menos de 20 %. A data de substituicao recomendada e mostrada abaixo.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Verificador de Saude da Bateria de Quartzo',
      'description': 'Uma ferramenta online para estimar a vida da bateria de relogios de quartzo com base na capacidade da pilha e no consumo de energia do movimento.',
      'category': 'Calculadora de Bateria de Relogio',
      'audience': { '@type': 'Audience', 'audienceType': 'Entusiastas de relogios e tecnicos de reparacao' },
    },
  ],
};
