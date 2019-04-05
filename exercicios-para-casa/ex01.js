// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var reprograma

// Mostre o valor atual de sua variável no console 
var reprograma
reprograma
//undefined

// Atribua um valor à variável que você acabou de criar
var reprograma = "Turma Online"

// Agora mostre novamente o valor atual de sua variável no console 
reprograma
//"Turma Online"

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var nota

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
var nota = 7

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = 2 + 2 soma //4

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
var soma = 2 + 2

soma = soma +1 
soma += 1
soma++

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = soma * 2

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
soma // 4 -> apenas chamando a variável para ver o valor armazenado nela
console.log(soma) //4 -> no console
document.write(soma) // 4 -> no documento

multiplicacao // 8 -> apenas chamando a variável para ver o valor armazenado nela
console.log(multiplicacao) // 8 -> no console
document.write(multiplicacao) // 8 -> no documento

// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pao', 'requeijao', 'presunto', 'queijo', 'alface', 'tomate']

// Moste a variável 'sanduba' no console
sanduba
//(6) ["pao", "requeijao", "presunto", "queijo", "alface", "tomate"]

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
sanduba[0] // "pao"

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push = ('picles')

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba[1] = 'nata'

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
var soma = 4
console.log(typeof soma)
//number
var reprograma = "Turma Online"
console.log(typeof reprograma)
//string
var queroSerDesenvolvedora = true
console.log(typeof queroSerDesenvolvedora)
//boolean
