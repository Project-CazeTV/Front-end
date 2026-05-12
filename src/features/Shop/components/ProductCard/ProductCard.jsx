import { truncateString } from "../../utils/ProductCardUtil";

import styles from "./ProductCard.module.css"

export default function ProductCard({ nome, img, preco, cores }) {
    return (
        <div className={styles.card}>
            <img src={img} alt={nome} />
            <h4>{truncateString(nome, 16)}</h4>
            <div className={styles.secaoPrecoCores}>
                <h4>R$ {preco.toFixed(2)}</h4>
                <div className={styles.secaoCores}>
                    {cores?.map((cor) => coresDisponiveis(cor))}
                </div>
            </div>
            <button className={styles.cardButton}>Adicionar ao carrinho</button>
        </div>
    );
}

function coresDisponiveis(cor) {
    return (
        <span
            style={{
                display: "inline-block",
                height: "15px",
                width: "15px",
                backgroundColor: cor,
                borderRadius: "50%"
            }}
        ></span>
    );
}