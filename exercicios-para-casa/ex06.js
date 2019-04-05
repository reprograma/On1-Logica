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

//PRIMEIRA FORMA DE SOLUÇÃO PENSADA - SEM FOCAR NA MELHOR EXPERIÊNCIA PRO USUÁRIO:
let informeSexo = prompt('Informe o seu sexo (H/M)');
console.log(informeSexo);

let tempoContribuicao = prompt('Quantos anos você contribuiu? Digite apenas número inteiro');
console.log(tempoContribuicao);

let idade = prompt('Quantos anos você tem? Digite apenas número inteiro');
console.log(idade);

if(informeSexo == 'M' && tempoContribuicao >= 20 && idade >= 62){
    console.log('Você já pode se aposentar')
}else if(informeSexo == 'M' && tempoContribuicao < 20 || idade < 62){
    console.log('Você ainda não pode se aposentar')
}

if(informeSexo == 'H' && tempoContribuicao >= 20 && idade >= 65){
    console.log('Você já pode se aposentar')
}else if(informeSexo == 'H' && tempoContribuicao < 20 || idade < 65){
    console.log('Você ainda não pode se aposentar')
}

//SEGUNDA FORMA DE SOLUÇÃO PENSADA

let tempoContribuicao = prompt('Quantos anos você contribuiu? Digite apenas número inteiro');
console.log(tempoContribuicao);

if(tempoContribuicao < 20){
    console.log('Você ainda não pode se aposentar')
}else{
    let informeSexo = prompt('Informe o seu sexo (H/M)');
    console.log(informeSexo);
    let idade = prompt('Quantos anos você tem? Digite apenas número inteiro');
    console.log(idade);

    if(informeSexo == 'M' && idade >= 62){
        console.log("Você já pode se aposentar")
    } else if(informeSexo == 'H' && idade >= 65){
        console.log("Você já pode se aposentar")
    }else{
        console.log("Você ainda não pode se aposentar")
    }
}


// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;)
let tempoContribuicao = prompt('Quantos anos você contribuiu? Digite apenas número inteiro');
console.log(tempoContribuicao);

if(tempoContribuicao < 20){
    console.log('Você ainda não pode se aposentar, pois o tempo mínimo de contribuição é de 20 anos.')
}else{
    let informeSexo = prompt('Informe o seu sexo (H/M)');
    console.log(informeSexo);
    let idade = prompt('Quantos anos você tem? Digite apenas número inteiro');
    console.log(idade);

    if(informeSexo == 'M'){
        if(idade >= 62){
            console.log("Você já pode se aposentar!")
        }else{
        console.log("Você ainda não pode se aposentar. A idade para uma mulher se aposentar é a partir de 62 anos, com minimo 20 anos de contribuição.")
        }
    }
    if(informeSexo == 'H'){
        if(idade >= 65){
            console.log("Você já pode se aposentar")
        }else{
            console.log("Você ainda não pode se aposentar. A idade para homem se aposentar é a partir de 65 anos, com mínimo de 20 anos de contribuição.")
        }
    }
}