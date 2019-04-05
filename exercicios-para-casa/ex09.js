// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }
// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana

function jogarParOuImpar(){
    var recebe = prompt('Escolha "P" para par ou "I" para ímpar')
recebe = recebe.toUpperCase()

var numero = Math.floor(Math.random()*10)+1
console.log(numero)
 
var numjogador = prompt('Digite um número')

var soma = numjogador + numero

var verifica = soma%2

if (verifica != 0){
    verifica = 'I'
}
else{
    verifica = 'P'
}

if( verifica == recebe){ alert('Você ganhou')

}
else {
    alert('Você perdeu')
}
}

jogarParOuImpar()