let readlineSync=require("readline-sync"); 
let numeroUNo=readlineSync.questionInt("Ingrese el primer numero: ");
let numeroDos=readlineSync.questionInt("Ingrese el segundo numero: "); 
let suma = 0; 
let indice=numeroUNo; 


while(indice<=numeroDos){ 
    suma=suma+indice; 
    indice++; 

} 
console.log("La suma es= " + suma); 
