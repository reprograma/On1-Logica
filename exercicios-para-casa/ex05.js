//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para covarar o número informado pelo usuário

var parOuImparEscolha = prompt('Escolha entre par ou ímpar (P/I):');
var numeroUsario = parseInt(prompt('Digite um número inteiro'));
var numeroPC = Math.round(Math.random());
var soma = numeroUsario + numeroPC;
if (parOuImparEscolha =='P' && soma%2 == 0){
    console.log('Você ganhou!');
}else if (parOuImparEscolha =='I' && soma%2 == 1){
    console.log('Você ganhou!');
}else{
    console.log('Você perdeu!')
}