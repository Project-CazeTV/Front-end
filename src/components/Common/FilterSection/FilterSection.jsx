import styles from './FilterSection.module.css';

export default function FilterSection({ titulo, filtros, filtroAtivo, setFiltroAtivo }) {
  return (
    <section className={styles.container}>
      {titulo && <h2 className={styles.tituloSecao}>{titulo}</h2>}
      <div className={styles.scrollWrapper}>
        {filtros.map((filtro, index) => (
          <button 
            key={index} 
            className={`${styles.filtroBtn} ${filtroAtivo === filtro ? styles.filtroBtnActive : ''}`}
            onClick={() => setFiltroAtivo && setFiltroAtivo(filtro)}
          >
            {filtro}
          </button>
        ))}
      </div>
    </section>
  );
}