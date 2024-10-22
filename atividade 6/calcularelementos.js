const matriz = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
];

if(matriz.length !== matriz[0].length) {
 console.log("A matriz não é quadrada.");
} else {
 let somaDiagonalSecundaria = 0;

 for(let i = 0; i < matriz.length; i++) {
  somaDiagonalSecundaria += matriz[i]
[matriz.length - 1 - i];
 }

 console.log("A soma dos elementos da diagonal secundária é:", somaDiagonalSecundaria);
}