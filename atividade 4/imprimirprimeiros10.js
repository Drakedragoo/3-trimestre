let quantidade = 10;

let a = 0;
let b = 1;

console.log(a)

for(let i = 1;i < quantidade; i++) {
    console.log(b);
    let proximo = a + b;
    a = b;
    b = proximo;
}