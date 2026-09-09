import type { CategoryLocaleContent } from "../../types";

const slug = "horologie";
const title = "Horologie Gereedschappen & Referentiegidsen";
const description =
  "Horologiehulpmiddelen voor horlogeliefhebbers: controleer de nauwkeurigheid, demagnetiseer uurwerken, bereken draagtijd en bekijk kroonposities van populaire kalibers.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Een werkbank om tijd te begrijpen", level: 2 },
    {
      type: "paragraph",
      html: `Horlogerie begint wanneer een wijzerplaat niet langer alleen een beeld is, maar een systeem dat je kunt lezen. Deze collectie brengt instrumenten samen om de gang te observeren, het ritme van een uurwerk te begrijpen, het gebaar van de kroon te lezen en met meer context beslissingen te nemen. Ze vervangt geen werkbank van een horlogemaker: ze maakt van concrete dagelijkse vragen kleine ontdekkingen, met duidelijke resultaten en een interface die ruimte laat voor nieuwsgierigheid.`,
    },
    { type: "title", text: "Nauwkeurigheid die je kunt zien", level: 2 },
    {
      type: "paragraph",
      html: `Controleer hoeveel een horloge voor- of achterloopt, reken een frequentie om tussen VPH en Hz en verken hoe draagomstandigheden het resultaat kunnen veranderen. De precisietools zijn gemaakt om te vergelijken, te herhalen en te leren: elk getal behoudt zijn eenheid, elke omzetting zijn betekenis en elk resultaat versterkt je mechanische intuïtie. Nauwkeurigheid wordt zo geen abstractie, maar een zichtbare ervaring.`,
    },
    {
      type: "title",
      text: "Referenties voor het mechanische gebaar",
      level: 2,
    },
    {
      type: "paragraph",
      html: `De kroon, de drijfveer, het glas, het lume en de tandwieltrein vertellen elk een ander verhaal over hetzelfde object. Bekijk kroonposities, volg een tandwieltrein, vergelijk materialen en verken complicaties zoals maanfasen, een eeuwigdurende kalender en een tourbillon. Alles draait in de browser en gebruiksgegevens blijven op je apparaat: een praktische bibliotheek om horloges te verzamelen, te herstellen, af te regelen en aandachtiger te bekijken.`,
    },
    { type: "title", text: "Tijd als materiaal", level: 2 },
    {
      type: "paragraph",
      html: `Een horloge toont niet alleen een uur. Het bewaart spanning, temperatuur, ritme en een geschiedenis van gebruik. Daarom is deze pagina opgevat als een observatorium. Begin bij een getal, volg een wiel, vergelijk een verhouding of blijf even bij een beweging. Elke tool maakt een onzichtbare handeling zichtbaar voor oog en hand.`,
    },
    { type: "title", text: "Een bibliotheek om naar terug te keren", level: 2 },
    {
      type: "paragraph",
      html: `Dwaal zonder haast door de collectie en kom terug wanneer de vraag verandert. De gidsen helpen bij een aankoop, de rekenmachines testen een vermoeden en de visualisaties tonen wat gewoonlijk in de kast verborgen blijft. Samen vormen ze een open atlas van de horologie: exact wanneer het moet, gevoelig wanneer het object aandacht vraagt.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumenten", value: "25", icon: "mdi:tools" },
        { label: "Kalibers", value: "8+", icon: "mdi:engine" },
        { label: "Talen", value: "15", icon: "mdi:translate" },
        { label: "Gegevensprivacy", value: "Lokaal", icon: "mdi:shield-check" },
      ],
    },
  ],
};
