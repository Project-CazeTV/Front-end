import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import CountdownCard from "../../features/WorldCup/components/CountdownCard/CountdownCard";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MedalTable from "../../features/Olimpiadas/components/MedalTable/MedalTable";
import NewsList from "../../components/Common/NewsList/NewsList";
import styles from "./OlympicsPage.module.css";
import { useState } from "react";
import { noticiasOlimpiadasMock } from "../../mocks/news.js";
import { filtros, sports } from "../../mocks/filters/olympicsFilters.js";

export default function OlympicsPage() {

  const [activeSport, setActiveSport] = useState("Natação");

  return (
    <div className={styles.pageContainer}>
      <ColoredHeader></ColoredHeader>
      <MainHeader isTransparent={false} />
      <section className={styles.liveSection}>
        <div className={styles.liveHeader}>
          <span>Assistir Ao Vivo</span>
          <img
            src="src\assets\pngtree-red-live-button-icon-png-image_17408319.png"
            alt="ao vivo"
          />
        </div>

        <div className={styles.liveBanner}>
          <img src="src\assets\image11.png" alt="Cazé TV" />
        </div>

        <p className={styles.liveInfo}>
          • Ao Vivo - Salto Artístico Feminino - Grupo A
        </p>
      </section>

      <MedalTable />
      <FilterSection titulo="Categorias Esportivas" filtros={filtros} />

      <section className={styles.sportsSection}>
        <div className={styles.sportsContainer}>
          <div className={styles.sportsTop}>
            <span className={styles.sportsTitle}>Esportes</span>
            <span className={styles.sportsActive}>Esportes Aquáticos</span>
            <span className={styles.sportsIcon}>🏊</span>
          </div>

          <ul className={styles.sportsItems}>
            {sports.map((sport) => (
              <li
                key={sport}
                className={activeSport === sport ? styles.activeItem : ""}
                onClick={() => setActiveSport(sport)}
              >
                {sport}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NewsList noticias={noticiasOlimpiadasMock} />
      <CommonFooter />
    </div>
  );
}
