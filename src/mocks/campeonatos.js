// ─────────────────────────────────────────────
// CAMPEONATOS.JS
// Dados atualizados até 09/05/2026
// Fonte: CBF, CONMEBOL, Wikipédia, Gazeta Esportiva
// ─────────────────────────────────────────────

// ── STRUCTURE DE CADA CAMPEONATO ──
// id, nome, nomeCompleto, edicao, logo, cor, fase, tabela, jogosPassados, proximosJogos

export const brasileirao = {
  id: "brasileirao-2026",
  nome: "Brasileirão",
  nomeCompleto: "Brasileirão Betano – Série A 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Campeonato_Brasileiro_S%C3%A9rie_A_logo_%282024%29.svg/1920px-Campeonato_Brasileiro_S%C3%A9rie_A_logo_%282024%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  cor: "#009B3A",
  fase: "Rodada 7 (em andamento)",
  tabela: [
    { pos: 1,  time: "Palmeiras",          pts: 33, j: 14, v: 10, e: 3, d: 1,  gp: 24, gc: 11, sg: 13,  zona: "libertadores" },
    { pos: 2,  time: "Flamengo",           pts: 26, j: 12, v: 8,  e: 2, d: 2,  gp: 24, gc: 10, sg: 14,  zona: "libertadores" },
    { pos: 3,  time: "Fluminense",         pts: 26, j: 13, v: 8,  e: 2, d: 3,  gp: 23, gc: 16, sg: 7,   zona: "libertadores" },
    { pos: 4,  time: "São Paulo",          pts: 23, j: 13, v: 7,  e: 2, d: 4,  gp: 17, gc: 11, sg: 6,   zona: "libertadores" },
    { pos: 5,  time: "Athletico-PR",       pts: 23, j: 14, v: 7,  e: 2, d: 5,  gp: 20, gc: 15, sg: 5,   zona: "pre-libertadores" },
    { pos: 6,  time: "Bahia",              pts: 21, j: 12, v: 6,  e: 3, d: 3,  gp: 17, gc: 14, sg: 3,   zona: "pre-libertadores" },
    { pos: 7,  time: "Coritiba",           pts: 19, j: 14, v: 5,  e: 4, d: 5,  gp: 16, gc: 17, sg: -1,  zona: "sulamericana" },
    { pos: 8,  time: "Vitória",            pts: 18, j: 13, v: 5,  e: 3, d: 5,  gp: 16, gc: 18, sg: -2,  zona: "sulamericana" },
    { pos: 9,  time: "Red Bull Bragantino",pts: 17, j: 13, v: 5,  e: 2, d: 6,  gp: 15, gc: 15, sg: 0,   zona: "sulamericana" },
    { pos: 10, time: "Botafogo",           pts: 17, j: 13, v: 5,  e: 2, d: 6,  gp: 25, gc: 26, sg: -1,  zona: "sulamericana" },
    { pos: 11, time: "Atlético-MG",        pts: 17, j: 14, v: 5,  e: 2, d: 7,  gp: 17, gc: 20, sg: -3,  zona: "sulamericana" },
    { pos: 12, time: "Grêmio",             pts: 17, j: 14, v: 4,  e: 5, d: 5,  gp: 15, gc: 16, sg: -1,  zona: "sulamericana" },
    { pos: 13, time: "Vasco",              pts: 16, j: 13, v: 4,  e: 4, d: 5,  gp: 18, gc: 19, sg: -1,  zona: "neutro" },
    { pos: 14, time: "Cruzeiro",           pts: 16, j: 14, v: 4,  e: 4, d: 6,  gp: 18, gc: 24, sg: -6,  zona: "neutro" },
    { pos: 15, time: "Corinthians",        pts: 15, j: 13, v: 3,  e: 6, d: 4,  gp: 9,  gc: 11, sg: -2,  zona: "neutro" },
    { pos: 16, time: "Santos",             pts: 15, j: 14, v: 3,  e: 6, d: 5,  gp: 19, gc: 22, sg: -3,  zona: "neutro" },
    { pos: 17, time: "Internacional",      pts: 14, j: 13, v: 3,  e: 5, d: 5,  gp: 12, gc: 14, sg: -2,  zona: "rebaixamento" },
    { pos: 18, time: "Remo",               pts: 11, j: 14, v: 2,  e: 5, d: 7,  gp: 15, gc: 24, sg: -9,  zona: "rebaixamento" },
    { pos: 19, time: "Chapecoense",        pts: 9,  j: 14, v: 2,  e: 3, d: 9,  gp: 12, gc: 28, sg: -16, zona: "rebaixamento" },
    { pos: 20, time: "Mirassol",           pts: 8,  j: 13, v: 2,  e: 2, d: 9,  gp: 11, gc: 22, sg: -11, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // Rodada 6 — 02/05/2026
    { data: "02/05/2026", hora: "16h00", timeA: "Botafogo",    timeB: "Remo",        placarA: 1, placarB: 2, estadio: "Nilton Santos",       rodada: 6 },
    { data: "02/05/2026", hora: "18h30", timeA: "Palmeiras",   timeB: "Santos",      placarA: 1, placarB: 1, estadio: "Allianz Parque",      rodada: 6 },
    { data: "02/05/2026", hora: "18h30", timeA: "Vitória",     timeB: "Coritiba",    placarA: 4, placarB: 1, estadio: "Barradão",            rodada: 6 },
    { data: "02/05/2026", hora: "20h30", timeA: "Athletico-PR",timeB: "Grêmio",      placarA: 0, placarB: 0, estadio: "Arena da Baixada",    rodada: 6 },
    { data: "03/05/2026", hora: "21h00", timeA: "Cruzeiro",    timeB: "Atlético-MG", placarA: 1, placarB: 3, estadio: "Mineirão",            rodada: 6 },
    // Rodada 5 — 26/04/2026
    { data: "26/04/2026", hora: "16h00", timeA: "Atlético-MG", timeB: "Flamengo",    placarA: 0, placarB: 4, estadio: "Arena MRV",           rodada: 5 },
    { data: "27/04/2026", hora: "18h30", timeA: "Flamengo",    timeB: "Bahia",       placarA: 2, placarB: 0, estadio: "Maracanã",            rodada: 5 },
  ],
  proximosJogos: [
    { data: "10/05/2026", hora: "18h30", timeA: "Corinthians", timeB: "São Paulo",   estadio: "Neo Química Arena", rodada: 7 },
    { data: "11/05/2026", hora: "16h00", timeA: "Flamengo",    timeB: "Grêmio",      estadio: "Maracanã",          rodada: 7 },
    { data: "11/05/2026", hora: "18h30", timeA: "Palmeiras",   timeB: "Cruzeiro",    estadio: "Allianz Parque",    rodada: 7 },
    { data: "11/05/2026", hora: "18h30", timeA: "Botafogo",    timeB: "Atlético-MG", estadio: "Nilton Santos",     rodada: 7 },
    { data: "11/05/2026", hora: "20h30", timeA: "Vasco",       timeB: "Fluminense",  estadio: "São Januário",      rodada: 7 },
  ]
};

export const copaDoBrasil = {
  id: "copa-do-brasil-2026",
  nome: "Copa do Brasil",
  nomeCompleto: "Copa Betano do Brasil 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/9/96/CopaDoBrasil.png",
  cor: "#FFD700",
  fase: "Quinta fase (oitavas de final)",
  tabela: null, // Copa do Brasil não tem tabela de classificação, é mata-mata
  confrontos: [
    // Jogo de ida — quinta fase
    { data: "22/04/2026", hora: "21h30", timeA: "Flamengo",    timeB: "Vitória",      placarA: 2, placarB: 1, estadio: "Maracanã",           fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "20h00", timeA: "São Paulo",   timeB: "Juventude",    placarA: 1, placarB: 0, estadio: "MorumBIS",           fase: "Quinta fase - ida" },
    { data: "22/04/2026", hora: "21h30", timeA: "Bahia",       timeB: "Remo",         placarA: 1, placarB: 3, estadio: "Arena Fonte Nova",   fase: "Quinta fase - ida" },
    { data: "23/04/2026", hora: "21h30", timeA: "Palmeiras",   timeB: "Jacuipense",   placarA: 3, placarB: 0, estadio: "Allianz Parque",     fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Paysandu",    timeB: "Vasco",        placarA: 0, placarB: 2, estadio: "Curuzu",             fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Botafogo",    timeB: "Chapecoense",  placarA: 1, placarB: 0, estadio: "Nilton Santos",      fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Athletico-PR",timeB: "Atlético-GO",  placarA: 0, placarB: 0, estadio: "Arena da Baixada",   fase: "Quinta fase - ida" },
  ],
  proximosJogos: [
    { data: "13/05/2026", hora: "21h30", timeA: "Vitória",     timeB: "Flamengo",     estadio: "Barradão",          fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "19h30", timeA: "Juventude",   timeB: "São Paulo",    estadio: "Alfredo Jaconi",    fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Remo",        timeB: "Bahia",        estadio: "Baenão",            fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Jacuipense",  timeB: "Palmeiras",    estadio: "Carneirão",         fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "21h30", timeA: "Vasco",       timeB: "Paysandu",     estadio: "São Januário",      fase: "Quinta fase - volta" },
  ]
};

export const libertadores = {
  id: "libertadores-2026",
  nome: "Libertadores",
  nomeCompleto: "Copa Libertadores da América 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/95/Conmebol_Libertadores_logo.svg/1280px-Conmebol_Libertadores_logo.svg.png",
  cor: "#F5C518",
  fase: "Fase de grupos (rodada 5 de 6)",
  grupos: [
    {
      grupo: "A",
      tabela: [
        { pos: 1, time: "Palmeiras",           pais: "BRA", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 9, gc: 3, sg: 6 },
        { pos: 2, time: "Cerro Porteño",        pais: "PAR", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 7, sg: -2 },
        { pos: 3, time: "Junior Barranquilla",  pais: "COL", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Sporting Cristal",     pais: "PER", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 8, sg: -5 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Flamengo",             pais: "BRA", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 8, gc: 5, sg: 3 },
        { pos: 2, time: "Estudiantes",          pais: "ARG", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 6, gc: 4, sg: 2 },
        { pos: 3, time: "Ind. Medellín",        pais: "COL", pts: 5,  j: 3, v: 1, e: 2, d: 0, gp: 3, gc: 2, sg: 1 },
        { pos: 4, time: "Cusco FC",             pais: "PER", pts: 1,  j: 4, v: 0, e: 1, d: 3, gp: 2, gc: 8, sg: -6 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Fluminense",           pais: "BRA", pts: 9,  j: 4, v: 3, e: 0, d: 1, gp: 7, gc: 4, sg: 3 },
        { pos: 2, time: "Bolívar",              pais: "BOL", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 6, gc: 5, sg: 1 },
        { pos: 3, time: "Ind. Santa Fe",        pais: "COL", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Platense",             pais: "ARG", pts: 1,  j: 4, v: 0, e: 1, d: 3, gp: 2, gc: 7, sg: -5 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Boca Juniors",         pais: "ARG", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 8, gc: 2, sg: 6 },
        { pos: 2, time: "Cruzeiro",             pais: "BRA", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 6, sg: -1 },
        { pos: 3, time: "Ind. del Valle",       pais: "ECU", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 4, gc: 6, sg: -2 },
        { pos: 4, time: "Libertad",             pais: "PAR", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 7, sg: -4 },
      ]
    },
    {
      grupo: "E",
      tabela: [
        { pos: 1, time: "Corinthians",          pais: "BRA", pts: 8,  j: 4, v: 2, e: 2, d: 0, gp: 6, gc: 3, sg: 3 },
        { pos: 2, time: "LDU Quito",            pais: "ECU", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Lanús",                pais: "ARG", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 7, sg: -4 },
        { pos: 4, time: "Rosario Central",      pais: "ARG", pts: 3,  j: 4, v: 1, e: 0, d: 3, gp: 3, gc: 6, sg: -3 },
      ]
    },
    {
      grupo: "F",
      tabela: [
        { pos: 1, time: "Mirassol",             pais: "BRA", pts: 7,  j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 2, time: "Always Ready",         pais: "BOL", pts: 6,  j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 5, sg: 0 },
        { pos: 3, time: "Universitario",        pais: "PER", pts: 5,  j: 4, v: 1, e: 2, d: 1, gp: 4, gc: 4, sg: 0 },
        { pos: 4, time: "Club Nacional",        pais: "URU", pts: 4,  j: 4, v: 1, e: 1, d: 2, gp: 3, gc: 5, sg: -2 },
      ]
    },
  ],
  proximosJogos: [
    { data: "20/05/2026", hora: "21h30", timeA: "Fluminense",  timeB: "Bolívar",        estadio: "Maracanã",        fase: "Fase de grupos - rd 5" },
    { data: "20/05/2026", hora: "21h30", timeA: "Always Ready",timeB: "Mirassol",       estadio: "Estadio Municipal",fase: "Fase de grupos - rd 5" },
    { data: "20/05/2026", hora: "21h30", timeA: "Boca Juniors", timeB: "Cruzeiro",      estadio: "La Bombonera",    fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Flamengo",    timeB: "Estudiantes",    estadio: "Maracanã",        fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Palmeiras",   timeB: "Cerro Porteño",  estadio: "Allianz Parque",  fase: "Fase de grupos - rd 5" },
    { data: "21/05/2026", hora: "21h30", timeA: "Corinthians", timeB: "LDU Quito",      estadio: "Neo Química Arena",fase: "Fase de grupos - rd 5" },
  ]
};

export const sulAmericana = {
  id: "sul-americana-2026",
  nome: "Sul-Americana",
  nomeCompleto: "Copa Sul-Americana 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/e/e4/Conmebol_Sudamericana_logo.png",
  cor: "#FF6B00",
  fase: "Fase de grupos (rodada 4 de 6)",
  grupos: [
    {
      grupo: "A",
      tabela: [
        { pos: 1, time: "Athletico-PR",     pais: "BRA", pts: 9,  j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 2, sg: 5 },
        { pos: 2, time: "Colo-Colo",        pais: "CHI", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 3, time: "Sao Lorenzo",      pais: "ARG", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 6, sg: -4 },
        { pos: 4, time: "The Strongest",    pais: "BOL", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Grêmio",           pais: "BRA", pts: 7,  j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4 },
        { pos: 2, time: "Defensa y Justicia",pais: "ARG", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Talleres",         pais: "ARG", pts: 2,  j: 3, v: 0, e: 2, d: 1, gp: 3, gc: 4, sg: -1 },
        { pos: 4, time: "Dep. Táchira",     pais: "VEN", pts: 2,  j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 5, sg: -3 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Vasco",            pais: "BRA", pts: 7,  j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3 },
        { pos: 2, time: "Peñarol",          pais: "URU", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 6, gc: 3, sg: 3 },
        { pos: 3, time: "Olimpia",          pais: "PAR", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Liga de Quito",    pais: "ECU", pts: 1,  j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 6, sg: -5 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Internacional",    pais: "BRA", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 2, time: "Newell's",         pais: "ARG", pts: 6,  j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 3, sg: 1 },
        { pos: 3, time: "Paranaense",       pais: "COL", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Palestino",        pais: "CHI", pts: 3,  j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      ]
    },
  ],
  proximosJogos: [
    { data: "14/05/2026", hora: "19h15", timeA: "Grêmio",       timeB: "Talleres",       estadio: "Arena do Grêmio",  fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "19h15", timeA: "Athletico-PR", timeB: "Sao Lorenzo",    estadio: "Arena da Baixada", fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Vasco",        timeB: "Peñarol",        estadio: "São Januário",     fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Internacional",timeB: "Newell's",       estadio: "Beira-Rio",        fase: "Fase de grupos - rd 4" },
  ]
};

// ── CAMPEONATOS ESTADUAIS (já encerrados) ──

export const paulista = {
  id: "paulista-2026",
  nome: "Paulistão",
  nomeCompleto: "Campeonato Paulista Betano 2026",
  edicao: "2026",
  logo: "https://vectorseek.com/wp-content/uploads/2023/12/PAULISTAO-Logo-Vector.svg-.png",
  cor: "#003399",
  fase: "Encerrado",
  campeao: "Palmeiras",
  vice: "São Paulo",
  tabela: [
    { pos: 1, time: "Palmeiras",    pts: 28, j: 12, v: 9,  e: 1, d: 2,  gp: 25, gc: 10, sg: 15,  grupo: "A" },
    { pos: 2, time: "São Paulo",    pts: 22, j: 12, v: 7,  e: 1, d: 4,  gp: 18, gc: 14, sg: 4,   grupo: "B" },
    { pos: 3, time: "Corinthians",  pts: 20, j: 12, v: 6,  e: 2, d: 4,  gp: 16, gc: 13, sg: 3,   grupo: "C" },
    { pos: 4, time: "Santos",       pts: 18, j: 12, v: 5,  e: 3, d: 4,  gp: 14, gc: 13, sg: 1,   grupo: "D" },
  ],
  jogosPassados: [
    { data: "22/03/2026", hora: "16h00", timeA: "Palmeiras", timeB: "São Paulo", placarA: 2, placarB: 1, estadio: "Allianz Parque", fase: "Final" },
  ],
  proximosJogos: []
};

export const carioca = {
  id: "carioca-2026",
  nome: "Carioca",
  nomeCompleto: "Campeonato Carioca Superbet 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Carioca2017.png",
  cor: "#CC0000",
  fase: "Encerrado",
  campeao: "Flamengo",
  vice: "Fluminense",
  tabela: [
    { pos: 1, time: "Flamengo",    pts: 26, j: 11, v: 8, e: 2, d: 1, gp: 22, gc: 9,  sg: 13 },
    { pos: 2, time: "Fluminense",  pts: 22, j: 11, v: 7, e: 1, d: 3, gp: 18, gc: 12, sg: 6  },
    { pos: 3, time: "Botafogo",    pts: 19, j: 11, v: 6, e: 1, d: 4, gp: 16, gc: 14, sg: 2  },
    { pos: 4, time: "Vasco",       pts: 15, j: 11, v: 4, e: 3, d: 4, gp: 13, gc: 14, sg: -1 },
  ],
  jogosPassados: [
    { data: "15/03/2026", hora: "16h00", timeA: "Flamengo", timeB: "Fluminense", placarA: 3, placarB: 1, estadio: "Maracanã", fase: "Final" },
  ],
  proximosJogos: []
};

export const mineiro = {
  id: "mineiro-2026",
  nome: "Mineiro",
  nomeCompleto: "Campeonato Mineiro Sicredi 2026",
  edicao: "2026",
  logo: "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F2360.png",
  cor: "#003366",
  fase: "Encerrado",
  campeao: "Atlético-MG",
  vice: "Cruzeiro",
  tabela: [
    { pos: 1, time: "Atlético-MG", pts: 25, j: 11, v: 8, e: 1, d: 2, gp: 20, gc: 8,  sg: 12 },
    { pos: 2, time: "Cruzeiro",    pts: 21, j: 11, v: 6, e: 3, d: 2, gp: 17, gc: 11, sg: 6  },
    { pos: 3, time: "America-MG",  pts: 16, j: 11, v: 5, e: 1, d: 5, gp: 13, gc: 14, sg: -1 },
    { pos: 4, time: "Villa Nova",  pts: 12, j: 11, v: 3, e: 3, d: 5, gp: 10, gc: 15, sg: -5 },
  ],
  jogosPassados: [
    { data: "08/03/2026", hora: "16h00", timeA: "Atlético-MG", timeB: "Cruzeiro", placarA: 2, placarB: 0, estadio: "Arena MRV", fase: "Final" },
  ],
  proximosJogos: []
};

export const gauchao = {
  id: "gauchao-2026",
  nome: "Gauchão",
  nomeCompleto: "Campeonato Gaúcho Ipiranga 2026",
  edicao: "2026",
  logo: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Gauch%C3%A3o_2025.png",
  cor: "#006400",
  fase: "Encerrado",
  campeao: "Grêmio",
  vice: "Internacional",
  tabela: [
    { pos: 1, time: "Grêmio",         pts: 24, j: 10, v: 7, e: 3, d: 0, gp: 18, gc: 6,  sg: 12 },
    { pos: 2, time: "Internacional",  pts: 20, j: 10, v: 6, e: 2, d: 2, gp: 15, gc: 9,  sg: 6  },
    { pos: 3, time: "Juventude",      pts: 14, j: 10, v: 4, e: 2, d: 4, gp: 11, gc: 12, sg: -1 },
    { pos: 4, time: "Caxias",         pts: 10, j: 10, v: 3, e: 1, d: 6, gp: 8,  gc: 16, sg: -8 },
  ],
  jogosPassados: [
    { data: "05/04/2026", hora: "16h00", timeA: "Grêmio", timeB: "Internacional", placarA: 1, placarB: 0, estadio: "Arena do Grêmio", fase: "Final" },
  ],
  proximosJogos: []
};