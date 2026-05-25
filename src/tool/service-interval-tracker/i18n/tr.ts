import type { ToolLocaleContent } from '../../../types';
import type { ServiceIntervalTrackerUI } from '../entry';
import { bibliography } from '../bibliography';

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
  seo: [
    { type: 'title', text: 'Saat Servis Takip Programı: Saatlerinizi uzun ömürlü kullanın', level: 2 },
  ],
  faq: [
    {
      question: 'Otomatik bir saat ne sıklıkla bakıma götürülmelidir?',
      answer: 'Üreticiler genellikle otomatik saatler için 3 ila 5 yılda bir bakım önerir. Pratikte birçok saat 5-7 yıl sorunsuz çalışabilir.',
    }
  ],
  bibliography,
  howTo: [
    { name: 'Saat ekleyin', text: 'Saatin adını, mekanizma türünü ve son bakım tarihini girerek kaydı tamamlayın.' }
  ],
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
