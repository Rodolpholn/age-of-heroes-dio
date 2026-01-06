# Desafio: Jornada do Herói Evolutiva

Este projeto foi desenvolvido para o Bootcamp da DIO, aplicando conceitos fundamentais de lógica de programação em JavaScript.
A proposta original foi expandida para criar um sistema mais realista, onde o equipamento do herói evolui dinamicamente conforme sua experiência.

## Diferenciais desta Implementação

Diferente de um sistema estático, esta versão foca na escalabilidade e usabilidade real:

De Idade para Nível: Substituímos o atributo "idade" (comum em exercícios básicos) por Nível (Level), refletindo a progressão real de um RPG.

Sistema de Equipamento Dinâmico: Implementamos uma lógica onde a arma não depende apenas da classe, mas também do nível de poder do herói.

Modularização: O código foi separado em arquivos (herois.js, weapons.js, index.js) para simular uma estrutura profissional de projeto.

## Requisitos do Projeto Atendidos

[x] Variáveis e Operadores: Utilizados para gerenciar o estado do herói e cálculos de nível.

[x] Laços de Repetição: Implementado um for no arquivo principal para simular a progressão de turnos e ganho de XP.

[x] Estruturas de Decisão: Uso de if/else if complexos para validar classe e nível simultaneamente.

[x] Funções: Criação de funções específicas para processar a lógica de recompensas.

[x] Classes e Objetos: Definição da classe Heroi para instanciar personagens de forma organizada.

## Como Funciona a Lógica

O sistema avalia o Tipo e o Nível para entregar o melhor item disponível:<br>
| --- | --- | --- | --- | --- |<br>
| Classe | Nível 1-10 | Nível 11-50 | Nível 51-90 |Nível 91+ |<br>
| Guerreiro |Espada de Madeira | Espada de Bronze | Espada Lendária | Espada Divina|<br>
| Mago |Cajado de Aprendiz|Cajado Arcano | Cajado de Cristal|Cajado de Merlin|<br>
|Arqueiro |Arco Curto |Arco Composto |Arco de Precisão |Arco de Artemis|<br>

## Como Executar

1.Certifique-se de ter o Node.js instalado.

2.No terminal, acesse a pasta do projeto:

```bash
node src/js/index.js
```
