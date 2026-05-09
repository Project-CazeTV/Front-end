export default function gerarAbas(campeonato) {

  const abas = [];

  if (campeonato.tabela) {
    abas.push("Tabela");
  }

  if (campeonato.grupos) {
    abas.push("Grupos");
  }

  if (campeonato.proximosJogos?.length > 0) {
    abas.push("Próximos jogos");
  }

  if (campeonato.jogosPassados?.length > 0) {
    abas.push("Jogos passados");
  }

  if (campeonato.confrontos?.length > 0) {
    abas.push("Confrontos");
  }

  return abas;
}