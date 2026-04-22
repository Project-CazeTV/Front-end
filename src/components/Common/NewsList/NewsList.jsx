import styles from './NewsList.module.css';

export default function NewsList({ noticias }) {
  return (
    <div className={styles.listContainer}>
      {noticias.map((noticia) => (
        <article key={noticia.id} className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <img src={noticia.imagem} alt={noticia.titulo} />
          </div>
          
          <div className={styles.content}>
            <span className={styles.tag} style={{ backgroundColor: noticia.tagColor }}>
              {noticia.categoria}
            </span>
            <h3 className={styles.newsTitle}>{noticia.titulo}</h3>
            <div className={styles.footer}>
              <button className={styles.verMais}>
                Ver mais <span className="material-symbols-outlined">arrow_circle_right</span>
              </button>
              <span className={styles.tempo}>
                <span className="material-symbols-outlined">schedule</span> {noticia.tempo}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}