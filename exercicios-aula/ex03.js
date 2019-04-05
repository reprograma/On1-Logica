// Entrada + processamento + Saída:
// Crie um algoritmo que calcule a idade de uma pessoa a partir do ano de nascimento

var nomeVariável

/* O nome da variável tem que ser semântico, passar realmente a ideia. (Clean code : livro de programação recomendado) 
O nome pode iniciar com uma letra, _ ou $
Evite caracteres especial
Não pode palavra reservada
VERIFIQUE A DIGITAÇÃO DAS VARIÁVEIS (nome tem q ser igual sempre, se uma letra tiver diferente já era)
*/

// CTRL + D = mudar variaveis com o msm nome ao mesmo tempo

var anoAtual // DECLARAÇÃO
anoAtual= 2019 // ATRIBUIÇÃO
var anoNascimento= prompt('Informe seu ano de nascimento')
var idade = anoAtual - anoNascimento
console.log('Idade:', idade)