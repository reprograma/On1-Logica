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

<
script >
    var nome = prompt("Digite o seu nome");
var sexo = prompt("Digite a letra M se você é mulher ou, H se você é homem (utilize letra MAIUSCULA Ex.:M )");
var contribuicao = prompt("Agora nos diga quantos anos você já contribuiu para a previdência (somente números Ex.: 10)");
var idade = prompt("Por último informe a sua idade (somente números Ex.: 42)");


if (sexo == "M") {

    
    if (contribuicao >= 20 && idade >= 62) {
        alert("Prezada, " + nome + " você está apta a se aposentar!");

        
    } else if (contribuicao >= 20 && idade < 62) {
        var fm_cont = contribuicao;
        var fm_idade = 62 - idade;
        alert("Prezada, " + nome + " mesmo tendo contribuído por " + fm_cont + " anos, ainda faltam " + fm_idade + " anos para você atingir a idade mínima e conseguir se aposentar =/");

        
    } else if (contribuicao < 20 && idade >= 62) {
        var fm_cont = 20 - contribuicao;
        var fm_idade = idade;
        alert("Prezada, " + nome + " mesmo tendo " + fm_idade + " anos de idade, ainda faltam " + fm_cont + " de contribuição para você conseguir se aposentar =/")

        
    } else {
        alert("Prezada, " + nome + " você ainda não pode se aposentar pois não contribuiu o tempo mínimo e nem possui idade suficiente!")
    }
}



if (sexo == "H") {

 
    if (contribuicao >= 20 && idade >= 65) {
        alert("Prezado, " + nome + " você está apto a se aposentar!");

     
    } else if (contribuicao >= 20 && idade < 65) {
        var fm_cont = contribuicao;
        var fm_idade = 65 - idade;
        alert("Prezado, " + nome + " mesmo tendo contribuído por " + fm_cont + " anos, ainda faltam " + fm_idade + " anos para você atingir a idade mínima e conseguir se aposentar =/");

       
    } else if (contribuicao < 20 && idade >= 65) {
        var fm_cont = 20 - contribuicao;
        var fm_idade = idade;
        alert("Prezado, " + nome + " mesmo tendo " + fm_idade + " anos de idade, ainda faltam " + fm_cont + " de contribuição para você conseguir se aposentar =/")

   
    } else {
        alert("Prezado, " + nome + " você ainda não pode se aposentar pois não contribuiu o tempo mínimo e nem possui idade suficiente!")
    }
}
// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)
