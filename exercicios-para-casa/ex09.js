// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana

function jogoParOuImpar(){
let escolherParOuImpar = prompt('Escolha Par ou Impar (P/I)');
let numeroUsuaria = prompt('Escolha um número inteiro!');
let numeroPC = Math.round(Math.random());
let soma = numeroUsuaria + numeroPC;
if (escolherParOuImpar = 'P' && numeroUsuaria%2 == 0){
    console.log('Você ganhou!')
} else if (escolherParOuImpar = 'I' && numeroUsuaria%1 == 1){
    console.log('Você ganhou')
} else {
    console.log('Você perdeu!')
}}

function magica(){
var numeroMagico = Math.floor((Math.random() * 10) + 1);
var numeroMagico = Math.floor((Math.random() * 10) + 1);
var numeroMagico = numeroMagico * 9;
var abra = numeroMagico/10;
var abra = parseInt(numeroMagico/10);
var cadabra = numeroMagico%=10;
var magica = abra + cadabra;
var resultado = numeroMagico / magica;
console.log("O número mágico que foi pensado inicialmente é" + (numeroMagico/magica));}