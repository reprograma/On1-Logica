// Operadores de igualdade e relacionais

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 

// 5 é maior que 2
var numero = 5;
var condicao1 = (numero > 2);
console.log(condicao1);
true

// 7 é maior ou igual a 8
var numero = 7;
var condicao1 = (numero >= 8);
console.log(condicao1);
false

// 5 é menor que 18 dividido por 3
var numero = 5;
var condicao1 = (numero < (18/3));
console.log(condicao1);
true

// Nove é menor ou igual a 3 vezes 3
var numero = 9;
var condicao1 = (numero <= (3*3));
console.log(condicao1);
true

// 5+2 é igual a 11-4 
var numero = 5+2;
var condicao1 = (numero == (11-4));
console.log(condicao1);
true

// undefined é igual a null
var numero = undefined;
var condicao1 = (numero == null);
console.log(condicao1);
true

// '2'(string) é igual a 2
var x = '2';
var y = 2
var condicao1 = (x == y);
console.log(condicao1);
true

// '2'(string) é estritamente igual a 2
var condicao1 = (x === y);
console.log(condicao1);
false

// 0 é igual a -0
var a = 0;
var b = -0;
var condicao1 = (a == b);
console.log(condicao1);
true

// 'banana' é maior que 'Banana'
var a = 'banana';
var b = 'Banana';
var condicao1 = (a > b);
console.log(condicao1);
true

// 'alice' é menor que 'beatriz'
var a = 'alice';
var b = 'beatriz';
var condicao1 = (a < b);
console.log(condicao1);
true

// 'alice' é diferente de 'Alice'
var a = 'alice';
var b = 'Alice';
var condicao1 = (a != b);
console.log(condicao1);
true

// '25' é estritamente diferente de 25
var a = '25';
var b = 25;
var condicao1 = (a !== b);
console.log(condicao1);
true

// true é igual a 'true'
var a = 'true';
var b = true;
var condicao1 = (a == b);
console.log(condicao1);
false

// false é diferente de 0
var a = false;
var b = 0;
var condicao1 = (a != b);
console.log(condicao1);
false

// Não true é igual é false
var a = !true;
var b = false;
var condicao1 = (a == b)
console.log(condicao1);
true

// !0 é igual a !1
var a = !0;
var b = !1;
var condicao1 = (a == b);
console.log(condicao1);
false 