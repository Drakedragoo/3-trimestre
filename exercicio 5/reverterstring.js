function inverterString(texto) {
  let textoInvertido = '';
  
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  
  return textoInvertido;
}
  
const minhaString = "Olá, mundo!";
const stringInvertida = inverterString(minhaString);
  
console.log(stringInvertida);