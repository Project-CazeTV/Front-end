import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import WorldCupPage from './pages/WorldCupPage/WorldCupPage'
import OlympicsPage from './pages/OlympicsPage/OlympicsPage'
import HistoriaPage from './pages/HistoriaPage/HistoriaPage'
import ShopPage from './pages/ShopPage/ShopPage'
import CartPage from './pages/CartPage/CartPage'
import ChampionshipPage from './pages/ChampionshipPage/ChampionshipPage'
import {brasileirao, libertadores, copaDoBrasil, paulista, mineiro, gauchao, carioca, sulAmericana} from './mocks/campeonatos'
import NewsPage from './pages/NewsPage/NewsPage'
import { noticiasOlimpiadasMock } from "../src/mocks/news.js";
import imgHero from "../src/assets/olimpiadas/jogos_paris_2024.png";
import { Summer2024 } from '../src/mocks/medalData.js';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
        <Route path="/world-cup" element={<WorldCupPage />}/>
        <Route path="/olympics/summer" element={<OlympicsPage image={imgHero} medalData={Summer2024} noticias={noticiasOlimpiadasMock} />}/>
        <Route path="/olympics/winter" element={<OlympicsPage />}/>
        <Route path="/historia/cazetv" element={<HistoriaPage />}/>
        <Route path="/shop" element={<ShopPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        {/* CAMPEONATOS */}
        <Route path="/brasileirao" element={<ChampionshipPage campeonato={brasileirao}/>}/>
        <Route path="/paulistao" element={<ChampionshipPage campeonato={paulista}/>}/>
        <Route path="/carioca" element={<ChampionshipPage campeonato={carioca}/>}/>
        <Route path="/mineiro" element={<ChampionshipPage campeonato={mineiro}/>}/>
        <Route path="/gaucho" element={<ChampionshipPage campeonato={gauchao}/>}/>
        <Route path="/libertadores" element={<ChampionshipPage campeonato={libertadores} />} />
        <Route path="/copa-do-brasil" element={<ChampionshipPage campeonato={copaDoBrasil}/>}/>
        <Route path="/sudamericana" element={<ChampionshipPage campeonato={sulAmericana}/>}/>
        <Route path="/news" element={<NewsPage />}/>
      </Routes>
    </Router>
  )
}

export default App