import styles from './HeroBanner.module.css'
import ImagemHero from '../../../../assets/historia/historia2.png' 
import CommonFooter from '../../../../components/Layout/CommonFooter/CommonFooter';

export default function HeroBanner() {
  
  return (
    <div className={styles.HeroBanner}>
        <img src={ImagemHero} alt="historia-cazé-tv"></img>
        <h1 className={styles.HeroTitle}>Casimiro Miguel, o streamer fundador da CazéTV</h1>
    </div>
  );
}