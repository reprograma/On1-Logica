//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário


//Conceito de par ou ímpar: cada competidor decide se quer par ou ímpar e escolhe um número, a soma dos números vai decidir quem será o ganhador (par ou ímpar)

var min = 0
var max = 99 //para não dar vantagem para os números pares
var numeroSorteado = Math.round(Math.random()* (max - min) + min)
var parOuImpar = Number(prompt('Vamos brincar de "Par ou Ímpar"! Digite 0, caso queira par, ou digite 1 para ímpar!'))
var numeroEscolhidoPeloUsuario = Number(parseInt(prompt('Agora, escolha um número entre 0 e 99 e vamos ver quem ganha:')))
var soma = numeroSorteado+numeroEscolhidoPeloUsuario

var condicao1=parOuImpar==0 //o usuário escolheu os números pares
var condicao2=parOuImpar==1 //o usuário escolheu os números ímpares
var condicao3=(numeroSorteado+numeroEscolhidoPeloUsuario)%2==0 //a soma de numeroSorteado e numeroEscolhidoPeloUsuario é par
var condicao4=(numeroSorteado+numeroEscolhidoPeloUsuario)%2!=0 //a soma de numeroSorteado e numeroEscolhidoPeloUsuario é ímpar

//recaptulando as escolhas e o sorte io 
if (condicao1){ //usuário escolheu números pares
    alert('Você escolheu os números pares e vai competir com o número ' + numeroEscolhidoPeloUsuario + ' enquanto eu escolhi ' + numeroSorteado +'. Vamos ver quem ganha!')
}
else if (condicao2){ //usuário escolheu númeres ímpares
    alert('Você escolheu os números ímpares e vai competir com o número ' + numeroEscolhidoPeloUsuario + ' enquanto eu escolhi ' + numeroSorteado +'. Vamos ver quem ganha!')  
}

//resultado do jogo
if (condicao1&&condicao3){ //caso o usuário tenha escolhido os números pares e a soma tenha sido um número par
    alert('Parabéns!' + soma + ', que é a soma dos nossos números, é um número par. Você ganhou!')
}
else if (condicao1&&!condicao3) { //caso o usuário tenha escolhido os números pares porém a soma tenha sido um número ímpar
    alert(soma + ', que é a soma dos nossos números, é um número ímpar. Eu ganhei!')
}
else if (condicao2&&condicao4){ //caso o usuário tenha escolhido os números ímpares e a soma tenha sido um número ímpar
    alert('Parabéns!' + soma + ', que é a soma dos nossos números, é um número ímpar. Você ganhou!')
}
else if (condicao1&&!condicao3) { //caso o usuário tenha escolhido os números ímpares porém a soma tenha sido um número par
    alert(soma + ', que é a soma dos nossos números, é um número par. Eu ganhei!')
}
