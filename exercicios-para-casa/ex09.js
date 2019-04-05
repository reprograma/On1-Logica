// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana


// PRIMEIRA FUNÇÃO
let numeroMagico = parseInt(prompt('Digite um número'))

function numeroDeMagica(numeroMagico) {
  numeroMagico *= 9
  let abra = Math.trunc(numeroMagico/10)
  let cadabra = numeroMagico % 10
  let magica = abra + cadabra
  return numeroMagico/magica
}

console.log("O número mágico que foi pensado inicialmente é o", numeroDeMagica(numeroMagico))


//SEGUNDA FUNÇÃO

var sexo = prompt('Digite H para homem ou M para mulher').toLowerCase()
var idade = prompt('Qual a sua idade?')
var tempoContribuicao = prompt('Por quantos anos vc contribuiu?')

function contribuicaoCumprida(tempoContribuicao){
  if (tempoContribuicao >= 20){
    return true
  }
  else{
    console.log(`Ainda falta(m) ${(20 - tempoContribuicao)} ano(s) de contribução.`)
    return false
  }
}

function idadeAtingida(idade, sexo){
  if((sexo == 'm' && idade >= 62) || (sexo == 'h' && idade >= 65)){
    return true
  }
  else if (sexo == 'm' && idade < 62){
    console.log("Você é mulher e só pode se aposentar aos 62 anos. Ainda falta(m) " + (62 - idade) + " ano(s)")
    return false
  }
  else if(sexo == 'h' && idade < 65){
    console.log("Você é homem e só pode se aposentar aos 65 anos. Ainda falta(m) " + (65 - idade) + " ano(s)")
    return false
  }
}

if (contribuicaoCumprida(tempoContribuicao) && idadeAtingida(idade, sexo)){
  console.log("Você já pode se aposentar!")
}


// TERCEIRA FUNÇÃO
let numero = parseInt(prompt("Digite um número"))
function numeroDeEstrelas(numero){
  for (let i = 1; i <= numero; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    console.log(line);
  }
}
numeroDeEstrelas(numero)
