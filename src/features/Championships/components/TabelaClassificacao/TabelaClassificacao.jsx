import styles from "./TabelaClassificacao.module.css";
import corDaZona from "../../utils/corDaZona";

export default function TabelaClassificacao({tabela , mostrarLegenda = true}) {

  return (
    <div className={styles.tabelaWrapper}>

      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>#</th>
            <th className={styles.colunaTime}>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
          </tr>
        </thead>

        <tbody>
          {tabela.map((linha) => (
            <tr key={linha.pos}>

              <td>
                <div className={styles.posicao}>
                  <span
                    className={styles.indicadorZona}
                    style={{
                      backgroundColor:
                        corDaZona(linha.zona),
                    }}
                  />

                  {linha.pos}
                </div>
              </td>

              <td className={styles.colunaTime}>
                {linha.time}
              </td>

              <td className={styles.pontos}>
                {linha.pts}
              </td>

              <td>{linha.j}</td>
              <td>{linha.v}</td>
              <td>{linha.e}</td>
              <td>{linha.d}</td>
              <td>{linha.gp}</td>
              <td>{linha.gc}</td>

              <td
                className={
                  linha.sg > 0
                    ? styles.saldoPositivo
                    : linha.sg < 0
                    ? styles.saldoNegativo
                    : ""
                }
              >
                {linha.sg > 0
                  ? `+${linha.sg}`
                  : linha.sg}
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.legendaTabela} style={mostrarLegenda ? {display:'block'} : {display:'none'}}>
        <span>
          <span className={styles.ponto} style={{ background: "#3b5bdb" }}/>Libertadores</span>
        <span>
          <span
            className={styles.ponto}
            style={{ background: "#74b816" }}
          />
          Pré-Libertadores
        </span>

        <span>
          <span
            className={styles.ponto}
            style={{ background: "#f59f00" }}
          />
          Sul-Americana
        </span>

        <span>
          <span
            className={styles.ponto}
            style={{ background: "#fa5252" }}
          />
          Rebaixamento
        </span>
      </div>

    </div>
  );
}