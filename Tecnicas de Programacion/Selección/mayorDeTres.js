//MAYOR DE 3 NUMEROS//
let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("Ingrese el primer numero: ");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero: ");
let tercerNumero = readlineSync.questionInt("Ingrese el tercer numero: ");
if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    console.log("El número mayor es: ", primerNumero);

}
if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
    console.log("El número mayor es: ", segundoNumero);

}
if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
    console.log("El número mayor es: ", tercerNumero);

}
if (primerNumero == segundoNumero && segundoNumero == tercerNumero) {
    console.log("Los 3 numeros son iguales!!");
}

