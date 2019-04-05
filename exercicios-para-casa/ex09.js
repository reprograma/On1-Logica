// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana

function jogoParOuImpar(){
    var chuteComputador = Math.ceil(Math.random()*10);
    var chuteUsuario = prompt ('Insira aqui seu número de 0 a 10 e escolha se quer par ou ímpar= ', chuteUsuario); //pesquisar como limitar o usuário escrever só até 10
    
    if (chuteUsuario%2 == 0 + chuteComputador%2 == 1) {
        console.log('Par!')
    }
    
    else  {
        console.log('Ímpar!')
    }
    
    console.log('O número do computador foi', chuteComputador) 
}

function Previdencia (){
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
}

function ContadorReverso{
    var inicio = 60
var fim = 0
for (let i=inicio; i>=fim; i--){ 
    console.log(i) 
}   
}