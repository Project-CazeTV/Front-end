import { useCountdown } from '../../../../hooks/Countdown/useCountdown';
import styles from './CountdownCard.module.css';
import logoFifa from '../../../../assets/logo-copa.png';
import logoCbf from '../../../../assets/logo-cbf.png';
import bgDetails from '../../../../assets/detalhes.png';

export default function CountdownCard() {
  const timeLeft = useCountdown();

  return (
    <div className={styles.countdownWrapper}>
      <img src={bgDetails} alt="Detalhes visuais" className={styles.bgDetails} />
      
      <div className={styles.content}>
        <div className={styles.headerLogos}>
          <img src={logoFifa} alt="FIFA World Cup 26" className={styles.logoFifa} />
          <div className={styles.divider} />
          <img src={logoCbf} alt="CBF" className={styles.logoCbf} />
        </div>

        <p className={styles.titleText}>COPA DO MUNDO É NA CAZÉ TV.</p>

        <div className={styles.countdownGrid}>
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className={styles.timeBlock}>
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}