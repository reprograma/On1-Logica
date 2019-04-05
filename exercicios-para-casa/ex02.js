// Operadores aritméticos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Crie uma variável chamada 'numeroMagico' e atribua um valor de 1 a 10
var numeroMagico = 5

// Agora faça a sua variável 'numeroMagico'ser substituida pelo valor atual dela multiplicado por 9

numeroMagico = numeroMagico*9

// Crie uma variável chamada 'abra' e atribua à ela o valor de 'numeroMagico' dividido por 10

var abra = numeroMagico/10

// Pequise um método para garantir que teremos sempre um número inteiro na variável 'abra', e aplique esse método na operação anterior (divisão por 10)
// Dica: parseInt()...pesquise pelo menos mais uma forma de fazer isso

var abra = parseInt(numeroMagico/10) //ou Math.trunc(numeroMagico/10)

// Crie uma variável chamada 'cadabra' e atribua o valor correspondente ao resto da divisão por 10 à essa variável
var cadabra = parseInt(abra%10)

// Crie uma variável chamada 'magica' e guarde nela a soma das variáveis 'abra' e 'cadabra'
var magica = abra + cadabra

//Divida o 'numeroMagico' por 'mágica'
var feitiço = numeroMagico/magica

// Moste no console a frase "O número mágico que foi pensado inicialmento é X" substituindo X por 'numeroMagico/magica' (Isso mesmo, coloque uma operação dentro do console.log()...opa olha o spoiler)

console.log('O número mágico que foi pensado inicialmento é' abra 'substituindo' cadabra 'por' feitiço)

// Segundo mister M essa mágica deve funcionar

var numeroMagico = 5*9;
var abra = parseInt(numeroMagico/10);
var cadabra = parseInt(abra%10);
var magica = abra + cadabra;
var feitiço = parseInt(numeroMagico/magica);
console.log('O número mágico que foi pensado inicialmento é', abra, 'substituindo', cadabra, 'por', feitiço);