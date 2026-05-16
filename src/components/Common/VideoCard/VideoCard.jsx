import styles from './VideoCard.module.css';
import { useState } from 'react';

export default function VideoCard({ videoId, title, category }) {
    
    const [playing, setPlaying] = useState(false);

    return (
        <div className={styles.videoCard}>
            <div className={styles.thumbnail} onClick={() => setPlaying(true)}>
                {playing ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={title}
                        allowFullScreen
                        allow="autoplay"
                        className={styles.iframe}
                    />
                ) : (
                    <>
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={title}
                            className={styles.thumbnailImg}
                        />
                    </>
                )}
            </div>
            <div className={styles.info}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </div>
    );
}