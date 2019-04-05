// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var x;

// Mostre o valor atual de sua variável no console 
console.log (typeof x); // mostra undefined

// Atribua um valor à variável que você acabou de criar
x = 10;

// Agora mostre novamente o valor atual de sua variável no console 
console.log (x); // mostra 10

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
nota = 6;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = 3 + 3; // console.log volta 6

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
soma= soma+=1; 
soma= soma+1;
soma = soma++;
// testei todos em console.log


// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var mult = soma * 10; // testado em console.log

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
console.log (mult, soma); 
alert("Esta é a variável mult " + mult + " Esta é a variável soma " + soma); 
document.write("Esta é a variável mult " + mult + " Esta é a variável soma " + soma);
// todos testados em console.log

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ["pao", "hamburguer", "queijo", "bacon", "ovo", "alface", "tomate", "cebola", "maionese"];

// Moste a variável 'sanduba' no console
console.log(sanduba); // testado em console.log voltando 9 itens.

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0]); // voltou "pao"

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("mostarda");// em console.log(sanduba) mostra a inclusao do item e numero total final de 10 itens.

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
var removed = sanduba.splice(4,1,"manjericao");
//removi o ovo na posicao 5 e substitui por manjericao. Tentei dar um sanduba.replace mas não deu certo.

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
var soma = number;
var queroSerDesenvolvedora = Boolean;
var sanduba = Array; //typeof volta Object.