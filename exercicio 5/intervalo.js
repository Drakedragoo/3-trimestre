function estaNoIntervalo(numero, minimo, maximo) {
    
  return numero >= minimo && numero <= maximo;
}
  
const numero = 5;
const minimo = 1; 
const maximo = 10;
  
const estaDentro = estaNoIntervalo(numero, minimo, maximo);
console.log(`O número ${numero} está no intervalo? ${estaDentro}`);