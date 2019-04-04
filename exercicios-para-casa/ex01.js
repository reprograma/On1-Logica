// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var FrontEndReprograma;

// Mostre o valor atual de sua variável no console 
console.log(FrontEndReprograma);

// Atribua um valor à variável que você acabou de criar
FrontEndReprograma = 5;

// Agora mostre novamente o valor atual de sua variável no console 
console.log(FrontEndReprograma);

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var Nota;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
Nota = 3;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var Soma = 3+5;

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
var Adicionar = 1;
var SomaFinal1 = Soma + Adicionar; // Forma 1
var SomaFinal2 = Soma++; // Forma 2
var SomaFinal3 = Soma + 1; // Forma 3
console.log(SomaFinal1, SomaFinal2, SomaFinal3)

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = Soma*2;

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
console.log(Soma, multiplicacao);
prompt(Soma, multiplicacao);


// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba =['pao', 'presunto', 'queijo']

// Moste a variável 'sanduba' no console
console.log(sanduba)

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0])

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push('frango')

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba[0]='pao frances';

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
console.log(sanduba, typeof sanduba);
console.log(queroSerDesenvolvedora, typeof queroSerDesenvolvedora);
console.log(Soma, typeof Soma);