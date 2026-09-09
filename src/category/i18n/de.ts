import type { CategoryLocaleContent } from "../../types";

const slug = "horologie";
const title = "Uhrmacherwerkzeuge & Referenzführer";
const description =
  "Werkzeuge für Uhrenliebhaber: Ganggenauigkeit prüfen, Uhrwerke entmagnetisieren, Tragezeit berechnen und Kronenpositionen gängiger Kaliber nachschlagen.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Eine Werkbank zum Verstehen der Zeit", level: 2 },
    {
      type: "paragraph",
      html: `Uhrmacherei beginnt, wenn ein Zifferblatt nicht mehr nur Bild ist, sondern ein lesbares System wird. Diese Sammlung vereint Instrumente, mit denen Sie den Gang beobachten, den Rhythmus eines Uhrwerks verstehen, die Bewegung der Krone einordnen und Entscheidungen mit mehr Kontext treffen können. Sie ersetzt keine Werkbank: Sie verwandelt konkrete Alltagsfragen in kleine Erkundungen mit klaren Ergebnissen und einer Oberfläche, die der Neugier Raum lässt.`,
    },
    { type: "title", text: "Präzision, die sichtbar wird", level: 2 },
    {
      type: "paragraph",
      html: `Prüfen Sie, wie stark eine Uhr vor- oder nachgeht, rechnen Sie die Frequenz zwischen VPH und Hz um und erkunden Sie, wie sich die Bedingungen am Handgelenk auf das Ergebnis auswirken. Die Präzisionswerkzeuge sind zum Vergleichen, Wiederholen und Lernen gedacht: Jede Zahl behält ihre Einheit, jede Umrechnung ihre Bedeutung und jedes Ergebnis stärkt die mechanische Vorstellungskraft. Genauigkeit wird so von einer Abstraktion zu einer sichtbaren Erfahrung.`,
    },
    {
      type: "title",
      text: "Referenzen für die mechanische Bewegung",
      level: 2,
    },
    {
      type: "paragraph",
      html: `Krone, Zugfeder, Glas, Leuchtmasse und Räderwerk erzählen jeweils eine andere Geschichte desselben Gegenstands. Erkunden Sie Kronenpositionen, verfolgen Sie ein Räderwerk, vergleichen Sie Materialien und betrachten Sie Komplikationen wie Mondphase, ewigen Kalender oder Tourbillon. Alles läuft im Browser, Nutzungsdaten bleiben auf Ihrem Gerät: eine praktische Bibliothek zum Sammeln, Reparieren, Regulieren und aufmerksamen Betrachten von Uhren.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumente", value: "25", icon: "mdi:tools" },
        { label: "Kaliber", value: "8+", icon: "mdi:engine" },
        { label: "Sprachen", value: "15", icon: "mdi:translate" },
        { label: "Datenschutz", value: "Lokal", icon: "mdi:shield-check" },
      ],
    },
  ],
};
