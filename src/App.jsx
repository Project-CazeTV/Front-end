import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import WorldCupPage from './pages/WorldCupPage/WorldCupPage'
import OlympicsPage from './pages/OlympicsPage/OlympicsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/world-cup" element={<WorldCupPage />}/>
        <Route path="/olympics" element={<OlympicsPage />}/>
      </Routes>
    </Router>
  )
}

export default App