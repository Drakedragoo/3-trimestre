const matriz = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

if(matriz.length !== matriz[0].length) {
 console.log("A matriz não é quadrada, e portanto, não pode ser simétrica");
} else {
 let simetrica = true;

 for(let i = 0; i < matriz.length; i++) {
  for(let j = 0; j < matriz[i].length; j++) {
   if(matriz[i][j] !== matriz[j][i]) {
    simetrica = false;
    break;
   }
  }
  if(!simetrica) break;
 }

 if(simetrica) {
  console.log("A matriz é simétrica.");
 } else {
  console.log("A matriz não é simétrica.");
 }
}