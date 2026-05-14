import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./NextMatches.module.css";
import MatchCard from "./MatchCard";

export default function NextMatches({ groups,title,subtitle,description,pendente = false}) {
  
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
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>

      <div className={`${styles.dateTabs} ${styles.desktopOnly}`}>
        {datas.map((data, idx) => (
          <button
            key={data}
            className={`${styles.dateTab} ${currentDateIndex === idx ? styles.dateTabActive : ""}`}
            onClick={() => setCurrentDateIndex(idx)}
          >
            {data}
          </button>
        ))}
      </div>

      <div className={`${styles.carouselWrapper} ${styles.mobileOnly}`}>
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
            <MatchCard key={idx} jogo={jogo} />
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

      <div className={`${styles.dayCard} ${styles.desktopOnly}`}>
        {jogosDoDia.map((jogo, idx) => (
          <MatchCard key={idx} jogo={jogo} />
        ))}
      </div>
    </section>
  );
}