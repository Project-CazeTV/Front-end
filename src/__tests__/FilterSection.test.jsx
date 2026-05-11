import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WorldCupPage from '../pages/WorldCupPage/WorldCupPage'
import { MemoryRouter } from 'react-router-dom'

//eu pesquisei e esse /i em getByRole é para ignorar maiúsculas e minúsculas, 
//ou seja, ele vai encontrar o botão mesmo que esteja escrito "Quartas de Final" 
//ou "quartas de final", por exemplo.

// obs: precisei do <MemoryRouter> para renderizar a página, 
// porque ela usa o useLocation

test('ao clicar em Quartas de final, exibe a descrição da fase', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><WorldCupPage /></MemoryRouter>)
    await user.click(screen.getByRole('button', { name: /Quartas de final/i }))
    expect(screen.getByText(/Os 8 vencedores das oitavas se enfrentam em jogos eliminatórios. Apenas os 4 melhores avançam para as semifinais./i)).toBeInTheDocument()
})

test('ao clicar em Semi-final, exibe a descrição da fase', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><WorldCupPage /></MemoryRouter>)
    await user.click(screen.getByRole('button', { name: /Semi-final/i }))
    expect(screen.getByText(/As quatro seleções que restaram disputam as duas vagas na grande final. Um passo para a eternidade./i)).toBeInTheDocument()
})