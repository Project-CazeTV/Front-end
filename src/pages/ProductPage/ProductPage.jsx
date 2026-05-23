import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import RelatedProducts from "../../features/Shop/components/RelatedProducts/RelatedProducts";
import styles from "./ProductPage.module.css";

import { FaArrowLeftLong } from "react-icons/fa6";

export default function ProductPage() {
    const { state: produto } = useLocation();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(1);

    if (!produto) {
        navigate("/shop");
        return null;
    }

    const nome  = produto.nome  ?? produto.name;
    const preco = produto.preco ?? produto.price;

    function aumentar() { setAmount(prev => prev + 1); }
    function diminuir() { setAmount(prev => (prev > 1 ? prev - 1 : 1)); }

    function addToCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const exists = cart.find(item => item.id === produto.id);

        const itemCart = {
            id: produto.id,
            name: nome,
            price: preco,
            img: produto.img,
            amount,
        };

        if (exists) {
            const updated = cart.map(item =>
                item.id === produto.id
                    ? { ...item, amount: item.amount + amount }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(updated));
        } else {
            localStorage.setItem("cart", JSON.stringify([...cart, itemCart]));
        }

        navigate("/shop")
    }

    return (
        <div className={styles.page}>
            <ColoredHeader />
            <MainHeader />

            <div className={styles.topBar}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}><FaArrowLeftLong /></button>
                <span className={styles.topBarTitle}>Produto</span>
            </div>

            <div className={styles.content}>
                <div className={styles.imgWrapper}>
                    <img src={produto.img} alt={nome} className={styles.img} />
                </div>

                <div className={styles.info}>
                    <p className={styles.name}>{nome}</p>

                    <div className={styles.priceRow}>
                        <span className={styles.price}>R$ {preco.toFixed(2)}</span>
                        <span className={styles.pricePer}>/ unidade</span>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.qtySection}>
                        <span className={styles.qtyLabel}>Quantidade</span>
                        <div className={styles.qtyRow}>
                            <button className={styles.btnMinus} onClick={diminuir}>−</button>
                            <span className={styles.qtyVal}>{amount}</span>
                            <button className={styles.btnPlus} onClick={aumentar}>+</button>
                        </div>
                    </div>

                    <div className={styles.totalRow}>
                        <span className={styles.totalLabel}>Total</span>
                        <span className={styles.totalValue}>
                            R$ {(preco * amount).toFixed(2)}
                        </span>
                    </div>

                    <button
                        className={styles.btnCart}
                        onClick={addToCart}
                    >
                        Adicionar ao carrinho
                    </button>
                </div>

                <div className={styles.dividerFull} />

                <RelatedProducts currentId={produto.id} />
            </div>

            <CommonFooter />
        </div>
    );
}