import type { ToolLocaleContent } from '../../../types';
import type { MainspringFinderUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<MainspringFinderUI> = {
  slug: 'zugfeder-rechner',
    title: 'Zugfeder Rechner',
  description: 'Berechnen Sie Zugfederabmessungen aus Federhausmessungen für Vintage-Uhrwerke.',
  ui: {
  title: 'Zugfeder Rechner',
    barrelLabel: 'Federhaus-ID',
    arborLabel: 'Wellen-AD',
    heightLabel: 'Federhaushöhe',
    turnsLabel: 'Umdrehungen',
    calculate: 'Berechnen',
    resultThickness: 'Stärke',
    resultHeight: 'Höhe',
    resultLength: 'Länge',
    resultStrength: 'Federkraft',
    strengthWeak: 'Leicht',
    strengthMedium: 'Mittel',
    strengthStrong: 'Stark',
    commercial: 'Handelsgröße',
    unitLabel: 'Einheit',
    mm: 'mm',
    inch: 'Zoll',
    step1: 'Messen Sie Federhaus-ID, Wellen-AD und innere Höhe mit einem Messschieber.',
    step2: 'Stellen Sie die erwartete Anzahl Aufzugsumdrehungen ein (5-8 Handaufzug, 6-10 Automatik).',
    step3: 'Wechseln Sie zwischen mm/Zoll für Ihr bevorzugtes Einheitensystem.',
    tipTitle: 'Tipp',
    tipContent: 'Überprüfen Sie die berechneten Maße immer mit den Herstellerangaben. Gleichen Sie sie vor der Bestellung mit Lieferantenkatalogen ab.',
  },
  seo: [
    { type: 'title', text: 'Zugfeder-Rechner: Federabmessungen für Uhrwerke berechnen', level: 2 },
    {
      type: 'stats',
      items: [
        { value: '0.08-0.18 mm', label: 'Typische Federstärke' },
        { value: '5-10 Umdrehungen', label: 'Üblicher Aufzugsbereich' },
        { value: '150-450 mm', label: 'Übliche Federlänge' },
      ],
      columns: 3,
    },
    { type: 'paragraph', html: 'Bei der Restaurierung eines Vintage-Uhrwerks beginnt die Arbeit oft mit der Identifizierung der richtigen Zugfeder. Der <strong>Zugfeder-Rechner</strong> hilft Ihnen, die theoretischen Abmessungen der Zugfeder anhand der Federhausgeometrie zu berechnen. Durch Eingabe des Federhausinnendurchmessers, des Wellendurchmessers, der Federhaushöhe und der erwarteten Anzahl Umdrehungen ermittelt das Werkzeug Federstärke, Höhe und Länge. Die Ergebnisse werden auch als ungefähre Handelsgrößen in metrischen und imperialen Einheiten angezeigt, was den Abgleich mit Lieferantenkatalogen erleichtert.' },
    { type: 'title', text: 'Wie Zugfederabmessungen berechnet werden', level: 3 },
    { type: 'paragraph', html: 'Die Zugfeder nimmt den Ringraum zwischen Federhauswand und Welle ein. Die <strong>Federstärke</strong> wird geschätzt als <strong>(Federhaus-ID - Wellen-AD) / (2x Umdrehungen + 1,5)</strong>, wobei die zusätzlichen 1,5 den Federendanschluss und den Platz berücksichtigen, den die Feder gegen sich selbst einnimmt. Die <strong>Federlänge</strong> folgt <strong>L = pi x Umdrehungen x (Federhaus-ID + Wellen-AD) / 2</strong>, was die Gesamtlänge des Bandes in ausgelegtem Zustand ergibt. Die <strong>Federhöhe</strong> entspricht der inneren Federhaushöhe abzüglich eines kleinen Spiels (typischerweise 0,1 mm), um Reibung am Federhausdeckel zu vermeiden.' },
    { type: 'title', text: 'So messen Sie ein Federhaus für die Zugfederauswahl', level: 3 },
    {
      type: 'glossary',
      items: [
        { term: 'Federhausinnendurchmesser', definition: 'Der Innendurchmesser der Federhaustrommel, gemessen mit einem Messschieber. Dies ist der größte Kreis, den die Zugfeder einnehmen kann. Typischer Bereich: 8-30 mm.' },
        { term: 'Wellendurchmesser', definition: 'Der Durchmesser der Federhauswelle an ihrer breitesten Stelle, wo die innere Windung der Zugfeder einhakt. Kleinere Wellen ermöglichen längere Federn bei gleichem Federhaus.' },
        { term: 'Federhaushöhe', definition: 'Die innere Höhe der Federhaustrommel. Die Zugfederhöhe muss geringfügig kleiner sein (0,05-0,15 mm), um freie Drehung ohne Reibung am Deckel zu ermöglichen.' },
        { term: 'Anzahl Umdrehungen', definition: 'Die Anzahl vollständiger Aufzugsumdrehungen des Werks. Handaufzugskaliber bieten typischerweise 5-8 Umdrehungen, Automatikwerke 6-10 Umdrehungen.' },
      ],
    },
    { type: 'title', text: 'Federkraft und was sie für Ihr Uhrwerk bedeutet', level: 3 },
    { type: 'paragraph', html: 'Die <strong>Federstärke</strong> ist der wichtigste Faktor für das auf das Räderwerk übertragene Drehmoment. Eine dickere Feder (über 0,14 mm) liefert ein hohes Drehmoment, geeignet für Werke mit Komplikationen wie Chronographen oder Schlagwerken. Mittlere Federn (0,10-0,14 mm) sind Standard für die meisten Werke mit reiner Zeit- und Datumsanzeige. Dünne Federn (unter 0,10 mm) finden sich in kleinen Damenuhren oder ultraflachen Kalibern. Verwenden Sie immer die ursprüngliche Herstellerspezifikation, sofern verfügbar; eine zu starke Feder kann die Federhauswelle oder die Räderwerkszapfen beschädigen.' },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die falsche Zugfeder kann Ihr Uhrwerk beschädigen',
      html: 'Der Einbau einer <strong>zu dicken</strong> Feder erhöht Reibung und Drehmoment über die Auslegungsgrenzen, was möglicherweise das Federhauswellenloch ausweitet, den Zentrumsradzapfen verbiegt oder sogar das Federhaus bricht. Eine <strong>zu dünne</strong> Feder liefert nicht genug Amplitude, was dazu führt, dass die Uhr zu langsam läuft oder vor Erreichen der vollen Gangreserve stehen bleibt. Gleichen Sie die berechneten Maße vor der Bestellung immer mit bekannten Lieferantenkatalogen ab.',
    },
    { type: 'title', text: 'Kommerzielle Zugfedergrößensysteme', level: 3 },
    { type: 'paragraph', html: 'Zugfederlieferanten katalogisieren Federn nach <strong>Länge x Höhe x Stärke</strong> in Millimetern. Übliche metrische Größen folgen dem General Resources oder GR-System. Zollbasierte Systeme werden noch von einigen amerikanischen und britischen Lieferanten verwendet. Das Werkzeug zeigt beide Systeme an, damit Sie unabhängig vom Lieferanten in Katalogen suchen können. Wenn die exakte berechnete Größe nicht verfügbar ist, wählen Sie die nächstgelegene Handelsgröße, die in der Höhe exakt und in der Stärke auf 0,005 mm genau übereinstimmt, und passen Sie dann die Länge durch Auswahl einer Feder aus derselben Höhen- und Stärkefamilie an.' },
    { type: 'title', text: 'Besonderheiten bei Vintage-Kalibern', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Schweizer Kaliber (ETA, FHF, AS, Unitas)</strong> - im GR-System gut dokumentiert. Die meisten haben bekannte Zugfederreferenzen.',
        '<strong>Französische Kaliber (LIP, France Ebauches)</strong> - verwenden oft nicht standardmäßige Federhausproportionen. Sorgfältig messen.',
        '<strong>Amerikanische Kaliber (Waltham, Elgin, Illinois)</strong> - zollbasierte Systeme. Verwenden Sie die imperialen Angaben zum Abgleich.',
        '<strong>Japanische Kaliber (Seiko, Citizen, Miyota)</strong> - metrisches System mit guter Katalogabdeckung für Werke ab 1960.',
        '<strong>Chinesische Kaliber (Sea-Gull, DG, Tongji)</strong> - oft Klone von Schweizer Konstruktionen. Die Schweizer GR-Referenz gilt meist.',
      ],
    },
    {
      type: 'summary',
      title: 'Wichtige Erkenntnisse zur Zugfederauswahl',
      items: [
        'Federhaus-ID, Wellen-AD und Federhaushöhe genau mit einem Präzisionsmessschieber messen',
        'Die berechneten Maße als Ausgangspunkt verwenden, nicht als absolute Vorgabe',
        'Mit technischen Datenblättern des Herstellers oder bekannten Lieferantenkatalogen abgleichen',
        'Die Federhöhe genau der Federhaushöhe minus 0,05-0,15 mm Spiel anpassen',
        'Die Stärke auf 0,005 mm des berechneten Werts genau wählen für optimale Leistung',
        'Sicherstellen, dass die Federlänge für die erwartete Anzahl Aufzugsumdrehungen ausreicht',
      ],
    },
  ],
  faq: [
    {
      question: 'Wie genau sind die berechneten Zugfederabmessungen?',
      answer: 'Die Berechnungen basieren auf standardmäßigen uhrmacherischen Formeln, die eine ideale Federhausgeometrie annehmen. Tatsächliche Maße können aufgrund von Fertigungstoleranzen, Federendkonfigurationen (Anker, Öse oder T-Ende) und der verwendeten Legierung um bis zu 5-10 % abweichen. Verwenden Sie die berechneten Werte als starken Referenzpunkt, gleichen Sie sie aber vor der Bestellung mit Datenblättern der Hersteller oder kommerziellen Lieferantenkatalogen ab.',
    },
    {
      question: 'Was tun, wenn ich die exakte Handelsgröße nicht finde?',
      answer: 'Wenn die exakte Größe nicht verfügbar ist, priorisieren Sie zuerst die genaue Federhöhe, dann die Stärke auf 0,005 mm genau. Die Länge kann durch Auswahl einer anderen Feder aus derselben Höhen- und Stärkefamilie angepasst werden. Eine etwas längere Feder funktioniert, wenn das Federhaus genügend Platz hat, aber eine kürzere Feder reduziert die Gangreserve.',
    },
    {
      question: 'Wie messe ich die Federhausmaße, ohne die Zugfeder zu entfernen?',
      answer: 'Wenn das Federhaus noch die alte Feder enthält, können Sie den Außendurchmesser des Federhauses von außen messen (dann die Wandstärke abziehen, typischerweise 0,2-0,4 mm) und die Gesamthöhe (dann die Deckelstärke abziehen). Für die genauesten Ergebnisse entfernen Sie die alte Feder und reinigen Sie das Federhaus vor dem Messen.',
    },
    {
      question: 'Was ist der Unterschied zwischen einem Anker- und einem Ösen-Federende?',
      answer: 'Ein Ankerende (auch T-Ende genannt) hat eine kleine T-förmige Lasche, die in die Federhauswand einhakt. Die meisten modernen Schweizer und japanischen Kaliber verwenden diesen Typ. Ein Ösenende hat ein kleines Loch, das über einen Stift auf der Welle passt. Dieses Werkzeug berechnet nur die Bandabmessungen; Sie müssen vor der Bestellung überprüfen, ob der Endtyp zu Ihrem Federhaus passt.',
    },
    {
      question: 'Kann ich dieses Werkzeug für Chronographen- oder Automatikwerke verwenden?',
      answer: 'Ja, aber beachten Sie, dass Automatikwerke oft eine höhere Anzahl Umdrehungen haben (8-10) und eine etwas dünnere Feder benötigen, um das zusätzliche Aufzugsmodul unterzubringen. Chronographenwerke benötigen typischerweise dickere Federn, um das Chronographenwerk anzutreiben. Passen Sie den Umdrehungswert entsprechend an und überprüfen Sie ihn mit den Herstellerspezifikationen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Federhausinnendurchmesser messen',
      text: 'Messen Sie mit einem Präzisionsmessschieber den Innendurchmesser der Federhaustrommel. Messen Sie an zwei um 90 Grad versetzten Stellen und mitteln Sie die Werte. Notieren Sie das Ergebnis in Millimetern.',
    },
    {
      name: 'Wellendurchmesser messen',
      text: 'Messen Sie den Durchmesser der Federhauswelle an der breitesten Stelle, an der die innere Windung der Zugfeder ansetzt. Dies ist typischerweise nahe der Wellenmitte, nicht am Vierkantende.',
    },
    {
      name: 'Innere Federhaushöhe messen',
      text: 'Messen Sie die Tiefe des Federhauses vom Boden bis zur Oberkante. Wenn der Deckel abnehmbar ist, beziehen Sie die Deckelstärke in Ihre Messung ein. Die Federhöhe wird etwa 0,1 mm geringer sein.',
    },
    {
      name: 'Anzahl Umdrehungen einstellen',
      text: 'Ermitteln Sie, wie viele volle Umdrehungen die Zugfeder bei vollständigem Aufzug macht. Bei Handaufzugskalibern sind dies typischerweise 5-8 Umdrehungen. Automatikwerke können 6-10 Umdrehungen haben. Prüfen Sie die Werksspezifikationen, falls verfügbar.',
    },
    {
      name: 'Berechnete Maße ablesen',
      text: 'Das Werkzeug zeigt die empfohlene Federstärke, Höhe und Länge an. Es schätzt auch die Federkraftkategorie und gibt Handelsäquivalente in metrischen und imperialen Einheiten an.',
    },
    {
      name: 'Mit Katalogen abgleichen',
      text: 'Verwenden Sie die angezeigten Handelsgrößen, um in Lieferantenkatalogen zu suchen. Geben Sie die metrischen oder imperialen Maße bei Cousins UK, Jules Borel oder Ihrem bevorzugten Lieferanten ein. Passen Sie die Suche an, falls die exakte Größe nicht verfügbar ist.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie genau sind die berechneten Zugfederabmessungen?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Die Berechnungen basieren auf standardmäßigen uhrmacherischen Formeln, die eine ideale Federhausgeometrie annehmen. Tatsächliche Maße können aufgrund von Fertigungstoleranzen, Federendkonfigurationen und der verwendeten Legierung um bis zu 5-10 % abweichen. Gleichen Sie die Werte vor der Bestellung mit Datenblättern der Hersteller oder kommerziellen Katalogen ab.' },
        },
        {
          '@type': 'Question',
          'name': 'Was tun, wenn ich die exakte Handelsgröße nicht finde?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Zuerst die Federhöhe exakt anpassen, dann die Stärke auf 0,005 mm genau. Die Länge aus derselben Höhen-/Stärkefamilie anpassen.' },
        },
        {
          '@type': 'Question',
          'name': 'Wie messe ich das Federhaus, ohne die Zugfeder zu entfernen?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Den äußeren Federhausdurchmesser messen und die Wandstärke abziehen (0,2-0,4 mm). Für beste Ergebnisse zuerst die alte Feder entfernen.' },
        },
        {
          '@type': 'Question',
          'name': 'Was ist der Unterschied zwischen Anker- und Ösenenden?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Anker (T-Ende) hakt in die Federhauswand ein. Ösenende hat ein Loch über einem Wellenstift. Moderne Schweizer/japanische Kaliber verwenden Ankerenden.' },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich dies für Chronographen- oder Automatikwerke verwenden?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Ja. Automatikwerke benötigen oft mehr Umdrehungen (8-10) und dünnere Federn. Chronographen benötigen dickere Federn. Umdrehungen anpassen und überprüfen.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Zugfeder-Rechner',
      'operatingSystem': 'Alle',
      'applicationCategory': 'UtilitiesApplication',
      'applicationSubCategory': 'Uhrmacher-Zugfederrechner',
      'description': 'Berechnen Sie theoretische Zugfederabmessungen aus Federhausmessungen für Vintage-Uhrwerke.',
      'softwareVersion': '1.0',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'name': 'Berechnung von Zugfederabmessungen',
      'proficiencyLevel': 'Intermediate',
      'abstract': 'Erfahren Sie, wie Zugfederabmessungen aus Federhausinnendurchmesser, Wellengröße und Aufzugsumdrehungen berechnet werden.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Die richtige Zugfeder finden',
      'description': 'Schritt-für-Schritt-Anleitung zum Messen eines Federhauses und Berechnen der korrekten Zugfederabmessungen.',
      'step': [
        { '@type': 'HowToStep', 'name': 'Federhaus-ID messen', 'text': 'Messen Sie mit einem Präzisionsmessschieber den Innendurchmesser der Federhaustrommel.' },
        { '@type': 'HowToStep', 'name': 'Wellen-AD messen', 'text': 'Messen Sie den Federhauswellendurchmesser an seiner breitesten Stelle.' },
        { '@type': 'HowToStep', 'name': 'Federhaushöhe messen', 'text': 'Messen Sie die innere Tiefe. Die Federhöhe ist etwa 0,1 mm geringer.' },
        { '@type': 'HowToStep', 'name': 'Umdrehungen einstellen', 'text': '5-8 für Handaufzug, 6-10 für Automatikwerke einstellen.' },
        { '@type': 'HowToStep', 'name': 'Ergebnisse ablesen', 'text': 'Federstärke, Höhe, Länge und Handelsäquivalente anzeigen.' },
      ],
      'totalTime': 'PT5M',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'name': 'Zugfeder-Rechner',
      'description': 'Ein Werkzeug für Uhrmacher zur Berechnung von Zugfederabmessungen aus Federhausmessungen.',
      'category': 'Uhrmacherwerkzeug',
      'audience': { '@type': 'Audience', 'audienceType': 'Uhrmacher und Uhrenliebhaber' },
    },
  ],
};
