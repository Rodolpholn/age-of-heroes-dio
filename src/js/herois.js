class Heroi {
  constructor(nome, nivel, tipo) {
    this.nome = nome;
    this.nivel = nivel;
    this.tipo = tipo;
  }
}

// Criando a instância (Objeto)
const meuHeroi = new Heroi("Shen", 10, "Ninja");

module.exports = meuHeroi;
