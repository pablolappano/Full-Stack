let readlineSync=require("readline-sync");
let size=readlineSync.questionInt("Cuantos numeros desea ingresar?: ");
let arregloNumeros = new Array (size);

for (let i=0;i<size;i++) {
    arregloNumeros[i]=readlineSync.questionInt(`Ingrese el ${i+1} numero:`);
}

for (let i=(size)-1;i>=0;i--){
    console.log (arregloNumeros[i]);
}