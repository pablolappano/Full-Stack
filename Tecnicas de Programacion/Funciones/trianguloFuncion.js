let readlineSync=require("readline-sync");
let base=readlineSync.questionInt("ingrese la base: ");
let altura=readlineSync.questionInt("ingrese la altura: ");

let area=(baseF,alturaF) => {
    let areaF=baseF*alturaF;
    return areaF;
}

console.log("el area es: "+area(base,altura));









