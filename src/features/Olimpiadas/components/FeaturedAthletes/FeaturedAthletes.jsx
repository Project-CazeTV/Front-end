import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./FeaturedAthletes.module.css";
import AthleteCard from "../AthleteCard/AthleteCard";

export default function FeaturedAthletes({ athletes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < athletes.length - 1) setCurrentIndex((p) => p + 1);
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
      <div className={styles.header}>
        <span className={styles.titleBar} />
        <div>
          <h3 className={styles.title}>ATLETAS DE DESTAQUE</h3>
          <p className={styles.subtitle}>Os brasileiros que brilharam em Paris 2024</p>
        </div>
      </div>

      <div className={`${styles.carouselWrapper} ${styles.mobileOnly}`}>
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`${styles.navBtn} ${styles.prev}`}
        >
          ‹
        </button>

        <div className={styles.carouselCard} {...handlers}>
          <AthleteCard styles={styles} athlete={athletes[currentIndex]} />
        </div>

        <button
          onClick={next}
          disabled={currentIndex === athletes.length - 1}
          className={`${styles.navBtn} ${styles.next}`}
        >
          ›
        </button>
      </div>

      <div className={`${styles.athletesGrid} ${styles.desktopOnly}`}>
        {athletes.map((athlete, idx) => (
          <AthleteCard key={idx} styles={styles} athlete={athlete} />
        ))}
      </div>
    </section>
  );
}