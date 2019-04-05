//Crie uma variável chamada 'numeroMagico' e atribua um valor de 1 a 10
var numeroMagico= Math.floor((Math.random() * 10 )+ 1);
console.log(numeroMagico);

// Agora faça a sua variável 'numeroMagico'ser substituida pelo valor atual dela multiplicado por 9
numeroMagico = numeroMagico * 9;
console.log(numeroMagico);
// Crie uma variável chamada 'abra' e atribua à ela o valor de 'numeroMagico' dividido por 10
let abra = numeroMagico / 10;
console.log(abra);

// Pequise um método para garantir que teremos sempre um número inteiro na variável 'abra', e aplique esse método na operação anterior (divisão por 10)
// Dica: parseInt()...pesquise pelo menos mais uma forma de fazer isso
parseInt(abra);
//Math.floor(abra);
//abra.toFixed();

// Crie uma variável chamada 'cadabra' e atribua o valor correspondente ao resto da divisão por 10 à essa variável
let cadabra = (numeroMagico % 10);
console.log(cadabra);

// Crie uma variável chamada 'magica' e guarde nela a soma das variáveis 'abra' e 'cadabra'
let magica = parseInt(abra + cadabra);
console.log(magica)

//Divida o 'numeroMagico' por 'mágica'
let divisao = (numeroMagico / magica);
console.log(divisao)

// Moste no console a frase "O número mágico que foi pensado inicialmento é X" substituindo X por 'numeroMagico/magica' (Isso mesmo, coloque uma operação dentro do console.log()...opa olha o spoiler)
console.log('O número mágico que foi pensado inicialmento é ' + (numeroMagico/9) +  ' substituindo-o por ' + numeroMagico/magica)

// Segundo mister M essa mágica deve funcionar