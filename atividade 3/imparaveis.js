function somaImpares(arr) {
    let soma = 0;
    let encontrouImpares = false;

    for (let numero of arr) {
        if (numero % 2 !== 0) {
            soma += numero;
            encontrouImpares = true; 
        }
    }

    if (encontrouImpares) {
        console.log("A soma total dos números ímpares é:", soma);
    } else {
        console.log("Não foram encontrados números ímpares.");
    }
}

const arrayNumeros = [1, 2, 3, 4, 5, 6];
const arraySemImpares = [2, 4, 6, 8];

somaImpares(arrayNumeros);       
somaImpares(arraySemImpares);    
