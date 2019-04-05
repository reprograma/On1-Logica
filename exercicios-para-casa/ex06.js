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


var sexo = prompt('Por favor, insira seu sexo. Use M para masculino e F para feminino');
var tempoContribuição = prompt('Por favor, nos informe o tempo de contribuição em anos. (Apenas números)');
var idade = prompt('Por favor, digite sua idade. (Apenas números)');


if (sexo = ('f' || 'F' ) &&  idade >= 62 && tempoContribuição >= 20 ){
    alert('Você já pode se aposentar.')
}
else if (sexo = ('m' || 'M' ) && idade >= 65 && tempoContribuição >=20) {
    alert('Você já pode se aposentar.')
}
else {
    alert('Você ainda não pode se aposentar')
}


// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)

