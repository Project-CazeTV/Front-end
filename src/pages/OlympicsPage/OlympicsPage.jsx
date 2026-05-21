import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MedalTable from "../../features/Olimpiadas/components/MedalTable/MedalTable";
import NewsList from "../../components/Common/NewsList/NewsList";
import styles from "./OlympicsPage.module.css";
import { useState } from "react";
import FeaturedAthletes from "../../features/Olimpiadas/components/FeaturedAthletes/FeaturedAthletes.jsx";
import OlympicsStats from "../../features/Olimpiadas/components/OlympicsStats/OlympicsStats.jsx";
import { olympicsStats } from "../../mocks/olimpiadas.js";

export default function OlympicsPage({image, medalData, news, athletes}) {

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

      <OlympicsStats className={styles.olympicsStats} stats={olympicsStats} />

      <MedalTable edicao={medalData} />  

      <FeaturedAthletes athletes={athletes} />

      <NewsList
        title="Notícias das Olimpíadas"
        noticias={news}
      />

      <CommonFooter />
    </div>
  );
}