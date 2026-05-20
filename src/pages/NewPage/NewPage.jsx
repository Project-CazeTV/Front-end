import styles from './NewPage.module.css';

export default function NewPage({title, src, subtitle, description, date, category}) {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.title}>{title}</h1>
            <img src={src} alt={title} />
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <p className={styles.description}>{description}</p>
            <small className={styles.date}>{date}</small>
            <span className={`${styles.category} ${styles.tag}`} style={{ backgroundColor: category.tagColor }}>
                {category.categoria}
            </span>
        </div>
    );
}