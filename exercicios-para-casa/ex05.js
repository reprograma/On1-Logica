//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário

//Usuário escolhe par ou impar
var parImpar = prompt('Digite P se quiser escolher "PAR" ou I se quiser escolher "IMPAR"');
console.log (parImpar);
//Se o usuário digitar certo, vai executar o algoritmo
if(parImpar == 'P' || parImpar == 'I'){
	console.log('okey!!!!');
	//Usuário escolhe um número de 1 a 5
	var nUsuario = prompt('Digite um número de 1 a 5');
	console.log (nUsuario);
	if (nUsuario>0 && nUsuario<6){
		var nComputador = Math.floor(Math.random() * 6);
		console.log (nComputador);
		var soma = parseInt(nUsuario)+parseInt(nComputador);
		console.log (soma);
		if(soma%2 == 0){
			console.log('Par');
			var flag = 'P' ;
		} else{
			console.log('Impar');
			var flag = 'I';
		}
		if(parImpar == flag){
			window.alert('Você ganhou! :D')		
		}else{
			window.alert('Você perdeu! :(')	
		}
	}else{
		window.alert('Numero fora do intervalo');
	}
}else{
	window.alert('Você só pode digitar P ou I')
}



