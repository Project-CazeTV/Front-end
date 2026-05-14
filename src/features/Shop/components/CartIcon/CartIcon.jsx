import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./CartIcon.module.css";

export default function CartIcon({ amount = 0 }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (amount > 0) {
            setAnimate(true);

            const timer = setTimeout(() => {
                setAnimate(false);
            }, 250);

            return () => clearTimeout(timer);
        }
    }, [amount]);

    return (
        <div
            className={`${styles.cartDiv} ${
                animate ? styles.bump : ""
            }`}
            style={amount < 1 ? { display: "none" } : {}}
        >
            <FaShoppingCart className={styles.cartIcon} />

            <span className={styles.cartAmount}>
                <p>{amount}</p>
            </span>
        </div>
    );
}