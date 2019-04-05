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
[Substitua este texto por sua resposta]

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)

var sexo = prompt('Informe seu sexo: H ou M?')
var idade = parseInt(prompt('Qual sua idade? - Apenas número'))
var tempoContribuicao = parseInt(prompt('Quantos anos de contribuição? - Apenas número'))

  if (((sexo == 'M' || 'm' && idade >= 62) || (sexo == 'H' || 'h' && idade >= 65)) && tempoContribuicao >= 20){ 
    console.log('Você já pode se aposentar!')} 
  else if (((sexo == 'M' || 'm' && idade < 62) || (sexo == 'H' || 'h' && idade < 65)) && tempoContribuicao < 20) { 
    console.log('Você ainda não pode se aposentar porque não atingiu a idade mínima e nem o tempo mínimo de contribuição!')}
  else if (((sexo == 'M' || 'm' && idade >= 62) || (sexo == 'H' || 'h' && idade >= 65)) && tempoContribuicao < 20) { 
    console.log('Você ainda não pode se aposentar porque não atingiu o tempo mínimo de contribuição!')}
  else if ((sexo == 'M' || 'm' && idade < 62) || (sexo == 'H' || 'h' && idade < 65)) { 
    console.log('Você ainda não pode se aposentar porque não atingiu a idade mínima!')}
  else {
    console.log('Confira os dados informados!')
  }