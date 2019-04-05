// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var cursoJavascript;

// Mostre o valor atual de sua variável no console
console.log(cursoJavascript);

// Atribua um valor à variável que você acabou de criar
cursoJavascript = "Hello World";

// Agora mostre novamente o valor atual de sua variável no console
console.log(cursoJavascript); // Hello World

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
nota = 5;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha)
var soma = n1 + n2;

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários)
soma = soma + 1;
soma += 1;
soma++;

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = soma * 3;

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes
console.log(soma, multiplicacao);
document.write(`Soma ${soma} e Multiplicação ${multiplicacao}`);
alert(`Soma ${soma} e Multiplicação ${multiplicacao}`);

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ["pao", "queijo", "presunto", "rúcula", "mostarda e mel"];

// Moste a variável 'sanduba' no console
console.log(sanduba);

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0]); // pao

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("tomate"); 

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba.splice(2, 1, "cebola caramelizada");

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof sanduba; // object
typeof nota; // number
typeof queroSerDesenvolvedora; // boolean
