function calcular(num1, num2, operacao,) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("Divisão por zero não é permitida.");
            }
        default:
            throw new Error("Operação inválida: " + operacao);
    }
}

function ePalindromo(texto) {
    const textoLimpo = texto.replace(/\s+/g, '').toLowerCase();
    const comprimento = textoLimpo.length;

    for (let i = 0; i < comprimento / 2; i++) {
        if (textoLimpo[i] !== textoLimpo[comprimento - 1 - i]) {
            return false;
        }
    }
    return true;
}


function calcularEVerificarPalindromo(num1, num2, operacao) {
    try {
        const resultado = calcular(num1, num2, operacao);
        const resultadoComoTexto = resultado.toString();
        const palindromo = ePalindromo(resultadoComoTexto);
        return {
            resultado: resultado,
            ePalindromo: palindromo
        };
    } catch (error) {
        return {
            erro: error.message
        };
    }
}

const num1 = 121;
const num2 = 121;
const operacao = '+';

const resultado = calcularEVerificarPalindromo(num1, num2, operacao);
if (resultado.erro) {
    console.error("Erro:", resultado.erro);
} else {
    console.log("Resultado:", resultado.resultado);
    console.log("É palíndromo:", resultado.ePalindromo);
}
