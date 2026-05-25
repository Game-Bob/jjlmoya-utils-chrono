import type { ToolLocaleContent } from '../../../types';
import type { CrownReferenceGuideUI } from '../entry';
import { bibliography } from '../bibliography';

export const content: ToolLocaleContent<CrownReferenceGuideUI> = {
  slug: 'kronen-referenzleitfaden',
  title: 'Uhrenkronen Referenzleitfaden',
  description: 'Interaktiver Leitfaden zu Kronenpositionen, Aufzugsrichtungen und Einstellfunktionen für gängige Uhrwerke.',
  ui: {
    title: 'Kroneneinstellungen',
    movementLabel: 'Uhrwerk',
    selectMovement: 'Uhrwerk auswählen',
    customMovement: 'Benutzerdefiniert',
    positionLabel: 'Position',
    unscrewFirst: 'Krone zuerst herausdrehen',
    windingLabel: 'Aufzug',
    hackLabel: 'Sekundenstopp',
    dangerZoneLabel: '9\u20133 Uhr vermeiden',
    directionCW: 'Im Uhrzeigersinn',
    directionCCW: 'Gegen Uhrzeigersinn',
    directionBoth: 'Beidseitig',
    pullHint: 'Krone ziehen',
    clickPosition: 'Position anklicken',
    position0Title: 'Ruhestellung',
    position0Desc: 'Krone ist eingedrückt. Uhr läuft normal.',
    position0Detail: 'Keine Aufzugs- oder Einstellfunktionen aktiv.',
    position1Title: 'Handaufzug',
    position1Desc: 'Drehen Sie die Krone im Uhrzeigersinn, um die Zugfeder zu spannen. Sie spüren einen zunehmenden Widerstand.',
    position1Detail: 'Etwa 30\u201340 volle Umdrehungen aus dem Stillstand. Automatikrotoren spannen beim Tragen ebenfalls.',
    position2Title: 'Datums-Schnellverstellung',
    position2Desc: 'Krone im Uhrzeigersinn drehen, um das Datum vorzustellen. Der Stundenzeiger bleibt synchron mit den laufenden Sekunden.',
    position2Detail: 'Schnellverstellung des Datums zwischen 21 und 3 Uhr vermeiden, während der Datumswechselmechanismus aktiv ist.',
    position3Title: 'Zeiteinstellung',
    position3Desc: 'Krone in beide Richtungen drehen, um die Zeiger zu bewegen. Der Sekundenzeiger stoppt (Sekundenstopp) für präzise Synchronisation.',
    position3Detail: 'In Position 3 ziehen, warten bis der Sekundenzeiger auf 12 steht, dann ganz herausziehen. Zeit einstellen und wieder hineindrücken.',
    screwDownHint: 'Krone nach dem Einstellen wieder hineinschrauben, um die Wasserdichtigkeit zu gewährleisten.',
    noQuickSet: 'Keine Schnellverstellung',
    noHack: 'Nein',
    hasHack: 'Ja',
    crownPositions: 'Kronenpositionen',
    noteTitle: 'Hinweis',
  },
  seo: [
    { type: 'title', text: 'Uhren-Kronenpositionen-Leitfaden-So Aufziehen, Datum & Uhrzeit richtig einstellen', level: 2 },
    { type: 'paragraph', html: 'Die Krone ist die einzige physische Schnittstelle zwischen Ihnen und Ihrem Uhrwerk. Sie falsch zu bedienen-rückwärts aufziehen, das Datum um Mitternacht einstellen oder zu stark ziehen-kann das Werk beschädigen. Dieser Leitfaden erklärt jede Kronenposition für <strong>ETA, Sellita, Miyota, Seiko und Unitas</strong>-Kaliber, sodass Sie nie raten müssen.' },
    { type: 'title', text: 'Kronenpositionen auf einen Blick', level: 3 },
    {
      type: 'glossary', items: [
        { term: 'Position 0 (Ruhestellung)', definition: 'Krone eingedrückt oder eingeschraubt. Uhr läuft normal. Keine Funktionen aktiv. Nach dem Einstellen immer hierher zurückkehren.' },
        { term: 'Position 1 (Aufzug)', definition: 'Erster Zug oder herausgeschraubter Zustand. Im Uhrzeigersinn drehen, um die Zugfeder zu spannen. Die meisten Automatikuhren spannen auch über den Rotor.' },
        { term: 'Position 2 (Datums-Schnellverstellung)', definition: 'Zweiter Zug. Im Uhrzeigersinn drehen, um das Datum vorzustellen. Nicht zwischen 21\u20133 Uhr verwenden, wenn der Datumsmechanismus aktiv ist.' },
        { term: 'Position 3 (Zeiteinstellung)', definition: 'Dritter Zug. Sekundenstopp für präzise Ausrichtung. Zum Einstellen der Uhrzeit frei drehen. Bei den meisten modernen Automatikuhren vorhanden.' },
      ]
    },

    { type: 'title', text: 'Uhrwerksvergleich: Kronenfunktionen', level: 3 },
    {
      type: 'table', headers: ['Uhrwerk', 'Positionen', 'Sekundenstopp', 'Schnellverst.', 'Aufzugsricht.'], rows: [
        ['ETA 2824-2 / SW200', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['ETA 2892-A2 / SW300', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['Valjoux 7750 / SW500', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['Miyota 8215', '2 (0,1,3)', 'Nein', 'Keine', 'UZS'],
        ['Miyota 9015', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['Seiko NH35 / 4R35', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['Seiko 6R35', '3 (0,1,2,3)', 'Ja', 'Datum (UZS)', 'UZS'],
        ['Unitas 6497/6498', '1 (0,1,3)', 'Nein', 'Keine', 'UZS'],
      ]
    },

    { type: 'diagnostic', variant: 'warning', title: 'Häufige Kronenfehler', icon: 'mdi:alert', badge: 'NICHT', html: 'Stellen Sie das Datum niemals per Schnellverstellung zwischen <strong>21 und 3 Uhr</strong> ein, während das Datumsrad eingerückt ist. Dies kann Zähne ausreißen und eine vollständige Werksüberholung erforderlich machen. Wenn Sie das Datum in diesem Zeitfenster ändern müssen, stellen Sie zuerst die Zeit über 3 Uhr hinaus, stellen Sie das Datum ein und korrigieren Sie dann die Uhrzeit.' },

    { type: 'tip', title: 'Schraubkronen', html: 'Taucher- und Sportuhren haben oft Schraubkronen für Wasserdichtigkeit. <strong>Vor dem Ziehen immer herausdrehen</strong>. Gegen den Uhrzeigersinn drehen, bis die Krone herausspringt, dann in die gewünschte Position ziehen. Nach dem Einstellen hineindrücken, dann im Uhrzeigersinn mit leichtem Druck festziehen. <strong>Nicht überdrehen.</strong>' },

    {
      type: 'comparative', columns: 2, items: [
        { title: 'Standardkrone', icon: 'mdi:crown', description: 'Zug-Druck-Krone, bei den meisten Alltags- und Automatikuhren zu finden. 2\u20134 Positionen. Wasserdichtigkeit typischerweise 30\u2013100 m.', points: ['Sofortzugriff, kein Herausdrehen', 'Begrenzte Wasserdichtigkeit', 'Üblich bei ETA, Miyota, Seiko'] },
        { title: 'Schraubkrone', icon: 'mdi:lock', description: 'Gewindekrone, die in das Gehäuserohr geschraubt wird. Standard bei Taucher- und Werkzeughren. Wasserdichtigkeit 200 m+.', points: ['Hervorragende Wasserdichtigkeit', 'Muss vor Gebrauch herausgeschraubt werden', 'Üblich bei Rolex, Omega, Seiko Prospex'], highlight: true },
      ]
    },

    {
      type: 'summary', title: 'Kurzübersicht', items: [
        'Immer im Uhrzeigersinn aufziehen-Rückwärtsaufzug betätigt die Rutschkupplung, spannt aber nicht.',
        'Wenn Ihre Uhr eine Schraubkrone hat, diese vor dem Ziehen herausdrehen.',
        'Datums-Schnellverstellung zwischen 21 und 3 Uhr vermeiden. Falls nötig, zuerst die Zeit über 3 Uhr hinaus stellen.',
        'Handaufzugswerke (z. B. Unitas 6498) haben weniger Positionen. Vor dem Einstellen vollständig aufziehen.',
        'Bei Werken ohne Sekundenstopp (z. B. Miyota 8215) eine andere Technik anwenden: über die Zielminute hinaus drehen, dann langsam zurück.',
      ]
    },
  ],
  faq: [
    {
      question: 'Wie viele Kronenpositionen hat meine Uhr?',
      answer: 'Die meisten Automatikwerke haben 3 funktionale Positionen zusätzlich zur Ruhestellung: Position 1 für Handaufzug, Position 2 für Datums-Schnellverstellung und Position 3 für Zeiteinstellung mit Sekundenstopp. Handaufzugswerke wie das Unitas 6498 haben nur eine funktionale Position (Aufzug, mit Zeiteinstellung bei weiterem Zug). Schraubkronen erfordern einen zusätzlichen Schritt: vor dem Ziehen herausdrehen.',
    },
    {
      question: 'Kann ich meine Uhr durch Rückwärtsaufziehen beschädigen?',
      answer: 'Nein, aber es bewirkt nichts. Moderne Werke verwenden eine Rutschkupplung, die sich beim Rückwärtsdrehen löst. Rückwärtsaufzug verursacht daher keinen Schaden, spannt aber auch nicht die Zugfeder. Zum Handaufzug immer im Uhrzeigersinn drehen. Die einzige Ausnahme sind einige antike Taschenuhren und frühe Automatikwerke.',
    },
    {
      question: 'Was ist die Datumswechsel-Gefahrenzone und wie vermeide ich sie?',
      answer: 'Die Gefahrenzone liegt typischerweise zwischen 21 und 3 Uhr, wenn der Datumswechselmechanismus physisch mit dem Datumsrad in Eingriff steht. Eine Schnellverstellung in diesem Fenster kann Zahnräder beschädigen. So stellen Sie das Datum sicher ein: Zeit über 3 Uhr hinaus stellen, Datum auf den Vortag einstellen, dann die Uhrzeit bis zum korrekten Datum und der richtigen Uhrzeit vorstellen.',
    },
    {
      question: 'Warum stoppt mein Sekundenzeiger nicht, wenn ich die Krone ziehe?',
      answer: 'Einige Werke haben keinen Sekundenstopp-Mechanismus. Übliche Kaliber ohne Sekundenstopp sind das Miyota 8215, Unitas 6497/6498 und viele antike Werke. Um die Zeit bei einem Werk ohne Sekundenstopp genau einzustellen: drehen Sie die Krone 5\u201310 Minuten über Ihre Zielminute hinaus, dann langsam zurückdrehen, bis der Minutenzeiger genau auf der gewünschten Markierung steht.',
    },
    {
      question: 'Wie viele Umdrehungen braucht meine Uhr zum vollständigen Aufzug?',
      answer: 'Die meisten Automatikwerke benötigen 30\u201340 volle Kronenumdrehungen aus dem Stillstand. Handaufzugswerke variieren: das Unitas 6498 braucht etwa 30\u201335 Umdrehungen, während das Seiko 6R35 mit seiner 70-Stunden-Gangreserve 50\u201360 Umdrehungen benötigt. Hören Sie auf, wenn Sie einen deutlichen Widerstand spüren \u2014 gewaltsames Weiterdrehen kann die Zugfeder beschädigen.',
    },
  ],
  bibliography,
  howTo: [
    {
      name: 'Finden Sie Ihr Uhrwerkskaliber',
      text: 'Schauen Sie auf den Gehäuseboden (oft eingraviert) oder auf das Werk selbst durch einen Sichtboden. Übliche Nummern: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
    },
    {
      name: 'Wählen Sie es im Leitfaden aus',
      text: 'Wählen Sie Ihr Uhrwerk aus dem Dropdown-Menü. Die Kronenvisualisierung und die Info-Tafel aktualisieren sich und zeigen Ihre genauen Positionen, Aufzugsrichtung und Funktionen an.',
    },
    {
      name: 'Durch jede Position ziehen',
      text: 'Klicken Sie auf die Positions-Chips (0\u20133) oder verwenden Sie den Zug-Knopf. Lesen Sie die Beschreibung und beachten Sie die Gefahrenzonen-Warnung für die Datumseinstellung.',
    },
    {
      name: 'An Ihrer Uhr anwenden',
      text: 'Halten Sie den Leitfaden neben sich und üben Sie an Ihrer tatsächlichen Uhr. Ziehen Sie in der richtigen Richtung auf, vermeiden Sie die Gefahrenzone und schrauben Sie die Krone danach wieder hinein.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Wie viele Kronenpositionen hat meine Uhr?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten Automatikwerke haben 3 funktionale Positionen zusätzlich zur Ruhestellung: Position 1 für Handaufzug, Position 2 für Datums-Schnellverstellung und Position 3 für Zeiteinstellung mit Sekundenstopp.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich meine Uhr durch Rückwärtsaufziehen beschädigen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nein. Moderne Werke verwenden eine Rutschkupplung, die sich beim Rückwärtsdrehen löst, sodass Rückwärtsaufzug keinen Schaden verursacht, aber auch nicht die Zugfeder spannt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Was ist die Datumswechsel-Gefahrenzone?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die Gefahrenzone liegt typischerweise zwischen 21 und 3 Uhr. So stellen Sie das Datum sicher ein: Zeit über 3 Uhr hinaus stellen, Datum auf den Vortag einstellen, dann vorstellen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Warum stoppt mein Sekundenzeiger nicht, wenn ich die Krone ziehe?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Einige Werke haben keinen Sekundenstopp-Mechanismus. Übliche Kaliber ohne Sekundenstopp sind das Miyota 8215 und Unitas 6497/6498. Zum Zeiteinstellen: über die Zielminute hinaus drehen, dann langsam zurück.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie viele Umdrehungen zum vollständigen Aufzug?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Die meisten Automatikwerke benötigen 30\u201340 volle Kronenumdrehungen. Handaufzugswerke variieren. Beim spürbaren Widerstand aufhören.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Kronen-Referenzleitfaden',
      'operatingSystem': 'Alle',
      'applicationCategory': 'ReferenceApplication',
      'browserRequirements': 'Erfordert HTML5. Erfordert JavaScript.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Verwendung des Uhrenkronen Referenzleitfadens',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Finden Sie Ihr Uhrwerkskaliber',
          'text': 'Schauen Sie auf den Gehäuseboden (oft eingraviert) oder auf das Werk selbst durch einen Sichtboden. Übliche Nummern: 2824, 2892, 7750, 8215, 9015, NH35, 4R35, 6R35, 6498.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Wählen Sie es im Leitfaden aus',
          'text': 'Wählen Sie Ihr Uhrwerk aus dem Dropdown-Menü. Die Kronenvisualisierung und die Info-Tafel aktualisieren sich und zeigen Ihre genauen Positionen, Aufzugsrichtung und Funktionen an.',
        },
        {
          '@type': 'HowToStep',
          'name': 'Durch jede Position ziehen',
          'text': 'Klicken Sie auf die Positions-Chips (0\u20133) oder verwenden Sie den Zug-Knopf. Lesen Sie die Beschreibung und beachten Sie die Gefahrenzonen-Warnung für die Datumseinstellung.',
        },
        {
          '@type': 'HowToStep',
          'name': 'An Ihrer Uhr anwenden',
          'text': 'Halten Sie den Leitfaden neben sich und üben Sie an Ihrer tatsächlichen Uhr. Ziehen Sie in der richtigen Richtung auf, vermeiden Sie die Gefahrenzone und schrauben Sie die Krone danach wieder hinein.',
        },
      ],
    },
  ],
};
