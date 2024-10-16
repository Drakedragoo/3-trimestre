function ehPalindromo(palavra) {
    
    const palavraLimpa = palavra.toLowerCase().replace(/\s/g, '');

    
    const palavraInvertida = palavraLimpa.split('').reverse().join('');

    
    return palavraLimpa === palavraInvertida;
}

console.log(ehPalindromo("radar"))