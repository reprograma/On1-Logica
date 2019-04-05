// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100 
const INICIO = 0;
const FIM = 100;
const PASSO = 1;

for(let numero = INICIO; numero <= FIM; numero+= PASSO){
    console.log(numero)
}
// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números
const INICIO = 0;
const FIM = 100;
const PASSO = 5;

for(let numero = INICIO; numero <= FIM; numero+= PASSO){
    console.log(numero)
}

// Faça um algoritmo que conte de 60 até 0 de trás para frente
const INICIO = 60;
const FIM = 0;
const PASSO = 1;

for(let numero = INICIO; numero >= FIM; numero -= PASSO){
    console.log(numero)
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
// Dica: O operador + é só pra somar?

    const INICIO = 1;
    const FIM = prompt('Quantas estrelas?');
    let estrela = '*';

    for(let numero = INICIO; numero < FIM; numero++){
        console.log(estrela);
        estrela+='*';
    }
