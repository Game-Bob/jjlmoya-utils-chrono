import type { CategoryLocaleContent } from "../../types";

const slug = "orologeria";
const title = "Strumenti di Orologeria e Guide di Riferimento";
const description =
  "Strumenti di orologeria per appassionati: controlla la precisione, smagnetizza i movimenti, calcola il tempo al polso e consulta le posizioni della corona dei calibri più diffusi.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Un banco di lavoro per capire il tempo", level: 2 },
    {
      type: "paragraph",
      html: `L’orologeria comincia quando il quadrante smette di essere un’immagine e diventa un sistema da leggere. Questa raccolta riunisce strumenti per osservare la marcia, interpretare il ritmo di un movimento, capire il gesto della corona e prendere decisioni con più contesto. Non sostituisce il banco di un orologiaio: trasforma le domande concrete di ogni giorno in piccole esplorazioni, con risultati chiari e un’interfaccia che lascia spazio alla curiosità.`,
    },
    { type: "title", text: "Una precisione che si può guardare", level: 2 },
    {
      type: "paragraph",
      html: `Controlla quanto un orologio anticipa o ritarda, converti la frequenza tra VPH e Hz e osserva come le condizioni d’uso possano cambiare il risultato. Gli strumenti di precisione sono pensati per confrontare, ripetere e imparare: ogni numero conserva la propria unità, ogni conversione il proprio significato e ogni risultato costruisce intuizione meccanica. L’accuratezza smette così di essere un’astrazione e diventa un’esperienza visibile.`,
    },
    { type: "title", text: "Riferimenti per il gesto meccanico", level: 2 },
    {
      type: "paragraph",
      html: `Corona, molla reale, vetro, lume e treno degli ingranaggi raccontano storie diverse dello stesso oggetto. Consulta le posizioni della corona, segui una trasmissione di ruote, confronta i materiali ed esplora complicazioni come fase lunare, calendario perpetuo e tourbillon. Tutto funziona nel browser e i dati d’uso restano sul tuo dispositivo: una biblioteca pratica per collezionare, riparare, regolare e osservare gli orologi con maggiore attenzione.`,
    },
    {
      type: "stats",
      items: [
        { label: "Strumenti", value: "25", icon: "mdi:tools" },
        { label: "Calibri", value: "8+", icon: "mdi:engine" },
        { label: "Lingue", value: "15", icon: "mdi:translate" },
        { label: "Privacy", value: "Locale", icon: "mdi:shield-check" },
      ],
    },
  ],
};
