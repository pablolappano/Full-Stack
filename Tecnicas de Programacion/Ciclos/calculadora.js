let readlineSync=require ("readline-sync");
let primerNumero=readlineSync.questionInt("ingrese el primer numero: ");
let segundoNumero=readlineSync.questionInt("ingrese el segundo numero: ");
let operacion=readlineSync.questionInt("ingrese 1 para sumar y 2 para restar: ");
let resultado
let calculo =(numeroA,numeroB,numeroC) => {
    if (numeroC==1) {
        resultado=numeroA+numeroB
        return resultado
    }
    if (numeroC==2) {
        resultado=numeroA-numeroB
        return resultado
    }
}
console.log (calculo(primerNumero,segundoNumero,operacion));

