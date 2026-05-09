import MainHeader from '../../components/Layout/MainHeader/MainHeader';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter';
import CountdownCard from '../../features/WorldCup/components/CountdownCard/CountdownCard';
import FilterSection from '../../components/Common/FilterSection/FilterSection';
import styles from './WorldCupPage.module.css';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';
import NextMatches from '../../features/WorldCup/components/NextMatches/NextMatches';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { groups } from '../../mocks/groups';

export default function WorldCupPage() {
  const [activeFilter, setActiveFilter] = useState("Grupos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const filtros = ["Grupos", "Fase de grupos", "Rodadas", "Notícias"];

  const nextGroup = () => {
    if (currentIndex < groups.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const prevGroup = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextGroup,
    onSwipedRight: prevGroup,
    trackMouse: true
  });

  const grupoAtual = groups[currentIndex];

  const GroupCard = ({ grupo }) => (
    <div className={styles.groupCard}>
      <h3 className={styles.groupTitle}>GRUPO {grupo.grupo}</h3>
      <div className={styles.countriesList}>
        {grupo.paises.map((pais, pIdx) => (
          <div key={pIdx} className={styles.countryRow}>
            <div className={styles.flagWrapper}>
              <img src={pais.imagem} alt={pais.nome} className={styles.flag} />
            </div>
            <span className={styles.countryName}>{pais.nome.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <ColoredHeader />
      <MainHeader isTransparent={true} />

      <main className={styles.mainContent}>
        <div className={styles.DetailsBackground}>
          <p className={styles.DetailBackground}>2026</p>
          <p className={styles.DetailBackground2}>2026</p>
        </div>
        <CountdownCard />
      </main>

      <FilterSection
        filtros={filtros}
        filtroAtivo={activeFilter}
        setFiltroAtivo={setActiveFilter}
      />

      {activeFilter === "Grupos" && (
        <>
          <section className={`${styles.carouselContainer} ${styles.mobileOnly}`}>
            <button
              className={`${styles.navBtn} ${styles.prev}`}
              onClick={prevGroup}
              disabled={currentIndex === 0}
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>

            <div {...handlers}>
              <GroupCard grupo={grupoAtual} />
            </div>

            <button
              className={`${styles.navBtn} ${styles.next}`}
              onClick={nextGroup}
              disabled={currentIndex === groups.length - 1}
            >
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>
          </section>

          <div className={`${styles.groupsRow} ${styles.desktopOnly}`}>
            {groups.map((grupo, gIdx) => (
              <GroupCard key={gIdx} grupo={grupo} />
            ))}
          </div>
        </>
      )}

      {activeFilter === "Fase de grupos" && <NextMatches groups={groups} />}

      {activeFilter === "Rodadas" && (
        <div className={styles.noInfo}><h3>Sem informações disponíveis</h3></div>
      )}

      {activeFilter === "Notícias" && (
        <div className={styles.noInfo}><h3>Sem informações disponíveis</h3></div>
      )}

      <CommonFooter />
    </div>
  );
}