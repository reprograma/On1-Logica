// Pesquise na internet uma implementação em JavaScript de algoritmo de ordenação chamado 'Buble Sort'

// Comente as linhas do código explicando o que cada uma delas está fazendo

// Existe alguma linha que você não entendeu? Comente essa linha com ????

// Você faria alguma coisa diferente no código ?

// Explique em linhas gerais como o algoritmo funciona

// Este desafio é uma ótima forma de aprender a programar? Tente fazer isso com outros algoritimos...depois de fazer dá uma olhada neste site http://sorting.at/

function bubble_Sort(a) // aqui ta determinando a função
{
    var swapp; // aqui está declarando uma variavel
    var n = a.length-1; // aqui está declarando uma variavel e atribuindo um valor
    var x=a;
    do {
        swapp = false; /// ???
        for (var i=0; i < n; i++) // ????
        {
            if (x[i] < x[i+1]) // ???
            {
               var temp = x[i]; // ???
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));