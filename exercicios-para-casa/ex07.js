// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100 
[Substitua este texto por sua resposta]

const inicio =0;
const fim =100;
const passos =1;

for (let numero = inicio; numero <=fim; numero +=passos){
    console.log(numero)
}

//Outra forma de resolver
for (let i= 0; i <= 100; i+=1){
    console.log(i)
}

// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números
[Substitua este texto por sua resposta]

const inicio =0;
const fim =100;
const passos =5;

for (let numero = inicio; numero <=fim; numero +=passos){
    console.log(numero)
}

//Outra forma de resolver
for (let i= 0; i <= 100; i+=5){
    console.log(i)
}

// Faça um algoritmo que conte de 60 até 0 de trás para frente
[Substitua este texto por sua resposta]


const inicio =60;
const fim =0;
const passos =1;

for (let numero = inicio; numero >=fim; numero -=passos){
    console.log(numero)
}

//Outra forma de resolver
for (let i= 60; i >= 0; i--){
    console.log(i)
}

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
[Substitua este texto por sua resposta]

let numeroEstrelas = parseInt(prompt('Informe o numero de estrelas'));

let estrelas = '';
for (i=1; i<=numeroEstrelas;i++){
    estrelas += '*'
    console.log(estrelas)
}

estrelas.length