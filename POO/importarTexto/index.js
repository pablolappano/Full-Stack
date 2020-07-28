"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var texto = fs.readFileSync('index.txt', 'utf-8');
var palabras = texto.split(" ");
var opcion;
console.log(palabras);
var insertarPalabra = function (opcion) {
    if (opcion == 1) {
        var nuevaPalabra = readlineSync.question("Ingrese palabra a insertar: ");
        palabras.push(nuevaPalabra);
        console.log(palabras);
    }
};
var eliminarPalabra = function (opcion) {
    if (opcion == 2) {
        var palabraAEliminar = readlineSync.question("Ingrese palabra a eliminar: ");
        var indiceEncontrado = palabras.indexOf((palabraAEliminar));
        if (indiceEncontrado != -1) {
            palabras.splice(indiceEncontrado, 1);
            console.log(palabras);
        }
        else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};
var buscarPalabra = function (opcion) {
    if (opcion == 3) {
        var palabraABuscar = readlineSync.question("Ingrese palabra a buscar: ");
        var indiceEncontrado = palabras.indexOf((palabraABuscar));
        if (indiceEncontrado != -1) {
            console.log("--------------------------------------------");
            console.log("La Palabra " + palabraABuscar + " se encuentra en la " + (indiceEncontrado + 1) + " posicion");
            console.log("--------------------------------------------");
            console.log("");
        }
        else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};
var reemplazarPalabra = function (opcion) {
    if (opcion == 4) {
        var palabraAReemplazar = readlineSync.question("Ingrese palabra a reemplazar: ");
        var indiceEncontrado = palabras.indexOf((palabraAReemplazar));
        if (indiceEncontrado != -1) {
            var nuevaPalabra = readlineSync.question("Por que palabra la desea reemplazar?: ");
            palabras.splice(indiceEncontrado, 1, nuevaPalabra);
            console.log(palabras);
        }
        else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};
while (opcion != 0) {
    console.log("Para insertar una palabra opcion  (1)");
    console.log("Para eliminar una palabra opcion  (2)");
    console.log("Para buscar una palabra opcion    (3)");
    console.log("Para modificar una palabra opcion (4)");
    console.log("Para salir presione               (0)");
    opcion = readlineSync.questionInt("Ingrese opcion:");
    insertarPalabra(opcion);
    eliminarPalabra(opcion);
    buscarPalabra(opcion);
    reemplazarPalabra(opcion);
}
