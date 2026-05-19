export default function PlayerCard({ player, styles, logoTeam, showGoals = false }) {
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
        <span className={styles.playerCountry}>{player.pais} {logoTeam ? <img className={styles.teamLogo} src={logoTeam} alt={player.clube} /> : <span> · {player.clube}</span>}</span>
        {showGoals && (
          <span className={styles.playerGoals}>{player.gols}</span>
        )}
      </div>
    </div>
  )
}