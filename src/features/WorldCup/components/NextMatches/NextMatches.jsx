import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./NextMatches.module.css";

export default function NextMatches({ groups }) {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  const allMatches = groups.flatMap((g) => g.jogos || []);

  if (allMatches.length === 0) {
    return <p className={styles.empty}>Sem jogos disponíveis</p>;
  }

  const sortedMatches = [...allMatches].sort((a, b) => {
    const [dA, mA] = a.data.split("/");
    const [dB, mB] = b.data.split("/");
    return new Date(2026, mA - 1, dA) - new Date(2026, mB - 1, dB);
  });

  const matchesByDate = sortedMatches.reduce((acc, jogo) => {
    if (!acc[jogo.data]) acc[jogo.data] = [];
    acc[jogo.data].push(jogo);
    return acc;
  }, {});

  const datas = Object.keys(matchesByDate);
  const dataAtual = datas[currentDateIndex];
  const jogosDoDia = matchesByDate[dataAtual];

  const nextDate = () => {
    if (currentDateIndex < datas.length - 1) setCurrentDateIndex((p) => p + 1);
  };

  const prevDate = () => {
    if (currentDateIndex > 0) setCurrentDateIndex((p) => p - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextDate,
    onSwipedRight: prevDate,
    trackMouse: true,
  });

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>FASE DE GRUPOS</h3>

      <div className={styles.carouselWrapper}>
        <button
          onClick={prevDate}
          disabled={currentDateIndex === 0}
          className={`${styles.navBtn} ${styles.prev}`}
        >
          ‹
        </button>

        <div className={styles.dayCard} {...handlers}>
          <span className={styles.date}>{dataAtual}</span>

          {jogosDoDia.map((jogo, idx) => (
            <div key={idx} className={styles.matchCard}>

              <div className={styles.teamSide}>
                <img src={jogo.flagA} alt={jogo.timeA} className={styles.flag} />
                <span className={styles.teamName}>{jogo.timeA}</span>
              </div>

              <div className={styles.matchInfo}>
                <span className={styles.time}>{jogo.hora} em Brasília</span>

                {jogo.placarA !== null ? (
                  <strong className={styles.score}>
                    {jogo.placarA} x {jogo.placarB}
                  </strong>
                ) : (
                  <span className={styles.vs}>x</span>
                )}

                <span className={styles.stadium}>{jogo.estadio}</span>
                <span className={styles.location}>{jogo.local}</span>
              </div>

              <div className={`${styles.teamSide} ${styles.teamRight}`}>
                <img src={jogo.flagB} alt={jogo.timeB} className={styles.flag} />
                <span className={styles.teamName}>{jogo.timeB}</span>
              </div>

            </div>
          ))}
        </div>

        <button
          onClick={nextDate}
          disabled={currentDateIndex === datas.length - 1}
          className={`${styles.navBtn} ${styles.next}`}
        >
          ›
        </button>
      </div>
    </section>
  );
}