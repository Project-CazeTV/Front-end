import styles from './SectionTitle.module.css';

export default function SectionTitle({ title, color = "#3b5bdb", number, inline = false }) {
  if (inline) {
    return (
      <div className={styles.wrapperInline}>
        <h2 className={styles.tituloInline}>{title}</h2>
        <span
          className={styles.separadorLinhaInline}
          style={{ background: color }}
        />
        {number && (
          <span
            className={styles.separadorNumero}
            style={{ color }}
          >
            {number}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.separador}>
        <span
          className={styles.separadorLinha}
          style={{ background: color }}
        />
        {number && (
          <span
            className={styles.separadorNumero}
            style={{ color }}
          >
            {number}
          </span>
        )}
      </div>
      <h2 className={styles.titulo}>{title}</h2>
    </div>
  );
}