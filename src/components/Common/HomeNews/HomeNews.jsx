import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import styles from './HomeNews.module.css';

export default function HomeNews({ news }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextNews = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % news.length);
  }, [news.length]);

  const prevNews = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + news.length) % news.length);
  }, [news.length]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextNews();
      }, 10000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextNews, isPaused, index]);

  const handlers = useSwipeable({
    onSwipedLeft: nextNews,
    onSwipedRight: prevNews,
    trackMouse: true
  });

  const current = news[index];

  return (
    <section
      className={styles.container}
      {...handlers}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current.id}
          className={styles.newsWrapper}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className={styles.imageSide}
            exit={{ x: -100, opacity: 0 }}
          >
            <div className={styles.imageMask}>
              <img src={current.imagem} alt={current.titulo} className={styles.mainImg} />
            </div>
          </motion.div>

          <motion.div
            className={styles.textSide}
            exit={{ x: 100, opacity: 0 }}
          >
            <h2 className={styles.title}>{current.titulo}</h2>
            <p className={styles.description}>{current.descricao}</p>
            <button className={styles.btn}>
              ver notícia completa
              <span className="material-symbols-outlined">arrow_circle_right</span>
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className={styles.dots}>
        {news.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}