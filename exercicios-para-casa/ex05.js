//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas:
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

var parOuImpar = parseInt(prompt('Escolha entre par ou ímpar, digitanto 1 para par e 0 para ímpar: '))
var numUsuario = parseInt(prompt('Digite um número: '))
var numPC = Math.ceil(Math.random()*10)
var resultado = numUsuario + numPC

console.log(numUsuario)
console.log(numPC)
console.log(resultado)

if (parOuImpar == 1 && resultado == resultado%2 == 0){
   console.log('Você ganhou!')
}
else if (parOuImpar == 0 && resultado == resultado%2 == 1){
   console.log('Você ganhou!')
}
else {
   console.log('Você perdeu!')
}