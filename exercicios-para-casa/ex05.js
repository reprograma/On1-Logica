//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário


var recebe = prompt('Escolha "P" para par ou "I" para ímpar')
recebe = recebe.toUpperCase()

var numero = Math.floor(Math.random()*10)+1
console.log(numero)
 
var numjogador = prompt('Digite um número')

var soma = numjogador + numero

var verifica = soma%2

if (verifica != 0){
    verifica = 'I'
}
else{
    verifica = 'P'
}

if( verifica == recebe){ alert('Você ganhou')

}
else {
    alert('Você perdeu')
}