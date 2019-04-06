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
let sexo = prompt('Informe seu sexo (H/M)');
let tempoContribuicao = prompt('Quantos tempo de contribuição você tem?');
let idade = prompt('Informe sua idade');

if (sexo == 'M' && tempoContribuicao>= 20 && idade>= 62){
    console.log('Parabéns!! Você pode se aposentar!!!')
}else if (sexo == 'H' && tempoContribuicao>=20 && idade>= 65){
    console.log('Parabéns!! Você pode se aposentar!!!')
}else {
    console.log('Você ainda não pode se aposentar T.T')

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)
let sexo = prompt('Informe seu sexo (H/M)');
let tempoContribuicao = prompt('Quantos tempo de contribuição?');
let idade = prompt('Informe sua idade');

if (sexo == 'M' && tempoContribuicao>= 20 && idade>= 62){
    console.log('Você já pode se aposentar!!! sorte sua *_*')
}else if (tempoContribuicao<=19){
    console.log('Você ainda não pode se aposentar pois não tem tempo de contribuição o suficiente :/')
} else if (sexo == 'M' && idade<=61){
    console.log('Você ainda não pode se aposentar pois não atingiu a idade mínima =/')

}else if (sexo == 'H' && tempoContribuicao>=20 && idade>= 65){
    console.log('Você já pode se aposentar!!! sorte sua *_*')
}else if (sexo == 'H' && idade<=64){
    console.log('Você ainda não pode se aposentar pois não atingiu a idade mínima =(')
}else { 
    console.log('Você ainda não pode se aposentar pois não tem tempo de contribuição o suficiente :/')
}