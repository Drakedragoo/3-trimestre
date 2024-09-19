function isMaiorDeIdade(idade) {
    return idade >= 18;
}

const idade = 20;
if (isMaiorDeIdade(idade)) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa não é maior de idade.");
}
