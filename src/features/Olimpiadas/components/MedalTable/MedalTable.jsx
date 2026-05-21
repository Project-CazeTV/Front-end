import { useState } from 'react';
import styles from './MedalTable.module.css';

const ROWS_PER_PAGE = 10;

export default function MedalTable({ edicao }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(edicao.length / ROWS_PER_PAGE);
  const pageStart = (currentPage - 1) * ROWS_PER_PAGE;
  const visibleRows = edicao.slice(pageStart, pageStart + ROWS_PER_PAGE);

  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <h2 className={styles.title}>Quadro de Medalhas</h2>
        <div className={styles.line} />
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headRow}>
              <th className={styles.thRank}>#</th>
              <th className={styles.thCountry}>País</th>
              <th className={styles.thMedal}><span className={`${styles.dot} ${styles.gold}`}>●</span></th>
              <th className={styles.thMedal}><span className={`${styles.dot} ${styles.silver}`}>●</span></th>
              <th className={styles.thMedal}><span className={`${styles.dot} ${styles.bronze}`}>●</span></th>
              <th className={styles.thTotal}>Total</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((item, index) => {
              const rank = pageStart + index + 1;
              return (
                <tr key={item.id} className={styles.row}>
                  <td className={styles.tdRank}>{rank}</td>
                  <td className={styles.tdCountry}>
                    <img className={styles.flag} src={item.flag} alt={item.country} />
                    <span>{item.country}</span>
                  </td>
                  <td className={`${styles.tdMedal} ${styles.gold}`}>{item.gold}</td>
                  <td className={`${styles.tdMedal} ${styles.silver}`}>{item.silver}</td>
                  <td className={`${styles.tdMedal} ${styles.bronze}`}>{item.bronze}</td>
                  <td className={styles.tdTotal}>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`${styles.pageBtn} ${page === currentPage ? styles.active : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}

    </section>
  );
}