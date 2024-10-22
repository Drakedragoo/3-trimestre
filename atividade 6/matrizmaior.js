const matriz = [
 [1, 22, 3],
 [14, 5, 6],
 [7, 8, 9]
];

let maior = matriz[0][0];

for(let i = 0; i < matriz.length; i++) {
 for(let j = 0; j < matriz[i].length; j++) {
  if(matriz[i][j] > maior) {
   maior = matriz[i][j]
  }
 }
}

console.log("O maior elemento da matriz é:", maior)