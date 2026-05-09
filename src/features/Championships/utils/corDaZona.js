export default function corDaZona(zona) {

  const cores = {
    libertadores: "#3b5bdb",
    "pre-libertadores": "#74b816",
    sulamericana: "#f59f00",
    rebaixamento: "#fa5252",
  };

  return cores[zona] || "transparent";
}