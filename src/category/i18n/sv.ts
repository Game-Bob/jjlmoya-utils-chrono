import type { CategoryLocaleContent } from "../../types";

const slug = "horologi";
const title = "Horologiverktyg & Referensguider";
const description =
  "Professionella horologiverktyg för klockentusiaster-åra noggrannhet, avmagnetisera urverk, beräkna handledsnärvaro och utforska kronpositioner för populära kalibrar.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "En arbetsbänk för att förstå tid", level: 2 },
    {
      type: "paragraph",
      html: `Urmakeri börjar när en urtavla slutar vara en bild och blir ett system som går att läsa. Den här samlingen förenar instrument för att observera gången, förstå ett verks rytm, läsa kronans rörelse och fatta beslut med mer sammanhang. Den ersätter inte urmakarens arbetsbänk: den gör konkreta vardagsfrågor till små upptäckter, med tydliga resultat och ett gränssnitt som lämnar plats för nyfikenhet.`,
    },
    { type: "title", text: "Precision som går att se", level: 2 },
    {
      type: "paragraph",
      html: `Kontrollera hur mycket en klocka går före eller efter, omvandla en frekvens mellan VPH och Hz och utforska hur bärförhållanden kan påverka resultatet. Precisionsverktygen är gjorda för att jämföra, upprepa och lära: varje siffra behåller sin enhet, varje omvandling sin betydelse och varje resultat bygger mekanisk intuition. Noggrannhet blir på så sätt en synlig upplevelse i stället för en abstraktion.`,
    },
    { type: "title", text: "Referenser för den mekaniska rörelsen", level: 2 },
    {
      type: "paragraph",
      html: `Kronan, drivfjädern, glaset, lysmassan och kugghjulståget berättar olika historier om samma föremål. Utforska kronpositioner, följ ett kugghjulståg, jämför material och se komplikationer som månfas, evighetskalender och tourbillon. Allt körs i webbläsaren och användningsdata stannar på din enhet: ett praktiskt bibliotek för att samla, reparera, reglera och se på klockor med större uppmärksamhet.`,
    },
    { type: "title", text: "Tid som material", level: 2 },
    {
      type: "paragraph",
      html: `En klocka visar inte bara en timme. Den bär på spänning, temperatur, rytm och en historia av användning. Därför är sidan formad som ett observatorium. Börja med en siffra, följ ett hjul, jämför en proportion eller stanna en stund vid en rörelse. Varje verktyg gör en osynlig operation synlig för öga och hand.`,
    },
    { type: "title", text: "Ett bibliotek att återvända till", level: 2 },
    {
      type: "paragraph",
      html: `Rör dig genom samlingen utan brådska och återvänd när frågan förändras. Guiderna förbereder ett köp, räknarna prövar en intuition och visualiseringarna visar det som annars göms i boetten. Tillsammans bildar de en öppen atlas över urmakeri: exakt när det behövs, känslig när objektet vill betraktas.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrument", value: "25", icon: "mdi:tools" },
        { label: "Kalibrar", value: "8+", icon: "mdi:engine" },
        { label: "Språk", value: "15", icon: "mdi:translate" },
        { label: "Dataintegritet", value: "Lokalt", icon: "mdi:shield-check" },
      ],
    },
  ],
};
