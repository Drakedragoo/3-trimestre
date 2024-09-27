function procurarPrimeiroNegativo(arr) {
    for (let numero of arr) {
        if (numero < 0) {
            console.log(`O primeiro número negativo encontrado é: ${numero}`);
            return; 
        }
    }

    console.log("Não há números negativos na lista.");
}


const listaNumeros = [1, 2, -3, 4, 5];
const listaSemNegativos = [1, 2, 3, 4, 5];

procurarPrimeiroNegativo(listaNumeros);      
procurarPrimeiroNegativo(listaSemNegativos); 
