const matriz = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

if(matriz.length !== matriz[0].length) {
    console.log("A matriz não é quadrada.");
} else {
   console.log("Elementos da diagonal principal:");

  for(let i = 0; i < matriz.length; i++) {
   console.log(matriz[i][i]);
 }
}