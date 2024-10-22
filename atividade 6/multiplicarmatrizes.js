const matrizA = [
 [1,2,3],
 [4,5,6]
];

const matrizB = [
 [7,8],
 [9,10],
 [11,12]
];

if(matrizA[0].lenght !== matrizB.length) {
 console.log("A multiplicação das matrizes não é possível.");
} else {
    const matrizResultado = Array.from({ length: matrizA.length}, () => Array(matrizB[0].length).fill(0));

  for(let i = 0; i < matrizA.length; i++) {
   for(let j = 0; j < matrizB[0].length; j++) {
    for(let k = 0; k < matrizA[0].length; k++) {
     matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
    }
   }
  }

  console.log("Matriz Resultado");
  for(let i = 0; i < matrizResultado.length; i++){
   console.log(matrizResultado);
  }
}