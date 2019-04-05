// Estrutura for

// Faça um algoritmo que mostre os números de 0 até 100 
var i;
for(i=0; i<=100; i++){
    console.log(i)
};

// Agora faça uma versão que conta de 0 até 100 de 5 em 5 números
var i;
for(i=0; i<=100; i+=5){
    console.log(i)
};

// Faça um algoritmo que conte de 60 até 0 de trás para frente
var i;
for(i=60; i>=0; i--){
    console.log(i)
};


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
var numeroEstrelas = parseInt(prompt("Informe quantas estrelas você quer ver"));
var estrelas = "";
for(i = 1; i <= numeroEstrelas; i++){
    estrelas +="*";
    console.log(estrelas)
};