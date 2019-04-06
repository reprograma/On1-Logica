//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o computador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário
// [Substitua este texto por sua resposta]


var parOuImparUsuario = prompt('Escolha entre par ou ímpar (P/I):');
console.log('parOuImparUsuario', parOuImparUsuario);
var numeroUsario = parseInt(prompt('Digite um número inteiro'));
console.log('numeroUsuario', numeroUsuario);
var numeroPC = Math.round(Math.random());
console.log('numeroPC', numeroPC);
var soma = numeroUsuario + numeroPC;
console.log('soma', soma);

if (parOuImparUsuario == 'P' && soma % 2 == 0) {
    console.log('Você ganhou!')
} else if (parOuImparUsuario == 'I' && soma % 2 == 1) {
    console.log('Você perdeu!');
}