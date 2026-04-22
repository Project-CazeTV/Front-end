import styles from './FilterSection.module.css';

export default function FilterSection({ titulo, filtros }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.tituloSecao}>{titulo}</h2>
      <div className={styles.scrollWrapper}>
        {filtros.map((filtro, index) => (
          <button key={index} className={styles.filtroBtn}>
            {filtro}
          </button>
        ))}
      </div>
    </section>
  );
}