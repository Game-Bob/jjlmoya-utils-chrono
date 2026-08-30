import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Woran erkenne ich, ob eine Uhr eine echte GMT oder eine Caller-GMT ist?',
    answer: 'Eine <strong>echte GMT</strong> (auch "Flyer"-GMT genannt) lässt sich der lokale Stundenzeiger unabhängig verstellen - ideal für Reisende, die häufig die Zeitzone wechseln. Eine <strong>Caller-GMT</strong> dagegen stellt den GMT-Zeiger separat ein, während der Hauptstundenzeiger stehen bleibt. Das ist günstiger in der Herstellung. So unterscheidest du sie: Ziehe die Krone in die Zeitstellposition und drehe sie. Springt der Stundenzeiger stundenweise vor, ohne anzuhalten, hast du eine echte GMT. Bewegt sich stattdessen der GMT-Zeiger, ist es eine Caller. Rolex verbaut ein echtes GMT-Kaliber (3285) in der GMT-Master II, während viele erschwingliche Mikromarken auf Caller-Werke wie das Seiko NH34 setzen.',
  },
  {
    question: 'Was ist der Unterschied zwischen einer GMT-Uhr und einer World Timer?',
    answer: 'Eine <strong>GMT-Uhr</strong> zeigt in der Regel zwei Zeitzonen an - die lokale Zeit und eine Referenz (meist UTC) - mithilfe eines 24-Stunden-Zeigers und einer 24-Stunden-Lünette. Eine <strong>World Timer</strong> hingegen zeigt alle 24 Zeitzonen auf einmal: Sie hat einen Städtering um das Zifferblatt und eine rotierende 24-Stunden-Scheibe. World Timer wie die Patek Philippe 5230P oder die JLC Geophysic Universal Time lassen dich die Zeit jeder Stadt sofort ablesen. GMT-Uhren sind einfacher und günstiger; World Timer sind mechanisch aufwändiger und meist teurer. Dieses Tool funktioniert wie ein digitaler World Timer - du kannst so viele Städte hinzufügen, wie du brauchst.',
  },
  {
    question: 'Welche Zeitzone zeigt meine Uhr an, wenn auf dem Zifferblatt "GMT" steht?',
    answer: 'Wenn eine Uhr "GMT" auf dem Zifferblatt trägt, zeigt der <strong>GMT-Zeiger</strong> (meist ein vierter Zeiger mit farbiger Pfeilspitze) die Zeit im 24-Stunden-Format an. Die meisten Besitzer stellen diesen Zeiger auf UTC (koordinierte Weltzeit) ein, da alle Zeitzonen als Abweichungen von UTC definiert sind. Die drehbare 24-Stunden-Lünette kann dann ausgerichtet werden, um jede andere Zeitzone abzulesen. Zeigt der GMT-Zeiger zum Beispiel auf 14 (14 Uhr) und die Lünettenmarkierungen sind auf UTC+2 ausgerichtet, liest du die Osteuropäische Zeit ab. Mit diesem Tool kannst du genau diesen Zusammenhang visualisieren.',
  },
];

const howTo = [
  {
    name: 'Beliebige Stadt zu deinem Dashboard hinzufügen',
    text: 'Gib einen Stadt- oder Zeitzonennamen in die Suchleiste ein. Klicke auf ein Ergebnis, um es sofort hinzuzufügen. Jede Stadt erscheint als Live-Uhrkarte mit der aktuellen Ortszeit.',
  },
  {
    name: 'Städte entfernen, wenn du sie nicht mehr brauchst',
    text: 'Fahre mit der Maus über eine Uhrkarte und klicke auf den x-Button, um sie zu entfernen. Deine Auswahl wird automatisch im Browser gespeichert - schließe das Fenster und komm später wieder, dein Dashboard ist genau so, wie du es verlassen hast.',
  },
  {
    name: 'Als GMT-Referenz für deine Uhrensammlung nutzen',
    text: 'Lege deine Heimatstadt fest und füge die Zeitzonen hinzu, die du mit deinen GMT-Uhren verfolgst. Nutze die Live-Offset-Labels, um zu prüfen, ob deine Lünettenausrichtung für jede verfolgte Zone stimmt.',
  },
];

