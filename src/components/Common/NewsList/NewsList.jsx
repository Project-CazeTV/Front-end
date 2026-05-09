import styles from './NewsList.module.css';
import { TbClockHour9 } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function NewsList({ noticias = [], title, subtitle, onVerMais }) {
  if (!noticias.length) {
    return <p className={styles.empty}>Nenhuma notícia disponível.</p>;
  }

  return (
    <section className={styles.listContainer}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}

      {noticias.map((noticia) => (
        <article key={noticia.id} className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              onError={(e) => { e.target.src = '/placeholder-news.jpg'; }}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.tag} style={{ backgroundColor: noticia.tagColor }}>
              {noticia.categoria}
            </span>
            <h3 className={styles.newsTitle}>{noticia.titulo}</h3>
            {noticia.descricao && (
              <p className={styles.newsDescription}>{noticia.descricao}</p>
            )}
            <div className={styles.footer}>
              <button
                className={styles.verMais}
                onClick={() => onVerMais?.(noticia)}
              >
              Ver mais <FaRegArrowAltCircleRight size={16}/>
              </button>
              <span className={styles.tempo}>
                <TbClockHour9 size={19} /> {noticia.tempo}
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}