import styles from "./CardPartida.module.css";
import LogoTime from "../LogoTime/LogoTime";
import { logosTime } from "../../../../mocks/logosTime";

export default function CardPartida({ jogo, pendente }) {

  const temPlacar = jogo.placarA !== null && jogo.placarA !== undefined;

  const urlLogoTimeA = jogo.flagA || jogo.escudoA || logosTime[jogo.timeA];
  const urlLogoTimeB = jogo.flagB || jogo.escudoB || logosTime[jogo.timeB];

  return (
    <div className={styles.cardPartida}>

      <div className={styles.ladoTime}>
        <LogoTime
          url={urlLogoTimeA}
          nomeTime={jogo.timeA}
          pendente={pendente}
        />
        <span className={`${styles.nomeTime} ${pendente ? styles.nomeTimePendente : ""}`}>
          {pendente ? "A definir" : jogo.timeA}
        </span>
      </div>

      <div className={styles.infoPartida}>
        {jogo.hora && (
          <span className={styles.horario}>{jogo.hora} em Brasília</span>
        )}
        {jogo.fase && (
          <span className={styles.fasePartida}>{jogo.fase}</span>
        )}
        {temPlacar ? (
          <strong className={styles.placar}>
            {jogo.placarA} x {jogo.placarB}
          </strong>
        ) : (
          <span className={styles.versus}>x</span>
        )}
        {jogo.estadio && (
          <span className={styles.estadio}>{jogo.estadio}</span>
        )}
        {jogo.local && (
          <span className={styles.localJogo}>{jogo.local}</span>
        )}
      </div>

      <div className={`${styles.ladoTime} ${styles.ladoDireito}`}>
        <LogoTime
          url={urlLogoTimeB}
          nomeTime={jogo.timeB}
          pendente={pendente}
        />
        <span className={`${styles.nomeTime} ${pendente ? styles.nomeTimePendente : ""}`}>
          {pendente ? "A definir" : jogo.timeB}
        </span>
      </div>

    </div>
  );
}