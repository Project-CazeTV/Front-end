import styles from './News.module.css';
import { TbClockHour9 } from "react-icons/tb";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function News({id, imagem, titulo, categoria, tempo, descricao, tagColor, onVerMais}) {

    return (
        <article key={id} className={styles.newsCard}>
            <div className={styles.imageWrapper}>
                <img
                    src={imagem}
                    alt={titulo}
                />
            </div>

            <div className={styles.content}>
                <span className={styles.tag} style={{ backgroundColor: tagColor }}>
                    {categoria}
                </span>
                <h3 className={styles.newsTitle}>{titulo}</h3>
                {descricao && (
                    <p className={styles.newsDescription}>{descricao}</p>
                )}
                <div className={styles.footer}>
                    <button
                        className={styles.verMais}
                        onClick={() => onVerMais?.("Ver mais: " + titulo)}
                    >
                        Ver mais <FaRegArrowAltCircleRight size={16} />
                    </button>
                    <span className={styles.tempo}>
                        <TbClockHour9 size={19} /> {tempo}
                    </span>
                </div>
            </div>
        </article>
    )
}