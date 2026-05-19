import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./PlayersNational.module.css";
import PlayerCard from "../FeaturedPlayers/PlayerCard";
import playerCardStyles from "./PlayerCard.module.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function PlayersNational({ players = [], title, subtitle }) {
  
  const [activePlayerIndex, setActivePlayerIndex] = useState(0);

  if (players.length === 0) {
    return null;
  }

  const activePlayer = players[activePlayerIndex];

  const isFirstPlayer = activePlayerIndex === 0;
  const isLastPlayer = activePlayerIndex === players.length - 1;

  function goToNextPlayer() {
    if (!isLastPlayer) {
      setActivePlayerIndex(activePlayerIndex + 1);
    }
  }

  function goToPreviousPlayer() {
    if (!isFirstPlayer) {
      setActivePlayerIndex(activePlayerIndex - 1);
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextPlayer,
    onSwipedRight: goToPreviousPlayer,
    trackMouse: true,
  });

  return (
    <section className={styles.section}>
      {(title || subtitle) && (
        <div className={styles.header}>
          {title && (
            <div className={styles.titleRow}>
              <span className={styles.titleBar}></span>
              <h3 className={styles.title}>{title}</h3>
            </div>
          )}

          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}

      <div className={styles.carouselArea} {...swipeHandlers}>
        <button
          className={`${styles.navButton} ${isFirstPlayer ? styles.disabled : ""}`}
          onClick={goToPreviousPlayer}
          disabled={isFirstPlayer}
          aria-label="Jogador anterior"
        >
          <FaRegArrowAltCircleLeft size={18} />
        </button>

        <div className={styles.playerArea}>
          <PlayerCard styles={playerCardStyles} player={activePlayer} />
        </div>

        <button
          className={`${styles.navButton} ${isLastPlayer ? styles.disabled : ""}`}
          onClick={goToNextPlayer}
          disabled={isLastPlayer}
          aria-label="Próximo jogador"
        >
          <FaRegArrowAltCircleRight size={18} />
        </button>
      </div>
    </section>
  );
}