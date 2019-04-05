//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

// Usuária escolhe par ou impar
let parOuImparUsuario = prompt('Escolha par ou impar (P/I');
console.log('parOuImparUsuaria', parOuImparUsuario);

// Usuária escolhe um numero
let numeroUsuaria = parseInt(prompt('Digite um numero inteiro'));
console.log('numeroUsuaria', numeroUsuaria);

//O pc vai gerar um numero aleatório
let numeroPC =  Math.round(Math.random());
console.log('numeroPC', numeroPC);

// Soma dos numeros
let soma = numeroUsuaria + numeroPC;
console.log('soma', soma);

// E agora, quem ganhou?
if (parOuImparUsuario == 'P' && soma%2 == 0){
    console.log('Você ganhou!')
} else if (parOuImparUsuario == 'I' && soma%2 == 1){
    console.log('Você perdeu!')
};