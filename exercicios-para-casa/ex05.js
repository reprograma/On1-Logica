//Condicionais Estrutura if / else

// Lembra do exercício de par ou ímpar, vamos incrementar?
// Crie um jogo de par ou ímpas contra o compudador. A ideia é você gerar um número aleatório para o computador e comparar com o número informado pelo usuário e mostrar quem venceu a partida. Divirta-se

// Dicas: 
//  - Use a função Math.random() para gerar um número inteiro aleatório
//  - Use o prompt() para coletar o número informado pelo usuário



// Par ou ímpar contra o pc:
    // a) Crie um algoritmo que mostre se um número informado pelo usuário é par ou ímpar
    
    var EscolhaPC;
    var EscolhaUser;

    var suaEscolha = prompt('Você quer par ou ímpar?');

    if (suaEscolha = 'par'){
        EscolhaUser = 'par';
        EscolhaPC = 'impar';
    }

    else {
        EscolhaUser='impar';
        EscolhaPC='par';
    }

    
    var seuNumero = parseInt(prompt('Informe número'));
     //// AGORA A PARTE QUE O PC CARREGA O NUMERO

     var pcNumero = Math.round(Math.random()*10);

     var somaFinal = seuNumero + pcNumero;

    if (somaFinal%2 == 0){
        console.log('Ganhou quem escolheu par')
    }else if (seuNumero%2 == 1)  {
        console.log('Ganhou quem escolheu impar')
    }else {
        console.log('Esse troço que você digitou não é um numero')
    }
    console.log ('A soma final foi: '+ somaFinal);
    console.log('Sua escolha: '+ EscolhaUser);
    console.log ('Escolha do computador; '+ EscolhaPC);


//    par - resto 0
//    impar - resto 1