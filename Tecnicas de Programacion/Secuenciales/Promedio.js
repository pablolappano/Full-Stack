//AUTOS DE CARRERA
let readlineSync = require('readline-sync'); 
let vuelta1 = readlineSync.questionFloat("Ingrese el tiempo de la 1ra. vuelta: ");
let vuelta2 = readlineSync.questionFloat("Ingrese el tiempo de la 2da. vuelta: ");
let vuelta3 = readlineSync.questionFloat("Ingrese el tiempo de la 3ra. vuelta: ");
let vuelta4 = readlineSync.questionFloat("Ingrese el tiempo de la 4ta. vuelta: ");
let sumaDeTiempos= vuelta1+vuelta2+vuelta3+vuelta4;
let promedio=sumaDeTiempos/4;
console.log ("EL TIEMPO TOTAL ES: " + sumaDeTiempos);
console.log ("EL PROMEDIO DE VUELTA ES: " + promedio);
