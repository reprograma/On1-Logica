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


/// PERGUNTAS PARA TER OS DADOS

var sexoUser = prompt('Qual é o seu sexo: H ou M?');
var tempoUser = prompt('Quantos anos você tem de contribuição?');
var idadeUser = prompt('Qual é a sua idade?');


/// NO CASO DO HOMEM:



if (sexoUser == 'H' && tempoUser >= 20 && idadeUser >= 65){
    prompt('Homem, você já pode se aposentar!');
}

else if (sexoUser == 'M'&& tempoUser >=20 && idadeUser >=62){
    prompt('Mulher, você já pode se aposentar!');
}

else {
    alert('Você ainda não pode se aposentar');
}
