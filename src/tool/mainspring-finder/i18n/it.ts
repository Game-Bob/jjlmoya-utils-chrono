import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'trova-molla-reale',
  title: 'Trova Molla Reale',
  description: 'Calcola le dimensioni della molla reale a partire dalle misure del bariletto per movimenti di orologi vintage; è utile per più verifiche di compatibilità.',
  ui: {
    title: 'Trova Molla Reale',
    barrelLabel: 'Diametro interno bariletto',
    arborLabel: 'Diametro esterno albero',
    heightLabel: 'Altezza bariletto',
    turnsLabel: 'Giri',
    calculate: 'Calcola',
    resultThickness: 'Spessore',
    resultHeight: 'Altezza',
    resultLength: 'Lunghezza',
    resultStrength: 'Forza',
    strengthWeak: 'Leggera',
    strengthMedium: 'Media',
    strengthStrong: 'Forte',
    commercial: 'Misura commerciale',
    unitLabel: 'Unita',
    mm: 'mm',
    inch: 'in',
    step1: 'Misure il diametro interno del bariletto, il diametro esterno dell\'albero e l\'altezza interna con un calibro.',
    step2: 'Imposti il numero previsto di giri di carica (5-8 manuale, 6-10 automatico).',
    step3: 'Scelga mm/pollici per il sistema di unita preferito.',
    tipTitle: 'Consiglio',
    tipContent: 'Verifichi sempre le dimensioni calcolate con le specifiche del produttore. Controlli i cataloghi dei fornitori prima di ordinare.',
  },
  seo: [
    { type: 'title', text: 'Trova Molla Reale - Calcola le Dimensioni della Molla per Movimenti Orologieri', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0,08-0,18 mm', label: 'Spessore tipico della molla' },
        { value: '5-10 giri', label: 'Range di carica standard' },
        { value: '150-450 mm', label: 'Lunghezza comune della molla' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Restaurare un movimento orologiero vintage spesso inizia con l\'identificazione della molla reale corretta. Il <strong>Trova Molla Reale</strong> ti aiuta a calcolare le dimensioni teoriche della molla in base alla geometria del bariletto. Inserendo il diametro interno del bariletto, il diametro dell\'albero, l\'altezza del bariletto e il numero previsto di giri, lo strumento calcola spessore, altezza e lunghezza della molla. I risultati vengono mostrati anche come misure commerciali approssimative in unita metriche e imperiali, facilitando la consultazione dei cataloghi dei fornitori.' },
    { type: 'title', text: 'Come vengono calcolate le dimensioni della molla reale', level: 3 },
    { type: 'paragraph', html: 'La molla reale occupa lo spazio anulare tra la parete del bariletto e l\'albero. Lo <strong>spessore della molla</strong> viene stimato come <strong>(diametro interno bariletto - diametro esterno albero) / (2x giri + 1,5)</strong>, dove l\'1,5 extra tiene conto dell\'attacco della molla e dello spazio che la molla occupa su se stessa. La <strong>lunghezza della molla</strong> segue <strong>L = pi x giri x (diametro interno bariletto + diametro esterno albero) / 2</strong>, che da la lunghezza totale del nastro se disteso. L\'<strong>altezza della molla</strong> corrisponde all\'altezza interna del bariletto meno un piccolo gioco (tipicamente 0,1 mm) per evitare lo sfregamento contro il coperchio.' },
    { type: 'title', text: 'Come misurare un bariletto per la scelta della molla reale', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Diametro Interno del Bariletto', definition: 'Il diametro interno del tamburo del bariletto misurato con un calibro. Questo e il cerchio piu grande che la molla reale puo occupare. Range tipico: 8-30 mm.' },
        { term: 'Diametro dell\'Albero', definition: 'Il diametro dell\'albero del bariletto nel suo punto piu largo dove si aggancia la spirale interna della molla reale. Alberi piu piccoli permettono molle piu lunghe a parita di bariletto.' },
        { term: 'Altezza del Bariletto', definition: 'L\'altezza interna del tamburo del bariletto. L\'altezza della molla reale deve essere leggermente inferiore (0,05-0,15 mm) per consentire la rotazione libera senza attrito sul coperchio.' },
        { term: 'Numero di Giri', definition: 'Il numero di giri di carica completi forniti dal movimento. I calibri a carica manuale offrono tipicamente 5-8 giri, gli automatici 6-10 giri.' },
      ],
    },
    { type: 'title', text: 'Forza della molla e cosa significa per il tuo movimento', level: 3 },
    { type: 'paragraph', html: 'Lo <strong>spessore della molla</strong> e il fattore principale che determina la coppia trasmessa al treno di ingranaggi. Una molla piu spessa (oltre 0,14 mm) fornisce una coppia elevata, adatta a movimenti con complicazioni come cronografi o meccanismi di suoneria. Le molle medie (0,10-0,14 mm) sono standard per la maggior parte dei calibri con sola indicazione dell\'ora e data. Le molle sottili (sotto 0,10 mm) si trovano nei piccoli movimenti da donna o nei calibri extra-sottili. Abbini sempre la specifica originale del produttore quando disponibile; una molla eccessivamente forte puo danneggiare l\'albero del bariletto o i perni del treno di ingranaggi.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Usare la molla reale sbagliata puo danneggiare il movimento',
      html: 'Installare una molla <strong>troppo spessa</strong> aumenta l\'attrito e la coppia oltre i limiti di progetto, potenzialmente usurando il foro dell\'albero del bariletto, piegando il perno della ruota di centro o addirittura rompendo il bariletto. Una molla <strong>troppo sottile</strong> non fornira abbastanza ampiezza, facendo andare l\'orologio al rallentatore o fermandosi prima della fine della riserva di carica. Controlli sempre le dimensioni calcolate con i cataloghi dei fornitori prima di ordinare.',
    },
    { type: 'title', text: 'Sistemi di dimensionamento commerciale delle molle reali', level: 3 },
    { type: 'paragraph', html: 'I fornitori di molle reali catalogano le molle per <strong>lunghezza x altezza x spessore</strong> in millimetri. Le dimensioni metriche comuni seguono il sistema General Resources o GR. I sistemi basati su pollici sono ancora utilizzati da alcuni fornitori americani e britannici. Lo strumento mostra entrambi i sistemi in modo che tu possa cercare nei cataloghi indipendentemente dal fornitore. Quando la dimensione calcolata esatta non e disponibile, scegli la misura commerciale piu vicina che corrisponda esattamente all\'altezza e allo spessore entro 0,005 mm, poi regola la lunghezza selezionando una molla della stessa famiglia di altezza/spessore.' },
    { type: 'title', text: 'Considerazioni sui Calibri Vintage', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Calibri svizzeri (ETA, FHF, AS, Unitas)</strong> - ben documentati nel sistema GR. La maggior parte ha riferimenti noti per la molla reale.',
        '<strong>Calibri francesi (LIP, France Ebauches)</strong> - spesso usano proporzioni del bariletto non standard. Misuri con attenzione.',
        '<strong>Calibri americani (Waltham, Elgin, Illinois)</strong> - sistemi basati su pollici. Usi l\'output imperiale per il confronto.',
        '<strong>Calibri giapponesi (Seiko, Citizen, Miyota)</strong> - sistema metrico con buona copertura nei cataloghi per i movimenti successivi al 1960.',
        '<strong>Calibri cinesi (Sea-Gull, DG, Tongji)</strong> - spesso clonano progetti svizzeri. Il riferimento GR svizzero di solito si applica.',
      ],
    },
    {
      type: 'summary',
      title: 'Punti chiave per la scelta della molla reale',
      items: [
        'Misuri con precisione il diametro interno del bariletto, il diametro esterno dell\'albero e l\'altezza del bariletto con un calibro di precisione',
        'Usi le dimensioni calcolate come punto di partenza, non come specifica assoluta',
        'Confronti con le schede tecniche del produttore o i cataloghi dei fornitori',
        'Abbini esattamente l\'altezza della molla all\'altezza del bariletto meno 0,05-0,15 mm di gioco',
        'Abbini lo spessore entro 0,005 mm del valore calcolato per prestazioni ottimali',
        'Verifichi che la lunghezza della molla sia adeguata al numero previsto di giri di carica',
      ],
    },
  ],
  faq: [
    {
      question: 'Quanto sono accurate le dimensioni calcolate della molla reale?',
      answer: 'I calcoli si basano su formule standard di orologeria che assumono una geometria ideale del bariletto. Le dimensioni reali possono variare fino al 5-10% a causa delle tolleranze di fabbricazione, delle configurazioni delle estremita della molla (brace, occhiello o T) e della lega specifica utilizzata. Usi sempre i valori calcolati come un forte punto di riferimento, ma li confronti con le schede tecniche del produttore o i cataloghi dei fornitori prima di ordinare.',
    },
    {
      question: 'Cosa fare se non trovo la misura commerciale esatta?',
      answer: 'Quando la dimensione esatta non e disponibile, dia priorita all\'abbinamento esatto dell\'altezza della molla, poi dello spessore entro 0,005 mm. La lunghezza puo essere regolata selezionando una molla diversa della stessa famiglia di altezza e spessore. Una molla leggermente piu lunga funzionera se il bariletto ha spazio sufficiente, ma una molla piu corta ridurra la riserva di carica.',
    },
    {
      question: 'Come misurare le dimensioni del bariletto senza rimuovere la molla reale?',
      answer: 'Se il bariletto contiene ancora la molla vecchia, puoi misurare il diametro esterno del bariletto dall\'esterno (poi sottrarre lo spessore della parete, tipicamente 0,2-0,4 mm) e l\'altezza totale (poi sottrarre lo spessore del coperchio). Per risultati piu accurati, rimuova la molla vecchia e pulisca il bariletto prima di misurare.',
    },
    {
      question: 'Qual e la differenza tra un\'estremita della molla a brace e a occhiello?',
      answer: 'Un\'estremita a brace (chiamata anche a T) ha una piccola linguetta a forma di T che si aggancia alla parete del bariletto. La maggior parte dei calibri svizzeri e giapponesi moderni usa questo tipo. Un\'estremita a occhiello ha un piccolo foro che si inserisce su un perno dell\'albero. Questo strumento calcola solo le dimensioni del nastro; deve verificare che il tipo di estremita corrisponda al tuo bariletto prima di ordinare.',
    },
    {
      question: 'Posso usare questo strumento per movimenti cronografici o automatici?',
      answer: 'Si, ma noti che i movimenti automatici hanno spesso un numero maggiore di giri (8-10) e possono richiedere una molla leggermente piu sottile per accomodare il modulo di carica aggiuntivo. I movimenti cronografici tipicamente necessitano di molle piu spesse per azionare il meccanismo del cronografo. Regoli il valore dei Giri di conseguenza e verifichi con le specifiche del produttore.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Misuri il diametro interno del bariletto',
      text: 'Usi un calibro di precisione per misurare il diametro interno del tamburo del bariletto. Misuri in due punti a 90 gradi di distanza e faccia la media delle letture. Annoti il risultato in millimetri.',
    },
    {
      name: 'Misuri il diametro dell\'albero',
      text: 'Misuri il diametro dell\'albero del bariletto nel punto piu largo dove si attacca la spirale interna della molla reale. Questo e tipicamente vicino al centro dell\'albero, non all\'estremita quadrata.',
    },
    {
      name: 'Misuri l\'altezza interna del bariletto',
      text: 'Misuri la profondita del bariletto dal fondo al bordo superiore. Se il coperchio e rimovibile, includa lo spessore del coperchio nella misurazione. L\'altezza della molla sara di circa 0,1 mm inferiore.',
    },
    {
      name: 'Imposti il numero di giri',
      text: 'Determini quanti giri completi compie la molla reale quando e completamente carica. Per i calibri a carica manuale, sono tipicamente 5-8 giri. Gli automatici possono avere 6-10 giri. Controlli le specifiche del movimento se disponibili.',
    },
    {
      name: 'Legga le dimensioni calcolate',
      text: 'Lo strumento mostra lo spessore, l\'altezza e la lunghezza consigliati della molla. Stima inoltre la categoria di forza della molla e fornisce equivalenti commerciali sia in unita metriche che imperiali.',
    },
    {
      name: 'Confronti con i cataloghi',
      text: 'Usi le misure commerciali mostrate per cercare nei cataloghi dei fornitori. Inserisca le dimensioni metriche o imperiali in Cousins UK, Jules Borel o nel tuo fornitore di fiducia. Regoli la ricerca se la dimensione esatta non e disponibile.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Quanto sono accurate le dimensioni calcolate della molla reale?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'I calcoli si basano su formule standard di orologeria che assumono una geometria ideale del bariletto. Le dimensioni reali possono variare fino al 5-10% a causa di tolleranze di fabbricazione, configurazioni delle estremita della molla e della lega specifica utilizzata. Confronti sempre con le schede tecniche del produttore o i cataloghi dei fornitori prima di ordinare.' },
        },
        {
          '@type': 'Question',
          'name': 'Cosa fare se non trovo la misura commerciale esatta?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Abbini prima esattamente l\'altezza della molla, poi lo spessore entro 0,005 mm. Regoli la lunghezza dalla stessa famiglia di altezza/spessore.' },
        },
        {
          '@type': 'Question',
          'name': 'Come misurare il bariletto senza rimuovere la molla reale?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Misuri il diametro esterno del bariletto e sottragga lo spessore della parete (0,2-0,4 mm). Per risultati migliori, rimuova prima la molla vecchia.' },
        },
        {
          '@type': 'Question',
          'name': 'Qual e la differenza tra estremita a brace e a occhiello?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Il brace (a T) si aggancia alla parete del bariletto. L\'occhiello ha un foro su un perno dell\'albero. I calibri svizzeri/giapponesi moderni usano estremita a brace.' },
        },
        {
          '@type': 'Question',
          'name': 'Posso usarlo per movimenti cronografici o automatici?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Si. Gli automatici spesso necessitano di piu giri (8-10) e molle piu sottili. I cronografici necessitano di molle piu spesse. Regoli i Giri e verifichi.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Trova Molla Reale',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Calcolatore Molla Reale per Orologi',
      'description': 'Calcola le dimensioni teoriche della molla reale a partire dalle misure del bariletto per movimenti di orologi vintage.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Calcolo delle dimensioni della molla reale dell\'orologio',
      'proficiencyLevel': 'Intermedio',
      'abstract': 'Scopri come calcolare le dimensioni della molla reale a partire dal diametro interno del bariletto, dalla dimensione dell\'albero e dai giri di carica.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come trovare la molla reale corretta',
      'description': 'Guida passo passo per misurare un bariletto e calcolare le dimensioni corrette della molla reale.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Misuri il diametro interno del bariletto', 'text': 'Usi un calibro di precisione per misurare il diametro interno del tamburo del bariletto.' },
        { '@type': 'HowToStep', 'name': 'Misuri il diametro esterno dell\'albero', 'text': 'Misuri il diametro dell\'albero del bariletto nel suo punto piu largo.' },
        { '@type': 'HowToStep', 'name': 'Misuri l\'altezza del bariletto', 'text': 'Misuri la profondita interna. L\'altezza della molla e di circa 0,1 mm inferiore.' },
        { '@type': 'HowToStep', 'name': 'Imposti i giri', 'text': 'Imposti 5-8 per carica manuale, 6-10 per movimenti automatici.' },
        { '@type': 'HowToStep', 'name': 'Legga i risultati', 'text': 'Visualizzi spessore, altezza, lunghezza della molla e gli equivalenti commerciali.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Trova Molla Reale',
      'description': 'Uno strumento per orologiai per calcolare le dimensioni della molla reale a partire dalle misure del bariletto.',
      'category': 'Strumento di Orologeria',
      'audience': { '@type': 'Audience', 'audienceType': 'Orologiai e appassionati di orologeria' },
    },
  ],
};
