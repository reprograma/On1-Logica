// Operadores aritméticos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Crie uma variável chamada 'numeroMagico' e atribua um valor de 1 a 10
var numeroMagico = 2;

// Agora faça a sua variável 'numeroMagico'ser substituida pelo valor atual dela multiplicado por 9
numeroMagico = numeroMagico * 9; //console volta 18

// Crie uma variável chamada 'abra' e atribua à ela o valor de 'numeroMagico' dividido por 10
var abra = numeroMagico/10; // console volta 1.8

// Pequise um método para garantir que teremos sempre um número inteiro na variável 'abra', e aplique esse método na operação anterior (divisão por 10)
// Dica: parseInt()...pesquise pelo menos mais uma forma de fazer isso
parseInt(abra); // console volta 1*
abra.toFixed(0); // console volta 2
Math.round(abra); // console volta 2

abra = parseInt(numeroMagico/10); // console volta 1

// Crie uma variável chamada 'cadabra' e atribua o valor correspondente ao resto da divisão por 10 à essa variável
var cadabra = numeroMagico %10; // console volta 8

// Crie uma variável chamada 'magica' e guarde nela a soma das variáveis 'abra' e 'cadabra'
var magica = abra + cadabra; //console volta 9

//Divida o 'numeroMagico' por 'mágica'
console.log(numeroMagico/magica);// console volta 2

// Moste no console a frase "O número mágico que foi pensado inicialmento é X" substituindo X por 'numeroMagico/magica' (Isso mesmo, coloque uma operação dentro do console.log()...opa olha o spoiler)
alert("O número que foi pensado inicialmente foi 2. Multiplicado por 9 deu " + numeroMagico + ". Com este novo valor tiramos a divisão por 10 que deu " + abra + " e o resto da divisão por 10, que deu "+ cadabra + " que, somados dão 9. Dividindo este valor pelo resultado da primeira operação " + numeroMagico + ", teremos nosso número inicial novamente." + numeroMagico/magica + "!")

// Segundo mister M essa mágica deve funcionar