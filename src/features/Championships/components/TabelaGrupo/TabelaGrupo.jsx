import styles from "./TabelaGrupo.module.css";

export default function TabelaGrupo({ grupo, cor = "#F5C518" }) {
  return (
    <div className={styles.cardGrupo}>

      <div className={styles.cabecalho} style={{ borderColor: cor }}>
        <span className={styles.label}>GRUPO</span>
        <span className={styles.letraGrupo} style={{ color: cor }}>
          {grupo.grupo}
        </span>
      </div>

      <div className={styles.corpo}>
        <div className={styles.headerLinha}>
          <span className={styles.headerPos}>#</span>
          <span className={styles.headerTime}>Time</span>
          <span className={styles.headerStat}>P</span>
          <span className={styles.headerStat}>J</span>
          <span className={styles.headerStat}>V</span>
          <span className={styles.headerStat}>E</span>
          <span className={styles.headerStat}>D</span>
          <span className={styles.headerStat}>SG</span>
        </div>

        {grupo.tabela.map((linha) => {
          const classificado = linha.pos <= 2;
          return (
            <div
              key={linha.pos}
              className={`${styles.linha} ${classificado ? styles.linhaClassificada : ""}`}
            >
              {classificado && (
                <span
                  className={styles.indicador}
                  style={{ background: cor }}
                />
              )}

              <span className={styles.pos}>{linha.pos}</span>

              <span className={styles.time}>
                <span className={styles.pais}>{linha.pais}</span>
                <span className={styles.nomeTime}>{linha.time}</span>
              </span>

              <span className={`${styles.stat} ${styles.pontos}`}>
                {linha.pts}
              </span>
              <span className={styles.stat}>{linha.j}</span>
              <span className={styles.stat}>{linha.v}</span>
              <span className={styles.stat}>{linha.e}</span>
              <span className={styles.stat}>{linha.d}</span>
              <span className={`${styles.stat} ${
                linha.sg > 0 ? styles.saldoPos : linha.sg < 0 ? styles.saldoNeg : ""
              }`}>
                {linha.sg > 0 ? `+${linha.sg}` : linha.sg}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}