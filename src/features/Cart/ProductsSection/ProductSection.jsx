import styles from "./ProductSection.module.css"
import CartProduct from "../CartProduct/CartProduct"

export default function ProductSection({produtos}) {
    return (
        <div className={styles.carrinho}>
            <div className={styles.cabecalhoCarrinho}>
                <p>Info produtos</p>
                <p>Preço final</p>
            </div>
            {produtos.map(produto => (
                <CartProduct 
                    key={produto.id}
                    produto={produto}
                />
            ))}
        </div>
    );
}