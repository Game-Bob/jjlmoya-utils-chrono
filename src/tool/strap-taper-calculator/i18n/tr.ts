import type { ToolLocaleContent } from '../../../types';
import type { StrapTaperCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<StrapTaperCalculatorUI> = {
  slug: 'inceltme-hesaplayici',
  title: 'Saat Kordonu nhce Hesaplaycs ve Oranlar',
  description: 'Kasa çap ve pabuç geniliine gre saatiniz iin ideal kordon incelmesini hesaplayn. Dengeli bir grnm iin mükemmel toka geniliini bulun.',
  ui: {
    title: 'Kordon nhcesi Hesaplaycs',
    caseLabel: 'Saat lçüleri',
    caseInput: 'Kasa çap',
    lugLabel: 'Pabuç genilii',
    lugInput: 'Pabuç genilii',
    taperLabel: 'nceletme Stili',
    straight: 'Düz',
    classic: 'Klasik',
    aggressive: 'Kuvvetli',
    customTaper: 'zel',
    buckleWidth: 'Toka genilii',
    resultsTitle: 'Oranlar',
    lugWidth: 'Pabuç genilii',
    buckleWidthResult: 'Toka genilii',
    taperAmount: 'ncelme',
    taperRatio: 'Oran',
    proportionScore: 'Proporsiyon',
    proportionExcellent: 'Mükemmel',
    proportionGood: 'yi',
    proportionFair: 'Orta',
    proportionUnbalanced: 'Dengesiz',
    mmUnit: 'mm',
    arrow: '→',
    noteTitle: 'Not',
    noteContent: '4 mm\'lik klasik bir incelme (rnein 20\'den 16 mm\'ye) elbise saatlerine uyar. Dalğç ve alet saatleri, dayankl bir his iin genellikle düz veya 2 mm incelme ile daha iyi grnr.',
    step1: 'Kasa çapn ve pabuç geniliini girin.',
    step2: 'Bir inceltme stili seçin veya zel bir toka genilii belirleyin.',
    step3: 'Oranlar ve grsel temsili inceleyin.',
  },
  seo: [
    { type: 'title', text: 'Kordon nhcesi Hesaplaycs - Oranlar, Toka Genilii ve Grsel Rehber', level: 2 },
    { type: 'paragraph', html: 'yi oranlanm bir kordon, saatin ya gnlln yapar ya da bozar. Dalğç saatinde çok fazla incelme onu krugn gsterir. Elbise saatinde incelme olmamas onu kaba gsterir. Bu hesaplayc, kasa çap ve pabuç geniliine gre ideal <strong>kordon incelme orann</strong> bulmannza yardmc olur.' },
    { type: 'title', text: 'Kordon nceltmesi Nedir?', level: 3 },
    { type: 'paragraph', html: 'Kordon incelmesi, pabuç ucundan toka ucuna kadar olan genilik azalmasdr. Klasik bir elbise saati pabuçlarda 20 mm\'den tokada 16 mm\'ye inebilir - 4 mm\'lik bir incelme. Bir dalğç saati, daha alet benzeri bir grnm iin 20 mm\'de düz kalabilir.' },
    { type: 'title', text: 'Kordon Oranlar çin Altn Oran', level: 3 },
    { type: 'paragraph', html: 'Saat merakllar genellikle pabuç geniliinin kasa çapnn %45 ila %55\'i arasnda olmasnn en iyi grnd konusunda hemfikirdir. ncelme iin ise, pabuç geniliinin %75 ila %85\'i kadar bir toka genilii dengeli, zarif bir siluet oluturur. Bu aralk dndaki oranlar saati ba ağr veya krugn gsterebilir.' },
    { type: 'title', text: 'Saat Stiline Gre ncelme', level: 3 },
    { type: 'paragraph', html: 'Elbise saatleri: 4 mm incelme (20\'den 16 mm\'ye). Spor saatleri: 2 ila 3 mm incelme. Dalğç saatleri: 0 ila 2 mm incelme. Askeri veya saha saatleri: dayankl bir grnm iin düz incelme. Pilot saatleri: alet estetiine uymas iin minimum incelme.' },
  ],
  faq: [
    {
      question: 'Elbise saati iin ideal kordon incelmesi nedir?',
      answer: '4 mm incelme klasik sertahtir. 20 mm pabuç genilii iin bu, 16 mm\'lik bir toka anlamna gelir. Bu, elbise saatinin zarif grnumn tamamlayan bir siluet oluturur.',
    },
    {
      question: 'Dalğç saatinde inceltilmi kordon kullanlmal m?',
      answer: 'oğu dalğç saati, minimum incelme veya hi incelme olmadan en iyi grnr. Boydan boya düz 20 mm kordon, dalğçlarn faydac dousna uygun sağlam bir alet saati hissi verir.',
    },
    {
      question: 'ncelme çok kuvvetli olursa ne olur?',
      answer: 'Kuvvetli bir incelme (6 mm veya daha fazlas) saat başnn orantsz biçimde byk ve ba ağr grnmesine neden olabilir. Kordon, toka ucunda ince de hissedilebilir.',
    },
    {
      question: 'Pabuç geniliini nasıl lçerim?',
      answer: 'Saat kasasndaki yayl çubuk delikleri arasndaki i genilii lçn. Bu, ihtiyacnz olan kordon geniliidir. Yaygn boyutlar 18 mm, 20 mm ve 22 mm\'dir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kasa ve pabuç lçlerini girin',
      text: 'Kasa çapn ve pabuç geniliini milimetre cinsinden girin.',
    },
    {
      name: 'Bir inceltme stili seçin',
      text: 'Düz, Klasik, Kuvvetli veya zel seçin. Grsel annda güncellenir.',
    },
    {
      name: 'Oranlar inceleyin',
      text: 'Kordon seçiminizin dengeli olup olmadn grmek iin oran ve proporsiyon puann kontrol edin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Elbise saati iin ideal kordon incelmesi nedir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '4 mm incelme klasik sertahtir. 20 mm pabuç genilii iin bu, 16 mm toka anlamna gelir, zarif bir siluet oluturur.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dalğç saatinde inceltilmi kordon kullanlmal m?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'oğu dalğç saati minimum incelme veya hi incelme olmadan en iyi grnr. Düz 20 mm kordon sağlam bir his verir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ncelme çok kuvvetli olursa ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kuvvetli incelme saat başn orantsz gsterebilir ve kordon toka ucunda ince hissedilebilir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Pabuç geniliini nasıl lçerim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Saat kasasndaki yayl çubuk delikleri arasndaki i genilii lçn. Yaygn boyutlar 18 mm, 20 mm ve 22 mm\'dir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Kordonu nhce Hesaplaycs',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat kordonu incelmesi nasl hesaplanr',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Kasa ve pabuç lçlerini girin',
          'text': 'Kasa çapn ve pabuç geniliini milimetre cinsinden girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Bir inceltme stili seçin',
          'text': 'Düz, Klasik, Kuvvetli veya zel seçin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Oranlar inceleyin',
          'text': 'Oran ve proporsiyon puann kontrol edin.',
        },
      ],
    },
  ],
};
