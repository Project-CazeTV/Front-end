# 📺 CazeTV - Frontend

Frontend desenvolvido para a plataforma **CazeTV**, com foco em organização, componentização e uma experiência de usuário dinâmica e moderna para consumo de conteúdo esportivo e transmissões ao vivo.

## 📖 Sobre o Projeto

O **CazeTV - Frontend** é a interface web de uma plataforma de streaming voltada para conteúdos esportivos, como jogos ao vivo, replays e destaques. A aplicação foi construída utilizando **React**.

A estrutura do projeto foi pensada para facilitar manutenção e evolução, com separação clara entre páginas, componentes reutilizáveis, serviços e rotas.

A interface permite ao usuário:

- Navegar por transmissões ao vivo  
- Visualizar cronograma de eventos esportivos  
- Explorar destaques e melhores momentos  
- Gerenciar perfil e preferências  
- Interagir com conteúdos (ex: favoritos, histórico)
- Loja interativa para compras de itens temáticos da CatéTV e esportivos

## 🚀 Tecnologias Utilizadas

- React  
- Vite  
- CSS Modules  
- React Router  
- Fetch API
- API Google
- API Futebol

## 🧠 Arquitetura

O projeto segue uma arquitetura modular baseada em separação de responsabilidades:

```bash
src/
│
├── api/            # Configuração de chamadas HTTP
├── assets/         # Imagens, ícones e thumbnails
├── components/     # Componentes reutilizáveis
│   ├── common/     # Botões, inputs, cards, players
│   └── layouts/    # Layouts (header, sidebar, etc.)
│
├── pages/          # Páginas (home, live, detalhes, perfil)
├── routes/         # Configuração de rotas
├── service/        # Integração com API e regras de negócio
├── styles/         # Estilos globais
│
├── App.tsx         # Componente raiz
├── main.tsx        # Entry point
```
A aplicação é construída com foco em reutilização:

- **Componentes comuns** → Cards de vídeo, botões, players  
- **Layouts** → Estrutura base (home, player ao vivo, dashboard)  
- **Componentes específicos** → Player de vídeo, timeline de eventos, lista de transmissões  

## ⚙️ Como Executar o Projeto

### 📋 Pré-requisitos

- Node.js (18+ recomendado)  
- npm  

## 📦 Instalação

```bash
npm install
```

▶️ Executando o projeto
```bash
npm run dev
```

🌐 Acesso
```bash
http://localhost:5173
```

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <h3>Richard Alves</h3>
      <a href="https://github.com/Richard-Alves167" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/richard-alves-dev" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <h3>Taylan Silva</h3>
      <a href="https://github.com/taylan04" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/taylansilva04/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <h3>Gabriel Lima</h3>
      <a href="https://github.com/gaelcoder/" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/gabrielsaz/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <h3>Juan Santos</h3>
      <a href="https://github.com/Juan8Santos" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/juanpaixao/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <h3>Juliana Pereira</h3>
      <a href="https://github.com/Juhgraham" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="https://www.linkedin.com/in/juliana-pereira-3677a2232/" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <h3>Rodrigo Menezes</h3>
      <a href="https://github.com/rodriimenezes" target="_blank">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <br><br>
      <a href="" target="_blank">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>
