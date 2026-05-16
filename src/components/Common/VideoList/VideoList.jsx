import styles from './VideoList.module.css';
import VideoCard from '../VideoCard/VideoCard';

export default function VideoList({ videos, title }) {
    return (
        <section className={styles.section}>
            {title && (
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.line} />
                </div>
            )}
            <div className={styles.grid}>
                {videos.map((video, index) => (
                    <VideoCard
                        key={index}
                        videoId={video.id}
                        title={video.title}
                        category={video.category}
                    />
                ))}
            </div>
        </section>
    );
}