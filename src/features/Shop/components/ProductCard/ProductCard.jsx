import { truncateString } from "../../utils/ProductCardUtil";

import styles from "./ProductCard.module.css";

import { useNavigate } from "react-router-dom";

export default function ProductCard({id,nome,img,preco,cores,addToCart,}) {

  const navigate = useNavigate();

  function handleVerProduto() {
    navigate(`/shop/produto/${id}`, { state: { id, nome, img, preco, coresDisponiveis: cores } });
  }

  return (
    <div className={styles.card} onClick={handleVerProduto}>
      <div className={styles.imgContainer} >
        <img src={img} alt={nome} />
      </div>

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
        onClick={(e) => {
          e.stopPropagation();
          addToCart({
            id,
            name: nome,
            img,
            price: preco,
            color: cores?.[0],
          })
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}