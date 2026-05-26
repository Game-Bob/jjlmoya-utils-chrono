import type { ToolLocaleContent } from '../../../types';
import type { GMTWorldTimerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Hur vet jag om en klocka är en äkta GMT eller en caller GMT?',
    answer: 'En <strong>äkta GMT</strong> (även kallad "flyer"-GMT) låter dig hoppa den lokala timvisaren oberoende — idealisk för resenärer som ofta byter tidszon. En <strong>caller GMT</strong> justerar GMT-visaren separat medan huvudtimvisaren är stilla, vilket är billigare att tillverka. Så här skiljer du dem åt: dra ut kronan till tidsinställningsläget och vrid. Om timvisaren hoppar i steg om en timme utan att stanna är det en äkta GMT. Om GMT-visaren rör sig istället är det en caller. Rolex använder ett äkta GMT-kaliber (3285) i GMT-Master II, medan många prisvärda mikromärken använder caller-verk som Seiko NH34.',
  },
  {
    question: 'Vad är skillnaden mellan en GMT-klocka och en World Timer?',
    answer: 'En <strong>GMT-klocka</strong> håller vanligtvis koll på två tidszoner — din lokala tid och en referens (oftast UTC) — med hjälp av en 24-timmarsvisare och en 24-timmarsring. En <strong>World Timer</strong> visar alla 24 tidszoner på en gång: den har en stadsring runt urtavlan och en roterande 24-timmarsskiva. World Timers som Patek Philippe 5230P eller JLC Geophysic Universal Time låter dig läsa av tiden i vilken stad som helst direkt. GMT-klockor är enklare och mer prisvärda; World Timers är mekaniskt mer komplexa och vanligtvis dyrare. Det här verktyget fungerar som en digital World Timer och låter dig lägga till så många städer du behöver.',
  },
  {
    question: 'Vilken tidszon visar min klocka när det står "GMT"?',
    answer: 'När en klocka har "GMT" på urtavlan pekar <strong>GMT-visaren</strong> (vanligtvis en fjärde visare med en färgad pilspets) på tiden i 24-timmarsformat. De flesta ägare ställer in denna visare på UTC (koordinerad universell tid) eftersom alla tidszoner definieras som avvikelser från UTC. Den roterande 24-timmarsringen kan sedan justeras för att läsa av vilken annan tidszon som helst. Om GMT-visaren till exempel pekar på 14 (kl 14) och dina ringmarkeringar är inställda på UTC+2, läser du av östeuropeisk tid. Det här verktyget hjälper dig att visualisera precis det förhållandet.',
  },
];

const howTo = [
  {
    name: 'Lägg till valfri stad på din instrumentpanel',
    text: 'Skriv ett stadsnamn eller en tidszon i sökfältet. Klicka på ett resultat för att lägga till det direkt. Varje stad visas som ett liveklockkort med aktuell lokal tid.',
  },
  {
    name: 'Ta bort städer när du inte behöver dem',
    text: 'Hovra över ett klockkort och klicka på ×-knappen för att ta bort det. Ditt urval sparas automatiskt i din webbläsare — stäng och kom tillbaka senare, din instrumentpanel är precis som du lämnade den.',
  },
  {
    name: 'Använd den som GMT-referens för din klockkollektion',
    text: 'Ange din hemstad och lägg till de tidszoner du följer med dina GMT-klockor. Använd live-offset-etiketterna för att kontrollera om din ringinställning är korrekt för varje zon.',
  },
];

const title = 'Världsklocka: Live Dashboard med Flera Tidszoner';

export const content: ToolLocaleContent<GMTWorldTimerUI> = {
  slug: 'gmt-varldsklocka',
  title,
  description: 'Följ flera tidszoner live. Lägg till valfri stad och se den aktuella tiden uppdateras varje sekund. Perfekt för klockentusiaster med GMT- eller World Timer-klockor.',
  ui: {
    title: 'Världsklocka',
    searchPlaceholder: 'Sök stad eller tidszon...',
    addLabel: 'Lägg till',
    removeLabel: 'Ta bort',
    noResults: 'Inga städer hittades',
    yourZones: 'Dina tidszoner',
  },
  seo: [
    { type: 'title', text: 'Världsklocka — Live Dashboard för Tidszoner för Klockentusiaster', level: 2 },
    { type: 'paragraph', html: 'Oavsett om du äger en <strong>GMT-Master II</strong>, en <strong>World Timer</strong>, eller helt enkelt behöver hålla koll på flera tidszoner för arbete eller resor, visar denna live-instrumentpanel den aktuella tiden i varje stad du bryr dig om — allt på en gång. Lägg till New York, London, Tokyo eller vilken stad som helst, och tiden uppdateras varje sekund. Dina zoner sparas i webbläsaren så att du aldrig behöver konfigurera om.' },
    { type: 'title', text: 'Varför klockentusiaster behöver en världsklocka', level: 3 },
    { type: 'paragraph', html: 'Om du samlar på <strong>GMT-klockor</strong> känner du till problemet: du ställer in ringen för att följa en andra tidszon, men offset ändras med sommartid, eller så har du flera GMT och vill jämföra hur var och en följer en annan stad. Det här verktyget löser det. Lägg till de städer dina klockor följer och se omedelbart deras aktuella offset och tid. Ingen huvudräkning — titta bara på kortet och vet exakt var din GMT-visare ska peka.' },
    { type: 'title', text: 'GMT vs World Timer — Vilken passar din stil?', level: 3 },
    { type: 'paragraph', html: 'En <strong>GMT-klocka</strong> (som Rolex GMT-Master II "Pepsi" eller Tudor Black Bay Pro) använder en 24-timmarsvisare och en roterande ring för att följa två tidszoner. En <strong>World Timer</strong> (som Nomos Zürich Weltzeit eller Omega Seamaster Worldtimer) visar alla 24 zoner samtidigt med en stadsring och en 24-timmarsskiva. Denna instrumentpanel fungerar som en World Timer: du kan se alla städer samtidigt. Använd den för att bestämma vilken komplikation som passar din livsstil innan du köper.' },
    { type: 'title', text: 'Praktisk användning utöver klockinsamling', level: 3 },
    {
      type: 'list', items: [
        'Distansarbetare som schemalägger möten över tidszoner utan förvirring',
        'Frekventa resenärer som håller koll på hemmet och destinationen samtidigt',
        'Traders som följer marknadsöppningar i New York, London, Tokyo och Sydney',
        'Alla som vill veta "vad är klockan i..." utan att googla',
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Live Världsklocka', icon: 'mdi:clock-time-eight', badge: 'TID', html: 'Tiderna uppdateras live varje sekund med hjälp av webbläsarens inbyggda tidszondatabas. Sommartidsövergångar hanteras automatiskt. Inga data skickas till någon server.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: buildSchemas(title, faq, howTo),
};
