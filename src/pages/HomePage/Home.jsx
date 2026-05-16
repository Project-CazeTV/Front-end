import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader.jsx'
import MainHeader from '../../components/Layout/MainHeader/MainHeader.jsx'
import HomeNews from '../../components/Common/HomeNews/HomeNews';
import FilterSection from '../../components/Common/FilterSection/FilterSection.jsx';
import NewsList from '../../components/Common/NewsList/NewsList.jsx';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter.jsx';
import { mainNewsMock } from '../../mocks/news';
import { filtros } from '../../mocks/filters/newsFilters.js';
import { noticiasMenoresMock } from '../../mocks/news.js';
import { useNavigate } from 'react-router-dom';
import ShopHeader from '../../features/Shop/components/ShopHeader/ShopHeader.jsx';
import Banner1 from "../../assets/banners/banner1.png";
import Banner2 from "../../assets/banners/banner2.png";
import Banner3 from "../../assets/banners/banner3.png";
import styles from './Home.module.css';
import VideoList from '../../components/Common/VideoList/VideoList.jsx';
import { videosHome } from '../../mocks/videos/videos.js';

export default function Home() {

  const banners = [Banner1, Banner2, Banner3];
  const navigation = useNavigate()

  return (
    <>
      <ColoredHeader />
      <MainHeader />
      <HomeNews news={mainNewsMock} />
      <section className={styles.homeKitSection}>
        <div className={styles.homeKitText}>
          <h2>Monte seu kit Cazé TV</h2>
          <p>
            Escolha seus produtos favoritos e acompanhe cada campeonato com estilo,
            praticidade e a energia de quem vive o esporte de verdade.
          </p>
          <button onClick={() => navigation("/shop")}>montar meu kit</button>
        </div>
        <div className={styles.homeKitBanner}>
          <ShopHeader banners={banners} search={false} />
        </div>
      </section>
      <VideoList videos={videosHome} title="Em Alta na Cazé" />
      <NewsList title="Cazé News" noticias={noticiasMenoresMock} />
      <CommonFooter />
    </>
  )
}