import styles from './MedalTable.module.css';
import { medalData } from '../../../../mocks/medalData';

export default function MedalTable() {
  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.title}>Quadro de Medalhas</h3>
      <div className={styles.responsiveWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.rankHeader}>Ordem</th>
              <th className={styles.countryHeader}>País</th>
              <th className={styles.medalHeader}><img src="/src/assets/Gold_medal.svg.png" alt="Ouro" className={styles.medalIcon} /></th>
              <th className={styles.medalHeader}><img src="/src/assets/Silver_medal.svg.png" alt="Prata" className={styles.medalIcon} /></th>
              <th className={styles.medalHeader}><img src="/src/assets/Bronze_medal.svg.webp" alt="Bronze" className={styles.medalIcon} /></th>
              <th className={styles.totalHeader}><img src="/src/assets/GoldSilverBronze_medals.svg.png" alt="Total" className={styles.medalIcon} /></th>
            </tr>
          </thead>
          <tbody>
            {medalData.map((item, index) => (
              <tr key={item.id} className={styles.row}>
                <td className={styles.rankCell}>{index + 1}</td>
                <td className={styles.countryCell}>
                  <img className={styles.flag} src={item.flag}/>
                  <span className={styles.countryName}>{item.country}</span>
                </td>
                <td className={`${styles.medalCell} ${styles.gold}`}>{item.gold}</td>
                <td className={`${styles.medalCell} ${styles.silver}`}>{item.silver}</td>
                <td className={`${styles.medalCell} ${styles.bronze}`}>{item.bronze}</td>
                <td className={styles.totalCell}>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}