import styles from './MedalTable.module.css';
import { medalData } from '../../../../mocks/medalData';

export default function MedalTable() {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.title}>Quadro de Medalhas</h3>
      <table className={styles.table}>
        <thead>
          <tr>
              <th className={styles.rankHeader}>Ordem</th>
              <th className={styles.countryHeader}>País</th>
              <th><img src="../../../../assets/Gold_medal.svg.png" alt="Ouro" className={styles.medalIcon} /></th>
              <th><img src="../../../../assets/Silver_medal.svg.png"alt="Prata" className={styles.medalIcon} /></th>
              <th><img src="../../../../assets/Bronze_medal.svg.png" alt="Bronze" className={styles.medalIcon} /></th>
              <th><img src="../../../../assets/GoldSilverBronze_medals.svg.png" alt="Total" className={styles.medalIcon} /></th>
            </tr>
        </thead>
        <tbody>
          {medalData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className={styles.countryCell}>
                <span className={styles.flag}>{item.flag}</span>
                {item.country}
              </td>
              <td>{item.gold}</td>
              <td>{item.silver}</td>
              <td>{item.bronze}</td>
              <td className={styles.total}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}