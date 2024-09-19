function isDivisivelPor3e5(numero) {
    return numero % 3 === 0 && numero % 5 === 0;
}

const numero = 15;

if (isDivisivelPor3e5(numero)) {
    console.log("O número é divisível por 3 e 5.");
} else {
    console.log("O número não é divisível por 3 e 5.");
}
