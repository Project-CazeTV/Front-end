import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader.jsx'
import MainHeader from '../../components/Layout/MainHeader/MainHeader.jsx'
import HomeNews from '../../components/Common/HomeNews/HomeNews';
import FilterSection from '../../components/Common/FilterSection/FilterSection.jsx';
import NewsList from '../../components/Common/NewsList/NewsList.jsx';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter.jsx';
import { mainNewsMock } from '../../mocks/news';
import { filtros } from '../../mocks/filters/newsFilters.js';
import { noticiasMenoresMock } from '../../mocks/news.js';

export default function Home(){

    return(
        <>
            <ColoredHeader/>
            <MainHeader />
            <HomeNews news={mainNewsMock} />
            <FilterSection titulo="Cazé News" filtros={filtros} />
            <NewsList noticias={noticiasMenoresMock} />
            <CommonFooter/>
        </>
    )
}