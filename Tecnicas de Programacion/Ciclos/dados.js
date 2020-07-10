let readlineSync=require ("readline-sync");
let cantidadDados=readlineSync.questionInt("Ingrese la cantidad de dados: ");
let posibilidadesDenominador=6
for (i=1; i<cantidadDados;i++) {
    posibilidadesDenominador=posibilidadesDenominador*6;
}
console.log (`Las posibilidades de acertar ${cantidadDados} dado(s) con la cara numero 6 hacia arriba es de 1/${posibilidadesDenominador}`);