function verificarPositivos(arr) {
    for (let numero of arr) {
        if (numero < 0) {
            console.log("Há um número negativo:", numero);
            return; 
        }
    }

    console.log("Todos os números são positivos.");
}


const arrayPositivos = [1, 2, 3, 4, 5];
const arrayComNegativos = [1, -2, 3, 4];

verificarPositivos(arrayPositivos);      
verificarPositivos(arrayComNegativos);   
