//DESCUENTO OCTUBRE//
let readlineSync = require("readline-sync");
let precioUnitario = readlineSync.questionFloat("Ingrese el precio unitario: ");
let unidades = readlineSync.questionFloat("Ingrese la cantidad: ");
let mes = readlineSync.question("Ingrese el mes en que se realizo la compra: ");
let precioNeto = precioUnitario * unidades;
let descuento = 0.15
let precioConDescuento = precioNeto - (precioNeto * descuento);
if (mes == "octubre" || mes=="OCTUBRE") {
    console.log("El importe a abonar es de $", precioConDescuento, "con un descuento del 15% aplicado");
}
else {
    console.log("El importe a abonar es de $", precioNeto);
}