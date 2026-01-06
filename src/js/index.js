const heroi = require("./herois");
const obterArma = require("./weapons");

for (let i = 1; i <= 3; i++) {
  let armaFinal = obterArma(heroi.nivel, heroi.tipo);

  console.log(`--- Turno ${i} ---`);
  console.log(
    `O herói ${heroi.nome} (Nível ${heroi.nivel}) atacou usando sua ${armaFinal}!`
  );

  heroi.nivel += 10;
}
