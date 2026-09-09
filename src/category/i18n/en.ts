import type { CategoryLocaleContent } from "../../types";

const slug = "horology";
const title = "Horology Tools & Reference Guides";
const description =
  "Horology tools for watch enthusiasts: check accuracy, demagnetize movements, calculate wear time and look up crown positions for popular calibers.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "A workbench for understanding time", level: 2 },
    {
      type: "paragraph",
      html: `Horology begins when a dial stops being an image and becomes a system you can read. This collection gathers instruments for observing rate, interpreting the rhythm of a movement, understanding the gesture of the crown, and making better-informed decisions. It is not a replacement for a watchmaker's bench; it turns specific everyday questions into small explorations, with clear results and an interface that leaves room for curiosity.`,
    },
    { type: "title", text: "Precision you can see", level: 2 },
    {
      type: "paragraph",
      html: `Check how far a watch gains or loses, translate a beat rate between VPH and Hz, and explore how wearing conditions can change the result. The accuracy tools are designed for comparison, repetition, and learning: every figure keeps its unit, every conversion keeps its meaning, and every result builds mechanical intuition. Accuracy stops being an abstraction and becomes a visible experience.`,
    },
    { type: "title", text: "References for the mechanical gesture", level: 2 },
    {
      type: "paragraph",
      html: `The crown, mainspring, crystal, lume, and gear train each tell a different story about the same object. Explore crown positions, follow a wheel train, compare materials, and visualise complications such as moon phase, perpetual calendar, and tourbillon. Everything runs in the browser and usage data stays on your device: a practical library for collecting, repairing, adjusting, and looking at watches with more attention.`,
    },
    { type: "title", text: "Time as material", level: 2 },
    {
      type: "paragraph",
      html: `A watch does not only display an hour. It holds tension, temperature, rhythm, and a history of use. That is why this page is shaped as an observatory. Enter through a figure, follow a wheel, compare a proportion, or stay with a movement for a while. Each tool turns an invisible operation into a scene understood by the eye and the hand.`,
    },
    { type: "title", text: "A library worth returning to", level: 2 },
    {
      type: "paragraph",
      html: `Move through the collection without rushing and come back when the question changes. The guides prepare a purchase, the calculators test an intuition, and the visualisers reveal what usually stays hidden inside the case. Together they form an open atlas of horology: exact when it needs to be, sensitive when the object asks to be seen.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instruments", value: "25", icon: "mdi:tools" },
        { label: "Calibers", value: "8+", icon: "mdi:engine" },
        { label: "Languages", value: "15", icon: "mdi:translate" },
        { label: "Data Privacy", value: "Local", icon: "mdi:shield-check" },
      ],
    },
  ],
};
