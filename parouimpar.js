function verificarParOuImpar(numero) {
   
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Par";
    } else {
        resultado = "Ímpar";
    }

    let mensagem = "O número " + numero + " é " + resultado + ".";
    console.log(mensagem);
}

verificarParOuImpar(4)
verificarParOuImpar(7)
