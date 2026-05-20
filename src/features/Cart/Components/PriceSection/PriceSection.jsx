import styles from "./PriceSection.module.css"

export default function PriceSection({produtos}) {

    const SUBTOTAL = produtos.reduce((total, produto) => total + (produto.price * produto.amount), 0);

    const FRETE_TRANSPORTE = 15.90

    const TOTAL = SUBTOTAL + FRETE_TRANSPORTE

    return (
         <div className={styles.resumo}>
            <div className={styles.conteudoResumo}>
                <h2 className={styles.h2Cart}>Resumo do Pedido</h2>
                <h4 className={styles.h4Cart}>SubTotal: R$ {SUBTOTAL.toFixed(2)}</h4>
                <h4 className={styles.h4Cart}>Frete: R$ {FRETE_TRANSPORTE.toFixed(2)}</h4>
                <h4 className={styles.h4Cart}>Frete: R$ {TOTAL.toFixed(2)}</h4>
                <button className={styles.btnFinalizar}>Finalizar Compra</button>
            </div>
        </div>
    )
}