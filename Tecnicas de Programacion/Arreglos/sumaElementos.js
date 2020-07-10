let readlineSync=require ("readline-sync");
let cantidadElementos=readlineSync.questionInt("Introduzca la cantidad de numeros a sumar:");
let numeros=new Array (cantidadElementos)
let suma=0

for (let indice=0;indice<cantidadElementos;indice++) {
    numeros [indice]=readlineSync.questionInt("ingrese numero:");
    suma=numeros [indice] +suma;
    console.log (numeros [indice]);
    }
    console.log (`El resultado de la suma es ${suma}`);


