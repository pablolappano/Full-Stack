let readlineSync=require("readline-sync");
let primerArreglo= new Array(6); 
let segundoArreglo= new Array(6);
let resultados= new Array(6);

for (let i=0;i<6;i++){
    primerArreglo[i]=readlineSync.questionInt(`Ingrese el ${i+1} numero de la primer serie: `);
}
for (let i=0;i<6;i++){
    segundoArreglo[i]=readlineSync.questionInt(`Ingrese el ${i+1} numero de la segunda serie: `);
}
for (let i=0;i<6;i++){
    resultados[i]=primerArreglo[i]+segundoArreglo[i];
}
for (let i=0;i<6;i++){
    console.log(`El ${i+1} resultado es: ${resultados[i]}`);
}