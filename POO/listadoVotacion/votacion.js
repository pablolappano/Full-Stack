"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var nombresDesordenados = fs.readFileSync('nombres.txt', 'utf-8');
var escuelasDesordenadas = fs.readFileSync('escuelas.txt', 'utf-8');
var nombresOrdenados = nombresDesordenados.split(",");
var escuelasOrdenadas = escuelasDesordenadas.split(";");
var nombreABuscar;
nombresOrdenados.sort();
console.log(nombresOrdenados);
var buscarNombre = function (nombreABuscar) {
    if (nombreABuscar != "") {
        var indiceEncontrado = nombresOrdenados.indexOf((nombreABuscar));
        if (indiceEncontrado != -1) {
            console.log("--------------------------------------------");
            console.log(nombreABuscar + " votara en " + elegirEscuela(indiceEncontrado));
            console.log("--------------------------------------------");
            console.log("");
        }
        else {
            console.log("---------------------------");
            console.log("el nombre no fue encontrado");
            console.log("---------------------------");
            console.log("");
        }
    }
};
var elegirEscuela = function (posicionNombre) {
    var escuelaAsignada = (((posicionNombre + 1) * escuelasOrdenadas.length) / nombresOrdenados.length);
    var escuelaAsignadaEntero = Math.floor(escuelaAsignada);
    if (escuelaAsignadaEntero == escuelasOrdenadas.length) {
        escuelaAsignadaEntero--;
    }
    return escuelasOrdenadas[escuelaAsignadaEntero];
};
while (nombreABuscar != "") {
    nombreABuscar = readlineSync.question("Ingrese apellido y nombre (todo mayuscula y sin coma) o enter para salir: ");
    buscarNombre(nombreABuscar);
}
