import styles from './CopaSede.module.css';

export default function CopaSede() {
  const sedes = [
    {
      pais: "Estados Unidos",
      sigla: "EUA",
      bandeira: "https://flagcdn.com/w80/us.png",
      estadio: "MetLife Stadium",
      foto: "https://livesport-ott-images.ssl.cdn.cra.cz/r1200xfq60/ccc32aac-a129-4a16-b0b8-76f0a2b266cc.jpeg",
      jogos: 60,
    },
    {
      pais: "México",
      sigla: "MEX",
      bandeira: "https://flagcdn.com/w80/mx.png",
      estadio: "Estádio Azteca",
      foto: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Estadio_Azteca_Octubre_de_2021.jpg",
      jogos: 13,
    },
    {
      pais: "Canadá",
      sigla: "CAN",
      bandeira: "https://flagcdn.com/w80/ca.png",
      estadio: "BC Place",
      foto: "https://www.vmcdn.ca/f/files/via/images/sports/bc-place-soccer.jpg",
      jogos: 13,
    },
  ];

  return (
    <section className={styles.section}>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>FIFA WORLD CUP</p>
          <img className={styles.tacaCopa} src='https://cdn.awsli.com.br/2500x2500/2839/2839253/produto/400051248/imagem_2026-04-09_094847267-796gcpomx8.png'></img>
          <h1 className={styles.heroAno}>2026</h1>
          <p className={styles.heroDesc}>3 países · 48 seleções · 104 jogos</p>
        </div>
      </div>
      <div className={styles.sedeGrid}>
        {sedes.map((s) => (
          <div key={s.pais} className={styles.sedeCard}>
            <div className={styles.fotoWrapper}>
              <img
                src={s.foto}
                alt={s.estadio}
                className={styles.fotoEstadio}
                onError={(e) => { e.target.style.background = '#222'; }}
              />
              <div className={styles.fotoOverlay} />
              <span className={styles.estadioLabel}>{s.estadio}</span>
            </div>

            <div className={styles.sedeInfo}>
              <img src={s.bandeira} alt={s.pais} className={styles.bandeira} />
              <div>
                <p className={styles.sedePais}>{s.pais}</p>
                <p className={styles.sedeJogos}>{s.jogos} jogos</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}