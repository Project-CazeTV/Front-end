import styles from './CartProduct.module.css'
import { truncateString } from '../../../Shop/utils/ProductCardUtil'
import { FaTrash } from "react-icons/fa";

export default function CartProduct({ produto }) {

    function aumentarQuantidade() {
        
    }

    function diminuirQuantidade() {
        
    }

    function removerProduto() {
        
    }

    return (
        <div className={styles.cardProduto}>
            <div className={styles.divInfoProduto}>
                <img src={produto.img} alt={produto.name} className={styles.imgProduto} />
                <div className={styles.divInfoProdutoTexto}>
                    <h2 className={styles.h2Cart}>{truncateString(produto.name, 22)}</h2>
                    <h3 className={styles.h3Cart}>R${produto.price.toFixed(2)}</h3>
                    <div className={styles.divBotoesQuantidade}>
                        <button className={styles.btnQuantidadeMenos} onClick={diminuirQuantidade}>-</button>
                        <p>{produto.amount}</p>
                        <button className={styles.btnQuantidadeMais} onClick={aumentarQuantidade}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.divTotalProduto}>
                <button className={styles.btnRemover} onClick={removerProduto}><FaTrash /></button>
                <h2 className={styles.h2Cart}>R${(produto.price * produto.amount).toFixed(2)}</h2>
            </div>
        </div>
    )
}