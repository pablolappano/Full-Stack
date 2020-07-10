let readlineSync = require ("readline-sync");
let numeroMinimo=0;
let numero
while (numero!=0){
    numero=readlineSync.questionInt ("Ingrese un numero: ");
    if (numero<numeroMinimo){
        numeroMinimo=numero;
    }
}
console.log ("El minimo es: ",numeroMinimo);
    
