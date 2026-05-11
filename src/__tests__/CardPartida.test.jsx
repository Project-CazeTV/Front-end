import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardPartida from '../features/Championships/components/CardPartida/CardPartida'
import ChampionshipPage from '../pages/ChampionshipPage/ChampionshipPage'
import {brasileirao, libertadores, copaDoBrasil, paulista, mineiro, gauchao, carioca, sulAmericana} from '../mocks/campeonatos'
import { MemoryRouter } from 'react-router-dom'

test('CardPartida pendente exibe "A definir"', () => {
  render(<CardPartida jogo={{ timeA: 'Flamengo', timeB: 'Palmeiras' }} pendente={true} />)
  const elementos = screen.getAllByText(/A definir/i)
  //esse toBe(2) é para garantir que os dois times estão com "A definir"
  expect(elementos.length).toBe(2)
})