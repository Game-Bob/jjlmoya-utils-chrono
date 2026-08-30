import type { ToolLocaleContent } from '../../../types';
import type { QuartzBatteryHealthUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<QuartzBatteryHealthUI> = {
  slug: 'quarz-batterie-gesundheitscheck',
  title: 'Quarz Batterie Gesundheitscheck',
  description: 'Berechne die theoretische Batterielebensdauer eines Quarzwerks, indem du die Zellkapazität (mAh) und die Leistungsaufnahme des Kalibers (µA) eingibst. Optional kann das Installationsdatum gesetzt werden, um das Austauschdatum zu schätzen.',
  ui: {
    title: 'Quarz Batterie Gesundheitscheck',
    batteryLabel: 'Batteriezelle',
    selectBattery: 'Batterie auswählen',
    customBattery: 'Benutzerdefiniert',
    capacityLabel: 'Kapazität',
    capacityUnit: 'mAh',
    consumptionLabel: 'Verbrauch',
    consumptionUnit: 'µA',
    installDateLabel: 'Installiert am',
    installDateHint: 'Optional',
    monthLabel: 'Monat',
    yearLabel: 'Jahr',
    calculate: 'Berechnen',
    resultLabel: 'Geschätzte Lebensdauer',
    theoreticalLife: 'Theoretische Lebensdauer',
    yearsLabel: 'Jahre',
    monthsLabel: 'Monate',
    daysLabel: 'Tage',
    changeDateLabel: 'Ersetzen bis',
    noDateHint: 'Installationsdatum eingeben, um das Austauschdatum zu sehen',
    healthLabel: 'Status',
    healthGood: 'Gut',
    healthModerate: 'Mäßig',
    healthCritical: 'Kritisch',
    step1: 'Wähle eine gängige Batterie oder wähle Benutzerdefiniert, um die Kapazität einzugeben.',
    step2: 'Gib die Leistungsaufnahme des Kalibers in Mikroampere (µA) ein.',
    step3: 'Füge optional das Installationsdatum hinzu und drücke dann Berechnen.',
    tipTitle: 'Tipp',
    tipContent: 'Verwende immer den Verbrauchswert aus dem offiziellen Kaliberdatenblatt. Die reale Lebensdauer kann aufgrund von Temperatur und Lastschwankungen 10 bis 20 % kürzer sein.',
  },
  seo: [
    { type: 'title', text: 'Quarz Batterie Gesundheitscheck, wie lange hält Ihre Uhrenbatterie', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '1.0-2.5 µA', label: 'Üblicher Drei Zeiger Stromverbrauch' },
        { value: '18-55 mAh', label: 'Übliche Zellkapazität' },
        { value: '2.5-4.5 Jahre', label: 'Übliche Batterielebensdauer' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Fragst du dich, wann deine Quarzuhr stehen bleibt? Der <strong>Quarz Batterie Gesundheitscheck</strong> hilft dir, die Restlebensdauer jeder Quarzuhrwerksbatterie zu schätzen, indem die Zellkapazität (gemessen in mAh) mit dem durchschnittlichen Stromverbrauch des Werks (gemessen in Mikroampere, µA) verglichen wird. Ob du ein Schweizer ETA, ein japanisches Miyota, ein Seiko, ein Ronda oder ein chinesisches DG Werk besitzt, dieses Tool berechnet die theoretische Lebensdauer in Jahren, Monaten und Tagen und kann sogar das genaue Austauschdatum vorhersagen, wenn du den Installationsmonat und das Jahr angibst.' },
    { type: 'title', text: 'Wie die Quarz Batterielebensdauer berechnet wird, die Mathematik hinter der Schätzung', level: 3 },
    { type: 'paragraph', html: 'Die Batterielebensdauer folgt einer einfachen elektrischen Formel: <strong>Lebensdauer (Stunden) = (Zellkapazität in mAh × 1000) ÷ Stromverbrauch in µA</strong>. Das Ergebnis geteilt durch 24 ergibt Tage und durch 365,25 ergibt Jahre. Zum Beispiel wird eine Standard <strong>SR920SW (371) Zelle mit 40 mAh</strong>, die ein Werk mit <strong>1,5 µA</strong> versorgt, theoretisch etwa <strong>3 Jahre</strong> halten. Reduziere den Verbrauch auf 1,0 µA und dieselbe Zelle erreicht über 4,5 Jahre. Erhöhe ihn auf 2,5 µA und die Batterielebensdauer sinkt auf unter 2 Jahre. Jeder Bruchteil eines Mikroamperes zählt, wenn du deine Serviceintervalle planst.' },
    { type: 'title', text: 'Die häufigsten Quarzuhren Batterietypen und ihre Kapazitäten', level: 3 },
    {
      type: 'table',
      headers: ['Zellreferenz', 'Üblicher Code', 'Kapazität', 'Typische Verwendung'],
      rows: [
        ['SR621SW', '364', '18 mAh', 'Dünne Kleidungsuhren'],
        ['SR626SW', '377', '27 mAh', 'Mittelgroße Quarzmodelle'],
        ['SR920SW', '371', '40 mAh', 'Chronographen und Multifunktion'],
        ['SR936SW', '394', '55 mAh', 'Große analoog digitale Hybride'],
        ['CR2025', '-', '165 mAh', 'Hochstrom LED Module'],
      ],
    },
    { type: 'tip', title: 'Der ursprünglichen Spezifikation entsprechen', html: 'Die Wahl des falschen Zellentyps kann die Batterielebensdauer um bis zu <strong>40 %</strong> reduzieren. Überprüfe immer die ursprüngliche Batteriereferenznummer, bevor du einen Ersatz einsetzt. Der numerische Code verrät dir die Abmessungen <strong>SR936SW</strong> hat zum Beispiel 9,5 mm Durchmesser und 3,6 mm Dicke.' },
    { type: 'title', text: 'Warum du immer offizielle Kaliber Verbrauchswerte verwenden solltest', level: 3 },
    { type: 'paragraph', html: 'Uhrwerkshersteller wie <strong>ETA, Ronda, Miyota, Seiko und ISA</strong> veröffentlichen offizielle technische Datenblätter für jedes Kaliber, das sie produzieren. Diese Datenblätter enthalten den <strong>durchschnittlichen Stromverbrauch</strong> unter kontrollierter Temperatur (normalerweise 22 °C) und bei standardmäßiger Zeigerdrehmomentlast. Die Verwendung eines geschätzten Werts von 1,0 µA, wenn dein Werk tatsächlich 2,5 µA benötigt, kann die Batterielebensdauer um mehr als 100 % überschätzen. Lade immer das offizielle PDF von der Herstellerwebsite herunter oder überprüfe die Kaliberreferenz in spezialisierten Datenbanken, um den tatsächlichen Verbrauchswert zu erhalten.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Batterieauslauf kann dein Uhrwerk zerstören',
      html: 'Eine erschöpfte Silberoxidbatterie kann <strong>Kaliumhydroxid auslaufen</strong> lassen, das die Kontaktfedern, die Leiterbahnspuren und sogar die Schrittmotorspule korrodiert. Wenn das Tool weniger als <strong>6 Monate Restlebensdauer</strong> schätzt, plane einen Batteriewechsel bei deinem nächsten Routinecheck ein. Achte besonders auf <strong>Vintage Quarzuhren aus den 1970er und 1980er Jahren</strong> deren Originalbatterien nach Jahrzehnten im Gehäuse weitaus anfälliger für Auslaufen sind.',
    },
    { type: 'title', text: 'Faktoren, die die reale Batterielebensdauer im Vergleich zur theoretischen Schätzung verkürzen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Temperaturextreme</strong> - eine Uhr auf einem sonnigen Armaturenbrett kann 30 % höheren Stromverbrauch verursachen',
        '<strong>End-of-Life-Erkennungsschaltungen</strong> - der Zwei-Sekunden-Sprungindikator verbraucht zusätzlichen Strom, sobald aktiviert',
        '<strong>Chronographen- oder Alarmnutzung</strong> - kurzzeitige Stromspitzen, die sich im Laufe der Zeit summieren',
        '<strong>Mechanische Reibung</strong> - gealterte oder verschmutzte Räderwerke erhöhen das Drehmoment, das der Schrittmotor benötigt',
        '<strong>Magnetfelder</strong> - die Einwirkung erhöht die Motordrehmomentanforderungen und entlädt die Zelle schneller',
      ],
    },
    { type: 'paragraph', html: 'In der Praxis kannst du <strong>10 bis 20 % kürzere Lebensdauer</strong> als die theoretische Berechnung erwarten. Bei hochpräzisen thermokompensierten Quarzwerken schwankt der Verbrauch weniger, aber Standardquarzwerke reagieren deutlich empfindlich auf diese Umwelteinflüsse.' },
    { type: 'title', text: 'So findest du den richtigen Batterieersatz für deine Quarzuhr', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'SR (Silberoxid)', definition: 'Mit SR gekennzeichnete Zellen (z. B. SR920SW) liefern während ihrer gesamten Lebensdauer eine stabile Ausgangsspannung von 1,55 V und halten den Quarzoszillator genau. Dies ist der Standard für hochwertige Quarzuhren.' },
        { term: 'LR (Alkali)', definition: 'Mit LR gekennzeichnete Zellen (z. B. LR41) haben eine allmählich abfallende Spannung, was dazu führen kann, dass die Uhr langsamer läuft oder vorzeitig stoppt. Nicht als Ersatz für SR Zellen empfohlen.' },
        { term: 'CR (Lithium)', definition: 'Mit CR gekennzeichnete Zellen (z. B. CR2025) liefern 3,0 V und werden in Modulen mit hohem Stromverbrauch wie LED Hintergrundbeleuchtung, großen LCDs oder mehreren Komplikationen verwendet.' },
        { term: 'Numerischer Code', definition: 'Die vier Ziffern kodieren die physikalische Größe: Die ersten beiden Ziffern sind der Durchmesser in Millimetern und die letzten beiden die Dicke in Zehntelmillimetern. SR936SW = Ø9,5 mm × 3,6 mm.' },
      ],
    },
    { type: 'title', text: 'Standard Quarz im Vergleich zu Solar und Kinetic, wie die Technologie die Gleichung verändert', level: 3 },
    {
      type: 'comparative',
      items: [
        {
          title: 'Standard Quarz',
          description: 'Verwendet eine austauschbare Silberoxid oder Lithium Primärzelle. Die Batterielebensdauer hängt ausschließlich von der Kapazität im Verhältnis zum Verbrauch ab. Dafür ist dieser Rechner konzipiert.',
          highlight: true,
          points: [
            'Austauschbare Primärzelle',
            'Lebensdauer = Kapazität ÷ Verbrauch',
            'Vorhersagbarer Austauschplan',
            'Günstige Batteriewechsel',
          ],
        },
        {
          title: 'Solar und Kinetic',
          description: 'Solaruhren nutzen photovoltaische Zellen, um einen Lithium-Ionen-Akkumulator wieder aufzuladen. Kinetic Uhren verwenden einen rotorgetriebenen Mikrogenerator, um einen Kondensator zu laden.',
          points: [
            'Wiederaufladbarer Energiespeicher',
            'Lebensdauer hängt von Ladezyklen ab',
            'Kondensatorverschleiß im Laufe der Zeit',
            'Nicht mit diesem Rechner kompatibel',
          ],
        },
      ],
      columns: 2,
    },
    { type: 'paragraph', html: 'Herstellerangaben von <strong>"10 Jahren Batterielebensdauer"</strong> basieren normalerweise auf Werken mit sehr geringem Verbrauch (etwa 0,5 bis 0,8 µA) in Kombination mit großen Zellen (165 mAh CR2025 oder größer). Bei einer Standard Analoguhr mit einer kleinen Silberoxidzelle wie der <strong>SR626SW (27 mAh)</strong> und einem typischen 1,5 µA Werk liegt die tatsächliche Lebensdauer näher an <strong>2,5 bis 3 Jahren</strong>. Überprüfe immer mit diesem Rechner, anstatt Marketingaussagen zu vertrauen.' },
    {
      type: 'tip',
      title: 'Proaktiv ersetzen, nicht reaktiv',
      html: 'Wenn der Sekundenzeiger in <strong>2-Sekunden- oder 4-Sekunden-Intervallen</strong> springt, ist das Werk aufgrund niedriger Spannung in den Energiesparmodus gewechselt. Die Batterie hat noch etwa <strong>2 bis 4 Wochen</strong> Restlebensdauer. Ersetze sie sofort, um Auslaufschäden zu vermeiden.',
    },
    {
      type: 'summary',
      title: 'Wichtige Erkenntnisse zur Quarzuhren Batteriegesundheit',
      items: [
        'Verwende den offiziellen Kaliber Verbrauchswert aus dem Herstellerdatenblatt - ein geschätzter Wert kann die Lebensdauer um über 100 % überschätzen',
        'Wähle genau den gleichen Zelltyp: SR, LR und CR Chemien sind nicht austauschbar',
        'Ersetze die Batterie, wenn das Tool weniger als 6 Monate Restlebensdauer anzeigt, um Auslaufen zu verhindern',
        'Die reale Batterielebensdauer ist aufgrund von Temperatur, Reibung und Nutzung typischerweise 10 bis 20 % kürzer als das theoretische Ideal',
        'Dieser Rechner ist für Standard Quarzwerke mit austauschbaren Primärzellen ausgelegt, nicht für Solar oder Kinetic Uhren',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie genau ist die Schätzung der theoretischen Batterielebensdauer?',
      answer: 'Die Berechnung ist ein elektrischer Idealwert, der auf der Division der Kapazität durch den Verbrauch basiert. Unter realen Bedingungen kannst du eine 10 bis 20 % kürzere Lebensdauer erwarten, verursacht durch Temperaturschwankungen, End-of-Life-Erkennungsschaltungen, mechanischen Widerstand durch gealterte Schmiermittel und die zusätzliche Belastung durch Chronographen- oder Alarmfunktionen. Die Schätzung ist eine zuverlässige Obergrenze, keine exakte Vorhersage.',
    },
    {
      question: 'Wo finde ich den genauen Stromverbrauchswert für mein Quarz Kaliber?',
      answer: 'Offizielle technische Datenblätter von ETA, Ronda, Miyota, Seiko, ISA und anderen Uhrwerksherstellern listen den durchschnittlichen Stromverbrauch in Mikroampere (µA) auf. Suche nach der Kaliber Referenznummer gefolgt von "Datenblatt" oder "technische Spezifikation". Spezialisierte Datenbanken wie Ranfft, 17jewels und Watch-Wiki veröffentlichen ebenfalls Verbrauchswerte, die von der Uhrengemeinschaft zusammengetragen wurden.',
    },
    {
      question: 'Was bedeutet "µA" und warum ist es wichtig?',
      answer: 'µA steht für Mikroampere oder ein Millionstel Ampere. Es misst den elektrischen Strom, den das Werk aus der Batterie zieht. Ein typisches analoges Quarz Drei Zeiger Werk verbraucht zwischen 1,0 und 2,5 µA. Chronographen und Multifunktionsmodule können 3,0 bis 6,0 µA verbrauchen. Je höher der Strom, desto kürzer die Batterielebensdauer bei einer gegebenen Zellkapazität.',
    },
    {
      question: 'Kann ich dieses Tool für Solar oder Kinetic Uhren verwenden?',
      answer: 'Nein. Solaruhren (Eco-Drive, Solar, Light-Powered) nutzen photovoltaische Zellen, um einen wiederaufladbaren Akku zu laden. Kinetic und Auto-Quartz Uhren verwenden einen Rotor und Mikrogenerator, um einen Kondensator zu laden. Keine dieser Technologien basiert auf einer primären Einwegbatterie, daher ist das Kapazität versus Verbrauch Modell nicht anwendbar. Verwende diesen Rechner nur für Standard Quarzwerke mit austauschbaren Silberoxid, Alkali oder Lithium Zellen.',
    },
    {
      question: 'Sollte ich die Batterie ersetzen, bevor sie vollständig erschöpft ist?',
      answer: 'Ja. Silberoxid und Alkali Batterien können bei vollständiger Entladung Kaliumhydroxid auslaufen lassen, was die Kontaktfedern, Leiterbahnspuren und die Schrittmotorspule beschädigt. Ein Austausch vor der vollständigen Entladung wird dringend empfohlen. Wenn das Tool weniger als 6 Monate Restlebensdauer anzeigt, plane einen Batteriewechsel so bald wie möglich ein.',
    },
    {
      question: 'Was passiert, wenn ich eine Batterie mit höherer oder niedrigerer Kapazität als das Original verwende?',
      answer: 'Die Verwendung einer Zelle mit höherer Kapazität (z. B. SR936SW 55 mAh statt SR920SW 40 mAh) verlängert die Batterielebensdauer, passt aber möglicherweise nicht physisch - die Zelle muss genau dem ursprünglichen Durchmesser und der Dicke entsprechen, um den richtigen Kontaktfederdruck aufrechtzuerhalten. Die Verwendung einer Zelle mit niedrigerer Kapazität verkürzt die Batterielebensdauer und kann bei zu kleiner Zelle zu intermittierendem Kontakt führen. Ersetze immer mit genau derselben Referenznummer oder einem dokumentierten Äquivalent aus derselben Größenfamilie.',
    },
    {
      question: 'Wie erkenne ich, ob die Batterie in meiner Uhr Silberoxid oder Alkali ist?',
      answer: 'Silberoxid Zellen sind mit SR gekennzeichnet (z. B. SR920SW) und liefern während ihrer gesamten Lebensdauer eine stabile Spannung von 1,55 V, was den Quarzoszillator genau hält. Alkali Zellen sind mit LR gekennzeichnet (z. B. LR41) und haben eine allmählich abfallende Spannung, was dazu führen kann, dass die Uhr langsamer läuft oder vorzeitig stoppt. Die meisten Qualitätsuhrenmarken spezifizieren Silberoxid. Wenn deine Uhr ursprünglich SR verwendet hat, ersetze sie immer mit SR, nicht mit LR.',
    },
    {
      question: 'Bedeutet der Sprung des Sekundenzeigers alle zwei Sekunden, dass die Batterie schwach ist?',
      answer: 'Ja. Wenn das Quarzwerk erkennt, dass die Batteriespannung zu niedrig ist, um den Schrittmotor zuverlässig anzutreiben, wechselt es in einen Energiesparmodus, in dem der Sekundenzeiger in 2-Sekunden- oder 4-Sekunden-Intervallen springt. Dies ist der End-of-Life-Indikator. Wenn du dieses Verhalten siehst, hat die Batterie noch etwa 2 bis 4 Wochen Restlebensdauer und sollte sofort ersetzt werden, um Auslaufen zu vermeiden.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Batteriezelle auswählen oder anpassen',
      text: 'Wähle eine gängige Silberoxid Zelle aus der Dropdown-Liste - SR621SW, SR626SW, SR920SW, SR936SW und andere sind mit ihren offiziellen Kapazitäten vorinstalliert. Wenn deine Zelle nicht aufgeführt ist, wähle Benutzerdefiniert und gib die genaue Kapazität in mAh ein, wie auf dem Batterieetikett oder im Herstellerdatenblatt angegeben.',
    },
    {
      name: 'Leistungsaufnahme des Uhrwerks eingeben',
      text: 'Ermittle den durchschnittlichen Stromverbrauch für dein Kaliber in der offiziellen technischen Dokumentation. Gib den Wert in Mikroampere (µA) in das Verbrauchsfeld ein. Die meisten Drei Zeiger Werke verbrauchen 1,0 bis 2,5 µA. Chronographen und Multifunktionsmodule können bis zu 6,0 µA verbrauchen.',
    },
    {
      name: 'Installationsmonat und Jahr hinzufügen (optional)',
      text: 'Wenn du dich erinnerst oder notiert hast, wann die Batterie zuletzt installiert wurde, wähle den Monat und gib das Jahr ein. Das Tool verwendet dieses Datum, um das geschätzte Austauschdatum zu berechnen und den verbleibenden Batteriezustand als Prozentsatz anzuzeigen.',
    },
    {
      name: 'Theoretische Lebensdauer ablesen',
      text: 'Die Ergebniskarte zeigt die geschätzte Gesamtbatterielebensdauer in Jahren, Monaten und verbleibenden Tagen an. Dies ist die maximale Lebensdauer unter idealen Bedingungen, ohne externe Faktoren, die die Batteriekapazität reduzieren.',
    },
    {
      name: 'Gesundheitsstatus und Austauschdatum überprüfen',
      text: 'Wenn ein Installationsdatum angegeben ist, füllt sich die Anzeige proportional zur verbleibenden Batterielebensdauer. Ein grünes "Gut" Abzeichen bedeutet mehr als 50 % Restlebensdauer. Gelb "Mäßig" bedeutet zwischen 20 und 50 %. Rot "Kritisch" bedeutet weniger als 20 %. Das genaue empfohlene Austauschdatum wird unterhalb der Anzeige angezeigt.',
    },
    {
      name: 'Eingaben anpassen und neu berechnen',
      text: 'Ändere eine beliebige Eingabe - Batteriemodell, Verbrauchswert oder Installationsdatum - und das Ergebnis aktualisiert sich automatisch. Verwende diese Funktion, um verschiedene Batterietypen zu vergleichen oder Austauschpläne für mehrere Uhren in deiner Sammlung zu planen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie genau ist die Schätzung der theoretischen Batterielebensdauer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Berechnung ist ein elektrischer Idealwert, der auf der Division der Kapazität durch den Verbrauch basiert. Unter realen Bedingungen kannst du eine 10 bis 20 % kürzere Lebensdauer erwarten, verursacht durch Temperaturschwankungen, End-of-Life-Erkennungsschaltungen, mechanischen Widerstand durch gealterte Schmiermittel und die zusätzliche Belastung durch Chronographen- oder Alarmfunktionen. Die Schätzung ist eine zuverlässige Obergrenze, keine exakte Vorhersage.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wo finde ich den genauen Stromverbrauchswert für mein Quarz Kaliber?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Offizielle technische Datenblätter von ETA, Ronda, Miyota, Seiko, ISA und anderen Uhrwerksherstellern listen den durchschnittlichen Stromverbrauch in Mikroampere (µA) auf. Suche nach der Kaliber Referenznummer gefolgt von Datenblatt oder technische Spezifikation. Spezialisierte Datenbanken wie Ranfft und 17jewels veröffentlichen ebenfalls von der Gemeinschaft zusammengetragene Verbrauchswerte.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was bedeutet µA und warum ist es wichtig?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'µA steht für Mikroampere oder ein Millionstel Ampere. Es misst den elektrischen Strom, den das Werk aus der Batterie zieht. Ein typisches analoges Quarz Drei Zeiger Werk verbraucht zwischen 1,0 und 2,5 µA. Chronographen und Multifunktionsmodule können 3,0 bis 6,0 µA verbrauchen. Je höher der Strom, desto kürzer die Batterielebensdauer bei einer gegebenen Zellkapazität.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich dieses Tool für Solar oder Kinetic Uhren verwenden?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nein. Solaruhren nutzen photovoltaische Zellen, um einen wiederaufladbaren Akku zu laden. Kinetic Uhren verwenden einen Rotor und Mikrogenerator, um einen Kondensator zu laden. Keine dieser Technologien basiert auf einer primären Einwegbatterie, daher ist das Kapazität versus Verbrauch Modell nicht anwendbar. Verwende diesen Rechner nur für Standard Quarzwerke mit austauschbaren Silberoxid, Alkali oder Lithium Zellen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sollte ich die Batterie ersetzen, bevor sie vollständig erschöpft ist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Silberoxid und Alkali Batterien können bei vollständiger Entladung Kaliumhydroxid auslaufen lassen, was die Kontaktfedern, Leiterbahnspuren und die Schrittmotorspule beschädigt. Ein Austausch vor der vollständigen Entladung wird dringend empfohlen. Wenn das Tool weniger als 6 Monate Restlebensdauer anzeigt, plane einen Batteriewechsel so bald wie möglich ein.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie erkenne ich, ob die Batterie in meiner Uhr Silberoxid oder Alkali ist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Silberoxid Zellen sind mit SR gekennzeichnet (z. B. SR920SW) und liefern während ihrer gesamten Lebensdauer eine stabile Spannung von 1,55 V. Alkali Zellen sind mit LR gekennzeichnet (z. B. LR41) und haben eine allmählich abfallende Spannung. Die meisten Qualitätsuhrenmarken spezifizieren Silberoxid. Ersetze SR immer mit SR, nicht mit LR.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Bedeutet der Sprung des Sekundenzeigers alle zwei Sekunden, dass die Batterie schwach ist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja. Wenn das Quarzwerk eine niedrige Batteriespannung erkennt, wechselt es in den Energiesparmodus, in dem der Sekundenzeiger in 2-Sekunden- oder 4-Sekunden-Intervallen springt. Dies ist der End-of-Life-Indikator. Wenn du dieses Verhalten siehst, hat die Batterie noch etwa 2 bis 4 Wochen Restlebensdauer und sollte sofort ersetzt werden, um Auslaufen zu vermeiden.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Quarz Batterie Gesundheitscheck',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Uhren Batterielebensdauer Rechner',
      'description': 'Berechne die theoretische Batterielebensdauer eines beliebigen Quarzwerks durch Eingabe der Zellkapazität (mAh) und des Kaliber Stromverbrauchs (µA). Schätzt das Austauschdatum, wenn Installationsmonat und Jahr angegeben werden.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Berechnung der Quarzuhren Batterielebensdauer, Kapazität und Verbrauch erklärt',
      'proficiencyLevel': 'Anfänger',
      'abstract': 'Erfahre, wie du die Batterielebensdauer eines Quarzwerks anhand der Zellkapazität in mAh und des Stromverbrauchs des Werks in µA berechnest. Verstehe die Formel, den Einfluss von Temperatur und Last sowie den Zeitpunkt für einen Austausch.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'So schätzt du die Batterielebensdauer einer Quarzuhr',
      'description': 'Eine Schritt-für-Schritt-Anleitung zur Verwendung des Quarz Batterie Gesundheitschecks, um die Restlebensdauer jeder Quarzuhrbatterie zu bestimmen und den Austauschzeitpunkt zu planen.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Batteriezelle auswählen oder anpassen',
          'text': 'Wähle eine gängige Silberoxid Zelle aus der Dropdown-Liste - SR621SW, SR626SW, SR920SW, SR936SW und andere sind mit ihren offiziellen Kapazitäten vorinstalliert. Wenn deine Zelle nicht aufgeführt ist, wähle Benutzerdefiniert und gib die genaue Kapazität in mAh ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Leistungsaufnahme des Uhrwerks eingeben',
          'text': 'Ermittle den durchschnittlichen Stromverbrauch für dein Kaliber aus der offiziellen technischen Dokumentation. Gib den Wert in Mikroampere (µA) in das Verbrauchsfeld ein.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Installationsmonat und Jahr hinzufügen',
          'text': 'Wenn du weißt, wann die Batterie installiert wurde, wähle den Monat und gib das Jahr ein. Das Tool berechnet das geschätzte Austauschdatum und zeigt den verbleibenden Batteriezustand als Prozentsatz an.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Theoretische Lebensdauer ablesen',
          'text': 'Die Ergebniskarte zeigt die geschätzte Gesamtbatterielebensdauer in Jahren, Monaten und verbleibenden Tagen an. Dies ist die maximale Lebensdauer unter idealen Bedingungen.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Gesundheitsstatus und Austauschdatum prüfen',
          'text': 'Wenn ein Installationsdatum angegeben ist, zeigt die Anzeige die Restlebensdauer. Grün bedeutet mehr als 50 % Rest. Gelb bedeutet 20 bis 50 %. Rot bedeutet weniger als 20 %. Das empfohlene Austauschdatum wird unten angezeigt.',
        },
      ],
      'totalTime': 'PT1M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Quarz Batterie Gesundheitscheck',
      'description': 'Ein Online-Tool zur Schätzung der Batterielebensdauer von Quarzuhren basierend auf Zellkapazität und Stromverbrauch des Werks.',
      'category': 'Uhren Batterie Rechner',
      'audience': { '@type': 'Audience', 'audienceType': 'Uhrenliebhaber und Reparaturtechniker' },
    },
  ],
};
