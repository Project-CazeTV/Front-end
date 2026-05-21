import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MedalTable from "../../features/Olimpiadas/components/MedalTable/MedalTable";
import NewsList from "../../components/Common/NewsList/NewsList";
import styles from "./OlympicsPage.module.css";
import { useState } from "react";
import { filtros, sports } from "../../mocks/filters/olympicsFilters.js";


export default function OlympicsPage({image, medalData, noticias}) {
  const [activeCategory, setActiveCategory] = useState(filtros[0]);

  return (
    <div className={styles.pageContainer}>
      <ColoredHeader />
      <MainHeader />

      <section className={styles.heroSection}>
        <div className={styles.heroBanner}>
          <img src={image} alt="Jogos Olímpicos na CazéTV" />

          <div className={styles.liveInfo}>
            Salto Artístico Feminino — Grupo A
          </div>
        </div>
      </section>

      <MedalTable edicao={medalData} />  


      {/*<div className={styles.filterWrapper}>
        <FilterSection
          titulo="Categorias Esportivas"
          filtros={filtros}
          filtroAtivo={activeCategory}
          setFiltroAtivo={setActiveCategory}
        />
      </div>

      <section className={styles.sportsSection}>
        <div className={styles.sportsHeader}>
          <span className={styles.sportsTitleBar} />
          <span className={styles.sportsTitle}>Esportes</span>
          <span className={styles.sportsActiveLabel}>Esportes Aquáticos</span>
        </div>

        <ul className={styles.sportsList}>
          {sports.map((sport) => (
            <li
              key={sport}
              className={`${styles.sportItem} ${activeSport === sport ? styles.activeItem : ""}`}
              onClick={() => setActiveSport(sport)}
            >
              {sport}
              {activeSport === sport && <span className={styles.activeIndicator} />}
            </li>
          ))}
        </ul>
      </section>*/}

      <NewsList
        title="Notícias das Olimpíadas"
        noticias={noticias}
      />

      <CommonFooter />
    </div>
  );
}