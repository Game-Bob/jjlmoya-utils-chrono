import type { CategoryLocaleContent } from "../../types";

const slug = "horologia";
const title = "Narzędzia Horologiczne & Przewodniki Referencyjne";
const description =
  "Narzędzia zegarmistrzowskie dla pasjonatów: sprawdzaj dokładność, rozmagnesowuj mechanizmy, obliczaj czas noszenia i poznawaj pozycje koronki popularnych kalibrów.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Warsztat do rozumienia czasu", level: 2 },
    {
      type: "paragraph",
      html: `Zegarmistrzostwo zaczyna się wtedy, gdy tarcza przestaje być obrazem, a staje się systemem, który można odczytać. Ta kolekcja łączy instrumenty do obserwowania chodu, rozumienia rytmu mechanizmu, odczytywania ruchu koronki i podejmowania decyzji z większym kontekstem. Nie zastępuje stołu zegarmistrzowskiego: zamienia konkretne codzienne pytania w małe odkrycia, z czytelnymi wynikami i interfejsem pozostawiającym miejsce na ciekawość.`,
    },
    { type: "title", text: "Precyzja, którą można zobaczyć", level: 2 },
    {
      type: "paragraph",
      html: `Sprawdź, ile zegarek zyskuje lub traci, przelicz częstotliwość między VPH i Hz oraz zobacz, jak warunki noszenia mogą zmienić wynik. Narzędzia precyzyjne służą porównywaniu, powtarzaniu i nauce: każda liczba zachowuje jednostkę, każde przeliczenie znaczenie, a każdy wynik buduje mechaniczną intuicję. Dokładność przestaje być abstrakcją i staje się doświadczeniem, które można obserwować.`,
    },
    { type: "title", text: "Odniesienia dla mechanicznego gestu", level: 2 },
    {
      type: "paragraph",
      html: `Koronka, sprężyna napędowa, szkło, luminescencja i przekładnia opowiadają różne historie tego samego przedmiotu. Poznaj pozycje koronki, prześledź przekładnię kół, porównaj materiały i zobacz komplikacje takie jak faza księżyca, kalendarz wieczny czy tourbillon. Wszystko działa w przeglądarce, a dane użytkowania pozostają na urządzeniu: praktyczna biblioteka do kolekcjonowania, naprawiania, regulowania i uważnego oglądania zegarków.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumenty", value: "25", icon: "mdi:tools" },
        { label: "Kalibry", value: "8+", icon: "mdi:engine" },
        { label: "Języki", value: "15", icon: "mdi:translate" },
        {
          label: "Prywatność Danych",
          value: "Lokalnie",
          icon: "mdi:shield-check",
        },
      ],
    },
  ],
};
