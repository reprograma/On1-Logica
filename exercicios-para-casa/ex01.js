// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var frontendOnline;

// Mostre o valor atual de sua variável no console 
console.log (frontendOnline);

// Atribua um valor à variável que você acabou de criar
var frontendOnline = 1;

// Agora mostre novamente o valor atual de sua variável no console 
console.log ('Eu sou aluna da, ',frontendOnline, ' ª turma de Front End On Line da {reprograma}!');

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
var nota = 7; 
console.log('Hoje, considero que minha nota em lógica é', nota);

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = 5 + 2; console.log('O valor da soma é ', soma);

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
soma ++; soma +1; ++soma;

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var soma = 7;
var numero = prompt ('Insira um numero para multiplicar por 7 =');
var multiplicacao = soma * numero;
console.log('O resultado é = ', multiplicacao);

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
console.log('O resultado é = ', multiplicacao);
alert('O resultado da multiplicação é = ', multiplicacao);
document.write('O resultado da multiplicação é = ', multiplicacao;)

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pao', 'ovo', 'queijo', 'presunto', 'bacon'];

// Moste a variável 'sanduba' no console
console.log (sanduba);

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
var primeiroIngrediente = sanduba [0];
console.log ('O primeiro ingrediente do sanduba é, ', primeiroIngrediente);

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
var adicionarItem = sanduba.push('alface');

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
var removerOvo = sanduba.splice(1, 2, "tomate");

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof soma === 'number'
typeof queroSerDesenvolvedora === 'boolean'
typeof sanduba === 'object'