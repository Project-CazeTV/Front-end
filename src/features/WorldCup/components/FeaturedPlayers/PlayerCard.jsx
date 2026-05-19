export default function PlayerCard({ player, styles }) {
  return (
    <div className={styles.playerCard}>
      <img
        src={player.imagem}
        alt={player.nome}
        className={styles.playerPhoto}
      />
      <div className={styles.playerOverlay}>
        <span className={styles.playerPosition}>{player.posicao}</span>
        <strong className={styles.playerName}>{player.nome}</strong>
        <span className={styles.playerCountry}>{player.pais} · {player.clube}</span>
      </div>
    </div>
  )
}