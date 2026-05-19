import PlayerCard from "../../../WorldCup/components/FeaturedPlayers/PlayerCard";
import styles from "./Artilharia.module.css";   
import stylesPlayer from "./PlayerCard.module.css"

export default function Artilharia({ artilheiros }) {
    return (
        <div className={styles.container}>
            {artilheiros.map((artilheiro, index) => (
                <div key={index} className={styles.artilheiro}>
                    <PlayerCard player={artilheiro} styles={stylesPlayer} showGoals={true} />
                </div>
            ))}
        </div>
    );
}