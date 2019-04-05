// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100 
const INICIO = 0;
const FIM = 100;
var passo = 1;

for (let numero = INICIO; numero <= FIM; numero+= passo)
console.log(numero)

// Faça um algoritmo que mostre os números de 0 até 100 
for (let i=0; i<=100; i++){
    console.log(i)
}

// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números
passo = 5;
for (let numero = INICIO; numero <= FIM; numero+= passo)
console.log(numero)

// Faça um algoritmo que conte de 60 até 0 de trás para frente
//var i= 60
//i--;

for( let num = 60; num >=  0; num-- )
{console.log(num)}



// [DESAFIO - NÃO OBRIGATÓRIO] 
// Crie um programa gerador de estrelas (não vale usar métodos, tem que ser na força bruta...rsrsr) 
// Você deve receber do usuário o número correspondente ao número de linhas de estrelas (asteriscos) que ele quer gerar. Na primeira linha o algoritmo mostra 1 estrela, na segunda linha, mostra 2 e assim sucessivamente.
// Caso o usuário informe 5, o seu console mostrará o seguinte:
// * 
// ** 
// ***  
// ****
// *****
// Dica: O operador + é só pra somar ?
var numeroEstrelas = prompt ('Quantas linhas com estrelas deseja gerar?')
numeroEstrelas = parseInt(numeroEstrelas);
var estrelas = 0;
do {document.write("*")
estrelas ++; }
while ( numeroEstrelas > estrelas )  
      
    
