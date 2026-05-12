import styles from "./ProgressBar.module.css"

export default function ProgressBar({ current, total }) {

    const progress = (current / total) * 100;

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
    );
}