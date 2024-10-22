const matrizOriginal = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const matrizTransporta = [];

for(let i = 0; i < matrizOriginal[0].length; i++) {
    matrizTransporta[i] = [];

  for(let j = 0; j < matrizOriginal.length; j++) {
    matrizTransporta[i][j] = matrizOriginal[j][i];
  }
}

console.log("Matriz Transposta:");
for(let i = 0; i < matrizTransporta.length; i++) {
    console.log(matrizTransporta);
}