import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'guia-de-referencia-da-coroa',
  title: 'Guia de Referência da Coroa do Relógio',
  description: 'Guia interativo sobre posições da coroa, direções de corda e funções de ajuste para movimentos populares.',
  ui: {
    title: 'Configurações da Coroa',
    movementLabel: 'Movimento',
    selectMovement: 'Selecione o movimento',
    customMovement: 'Personalizado',
    positionLabel: 'Posição',
    unscrewFirst: 'Desenrosque a coroa primeiro',
    windingLabel: 'Corda',
    hackLabel: 'Hack',
    dangerZoneLabel: 'Evite 21h-3h',
    directionCW: 'Horário',
    directionCCW: 'Anti-horário',
    directionBoth: 'Bidirecional',
    pullHint: 'Puxe a coroa',
    clickPosition: 'Clique numa posição',
    position0Title: 'Repouso',
    position0Desc: 'Coroa pressionada. O relógio funciona normalmente.',
    position0Detail: 'Nenhuma função de corda ou ajuste está ativa.',
    position1Title: 'Corda Manual',
    position1Desc: 'Gire a coroa no sentido horário para dar corda na mola principal. Sentirá resistência à medida que a mola aperta.',
    position1Detail: 'Cerca de 30-40 rotações completas a partir de uma paragem total. Os rotores automáticos também dão corda durante o uso.',
    position2Title: 'Ajuste Rápido da Data',
    position2Desc: 'Gire a coroa no sentido horário para avançar a data. O ponteiro das horas mantém-se sincronizado com os segundos corridos.',
    position2Detail: 'EVITE ajustar a data rapidamente entre as 21h e as 3h enquanto o mecanismo de mudança de data está engatado.',
    position3Title: 'Ajuste da Hora',
    position3Desc: 'Gire a coroa em qualquer direção para mover os ponteiros. O ponteiro dos segundos para (hack) para sincronização precisa.',
    position3Detail: 'Puxe para a posição 3, aguarde os segundos chegarem ao 12, depois puxe totalmente. Rode para acertar as horas e empurre de volta.',
    screwDownHint: 'Lembre-se de enroscar a coroa de volta para a resistência à água.',
    noQuickSet: 'Sem ajuste rápido',
    noHack: 'Não',
    hasHack: 'Sim',
    crownPositions: 'Posições da Coroa',
    noteTitle: 'Nota',
  },
  seo: [
    { type: 'title', text: 'Guia de Posições da Coroa-mo Dar Corda, Ajustar Data e Hora Corretamente', level: 2 },
    { type: 'paragraph', html: 'A coroa é a única interface física entre si e o movimento do seu relógio. Usá-la incorretamente-r corda ao contrário, ajustar a data à meia-noite ou puxar com demasiada força-p- danificar o mecanismo. Este guia explica cada posição da coroa para os calibres <strong>ETA, Sellita, Miyota, Seiko e Unitas</strong> para que nunca tenha de adivinhar.' },
    { type: 'title', text: 'Posições da Coroa de Relance', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Posição 0 (Repouso)', definition: 'Coroa pressionada ou enroscada. O relógio funciona normalmente. Nenhuma função ativa. Volte sempre aqui após o ajuste.' },
        { term: 'Posição 1 (Corda)', definition: 'Primeiro puxão ou estado desenroscado. Gire no sentido horário para dar corda à mola principal. A maioria dos automáticos também dá corda através do rotor.' },
        { term: 'Posição 2 (Ajuste Rápido da Data)', definition: 'Segundo puxão. Gire no sentido horário para avançar a data. Evite usar entre as 21h-3h quando o mecanismo da data está engatado.' },
        { term: 'Posição 3 (Ajuste da Hora)', definition: 'Terceiro puxão. Os segundos param (hacking) para alinhamento preciso. Rode livremente para acertar as horas. Presente na maioria dos automáticos modernos.' },
      ]
    },

    { type: 'title', text: 'Comparação de Movimentos: Funcionalidades da Coroa', level: 3 },
    {
      type: 'table', headers: ['Movimento', 'Posições', 'Hack', 'Adj. Rápido', 'Dir. Corda'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['Miyota 8215', '2 (0,1,3)', 'Não', 'Nenhum', 'H'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Sim', 'Data (H)', 'H'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'Não', 'Nenhum', 'H'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Erros Comuns com a Coroa', icon: 'mdi:alert', badge: 'NÃO FAÇA', html: 'Nunca ajuste a data rapidamente entre as <strong>21h e as 3h</strong> enquanto a roda da data está engatada. Isto pode danificar os dentes e exigir uma revisão completa do movimento. Se precisar de mudar a data durante esta janela, primeiro avance as horas para depois das 3h, ajuste a data e depois volte à hora correta.' },

    { type: 'tip', title: 'Coroas de Enroscar', html: 'Os relógios de mergulho e desportivos têm frequentemente coroas de enroscar para resistência à água. <strong>Desenrosque sempre antes de puxar</strong>. Rode no sentido anti-horário até a coroa saltar, depois puxe para a posição desejada. Após ajustar, empurre e depois rode no sentido horário com pressão ligeira até ficar firme. <strong>Não aperte demais.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Coroa Padrão', icon: 'mdi:crown', description: 'Coroa de pressão encontrada na maioria dos relógios de vestir e automáticos do dia a dia. 2-4 posições. Resistência à água tipicamente 30-100 m.', points: ['Acesso imediato, sem desenroscar', 'Resistência à água limitada', 'Comum em ETA, Miyota, Seiko'] },
        { title: 'Coroa de Enroscar', icon: 'mdi:lock', description: 'Coroa roscada que enrosca no tubo da caixa. Padrão em relógios de mergulho e ferramenta. Resistência à água 200 m+.', points: ['Resistência à água superior', 'Deve desenroscar antes de usar', 'Comum em Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Referência Rápida', items: [
        'Dê sempre corda no sentido horário-dar ao contrário aciona a embraiagem deslizante mas não dá corda.',
        'Se o seu relógio tiver coroa de enroscar, desenrosque-a antes de puxar para qualquer posição.',
        'Evite o ajuste rápido da data entre as 21h e as 3h. Avance as horas para depois das 3h primeiro, se necessário.',
        'Movimentos de corda manual (ex.: Unitas 6498) têm menos posições. Dê corda completamente antes de ajustar as horas.',
        'Movimentos sem hacking (ex.: Miyota 8215) requerem uma técnica diferente: rode para além do minuto pretendido e volte lentamente.',
      ]
    },
  ],
  faq: [
    {
      question: 'Quantas posições da coroa tem o meu relógio?',
      answer: 'A maioria dos movimentos automáticos tem 3 posições funcionais além do repouso: posição 1 para corda manual, posição 2 para ajuste rápido da data e posição 3 para ajuste da hora com hacking. Movimentos de corda manual como o Unitas 6498 têm apenas 1 posição funcional (corda, com ajuste da hora num puxão adicional). Coroas de enroscar acrescentam um passo extra: desenroscar antes de puxar.',
    },
    {
      question: 'Posso danificar o meu relógio ao dar corda ao contrário?',
      answer: 'Não, mas não faz efeito. Os movimentos modernos usam uma embraiagem deslizante que desengata quando rodada ao contrário, por isso dar corda ao contrário não causa danos mas também não dá corda à mola principal. Dê sempre corda no sentido horário para corda manual. A única exceção são alguns relógios de bolso vintage e movimentos automáticos antigos.',
    },
    {
      question: 'O que é a zona de perigo da mudança de data e como evito-a?',
      answer: 'A zona de perigo é tipicamente das 21h às 3h, quando o mecanismo de mudança de data está fisicamente engatado com a roda da data. O ajuste rápido durante esta janela pode danificar os dentes das engrenagens. Para ajustar a data com segurança: avance as horas para depois das 3h, ajuste a data para o dia anterior e depois avance as horas para a data e hora corretas.',
    },
    {
      question: 'Porque é que o meu ponteiro dos segundos não para quando puxo a coroa?',
      answer: 'Alguns movimentos não têm mecanismo de hacking. Calibres comuns sem hacking incluem o Miyota 8215, Unitas 6497/6498 e muitos movimentos vintage. Para ajustar a hora com precisão num movimento sem hacking: rode a coroa 5-10 minutos para além do minuto pretendido e depois rode lentamente para trás até o ponteiro dos minutos acertar exatamente na marca desejada.',
    },
    {
      question: 'Como sei quantas voltas são necessárias para dar corda total ao meu relógio?',
      answer: 'A maioria dos movimentos automáticos requer 30-40 rotações completas da coroa a partir de uma paragem total. Movimentos de corda manual variam: o Unitas 6498 precisa de cerca de 30-35 voltas, enquanto o Seiko 6R35 com a sua reserva de 70 horas precisa de 50-60 voltas. Pare quando sentir resistência firme-rçar além disso pode danificar a mola principal.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Encontre o seu calibre de movimento',
      text: 'Procure na parte de trás da caixa (frequentemente gravado) ou no próprio movimento através de um fundo de caixa transparente. Números comuns: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Selecione-o no guia',
      text: 'Escolha o seu movimento no menu suspenso. O visual da coroa e o painel atualizam-se para mostrar as suas posições exatas, direção de corda e funcionalidades.',
    },
    {
      name: 'Percorra cada posição',
      text: 'Clique nos chips de posição (0-3) ou use o botão Puxar. Leia a descrição e observe o aviso da zona de perigo para o ajuste da data.',
    },
    {
      name: 'Aplique no seu relógio',
      text: 'Com o guia aberto ao lado, pratique no seu próprio relógio. Dê corda na direção correta, evite a zona de perigo e enrosque a coroa de volta após o uso.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quantas posições da coroa tem o meu relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria dos movimentos automáticos tem 3 posições funcionais além do repouso: posição 1 para corda manual, posição 2 para ajuste rápido da data e posição 3 para ajuste da hora com hacking.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Posso danificar o meu relógio ao dar corda ao contrário?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não. Os movimentos modernos usam uma embraiagem deslizante que desengata quando rodada ao contrário, por isso dar corda ao contrário não causa danos mas também não dá corda à mola principal.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O que é a zona de perigo da mudança de data?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A zona de perigo é tipicamente das 21h às 3h. Para ajustar a data com segurança: avance as horas para depois das 3h, ajuste a data para o dia anterior e depois avance para a frente.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Porque é que o meu ponteiro dos segundos não para quando puxo a coroa?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Alguns movimentos não têm mecanismo de hacking. Calibres comuns sem hacking incluem o Miyota 8215 e o Unitas 6497/6498. Para ajustar a hora: rode para além do pretendido e depois volte lentamente.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quantas voltas são necessárias para dar corda total ao meu relógio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A maioria dos movimentos automáticos requer 30-40 rotações completas da coroa. Movimentos de corda manual variam. Pare quando sentir resistência firme.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Guia de Referência da Coroa do Relógio',
      'operatingSystem': 'Todos',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Requer HTML5. Requer JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Como usar o Guia de Referência da Coroa do Relógio',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Encontre o seu calibre de movimento',
          'text': 'Procure na parte de trás da caixa (frequentemente gravado) ou no próprio movimento através de um fundo de caixa transparente. Números comuns: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Selecione-o no guia',
          'text': 'Escolha o seu movimento no menu suspenso. O visual da coroa e o painel atualizam-se para mostrar as suas posições exatas, direção de corda e funcionalidades.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Percorra cada posição',
          'text': 'Clique nos chips de posição (0-3) ou use o botão Puxar. Leia a descrição e observe o aviso da zona de perigo para o ajuste da data.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Aplique no seu relógio',
          'text': 'Com o guia aberto ao lado, pratique no seu próprio relógio. Dê corda na direção correta, evite a zona de perigo e enrosque a coroa de volta após o uso.',
        },
      ],
    },
  ],
};
