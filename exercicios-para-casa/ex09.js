// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

function jogarParOuImpar(){
    let parOuImparusuaria = prompt('Escolha par ou impar (P/I)');
    let numerousuaria = parseInt(prompt('Digite um numero inteiro'));
    let numeroPC = 0
    let soma = numeroUsuaria = numeroPC
    if (parOuImparUsuaria == 'P' && soma%2 == 0){
        console.log('Você ganhou!')
    }else if (parOuImparUsuaria == 'I' && soma%2 ==1){
        console.log('Você ganhou!')
    }else{
        console.log('Você perdeu!')
    }
}

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana
