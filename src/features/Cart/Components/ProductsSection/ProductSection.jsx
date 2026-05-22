import styles from "./ProductSection.module.css";
import CartProduct from "../CartProduct/CartProduct";

export default function ProductSection({ produtos, onAumentar, onDiminuir, onRemover }) {
    if (produtos.length === 0) {
        return (
            <div className={styles.empty}>
                <span className={styles.emptyIcon}>🛒</span>
                <p className={styles.emptyText}>Seu carrinho está vazio</p>
            </div>
        );
    }

    return (
        <section className={styles.section}>
            <p className={styles.sectionLabel}>Produtos</p>
            <div className={styles.list}>
                {produtos.map(produto => (
                    <CartProduct
                        key={produto.id}
                        produto={produto}
                        onAumentar={onAumentar}
                        onDiminuir={onDiminuir}
                        onRemover={onRemover}
                    />
                ))}
            </div>
        </section>
    );
}