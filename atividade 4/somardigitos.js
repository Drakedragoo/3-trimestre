let numero = 123;

let soma = 0;

while(numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log("A soma dos dígitos é:" +soma)