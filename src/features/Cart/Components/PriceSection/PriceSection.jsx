import { useNavigate } from "react-router-dom";
import styles from "./PriceSection.module.css";

const FRETE = 15.90;

export default function PriceSection({ produtos }) {

    const navigate = useNavigate()

    const finalizarCompra = () => {
        alert("Obrigado por comprar na Cazé Store!")
        navigate("/")
        localStorage.removeItem("cart");
    }

    const subtotal = produtos.reduce(
        (acc, p) => acc + p.price * p.amount, 0
    );
    const total = subtotal + FRETE;

    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <p className={styles.title}>Resumo do Pedido</p>

                <div className={styles.row}>
                    <span className={styles.label}>Subtotal</span>
                    <span className={styles.value}>R$ {subtotal.toFixed(2)}</span>
                </div>

                <div className={styles.row}>
                    <span className={styles.label}>Frete</span>
                    <span className={styles.value}>R$ {FRETE.toFixed(2)}</span>
                </div>

                <div className={styles.rowTotal}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.totalValue}>R$ {total.toFixed(2)}</span>
                </div>
                <button 
                    className={styles.btnFinalizar}
                    onClick={finalizarCompra}
                >
                    Finalizar Compra
                </button>
            </div>
        </section>
    );
}