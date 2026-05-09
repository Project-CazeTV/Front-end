import styles from "./TabelaGrupo.module.css";

export default function TabelaGrupo({ grupo }) {

  return (
    <div className={styles.cardGrupo}>

      <h4 className={styles.tituloGrupo}>
        GRUPO {grupo.grupo}
      </h4>

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
            <th>SG</th>
          </tr>
        </thead>

        <tbody>
          {grupo.tabela.map((linha) => (
            <tr
              key={linha.pos}
              className={
                linha.pos <= 2
                  ? styles.linhaClassificada
                  : ""
              }
            >

              <td>{linha.pos}</td>

              <td className={styles.colunaTime}>
                <span className={styles.siglaCountry}>
                  {linha.pais}
                </span>

                {linha.time}
              </td>

              <td className={styles.pontos}>
                {linha.pts}
              </td>

              <td>{linha.j}</td>
              <td>{linha.v}</td>
              <td>{linha.e}</td>
              <td>{linha.d}</td>

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

    </div>
  );
}