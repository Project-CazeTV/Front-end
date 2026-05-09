import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./ListaDeJogos.module.css";
import CardPartida from "../CardPartida/CardPartida";
import agruparJogosPorData from "../../utils/agruparJogosPorData";
import ordenarJogosPorData from "../../utils/ordenarJogosPorData";

export default function ListaDeJogos({jogos,pendente,}) {

    const [indiceDateAtual, setIndiceDateAtual] = useState(0);

    useEffect(() => {setIndiceDateAtual(0);}, [jogos]);

    if (!jogos || jogos.length === 0) {
        return <p className={styles.vazio}>Sem jogos disponíveis</p>;
    }

    const jogosPorData = agruparJogosPorData(jogos);
    const datas = Object.keys(jogosPorData);

    if (datas.length === 0) {
        return (
            <p className={styles.vazio}>
                Sem jogos disponíveis
            </p>
        );
    }

    const indiceSeguro = Math.min(indiceDateAtual, datas.length - 1);
    const dataAtual = datas[indiceSeguro];
    const jogosDeHoje = jogosPorData[dataAtual] || [];

    const irParaProxima = () => {
        if (indiceDateAtual < datas.length - 1) {
            setIndiceDateAtual((i) => i + 1);
        }
    };

    const irParaAnterior = () => {
        if (indiceDateAtual > 0) {
            setIndiceDateAtual((i) => i - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: irParaProxima,
        onSwipedRight: irParaAnterior,
        trackMouse: true,
    });

    return (
        <>
            <div className={`${styles.tabsDatas} ${styles.apenasDesktop}`}>
                {datas.map((data, indice) => (
                    <button
                        key={data}
                        className={`${styles.tabData} ${indice === indiceDateAtual
                                ? styles.tabDataAtiva
                                : ""
                            }`}
                        onClick={() => setIndiceDateAtual(indice)}
                    >
                        {data}
                    </button>
                ))}
            </div>

            <div className={`${styles.carouselMobile} ${styles.apenasMobile}`}>

                <button
                    onClick={irParaAnterior}
                    disabled={indiceDateAtual === 0}
                    className={`${styles.botaoNavegar} ${styles.botaoAnterior}`}
                >
                    ‹
                </button>

                <div
                    className={styles.diaCard}
                    {...swipeHandlers}
                >
                    <span className={styles.dataLabel}>
                        {dataAtual}
                    </span>

                    {jogosDeHoje.map((jogo, indice) => (
                        <CardPartida
                            key={indice}
                            jogo={jogo}
                            pendente={pendente}
                        />
                    ))}
                </div>

                <button
                    onClick={irParaProxima}
                    disabled={indiceDateAtual === datas.length - 1}
                    className={`${styles.botaoNavegar} ${styles.botaoProximo}`}
                >
                    ›
                </button>
            </div>

            <div className={`${styles.diaCard} ${styles.apenasDesktop}`}>
                {jogosDeHoje.map((jogo, indice) => (
                    <CardPartida
                        key={indice}
                        jogo={jogo}
                        pendente={pendente}
                    />
                ))}
            </div>
        </>
    );
}