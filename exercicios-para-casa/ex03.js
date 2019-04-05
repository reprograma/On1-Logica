// Operadores de igualdade e relacionais

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 

// 5 é maior que 2
console.log(5>2);
true;

// 7 é maior ou igual a 8
var numero1 = 7
var numero2 = 8
if(numero1 >= numero2){
    alert('true')
}else{
    alert('false')
};
false;

// 5 é menor que 18 dividido por 3
var numero1 = 5
var numero2 = 18
if(numero1<(numero2/3)){
    alert('true')
}else{
    alert('false')
};
true;

// Nove é menor ou igual a 3 vezes 3
var numero1 = 9
var numero2 = 3
if(numero1 <= (numero2*numero2)){
    alert('true')
}else{
    alert('false')
};
true;

// 5+2 é igual a 11-4 
var operacao1 = 5+2
var operacao2 = 11-4;
if(operacao1 = operacao2){
    console.log('true')
}else{
    console.log('false')
}
true;

// undefined é igual a null
console.log(undefined == null);
true;

// '2'(string) é igual a 2
var string = '2';
var numero = 2;
if(string == numero){
    console.log('true')
}else{
    console.log('false')
};
true;

// '2'(string) é estritamente igual a 2
var string = '2';
var numero = 2;
if(string === numero){
    console.log('true')
}else{
    console.log('false')
};
false;

// 0 é igual a -0
var zero = 0;
var menosZero = -0;
if(zero == menosZero){
    console.log('true')
}else{
    console.log('false')
}
true;

// 'banana' é maior que 'Banana'
console.log('banana' > 'Banana');
true;

// 'alice' é menor que 'beatriz'
console.log('alice' < 'beatriz');
true;

// 'alice' é diferente de 'Alice'
console.log('alice' != 'Alice');
true;

// '25' é estritamente diferente de 25
console.log('25' !== 25);
true;

// true é igual a 'true'
console.log(true == 'true');
false;

// false é diferente de 0
console.log(false != 0);
false;

// Não true é igual é false
console.log(!true == false);
true;

// !0 é igual a !1
console.log(!0 == 1);
true;