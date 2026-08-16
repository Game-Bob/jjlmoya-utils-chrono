import type { ToolLocaleContent } from '../../../types';
import type { TelemeterCalculatorUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

export const content: ToolLocaleContent<TelemeterCalculatorUI> = {
  slug: 'telemetre-hesaplayici',
  title: 'Telemetre Hesaplayıcı: Telemetre Kadranı Nasıl Kullanılır',
  description: 'Telemetre kadranlı saatleri nasıl kullanacağınızı öğrenin. Hava sıcaklığına göre şimşek ile gök gürültüsü arasındaki mesafeyi hesaplayın.',
  ui: {
    title: 'Telemetre Hesaplayıcı',
    triggerFlash: 'Şimşek Tetikle',
    triggerSound: 'Ses Tetikle',
    stop: 'Durdur',
    reset: 'Sıfırla',
    settings: 'Ayarlar',
    unitSystem: 'Birim Sistemi',
    metric: 'Metrik (km)',
    imperial: 'İmparatorluk (mil)',
    temperature: 'Hava Sıcaklığı',
    speedOfSound: 'Ses Hızı',
    distanceResult: 'Ölçülen Mesafe',
    elapsedTime: 'Geçen Süre',
    historyTitle: 'Ölçüm Geçmişi',
    noHistory: 'Henüz ölçüm yok. Yukarıdan bir hesaplama başlatın!',
    sec: 'sn',
    km: 'km',
    m: 'm',
    mi: 'mil',
    ft: 'ft',
    step1: 'Şimşeği veya parlamayı görür görmez saat 2 yönündeki butona veya "Şimşek Tetikle"ye basın.',
    step2: 'Gök gürültüsünü veya sesi duyduğunuzda tekrar aynı butona veya "Ses Tetikle"ye basın.',
    step3: 'Saniye ibresinin telemetre kadranında durduğu yerdeki mesafeyi okuyun.',
    tipTitle: 'İpucu',
    tipContent: 'Sıcak hava sesi soğuk havaya göre daha hızlı iletir. Ortam sıcaklığını ayarlamak, hesaplanan mesafenin çevre fiziğinizle eşleşmesini sağlar.',
  },
  seo: [
  {
    "type": "title",
    "text": "¿Qué es el bisel de telémetro en un reloj?",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Un telémetro es una escala impresa en la esfera o bisel de un reloj cronógrafo. Permite calcular la distancia a un evento remoto visible y audible."
  },
  {
    "type": "title",
    "text": "Cómo usar la escala de telémetro",
    "level": 3
  },
  {
    "type": "glossary",
    "items": [
      {
        "term": "Paso 1: Iniciar el cronógrafo",
        "definition": "Inicia el cronómetro en el momento de ver el destello visual."
      },
      {
        "term": "Paso 2: Detener el cronógrafo",
        "definition": "Detén el cronómetro al escuchar el sonido del trueno."
      },
      {
        "term": "Paso 3: Leer la escala",
        "definition": "La aguja del segundero señalará la distancia en kilómetros o millas."
      }
    ]
  },
  {
    "type": "title",
    "text": "Física del cálculo de distancia",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La luz viaja a ~300.000 km/s (instantánea). El sonido viaja por el aire a unos 343 m/s a 20°C."
  },
  {
    "type": "title",
    "text": "Telémetro vs Taquímetro",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "El <strong>taquímetro</strong> mide velocidad en distancia fija. El <strong>telémetro</strong> mide distancia en tiempo variable."
  },
  {
    "type": "title",
    "text": "Tabla de referencia tiempo vs distancia",
    "level": 3
  },
  {
    "type": "table",
    "headers": [
      "Tiempo transcurrido",
      "Distancia (km)",
      "Distancia (millas)",
      "Velocidad del sonido"
    ],
    "rows": [
      [
        "1.0 s",
        "0.34 km",
        "0.21 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "2.9 s",
        "1.00 km",
        "0.62 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "4.7 s",
        "1.61 km",
        "1.00 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "5.8 s",
        "2.00 km",
        "1.24 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "10.0 s",
        "3.43 km",
        "2.13 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "15.0 s",
        "5.15 km",
        "3.20 mi",
        "343.3 m/s (20°C)"
      ],
      [
        "29.1 s",
        "10.00 km",
        "6.21 mi",
        "343.3 m/s (20°C)"
      ]
    ]
  },
  {
    "type": "diagnostic",
    "variant": "info",
    "title": "Importancia de la temperatura",
    "icon": "mdi:information",
    "badge": "PRECISIÓN",
    "html": "El sonido viaja más rápido en aire caliente. Ajustar la temperatura corrige la medición."
  }
],
faq: [
  { "question": "Saatteki telemetre ölçeği ne işe yarar?", "answer": "Şimşek ve gök gürültüsü gibi aynı anda görülen ve duyulan bir olayın uzaklığını hesaplamak için kullanılır." },
  { "question": "Telemetre ile yıldırım uzaklığı nasıl hesaplanır?", "answer": "Şimşeği gördüğünüzde kronografı başlatın, gök gürültüsünü duyduğunuzda durdurun ve saniye kolunun gösterdiği sayıyı okuyun." },
  { "question": "Takimetre ile telemetre arasındaki fark nedir?", "answer": "Takimetre bilinen bir mesafedeki hızı ölçer. Telemetre ise zamana ve ses hızına göre uzaklığı ölçer." },
  { "question": "Telemetre ölçeği ne kadar doğrudur?", "answer": "Genellikle 20°C'de yaklaşık 343 m/s ses hızına göre ayarlanır. Sıcaklık değişimleri küçük hatalara yol açar." },
  { "question": "Telemetre su altında kullanılabilir mi?", "answer": "Hayır. Ses suda havaya göre dört kattan daha hızlı ilerler." }
],
  bibliography,
howTo: [
  { "name": "Birimleri ve sıcaklığı ayarlayın", "text": "Metrik veya İngiliz birimlerini seçin ve ortam sıcaklığını girin." },
  { "name": "Şimşekte kronografı başlatın", "text": "Şimşeği gördüğünüzde Şimşeği Tetikle düğmesine veya saat iki konumundaki butona basın." },
  { "name": "Gök gürültüsünde durdurun", "text": "Gök gürültüsünü duyduğunuzda Sesi Tetikle düğmesine veya aynı butona tekrar basın." },
  { "name": "Uzaklığı okuyun", "text": "Hesaplanan uzaklığı sonuç ekranından veya telemetre bezeli üzerindeki koldan okuyun." }
],
  schemas: [],
};

content.schemas = buildSchemas(content.title, content.faq, content.howTo);
