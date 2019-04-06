/// Estrutura if / else if / else

// Baseado em testes reais:
// Imagine que você foi contratada para criar um algoritmo para ajudar pessoas a entederem as novas regras da
previdência(que é uma coisa que ninguém entende...rsrsrs)
// Isso é só um exercício, nem sei se os valores estão corretos, não se apegue a isso
// Você deve considerar as seguintes premissas:

// - O usuário deve informar o sexo (H ou M), o tempo de contribuição (anos) e a idade (anos)
// - Se for mulher(M) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 62 anos
// - Se for homem(H) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 65 anos
// - Se a pessoa atender aos parâmetros mostre a mensagem 'Você já pode se aposentar'
// - Se a pessoa não atender aos parâmetros mostre a mensagem 'Você ainda não pode se aposentar'
// [Substitua este texto por sua resposta]

var sexo = console.log(prompt("Qual é o seu sexo? Se for homem digite h, caso for mulher digite m"));
var idade = console.log(prompt('Qual a sua idade?'));
var contribu = console.log(prompt('Por quantos tempo você contribuiu? Digite apenas números.'));

if ((sexo == 'm' && idade >= 62 && contribu >= 20) || (sexo == 'h' && idade >= 65 && contribu >= 20)) {
    console.log("Você já pode se aposentar!")
}
else {
    console.log("Você ainda não pode aposentar")
}