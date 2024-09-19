function podeVotar(idade) {
    return idade >= 18;
}

const idade = 17;

if (podeVotar(idade)) {
    console.log("A pessoa pode votar.");
} else {
    console.log("A pessoa não pode votar.");
}
