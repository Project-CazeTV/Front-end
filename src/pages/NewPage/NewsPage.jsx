import { useLocation } from 'react-router-dom';
import styles from './NewsPage.module.css';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';
import MainHeader from '../../components/Layout/MainHeader/MainHeader';


export default function NewsPage() {

    const { state } = useLocation();
    const { titulo, imagem, descricao, tempo, corpo, categoria, tagColor } = state || {};

    return (
        <>
            <ColoredHeader />
            <MainHeader />
            <div className={styles.pageContainer}>
            <span className={`${styles.category} ${styles.tag}`} style={{ backgroundColor: tagColor }}>
                {categoria}
            </span>
            <small className={styles.date}>{tempo}</small>
            <h1 className={styles.title}>{titulo}</h1>
            <img src={imagem} alt={titulo} />
            <p className={styles.description}>{descricao}</p>
            <p className={styles.body}>{corpo}</p>
        </div>
        </>
    );
}