//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

var chuteComputador = Math.ceil(Math.random()*10);
var chuteUsuario = prompt ('Insira aqui seu número de 0 a 10 e escolha se quer par ou ímpar= ', chuteUsuario); //pesquisar como limitar o usuário escrever só até 10

if (chuteUsuario%2 == 0 + chuteComputador%2 == 1) {
    console.log('Par!')
}

else  {
    console.log('Ímpar!')
}

console.log('O número do computador foi', chuteComputador) 

//não tá 100%, mas acho que vou pegar a lógica melhor depois.