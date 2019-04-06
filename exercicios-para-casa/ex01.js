// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var frontEndOnline;

// Mostre o valor atual de sua variável no console 
console.log(frontEndOnline);

// Atribua um valor à variável que você acabou de criar
frontEndOnline = "Sucesso";

// Agora mostre novamente o valor atual de sua variável no console 
console.log(frontEndOnline)

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
nota = 3;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = (1+5);
console.log(soma);

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
[Substitua este texto por sua resposta]

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multSoma;
multSoma = soma * 2;
console.log(multSoma);

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
alert(soma);
console.log(soma);
document.write(soma);

alert(multSoma);
console.log(multSoma);
document.write(multSoma);

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora 
queroSerDesenvolvedora = 3>2;
console.log(queroSerDesenvolvedora);

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pao', 'queijo', 'hamburguer', 'bacon', 'maionese', 'catchup']

// Moste a variável 'sanduba' no console
console.log(sanduba);

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0]);

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("picles");

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba.pop([5]);
sanduba.push('barbecue');

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof sanduba; //retorna "object"
typeof soma //retorna "number"
typeof nota; //retorna "number"