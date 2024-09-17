function ehPalindromo(str) {
    str = str.replace(/\s+/g,'').toLowerCase();

    return str === str.split('').reverse().join('');
}

const frase = "A man a plan a canal Panama";
if (ehPalindromo(frase)) {
    console.log(`${frase} é um palíndromo.`);
} else {
    console.log(`${frase} não é um palíndromo.`);
}
