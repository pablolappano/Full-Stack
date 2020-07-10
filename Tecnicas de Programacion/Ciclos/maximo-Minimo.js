let readlineSync = require ("readline-sync");
let numero=readlineSync.questionInt ("Ingrese un numero: ");
let maximo=numero
let minimo=numero
let contador=1;
let suma=numero
let promedio;

while (numero!=0){
    numero=readlineSync.questionInt ("Ingrese un numero: ");
    if (numero !=0) {
        contador++
        suma=suma+numero;
    }
    if (numero>maximo && numero!=0){
        maximo=numero;
    }
    if (numero<minimo && numero!=0){
        minimo=numero;
    }
}
promedio=suma/contador;
console.log ("el numero maximo es:",maximo);
console.log ("el numero minimo es:",minimo);
console.log ("el promedio de todos los numeros ingresados es:", promedio);
