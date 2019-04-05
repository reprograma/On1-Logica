//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo 

var suaEscolha = prompt('Você escolhe par ou impar?').toLowerCase()
var pcEscolha = ' '

if (suaEscolha == 'par'){
  console.log('Você escolheu PAR, então o Computador é ÍMPAR!')
  pcEscolha = 'impar'
}
else if (suaEscolha == 'impar' || suaEscolha == 'ímpar'){
  console.log('Você escolheu ÍMPAR, então o Computador é PAR!')
  pcEscolha = 'par'
}
else {
  console.log('Você não digitou nem par e nem ímpar. Recarregue a página e tente novamente')
}

var numeroComputador = Math.ceil(Math.random()*10);

var seuNumero = parseInt(prompt('Informe um número inteiro:'))
var soma = numeroComputador + seuNumero
console.log(`Você escolher ${suaEscolha} com o número ${seuNumero} e o Computador ${pcEscolha} com o número ${numeroComputador} `)

    if (soma % 2 == 0){
      console.log(`O Resultado foi um número PAR!`)
      if (suaEscolha == 'par'){
        console.log(`Você venceu! Parabéns!`)
      }
      else{
        console.log(`Você perdeu =(`)
      }
    } 
    else if (soma % 2 == 1){
      console.log(`O Resultado foi um número ÍMPAR.`)
      if (suaEscolha == 'par'){
        console.log(`Você perdeu =(`)
      }
      else{
        console.log(`Você venceu! Parabéns!`)
      }
    }

