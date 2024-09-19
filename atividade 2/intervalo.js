function isNumeroNoIntervalo(numero) {
    return numero >= 10 && numero <= 20;
}

const numero = 15;

if (isNumeroNoIntervalo(numero)) {
    console.log("O número está dentro do intervalo de 10 a 20.");
} else {
    console.log("O número não está dentro do intervalo de 10 a 20.");
}
