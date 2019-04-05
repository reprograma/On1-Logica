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


var sexo = prompt('Digite H para Homem e M para Mulher', sexo);
var idade = prompt('Digite sua idade atual', idade);
var tempoContribuicao = prompt('Digite seu tempo de contribuição', tempoContribuicao);

if (tempoContribuicao >= 20) {
    if (sexo === "H") {
        if (idade >= 65) {
            alert("Você já pode se aposentar!");
        } else {
            alert("Você ainda não pode se aposentar! ");
        }
    } else if (sexo === "M") {
        if (idade >= 62) {
            alert("Você já pode se aposentar!");
        } else {
            alert("Você ainda não pode se aposentar! ");
        }
    } else {
        alert("Sexo incorreto!");
    }
} else {
    alert("Você ainda não pode se aposentar!");
}

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)






