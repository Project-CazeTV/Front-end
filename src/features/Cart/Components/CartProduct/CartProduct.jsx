import styles from './CartProduct.module.css';
import { truncateString } from '../../../Shop/utils/ProductCardUtil';
import { FaTrash } from "react-icons/fa";

export default function CartProduct({ produto, onAumentar, onDiminuir, onRemover }) {
    return (
        <div className={styles.card}>
            <img src={produto.img} alt={produto.name} className={styles.img} />

            <div className={styles.info}>
                <p className={styles.name}>{truncateString(produto.name, 22)}</p>
                <p className={styles.unitPrice}>R$ {produto.price.toFixed(2)}</p>

                <div className={styles.qtyRow}>
                    <button className={styles.btnMinus} onClick={() => onDiminuir(produto.id)}>−</button>
                    <span className={styles.qtyVal}>{produto.amount}</span>
                    <button className={styles.btnPlus} onClick={() => onAumentar(produto.id)}>+</button>
                </div>
            </div>

            <div className={styles.right}>
                <button className={styles.btnRemove} onClick={() => onRemover(produto.id)}>
                    <FaTrash />
                </button>
                <span className={styles.total}>
                    R$ {(produto.price * produto.amount).toFixed(2)}
                </span>
            </div>
        </div>
    );
}