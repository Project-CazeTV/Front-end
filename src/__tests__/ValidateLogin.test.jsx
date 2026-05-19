import { user, render, screen } from '@testing-library/react'
import LoginPage from '../pages/LoginPage/LoginPage'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

test('exibe mensagem de erro ao tentar logar com email inválido', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><LoginPage /></MemoryRouter>)
    await user.click(screen.getByRole('button', { name: /arrow_forward/i }))
    expect(await screen.findByText(/Insira dados válidos./i)).toBeInTheDocument()
})