import type { ToolLocaleContent } from '../../../types';
import type { PowerReserveEstimatorUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<PowerReserveEstimatorUI> = {
  slug: 'guc-rezervi-tahmini',
  title: 'Saat Güç Rezervi Tahmincisi',
  description: 'Kurma kolu dönüş sayısı ve takma süresine göre saatinizde ne kadar güç rezervi kaldığını tahmin edin. Popüler ETA, Sellita, Miyota, Seiko ve Rolex kalibreleriyle çalışır.',
  ui: {
    title: 'Güç Rezervi Tahmincisi',
    movementLabel: 'Mekanizma',
    selectMovement: 'Mekanizma seçin',
    customMovement: 'Özel',
    turnsLabel: 'Kurma Kolu Dönüşü',
    hoursLabel: 'Takma Süresi',
    turnsInput: 'Dönüş',
    hoursInput: 'Saat',
    activityLabel: 'Aktivite',
    activityLow: 'Masa',
    activityMedium: 'Yürüyüş',
    activityHigh: 'Aktif',
    calculate: 'Hesapla',
    reserveRemaining: 'Kalan Güç Rezervi',
    hoursRemaining: 'Kalan Süre',
    chargePercent: 'Şarj',
    resultLabel: 'Tahmini Rezerv',
    stopTimeLabel: 'Çalışma süresi',
    powerReserveHours: 'Rezerv (s)',
    fullWindTurns: 'Tam dolum dönüşü',
    step1: 'Açılır menüden mekanizmanızı seçin.',
    step2: 'Kurma kolu dönüş sayısını ve takma saatini girin.',
    step3: 'Rezervinizi görmek için Hesapla\'ya basın.',
    tipTitle: 'İpucu',
    tipContent: 'Kurmalı mekanizmalar yalnızca kurma kolunu çevirdiğinizde şarj olur. Otomatik mekanizmalar takılıyken de şarj olur.',
  },
  seo: [
    { type: 'title', text: 'Saat Güç Rezervi Tahmincisi \u2014 Mekanizmanızda Ne Kadar Güç Kaldı?', level: 2 },
    { type: 'paragraph', html: 'Mekanik saatinizde ne kadar güç kaldığını merak ediyor musunuz? İster bu sabah kurma kolunu çevirmiş olun, ister tüm gün takmış olun, bu tahmin aracı <strong>ETA, Sellita, Miyota, Seiko ve Rolex</strong> gibi popüler kalibreler için yaklaşık şarj seviyesini ve kalan süreyi gösterir.' },
    { type: 'title', text: 'Mekanik Bir Saatte Güç Rezervi Nasıl Çalışır', level: 3 },
    { type: 'paragraph', html: 'Güç rezervi, ana yayda depolanan enerji miktarıdır. Kurma kolunu çevirdiğinizde ana yayı sıkıştırarak potansiyel enerji depolarsınız. Otomatik bir rotor da saati takarken ana yayı kurar. Enerji daha sonra sabit bir hızla \u2014 genellikle saatte %2\u20133 \u2014 saat durana kadar tükenir.' },
    { type: 'title', text: 'Kurma Kolu ile Kurma ve Rotor Şarjı', level: 3 },
    { type: 'paragraph', html: 'Kurma koluyla manuel kurma, bir saati şarj etmenin en verimli yoludur \u2014 her tam dönüş, genellikle toplam rezervin yaklaşık %2,5\'i kadar tahmin edilebilir bir enerji ekler. Saati takmak daha yavaş şarj eder ve aktivite seviyenize bağlıdır: bir ofis çalışanı saatte %4\u20136, aktif bir kişi ise saatte %8\u201310 şarj edebilir. Bu tahmin aracı muhafazakâr bir ortalama kullanır.' },
    { type: 'title', text: 'Güç Rezervi Tahmini Neden Önemlidir', level: 3 },
    { type: 'paragraph', html: 'Saatinizin şarj seviyesini bilmek, beklenmedik duruşları önlemeye yardımcı olur. Gece boyunca duran bir saat, yatmadan önce daha fazla kurma gerektirebilir veya yeterince takılmıyor olabilir. Bu aracı kullanarak şarj alışkanlıklarınızı anlayın ve otomatik saatinizi çalışır durumda tutun.' },
  ],
  faq: [
    {
      question: 'Bir kurma kolu dönüşü saati ne kadar şarj eder?',
      answer: 'Mekanizmaya bağlıdır. Çoğu otomatik kalibre 30\u201340 dönüşte tam şarja ulaşır, bu nedenle her dönüş toplam rezervin yaklaşık %2,5\u20133,3\'ünü ekler. Unitas 6498 gibi kurmalı mekanizmalar da tam şarj için yaklaşık 35 dönüş gerektirir.',
    },
    {
      question: 'Saati takmak, kurmak kadar şarj eder mi?',
      answer: 'Takmak daha yavaş ve değişken şarj eder. Masabaşı bir işte rotor aracılığıyla saatte %4\u20136 şarj edebilirsiniz. Aktif hareket sırasında (yürüyüş, spor) saatte %8\u201310\'a ulaşabilir. Elle kurmak daha hızlı ve öngörülebilirdir.',
    },
    {
      question: 'Bir saat saatte ne kadar güç rezervi kaybeder?',
      answer: 'Tüketim sabittir: 100\'ü güç rezervi saatine bölün. 38 saatlik bir mekanizma saatte yaklaşık %2,6, 42 saatlik %2,4 ve 70 saatlik yaklaşık %1,4 kaybeder.',
    },
    {
      question: 'Saatimi fazla kurup bozabilir miyim?',
      answer: 'Modern otomatik mekanizmalarda aşırı kurmayı önleyen kaydırmalı bir kavrama bulunur. Ana yay tamamen kurulduktan sonra ek dönüşler boşa döner. Kurmalı mekanizmalarda da bir durdurma mekanizması bulunur, ancak zorlamak ana yayı hasara uğratabilir.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Mekanizmanızı seçin',
      text: 'Açılır menüden saat kalibrenizi seçin. Listede yoksa "Özel" seçeneğini belirleyip güç rezervini ve tam dolum dönüş sayısını girin.',
    },
    {
      name: 'Girişinizi yapın',
      text: 'Kurma kolunu kaç kez çevirdiğinizi veya saati bugün kaç saat taktığınızı yazın. Birleşik bir tahmin için her ikisini de doldurabilirsiniz.',
    },
    {
      name: 'Hesapla',
      text: 'Hesapla düğmesine basın. Sonuç, tahmini şarj yüzdesini ve kalan güç rezervi saatini gösterir.',
    },
    {
      name: 'Alışkanlıklarınızı ayarlayın',
      text: 'Sonuçları kullanarak yatmadan önce daha fazla kurma gerekip gerekmediğine veya saati çalışır durumda tutmak için gün içinde daha fazla takma süresine ihtiyacınız olup olmadığına karar verin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Bir kurma kolu dönüşü saati ne kadar şarj eder?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Mekanizmaya bağlıdır. Çoğu otomatik kalibre 30\u201340 dönüşte tam şarja ulaşır, bu nedenle her dönüş toplam rezervin yaklaşık %2,5\u20133,3\'ünü ekler. Unitas 6498 gibi kurmalı mekanizmalar da tam şarj için yaklaşık 35 dönüş gerektirir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saati takmak, kurmak kadar şarj eder mi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Takmak daha yavaş ve değişken şarj eder. Masabaşı bir işte rotor aracılığıyla saatte %4\u20136 şarj edebilirsiniz. Aktif hareket sırasında saatte %8\u201310\'a ulaşabilir. Elle kurmak daha hızlı ve öngörülebilirdir.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bir saat saatte ne kadar güç rezervi kaybeder?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Tüketim sabittir: 100\'ü güç rezervi saatine bölün. 38 saatlik bir mekanizma saatte yaklaşık %2,6, 42 saatlik %2,4 ve 70 saatlik yaklaşık %1,4 kaybeder.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Saatimi fazla kurup bozabilir miyim?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Modern otomatik mekanizmalarda aşırı kurmayı önleyen kaydırmalı bir kavrama bulunur. Ana yay tamamen kurulduktan sonra ek dönüşler boşa döner.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Güç Rezervi Tahmincisi',
      'operatingSystem': 'All',
      'applicationCategory': 'UtilitiesApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat güç rezervi nasıl tahmin edilir',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Mekanizmanızı seçin',
          'text': 'Açılır menüden saat kalibrenizi seçin. Listede yoksa "Özel" seçeneğini belirleyip güç rezervini ve tam dolum dönüş sayısını girin.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Girişinizi yapın',
          'text': 'Kurma kolunu kaç kez çevirdiğinizi veya saati bugün kaç saat taktığınızı yazın. Birleşik bir tahmin için her ikisini de doldurabilirsiniz.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Hesapla',
          'text': 'Hesapla düğmesine basın. Sonuç, tahmini şarj yüzdesini ve kalan güç rezervi saatini gösterir.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Alışkanlıklarınızı ayarlayın',
          'text': 'Sonuçları kullanarak yatmadan önce daha fazla kurma gerekip gerekmediğine veya saati çalışır durumda tutmak için gün içinde daha fazla takma süresine ihtiyacınız olup olmadığına karar verin.',
        },
      ],
    },
  ],
};
