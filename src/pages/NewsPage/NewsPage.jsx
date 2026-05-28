import { useLocation } from 'react-router-dom';
import styles from './NewsPage.module.css';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';
import MainHeader from '../../components/Layout/MainHeader/MainHeader';
import { useEffect } from 'react';
import useScrollTop from '../../hooks/useScrollTop/useScrollTop';
import { TbClockHour9 } from "react-icons/tb";
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter';

export default function NewsPage() {

    const { state } = useLocation();
    const { titulo, imagem, descricao, tempo, corpo, categoria, tagColor } = state || {};

    useScrollTop();

    return (
        <>
        <ColoredHeader />
        <MainHeader />
        <div className={styles.pageContainer}>
            <span className={`${styles.category} ${styles.tag}`} style={{ backgroundColor: tagColor }}>{categoria}</span>
            <small className={styles.date}><TbClockHour9 size={19} /> {tempo}</small>
            <h1 className={styles.title}>{titulo}</h1>
            <img src={imagem} alt={titulo} />
            <p className={styles.description}>{descricao}</p>
            <div className={styles.body}>{corpo?.split('\n\n').map((paragrafo, index) => (<p key={index}>{paragrafo}</p>))}</div>
        </div>
        <CommonFooter />
        </>
    );
}