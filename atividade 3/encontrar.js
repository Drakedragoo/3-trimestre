function encontrarNumeroEspecifico(arr, numeroBuscado) {
    for (let numero of arr) {
        if (numero === numeroBuscado) {
            console.log(`O número ${numeroBuscado} foi encontrado.`);
            return;
        }
    }

    console.log(`O número ${numeroBuscado} não está no array.`);
}

const arrayNumeros = [10, 20, 30, 40, 50];
const numeroParaEncontrar = 30;
const numeroInexistente = 60;

encontrarNumeroEspecifico(arrayNumeros, numeroParaEncontrar); 
encontrarNumeroEspecifico(arrayNumeros, numeroInexistente);   
