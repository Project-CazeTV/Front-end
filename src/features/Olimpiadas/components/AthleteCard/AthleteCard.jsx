export default function AthleteCard({ athlete, styles }) {
  const medalIcons = {
    gold: "🥇",
    silver: "🥈",
    bronze: "🥉",
  };

  return (
    <div className={styles.athleteCard}>
      <img
        src={athlete.image}
        alt={athlete.name}
        className={styles.athletePhoto}
      />
      <div className={styles.athleteOverlay}>
        <span className={styles.athleteModality}>{athlete.modality}</span>
        <strong className={styles.athleteName}>{athlete.name}</strong>
        <div className={styles.athleteMedals}>
          {athlete.medals.map((medal, idx) => (
            <span key={idx} className={styles.medalBadge}>
              {medalIcons[medal]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}