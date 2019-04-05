//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

// Usuária escolhe par ou ímpar
let parOuImparUsuaria = prompt ('Escolha par ou ímpar (P/I)');
console.log(parOuImparUsuaria);

// Usuária escolhe um número
let numeroUsuaria = parseInt(prompt('Digite um número inteiro'));
console.log(numeroUsuaria);

// O pc vai gerar um número aleatório
let numeroPc = Math.round(Math.random()*10);
console.log(numeroPc);

// Soma os números
let soma = numeroUsuaria + numeroPc;

// Verifica se a soma é par ou ímpar
if (parOuImparUsuaria=='P' && soma%2 == 0){
    console.log('Você ganhou!')
}else if (parOuImparUsuaria=='I' && soma%2 != 0){
    console.log('Você ganhou!')
}
else{
    console.log('Você perdeu!')
}

// Verifica quem ganhou