//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 

// true e true 
var ex1 = 20 == 20 && 30 == 30;
console.log(ex1);

// true e false 
var ex2 = 20 == 20 && 30 == 20;
console.log(ex2);

// false e true
var ex3 = 78 == 9 && 20 == 20;
console.log(ex3);

// false e false 
var ex4 = 12 == 76 && 12 == 42;
console.log(ex4);

//!false e true
var ex5 = !12 == 12 && 12 == 12;
console.log(ex5);

// !true e false 
var ex6 = !23 == 53 && 12 == 4;
console.log(ex6);

// true ou true
var ex7 = 20 == 20 || 33 == 33;
console.log(ex7);

// true ou false 
var ex8 = 12 == 12 || 23 == 43;
console.log(ex8);

// true ou false ou true
var ex9 = 12 == 12 || 12 == 76 || 43 == 43;
console.log(ex9);

// !true ou false
var ex10 = !12 == 62 || 12 == 23;
console.log(ex10);

// !(true ou false) e true
var ex11 = !(12 == 12 || 32 == 12) && 77 == 77;
console.log(ex11);

// true ou !(false e true)
var ex12 = 12 == 12 || !(12 == 9 && 12 == 12);
console.log(ex12);

