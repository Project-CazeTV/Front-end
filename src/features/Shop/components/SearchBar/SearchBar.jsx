import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ placeHolder }) {
    return (
        <div className={styles.searchContainer}>
            <CiSearch className={styles.icon} />
            <input
                type="text"
                placeholder={placeHolder}
                className={styles.searchBar}
            />
        </div>
    );
}