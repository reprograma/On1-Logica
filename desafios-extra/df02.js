// Entre em dos sites de desafios indicados abaixo e selecione 1 algoritmo que você consiga resolver. Copie aqui o desafio e a solução que você criou. 
// Nota: Não importa o nível de dificuldade do desafio, eu só quero que vocês tentem e percam o medo de errar. Se você não conseguiu fazer passe para o pŕoximo exercício.
// Alguns sites de desafios...se achar outro conta pra gente 
    // https://exercism.io/
    // https://www.freecodecamp.org/
    // https://www.hackerrank.com/
    // https://www.codewars.com/
    

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

//Example:

//makeNegative(1); // return -1
//makeNegative(-5); // return -5
//makeNegative(0); // return 0
//makeNegative(0.12); // return -0.12
//Notes:

//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//Solution:
function makeNegative(num) {
  if (num > 0){
  return -num;
  } else{
  return num;
  }
}


// Agora cole aqui um desafio que você tentou e não conseguiu resolver. Cole tentativas que você fez ou descreva como você acha que deveria ser uma possível solução. Tente! 

//Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
//For example,
//
//[true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]
//The correct answer would be 17.
//
//Hint: Don't forget to check for bad values like null/undefined

//Solution
function countSheeps(array1) {
cont = 0;
  for (i=0; i<(array1.length-1);i++){
      if(array1[i]=='true'){
      cont = cont + 1;
      }
  }
  return cont;
}

//Output
//Não entendi muito bem porque não deu certo. Porque não testei valores null/undefined?
Time: 768ms Passed: 0 Failed: 1 Exit Code: 1
Test Results:
There are 17 sheeps in total