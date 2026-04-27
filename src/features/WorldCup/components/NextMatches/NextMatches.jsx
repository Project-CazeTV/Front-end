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
    if (currentDateIndex < datas.length - 1) {
      setCurrentDateIndex((prev) => prev + 1);
    }
  };

  const prevDate = () => {
    if (currentDateIndex > 0) {
      setCurrentDateIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextDate,
    onSwipedRight: prevDate,
    trackMouse: true
  });

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>FASE DE GRUPOS</h3>

      <div className={styles.carouselContainer}>
        
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
              
              <img src={jogo.flagA} className={styles.flag} />

              <div className={styles.matchInfo}>
                <span className={styles.time}>
                  {jogo.hora} em Brasília
                </span>

                <div className={styles.teams}>
                  <span>{jogo.timeA}</span>

                  {jogo.placarA !== null ? (
                    <strong>{jogo.placarA} x {jogo.placarB}</strong>
                  ) : (
                    <span>x</span>
                  )}

                  <span>{jogo.timeB}</span>
                </div>

                <span className={styles.stadium}>{jogo.estadio}</span>
                <span className={styles.location}>{jogo.local}</span>
              </div>

              <img src={jogo.flagB} className={styles.flag} />
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