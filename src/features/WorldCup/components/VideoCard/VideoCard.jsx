import styles from './VideoCard.module.css';

export default function VideoCard({ src, title, subtitle, flex=true }) {
    return (
        <div className={styles.container}> 
            <section className={styles.header} style={{ flexDirection: flex ? 'row' : 'column'}}>
                {title && <h2 className={styles.sectionTitle}>{title}</h2>}
                <div className={styles.line} />
                {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
            </section>
            <video className={styles.video} src={src} autoPlay loop controls />
            <div className={styles.bar}></div>
        </div>
    );
}