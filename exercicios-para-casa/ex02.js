// Operadores aritméticos 

/* Precisa de ajuda? Veja esses links:

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

//Crie uma variável chamada 'numeroMagico' e atribua um valor de 1 a 10
var numeroMagico = Math.floor(Math.random() * 10) + 1;
console.log(numeroMagico);  

// Agora faça a sua variável 'numeroMagico'ser substituida pelo valor atual dela multiplicado por 9
var novoNumero = numeroMagico * 9;
console.log(novoNumero);

// Crie uma variável chamada 'abra' e atribua à ela o valor de 'numeroMagico' dividido por 10
var abra = numeroMagico/10;
console.log(parseInt(abra));

// Pequise um método para garantir que teremos sempre um número inteiro na variável 'abra', e aplique esse método na operação anterior (divisão por 10)
// Dica: parseInt()...pesquise pelo menos mais uma forma de fazer isso
var numeroMagico2 = numeroMagico/10;
var abra = parseInt(numeroMagico2);
console.log(abra);

// Crie uma variável chamada 'cadabra' e atribua o valor correspondente ao resto da divisão por 10 à essa variável
var cadabra = numeroMagico%10;
console.log(cadabra);

// Crie uma variável chamada 'magica' e guarde nela a soma das variáveis 'abra' e 'cadabra'
var magica = parseInt(abra + cadabra);
console.log(magica);

//Divida o 'numeroMagico' por 'mágica'
var divisao = parseInt(numeroMagico/magica);
console.log(divisao);

// Moste no console a frase "O número mágico que foi pensado inicialmento é X" substituindo X por 'numeroMagico/magica' (Isso mesmo, coloque uma operação dentro do console.log()...opa olha o spoiler)
console.log('O número mágico que foi pensado inicialmente é' + parseInt(numeroMagico/magica));

// Segundo mister M essa mágica deve funcionar