// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var curso

// Mostre o valor atual de sua variável no console 
undefined

// Atribua um valor à variável que você acabou de criar
curso = 'Front-End'

// Agora mostre novamente o valor atual de sua variável no console 
curso = 'Front-End'
"Front-End"

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota1;

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
nota1 = 4;

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = nota1 + nota2

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
var maisUm
maisUm = soma +1

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao1
multiplicacao1 = soma * 6

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
soma = nota1 + nota2
10

multiplicacao1 = soma *6
60

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true;

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pão', 'muito queijo', 'bacon', 'margarina']

// Moste a variável 'sanduba' no console
var sanduba = ['pão', 'muito queijo', 'bacon', 'margarina']
undefined
sanduba
(4) ["pão", "muito queijo", "bacon", "margarina"]

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
var primeiro = sanduba [0]
undefined
primeiro
"pão"

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
var adicionar = sanduba.push('presunto');
undefined
sanduba
(5) ["pão", "muito queijo", "bacon", "margarina", "presunto"]

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
var remove = sanduba.splice(pos,1)
var adicionar1 = sanduba.push('pão de centeio');

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
typeof soma
"number"

typeof queroSerDesenvolvedora
"boolean"

typeof curso
"string"