import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Hoe weet ik of een horloge een echte GMT of een caller GMT is?',
    answer: 'Een <strong>echte GMT</strong> (ook wel "flyer" GMT genoemd) laat je de lokale urenwijzer onafhankelijk verspringen - ideaal voor reizigers die vaak van tijdzone wisselen. Een <strong>caller GMT</strong> stelt de GMT-wijzer apart in terwijl de hoofdurenwijzer stil blijft staan, wat goedkoper is om te produceren. Zo herken je het verschil: trek de kroon in de tijdinstelpositie en draai. Als de urenwijzer in stappen van één uur verspringt zonder te stoppen, is het een echte GMT. Als de GMT-wijzer beweegt, is het een caller. Rolex gebruikt een echt GMT-kaliber (3285) in de GMT-Master II, terwijl veel betaalbare microbrands caller-uurwerken zoals de Seiko NH34 gebruiken.',
  },
  {
    question: 'Wat is het verschil tussen een GMT-horloge en een World Timer?',
    answer: 'Een <strong>GMT-horloge</strong> houdt meestal twee tijdzones bij - je lokale tijd en een referentie (meestal UTC) - met behulp van een 24-uurs wijzer en een 24-uurs ring. Een <strong>World Timer</strong> toont alle 24 tijdzones in één oogopslag: het heeft een stedenring rond de wijzerplaat en een draaiende 24-uurs schijf. World Timers zoals de Patek Philippe 5230P of JLC Geophysic Universal Time laten je de tijd in elke stad direct aflezen. GMT\'s zijn eenvoudiger en betaalbaarder; World Timers zijn mechanisch complexer en doorgaans duurder. Deze tool werkt als een digitale World Timer, waarmee je zoveel steden kunt toevoegen als je nodig hebt.',
  },
  {
    question: 'Welke tijdzone geeft mijn horloge aan als er "GMT" op de wijzerplaat staat?',
    answer: 'Als een horloge "GMT" op de wijzerplaat heeft staan, wijst de <strong>GMT-wijzer</strong> (meestal een vierde wijzer met een gekleurde pijlpunt) de tijd aan in een 24-uurs formaat. De meeste eigenaren stellen deze wijzer in op UTC (gecoördineerde wereldtijd) omdat alle tijdzones worden gedefinieerd als afwijkingen van UTC. De draaibare 24-uurs ring kan dan worden uitgelijnd om elke andere tijdzone af te lezen. Als de GMT-wijzer bijvoorbeeld naar 14 (2 PM) wijst en uw ringmarkeringen zijn uitgelijnd op UTC+2, leest u de Oost-Europese Tijd af. Deze tool helpt u precies die relatie te visualiseren.',
  },
];

const howTo = [
  {
    name: 'Voeg elke stad toe aan je dashboard',
    text: 'Typ een stadsnaam of tijdzone in de zoekbalk. Klik op een resultaat om het direct toe te voegen. Elke stad verschijnt als een live klokkaart met de actuele lokale tijd.',
  },
  {
    name: 'Verwijder steden wanneer je ze niet nodig hebt',
    text: 'Beweeg over een klokkaart en klik op de ×-knop om deze te verwijderen. Je selectie wordt automatisch opgeslagen in je browser - sluit af en kom later terug, je dashboard is precies zoals je het hebt achtergelaten.',
  },
  {
    name: 'Gebruik het als GMT-referentie voor je horlogecollectie',
    text: 'Stel je thuisstad in en voeg de tijdzones toe die je met je GMT-horloges bijhoudt. Gebruik de live offset-labels om te controleren of je ringuitlijning correct is voor elke gevolgde zone.',
  },
];

const title = 'Wereldklok: Live Dashboard voor Meerdere Tijdzones';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-wereldklok',
  title,
  description: 'Volg meerdere tijdzones live. Voeg elke stad toe en zie de actuele tijd elke seconde veranderen. Perfect voor horlogeliefhebbers met een GMT- of World Timer-horloge.',
  ui: {
    title: 'Wereldklok',
    searchPlaceholder: 'Zoek stad of tijdzone...',
    addLabel: 'Toevoegen',
    removeLabel: 'Verwijderen',
    noResults: 'Geen steden gevonden',
    yourZones: 'Jouw tijdzones',
  },
  seo: [
    { type: 'title', text: 'Wereldklok - Live Tijdzone-Dashboard voor Horlogeliefhebbers', level: 2 },
    { type: 'paragraph', html: 'Of je nu een <strong>GMT-Master II</strong>, een <strong>World Timer</strong> bezit, of simpelweg meerdere tijdzones moet bijhouden voor werk of reizen, dit live dashboard toont je de actuele tijd in elke stad die je belangrijk vindt - allemaal in één oogopslag. Voeg New York, Londen, Tokio of elke andere stad toe en de tijd wordt elke seconde bijgewerkt. Je zones worden opgeslagen in je browser, zodat je ze nooit opnieuw hoeft in te stellen.' },
    { type: 'title', text: 'Waarom horlogeliefhebbers een wereldklok nodig hebben', level: 3 },
    { type: 'paragraph', html: 'Als je <strong>GMT-horloges</strong> verzamelt, ken je het probleem: je stelt de ring in om een tweede tijdzone te volgen, maar de verschuivingen veranderen met de zomertijd, of je hebt meerdere GMT\'s en wilt vergelijken hoe elke een andere stad volgt. Deze tool lost dat op. Voeg de steden toe die je horloges volgen en zie direct hun huidige offset en tijd. Geen hoofdrekenen meer - kijk gewoon naar de kaart en weet precies waar je GMT-wijzer naartoe zou moeten wijzen.' },
    { type: 'title', text: 'GMT vs World Timer - Welke Past bij Jouw Stijl?', level: 3 },
    { type: 'paragraph', html: 'Een <strong>GMT-horloge</strong> (zoals de Rolex GMT-Master II "Pepsi" of Tudor Black Bay Pro) gebruikt een 24-uurs wijzer en een draaibare ring om twee tijdzones te volgen. Een <strong>World Timer</strong> (zoals de Nomos Zürich Weltzeit of Omega Seamaster Worldtimer) toont alle 24 zones tegelijk met een stedenring en een 24-uurs schijf. Dit dashboard werkt als een World Timer: je kunt alle steden tegelijk zien. Gebruik het om te beslissen welke complicatie bij jouw levensstijl past voordat je tot aanschaf overgaat.' },
    { type: 'title', text: 'Praktisch Gebruik Verder dan Horloges Verzamelen', level: 3 },
    {
      type: 'list', items: [
        'Thuiswerkers die moeiteloos vergaderingen plannen over tijdzones heen',
        'Veelreizigers die tegelijkertijd thuis en bestemming in de gaten houden',
        'Handelaren die marktopeningen in New York, Londen, Tokio en Sydney volgen',
        'Iedereen die wil weten "hoe laat is het in..." zonder te hoeven googelen',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Live Wereldklok', icon: 'mdi:clock-time-eight', badge: 'TIJD', html: 'De tijden worden live elke seconde bijgewerkt met behulp van de ingebouwde tijdzone-database van je browser. Zomertijdoverschakelingen worden automatisch verwerkt. Er worden geen gegevens naar een server verzonden.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
