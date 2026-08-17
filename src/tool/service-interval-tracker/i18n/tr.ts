import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildServiceSeo } from '../../localeSeo';

const title = 'Saat Bakım ve Servis Zamanı Takip Aracı';
const description = 'Saat koleksiyonunuzun bakım aralıklarını takip edin ve yönetin. Hangi saatin bakım zamanının geldiğini bir bakışta görün.';
const faq = [
  {
    "question": "Otomatik saat ne sıklıkla servise gönderilmelidir?",
    "answer": "Üreticilerin çoğu 3-5 yılda bir bakım önerir. Uygulamada birçok saat 5-7 yıl sorunsuz çalışabilir."
  },
  {
    "question": "Kuvars saatlerin düzenli bakıma ihtiyacı var mı?",
    "answer": "Evet, sızıntıyı önlemek için pil 2-3 yılda bir değiştirilmelidir. Contaların tam kontrolü 5-10 yılda bir önerilir."
  },
  {
    "question": "Saat hiç bakıma girmezse ne olur?",
    "answer": "Yağlar kurur; pimler ve taşlardaki sürtünme ile aşınma artar. Bu durum pahalı arızalara yol açabilir."
  },
  {
    "question": "Kurmalı saati zorlayarak kurabilir miyim?",
    "answer": "Modern kurmalı saatlerde yay tamamen dolunca belirgin bir durma noktası vardır. Direnç hissederseniz tepeyi zorlamayın."
  },
  {
    "question": "Aralık günlük veya ara sıra kullanıma göre değişir mi?",
    "answer": "Evet, günlük kullanılan saat daha fazla aşınır ve 3 yılda bir bakım ister; ara sıra kullanımda bu süre 5 yıl olabilir."
  }
];
const howTo = [
  {
    "name": "Saat ekle",
    "text": "Adı, mekanizma türünü ve son bakım tarihini girin."
  },
  {
    "name": "Paneli görüntüle",
    "text": "Her saat ilerleme çubuğu ve renk kodu gösterir."
  },
  {
    "name": "Bakım sonrası güncelle",
    "text": "Saatçiye götürdükten sonra tarihi güncelleyerek döngüyü yeniden başlatın."
  }
];

export const content: ToolLocaleContent<ServiceIntervalTrackerUI> = {
  slug: 'saat-bakim-takip',
  title: 'Saat Bakım ve Servis Zamanı Takip Aracı',
  description: 'Saat koleksiyonunuzun bakım aralıklarını takip edin ve yönetin. Hangi saatin bakım zamanının geldiğini bir bakışta görün.',
  ui: {
    title: 'Bakım Takip',
    addWatch: 'Saat Ekle',
    editWatch: 'Saati Düzenle',
    cancel: 'İptal',
    save: 'Kaydet',
    deleteWatch: 'Kaldır',
    confirmDelete: 'Bu saati koleksiyonunuzdan kaldırmak istiyor musunuz?',
    emptyTitle: 'Koleksiyonunuz boş',
    emptyDesc: 'Saatlerinizin bakım zamanlarını kaydedin ve periyodik servis sürelerini kaçırmayın.',
    emptyAction: 'İlk saatinizi ekleyin',
    healthy: 'sorunsuz',
    due: 'yaklaşıyor',
    overdue: 'gecikmiş',
    nameLabel: 'Saat adı',
    namePlaceholder: 'örn. Rolex Submariner',
    movementLabel: 'Mekanizma türü',
    movementAuto: 'Otomatik',
    movementManual: 'Kurmalı',
    movementQuartz: 'Pilli',
    movementKinetic: 'Kinetik',
    dateLabel: 'Son bakım tarihi',
    neverServiced: 'Yeni veya hiç bakım görmemiş',
    lastServiceLabel: 'Son bakım',
    nextServiceLabel: 'Sonraki bakım',
    serviced: 'Bakım yapıldı',
    newWatch: 'Yeni',
    years: 'yıl',
    collectionHealth: 'Koleksiyon sağlığı',
  },
  seo: buildServiceSeo({ title, description, faq, howTo }),
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Otomatik bir saat ne sıklıkla bakıma götürülmelidir?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Üreticiler genellikle otomatik saatler için 3 ila 5 yılda bir bakım önerir.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Saat Bakım ve Servis Zamanı Takip Aracı',
      'operatingSystem': 'All',
      'applicationCategory': 'LifestyleApplication',
      'browserRequirements': 'Requires HTML5. Requires JavaScript.'
    } as any,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Saat Bakım ve Servis Zamanı Takip Aracı',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Saat ekleyin',
          'text': 'Saatin adını, mekanizma türünü ve son bakım tarihini girin.'
        }
      ]
    }
  ]
};
