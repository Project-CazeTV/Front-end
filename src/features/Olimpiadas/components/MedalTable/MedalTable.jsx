import styles from './MedalTable.module.css';
import { medalData } from '../../../../mocks/medalData';

export default function MedalTable() {
  return (
    <div className={styles.tableContainer}>
      <h3 className={styles.title}>Quadro de Medalhas</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ordem</th>
            <th>País</th>
            <th><span className={styles.goldDot}></span></th>
            <th><span className={styles.silverDot}></span></th>
            <th><span className={styles.bronzeDot}></span></th>
            <th>Total</th>
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