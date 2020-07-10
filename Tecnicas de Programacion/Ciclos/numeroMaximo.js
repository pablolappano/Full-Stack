let readlineSync = require ("readline-sync");
let numeroMaximo=0;
let numero
while (numero!=0){
    numero=readlineSync.questionInt ("Ingrese un numero: ");
    if (numero>numeroMaximo){
        numeroMaximo=numero;
    }
}
console.log ("El maximo es: ",numeroMaximo);
    
