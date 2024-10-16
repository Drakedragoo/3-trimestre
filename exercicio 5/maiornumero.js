function encontrarMaior(num1, num2) {
    
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
  
const numero1 = 10;
const numero2 = 5;

const maiorNumero = encontrarMaior(numero1, numero2);
console.log("O maior número é:", maiorNumero);