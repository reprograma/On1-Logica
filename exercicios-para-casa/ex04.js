// Operadores lógicos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 


// true e true 
var cond1 = true;
var cond2 = true;
console.log(cond1 && cond2)
true

// true e false 
var cond1 = true;
var cond2 = false;
console.log(cond1 && cond2)
false

// false e true
var cond1 = false;
var cond2 = true;
console.log(cond1 && cond2)
false

// false e false 
var cond1 = false;
var cond2 = false;
console.log(cond1 && cond2)
false

//!false e true
var cond1 = !false;
var cond2 = true;
console.log(cond1 && cond2)
true

// !true e false 
var cond1 = !true;
var cond2 = false;
console.log(cond1 && cond2)
false

// true ou true
var cond1 = true;
var cond2 = true;
console.log(cond1 || cond2)
true

// true ou false 
var cond1 = true;
var cond2 = false;
console.log(cond1 || cond2)
true

// true ou false ou true
var cond1 = true;
var cond2 = false;
var cond3 = true;
console.log(cond1 || cond2 || cond3)
true

// !true ou false
var cond1 = true;
var cond2 = !false;
console.log(cond1 || cond2)
true

// !(true ou false) e true
var cond1 = true;
var cond2 = false;
console.log(!(cond1 || cond2) && cond1)
false

// true ou !(false e true)
var cond1 = true;
var cond2 = false;
console.log(cond1 || !(cond2 && cond1))
true

//Deu nó? Vai beber uma água e continue depois
