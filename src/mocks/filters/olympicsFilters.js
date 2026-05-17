export const filtros = [
  "Esportes Aquáticos",
  "Atletismo",
  "Ginástica",
  "Esportes de Combate",
  "Esportes de Equipe/Quadra",
  "Ciclismo",
];

export const sports = [
  "Natação",
  "Saltos Ornamentais",
  "Maratona Aquática",
  "Polo Aquático",
  "Nado Artístico",
];

export const sportsByCategory = {
  "Esportes Aquáticos": {
    "Natação": [
      { nome: "Provas de piscina", desc: "50m, 100m, 200m, 400m, 800m, 1500m", icone: "pool" },
      { nome: "Revezamentos", desc: "4×100m e 4×200m livre e medley", icone: "group" },
      { nome: "Estilos", desc: "Livre, costas, peito, borboleta, medley", icone: "swap_horiz" },
    ],
    "Saltos Ornamentais": [
      { nome: "Trampolim 3m", desc: "Individual e sincronizado", icone: "sports_gymnastics" },
      { nome: "Plataforma 10m", desc: "Individual e sincronizado", icone: "vertical_align_top" },
    ],
    "Maratona Aquática": [
      { nome: "10km em águas abertas", desc: "Masculino e feminino", icone: "directions_run" },
    ],
    "Polo Aquático": [
      { nome: "Torneio masculino", desc: "12 equipes, fase de grupos + eliminatórias", icone: "sports_handball" },
      { nome: "Torneio feminino", desc: "8 equipes, fase de grupos + eliminatórias", icone: "sports_handball" },
    ],
    "Nado Artístico": [
      { nome: "Dueto", desc: "Rotinas técnica e livre", icone: "people" },
      { nome: "Equipe", desc: "Rotinas técnica e livre com 8 atletas", icone: "groups" },
      { nome: "Acrobático", desc: "Combinado de figuras e rotinas", icone: "auto_awesome" },
    ],
  },

  "Atletismo": {
    "Natação": [],
    "Saltos Ornamentais": [],
    "Maratona Aquática": [],
    "Polo Aquático": [],
    "Nado Artístico": [],
  },
};