import ordenarJogosPorData from "./ordenarJogosPorData";

export default function agruparJogosPorData(jogos) {

  return ordenarJogosPorData(jogos).reduce(
    (agrupado, jogo) => {

      if (!agrupado[jogo.data]) {
        agrupado[jogo.data] = [];
      }

      agrupado[jogo.data].push(jogo);

      return agrupado;

    },
    {}
  );
}