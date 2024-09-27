function encontrarMaior(arr) {
    if (arr.length === 0) {
        console.log("O array está vazio.");
        return; 
    }

    let maior = arr[0]; 

    for (let numero of arr) {
        if (numero > maior) {
            maior = numero;
        }
    }

    console.log("O maior número encontrado é:", maior);
}


const arrayNumeros = [3, 5, 7, 2, 8, 1];
const arrayVazio = [];

encontrarMaior(arrayNumeros); 
encontrarMaior(arrayVazio);    
