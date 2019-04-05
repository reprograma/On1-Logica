//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

var numeroComputador = Math.floor(Math.random() * Math.floor(5))

var numeroUsuario = parseInt(prompt('Escolha par ou ímpar e informe um número de 0 a 5 para jogar com o computador'))

var soma = (numeroComputador + numeroUsuario)
console.log(soma)


if (soma%2 == 0){
        console.log(`Quem escolheu par ganhou! O computador escolheu o número ${numeroComputador} e você ${numeroUsuario}!`)
    }else if (soma%2 == 1)  {
        console.log(`Quem escolheu ímpar ganhou! O computador escolheu o número ${numeroComputador} e você ${numeroUsuario}!`)
    }else {
        console.log('Começa de novo! Não entendi o que tu digitou!')
    }