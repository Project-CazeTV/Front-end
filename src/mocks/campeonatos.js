import pedro from "../assets/artilharias/brasileirao/pedro.png";
import john from "../assets/artilharias/brasileirao/jonh.png";
import kevin from "../assets/artilharias/brasileirao/kevin.png";
import juba from "../assets/artilharias/brasileirao/juba.png";
import arthur from "../assets/artilharias/brasileirao/arthur.png";
import danilo from "../assets/artilharias/brasileirao/danilo.png";
import breno from "../assets/artilharias/brasileirao/breno.png";
import vini from "../assets/artilharias/brasileirao/vini.png";
import calleri from "../assets/artilharias/brasileirao/calleri.png";
import luciano from "../assets/artilharias/brasileirao/luciano.png";
import lopez from "../assets/artilharias/brasileirao/lopez.png";
import christian from "../assets/artilharias/brasileirao/christian.png";
import mendonza from "../assets/artilharias/brasileirao/mendonza.png";
import edenilson from "../assets/artilharias/brasileirao/edenilson.png";
import pedroRocha from "../assets/artilharias/brasileirao/pedrorocha.png";
import Carlos from "../assets/artilharias/libertadores/Carlos.png";
import Arce from "../assets/artilharias/libertadores/Arce.png";
import Barrandeguy from "../assets/artilharias/libertadores/Barrandeguy.png";
import Fydriszewski from "../assets/artilharias/libertadores/Fydriszewski.png";
import Tiago from "../assets/artilharias/libertadores/Tiago.png";
import Melgarejo from "../assets/artilharias/libertadores/Melgarejo.png";
import Gustavo from "../assets/artilharias/libertadores/Gustavo.png";
import Chancellor from "../assets/artilharias/libertadores/Chancellor.png";
import Fajardo from "../assets/artilharias/libertadores/Fajardo.png";
import Yotun from "../assets/artilharias/libertadores/Yotún.png";
import Tortolero from "../assets/artilharias/libertadores/Tortolero.png";
import Hayen from "../assets/artilharias/libertadores/Hayen.png";
import Francisco from "../assets/artilharias/libertadores/Francisco.png";
import Willian from "../assets/artilharias/libertadores/Willian.png";
import Villalba from "../assets/artilharias/libertadores/Villalba.png";

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
  fase: "Rodada 15 (em andamento)",
  tabela: [
    { pos: 1, time: "Palmeiras", pts: 35, j: 16, v: 10, e: 5, d: 1, gp: 26, gc: 13, sg: 13, zona: "libertadores" },
    { pos: 2, time: "Flamengo", pts: 31, j: 15, v: 9, e: 4, d: 2, gp: 28, gc: 13, sg: 15, zona: "libertadores" },
    { pos: 3, time: "Fluminense", pts: 30, j: 16, v: 9, e: 3, d: 4, gp: 27, gc: 21, sg: 6, zona: "libertadores" },
    { pos: 4, time: "São Paulo", pts: 24, j: 16, v: 7, e: 3, d: 6, gp: 22, gc: 18, sg: 4, zona: "libertadores" },
    { pos: 5, time: "Athletico Paranaense", pts: 24, j: 16, v: 7, e: 3, d: 6, gp: 21, gc: 17, sg: 4, zona: "pre-libertadores" },
    { pos: 6, time: "Red Bull Bragantino", pts: 23, j: 16, v: 7, e: 2, d: 7, gp: 19, gc: 18, sg: 1, zona: "pre-libertadores" },
    { pos: 7, time: "Bahia", pts: 23, j: 15, v: 6, e: 5, d: 4, gp: 21, gc: 19, sg: 2, zona: "sulamericana" },
    { pos: 8, time: "Coritiba SAF", pts: 23, j: 16, v: 6, e: 5, d: 5, gp: 21, gc: 19, sg: 2, zona: "sulamericana" },
    { pos: 9, time: "Botafogo", pts: 21, j: 15, v: 6, e: 3, d: 6, gp: 29, gc: 28, sg: 1, zona: "sulamericana" },
    { pos: 10, time: "Atlético Mineiro", pts: 21, j: 16, v: 6, e: 3, d: 7, gp: 21, gc: 22, sg: -1, zona: "sulamericana" },
    { pos: 11, time: "Internacional", pts: 21, j: 16, v: 5, e: 6, d: 5, gp: 20, gc: 17, sg: 3, zona: "sulamericana" },
    { pos: 12, time: "Vasco da Gama Saf", pts: 20, j: 16, v: 5, e: 5, d: 6, gp: 22, gc: 25, sg: -3, zona: "sulamericana" },
    { pos: 13, time: "Cruzeiro", pts: 20, j: 16, v: 5, e: 5, d: 6, gp: 21, gc: 26, sg: -5, zona: "neutro" },
    { pos: 14, time: "Vitória", pts: 19, j: 15, v: 5, e: 4, d: 6, gp: 18, gc: 22, sg: -4, zona: "neutro" },
    { pos: 15, time: "Grêmio", pts: 18, j: 16, v: 4, e: 6, d: 6, gp: 16, gc: 18, sg: -2, zona: "neutro" },
    { pos: 16, time: "Santos FC", pts: 18, j: 16, v: 4, e: 6, d: 6, gp: 21, gc: 25, sg: -4, zona: "neutro" },
    { pos: 17, time: "Corinthians", pts: 18, j: 16, v: 4, e: 6, d: 6, gp: 14, gc: 18, sg: -4, zona: "rebaixamento" },
    { pos: 18, time: "Remo", pts: 15, j: 16, v: 3, e: 6, d: 7, gp: 19, gc: 27, sg: -8, zona: "rebaixamento" },
    { pos: 19, time: "Mirassol", pts: 13, j: 15, v: 3, e: 4, d: 8, gp: 17, gc: 23, sg: -6, zona: "rebaixamento" },
    { pos: 20, time: "Chapecoense", pts: 9, j: 15, v: 1, e: 6, d: 8, gp: 16, gc: 30, sg: -14, zona: "rebaixamento" },
  ],
  jogosPassados: [
    // ── Rodada 12 — 18-19/04/2026 ──
    { data: "18/04/2026", hora: "18h30", timeA: "Vasco", timeB: "São Paulo", placarA: 2, placarB: 1, estadio: "São Januário", rodada: 12 },
    { data: "18/04/2026", hora: "18h30", timeA: "Chapecoense", timeB: "Botafogo", placarA: 1, placarB: 4, estadio: "Arena Condá", rodada: 12 },
    { data: "18/04/2026", hora: "20h00", timeA: "Vitória", timeB: "Corinthians", placarA: 0, placarB: 0, estadio: "Barradão", rodada: 12 },
    { data: "18/04/2026", hora: "20h30", timeA: "Cruzeiro", timeB: "Grêmio", placarA: 2, placarB: 0, estadio: "Mineirão", rodada: 12 },
    { data: "19/04/2026", hora: "11h00", timeA: "Internacional", timeB: "Mirassol", placarA: 1, placarB: 2, estadio: "Beira-Rio", rodada: 12 },
    { data: "19/04/2026", hora: "16h00", timeA: "Santos", timeB: "Fluminense", placarA: 2, placarB: 3, estadio: "Vila Belmiro", rodada: 12 },
    { data: "19/04/2026", hora: "16h00", timeA: "Coritiba", timeB: "Atlético-MG", placarA: 2, placarB: 0, estadio: "Couto Pereira", rodada: 12 },
    { data: "19/04/2026", hora: "18h30", timeA: "Palmeiras", timeB: "Athletico-PR", placarA: 1, placarB: 0, estadio: "Allianz Parque", rodada: 12 },
    { data: "19/04/2026", hora: "18h30", timeA: "Red Bull Bragantino", timeB: "Remo", placarA: 4, placarB: 2, estadio: "Cícero de Souza Marques", rodada: 12 },
    { data: "19/04/2026", hora: "19h30", timeA: "Flamengo", timeB: "Bahia", placarA: 2, placarB: 0, estadio: "Maracanã", rodada: 12 },

    // ── Rodada 13 — 25-26/04/2026 ──
    { data: "25/04/2026", hora: "18h30", timeA: "Botafogo", timeB: "Internacional", placarA: 2, placarB: 2, estadio: "Mané Garrincha", rodada: 13 },
    { data: "25/04/2026", hora: "18h30", timeA: "Bahia", timeB: "Santos", placarA: 2, placarB: 2, estadio: "Arena Fonte Nova", rodada: 13 },
    { data: "25/04/2026", hora: "18h30", timeA: "Remo", timeB: "Cruzeiro", placarA: 0, placarB: 1, estadio: "Baenão", rodada: 13 },
    { data: "25/04/2026", hora: "21h00", timeA: "São Paulo", timeB: "Mirassol", placarA: 1, placarB: 0, estadio: "Brinco de Ouro", rodada: 13 },
    { data: "26/04/2026", hora: "16h00", timeA: "Corinthians", timeB: "Vasco", placarA: 1, placarB: 0, estadio: "Neo Química Arena", rodada: 13 },
    { data: "26/04/2026", hora: "16h00", timeA: "Grêmio", timeB: "Coritiba", placarA: 1, placarB: 0, estadio: "Arena do Grêmio", rodada: 13 },
    { data: "26/04/2026", hora: "18h30", timeA: "Red Bull Bragantino", timeB: "Palmeiras", placarA: 0, placarB: 1, estadio: "Cícero de Souza Marques", rodada: 13 },
    { data: "26/04/2026", hora: "18h30", timeA: "Athletico-PR", timeB: "Vitória", placarA: 3, placarB: 1, estadio: "Arena da Baixada", rodada: 13 },
    { data: "26/04/2026", hora: "20h30", timeA: "Fluminense", timeB: "Chapecoense", placarA: 2, placarB: 1, estadio: "Maracanã", rodada: 13 },
    { data: "26/04/2026", hora: "20h30", timeA: "Atlético-MG", timeB: "Flamengo", placarA: 0, placarB: 4, estadio: "Arena MRV", rodada: 13 },

    // ── Rodada 14 — 02-03/05/2026 ──
    { data: "02/05/2026", hora: "16h00", timeA: "Botafogo", timeB: "Remo", placarA: 1, placarB: 2, estadio: "Nilton Santos", rodada: 14 },
    { data: "02/05/2026", hora: "18h30", timeA: "Palmeiras", timeB: "Santos", placarA: 1, placarB: 1, estadio: "Allianz Parque", rodada: 14 },
    { data: "02/05/2026", hora: "18h30", timeA: "Vitória", timeB: "Coritiba", placarA: 4, placarB: 1, estadio: "Barradão", rodada: 14 },
    { data: "02/05/2026", hora: "20h30", timeA: "Athletico-PR", timeB: "Grêmio", placarA: 0, placarB: 0, estadio: "Arena da Baixada", rodada: 14 },
    { data: "02/05/2026", hora: "21h00", timeA: "Cruzeiro", timeB: "Atlético-MG", placarA: 1, placarB: 3, estadio: "Mineirão", rodada: 14 },
    { data: "03/05/2026", hora: "16h00", timeA: "Flamengo", timeB: "Vasco", placarA: 2, placarB: 2, estadio: "Maracanã", rodada: 14 },
    { data: "03/05/2026", hora: "16h00", timeA: "São Paulo", timeB: "Bahia", placarA: 2, placarB: 2, estadio: "Cícero de Souza Marques", rodada: 14 },
    { data: "03/05/2026", hora: "18h30", timeA: "Internacional", timeB: "Fluminense", placarA: 2, placarB: 0, estadio: "Beira-Rio", rodada: 14 },
    { data: "03/05/2026", hora: "18h30", timeA: "Chapecoense", timeB: "Red Bull Bragantino", placarA: 1, placarB: 2, estadio: "Arena Condá", rodada: 14 },
    { data: "03/05/2026", hora: "20h30", timeA: "Mirassol", timeB: "Corinthians", placarA: 2, placarB: 1, estadio: "Maião", rodada: 14 },

    // ── Rodada 15 ──
    { data: "09/05/2026", hora: "16h00", timeA: "Coritiba", timeB: "Internacional", placarA: 2, placarB: 2, estadio: "Couto Pereira", rodada: 15 },
    { data: "09/05/2026", hora: "18h00", timeA: "Fluminense", timeB: "Vitória", placarA: 2, placarB: 2, estadio: "Maracanã", rodada: 15 },
    { data: "09/05/2026", hora: "21h00", timeA: "Bahia", timeB: "Cruzeiro", placarA: 1, placarB: 2, estadio: "Casa de Apostas Arena Fonte Nova", rodada: 15 },
    { data: "10/05/2026", hora: "16h00", timeA: "Atlético-MG", timeB: "Botafogo", placarA: 1, placarB: 1, estadio: "Arena MRV", rodada: 15 },
    { data: "10/05/2026", hora: "16h00", timeA: "Remo", timeB: "Palmeiras", placarA: 1, placarB: 1, estadio: "Mangueirão", rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Santos", timeB: "Red Bull Bragantino", placarA: 2, placarB: 0, estadio: "Vila Belmiro", rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Corinthians", timeB: "São Paulo", placarA: 3, placarB: 2, estadio: "Neo Química Arena", rodada: 15 },
    { data: "10/05/2026", hora: "18h30", timeA: "Mirassol", timeB: "Chapecoense", placarA: 1, placarB: 1, estadio: "Maião", rodada: 15 },
    { data: "10/05/2026", hora: "19h30", timeA: "Grêmio", timeB: "Flamengo", placarA: 0, placarB: 1, estadio: "Arena do Grêmio", rodada: 15 },
    { data: "10/05/2026", hora: "20h30", timeA: "Vasco", timeB: "Athletico-PR", placarA: 1, placarB: 0, estadio: "São Januário", rodada: 15 },

    // ── Rodada 16 ──
    { data: "16/05/2026", hora: "18h30", timeA: "Atlético-MG", timeB: "Mirassol", placarA: 3, placarB: 1, estadio: "Arena MRV", rodada: 16 },
    { data: "16/05/2026", hora: "18h30", timeA: "Internacional", timeB: "Vasco", placarA: 4, placarB: 1, estadio: "Beira-Rio", rodada: 16 },
    { data: "16/05/2026", hora: "19h00", timeA: "Fluminense", timeB: "São Paulo", placarA: 2, placarB: 1, estadio: "Maracanã", rodada: 16 },
    { data: "16/05/2026", hora: "21h00", timeA: "Palmeiras", timeB: "Cruzeiro", placarA: 1, placarB: 1, estadio: "Arena Barueri", rodada: 16 },
    { data: "17/05/2026", hora: "11h00", timeA: "Santos", timeB: "Coritiba", placarA: 0, placarB: 3, estadio: "Neo Química Arena", rodada: 16 },
    { data: "17/05/2026", hora: "16h00", timeA: "Botafogo", timeB: "Corinthians", placarA: 3, placarB: 1, estadio: "Nilton Santos", rodada: 16 },
    { data: "17/05/2026", hora: "16h00", timeA: "Bahia", timeB: "Grêmio", placarA: 1, placarB: 1, estadio: "Casa de Apostas Arena Fonte Nova", rodada: 16 },
    { data: "17/05/2026", hora: "18h30", timeA: "Red Bull Bragantino", timeB: "Vitória", placarA: 2, placarB: 0, estadio: "Cícero de Souza Marques", rodada: 16 },
    { data: "17/05/2026", hora: "18h30", timeA: "Chapecoense", timeB: "Remo", placarA: 2, placarB: 3, estadio: "Arena Condá", rodada: 16 },
    { data: "17/05/2026", hora: "19h30", timeA: "Athletico-PR", timeB: "Flamengo", placarA: 1, placarB: 1, estadio: "Arena da Baixada", rodada: 16 },
  ],
  proximosJogos: [
    // ── Rodada 17 ──
    { data: "23/05/2026", hora: "17h00", timeA: "São Paulo", timeB: "Botafogo", estadio: "Morumbis", rodada: 17 },
    { data: "23/05/2026", hora: "17h00", timeA: "Vitória", timeB: "Internacional", estadio: "Barradão", rodada: 17 },
    { data: "23/05/2026", hora: "19h00", timeA: "Mirassol", timeB: "Fluminense", estadio: "Maião", rodada: 17 },
    { data: "23/05/2026", hora: "19h00", timeA: "Grêmio", timeB: "Santos", estadio: "Arena do Grêmio", rodada: 17 },
    { data: "23/05/2026", hora: "21h00", timeA: "Flamengo", timeB: "Palmeiras", estadio: "Maracanã", rodada: 17 },
    { data: "24/05/2026", hora: "16h00", timeA: "Cruzeiro", timeB: "Chapecoense", estadio: "Mineirão", rodada: 17 },
    { data: "24/05/2026", hora: "16h00", timeA: "Remo", timeB: "Athletico-PR", estadio: "Mangueirão", rodada: 17 },
    { data: "24/05/2026", hora: "18h30", timeA: "Corinthians", timeB: "Atlético-MG", estadio: "Neo Química Arena", rodada: 17 },
    { data: "24/05/2026", hora: "20h30", timeA: "Vasco", timeB: "Red Bull Bragantino", estadio: "São Januário", rodada: 17 },
    { data: "25/05/2026", hora: "20h00", timeA: "Coritiba", timeB: "Bahia", estadio: "Couto Pereira", rodada: 17 },
  ],
  artilharia: [
    { nome: "Pedro", gols: 9, clube: "Flamengo", imagem: pedro },
    { nome: "John Kennedy", gols: 8, clube: "Fluminense", imagem: john },
    { nome: "Kevin Viveros", gols: 8, clube: "Athletico-PR", imagem: kevin },
    { nome: "Luciano Juba", gols: 7, clube: "Bahia", imagem: juba },
    { nome: "Arthur", gols: 7, clube: "Botafogo", imagem: arthur },
    { nome: "Danilo Santos", gols: 7, clube: "Botafogo", imagem: danilo },
    { nome: "Breno", gols: 7, clube: "Coritiba", imagem: breno },
    { nome: "Vinicius", gols: 7, clube: "Grêmio", imagem: vini },
    { nome: "Calleri", gols: 6, clube: "São Paulo", imagem: calleri },
    { nome: "Luciano", gols: 5, clube: "São Paulo", imagem: luciano },
    { nome: "Lopez", gols: 5, clube: "Palmeiras", imagem: lopez },
    { nome: "Christian", gols: 5, clube: "Cruzeiro", imagem: christian },
    { nome: "Mendoza", gols: 5, clube: "Athletico-PR", imagem: mendonza },
    { nome: "Edenilson", gols: 4, clube: "Botafogo", imagem: edenilson },
    { nome: "Pedro Rocha", gols: 4, clube: "Coritiba", imagem: pedroRocha },
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
    { data: "22/04/2026", hora: "21h30", timeA: "Flamengo", timeB: "Vitória", placarA: 2, placarB: 1, estadio: "Maracanã", fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "20h00", timeA: "São Paulo", timeB: "Juventude", placarA: 1, placarB: 0, estadio: "MorumBIS", fase: "Quinta fase - ida" },
    { data: "22/04/2026", hora: "21h30", timeA: "Bahia", timeB: "Remo", placarA: 1, placarB: 3, estadio: "Arena Fonte Nova", fase: "Quinta fase - ida" },
    { data: "23/04/2026", hora: "21h30", timeA: "Palmeiras", timeB: "Jacuipense", placarA: 3, placarB: 0, estadio: "Allianz Parque", fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Paysandu", timeB: "Vasco", placarA: 0, placarB: 2, estadio: "Curuzu", fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Botafogo", timeB: "Chapecoense", placarA: 1, placarB: 0, estadio: "Nilton Santos", fase: "Quinta fase - ida" },
    { data: "21/04/2026", hora: "21h30", timeA: "Athletico-PR", timeB: "Atlético-GO", placarA: 0, placarB: 0, estadio: "Arena da Baixada", fase: "Quinta fase - ida" },
  ],
  proximosJogos: [
    { data: "13/05/2026", hora: "21h30", timeA: "Vitória", timeB: "Flamengo", estadio: "Barradão", fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "19h30", timeA: "Juventude", timeB: "São Paulo", estadio: "Alfredo Jaconi", fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Remo", timeB: "Bahia", estadio: "Baenão", fase: "Quinta fase - volta" },
    { data: "14/05/2026", hora: "21h30", timeA: "Jacuipense", timeB: "Palmeiras", estadio: "Carneirão", fase: "Quinta fase - volta" },
    { data: "13/05/2026", hora: "21h30", timeA: "Vasco", timeB: "Paysandu", estadio: "São Januário", fase: "Quinta fase - volta" },
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
        { pos: 1, time: "Flamengo", pais: "BRA", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 7, gc: 2, sg: 5 },
        { pos: 2, time: "Estudiantes", pais: "ARG", pts: 6, j: 4, v: 1, e: 3, d: 0, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Independiente Medellín", pais: "COL", pts: 4, j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Cusco", pais: "PER", pts: 1, j: 4, v: 0, e: 1, d: 3, gp: 2, gc: 6, sg: -4 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Tolima", pais: "COL", pts: 8, j: 5, v: 2, e: 2, d: 1, gp: 7, gc: 3, sg: 4 },
        { pos: 2, time: "Coquimbo Unido", pais: "CHI", pts: 8, j: 5, v: 2, e: 2, d: 1, gp: 5, gc: 5, sg: 0 },
        { pos: 3, time: "Universitario", pais: "PER", pts: 4, j: 4, v: 1, e: 1, d: 2, gp: 5, gc: 6, sg: -1 },
        { pos: 4, time: "Nacional-URU", pais: "URU", pts: 4, j: 4, v: 1, e: 1, d: 2, gp: 6, gc: 9, sg: -3 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Independiente Rivadavia", pais: "ARG", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 8, gc: 3, sg: 5 },
        { pos: 2, time: "Bolívar", pais: "BOL", pts: 5, j: 5, v: 1, e: 2, d: 2, gp: 4, gc: 4, sg: 0 },
        { pos: 3, time: "Fluminense", pais: "BRA", pts: 5, j: 5, v: 1, e: 2, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "La Guaira", pais: "VEN", pts: 3, j: 4, v: 0, e: 3, d: 1, gp: 3, gc: 6, sg: -3 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Universidad Católica", pais: "CHI", pts: 7, j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 2, time: "Cruzeiro", pais: "BRA", pts: 7, j: 4, v: 2, e: 1, d: 1, gp: 3, gc: 2, sg: 1 },
        { pos: 3, time: "Boca Juniors", pais: "ARG", pts: 6, j: 4, v: 2, e: 0, d: 2, gp: 5, gc: 3, sg: 2 },
        { pos: 4, time: "Barcelona de Guayaquil", pais: "ECU", pts: 3, j: 4, v: 1, e: 0, d: 3, gp: 2, gc: 6, sg: -4 },
      ]
    },
    {
      grupo: "E",
      tabela: [
        { pos: 1, time: "Corinthians", pais: "BRA", pts: 10, j: 4, v: 3, e: 1, d: 0, gp: 7, gc: 1, sg: 6 },
        { pos: 2, time: "Platense", pais: "ARG", pts: 7, j: 4, v: 2, e: 1, d: 1, gp: 5, gc: 5, sg: 0 },
        { pos: 3, time: "Santa Fe", pais: "COL", pts: 2, j: 4, v: 0, e: 2, d: 2, gp: 3, gc: 6, sg: -3 },
        { pos: 4, time: "Peñarol", pais: "URU", pts: 2, j: 4, v: 0, e: 2, d: 2, gp: 3, gc: 6, sg: -3 },
      ]
    },
    {
      grupo: "F",
      tabela: [
        { pos: 1, time: "Palmeiras", pais: "BRA", pts: 8, j: 4, v: 2, e: 2, d: 0, gp: 6, gc: 3, sg: 3 },
        { pos: 2, time: "Cerro Porteño", pais: "PAR", pts: 7, j: 4, v: 2, e: 1, d: 1, gp: 3, gc: 2, sg: 1 },
        { pos: 3, time: "Sporting Cristal", pais: "PER", pts: 6, j: 4, v: 2, e: 0, d: 2, gp: 4, gc: 4, sg: 0 },
        { pos: 4, time: "Junior Barranquilla", pais: "COL", pts: 1, j: 4, v: 0, e: 1, d: 3, gp: 1, gc: 5, sg: -4 },
      ]
    },
    {
      grupo: "G",
      tabela: [
        { pos: 1, time: "Mirassol", pais: "BRA", pts: 9, j: 4, v: 3, e: 0, d: 1, gp: 5, gc: 2, sg: 3 },
        { pos: 2, time: "Lanús", pais: "ARG", pts: 6, j: 4, v: 2, e: 0, d: 2, gp: 2, gc: 5, sg: -3 },
        { pos: 3, time: "LDU", pais: "ECU", pts: 6, j: 4, v: 2, e: 0, d: 2, gp: 3, gc: 3, sg: 0 },
        { pos: 4, time: "Always Ready", pais: "BOL", pts: 3, j: 4, v: 1, e: 0, d: 3, gp: 4, gc: 4, sg: 0 },
      ]
    },
    {
      grupo: "H",
      tabela: [
        { pos: 1, time: "Rosario Central", pais: "ARG", pts: 11, j: 5, v: 3, e: 2, d: 0, gp: 5, gc: 0, sg: 5 },
        { pos: 2, time: "Independiente del Valle", pais: "ECU", pts: 7, j: 4, v: 2, e: 1, d: 1, gp: 6, gc: 5, sg: 1 },
        { pos: 3, time: "Universidad Central", pais: "VEN", pts: 7, j: 5, v: 2, e: 1, d: 2, gp: 6, gc: 7, sg: -1 },
        { pos: 4, time: "Libertad", pais: "PAR", pts: 0, j: 4, v: 0, e: 0, d: 4, gp: 3, gc: 8, sg: -5 },
      ]
    },
  ],
  jogosPassados: [
  // ── Grupo A — 1ª rodada ──
  { data: "08/04/2026", hora: "21h00", timeA: "Independiente Medellín", timeB: "Estudiantes", placarA: 1, placarB: 1, estadio: "Atanasio Girardot", fase: "Fase de grupos • 1ª rodada" },
  { data: "08/04/2026", hora: "21h30", timeA: "Cusco", timeB: "Flamengo", placarA: 0, placarB: 2, estadio: "Garcilaso de la Vega", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo A — 2ª rodada ──
  { data: "14/04/2026", hora: "19h00", timeA: "Estudiantes", timeB: "Cusco", placarA: 2, placarB: 1, estadio: "Jorge Luis Hirschi", fase: "Fase de grupos • 2ª rodada" },
  { data: "16/04/2026", hora: "21h30", timeA: "Flamengo", timeB: "Independiente Medellín", placarA: 4, placarB: 1, estadio: "Maracanã", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo A — 3ª rodada ──
  { data: "29/04/2026", hora: "21h30", timeA: "Estudiantes", timeB: "Flamengo", placarA: 1, placarB: 1, estadio: "Jorge Luis Hirschi", fase: "Fase de grupos • 3ª rodada" },
  { data: "30/04/2026", hora: "23h00", timeA: "Independiente Medellín", timeB: "Cusco", placarA: 1, placarB: 0, estadio: "Atanasio Girardot", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo A — 4ª rodada ──
  { data: "06/05/2026", hora: "19h00", timeA: "Cusco", timeB: "Estudiantes", placarA: 1, placarB: 1, estadio: "Garcilaso de la Vega", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo B — 1ª rodada ──
  { data: "07/04/2026", hora: "23h00", timeA: "Tolima", timeB: "Universitario", placarA: 0, placarB: 0, estadio: "Manuel Murillo Toro", fase: "Fase de grupos • 1ª rodada" },
  { data: "08/04/2026", hora: "19h00", timeA: "Coquimbo Unido", timeB: "Nacional-URU", placarA: 1, placarB: 1, estadio: "Francisco Rumoroso", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo B — 2ª rodada ──
  { data: "14/04/2026", hora: "19h00", timeA: "Nacional-URU", timeB: "Tolima", placarA: 3, placarB: 1, estadio: "Parque Central", fase: "Fase de grupos • 2ª rodada" },
  { data: "14/04/2026", hora: "23h00", timeA: "Universitario", timeB: "Coquimbo Unido", placarA: 0, placarB: 2, estadio: "Monumental de Lima", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo B — 3ª rodada ──
  { data: "28/04/2026", hora: "23h00", timeA: "Tolima", timeB: "Coquimbo Unido", placarA: 3, placarB: 0, estadio: "Manuel Murillo Toro", fase: "Fase de grupos • 3ª rodada" },
  { data: "29/04/2026", hora: "23h00", timeA: "Universitario", timeB: "Nacional-URU", placarA: 4, placarB: 2, estadio: "Monumental de Lima", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo B — 4ª rodada ──
  { data: "06/05/2026", hora: "23h00", timeA: "Tolima", timeB: "Nacional-URU", placarA: 3, placarB: 0, estadio: "Manuel Murillo Toro", fase: "Fase de grupos • 4ª rodada" },
  { data: "07/05/2026", hora: "21h00", timeA: "Coquimbo Unido", timeB: "Universitario", placarA: 2, placarB: 1, estadio: "Francisco Rumoroso", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo C — 1ª rodada ──
  { data: "07/04/2026", hora: "19h00", timeA: "Independiente Rivadavia", timeB: "Bolívar", placarA: 1, placarB: 0, estadio: "Malvinas Argentinas", fase: "Fase de grupos • 1ª rodada" },
  { data: "07/04/2026", hora: "19h00", timeA: "La Guaira", timeB: "Fluminense", placarA: 0, placarB: 0, estadio: "Olimpico de la UCV", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo C — 2ª rodada ──
  { data: "14/04/2026", hora: "21h00", timeA: "Bolívar", timeB: "La Guaira", placarA: 1, placarB: 1, estadio: "Hernando Siles", fase: "Fase de grupos • 2ª rodada" },
  { data: "15/04/2026", hora: "21h30", timeA: "Fluminense", timeB: "Independiente Rivadavia", placarA: 1, placarB: 2, estadio: "Maracanã", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo C — 3ª rodada ──
  { data: "30/04/2026", hora: "19h00", timeA: "Independiente Rivadavia", timeB: "La Guaira", placarA: 4, placarB: 1, estadio: "Malvinas Argentinas", fase: "Fase de grupos • 3ª rodada" },
  { data: "30/04/2026", hora: "19h00", timeA: "Bolívar", timeB: "Fluminense", placarA: 2, placarB: 0, estadio: "Hernando Siles", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo C — 4ª rodada ──
  { data: "06/05/2026", hora: "19h00", timeA: "La Guaira", timeB: "Bolívar", placarA: 1, placarB: 1, estadio: "Olimpico de la UCV", fase: "Fase de grupos • 4ª rodada" },
  { data: "06/05/2026", hora: "21h30", timeA: "Independiente Rivadavia", timeB: "Fluminense", placarA: 1, placarB: 1, estadio: "Malvinas Argentinas", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo D — 1ª rodada ──
  { data: "07/04/2026", hora: "21h00", timeA: "Barcelona de Guayaquil", timeB: "Cruzeiro", placarA: 0, placarB: 1, estadio: "Monumental de Guayaquil", fase: "Fase de grupos • 1ª rodada" },
  { data: "07/04/2026", hora: "21h30", timeA: "Universidad Católica", timeB: "Boca Juniors", placarA: 1, placarB: 2, estadio: "San Carlos de Apoquindo", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo D — 2ª rodada ──
  { data: "14/04/2026", hora: "21h00", timeA: "Boca Juniors", timeB: "Barcelona de Guayaquil", placarA: 3, placarB: 0, estadio: "La Bombonera", fase: "Fase de grupos • 2ª rodada" },
  { data: "15/04/2026", hora: "19h00", timeA: "Cruzeiro", timeB: "Universidad Católica", placarA: 1, placarB: 2, estadio: "Mineirão", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo D — 3ª rodada ──
  { data: "28/04/2026", hora: "21h30", timeA: "Cruzeiro", timeB: "Boca Juniors", placarA: 1, placarB: 0, estadio: "Mineirão", fase: "Fase de grupos • 3ª rodada" },
  { data: "29/04/2026", hora: "21h00", timeA: "Barcelona de Guayaquil", timeB: "Universidad Católica", placarA: 1, placarB: 2, estadio: "Monumental de Guayaquil", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo D — 4ª rodada ──
  { data: "05/05/2026", hora: "21h00", timeA: "Barcelona de Guayaquil", timeB: "Boca Juniors", placarA: 1, placarB: 0, estadio: "Monumental de Guayaquil", fase: "Fase de grupos • 4ª rodada" },
  { data: "06/05/2026", hora: "23h00", timeA: "Universidad Católica", timeB: "Cruzeiro", placarA: 0, placarB: 0, estadio: "San Carlos de Apoquindo", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo E — 1ª rodada ──
  { data: "09/04/2026", hora: "21h00", timeA: "Platense", timeB: "Corinthians", placarA: 0, placarB: 2, estadio: "Ciudad de Vicente López", fase: "Fase de grupos • 1ª rodada" },
  { data: "09/04/2026", hora: "23h00", timeA: "Santa Fe", timeB: "Peñarol", placarA: 1, placarB: 1, estadio: "El Campín", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo E — 2ª rodada ──
  { data: "15/04/2026", hora: "21h30", timeA: "Corinthians", timeB: "Santa Fe", placarA: 2, placarB: 0, estadio: "Neo Química Arena", fase: "Fase de grupos • 2ª rodada" },
  { data: "16/04/2026", hora: "21h30", timeA: "Peñarol", timeB: "Platense", placarA: 1, placarB: 2, estadio: "Campeón del Siglo", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo E — 3ª rodada ──
  { data: "29/04/2026", hora: "19h00", timeA: "Platense", timeB: "Santa Fe", placarA: 2, placarB: 1, estadio: "Ciudad de Vicente López", fase: "Fase de grupos • 3ª rodada" },
  { data: "30/04/2026", hora: "21h00", timeA: "Corinthians", timeB: "Peñarol", placarA: 2, placarB: 0, estadio: "Neo Química Arena", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo E — 4ª rodada ──
  { data: "06/05/2026", hora: "21h30", timeA: "Santa Fe", timeB: "Corinthians", placarA: 1, placarB: 1, estadio: "El Campín", fase: "Fase de grupos • 4ª rodada" },
  { data: "07/05/2026", hora: "19h00", timeA: "Platense", timeB: "Peñarol", placarA: 1, placarB: 1, estadio: "Ciudad de Vicente López", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo F — 1ª rodada ──
  { data: "08/04/2026", hora: "21h30", timeA: "Junior Barranquilla", timeB: "Palmeiras", placarA: 1, placarB: 1, estadio: "Cartagena", fase: "Fase de grupos • 1ª rodada" },
  { data: "08/04/2026", hora: "23h00", timeA: "Sporting Cristal", timeB: "Cerro Porteño", placarA: 1, placarB: 0, estadio: "Alejandro Villanueva", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo F — 2ª rodada ──
  { data: "14/04/2026", hora: "19h00", timeA: "Cerro Porteño", timeB: "Junior Barranquilla", placarA: 1, placarB: 0, estadio: "La Nueva Olla", fase: "Fase de grupos • 2ª rodada" },
  { data: "16/04/2026", hora: "19h00", timeA: "Palmeiras", timeB: "Sporting Cristal", placarA: 2, placarB: 1, estadio: "Allianz Parque", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo F — 3ª rodada ──
  { data: "28/04/2026", hora: "23h00", timeA: "Sporting Cristal", timeB: "Junior Barranquilla", placarA: 2, placarB: 0, estadio: "Nacional de Lima", fase: "Fase de grupos • 3ª rodada" },
  { data: "29/04/2026", hora: "21h30", timeA: "Cerro Porteño", timeB: "Palmeiras", placarA: 1, placarB: 1, estadio: "La Nueva Olla", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo F — 4ª rodada ──
  { data: "05/05/2026", hora: "19h00", timeA: "Sporting Cristal", timeB: "Palmeiras", placarA: 0, placarB: 2, estadio: "Alejandro Villanueva", fase: "Fase de grupos • 4ª rodada" },
  { data: "07/05/2026", hora: "23h00", timeA: "Junior Barranquilla", timeB: "Cerro Porteño", placarA: 0, placarB: 1, estadio: "Romelio Martínez", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo G — 1ª rodada ──
  { data: "07/04/2026", hora: "21h00", timeA: "Always Ready", timeB: "LDU", placarA: 0, placarB: 1, estadio: "Municipal de El Alto", fase: "Fase de grupos • 1ª rodada" },
  { data: "08/04/2026", hora: "19h00", timeA: "Mirassol", timeB: "Lanús", placarA: 1, placarB: 0, estadio: "Maião", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo G — 2ª rodada ──
  { data: "14/04/2026", hora: "23h00", timeA: "LDU", timeB: "Mirassol", placarA: 2, placarB: 0, estadio: "Casa Blanca", fase: "Fase de grupos • 2ª rodada" },
  { data: "16/04/2026", hora: "19h00", timeA: "Lanús", timeB: "Always Ready", placarA: 1, placarB: 0, estadio: "La Fortaleza", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo G — 3ª rodada ──
  { data: "28/04/2026", hora: "19h00", timeA: "Lanús", timeB: "LDU", placarA: 1, placarB: 0, estadio: "La Fortaleza", fase: "Fase de grupos • 3ª rodada" },
  { data: "29/04/2026", hora: "19h00", timeA: "Mirassol", timeB: "Always Ready", placarA: 2, placarB: 0, estadio: "Maião", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo G — 4ª rodada ──
  { data: "05/05/2026", hora: "21h30", timeA: "Always Ready", timeB: "Lanús", placarA: 4, placarB: 0, estadio: "Municipal de El Alto", fase: "Fase de grupos • 4ª rodada" },
  { data: "07/05/2026", hora: "19h00", timeA: "Mirassol", timeB: "LDU", placarA: 2, placarB: 0, estadio: "Maião", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo H — 1ª rodada ──
  { data: "09/04/2026", hora: "19h00", timeA: "Universidad Central", timeB: "Libertad", placarA: 3, placarB: 1, estadio: "Olimpico de la UCV", fase: "Fase de grupos • 1ª rodada" },
  { data: "09/04/2026", hora: "19h00", timeA: "Rosario Central", timeB: "Independiente del Valle", placarA: 0, placarB: 0, estadio: "Gigante Arroyito", fase: "Fase de grupos • 1ª rodada" },

  // ── Grupo H — 2ª rodada ──
  { data: "15/04/2026", hora: "19h00", timeA: "Libertad", timeB: "Rosario Central", placarA: 0, placarB: 1, estadio: "Tigo La Huerta", fase: "Fase de grupos • 2ª rodada" },
  { data: "15/04/2026", hora: "23h00", timeA: "Independiente del Valle", timeB: "Universidad Central", placarA: 3, placarB: 1, estadio: "Banco Guayaquil", fase: "Fase de grupos • 2ª rodada" },

  // ── Grupo H — 3ª rodada ──
  { data: "28/04/2026", hora: "19h00", timeA: "Libertad", timeB: "Independiente del Valle", placarA: 2, placarB: 3, estadio: "Tigo La Huerta", fase: "Fase de grupos • 3ª rodada" },
  { data: "28/04/2026", hora: "21h00", timeA: "Universidad Central", timeB: "Rosario Central", placarA: 0, placarB: 3, estadio: "Olimpico de la UCV", fase: "Fase de grupos • 3ª rodada" },

  // ── Grupo H — 4ª rodada ──
  { data: "05/05/2026", hora: "19h00", timeA: "Rosario Central", timeB: "Libertad", placarA: 1, placarB: 0, estadio: "Gigante Arroyito", fase: "Fase de grupos • 4ª rodada" },
  { data: "05/05/2026", hora: "21h00", timeA: "Universidad Central", timeB: "Independiente del Valle", placarA: 2, placarB: 0, estadio: "Olimpico de la UCV", fase: "Fase de grupos • 4ª rodada" },
],

proximosJogos: [
  // ── Grupo A — 4ª rodada ──
  { data: "07/05/2026", hora: "21h30", timeA: "Independiente Medellín", timeB: "Flamengo", estadio: "Atanasio Girardot", fase: "Fase de grupos • 4ª rodada" },

  // ── Grupo A — 5ª rodada ──
  { data: "20/05/2026", hora: "21h30", timeA: "Flamengo", timeB: "Estudiantes", estadio: "Maracanã", fase: "Fase de grupos • 5ª rodada" },
  { data: "20/05/2026", hora: "23h00", timeA: "Cusco", timeB: "Independiente Medellín", estadio: "Garcilaso de la Vega", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo A — 6ª rodada ──
  { data: "26/05/2026", hora: "21h30", timeA: "Flamengo", timeB: "Cusco", estadio: "Maracanã", fase: "Fase de grupos • 6ª rodada" },
  { data: "26/05/2026", hora: "21h30", timeA: "Estudiantes", timeB: "Independiente Medellín", estadio: "Jorge Luis Hirschi", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo B — 5ª rodada ──
  { data: "19/05/2026", hora: "19h00", timeA: "Coquimbo Unido", timeB: "Tolima", estadio: "Francisco Rumoroso", fase: "Fase de grupos • 5ª rodada" },
  { data: "20/05/2026", hora: "19h00", timeA: "Nacional-URU", timeB: "Universitario", estadio: "Parque Central", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo B — 6ª rodada ──
  { data: "26/05/2026", hora: "21h30", timeA: "Nacional-URU", timeB: "Coquimbo Unido", estadio: "Parque Central", fase: "Fase de grupos • 6ª rodada" },
  { data: "26/05/2026", hora: "21h30", timeA: "Universitario", timeB: "Tolima", estadio: "Monumental de Lima", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo C — 5ª rodada ──
  { data: "19/05/2026", hora: "19h00", timeA: "Fluminense", timeB: "Bolívar", estadio: "Maracanã", fase: "Fase de grupos • 5ª rodada" },
  { data: "21/05/2026", hora: "19h00", timeA: "La Guaira", timeB: "Independiente Rivadavia", estadio: "Olimpico de la UCV", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo C — 6ª rodada ──
  { data: "27/05/2026", hora: "21h30", timeA: "Bolívar", timeB: "Independiente Rivadavia", estadio: "Hernando Siles", fase: "Fase de grupos • 6ª rodada" },
  { data: "27/05/2026", hora: "21h30", timeA: "Fluminense", timeB: "La Guaira", estadio: "Maracanã", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo D — 5ª rodada ──
  { data: "19/05/2026", hora: "21h30", timeA: "Boca Juniors", timeB: "Cruzeiro", estadio: "La Bombonera", fase: "Fase de grupos • 5ª rodada" },
  { data: "21/05/2026", hora: "21h30", timeA: "Universidad Católica", timeB: "Barcelona de Guayaquil", estadio: "San Carlos de Apoquindo", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo D — 6ª rodada ──
  { data: "28/05/2026", hora: "21h30", timeA: "Boca Juniors", timeB: "Universidad Católica", estadio: "La Bombonera", fase: "Fase de grupos • 6ª rodada" },
  { data: "28/05/2026", hora: "21h30", timeA: "Cruzeiro", timeB: "Barcelona de Guayaquil", estadio: "Mineirão", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo E — 5ª rodada ──
  { data: "19/05/2026", hora: "21h00", timeA: "Santa Fe", timeB: "Platense", estadio: "El Campín", fase: "Fase de grupos • 5ª rodada" },
  { data: "21/05/2026", hora: "21h30", timeA: "Peñarol", timeB: "Corinthians", estadio: "Campeón del Siglo", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo E — 6ª rodada ──
  { data: "27/05/2026", hora: "21h30", timeA: "Corinthians", timeB: "Platense", estadio: "Neo Química Arena", fase: "Fase de grupos • 6ª rodada" },
  { data: "27/05/2026", hora: "21h30", timeA: "Peñarol", timeB: "Santa Fe", estadio: "Campeón del Siglo", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo F — 5ª rodada ──
  { data: "20/05/2026", hora: "21h30", timeA: "Palmeiras", timeB: "Cerro Porteño", estadio: "Allianz Parque", fase: "Fase de grupos • 5ª rodada" },
  { data: "20/05/2026", hora: "23h00", timeA: "Junior Barranquilla", timeB: "Sporting Cristal", estadio: "Romelio Martínez", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo F — 6ª rodada ──
  { data: "28/05/2026", hora: "19h00", timeA: "Palmeiras", timeB: "Junior Barranquilla", estadio: "Allianz Parque", fase: "Fase de grupos • 6ª rodada" },
  { data: "28/05/2026", hora: "19h00", timeA: "Cerro Porteño", timeB: "Sporting Cristal", estadio: "La Nueva Olla", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo G — 5ª rodada ──
  { data: "19/05/2026", hora: "21h00", timeA: "Always Ready", timeB: "Mirassol", estadio: "Tigo La Huerta", fase: "Fase de grupos • 5ª rodada" },
  { data: "20/05/2026", hora: "21h30", timeA: "LDU", timeB: "Lanús", estadio: "Casa Blanca", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo G — 6ª rodada ──
  { data: "26/05/2026", hora: "19h00", timeA: "LDU", timeB: "Always Ready", estadio: "Casa Blanca", fase: "Fase de grupos • 6ª rodada" },
  { data: "26/05/2026", hora: "19h00", timeA: "Lanús", timeB: "Mirassol", estadio: "La Fortaleza", fase: "Fase de grupos • 6ª rodada" },

  // ── Grupo H — 5ª rodada ──
  { data: "19/05/2026", hora: "19h00", timeA: "Rosario Central", timeB: "Universidad Central", estadio: "Gigante Arroyito", fase: "Fase de grupos • 5ª rodada" },
  { data: "19/05/2026", hora: "23h00", timeA: "Independiente del Valle", timeB: "Libertad", estadio: "Banco Guayaquil", fase: "Fase de grupos • 5ª rodada" },

  // ── Grupo H — 6ª rodada ──
  { data: "27/05/2026", hora: "19h00", timeA: "Independiente del Valle", timeB: "Rosario Central", estadio: "Banco Guayaquil", fase: "Fase de grupos • 6ª rodada" },
  { data: "27/05/2026", hora: "19h00", timeA: "Libertad", timeB: "Universidad Central", estadio: "Tigo La Huerta", fase: "Fase de grupos • 6ª rodada" },
],
artilharia: [
  { nome: "Carlos González", gols: 5, clube: "Independiente del Valle", imagem: Carlos },
  { nome: "Arce", gols: 5, clube: "Independiente Rivadavia", imagem: Arce },
  { nome: "Barrandeguy", gols: 3, clube: "Juventud", imagem: Barrandeguy },
  { nome: "Fydriszewski", gols: 3, clube: "Independiente Medellín", imagem: Fydriszewski },
  { nome: "Tiago Palacios", gols: 3, clube: "Estudiantes", imagem: Tiago },
  { nome: "Melgarejo", gols: 3, clube: "Libertad", imagem: Melgarejo },
  { nome: "Gustavo Henrique", gols: 3, clube: "Corinthians", imagem: Gustavo },
  { nome: "Chancellor", gols: 2, clube: "Universidad de Quito", imagem: Chancellor },
  { nome: "Fajardo", gols: 2, clube: "Universidad de Quito", imagem: Fajardo },
  { nome: "Yotún", gols: 2, clube: "Sporting Cristal", imagem: Yotun },
  { nome: "Tortolero", gols: 2, clube: "Carabobo", imagem: Tortolero },
  { nome: "Hayen Palacios", gols: 2, clube: "Independiente Medellín", imagem: Hayen },
  { nome: "Francisco González", gols: 2, clube: "O'Higgins", imagem: Francisco },
  { nome: "Willian José", gols: 2, clube: "Bahia", imagem: Willian },
  { nome: "Villalba", gols: 2, clube: "Barcelona de Guayaquil", imagem: Villalba },
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
        { pos: 1, time: "Athletico-PR", pais: "BRA", pts: 9, j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 2, sg: 5 },
        { pos: 2, time: "Colo-Colo", pais: "CHI", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 3, time: "Sao Lorenzo", pais: "ARG", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 6, sg: -4 },
        { pos: 4, time: "The Strongest", pais: "BOL", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4 },
      ]
    },
    {
      grupo: "B",
      tabela: [
        { pos: 1, time: "Grêmio", pais: "BRA", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4 },
        { pos: 2, time: "Defensa y Justicia", pais: "ARG", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 4, sg: 1 },
        { pos: 3, time: "Talleres", pais: "ARG", pts: 2, j: 3, v: 0, e: 2, d: 1, gp: 3, gc: 4, sg: -1 },
        { pos: 4, time: "Dep. Táchira", pais: "VEN", pts: 2, j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 5, sg: -3 },
      ]
    },
    {
      grupo: "C",
      tabela: [
        { pos: 1, time: "Vasco", pais: "BRA", pts: 7, j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3 },
        { pos: 2, time: "Peñarol", pais: "URU", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 6, gc: 3, sg: 3 },
        { pos: 3, time: "Olimpia", pais: "PAR", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Liga de Quito", pais: "ECU", pts: 1, j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 6, sg: -5 },
      ]
    },
    {
      grupo: "D",
      tabela: [
        { pos: 1, time: "Internacional", pais: "BRA", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2 },
        { pos: 2, time: "Newell's", pais: "ARG", pts: 6, j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 3, sg: 1 },
        { pos: 3, time: "Paranaense", pais: "COL", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2 },
        { pos: 4, time: "Palestino", pais: "CHI", pts: 3, j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2 },
      ]
    },
  ],
  proximosJogos: [
    { data: "14/05/2026", hora: "19h15", timeA: "Grêmio", timeB: "Talleres", estadio: "Arena do Grêmio", fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "19h15", timeA: "Athletico-PR", timeB: "Sao Lorenzo", estadio: "Arena da Baixada", fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Vasco", timeB: "Peñarol", estadio: "São Januário", fase: "Fase de grupos - rd 4" },
    { data: "15/05/2026", hora: "21h30", timeA: "Internacional", timeB: "Newell's", estadio: "Beira-Rio", fase: "Fase de grupos - rd 4" },
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
  vice: "Novorizontino",
  tabela: [
    { pos: 1, time: "Palmeiras", pts: 28, j: 12, v: 9, e: 1, d: 2, gp: 25, gc: 10, sg: 15, grupo: "A" },
    { pos: 2, time: "São Paulo", pts: 22, j: 12, v: 7, e: 1, d: 4, gp: 18, gc: 14, sg: 4, grupo: "B" },
    { pos: 3, time: "Corinthians", pts: 20, j: 12, v: 6, e: 2, d: 4, gp: 16, gc: 13, sg: 3, grupo: "C" },
    { pos: 4, time: "Novorizontino", pts: 18, j: 12, v: 5, e: 3, d: 4, gp: 14, gc: 13, sg: 1, grupo: "D" },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "21/02/2026", hora: "18h30", timeA: "Red Bull Bragantino", timeB: "São Paulo", placarA: 1, placarB: 2, estadio: "Cícero de Souza Marques", fase: "Quartas de final" },
    { data: "21/02/2026", hora: "20h30", timeA: "Palmeiras", timeB: "Capivariano", placarA: 4, placarB: 0, estadio: "Arena Barueri", fase: "Quartas de final" },
    { data: "22/02/2026", hora: "16h00", timeA: "Novorizontino", timeB: "Santos", placarA: 2, placarB: 1, estadio: "Jorge Ismael de Biasi", fase: "Quartas de final" },
    { data: "22/02/2026", hora: "20h30", timeA: "Portuguesa", timeB: "Corinthians", placarA: 1, placarB: 1, estadio: "Canindé", fase: "Quartas de final (Corinthians avançou nos pênaltis 7x8)" },

    // ── Semifinais ──
    { data: "28/02/2026", hora: "20h30", timeA: "Novorizontino", timeB: "Corinthians", placarA: 1, placarB: 0, estadio: "Jorge Ismael de Biasi", fase: "Semifinal" },
    { data: "01/03/2026", hora: "20h30", timeA: "Palmeiras", timeB: "São Paulo", placarA: 2, placarB: 1, estadio: "Arena Barueri", fase: "Semifinal" },

    // ── Final ──
    { data: "04/03/2026", hora: "20h00", timeA: "Palmeiras", timeB: "Novorizontino", placarA: 1, placarB: 0, estadio: "Arena Barueri", fase: "Final - ida" },
    { data: "08/03/2026", hora: "20h30", timeA: "Novorizontino", timeB: "Palmeiras", placarA: 1, placarB: 2, estadio: "Jorge Ismael de Biasi", fase: "Final - volta" },
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
    { pos: 1, time: "Flamengo", pts: 26, j: 11, v: 8, e: 2, d: 1, gp: 22, gc: 9, sg: 13 },
    { pos: 2, time: "Fluminense", pts: 22, j: 11, v: 7, e: 1, d: 3, gp: 18, gc: 12, sg: 6 },
    { pos: 3, time: "Botafogo", pts: 19, j: 11, v: 6, e: 1, d: 4, gp: 16, gc: 14, sg: 2 },
    { pos: 4, time: "Vasco", pts: 15, j: 11, v: 4, e: 3, d: 4, gp: 13, gc: 14, sg: -1 },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "13/02/2026", hora: "17h00", timeA: "Madureira", timeB: "Boavista", placarA: 2, placarB: 1, estadio: "Conselheiro Galvão", fase: "Quartas de final" },
    { data: "14/02/2026", hora: "21h30", timeA: "Vasco", timeB: "Volta Redonda", placarA: 1, placarB: 1, estadio: "São Januário", fase: "Quartas de final (5x3 nos pênaltis)" },
    { data: "15/02/2026", hora: "17h30", timeA: "Botafogo", timeB: "Flamengo", placarA: 1, placarB: 2, estadio: "Nilton Santos", fase: "Quartas de final" },
    { data: "16/02/2026", hora: "18h00", timeA: "Fluminense", timeB: "Bangu", placarA: 3, placarB: 1, estadio: "Maracanã", fase: "Quartas de final" },

    // ── Semifinais ──
    { data: "22/02/2026", hora: "18h00", timeA: "Vasco", timeB: "Fluminense", placarA: 0, placarB: 1, estadio: "Nilton Santos", fase: "Semifinal - ida" },
    { data: "22/02/2026", hora: "20h30", timeA: "Flamengo", timeB: "Madureira", placarA: 3, placarB: 0, estadio: "Maracanã", fase: "Semifinal - ida" },
    { data: "01/03/2026", hora: "18h00", timeA: "Fluminense", timeB: "Vasco", placarA: 1, placarB: 1, estadio: "Maracanã", fase: "Semifinal - volta" },
    { data: "02/03/2026", hora: "21h00", timeA: "Madureira", timeB: "Flamengo", placarA: 0, placarB: 8, estadio: "Maracanã", fase: "Semifinal - volta" },

    // ── Final ──
    { data: "08/03/2026", hora: "18h00", timeA: "Fluminense", timeB: "Flamengo", placarA: 0, placarB: 0, estadio: "Maracanã", fase: "Final - ida (Flamengo venceu nos pênaltis 4x5)" },
    { data: "15/03/2026", hora: "16h00", timeA: "Flamengo", timeB: "Fluminense", placarA: 3, placarB: 1, estadio: "Maracanã", fase: "Final - volta" },
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
  campeao: "Cruzeiro",
  vice: "Atlético-MG",
  tabela: [
    { pos: 1, time: "Atlético-MG", pts: 25, j: 11, v: 8, e: 1, d: 2, gp: 20, gc: 8, sg: 12 },
    { pos: 2, time: "Cruzeiro", pts: 21, j: 11, v: 6, e: 3, d: 2, gp: 17, gc: 11, sg: 6 },
    { pos: 3, time: "América-MG", pts: 16, j: 11, v: 5, e: 1, d: 5, gp: 13, gc: 14, sg: -1 },
    { pos: 4, time: "Villa Nova", pts: 12, j: 11, v: 3, e: 3, d: 5, gp: 10, gc: 15, sg: -5 },
  ],
  jogosPassados: [
    // ── Semifinais ──
    { data: "21/02/2026", hora: "18h30", timeA: "Pouso Alegre", timeB: "Cruzeiro", placarA: 1, placarB: 2, estadio: "Manduzão", fase: "Semifinal - ida" },
    { data: "22/02/2026", hora: "18h00", timeA: "Atlético-MG", timeB: "América-MG", placarA: 1, placarB: 1, estadio: "Arena MRV", fase: "Semifinal - ida" },
    { data: "28/02/2026", hora: "18h30", timeA: "Cruzeiro", timeB: "Pouso Alegre", placarA: 1, placarB: 0, estadio: "Mineirão", fase: "Semifinal - volta" },
    { data: "01/03/2026", hora: "18h00", timeA: "América-MG", timeB: "Atlético-MG", placarA: 0, placarB: 0, estadio: "Independência", fase: "Semifinal - volta (Atlético avançou nos pênaltis 2x4)" },

    // ── Final ──
    { data: "08/03/2026", hora: "18h00", timeA: "Cruzeiro", timeB: "Atlético-MG", placarA: 1, placarB: 0, estadio: "Mineirão", fase: "Final" },
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
    { pos: 1, time: "Grêmio", pts: 24, j: 10, v: 7, e: 3, d: 0, gp: 18, gc: 6, sg: 12 },
    { pos: 2, time: "Internacional", pts: 20, j: 10, v: 6, e: 2, d: 2, gp: 15, gc: 9, sg: 6 },
    { pos: 3, time: "Juventude", pts: 14, j: 10, v: 4, e: 2, d: 4, gp: 11, gc: 12, sg: -1 },
    { pos: 4, time: "Caxias", pts: 10, j: 10, v: 3, e: 1, d: 6, gp: 8, gc: 16, sg: -8 },
  ],
  jogosPassados: [
    // ── Quartas de final ──
    { data: "06/02/2026", hora: "20h30", timeA: "Caxias", timeB: "Ypiranga-RS", placarA: 0, placarB: 2, estadio: "Centenário", fase: "Quartas de final" },
    { data: "07/02/2026", hora: "18h30", timeA: "Grêmio", timeB: "Novo Hamburgo", placarA: 1, placarB: 0, estadio: "Arena do Grêmio", fase: "Quartas de final" },
    { data: "08/02/2026", hora: "18h00", timeA: "Internacional", timeB: "São Luiz", placarA: 3, placarB: 1, estadio: "Beira-Rio", fase: "Quartas de final" },
    { data: "09/02/2026", hora: "20h00", timeA: "Juventude", timeB: "São José-RS", placarA: 3, placarB: 2, estadio: "Alfredo Jaconi", fase: "Quartas de final" },

    // ── Semifinais ──
    { data: "15/02/2026", hora: "17h30", timeA: "Grêmio", timeB: "Juventude", placarA: 1, placarB: 1, estadio: "Arena do Grêmio", fase: "Semifinal - ida" },
    { data: "15/02/2026", hora: "20h30", timeA: "Ypiranga-RS", timeB: "Internacional", placarA: 0, placarB: 3, estadio: "Colosso da Lagoa", fase: "Semifinal - ida" },
    { data: "21/02/2026", hora: "18h30", timeA: "Internacional", timeB: "Ypiranga-RS", placarA: 4, placarB: 0, estadio: "Beira-Rio", fase: "Semifinal - volta" },
    { data: "22/02/2026", hora: "18h00", timeA: "Juventude", timeB: "Grêmio", placarA: 1, placarB: 1, estadio: "Alfredo Jaconi", fase: "Semifinal - volta (Grêmio avançou nos pênaltis 1x4)" },

    // ── Final ──
    { data: "01/03/2026", hora: "18h00", timeA: "Grêmio", timeB: "Internacional", placarA: 3, placarB: 0, estadio: "Arena do Grêmio", fase: "Final - ida" },
    { data: "08/03/2026", hora: "18h00", timeA: "Internacional", timeB: "Grêmio", placarA: 1, placarB: 1, estadio: "Beira-Rio", fase: "Final - volta" },
  ],
  proximosJogos: []
};