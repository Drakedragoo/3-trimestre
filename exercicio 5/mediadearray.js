function calcularMedia(numeros) {
   
  if (numeros.length === 0) {
    return "O array está vazio";
  }
  
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  
  const media = soma / numeros.length;
  
  return media;
}

const notas = [8, 7, 9, 10, 6];

const mediaDasNotas = calcularMedia(notas);

console.log("A média das notas é:", mediaDasNotas);