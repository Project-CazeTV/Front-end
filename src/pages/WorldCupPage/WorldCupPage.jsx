import MainHeader from '../../components/Layout/MainHeader/MainHeader';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter';
import CountdownCard from '../../features/WorldCup/components/CountdownCard/CountdownCard';
import FilterSection from '../../components/Common/FilterSection/FilterSection';
import styles from './WorldCupPage.module.css';
import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader';
import NextMatches from '../../features/WorldCup/components/NextMatches/NextMatches';
import FeaturedPlayers from '../../features/WorldCup/components/FeaturedPlayers/FeaturedPlayers';
import NewsList from '../../components/Common/NewsList/NewsList';
import CopaSede from '../../features/WorldCup/components/CopaSede/CopaSede';
import { players } from '../../mocks/players';
import { newsWorldCup } from '../../mocks/newsWorldCup';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { groups } from '../../mocks/groups';
import { octaves, quarters, semis, final } from '../../mocks/roundsWorldCup';

export default function WorldCupPage() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(location.state?.filtroAtivo ?? "Grupos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const filtros = ["Grupos", "Fase de grupos", "Oitavas de final", "Quartas de final", "Semi-final", "Final", "Jogadores de destaque"];

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
      <div className={styles.groupHeader}>
        <span className={styles.groupWatermark}>{grupo.grupo}</span>
        <h3 className={styles.groupTitle}>GRUPO {grupo.grupo}</h3>
      </div>
      <div className={styles.countriesList}>
        {grupo.paises.map((pais, pIdx) => (
          <div
            key={pIdx}
            className={styles.countryRow}
            data-country={pais.nome}
          >
            <img src={pais.imagem} alt={pais.nome} className={styles.flag} />
            <span className={styles.countryName}>{pais.nome.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const handleVerMais = (noticia) => {
    console.log("Ver mais:", noticia);
  };


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
        <CopaSede />
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

      {activeFilter === "Fase de grupos" && (
        <NextMatches
          groups={groups}
          title="FASE DE GRUPOS"
          subtitle="48 jogos · 12 grupos · 32 seleções"
          description="Na fase de grupos, as 48 seleções são divididas em 12 grupos de 4 times. Cada time joga 3 partidas e os 2 melhores de cada grupo avançam para as oitavas de final."
          pendente={false}
        />
      )}

      {activeFilter === "Oitavas de final" && (
        <NextMatches
          groups={octaves}
          title="OITAVAS DE FINAL"
          subtitle="16 jogos · 32 seleções classificadas"
          description="Os 24 melhores da fase de grupos mais os 8 melhores terceiros colocados se enfrentam em jogos eliminatórios. Quem perde está fora da Copa."
          pendente={true}
        />
      )}

      {activeFilter === "Quartas de final" && (
        <NextMatches
          groups={quarters}
          title="QUARTAS DE FINAL"
          subtitle="8 jogos · 16 seleções"
          description="Os 8 vencedores das oitavas se enfrentam em jogos eliminatórios. Apenas os 4 melhores avançam para as semifinais."
          pendente={true}
        />
      )}

      {activeFilter === "Semi-final" && (
        <NextMatches
          groups={semis}
          title="SEMIFINAL"
          subtitle="2 jogos · 4 seleções"
          description="As quatro seleções que restaram disputam as duas vagas na grande final. Um passo para a eternidade."
          pendente={true}
        />
      )}

      {activeFilter === "Final" && (
        <NextMatches
          groups={final}
          title="FINAL"
          subtitle="1 jogo · 2 seleções · 1 campeão"
          description="O jogo mais esperado do planeta. As duas seleções que sobreviveram a todo o torneio se enfrentam pelo título de campeão do mundo."
          pendente={true}
        />
      )}

      {activeFilter === "Jogadores de destaque" && (
        <FeaturedPlayers players={players} />
      )}

      <NewsList
        title="O que ta rolando por aí?"
        subtitle={"Acompanhe os principais acontecimentos do futebol nacional e internacional."}
        noticias={newsWorldCup}
        onVerMais={handleVerMais}
      />

      <CommonFooter />
    </div>
  );
}