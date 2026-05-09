import { useState } from "react";
import styles from "./LogoTime.module.css";

export default function LogoTime({ url, nomeTime, pendente }) {
  const [imagemQuebrou, setImagemQuebrou] = useState(false);

  if (pendente) {
    return <div className={styles.logoVazio} />;
  }

  if (!url || imagemQuebrou) {
    const iniciais = nomeTime?.slice(0, 2).toUpperCase() || "?";

    return (
      <div className={styles.logoFallback}>
        <span>{iniciais}</span>
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={nomeTime}
      className={styles.logoTime}
      onError={() => setImagemQuebrou(true)}
    />
  );
}