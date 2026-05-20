import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import ProductSection from "../../features/Cart/Components/ProductsSection/ProductSection";
import PriceSection from "../../features/Cart//Components/PriceSection/PriceSection";

import styles from "./CartPage.module.css"

import { useState, useEffect } from "react";

export default function CartPage() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    return (
        <div>
            <ColoredHeader />

            <MainHeader />
            
            <div className={styles.CartPage}>
                <ProductSection produtos={cart} />

                <PriceSection produtos={cart} />
            </div>

            <CommonFooter />
        </div>
    )
}