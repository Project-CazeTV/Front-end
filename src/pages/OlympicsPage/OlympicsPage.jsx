import MainHeader from "../../components/Layout/MainHeader/MainHeader";
import CommonFooter from "../../components/Layout/CommonFooter/CommonFooter";
import CountdownCard from "../../features/WorldCup/components/CountdownCard/CountdownCard";
import FilterSection from "../../components/Common/FilterSection/FilterSection";
import ColoredHeader from "../../components/Layout/ColoredHeader/ColoredHeader";
import MedalTable from "../../features/Olimpiadas/components/MedalTable/MedalTable";
import NewsList from "../../components/Common/NewsList/NewsList";
import styles from "./OlympicsPage.module.css";
import { useState } from "react";
export default function OlympicsPage() {
  const noticiasMenoresMock = [
    {
      id: 1,
      categoria: "Apresentação de Abertura",
      tagColor: "#1E40AF",
      titulo: "Lady Gaga canta na abertura das Olimpíadas Paris 2024 | Gshow",
      tempo: "12 DIAS",
      imagem: "src/assets/gaga.png",
    },
    {
      id: 2,
      categoria: "Salto Artístico Feminino",
      tagColor: "#DC2626",
      titulo:
        "É Brasil!!! Rebeca Andrade conquista ouro em Salto Artístico e supera Simone Biles.",
      tempo: "1 DIA",
      imagem: "src/assets/salto_fem.png",
    },
    {
      id: 3,
      categoria: "Paris 2024",
      tagColor: "#22C55E",
      titulo:
        "Rio Sena, após anos, volta a se tornar banhável na França e agora é possível modalidades aquáticas.",
      tempo: "20 DIAS",
      imagem: "src/assets/identidade-visual-das-olimpiadas-de-paris-2024.png",
    },
  ];

  const filtros = [
    "Esportes Aquáticos",
    "Atletismo",
    "Ginástica",
    "Esportes de Combate",
    "Esportes de Equipe/Quadra",
    "Ciclismo",
  ];


const sports = [
  "Natação",
  "Saltos Ornamentais",
  "Maratona Aquática",
  "Polo Aquático",
  "Nado Artístico"
];

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

      <NewsList noticias={noticiasMenoresMock} />
      <CommonFooter />
    </div>
  );
}
