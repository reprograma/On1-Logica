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

var sexo = Number(prompt('Digite 0 caso seja do sexo feminino e 1 caso seja do seja masculino'))
var tempoContribuicao = prompt('Informe, em anos, seu tempo de contribuição: ')
var idade = prompt('Informe sua idade:')

var condicao1 = sexo===0 //sexo feminino
var condicao2 = sexo===1 //sexo masculino    
var condicao3 = tempoContribuicao >=20 //tempo de contribuição mínimo para ambos os sexos
var condicao4 = idade >=62 //idade mínima para as mulheres
var condicao5 = idade >=65 //idade mínima para os homens

if (condicao1&&condicao3&&condicao4){ //Mulher, com mais de 20 anos de contribuição e mais de 62 anos 
    console.log('Você já pode se aposentar')
}
else if (condicao2&&condicao3&&condicao5){ //Homem, com mais de 20 anos de contribuição e mais de 65 anos
    console.log('Você já pode se aposentar')
}
else if (condicao1&&!condicao4){ //Mulher com menos de 62 anos
    console.log('Para mulheres, a idade mínima para a aposentadoria é de 62 anos! - Você ainda não pode se aposentar')
}
else if (condicao2&&!condicao5){ //Homem com menos de 65 anos
    console.log('Para homens, a idade mínima para a aposentadoria é de 65 anos! - Você ainda não pode se aposentar')
}
else if (condicao1&&!condicao4&&!condicao3){ //Mulher com menos de 62 anos e menos de 20 anos de contribuição
    console.log('Para mulheres, a idade mínima para a aposentadoria é de 62 anos e o tempo mínimo de contribuição é de 20 anos - Você ainda não pode se aposentar')
}
else if (condicao2&&!condicao5&&!condicao3){ //Homem com menos de 65 anos e menos de 20 anos de contribuição
    console.log('Para homens, a idade mínima para a aposentadoria é de 65 anos e o tempo mínimo de contribuição é de 20 anos - Você ainda não pode se aposentar')
}
else{ //Homens e Mulheres com menos de 20 anos de contribuição 
    console.log('Você ainda não tem o tempo de contribuição necessária! - Você ainda não pode se aposentar')
}






// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)