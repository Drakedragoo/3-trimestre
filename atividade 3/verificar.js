function verificarArray(arr) {
    for (let elemento of arr) {
       
        console.log("O array não está vazio.");
        return; 
    }
    
    
    console.log("O array está vazio.");
}

const arrayVazio = [];
const arrayComElementos = [1, 2, 3];

verificarArray(arrayVazio);  
verificarArray(arrayComElementos); 


