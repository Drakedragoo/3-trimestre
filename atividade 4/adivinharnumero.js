const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 3;

console.log("Adivinhe o número entre 1 e 10");

function perguntar() {
    rl.question("Digite seu palpite",(palpite) => {
        tentativas++;
        palpite = parseInt(palpite);

        if(palpite < numeroAleatorio) {
            console.log("Muito baixo! Tente novamente.");
            perguntar();
        } else if (palpite > numeroAleatorio) {
            console.log("Muito alto! Tente novamente.");
            perguntar();
        } else {
            console.log("Parabéns! Você acertou o número em" +tentativas+"tentativas.");
            rl.close();
        }
    });
}

perguntar();