// Pesquise na internet uma implementação em JavaScript de algoritmo de ordenação chamado 'Buble Sort'

// Comente as linhas do código explicando o que cada uma delas está fazendo
//ok! Feito! :)

// Existe alguma linha que você não entendeu? Comente essa linha com ????
//Acho que entendi todas as linhas!

// Você faria alguma coisa diferente no código ?
//Não! Alterei o código original pois ele organizava os números em ordem decrescente.

// Explique em linhas gerais como o algoritmo funciona
//Comentei o funcionamento, com o auxílio de alguns textos, no código mesmo.

// Este desafio é uma ótima forma de aprender a programar? Tente fazer isso com outros algoritimos...depois de fazer dá uma olhada neste site http://sorting.at/
// Sim! As vezes é complexo entender um código pronto feito por outra pessoa, mas é uma habilidade necessária. 

//Bubble sort algorithm
//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php

//Compara valores adjascentes
//The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values swap positions 
//if the first value is greater than the second. 
function bubble_Sort(a)	//Entra com um array a, contendo os números a serem organizados
{
    var swapp;	//Declaração da variável swapp
    var n = a.length-1;	//Declaração da variável n, com tamanho igual ao array de entrada (a) menos 1
    var x=a;	//Atribuição do array a ao array x
    do {	//Do while enquanto a variável swapp for true
        swapp = false;	//Atribuição de valor "false" à variável swapp
		console.log('entrou no Do While');
        for (var i=0; i < n; i++)	
        {
			//console.log('entrou no For');
            if (x[i] > x[i+1])	//Se o valor atual é maior do que o seu sucessor então:
            {
			   //console.log('entrou no If');
               var temp = x[i];	//Atribui o valor atual à uma variável temporária
               x[i] = x[i+1];	//Coloca o valor menor no lugar do maior
               x[i+1] = temp;	//Coloca o valor maior no lugar do menor
               swapp = true;	//Atribui o valor "true" à variável swapp
			   console.log(x);
            }
        }		
    } while (swapp);
	console.log('Saiu do Do While', swapp);
	//During each iteration, if values are swapped, then the “swapped” variable is set to true. 
	//Then, using a do-while loop, it will only run the code if the swapped variable is true, thus 
	//ensuring that only 1 extra verification iteration happens.
	//<https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2>
 return x; 
}
//console.log(bubble_Sort([3, 1, 2]));
console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));