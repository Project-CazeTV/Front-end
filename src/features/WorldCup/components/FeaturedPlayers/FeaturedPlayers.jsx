import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./FeaturedPlayers.module.css";
import PlayerCard from "./PlayerCard";
import stylesCardPlayer from "./FeaturedPlayers.module.css";

export default function FeaturedPlayers({ players }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < players.length - 1) setCurrentIndex((p) => p + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((p) => p - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });


  return (
    <section className={styles.container}>
      <h3 className={styles.title}>JOGADORES DE DESTAQUE</h3>
      <p className={styles.subtitle}>Os craques que vão fazer história na Copa do Mundo 2026</p>

      <div className={`${styles.carouselWrapper} ${styles.mobileOnly}`}>
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`${styles.navBtn} ${styles.prev}`}
        >
          ‹
        </button>

        <div className={styles.carouselCard} {...handlers}>
          <PlayerCard styles={stylesCardPlayer} player={players[currentIndex]} />
        </div>

        <button
          onClick={next}
          disabled={currentIndex === players.length - 1}
          className={`${styles.navBtn} ${styles.next}`}
        >
          ›
        </button>
      </div>

      <div className={`${styles.playersGrid} ${styles.desktopOnly}`}>
        {players.map((player, idx) => (
          <PlayerCard key={idx} styles={stylesCardPlayer} player={player} />
        ))}
      </div>
    </section>
  );
}