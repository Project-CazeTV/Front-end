import styles from "./ProductSection.module.css"
import CartProduct from "../CartProduct/CartProduct"

export default function ProductSection({produtos}) {
    return (
        <div className={styles.carrinho}>
            {produtos.map(produto => (
                <CartProduct 
                    key={produto.id}
                    produto={produto}
                />
            ))}
        </div>
    );
}