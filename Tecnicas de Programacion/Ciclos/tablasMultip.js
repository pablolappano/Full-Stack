let readlineSync = require ("readline-sync");
let tabla=readlineSync.questionInt ("Ingrese la tabla que desea visualizar: ");
let maximo=readlineSync.questionInt ("Ingrese el numero maximo a representar en la tabla: ");
let contador=0
let resultado
if (tabla==0 || maximo==0){
    console.log ("Todo numero multiplicado por 0 da como resultado 0")
}else{
     while (contador<maximo) {
     contador++
     resultado=tabla*contador;
     console.log (tabla, " x ",contador," = ",resultado);
     }
}