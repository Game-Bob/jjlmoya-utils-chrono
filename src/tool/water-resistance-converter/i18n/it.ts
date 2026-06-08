import type { ToolLocaleContent } from '../../../types';
import type { WaterResistanceConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<WaterResistanceConverterUI> = {
  slug: 'convertitore-resistenza-acqua',
  title: 'Convertitore di Resistenza all\'Acqua per Orologi-Metri, ATM, Bar & Piedi',
  description: 'Converti i gradi di resistenza all\'acqua degli orologi tra metri, piedi, ATM e bar. Scopri cosa significa ogni grado per l\'uso quotidiano, il nuoto e le immersioni.',
  ui: {
    title: 'Convertitore di Resistenza all\'Acqua',
    depthLabel: 'Resistenza all\'Acqua',
    enterDepth: 'Inserisci il grado di profondità',
    unitMeters: 'Metri (m)',
    unitFeet: 'Piedi (ft)',
    unitATM: 'Atmosfere (ATM)',
    unitBar: 'Bar (bar)',
    convertedValues: 'Valori Equivalenti',
    ratingLabel: 'Grado',
    whatItMeans: 'Cosa Significa',
    notWaterResistant: 'Non Resistente all\'Acqua',
    notWaterResistantDesc: 'Niente schizzi. Tenerlo completamente lontano dall\'acqua.',
    handWash: 'Resistente agli Schizzi',
    handWashDesc: 'Lavaggio mani, pioggia, leggeri schizzi. Non nuotare, non fare la doccia.',
    showerSwim: 'Doccia e Nuoto in Superficie',
    showerSwimDesc: 'Doccia, nuoto in superficie in piscina. Niente immersioni o snorkeling.',
    snorkeling: 'Nuoto e Snorkeling',
    snorkelingDesc: 'Nuoto in piscina, snorkeling, sport acquatici. Eccellente resistenza quotidiana.',
    scubaDiving: 'Subacquea Ricreativa',
    scubaDivingDesc: 'Immersione subacquea, attività marine ad alto impatto. Conforme ISO.',
    saturationDiving: 'Immersione Profonda / Saturazione',
    saturationDivingDesc: 'Immersione di saturazione professionale. Profondità estreme. Contesto valvola di scarico elio.',
    tipTitle: 'Consiglio',
    tipContent: 'La resistenza all\'acqua diminuisce nel tempo. Le guarnizioni devono essere controllate annualmente e sostituite ogni 3-5 anni.',
  },
  seo: [
    { type: 'title', text: 'Convertitore di Resistenza all\'Acqua per Orologi-Decodificare Metri, ATM, Bar & Piedi', level: 2 },
    { type: 'paragraph', html: 'Un grado di resistenza all\'acqua di 30 metri non significa che puoi immergerti a 30 metri. Significa che l\'orologio sopporta schizzi e pioggia leggera. Questo convertitore traduce tra <strong>metri, piedi, atmosfere (ATM) e bar</strong> e ti dice cosa ogni grado consente effettivamente.' },
    { type: 'title', text: 'La Verità sui Gradi di Resistenza all\'Acqua', level: 3 },
    { type: 'paragraph', html: 'La resistenza all\'acqua degli orologi viene testata in laboratorio sotto pressione statica. Le condizioni reali-muovere il braccio, immergersi, sbalzi di temperatura-creano una pressione dinamica molto più elevata. Un orologio da 30m / 3 ATM è solo resistente agli schizzi. Per nuotare, serve almeno 100m / 10 ATM. Per le immersioni subacquee, 200m / 20 ATM è il punto di ingresso standard.' },
    { type: 'title', text: 'Perché la Resistenza all\'Acqua Diminuisce col Tempo', level: 3 },
    { type: 'paragraph', html: 'Le guarnizioni in gomma e gli O-ring che sigillano l\'orologio si seccano, si crepano e si comprimono col tempo. Calore, luce UV e sostanze chimiche accelerano questo processo. Un orologio un tempo resistente all\'acqua fino a 100m può diventare solo resistente agli schizzi dopo 5 anni senza manutenzione. Fai controllare le guarnizioni ogni anno e sostituiscile ogni 3-5 anni.' },
    { type: 'title', text: 'ISO 6425-Lo Standard per Orologi Subacquei', level: 3 },
    { type: 'paragraph', html: 'Perché un orologio possa essere chiamato "orologio subacqueo," deve soddisfare gli standard ISO 6425: almeno 100m di resistenza all\'acqua, una lunetta unidirezionale, marcature luminescenti e una corona a vite. Gli orologi che soddisfano questo standard vengono testati al 25% oltre la profondità nominale. Un orologio con certificazione ISO da 200m viene testato a 250m.' },
  ],
  faq: [
    {
      question: 'Posso nuotare con un orologio resistente all\'acqua fino a 30 metri?',
      answer: 'No. Un grado di 30m / 3 ATM significa solo resistenza agli schizzi-lavaggio mani, pioggia e sudore. Il nuoto crea una pressione dinamica che supera la pressione di prova statica. Per nuotare, scegli almeno 100m / 10 ATM.',
    },
    {
      question: 'Qual è la differenza tra ATM, bar e metri?',
      answer: '1 ATM = 1 bar ≈ 10 metri di colonna d\'acqua statica. Nell\'industria orologiera sono essenzialmente equivalenti. Un orologio da 10 ATM è uguale a un orologio da 10 bar ed è classificato per circa 100 metri.',
    },
    {
      question: 'Con quale frequenza dovrei testare la resistenza all\'acqua del mio orologio?',
      answer: 'Una volta all\'anno, specialmente prima dell\'esposizione all\'acqua. Le guarnizioni si usurano. Ogni 3-5 anni, tutte le guarnizioni dovrebbero essere sostituite durante un服务 completo.',
    },
    {
      question: 'Cosa significa certificazione ISO 6425?',
      answer: 'ISO 6425 è lo standard internazionale per gli orologi subacquei. Richiede almeno 100m di resistenza, una lunetta unidirezionale, marcature luminescenti e test al 25% sopra la profondità nominale.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Inserisci il tuo grado',
      text: 'Digita il numero di resistenza all\'acqua del tuo orologio e seleziona l\'unità (metri, piedi, ATM o bar).',
    },
    {
      name: 'Leggi gli equivalenti',
      text: 'La scheda mostra i valori convertiti in tutte e quattro le unità simultaneamente.',
    },
    {
      name: 'Controlla la raccomandazione',
      text: 'La scheda evidenziata mostra quali attività sono sicure con il tuo grado di resistenza.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Posso nuotare con un orologio resistente all\'acqua fino a 30 metri?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No. Un grado di 30m / 3 ATM significa solo resistenza agli schizzi-lavaggio mani, pioggia e sudore. Per nuotare, scegli almeno 100m / 10 ATM.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Qual è la differenza tra ATM, bar e metri?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '1 ATM = 1 bar ≈ 10 metri di colonna d\'acqua statica. Nell\'industria orologiera sono essenzialmente equivalenti.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Con quale frequenza dovrei testare la resistenza all\'acqua del mio orologio?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Una volta all\'anno, specialmente prima dell\'esposizione all\'acqua. Ogni 3-5 anni, tutte le guarnizioni dovrebbero essere sostituite durante una revisione completa.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Cosa significa certificazione ISO 6425?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ISO 6425 richiede almeno 100m di resistenza, una lunetta unidirezionale, marcature luminescenti e test al 25% sopra la profondità nominale.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Convertitore di Resistenza all\'Acqua per Orologi',
      'operatingSystem': 'Tutti',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Richiede HTML5. Richiede JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Come convertire i gradi di resistenza all\'acqua degli orologi',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Inserisci il tuo grado',
          'text': 'Digita il numero di resistenza all\'acqua del tuo orologio e seleziona l\'unità.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leggi gli equivalenti',
          'text': 'La scheda mostra i valori convertiti in tutte e quattro le unità simultaneamente.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Controlla la raccomandazione',
          'text': 'La scheda evidenziata mostra quali attività sono sicure con il tuo grado di resistenza.',
        },
      ],
    },
  ],
};
