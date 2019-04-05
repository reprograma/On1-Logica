// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).

var cursoLindo = '{reprograma} Front-end EAD T1'

// Mostre o valor atual de sua variável no console 

var cursoLindo = '{reprograma} Front-end EAD T1'
console.log =(cursoLindo)

// Atribua um valor à variável que você acabou de criar

var cursoLindo = 10

// Agora mostre novamente o valor atual de sua variável no console 
var cursoLindo = 10
console.log = (cursoLindo)

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).

var guardarNota = prompt('Insira a sua nota')
console.log = (guardarNota)

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)

var guardarNota = prompt('Insira a sua nota')
console.log = (guardarNota)
"7"

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 

var soma1 = (2 + 2)
console.log = (soma1)

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 

//FORMA 1

var soma1 = 4
var soma2 = 1
var SomaTotal = [soma1 + soma2]
console.log = (SomaTotal)

//FORMA 2

var limite = prompt('Escolha um número')
for (let i=1; i<limite; i++){
    document.write(i)
}

//FORMA 3
var numero = numero + 1
console.log = prompt('Seu número')

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer

var soma1 = 4
var soma2 = 1
var multi = prompt('Escolha um número')
var SomaTotal = [soma1 + soma2]
console.log = (SomaTotal*multi)

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 

//FORMA 1

var soma1 = 4
var soma2 = 1
var multi = 2
var SomaTotal = [soma1 + soma2]
console.log = (SomaTotal*multi)

//FORMA 2

var somaMultiplicacao = [4, 1, 2]
console.log = (somaMultiplicacao)

//FORMA 3

document.write(4, 2, 1 )

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)

var queroSerDesenvolvedora = "true";
var boolValue = (/true/i).test(queroSerDesenvolvedora)
console.log(queroSerDesenvolvedora)

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )

var sanduba = ['2 hamburgueres', 'alface', 'queijo', 'molho especial', 'cebola', 'picles', 'pao', 'gergelim'];
sanduba.toString();

// Moste a variável 'sanduba' no console

console.log = ("sanduba")

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)

var sanduba = ['2 hamburgueres', 'alface', 'queijo', 'molho especial', 'cebola', 'picles', 'pao', 'gergelim'];
var primeiroIngrediente = sanduba[0];
console.log = (primeiroIngrediente);


// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)

var sanduba = ['2 hamburgueres', 'alface', 'queijo', 'molho especial', 'cebola', 'picles', 'pao', 'gergelim'];
var novoIngrediente = sanduba.push('Maionese delícia');
console.log = (sanduba);

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)

var sanduba = ['2 hamburgueres', 'alface', 'queijo', 'molho especial', 'cebola', 'picles', 'pao', 'gergelim'];
var novoIngrediente = sanduba.push('Maionese delícia');
console.log = (sanduba);

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
var sanduba
typeof sanduba
'string'
var multi
typeof
'number'
var limite
'number'