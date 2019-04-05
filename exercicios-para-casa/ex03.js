// Operadores de igualdade e relacionais

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Tranforme as frases abaixo em operações, rode no seu console e acrescente a resposta que foi obtida 

// 5 é maior que 2
console.log(5>2); // volta true

// 7 é maior ou igual a 8
var y = 7;
if(y>=8){
    alert("real oficial S2");
}else{
    alert("false");
} // alert volta "real oficial S2"


// 5 é menor que 18 dividido por 3
var i = 5;
if(i < 18/3){
    alert("real oficial S2");
}else{
    alert("false");
} // alert volta "real oficial S2"


// Nove é menor ou igual a 3 vezes 3
var a = 9;
var b = 3*3;
var c = a <= b; // console.log em c volta true


// 5+2 é igual a 11-4 
var b = 5 + 2;
var c = 11 - 4;
var d = b == c; // console.log em d volta true


// undefined é igual a null
console.log(null == undefined); // volta true
console.log(null === undefined); // estritamente volta false


// '2'(string) é igual a 2
var d = 2;
var e = "2";
if(d == e){
    alert("Oi! nós somos iguais :)!");
}else {
    alert ("false");
}


// '2'(string) é estritamente igual a 2
console.log("2" === 2); // volta false


// 0 é igual a -0
console.log(0 == -0); // volta true


// 'banana' é maior que 'Banana'
alert("banana" > "Banana") // volta true


// 'alice' é menor que 'beatriz'
console.log("alice" < "beatriz") // volta true

// 'alice' é *maior* que 'beatriz'
console.log("alice" > "beatriz") // volta false

// 'alice' é diferente de 'Alice'
console.log("alice" != "Alice") // volta true

// '25' é estritamente diferente de 25
console.log("25" !== 25) // volta true

// true é igual a 'true'
console.log("true" == true) // volta false

// false é diferente de 0
console.log(false != 0) // volta false

// Não true é igual é false
console.log(!true == false) // volta true

// !0 é igual a !1
console.log(!0 == 1) // volta true