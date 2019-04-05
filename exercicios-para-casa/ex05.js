//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário


// Usuária escolhe par ou impar

let escolherParOuImpar = prompt('Escolha Par ou Impar (P/I)');

// Usuária escolhe um número

let numeroUsuaria = prompt('Escolha um número inteiro!');

// PC gera um número aleatório

let numeroPC = Math.round(Math.random());

// Soma os dois números
let soma = numeroUsuaria + numeroPC;

// Veja quem ganhou!

if (escolherParOuImpar = 'P' && numeroUsuaria%2 == 0){
    console.log('Você ganhou!')
} else if (escolherParOuImpar = 'I' && numeroUsuaria%1 == 1){
    console.log('Você ganhou')
} else {
    console.log('Você perdeu!')
}
