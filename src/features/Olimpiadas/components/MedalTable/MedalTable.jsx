import styles from './MedalTable.module.css';

export default function MedalTable({ edicao }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.titleBar} />
        <h2 className={styles.title}>QUADRO DE MEDALHAS</h2>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th className={styles.thOrdem}>Ordem</th>
              <th className={styles.thPais}>País</th>
              <th className={styles.thMedal}>
                <span className={`${styles.medalDot} ${styles.gold}`}>●</span>
              </th>
              <th className={styles.thMedal}>
                <span className={`${styles.medalDot} ${styles.silver}`}>●</span>
              </th>
              <th className={styles.thMedal}>
                <span className={`${styles.medalDot} ${styles.bronze}`}>●</span>
              </th>
              <th className={styles.thTotal}>Total</th>
            </tr>
          </thead>
          <tbody>
            {edicao.map((item, index) => (
              <tr key={item.id} className={styles.row}>
                <td className={styles.tdOrdem}>{index + 1}</td>
                <td className={styles.tdPais}>
                  <img className={styles.flag} src={item.flag} alt={item.country} />
                  <span className={styles.countryName}>{item.country}</span>
                </td>
                <td className={`${styles.tdMedal} ${styles.gold}`}>{item.gold}</td>
                <td className={`${styles.tdMedal} ${styles.silver}`}>{item.silver}</td>
                <td className={`${styles.tdMedal} ${styles.bronze}`}>{item.bronze}</td>
                <td className={styles.tdTotal}>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
}