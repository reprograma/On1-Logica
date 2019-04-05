// Operadores lógicos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 


// true e true 
var a = true;
var b = true;
var condicao1 = (a == b);
console.log(condicao1);
true

// true e false 
var a = true;
var b = false;
var condicao1 = (a == b);
console.log(condicao1);
false

// false e true
var a = false;
var b = true;
var condicao1 = (a == b);
console.log(condicao1);
false

// false e false 
var a = false;
var b = false;
var condicao1 = (a == b);
console.log(condicao1);
true

//!false e true
var a = !false;
var b = true;
var condicao1 = (a == b);
console.log(condicao1);
true


// !true e false 
var a = !true;
var b = false;
var condicao1 = (a == b);
console.log(condicao1);
true

// true ou true
var a = true;
var b = true;
var condicao1 = (a || b);
console.log(condicao1);
true

// true ou false 
var a = true;
var b = false;
var condicao1 = (a || b);
console.log(condicao1);
true

// true ou false ou true
var a = true;
var b = false;
var condicao1 = (a || b || a);
console.log(condicao1);
true

// !true ou false
var a = !true;
var b = false;
var condicao1 = (a == b);
console.log(condicao1);
false

// !(true ou false) e true
var a = !(true || false);
var b = true;
var condicao1 = (a && b);
console.log(condicao1);
false

// true ou !(false e true)
var a = true
var b = !(false && true);
var condicao1 = (a || b);
console.log(condicao1);
true

//Deu nó? Vai beber uma água e continue depois

