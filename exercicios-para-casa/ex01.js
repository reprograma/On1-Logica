// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var cursoReprograma;

// Mostre o valor atual de sua variável no console 
console.log(cursoReprograma);

// Atribua um valor à variável que você acabou de criar
cursoReprograma = "Curso Front-end online";

// Agora mostre novamente o valor atual de sua variável no console 
console.log(cursoReprograma);

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
nota = 8;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = 2 + 5;

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
soma = soma +1;
soma+=1;
++soma;

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = soma * Math.floor(Math.random() * 101); 
 
// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
console.log(soma, multiplicacao);
window.alert(soma);
window.alert(multiplicacao);
document.write(soma, ' ', multiplicacao);

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pao', 'maionese', 'alface', 'tomate', 'queijo', 'salame'];

// Moste a variável 'sanduba' no console
console.log(sanduba); //["pao", "maionese", "alface", "tomate", "queijo", "salame"]

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0]); //pao

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("mostarda"); //["pao", "maionese", "alface", "tomate", "queijo", "salame", "mostarda"]

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba[2]="rucula"; //["pao", "maionese", "rucula", "tomate", "queijo", "salame", "mostarda"]

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
console.log(typeof sanduba);    //object
console.log(typeof cursoReprograma);    //string
console.log(typeof queroSerDesenvolvedora); //boolean
