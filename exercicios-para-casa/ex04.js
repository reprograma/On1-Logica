// Operadores lógicos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 


// true e true 

var numero = 3;
var condicao1 = numero < 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == 3;
console.log('Condicao2', condicao2);

// true e false 

var numero = 3;
var condicao1 = numero < 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == !3;
console.log('Condicao2', condicao2);

// false e true

var numero = 3;
var condicao1 = numero > 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == 3;
console.log('Condicao2', condicao2);

// false e false 

var numero = 3;
var condicao1 = numero > 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == !3;
console.log('Condicao2', condicao2);

//!false e true

var numeroTeste = new Boolean(!false);
if (numeroTeste) {
    console.log(numeroTeste)
}

Boolean {true}

var numeroTeste = new Boolean(true);
if (numeroTeste) {
    console.log(numeroTeste)
}

Boolean {true}

// !true e false 

var numeroTeste = new Boolean(!true);
if (numeroTeste) {
    console.log(numeroTeste)
}

Boolean {false}

var numeroTeste = new Boolean(false);
if (numeroTeste) {
    console.log(numeroTeste)
}

Boolean {false}


// true ou true

var numero = 3;
var condicao1 = numero < 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == 3;
console.log('Condicao2', condicao2);
console.log('Condicao 1 e Condicao 2: ', condicao1 || condicao2);


// true ou false 

var numero = 3;
var condicao1 = numero < 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == !3;
console.log('Condicao2', condicao2);
console.log('Condicao 1 e Condicao 2: ', condicao1 || condicao2);

// true ou false ou true

var numero = 3;
var condicao1 = numero < 5;
console.log('Condicao1', condicao1);
var condicao2 = numero == !3;
console.log('Condicao2', condicao2);
var condicao3 = numero == 3;
console.log('Condicao3', condicao3);
console.log('Condicao 1, Condicao 2 e Condicao 3: ', condicao1 || condicao2 || condicao3);

// !true ou false

var numeroTeste = new Boolean(!true);
if (numeroTeste) {
    console.log(numeroTeste)
}else{ (numeroTeste = numeroTeste)
    console.log(numeroTeste)
}

// !(true ou false) e true

var numeroTeste = new Boolean(!true || !false);
if (numeroTeste) {
    console.log(numeroTeste)
}else{ (numeroTeste = numeroTeste)
    console.log(numeroTeste)
}

// true ou !(false e true)

var numeroTeste = true;
if (numeroTeste) {
    console.log(numeroTeste)
}else{ new Boolean(!true || !false)
    console.log(numeroTeste)
}

//Deu nó? Vai beber uma água e continue depois
