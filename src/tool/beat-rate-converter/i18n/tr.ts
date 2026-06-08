import type { ToolLocaleContent } from '../../../types';
import type { BeatRateConverterUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<BeatRateConverterUI> = {
  slug: 'darbe-donusturucu',
  title: 'Saat Darbe Hızı Dönüştürücüsü: VPH\'den Hz\'e ve s/g',
  description: 'Saatteki titreşim sayısını (VPH) Hertz\'e, saniyedeki tik sayısına dönüştürün ve tek bir kayıp tiğin günlük etkisini hesaplayın. ETA, Sellita, Miyota, Seiko, Rolex, Omega ve Zenith kalibreleriyle çalışır.',
  ui: {
    title: 'Darbe Hızı Dönüştürücüsü',
    vphLabel: 'Mekanizma',
    selectMovement: 'Mekanizma seçin',
    customMovement: 'Özel',
    customVph: 'Saatteki titreşim sayısı',
    resultsTitle: 'Hesaplamalar',
    frequency: 'Frekans',
    ticksPerSec: 'Saniyedeki tik sayısı',
    lostTickImpact: 'Saatte 1 tik kaybederse',
    lostTickExplainer: '28.800 VPH\'de saatte bir kaçırılan tik, günde yaklaşık 3 saniye kayıp anlamına gelir. Daha düşük darbe hızları etkiyi büyütür.',
    step1: 'Mekanizmanızı seçin veya özel bir VPH girin.',
    step2: 'Hz frekansını, saniyedeki tik sayısını ve kayıp bir tiğin etkisini okuyun.',
    tipTitle: 'İpucu',
    tipContent: 'Daha yüksek darbe hızları (36.000 VPH), daha pürüzsüz saniye kolu hareketi ve daha iyi hassasiyet sağlar, ancak eşapman üzerinde daha fazla aşınmaya neden olur.',
  },
  seo: [
    { type: 'title', text: 'Saat Darbe Hızı Dönüştürücüsü - VPH\'den Hz\'e ve Gündeki Saniyeler', level: 2 },
    { type: 'paragraph', html: 'Her mekanik saat belirli bir hızda atar - balans çarkının saatte yaptığı titreşim sayısı. Bu sayı, saniye kolunun ne kadar pürüzsüz hareket ettiğini ve saatin ne kadar hassas olabileceğini belirler. Bu dönüştürücü <strong>VPH\'yi Hz\'e ve saniyedeki tik sayısına çevirir</strong> ve tek bir kayıp tiğin gerçek dünyadaki etkisini gösterir.' },
    { type: 'title', text: 'Darbe Hızı Nedir?', level: 3 },
    { type: 'paragraph', html: 'Darbe hızı, saatteki titreşim sayısı (vph) olarak ölçülür ve bir saatin balans çarkının salınma frekansıdır. Yaygın bir hız 28.800 VPH\'dir - bu 4 Hz veya saniyede 8 tik demektir. 36.000 VPH (5 Hz) gibi daha yüksek darbe hızları, daha pürüzsüz bir hareket üretir ve konumsal hataların etkisini azaltarak teorik olarak doğruluğu artırabilir.' },
    { type: 'title', text: 'Kayıp Bir Tiğin Önemi', level: 3 },
    { type: 'paragraph', html: 'Sürtünme, manyetizma veya aşınma nedeniyle bir saatin eşapmanı bir tiği iletemezse, bu kayıp tik doğrudan kayıp zamana dönüşür. 28.800 VPH\'de, saatte bir kaçırılan tik günde yaklaşık <strong>3 saniyeye</strong> birikir. 18.000 VPH\'de aynı hata günde neredeyse 5 saniyeye mal olur. Bu araç, regülasyonun ardındaki matematiği anlamanıza yardımcı olur.' },
    { type: 'title', text: 'Yaygın Darbe Hızları', level: 3 },
    { type: 'paragraph', html: 'Vintage cep saatleri ve erken otomatikler genellikle 18.000 VPH (2,5 Hz) ile çalışır. Birçok Seiko ve Miyota kalibresi 21.600 VPH (3 Hz) kullanır. Modern standart, ETA, Sellita, Rolex ve diğerleri tarafından kullanılan 28.800 VPH\'dir (4 Hz). Zenith El Primero gibi yüksek atımlı mekanizmalar, daha fazla hassasiyet için 36.000 VPH\'de (5 Hz) çalışır.' },
  ],
  faq: [
    {
      question: 'VPH\'yi Hz\'e nasıl dönüştürürsünüz?',
      answer: 'VPH\'yi 7.200\'e bölün. 28.800 VPH\'de atan bir saat 4 Hz\'de çalışır (28.800 ÷ 7.200 = 4). 7.200\'e bölme, bir tam salınımın iki titreşim içerdiğini ve bir saatte 3.600 saniye olduğunu hesaba katar.',
    },
    {
      question: 'Daha yüksek bir darbe hızı doğruluk için ne anlama gelir?',
      answer: 'Daha yüksek darbe hızları genellikle daha fazla teorik hassasiyet sağlar çünkü balans çarkı konumsal bozulmalardan daha az etkilenir. Ancak, palet taşları ve eşapman çarkında daha fazla sürtünme ve aşınma yaratırlar, bu da daha iyi yağlama ve daha sık bakım gerektirir.',
    },
    {
      question: 'Kayıp bir tik günlük doğruluğu nasıl etkiler?',
      answer: 'Saatte bir kaçırılan tik, günde 24 kayıp tik anlamına gelir. Kayıp zaman, darbe hızınıza bağlıdır: 86.400\'ü VPH\'nize bölün. 28.800 VPH\'de bu günde 3 saniyedir. 18.000 VPH\'de günde 4,8 saniyedir.',
    },
    {
      question: 'Bir saat kayıp bir tiği telafi edebilir mi?',
      answer: 'Hayır. Bir tik bir kez kaçırıldığında, zaman kalıcı olarak kaybedilmiştir. Saat "yetişmez." Bu nedenle eşapman sağlığı - temiz palet taşları, doğru yağlama ve doğru beat error - günlük hızı doğrudan etkiler.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Kalibrenizi seçin',
      text: 'Açılır menüden mekanizmanızı seçin. Her ön ayar, o kalibre için doğru VPH\'yi içerir.',
    },
    {
      name: 'Sonuçları okuyun',
      text: 'Kart, Hz frekansını, saniyedeki tik sayısını ve tek bir kayıp tiğin günlük etkisini gösterir.',
    },
    {
      name: "Özel bir VPH deneyin",
      text: 'Vintage veya alışılmadık mekanizmalar için herhangi bir VPH değeri girmek üzere "Özel"i seçin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'VPH\'yi Hz\'e nasıl dönüştürürsünüz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'VPH\'yi 7.200\'e bölün. 28.800 VPH\'de atan bir saat 4 Hz\'de çalışır. 7.200\'e bölme, bir salınımın iki titreşim içerdiğini ve saatte 3.600 saniye olduğunu hesaba katar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Daha yüksek bir darbe hızı doğruluk için ne anlama gelir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Daha yüksek darbe hızları daha fazla teorik hassasiyet sağlar çünkü balans çarkı konumsal bozulmalardan daha az etkilenir. Ancak, daha fazla sürtünme ve aşınma yaratırlar.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kayıp bir tik günlük doğruluğu nasıl etkiler?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Saatte bir kaçırılan tik, günde 24 kayıp tik anlamına gelir. Kayıp saniyeleri bulmak için 86.400\'ü VPH\'nize bölün.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir saat kayıp bir tiği telafi edebilir mi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Hayır. Bir tik bir kez kaçırıldığında, zaman kalıcı olarak kaybedilmiştir. Saat yetişmez.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Darbe Hızı Dönüştürücüsü',
      'operatingSystem': 'Tümü',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'HTML5 gerektirir. JavaScript gerektirir.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'VPH\'yi Hz\'e dönüştürme ve kayıp tik etkisini hesaplama',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Kalibrenizi seçin',
          'text': 'Açılır menüden mekanizmanızı seçin. Her ön ayar, o kalibre için doğru VPH\'yi içerir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Sonuçları okuyun',
          'text': 'Kart, Hz frekansını, saniyedeki tik sayısını ve tek bir kayıp tiğin günlük etkisini gösterir.',
        },
        {
          '@type': 'HowToStep',
          'name': "Özel bir VPH deneyin",
          'text': 'Vintage veya alışılmadık mekanizmalar için herhangi bir VPH değeri girmek üzere Özel\'i seçin.',
        },
      ],
    },
  ],
};
