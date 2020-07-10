let readlineSync = require('readline-sync');
let primerNumero = readlineSync.questionInt("Ingrese el primer número: ");
console.log("el primer número es", primerNumero);
let segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");
console.log("el segundo número es", segundoNumero);
let resultado=primerNumero+segundoNumero
console.log("el resultado de la suma es: "+resultado)