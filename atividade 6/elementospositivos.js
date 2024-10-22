const matriz = [
 [4, 6, 8],
 [10, 12, 14],
 [16, 18, 20]
];

let todosPostivos = true;

for(let i = 0; i < matriz.length; i++) {
 for(let j = 0; j < matriz[i].length; j++){
   if(matriz[i][j] <= 0) {
    todosPostivos = false;
    break
   }
   if(!todosPostivos)break;  
 }
}

if(todosPostivos) {
 console.log("Todos os elementos são positivos.");
} else {
    console.log("Nem todos os elementos são positivos.")
}