import ColoredHeader from '../../components/Layout/ColoredHeader/ColoredHeader.jsx'
import MainHeader from '../../components/Layout/MainHeader/MainHeader.jsx'
import HomeNews from '../../components/Common/HomeNews/HomeNews';
import FilterSection from '../../components/Common/FilterSection/FilterSection.jsx';
import NewsList from '../../components/Common/NewsList/NewsList.jsx';
import CommonFooter from '../../components/Layout/CommonFooter/CommonFooter.jsx';
import { mainNewsMock } from '../../mocks/news';

export default function Home(){

    const filtros = ["Paulistão Sicredi", "Brasileirão Betano", "CONMEBOL Libertadores", "Copa do Mundo FIFA", "Futebol Feminino"];

const noticiasMenoresMock = [
  {
    id: 1,
    categoria: "Principal Masculina",
    tagColor: "#0047BB",
    titulo: 'Ancelotti: "Marrocos, Haiti e Escócia merecem o mesmo respeito"',
    tempo: "3 MESES",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OqENRL9zVhkgHBC6Tl7GjEl8o6sgAu-FUw&s"
  },
  {
    id: 2,
    categoria: "SÃO PAULO FC",
    tagColor: "#E20E0E",
    titulo: "São Paulo vence o Red Bull Bragantino e avança à semifinal do Paulistão.",
    tempo: "1 DIA",
    imagem: "https://public-rf-upload.minhawebradio.net/2158/news/cf58aad228392acb027c15dc20efad3c.jpg"
  }
];

    return(
        <>
            <ColoredHeader/>
            <MainHeader/>
            <HomeNews news={mainNewsMock} />
            <FilterSection titulo="Cazé News" filtros={filtros} />
            <NewsList noticias={noticiasMenoresMock} />
            <CommonFooter/>
        </>
    )
}