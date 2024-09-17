function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Erro: DIvisão por zero";
            
            }
            default:
                return "Operação inválida";
    }
}

function verificarPalindromo(str) {
    const limpaStr = str.toString().replace(/[^a-zA-ZO-9]/g, '').toLowerCase();
    const strReversa = limpaStr.split('').reverse().join('');
    return limpaStr === strReversa;
}

function calcularEVerificar(numero1, numero2, operacao) {
    const resultado = calcular (numero1, numero2, operacao);

    if (typeof resultado === 'number') {
        return verificarPalindromo(resultado);
    } else {
        return resultado;
    }
}

console.log(calcularEVerificar(121, 121, '+'));
console.log(calcularEVerificar(123, 321, '-'))
console.log(calcularEVerificar(11, 22, '*'))
console.log(calcularEVerificar(121, 11, '/'))