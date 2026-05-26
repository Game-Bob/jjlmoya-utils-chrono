import type { ToolLocaleContent } from '../../../types';
import type { SiderealTimeTrackerUI } from '../entry';
import { bibliography } from '../bibliography';
import { buildSchemas } from '../helpers';

const faq = [
  {
    question: 'Vad är skillnaden mellan soltid och siderisk tid?',
    answer: 'Soltid baseras på solens position i förhållande till den lokala meridianen (tar 24 timmar), medan siderisk tid baseras på jordens rotation i förhållande till avlägsna bakgrundsstjärnor (tar 23 timmar, 56 minuter, 4,09 sekunder).',
  },
  {
    question: 'Varför är en siderisk dag kortare än en sol dag?',
    answer: 'Medan jorden roterar kring sin axel färdas den också längs sin bana runt solen. För att vända mot solen igen måste jorden rotera något mer än 360 grader, vilket lägger till cirka 3 minuter och 56 sekunder till dagen jämfört med en enkel stjärnriktad rotation.',
  },
  {
    question: 'Hur påverkar longitud lokal siderisk tid?',
    answer: 'Lokal siderisk tid beräknas genom att lägga till observatörens longitud (omvandlad till timmar: 15 grader per timme) till Greenwich Mean Sidereal Time (GMST). Varje grad österut lägger till 4 minuter till din lokala sideriska klocka.',
  },
];

const howTo = [
  {
    name: 'Ställ in din referenslongitud',
    text: 'Justera reglaget till din lokala longitud. Detta justerar den 24-timmars sideriska skalan till din lokala meridian.',
  },
  {
    name: 'Observera sol- och sideriska visare',
    text: 'Titta på urtavlan: vanliga solvisare visar UTC-tid på den inre 12-timmarskivan, medan den gyllene visaren och stjärnorna visar siderisk tid på den yttre 24-timmarskalan.',
  },
  {
    name: 'Accelerera den himmelska hastigheten',
    text: 'Klicka på 200× eller 5000× hastighetsmultiplikatorer för att se den stjärniga bakgrundssfären rotera och ackumulera driften i realtid.',
  },
];

const title = 'Astronomisk Siderisk Tidsspårare: Lokal Siderisk Tid Klocka';

export const content: ToolLocaleContent<SiderealTimeTrackerUI> = {
  slug: 'siderisk-tidssparare',
  title,
  description: 'Spåra Greenwich Mean Sidereal Time (GMST) och lokal siderisk tid (LST) med en konstnärlig astronomisk astrolabium-urtavla och en realtids simulerare av stjärndrift.',
  ui: {
    title: 'Siderisk Tidsspårare',
    longitudeLabel: 'Observatörens longitud',
    solarTimeLabel: 'Koordinerad universell tid (UTC)',
    siderealTimeLabel: 'Lokal siderisk tid (LST)',
    differenceLabel: 'Stjärn-sol drift',
    utcLabel: 'UTC Datum/Tid',
    speedLabel: 'Himmelsk hastighet',
    speedNormal: '1× (Realtid)',
    speedFast: '200× (Time-lapse)',
    speedVeryFast: '5000× (Drift)',
    audioToggleLabel: 'Kosmiska klockljud',
    step1: 'Justera din lokala longitud för att se lokal siderisk tid förändras i realtid.',
    step2: 'Växla hastighetsmultiplikatorn för att se driften mellan solvisaren och den sideriska stjärnsfären.',
    step3: 'Aktivera kosmiska klockljud för att höra skillnaden mellan ett vanligt tick och en astronomisk timpassage.',
    tipTitle: 'Astronomisk Drift',
    tipContent: 'Eftersom jorden kretsar runt solen ligger vanliga solklockor efter siderisk tid med 3 minuter och 56 sekunder per dag, och driver exakt 24 timmar under loppet av ett helt år.',
    useLocationBtn: 'Använd nuvarande plats',
    hemisphereLabel: 'Stjärnhemisfär',
    hemisphereNorth: 'Norra (Stora Björnen)',
    hemisphereSouth: 'Södra (Södra Korset)',
    longitudeFormatLabel: 'Longitudformat',
    longitudeFormatDecimal: 'Decimalgrader',
    longitudeFormatDMS: 'Grader/Minuter',
  },
  seo: [
    { type: 'title', text: 'Vad är siderisk tid?', level: 2 },
    { type: 'paragraph', html: 'Siderisk tid är ett tidsmätningssystem som astronomer använder för att lokalisera himmelsobjekt. En siderisk dag är ungefär 23 timmar, 56 minuter och 4,09 sekunder. Det är den tid det tar för jorden att göra en fullständig rotation runt sin axel i förhållande till vårdagjämningen eller de avlägsna stjärnorna, snarare än solen.' },
    { type: 'title', text: 'Soldag vs. Siderisk dag', level: 3 },
    { type: 'paragraph', html: 'En soldag mäter tiden mellan på varandra följande passager av solen över den lokala meridianen. Eftersom jorden färdas ungefär 1/365 av sin bana runt solen varje dag måste den rotera något mer än 360 grader för att åter rikta in sig med solen. En siderisk dag är en verklig 360-graders rotation i förhållande till stjärnorna, vilket gör den 3 minuter och 56 sekunder kortare.' },
    { type: 'title', text: 'Varför astronomer och urmakare bryr sig', level: 3 },
    { type: 'paragraph', html: 'För astronomer befinner sig en stjärna alltid på samma position på himlen vid samma sideriska tid. För att spåra stjärnor måste teleskopmontage rotera exakt en gång per siderisk dag. Högklassiga urmakarmärken (som Patek Philippe, Vacheron Constantin och IWC) skapar ultra-komplicerade astronomiska klockor med sideriska kugghjulsmekanismer för att spåra LST direkt på handleden.' },
    { type: 'title', text: 'Stjärn och soldrift referenstabell', level: 3 },
    {
      type: 'table', headers: ['Förflutna dagar', 'Siderisk tid före', 'Grader av rotationsförskjutning', 'Stjärnbildsdrift'], rows: [
        ['1 dag', '3m 56s', '0,986°', 'Lätt förskjutning västerut'],
        ['15 dagar', '59m 0s', '14,79°', 'Halvt stjärnteckensskifte'],
        ['30 dagar', '1h 58m', '29,58°', 'Ett helt stjärnteckensskifte'],
        ['90 dagar', '5h 54m', '88,74°', 'Ett helt årstidsskifte'],
        ['180 dagar', '11h 48m', '177,48°', 'Motsatta stjärnbilder synliga vid midnatt'],
        ['365 dagar', '24h 0m', '360,00°', 'Full cykel, återställning av stjärnjustering'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Beräknat från J2000 epoken', icon: 'mdi:creation-outline', badge: 'BERÄKNING', html: 'Lokal siderisk tid beräknas genom att konvertera UTC-tid till julianskt datum (dagar sedan -4712), hitta Greenwich Mean Sidereal Time och applicera din longitud (15 grader per timme). Vårt verktyg använder den högprecision linjära IAU J2000-modellen för realtidsspårning.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [],
};

content.schemas = buildSchemas(title, faq, howTo);
