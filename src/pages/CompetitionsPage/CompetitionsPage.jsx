import { Link } from "react-router-dom";

import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";

import styles from "./CompetitionsPage.module.css";

// importe as logos que vocês já possuem
import brasileiraoLogo from "../../assets/brasileirao2.png";
import libertadoresLogo from "../../assets/Conmebol_Libertadores_logo.svg.png";
import copaBrasilLogo from "../../assets/CopaDoBrasil.png";
import sulamericanaLogo from "../../assets/Conmebol_Sudamericana_logo.png";
import paulistaLogo from "../../assets/paulistao.png";
import cariocaLogo from "../../assets/carioca.jpeg";
import mineiroLogo from "../../assets/mineiro.png";
import gauchoLogo from "../../assets/gauchoo.png";

const competitions = [
    {
        name: "Brasileirão",
        image: brasileiraoLogo,
        route: "/brasileirao",
    },
    {
        name: "Libertadores",
        image: libertadoresLogo,
        route: "/libertadores",
    },
    {
        name: "Copa do Brasil",
        image: copaBrasilLogo,
        route: "/copa-do-brasil",
    },
    {
        name: "Sul-Americana",
        image: sulamericanaLogo,
        route: "/sudamericana",
    },
    {
        name: "Paulistão",
        image: paulistaLogo,
        route: "/paulistao",
    },
    {
        name: "Carioca",
        image: cariocaLogo,
        route: "/carioca",
    },
    {
        name: "Mineiro",
        image: mineiroLogo,
        route: "/mineiro",
    },
    {
        name: "Gaúcho",
        image: gauchoLogo,
        route: "/gaucho",
    },
];

export default function CompetitionsPage() {
    return (
        <>
            <ColoredHeader />
            <MainHeader />

            <main className={styles.container}>
                <h1 className={styles.title}>
                    Principais <span>Competições</span>
                </h1>

                <div className={styles.grid}>
                    {competitions.map((competition) => (
                        <Link
                            key={competition.name}
                            to={competition.route}
                            className={styles.card}
                        >
                            <img
                                src={competition.image}
                                alt={competition.name}
                                className={styles.image}
                            />

                            <h2>{competition.name}</h2>
                        </Link>
                    ))}
                </div>
            </main>

            <CommonFooter />
        </>
    );
}