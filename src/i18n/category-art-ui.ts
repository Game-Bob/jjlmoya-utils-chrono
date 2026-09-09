import type { KnownLocale } from "../types";

export interface CategoryArtUi {
  fieldGuide: string;
  measuredNote: string;
  instrumentAria: string;
  precisionLabel: string;
  localTimeLabel: string;
  artCaptionLead: string;
  artCaptionMain: string;
  indexLabel: string;
  indexTitle: string;
  indexIntro: string;
  seoEyebrow: string;
  seoLead: string;
  toolTypes: { primary: string; calibration: string; reference: string };
}

export const CATEGORY_ART_UI: Record<KnownLocale, CategoryArtUi> = {
  es: {
    fieldGuide: "GUÍA DE CAMPO / 01",
    measuredNote: "Medido localmente · hecho para manos curiosas",
    instrumentAria:
      "Instrumento abstracto de precisión con la hora local en movimiento",
    precisionLabel: "PRECISIÓN / 01",
    localTimeLabel: "HORA LOCAL / SISTEMA",
    artCaptionLead: "EL ARTE DE",
    artCaptionMain: "MEDIR EL TIEMPO",
    indexLabel: "ÍNDICE / {count} INSTRUMENTOS",
    indexTitle: "Un archivo vivo del tiempo.",
    indexIntro:
      "Cada herramienta es un instrumento pequeño: responde una pregunta precisa y después desaparece para dejarte pensar.",
    seoEyebrow: "MANIFIESTO / TIEMPO VISIBLE",
    seoLead:
      "Una colección para mirar el tiempo por dentro: medirlo, compararlo, imaginarlo y devolverle el asombro.",
    toolTypes: {
      primary: "SEÑAL PRINCIPAL",
      calibration: "CALIBRACIÓN",
      reference: "REFERENCIA",
    },
  },
  en: {
    fieldGuide: "FIELD GUIDE / 01",
    measuredNote: "Measured locally · made for curious hands",
    instrumentAria:
      "Abstract precision instrument showing the local time in motion",
    precisionLabel: "PRECISION / 01",
    localTimeLabel: "LOCAL TIME / SYSTEM",
    artCaptionLead: "THE ART OF",
    artCaptionMain: "KEEPING TIME",
    indexLabel: "INDEX / {count} INSTRUMENTS",
    indexTitle: "A living archive of time.",
    indexIntro:
      "Every tool is a small instrument: it answers one precise question, then disappears so you can think.",
    seoEyebrow: "MANIFESTO / VISIBLE TIME",
    seoLead:
      "A collection for looking inside time: measuring it, comparing it, imagining it, and giving wonder back to it.",
    toolTypes: {
      primary: "PRIMARY SIGNAL",
      calibration: "CALIBRATION",
      reference: "REFERENCE",
    },
  },
  fr: {
    fieldGuide: "CARNET DE TERRAIN / 01",
    measuredNote: "Mesuré localement · conçu pour les mains curieuses",
    instrumentAria:
      "Instrument abstrait de précision affichant l'heure locale en mouvement",
    precisionLabel: "PRÉCISION / 01",
    localTimeLabel: "HEURE LOCALE / SYSTÈME",
    artCaptionLead: "L'ART DE",
    artCaptionMain: "MESURER LE TEMPS",
    indexLabel: "INDEX / {count} INSTRUMENTS",
    indexTitle: "Une archive vivante du temps.",
    indexIntro:
      "Chaque outil est un petit instrument: il répond à une question précise, puis s'efface pour vous laisser réfléchir.",
    seoEyebrow: "MANIFESTE / TEMPS VISIBLE",
    seoLead:
      "Une collection pour regarder le temps de l'intérieur: le mesurer, le comparer, l'imaginer et lui rendre sa part d'émerveillement.",
    toolTypes: {
      primary: "SIGNAL PRINCIPAL",
      calibration: "CALIBRATION",
      reference: "RÉFÉRENCE",
    },
  },
  de: {
    fieldGuide: "FELDHANDBUCH / 01",
    measuredNote: "Lokal gemessen · für neugierige Hände gemacht",
    instrumentAria: "Abstraktes Präzisionsinstrument mit bewegter Ortszeit",
    precisionLabel: "PRÄZISION / 01",
    localTimeLabel: "ORTSZEIT / SYSTEM",
    artCaptionLead: "DIE KUNST,",
    artCaptionMain: "ZEIT ZU MESSEN",
    indexLabel: "INDEX / {count} INSTRUMENTE",
    indexTitle: "Ein lebendiges Archiv der Zeit.",
    indexIntro:
      "Jedes Werkzeug ist ein kleines Instrument: Es beantwortet eine präzise Frage und tritt dann zurück, damit Sie weiterdenken können.",
    seoEyebrow: "MANIFEST / SICHTBARE ZEIT",
    seoLead:
      "Eine Sammlung, um in die Zeit hineinzusehen: sie zu messen, zu vergleichen, zu imaginieren und ihr Staunen zurückzugeben.",
    toolTypes: {
      primary: "HAUPTSIGNAL",
      calibration: "KALIBRIERUNG",
      reference: "REFERENZ",
    },
  },
  it: {
    fieldGuide: "TACCUINO DI CAMPO / 01",
    measuredNote: "Misurato localmente · creato per mani curiose",
    instrumentAria:
      "Strumento astratto di precisione con l'ora locale in movimento",
    precisionLabel: "PRECISIONE / 01",
    localTimeLabel: "ORA LOCALE / SISTEMA",
    artCaptionLead: "L'ARTE DI",
    artCaptionMain: "MISURARE IL TEMPO",
    indexLabel: "INDICE / {count} STRUMENTI",
    indexTitle: "Un archivio vivente del tempo.",
    indexIntro:
      "Ogni strumento è un piccolo dispositivo: risponde a una domanda precisa e poi si fa da parte, lasciandoti pensare.",
    seoEyebrow: "MANIFESTO / TEMPO VISIBILE",
    seoLead:
      "Una raccolta per guardare dentro il tempo: misurarlo, confrontarlo, immaginarlo e restituirgli meraviglia.",
    toolTypes: {
      primary: "SEGNALE PRINCIPALE",
      calibration: "CALIBRAZIONE",
      reference: "RIFERIMENTO",
    },
  },
  pt: {
    fieldGuide: "CADERNO DE CAMPO / 01",
    measuredNote: "Medido localmente · feito para mãos curiosas",
    instrumentAria:
      "Instrumento abstrato de precisão com a hora local em movimento",
    precisionLabel: "PRECISÃO / 01",
    localTimeLabel: "HORA LOCAL / SISTEMA",
    artCaptionLead: "A ARTE DE",
    artCaptionMain: "MEDIR O TEMPO",
    indexLabel: "ÍNDICE / {count} INSTRUMENTOS",
    indexTitle: "Um arquivo vivo do tempo.",
    indexIntro:
      "Cada ferramenta é um pequeno instrumento: responde a uma pergunta precisa e depois sai de cena para você continuar pensando.",
    seoEyebrow: "MANIFESTO / TEMPO VISÍVEL",
    seoLead:
      "Uma coleção para olhar o tempo por dentro: medi-lo, compará-lo, imaginá-lo e devolver-lhe o espanto.",
    toolTypes: {
      primary: "SINAL PRINCIPAL",
      calibration: "CALIBRAÇÃO",
      reference: "REFERÊNCIA",
    },
  },
  nl: {
    fieldGuide: "VELDGIDS / 01",
    measuredNote: "Lokaal gemeten · gemaakt voor nieuwsgierige handen",
    instrumentAria:
      "Abstract precisie-instrument met de lokale tijd in beweging",
    precisionLabel: "PRECISIE / 01",
    localTimeLabel: "LOKALE TIJD / SYSTEEM",
    artCaptionLead: "DE KUNST VAN",
    artCaptionMain: "TIJD METEN",
    indexLabel: "INDEX / {count} INSTRUMENTEN",
    indexTitle: "Een levend archief van tijd.",
    indexIntro:
      "Elke tool is een klein instrument: hij beantwoordt één precieze vraag en verdwijnt daarna, zodat jij kunt blijven denken.",
    seoEyebrow: "MANIFEST / ZICHTBARE TIJD",
    seoLead:
      "Een collectie om in de tijd te kijken: haar meten, vergelijken, verbeelden en haar verwondering teruggeven.",
    toolTypes: {
      primary: "HOOFDSIGNAAL",
      calibration: "KALIBRATIE",
      reference: "REFERENTIE",
    },
  },
  sv: {
    fieldGuide: "FÄLTHANDBOK / 01",
    measuredNote: "Mätt lokalt · skapad för nyfikna händer",
    instrumentAria:
      "Abstrakt precisionsinstrument som visar lokal tid i rörelse",
    precisionLabel: "PRECISION / 01",
    localTimeLabel: "LOKAL TID / SYSTEM",
    artCaptionLead: "KONSTEN ATT",
    artCaptionMain: "MÄTA TID",
    indexLabel: "INDEX / {count} INSTRUMENT",
    indexTitle: "Ett levande arkiv över tid.",
    indexIntro:
      "Varje verktyg är ett litet instrument: det besvarar en exakt fråga och kliver sedan åt sidan så att du kan tänka vidare.",
    seoEyebrow: "MANIFEST / SYNLIG TID",
    seoLead:
      "En samling för att se in i tiden: mäta den, jämföra den, föreställa sig den och ge tillbaka dess förundran.",
    toolTypes: {
      primary: "HUVUDSIGNAL",
      calibration: "KALIBRERING",
      reference: "REFERENS",
    },
  },
  pl: {
    fieldGuide: "DZIENNIK TERENOWY / 01",
    measuredNote: "Mierzone lokalnie · stworzone dla ciekawych dłoni",
    instrumentAria:
      "Abstrakcyjny instrument precyzyjny pokazujący ruch lokalnego czasu",
    precisionLabel: "PRECYZJA / 01",
    localTimeLabel: "CZAS LOKALNY / SYSTEM",
    artCaptionLead: "SZTUKA",
    artCaptionMain: "MIERZENIA CZASU",
    indexLabel: "INDEKS / {count} INSTRUMENTÓW",
    indexTitle: "Żywe archiwum czasu.",
    indexIntro:
      "Każde narzędzie jest małym instrumentem: odpowiada na jedno precyzyjne pytanie, a potem znika, żebyś mógł myśleć dalej.",
    seoEyebrow: "MANIFEST / WIDZIALNY CZAS",
    seoLead:
      "Kolekcja do zaglądania w czas: mierzenia go, porównywania, wyobrażania sobie i przywracania mu zachwytu.",
    toolTypes: {
      primary: "SYGNAŁ GŁÓWNY",
      calibration: "KALIBRACJA",
      reference: "REFERENCJA",
    },
  },
  id: {
    fieldGuide: "PANDUAN LAPANGAN / 01",
    measuredNote: "Diukur secara lokal · dibuat untuk tangan yang ingin tahu",
    instrumentAria:
      "Instrumen presisi abstrak yang menampilkan waktu setempat dalam gerak",
    precisionLabel: "PRESISI / 01",
    localTimeLabel: "WAKTU LOKAL / SISTEM",
    artCaptionLead: "SENI",
    artCaptionMain: "MENGUKUR WAKTU",
    indexLabel: "INDEKS / {count} INSTRUMEN",
    indexTitle: "Arsip waktu yang hidup.",
    indexIntro:
      "Setiap alat adalah instrumen kecil: menjawab satu pertanyaan yang tepat, lalu menyingkir agar Anda dapat terus berpikir.",
    seoEyebrow: "MANIFESTO / WAKTU YANG TERLIHAT",
    seoLead:
      "Koleksi untuk melihat ke dalam waktu: mengukurnya, membandingkannya, membayangkannya, dan mengembalikan rasa takjub.",
    toolTypes: {
      primary: "SINYAL UTAMA",
      calibration: "KALIBRASI",
      reference: "REFERENSI",
    },
  },
  tr: {
    fieldGuide: "SAHA REHBERİ / 01",
    measuredNote: "Yerel olarak ölçülür · meraklı eller için tasarlandı",
    instrumentAria:
      "Yerel zamanı hareket halinde gösteren soyut hassasiyet enstrümanı",
    precisionLabel: "HASSASİYET / 01",
    localTimeLabel: "YEREL SAAT / SİSTEM",
    artCaptionLead: "ZAMANI",
    artCaptionMain: "ÖLÇME SANATI",
    indexLabel: "İNDEKS / {count} ENSTRÜMAN",
    indexTitle: "Zamanın yaşayan arşivi.",
    indexIntro:
      "Her araç küçük bir enstrümandır: tek bir kesin soruyu yanıtlar, sonra düşünmeye devam edebilmeniz için geri çekilir.",
    seoEyebrow: "MANİFESTO / GÖRÜNÜR ZAMAN",
    seoLead:
      "Zamana içeriden bakmak için bir koleksiyon: onu ölçmek, karşılaştırmak, hayal etmek ve hayranlığını geri vermek.",
    toolTypes: {
      primary: "ANA SİNYAL",
      calibration: "KALİBRASYON",
      reference: "REFERANS",
    },
  },
  ru: {
    fieldGuide: "ПОЛЕВОЙ СПРАВОЧНИК / 01",
    measuredNote: "Измерено локально · создано для любопытных рук",
    instrumentAria:
      "Абстрактный точный инструмент, показывающий местное время в движении",
    precisionLabel: "ТОЧНОСТЬ / 01",
    localTimeLabel: "МЕСТНОЕ ВРЕМЯ / СИСТЕМА",
    artCaptionLead: "ИСКУССТВО",
    artCaptionMain: "ИЗМЕРЯТЬ ВРЕМЯ",
    indexLabel: "ИНДЕКС / {count} ИНСТРУМЕНТОВ",
    indexTitle: "Живой архив времени.",
    indexIntro:
      "Каждый инструмент представляет собой небольшое устройство: он отвечает на один точный вопрос, а затем отступает, чтобы вы могли думать дальше.",
    seoEyebrow: "МАНИФЕСТ / ВИДИМОЕ ВРЕМЯ",
    seoLead:
      "Коллекция, которая позволяет заглянуть внутрь времени: измерять его, сравнивать, представлять и возвращать ему чувство чуда.",
    toolTypes: {
      primary: "ГЛАВНЫЙ СИГНАЛ",
      calibration: "КАЛИБРОВКА",
      reference: "СПРАВКА",
    },
  },
  ja: {
    fieldGuide: "フィールドガイド / 01",
    measuredNote: "ローカルで計測 · 好奇心を持つ手のために",
    instrumentAria: "現地時刻を動きで示す抽象的な精密インストゥルメント",
    precisionLabel: "精密 / 01",
    localTimeLabel: "現地時刻 / システム",
    artCaptionLead: "時間を",
    artCaptionMain: "測る芸術",
    indexLabel: "インデックス / {count} インストゥルメント",
    indexTitle: "時間の生きたアーカイブ。",
    indexIntro:
      "すべてのツールは小さな計器です。ひとつの問いに正確に答えたら、考える余白を残して静かに退きます。",
    seoEyebrow: "マニフェスト / 見える時間",
    seoLead:
      "時間の内側を見つめるためのコレクション。測り、比べ、想像し、驚きを取り戻します。",
    toolTypes: {
      primary: "メインシグナル",
      calibration: "キャリブレーション",
      reference: "リファレンス",
    },
  },
  ko: {
    fieldGuide: "필드 가이드 / 01",
    measuredNote: "현지에서 측정 · 호기심 많은 손을 위해 제작",
    instrumentAria: "현지 시간을 움직임으로 보여 주는 추상 정밀 계기",
    precisionLabel: "정밀도 / 01",
    localTimeLabel: "현지 시간 / 시스템",
    artCaptionLead: "시간을",
    artCaptionMain: "측정하는 예술",
    indexLabel: "인덱스 / {count}개 계기",
    indexTitle: "살아 있는 시간의 아카이브.",
    indexIntro:
      "모든 도구는 작은 계기입니다. 하나의 정확한 질문에 답한 뒤, 계속 생각할 수 있도록 조용히 물러납니다.",
    seoEyebrow: "매니페스토 / 보이는 시간",
    seoLead:
      "시간의 안쪽을 바라보는 컬렉션입니다. 측정하고, 비교하고, 상상하며, 경이로움을 되돌려 줍니다.",
    toolTypes: { primary: "주요 신호", calibration: "보정", reference: "참고" },
  },
  zh: {
    fieldGuide: "现场指南 / 01",
    measuredNote: "本地测量 · 为好奇的双手而作",
    instrumentAria: "以运动方式显示当地时间的抽象精密仪器",
    precisionLabel: "精度 / 01",
    localTimeLabel: "当地时间 / 系统",
    artCaptionLead: "测量时间的",
    artCaptionMain: "艺术",
    indexLabel: "索引 / {count} 件仪器",
    indexTitle: "时间的活档案。",
    indexIntro:
      "每件工具都是一台小型仪器：回答一个精确的问题，然后退到一旁，让你继续思考。",
    seoEyebrow: "宣言 / 可见的时间",
    seoLead:
      "一组凝视时间内部的工具：测量它、比较它、想象它，再把惊奇还给它。",
    toolTypes: { primary: "主信号", calibration: "校准", reference: "参考" },
  },
};
