const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function perguntar() {
    rl.question("Digite algo(ou sair para encerrar:)", (input) => {
        if(input.toLowerCase() === 'sair') {
            console.log("Você saiu do programa!");
            rl.close();
        } else {
            console.log("Você digitou: " +input)
            perguntar();
        }
    })
}

perguntar()