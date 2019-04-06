// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana

function ParOUImpar(){
    let parOUImparJogador= prompt('Escolha Par(P) ou Impar(I)')
    let numeroJogador = parseInt(prompt('Escolha um numero inteiro'))
    let numeroPC = Math.round(Math.random());
    let soma = numeroJogador + numeroPC;
    if (parOUImparJogador =='p' && soma%2 = 0){
        console.log('Você ganhou')
    }
    else if (parOUImparJogador == 'I' && soma%2 = 1){
        console.log('Você ganhou')
    }
    else{
        console.log('Você perdeu')
    }
