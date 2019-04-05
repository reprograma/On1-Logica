//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

// Usuaria escolhe par ou impar

let parImparUsuaria = prompt('Escolha par ou impar (P/I)');
console.log('parImparUsuaria', parImparUsuaria)

// Escolher um numero

let numeroUsuaria = parseInt(prompt('Digite um numero inteiro'));
console.log('numeroUsuaria', numeroUsuaria)

// PC vai gerar um numero aleatorio

let numeroPC = Math.round(Math.random()*10); //ou let numeroPC = Math.round(Math.random());
console.log('numeroPC', numeroPC)

// Soma os numeros

let soma = numeroUsuaria + numeroPC
console.log('soma', soma)

// Verifica a soma se é par ou impar
if (parImparUsuaria == 'P' && soma%2 == 0){
    console.log('Você ganhou!')
}else if (parImparUsuaria == 'I' && soma%2 == 1){
    console.log('Você ganhou!')
}else{
    console.log('Você perdeu')
}

//OUTRA FORMA

let resultado
if (soma%2 == 0){
    resultado = 'P'
}else{
    resultado = 'I'
}

// 1 2 3 4 5

// if (num < 2){
//  /1
// }else if (num >=2 && num<4){

// }else (o resto)

// Verifica quem ganhou

console.log('parImparUsuaria', parImparUsuaria)

console.log (parImparUsuaria == resultado)

