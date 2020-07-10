
let readlineSync = require("readline-sync");
let sueldoActual = readlineSync.questionInt("Ingrese el sueldo actual:");
let porcentajeAumento;
let sueldoConAumento
if (sueldoActual <= 15000) {
    porcentajeAumento = 20;
}
if (sueldoActual > 15000 && sueldoActual <= 20000) {
    porcentajeAumento = 10;
}
if (sueldoActual > 20000 && sueldoActual <= 25000) {
    porcentajeAumento = 5;
}
if (sueldoActual > 25000) {
    porcentajeAumento = 0;
}
sueldoConAumento = sueldoActual + sueldoActual * (porcentajeAumento / 100);
switch (porcentajeAumento) {
    case 20:
        console.log("Su sueldo actual de $" + sueldoActual + ", con el incremento del " + porcentajeAumento + "%, quedará en $" + sueldoConAumento);
        break;
    case 10:
        console.log("Su sueldo actual de $" + sueldoActual + ", con el incremento del " + porcentajeAumento + "%, quedará en $" + sueldoConAumento);
        break;
    case 5:
        console.log("Su sueldo actual de $" + sueldoActual + ", con el incremento del " + porcentajeAumento + "%, quedará en $" + sueldoConAumento);
        break;
    case 0:
        console.log("Su sueldo actual de $" + sueldoActual + " (no recibe aumento)");
        break;
}
