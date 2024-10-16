const numeros = [2, 3, 5, 6, 78, 97, 100]
const numerosPares = numeros.filter(numero => numero %2 === 0)
const numerosImpares = numeros.filter(numero => numero %2 === 1)

console.log(numerosPares)
console.log(numerosImpares)