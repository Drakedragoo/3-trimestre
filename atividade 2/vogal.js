function isVogal(caractere) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vogais.includes(caractere);
}

const caractere = 'a';

if (isVogal(caractere)) {
    console.log(`${caractere} é uma vogal.`);
} else {
    console.log(`${caractere} não é uma vogal.`);
}
