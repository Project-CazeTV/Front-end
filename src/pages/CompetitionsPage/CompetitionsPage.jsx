import { Link } from "react-router-dom";

import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import styles from "./CompetitionsPage.module.css";
import { competitions } from "../../mocks/campeonatos";

export default function CompetitionsPage() {
    return (
        <>
            <ColoredHeader />
            <MainHeader />

            <main className={styles.container}>
                <h1>
                    Principais Competições
                </h1>

                <div className={styles.grid}>
                    {competitions.map((competition) => (
                        <Link key={competition.name} to={competition.route} className={styles.card}>
                            <img src={competition.image} alt={competition.name} className={styles.image}/>
                            <h2>{competition.name}</h2>
                        </Link>
                    ))}
                </div>
            </main>

            <CommonFooter />
        </>
    );
}