// Estrutura if / else if / else

// Baseado em testes reais:
// Imagine que você foi contratada para criar um algoritmo para ajudar pessoas a entederem as novas regras da previdência (que é uma coisa que ninguém entende...rsrsrs)
// Isso é só um exercício, nem sei se os valores estão corretos, não se apegue a isso
// Você deve considerar as seguintes premissas:
// - O usuário deve informar o sexo (H ou M), o tempo de contribuição (anos) e a idade (anos)
// - Se for mulher(M) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 62 anos
// - Se for homem(H) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 65 anos
// - Se a pessoa atender aos parâmetros mostre a mensagem 'Você já pode se aposentar'
// - Se a pessoa não atender aos parâmetros mostre a mensagem 'Você ainda não pode se aposentar'


// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)

var sexo = prompt('Digite H para homem ou M para mulher').toLowerCase()

var idade = prompt('Qual a sua idade?')
var tempoContribuicao = prompt('Por quantos anos vc contribuiu?')

if ((sexo == 'm' && idade >= 62 && tempoContribuicao >= 20) ||(sexo == 'h' && idade >= 65 && tempoContribuicao >= 20)) {
  console.log("Você já pode se aposentar!")
}
else {
  console.log("Você ainda não pode aposentar =( ")
  if(tempoContribuicao < 20){
    console.log(`Ainda falta(m) ${(20 - tempoContribuicao)} ano(s) de contribução.`)
  }
  else if (sexo == 'm' && idade < 62){
    console.log("Você é mulher e só pode se aposentar aos 62 anos. Ainda faltam " + (62 - idade) + " ano(s)")
  }
  else if(sexo == 'h' && idade < 65){
    console.log("Você é homem e só pode se aposentar aos 65 anos. Ainda faltam " + (65 - idade) + " ano(s)")
  }
}
