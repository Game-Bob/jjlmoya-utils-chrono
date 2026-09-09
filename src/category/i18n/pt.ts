import type { CategoryLocaleContent } from "../../types";

const slug = "relojoaria";
const title = "Ferramentas de Relojoaria & Guias de Referência";
const description =
  "Ferramentas de relojoaria para entusiastas: verifique a precisão, desmagnetize movimentos, calcule o tempo no pulso e consulte posições da coroa de calibres populares.";

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: "title", text: "Uma bancada para compreender o tempo", level: 2 },
    {
      type: "paragraph",
      html: `A relojoaria começa quando o mostrador deixa de ser uma imagem e passa a ser um sistema que podemos ler. Esta coleção reúne instrumentos para observar a marcha, interpretar o ritmo de um movimento, compreender o gesto da coroa e decidir com mais contexto. Não substitui a bancada de um relojoeiro: transforma perguntas concretas do dia a dia em pequenas explorações, com resultados claros e uma interface que deixa espaço para a curiosidade.`,
    },
    { type: "title", text: "Precisão que se pode observar", level: 2 },
    {
      type: "paragraph",
      html: `Veja quanto um relógio adianta ou atrasa, converta uma frequência entre VPH e Hz e explore como as condições no pulso podem alterar o resultado. As ferramentas de precisão foram pensadas para comparar, repetir e aprender: cada número mantém a sua unidade, cada conversão conserva o seu significado e cada resultado constrói uma intuição mecânica. A precisão deixa de ser uma abstração e torna-se uma experiência visível.`,
    },
    { type: "title", text: "Referências para o gesto mecânico", level: 2 },
    {
      type: "paragraph",
      html: `A coroa, a mola real, o vidro, o lume e o trem de engrenagens contam histórias diferentes do mesmo objeto. Consulte posições da coroa, siga um trem de rodas, compare materiais e explore complicações como fase lunar, calendário perpétuo e turbilhão. Tudo funciona no navegador e os dados de utilização ficam no seu dispositivo: uma biblioteca prática para colecionar, reparar, regular e olhar para os relógios com mais atenção.`,
    },
    {
      type: "stats",
      items: [
        { label: "Instrumentos", value: "25", icon: "mdi:tools" },
        { label: "Calibres", value: "8+", icon: "mdi:engine" },
        { label: "Idiomas", value: "15", icon: "mdi:translate" },
        {
          label: "Privacidade de Dados",
          value: "Local",
          icon: "mdi:shield-check",
        },
      ],
    },
  ],
};
