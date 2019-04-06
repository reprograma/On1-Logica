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

var sexoUsuario = prompt('Informe o seu sexo (F/M):');
var idadeUsuario = prompt('Informe a sua idade (anos):');
var tempoContribuicaoUsuario = prompt('Informe o seu tempo de contribuição (anos):');

if (sexoUsuario == 'F' && idadeUsuario >= '62' && tempoContribuicaoUsuario >= '20'){
    console.log('Você já pode se aposentar!')
}else if (sexoUsuario == 'M' && idadeUsuario >= '65' && tempoContribuicaoUsuario >= '20'){
    console.log('Você já pode se aposentar!')
}else{
    console.log('Você ainda não pode se aposentar.')
}

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)