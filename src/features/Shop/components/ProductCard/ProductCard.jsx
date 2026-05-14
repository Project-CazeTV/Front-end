import { truncateString } from "../../utils/ProductCardUtil";

import styles from "./ProductCard.module.css";

export default function ProductCard({id,nome,img,preco,cores,addToCart,}) {
  return (
    <div className={styles.card}>
      <img src={img} alt={nome} />

      <h4>{truncateString(nome, 16)}</h4>

      <div className={styles.secaoPrecoCores}>
        <h4>R$ {preco.toFixed(2)}</h4>

        <div className={styles.secaoCores}>
          {cores?.map((cor) => (
            <span
              key={cor}
              style={{
                display: "inline-block",
                height: "15px",
                width: "15px",
                backgroundColor: cor,
                borderRadius: "50%",
              }}
            ></span>
          ))}
        </div>
      </div>

      <button
        className={styles.cardButton}
        onClick={() =>
          addToCart({
            id,
            name: nome,
            img,
            price: preco,
            color: cores?.[0],
          })
        }
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}