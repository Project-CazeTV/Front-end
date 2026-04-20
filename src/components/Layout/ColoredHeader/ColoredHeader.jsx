import styles from "./ColoredHeader.module.css";

export default function ColoredHeader (){
    return(
        <header className={styles.Multiheader}>
            <div className={styles.orangeArea}></div>
            <div className={styles.redArea}></div>
            <div className={styles.greenArea}></div>
            <div className={styles.blueArea}></div>
        </header>
    );
} 