const title = 'Weltzeituhr: Live Dashboard für mehrere Zeitzonen';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-weltzeituhr',
  title,
  description: 'Verfolge mehrere Zeitzonen live. Füge beliebige Städte hinzu und sieh die aktuelle Zeit sekündlich aktualisiert. Perfekt für Uhrenliebhaber mit GMT- oder World-Timer-Uhren.',
  ui: {
    title: 'Weltzeituhr',
    searchPlaceholder: 'Stadt oder Zeitzone suchen...',
    addLabel: 'Hinzufügen',
    removeLabel: 'Entfernen',
    noResults: 'Keine Städte gefunden',
    yourZones: 'Deine Zeitzonen',
  },
  seo: [
    { type: 'title', text: 'Weltzeituhr: Live Zeitzonen Dashboard für Uhrenliebhaber', level: 2 },
    { type: 'paragraph', html: 'Ob du eine <strong>GMT-Master II</strong>, eine <strong>World Timer</strong> besitzt oder einfach beruflich oder privat mehrere Zeitzonen im Blick behalten musst - dieses Live Dashboard zeigt dir auf einen Blick die aktuelle Zeit in jeder Stadt, die dir wichtig ist. Füge New York, London, Tokio oder jede andere Stadt hinzu, und die Zeit wird jede Sekunde aktualisiert. Deine Zonen werden im Browser gespeichert, sodass du sie nie neu konfigurieren musst.' },
    { type: 'title', text: 'Warum Uhrenliebhaber eine Weltzeituhr brauchen', level: 3 },
    { type: 'paragraph', html: 'Wenn du <strong>GMT-Uhren</strong> sammelst, kennst du das Problem: Du stellst die Lünette ein, um eine zweite Zeitzone zu verfolgen, aber die Offset-Änderungen durch die Sommerzeit oder der Besitz mehrerer GMTs machen den Vergleich schwierig. Dieses Tool löst das. Füge die Städte hinzu, die deine Uhren verfolgen, und sieh sofort ihren aktuellen Offset und die Uhrzeit. Kein Kopfrechnen mehr - schau einfach auf die Karte und weiß genau, worauf dein GMT-Zeiger zeigen sollte.' },
    { type: 'title', text: 'GMT vs. World Timer: welcher Stil passt zu dir?', level: 3 },
    { type: 'paragraph', html: 'Eine <strong>GMT-Uhr</strong> (wie die Rolex GMT-Master II "Pepsi" oder Tudor Black Bay Pro) nutzt einen 24-Stunden-Zeiger und eine drehbare Lünette, um zwei Zeitzonen zu verfolgen. Eine <strong>World Timer</strong> (wie die Nomos Zürich Weltzeit oder Omega Seamaster Worldtimer) zeigt alle 24 Zonen auf einmal dank eines Städterings und einer 24-Stunden-Scheibe. Dieses Dashboard funktioniert wie ein World Timer: Du siehst alle Städte auf einmal. Nutze es, um vor dem Kauf zu entscheiden, welche Komplikation am besten zu deinem Lebensstil passt.' },
    { type: 'title', text: 'Praktische Anwendungen jenseits des Uhrensammelns', level: 3 },
    {
      type: 'list', items: [
        'Remote-Mitarbeiter, die Meetings über Zeitzonen hinweg planen',
        'Vielreisende, die Heimat und Zielort gleichzeitig im Blick behalten',
        'Trader, die die Marktöffnungen in New York, London, Tokio und Sydney verfolgen',
        'Jeder, der wissen will, "wie spät ist es gerade in..." ohne googeln zu müssen',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Weltzeituhr Live', icon: 'mdi:clock-time-eight', badge: 'ZEIT', html: 'Die Zeiten werden live jede Sekunde aktualisiert - direkt in deinem Browser mit der integrierten Zeitzonendatenbank. Sommerzeitumstellungen werden automatisch berücksichtigt. Es werden keine Daten an einen Server gesendet.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
