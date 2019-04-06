var numeroMagico = 2; //1

numeroMagico *= 9; //2
console.log(numeroMagico);

var abra = parseInt(numeroMagico / 10); //3 e //4
console.log(abra);

var cadabra = parseFloat(abra % 10) //5
console.log(cadabra);

var magica = abra + cadabra; //6
console.log(magica);

console.log(numeroMagico / magica); //7

console.log("O numero mágico que foi pensado inicialmente é " + numeroMagico / magica); //8