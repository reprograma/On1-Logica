// Estrutura while

// Construa um algoritmo que conte até 10 usando a estrutura while (cuidado)

//Quantas atividades um aluno precisará completar para atingir 10 pontos extras na disciplina?
var pontos = 0;
const metaPontos = 10;
var atividades = 1;
while (pontos<metaPontos){ //Enquanto a quantidade de pontos for menor do que 10
pontos = pontos + parseInt(prompt('Pontos acumulados na ' + atividades + 'ª atividade' ))
console.log(atividades, pontos)
atividades ++
}
console.log('O aluno precisou de ' + (atividades - 1) + ' atividades para acumular 10 pontos!')
