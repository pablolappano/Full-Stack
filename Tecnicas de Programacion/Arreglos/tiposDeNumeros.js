let readlineSync=require("readline-sync");
let size=readlineSync.questionInt("Ingrese la cantidad de numeros a procesar: ");
let numeros = new Array(size);
let numerosIngresados=0
let negativos=0
let positivos=0
let ceros=0

for (let i=0;i<size;i++){
    numeros[i]=readlineSync.questionInt(`Ingrese el ${i+1} numero:`);
}

for (let i=0;i<size;i++){
    if (numeros[i]==0) {
        ceros=ceros+1;
    }else if (numeros[i]>0){
        positivos=positivos+1;
        }else{negativos=negativos+1
        }
    }

console.log(`La salida es: ${positivos} positivo(s) | ${negativos} negativo(s) | ${ceros} cero(s)`);
