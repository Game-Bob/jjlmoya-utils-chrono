import type { ToolLocaleContent } from '../../../types';
import type { TachymeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<TachymeterCalculatorUI> = {
  slug: 'takimetre-hesaplayici',
  title: 'Takimetre Hesaplayici: Gecen Sureden Hiz Hesaplama',
  description: 'Takimetre formülünü kullanarak geçen süreden hız hesaplayın. Takimetre bezel ölçeğine sahip herhangi bir kronograf saatle çalışır.',
  ui: {
    title: 'Takimetre Hesaplayici',
    timeLabel: 'Gecen Sure (saniye)',
    timeHelp: '1 km veya 1 mil uzerinden olculen sure',
    speedResult: 'Hiz',
    bezelReading: 'Bezel Okumasi',
    presetLabel: 'Senaryo',
    selectPreset: 'Bir senaryo secin',
    customPreset: 'Ozel',
    seconds: 'sn',
    kmh: 'km/s',
    mph: 'mil/s',
    exampleStep1: 'Nesne baslangic noktasini gectiginde kronografi baslatin.',
    exampleStep2: '1 km sonra durdurun. Takimetre olcegi hizi gosterir.',
    tipTitle: 'Ipucu',
    tipContent: '36 saniyede bezel 100 gosterir. Daha hizli sureler (daha kisa gecen sure) takimetre olceginde daha yuksek hizlari isaret eder.',
  },
  seo: [
    { type: 'title', text: 'Takimetre Hesaplayici: Gecen Sureyi Hiza Donustur', level: 2 },
    { type: 'paragraph', html: 'Takimetre, saat bezeli veya kadrani uzerinde gecen sureyi hiza donusturen bir olcektir. Genellikle bir kronograf ile kullanilir: nesne bir referans noktasini gectiginde zamanlayiciyi baslatin, 1 km (veya 1 mil) sonra durdurun ve hizi olcekten okuyun. Bu hesaplayici matematigi sizin icin yapar.' },
    { type: 'title', text: 'Takimetre Nasil Calisir', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Formul', definition: 'Hiz = 3.600 / gecen sure (saniye). Sabit 3.600, saat basina saniyeyi temsil eder.' },
        { term: 'Olcek', definition: 'Takimetre bezelleri, 60 (saat 3 konumunda) ile 400 veya 500 (saat 12 ye yakin) arasinda isaretlenmistir. Daha yuksek hizlar, daha kisa gecen surelerle eslesir.' },
        { term: 'Taban Mesafe', definition: 'Standart takimetreler 1 km veya 1 mil icin kalibre edilmistir. Diger mesafeler icin okumayi buna gore bolun.' },
      ]
    },
    { type: 'title', text: 'Yaygin Takimetre Olcumleri', level: 3 },
    {
      type: 'table', headers: ['Gecen Sure', 'Hiz', 'Senaryo'], rows: [
        ['10 sn', '360 km/s', 'Hizli tren / yaris arabasi'],
        ['12 sn', '300 km/s', 'Ozel jet kalkisi'],
        ['20 sn', '180 km/s', 'Otoyolda spor araba'],
        ['30 sn', '120 km/s', 'Otoyolda araba'],
        ['36 sn', '100 km/s', 'Karayolunda araba (standart referans)'],
        ['45 sn', '80 km/s', 'Sehir icinde araba'],
        ['60 sn', '60 km/s', 'Sehir ici surus'],
        ['90 sn', '40 km/s', 'Bisiklet'],
        ['120 sn', '30 km/s', 'Jogging'],
        ['240 sn', '15 km/s', 'Kosu'],
        ['480 sn', '7,5 km/s', 'Yuruyus'],
      ]
    },
    { type: 'title', text: 'Standart Olcegin Otesinde', level: 3 },
    { type: 'paragraph', html: 'Takimetre bezeliniz yalnizca 400 e kadar gidiyorsa ancak gecen sureniz 9 saniyenin altindaysa, yine de kullanabilirsiniz. Daha uzun bir taban mesafesi kullanim. Ornegin, 18 saniyede 2 km seyahat ederseniz, bezel okumasini ikiye bolun. Tersine, dusuk hizlar icin (60 saniyenin uzerinde), daha kisa bir taban mesafesi (ornegin 0,5 km) kullanin ve 2 ile carpin.' },
    { type: 'diagnostic', variant: 'info', title: 'Takimetre Uyumlulugu', icon: 'mdi:information', badge: 'NOT', html: 'Tum kronograflar takimetre bezeline sahip degildir. Bazi saatler takimetre olcegini kadran rehautunda veya dis bolum halkasinda konumlandirir. Dijital saatler, kronograf modunda bir takimetre islevi icerebilir. Formul, fiziksel olcekten bagimsiz olarak her zaman calisir.' },
  ],
  faq: [
    {
      question: 'Saatimdeki takimetre bezelini nasil kullanirim?',
      answer: 'Kronografi bir referans noktasinda (ornegin bir otoyol isareti) baslatin. Tam 1 km (veya 1 mil) sonra durdurun. Saniye kolu, bezel olceginde hizi gosterir. Ornegin, 1 km seyahat etmek 36 saniye surduyse, kol 100 u gosterir, yani 100 km/s.',
    },
    {
      question: 'Gecen surem bezelin okuyabildiginden daha hizliysa ne olur?',
      answer: 'Bazi takimetreler yalnizca 400 veya 500 e kadar gider. 1 km yi 9 saniyenin altinda tamamlarsaniz, daha uzun bir taban mesafesi kullanin. 2 km seyahat edin ve bezel okumasini 2 ye bolun veya 3 km seyahat edin ve 3 e bolun.',
    },
    {
      question: 'Gecen surem bezelin okuyabildiginden daha yavassa ne olur?',
      answer: 'Daha kisa bir taban mesafesi kullanin. Ornegin, 1 km seyahat etmek 90 saniye suruyorsa, bunun yerine 0,5 km seyahat edin. Bezel okumasini yapin ve 2 ile carpin. Standart takimetre olcegi yaklasik 7 ila 60 saniye arasindaki sureleri kapsar.',
    },
    {
      question: 'Takimetreyi hiz disinda baska seyler icin kullanabilir miyim?',
      answer: 'Evet. Takimetre, saat basina herhangi bir orani olcer. Ornegin, bir gorevi tamamlamanin ne kadar surdugunu olcun ve olcek, saat basina kac tane yapabileceginizi gosterir. Uretimde, 30 saniyelik bir gorev, saatte 120 birim anlamina gelir.',
    },
    {
      question: 'Tum takimetreler ayni olcegi mi kullanir?',
      answer: 'Cogu, 3.600 / saniye formulune dayali standart logaritmik olcegi kullanir. Ancak bazi vintage saatler veya markalar farklilik gosterebilir. Fiziksel olcek, saatin dakika izi ve bezel isaretleriyle de sinirli olabilir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Bir senaryo secin veya ozel bir sure girin',
      text: 'Araba, Bisiklet veya Kosu gibi hazir senaryolardan secin veya saniye cinsinden herhangi bir gecen sure girmek icin Ozel i secin.',
    },
    {
      name: 'Hiz sonucunu okuyun',
      text: 'Hesaplayici, hizi km/s ve esdeger takimetre bezel okumasi olarak gosterir.',
    },
    {
      name: 'Kronografiniza uygulayin',
      text: 'Gecen sureyi kullanarak saatinizin takimetre bezelinde eslesen hizi bulun.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Saatimdeki takimetre bezelini nasil kullanirim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kronografi bir referans noktasinda baslatin. Tam 1 km sonra durdurun. Saniye kolu, bezel olceginde hizi gosterir. Ornegin: 36 saniye = 100 km/s.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Gecen surem bezelin okuyabildiginden daha hizliysa ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Daha uzun bir taban mesafesi kullanin. 2 km seyahat edin ve bezel okumasini 2 ye bolun veya 3 km seyahat edin ve 3 e bolun.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Gecen surem bezelin okuyabildiginden daha yavassa ne olur?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Daha kisa bir taban mesafesi kullanin. 0,5 km seyahat edin. Bezel okumasini yapin ve 2 ile carpin.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Takimetreyi hiz disinda baska seyler icin kullanabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Evet. Takimetre, saat basina oran olcer. Bir gorevi tamamlama suresini olcun, olcek saat basina miktari gosterir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Tum takimetreler ayni olcegi mi kullanir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cogu, 3.600 / saniye formulune dayali standart logaritmik olcegi kullanir. Bazi vintage saatler farklilik gosterebilir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Takimetre Hesaplayici',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Takimetre kullanarak hiz nasil hesaplanir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Bir senaryo secin veya ozel sure girin',
          'text': 'Araba, Bisiklet veya Kosu gibi hazir senaryolardan secin veya saniye cinsinden sure girmek icin Ozel i secin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hiz sonucunu okuyun',
          'text': 'Hesaplayici, hizi km/s ve esdeger takimetre bezel okumasi olarak gosterir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Kronografiniza uygulayin',
          'text': 'Gecen sureyi kullanarak saatinizin takimetre bezelinde eslesen hizi bulun.',
        },
      ],
    },
  ],
};
