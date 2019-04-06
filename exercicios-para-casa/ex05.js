//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário
[]

//escolher par ou impar

let ParOuImpar = prompt('Escolha Par ou Impar (P/I)');
console.log('ParOuImpar',ParOuImpar)

//escolher um numero

let numeroUsuaria = parseInt(prompt('Digite um numero inteiro'));

//O pc vai gerar um numero aleatorio

let numeroPC = Math.round(Math.random());
console.log('numeroPC',numeroPC)

//Soma os numeros

let soma = numeroUsuaria + numeroPC;
console.log('soma', soma)

//Verifica se a soma é par ou impar

if (ParOuImpar =='P' && numeroUsuaria%2 == 0){
    console.log('Você ganhou!')
}else if (ParOuImpar =='I' && numeroUsuaria%2 == 1){
    console.log('Você ganhou!')
}else{
    console.log('Você perdeu!')
}

//Outra forma:

if (num<2){
1
}else if (num >2 && num<4){
    
}
2 3 4 5