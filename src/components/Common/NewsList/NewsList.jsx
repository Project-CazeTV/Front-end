import styles from './NewsList.module.css';
import News from '../News/News';

export default function NewsList({ noticias = [], flex = true, title, subtitle }) {
  if (!noticias.length) {
    return <p className={styles.empty}>Nenhuma notícia disponível.</p>;
  }
  

  return (
    <section className={styles.listContainer}>
      <section className={styles.header} style={{ flexDirection: flex ? 'row' : 'column' }}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        <div className={styles.line} />
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      </section>

      {noticias.map((noticia) => (
        <News
          key={noticia.id}
          id={noticia.id}
          titulo={noticia.titulo}
          descricao={noticia.descricao}
          imagem={noticia.imagem}
          tempo={noticia.tempo}
          corpo={noticia.corpo}
          categoria={noticia.categoria}
          tagColor={noticia.tagColor}        
          />
      ))}
    </section>
  );
}