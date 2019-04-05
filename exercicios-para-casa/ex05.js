//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpar contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário
var jogador1 = prompt("Escolha par(P) ou impar(I)");
var jogadorNumero = prompt("Agora escolha o seu número");
var pcNumero = Math.random() * (10 - 1) + 1;
pcNumero= parseInt(pcNumero);
var soma = jogadorNumero + pcNumero;

if(soma%2 == 0 && jogador1 == "P"){
    alert("Parabéns, deu par e você acertou!");
} else if(soma%2 == 1 && jogador1 == "I"){
    alert("Parabéns, deu impar e você acertou!");
} else{
    alert("Não foi dessa vez!");
}
