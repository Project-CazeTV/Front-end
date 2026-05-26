import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import ProductSection from "../../features/Cart/Components/ProductsSection/ProductSection";
import PriceSection from "../../features/Cart/Components/PriceSection/PriceSection";

import { FaArrowLeftLong } from "react-icons/fa6";

import styles from "./CartPage.module.css";

export default function CartPage() {
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    if (cart.length <= 0) {
        return navigate("/shop")
    }

    function saveCart(updated) {
        setCart(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    }

    function aumentarQuantidade(id) {
        saveCart(
            cart.map(item =>
                item.id === id ? { ...item, amount: item.amount + 1 } : item
            )
        );
    }

    function diminuirQuantidade(id) {
        saveCart(
            cart
                .map(item => item.id === id ? { ...item, amount: item.amount - 1 } : item)
                .filter(item => item.amount > 0)
        );
    }

    function removerProduto(id) {
        saveCart(cart.filter(item => item.id !== id));
    }

    return (
        <div className={styles.page}>
            <ColoredHeader />
            <MainHeader />

            <div className={styles.topBar}>
                <h1 className={styles.pageTitle}>Meu Carrinho</h1>
                <span className={styles.itemCount}>
                    {cart.reduce((acc, p) => acc + p.amount, 0)} {cart.reduce((acc, p) => acc + p.amount, 0) === 1 ? "item" : "itens"}
                </span>
            </div>

            <div className={styles.content}>
                <ProductSection
                    produtos={cart}
                    onAumentar={aumentarQuantidade}
                    onDiminuir={diminuirQuantidade}
                    onRemover={removerProduto}
                />
                <div className={styles.divider} />
                <PriceSection produtos={cart} />
            </div>

            <CommonFooter />
        </div>
    );
}