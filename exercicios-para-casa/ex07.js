// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100
for (var i = 0; i <= 100; i++) {
  console.log(i);
}

// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números
for (var i = 0; i <= 100; i = i + 5) {
  console.log(i);
}

// Faça um algoritmo que conte de 60 até 0 de trás para frente
for (var i = 60; i >= 0; i--) {
  console.log(i);
}

// [DESAFIO - NÃO OBRIGATÓRIO]
// Crie um programa gerador de estrelas (não vale usar métodos, tem que ser na força bruta...rsrsr)
// Você deve receber do usuário o número correspondente ao número de linhas de estrelas (asteriscos) que ele quer gerar. Na primeira linha o algoritmo mostra 1 estrela, na segunda linha, mostra 2 e assim sucessivamente.
// Caso o usuário informe 5, o seu console mostrará o seguinte:
// *
// **
// ***
// ****
// *****
// Dica: O operador + é só pra somar ?
const numero = parseInt(prompt("Digite um número"));
let linha = ""
for (let i = 1; i <= numero; i++) {
  linha += "*";
  console.log(linha);
}