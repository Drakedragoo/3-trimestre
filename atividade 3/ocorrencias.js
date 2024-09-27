function contarOcorrencias(arr, valorBuscado) {
    let contagem = 0; 

    for (let elemento of arr) {
        if (elemento === valorBuscado) {
            contagem++; 
        }
    }

    console.log(`O valor ${valorBuscado} aparece ${contagem} vez(es) no array.`);
}

const arrayNumeros = [1, 2, 3, 2, 4, 2, 5];
const valorParaContar = 2;
const valorInexistente = 6;

contarOcorrencias(arrayNumeros, valorParaContar);      
contarOcorrencias(arrayNumeros, valorInexistente);     
