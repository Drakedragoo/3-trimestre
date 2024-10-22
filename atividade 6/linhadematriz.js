const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

matriz.forEach((linha, index) => {
    const somaLinha = linha.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    console.log(`A soma dos elementos da linha ${index + 1} é: ${somaLinha}`);
});