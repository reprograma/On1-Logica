// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100 

var numero
for (let numero = 0; numero <= 100; numero++) {
  console.log(numero)
}

// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números

var numero
for (let numero = 0; numero <= 100; numero = numero + 5) {
  console.log(numero)
}

// Faça um algoritmo que conte de 60 até 0 de trás para frente

var numero
for (let numero = 60; numero >= 0; numero--) {
  console.log(numero)
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

var numeroEstrelas = parseInt(prompt('Informe o número de estrelas: '))
var estrelas = ''

for (i=1; i <= numeroEstrelas; i++) {
    estrelas += '*'
    console.log(estrelas)
}
