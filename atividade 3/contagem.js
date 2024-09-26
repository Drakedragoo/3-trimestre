const numbers = [1, 3, 5, 7, 9, 11, 10, 13];
let count = 0;

numbers.forEach((num) => {
    if(num % 2 === 0) {
        count++;
    }
});

if(count > 0) {
    console.log(`Foram encontrados ${count} números pares.`);
} else {
    console.log("Nenhum número par foi encontrado.");
}