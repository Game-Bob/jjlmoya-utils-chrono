import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'darbe-donusturucu',
  title: 'Saat Darbe H\u0131z\u0131 D\u00f6n\u00fc\u015ft\u00fcr\u00fcc\u00fcs\u00fc \u2014 VPH\u2019den Hz\u2019e ve s/g',
  description: 'Saatteki titre\u015fim say\u0131s\u0131n\u0131 (VPH) Hertz\u2019e, saniyedeki tik say\u0131s\u0131na d\u00f6n\u00fc\u015ft\u00fcr\u00fcn ve tek bir kay\u0131p ti\u011fin g\u00fcnl\u00fck etkisini hesaplay\u0131n. ETA, Sellita, Miyota, Seiko, Rolex, Omega ve Zenith kalibreleriyle \u00e7al\u0131\u015f\u0131r.',
  ui: {
    title: 'Darbe H\u0131z\u0131 D\u00f6n\u00fc\u015ft\u00fcr\u00fcc\u00fcs\u00fc',
    vphLabel: 'Mekanizma',
    selectMovement: 'Mekanizma se\u00e7in',
    customMovement: '\u00d6zel',
    customVph: 'Saatteki titre\u015fim say\u0131s\u0131',
    resultsTitle: 'Hesaplamalar',
    frequency: 'Frekans',
    ticksPerSec: 'Saniyedeki tik say\u0131s\u0131',
    lostTickImpact: 'Saatte 1 tik kaybederse',
    lostTickExplainer: '28.800 VPH\u2019de saatte bir ka\u00e7\u0131r\u0131lan tik, g\u00fcnde yakla\u015f\u0131k 3 saniye kay\u0131p anlam\u0131na gelir. Daha d\u00fc\u015f\u00fck darbe h\u0131zlar\u0131 etkiyi b\u00fcy\u00fct\u00fcr.',
    step1: 'Mekanizman\u0131z\u0131 se\u00e7in veya \u00f6zel bir VPH girin.',
    step2: 'Hz frekans\u0131n\u0131, saniyedeki tik say\u0131s\u0131n\u0131 ve kay\u0131p bir ti\u011fin etkisini okuyun.',
    tipTitle: '\u0130pucu',
    tipContent: 'Daha y\u00fcksek darbe h\u0131zlar\u0131 (36.000 VPH), daha p\u00fcr\u00fczs\u00fcz saniye kolu hareketi ve daha iyi hassasiyet sa\u011flar, ancak e\u015fapman \u00fczerinde daha fazla a\u015f\u0131nmaya neden olur.',
  },
  seo: [
    { type: 'title', text: 'Saat Darbe H\u0131z\u0131 D\u00f6n\u00fc\u015ft\u00fcr\u00fcc\u00fcs\u00fc \u2014 VPH\u2019den Hz\u2019e ve G\u00fcndeki Saniyeler', level: 2 },
    { type: 'paragraph', html: 'Her mekanik saat belirli bir h\u0131zda atar \u2014 balans \u00e7ark\u0131n\u0131n saatte yapt\u0131\u011f\u0131 titre\u015fim say\u0131s\u0131. Bu say\u0131, saniye kolunun ne kadar p\u00fcr\u00fczs\u00fcz hareket etti\u011fini ve saatin ne kadar hassas olabilece\u011fini belirler. Bu d\u00f6n\u00fc\u015ft\u00fcr\u00fcc\u00fc <strong>VPH\u2019yi Hz\u2019e ve saniyedeki tik say\u0131s\u0131na \u00e7evirir</strong> ve tek bir kay\u0131p ti\u011fin ger\u00e7ek d\u00fcnyadaki etkisini g\u00f6sterir.' },
    { type: 'title', text: 'Darbe H\u0131z\u0131 Nedir?', level: 3 },
    { type: 'paragraph', html: 'Darbe h\u0131z\u0131, saatteki titre\u015fim say\u0131s\u0131 (vph) olarak \u00f6l\u00e7\u00fcl\u00fcr ve bir saatin balans \u00e7ark\u0131n\u0131n sal\u0131nma frekans\u0131d\u0131r. Yayg\u0131n bir h\u0131z 28.800 VPH\u2019dir \u2014 bu 4 Hz veya saniyede 8 tik demektir. 36.000 VPH (5 Hz) gibi daha y\u00fcksek darbe h\u0131zlar\u0131, daha p\u00fcr\u00fczs\u00fcz bir hareket \u00fcretir ve konumsal hatalar\u0131n etkisini azaltarak teorik olarak do\u011frulu\u011fu art\u0131rabilir.' },
    { type: 'title', text: 'Kay\u0131p Bir Ti\u011fin \u00d6nemi', level: 3 },
    { type: 'paragraph', html: 'S\u00fcrt\u00fcnme, manyetizma veya a\u015f\u0131nma nedeniyle bir saatin e\u015fapman\u0131 bir ti\u011fi iletemezse, bu kay\u0131p tik do\u011frudan kay\u0131p zamana d\u00f6n\u00fc\u015f\u00fcr. 28.800 VPH\u2019de, saatte bir ka\u00e7\u0131r\u0131lan tik g\u00fcnde yakla\u015f\u0131k <strong>3 saniyeye</strong> birikir. 18.000 VPH\u2019de ayn\u0131 hata g\u00fcnde neredeyse 5 saniyeye mal olur. Bu ara\u00e7, reg\u00fclasyonun ard\u0131ndaki matemati\u011fi anlaman\u0131za yard\u0131mc\u0131 olur.' },
    { type: 'title', text: 'Yayg\u0131n Darbe H\u0131zlar\u0131', level: 3 },
    { type: 'paragraph', html: 'Vintage cep saatleri ve erken otomatikler genellikle 18.000 VPH (2,5 Hz) ile \u00e7al\u0131\u015f\u0131r. Bir\u00e7ok Seiko ve Miyota kalibresi 21.600 VPH (3 Hz) kullan\u0131r. Modern standart, ETA, Sellita, Rolex ve di\u011ferleri taraf\u0131ndan kullan\u0131lan 28.800 VPH\u2019dir (4 Hz). Zenith El Primero gibi y\u00fcksek at\u0131ml\u0131 mekanizmalar, daha fazla hassasiyet i\u00e7in 36.000 VPH\u2019de (5 Hz) \u00e7al\u0131\u015f\u0131r.' },
  ],
  faq: [
    {
      question: 'VPH\u2019yi Hz\u2019e nas\u0131l d\u00f6n\u00fc\u015ft\u00fcr\u00fcrs\u00fcn\u00fcz?',
      answer: 'VPH\u2019yi 7.200\u2019e b\u00f6l\u00fcn. 28.800 VPH\u2019de atan bir saat 4 Hz\u2019de \u00e7al\u0131\u015f\u0131r (28.800 \u00f7 7.200 = 4). 7.200\u2019e b\u00f6lme, bir tam sal\u0131n\u0131m\u0131n iki titre\u015fim i\u00e7erdi\u011fini ve bir saatte 3.600 saniye oldu\u011funu hesaba katar.',
    },
    {
      question: 'Daha y\u00fcksek bir darbe h\u0131z\u0131 do\u011fruluk i\u00e7in ne anlama gelir?',
      answer: 'Daha y\u00fcksek darbe h\u0131zlar\u0131 genellikle daha fazla teorik hassasiyet sa\u011flar \u00e7\u00fcnk\u00fc balans \u00e7ark\u0131 konumsal bozulmalardan daha az etkilenir. Ancak, palet ta\u015flar\u0131 ve e\u015fapman \u00e7ark\u0131nda daha fazla s\u00fcrt\u00fcnme ve a\u015f\u0131nma yarat\u0131rlar, bu da daha iyi ya\u011flama ve daha s\u0131k bak\u0131m gerektirir.',
    },
    {
      question: 'Kay\u0131p bir tik g\u00fcnl\u00fck do\u011frulu\u011fu nas\u0131l etkiler?',
      answer: 'Saatte bir ka\u00e7\u0131r\u0131lan tik, g\u00fcnde 24 kay\u0131p tik anlam\u0131na gelir. Kay\u0131p zaman, darbe h\u0131z\u0131n\u0131za ba\u011fl\u0131d\u0131r: 86.400\u2019\u00fc VPH\u2019nize b\u00f6l\u00fcn. 28.800 VPH\u2019de bu g\u00fcnde 3 saniyedir. 18.000 VPH\u2019de g\u00fcnde 4,8 saniyedir.',
    },
    {
      question: 'Bir saat kay\u0131p bir ti\u011fi telafi edebilir mi?',
      answer: 'Hay\u0131r. Bir tik bir kez ka\u00e7\u0131r\u0131ld\u0131\u011f\u0131nda, zaman kal\u0131c\u0131 olarak kaybedilmi\u015ftir. Saat "yeti\u015fmez." Bu nedenle e\u015fapman sa\u011fl\u0131\u011f\u0131 \u2014 temiz palet ta\u015flar\u0131, do\u011fru ya\u011flama ve do\u011fru beat error \u2014 g\u00fcnl\u00fck h\u0131z\u0131 do\u011frudan etkiler.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kalibrenizi se\u00e7in',
      text: 'A\u00e7\u0131l\u0131r men\u00fcden mekanizman\u0131z\u0131 se\u00e7in. Her \u00f6n ayar, o kalibre i\u00e7in do\u011fru VPH\u2019yi i\u00e7erir.',
    },
    {
      name: 'Sonu\u00e7lar\u0131 okuyun',
      text: 'Kart, Hz frekans\u0131n\u0131, saniyedeki tik say\u0131s\u0131n\u0131 ve tek bir kay\u0131p ti\u011fin g\u00fcnl\u00fck etkisini g\u00f6sterir.',
    },
    {
      name: "\u00d6zel bir VPH deneyin",
      text: 'Vintage veya al\u0131\u015f\u0131lmad\u0131k mekanizmalar i\u00e7in herhangi bir VPH de\u011feri girmek \u00fczere "\u00d6zel"i se\u00e7in.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'VPH\u2019yi Hz\u2019e nas\u0131l d\u00f6n\u00fc\u015ft\u00fcr\u00fcrs\u00fcn\u00fcz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'VPH\u2019yi 7.200\u2019e b\u00f6l\u00fcn. 28.800 VPH\u2019de atan bir saat 4 Hz\u2019de \u00e7al\u0131\u015f\u0131r. 7.200\u2019e b\u00f6lme, bir sal\u0131n\u0131m\u0131n iki titre\u015fim i\u00e7erdi\u011fini ve saatte 3.600 saniye oldu\u011funu hesaba katar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Daha y\u00fcksek bir darbe h\u0131z\u0131 do\u011fruluk i\u00e7in ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Daha y\u00fcksek darbe h\u0131zlar\u0131 daha fazla teorik hassasiyet sa\u011flar \u00e7\u00fcnk\u00fc balans \u00e7ark\u0131 konumsal bozulmalardan daha az etkilenir. Ancak, daha fazla s\u00fcrt\u00fcnme ve a\u015f\u0131nma yarat\u0131rlar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kay\u0131p bir tik g\u00fcnl\u00fck do\u011frulu\u011fu nas\u0131l etkiler?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Saatte bir ka\u00e7\u0131r\u0131lan tik, g\u00fcnde 24 kay\u0131p tik anlam\u0131na gelir. Kay\u0131p saniyeleri bulmak i\u00e7in 86.400\u2019\u00fc VPH\u2019nize b\u00f6l\u00fcn.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir saat kay\u0131p bir ti\u011fi telafi edebilir mi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hay\u0131r. Bir tik bir kez ka\u00e7\u0131r\u0131ld\u0131\u011f\u0131nda, zaman kal\u0131c\u0131 olarak kaybedilmi\u015ftir. Saat yeti\u015fmez.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Darbe H\u0131z\u0131 D\u00f6n\u00fc\u015ft\u00fcr\u00fcc\u00fcs\u00fc',
      'operatingSystem': 'T\u00fcm\u00fc',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'VPH\u2019yi Hz\u2019e d\u00f6n\u00fc\u015ft\u00fcrme ve kay\u0131p tik etkisini hesaplama',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Kalibrenizi se\u00e7in',
          'text': 'A\u00e7\u0131l\u0131r men\u00fcden mekanizman\u0131z\u0131 se\u00e7in. Her \u00f6n ayar, o kalibre i\u00e7in do\u011fru VPH\u2019yi i\u00e7erir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sonu\u00e7lar\u0131 okuyun',
          'text': 'Kart, Hz frekans\u0131n\u0131, saniyedeki tik say\u0131s\u0131n\u0131 ve tek bir kay\u0131p ti\u011fin g\u00fcnl\u00fck etkisini g\u00f6sterir.',
        },
        {
          '@type': 'HowToStep',
          'name': "\u00d6zel bir VPH deneyin",
          'text': 'Vintage veya al\u0131\u015f\u0131lmad\u0131k mekanizmalar i\u00e7in herhangi bir VPH de\u011feri girmek \u00fczere \u00d6zel\u2019i se\u00e7in.',
        },
      ],
    },
  ],
};
