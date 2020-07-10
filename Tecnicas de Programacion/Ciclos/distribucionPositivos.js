let readlineSync = require ("readline-sync");
let numero
let mayoresQueCero=0;
let contador=0
let porcentaje

while (numero!=0){
    numero=readlineSync.questionInt ("Ingrese un numero: ");
    if (numero !=0) {
        contador++
    }
    if (numero>0){
        mayoresQueCero=mayoresQueCero+1;
    }
}
porcentaje=mayoresQueCero*100/contador
console.log (mayoresQueCero, "positivos,",porcentaje,"% del total" );