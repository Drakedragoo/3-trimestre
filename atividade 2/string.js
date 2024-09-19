function isStringVazia(str) {
    return str.trim().length === 0;
}

const str1 = " ";
const str2 = "Hello";

if (isStringVazia(str1)) {
    console.log("A string está vazia.");
} else {
    console.log("A string não está vazia.");
}

if (isStringVazia(str2)) {
    console.log("A string está vazia.");
} else {
    console.log("A string não está vazia.");
}
