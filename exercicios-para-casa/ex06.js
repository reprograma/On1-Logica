// Estrutura if / else if / else

// Baseado em testes reais:
// Imagine que você foi contratada para criar um algoritmo para ajudar pessoas a entederem as novas regras da previdência (que é uma coisa que ninguém entende...rsrsrs)
// Isso é só um exercício, nem sei se os valores estão corretos, não se apegue a isso
// Você deve considerar as seguintes premissas:
// - O usuário deve informar o sexo (H ou M), o tempo de contribuição (anos) e a idade (anos)
// - Se for mulher(M) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 62 anos
// - Se for homem(H) a pessoa deve ter tempo de contribuição maior ou igual a 20 anos e idade maior ou igual a 65 anos
// - Se a pessoa atender aos parâmetros mostre a mensagem 'Você já pode se aposentar'
// - Se a pessoa não atender aos parâmetros mostre a mensagem 'Você ainda não pode se aposentar'

// [DESAFIO - NÃO OBRIGATÓRIO] 
// Se você achou fácil, tente fazer uma versão que mostre o motivo pelo qual a pessoa ainda não pode se aposentar ;

var sexo = prompt ('Digite H para Homem e M para mulher');
var tempoContribui = prompt ('Digite o tempo de contribuição em anos');
var idade = prompt ('Digite a idade');

if(sexo == 'M' || sexo == 'm'){
	console.log('Mulher');	
	if(tempoContribui >= 20 && idade >=62){
		window.alert('Você já pode se aposentar');
	} else if (tempoContribui < 20 && idade >=62){
		window.alert('Você ainda não pode se aposentar pois não tem tempo de contribuição suficiente');
	} else if (tempoContribui >=20 && idade <62){
		window.alert('Você ainda não pode se aposentar pois não tem a idade mínima');
	} else{
		window.alert('Você ainda não pode se aposentar pois não tem a idade mínima nem o tempo de contribuição necessários');
	}
} else if(sexo == 'H' || sexo == 'h' ){
	console.log('Homem');
	if(tempoContribui >= 20 && idade >=65){
		window.alert('Você já pode se aposentar');
	} else if (tempoContribui < 20 && idade >=65){
		window.alert('Você ainda não pode se aposentar pois não tem tempo de contribuição suficiente');
	} else if (tempoContribui >=20 && idade <65){
		window.alert('Você ainda não pode se aposentar pois não tem a idade mínima');
	} else{
		window.alert('Você ainda não pode se aposentar pois não tem a idade mínima nem o tempo de contribuição necessários');
	}
} else{
	console.log('Digitou um valor inválido');
}