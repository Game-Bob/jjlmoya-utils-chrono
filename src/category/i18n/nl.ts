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
