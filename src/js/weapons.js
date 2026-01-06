function calcularArma(nivel, tipo) {
  let arma = "";

  // 1. Verificamos primeiro o TIPO do herói
  // Lógica de níveis para Guerreiro
  if (tipo === "Guerreiro") {
    if (nivel <= 10) arma = "Espada de Madeira";
    else if (nivel <= 50) arma = "Espada de Bronze";
    else if (nivel <= 90) arma = "Espada Lendária";
    else arma = "Espada Divina";
  } // Lógica de níveis para Mago
  else if (tipo === "Mago") {
    if (nivel <= 10) arma = "Cajado de Aprendiz";
    else if (nivel <= 50) arma = "Cajado Arcano";
    else if (nivel <= 90) arma = "Cajado de Cristal";
    else arma = "Cajado de Merlin";
  } // Lógica de níveis para Ninja
  else if (tipo === "Ninja") {
    if (nivel <= 10) arma = "Kunai Simples";
    else if (nivel <= 50) arma = "Shuriken Afiada";
    else if (nivel <= 90) arma = "Kunai Lendária";
    else arma = "Kunai Divina";
  } // Lógica de níveis para Arqueiro
  else if (tipo === "Arqueiro") {
    if (nivel <= 10) arma = "Arco Curto";
    else if (nivel <= 50) arma = "Arco Composto";
    else if (nivel <= 90) arma = "Arco de Precisão";
    else arma = "Arco de Artemis";
  } else {
    // Caso o tipo não seja nenhum dos acima
    arma = "Mãos Vazias";
  }

  return arma;
}

module.exports = calcularArma;
