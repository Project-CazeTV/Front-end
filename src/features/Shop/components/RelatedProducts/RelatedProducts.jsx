import { productsMock } from "../../../../mocks/products";
import ProductCard from "../ProductCard/ProductCard";
import cardStyles from "../ProductCard/ProductCard.module.css";
import styles from "./RelatedProducts.module.css";

export default function RelatedProducts({ currentId, addToCart }) {
    const related = productsMock.filter(p => p.id !== currentId).slice(0, 6);

    if (related.length === 0) return null;

    return (
        <section className={styles.section}>
            <p className={styles.sectionLabel}>Produtos relacionados</p>
            <div className={styles.grid}>
                {related.map(produto => (
                    <ProductCard
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        img={produto.img}
                        preco={produto.preco}
                        cores={produto.coresDisponiveis}
                        addToCart={addToCart}
                        className={cardStyles.cardFluid}
                    />
                ))}
            </div>
        </section>
    );
}