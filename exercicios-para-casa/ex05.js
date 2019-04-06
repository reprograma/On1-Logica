//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário
let ParouImpar= prompt('Escolha Par(P) ou Impar(I)')
    let numeroJogador = parseInt(prompt('Escolha um numero inteiro'))
    let numeroPC = Math.round(Math.random());
    let soma = (numeroJogador + numeroPC);
    if (ParouImpar =='P' && soma%2 = 0 ){
        console.log('Você ganhou')
    }
    else if (ParouImpar== 'I' && soma%2 = 1){
        console.log('Você ganhou')
    }
    else{
        console.log('Você perdeu')
    }