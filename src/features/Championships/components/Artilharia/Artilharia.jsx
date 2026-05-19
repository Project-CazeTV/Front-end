import { logosTime } from "../../../../mocks/logosTime";
import PlayerCard from "../../../WorldCup/components/FeaturedPlayers/PlayerCard";
import styles from "./Artilharia.module.css";   
import stylesPlayer from "./PlayerCard.module.css"

export default function Artilharia({ artilheiros }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>RANKING</p>
                <p>GOLS</p>
            </div>
            {artilheiros.map((artilheiro, index) => (
                <div key={index} className={styles.artilheiro}>
                    <PlayerCard player={artilheiro} logoTeam={logosTime[artilheiro.clube]} styles={stylesPlayer} showGoals={true} />
                </div>
            ))}
        </div>
    );
}