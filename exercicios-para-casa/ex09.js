// Funções

//Nós não falamos de funções ainda ...é tema da próxima aula, mas eu proponho o seguinte exercício: pesquise sobre funções na documentação (sugiro MDN ou W3schools), depois disso selecione 3 dos exercícios resolvidos anterioriormente e os transfor-me em uma função:
//Dica exemplo: 
// Soma de dois números > 2 + 5:
// function doisMaisCinco(){
//    return 2+5
// }

//EXEMPLO
//Função
function functionSum(n1, n2) {
  return n1 + n2;
}
//Chama a função
soma = functionSum(2,5);
console.log(soma);

//EXERCÍCIO I
//Função
function contaDez(){
	var i=0;
	while(i<=10){
	console.log(i);
	i++;
	}
}
//Chama a função
contaDez();

//EXERCÍCIO II
//Função
function geradorEstrelas(){
	var n;
	n = prompt ('Digite o numero de linhas com estrelas que você quer gerar');
	//Loop linhas
	for (var i=1; i<=n; i++){
		var numAsteriscos= '';
		//Loop para concatenar os asteriscos
		for (var j=1; j<=i; j++){
			numAsteriscos = numAsteriscos + '*';
		}
		//Escreve os asteriscos quando sai do loop de concatenação
		console.log(numAsteriscos);
	}
}
//Chama a função
geradorEstrelas();

//EXERCÍCIO III
//Função
function contaSessentaInv(){
	for(i=60; i>=0; i--){
    console.log(i);
	}
}
//Chama a função
contaSessentaInv();

// PS.Não frita com esse exercício...vamos falar sobre isso na próxima semana