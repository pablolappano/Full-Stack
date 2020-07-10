let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero: ");
let resto = numero % 2;
let resultado;
if (resto == 0) {
    resultado = ("par")
} else { resultado = ("impar") }
if (numero == 0) {
    console.log("El numero ingresado es 0");
} else {
    console.log("El numero ingresado es:", resultado);
}
