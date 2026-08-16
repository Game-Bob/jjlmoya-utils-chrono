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
  {
    "type": "title",
    "text": "Rastreador de intervalos de mantenimiento para relojes",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un reloj mecánico requiere un <strong>mantenimiento periódico</strong> para preservar sus finos componentes y evitar averías."
  },
  {
    "type": "title",
    "text": "Intervalos recomendados según el tipo de movimiento",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Automático (3-5 años)",
        "definition": "El rotor y el tren de carga automática sufren desgaste constante."
      },
      {
        "term": "Cuerda manual (4-5 años)",
        "definition": "Carece de rotor pero las ruedas de corona se desgastan con el remontaje diario."
      },
      {
        "term": "Cuarzo (5-10 años)",
        "definition": "Mínimo desgaste mecánico pero exige cambio de batería y juntas."
      },
      {
        "term": "Cinético / Solar (5-8 años)",
        "definition": "El acumulador tiene una vida útil limitada."
      }
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Señales de que tu reloj necesita revisión",
    "icon": "mdi:information",
    "badge": "AVISO",
    "html": "Si tu reloj adelanta o atrasa más de 15-20 segundos al día, o notas humedad en la esfera, llévalo al servicio técnico."
  },
  {
    "type": "title",
    "text": "Rastrea tu colección",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Añade cada reloj de tu colección con su tipo de movimiento y fecha de última revisión. El rastreador calcula la próxima fecha."
  }
],
  faq: [
  {
    "question": "¿Con qué frecuencia se debe revisar un reloj automático?",
    "answer": "La mayoría de los fabricantes recomiendan una revisión cada 3 a 5 años. En la práctica muchos funcionan de 5 a 7 años sin problemas."
  },
  {
    "question": "¿Los relojes de cuarzo necesitan mantenimiento periódico?",
    "answer": "Sí, la batería debe cambiarse cada 2-3 años para evitar fugas de ácido. Una revisión completa de juntas se recomienda cada 5-10 años."
  },
  {
    "question": "¿Qué ocurre si nunca le hago mantenimiento a mi reloj?",
    "answer": "Los lubricantes se secan, aumentando la fricción y el desgaste de pivotes y rubíes. Esto causa averías costosas."
  },
  {
    "question": "¿Puedo forzar la cuerda de un reloj manual?",
    "answer": "Los relojes manuales modernos tienen un tope firme al llegar al tope de cuerda. No fuerces la corona cuando sientas resistencia."
  },
  {
    "question": "¿Cambia el intervalo según el uso diario o puntual?",
    "answer": "Sí, un reloj de uso diario sufre más desgaste y requiere revisión cada 3 años, mientras que uno de uso ocasional aguantará 5 años."
  }
],
  bibliography,
  howTo: [
  {
    "name": "Añadir reloj",
    "text": "Introduce el nombre, tipo de movimiento y fecha del último servicio."
  },
  {
    "name": "Consultar el panel",
    "text": "Cada reloj muestra una barra de progreso y código de colores."
  },
  {
    "name": "Actualizar tras el servicio",
    "text": "Cuando lo lleves al relojero, actualiza la fecha para reiniciar el ciclo."
  }
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
