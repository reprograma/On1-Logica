// Variáveis e Tipos

/* Precisa de ajuda? Veja esses links:

    http://tableless.github.io/iniciantes/manual/js/variaveis.html

    https://www.w3schools.com/js/default.asp (navegue)

    https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico (navegue)
*/

// Tá com dúvidas sobre como responder ao exercício? Leia o arquivo _Intrucoes.md

// Crie/declare uma variável para guardar o nome do curso que você está fazendo na reprograma (sem valor).
var frontEndOnline

// Mostre o valor atual de sua variável no console 
console.log(frontEndOnline)

// Atribua um valor à variável que você acabou de criar
frontEndOnline = 10

// Agora mostre novamente o valor atual de sua variável no console 
console.log(frontEndOnline)

// Crie/declare uma variável para guardar uma nota de 1 a 10 (sem valor).
var notaLogica

// Nesta variável atribua o valor da nota que você daria (hoje) para os seus conhecimentos de lógica (seja realista sem ser cruel com você mesma, lembre que você está começando)
notaLogica = 6

// Crie/declare uma nova variável chamada 'soma' e atribua o resultado da soma de dois valores nesta variável (tente fazer tudo em uma linha) 
var soma = Number(frontEndOnline)+(notaLogica)

// Incremente (some mais 1) à sua variável 'soma' usando 3 formas diferentes (dica: pesquise operadores unários) 
//Adição(+)
console.log(soma + 1)

//Incremento (Prefixo)
console.log(++soma)

//Incremento (Posfixo)
console.log(soma++)
console.log(soma)

// Crie/declare uma variável 'multiplicacao' que multiplica a sua variável 'soma' por um valor qualquer
var multiplicacao = soma*2

// Mostre o valor das variáveis 'soma' e 'multiplicacao' usando três formas diferentes 
//Mostrando o valor no Console
console.log('o valor da soma é ' + soma + ' e o valor da multiplicação por 2 é ' + multiplicacao)

//Mostrando o valor na página
document.write(soma, multiplicacao)

//Mostrando em um box 'alert'
alert('o valor da soma é' + soma + ' e o valor da multiplicação é' + multiplicacao)


// Crie/declare uma variável chamada 'queroSerDesenvolvedora' e atribua um valor booleano à ela (...tô torcendo pra ser true..rsrsrsr)
var queroSerDesenvolvedora = true

// Crie/Declare uma variável chamada 'sanduba' do tipo array e acrescente valores correspondentes àos ingretientes da sua receita preferida. (Nós vimos array correndo então vou dar uma dica aqui: var sanduba = ['pao', 'ovo', 'queijo'] )
var sanduba = ['pao', 'queijo', 'presunto', 'ovo', 'alface']

// Moste a variável 'sanduba' no console
console.log(sanduba)

// Mostre o primeiro igrediente de 'sanduba' (desafio pra você pesquisar)
console.log(sanduba[0])

// Acrescente um ingrediente ao seu 'sanduba' (desafio pra você pesquisar)
sanduba.push("tomate")

// Substitua um ingrediente do seu 'sanduba' (desafio pra você pesquisar...sempre tento trocar a ervilha, quando tem)
sanduba[2] = "bacon" //Substituindo o item [2]'presunto' por 'bacon'

// Escolha 3 variáveis que você criou e mostre o seus respectivos tipos (lembre que tem um comando pra isso)
console.log('A variável frontEndOnline, de valor ' + frontEndOnline + ', é do tipo: ' + typeof frontEndOnline) //A variável frontEndOnline, de valor 10, é do tipo: number

console.log('A variável queroSerDesenvolvedora, de valor ' + queroSerDesenvolvedora + ', é do tipo: ' + typeof queroSerDesenvolvedora) //A variável queroSerDesenvolvedora, de valor true, é do tipo: boolean

console.log('A variável sanduba, com os valores:' + sanduba + ', é do tipo: ' + typeof sanduba) //A variável sanduba, com os valores:pao,queijo,presunto,ovo,alface, é do tipo: object


