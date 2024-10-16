function fatorial(n) {
    if(n === 0 | n === 1) {
        return 1;
    }
     return n * fatorial(n - 1)
 }
 
 const numero = 5
 const resultado = fatorial(numero)
 console.log(`O fatorial de ${numero} é ${resultado}.`)