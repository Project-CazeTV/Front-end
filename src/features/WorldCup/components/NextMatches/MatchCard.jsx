import styles from "./NextMatches.module.css";

export default function MatchCard({ jogo }) {
    return (
        <div className={styles.matchCard}>
            <div className={styles.teamSide}>
                {jogo.flagA ? (
                    <img
                        src={jogo.flagA}
                        alt={jogo.timeA}
                        className={`${styles.flag} ${pendente ? styles.flagPendente : ""}`}
                    />
                ) : (
                    <div className={`${styles.flagPlaceholder} ${pendente ? styles.flagPendente : ""}`} />
                )}
                <span className={`${styles.teamName} ${pendente ? styles.teamNamePendente : ""}`}>
                    {pendente ? "A definir" : jogo.timeA}
                </span>
            </div>

            <div className={styles.matchInfo}>
                <span className={styles.time}>{jogo.hora} em Brasília</span>
                {jogo.placarA !== null ? (
                    <strong className={styles.score}>
                        {jogo.placarA} x {jogo.placarB}
                    </strong>
                ) : (
                    <span className={styles.vs}>x</span>
                )}
                <span className={styles.stadium}>{jogo.estadio}</span>
                <span className={styles.location}>{jogo.local}</span>
            </div>

            <div className={`${styles.teamSide} ${styles.teamRight}`}>
                {jogo.flagB ? (
                    <img
                        src={jogo.flagB}
                        alt={jogo.timeB}
                        className={`${styles.flag} ${pendente ? styles.flagPendente : ""}`}
                    />
                ) : (
                    <div className={`${styles.flagPlaceholder} ${pendente ? styles.flagPendente : ""}`} />
                )}
                <span className={`${styles.teamName} ${pendente ? styles.teamNamePendente : ""}`}>
                    {pendente ? "A definir" : jogo.timeB}
                </span>
            </div>
        </div>
    )
}
