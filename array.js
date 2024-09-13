const numeros = [12, 5, 8, 23, 7, 18, 3];

const maiorNumero = Math.max(...numeros);
const menorNumero = Math.min(...numeros);

const numerosPares = numeros.filter(num => num % 2 === 0);

console.log(`O maior número do array é ${maiorNumero}.`);
console.log(`O menor número do array é ${menorNumero}.`);
console.log(`Os números pares no array são ${numerosPares}.`);